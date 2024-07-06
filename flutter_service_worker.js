'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-icon-192x192.png": "fe23752a1839a6771cce0e96c93abe19",
"assets/AssetManifest.bin": "c93c06822a833927a1372befbe687496",
"assets/AssetManifest.bin.json": "a9fd233e91f4ae359a431c9e60092874",
"assets/AssetManifest.json": "713c6ef729c16c78e3a6773f673c9607",
"assets/assets/animated_login.gif": "119e002cff3a962945962dbd3061a6c3",
"assets/assets/bubles_login.png": "e058af3ac30804dc3cf489f9112fcb6a",
"assets/assets/buildship.png": "47f97910fe96df0f0e5a1cd1ca9ae2e1",
"assets/assets/carrent.png": "bdc4bee645470dfbe36532df97c86834",
"assets/assets/cookies_ui.gif": "c5ba915fb2fd401c5033240bd0dd0695",
"assets/assets/crypto1.png": "ba9c64bf6ed42a8e0b6845173b924a2f",
"assets/assets/crypto2.png": "07f81263e3002338c81076baed1e0100",
"assets/assets/CV_Flutter.pdf": "015b645900002585e4306e6495aa248b",
"assets/assets/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/eshop.jpg": "3ced86d81760e932b2e31f4f84db8b13",
"assets/assets/ff.png": "b66b38718e1081e7ff666bc4246d415d",
"assets/assets/fir.png": "de1546f8bcc43f9252f70ff7509e468b",
"assets/assets/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/glass_login.png": "8e697815c319fc3494f122122c3b2bf7",
"assets/assets/hotels_ui.gif": "385e40d4b7a22f8d82d630d1420d08a5",
"assets/assets/lin.png": "7960cde0538c122ccab9cf122a7c5531",
"assets/assets/news.png": "da5f22bbab6010b98122741b7a99ea9c",
"assets/assets/news_app.gif": "6d48cb356cbc8b47d0c4d5bf82fd4881",
"assets/assets/pexels.gif": "775af05b75ab48f19bd35001e80b04b7",
"assets/assets/pexels.png": "e51e01d9064913f86f23adfc162f6e4d",
"assets/assets/plants_ui.gif": "d6c2ac54b5f2f233dc58f1da4a173f26",
"assets/assets/playstore%2520(1).png": "61ffd11173561ba75becfdea2da40219",
"assets/assets/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/pt1.gif": "298ba103f28b3d9aec88e0a0697b809a",
"assets/assets/pt2.gif": "2ce5667e17446dfd18bd00363c59cb1b",
"assets/assets/red_login.gif": "aa19e5b8ee7a23f536c3e4a170f7d537",
"assets/assets/samurai_app.png": "f091a6874badc6602d000bc26232215f",
"assets/assets/social.png": "ce3b4eb69ebfc35b42c34041024ba781",
"assets/assets/sqflite.png": "f697ba0c9244a5495766983a27636ff4",
"assets/assets/supabase.png": "31897aca639035129bcaa32db7d0edb4",
"assets/assets/SV.png": "d2ddee34f4da98f26cc16fb5d22817d4",
"assets/assets/travel_ui.gif": "ba0a9bb44ef79bc2048d64ef214cf468",
"assets/assets/weather.png": "d64a02a6dade46d2023af649aa0918f4",
"assets/assets/weather_app.gif": "9d712f5074949c38f021fd1f5551c27c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3dd2db925181ef0f2f834a2a73ccfbd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-32x32.png": "3631339262e6ffa12c8cbe8e261d8937",
"favicon-96x96.png": "72920c6eb2a66dfa593bea0d30d53c61",
"favicon.ico": "dad7deeed9448e706457bbc03ca82ee2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d5b3ab5e50f7d9fb98aec3f1a3bbd924",
"icons/ms-icon-150x150.png": "f8883935753d9d4e710b768a7a1c3073",
"icons/ms-icon-310x310.png": "9fa7c35f4ec75236bf05c5ab1d55232f",
"index.html": "56d02d9200d6d8814445a75c2984c6b8",
"/": "56d02d9200d6d8814445a75c2984c6b8",
"main.dart.js": "108358c9106c28e1fc7d6e91d3aa6ca6",
"manifest.json": "beee9df4cc0ca56c2d343258ba378df4",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
