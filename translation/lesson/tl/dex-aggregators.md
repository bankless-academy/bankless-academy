---
TITLE: Mga DEX Aggregator
DESCRIPTION: Alamin ang mga DEX Aggregator, liquidity, at ang DeFi exchange landscape.
LANGUAGE: Filipino
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

# Panimula

Inaalis ng mga `decentralized exchange` (DEX) ang gastos ng mga tagapamagitan at nakakatipid ng pera ang mga Explorer kapag nagti-trade ng mga asset.

Pero alam mo ba, Explorer, na may mas maraming paraan para makatipid gamit ang DeFi technology? Sa mga `DEX aggregator`, puwede mong i-scan ang lahat ng posibleng trade sa iba't ibang DEX platform nang sabay-sabay at i-execute ang pinakamagandang trade route, sa isang aksyon lang. Tumutulong sila makuha mo ang pinakamagandang deal sa isang token `swap`. Tulad ng flight aggregator na nakakatulong makahanap ng pinakamurang flight, tumutulong ang DEX aggregator na ma-maximize ang value ng trade mo.

Ipapakita ng lesson na ito:

1. Paano hinahati ng mga DEX ang liquidity at kung paano ito nagreresulta sa mas mababang trading rates.
2. Paano pinapayagan ng mga DEX aggregator ang mga user na tingnan at gamitin ang maraming DEX sa isang interface.
3. Iba't ibang paraan kung paano makakatipid ang isang aggregator interface ng oras at pera ng mga Explorer.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Paano Nakakaapekto ang Liquidity sa mga Presyo

Ang halaga ng anumang token na available para i-trade sa isang market ay tinatawag na `liquidity` ng token. Malakas na naiimpluwensyahan ng available na liquidity ang `price impact` kapag nagti-trade sa DeFi; ang malaking price impact ay nangangahulugang mas magiging mahal ang trade, at ang mababang price impact ay mas mura. Karamihan ng mga tao ay mas gustong mag-trade sa mga market na may mas mataas na liquidity para bawasan ang price impact nila.

Puwede mo itong isipin na parang swimming pool; mas maraming tubig (liquidity), mas maliit ang _pagbabago_ sa antas ng tubig (price impact) kapag may lumundag o umalis. Ang laki ng 'someone' na iyon (ang trade) ay nakakaapekto rin sa _pagbabago_ ng antas ng tubig (price impact).

# Halimbawa ng Epekto ng Liquidity sa mga Presyo

Tingnan natin ang isang halimbawa.

Isipin ang isang token na naki-trade sa ilang DEX nang sabay-sabay. May isang DEX na may malalim na pool na may karamihan sa `liquidity` ng token, habang may isa pang mababaw na pool na may maliit na bahagi lang nito.

Kung bumili ang isang Explorer ng parehong halaga ng token mula sa bawat pool, mas mataas ang magiging `price impact` sa mababaw na pool. Kumukuha ang parehong trade ng mas malaking porsyento ng total liquidity ng pool na iyon, kaya mas malaki ang igagalaw nito sa presyo at mas magiging mahal para sa bumibili.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Punan ang mga blangko: Para makahanap ng pinakamagandang presyo, gugustuhin ng mga tao na mag-trade sa mga market na may ________ liquidity para magkaroon ng ________ price impact sa mga trade nila.

- [ ] maganda, maximum

> ℹ️ Subukan ulit! Nangangahulugan ang maximum price impact na mas mahal ang trade, hindi mas mura.

- [x] mataas, mababa

> ℹ️ Tama! Mas maraming liquidity, mas maliit ang price impact, tulad ng mas malaking pool ng tubig na kaunti lang ang pagbabago kapag may lumundag.

- [ ] mababa, maganda

> ℹ️ Subukan ulit! Pinapataas ng mababang liquidity ang price impact at ginagawang mas mahal ang mga trade.

- [ ] manipis, malaki

> ℹ️ Subukan ulit! Nagdudulot ang manipis na liquidity ng malaking price impact, na eksaktong iniiwasan ng mga trader.

# Mga Kahinaan ng Tradisyonal na DEX: Manipis na Liquidity

Patuloy na lumalago ang DeFi, pero may umuusbong na problema para sa mga user: habang mas maraming DEX ang naglulunsad, kumakalat ang total na halaga ng anumang indibidwal na token. Tinatawag itong manipis na liquidity.

