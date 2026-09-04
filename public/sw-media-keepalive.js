/**
 * ====================================================================================
 * SERVICE WORKER: BACKGROUND MEDIA KEEPALIVE & SYNC
 * ====================================================================================
 *
 * Keeps media session lifecycle alive in the recent apps panel & notification drawer:
 * 1. PWA lifecycle management (install, activate, claim clients)
 * 2. Background Sync API support for deferred state synchronization
 * 3. Keeps notification drawer alive across tab throttling and low-memory conditions
 */

const CACHE_NAME = 'transe-music-media-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Cache media state received from main thread
let latestMediaState = null;

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'MEDIA_STATE_UPDATE') {
    latestMediaState = event.data.payload;
  }
});

// Background Sync API fallback: fires when system wakes up or regains connectivity
self.addEventListener('sync', (event) => {
  if (event.tag === 'media-keepalive-sync') {
    event.waitUntil(
      (async () => {
        const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        for (const client of clients) {
          client.postMessage({
            type: 'REHYDRATE_MEDIA_SESSION',
            payload: latestMediaState,
          });
        }
      })()
    );
  }
});
