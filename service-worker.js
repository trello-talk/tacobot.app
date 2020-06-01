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
    "revision": "f9fe95b8e9a52eb9306a700a4198d130"
  },
  {
    "url": "assets/css/0.styles.da8a086e.css",
    "revision": "3f6415a9cf15bf9bdb5a1f49a58a400b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b6ef107e.js",
    "revision": "98ae58a93d29ece54d8b88b57a1dcb2c"
  },
  {
    "url": "assets/js/11.efcf1343.js",
    "revision": "22572299ab26f6770f6051a0d5667a6a"
  },
  {
    "url": "assets/js/12.44d36e07.js",
    "revision": "2ee6b7280d916ec2f4bb0347d7b03715"
  },
  {
    "url": "assets/js/13.c5cfd579.js",
    "revision": "74cc31582c384aa8f6262cf1dce9cec9"
  },
  {
    "url": "assets/js/14.a70bcf09.js",
    "revision": "c7f7a4a794c66698e137096e57f45cc0"
  },
  {
    "url": "assets/js/15.57b65649.js",
    "revision": "7016ae9d3fd15d303607503fec74fdad"
  },
  {
    "url": "assets/js/16.20f97e0a.js",
    "revision": "e984f82e0778921f05b040eac6ca6e18"
  },
  {
    "url": "assets/js/17.d09b608b.js",
    "revision": "5653d1e83d81af5fb5e6d2093549f2fc"
  },
  {
    "url": "assets/js/18.7c3b6e61.js",
    "revision": "60901ddfdac95959ade5350d629b886c"
  },
  {
    "url": "assets/js/19.ddd7a45a.js",
    "revision": "c0e067dc1598624844db698cd12951c7"
  },
  {
    "url": "assets/js/2.c9bc8654.js",
    "revision": "3101c5fc60d28dd65529ac800ac1624b"
  },
  {
    "url": "assets/js/20.4ac78073.js",
    "revision": "3727cefb10ec633d0dafab36113fa4ac"
  },
  {
    "url": "assets/js/21.73a12044.js",
    "revision": "11d0f2cdfcd559b418cf1411c4ade307"
  },
  {
    "url": "assets/js/22.e1478ccb.js",
    "revision": "dcf3ed8c6368c84b3cb0b9a322fa75a2"
  },
  {
    "url": "assets/js/23.4eac0ae2.js",
    "revision": "52b0c5f0a5e9466562070ec9a7a7d7e0"
  },
  {
    "url": "assets/js/24.e34eb491.js",
    "revision": "3d3e664ba4707a825439cccc81e599a4"
  },
  {
    "url": "assets/js/25.f6ca5eb3.js",
    "revision": "ab095234e06499c9f2d112dfe1a3e4a6"
  },
  {
    "url": "assets/js/26.50763a0b.js",
    "revision": "36555aac2dff847b6c32d51d5359dca4"
  },
  {
    "url": "assets/js/27.09fcee64.js",
    "revision": "e696319fb7fe19b228203d7ae665c79e"
  },
  {
    "url": "assets/js/3.ec9947ac.js",
    "revision": "864124d77a07ca4b63c0070d0ce6878b"
  },
  {
    "url": "assets/js/4.580fc0fe.js",
    "revision": "98cc4d7f2886b6c0429a5e6d7b8bdd74"
  },
  {
    "url": "assets/js/5.fcba59f1.js",
    "revision": "93a5fbdbb5803d6b958b12f70b8838db"
  },
  {
    "url": "assets/js/6.794687ea.js",
    "revision": "38a051af7cf3b5dd9d0a7350435b3ec9"
  },
  {
    "url": "assets/js/7.66d36152.js",
    "revision": "5e14b356c767dfdd37af1394941b26d5"
  },
  {
    "url": "assets/js/8.6fa771ff.js",
    "revision": "a3dddc1189d8ef8ca6edfe1eaaf69101"
  },
  {
    "url": "assets/js/9.5d826d99.js",
    "revision": "99f8233f5b833da941a0b01fae2f1878"
  },
  {
    "url": "assets/js/app.2596d4c2.js",
    "revision": "ec825e9d2dafd6f7be194510402bf689"
  },
  {
    "url": "guide/auth/index.html",
    "revision": "0014ffa6cc05b0bdc8a893437ef042c8"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "55c2bc26d09c8dc068f181bd15da0dde"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "597377a91219760f14b5fd34c9f076a0"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "e99b0c5b615dcb801045c4f283057910"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "95301fef3b1c5d6e11306b4f3fbeb38a"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "5f00df7def69fd4c28d9f709dead7091"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "5724ced41247aa9d5b3e8fe9ff83bfcb"
  },
  {
    "url": "guide/index.html",
    "revision": "a3ae462e025a6df92628f2dbf2ee2386"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "8bc1b4a681f923f92d7bd80d00211c12"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "17c28f08c17818e3068ca7bb3804cb13"
  },
  {
    "url": "guide/other/index.html",
    "revision": "ed3ac0d8b840f85b33e2331625f693ab"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "ccec3fea2bd852b63b24b428cbfcdbc4"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "9a4a6d637a38c9a68318d94d131b2ed7"
  },
  {
    "url": "index.html",
    "revision": "cf7e89d5d61ae34abd51d341175a4998"
  },
  {
    "url": "logo_happy.png",
    "revision": "58d172cce956e365eabef94b93a26323"
  },
  {
    "url": "logo_happy.svg",
    "revision": "be8417e5043e415ec0dc528e41121b25"
  },
  {
    "url": "logo_sad.png",
    "revision": "563a8755b2585accef16c9e830aa350d"
  },
  {
    "url": "logo_sad.svg",
    "revision": "a775f57dcf5e8e7ee51d3fc129b8e4ad"
  },
  {
    "url": "logo/android-chrome-192x192.png",
    "revision": "4b6de7141d2b174bf7d8fa0527144ae4"
  },
  {
    "url": "logo/android-chrome-512x512.png",
    "revision": "c86231c13df055fcb8460d49dcd64966"
  },
  {
    "url": "logo/apple-touch-icon.png",
    "revision": "c016e09eec37c159192e3acae031d96e"
  },
  {
    "url": "logo/favicon-16x16.png",
    "revision": "97230c22023ece6492ad324a21bc8e0d"
  },
  {
    "url": "logo/favicon-32x32.png",
    "revision": "5251b3d00bb0bdf144a8fe2bcc360c87"
  },
  {
    "url": "logo/mstile-150x150.png",
    "revision": "d520c61d8ea8944df9d9bbe6677eb9fe"
  },
  {
    "url": "logo/safari-pinned-tab.svg",
    "revision": "3f29789c0f9e7d10a873834c82259da4"
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