Alalahanin ang swimming pool: kung hinati ang available na tubig (`liquidity`) sa maraming pool, "mas manipis" ang tubig sa bawat pool kumpara sa isang orihinal na pool.

Noong unang mga araw ng DeFi, isa o dalawang DEX lang ang may hawak ng karamihan ng liquidity. Noong 2020, nagsimulang makipagkumpitensya ang mga bagong DEX para dito; may isang kalaban na kumaladkad ng mahigit $1B na liquidity palayo sa Uniswap sa loob lang ng ilang linggo. Ngayon, kumakalat ang liquidity sa daan-daang DEX sa maraming blockchain at `Layer 2` network, na nagpapamanipis sa bawat pool.

Kaya, mas malaki ang `price impact` ng anumang trade kaysa noong isang DEX lang ang may hawak ng karamihan ng liquidity ng ecosystem. Kung walang mga bagong innovation, mas mamahalin para sa mga Explorer ang mag-trade sa kahit anong DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Alin sa dalawang factor ang nagtatakda sa price impact ng isang DEX trade?

- [ ] Ang pagpili ng DEX na ginamit para sa trade at ang laki ng trade

> ℹ️ Subukan ulit! Hindi mahalaga ang DEX mismo. Ang liquidity na available sa pool ang mahalaga.

- [ ] Aling token ang pinili para i-trade at aling DEX ang ginamit para sa trade

> ℹ️ Subukan ulit! Hindi ang token o ang brand ng DEX ang nagtatakda sa price impact. Ang liquidity at laki ng trade ang gumagawa nito.

- [x] Ang laki ng trade at halaga ng available na liquidity

> ℹ️ Tama! Tulad ng swimming pool, nakadepende ang laki ng tilamsik sa laki ng lumulundag at kung gaano karaming tubig ang nasa pool.

- [ ] Ang halaga ng available na liquidity at aling token ang pinili para i-trade

> ℹ️ Subukan ulit! Isang factor ang liquidity, pero ang isa pa ay ang laki ng trade, hindi ang piniling token.

# Pagsasama-sama ng Liquidity gamit ang DEX Aggregator

Kailangan ng malaking halaga ng `liquidity` para mabawasan ang price impact at makatipid ka ng pera. Pinapayagan ng mga DEX aggregator ang mga user na mag-run ng trade sa maraming DEX nang sabay-sabay at bawasan ang price impact; ang isang malaking trade mula sa wallet ng isang Explorer ay hinahati sa maraming maliliit na trade sa maraming DEX.

Puwede pang i-route ng mga DEX aggregator ang mga trade sa isang `intermediary token`, o higit pa sa isa, kung mas magandang resulta ito para sa mga user, tulad ng paraan ng flight aggregator na nagmumungkahi ng extra na stop sa ibang airport kung mas mura ito para sa pasahero. Ginagawa ang pagtuklas ng pinakamainam na `trade route` na ito ng mga sopistikadong algorithm na naghahanap sa lahat ng posibleng landas para makahanap ng pinakamurang trade route sa oras na iyon.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Ang ibig sabihin ng trade routing sa mga DEX aggregator:

- [ ] Nire-route ang mga trade sa pamamagitan ng espesyal na kasunduan sa mga partikular na DEX

> ℹ️ Subukan ulit! Naghahanap ang mga aggregator sa lahat ng available na DEX nang algorithmic, hindi sa pamamagitan ng espesyal na kasunduan.

- [ ] Palaging nire-route ang mga trade sa maraming DEX

> ℹ️ Subukan ulit! Hinahati lang ng mga aggregator ang mga trade kapag mas magandang resulta ito. Minsan, isang DEX lang na ang nag-aalok ng pinakamagandang route.

- [ ] Nire-route lang ang mga trade sa paboritong DEX ng user

> ℹ️ Subukan ulit! Kokontra ito sa layunin kung sa isang DEX lang mananatili. Naghahanap ang mga aggregator sa maraming DEX para sa pinakamagandang presyo.

- [x] Puwedeng i-route ang mga trade sa maraming DEX at intermediary token

