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
    "revision": "f3a3803baa4ba99268efc728e1f3d3a6"
  },
  {
    "url": "assets/css/0.styles.188ff78b.css",
    "revision": "a74b8b0586a3b31b2d380b860524a34c"
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
    "url": "assets/js/4.58ed9875.js",
    "revision": "e59f1aa876a6626256e3592c12316aea"
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
    "url": "assets/js/app.760bcee1.js",
    "revision": "8710055bcaaf8b7db118503e7661040f"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "bc6c7392b8739e69edf8922f21b44fbc"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "3b37f64a3c9a422b8717b5da2d5ffeed"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "e7c604edea180d7f5991ff758c96b7c5"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "c5fe08b4ba9f95d164660582e9f026da"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "d7bda3195db74b993780b76ad5016718"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "2a507643d2372588d2c180b855463d79"
  },
  {
    "url": "guide/index.html",
    "revision": "19b78b138420bc7002fde26061a7838d"
  },
  {
    "url": "guide/other/botlists/index.html",
    "revision": "b9274e08e08f928cfe6a57c95e414b2f"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "a21ac2e2de3d998b2292966dc878cb4f"
  },
  {
    "url": "guide/other/contact/index.html",
    "revision": "2dc7af521dccfd81bc7a49745f449b49"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "7634c356537eb9536dac2c16c7f006c4"
  },
  {
    "url": "guide/other/index.html",
    "revision": "52ab93d20bbe921c492ac666124952b3"
  },
  {
    "url": "guide/other/privacy/index.html",
    "revision": "2d88357529c8b136d3213f4b6967b536"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "eb7b26b216e1c90f174db227047511a5"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "c45de5c68a76460bebc71a45d6c72193"
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
    "revision": "769163fe921b6251bd839681556443ff"
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
