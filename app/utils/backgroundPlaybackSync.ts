/**
 * ====================================================================================
 * BACKGROUND PLAYBACK & LOCK-SCREEN SYNC ENGINE
 * ====================================================================================
 *
 * Forces instant background playback when changing songs via lock-screen notification controls:
 * 1. Asynchronous Source Loading & Forced Playback: Explicit .load() and .play() on Media Session skips
 * 2. Audio Playback Promise Catching: Safe .then()/.catch() with automated background retry loops
 * 3. Event-Driven State Matching: oncanplay & onloadedmetadata hooks force mediaSession.playbackState='playing'
 * 4. Synchronous UI-to-System Mirroring: Keeps state locked to active/playing through buffering delays
 */

export const SILENT_AUDIO_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export interface SyncEngineOptions {
  getAudioElement: () => HTMLAudioElement | null;
  getYTPlayer: () => any;
  onStateSynced?: (isPlaying: boolean) => void;
}

export class BackgroundPlaybackSyncEngine {
  private getAudioElement: () => HTMLAudioElement | null;
  private getYTPlayer: () => any;
  private isTransitioning = false;
  private transitionTimer: ReturnType<typeof setTimeout> | null = null;
  private retryTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(options: SyncEngineOptions) {
    this.getAudioElement = options.getAudioElement;
    this.getYTPlayer = options.getYTPlayer;
  }

  /**
   * Binds event-driven listeners to the native HTML <audio> element.
   * Forces mediaSession.playbackState = 'playing' the moment the OS confirms audio buffer readiness.
   */
  public attachAudioListeners(audio: HTMLAudioElement): () => void {
    const handleCanPlay = () => {
      if (typeof window !== "undefined" && "mediaSession" in navigator) {
        try {
          navigator.mediaSession.playbackState = "playing";
        } catch (_) {}
      }
    };

    const handlePlaying = () => {
      if (typeof window !== "undefined" && "mediaSession" in navigator) {
        try {
          navigator.mediaSession.playbackState = "playing";
        } catch (_) {}
      }
    };

    const handleLoadedMetadata = () => {
      if (typeof window !== "undefined" && "mediaSession" in navigator) {
        try {
          navigator.mediaSession.playbackState = "playing";
        } catch (_) {}
      }
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }

  /**
   * Forces instant background playback synchronization during lock-screen track skips:
   * 1. Loads and plays audio anchor with promise catching
   * 2. Fires YouTube playVideo() with exponential retry loop
   * 3. Blocks false-positive 'paused' triggers during video buffering
   */
  public forceBackgroundPlayback(): void {
    this.markTransitioning();

    // 1. Synchronously lock Media Session to 'playing'
    if (typeof window !== "undefined" && "mediaSession" in navigator) {
      try {
        navigator.mediaSession.playbackState = "playing";
      } catch (_) {}
    }

    // 2. Play HTML5 audio element with Promise catching and auto-retry
    const audio = this.getAudioElement();
    if (audio) {
      try {
        if (!audio.src || !audio.src.startsWith("data:")) {
          audio.src = SILENT_AUDIO_WAV;
          audio.loop = true;
          audio.load();
        }
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Successfully playing audio anchor in background
            })
            .catch(() => {
              // Retry on background constraint
              setTimeout(() => {
                try { audio.play().catch(() => {}); } catch (_) {}
              }, 150);
            });
        }
      } catch (_) {}
    }

    // 3. Automated retry loop for YouTube player playback
    let attempts = 0;
    const maxAttempts = 8;

    const triggerYTPlay = () => {
      attempts++;
      const ytPlayer = this.getYTPlayer();

      if (ytPlayer && typeof ytPlayer.playVideo === "function") {
        try {
          ytPlayer.playVideo();
        } catch (_) {}

        // Check if player has entered PLAYING state (1) or BUFFERING state (3)
        const state = typeof ytPlayer.getPlayerState === "function" ? ytPlayer.getPlayerState() : -1;
        if (state !== 1 && attempts < maxAttempts) {
          this.retryTimer = setTimeout(triggerYTPlay, 200);
        }
      } else if (attempts < maxAttempts) {
        this.retryTimer = setTimeout(triggerYTPlay, 250);
      }
    };

    triggerYTPlay();
  }

  /**
   * Marks that the player is actively transitioning between tracks.
   * Prevents YouTube's transient buffering state (event.data === 2) from falsely marking the player as paused.
   */
  public markTransitioning(durationMs = 3500): void {
    this.isTransitioning = true;
    if (this.transitionTimer) clearTimeout(this.transitionTimer);
    this.transitionTimer = setTimeout(() => {
      this.isTransitioning = false;
    }, durationMs);
  }

  public getIsTransitioning(): boolean {
    return this.isTransitioning;
  }

  public cancel(): void {
    this.isTransitioning = false;
    if (this.transitionTimer) clearTimeout(this.transitionTimer);
    if (this.retryTimer) clearTimeout(this.retryTimer);
  }
}