> ℹ️ Tama! Naghahanap ang mga algorithm sa lahat ng posibleng landas, kasama ang extra na "stop" sa mga intermediary token, para makahanap ng pinakamurang trade route.

# Paano Kinakalkula ang Gas Cost sa Ethereum

Balikan natin kung paano kinakalkula ang gas bago tingnan kung paano binabawasan ng mga DEX aggregator ang network fee. Pinakamahalaga ang mga pagtitipid na ito sa Ethereum Mainnet, kung saan puwedeng maging mataas ang fees; sa `Layer 2` network, karaniwang mga sentimos lang ang fees.

Kung paanong gas para sa kotse, ang `gas` ang gasolina para patakbuhin ang blockchain code sa Ethereum. Mas maraming computation, mas maraming gas na kailangan. Sinusukat ang presyo ng gas sa napakaliit na halaga ng Ether na tinatawag na `gwei`, tulad ng sentimos sa dolyar (1 gwei = 0.000000001 ETH).

Nakabase ang total na gastos sa gas sa dami ng gas na ginamit at sa unit price ng gas sa oras ng paggamit. Ganito ang formula:
_Dami ng gas na ginamit * Presyo ng gas = Total na gastos sa gas_

Halimbawa, sabihin nating 22 gwei ang gastos sa gas kada unit ng gas at ginamit ng transaksyon ang 120 libong unit:
_120,000 * 22 gwei = 2,640,000 gwei_ _**o**_ _0.00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Paano Binabawasan ng mga Aggregator ang Gas Cost para sa mga User

Magreresulta ang paghahati ng trade sa mas maraming transaction fee mula sa dagdag na on-chain activity, maliban kung nagplano na ang mga advanced na aggregator para sa transaction fee at isinama ito sa kalkulasyon nila ng trade route. Sina-simulate nila ang mga trade off chain, kasama ang gastos sa `gas`, para makahanap ng mga `trade route` na mag-iiwan sa mga Explorer ng pinakamalaking value sa dulo ng interaksyon.

May ilang aggregator na mas lumalampas pa. Ang 1inch, na siyang nagperinta sa DEX aggregation, ay pinapayagan na ngayon ang mga propesyonal na filler na makipagkumpitensya para i-execute ang trade mo at bayaran nila mismo ang gas (isang sistemang tinatawag na Fusion). Kadalasang walang binabayarang gas ang user.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Alin sa mga sumusunod ang HINDI paraan ng mga DEX aggregator para bawasan ang transaction cost ng mga user?

- [ ] Sina-simulate ang mga transaksyon off-chain bago ang trade execution

> ℹ️ Subukan ulit! Sina-simulate nga ng mga aggregator ang mga trade off-chain, kasama ang gas cost, para makahanap ng pinakamagandang route.

- [x] Hinihiling sa mga DEX na babaan ang network fee nila para sa mga user nila

> ℹ️ Tama! Itinatakda ng blockchain ang network fee, hindi ng mga DEX. Walang makakapaghiling lang na babaan ang mga ito.

- [ ] Isinasama sa kalkulasyon ang gas cost sa trade routing

> ℹ️ Subukan ulit! Isinasama nga ng mga advanced na aggregator ang transaction fee sa kalkulasyon nila ng trade route.

- [ ] Pinapayagan ang mga propesyonal na filler na i-execute ang mga trade at bayaran ang gas

> ℹ️ Subukan ulit! Sa mga intent system tulad ng 1inch Fusion, binabayaran nga ng mga filler ang gas para sa mga user.

# Mga Meta-Aggregator

May mga meta-aggregator pa nga ng mga DEX aggregator! Naghahanap ang mga platform na ito sa mga nagkukumpitensyang DEX aggregator at nagbibigay ng pinakamagandang price quotes sa mga user. Halimbawa, ang built-in swap feature sa mga wallet tulad ng MetaMask ay kumukuha ng quotes mula sa maraming provider, kasama ang mga DEX aggregator tulad ng 1inch, at nagdaragdag ng sarili nitong service fee sa ibabaw nito.

Tandaan: Kahit maginhawa, puwedeng magdagdag ng extra na gastos ang mga serbisyong `meta-aggregator` sa ibabaw ng network transaction fee, pinapataas ang overall na gastos para sa mga user. Mga Explorer: siguraduhing hindi nagiging mas mahal ang mga trade mo kaysa sa inaasahan mo.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Kino-cross-reference ng mga meta-aggregator ang maraming DEX aggregator para makahanap ng pinakamagandang presyo para sa mga user nila.

