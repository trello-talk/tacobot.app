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
    "revision": "ca138a00401719c20dcf61eb69763c0f"
  },
  {
    "url": "assets/css/0.styles.1736b659.css",
    "revision": "85f01482c915c9006e3e5d0b5657ee48"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26a65748.js",
    "revision": "5f7ea064820ad0b490e77ef62aad7235"
  },
  {
    "url": "assets/js/11.9d439d0b.js",
    "revision": "037ad68b59669221df778570ff944020"
  },
  {
    "url": "assets/js/12.b14231c4.js",
    "revision": "55dcfb423f6e938d79d224e8aa435906"
  },
  {
    "url": "assets/js/13.52be2f48.js",
    "revision": "242122b12b6d35c198bc3e7e865c619b"
  },
  {
    "url": "assets/js/14.13ac6843.js",
    "revision": "3665e6e83b2fb8af8f022525263fdcc5"
  },
  {
    "url": "assets/js/15.8e99eb71.js",
    "revision": "6cb774da4f054d4fa422e3862292b03a"
  },
  {
    "url": "assets/js/16.aaae725a.js",
    "revision": "df99315c54a1f4c526654050d4c7e01d"
  },
  {
    "url": "assets/js/17.5f8c500b.js",
    "revision": "fe85767c4cc8d131b34cac43fb8536f2"
  },
  {
    "url": "assets/js/18.691caeb3.js",
    "revision": "c0f6ba61c8f9deec4d15ceaafee1a902"
  },
  {
    "url": "assets/js/19.ad9650d2.js",
    "revision": "6f95bb7b34f4bd51b77b442feafde45a"
  },
  {
    "url": "assets/js/2.61e2775a.js",
    "revision": "012236e5cd4cd72ab4ae96898ee2f102"
  },
  {
    "url": "assets/js/20.7c8af1b1.js",
    "revision": "dbc0e4df74f41a5393edd053d78535ab"
  },
  {
    "url": "assets/js/21.7981c5e9.js",
    "revision": "320656e3b0850ede4028d892f6e25475"
  },
  {
    "url": "assets/js/22.53aacf19.js",
    "revision": "5bf70473ac34226cd37a158b2cce9d7e"
  },
  {
    "url": "assets/js/23.a6234b76.js",
    "revision": "9e226da8faff6e566c7c30cd91be466d"
  },
  {
    "url": "assets/js/24.d01de9b2.js",
    "revision": "71a1172f16206868baf094da7a470519"
  },
  {
    "url": "assets/js/25.c3685dbe.js",
    "revision": "18bf0ee750523899e9d7b03431b17357"
  },
  {
    "url": "assets/js/26.1cb489d4.js",
    "revision": "9308be176ef5d5ebf16c918b62578345"
  },
  {
    "url": "assets/js/27.474133aa.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.320c7af2.js",
    "revision": "3509f64b9d4f61c6ab12baaa4a3ef12b"
  },
  {
    "url": "assets/js/4.6237e6e7.js",
    "revision": "f1eb3d69d363f705ac90f2ccca8f7e60"
  },
  {
    "url": "assets/js/5.938e95dd.js",
    "revision": "acdb938b6a1fa33008d482230017253b"
  },
  {
    "url": "assets/js/6.2cd41f10.js",
    "revision": "c52841d9487e7ba55aeeacc39327f4a5"
  },
  {
    "url": "assets/js/7.4f14eb5e.js",
    "revision": "c88e69a4dda44bbdba622ba50e89dd4f"
  },
  {
    "url": "assets/js/8.75fd17e6.js",
    "revision": "48ef67c2504b4195d9b0b4d164c5871e"
  },
  {
    "url": "assets/js/9.ad946159.js",
    "revision": "547ae4e78f7ec81b84f927b0f15367d7"
  },
  {
    "url": "assets/js/app.2612bdb7.js",
    "revision": "f4457c7be47ebf8f01d14b80c0d60150"
  },
  {
    "url": "guide/auth/index.html",
    "revision": "7c9f7a5c2ba8392f9f23dbba87b4af89"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "b337562c0c58e417ae60ae3467d1a391"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "e6c16159c1ae855ccade7cfa2ad98d5a"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "9402b62904b122c75ac1f88437f8680a"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "737e419fca676296031d4771fa528042"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "cf489a94ba7acffc88eb6b9446d149cd"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "bdf3adc9a95cf5a791ef53a77f77332e"
  },
  {
    "url": "guide/index.html",
    "revision": "30ae1a8c55af44c601b4d1f068f837ed"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "0fb49252bca244adb871fe2bca03c66f"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "86b13c7110f458e7fbdb136d3cf791a7"
  },
  {
    "url": "guide/other/index.html",
    "revision": "61f1cf40b9518d4e9bf7361c7ca691c5"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "1b9afbd4e9f8537c2b5ab2614bdade8b"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "bbf681e092149c37d0d60aefa4e7ea7c"
  },
  {
    "url": "index.html",
    "revision": "904105b4d2ddf62b16cb9e28a136ef8d"
  },
  {
    "url": "logo_footer.png",
    "revision": "4a3d748deb78f45d39acb1e49f48e5ad"
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
  },
  {
    "url": "placeholder_discord.png",
    "revision": "a006bc78840a44612d15676522f74049"
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
