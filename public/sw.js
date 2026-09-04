/**
 * ====================================================================================
 * STANDALONE SERVICE WORKER: BACKGROUND MEDIA ANCHOR & ROUTING
 * ====================================================================================
 *
 * Implements mobile background persistence and media session preservation:
 * 1. PWA Service Worker lifecycle (install, activate, skipWaiting, clients.claim)
 * 2. Background Sync and periodic sync registration to elevate process priority
 * 3. Media State synchronization and instant notification drawer rehydration
 */

const CACHE_NAME = 'transe-music-v2';
let cachedMediaState = null;

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Receive continuous state updates from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SYNC_MEDIA_STATE') {
    cachedMediaState = event.data.payload;
  }
});

// Background Sync API: triggered when OS wakes up or regains connectivity
self.addEventListener('sync', (event) => {
  if (event.tag === 'media-keepalive-sync' || event.tag === 'transe-bg-sync') {
    event.waitUntil(broadcastRehydrate());
  }
});

// Periodic Background Sync (Android Chrome)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'transe-media-audit') {
    event.waitUntil(broadcastRehydrate());
  }
});

async function broadcastRehydrate() {
  const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
  for (const client of clients) {
    client.postMessage({
      type: 'REHYDRATE_MEDIA_SESSION',
      payload: cachedMediaState,
    });
  }
}
