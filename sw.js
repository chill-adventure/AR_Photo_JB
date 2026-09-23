self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// カメラ権限や外部通信を一切妨害しないスルー処理
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});