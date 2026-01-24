self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("lab-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "lab.html",
        "whiteboard.html",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
