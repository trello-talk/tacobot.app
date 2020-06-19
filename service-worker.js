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
    "revision": "1a13907737f9f687af9295194c606a3e"
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
    "url": "assets/js/17.7925b5e0.js",
    "revision": "dbef3f15616f1ea5c3229f152a980b81"
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
    "url": "assets/js/23.1f0887d6.js",
    "revision": "b9769b09c623cb8f56d750094efa3f89"
  },
  {
    "url": "assets/js/24.8e5f2b96.js",
    "revision": "66e79878071759b44a3145bc39d781c6"
  },
  {
    "url": "assets/js/25.928c8743.js",
    "revision": "3b01d8aac4b36285b00a49894e209c37"
  },
  {
    "url": "assets/js/26.056bc6f3.js",
    "revision": "a52c9cba96ea89f0cae3a150dc2c31a5"
  },
  {
    "url": "assets/js/27.5a17fd1e.js",
    "revision": "374ec933a2153c8022e7aae3af9a4891"
  },
  {
    "url": "assets/js/28.9166d743.js",
    "revision": "0711ac3d71c9d73bacf109d22b73c745"
  },
  {
    "url": "assets/js/29.e1da14b7.js",
    "revision": "1f7c1fca399fa2820947924a37a4e66f"
  },
  {
    "url": "assets/js/3.785388c2.js",
    "revision": "218ac67a14226b0bd9243f7456fc638e"
  },
  {
    "url": "assets/js/30.ca9c717a.js",
    "revision": "ebe61c271a806040cbf677fcfc46b80e"
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
    "url": "assets/js/9.00d0c3e3.js",
    "revision": "449dc2bcc91e1e6c5113e3ccc011fb70"
  },
  {
    "url": "assets/js/app.86297be0.js",
    "revision": "6155c49ac99f2dce740eb8f05c66eb94"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "db69532c7afad70bc565d0aeaf7da5b0"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "9aff2cee85a0d39b10c98999966b443f"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "c904a04530cff53ec2d8344378066cd7"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "ee7d7f71a15d3b857107cd7b20671bb1"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "b8efef91d2280f550daee1d74cc2e373"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "26ac4644b050d578a3fa1006a57d1b95"
  },
  {
    "url": "guide/index.html",
    "revision": "fbceab1fced72efd0906aa00c552ab5d"
  },
  {
    "url": "guide/other/botlists/index.html",
    "revision": "6efc5398148f34df0e00ec981f4c82d5"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "ab10f2900a2550006b9bf2d606060421"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "19a7bd6175d30cab69fcfa6a956a129d"
  },
  {
    "url": "guide/other/index.html",
    "revision": "3039d330d3c264f85f14750f491da76c"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "592572b5e98e271ec8391b098b23ef92"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "0eccec3c0f34338930399bf735c84454"
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
    "url": "images/user/clab.png",
    "revision": "e629a6f91830e09cdce162c36372f65f"
  },
  {
    "url": "images/user/coolguy3289.png",
    "revision": "3d3573839a2972ac8dbc02e094036702"
  },
  {
    "url": "images/user/mystic.png",
    "revision": "3aae76fa508154b638598bd32bc507dc"
  },
  {
    "url": "images/user/snazzah.png",
    "revision": "436d2189a8f8823f4b9e3e652d9a8bb4"
  },
  {
    "url": "images/user/techguy9078.png",
    "revision": "c89f25b9de9495a2806fe516a1405e0f"
  },
  {
    "url": "images/user/yamboy.png",
    "revision": "6377afc31c0ad58360c14000f92e7f3f"
  },
  {
    "url": "images/user/yooks.png",
    "revision": "7545bce3d8424651bdad88079056f6ca"
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
    "revision": "480b9f12637c81864603e14fd7e2c631"
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
  },
  {
    "url": "taco-nightly-happy.png",
    "revision": "232380d9e233c160c45703dae361f689"
  },
  {
    "url": "tali.png",
    "revision": "4137ae98be89124f39c703cc766704c6"
  },
  {
    "url": "tali.svg",
    "revision": "ed25ae82bb2ca6910ba2fd9a011b9e4b"
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
