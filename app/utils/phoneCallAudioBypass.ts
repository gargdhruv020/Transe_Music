/**
 * ====================================================================================
 * HARDWARE-LEVEL PHONE CALL AUDIO DETECTION & BYPASS ENGINE
 * ====================================================================================
 *
 * Privacy laws prohibit web browsers from accessing telephone call states directly.
 * This module bypasses this restriction at the hardware level using:
 *
 * 1. AudioContext State & Time Monitoring:
 *    Continuous high-frequency monitoring of audioContext.currentTime.
 *    Mobile operating systems (Android AudioFlinger / iOS CoreAudio) forcefully freeze
 *    or mutate the Web Audio hardware clock the exact millisecond a call connects.
 *    Triggers an instant audio.pause() when the clock stalls or throws a state change.
 *
 * 2. Page Visibility State Overrides:
 *    Hooks into document.visibilitychange. When an incoming call tray slides down
 *    or the dialer takes over the screen, coordinates an instant pause of the active
 *    HTML5 audio element.
 *
 * 3. Media Session Lock-Screen Synchronization:
 *    Ensures navigator.mediaSession.playbackState is updated to 'paused' (never 'none')
 *    so the lock-screen notification does not clash with device call state.
 *
 * 4. Post-Call Automatic Resumption:
 *    Monitors audioContext.onstatechange, visibility 'visible', and focus events.
 *    Once the phone call ends and the OS restores the sample rate clock to 'running',
 *    automatically executes a promise-handled .play() sequence to bring the music back.
 */

export interface PhoneCallBypassCallbacks {
  isCurrentlyPlaying: () => boolean;
  onPause: () => void;
  onResume: () => void;
  getAudioElement: () => HTMLAudioElement | null;
  getYTPlayer: () => any;
}

export class PhoneCallAudioBypass {
  private callbacks: PhoneCallBypassCallbacks;
  private audioContext: AudioContext | null = null;
  private isCallInterrupted = false;
  private wasPlayingBeforeCall = false;
  private clockMonitorInterval: any = null;
  private lastAudioTime = 0;
  private lastWallClock = 0;
  private consecutiveStalls = 0;
  private isAttached = false;
  private silentSource: AudioBufferSourceNode | null = null;
  private silentGain: GainNode | null = null;
  private cleanupFns: Array<() => void> = [];

  constructor(callbacks: PhoneCallBypassCallbacks) {
    this.callbacks = callbacks;
  }

  /**
   * Initializes or binds an AudioContext and starts hardware clock monitoring.
   */
  public attach(existingCtx?: AudioContext | null): void {
    if (typeof window === "undefined" || this.isAttached) return;
    this.isAttached = true;

    try {
      this.initAudioContext(existingCtx);
      this.setupStateChangeListeners();
      this.setupVisibilityListeners();
      this.setupAudioElementInterruptionListeners();
      this.startClockMonitoring();
    } catch (e) {
      console.warn("[PhoneCallAudioBypass] attach warning:", e);
    }
  }

  /**
   * Ensure an active Web Audio context is anchored to the hardware sound driver.
   */
  private initAudioContext(existingCtx?: AudioContext | null): void {
    if (existingCtx && existingCtx.state !== "closed") {
      this.audioContext = existingCtx;
    } else {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioContext = new AudioContextClass({ latencyHint: "playback" });
      }
    }

    if (!this.audioContext) return;

