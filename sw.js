// Spelling Bee service worker
//
// Network-first for everything on this site: when online the app always gets
// the newest game and word lists, and each response is saved so the game
// still opens (with every week's words) when offline.
//
// You don't need to edit this file when you change index.html or add a word
// list. Change CACHE_NAME only if you change the list of files below.
const CACHE_NAME = 'spelling-bee-v1';
const CORE_FILES = [
    './',
    './index.html',
    './logo.svg',
    './manifest.webmanifest',
    './icons/icon.svg',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/apple-touch-icon.png',
    './word-lists/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await Promise.all(CORE_FILES.map(url => cache.add(new Request(url, {cache: 'no-cache'})).catch(() => { })));
        // Also save every weekly list so they all work offline.
        try {
            const res = await fetch('./word-lists/manifest.json', {cache: 'no-cache'});
            const files = await res.json();
            await Promise.all(files.map(f => cache.add(new Request(`./word-lists/${f}`, {cache: 'no-cache'})).catch(() => { })));
        } catch (_) { }
        await self.skipWaiting();
    })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        const names = await caches.keys();
        await Promise.all(names.filter(n => n.startsWith('spelling-bee-') && n !== CACHE_NAME).map(n => caches.delete(n)));
        await self.clients.claim();
    })());
});

self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;

    event.respondWith((async () => {
        // Revalidate with the server instead of trusting the browser's HTTP
        // cache (GitHub Pages lets files go stale for up to 10 minutes).
        const netReq = req.cache === 'no-store'
            ? req
            : new Request(url.href, {cache: 'no-cache', credentials: 'same-origin'});
        try {
            const res = await fetch(netReq);
            if (res && res.ok && res.type === 'basic') {
                const copy = res.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(url.href, copy)).catch(() => { });
            }
            return res;
        } catch (err) {
            const cached = await caches.match(url.href, {ignoreSearch: true});
            if (cached) return cached;
            if (req.mode === 'navigate') {
                return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
            }
            return Response.error();
        }
    })());
});
