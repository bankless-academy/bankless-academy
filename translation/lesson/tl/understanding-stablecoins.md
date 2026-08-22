---
TITLE: Pag-unawa sa mga Stablecoin
DESCRIPTION: Gumamit ng dolyar, euro, at iba pa sa blockchain.
LANGUAGE: Filipino
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
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

> * Ang mga stablecoin ang katumbas sa blockchain ng fiat currency, tulad ng dolyar o euro.
>
> * Karaniwang inilalabas ang mga stablecoin bilang token (halimbawa, mga `ERC-20` token sa Ethereum) at umiikot na ngayon sa maraming blockchain. Pinapayagan nila ang mga DeFi user na mabilis na lumipat sa pagitan ng fiat value at crypto value, habang nasa blockchain pa rin.
>
> * May ilang kategorya ng stablecoin, bawat isa may sariling trade-off at risk profile.
>
> * Mas malaking annual interest ang puwedeng maibigay ng mga stablecoin kaysa sa pag-hold ng fiat sa tradisyonal na bangko, bagama't hinuhubog na ngayon ng regulasyon kung sino ang puwedeng mag-alok ng yield na iyon, at paano.

## Bakit Mag-hold ng Stablecoin?

Naging pundasyon ang mga stablecoin sa DeFi ecosystem. Pagkatapos umabot sa halos $140 bilyong USD sa supply noong peak nito noong 2022 (nasa larawan sa ibaba), lumagpas sa $300 bilyon ang total supply noong 2026, at nag-settle ang mga stablecoin ng higit $30 trilyon na transaction value noong 2025, mas malaki pa sa in-process ng Visa nang taong iyon.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Narito kung bakit hinahanap-hanap ang mga ito:

* **Stability:** Ang pag-hold ng stablecoin sa self-custody wallet mo ay parang pag-hold ng fiat currency, pero nasa blockchain. Kapag nag-ho-hold ka ng stablecoin tulad ng USD Coin (USDC), na inilabas ng Circle, aasahan mong mananatili itong 1:1 sa halaga sa U.S. dollar habang bumabagsak-tumataas ang presyo ng mga asset tulad ng ether at bitcoin.

* **Flexibility:** Dahil umiiral ang naka-peg na value na ito bilang token sa blockchain, madaling lumipat sa pagitan ng fiat value at crypto value.

* **Access:** Nagbibigay ang mga stablecoin ng access sa iba't ibang decentralized financial services, tulad ng permissionless borrowing o lending para kumita ng interest.

* **Security:** Dahil sa cryptography, sobrang hirap para sa mga attacker na kunin o peke-hin ang mga transaksyon.

Ang paraan kung paano pinapanatili ng isang stablecoin ang 1:1 na katumbasan, o `peg`, sa fiat counterpart nito, ang pinakamahalagang katangian nito. Kung paano lang may halaga ang fiat currency dahil sa mga pundasyong sumusuporta rito, ang peg mechanism ng isang stablecoin ang nagdidikta sa value ng mga hawak mo.

## Mga Kategorya ng Stablecoin

May tatlong karaniwang estratehiya ang isang stablecoin para mapanatili ang price peg nito:

* 💵 **Fiat-backed:** 1:1 collateralized ng totoong fiat reserves.

* 🔗 **Crypto-collateralized:** overcollateralized ng mga crypto deposit sa mga DeFi protocol.

* 🔃 **Algorithmic:** may supply-balancing algorithm sa halip na buong collateral, isang disenyong may maputik na kasaysayan.

### 1\. Fiat-backed na Stablecoin

Pinananatili ng mga fiat-backed stablecoin ang value sa pamamagitan ng pag-issue ng fixed na token supply na katumbas ng totoong currency reserves. Pinananatili ang on-chain price nito sa pamamagitan ng supply/demand economics: kaunti lang ang gustong magbayad nang higit sa isang totoong dolyar para sa isang dolyar na on-chain value, kaya dinadala na lang nila ang trade sa ibang lugar. Para sagutin ang tumataas na demand, nagla-lock ng dagdag na fiat ang `stablecoin issuer` at pinapataas ang token supply nang katumbas na halaga.

Kabilang sa mga kilalang fiat-backed stablecoin ang USDT ng Tether at USD Coin (USDC) ng Circle. Naglalabas din ang Circle ng katumbas na euro-pegged na token, EURC.

Kumikita ang mga stablecoin issuer sa iba't ibang paraan. Kasama rito ang pag-invest ng bahagi ng fiat reserves nila sa short-term US Treasuries at cash equivalents, gayundin ang paggamit ng mixed revenue model na kinabibilangan ng pangongolekta ng transaction fee at pag-aalok ng lending services.

