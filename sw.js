/* Service worker: app shell precache + offline map tiles */
const VERSION = "v3";
const SHELL_CACHE = `bw-shell-${VERSION}`;
const TILE_CACHE = "bw-tiles-v1"; // shared with the in-app downloader; not versioned

const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./js/app.js",
  "./js/data.js",
  "./js/route.js",
  "./vendor/leaflet/leaflet.js",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/images/marker-icon.png",
  "./vendor/leaflet/images/marker-icon-2x.png",
  "./vendor/leaflet/images/marker-shadow.png",
  "./vendor/leaflet/images/layers.png",
  "./vendor/leaflet/images/layers-2x.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(SHELL_CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith("bw-shell-") && k !== SHELL_CACHE)
          .map(k => caches.delete(k))
      )
    )
    .then(() => self.clients.claim())
    // reload open pages so a new version applies immediately instead of
    // showing stale UI until the next launch
    .then(() => self.clients.matchAll({ type: "window" }))
    .then(clients => Promise.all(
      clients.map(c => c.navigate(c.url).catch(() => {}))
    ))
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Map tiles: cache-first, then network (and store what we fetch)
  if (url.hostname === "tile.openstreetmap.org") {
    e.respondWith(
      caches.open(TILE_CACHE).then(async cache => {
        const hit = await cache.match(e.request);
        if (hit) return hit;
        try {
          const res = await fetch(e.request);
          // opaque = no-cors <img> load; still cacheable and servable
          if (res.ok || res.type === "opaque") cache.put(e.request, res.clone());
          return res;
        } catch (err) {
          // offline and tile not cached: transparent 1×1 png so the map doesn't break
          return new Response(
            Uint8Array.from(atob(
              "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            ), c => c.charCodeAt(0)),
            { headers: { "Content-Type": "image/png" } }
          );
        }
      })
    );
    return;
  }

  // App shell: cache-first, network fallback, navigation falls back to index.html
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true }).then(hit =>
        hit ||
        fetch(e.request).then(res => {
          if (res.ok && e.request.method === "GET") {
            const copy = res.clone();
            caches.open(SHELL_CACHE).then(c => c.put(e.request, copy));
          }
          return res;
        }).catch(() =>
          e.request.mode === "navigate" ? caches.match("./index.html") : Response.error()
        )
      )
    );
  }
});
