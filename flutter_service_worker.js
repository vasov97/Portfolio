'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "885e06435325a8149ee33b7314977b18",
".git/config": "c1d563f7bf29f9e4ab7ce86adff8db10",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2ea3237396dcb4b85c3ec15f7e887301",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c24d94d0a4c49c18a039af53e6c89968",
".git/logs/refs/heads/master": "c24d94d0a4c49c18a039af53e6c89968",
".git/logs/refs/remotes/origin/master": "6a11de4f609eb3fbfd6c5c903e503f93",
".git/objects/00/de2d11be109ee51d3c93e9ec3610cf1a8f2a46": "08bc7f2d07520c4008d7680a44d27380",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/546ad844e916a45056aea48cedd95914b3e9b2": "545aa7dd0ea9784e88a521836a686079",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/f333285cdaa094568c839c408f911797133bf6": "2d212dac56ed043e8f2ba37f1e681c9c",
".git/objects/14/0e8beac700f55369e8801fe55a9c0583847786": "14524802d1a255b4ab054c9d5cbb8977",
".git/objects/15/351b4a9cbf85869403d46a7b7371dadb93b926": "41f0d78a6c96da092f4b3859b596672a",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/18/d0dca4b67ee3f58f0fb1125036e5fbba8829ac": "682d95ff73dba1bebdba8db13beefeaf",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/877d578b2c95aeb2f05a5f9c08def093214d2b": "8a7c121a0b0a29751d33caa5402f49b3",
".git/objects/1b/2821d3283ab1945acf7a32b5101c73b65b50ef": "0c52040cd30c81fb38cec8c3c57e56d9",
".git/objects/1c/761b26841eb64a63b8aeb76ebca6cb324aabd8": "f0e014ce97fbebabedf178f393a07cc3",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/75444f833caaf7a72b2d248fa9a6c72de93e98": "0b3ad5ae480a546ab7f8e77bf0a8d75b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/43d791b2df1e8227aaa04069ce5365e384d600": "8e13807dc2e16f52c399a7c0c2f35dba",
".git/objects/23/87765d3a47d5897bb608a42b39a5357a87cc4a": "37fc7db0ccaca477b5ba721fe52a89d6",
".git/objects/25/120a283f265a310fe5167d119fab0b5dd38f0f": "4730dd5897cf9d7a6bb187232fce63df",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/48e0b59da5c278878a8ca393be6e76300912b0": "4e9ce0f40d0e1f2516bb5d0507aa9357",
".git/objects/29/48564558a04951b0aa3940080b59739c0f51d8": "2ebb7a4cb04fb88e8ee332cd97d0dcf7",
".git/objects/2a/289783ae5f0f4991fe3d32b8bcc57a067d14ae": "4bf5b710515ccbda912cab7561c7fe07",
".git/objects/2c/6267052873d2601b4694d39729c0d502b12e07": "efee8e6b40299119ba324ea846acb43b",
".git/objects/31/6dcc5397f713ccf1bf5e2775ec2468e701e63c": "440ecdcd15e4c0c3c2cb083495d0b9c5",
".git/objects/32/5b8844443d3201f218e9117105affbddeeb051": "f75bea0c22bbd72d7880447a47b4dfd8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/f0bb8f01abc9495489071c9dcaf295af58ddeb": "0316ba861328ab00931cedef215621fc",
".git/objects/34/62970ff7345f4541fce9f7a9657d806431c543": "bc126d269e98f9ed4b908ffbbea83baf",
".git/objects/34/b5059a28cd54b0b2918ab34e83a9b86a84ed02": "34c4ab606b3d7fd5f6e2e412091c1f2a",
".git/objects/36/4e469462624c993728f3fc1f7672f53523f1a4": "f39186006e82bda2f778f2c63a2a8148",
".git/objects/38/58598a6a269304909cfbfd96b0e20a2418656e": "fe529ab5070949f386ae66ac603c891d",
".git/objects/3a/09b3af5bc64e202767e32093b91e1fd4898c6d": "eacee2126666be31783a8ffbf8815cd9",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/b62727d47b62dcb733284fe806681869220a24": "203a533095e598fa861c44d17c97536d",
".git/objects/3e/fb608592f12fd1ac3eb48706788b8253b44bdb": "883e1068f6e53c09fd377a04ef3abd4d",
".git/objects/41/703c0accb6858165b5bd7030f4bac08d719a1a": "991b64722f75bc7aab1d002f91d8342d",
".git/objects/44/2b63a1f3d313909d9fb735295477948f9453cb": "086becafb200e0afc65b0f85d81cb2e2",
".git/objects/44/6dd00009826aac032537fcbd2580931fe35060": "ed5d9a492862036e5219640f58adbbd7",
".git/objects/44/b98fe7c1b0823f49f0a1a31272bd9103149edf": "d149e69938b19972a80cbdc2d6ee7b99",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/cebd9788df433860b42657ed71ab1b508b4500": "a4e68a3bbfffd3f4d08353551ba31ccb",
".git/objects/50/14a539c95e9317e1dd93ae846aac472b29360e": "7b611ed3bc10b3c9344d5e0790a2b16a",
".git/objects/50/48a0bfec2adb07c683e6a5edb65377430265b5": "2f6f6d9fad2b73d37d3759a518126f11",
".git/objects/50/ddb98bbc2161d1dd38ca91380b1f7538bbab63": "688f10051e2db6bf4d48a47606e5775a",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/c3d87951db51d0f51de89991d3bdaa2da52bc8": "aab9c3e3e92a55aae69ea96ee12cec96",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/61/d459dbbb40b407d1e20ba062bf8c1841507374": "4e353cb50d3be198e78c9d3d8d2721ea",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/445254e0c084411d754b63169c38e1f9009443": "71c9f48aec02d097152befdfc9ede7c6",
".git/objects/66/e937402a666a3faf3bcbbc9930fb722c177e0e": "c0b8320a5bcdb521be50e8217518db50",
".git/objects/67/72f6c6470f13c3e9fa57d5dccf45289324bf58": "2fe0a48e5e7f714af3d67457eab0a10b",
".git/objects/68/df12cd539d750bbba84986f7cea670597fe568": "b9554d1b27c3c4e7a7aaa09662c23c15",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/ede4bc945d06fc6ff5d6c3b46960f5e9e7de08": "300fc090d0838d392a26536e5bdaac65",
".git/objects/6f/437cf96c59a46d07fc7caf28f3d76505e09d6f": "9a9ae37ca99d315e2502b133fa5e2196",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/e79b922d4a0c8b18ee03ed77bc7a12a8149443": "b8f67eee670e001d7752e277a76b4193",
".git/objects/75/7c9ab981fae0e1c92318f6229ed134ef97970a": "1e29d7be9010a6e04d1fff7864da5336",
".git/objects/76/d3f030eef8d5532105f65dc0c189411a35d3d1": "e9da5a3b4e479361d2b9448c238e6859",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/41a15edeaebc9c7d580847fbc1c73d1fde87b1": "17d78f8e006a4f0aa4f4a416dc91ab0b",
".git/objects/7d/f49ad3233213d3d5bb09aefcc2391bf56b07f7": "24b75f94b73ea44e756dc5d8bb837251",
".git/objects/81/7f7fd0adf7b13996d55b8222272ed48babbf46": "e8e54dace66f8376f509e58bdf390eb0",
".git/objects/83/4f23e635b8ac829273548882bd3b8f510370c0": "38312cb1d27a123d756ecee5ec13b36d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/24327a17038c1e096b0e01706e0593db73a26d": "5e7b2292a430e798d01ed4fb46149950",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8868cf73ff6a33b79dacd328b60bbc51fe0283": "278e029a08539299c69b74deba76fae5",
".git/objects/86/e599a4ed3016585ecc0c466fab6e468b8e4da6": "fe2923fd5558df6d23aa0e87a0cb99b0",
".git/objects/88/61ac783ddac793cf5bd34222e8e92ea46f2163": "250ec323f316a1532d3f95f11cce719b",
".git/objects/88/dabe3b92383da77e6eeb086cea3d2c2d0186ec": "615d77777267c1790d96debcc54e92bf",
".git/objects/8a/1e9f707da4665975c241a4448b5a6784873c34": "eddee0527ec04943e70e69cbb0717d3f",
".git/objects/8a/aaeed5aaaf5f511d8309199c7d50abb92f1960": "f0fc4bbdb5a4bf0df732fd0c2f7812bf",
".git/objects/8a/c2601da0573a6fe7f454bcc1aa3114ed5030ff": "147954370b904fd5f62eb868aaddf369",
".git/objects/8c/f7ae3a38b735b0927123bfd3062e51ee9047a9": "4e18878be4dcb92ba7712d6d974bf453",
".git/objects/90/2e08d23aa6b31770e2dcc6f0991c52631dab4b": "8fb56082f6d205120ddef726da36a826",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/8549353a23c3cf0388a561a98619c7a485e055": "ef6e503e704b5077c7a071786351253d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/0261117edac57910e67eb93fdd3c50bfa9bd0b": "8250c863dad005fffcf5ce6d89efa2b7",
".git/objects/9d/872d16a0dbffc3263b17f83f4080d4879c4ac2": "0cac5379231adde5a20778ad4fcf6f79",
".git/objects/9e/46dd5f9cc74bf1f6dff42a6ddf8fac9f49b796": "23daf20706eaf6850a334d4ab355868e",
".git/objects/9f/35f2bdf3c9eb5d8a8fd48dc81627082a1d03fa": "bde08a5ae7be55b0609dca9167ff8a6f",
".git/objects/a0/0ef927ea048bc20ab788e23909020f79116874": "8283581f17b2f7cf4813ed50f0b2f463",
".git/objects/a2/a40eaebda0f9c63359cc55604353125b3fb2a3": "f8cede7498889624358a5e1ae9dd9b26",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/b7fb6a90024412b3a92f20fb717a689471e483": "1e62d59032d60cf3ff5f739d8db32210",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/b53e291f610cf0f3e7d9f7245af0486e8cf410": "9d0b3583489980bfa9ce7e714e63e0db",
".git/objects/ad/57cfe193f5bf7a946444b7cabc006a49916231": "8dcee4483e835bc15cb937e147ba0097",
".git/objects/ae/8d11c59b3031b613bb1f38ba9338a06d0d77e2": "0578e1e959766dc12f87023f07bf1f36",
".git/objects/b0/b4e678a0e4a00529267e08900a0ac84fecd962": "e53862ae5faad3f3ef3e643df5c203f4",
".git/objects/b1/032bbb0fcb56da2005ae4fbda1c83da8a918f3": "ac81510a9a8f8cdd4d423b3c3e8c0b55",
".git/objects/b1/0c85ac1735c38eaff6f452eaa4bbe317a18ed5": "5c543cd1cd702b9e704c2f9e2d123e81",
".git/objects/b1/8e851d0a273b993747c263e7221ae8a378d474": "d6952ce3f4c0ea4bf37c3c7bd9e92a91",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/82cbf0e0fbeeb9e4795920727bb9487c86c0dd": "1cc80f7404cd8aff2dd7b5e5b0dd5185",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/783a30d94436ae43138474ec25b637f70d4951": "3dbd0e3cdab04d5e9db117eb60e6fe2b",
".git/objects/be/67e4a46a989a7190efa9e5820bf6e00c1073e8": "c2eff5c39c2c88fa9ada8b9bffd0c0e7",
".git/objects/c1/ddb3ccf16022b1a3fe2b9a8ed50fa2b1677e8f": "d2ed3dbc6164f34dae876fa789f83043",
".git/objects/c2/06dd636705398b9fccb7944ff9002e2da7dca2": "15c34b655b834ad0a39f3a08620620b9",
".git/objects/c3/1f8851c9c629ca169537c3df7522e471213f7e": "6b8ca23cfb8556e6555c274b3bb3113f",
".git/objects/c4/0e90d722c2851367c09ae8c955ecaf370eff2d": "471e03d0f74e4e50cfbdc681bfc56e20",
".git/objects/c4/4b29978cde9c978c35948fca937d187f16045d": "8bc48a4489a6a9781d24e5cadc420b63",
".git/objects/c4/9b34cf8b2c9ef64cfdbc8bd7638a8fe716acb2": "d265ed0780ffb0a32fc51d908d431c48",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/190e5242e5c05222032f77c5b7f56598cf80e1": "d66a6936f27ec0d628902d831f0999e9",
".git/objects/ca/2c6c27c12cb300ad24691ea590d1fdcef1a34d": "dbccd40a87127dbeae19eeb914179fa6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/cb9ec448ff8208b74db811de2ec8d27b4031a3": "0b3c565330736bd3caeb933b50f65839",
".git/objects/cd/ada06c6987544b34368325dd89f0efdd7c5654": "fe6a503f591ec039c79b64ec3a708b63",
".git/objects/cd/d7c40751c39c6e4887c7aec23d64353bcfb5fe": "b71a0e39a257fb0b351959e4fae10524",
".git/objects/cf/e1ea6d989b2fc884316209b7d6b365d4c5c33a": "3ef0bc2bbe579897672bbb06697877a5",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/0229fac4999760b6abb1a3af80a2b52f0e40c3": "9066d25cd11e02810bf7ca2c00d8a95b",
".git/objects/d5/a2bcc5ce00937fc90f85477eb70324acbf4f68": "183e81545e8216b4d6924f5b7ff1a338",
".git/objects/d5/c72708dfbb5635d096b520e1666372413bbcd2": "f83fb4bb95cfa38a397e72c752c292af",
".git/objects/d9/203d679815c1c995ea1584e684b848bbb54ff7": "127265637adfeefdb0f414180ae3a596",
".git/objects/db/8e17f36b41a36dad4085f5566dbb282fa983cd": "881d986c8dda5641800a950f408910be",
".git/objects/dd/c1cebc8fc09d14381e785284862bc2c485d730": "4b9648b643a1ff363e655c06ac44e111",
".git/objects/de/6f9f61f6787105fc6aae470ec8bde62607dcb0": "817bfd725649cfa0d321ff01d10cb92e",
".git/objects/df/2a4777b124c670a923062679e43269ddd5059b": "68d12109711c44a810e2679340fe35c7",
".git/objects/e3/9dc680221cbbee9283153f845aa7a7339fd204": "c7b61fc8f7798b4bb32940b8341df05b",
".git/objects/e6/3a9d463c183a6b6674788281c958dbff97bff4": "bfea664d607bd6edda08b6094b89b39e",
".git/objects/e8/ac44ac77a60a6ffe350e5e17a46397b110f259": "d5bd93d34d2bd893da509a768ce84e0b",
".git/objects/e9/d735f837f92949c78da1295ab7d529881a205f": "324187dc62f9540267bf899dd2e8bc7f",
".git/objects/f1/55d5eab31bef44c514d6fc02c07d0d88b0ae2e": "6c43cd638bf318aef53f34a63afb7586",
".git/objects/f1/d78c4e433d3354f56b54d8f2ebb1639703eeeb": "2fce9030986de825b5f3a54073c97d50",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/8dab7d0861eeb985a545049490e775556539a4": "33d90fb463e987e330113c949b0f4c24",
".git/objects/f2/a14c56dcd2e30adef89b2e1ab08e3bdd7e2929": "e6e776b2a4335c1e3caf372374117ce4",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f6/77a7fe32e7fe3d971b5d0f7fe3780789940ebe": "456b934fc2bf65bdc00e87da125c6140",
".git/objects/f7/57d81e3baff477215509c452a30de5e5dddbc2": "107c10fccd631ddfb4f23295970dd281",
".git/objects/f8/bc29b5ff4873ea96a63af98e959d6aa9bfc519": "3eae49d3e97e5badcb5bd917cf27910e",
".git/objects/f8/bfd5a1e0411ca2d606b7acc02ea175237ba012": "2c35eafc7b5a8d8728808212f0f39efe",
".git/objects/fb/8081245adfd83d05efdc7e89394d257d354329": "bd9093bb68d294576141dbd351f3d7ef",
".git/objects/fb/8b9b8209b6a0739cbcdc37c98b85f44085a9c8": "c0d1bc29b6e94251a5b995d5e66098a4",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/master": "5bce1c4488e4346094c67d79eb64f1e5",
".git/refs/remotes/origin/master": "5bce1c4488e4346094c67d79eb64f1e5",
"android-icon-192x192.png": "fe23752a1839a6771cce0e96c93abe19",
"app-ads.txt": "286d8fbd2bca4b7b27b05fa29379ccc6",
"assets/AssetManifest.bin": "0c6095611d68ed28d7b10c5950f494a2",
"assets/AssetManifest.bin.json": "6d7f8273c2966187127dc62c5ba0aacc",
"assets/AssetManifest.json": "f1680c6891fdbfff29120b42cd57d8a1",
"assets/assets/animated_login.gif": "119e002cff3a962945962dbd3061a6c3",
"assets/assets/blogFF.png": "a37aaab594f5b90ef7740e92a7446d6b",
"assets/assets/bubles_login.png": "e058af3ac30804dc3cf489f9112fcb6a",
"assets/assets/buildship.png": "47f97910fe96df0f0e5a1cd1ca9ae2e1",
"assets/assets/carrent.png": "bdc4bee645470dfbe36532df97c86834",
"assets/assets/cookies_ui.gif": "c5ba915fb2fd401c5033240bd0dd0695",
"assets/assets/crypto1.png": "ba9c64bf6ed42a8e0b6845173b924a2f",
"assets/assets/crypto2.png": "07f81263e3002338c81076baed1e0100",
"assets/assets/CV_Flutter.pdf": "182ec9da53ccf333f0331f7d3912bf96",
"assets/assets/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/eshop.jpg": "3ced86d81760e932b2e31f4f84db8b13",
"assets/assets/ff.png": "b66b38718e1081e7ff666bc4246d415d",
"assets/assets/fir.png": "de1546f8bcc43f9252f70ff7509e468b",
"assets/assets/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/glass_login.png": "8e697815c319fc3494f122122c3b2bf7",
"assets/assets/hotels_ui.gif": "385e40d4b7a22f8d82d630d1420d08a5",
"assets/assets/lin.png": "7960cde0538c122ccab9cf122a7c5531",
"assets/assets/news.png": "da5f22bbab6010b98122741b7a99ea9c",
"assets/assets/news_app.gif": "6d48cb356cbc8b47d0c4d5bf82fd4881",
"assets/assets/perfume.png": "ae8b0e5d3dc3606cb54328a2db3da4e1",
"assets/assets/pexels.png": "e51e01d9064913f86f23adfc162f6e4d",
"assets/assets/plants_ui.gif": "d6c2ac54b5f2f233dc58f1da4a173f26",
"assets/assets/playstore%2520(1).png": "61ffd11173561ba75becfdea2da40219",
"assets/assets/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/pt1.gif": "298ba103f28b3d9aec88e0a0697b809a",
"assets/assets/pt2.gif": "2ce5667e17446dfd18bd00363c59cb1b",
"assets/assets/red_login.gif": "aa19e5b8ee7a23f536c3e4a170f7d537",
"assets/assets/samurai_app.png": "f091a6874badc6602d000bc26232215f",
"assets/assets/scraping.jpg": "6aac9f76e3c10741e55e9f6ed67ac280",
"assets/assets/scraping.png": "0b18cf664f896084c937ad53452e1a17",
"assets/assets/social.png": "ce3b4eb69ebfc35b42c34041024ba781",
"assets/assets/sqflite.png": "f697ba0c9244a5495766983a27636ff4",
"assets/assets/supabase.png": "31897aca639035129bcaa32db7d0edb4",
"assets/assets/SV.png": "d2ddee34f4da98f26cc16fb5d22817d4",
"assets/assets/travel_ui.gif": "ba0a9bb44ef79bc2048d64ef214cf468",
"assets/assets/upwork.png": "8863391ed7264a84c3c8059edeef2198",
"assets/assets/weather.png": "3eba06b95ceef45ed2ac7a8798f06a89",
"assets/assets/weatherFF.png": "80b9cc2ad7a74661a76f78cdb4cebfa4",
"assets/assets/weather_app.gif": "9d712f5074949c38f021fd1f5551c27c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "0b876de4050d9c5b8b4c6c4c182c174a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-32x32.png": "3631339262e6ffa12c8cbe8e261d8937",
"favicon-96x96.png": "72920c6eb2a66dfa593bea0d30d53c61",
"favicon.ico": "dad7deeed9448e706457bbc03ca82ee2",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "9dd1a4087102b7982bfa56d267f6b43c",
"icons/ms-icon-150x150.png": "f8883935753d9d4e710b768a7a1c3073",
"icons/ms-icon-310x310.png": "9fa7c35f4ec75236bf05c5ab1d55232f",
"index.html": "8fad2af3202686cbbe9d002e676e3cd0",
"/": "8fad2af3202686cbbe9d002e676e3cd0",
"main.dart.js": "934ef62e0c3a91c4017c353ffbda695f",
"manifest.json": "beee9df4cc0ca56c2d343258ba378df4",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
