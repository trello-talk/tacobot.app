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
    "revision": "08fb44d9fd0c3864b0b676432ab10e3d"
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
    "url": "assets/js/app.6d4b64a3.js",
    "revision": "1efe2ab6ef63e320117e2435de71749d"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "13072fe5bd0eb6be80673c5200e4ad4b"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "d95894afd7f7a5786b5f359cfd48886d"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "ff4e5f44dce1aa099cf300edc9b726a0"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "ff8e271b03d38895b3d34af589e1f940"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "fb30c06137d05aaa2c32b415366140bd"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "b51b959febde56538ee7e41b5e2d7c69"
  },
  {
    "url": "guide/index.html",
    "revision": "6654b380902bf89d87ace17c3bec0205"
  },
  {
    "url": "guide/other/botlists/index.html",
    "revision": "0967bc223276334007923d273bd21ff7"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "897a28d74f94ff3a365b8f4dacf34b62"
  },
  {
    "url": "guide/other/contact/index.html",
    "revision": "4bc2cc978c36fc35718188ed3b51a832"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "c21191498d3abf38bb036b03b50df483"
  },
  {
    "url": "guide/other/index.html",
    "revision": "e4dfc227d372ffcfd6015d4141953a6e"
  },
  {
    "url": "guide/other/privacy/index.html",
    "revision": "f12ed532da58907932ed1de87a2950a2"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "6e65d83e98944a4a18825fb5ef266130"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "23e723edb3002ae0adf30b2b2ea343c3"
  },
  {
    "url": "images/addwebhook_example_original.png",
    "revision": "87bc8c4610a8225449840b0dc211d3bd"
  },
  {
    "url": "images/addwebhook_example.jpg",
    "revision": "32e00d065856f32af5d05b5e3413e8b4"
  },
  {
    "url": "images/addwebhook_example2_original.png",
    "revision": "a92158dc976d4331629894cce057d004"
  },
  {
    "url": "images/addwebhook_example2.jpg",
    "revision": "2d6a1f90348f1728e9f1cfabf0bc945f"
  },
  {
    "url": "images/board_example_original.png",
    "revision": "2a1fe50de7862402b7cbda7bd16dc8aa"
  },
  {
    "url": "images/board_example.jpg",
    "revision": "9123b995ec45b2a284a9adfebe849ee7"
  },
  {
    "url": "images/card_example_original.png",
    "revision": "93ee4e446cc57c2645ab377a9fe91154"
  },
  {
    "url": "images/card_example.jpg",
    "revision": "17172a99420a8e268aa3b4eacb42a785"
  },
  {
    "url": "images/comment_example_original.png",
    "revision": "4aa6746c74d668b4cb8bf5e754e869f5"
  },
  {
    "url": "images/comment_example.jpg",
    "revision": "9f9345b713c9e44c965b51bfda9ec082"
  },
  {
    "url": "images/editboard_example_original.png",
    "revision": "aac8cc3612c6751ab3cf941e4bb82638"
  },
  {
    "url": "images/editboard_example.jpg",
    "revision": "a0ed5d12e4c43aeb50ffa6b125f634b5"
  },
  {
    "url": "images/editcard_example_original.png",
    "revision": "a57892df936e6234a62a8e17e117cb82"
  },
  {
    "url": "images/editcard_example.jpg",
    "revision": "0304ca81a025b30bcfe22d6df0331708"
  },
  {
    "url": "images/editlist_example_original.png",
    "revision": "e18b9fd47a70c01d89fb4410cc9b7522"
  },
  {
    "url": "images/editlist_example.jpg",
    "revision": "8fd0cddbed7121e633b9d2702deeb674"
  },
  {
    "url": "images/editwebhook_example_original.png",
    "revision": "5fc7068ef48d7801f03f89bbc03729d1"
  },
  {
    "url": "images/editwebhook_example.jpg",
    "revision": "327b43306b69689471d968a6bc38db2c"
  },
  {
    "url": "images/editwebhook_example2_original.png",
    "revision": "a3cab0de9c47862852238493735cbfd7"
  },
  {
    "url": "images/editwebhook_example2.jpg",
    "revision": "bcd8b4df6d6838c6202b7fc51a0fea19"
  },
  {
    "url": "images/list_example_original.png",
    "revision": "bf9443a4f17779ad1a7371e5d943f0c6"
  },
  {
    "url": "images/list_example.jpg",
    "revision": "350aa1ed3fe7c0cf347c9f3e770c6f1c"
  },
  {
    "url": "images/locale_example_original.png",
    "revision": "1d9616028978c933c24069c8dc2d09ee"
  },
  {
    "url": "images/locale_example.jpg",
    "revision": "c0a73c2c78e4131eef5a85f935bfef06"
  },
  {
    "url": "images/me_example_original.png",
    "revision": "d7f562472b783d52da44a9e90d1f9b72"
  },
  {
    "url": "images/me_example.jpg",
    "revision": "f53c068e604eb57e42d6ad9d48c199ef"
  },
  {
    "url": "images/prefix_example_original.png",
    "revision": "42dff42b525a042359de4da0fa4ed927"
  },
  {
    "url": "images/prefix_example.jpg",
    "revision": "191bb5258c71d22cdd2942d564f2b8e5"
  },
  {
    "url": "images/user/clab.png",
    "revision": "4aefd5e1a430cbd45a07b06235cb193b"
  },
  {
    "url": "images/user/coolguy3289.png",
    "revision": "c2ebd94880e0d955c5a85e3348aa9e71"
  },
  {
    "url": "images/user/mystic.png",
    "revision": "bded1cb2d598474be39dd66a4de717b5"
  },
  {
    "url": "images/user/snazzah.png",
    "revision": "139a58572121eef93a314f8cf56a81be"
  },
  {
    "url": "images/user/techguy9078.png",
    "revision": "c89f25b9de9495a2806fe516a1405e0f"
  },
  {
    "url": "images/user/yamboy.png",
    "revision": "a027d724c7d2b0b3eba01cea4fc35ab4"
  },
  {
    "url": "images/user/yooks.png",
    "revision": "7545bce3d8424651bdad88079056f6ca"
  },
  {
    "url": "images/webhook_example_original.png",
    "revision": "fcc8dc69eb5b7537af3aa1d75131c322"
  },
  {
    "url": "images/webhook_example.jpg",
    "revision": "9da6f62b85ff375c1efd5410ee16f882"
  },
  {
    "url": "images/webhook_style/compact.png",
    "revision": "803026150420fdf7c78bf77fa8c171b7"
  },
  {
    "url": "images/webhook_style/default.png",
    "revision": "1982346b97aa92f7a574d5fae68e0d0a"
  },
  {
    "url": "images/webhook_style/small.png",
    "revision": "4014bf475071c47205c841183c712e99"
  },
  {
    "url": "images/webhooks_example_original.png",
    "revision": "ead0a7030897a7244e7c32ee692e6d7b"
  },
  {
    "url": "images/webhooks_example.jpg",
    "revision": "8f7181ef1dcc162df49135dd869beb48"
  },
  {
    "url": "index.html",
    "revision": "a2090b981e270e1a9c86405ee7037313"
  },
  {
    "url": "logo_footer.png",
    "revision": "ff4410d75e95d5ff95cd1398471dd747"
  },
  {
    "url": "logo_happy.png",
    "revision": "d785defd94022a00dca0e8d4e1fe11d8"
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
    "revision": "bce34552f17b7920a4d2833f09d1f130"
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
    "revision": "78e2ecd55cba81e876ed04841333bdcf"
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
    "revision": "bd3524320f24eff773874436d5553531"
  },
  {
    "url": "placeholder_discord.png",
    "revision": "57fd114ebb12209f88e6f951b2b5002f"
  },
  {
    "url": "taco-nightly-happy.png",
    "revision": "eb08283cc1fb0af997213f08eac518f5"
  },
  {
    "url": "tali.png",
    "revision": "0d39309c87ad9a73f6aad2dc673fcf90"
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
