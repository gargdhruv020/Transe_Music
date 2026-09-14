/**
 * ====================================================================================
 * USER-ISOLATED LIKED TRACKS STORE & BACKEND SYNC
 * ====================================================================================
 *
 * Provides private, user-isolated liked tracks state for each individual user.
 * - Optimistic local state for instant 0ms UI toggles.
 * - Background synchronization with /api/likes backend.
 * - Dispatches custom events so all UI components update in real-time.
 */

const STORAGE_KEY = "transe_music_liked_tracks";
const CHANGE_EVENT = "transe_liked_tracks_changed";

let cachedLikedIds: Set<number> | null = null;
let isInitialSyncDone = false;

function loadFromStorage(): Set<number> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return new Set(parsed.map(Number).filter((n) => !isNaN(n)));
      }
    }
  } catch (e) {
    console.warn("Failed to load liked tracks from localStorage:", e);
  }
  return new Set();
}

function saveToStorage(set: Set<number>): void {
  if (typeof window === "undefined") return;
  try {
    const array = Array.from(set);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(array));
  } catch (e) {
    console.warn("Failed to save liked tracks to localStorage:", e);
  }
}

function notifyListeners(detail: { trackId?: number; isLiked?: boolean; likedIds: Set<number> }) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(CHANGE_EVENT, {
        detail: { ...detail, likedIds: new Set(detail.likedIds) },
      })
    );
  }
}

/**
 * Asynchronously syncs with the user's isolated backend likes list.
 */
export async function syncUserLikesWithBackend(): Promise<Set<number>> {
  if (typeof window === "undefined") return new Set();
  try {
    const response = await fetch("/api/likes");
    if (response.ok) {
      const data = await response.json();
      if (data.success && Array.isArray(data.likedIds)) {
        const serverLikedIds = new Set<number>(data.likedIds.map(Number).filter((n: number) => !isNaN(n)));
        
        // Merge or set server likes
        if (cachedLikedIds === null) {
          cachedLikedIds = loadFromStorage();
        }

        // If local has tracks not yet on server (e.g. first visit), sync them up
        if (!isInitialSyncDone && cachedLikedIds.size > 0 && serverLikedIds.size === 0) {
          // Push local likes to server for this user
          for (const id of Array.from(cachedLikedIds)) {
            fetch("/api/likes", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ trackId: id, action: "like" }),
            }).catch(() => {});
          }
        } else {
          cachedLikedIds = serverLikedIds;
          saveToStorage(cachedLikedIds);
        }

        isInitialSyncDone = true;
        notifyListeners({ likedIds: cachedLikedIds });
        return new Set(cachedLikedIds);
      }
    }
  } catch (err) {
    console.warn("Backend likes sync notice:", err);
  }

  if (cachedLikedIds === null) {
    cachedLikedIds = loadFromStorage();
  }
  return new Set(cachedLikedIds);
}

/**
 * Returns a Set of all currently liked track IDs for the active user.
 */
export function getLikedTrackIds(): Set<number> {
  if (cachedLikedIds === null) {
    cachedLikedIds = loadFromStorage();
    if (typeof window !== "undefined" && !isInitialSyncDone) {
      syncUserLikesWithBackend().catch(() => {});
    }
  }
  return new Set(cachedLikedIds);
}

/**
 * Checks if a specific track is liked by the current user.
 */
export function isTrackLiked(trackId: number): boolean {
  if (cachedLikedIds === null) {
    cachedLikedIds = loadFromStorage();
    if (typeof window !== "undefined" && !isInitialSyncDone) {
      syncUserLikesWithBackend().catch(() => {});
    }
  }
  return cachedLikedIds.has(trackId);
}

/**
 * Toggles the like state of a track for the active user.
 * Optimistically updates state locally and sends an isolated request to /api/likes.
 * Returns true if now liked, false if unliked.
 */
export function toggleLikedTrack(trackId: number): boolean {
  if (cachedLikedIds === null) {
    cachedLikedIds = loadFromStorage();
  }

  const isNowLiked = !cachedLikedIds.has(trackId);
  if (isNowLiked) {
    cachedLikedIds.add(trackId);
  } else {
    cachedLikedIds.delete(trackId);
  }

  saveToStorage(cachedLikedIds);
  notifyListeners({ trackId, isLiked: isNowLiked, likedIds: cachedLikedIds });

  // Async server sync tied directly to the isolated user session
  if (typeof window !== "undefined") {
    fetch("/api/likes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trackId, action: isNowLiked ? "like" : "unlike" }),
    }).catch((err) => {
      console.warn("Failed to persist like to backend:", err);
    });
  }

  return isNowLiked;
}

/**
 * Subscribes to changes in the active user's liked tracks collection.
 */
export function subscribeToLikedTracks(
  callback: (likedIds: Set<number>) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent;
    if (customEvent.detail && customEvent.detail.likedIds) {
      callback(new Set(customEvent.detail.likedIds));
    }
  };

  window.addEventListener(CHANGE_EVENT, handler);

  // Trigger initial fetch/sync if not done yet
  if (!isInitialSyncDone) {
    syncUserLikesWithBackend().then((set) => callback(set)).catch(() => {});
  }

  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
  };
}
