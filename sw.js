self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 最小限のキャッシュ透過処理
  e.respondWith(fetch(e.request));
});