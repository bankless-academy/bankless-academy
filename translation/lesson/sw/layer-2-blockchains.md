---
TITLE: Blockchain za Layer 2
DESCRIPTION: Jiunge na mfumo wa Layer 2 ili kuongeza kasi ya miamala yako na kupunguza ada.
LANGUAGE: Kiswahili
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
FORMAT: LESSON
---

```
__________________________________________________________________________________________________________________________________________________________

$$$$$$$\                      $$\       $$\                                      $$$$$$\                           $$\
$$  __$$\                     $$ |      $$ |                                    $$  __$$\                          $$ |
$$ |  $$ | $$$$$$\  $$$$$$$\  $$ |  $$\ $$ | $$$$$$\   $$$$$$$\  $$$$$$$\       $$ /  $$ | $$$$$$$\ $$$$$$\   $$$$$$$ | $$$$$$\  $$$$$$\$$$$\  $$\   $$\
$$$$$$$\ | \____$$\ $$  __$$\ $$ | $$  |$$ |$$  __$$\ $$  _____|$$  _____|      $$$$$$$$ |$$  _____|\____$$\ $$  __$$ |$$  __$$\ $$  _$$  _$$\ $$ |  $$ |
$$  __$$\  $$$$$$$ |$$ |  $$ |$$$$$$  / $$ |$$$$$$$$ |\$$$$$$\  \$$$$$$\        $$  __$$ |$$ /      $$$$$$$ |$$ /  $$ |$$$$$$$$ |$$ / $$ / $$ |$$ |  $$ |
$$ |  $$ |$$  __$$ |$$ |  $$ |$$  _$$<  $$ |$$   ____| \____$$\  \____$$\       $$ |  $$ |$$ |     $$  __$$ |$$ |  $$ |$$   ____|$$ | $$ | $$ |$$ |  $$ |
$$$$$$$  |\$$$$$$$ |$$ |  $$ |$$ | \$$\ $$ |\$$$$$$$\ $$$$$$$  |$$$$$$$  |      $$ |  $$ |\$$$$$$$\\$$$$$$$ |\$$$$$$$ |\$$$$$$$\ $$ | $$ | $$ |\$$$$$$$ |
\_______/  \_______|\__|  \__|\__|  \__|\__| \_______|\_______/ \_______/       \__|  \__| \_______|\_______| \_______| \_______|\__| \__| \__| \____$$ |
                                                                                                                                               $$\   $$ |
PORTABLE LESSON DATADISK COLLECTION                                                                                                            \$$$$$$  |
                                                                                                                                                \______/
__________________________________________________________________________________________________________________________________________________________
```

---

# Utangulizi

Hali inayotamaniwa kwa blockchain yoyote ni kuwa na ugatuzi, usalama na uwezo wa kupanuka wa kiwango cha juu. Kujenga blockchain inayoshughulikia mambo yote matatu vizuri imekuwa changamoto isiyotatuliwa bado. Changamoto hii ina jina: `trilema ya blockchain`.

Bitcoin na Ethereum zote zina ugatuzi na usalama wa kutosha, lakini hazipanuki vizuri, kama inavyoonekana kwenye ada kubwa za miamala na foleni ndefu mtandao unapokuwa na shughuli nyingi. Ili kukwepa matatizo haya, Wagunduzi wanaweza kutumia teknolojia mbalimbali zinazopunguza sana gharama na kuongeza kasi ya miamala. Kwa pamoja zinajulikana kama masuluhisho ya kupanua ya Layer 2 (L2).

`Lightning Network` ni suluhisho maarufu zaidi la kupanua la Bitcoin, na linategemea teknolojia iitwayo `njia za malipo` ili kupanua malipo kati ya pande mbili. Ethereum inapunguza trilema ya blockchain kwa kutegemea masuluhisho mbalimbali ya L2 kushughulikia miamala, yakisaidiwa na hifadhi ya muda ya bei nafuu ya `blob` iliyoongezwa Mainnet mwaka 2024 (aina nyepesi ya "sharding" iliyokuwa imepangwa awali).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Njia za malipo

Kwenye blockchain ya Bitcoin, Lightning Network inategemea njia za malipo za pande mbili, zinazowezesha watu kadhaa kubadilishana BTC bila kufanya muamala kwenye mnyororo mkuu.

