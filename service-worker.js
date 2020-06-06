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
    "revision": "d0729e085d121beff78d78d665d82897"
  },
  {
    "url": "assets/css/0.styles.8283377b.css",
    "revision": "e6a8bcce5411359e60da817e825c515d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b50569bf.js",
    "revision": "7d50c66d91e10b4f3706086b67278c2a"
  },
  {
    "url": "assets/js/11.647e8df8.js",
    "revision": "2345a760084af6958b9d62dc7bb38650"
  },
  {
    "url": "assets/js/12.b4410798.js",
    "revision": "de7fec0346c3bce59a3d20c6649b2ac9"
  },
  {
    "url": "assets/js/13.0fddeb55.js",
    "revision": "177c98d2ca30de9964a8a0c83ffe4dd6"
  },
  {
    "url": "assets/js/14.c3a83c20.js",
    "revision": "8fb161bb0a4ff53cd0e5168ca8a104cf"
  },
  {
    "url": "assets/js/15.e47fb337.js",
    "revision": "78635a0e179c7247d184f7c63d325868"
  },
  {
    "url": "assets/js/16.48016b2e.js",
    "revision": "dad4271dbc4361ae7ec86c614b8589d0"
  },
  {
    "url": "assets/js/17.271bc0ed.js",
    "revision": "a0fe6c2f422aec70a87334b4c2b50f0c"
  },
  {
    "url": "assets/js/18.4a5d4983.js",
    "revision": "68d5fa40a3d13bda2bbf1411e3acc87d"
  },
  {
    "url": "assets/js/19.004b90eb.js",
    "revision": "52c0ae94d4d01e11a10abf8da3761e8f"
  },
  {
    "url": "assets/js/2.dc529daa.js",
    "revision": "a9e458b8592c74c80ba9427feae4540c"
  },
  {
    "url": "assets/js/20.037189f1.js",
    "revision": "09bbdae8c432653ba72c0c4e909d0ead"
  },
  {
    "url": "assets/js/21.c417871f.js",
    "revision": "c5de552e3ee5c9a286b818091c084ba4"
  },
  {
    "url": "assets/js/22.84597cd9.js",
    "revision": "bd1d5826aa6fd09432a9ef2c7d2effc1"
  },
  {
    "url": "assets/js/23.b54bd501.js",
    "revision": "792bc7c4e520be3c90f07472a77ac3b2"
  },
  {
    "url": "assets/js/24.8e5f2b96.js",
    "revision": "66e79878071759b44a3145bc39d781c6"
  },
  {
    "url": "assets/js/25.79b79e78.js",
    "revision": "66b7ecbba848800444e5e1e0aedb1d15"
  },
  {
    "url": "assets/js/26.8e990ed5.js",
    "revision": "e0b16976e1ca2bce9d2e0014cba0c76a"
  },
  {
    "url": "assets/js/27.ad9e62b8.js",
    "revision": "94d8f44d46eabea34bf290283e41038d"
  },
  {
    "url": "assets/js/28.594c9444.js",
    "revision": "82890f03a4147dd187fee28d9ab18864"
  },
  {
    "url": "assets/js/29.be3d5377.js",
    "revision": "ef54285556e74c49209b0788d355aea0"
  },
  {
    "url": "assets/js/3.785388c2.js",
    "revision": "218ac67a14226b0bd9243f7456fc638e"
  },
  {
    "url": "assets/js/4.d83de99d.js",
    "revision": "9c60da6abff6808dc6aff89b76b844aa"
  },
  {
    "url": "assets/js/5.2014b70c.js",
    "revision": "7f13b9d1a17c2abef877150ac5d70882"
  },
  {
    "url": "assets/js/6.102bd09e.js",
    "revision": "e52a8e3cf6b841e07a7bd0c067c02728"
  },
  {
    "url": "assets/js/7.d9d9dab6.js",
    "revision": "03136595ea79251799a8a15043262480"
  },
  {
    "url": "assets/js/8.3061ae1c.js",
    "revision": "3065a6b79ad68c94e7b4a15af9225707"
  },
  {
    "url": "assets/js/9.ba5330ee.js",
    "revision": "de7b2fcf3aafded84d80d9471daf488d"
  },
  {
    "url": "assets/js/app.ff014c95.js",
    "revision": "ab525dc91a3f9b491d2d241f776a523c"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "7984597af4980a8921944b8f72560c07"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "56312f697b06a4b0c23cf751c5524835"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "cb7b23e1fdfe25ca850ce24d3ccd587d"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "8aa0e2e9a6071388065d505b0216db5d"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "e2c0abffdef11230d08f8eba428ee60c"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "13794da2898b5f026eb39893869422cc"
  },
  {
    "url": "guide/index.html",
    "revision": "ef0c656a4f0b8d3d5921cfc46d4b74e8"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "29102b814be96df3bb34f1b5a7212f74"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "0630a2ab90991623e430cd705afab7cb"
  },
  {
    "url": "guide/other/index.html",
    "revision": "6c08700db3e83680ab1f68b8bbdb9d75"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "682152e431504dc9dd7c88001543c197"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "9346bada79f592ca85325723ae250bf5"
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
    "url": "images/addwebhook_example2_original.png",
    "revision": "863116202e1f14b7cef5219e518cc695"
  },
  {
    "url": "images/addwebhook_example2.jpg",
    "revision": "2d6a1f90348f1728e9f1cfabf0bc945f"
  },
  {
    "url": "images/board_example_original.png",
    "revision": "8eae4a918413efb79e3175fcddf1fb20"
  },
  {
    "url": "images/board_example.jpg",
    "revision": "9123b995ec45b2a284a9adfebe849ee7"
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
    "url": "images/editboard_example_original.png",
    "revision": "00584871145d1b30289597b2b019da8b"
  },
  {
    "url": "images/editboard_example.jpg",
    "revision": "a0ed5d12e4c43aeb50ffa6b125f634b5"
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
    "url": "images/editlist_example_original.png",
    "revision": "0fb79ca12595521eda3f4d12a2967075"
  },
  {
    "url": "images/editlist_example.jpg",
    "revision": "8fd0cddbed7121e633b9d2702deeb674"
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
    "url": "images/editwebhook_example2_original.png",
    "revision": "c2a5f6c2f40bfabcb8dad694473ebdd2"
  },
  {
    "url": "images/editwebhook_example2.jpg",
    "revision": "bcd8b4df6d6838c6202b7fc51a0fea19"
  },
  {
    "url": "images/list_example_original.png",
    "revision": "a4b6b6140f7dbd7de79a4817e9452575"
  },
  {
    "url": "images/list_example.jpg",
    "revision": "350aa1ed3fe7c0cf347c9f3e770c6f1c"
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
    "url": "images/webhook_example_original.png",
    "revision": "b4348d96033ec2071f663277124a2302"
  },
  {
    "url": "images/webhook_example.jpg",
    "revision": "9da6f62b85ff375c1efd5410ee16f882"
  },
  {
    "url": "images/webhooks_example_original.png",
    "revision": "5f581c73a2d161cb1e29ad563d250f39"
  },
  {
    "url": "images/webhooks_example.jpg",
    "revision": "8f7181ef1dcc162df49135dd869beb48"
  },
  {
    "url": "index.html",
    "revision": "52c958f2d43f629bff57bd598e9bc1e5"
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
    "url": "logo_nightly_happy.svg",
    "revision": "b9fd7eb74fcbf50eaa164c6b7f6d1872"
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
