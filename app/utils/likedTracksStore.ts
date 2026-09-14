/**
 * ====================================================================================
 * LIKED TRACKS STORE & PERSISTENCE
 * ====================================================================================
 *
 * Lightweight reactive store for user-liked tracks with LocalStorage persistence.
 * Dispatches custom window events on like/unlike so all UI components update instantly.
 */

const STORAGE_KEY = "transe_music_liked_tracks";
const CHANGE_EVENT = "transe_liked_tracks_changed";

let cachedLikedIds: Set<number> | null = null;

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

/**
 * Returns a Set of all currently liked track IDs.
 */
export function getLikedTrackIds(): Set<number> {
  if (cachedLikedIds === null) {
    cachedLikedIds = loadFromStorage();
  }
  return new Set(cachedLikedIds);
}

/**
 * Checks if a specific track is liked.
 */
export function isTrackLiked(trackId: number): boolean {
  if (cachedLikedIds === null) {
    cachedLikedIds = loadFromStorage();
  }
  return cachedLikedIds.has(trackId);
}

/**
 * Toggles the like state of a track and notifies all active listeners.
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

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(CHANGE_EVENT, {
        detail: { trackId, isLiked: isNowLiked, likedIds: new Set(cachedLikedIds) },
      })
    );
  }

  return isNowLiked;
}

/**
 * Subscribes to changes in the liked tracks collection.
 */
export function subscribeToLikedTracks(
  callback: (likedIds: Set<number>) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent;
    if (customEvent.detail && customEvent.detail.likedIds) {
      callback(new Set(customEvent.detail.likedIds));
    } else {
      callback(getLikedTrackIds());
    }
  };

  window.addEventListener(CHANGE_EVENT, handler);
  // Also handle storage events from other tabs
  const storageHandler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cachedLikedIds = loadFromStorage();
      callback(new Set(cachedLikedIds));
    }
  };
  window.addEventListener("storage", storageHandler);

  return () => {
    window.removeEventListener(CHANGE_EVENT, handler);
    window.removeEventListener("storage", storageHandler);
  };
}