Muundo huu unawezesha watumiaji wawili kufungua njia ya malipo kati yao. Kila njia ni ya pande mbili tu, ingawa malipo yanaweza kuelekezwa kupitia mtandao wa njia zilizounganishwa ili kufikia watumiaji walio mbali zaidi. Kati ya kufungua na kufunga njia, pande hizo zinaweza kuhamisha fedha baina yao. Rekodi ya kila mshiriki kwenye daftari dogo inasasishwa baada ya watumiaji wote wawili kusaini muamala, jambo linalohitaji nodi za pande zote mbili zipatikane.
Njia inaweza kufungwa wakati wowote na upande wowote kwa kutangaza toleo la karibuni zaidi la daftari dogo kwenye blockchain.

Njia za malipo hazitumii mwingiliano wa hali ya juu wa `mkataba mahiri`, ni miamala ya msingi ya peer-to-peer tu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Lazima uwe mtandaoni ili kufanya muamala kwa kutumia Bitcoin Lightning Network.

- [x] Kweli

> ℹ️ Sahihi! Kusasisha njia ya malipo kunahitaji watumiaji wote wawili kusaini, jambo linalomaanisha nodi za pande zote zipatikane.

- [ ] Si kweli

> ℹ️ Jaribu tena! Masasisho ya njia yanahitaji saini za pande zote mbili, hivyo nodi zao zinatakiwa kuwa mtandaoni.

# Masuluhisho ya kupanua Ethereum

Wasanidi wa Ethereum wamekuwa wakifanya kazi kwenye masuluhisho ya kupanua yanayotokana na Ethereum tangu karibu mwanzo wa mtandao huo.

Wanajamii wengi wa Ethereum wanasema kwamba ili kuwa "suluhisho la kupanua Ethereum", mradi lazima ushughulikie mapungufu ya `uwezo wa kupanuka` wa Ethereum bila kutoa muhanga `usalama` au `ugatuzi`. Kwa watumiaji, mahitaji ya msingi ni miamala ya haraka zaidi na `gesi` ya bei nafuu kuliko Mtandao Mkuu wa Ethereum. Ili kushindana, baadhi ya masuluhisho yako tayari kufanya maafikiano makubwa zaidi kwenye trilema kuliko mengine.

Ethereum inafafanuliwa na uwezo wake wa mikataba mahiri, hivyo ni muhimu masuluhisho yake ya kupanua yarithi uwezo huo. Hakuna faida ya kuwa na miamala ya haraka na ya bei nafuu kama watumiaji hawawezi kufikia `dApps` wanazopenda kutoka Layer 2.

# Knowledge Check 2

Masuluhisho ya kupanua Ethereum:

- [ ] hutumia njia za malipo kupanua mtandao.

> ℹ️ Jaribu tena! Njia za malipo ni mbinu ya Lightning Network ya Bitcoin. Ethereum hupanuka kupitia masuluhisho kama Rollup.

- [ ] hayawezi kutumia mwingiliano wa mikataba mahiri.

> ℹ️ Jaribu tena! Uwezo wa mikataba mahiri ni muhimu. Watumiaji wanahitaji kufikia dApps wanazopenda kutoka Layer 2.

- [x] yanapaswa kuongeza upanukaji bila kudhoofisha sifa nyingine za trilema.

> ℹ️ Sahihi! Suluhisho halisi la kupanua Ethereum hushughulikia upanukaji bila kutoa muhanga usalama au ugatuzi.

- [ ] huruhusu kasi zaidi ya miamala kwa gharama ya gesi ya juu.

> ℹ️ Jaribu tena! Masuluhisho ya kupanua yanalenga miamala ya haraka NA gesi ya bei nafuu kuliko Mtandao Mkuu wa Ethereum.

# Kuunganisha Layer 1 na Layer 2

Kama tulivyojifunza katika [Misingi ya blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), blockchain ni hifadhidata zinazojulikana kama `madaftari`, zinazorekodi orodha ya miamala iliyolindwa kwa kriptografia na kupangwa kwa mfuatano wa wakati. Blockchain za L1 na masuluhisho ya kupanua ya L2 kila moja ni blockchain kamili, yenye hifadhidata yake ya anwani na data.

Miundombinu inayoitwa `madaraja` hutumika kuhamisha taarifa kati ya hifadhidata tofauti za blockchain. Kwa mfano, fikiria Mtandao Mkuu wa Ethereum (au blockchain nyingine yoyote ya `L1`) kama kisiwa kimoja, na blockchain nyingine au suluhisho unalopendelea la kupanua kama kisiwa kingine: daraja la kripto ni jina la jumla la barabara kuu inayounganisha visiwa hivi viwili vya kidijitali.