> **Innovation at Philanthropy sa pamamagitan ng Fiat-Backed Stablecoin: Glo Dollar**
>
> Gumagamit ang Glo Foundation ng makabagong approach sa reserve revenue kasama ang [Glo Dollar](https://www.glodollar.org/) (USDGLO), ang US dollar-backed stablecoin nito: pinondohan ng interest na kinikita sa reserves nito ang mga basic income program para sa mga taong nasa matinding kahirapan. Sa pag-hold lang ng USDGLO, nagsasagawa ang mga user ng embedded philanthropy. Alamin kung paano gumagana ang Glo Dollar, [dito](https://www.glodollar.org/articles/how-glo-works).

Mga dapat isaalang-alang sa paggamit ng fiat-backed na stablecoin:

* **Reserve Reporting:** Kailangan ng mga holder ng katiyakan na katumbas nang 1:1 ang mga stablecoin token nila sa fiat reserves. Naglalabas ang karamihan ng issuer ng mga `attestation` (kinukumpirma ng independent accountant na umiral ang reserves sa isang partikular na petsa), na mas mahina kaysa sa buong audit ng pananalapi ng issuer; wala pang major issuer na naglabas nito. Buwanang naglalabas ang Circle ng USDC attestation (ni Deloitte), at ang Tether, dating opaque tungkol sa backing nito, ay naglalabas na ngayon ng quarterly attestation (ni BDO).

* **Regulation:** Sa US, hinihiling ng GENIUS Act (nilagdaan Hulyo 2025) sa mga payment stablecoin issuer na mag-hold ng 1:1 reserves sa cash at short-term US Treasuries, at ipinagbabawal silang magbayad ng interest sa mga holder. Sa EU, naging dahilan ang MiCA framework para tanggalin ng mga major exchange ang mga non-compliant na stablecoin tulad ng USDT para sa mga European user.

* **Censorship Risk:** Dahil parehong nasa ilalim ng imbestigasyon ng gobyerno ang USDC at USDT, may freeze function ang mga `smart contract` ng mga token na ito kung saan puwedeng i-lock ang on-chain holdings ng user sa mga kasong may kahina-hinalang aktibidad. Naaangkop din ang freeze function na ito sa mga token na hawak sa mga `non-custodial wallet`.

Ang mataas na antas ng centralization sa fiat-backed stablecoin sector ay nag-iiwan ng malaking espasyo para umunlad sa pag-hold ng fiat-pegged value sa paraang crypto-native.

### 2\. Crypto-collateralized na Stablecoin

Mas transparent at decentralized na option ang mga crypto-collateralized na stablecoin, at tumutulong ang mga katangiang ito na maalis ang ilang risk. Pinapanatili nila ang isang fiat peg sa pamamagitan ng crypto asset reserves. Dahil naiimpluwensyahan ng volatility ng crypto market ang total value ng reserves na ito, overcollateralized ang mga stablecoin na ito, minsan hanggang 200%! Nakikita sa chain ang lahat ng collateralized asset, kaya may 24/7 access ang mga user sa totoong komposisyon ng mga stablecoin nila.

Ang pinakakilalang halimbawa sa kategoryang ito ay ang USDS ng Sky, ang kahalili ng Dai (DAI) ng MakerDAO, ang orihinal na crypto-collateralized na stablecoin, matapos mag-rebrand ang MakerDAO sa Sky noong 2024. Para sa mas purong desentralisasyon, ang LUSD ng Liquity ay backed lang ng overcollateralized na ETH deposits.

![Collateral breakdown ng DAI, ang predecessor ng USDS (Hunyo 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Mga dapat isaalang-alang:

* **Collateral Valuation:** Karaniwang binubuo ang reserves ng isang stablecoin ng crypto, ibang stablecoin, at kahit ibang asset class. Halimbawa, ang USDS ay backed ng ETH, stablecoin, real-world assets tulad ng US Treasuries, at ilan pang minor na components. Para bawasan ang risk ng magkakaibang asset na ito, overcollateralized ang USDS (sa oras ng pagsulat nito). Kahit bumagsak ang presyo ng ETH nang 20%, magkakaroon pa rin ang USDS ng [sapat na collateral](https://defillama.com/stablecoins) para masaklaw ang mga token nito. Pero puwedeng magsimulang kumalas ang peg sa dagdag pang volatility ng presyo sa hanay ng mga asset nito.

* `Counterparty Risk`: Dahil umaasa sa maraming asset class, mas malaki ang chance na magkaproblema ang isa sa mga asset at maapektuhan ang value ng mga hawak mo. Pero fractional lang ang exposure mo sa epekto ng bawat indibidwal na risk.

* **Governance Risk:** Ang ganitong uri ng stablecoin at ang treasury nito ay pinamamahalaan ng isang desentralisadong grupo ng governance voters. Ibig sabihin, may risk ng human error, o posibleng governance capture.

### 3\. Algorithmic na Stablecoin

Sinusubukan ng mga token na ito na panatilihin ang peg nila sa pamamagitan ng automatic na pagbabalanse ng sarili nilang supply sa halip na mag-hold ng buong collateral: nag-aalis ang onchain algorithm ng mga token sa circulation kapag bumagsak ang market price sa ibaba ng peg, at nag-mi-mint ng bago kapag tumaas ito nang lampas. Sa teorya, nangangako ito ng stablecoin na walang bangko at collateral. Sa totoong buhay, nabigo ang purong bersyon ng disenyong ito, at masaklap.

Ang pinakamalinaw na halimbawa ay ang UST ng Terra, kung saan pinapayagan ng algorithm nito ang mga holder na palaging mag-swap ng 1 UST kapalit ng $1 na halaga ng volatile na LUNA token ng Terra. Noong Mayo 2022, pinilit ng malawakang pagbenta ng UST ang algorithm na mag-mint ng malaking dami ng LUNA, na nagpabagsak sa presyo nito at nagdulot ng mas maraming pagbenta pa: isang `death spiral` na nagpawala ng humigit-kumulang $40 bilyon sa loob lang ng ilang araw. Hindi na nabawi ng UST ang peg nito.

Iniwan na ng mga surviving project ang purong modelo. Ang Frax, na dating bahagyang algorithmic, ay lumipat sa 100% collateralization noong 2023; ang kasalukuyang stablecoin nito, ang frxUSD, ay backed ng reserves kasama ang tokenized US Treasury funds, habang ang FRAX naman ngayon ay ang governance token ng protocol.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

May umusbong na bagong kategorya mula sa mga guho: hybrid o 'synthetic dollar' na mga disenyo tulad ng USDe ng Ethena, na may hawak na crypto collateral kasama ang mga offsetting trading position na nagkakansela sa galaw ng presyo (isang 'delta-neutral' hedge). Collateralized ang mga ito, pero sa bagong paraan, na may sariling risk, tulad ng pag-asa sa mga exchange na naghahawak ng mga posisyong iyon, at sa market conditions na nagpapanatiling profitable sa hedge.

Mga dapat isaalang-alang:

* **Death Spiral Risk:** Umaasa ang purong algorithmic na peg sa patuloy na tiwala ng market. Kapag nasira ang tiwala, puwedeng palakasin pa ng supply mechanism ang pagbagsak sa halip na pigilan ito, nang walang natitirang collateral na puwedeng i-redeem.

* **Highly Technical:** Kailangan mong maintindihan kung ano talaga ang sumusuporta sa token (at sa anong kondisyon posibleng mabigo ang backing na iyon) para makabuo ng tiwala at kamalayan sa risk/reward.

* **Emergent Tech Risk:** Halos hindi pa nasusubok ang mga hybrid at synthetic na disenyo sa isang buong market cycle. Gumamit lang ng mga token na may ilang smart contract audit mula sa top-level auditors, at tandaan na hindi kayang protektahan ng mga audit laban sa mali ang economic design.

## Pagpili ng Stablecoin

Ano ang pinakamagandang stablecoin na i-hold? Gaya ng lahat sa DeFi, nakadepende ang sagot sa tanong na iyon sa **pangangailangan**, **values**, at **risk tolerance** mo.

Narito ang mabilisang review sa bawat kategorya:

* 💵 **Fiat-backed:** Ang tradisyonal na approach, ang pinakamalapit kang maaabot sa pag-hold ng fiat on chain.

  * Values: Conventionality, institutional trust.

  * Risks: Opaque na collateral backing, kakayahan ng provider na i-freeze ang pondo.

* 🔗 **Crypto-collateralized:** Isang balanseng, crypto-native na approach, na kumakalat sa collateral risk sa maraming asset class.

  * Values: Diversification, transparency, pag-unlad.

  * Risks: Volatility ng crypto market, pag-asa sa ibang asset.

* 🔃 **Algorithmic:** Ang experimental na frontier: nabigo ang mga purong disenyo nang masaklap, at hindi pa napapatunayan ang mga modernong hybrid.

  * Values: Innovation, capital efficiency, pag-unlad.

  * Risks: Death spiral, maling economic design, smart contract bug.

Gaya ng dati, ang pinakamagandang paraan para matuto tungkol sa isang bagay ay ang subukan ito. Puwede mo pa ngang i-hold ang iba't ibang stablecoin.

At tandaan, hindi pantay-pantay ang lahat ng stablecoin sa bawat kategorya! Magsaliksik muna bago makipag-ugnayan sa anumang bagong token.

---

Sana natuwa ka sa entry na ito sa Explorer's Handbook: 'Pag-unawa sa mga Stablecoin'.

Huwag kalimutang kolektahin ang entry na ito kung gusto mong magkaroon ng sarili mong kopya para madaling ma-reference sa mga paglalakbay mo, o para suportahan ang future content sa Bankless Academy. Ingat sa paglalakbay, Explorer!

---

## Mga madalas itanong

### Ano ang mga pinakasikat na stablecoin?

Ang pagtingin sa mga nangungunang stablecoin ayon sa `market cap` ay nagbibigay ng ideya sa kasalukuyang kagustuhan ng market, pero hindi ito gabay kung paano ka dapat mag-position, o kung gaano kasafe ang position na iyon.

Narito ang realtime na listahan ng top stablecoin ayon sa market cap: <https://defillama.com/stablecoins>

Madalas banggitin ng mga cryptocurrency user ang 'Lindy Effect' kapag pumipili ng investment options. Sinasabi ng konseptong ito na kung mas matagal nang umiiral ang isang bagay, mas malaki ang inaasahan nating patuloy itong mananatili. Labimpitong taon ng kasaysayan ng cryptocurrency ang nagpakita na totoo lang ito paminsan-minsan.

### Saan ako puwedeng bumili ng stablecoin?

Nag-aalok ang mga Centralized Exchange (CEX) ng mga sikat na fiat-backed na stablecoin (at karaniwan ay may sarili silang branded na stablecoin), pero kadalasang wala ang ibang uri ng stablecoin.

Bumisita sa isang Decentralized Exchange (DEX), o gumamit ng direct wallet on-ramp service tulad ng 'MetaMask Buy', para makakuha ng crypto-collateralized at algorithmic na token. Tingnan ang lesson namin tungkol sa [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) para matuto pa tungkol sa peer-2-peer na marketplace.

### Paano ako puwedeng kumita ng interest sa stablecoin?

May ilang CEX na nag-aalok ng yield sa pag-hold lang ng stablecoin sa platform nila, na pinondohan ng bahagi ng kita ng platform para mag-incentivize ng paggamit nito. Paalala para sa mga mambabasang taga-US: sa ilalim ng GENIUS Act, hindi puwedeng magbayad ng interest ang mga regulated na stablecoin issuer mismo sa mga holder: galing lang sa third-party platform ang yield, at nag-iiba ito depende sa jurisdiction.

Puwede ka ring kumita ng interest sa DeFi, gamit ang mga trustless na lending at borrowing platform. Kinokonekta ng mga platform na ito ang mga lender at borrower, pinamamahalaan ang risk sa pamamagitan ng onchain collateral at smart contracts. Puwedeng kumita ang mga stablecoin lender ng annual returns na mas mataas kaysa sa available sa tradisyonal na banking sector, pero kung saan may reward, may risk!

Karapat-dapat ang paksang lending at borrowing sa sarili nitong Bankless Academy entry. Kung interesado ka nang matuto pa, puwede mong saliksikin ang mga platform tulad ng [Aave.com](https://aave.com/) at [Curve.fi](https://curve.fi/).

### Ano ang mangyayari kung mawala sa stablecoin ang peg nito?

Bahagyang gumagalaw ang market price ng anumang stablecoin kasabay ng ebb at flow ng trading. Para sa mga major na stablecoin, ilang hundredths ng cent lang ito sa itaas o ibaba ng $1. Mabilis na sinasarhan ang maliliit na deviation na ito ng mga trader na sinasamantala ang arbitrage opportunities.

Pero, may mga kaso kung saan lumalampas ang isang stablecoin sa safe at temporary na saklaw ng pagkawala ng peg nito. Hindi ito palaging permanente (USDC, Marso 2023), pero puwede ring maging ganoon (Terra, Mayo 2022).

May ilang fiat-backed na stablecoin issuer, tulad ng USDC, na nag-aalok ng 1:1 redemption mula sa stablecoin nila papuntang regular na fiat sa pamamagitan ng website nila. Kung mananatili itong totoo sa panahon ng krisis ay ibang usapan.

---

**May-akda**

**[Tetranome](https://twitter.com/tetranome)** ang Project Champion sa Bankless Academy, na nakatuon sa user experience, UI, design, at platform curriculum.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** ay isang writer at editor sa BanklessDAO. Interesado siyang matuto ng kahit ano tungkol sa crypto at NFTs, na may partikular na pokus sa pinakamahusay na paraan para ipaabot ang kaalamang ito sa iba.

**Patron**

Ang unsponsored na artikulong ito ay bahagi ng iyong libreng edukasyon sa Bankless Academy. Kolektahin ang artikulo para suportahan ang future content!
