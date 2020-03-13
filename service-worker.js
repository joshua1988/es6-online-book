/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "32ea143fdb6b1f28fcf13bc008f9d0d1"
  },
  {
    "url": "assets/css/0.styles.048fa2d9.css",
    "revision": "9ffe14d91188af760a9ea46fc7332ca2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dda85865.js",
    "revision": "ea7e4034968442f4a78c21078dfb3e9d"
  },
  {
    "url": "assets/js/11.6322c35c.js",
    "revision": "c229f72108e5213a5c7aa898b238b146"
  },
  {
    "url": "assets/js/12.5a9780dd.js",
    "revision": "63cd7cc8177696f204bf4e59cf60cdc8"
  },
  {
    "url": "assets/js/13.8149c36e.js",
    "revision": "be1ed4f599eef549e0198ad4dae230f9"
  },
  {
    "url": "assets/js/14.72b6ba24.js",
    "revision": "4b895c762680d3cf786b6ac33e805998"
  },
  {
    "url": "assets/js/15.497b953b.js",
    "revision": "92eb4d101bd44e481dfbd0af110fa080"
  },
  {
    "url": "assets/js/2.ba394695.js",
    "revision": "bb1a83ff6da134be8b2ef2cbecdb292e"
  },
  {
    "url": "assets/js/3.4f9727e1.js",
    "revision": "68c0e23444dbbaad8c33c2a96f45f3d1"
  },
  {
    "url": "assets/js/4.f9d3fe50.js",
    "revision": "42caca11ce1cc97a6302cc8ff9a970cb"
  },
  {
    "url": "assets/js/5.75b55f2c.js",
    "revision": "7ef9150e9639740cc1c62ced2f386893"
  },
  {
    "url": "assets/js/6.9f937836.js",
    "revision": "47cdfe35604cdfbfa1fb637362d22821"
  },
  {
    "url": "assets/js/7.1a6ce8b0.js",
    "revision": "4bcdd4654deeba1d7d52c3095a403929"
  },
  {
    "url": "assets/js/8.78c77dee.js",
    "revision": "33a6c9138a30ef8dbbc1747fa37244bc"
  },
  {
    "url": "assets/js/9.80d6a1ee.js",
    "revision": "e9d0ba149835dfe1fe8dbd4bd70a7440"
  },
  {
    "url": "assets/js/app.a3f8e830.js",
    "revision": "a2e3199034e5bd9926c933406961f68f"
  },
  {
    "url": "const-let.html",
    "revision": "8ec57484f4de0e60a44493ec95964cf0"
  },
  {
    "url": "destructuring.html",
    "revision": "e8428b75b4894cade7f4c7d512163b2e"
  },
  {
    "url": "enhanced-object-literals.html",
    "revision": "1ecbafa0573c3d42ab15b9278fc3b82a"
  },
  {
    "url": "fat-arrow.html",
    "revision": "05b1fa201c4c3c995e0b6369318a9e5c"
  },
  {
    "url": "guide.html",
    "revision": "ca1dc6bb4664507fa9a1395f0d8b410b"
  },
  {
    "url": "images/icons/120x.png",
    "revision": "bdbb30ccb538ba228c8df4eead21e5de"
  },
  {
    "url": "images/icons/128x.png",
    "revision": "9c3ba34e48ac1acc8eaa5ac68a72c544"
  },
  {
    "url": "images/icons/144x.png",
    "revision": "202ab576d05bae1b5bef5706c6d16084"
  },
  {
    "url": "images/icons/152x.png",
    "revision": "c5a0fc796d0059ee5c400cd835aa30a4"
  },
  {
    "url": "images/icons/167x.png",
    "revision": "1881e234ec550072f06f0cb423e7c9bf"
  },
  {
    "url": "images/icons/180x.png",
    "revision": "af405def5da96beb1860580c52d99f5c"
  },
  {
    "url": "images/icons/192x.png",
    "revision": "3aa2b606bccadc8a3463c3ee24c03a96"
  },
  {
    "url": "images/icons/384x.png",
    "revision": "c8661c6f25676397bd24ea6f99054e19"
  },
  {
    "url": "images/icons/512x.png",
    "revision": "12a26264e5fb40aab70b51c375a5ab54"
  },
  {
    "url": "images/icons/72x.png",
    "revision": "692868f0e1e6c63ccd49fe843cb8382f"
  },
  {
    "url": "images/icons/96x.png",
    "revision": "4f4a131b91c32a1a509bdbd5e27dc636"
  },
  {
    "url": "index.html",
    "revision": "065309ad802dae310039bbd0c28237e1"
  },
  {
    "url": "logo.png",
    "revision": "f86547f8a0cdc19a7b62a82909ac02a5"
  },
  {
    "url": "modules.html",
    "revision": "adb27f63b30eea3ff7dfb079c47795a6"
  },
  {
    "url": "spread-operator.html",
    "revision": "9f7b7440b20a70b95f7a25eb6f7e33d7"
  },
  {
    "url": "template-literal.html",
    "revision": "5bf11fa9e88b0f0e670dd76bd64f43a5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
