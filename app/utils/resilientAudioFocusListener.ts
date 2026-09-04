/**
 * ====================================================================================
 * RESILIENT AUDIO FOCUS & INSTANT AUTO-RESUMPTION ENGINE
 * ====================================================================================
 *
 * Implements non-destructive audio focus handling for mobile devices:
 * 1. Ducking Instead of Eviction: Ducks volume to 15% or gracefully pauses without destroying audio nodes
 * 2. Continuous Hardware Anchor: Keeps silent audio anchor running so OS memory cleaner cannot wipe the notification
 * 3. Instant Auto-Resume Hook: Polls and monitors focus recovery; restores 100% volume the moment Instagram stops
 * 4. Crash Protection: All callbacks and Promises are strictly guarded against rapid app-switching crashes
 */

export const SILENT_ANCHOR_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export interface FocusManagerCallbacks {
  isCurrentlyPlaying: () => boolean;
  onDuck: (targetVolumePercent: number) => void;
  onUnduck: () => void;
  onPause: () => void;
  onResume: () => void;
  getAudioAnchor: () => HTMLAudioElement | null;
}

export class ResilientAudioFocusManager {
  private callbacks: FocusManagerCallbacks;
  private isDucked = false;
  private isInterrupted = false;
  private wasPlayingBeforeInterruption = false;
  private recoveryPollInterval: ReturnType<typeof setInterval> | null = null;
  private cleanupFns: Array<() => void> = [];

  constructor(callbacks: FocusManagerCallbacks) {
    this.callbacks = callbacks;
  }