Teknolojia yake ni tata sana, lakini kwa mtumiaji wa mwisho mchakato huu ni rahisi kama kuchagua unakotaka kwenda.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechain

`Sidechain` ni blockchain tofauti inayojiendesha kando na Ethereum, lakini imeunganishwa na Mtandao Mkuu wa Ethereum kwa `daraja`. Ili kuhamisha tokeni, unazifunga kwenye mkataba wa daraja kwenye Mainnet, na tokeni sawa nazo zinazalishwa kwenye sidechain. Muhimu: hii HAIZIPI fedha zako usalama wa Ethereum. Daraja na sidechain hutegemea wathibitishaji wa sidechain yenyewe. Mmoja wao akivunjwa (kama uvamizi wa daraja la Ronin wa dola milioni 625 mwaka 2022), fedha zilizofungwa zinaweza kuibwa.

Sidechain bado ziko chini ya trilema ya blockchain. Ada zake ndogo za `gesi` na miamala ya haraka zinatokana na kundi dogo lakini lenye nguvu zaidi la wathibitishaji, likibadilisha kiasi cha ugatuzi na usalama kwa uwezo wa kupanuka.

Sidechain kama Polygon PoS huchapisha picha za hali ("checkpoints") kwenye Ethereum mara kwa mara. Hizi hupa historia yake hali fulani ya kutotenguka na huwawezesha watumiaji kuthibitisha salio wanapotoka kwenye daraja, lakini hazifanyi fedha za sidechain kuwa salama kama zilizo Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechain:

- [ ] hufunga tokeni zilizovushwa kwenye mkataba kwenye Mainnet.

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee iliyo kweli.

- [ ] zina ada za gesi nafuu kuliko Mainnet.

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee iliyo kweli.

- [ ] zina hatari kubwa zaidi ya mfumo wa kati kuliko Mainnet.

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee iliyo kweli.

- [x] Yote hapo juu.

> ℹ️ Sahihi! Sidechain hufunga tokeni zilizovushwa kwenye Mainnet na hutoa ada nafuu, lakini kundi lake dogo la wathibitishaji hubadilisha ugatuzi kwa kasi hiyo.

# Rollup

Itifaki za Layer 2 zinazotumia teknolojia ya Rollup zinabaki karibu zaidi na kiwango cha usalama cha Mtandao Mkuu wa Ethereum.

Kama sidechain, Rollup huruhusu miamala ya onchain kutekelezwa nje ya Mtandao Mkuu wa Ethereum. Miamala hiyo kisha "hukunjwa" kuwa fungu moja, na data ya fungu hilo hutumwa Ethereum kwenye vifurushi vya muda vya bei nafuu vinavyoitwa `blobs`, vilivyoanzishwa kwenye uboreshaji wa Dencun wa Machi 2024. Blob ndio sababu kuu ya ada za kawaida za L2 kushuka hadi senti chache au chini ya hapo.

Ili Rollup ijithibitishe kuwa salama vya kutosha kuchakata miamala kwa niaba ya Mainnet, lazima itoe "ushahidi wa kushawishi" kwamba miamala ya kila fungu ni salama na halali. Ushahidi huu unajumuishwa kwenye rollup ya muamala na kuhakikiwa na mkataba wa daraja kwenye Mtandao Mkuu wa Ethereum.

Kwa sasa kuna mbinu mbili za Rollup zinazoweza kutoa ushahidi huu: `Optimistic Rollups` na `ZK Rollups`. Tuziangalie kwa karibu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollup

Itifaki za L2 kama Optimism, Base na Arbitrum zote hutumia `Optimistic Rollups` kama muundo wao wa kupanua. Zinaitwa hivyo kwa sababu taarifa zilizo kwenye fungu la Rollup huchukuliwa kuwa halali hadi ithibitishwe vinginevyo: dhana ya matumaini hufanywa.

Ili kuzuia matumizi mabaya ya mbinu hii, kwa kawaida kuna ucheleweshaji wa siku kadhaa mtumiaji anapoomba kuhamisha fedha kutoka L2 kurudi Mainnet. Katika kipindi hiki, wathibitishaji wa daraja wanaweza kuchapisha `ushahidi wa udanganyifu` wakitaka kufuta uondoaji huo. Mfumo huu unafanana na michakato ya usafishaji ya sekta ya kibenki, lakini una ugatuzi.

