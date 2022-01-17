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
    "revision": "5c397e094c49221f3d3d66d992815600"
  },
  {
    "url": "assets/css/0.styles.5a8e0a6b.css",
    "revision": "33147e5ad5f526760c59408d16a383a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3ba0db8.js",
    "revision": "4901f34450bda74a46c208c28b4cebef"
  },
  {
    "url": "assets/js/11.6f4782cf.js",
    "revision": "0b16682acf4051dc594f0819d959986f"
  },
  {
    "url": "assets/js/12.86062995.js",
    "revision": "72fab314e64c4db6266c70b717d91f35"
  },
  {
    "url": "assets/js/13.0b302d22.js",
    "revision": "3b7285564c872c506346a27ae02c9f08"
  },
  {
    "url": "assets/js/14.192f8500.js",
    "revision": "117993b185d9292286c4d69fda4edc14"
  },
  {
    "url": "assets/js/15.c8ffb75e.js",
    "revision": "3f59bfe54203f91ecf7c5c6bea06267a"
  },
  {
    "url": "assets/js/16.031ebf97.js",
    "revision": "5ab0c9b352a61777cf353b5e520739d0"
  },
  {
    "url": "assets/js/17.bcca44cf.js",
    "revision": "400faeeebcc7fbae9573ef11f9b7fcb1"
  },
  {
    "url": "assets/js/18.7555fc56.js",
    "revision": "04f036bad2cd6fa07eeb87fadc066ddf"
  },
  {
    "url": "assets/js/19.9b053b72.js",
    "revision": "9d5acaf72a78d6879e0e26ac3b3388ef"
  },
  {
    "url": "assets/js/2.c0c4f027.js",
    "revision": "8f86b2c2172ae55feb88af24c030771c"
  },
  {
    "url": "assets/js/20.d08a55f6.js",
    "revision": "1fe17f757ae73429ee8e5c17aec85d79"
  },
  {
    "url": "assets/js/21.a318ed4c.js",
    "revision": "c4f0a7de101bbc85ebd0228effa0f53f"
  },
  {
    "url": "assets/js/22.0b3b8061.js",
    "revision": "073dc5a08ee1d5749c1f5ee483165a24"
  },
  {
    "url": "assets/js/23.9c661fc4.js",
    "revision": "b9317ed102d16690793efeced65facda"
  },
  {
    "url": "assets/js/24.f54e5014.js",
    "revision": "338f3ff2eaf1cf06ddebbffbad0d1d69"
  },
  {
    "url": "assets/js/25.5a59ed5b.js",
    "revision": "2b56c1babff553e7b809abcbdb066caf"
  },
  {
    "url": "assets/js/26.87f2d687.js",
    "revision": "0760efdeed948985ea40ec5d4478490e"
  },
  {
    "url": "assets/js/27.b2f1151b.js",
    "revision": "39dc5e8272e27c26a27878a4e8ececbd"
  },
  {
    "url": "assets/js/28.55cc06b9.js",
    "revision": "67711e76c7c6ffdf3232beea70c199ff"
  },
  {
    "url": "assets/js/29.766e4439.js",
    "revision": "5559d7dc7b41186af096cc1a2cfbee76"
  },
  {
    "url": "assets/js/3.a8b742fa.js",
    "revision": "eab359d6ba666cecef1ef2e52eb1dea4"
  },
  {
    "url": "assets/js/30.eb542d7b.js",
    "revision": "b4935cf14d981f017842743366a3e53e"
  },
  {
    "url": "assets/js/31.f25bfd0e.js",
    "revision": "dfae571c2232bc920ce49e40f195165e"
  },
  {
    "url": "assets/js/32.7f98f44a.js",
    "revision": "f07ce5fe6b18b8be5622734fbee3d69f"
  },
  {
    "url": "assets/js/33.c8230c68.js",
    "revision": "a9e7ab6873f741fd918c1910ff3ee650"
  },
  {
    "url": "assets/js/34.8897a42a.js",
    "revision": "390592863d759fd90e08f550fe1aeec1"
  },
  {
    "url": "assets/js/35.5458d8ae.js",
    "revision": "a03ab8a5a8519637037520b1a697100c"
  },
  {
    "url": "assets/js/36.8eb806bb.js",
    "revision": "6125b87b3e3dfb0ca63e351b234f4f13"
  },
  {
    "url": "assets/js/37.87913ec3.js",
    "revision": "317a71335901493b6dcbf85f3ca974e4"
  },
  {
    "url": "assets/js/38.660c3b4a.js",
    "revision": "939811a8aaf6ff2ee48b0b40389fdd85"
  },
  {
    "url": "assets/js/39.5ed42ddb.js",
    "revision": "4513d3db30760ac6631570815b263e88"
  },
  {
    "url": "assets/js/4.9b9ba77e.js",
    "revision": "4e34ba90cac2195706c0c3a2d735b4aa"
  },
  {
    "url": "assets/js/40.c9cf29d8.js",
    "revision": "ab5f25735c3609135b7140c705f18c70"
  },
  {
    "url": "assets/js/41.a9c44716.js",
    "revision": "6d9e6c8be4cda3a4e519191e329134e9"
  },
  {
    "url": "assets/js/5.f895a7bd.js",
    "revision": "a059d37fe2c7888115fd4e3fde255c72"
  },
  {
    "url": "assets/js/6.c9322c89.js",
    "revision": "e37ab8206b8b386ca6a6c7ee5c1a307f"
  },
  {
    "url": "assets/js/7.78eeaa19.js",
    "revision": "7b0658e4c9b06ae2f53ceaa7595e80bb"
  },
  {
    "url": "assets/js/8.9f14d0fe.js",
    "revision": "34cdc950bf4c1ba10e4b93fda428bd4b"
  },
  {
    "url": "assets/js/9.2e876292.js",
    "revision": "7806f68f3dd990141bd722c87fa051d8"
  },
  {
    "url": "assets/js/app.bf9fa63c.js",
    "revision": "427e9931b86c58703a1f6191221597be"
  },
  {
    "url": "guide/commands/edit/index.html",
    "revision": "91570f4d1162f07c891a7f511239169d"
  },
  {
    "url": "guide/commands/index.html",
    "revision": "f14757d1bc4371abd8f7c3237fc59fd2"
  },
  {
    "url": "guide/commands/viewing/index.html",
    "revision": "7f1fe85e28772ec9dfaf3363bd3350a1"
  },
  {
    "url": "guide/commands/webhooks/index.html",
    "revision": "af0c47db74483609676c50d7a983df98"
  },
  {
    "url": "guide/dev/index.html",
    "revision": "8ea49604f5a0fa5e5ef2f1ad12717ff9"
  },
  {
    "url": "guide/dev/self-host/index.html",
    "revision": "705ab1c987a54bd822170279da8977ad"
  },
  {
    "url": "guide/index.html",
    "revision": "7cb91ed2b4fd943c6021e62147da6058"
  },
  {
    "url": "guide/other/botlists/index.html",
    "revision": "f1ef0beafb91ea8448c34e8c7859f8d5"
  },
  {
    "url": "guide/other/bots/index.html",
    "revision": "72688e68231ea5e2836904f3494d35bb"
  },
  {
    "url": "guide/other/contact/index.html",
    "revision": "fd177d9ec632c50e51976baf4ea8ea03"
  },
  {
    "url": "guide/other/faq/index.html",
    "revision": "daf9f114f832d817d72ac00746fc4f47"
  },
  {
    "url": "guide/other/index.html",
    "revision": "42640acabda968ee5d129278e0e26b9f"
  },
  {
    "url": "guide/other/privacy/index.html",
    "revision": "f0c9450a886c3af3e4a36a63c561b244"
  },
  {
    "url": "guide/other/team/index.html",
    "revision": "37183f83f42771f305eb8bc65c216cb1"
  },
  {
    "url": "guide/webhooks/index.html",
    "revision": "66a72dbcdefb5d98d40c22da42e24f20"
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
    "revision": "50b53610cdbc5e1a36144749ce8f818d"
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
