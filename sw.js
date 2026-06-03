self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('portfolio-v1').then((cache) => {
      return cache.addAll([
        'assets/index.html',
        'stocks/index.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
