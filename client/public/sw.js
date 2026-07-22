const CACHE_VERSION = "whr-cache-v2.0.0";

const APP_SHELL_CACHE = `${CACHE_VERSION}-app-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

const ALLOWED_CACHE_NAMES = [APP_SHELL_CACHE, RUNTIME_CACHE, IMAGE_CACHE];

const BASE_URL = self.registration.scope;

const PRECACHE_URLS = [
  "",
  "images/ChamberofCombFooter.png",
  "images/gold-brush-texture.webp",
  "images/gold-stone-texture.webp",
  "images/safetyWarehouse.jpg",
  "images/soft-gold-marble-texture.webp",
  "images/usingLaptop.jpg",
  "images/whr-building.webp",
  "images/whr-logo.png",
  "images/white-marble-texture.webp"
].map((path) => new URL(path, BASE_URL).toString());

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then(async (cache) => {
      await Promise.allSettled(
        PRECACHE_URLS.map((url) =>
          cache.add(new Request(url, { cache: "reload" }))
        )
      );
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => !ALLOWED_CACHE_NAMES.includes(cacheName))
            .map((cacheName) => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data?.type === "CLEAR_WHR_CACHE") {
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))))
    );
  }
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  if (requestUrl.pathname.includes("/api/")) {
    event.respondWith(fetch(request));
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  if (request.destination === "image") {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE, 60));
    return;
  }

  if (
    request.destination === "script" ||
    request.destination === "style" ||
    request.destination === "font" ||
    request.destination === "worker"
  ) {
    event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE, 50));
    return;
  }

  event.respondWith(networkFirst(request));
});

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);

  try {
    const freshResponse = await fetch(request);

    if (freshResponse && freshResponse.ok) {
      cache.put(request, freshResponse.clone());
    }

    return freshResponse;
  } catch {
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    const fallbackShell = await caches.match(BASE_URL);

    if (fallbackShell) {
      return fallbackShell;
    }

    throw new Error("Network request failed and no cache fallback exists.");
  }
}

async function staleWhileRevalidate(request, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  const fetchPromise = fetch(request)
    .then(async (networkResponse) => {
      if (networkResponse && networkResponse.ok) {
        await cache.put(request, networkResponse.clone());
        await trimCache(cacheName, maxEntries);
      }

      return networkResponse;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  if (keys.length <= maxEntries) {
    return;
  }

  const keysToDelete = keys.slice(0, keys.length - maxEntries);
  await Promise.all(keysToDelete.map((key) => cache.delete(key)));
}
