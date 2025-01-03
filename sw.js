self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('proyectos-v1').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json',
                'https://i.postimg.cc/kDrmdkK3/TRANSPARENTE.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
 
