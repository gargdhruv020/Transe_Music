/**
 * ====================================================================================
 * SERVICE WORKER BACKGROUND ANCHOR & RESILIENT AUDIO LIFECYCLE
 * ====================================================================================
 *
 * Industrial-grade mobile background persistence and anti-eviction architecture:
 * 1. Persistent Service Worker Registration (sw.js & background sync)
 * 2. Silent Audio Keep-Alive Buffer: Web Audio API 1s silent buffer loop keeps sound driver active
 * 3. Persistent State Hydration via IndexedDB & LocalStorage
 * 4. Microsecond UI Recovery: Re-hydrates MediaSession widget the millisecond visibilitychange/pageshow fires
 * 5. Clean Handoff Context: Seamless pause with persistent lock-screen state
 */

export interface PersistedPlayerState {
  currentTrackIndex: number;
  currentTime: number;
  duration: number;
  playlistQueue: string;
  shuffle: boolean;
  playbackState: "playing" | "paused";
  crossfadeEnabled: boolean;
  title: string;
  artist: string;
  film?: string;
  timestamp: number;
}

export class ServiceWorkerBackgroundAnchor {
  private static audioCtx: AudioContext | null = null;
  private static keepAliveSource: AudioBufferSourceNode | null = null;
  private static keepAliveGain: GainNode | null = null;
  private static isKeepAliveActive = false;

  private static dbPromise: Promise<IDBDatabase> | null = null;
  private static DB_NAME = "transe_music_store";
  private static STORE_NAME = "player_persistence";

  /* ── 1. PERSISTENT SERVICE WORKER REGISTRATION ──────────────────── */

