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
    "revision": "aceb6888af585bd6f54e09ed3b57d279"
  },
  {
    "url": "assets/css/0.styles.b329b0ec.css",
    "revision": "e4ca950e3bb5437860cb6d9e6e16800f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8253de36.js",
    "revision": "0b2d99e08fae9bfa662886768e385943"
  },
  {
    "url": "assets/js/11.67724b3a.js",
    "revision": "8db0ccaaab3e1af367f505d40b2cb600"
  },
  {
    "url": "assets/js/12.4ab4c88d.js",
    "revision": "cbaa4c1a8cd1373c1343b58c596d36dc"
  },
  {
    "url": "assets/js/13.f017063c.js",
    "revision": "3650a6044c4b6f416b69918702f6e529"
  },
  {
    "url": "assets/js/14.654f80a0.js",
    "revision": "349ac42b04d0ca8bc8d06fa0ab063532"
  },
  {
    "url": "assets/js/15.d12c6228.js",
    "revision": "88575ee4f7e5fce1bc2486e0d64f161d"
  },
  {
    "url": "assets/js/16.07fd5be0.js",
    "revision": "ccfd6a61ed080a39eda2972efbd1d34f"
  },
  {
    "url": "assets/js/17.208b5f70.js",
    "revision": "b082d8d15634f9fa9253125b404a8e17"
  },
  {
    "url": "assets/js/18.c409584b.js",
    "revision": "56a38df10883cc7ed5ac3dcb790693b6"
  },
  {
    "url": "assets/js/19.48918d26.js",
    "revision": "2b572ee2a062f1474cee144de5f8283f"
  },
  {
    "url": "assets/js/2.a82366af.js",
    "revision": "32a9a58264a4ed2bc22273900fe87bd0"
  },
  {
    "url": "assets/js/20.978076c7.js",
    "revision": "202ab6dbbcca50cbba91003e3960ba9a"
  },
  {
    "url": "assets/js/21.fed05c59.js",
    "revision": "79bd253d0545dc4118348aa955636256"
  },
  {
    "url": "assets/js/22.87ed74ea.js",
    "revision": "ed90d57a8bd4b40121a7fdff41308283"
  },
  {
    "url": "assets/js/23.05fa5053.js",
    "revision": "9fb276ef1e3095e148d6766ba42eaaba"
  },
  {
    "url": "assets/js/24.3e61078c.js",
    "revision": "56a34100260bee156671a0057346b6f2"
  },
  {
    "url": "assets/js/25.3ce8d13f.js",
    "revision": "f3c126486d1e3afea14acb0f9b692260"
  },
  {
    "url": "assets/js/26.cca330ad.js",
    "revision": "7634615b169389c92abbb30cc0b98ee0"
  },
  {
    "url": "assets/js/27.1cef5db0.js",
    "revision": "e8794ff1eeaf5b9d214de43459c13df9"
  },
  {
    "url": "assets/js/28.42b93ed9.js",
    "revision": "b747637890f54d69f48e808bfe729d7c"
  },
  {
    "url": "assets/js/29.3c43550e.js",
    "revision": "841eba6ab0767122c517a69a104819af"
  },
  {
    "url": "assets/js/3.a6caccd1.js",
    "revision": "2bf908d7099f811e74b252bade115b26"
  },
  {
    "url": "assets/js/30.0fd3299b.js",
    "revision": "1b78dbb4447cd4770514f307d9558fc6"
  },
  {
    "url": "assets/js/31.696f78c5.js",
    "revision": "0b3400ef579bf2a629efc175b0c0b0d9"
  },
  {
    "url": "assets/js/32.90688c98.js",
    "revision": "6dc53622305272c5bdb07ae21715cc25"
  },
  {
    "url": "assets/js/4.560cafde.js",
    "revision": "2cbb9b4f07ba2a0f7847a69e7fc0b411"
  },
  {
    "url": "assets/js/5.dd946876.js",
    "revision": "d84b136db70246923a8e8caf71c4fe48"
  },
  {
    "url": "assets/js/6.38b56264.js",
    "revision": "3761647fc4056a993cd607dff06dcd20"
  },
  {
    "url": "assets/js/7.bff1e3a5.js",
    "revision": "b2a0ece50729c4682679dd540fc8dabf"
  },
  {
    "url": "assets/js/8.9e998b98.js",
    "revision": "cecbddbb0ff8c6195a9082aa2bd50a22"
  },
  {
    "url": "assets/js/9.340be409.js",
    "revision": "b44baace5b39367558732557be9b7753"
  },
  {
    "url": "assets/js/app.66db92e8.js",
    "revision": "9de25b93a1c05ef35fbfc1b84a395108"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "85ff3775e9f23931bbcec6a2fcb5de1b"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "5cc03c518bb0a5a004b6805f4212dd17"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "2ade15497c930499cc9be897e784ac3e"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "c63fe0ffbf4ccccf40b2646b9f1b7f8d"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "12605a3bc0580d8784595afa4432bb1e"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "dfbff8df4d9bd5e384f0ec201aa666aa"
  },
  {
    "url": "guide/index.html",
    "revision": "957dff032766980360f052eea1d1c241"
  },
  {
    "url": "guide/other/botlists/index.html",
    "revision": "094cad029b4e687659ee777c749a059d"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "d3e6d2d948f92f433a85012a310f3d08"
  },
  {
    "url": "guide/other/contact/index.html",
    "revision": "ad6f9420db0cbf40bcc21e5ff0777b70"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "72b85f589ab92300da0cae3c65e7e9d5"
  },
  {
    "url": "guide/other/index.html",
    "revision": "bce08450f93ba9f0aa6a3944dcc50d0e"
  },
  {
    "url": "guide/other/privacy/index.html",
    "revision": "13f050dd4fc6d16c455385323ca9dbf3"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "abc0eec29fa4d66c5806b688c00b860a"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "13a5a6d3cf169ace5a2fb47574b7daaa"
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
    "url": "images/webhook_style/compact.png",
    "revision": "9288d5a8597a249d7dfc5d9cf4313255"
  },
  {
    "url": "images/webhook_style/default.png",
    "revision": "480b36bb0c2f283af19f002722d523ab"
  },
  {
    "url": "images/webhook_style/small.png",
    "revision": "7eb7bca69c7abd7ba6f69a81714626ea"
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
    "revision": "294cbf4f45f14dc24c8c043739c5ab30"
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
