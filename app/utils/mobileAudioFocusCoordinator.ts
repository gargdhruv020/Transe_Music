/**
 * ====================================================================================
 * MOBILE AUDIO FOCUS & SYSTEM INTERRUPTION COORDINATOR
 * ====================================================================================
 *
 * Coordinates native OS audio focus, phone calls, and external app transitions:
 * 1. Listens for iOS-specific audioengineinterruption & Web Audio onstatechange
 * 2. Cooperates with Android AudioFocus & iOS CoreAudio (pauses cleanly for calls/Reels)
 * 3. Restores playback automatically when phone call or external app finishes
 * 4. Synchronizes navigator.mediaSession.playbackState ('playing' / 'paused')
 */

export interface AudioFocusCallbacks {
  onPauseRequested: (reason: "call" | "external_app" | "interruption") => void;
  onResumeRequested: () => void;
  onDuckRequested?: (duckFactor: number) => void;
  onUnduckRequested?: () => void;
  isCurrentlyPlaying: () => boolean;
}

export class MobileAudioFocusCoordinator {
  private callbacks: AudioFocusCallbacks;
  private wasPlayingBeforeInterruption = false;
  private isInterrupted = false;
  private audioContext: AudioContext | null = null;
  private mediaElement: HTMLAudioElement | null = null;
  private isDucked = false;

  private cleanupFns: Array<() => void> = [];

  constructor(callbacks: AudioFocusCallbacks) {
    this.callbacks = callbacks;
  }

  /**
   * Initializes all hardware audio focus and interruption listeners.
   */
  public attach(audioContext?: AudioContext | null, mediaElement?: HTMLAudioElement | null): void {
    if (typeof window === "undefined") return;

    this.audioContext = audioContext || null;
    this.mediaElement = mediaElement || null;

    // 1. Listen for Web Audio API Interruption States (iOS CoreAudio Interrupted State)
    if (this.audioContext) {
      const handleStateChange = () => {
        const state = (this.audioContext as any)?.state;
        // iOS WebKit sets audioContext.state to 'interrupted' when a phone call / Siri arrives
        if (state === "interrupted" || state === "suspended") {
          if (this.callbacks.isCurrentlyPlaying()) {
            this.handleSystemInterruption("call");
          }
        } else if (state === "running") {
          if (this.isInterrupted && this.wasPlayingBeforeInterruption) {
            this.handleSystemInterruptionEnd();
          }
        }
      };

      this.audioContext.addEventListener("statechange", handleStateChange);
      this.cleanupFns.push(() => {
        this.audioContext?.removeEventListener("statechange", handleStateChange);
      });
    }

    // 2. iOS-specific WebKit Interruption Events on HTMLMediaElement
    if (this.mediaElement) {
      const el = this.mediaElement as any;

      // Fires on iOS Safari when incoming phone call or alarms interrupt media
      const onBeginInterruption = () => {
        this.handleSystemInterruption("call");
      };

      // Fires on iOS Safari when phone call finishes
      const onEndInterruption = () => {
        this.handleSystemInterruptionEnd();
      };

      el.addEventListener("webkitbegininterruption", onBeginInterruption);
      el.addEventListener("webkitendinterruption", onEndInterruption);
      el.addEventListener("audioengineinterruption", onBeginInterruption);

      // External app (Instagram/YouTube) audio focus loss detection:
      // If audio element is paused without an explicit user click, the OS paused it!
      const onNativePause = () => {
        // If the browser paused the media while in background or during external app play
        if (document.hidden && this.callbacks.isCurrentlyPlaying()) {
          this.handleSystemInterruption("external_app");
        }
      };
      el.addEventListener("pause", onNativePause);

      this.cleanupFns.push(() => {
        el.removeEventListener("webkitbegininterruption", onBeginInterruption);
        el.removeEventListener("webkitendinterruption", onEndInterruption);
        el.removeEventListener("audioengineinterruption", onBeginInterruption);
        el.removeEventListener("pause", onNativePause);
      });
    }

    // 3. Document Visibility & Focus Coordination
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Returned to tab: if we were interrupted by a call or external app, resume!
        if (this.isInterrupted && this.wasPlayingBeforeInterruption) {
          this.handleSystemInterruptionEnd();
        }
      }
    };

    const handleWindowFocus = () => {
      if (this.isInterrupted && this.wasPlayingBeforeInterruption) {
        this.handleSystemInterruptionEnd();
      }
    };

    // When the phone call starts or user navigates to an incoming call screen:
    const handlePageHide = () => {
      if (this.callbacks.isCurrentlyPlaying()) {
        this.wasPlayingBeforeInterruption = true;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("pageshow", handleWindowFocus);
    window.addEventListener("pagehide", handlePageHide);

    this.cleanupFns.push(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("pageshow", handleWindowFocus);
      window.removeEventListener("pagehide", handlePageHide);
    });
  }

  /**
   * Invoked when OS Audio Focus is seized by a phone call, FaceTime, or another app.
   */
  public handleSystemInterruption(reason: "call" | "external_app" | "interruption"): void {
    if (this.isInterrupted) return;

    const currentlyPlaying = this.callbacks.isCurrentlyPlaying();
    if (currentlyPlaying) {
      this.wasPlayingBeforeInterruption = true;
      this.isInterrupted = true;

      // 1. Force audio player to pause
      this.callbacks.onPauseRequested(reason);

      // 2. Synchronize Media Session playback state to 'paused'
      this.syncMediaSessionState("paused");
    }
  }

  /**
   * Invoked when the interruption concludes (call finishes or focus returns).
   */
  public handleSystemInterruptionEnd(): void {
    if (!this.isInterrupted) return;

    this.isInterrupted = false;

    if (this.wasPlayingBeforeInterruption) {
      this.wasPlayingBeforeInterruption = false;

      // If Web Audio context was suspended by OS, resume it first
      if (this.audioContext && this.audioContext.state === "suspended") {
        this.audioContext.resume().catch(() => {});
      }

      // 1. Resume audio playback
      this.callbacks.onResumeRequested();

      // 2. Synchronize Media Session playback state to 'playing'
      this.syncMediaSessionState("playing");
    }
  }

  /**
   * Handles audio ducking when transient audio (e.g. navigation directions, Siri, notifications) plays.
   */
  public duckAudio(duckFactor = 0.3): void {
    if (this.isDucked) return;
    this.isDucked = true;
    if (this.callbacks.onDuckRequested) {
      this.callbacks.onDuckRequested(duckFactor);
    }
  }

  public unduckAudio(): void {
    if (!this.isDucked) return;
    this.isDucked = false;
    if (this.callbacks.onUnduckRequested) {
      this.callbacks.onUnduckRequested();
    }
  }

  /**
   * Updates navigator.mediaSession.playbackState cleanly so phone lock screens stay in sync.
   */
  public syncMediaSessionState(state: "playing" | "paused"): void {
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try {
        navigator.mediaSession.playbackState = state;
      } catch (_) {}
    }
  }

  /**
   * Explicitly notify coordinator of user-initiated pause/play to keep state tracking accurate.
   */
  public notifyUserPlay(): void {
    this.wasPlayingBeforeInterruption = false;
    this.isInterrupted = false;
    this.syncMediaSessionState("playing");
  }

  public notifyUserPause(): void {
    this.wasPlayingBeforeInterruption = false;
    this.isInterrupted = false;
    this.syncMediaSessionState("paused");
  }

  public destroy(): void {
    this.cleanupFns.forEach((fn) => {
      try { fn(); } catch (_) {}
    });
    this.cleanupFns = [];
  }
}