Kumbuka: huduma za kuvusha za nje, kama Across na Relay, huwasaidia watumiaji kuvusha fedha ndani ya dakika chache badala ya siku. Madaraja haya ya haraka hukukopesha pesa kutoka kwenye akiba yao wenyewe, hivyo unabeba hatari ya mikataba mahiri ya daraja na watoa fedha wake, safu ya ziada ya imani ikilinganishwa na daraja la rollup lenyewe.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Kwenye Optimistic Rollup, miamala huchukuliwa kuwa halali hadi ithibitishwe vinginevyo.

- [x] Kweli

> ℹ️ Sahihi! Dhana ya matumaini ni kwamba mafungu ni halali, na kuna kipindi cha changamoto ambapo ushahidi wa udanganyifu unaweza kufuta uondoaji mbaya.

- [ ] Si kweli

> ℹ️ Jaribu tena! Dhana hiyo ya matumaini ndiyo chanzo cha jina la Rollup hizi.

# ZK Rollup

`ZK Rollups` ni aina ya Rollup inayotegemea teknolojia ya zero-knowledge. Tofauti na `Optimistic Rollups`, ZK Rollup huthibitisha uhalali wa miamala ya fungu bila kutegemea watumiaji fulani kutafuta ushahidi wa udanganyifu. Badala yake, Rollup hizi hutuma uthibitisho wa kihisabati, unaojulikana kama `uthibitisho wa uhalali`, unaoiwezesha Ethereum kuhakiki fungu zima bila kurudia kazi.

Faida kubwa ya ZK Rollup ni `muda wa kukamilika`, unaojulikana pia kama `kutotenguka kwa muamala`. Badala ya kipindi cha changamoto cha siku kadhaa, ZK Rollup huwawezesha watumiaji kufikia fedha zao Mainnet kwa kawaida ndani ya saa chache, mara tu uthibitisho unaofuata unapotumwa. Licha ya jina, teknolojia ya zero-knowledge haitumiki hapa kwa faragha: miamala kwenye ZK Rollup kubwa iko wazi kama ilivyo Mtandao Mkuu wa Ethereum.

Kuna itifaki kubwa zinazotumia teknolojia ya ZK Rollup kujenga masuluhisho yao ya kupanua Ethereum, ikiwemo ZKsync, Starknet na Linea. Bado ni mapema kimaendeleo, lakini kuna uwezo mkubwa wa baadaye.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Ikilinganishwa na Optimistic Rollup, ZK Rollup:

- [ ] huweka miamala ya watumiaji kuwa ya siri kwenye Mainnet.

> ℹ️ Licha ya jina "zero-knowledge", ZK Rollup kubwa ziko wazi kama Mtandao Mkuu wa Ethereum: uthibitisho hutumika kwa uhalali, si faragha.

- [x] hutumia uthibitisho wa uhalali, bila kipindi kirefu cha changamoto.

> ℹ️ Sahihi! Uthibitisho wa kihisabati huhakiki kila fungu, hivyo kutotenguka Mainnet hakuhitaji kusubiri dirisha la ushahidi wa udanganyifu.

- [ ] hutegemea walinzi kutuma ushahidi wa udanganyifu kwa muda maalum.

> ℹ️ Hivyo ndivyo Optimistic Rollup zinavyofanya kazi. ZK Rollup huthibitisha uhalali mapema badala yake.

# Utangamano wa dApp kati ya minyororo

Unapolinganisha `Optimistic Rollups` na `ZK Rollups`, jambo kuu kwa watumiaji wengi ni muda wa kuondoa fedha. Lakini kwa kuwa ucheleweshaji huo unaweza kutatuliwa na madaraja ya nje, haupaswi kuwa kigezo kikuu unapoamua suluhisho gani la kupanua kuchunguza.

Optimistic Rollup nyingi ni "EVM equivalent", yaani L2 inaunga mkono moja kwa moja dApp yoyote inayoweza kufanya kazi kwenye `Ethereum Virtual Machine` (EVM). Ulinganifu wa EVM unawezesha kusambaza mikataba mahiri yoyote iliyokwisha sambazwa Mainnet, hivyo watumiaji wa L2 wanafikia dApps wanazopenda.

