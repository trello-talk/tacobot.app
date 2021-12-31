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
    "revision": "8e82090c7a5711ca9050a46943ec24fd"
  },
  {
    "url": "assets/css/0.styles.a0a5e220.css",
    "revision": "90751618a86b44ba434fcf7884a7db82"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.901620f0.js",
    "revision": "3e2b736102a465f8743bc9d3e5435f83"
  },
  {
    "url": "assets/js/11.dc496415.js",
    "revision": "99cc84590f6a9bd1b572aa87c98250c3"
  },
  {
    "url": "assets/js/12.55dd4ec2.js",
    "revision": "eb3501452855f855104323e468eab26a"
  },
  {
    "url": "assets/js/13.22932635.js",
    "revision": "f337eaa8cedd6f550f39b4e7e2e11bd2"
  },
  {
    "url": "assets/js/14.a11db921.js",
    "revision": "cb6c13278f98f15d4e8cc462a6ab5100"
  },
  {
    "url": "assets/js/15.51ca93d2.js",
    "revision": "3e2480237f1bc5ad0daedd6a240943d1"
  },
  {
    "url": "assets/js/16.dfd59ae1.js",
    "revision": "6d68aa23a1a67b5182c4ef469cf4d8a6"
  },
  {
    "url": "assets/js/17.8173a833.js",
    "revision": "32c2c0568e0062bb5c22edb1d8d2a113"
  },
  {
    "url": "assets/js/18.6155af23.js",
    "revision": "4bc4d382ac299f131e68e1301db16b7c"
  },
  {
    "url": "assets/js/19.3bc72943.js",
    "revision": "9a1892497ce43ee49c6547096985d1c2"
  },
  {
    "url": "assets/js/2.86409ae9.js",
    "revision": "9d2136dbb014f71c6727ea1e7a44a25f"
  },
  {
    "url": "assets/js/20.c4a6404a.js",
    "revision": "dfbe2432e0594aa7b07d20072a056c90"
  },
  {
    "url": "assets/js/21.77cfced0.js",
    "revision": "2b8c031c164ed59c0e1284032b9b711b"
  },
  {
    "url": "assets/js/22.b163888c.js",
    "revision": "2a947499008870d275885eb1a0655b45"
  },
  {
    "url": "assets/js/23.11428983.js",
    "revision": "4dc17e5a33e60f83ce5d38d3c1c726ef"
  },
  {
    "url": "assets/js/24.8caf6dee.js",
    "revision": "71263a1cc5f8e4748e00e2297ff293ae"
  },
  {
    "url": "assets/js/25.01f10af5.js",
    "revision": "dda6037a1452d32e2f26faf63b8b3831"
  },
  {
    "url": "assets/js/26.702694ae.js",
    "revision": "3ef7f874710eb851138cb8265ae4dd5f"
  },
  {
    "url": "assets/js/27.91b10549.js",
    "revision": "e8236e0590f043673b379bd61e0495a0"
  },
  {
    "url": "assets/js/28.f9189510.js",
    "revision": "22aa17790c3c6f1c52b8cd4737208842"
  },
  {
    "url": "assets/js/29.7f6184d7.js",
    "revision": "8eae13f90ee5763030a3713ac0e64ffa"
  },
  {
    "url": "assets/js/3.f3d17aee.js",
    "revision": "071d5f699ab2587b9ce65d02c2ae8b72"
  },
  {
    "url": "assets/js/30.e7cc8eb5.js",
    "revision": "0a04a86c8002aee6ab4c8b2289e1ffc4"
  },
  {
    "url": "assets/js/31.db58411a.js",
    "revision": "6ace1a719d44ef44c3d15758ee0209bb"
  },
  {
    "url": "assets/js/32.257e64af.js",
    "revision": "a93b33de86aaa3505681c02d92ff00bd"
  },
  {
    "url": "assets/js/33.fe4e97b5.js",
    "revision": "282fc704f7a3730f5f0a3c0b56de7b27"
  },
  {
    "url": "assets/js/34.7091e7ab.js",
    "revision": "793e008c83f421f0cbbf6d3698f9470f"
  },
  {
    "url": "assets/js/35.65855957.js",
    "revision": "f33e4bfcd9654d3febf96c6b3d25fed7"
  },
  {
    "url": "assets/js/36.f2b8cc02.js",
    "revision": "992e290f75c410ffa1d4562d0fa7e70c"
  },
  {
    "url": "assets/js/37.b1e53d99.js",
    "revision": "8bf36a4085234bd02322eef6fa196d63"
  },
  {
    "url": "assets/js/38.5a21894e.js",
    "revision": "af248bd22fa59926b7eb873684304851"
  },
  {
    "url": "assets/js/39.40d93766.js",
    "revision": "ab6df605a2dddd2c6af90159e8ba006c"
  },
  {
    "url": "assets/js/4.edc2ab15.js",
    "revision": "82c62ac3854277ced65bbb068398636d"
  },
  {
    "url": "assets/js/5.72fc82e1.js",
    "revision": "4a530c27acec3feb7d719efa85f09f94"
  },
  {
    "url": "assets/js/6.1cde55a2.js",
    "revision": "df8b998f9fc8740d0292dccb5927f08c"
  },
  {
    "url": "assets/js/7.4a3dd978.js",
    "revision": "0834ccbec99093a0a0dff192a5a052aa"
  },
  {
    "url": "assets/js/8.6203719f.js",
    "revision": "eb8a55849410d68653373f674ede7bc6"
  },
  {
    "url": "assets/js/9.f59c5608.js",
    "revision": "c42fcfd6a8a6508eee0aeb31f5b008cf"
  },
  {
    "url": "assets/js/app.057cb647.js",
    "revision": "b3fb1811551c880f51e6863e03ce229d"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "29fb5f2fdd198740836e2b1fb6e88751"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "f10ee0a675266370f2bf95dbc1a7c7e5"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "a6f37788c6657b04c984e61bf391b18c"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "ff74c249d7fe2a6a87792aec8cdfb8ca"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "fc7935b6aa279a3eb6dd3e43012a58b3"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "c0e3d48953564e9513ef1cc319616897"
  },
  {
    "url": "guide/index.html",
    "revision": "1ade61baec6df4c5eed03b8e11618c1e"
  },
  {
    "url": "guide/other/botlists/index.html",
    "revision": "f3df97684cf7b4381f12549bbbcd16c6"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "929261e29e178bd5ffe3398ad343ab44"
  },
  {
    "url": "guide/other/contact/index.html",
    "revision": "c7dc7320c16bd4731d05e6c9fe452efd"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "1f8f40ffe5c645d0ce15fa24310dbb82"
  },
  {
    "url": "guide/other/index.html",
    "revision": "9d3c4472b232c1d13ec52b70f7a702a4"
  },
  {
    "url": "guide/other/privacy/index.html",
    "revision": "2aa9c9299defac9b3ba12bb8475e2998"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "b5adbaf185448422e876ab75a2c3bb72"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "9807a494d42a530a7f6610afb4b84062"
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
    "url": "images/addwebhook_example3_original.png",
    "revision": "43d4518de57ec7c2f0717c0517bc587f"
  },
  {
    "url": "images/addwebhook_example3.jpg",
    "revision": "b058925c84dab312c47d2ca664e328a9"
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
    "url": "images/features/filters_original.png",
    "revision": "9b23111cff564b06bf9554c8e15ca124"
  },
  {
    "url": "images/features/filters.jpg",
    "revision": "26b419cb21feb3bdfeb6feae12b98b40"
  },
  {
    "url": "images/features/interactive_original.png",
    "revision": "a7ab3379bdaa715a9a9f7a4d4c13bbc8"
  },
  {
    "url": "images/features/interactive.jpg",
    "revision": "bbdc251a7ce4e20b62f34e96436ea78f"
  },
  {
    "url": "images/features/localize_repair_original.png",
    "revision": "2b97960e4dea4df42eabfa426e64789e"
  },
  {
    "url": "images/features/localize_repair.jpg",
    "revision": "1900ac7df09b55160cbb8154598e0dc5"
  },
  {
    "url": "images/features/mgmt_original.png",
    "revision": "1ec14ef011929582253dd895566656ba"
  },
  {
    "url": "images/features/mgmt.jpg",
    "revision": "77e6cc1666022fbf67a3fd5af018ccf5"
  },
  {
    "url": "images/features/notified_original.png",
    "revision": "887d209c576db009e619ef14efac3e0c"
  },
  {
    "url": "images/features/notified.jpg",
    "revision": "4b7ff05ee0ad181b50f23e3dea3b22c5"
  },
  {
    "url": "images/features/styles_original.png",
    "revision": "6b7190cb5c010cb49ae0136123e889fb"
  },
  {
    "url": "images/features/styles.jpg",
    "revision": "9f3042c44a7264db9c1695f111ce3b10"
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
    "revision": "87244c93650970af2554d07a03523b7f"
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
