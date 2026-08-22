---
TITLE: Pag-fund ng Wallet sa Layer 2
DESCRIPTION: Alamin kung paano i-fund ang wallet mo sa L2 gamit ang mga CEX, third-party onramp, at bridge.
LANGUAGE: Filipino
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
## Mga pangunahing punto

> * May ilang paraan para i-fund ang wallet mo sa Ethereum scaling solution tulad ng Base, Optimism, o Arbitrum.
>
> * Madalas nagbibigay ang centralized exchanges ng direktang Layer 2 na `onramp`.
>
> * Ang mga third-party payment app ay nagbibigay-daan sa users na i-fund ang wallet sa Layer 2 mula sa bank account o debit o credit card.
>
> * Pinapayagan ng mga protocol bridge ang users na magpadala ng pondo mula sa `Ethereum Mainnet` papunta sa Layer 2.

Kung bago ka pa lang sa crypto, medyo kakaiba at nakakalito ang lahat ng usapan tungkol sa kahalagahan ng `Layer 2` (o L2). Sa kaibahan sa [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), na madalas tumutukoy sa [Ethereum Mainnet](https://ethereum.org/), ang Layer 2 ay termino para sa isang partikular na uri ng Ethereum scaling solution na nagbibigay-daan sa users na magmana ng seguridad ng Ethereum pero tamasahin ang mababang transaction fees at mabilis na `block` inclusion times. Kung nakarinig ka na ng [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/), o [Base](https://www.base.org/), Layer 2 scaling solutions ang mga iyon. Madalas isama rin ang [Polygon](https://polygon.technology/) (isa itong `sidechain` talaga, pero huwag na muna nating alalahanin iyon dito).

Ang bawat transaksyon sa Ethereum ay may bayad, tinatawag na `gas`. Presyo ng gas ay nasa `gwei`, isang maliit na unit ng ETH. Tumataas at bumababa ang fees ayon sa demand: noong 2021, sa peak demand, isang simpleng `token swap` sa Mainnet ay maaaring kumita ng tens of dollars, at itinaas pa ng mga hyped NFT mints ang fees nang mas mataas. Ngayon, karaniwang mas mababa sa isang dolyar ang gastos sa Mainnet transaction, at ang parehong aksyon sa Layer 2 ay nagkakahalaga na lang ng cents o mas mababa pa.

Dahil mabilis mag-confirm at mura isagawa ang mga transaksyon sa Layer 2, marami sa pinaka-innovative na protocols ang gumagawa sa mga L2. Pero kung hindi ka pa gaanong tumatagal sa ecosystem, hindi intuitive na malaman kung paano magsimulang gumamit ng Layer 2s. May malinaw naman tayong simulan sa paglalakbay natin sa Ethereum scaling solutions: ang pag-fund ng ating `wallet` sa Layer 2.

May tatlong pangunahing paraan para i-fund ang isang L2 wallet: paglipat ng crypto mo mula sa isang `centralized exchange` diretso papunta sa Layer 2 network, paggamit ng third-party crypto payment service para i-fund ang L2 wallet, o pagpapadala ng digital assets mo mula sa Mainnet papunta sa L2 gamit ang bridging protocol.

> Paalala, kakailanganin mo ng cryptocurrency wallet, tulad ng [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/), o [Taho](https://taho.xyz/), at isang Ethereum wallet `address` para magpatuloy. Kung wala ka pang `non-custodial wallet`, [kunin muna ang lessong ito](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Pagkatapos mong magkaroon ng non-custodial Ethereum wallet address, handa ka na para magpatuloy sa iyong crypto journey.

## Pag-fund mula sa CEX

Ang pag-fund ng wallet mo diretso mula sa isang centralized exchange (CEX) ay marahil ang pinakasimpleng paraan para ilipat ang digital assets sa isang L2, lalo na kung may hawak ka nang cryptocurrency sa exchange. Karamihan sa mga major CEX ay nag-aalok nito sa users, kahit hindi laging malinaw sa user.

Sa [Coinbase](https://www.coinbase.com/), halimbawa, maaaring direktang ipadala ng users ang pondo nila sa mga network tulad ng Optimism, Polygon, o Base (sariling Layer 2 ng Coinbase) sa ilang hakbang lang:

1\. Pumunta sa [Coinbase](https://www.coinbase.com/).

2\. [Bumili](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) o mag-hold ng ETH sa Coinbase.

3\. Piliin ang 'Send & Receive', na nasa taas ng website.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Ilagay ang halaga sa fiat o ETH na gusto mong ipadala (maaari mong i-toggle sa pagitan ng fiat at crypto sa kanan ng halaga), piliin ang 'Pay with' at piliin ang Ethereum, at sa 'To' field, ilagay ang wallet address kung saan ipapadala ang pondo. Piliin ang 'Continue'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Sa susunod na screen, piliin ang 'Network' at baguhin ang network mula Ethereum papunta sa Optimism (kasama rin sa listahan ang ibang Layer 2, tulad ng Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Suriin, at kung tama, piliin ang 'Send Now'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Karamihan sa mga major exchange ay nag-aalok sa users ng kakayahang ipadala ang crypto nila diretso sa isang L2. Sinusuportahan ng [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/), at [Kraken](https://www.kraken.com/) ang withdrawals papunta sa mga major Layer 2 tulad ng Base, Optimism, at Arbitrum. Pro Tip: Laging suriin ang withdrawal network list ng exchange mo para malaman kung aling mga L2 ang sinusuportahan nito bago ka magpadala.

## Mga Third-Party Onramp

Isa pang simpleng paraan para i-fund ang L2 wallet mo ay ang paggamit ng direct-to-L2 services na inaalok ng maraming third-party crypto payment company. Ang [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/), at [Transak](https://global.transak.com/) ay tatlo sa pinakapopular na option para i-fund ang crypto wallets nang hindi kailangang gumamit ng centralized exchange.

Tulad ng karamihan sa mga exchange, kakailanganin ka ng mga third-party na `onramp` na ito na magbigay ng `Know-Your-Customer` na impormasyon. Pero, kapag naipasa mo na ang mga basic na hurdle na iyon, madaling paraan ang mga payment option na ito para bumili ng crypto sa buong ecosystem at ilipat ito sa Layer 2.

Para sa MoonPay, ito ang mga hakbang:

1\. Pumunta sa [MoonPay](https://www.moonpay.com/).

2\. Piliin ang 'Buy crypto', na nasa taas o gitna ng website.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Ilagay ang halaga ng fiat na gusto mong ipadala at ang tamang denominasyon.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Pumili ng digital asset, sa kasong ito ay ETH. I-type ang "ETH" at makikita mo ang iba't ibang network kung saan puwede kang bumili ng ETH (baka kailangan mong mag-scroll pababa); piliin ang Layer 2 na gusto mong gamitin. I-click ang 'Continue'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Susunod, hihilingin sa iyong ilagay ang personal verification at payment data.

6\. Kapag tapos na, ilagay ang Ethereum wallet address mo. Hihilingin sa iyong siguraduhin na ligtas gamitin ang wallet.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Kumpletuhin, kumpirmahin na tama ang impormasyon, at piliin ang 'Pay'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Tulad ng mga CEX, karamihan sa mga major third-party payment onramp ay nagbibigay ng direct-to-L2 functionality. Samantalahin ang mga innovation na ito para makatipid sa transaction fees at palawakin ang saklaw ng iyong `blockchain` exploration.

## Pag-fund sa Pamamagitan ng Bridge

Kung may pondo ka na sa `Ethereum Mainnet`, ang pinakamadaling paraan para dalhin ang crypto mo sa L2 ay ang paggamit ng bridging protocol. Ang mga bridge ay ang tawag natin sa mga protocol na dinisenyo para tumulong ilipat ang pondo natin sa cryptoverse, at may ilang bridge na dinisenyo para ilipat ang crypto mula sa Ethereum Mainnet papunta sa mga Layer 2.

### Mga Native Bridge

Ang mga native bridge ay ang mga dinisenyo ng mismong Layer 2 protocols. Sa isang `optimistic rollup` tulad ng Arbitrum, Optimism, o Base, karaniwang dumarating sa L2 ang deposits sa loob ng ilang minuto, pero umaabot ng isang linggo ang paglipat ng crypto pabalik sa Mainnet. Ganito rin gumagana ang [Arbitrum Bridge](https://bridge.arbitrum.io/) at ang [Optimism Bridge](https://app.optimism.io/bridge/): binibigyan ng waiting period ang network ng oras para mahuli ang mga invalid withdrawal bago ito ma-settle.

### Mga Third-Party Bridge

Dahil walang gustong maghintay, may ilang third-party bridging service na tumutulong ilipat kaagad ang pondo natin papunta at mula sa mga L2. Kabilang sa pinakapopular na option ang [Across Protocol](https://across.to/bridge) at [Relay](https://relay.link/bridge), pero maaari mong gamitin ang [Bungee](https://bungee.exchange/) para ikumpara ang bridging fees sa iba't ibang protocol. Para gamitin ang Across, halimbawa, ito lang ang kailangan mong gawin:

1\. Pumunta sa [Across Protocol](https://across.to/bridge) bridge at ikonekta ang wallet mo.

2\. Para mag-bridge ng pondo papunta sa L2, piliin ang Ethereum sa ilalim ng 'From'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Piliin ang asset mo at ang halagang gusto mong i-bridge (Pro Tip: i-bridge lang ang native `coin` ng isang blockchain, sa kasong ito ang ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Susunod, piliin ang L2 solution mo sa 'To'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Suriin ang transaksyon, at kung tama ang lahat, piliin ang 'Send'.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Kasing-simple lang talaga ang paglipat ng pondo mula sa Mainnet papunta sa L2, at halos lahat ng bridge ay gumagana nang pareho. Pumili ng blockchain kung saan magpapadala ng pondo, pumili ng destinasyon tulad ng Base o Optimism, pumili ng asset at halaga, at tawirin ang blockchain crevice. Pro Tip: Tulad ng pagpapadala mula sa CEX, magamit mo ang [L2BEAT](https://l2beat.com/bridges/summary) para makahanap ng compatible na bridge para sa L2 destination mo.

## Ang Daan Patungo sa L2

Nag-aalok ang mga Layer 2 sa users ng lahat ng antas ng karanasan ng oportunidad na mag-eksperimento sa decentralized finance sa paraang madalas na mahirap gawin sa Mainnet. Dahil sentimos lang ang gastos sa pag-transact sa mga network na ito (maikumpara ang gastos [dito](https://www.growthepie.com/)), magandang lugar ito para maging pamilyar sa mga pangunahing building blocks ng decentralized finance, tulad ng swaps, `liquidity pools`, o `yield farms`.

Kinakailangang hakbang ang paggamit ng CEX o bridge para ilipat ang pondo papunta sa L2 sa iyong paglalakbay mula sa baguhan tungo sa may kakayahan sa crypto. Tandaan, para makita ang pondo mo sa wallet mo, baka kailangan mong idagdag ang network sa settings ng wallet mo, na magagawa sa [Chainlist](https://chainlist.org/). Kung gusto mo lang malaman kung ligtas na nakarating ang pondo sa L2 wallet mo, maaari mong tingnan ang address mo sa isang `block explorer` tulad ng [Blockscan](https://blockscan.com/), na naghahanap sa maraming network nang sabay, o pumunta sa isang DEX, tulad ng [Uniswap](https://app.uniswap.org/), at piliin ang L2 network at ang asset para makita ang balance mo.

Habang pinapalawak mo ang skills mo, kakailanganin mong alamin kung paano babawasan ang transaction fees mo. Ang pagkatuto kung paano i-fund ang isang L2 wallet ang unang hakbang, pero nasa iyo na ang susunod na hakbang sa crypto journey mo. Maligayang pagdating, Explorer, may bagong mundong naghihintay.

---

Simulan na natin, hinihintay ka na ng Layer 2 Ethereum! Umaasa kaming nasiyahan ka sa entry na ito ng Explorer's Handbook: 'Funding a Wallet on Layer 2'.

Huwag kalimutang kolektahin ang entry na ito kung gusto mong magkaroon ng sarili mong kopya para sa madaling reference sa iyong paglalakbay, o para suportahan ang future content sa Bankless Academy. Ingat sa paglalakbay, Explorer!

***

**May-akda**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** ay isang writer, editor, at coordinator sa BanklessDAO at ang Editor-in-Chief sa Good Morning News. Tumutulong din siyang magtayo ng isang grants-focused organization sa DAOpunks.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** ay isang writer at editor sa BanklessDAO. Interesado siyang matuto ng kahit ano tungkol sa crypto at NFTs, na may partikular na pokus sa pinakamahusay na paraan para ipaabot ang kaalamang ito sa iba.

**Patron**

Ang artikulong ito ay pinondohan ng **[Optimism](https://www.optimism.io/)**.
