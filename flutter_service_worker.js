'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "19d117f3a5841b3aedb1453d6b47178e",
"version.json": "7ebc1bd579087d7be0ca82770cc5e9ba",
"index.html": "8ff05e26217b5e54202c9bf8ccf3c068",
"/": "8ff05e26217b5e54202c9bf8ccf3c068",
"main.dart.js": "fda405583be6c1a6cbfa8d62b97ab944",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fd7c226f95281443ee9ed461c7827697",
"assets/AssetManifest.json": "04bb89fe937595f573ff3157c7add086",
"assets/NOTICES": "b4343bfb0eb0e895b2e76982e701f47a",
"assets/FontManifest.json": "b26f2b839f6b0e233b8ec93c0c85d852",
"assets/AssetManifest.bin.json": "a86e07f9cf48effe6664aa2079b618ba",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7d5becc31c1fd39180974ddfbbf3c369",
"assets/fonts/MaterialIcons-Regular.otf": "e2947532d17430a49661846f63963314",
"assets/assets/pngs/images/insects.png": "856ebec7e58db757c7fee3dcf1e2ff99",
"assets/assets/pngs/images/farm.png": "35ad99bcf97c6037d441a70adf419d44",
"assets/assets/pngs/images/aquatic.png": "c6379dd7a42e64a5e784449596fc4b43",
"assets/assets/pngs/images/reptiles.png": "bc3a2a44de894777721c75cdacc886ca",
"assets/assets/pngs/images/amphibians.png": "303a7456aad696e9ea0cea0f606f9299",
"assets/assets/pngs/images/logo.png": "168a37598d399eeebbca6548ea815119",
"assets/assets/pngs/images/wild.png": "236b8a1e2a3d9ec3c57b8f0f4c4d6fea",
"assets/assets/pngs/images/pet.png": "1ccc7dfa222a8cdb0f9d9f79b62779df",
"assets/assets/pngs/images/birds.png": "a517d000e3bcff835958e6322c58ea66",
"assets/assets/pngs/images/domestic.png": "c70f4409ee87d37ded6119aac9f434c6",
"assets/assets/pngs/images/endangered.png": "8fdd2a9ae4a4f17c5dc031ed53a8edb7",
"assets/assets/pngs/common/splash.png": "94cbe7772b4a914ff19ea137b02fe908",
"assets/assets/pngs/common/logo.png": "168a37598d399eeebbca6548ea815119",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/animation/ios.gif": "783eace48116c4a418987ce6adf915e0",
"assets/assets/animation/loading_circle.flr": "04f754ab3bd3a3837171cfda0c7971f6",
"assets/assets/languages/en.json": "734056254030914fc024645254011943",
"assets/assets/svgs/common/home.svg": "7dfaac72f33051131d10397b2fa20efe",
"assets/assets/svgs/common/rotate.svg": "c392f4c1df6883a0d8afab43db85740e",
"assets/assets/svgs/common/back_arrow.svg": "0cb1c79808edfece362316ee1f5075e5",
"assets/assets/svgs/common/right_arrow.svg": "8b5f6e69f70a87aa5fa1e33e8fbd0386",
"assets/assets/svgs/common/login_image.svg": "cf2739a34b411def9f04f316214c1358",
"assets/assets/svgs/common/circle_check.svg": "95beaa41cd17642b13f2bd411c98f62b",
"assets/assets/svgs/common/gallery.svg": "a380947d44934fa27f867966c679c08d",
"assets/assets/svgs/common/recharge.svg": "f43aac21c85162693bbae792927aa728",
"assets/assets/svgs/common/warning.svg": "ddd2479483e04cd280b635a720c9c493",
"assets/assets/svgs/common/edit_pen.svg": "c0be8187760117b4c796bd5dbb4f00a7",
"assets/assets/svgs/common/refresh.svg": "a0d5a787bb26c52953dc76eef9e7adfc",
"assets/assets/svgs/common/notification.svg": "84bc8ecd84762f5ad31287574e090812",
"assets/assets/svgs/common/camera.svg": "01d105c8b2dc782f20057464ba6e5df2",
"assets/assets/svgs/common/drawer_icon.svg": "e5791943aa144c26e33c443c273ab016",
"assets/assets/svgs/common/profile.svg": "3967e51b4e9273286394f7d419f54d8c",
"assets/assets/svgs/common/flip.svg": "12fb3c155aa535ab6c454451dea8e7d2",
"assets/assets/svgs/common/data_not_found.svg": "cfa6ad501d4584d8eb4d9a4062b28143",
"assets/assets/svgs/common/cancle_button.svg": "b8197df87b117206a0d455127938a04e",
"assets/assets/svgs/animals/setting.svg": "9e773e9d6dda0c2e8930308d4fc4c65b",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