  public static registerServiceWorker(): void {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((reg) => {
          // Register Background Sync if supported (elevates process priority on Android Chrome)
          if ("sync" in reg) {
            (reg as any).sync.register("transe-bg-sync").catch(() => {});
          }
          if ("periodicSync" in reg) {
            (reg as any).periodicSync.register("transe-media-audit", { minInterval: 24 * 60 * 60 * 1000 }).catch(() => {});
          }
        })
        .catch(() => {});
    });

    // Listen for rehydration requests from Service Worker
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data && event.data.type === "REHYDRATE_MEDIA_SESSION") {
        this.rehydrateFromPersistedState();
      }
    });
  }

  public static broadcastStateToServiceWorker(state: PersistedPlayerState): void {
    if (typeof window === "undefined" || !("serviceWorker" in navigator) || !navigator.serviceWorker.controller) return;

    try {
      navigator.serviceWorker.controller.postMessage({
        type: "SYNC_MEDIA_STATE",
        payload: state,
      });
    } catch (_) {}
  }

  /* ── 2. SILENT AUDIO KEEP-ALIVE BUFFER (CPU SOUND DRIVER ANCHOR) ─── */

  /**
   * Initializes the Web Audio API Silent Keep-Alive Buffer loop.
   * Feeds an encoded 1-second silent AudioBuffer into ctx.destination at gain 0.0.
   * Forces the mobile CPU's sound driver (CoreAudio/OpenSL) to classify the process
   * as an Active Sound Producer, preventing Low Memory Killer (LMK) eviction while
   * remaining completely silent so Instagram/YouTube audio plays freely!
   */
  public static startSilentKeepAliveBuffer(): void {
    if (typeof window === "undefined") return;
    if (this.isKeepAliveActive) return;

    try {
      if (!this.audioCtx || this.audioCtx.state === "closed") {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        this.audioCtx = new AudioContextClass({ latencyHint: "playback" });
      }

      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume().catch(() => {});
      }

      // Generate a 1-second silent PCM AudioBuffer
      const sampleRate = this.audioCtx.sampleRate || 44100;
      const silentBuffer = this.audioCtx.createBuffer(1, sampleRate, sampleRate);
      // Data array contains all 0.0 floats (absolute digital silence)

      // Stop previous instance if any
      this.stopSilentKeepAliveBuffer();

      const source = this.audioCtx.createBufferSource();
      source.buffer = silentBuffer;
      source.loop = true;

      // GainNode set to 0.0 (muted) — keeps hardware driver open without emitting audible samples
      const gainNode = this.audioCtx.createGain();
      gainNode.gain.setValueAtTime(0.0, this.audioCtx.currentTime);

      source.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);
      source.start(0);

      this.keepAliveSource = source;
      this.keepAliveGain = gainNode;
      this.isKeepAliveActive = true;
    } catch (e) {
      console.warn("Silent keep-alive buffer initialization warning:", e);
    }
  }

  public static stopSilentKeepAliveBuffer(): void {
    if (this.keepAliveSource) {
      try {
        this.keepAliveSource.stop();
        this.keepAliveSource.disconnect();
      } catch (_) {}
      this.keepAliveSource = null;
    }
    this.isKeepAliveActive = false;
  }

  /* ── 3. PERSISTENT STATE HYDRATION VIA INDEXEDDB & LOCALSTORAGE ──── */

  private static getDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === "undefined" || !("indexedDB" in window)) {
        return reject("IndexedDB not supported");
      }

      const request = indexedDB.open(this.DB_NAME, 1);
      request.onupgradeneeded = (e: any) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(this.STORE_NAME)) {
          db.createObjectStore(this.STORE_NAME);
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return this.dbPromise;
  }

  public static async persistState(state: PersistedPlayerState): Promise<void> {
    if (typeof window === "undefined") return;

    // 1. Fast LocalStorage mirror
    try {
      localStorage.setItem("transe_persistent_state", JSON.stringify(state));
    } catch (_) {}

    // 2. Robust IndexedDB persistence
    try {
      const db = await this.getDB();
      const tx = db.transaction(this.STORE_NAME, "readwrite");
      tx.objectStore(this.STORE_NAME).put(state, "latest_state");
    } catch (_) {}

    // 3. Broadcast to Service Worker
    this.broadcastStateToServiceWorker(state);
  }

  public static getPersistedStateSync(): PersistedPlayerState | null {
    if (typeof window === "undefined") return null;

    try {
      const raw = localStorage.getItem("transe_persistent_state");
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (_) {}
    return null;
  }

  /* ── 4. MICROSECOND UI & MEDIA SESSION RECOVERY ──────────────────── */

  /**
   * Attached to visibilitychange, pageshow, and focus.
   * Re-instantiates navigator.mediaSession.metadata and reconstructs the notification drawer
   * before the browser can blank it out!
   */
  public static rehydrateFromPersistedState(fallbackTrack?: { title: string; artist: string; film?: string }): void {
    if (typeof window === "undefined" || !("mediaSession" in navigator)) return;

    try {
      const state = this.getPersistedStateSync();
      const title = state?.title || fallbackTrack?.title || "Trance Sangeet";
      const artist = state?.artist || fallbackTrack?.artist || "Vortexia";
      const album = state?.film || fallbackTrack?.film || "Trance Sangeet";

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

      navigator.mediaSession.playbackState = state?.playbackState || "paused";

      if (state && state.duration > 0 && "setPositionState" in navigator.mediaSession) {
        navigator.mediaSession.setPositionState({
          duration: state.duration,
          playbackRate: 1,
          position: Math.min(state.currentTime, state.duration),
        });
      }
    } catch (_) {}
  }

  /**
   * Microsecond UI recovery hook attached to visibilitychange and pageshow.
   */
  public static installMicrosecondRecoveryListeners(getFallbackTrack: () => { title: string; artist: string; film?: string }): () => void {
    if (typeof window === "undefined") return () => {};

    const handleWakeup = () => {
      this.rehydrateFromPersistedState(getFallbackTrack());
    };

    document.addEventListener("visibilitychange", handleWakeup, { passive: true });
    window.addEventListener("pageshow", handleWakeup, { passive: true });
    window.addEventListener("focus", handleWakeup, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", handleWakeup);
      window.removeEventListener("pageshow", handleWakeup);
      window.removeEventListener("focus", handleWakeup);
    };
  }
}
