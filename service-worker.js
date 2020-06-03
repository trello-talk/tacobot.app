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
    "revision": "15591db400fbbc0f9714de82d4f65308"
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
    "url": "assets/js/11.1257cc8b.js",
    "revision": "ad897a835cbc8183cc35548035285677"
  },
  {
    "url": "assets/js/12.eab9cf34.js",
    "revision": "49605d5d0f4429539554b9ee9b522a2c"
  },
  {
    "url": "assets/js/13.73651c91.js",
    "revision": "26da93d6301635eb608f118114845f23"
  },
  {
    "url": "assets/js/14.bedaaebd.js",
    "revision": "ff2f4cdedefe8301def8335ccc4730b7"
  },
  {
    "url": "assets/js/15.904d6713.js",
    "revision": "e99356cccae9b9600aad0e5b9d5cfa14"
  },
  {
    "url": "assets/js/16.0af62c25.js",
    "revision": "b4fcd83f58cae9d204fab8592b5f29f0"
  },
  {
    "url": "assets/js/17.2430ac06.js",
    "revision": "28f9605c95c1bf2c4f0c962369685568"
  },
  {
    "url": "assets/js/18.5a6ab25d.js",
    "revision": "5da7c1ab1649c3b967bce4f9f91fc38d"
  },
  {
    "url": "assets/js/19.1db551a3.js",
    "revision": "745c480107b47f3c7c9f60b6feedf896"
  },
  {
    "url": "assets/js/2.61e2775a.js",
    "revision": "012236e5cd4cd72ab4ae96898ee2f102"
  },
  {
    "url": "assets/js/20.0b7d3ccf.js",
    "revision": "a94b21dc20eb054ab5f818a24c1313c9"
  },
  {
    "url": "assets/js/21.d4cc36cd.js",
    "revision": "3c1c0abdf528ca756a6954908eab4f13"
  },
  {
    "url": "assets/js/22.e0c10912.js",
    "revision": "5282c7b2b434ab5caeac82c1b623632c"
  },
  {
    "url": "assets/js/23.5b543d93.js",
    "revision": "c260b7c8c1ce18af1888a73a9587f23a"
  },
  {
    "url": "assets/js/24.440de013.js",
    "revision": "b8a07dd11b54755b2f5d8774ce4cb614"
  },
  {
    "url": "assets/js/25.6bddd1d5.js",
    "revision": "bfde3b3ebed4b5130707de4ae0997a93"
  },
  {
    "url": "assets/js/26.f32f757c.js",
    "revision": "9984ba727778d8baec8e9e0d60952caa"
  },
  {
    "url": "assets/js/27.1eebe842.js",
    "revision": "57b63aa2b7eca23cad240d7c2e3e1c58"
  },
  {
    "url": "assets/js/28.84fdeb65.js",
    "revision": "66d2aacc608c93422903ae32660921cd"
  },
  {
    "url": "assets/js/29.c8584470.js",
    "revision": "67d3f4277662c8b39c54f394b609dd30"
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
    "url": "assets/js/6.67e1ed75.js",
    "revision": "b6f84ec40464eabfe5b2ff770cc161b6"
  },
  {
    "url": "assets/js/7.29951de5.js",
    "revision": "c2a1609828dd822019d1b4997fd58c7b"
  },
  {
    "url": "assets/js/8.d38ebef7.js",
    "revision": "a526ea15437c509a8b1484f054e9b909"
  },
  {
    "url": "assets/js/9.ad946159.js",
    "revision": "547ae4e78f7ec81b84f927b0f15367d7"
  },
  {
    "url": "assets/js/app.aca2986f.js",
    "revision": "b583bbafa7e0c77918f1f40bcf79a9ad"
  },
  {
    "url": "guide/auth/index.html",
    "revision": "b9f3ec00f494b6134c94dbc4fa367b21"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "f5ed279ce0e23f9e0a6ef75d7ab9dc4c"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "af3441d6a68cfa42bb2f8df1f2f20630"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "859b41cba1d346eb3bd2bfc752d666df"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "b3d84e7b91e29321e64b25c77485bc48"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "8831ea975ae815f16fadf7d6def019b0"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "f8336e0d58315dab891b12c39ec39c71"
  },
  {
    "url": "guide/index.html",
    "revision": "ab6eb9e899d0b4581da30a3957f562d2"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "f092106a0cb70d9cbfc457745b2f4a7f"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "da79635c0e63c5d8930d36d1bade011b"
  },
  {
    "url": "guide/other/index.html",
    "revision": "9eb5a428a04761d7dc36937d440ab90d"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "7b85b48da840a6faabd8b2a70df145bf"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "8af09dbbaa069ea23eceaf1f420dd404"
  },
  {
    "url": "index.html",
    "revision": "5fe067e53ba9ab979a3fd3d6e338189f"
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
