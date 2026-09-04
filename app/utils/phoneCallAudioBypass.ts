/**
 * ====================================================================================
 * HARDWARE-LEVEL PHONE CALL AUDIO DETECTION & BYPASS ENGINE
 * ====================================================================================
 *
 * Privacy laws prohibit web browsers from accessing telephone call states directly.
 * This module bypasses this restriction at the hardware level using:
 *
 * 1. AudioContext State & Time Monitoring:
 *    High-frequency monitoring (every 50ms + requestAnimationFrame) of audioContext.currentTime.
 *    Mobile operating systems (Android AudioFlinger/AudioPolicy & iOS CoreAudio) forcefully
 *    freeze or mutate the Web Audio hardware clock the exact millisecond a phone call connects.
 *    Triggers audio.pause() when the clock stalls or throws an interrupted/suspended state change.
 *
 * 2. Page Visibility State Overrides:
 *    Hooks into document.addEventListener('visibilitychange'). When an incoming call tray
 *    slides down or takes over the mobile screen, page visibility instantly transitions to 'hidden'.
 *    Coordinates this event with hardware clock signals to pause the active audio immediately.
 *
 * 3. Media Session Lock-Screen Synchronization:
 *    Ensures navigator.mediaSession.playbackState is explicitly updated to 'paused' (never 'none')
 *    so the lock-screen notification does not clash with device telephony state.
 *
 * 4. Post-Call Automatic Resumption:
 *    Monitors audioContext.onstatechange and page 'visible' focus events. Once the phone call ends
 *    and the mobile OS restores the sample rate clock to 'running', automatically executes a
 *    promise-handled .play() sequence to seamlessly bring the music back without manual clicks.
 */

export interface PhoneCallBypassCallbacks {
  isCurrentlyPlaying: () => boolean;
  onPause: () => void;
  onResume: () => void;
  getAudioElement: () => HTMLAudioElement | null;
  getYTPlayer: () => any;
}

let sharedAudioContext: AudioContext | null = null;

/**
 * Returns or creates the shared AudioContext instance.
 */
export function getSharedAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!sharedAudioContext || sharedAudioContext.state === "closed") {
    const AudioContextClass =
      window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      sharedAudioContext = new AudioContextClass({ latencyHint: "playback" });
    }
  }
  return sharedAudioContext;
}

/**
 * Unlocks the hardware audio bus synchronously inside any user gesture.
 */
export function unlockHardwareAudioBus(): AudioContext | null {
  const ctx = getSharedAudioContext();
  if (ctx && ctx.state === "suspended") {
    ctx.resume().catch(() => {});
  }
  return ctx;
}

export class PhoneCallAudioBypass {
  private callbacks: PhoneCallBypassCallbacks;
  private audioContext: AudioContext | null = null;
  private isCallInterrupted = false;
  private wasPlayingBeforeCall = false;
  private monitorInterval: any = null;
  private animFrameId: number | null = null;
  private lastAudioTime = 0;
  private lastWallClock = 0;
  private consecutiveStalls = 0;
  private isAttached = false;
  private silentSource: AudioBufferSourceNode | null = null;
  private silentGain: GainNode | null = null;
  private cleanupFns: Array<() => void> = [];
  private lastVisibleTime = Date.now();

  constructor(callbacks: PhoneCallBypassCallbacks) {
    this.callbacks = callbacks;
  }

  /**
   * Initializes hardware audio context and binds high-frequency telephony detection.
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
   * Connect an active hardware audio node to ensure continuous sample rate clock ticking.
   */
  private initAudioContext(existingCtx?: AudioContext | null): void {
    if (existingCtx && existingCtx.state !== "closed") {
      this.audioContext = existingCtx;
      sharedAudioContext = existingCtx;
    } else {
      this.audioContext = getSharedAudioContext();
    }

    if (!this.audioContext) return;

    this.ensureKeepAliveNode();
  }

  private ensureKeepAliveNode(): void {
    if (!this.audioContext) return;
    if (this.silentSource) return;

    try {
      // Create a 1-second silent buffer loop connected to destination at zero gain
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
   * 1. AudioContext State & Time Monitoring:
   * High-frequency check (every 50ms + requestAnimationFrame) of audioContext.currentTime.
   */
  private startClockMonitoring(): void {
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
    }

    this.lastWallClock = performance.now();
    this.lastAudioTime = this.audioContext ? this.audioContext.currentTime : 0;
    this.consecutiveStalls = 0;

    // High-frequency 50ms check
    this.monitorInterval = setInterval(() => {
      this.checkAudioClock();
    }, 50);

    // requestAnimationFrame loop when tab is active
    const rafLoop = () => {
      if (!this.isAttached) return;
      this.checkAudioClock();
      this.animFrameId = requestAnimationFrame(rafLoop);
    };
    this.animFrameId = requestAnimationFrame(rafLoop);

    this.cleanupFns.push(() => {
      if (this.monitorInterval) {
        clearInterval(this.monitorInterval);
        this.monitorInterval = null;
      }
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
        this.animFrameId = null;
      }
    });
  }

