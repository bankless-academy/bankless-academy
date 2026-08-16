---
TITLE: Kudhibiti vibali vya tokeni
DESCRIPTION: Linda mkoba wako dhidi ya mwingiliano usiotakiwa wa mikataba mahiri.
LANGUAGE: Kiswahili
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
FORMAT: HANDBOOK
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
## Mambo muhimu

> * Vibali vya tokeni ni ruhusa zinazotolewa kwa `mikataba mahiri` kutumia tokeni kutoka kwenye mkoba bila idhini zaidi.
>
> * Vinaweza kutumiwa vibaya na watu wenye nia mbaya ikiwa mtumiaji hajui kuwa ruhusa hizo zipo.
>
> * Zana kama Revoke.cash zinawaruhusu watumiaji kukagua na kufuta vibali vya tokeni kwa urahisi.

## Utangulizi

DeFi inawapa watumiaji udhibiti wa mali zao, ikiwa ni pamoja na `funguo za siri` zao, ikitoa mamlaka na uhuru usio na kifani juu ya pesa zao. Hata hivyo, nguvu kubwa inakuja na wajibu mkubwa zaidi, ikimtaka mtumiaji abebe jukumu kamili la usalama na usimamizi wa mali zake.

Kuna aina nne za kawaida za ulaghai ambazo watumiaji wa DeFi wanapaswa kuzifahamu:

* **Kuvuja kwa seed phrase**: wavamizi wanajaribu kuwahadaa watumiaji wafichue seed phrase zao, jambo ambalo lingewapa ufikiaji usioruhusiwa wa pesa. Akiwa na seed phrase yako, mvamizi anaweza kuchukua pesa zako zote na kuendelea kufanya hivyo ukiweka pesa zaidi kwenye mkoba huo. Kwa bahati mbaya, hakuna njia ya kujinasua kutoka hali hii, na suluhisho pekee ni kutengeneza mkoba mpya kabisa wenye `seed phrase` mpya.

* **Uhamisho wa moja kwa moja wa ETH**: walaghai wanaweza kuficha uhamisho wa ETH kwa kuuvisha kama wito wa kitendakazi, kama "Security Update". Mbinu ya saini ghafi iliyokuwa nyuma ya matoleo ya zamani ya ulaghai huu imeondolewa kwenye MetaMask; badala yake vifaa vya kisasa vya phishing vinatumia vibaya maombi ya saini yanayoonekana ya kawaida, vikitegemea usaini bila kusoma kile mkoba wako unaonyesha. Kuangukia ulaghai huu kunamaanisha hutaweza kurejesha pesa zako, lakini bado unaweza kutumia mkoba wako kwa usalama kwa miamala mingine.

* **Matangazo ya soko la NFT**: kuwa mwangalifu na matangazo bandia na mikataba hatari inayotumia vibaya vibali unavyotoa kwa masoko kama OpenSea. Walaghai wanaweza kukudanganya usaini ujumbe wa `offchain` unaotangaza `NFT` zako ulizoidhinisha ziuzwe, bila muamala wowote halisi wa tokeni kutokea.

* **Vibali vya tokeni**: wavamizi wanaweza kubadilisha ruhusa ili kufikia pesa nyingi kuliko zilizoidhinishwa mwanzoni. "Approvals" ni miamala ya onchain inayotoa ufikiaji wa tokeni au NFT zako. "Permits" zinatoa ufikiaji uleule lakini zinahitaji tu saini ya offchain isiyo na gesi. Uniswap na programu nyingi za kisasa za biashara zinatumia mfumo huu (unaoitwa Permit2). Saini za Permit hazionekani kama idhini za onchain hadi zitumike, na zinaweza kuwa na tarehe za kuisha; mwonekano wa "Signatures" wa Revoke.cash unakuwezesha kuzikagua na kuzifuta.

  Kadiri mikataba mahiri inavyozidi kupendwa, `vibali vya tokeni` vinakuwa muhimu ili kuruhusu mikataba inayoaminika kutekeleza miamala bila kufichua funguo za siri. Vibali vya tokeni vinaruhusu dApp kuhamisha tokeni kwenye mkoba wako kiotomatiki kwa niaba yako. Ingawa urahisi huu unaongeza ufanisi, pia unawaweka watumiaji wazi kwa njia za mashambulizi kupitia ulaghai na ufikiaji usioruhusiwa.

