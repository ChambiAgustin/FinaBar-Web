const CACHE_NAME = 'fina-bar-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/menu.html',
  '/quiz.html',
  '/style.css',
  '/style.min.css',
  '/script.js',
  '/script.min.js',
  '/site.webmanifest',
  '/menu.json',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