    // Attach a micro silent loop to keep the audio hardware clock running continuously
    try {
      const sampleRate = this.audioContext.sampleRate || 44100;
      const buffer = this.audioContext.createBuffer(1, sampleRate, sampleRate);
      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const gain = this.audioContext.createGain();
      gain.gain.setValueAtTime(0.0, this.audioContext.currentTime);

      source.connect(gain);
      gain.connect(this.audioContext.destination);
      source.start(0);

      this.silentSource = source;
      this.silentGain = gain;
    } catch (_) {}
  }

  /**
   * 1. High-Frequency AudioContext Clock Monitor:
   * Detects hardware clock freeze when an incoming/outgoing call monopolizes the audio DAC.
   */
  private startClockMonitoring(): void {
    if (this.clockMonitorInterval) {
      clearInterval(this.clockMonitorInterval);
    }

    this.lastWallClock = performance.now();
    this.lastAudioTime = this.audioContext ? this.audioContext.currentTime : 0;
    this.consecutiveStalls = 0;

    // Monitor clock every 100ms
    this.clockMonitorInterval = setInterval(() => {
      this.checkAudioClock();
    }, 100);

    this.cleanupFns.push(() => {
      if (this.clockMonitorInterval) {
        clearInterval(this.clockMonitorInterval);
        this.clockMonitorInterval = null;
      }
    });
  }

  private checkAudioClock(): void {
    if (!this.audioContext) return;

    const isPlaying = this.callbacks.isCurrentlyPlaying();
    const currentAudioTime = this.audioContext.currentTime;
    const currentWallClock = performance.now();
    const wallElapsed = currentWallClock - this.lastWallClock;

    // If audio is supposed to be playing
    if (isPlaying && !this.isCallInterrupted) {
      const state = this.audioContext.state;

      // Hardware state forced to suspended or interrupted by OS telephony
      if (state === "interrupted" || (state === "suspended" && wallElapsed > 150)) {
        console.log("[PhoneCallAudioBypass] Hardware AudioContext state changed to:", state);
        this.handleCallInterruptionBegin();
        return;
      }

      // Check if AudioContext hardware clock has frozen
      const audioElapsed = currentAudioTime - this.lastAudioTime;
      if (wallElapsed >= 180) {
        // If 180ms of real time passed but audio clock advanced less than 10ms
        if (audioElapsed < 0.01) {
          this.consecutiveStalls++;
          // 2 consecutive stalled intervals (~360ms) while actively playing indicates hardware freeze
          if (this.consecutiveStalls >= 2) {
            console.log("[PhoneCallAudioBypass] Audio hardware clock frozen by telephony:", {
              audioElapsed,
              wallElapsed,
            });
            this.handleCallInterruptionBegin();
          }
        } else {
          this.consecutiveStalls = 0;
        }

        this.lastWallClock = currentWallClock;
        this.lastAudioTime = currentAudioTime;
      }
    } else if (this.isCallInterrupted) {
      // While call is interrupted, monitor for hardware clock restoration
      const state = this.audioContext.state;
      const audioElapsed = currentAudioTime - this.lastAudioTime;

      if (state === "running" && audioElapsed > 0.05) {
        console.log("[PhoneCallAudioBypass] Hardware clock resumed running after call");
        this.handleCallInterruptionEnd();
      }

      this.lastWallClock = currentWallClock;
      this.lastAudioTime = currentAudioTime;
    } else {
      this.lastWallClock = currentWallClock;
      this.lastAudioTime = currentAudioTime;
      this.consecutiveStalls = 0;
    }
  }

  /**
   * 2. Web Audio API State Change Listeners
   */
  private setupStateChangeListeners(): void {
    if (!this.audioContext) return;

    const onStateChange = () => {
      try {
        const state = (this.audioContext as any)?.state;
        if (state === "interrupted" || state === "suspended") {
          if (this.callbacks.isCurrentlyPlaying() && !this.isCallInterrupted) {
            console.log("[PhoneCallAudioBypass] Statechange -> interrupted/suspended");
            this.handleCallInterruptionBegin();
          }
        } else if (state === "running") {
          if (this.isCallInterrupted && this.wasPlayingBeforeCall) {
            console.log("[PhoneCallAudioBypass] Statechange -> running");
            this.handleCallInterruptionEnd();
          }
        }
      } catch (_) {}
    };

    this.audioContext.addEventListener("statechange", onStateChange);
    this.cleanupFns.push(() => {
      this.audioContext?.removeEventListener("statechange", onStateChange);
    });
  }

  /**
   * 3. Page Visibility & Call Tray Detection Listeners:
   * When an incoming call tray or heads-up banner drops down, page visibility switches to 'hidden'.
   */
  private setupVisibilityListeners(): void {
    const onVisibilityChange = () => {
      try {
        if (document.visibilityState === "hidden") {
          // If the audio clock is also stalled or stalled recently, ensure immediate pause
          if (this.consecutiveStalls > 0 || (this.audioContext && this.audioContext.state !== "running")) {
            if (this.callbacks.isCurrentlyPlaying() && !this.isCallInterrupted) {
              this.handleCallInterruptionBegin();
            }
          }
        } else if (document.visibilityState === "visible") {
          // Returning to app after call ended
          if (this.isCallInterrupted && this.wasPlayingBeforeCall) {
            // Attempt to restore AudioContext and resume
            if (this.audioContext && this.audioContext.state === "suspended") {
              this.audioContext.resume().then(() => {
                this.handleCallInterruptionEnd();
              }).catch(() => {
                this.handleCallInterruptionEnd();
              });
            } else {
              this.handleCallInterruptionEnd();
            }
          }
        }
      } catch (_) {}
    };

    const onWindowFocus = () => {
      try {
        if (this.isCallInterrupted && this.wasPlayingBeforeCall) {
          this.handleCallInterruptionEnd();
        }
      } catch (_) {}
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("focus", onWindowFocus);
    window.addEventListener("pageshow", onWindowFocus);

    this.cleanupFns.push(() => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("focus", onWindowFocus);
      window.removeEventListener("pageshow", onWindowFocus);
    });
  }

  /**
   * 4. Native Audio Element Interruption Listeners (WebKit / iOS CoreAudio)
   */
  private setupAudioElementInterruptionListeners(): void {
    const audio = this.callbacks.getAudioElement();
    if (!audio) return;

    const el = audio as any;
    const onBeginInterruption = () => {
      console.log("[PhoneCallAudioBypass] Native webkitbegininterruption / audioengineinterruption");
      this.handleCallInterruptionBegin();
    };

    const onEndInterruption = () => {
      console.log("[PhoneCallAudioBypass] Native webkitendinterruption");
      this.handleCallInterruptionEnd();
    };

    el.addEventListener("webkitbegininterruption", onBeginInterruption);
    el.addEventListener("webkitendinterruption", onEndInterruption);
    el.addEventListener("audioengineinterruption", onBeginInterruption);

    this.cleanupFns.push(() => {
      try {
        el.removeEventListener("webkitbegininterruption", onBeginInterruption);
        el.removeEventListener("webkitendinterruption", onEndInterruption);
        el.removeEventListener("audioengineinterruption", onBeginInterruption);
      } catch (_) {}
    });
  }

  /**
   * Instant Hardware-Triggered Pause:
   * Monopolizes call audio avoidance by executing instant pause and syncing MediaSession to paused.
   */
  public handleCallInterruptionBegin(): void {
    if (this.isCallInterrupted) return;

    try {
      if (this.callbacks.isCurrentlyPlaying()) {
        this.wasPlayingBeforeCall = true;
        this.isCallInterrupted = true;

        console.log("[PhoneCallAudioBypass] Phone call detected! Forcing instant audio pause.");

        // 1. Instantly pause audio playback
        this.callbacks.onPause();

        // 2. Synchronize Media Session lock-screen widget to paused (NEVER 'none')
        if (typeof window !== "undefined" && "mediaSession" in navigator) {
          try {
            navigator.mediaSession.playbackState = "paused";
          } catch (_) {}
        }
      }
    } catch (e) {
      console.warn("[PhoneCallAudioBypass] handleCallInterruptionBegin error:", e);
    }
  }

  /**
   * Post-Call Automatic Resumption:
   * Smoothly restores audio playback via promise-handled play sequence without manual interaction.
   */
  public handleCallInterruptionEnd(): void {
    if (!this.isCallInterrupted) return;

    try {
      this.isCallInterrupted = false;

      if (this.wasPlayingBeforeCall) {
        this.wasPlayingBeforeCall = false;

        console.log("[PhoneCallAudioBypass] Phone call ended. Auto-resuming music playback.");

        // Resume AudioContext if suspended
        if (this.audioContext && this.audioContext.state === "suspended") {
          this.audioContext.resume().catch(() => {});
        }

        // Execute resume sequence
        this.callbacks.onResume();

        // Synchronize MediaSession back to 'playing'
        if (typeof window !== "undefined" && "mediaSession" in navigator) {
          try {
            navigator.mediaSession.playbackState = "playing";
          } catch (_) {}
        }
      }
    } catch (e) {
      console.warn("[PhoneCallAudioBypass] handleCallInterruptionEnd error:", e);
    }
  }

  /**
   * User explicitly pressed play: reset call state
   */
  public notifyUserPlay(): void {
    this.isCallInterrupted = false;
    this.wasPlayingBeforeCall = false;
    this.consecutiveStalls = 0;
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume().catch(() => {});
    }
  }

  /**
   * User explicitly pressed pause: reset call state
   */
  public notifyUserPause(): void {
    this.isCallInterrupted = false;
    this.wasPlayingBeforeCall = false;
    this.consecutiveStalls = 0;
  }

  public getAudioContext(): AudioContext | null {
    return this.audioContext;
  }

  public isInterrupted(): boolean {
    return this.isCallInterrupted;
  }

  public destroy(): void {
    this.cleanupFns.forEach((fn) => {
      try {
        fn();
      } catch (_) {}
    });
    this.cleanupFns = [];

    if (this.silentSource) {
      try {
        this.silentSource.stop();
        this.silentSource.disconnect();
      } catch (_) {}
      this.silentSource = null;
    }

    this.isAttached = false;
  }
}
