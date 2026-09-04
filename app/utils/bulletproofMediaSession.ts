/**
 * ====================================================================================
 * BULLETPROOF MOBILE MEDIA SESSION & LOCK-SCREEN GUARDIAN
 * ====================================================================================
 *
 * Prevents OS lock-screen notification crashes and widget terminations during track skips:
 * 1. Robust Try/Catch Action Handlers: Intercepts all errors to prevent OS notification death
 * 2. Silent Asset Placeholder Initialization: Keeps mobile hardware audio bus hot during buffer delays
 * 3. Synchronous Playback & Position Locking: Locks playbackState='playing' before async work
 * 4. Playlist Edge-Case Boundaries: Safe looping and null-safe fallbacks for start/end bounds
 */

export const SILENT_WAV_BASE64 =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export interface MediaSessionCallbacks {
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeekTo: (time: number) => void;
  onSeekForward: (offset: number) => void;
  onSeekBackward: (offset: number) => void;
  getAudioAnchor: () => HTMLAudioElement | null;
  getCurrentDuration: () => number;
}

export class BulletproofMediaSessionGuardian {
  /**
   * Registers all MediaSession action handlers with zero-crash try/catch wrappers
   * and synchronous hardware audio keepalive locking.
   */
  public static registerHandlers(callbacks: MediaSessionCallbacks): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    const {
      onPlay,
      onPause,
      onNext,
      onPrev,
      onSeekTo,
      onSeekForward,
      onSeekBackward,
      getAudioAnchor,
      getCurrentDuration,
    } = callbacks;

    // Helper: Keep mobile hardware audio pipeline hot during buffering/transition
    const keepAudioBusHot = () => {
      try {
        const anchor = getAudioAnchor();
        if (anchor) {
          if (!anchor.src || !anchor.src.startsWith("data:")) {
            anchor.src = SILENT_WAV_BASE64;
            anchor.loop = true;
          }
          if (anchor.paused) {
            anchor.play().catch(() => {});
          }
        }
      } catch (_) {}
    };

    // 1. PLAY HANDLER
    try {
      navigator.mediaSession.setActionHandler("play", () => {
        try {
          // Synchronous lock
          navigator.mediaSession.playbackState = "playing";
          keepAudioBusHot();
          onPlay();
        } catch (err) {
          console.warn("MediaSession play error intercepted:", err);
          keepAudioBusHot();
        }
      });
    } catch (_) {}

    // 2. PAUSE HANDLER
    try {
      navigator.mediaSession.setActionHandler("pause", () => {
        try {
          navigator.mediaSession.playbackState = "paused";
          onPause();
        } catch (err) {
          console.warn("MediaSession pause error intercepted:", err);
        }
      });
    } catch (_) {}

    // 3. NEXT TRACK HANDLER (BULLETPROOF)
    try {
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        try {
          // CRITICAL: Synchronously lock playbackState to 'playing' immediately
          // Prevents OS from seeing a dead stream and wiping the notification widget!
          navigator.mediaSession.playbackState = "playing";

          // Keep the audio hardware bus continuously emitting frames while the video buffers
          keepAudioBusHot();

          // Execute playlist advance inside error-safe boundary
          onNext();
        } catch (err) {
          console.error("Critical: nexttrack exception intercepted to protect notification widget:", err);
          // Keep hardware bus hot so the widget is never killed
          keepAudioBusHot();
          navigator.mediaSession.playbackState = "playing";
        }
      });
    } catch (_) {}

    // 4. PREVIOUS TRACK HANDLER (BULLETPROOF)
    try {
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        try {
          // CRITICAL: Synchronously lock playbackState to 'playing' immediately
          navigator.mediaSession.playbackState = "playing";

          // Keep the audio hardware bus continuously emitting frames while the video buffers
          keepAudioBusHot();

          // Execute playlist reverse inside error-safe boundary
          onPrev();
        } catch (err) {
          console.error("Critical: previoustrack exception intercepted to protect notification widget:", err);
          keepAudioBusHot();
          navigator.mediaSession.playbackState = "playing";
        }
      });
    } catch (_) {}

    // 5. SEEKTO HANDLER
    try {
      navigator.mediaSession.setActionHandler("seekto", (details) => {
        try {
          if (details.seekTime !== undefined) {
            onSeekTo(details.seekTime);
          }
        } catch (err) {
          console.warn("seekto error intercepted:", err);
        }
      });
    } catch (_) {}

    // 6. SEEKFORWARD HANDLER
    try {
      navigator.mediaSession.setActionHandler("seekforward", (details) => {
        try {
          const offset = details.seekOffset || 5;
          onSeekForward(offset);
        } catch (err) {
          console.warn("seekforward error intercepted:", err);
        }
      });
    } catch (_) {}

    // 7. SEEKBACKWARD HANDLER
    try {
      navigator.mediaSession.setActionHandler("seekbackward", (details) => {
        try {
          const offset = details.seekOffset || 5;
          onSeekBackward(offset);
        } catch (err) {
          console.warn("seekbackward error intercepted:", err);
        }
      });
    } catch (_) {}
  }

  /**
   * Safely calculates the next queue index with strict boundary checks.
   * Handles loop-around and guarantees a non-null, valid track object.
   */
  public static getNextTrackSafe<T>(
    queue: T[],
    currentIndex: number,
    isShuffle: boolean
  ): { nextIndex: number; nextTrack: T } {
    if (!queue || queue.length === 0) {
      throw new Error("Queue is empty");
    }

    if (queue.length === 1) {
      return { nextIndex: 0, nextTrack: queue[0] };
    }

    if (isShuffle) {
      let randIdx = Math.floor(Math.random() * queue.length);
      // Avoid immediate repeat if queue has multiple items
      if (randIdx === currentIndex && queue.length > 1) {
        randIdx = (randIdx + 1) % queue.length;
      }
      return { nextIndex: randIdx, nextTrack: queue[randIdx] };
    }

    // Graceful loop-around boundary
    const nextIndex = (currentIndex + 1) % queue.length;
    return { nextIndex, nextTrack: queue[nextIndex] };
  }

  /**
   * Safely calculates the previous queue index with strict boundary checks.
   * Handles reverse loop-around and guarantees a non-null, valid track object.
   */
  public static getPrevTrackSafe<T>(
    queue: T[],
    currentIndex: number,
    isShuffle: boolean
  ): { prevIndex: number; prevTrack: T } {
    if (!queue || queue.length === 0) {
      throw new Error("Queue is empty");
    }

    if (queue.length === 1) {
      return { prevIndex: 0, prevTrack: queue[0] };
    }

    if (isShuffle) {
      const randIdx = Math.floor(Math.random() * queue.length);
      return { prevIndex: randIdx, prevTrack: queue[randIdx] };
    }

    // Graceful reverse loop-around boundary (handles first track gracefully)
    const prevIndex = (currentIndex - 1 + queue.length) % queue.length;
    return { prevIndex, prevTrack: queue[prevIndex] };
  }
}