Sidechain kama Polygon PoS pia huendesha EVM moja kwa moja, na ZK Rollup nyingi za kisasa (kama ZKsync, Linea na Scroll) pia ni EVM equivalent au karibu sana na hilo. Matokeo yake, dApps unazopenda za Ethereum zinapatikana kwenye sehemu kubwa ya mfumo wa L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Masuluhisho ya kupanua yaliyo EVM equivalent yanaweza kutumia tena kwa urahisi mikataba mahiri iliyosambazwa Mainnet.

- [x] Kweli

> ℹ️ Sahihi! Ulinganifu wa EVM maana yake mkataba mahiri wowote unaofanya kazi Mainnet unaweza kusambazwa kwenye L2, ukileta dApps unazozifahamu.

- [ ] Si kweli

> ℹ️ Jaribu tena! Kutumia tena mikataba mahiri ya Mainnet ndilo lengo hasa la ulinganifu wa EVM.

# Muhtasari wa somo

Blockchain za L1 kama Bitcoin na Ethereum kwa sasa zinabanwa na `trilema ya blockchain`. `Njia za malipo` kwenye mtandao wa Bitcoin, au sidechain na Rollup kwenye Ethereum, husaidia mitandao hii kupanuka na kupunguza trilema.

`Madaraja` huunganisha blockchain za L1 na `sidechains` na `Rollup`, na jinsi mkataba wa daraja unavyofanya kazi huathiri sifa za mtandao ulioungwa.

Fedha zilizo kwenye sidechain hazirithi `usalama` wa Ethereum: tokeni zilizovushwa hufungwa kwenye mkataba Mainnet, lakini usalama wake unategemea wathibitishaji wa sidechain yenyewe na mkataba wa daraja. Minyororo hii ina kundi dogo lakini lenye nguvu la wathibitishaji, linalowawezesha kuongeza kasi ya miamala na kupunguza ada za gesi, kwa gharama ya ugatuzi na usalama.

Rollup, kama sidechain, pia huthibitisha na kuchakata miamala yake yenyewe, lakini mkataba wake wa daraja unaitaka itoe "ushahidi wa kushawishi" wa uhalali wa muamala kabla data haijachukuliwa kuwa halali. Hii inaziwezesha kudumisha kiwango cha `usalama` na `ugatuzi` kinacholingana na maadili ya Ethereum. Kuna mbinu mbili za kutoa "ushahidi wa kushawishi": Optimistic Rollup na ZK Rollup. `Optimistic Rollups` hushikilia ucheleweshaji wa siku kadhaa kabla ya kukamilisha rollup zake Mainnet, na katika kipindi hicho wathibitishaji wa daraja hugundua na kuripoti udanganyifu. `ZK Rollups` hutoa uhakika wa kihisabati wa uhalali wa miamala, kwa msaada wa teknolojia ya `zero-knowledge`.

Kwa sasa, Optimistic Rollup na ZK Rollup za kisasa zote hutoa utangamano wa hali ya juu wa mikataba mahiri na Mtandao Mkuu wa Ethereum, zikiwezesha dApps kutoka Mtandao Mkuu wa Ethereum kusambazwa kwa urahisi kwenye mitandao yao. Wengi wanaamini ZK Rollup zitakuwa suluhisho la kupanua la siku zijazo, kwa sababu ya kutotenguka kwake kwa haraka na uhakika mkubwa wa uhalali.

# Anza safari yako ya Layer 2 na Optimism au Base 🙂

Optimism na Base, zote zikiwa Optimistic Rollup za EVM equivalent, ni L2 nzuri kwa Wagunduzi kuanzia. Kutumia dApps kwenye mnyororo wowote kati ya hiyo miwili kunafanana na L1, ila kwa bei nafuu na kasi zaidi, na zote hutumia ETH kama gesi. Quest yako inayofuata ni hatua ya kwanza ya safari yako kwenye Optimism au Base!

Mifumo yote miwili imeathiriwa sana na maadili ya Ethereum, na Optimism inajulikana kwa [kufadhili bidhaa za umma](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) zinazoongeza thamani kwenye mfumo, kama elimu ya bure kutoka Bankless Academy.

Optimism na Base si majukwaa yanayotegemea Optimistic Rollup tu: zinaonyesha jinsi blockchain zinavyoweza kutatua matatizo halisi na kufungua njia mpya za kufanya miamala na kushirikiana. Na hilo linapaswa kutufanya sote tuwe na matumaini. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
