const CACHE_NAME = "demo/v2";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(["/index.html", "/style.css", "/source.js"]);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const cloneData = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });
        return res;
      })
      .catch(() => {
        return cache.match(e.request).then((file) => file);
      })
  );
});
