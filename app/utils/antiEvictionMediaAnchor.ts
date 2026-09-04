/**
 * ====================================================================================
 * INDUSTRIAL-GRADE ANTI-EVICTION MEDIA ANCHOR & RECOVERY ENGINE
 * ====================================================================================
 *
 * Prevents mobile OS (iOS WebKit Jetsam / Android LMK) from terminating background tabs
 * when users browse media-heavy apps like Instagram or YouTube:
 * 1. Silent Infinite Audio Keep-Alive Loop: Plays ultra-low-byte silent WAV when paused/interrupted
 *    Tricks OS into treating the tab as an Active Foreground Audio Process (exempt from eviction)
 * 2. State Preservation via LocalStorage & IndexedDB: Writes playback state on every tick/change
 * 3. Automatic Notification Hydration: Re-hydrates MediaSession widget on visibilitychange & pageshow
 * 4. Service Worker Background Sync Registration: Binds service worker to keep recent apps pinned
 */

export const ULTRA_LOW_BYTE_SILENT_WAV =
  "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";

export interface PersistedPlaybackState {
  currentIndex: number;
  currentTime: number;
  duration: number;
  queueMode: string;
  shuffle: boolean;
  isPlaying: boolean;
  crossfadeEnabled: boolean;
  title: string;
  artist: string;
  film?: string;
  updatedAt: number;
}

export class AntiEvictionMediaAnchor {
  private static secondaryAnchor: HTMLAudioElement | null = null;
  private static isKeepAliveActive = false;
  private static dbPromise: Promise<IDBDatabase> | null = null;

  /* ── 1. SILENT INFINITE AUDIO KEEP-ALIVE LOOP ───────────────────── */

  /**
   * Engages the ultra-low-byte silent audio anchor on a secondary hidden channel.
   * Runs whenever the primary track is paused or interrupted by another app (e.g. Instagram/YouTube).
   * Tricks the OS into classifying the browser tab as an Active Media Process, preventing Jetsam/LMK eviction!
   */
  public static engageAntiEvictionKeepAlive(): void {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    try {
      if (!this.secondaryAnchor) {
        const audio = document.createElement("audio");
        audio.id = "anti-eviction-keepalive-anchor";
        audio.crossOrigin = "anonymous";
        audio.src = ULTRA_LOW_BYTE_SILENT_WAV;
        audio.loop = true;
        audio.preload = "auto";
        audio.volume = 0.001; // Ultra-low volume (inaudible, but registers active hardware audio bus)
        (audio as any).playsInline = true;
        audio.setAttribute("playsinline", "true");
        audio.setAttribute("webkit-playsinline", "true");
        audio.style.display = "none";
        document.body.appendChild(audio);
        this.secondaryAnchor = audio;
      }

      if (this.secondaryAnchor && this.secondaryAnchor.paused) {
        const promise = this.secondaryAnchor.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              this.isKeepAliveActive = true;
            })
            .catch(() => {
              // Retry if throttled
              setTimeout(() => {
                if (this.secondaryAnchor && this.secondaryAnchor.paused) {
                  this.secondaryAnchor.play().catch(() => {});
                }
              }, 200);
            });
        }
      }
    } catch (e) {
      console.warn("Anti-eviction keepalive notice:", e);
    }
  }

  /**
   * Disengages the secondary silent anchor when primary track is actively playing.
   */
  public static releaseAntiEvictionKeepAlive(): void {
    if (this.secondaryAnchor && !this.secondaryAnchor.paused) {
      try {
        this.secondaryAnchor.pause();
        this.isKeepAliveActive = false;
      } catch (_) {}
    }
  }

  /* ── 2. STATE PRESERVATION VIA LOCALSTORAGE & INDEXEDDB ─────────── */

  private static initIndexedDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === "undefined" || !("indexedDB" in window)) {
        reject(new Error("IndexedDB not available"));
        return;
      }

      const request = indexedDB.open("TranseMusicDB", 1);

      request.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("playback_state")) {
          db.createObjectStore("playback_state", { keyPath: "id" });
        }
      };

      request.onsuccess = (e: any) => resolve(e.target.result);
      request.onerror = (e) => reject(e);
    });

    return this.dbPromise;
  }

  /**
   * Persists the exact playback state synchronously to localStorage and asynchronously to IndexedDB.
   */
  public static persistPlaybackState(state: PersistedPlaybackState): void {
    if (typeof window === "undefined") return;

    const payload = {
      ...state,
      updatedAt: Date.now(),
    };

    // 1. Synchronous localStorage write
    try {
      localStorage.setItem("transe_music_playback_state", JSON.stringify(payload));
      localStorage.setItem("transe_music_index", state.currentIndex.toString());
      localStorage.setItem("transe_music_time", state.currentTime.toString());
      localStorage.setItem("transe_music_mode", state.queueMode);
    } catch (_) {}

    // 2. IndexedDB write (for deep state persistence across browser restarts)
    this.initIndexedDB()
      .then((db) => {
        const tx = db.transaction("playback_state", "readwrite");
        const store = tx.objectStore("playback_state");
        store.put({ id: "current_session", ...payload });
      })
      .catch(() => {});

    // 3. Inform Service Worker of latest state
    if (typeof navigator !== "undefined" && "serviceWorker" in navigator && navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "MEDIA_STATE_UPDATE",
        payload,
      });
    }
  }

  /**
   * Loads the last saved playback state synchronously.
   */
  public static getSavedPlaybackState(): PersistedPlaybackState | null {
    if (typeof window === "undefined") return null;

    try {
      const raw = localStorage.getItem("transe_music_playback_state");
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (_) {}
    return null;
  }

  /* ── 3. AUTOMATIC NOTIFICATION HYDRATION / RECOVERY ─────────────── */

  /**
   * The absolute microsecond the user switches back toward the browser or wakes up the phone,
   * instantly re-hydrates navigator.mediaSession.metadata and reconstructs the notification widget.
   */
  public static rehydrateMediaSession(fallbackTrack?: { title: string; artist: string; film?: string }): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      const saved = this.getSavedPlaybackState();
      const title = saved?.title || fallbackTrack?.title || "Trance Sangeet";
      const artist = saved?.artist || fallbackTrack?.artist || "Vortexia";
      const album = saved?.film || fallbackTrack?.film || "Trance Sangeet";

      navigator.mediaSession.metadata = new MediaMetadata({
        title,
        artist,
        album,
        artwork: [
          { src: "/bg/scene-wide.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/bg/scene-wide.jpg", sizes: "1280x720", type: "image/jpeg" },
          { src: "/bg/scene-tall.jpg", sizes: "720x1280", type: "image/jpeg" },
        ],
      });

      if (saved && saved.duration > 0 && "setPositionState" in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: saved.duration,
          playbackRate: 1,
          position: Math.min(saved.currentTime, saved.duration),
        });
      }
    } catch (_) {}
  }

  /* ── 4. SERVICE WORKER BACKGROUND SYNC REGISTRATION ─────────────── */

  public static registerServiceWorker(): void {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw-media-keepalive.js")
        .then((registration) => {
          // Register Background Sync if supported (Android Chrome)
          if ("sync" in registration) {
            (registration as any).sync.register("media-keepalive-sync").catch(() => {});
          }
        })
        .catch(() => {});
    });

    // Listen for rehydrate messages from Service Worker
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data && event.data.type === "REHYDRATE_MEDIA_SESSION") {
        this.rehydrateMediaSession(event.data.payload);
      }
    });
  }
}