Katika makala hii, tutajadili 'Vibali vya tokeni' na kutambulisha zana ya jumuiya iliyojengwa kusaidia kudhibiti ruhusa zako.

## Vibali vya tokeni: kuelewa, kudhibiti na kuhakikisha usalama

Vibali vya tokeni ni ruhusa zinazotolewa mapema kwa mikataba mahiri kutumia tokeni kutoka kwenye mkoba. Vina nafasi muhimu ya kurahisisha miamala bila kuhitaji ruhusa dhahiri kila mara kwa uhamisho wa moja kwa moja wa mali kutoka kwenye mkoba. Lakini vikitumiwa vibaya, vibali vya tokeni vinaweza kuwa njia ya shambulio kwa asiyetegemea. Ili kukabiliana na hatari hii, ni muhimu watumiaji wa DeFi wawe waangalifu, wajifunze kuhusu mazingira ya usalama, na waelewe jinsi vibali vya tokeni vinavyofanya kazi kihalisi.

Kuna hatua mbili zinazohusika unapotoa ruhusa kwa mkataba wa mtu wa tatu:

1. Kuunganisha mkoba: unapounganisha mkoba wako na dApp, unashiriki tu `anwani` yako ya mkoba na sehemu yake ya mbele, ukiiruhusu ionyeshe salio na shughuli zako. Kuunganisha peke yake hakutoi ruhusa yoyote ya onchain.

2. Idhini ya tokeni: ili kufanya muamala na dApp, kisha unaidhinisha mkataba wake mahiri kuhamisha tokeni maalum kwa niaba yako. Hii ndiyo hatua inayotoa uwezo halisi wa kutumia pesa zako.

Kwa kudhibiti vibali vya tokeni mapema, unaweza kuhakikisha hakuna mkataba unaotoa zaidi ya kiasi ulichoainisha mwanzoni kutoka kwenye mkoba wako. Kwa bahati nzuri, kuna zana za jumuiya zilizojengwa kuwapa watumiaji wa DeFi ujasiri na amani ya moyo.

## Hatua kwa hatua: kutumia Revoke.cash

