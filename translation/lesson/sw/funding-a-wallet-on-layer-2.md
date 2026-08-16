---
TITLE: Kujaza mkoba kwenye Layer 2
DESCRIPTION: Jifunze jinsi ya kujaza mkoba wako kwenye L2 kupitia CEX, onramp za nje, na madaraja.
LANGUAGE: Kiswahili
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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

> * Kuna njia kadhaa za kujaza mkoba wako kwenye suluhisho la kupanua Ethereum kama Base, Optimism au Arbitrum.
>
> * Masoko ya kati mara nyingi hutoa `onramp` ya moja kwa moja kwenda Layer 2.
>
> * Programu za malipo za nje zinawawezesha watumiaji kujaza mkoba kwenye Layer 2 kutoka akaunti ya benki, kadi ya debiti au kadi ya mkopo.
>
> * Madaraja ya itifaki yanawaruhusu watumiaji kutuma pesa kutoka `Mtandao Mkuu wa Ethereum` kwenda Layer 2.

Ukiwa mgeni katika kripto, maneno yote kuhusu umuhimu wa `Layer 2` (au L2) yanaweza kuonekana ya ajabu na yenye kuchanganya. Tofauti na [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), ambayo mara nyingi inamaanisha [Ethereum Mainnet](https://ethereum.org/), Layer 2 ni jina la aina fulani ya suluhisho la kupanua Ethereum linalowawezesha watumiaji kurithi usalama wa Ethereum huku wakifurahia ada ndogo za miamala na muda mfupi wa kuingizwa kwenye `bloku`. Kama umewahi kusikia [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/) au [Base](https://www.base.org/), hayo ni masuluhisho ya kupanua ya Layer 2. [Polygon](https://polygon.technology/) mara nyingi huwekwa pamoja nayo (kwa kweli ni `sidechain`, lakini tusijali hilo hapa).

Kila muamala wa Ethereum hulipa ada inayoitwa `gesi`. Gesi hupimwa kwa `gwei`, kipimo kidogo sana cha ETH. Ada hupanda na kushuka kulingana na mahitaji: kwenye kilele cha mahitaji mwaka 2021, `badilishano la tokeni` rahisi kwenye Mainnet lingeweza kugharimu makumi ya dola, na uzalishaji wa NFT uliokuwa na msisimko mkubwa ulipandisha ada zaidi. Leo, muamala wa kawaida wa Mainnet unagharimu chini ya dola moja, na kitendo hicho hicho kwenye Layer 2 kinagharimu senti chache au pungufu.

Kwa kuwa miamala kwenye Layer 2 inathibitishwa haraka na ni ya bei nafuu, itifaki nyingi zenye ubunifu zaidi zinajengwa kwenye L2. Hata hivyo, usipokuwa umekaa katika mfumo huu kwa muda, si rahisi kujua jinsi ya kuanza kutumia Layer 2. Lakini kuna mahali pa wazi pa kuanzia safari yako katika masuluhisho ya kupanua Ethereum: kujaza `mkoba` wako kwenye Layer 2.

Kuna njia tatu kuu za kujaza mkoba wa L2: kuhamisha kripto yako kutoka `soko la kati` moja kwa moja kwenda mtandao wa Layer 2, kutumia huduma ya malipo ya kripto ya nje kujaza mkoba wa L2, au kutuma mali zako za kidijitali kutoka Mainnet kwenda L2 kupitia itifaki ya daraja.

> Tafadhali kumbuka, utahitaji kuwa na mkoba wa sarafu ya kripto kama [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/) au [Taho](https://taho.xyz/), pamoja na `anwani` ya mkoba wa Ethereum ili kuendelea. Kama bado hujatengeneza `mkoba usio na mdhamini`, [soma somo hili kwanza](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Ukishakuwa na anwani ya mkoba wa Ethereum usio na mdhamini, utakuwa tayari kuendelea na safari yako ya kripto.

## Kujaza kutoka CEX

Kujaza mkoba wako moja kwa moja kutoka soko la kati (CEX) pengine ndiyo njia rahisi zaidi ya kuhamishia mali za kidijitali kwenye L2, hasa kama tayari unashikilia kripto kwenye soko hilo. CEX nyingi kubwa hutoa chaguo hili, ingawa halionekani wazi kwa mtumiaji kila mara.

Kwenye [Coinbase](https://www.coinbase.com/), kwa mfano, watumiaji wanaweza kutuma pesa zao moja kwa moja kwenye mitandao kama Optimism, Polygon au Base (Layer 2 ya Coinbase yenyewe) kwa hatua chache tu:

1\. Nenda [Coinbase](https://www.coinbase.com/).

2\. [Nunua](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) au shikilia ETH kwenye Coinbase.

3\. Chagua "Send & Receive", kilicho juu ya tovuti.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Weka kiasi cha fiat au ETH unachotaka kutuma (unaweza kubadilisha kati ya fiat na kripto upande wa kulia wa kiasi), chagua "Pay with" na uchague Ethereum, kisha katika sehemu ya "To" weka anwani ya mkoba ambapo pesa zitatumwa. Chagua "Continue".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Kwenye skrini inayofuata, chagua "Network" na ubadilishe mtandao kutoka Ethereum kwenda Optimism (orodha pia ina Layer 2 nyingine, kama Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Kagua, na kama kila kitu ni sahihi, chagua "Send Now".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Masoko mengi makubwa huwapa watumiaji uwezo wa kutuma kripto yao moja kwa moja kwenda L2. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/) na [Kraken](https://www.kraken.com/) yote yanaunga mkono utoaji kwenda Layer 2 kubwa kama Base, Optimism na Arbitrum. Kidokezo: kagua orodha ya mitandao ya utoaji kwenye soko lako ili kuona L2 zinazoungwa mkono kabla ya kutuma.

## Onramp za nje

Njia nyingine rahisi ya kujaza mkoba wako wa L2 ni kutumia huduma za moja kwa moja kwenda L2 zinazotolewa na kampuni nyingi za malipo ya kripto za nje. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/) na [Transak](https://global.transak.com/) ni chaguo tatu maarufu za kujaza mikoba ya kripto bila kutumia soko la kati.

Kama masoko mengi, `onramp` hizi za nje zitakutaka utoe taarifa za `Know Your Customer`. Hata hivyo, ukishapita vizuizi hivyo vya msingi, chaguo hizi za malipo ni njia rahisi ya kununua kripto kote katika mfumo na kuihamishia Layer 2.

Kwa MoonPay, hatua ni hizi:

1\. Nenda [MoonPay](https://www.moonpay.com/).

2\. Chagua "Buy crypto", kilicho juu au katikati ya tovuti.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Weka kiasi cha fiat unachotaka kutuma na sarafu husika.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Chagua mali ya kidijitali, hapa ni ETH. Andika "ETH" nawe utaona mitandao mbalimbali unayoweza kununua ETH juu yake (huenda ukahitaji kusogeza chini); chagua Layer 2 unayotaka kutumia. Bofya "Continue".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Kisha utaombwa kuweka taarifa zako za uthibitisho binafsi na za malipo.

6\. Ukimaliza, weka anwani ya mkoba wako wa Ethereum. Utaulizwa kuhakikisha mkoba huo ni salama kutumia.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Maliza, thibitisha taarifa ni sahihi, na uchague "Pay".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Kama ilivyo kwa CEX, onramp nyingi kubwa za malipo za nje zinatoa huduma ya moja kwa moja kwenda L2. Tumia ubunifu huu kuokoa ada za miamala na kupanua uchunguzi wako wa `blockchain`.

## Kujaza kupitia madaraja

Kama tayari una pesa kwenye `Mtandao Mkuu wa Ethereum`, njia rahisi kabisa ya kupeleka kripto yako kwenye L2 ni kutumia itifaki ya daraja. Madaraja ni jina tulilozipa itifaki zilizoundwa kutusaidia kuhamisha pesa zetu katika ulimwengu wa kripto, na kuna madaraja kadhaa yaliyoundwa kuhamisha kripto kutoka Mtandao Mkuu wa Ethereum kwenda Layer 2.

### Madaraja asilia

Madaraja asilia ni yale yaliyoundwa na itifaki za Layer 2 zenyewe. Kwenye `Optimistic Rollup` kama Arbitrum, Optimism au Base, amana kwa kawaida hufika L2 ndani ya dakika chache, lakini kurudisha kripto Mainnet huchukua takriban wiki moja. [Daraja la Arbitrum](https://bridge.arbitrum.io/) na [Daraja la Optimism](https://app.optimism.io/bridge/) yote hufanya kazi hivi: muda wa kusubiri unaupa mtandao nafasi ya kunasa utoaji batili kabla haujakamilika.

### Madaraja ya nje

Kwa kuwa hakuna anayependa kusubiri, kuna huduma kadhaa za madaraja ya nje zinazotusaidia kuhamisha pesa zetu papo hapo kwenda na kutoka L2. Miongoni mwa chaguo maarufu ni [Across Protocol](https://across.to/bridge) na [Relay](https://relay.link/bridge), lakini unaweza kutumia [Bungee](https://bungee.exchange/) kulinganisha ada za madaraja kadhaa. Kutumia Across, kwa mfano, unachohitaji ni:

1\. Nenda kwenye daraja la [Across Protocol](https://across.to/bridge) na uunganishe mkoba wako.

2\. Ili kupeleka pesa L2, chagua Ethereum chini ya "From".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Chagua mali na kiasi unachotaka kuhamisha (kidokezo: hamisha `sarafu` asilia ya blockchain pekee, hapa ni ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Kisha, chagua suluhisho lako la L2 katika "To".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Kagua muamala, na kama kila kitu kinaonekana sahihi, chagua "Send".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Kuhamisha pesa kutoka Mainnet kwenda L2 ni rahisi hivyo, na karibu madaraja yote hufanya kazi vivyo hivyo. Chagua blockchain ya kutuma pesa, chagua unakokwenda kama Base au Optimism, chagua mali na kiasi, kisha vuka bonde la blockchain. Kidokezo: kama ilivyo kwa kutuma kutoka CEX, unaweza kutumia [L2BEAT](https://l2beat.com/bridges/summary) kupata daraja linaloendana na L2 unayokwenda.

## Njia ya kwenda L2

Layer 2 zinawapa watumiaji wa viwango vyote fursa ya kujaribu fedha zilizogatuliwa kwa njia ambayo mara nyingi ni ghali mno kwenye Mainnet. Kwa kuwa inagharimu senti chache tu kufanya muamala kwenye mitandao hii (unaweza kulinganisha gharama [hapa](https://www.growthepie.com/)), ni mahali pazuri pa kuzoea vipengele vya msingi vya fedha zilizogatuliwa, kama badilishano, `mabwawa ya ukwasi` au `yield farm`.

Kutumia CEX au daraja kuhamisha pesa kwenda L2 ni hatua ya lazima katika safari yako kutoka mwanzoni mwa kripto hadi umahiri. Kumbuka, ili kuona pesa zako kwenye mkoba wako, huenda ukahitaji kuongeza mtandao katika mipangilio ya mkoba, jambo linaloweza kufanyika kwenye [Chainlist](https://chainlist.org/). Kama unataka tu kuhakikisha pesa zimefika salama kwenye mkoba wako wa L2, unaweza kutafuta anwani yako kwenye `kichunguzi cha bloku` kama [Blockscan](https://blockscan.com/), kinachotafuta mitandao mingi kwa mara moja, au nenda kwenye DEX kama [Uniswap](https://app.uniswap.org/), uchague mtandao wa L2 na mali ili kuona salio lako.

Unapopanua ujuzi wako, utahitaji kujua jinsi ya kupunguza ada zako za miamala. Kujifunza kujaza mkoba wa L2 ni hatua ya kwanza, lakini hatua zinazofuata katika safari yako ya kripto ni juu yako. Karibu, Mgunduzi, ulimwengu mpya unakusubiri.

---

Twende, Layer 2 ya Ethereum inakusubiri! Tunatumaini umefurahia ingizo hili la Kitabu cha Mgunduzi: "Kujaza mkoba kwenye Layer 2".

Usisahau kukusanya ingizo hili ikiwa unataka kumiliki nakala ya kurejea kwa urahisi safarini mwako, au kuunga mkono maudhui yajayo ya Bankless Academy. Safari njema, Mgunduzi!

***

**Mwandishi**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** ni mwandishi, mhariri na mratibu katika BanklessDAO, na Mhariri Mkuu wa Good Morning News. Pia anasaidia kujenga shirika linalojikita katika ruzuku katika DAOpunks.

**Mhariri**

**[Trewkat](https://twitter.com/trewkat)** ni mwandishi na mhariri katika BanklessDAO. Anapenda kujifunza kwa kina kuhusu kripto na NFT, hasa jinsi bora ya kuwasilisha maarifa haya kwa wengine.

**Mfadhili**

Makala hii ilifadhiliwa na **[Optimism](https://www.optimism.io/)**.
