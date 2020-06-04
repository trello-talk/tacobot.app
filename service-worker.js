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
    "revision": "82e421e5da94140f7c36661bd3bf7b68"
  },
  {
    "url": "assets/css/0.styles.e6276f46.css",
    "revision": "e136361c239ab5070f7fbd177712dbef"
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
    "url": "assets/js/18.8b6df9ce.js",
    "revision": "38fcb38638a0e850d4439c83cbbab4af"
  },
  {
    "url": "assets/js/19.1db551a3.js",
    "revision": "745c480107b47f3c7c9f60b6feedf896"
  },
  {
    "url": "assets/js/2.4fc08f0f.js",
    "revision": "8a826d0b2ac5a57c83fd7b6f06549cfa"
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
    "url": "assets/js/23.7f6515a4.js",
    "revision": "c0fcd59d9acd1e937d9115cbd968fa20"
  },
  {
    "url": "assets/js/24.440de013.js",
    "revision": "b8a07dd11b54755b2f5d8774ce4cb614"
  },
  {
    "url": "assets/js/25.cecdb464.js",
    "revision": "95f02b75bff61f0822d4d4dfae3356f7"
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
    "url": "assets/js/3.eef2029d.js",
    "revision": "238a769f4b8f04b1a7cbdc5c9dd36208"
  },
  {
    "url": "assets/js/4.401cf0d2.js",
    "revision": "15d3fd3c5eaadd00af8ccd8377bbcb8b"
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
    "url": "assets/js/app.f4b111c7.js",
    "revision": "883ad38c9800da7ae3b8ae73375879e3"
  },
  {
    "url": "guide/auth/index.html",
    "revision": "b2e9eeff93d20523ad1888c0e782123c"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "c72bff566033ebaf32edab656aa56f64"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "e8b36bef32860250d7b935273ab5c17b"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "0fd52e35fa5a6cc95211645e2b1664d3"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "addc04c0a1a68b239e3fcdd74f5b5971"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "ae5fd014f7a1cabe178c8ff2b6765d55"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "3b57d2aea8b5be2f54aa54ce94947365"
  },
  {
    "url": "guide/index.html",
    "revision": "991c24105a8c6a934d0ee33773a1bef2"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "84363cc2d73b5c2ea00847e76d0b751b"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "b18c8b216461b0dcecd1bbd72d64a9cf"
  },
  {
    "url": "guide/other/index.html",
    "revision": "d56e38cbbc121dc63ef1c7179a675902"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "9a00a04e256ef5adc19ad15358e60396"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "068a184b0a552210cff427300cd4bad1"
  },
  {
    "url": "images/addwebhook_example_original.png",
    "revision": "734e4b420f3a7cdc50a895c9a3affb8c"
  },
  {
    "url": "images/addwebhook_example.jpg",
    "revision": "32e00d065856f32af5d05b5e3413e8b4"
  },
  {
    "url": "images/card_example_original.png",
    "revision": "75bec625003a3643d481368fb80d84bc"
  },
  {
    "url": "images/card_example.jpg",
    "revision": "17172a99420a8e268aa3b4eacb42a785"
  },
  {
    "url": "images/comment_example_original.png",
    "revision": "ae769a8e2a56e263cefff5be894f06b8"
  },
  {
    "url": "images/comment_example.jpg",
    "revision": "9f9345b713c9e44c965b51bfda9ec082"
  },
  {
    "url": "images/editcard_example_original.png",
    "revision": "c7e859e36f5d8327811fcb7972dbb37d"
  },
  {
    "url": "images/editcard_example.jpg",
    "revision": "0304ca81a025b30bcfe22d6df0331708"
  },
  {
    "url": "images/editwebhook_example_original.png",
    "revision": "284b96af6fcf15a9bf5a79f0484d00a3"
  },
  {
    "url": "images/editwebhook_example.jpg",
    "revision": "327b43306b69689471d968a6bc38db2c"
  },
  {
    "url": "images/locale_example_original.png",
    "revision": "b20e2987a3df3ad8b02c68abf76a8aa7"
  },
  {
    "url": "images/locale_example.jpg",
    "revision": "c0a73c2c78e4131eef5a85f935bfef06"
  },
  {
    "url": "images/me_example_original.png",
    "revision": "91f10ab0943ee0d25a0a3c2f2a68f433"
  },
  {
    "url": "images/me_example.jpg",
    "revision": "f53c068e604eb57e42d6ad9d48c199ef"
  },
  {
    "url": "images/prefix_example_original.png",
    "revision": "a36930a99ad42251142e056c3e2152bf"
  },
  {
    "url": "images/prefix_example.jpg",
    "revision": "191bb5258c71d22cdd2942d564f2b8e5"
  },
  {
    "url": "index.html",
    "revision": "3f62570c3cf373ebfa6c5a017dfa3e65"
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