- [x] Totoo

> ℹ️ Tama! Naghahanap ang mga meta-aggregator sa mga nagkukumpitensyang DEX aggregator at nagbibigay ng pinakamagandang price quotes sa mga user.

- [ ] Hindi totoo

> ℹ️ Subukan ulit! Ang paghahanap sa maraming DEX aggregator ang eksaktong ginagawa ng mga meta-aggregator.

# Pag-iwas sa mga Sandwich Attack

Ang mga user na direktang nagswa-swap sa mga `DEX` ay puwedeng mawalan ng value hanggang sa limitasyon ng `slippage tolerance` nila kapag naglagay ng trade ang mga bot bago at pagkatapos ng trade nila para igalaw ang presyo. Tinatawag na `sandwich attack` ang mga pagkalugi na ito; noong 2021 lang, humigit-kumulang $235,000,000 ang nawala sa mga user. Ngayon, pinoprotektahan ng mga proteksyon tulad ng `private transaction routing` at intent-based trading ang karamihan ng mga pang-araw-araw na trade, pero maganda pa ring panatilihing mababa ang slippage tolerance kapag nagswa-swap ng mga token.

Sa kabutihang-palad, dahil sa pinagsamang liquidity na inaalok ng mga DEX aggregator, nababawasan ang price impact ng isang trade. Puwedeng panatilihing mababa ng mga Explorer ang slippage tolerance nila habang mas nakakatipid sa mga DEX aggregator, kumpara sa direktang pag-trade sa isang DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Para protektahan ang sarili mo, dapat mong panatilihing ________ ang slippage tolerance mo:

- [x] mababa

> ℹ️ Tama! Nililimitahan ng mababang slippage tolerance kung gaano karaming value ang makukuha ng sandwich attack mula sa trade mo.

- [ ] mataas

> ℹ️ Subukan ulit! Pinapayagan ng mataas na slippage tolerance na kumuha ng mas maraming value ang sandwich attack mula sa trade mo.

# Higit Pang Proteksyon Laban sa Sandwich: OTC Trades

May ilang aggregator tulad ng 1inch na nag-aalok pa nga ng espesyal na `OTC` (`Over The Counter`) na serbisyo na nagbibigay ng buong proteksyon laban sa mga sandwich attack. Pinapayagan ng mga optional na serbisyong ito ang direktang pag-trade sa ibang user, sa halip na dumaan sa mga `liquidity pool` ng DeFi, na nagbibigay sa mga Explorer ng isa pang magandang paraan para makatipid.

Ibang approach naman ang ginagamit ng CoW Swap: nagsa-sign ang mga user ng trade request (isang `intent`), at nagkukumpitensya ang mga propesyonal na `solver` sa mga `batch auction` para tuparin ito sa pinakamagandang presyo. Puwede pa ngang direktang itugma ng mga solver ang dalawang user, kaya protektado na sa sandwich attack ang mga trade bilang default.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Aling tool ang inaalok ng maraming DEX aggregator para makatipid ang mga user nila ng pera?

- [ ] Pagru-route ng mga trade sa liquidity mula sa maraming DEX.

> ℹ️ Subukan ulit! Binabawasan ng pinagsamang liquidity ang price impact, pero hindi ito lang ang paraan ng mga aggregator para makatipid ng pera ang mga user.

- [ ] Mga OTC trade na buong nagpoprotekta laban sa mga sandwich attack.

> ℹ️ Subukan ulit! Isa itong paraan ng mga aggregator para makatipid ng pera ang mga user, pero hindi lang ito ang isa.

- [ ] Pagsasaalang-alang sa gas cost kapag gumagawa ng pinakamagandang trade route.

> ℹ️ Subukan ulit! Isa itong paraan ng mga aggregator para makatipid ng pera ang mga user, pero hindi lang ito ang isa.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Pinagsasama ng mga aggregator ang liquidity, isinasaalang-alang ang gas cost, at puwedeng mag-alok ng OTC trades, lahat para maiwan ang mga user ng mas maraming value.