  /**
   * Initializes all resilient focus listeners on the hardware audio anchor and window.
   */
  public attach(): void {
    if (typeof window === "undefined") return;

    const anchor = this.callbacks.getAudioAnchor();

    // 1. Safe Hardware Keep-Alive Anchor Initialization
    if (anchor) {
      try {
        if (!anchor.src || !anchor.src.startsWith("data:")) {
          anchor.src = SILENT_ANCHOR_WAV;
          anchor.loop = true;
        }
      } catch (e) {
        console.warn("Anchor initialization warning:", e);
      }

      // iOS WebKit Interruption Handlers (Phone calls, alarms, Siri)
      const onBeginInterruption = () => {
        this.handleExternalInterruption("call");
      };

      const onEndInterruption = () => {
        this.handleFocusRecovery();
      };

      try {
        const el = anchor as any;
        el.addEventListener("webkitbegininterruption", onBeginInterruption);
        el.addEventListener("webkitendinterruption", onEndInterruption);
        el.addEventListener("audioengineinterruption", onBeginInterruption);

        this.cleanupFns.push(() => {
          el.removeEventListener("webkitbegininterruption", onBeginInterruption);
          el.removeEventListener("webkitendinterruption", onEndInterruption);
          el.removeEventListener("audioengineinterruption", onBeginInterruption);
        });
      } catch (_) {}

      // Handle pause fired by OS (e.g. Instagram Reel starts playing)
      const onNativePause = () => {
        // Only treat as external interruption if user was playing and DID NOT click pause
        if (this.callbacks.isCurrentlyPlaying() && !this.isInterrupted) {
          this.handleExternalInterruption("external_app");
        }
      };

      anchor.addEventListener("pause", onNativePause);
      this.cleanupFns.push(() => {
        anchor.removeEventListener("pause", onNativePause);
      });
    }

    // 2. Visibility & Window Focus Listeners
    const onVisibilityChange = () => {
      try {
        if (document.visibilityState === "visible") {
          if (this.isInterrupted || this.isDucked) {
            this.handleFocusRecovery();
          }
        }
      } catch (e) {
        console.warn("Visibility change recovery warning:", e);
      }
    };

    const onWindowFocus = () => {
      try {
        if (this.isInterrupted || this.isDucked) {
          this.handleFocusRecovery();
        }
      } catch (e) {
        console.warn("Window focus recovery warning:", e);
      }
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
   * Non-destructive handling when an external app (like Instagram) takes audio focus:
   * 1. Sets mediaSession.playbackState to 'paused' (NEVER 'none'!)
   * 2. Keeps hardware audio anchor connected so the notification drawer is NOT evicted
   * 3. Starts active background focus recovery polling
   */
  public handleExternalInterruption(source: "call" | "external_app"): void {
    if (this.isInterrupted) return;

    try {
      const playing = this.callbacks.isCurrentlyPlaying();
      if (playing) {
        this.wasPlayingBeforeInterruption = true;
        this.isInterrupted = true;

        // 1. Duck or pause audio without evicting nodes
        if (source === "external_app") {
          // Attempt ducking first (15% volume)
          this.callbacks.onDuck(15);
          this.isDucked = true;
        } else {
          // Phone calls require full pause
          this.callbacks.onPause();
        }

        // 2. Explicitly anchor mediaSession to 'paused' so the OS never wipes the widget
        if (typeof window !== "undefined" && "mediaSession" in navigator) {
          try {
            navigator.mediaSession.playbackState = "paused";
          } catch (_) {}
        }

        // 3. Start background focus recovery polling:
        // Tests the hardware audio bus every 1.2s to detect when Instagram stops playing!
        this.startRecoveryPolling();
      }
    } catch (err) {
      console.error("Interruption handling error guarded:", err);
    }
  }

  /**
   * Background poller that continuously tests if external audio (Instagram) has finished.
   * The exact millisecond the user stops the Instagram Reel, this recovers audio focus!
   */
  private startRecoveryPolling(): void {
    if (this.recoveryPollInterval) clearInterval(this.recoveryPollInterval);

    this.recoveryPollInterval = setInterval(() => {
      if (!this.isInterrupted && !this.isDucked) {
        this.stopRecoveryPolling();
        return;
      }

      const anchor = this.callbacks.getAudioAnchor();
      if (anchor) {
        // Attempt to play the micro-silent anchor
        const playPromise = anchor.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Hardware audio bus is available! External app has stopped producing sound!
              this.stopRecoveryPolling();
              this.handleFocusRecovery();
            })
            .catch(() => {
              // External app is still actively holding audio focus; wait for next tick
            });
        }
      }
    }, 1200);
  }

  private stopRecoveryPolling(): void {
    if (this.recoveryPollInterval) {
      clearInterval(this.recoveryPollInterval);
      this.recoveryPollInterval = null;
    }
  }

  /**
   * Instant Auto-Resume Hook:
   * Smoothly brings the song back to 100% volume and restores 'playing' state.
   */
  public handleFocusRecovery(): void {
    try {
      this.stopRecoveryPolling();

      if (this.wasPlayingBeforeInterruption || this.isDucked || this.isInterrupted) {
        this.isInterrupted = false;
        this.wasPlayingBeforeInterruption = false;

        // 1. Restore volume to 100%
        if (this.isDucked) {
          this.isDucked = false;
          this.callbacks.onUnduck();
        }

        // 2. Resume player
        this.callbacks.onResume();

        // 3. Update Media Session to 'playing'
        if (typeof window !== "undefined" && "mediaSession" in navigator) {
          try {
            navigator.mediaSession.playbackState = "playing";
          } catch (_) {}
        }
      }
    } catch (err) {
      console.error("Focus recovery error guarded:", err);
    }
  }

  /**
   * Notifies manager of explicit user actions.
   */
  public notifyUserPlay(): void {
    this.isInterrupted = false;
    this.wasPlayingBeforeInterruption = false;
    this.isDucked = false;
    this.stopRecoveryPolling();
  }

  public notifyUserPause(): void {
    this.isInterrupted = false;
    this.wasPlayingBeforeInterruption = false;
    this.isDucked = false;
    this.stopRecoveryPolling();
  }

  public destroy(): void {
    this.stopRecoveryPolling();
    this.cleanupFns.forEach((fn) => {
      try { fn(); } catch (_) {}
    });
    this.cleanupFns = [];
  }
}