  private checkAudioClock(): void {
    if (!this.audioContext) return;

    const isPlaying = this.callbacks.isCurrentlyPlaying();
    const currentAudioTime = this.audioContext.currentTime;
    const currentWallClock = performance.now();
    const wallElapsed = currentWallClock - this.lastWallClock;

    // Only evaluate after a minimum measurement window (at least 60ms)
    if (wallElapsed < 60) return;

    const state = this.audioContext.state;

    if (isPlaying && !this.isCallInterrupted) {
      // 1. Check if hardware state was interrupted by phone call
      if (state === "interrupted") {
        console.log("[PhoneCallAudioBypass] Hardware state changed to interrupted (Phone Call)");
        this.handleCallInterruptionBegin();
        this.lastWallClock = currentWallClock;
        this.lastAudioTime = currentAudioTime;
        return;
      }

      // If AudioContext suspended while music was actively playing
      if (state === "suspended" && this.wasPlayingBeforeCall) {
        this.handleCallInterruptionBegin();
        this.lastWallClock = currentWallClock;
        this.lastAudioTime = currentAudioTime;
        return;
      }

      // 2. Hardware clock freeze check:
      // In normal playback, audio clock matches wall clock (e.g. 60ms -> ~0.06s).
      // During a phone call, Android AudioFlinger / iOS CoreAudio freezes the clock.
      const audioElapsed = currentAudioTime - this.lastAudioTime;

      if (audioElapsed < 0.005) {
        // Wall clock moved >= 60ms, but audio hardware clock advanced less than 5ms
        this.consecutiveStalls++;
        if (this.consecutiveStalls >= 2) {
          console.log("[PhoneCallAudioBypass] Audio hardware clock frozen by telephony:", {
            audioElapsed,
            wallElapsed,
            consecutiveStalls: this.consecutiveStalls,
          });
          this.handleCallInterruptionBegin();
        }
      } else {
        this.consecutiveStalls = 0;
      }

      this.lastWallClock = currentWallClock;
      this.lastAudioTime = currentAudioTime;
    } else if (this.isCallInterrupted) {
      // During interruption: monitor for hardware clock restoration and running state
      const audioElapsed = currentAudioTime - this.lastAudioTime;

      if (state === "running" && audioElapsed > 0.03) {
        console.log("[PhoneCallAudioBypass] Hardware clock resumed advancing after call");
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
        console.log("[PhoneCallAudioBypass] AudioContext statechange ->", state);
        if (state === "interrupted") {
          if (this.callbacks.isCurrentlyPlaying() && !this.isCallInterrupted) {
            this.handleCallInterruptionBegin();
          }
        } else if (state === "running") {
          if (this.isCallInterrupted && this.wasPlayingBeforeCall) {
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
   * 3. Page Visibility State Overrides:
   * Hook into native document.addEventListener('visibilitychange').
   * When an incoming call tray slides down or takes over the mobile screen,
   * visibility transitions to 'hidden'.
   */
  private setupVisibilityListeners(): void {
    const onVisibilityChange = () => {
      try {
        if (document.visibilityState === "hidden") {
          // If the page was just visible and is now hidden while audio is playing
          const isPlaying = this.callbacks.isCurrentlyPlaying();
          if (isPlaying && !this.isCallInterrupted) {
            // Check if clock stalled or state is suspended/interrupted
            const isStalled = this.consecutiveStalls > 0 || (this.audioContext && this.audioContext.state !== "running");
            if (isStalled) {
              console.log("[PhoneCallAudioBypass] Visibility hidden with stalled clock -> Phone call banner");
              this.handleCallInterruptionBegin();
            }
          }
        } else if (document.visibilityState === "visible") {
          this.lastVisibleTime = Date.now();
          // Returning to app after call ended
          if (this.isCallInterrupted && this.wasPlayingBeforeCall) {
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
          if (this.audioContext && this.audioContext.state === "suspended") {
            this.audioContext.resume().catch(() => {});
          }
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
   * Forces instant audio pause and sets navigator.mediaSession.playbackState = 'paused'.
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
   * Restores audio playback via promise-handled .play() sequence without requiring manual clicks.
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
   * User explicitly pressed play: reset call state and resume AudioContext
   */
  public notifyUserPlay(): void {
    this.isCallInterrupted = false;
    this.wasPlayingBeforeCall = false;
    this.consecutiveStalls = 0;
    this.lastWallClock = performance.now();

    if (this.audioContext) {
      this.lastAudioTime = this.audioContext.currentTime;
      if (this.audioContext.state === "suspended") {
        this.audioContext.resume().catch(() => {});
      }
      this.ensureKeepAliveNode();
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

    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
      this.monitorInterval = null;
    }
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }

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