[Revoke.cash](https://revoke.cash/) inawawezesha watumiaji kudhibiti vibali vyao vya tokeni kwa urahisi kupitia tovuti rahisi inayosaidia kukagua na kufuatilia vibali vilivyotolewa kwa dApp mbalimbali. Tuangalie hatua kwa hatua jinsi unavyoweza kutumia zana hii yenye nguvu ya jumuiya ili kulinda mali zako na kurudisha udhibiti wa mkoba wako.

**1\. Unganisha mkoba wako**:

Ili kuanza mchakato wa kufuta vibali vyako vya tokeni, nenda [Revoke.cash](http://revoke.cash/) na ubofye "Connect Wallet" iliyo kwenye kona ya juu kulia. Vinginevyo, unaweza kuweka anwani ya umma ya mkoba wako mwenyewe kwenye upau wa utafutaji. Upakiaji ukikamilika, utaona orodha ya `idhini za tokeni` zako zote kwenye mtandao huo.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Kagua vibali vyako**:

Baada ya kuunganisha mkoba wako, unaweza kukagua idhini zako zilizopo. Unaweza kupanga, kuchuja au kutafuta idhini maalum kwa kutumia anwani ya anayeruhusiwa kutumia. Kupanga kwa "Newest to Oldest" ni muhimu sana kama unashuku kuwa kuna idhini hatari ya hivi karibuni. Tumia chaguo za kupanga na kuchuja zilizotolewa ili kupata muhtasari wa vibali vya tokeni ulivyotoa. Vibali vinatolewa kwa kila mnyororo, hivyo tumia uteuzi wa mtandao kurudia ukaguzi kwenye kila mtandao unaoutumia.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Futa vibali usivyovitaka:**

Ukishatambua idhini unazotaka kufuta, bofya tu kitufe cha "Revoke" kilicho karibu na kila mojawapo. Kwa hiari, unaweza kubadilisha idhini kuwa kiasi kingine kwa kubofya alama ya penseli karibu na kiasi kilichoidhinishwa, kama bado unahitaji idhini hiyo baadaye lakini unataka kupunguza hatari yako.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Inaweza kuwa kwa manufaa yako kufuta au kurekebisha kibali cha tokeni ikiwa:

1. Mkataba mahiri uliosambazwa hivi karibuni unavamiwa na kutengeneza udhaifu kwenye `soko lililogatuliwa` unalolitumia mara kwa mara.

   Mnamo Aprili 2023, `DEX` maarufu SushiSwap ilipatwa na shambulio kama hilo, ambapo takriban \~$3.5M ziliibwa kutoka kwa watumiaji. Watumiaji walioathirika waliendelea kuwa hatarini kama hawakuwa wamefuta kibali chao cha tokeni.

2. Pendekezo hatari la utawala linasasisha mikataba kadhaa kwa nia ya kuiba pesa za watumiaji.

   Zaidi ya $2.5M za mali ziliathirika wakati Atlantis Loans, itifaki ya `DeFi` kwenye mnyororo wa BNB, ilipotekeleza pendekezo la utawala lililolenga mikataba kadhaa. Watumiaji waliodhibiti kikomo cha idhini zao walipunguza hatari ya mikoba yao kuibiwa kabisa na pendekezo hilo hatari.

## Usisahau uwakilishi

Tangu uboreshaji wa Pectra wa Ethereum (Mei 2025), vibali si ruhusa pekee zinazostahili kukaguliwa. Kipengele kipya cha mkoba (EIP-7702) kinaruhusu mkoba wako kukabidhi kazi kwa msimbo wa ziada, kikiwezesha urahisi kama kuunganisha miamala pamoja, lakini pia mbinu mpya ya wezi: saini moja hatari inaweza kusakinisha msimbo wa "sweeper" unaopeleka mara moja chochote unachoweka kwa mvamizi, bila seed phrase yako kuvuja kamwe. Mwaka 2025, watafiti wa Wintermute waligundua kuwa zaidi ya 97% ya uwakilishi wa awali wa mikoba ulielekeza kwenye msimbo uleule wa sweeper.

Revoke.cash inaonyesha uwakilishi wako hai chini ya kichupo cha "Delegations", lakini kwa kuwa uwakilishi unadhibitiwa na mkoba wako badala ya dApp, unafuta uwakilishi usioutaka kutoka ndani ya mkoba wako mwenyewe. Kwenye MetaMask, fungua maelezo ya akaunti kisha urudishe akaunti kuwa akaunti ya kawaida. Kama hukuwahi kuchagua kupandisha hadhi kuwa `akaunti mahiri`, chukulia uwakilishi wowote unaoukuta kama adui.

---

Ni wakati wa kuimarisha ulinzi wa mikoba yetu! Tunatumaini umefurahia sehemu hii ya Kitabu cha Mgunduzi: 'Kudhibiti vibali vya tokeni'.

Usisahau kukusanya sehemu hii ikiwa unataka kumiliki nakala ya kurejea kwa urahisi ukiwa safarini, au kuunga mkono maudhui yajayo ya Bankless Academy. Safari njema, Mgunduzi!

---

## FAQ

### Nitumie Revoke.cash lini?

Tumia Revoke.cash mara kwa mara, hasa wakati ambao hutumii dApp kwa bidii, na zaidi kwa masoko ya NFT. Kupunguza idhini kunapunguza hatari ya kupoteza pesa kwa uvamizi, mashambulizi au ulaghai wa phishing. Kwa kupanga idhini zako zionyeshe za hivi karibuni zaidi, unaweza kutambua idhini za kutiliwa shaka na kuzifuta mara moja, ukipunguza madhara zaidi.

### Je, kutenganisha mkoba wangu kunanilinda dhidi ya mashambulizi ya idhini?

Kutenganisha mkoba wako na dApp hakukulindi dhidi ya mashambulizi, ya idhini au mengine yoyote. Idhini za tokeni ulizotoa awali zinabaki hai hata baada ya kutenganisha, kwa sababu zimehifadhiwa onchain.

### Ninawezaje kuepuka mashambulizi ya vibali vya tokeni na hatari kama hizo?

Mbinu ya kujikinga mapema kwenye vibali vya tokeni inajumuisha:

* kutoa vibali kwa dApp unazoziamini pekee.

* kukagua vibali vya tokeni mara kwa mara.

* kuondoa vibali visivyohitajika au vya kutiliwa shaka.

* kuangalia uwakilishi wa mkoba usioutambua.

* kufuatilia habari za usasishaji wa usalama wa dApp.

Fikiria kutumia zana za nje kama [kiendelezi cha kivinjari](https://revoke.cash) cha Revoke.cash: kinafanya kazi kama hatua ya kujikinga dhidi ya vitisho vinavyoweza kutokea. Kiendelezi kinakuonya kama unakaribia kusaini kitu kinachoweza kukudhuru, kikikulinda dhidi ya ulaghai wa phishing au shughuli nyingine hatari.

### Naweza kurejesha pesa kwa Revoke.cash?

Kwa bahati mbaya, Revoke.cash haiwezi kurejesha pesa zilizoibwa. Inatumika kama zana ya kuzuia ili kupunguza uwezekano wa kuwa mwathirika wa mashambulizi ya idhini. Hata hivyo, kufuta idhini zilizotumika kuiba pesa zako kunaweza kuzuia wizi zaidi.

### Kwa nini mkoba wangu unaendelea kuibiwa kila ninapouongezea pesa?

Mkoba wako unaweza kuwa na "sweeper bot", yaani hati inayochunguza mkoba ulioathirika na kuhamisha haraka amana yoyote mpya kabla hujaweza kuchukua hatua. Chanzo kimoja ni seed phrase iliyovuja. Katika hali hiyo, kufuta idhini hakutasaidia; acha mkoba huo na utengeneze mpya. Lakini uwakilishi hatari wa mkoba ni chanzo chenye uwezekano sawa: msimbo wa sweeper uliosakinishwa kupitia saini uliyodanganywa kuitoa, bila seed phrase yako kuvuja. Angalia kichupo cha "Delegations" kwenye Revoke.cash. Ukikuta uwakilishi usioutambua, uufute kutoka ndani ya mkoba wako (kwa mfano kupitia maelezo ya akaunti ya MetaMask). Kama hakuna uwakilishi na wizi unaendelea, chukulia kwamba seed phrase yako imevuja na uhamie kwenye mkoba mpya.

---

**Mwandishi**

**[Marcus](https://twitter.com/estmcmxci)** anachapisha Jarida la ENS DAO. Anafanya utafiti kuhusu jinsi mapato ya ziada yanayotokana na ada za itifaki yanavyoweza kufadhili maendeleo ya tabaka la programu na miundombinu mingine ya chanzo huria.

**Wahariri**

**[Tetranome](https://twitter.com/Tetranome)** ni Project Champion katika Bankless Academy, akizingatia uzoefu wa mtumiaji, kiolesura, ubunifu na maudhui.

**[Trewkat](https://twitter.com/trewkat)** ni mwandishi na mhariri katika BanklessDAO. Ana hamu ya kujifunza kuhusu kripto na NFT, akizingatia hasa jinsi bora ya kuwasilisha maarifa haya kwa wengine.

**Mfadhili**

Makala hii isiyodhaminiwa ni sehemu ya elimu yako ya bure ya Bankless Academy. Kusanya makala ili kuunga mkono maudhui yajayo!
