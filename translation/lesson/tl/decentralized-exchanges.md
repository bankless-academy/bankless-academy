---
TITLE: Mga Decentralized Exchange
DESCRIPTION: Tuklasin kung paano pinapagana ng mga smart-contract exchange ang permissionless na token swap!
LANGUAGE: Filipino
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# Ano ang Decentralized Exchange?

Ang mga Decentralized Exchange (DEXs) ay on-chain na marketplace na nagbibigay-daan sa mga Explorer na secure na mag-palit ng cryptocurrency sa ibang users habang panatiling self-custody ang kanilang wallet funds. Ang mga peer-to-peer trade na ito ay pinapadali gamit ang publicly accessible na `smart contract` na kumokonekta sa users papunta sa malalaking communal vault ng mga token. Ang mga vault na ito ay tinatawag na `liquidity pool`. Makikita ang mga DEX sa halos lahat ng blockchain, at present sila sa Ethereum Layer 1 at 2.

Ang pag-exchange ng mga token ay mahalagang parte ng paggamit ng `DeFi`. Sa DeFi, mas marami kang makikitang variety at utility ng token kumpara sa ibang klase ng exchange. May mga users na bumibili ng token para makagamit ng on-chain products at services. May iba namang bumibili bilang investment. May mga token din na nagbibigay ng voting power sa may-hawak nito, para makapagdesisyon sa direksyon ng proyekto, parang pagmamay-ari ng shares sa traditional na korporasyon! Anuman ang dahilan mo, madalas kang bibisita sa mga DEX habang nasa DeFi ka.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Mga Centralized at Decentralized Exchange

Alamin natin ang pagkakaiba ng teknolohiya sa likod ng Centralized Exchange (tulad ng Coinbase, Binance, Kraken) at ng Decentralized Exchange (tulad ng Uniswap, PancakeSwap).

Sa Centralized Exchange (`CEX`), makakapag-trade at mag-invest ka ng cryptocurrency nang hindi direktang nakikipag-ugnayan sa blockchain ecosystem. Dahil naka-register ang account mo sa CEX, nasa kanila ang custody ng iyong private keys at pondo: subject ka sa kanilang management, rules, at business model risks.

Sa Decentralized Exchange (`DEX`), makakapag-trade ka ng cryptocurrency habang nasa buong self-custody ka: ito ang orihinal na layunin ng blockchain. Ang peer-to-peer na model ay pinapayagan kang maging consumer at provider nang sabay, at ma-access ang financial opportunities na dati'y para lang sa financial class. Transparent at censorship-resistant ang blockchain system: walang makakapag-freeze ng access mo o mag-reverse ng iyong trades. Nananatiling risk ang mga hack, na tatalakayin natin mamaya sa lessong ito.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Alin sa mga sumusunod ang totoo tungkol sa cryptocurrency exchanges?

- [ ] Walang team sa likod ng isang DEX.

> ℹ️ Subukan ulit! May development team pa rin ang mga DEX, pero limitado ang impluwensya nila sa proyekto.

- [ ] Isa lang ang paraan para mawalan ng pondo sa isang CEX: masamang trade.

> ℹ️ Subukan ulit! May risks din ang mga CEX. Noong 2022, bumagsak ang FTX exchange, at halos lahat ng users ay nawalan ng kanilang deposits.

- [x] Ang DEX ay nagbibigay-daan sa self-custody trading, hindi tulad ng CEX.

> ℹ️ Tama! Maliban na lang kung malinaw na sinabing hindi, hawak ng CEX ang iyong private keys.

# Mga Decentralized Application

Ang DEX ay isang klase ng `dApp`, isang decentralized application na tumatakbo sa isang blockchain. Para ituring na 'decentralized' ang isang internet application, dapat itong pwedeng gamitin ng kahit sino, iproseso ang kanilang interactions nang walang pangangailangan ng ibang tao, at nakasulat sa publicly transparent na code.

Ang mga serbisyo ng dApp ay pinapadali gamit ang mga smart contract, mga linya ng code na kumukuha ng on-chain action ng user at nagbabalik ng predictable na on-chain response. Inihahambing ng Ethereum Foundation ang smart contracts sa vending machine: pipindutin ng user ang numero ng gustong item, kasama ang tamang halaga ng pera, at makukuha niya ang inaasahang output (ang kanyang snack) nang hindi na kailangan pa ng ibang tao para pangasiwaan ang transaksyon.

Maraming klase ng command ang hinahandle ng DEX smart contracts, tulad ng token swapping, voting, o pagdaragdag at pagbawas ng `liquidity`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Mga Decentralized Application (karugtong)

Sumusunod ang mga DEX sa parehong logic ng vending machine: kinukuha nila ang input token ng user at ibinibigay ang output token. Iba pang halimbawa ng dApp:

🎟️ **Voting dApps:** naglalaan ng boto ng user sa isang entity.

📦 **Bridge dApps:** naglilipat ng cryptocurrency mula sa isang blockchain network patungo sa iba.

🤝 **Lending/Borrowing dApps:** nagbibigay ng loan sa mga users na tumutugon sa requirements.

Mga account sa Ethereum ang smart contracts: may address at balance sila, at automated ang actions kapag na-prompt ng transfer at command. Isang programmed na Ethereum account ang DEX.

Karaniwang gumagamit ang `dApps` ng website bilang visual interface para makipag-ugnayan sa underlying smart contracts. Kung down ang website, maa-access mo pa rin ang smart contract kung may experience ka!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Anong mga katangian ang kailangan para ituring na decentralized ang isang dApp?

- [ ] Permissionless: bukas ang access sa lahat ng users.

> ℹ️ Isa ito sa mga katangian ng dApp, pero hindi lang ito ang tanging katangian.

- [ ] Autonomous: hindi nangangailangan ng intermediary ang user interactions.

> ℹ️ Isa ito sa mga katangian ng dApp, pero hindi lang ito ang tanging katangian.

- [ ] Transparent: publicly available ang smart contract code.

> ℹ️ Isa ito sa mga katangian ng dApp, pero hindi lang ito ang tanging katangian.

- [x] Lahat ng nabanggit.

> ℹ️ Iginagalang ang mga Ethereum dApps dahil sa kakayahan nilang maging permissionless, autonomous, at transparent.

# Mga Automated Market Maker

Sa traditional markets at `CEX`, gumagamit ang custodian mo ng `order book`: isang database na puno ng buy at sell offers. Ikinukonekta ng CEX ang trade offer mo sa offer ng ibang tao. Karaniwang sisingilin ka ng commission, at maiisip mo pa rin kung nakahanap ang undisclosed matching method ng best deal para sa iyo.

Karamihan sa `DEX` ay gumagamit ng 'Automated Market Maker' (`AMM`) technology, ang pinakakaraniwang design para sa token swaps: isang sistema na nagpapresyo ng trade mo gamit ang public algorithm. May mas bagong DEX na gumagamit naman ng order books o intent-based systems. Dahil open-source ang AMM algorithm, kahit sino ay makakaintindi at makakapag-improve nito, na humahantong sa healthy competition.

Rinu-route ng mga AMM ang trades sa pamamagitan ng `liquidity pool`, sa halip na direktang itugma ang bids at asks ng users. Nag-aakumula at nagbibigay ng tokens ang communal vaults na ito base sa interactions ng users, kung saan lahat ng hakbang ay makikita sa public blockchain.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Ano ang benepisyo ng paggamit ng AMM kumpara sa traditional order book?

- [ ] Mas mabilis ang AMM trade kaysa sa order book trade.

> ℹ️ Kapag isinama natin ang network confirmation time, hindi ito laging totoo.

- [ ] Direktang ikinokonekta ka ng AMM sa ibang user.

> ℹ️ Rinu-route ng AMM ang trades ng users papunta sa communal token vaults na tinatawag na liquidity pools, hindi direkta sa pagitan ng mga user.

- [x] Kaya mong matukoy at maiwasan ang ibang partido na gumagawa ng one-sided trades.

> ℹ️ Dahil sa transparent na katangian ng AMM, mas mahirap para sa mga platform na itago ang malisyosong aksyon, o para sa users na maging malisyoso!

# Mga Token Swap

Ang mga trade ng cryptocurrency sa blockchain ay tinatawag na `token swap`. Ini-convert ng mga smart contract interaction na ito ang isang cryptocurrency papunta sa iba gamit ang AMM `liquidity pool`. Sa pagbuo ng `trade route`, isang landas sa tamang liquidity pools, ipinapalit ng DEX smart contract ang input token mo para sa output token na gusto mo. Dahil dalawang token lang ang hawak ng pools, at hindi lahat ng `token pair` ay may pool, maaaring dumaan ang route sa maraming pools para makumpleto ang swap mo.

Para mabigyan ang smart contract ng access sa wallet natin, binibigyan natin ito ng permission na mag-withdraw ng pondo hanggang sa specified na halaga. Pinapahintulutan ng mga `token allowance` na ito ang trusted contracts na magsagawa ng transaksyon nang hindi kailangan ang private key natin. Nagbabayad ng gas ang pagbibigay nito, kaya nananatiling bukas ang permissions: isa itong dahilan kung bakit mag-trade sa isang wallet at mag-hold sa iba. Sinusubaybayan at binabawi natin ang allowances sa [Managing Token Allowances](https://app.banklessacademy.com/lessons/managing-token-allowances) lesson!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Mga Token Swap (karugtong)

Tingnan natin ang isang halimbawang swap para maintindihan ang proseso ng permission at exchange. Isang swap sa pagitan ng USDC papunta sa OP sa Velodrome, isang malaking DEX sa Optimism network, ang halimbawa. Madalas ma-route ang trade na ito sa dalawang pools, dahil hindi masyadong cost-efficient ang USDC/OP `liquidity pool`:

1. Una, binibigyan mo ang tamang Velodrome smart contract ng permission na mag-withdraw ng USDC mula sa iyong wallet.
2. Isinusumite mo ang iyong swap transaction request sa Velodrome.
3. Tinatanggap ang transaksyon: Ini-withdraw ng Velodrome ang specified na halaga ng USDC mula sa iyong wallet, papunta sa USDC/ETH liquidity pool. Ang katumbas na halaga ng ETH ay lumalabas sa unang liquidity pool na ito at inililipat sa ETH/OP liquidity pool. Sa huli, ililipat ang OP mula sa pangalawang liquidity pool papunta sa iyong wallet address.

Kumpleto na ang swap transaction. Napalitan na ang iyong USDC tokens ng OP, sa pamamagitan ng ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

Kaya ng mga AMM na i-route ang isang trade sa maraming liquidity pools, lahat sa iisang transaksyon.

- [x] Totoo

> ℹ️ Tama! Maaaring mas mataas ang babayaran mong network fee, pero pinagsama-sama ang mga aksyon sa isang transaksyon.

- [ ] Hindi totoo

> ℹ️ Mali, balikan ang nakaraang slide para maintindihan kung bakit.

# Ano ang Liquidity?

Tumutukoy ang liquidity sa mundo ng crypto sa kakayahan ng isang marketplace na pagaanin ang pagbili at pagbenta ng digital assets sa patas na presyo. Kapag mataas ang liquidity, mas stable ang presyo; kapag mababa, mas volatile. Layunin ng `DEX` na magkaroon ng mataas na liquidity sa lahat ng liquidity pools nito, dahil naaakit ang users sa mas patas na presyo.

Ibig sabihin ng mataas na liquidity, malaki ang dami ng tokens sa pool, karaniwan ay 50/50 split ng dalawang tokens na tina-trade papasok at palabas. Halimbawa, pinapadali ng isang USDC/ETH pool ang lahat ng trades sa `token pair` na ito sa platform.
Kapag mas marami ang tokens, mas maliit ang epekto ng mga trade sa 50/50 balance, kaya mas stable ang presyo. Tinatawag na `price impact` ang dami ng pagkaantala ng balanseng ito sa isang trade.

Bilang Explorer, gusto mong maging pinakamababa ang price impact sa trades mo, para makakuha ng pinakamagandang deal! Ibig sabihin, gusto mo ng mataas at balanseng liquidity.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Mga Liquidity Provider

Mahalaga ang pag-optimize para sa mataas na `liquidity` sa tagumpay ng isang DEX, pero dahil limitado lang ang liquidity sa buong cryptocurrency ecosystem, nagkakaroon ng kompetisyon ang bawat DEX para makakuha ng pinakamaraming liquidity. Kaya saan nga ba galing ang liquidity na ito?

Sa isang decentralized ecosystem, may insentibo ang mga DeFi citizens na magbigay ng liquidity sa isang pool para itaas ang TVL (total value locked) ng platform. Ang mga fees na kinokolekta mula sa mga user na nagta-trade sa pool ay ipinapamahagi sa mga LP (liquidity providers) base sa dami ng liquidity na ibinigay. Tama ang naririnig mo: sa pagpapahiram ng tokens mo sa DEX liquidity pool, makakabuo ka ng passive income.

May iba't ibang consideration kapag magiging `LP` ka, at tatalakayin natin ito sa hinaharap na content. Sa ngayon, alamin mong hindi guaranteed ang malalaking APR (annual percentage rates) na makikita sa DEX liquidity pools, at posibleng magkaroon ng losses.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Kumpletuhin ang pangungusap: "Kapag mababa ang liquidity, __________."

- [ ] mataas din ang volatility, kapag mataas ang liquidity.

> ℹ️ Mali, subukan ulit.

- [ ] mababa din ang volatility, kapag mababa ang liquidity.

> ℹ️ Mali, subukan ulit.

- [x] mataas ang volatility.

> ℹ️ Tumpak! Karaniwang inversely-correlated ang liquidity at volatility.

# Knowledge Check 6

Paano hinihikayat ng mga DEX ang users na magbigay ng liquidity?

- [ ] Insurance para sa trade losses.

> ℹ️ Wala mang CEX o DEX ang nagpoprotekta sa iyo mula sa losses ng masamang investment.

- [x] Bahagi ng platform fees at/o bonus tokens.

> ℹ️ Madalas hatiin ang fees na sinisingil ng DEX sa iba't ibang platform stakeholders, kasama ang mga LP. May ilang platform pa nga na nagbibigay ng karagdagang bonus.

- [ ] Access sa private liquidity pools.

> ℹ️ Walang private liquidity pools, malamang na hindi sasapat ang returns sa mababang trapiko.

- [ ] Lahat ng nabanggit.

> ℹ️ Isa lang ang tamang sagot dito, kaya mo bang alamin kung alin?

# Mga Platform Fee

Sinisingil ng CEX at DEX ang mga user para sa serbisyo, at hindi rin libre ang blockchain. Limang karaniwang gastos na isaalang-alang kapag pumipili ng platform:

🏷️ **Platform fees:** Nagtatakda ang CEX ng sarili nilang commissions, samantalang nag-iiba ang DEX pool fees ayon sa pool. Pangunahing pagkakaiba: on-chain makikita ang DEX fees.

🌐 **Network fees:** Sinisingil ng blockchains ang gas fees bukod pa sa dApp transaction. Tingnan ang [Etherscan.io](https://etherscan.io/gastracker) para sa real-time gas estimate. Sa Layer 2, mas mura ang fees; ikumpara sa [growthepie](https://www.growthepie.com/).

📦 **Bridge fees:** Sinisingil ng CEX at blockchain bridges ang paglilipat ng cryptocurrency papunta sa ibang network. Nagpapakita ang mga bridge dApp ng fee estimate bago mo kumpirmahin.

💹 **Exchange rates:** Kapag bumibili ka ng cryptocurrency direkta gamit ang fiat, mag-ingat sa exchange rates na hindi sumasalamin sa market rate.

🧊 **Slippage:** Mabilis gumalaw ang presyo, kaya may puwang para sa pagbabago sa swap: tinatawag itong `slippage` (karaniwan ay 0.5-2%). Kapag masyadong mababa ang setting, maaaring ma-reject ang trade.

Laging mag-research bago mag-trade, para maintindihan ang gastos at trade-offs ng isang platform.

# Mga Bentahe ng DEX

Marami na tayong tinalakay na teorya sa lessong ito, pero baka naiisip mo pa rin kung angkop ba ang DEX para sa iyo. Sa pangkalahatan, malamang na makikinabang ka sa Decentralized Exchanges kung:

- 🔑 Gusto mong panatilihin ang custody sa iyong digital assets.
- 🔒 Gusto mong i-secure ang iyong assets sa blockchain, para maiwasan ang CEX collapses.
- ⌛ Gusto mong ma-access ang cryptocurrency market 24/7.
- 👛 Gusto mong ma-access ang mas malawak na uri ng cryptocurrencies.
- 🤑 Interesado kang magbigay ng liquidity.
- 🛂 Ayaw mong mag-register at mag-`KYC` sa bawat platform na gagamitin mo.
- ⚔️ Hinahanap mo ang karagdagang risks at rewards ng pag-explore sa Decentralized Finance.

Gayunpaman, halos lahat ng DeFi user ay may account sa Centralized Exchange. Ito ay dahil may madaling on/off ramp features ang mga CEX papunta sa traditional banking world; madali kang makakalipat ng pera mula sa bank account mo papunta sa blockchain, at kabaliktaran. Inihahambing ito ni [Ryan Sean Adams](https://twitter.com/RyanSAdams) sa paggamit ng public bathroom: _"Pumasok ka, gawin mo ang kailangan mo, lumabas ka."_

Maganda ito dahil pwede kang magsimula sa isang CEX account at unti-unting lumipat sa DeFi habang lumalaki ang confidence mo sa navigation.

# Mga Panganib ng DEX

May risk din sa paggamit ng DEX. Narito ang ilan sa mga pinakamalaking impact:

🐞 **Smart contract risk:** Binabawasan ng mga audit ang tsansa ng smart contract bugs, pero hindi buo itong inaalis: noong 2025, isang malaking DEX na na-audit na ng maraming firm ay nawalan ng $128M dahil sa isang subtle na code bug. Piliin ang trusted at heavily audited na smart contracts.

💰 **Self-custody risk:** Dahil ikaw lang ang responsable sa private keys mo, maaari kang mawalan ng buong wallet sa theft, scams, o nawawalang seed phrase. Kaya bawasan ang risk gamit ang multi-wallet strategy, at panatilihin ang backup ng seed phrases mo sa secure na lugar sa totoong mundo.

🥪 **Sandwich attacks:** Kapag itinaas mo ang slippage ng swap mo, tumataas din ang posibilidad na mag-koordinasyon ang mga trade frontrunner ng `sandwich attack` laban sa iyo, at mawalan ka hanggang sa halaga ng slippage mo. Tatalakayin natin kung paano mag-ingat sa attack na ito sa hinaharap na content.

Kasama ang mga advantage at risk na ito, maaaring mas angkop sa iyo ang isang CEX kung:

- 🎓 Baguhan ka pa sa cryptocurrency journey mo, at nag-aaral pa lang tungkol sa risks at rewards.
- ⚖️ Maliit ang trade frequency at volume mo, kaya hindi realistiko ang blockchain fees.
- 🏰 Mas gusto mong ipagkatiwala sa isang exchange ang pagbantay sa iyong pondo, kaysa ikaw mismo ang responsable.

May mga users na kumukuha ng hybrid approach para bawasan ang overall risk, gamit ang CEX para bumili at magbenta ng cryptocurrency, habang iniimbak naman ito sa blockchain mismo.

# Knowledge Check 7

Bakit ka gagamit ng Decentralized Exchange sa halip na Centralized Exchange?

- [ ] Gusto mong ma-access ang mga token na hindi nakalista sa isang Centralized Exchange.

> ℹ️ Isa ito sa mga katangian ng DEX, pero hindi lang ito ang tanging katangian.

- [ ] Gusto mong panatilihin ang buong custody sa pondong ipinalit.

> ℹ️ Isa ito sa mga katangian ng DEX, pero hindi lang ito ang tanging katangian.

- [ ] Gusto mong ma-access ang mga tools at opportunities na hindi karaniwang available.

> ℹ️ Isa ito sa mga katangian ng DEX, pero hindi lang ito ang tanging katangian.

- [x] Lahat ng nabanggit.

> ℹ️ Tumpak! Iniaalok ng DEX ang lahat ng benepisyong ito kumpara sa CEX.

# Pagpili ng DEX

Maraming Decentralized Exchange sa DeFi, at mas maganda ang ilan kaysa sa iba. Isaalang-alang ang limang mahalagang factor na ito kapag pumipili ng DEX:

🥇 **Legitimacy:** Kilala ba ang entity sa pagiging trustworthy, quality, at longevity nito?

⛲ **Liquidity:** Sapat ba kataas ang `TVL` ng liquidity pool para mabawasan ang price impact?

🖱️ **Ease of use:** Madali bang gamitin ang user interface?

🔐 **Security:** Na-audit ba ang mga smart contract ng maraming auditors?

🎁 **Rewards and Features:** May loyalty rewards ba para sa paggamit ng exchange o pagbibigay ng liquidity? Kaya mo bang bumoto sa governance?

Kabilang sa mga kilalang pangalan na mataas ang marka sa mga larangang ito ang Uniswap, Curve, Velodrome, at PancakeSwap. Madali kang makakalipat mula sa isang DEX papunta sa iba hanggang makahanap ka ng ilang paborito! Para sa lesson quest, gagamitin natin ang Velodrome, isang well-established na DEX sa Optimism network. Madali itong gamitin, at dahil nasa Layer 2 ito, mas makatwiran ang mga fees!

# Mga Best Practice sa DEX

Bago ka makipag-ugnayan sa isang dApp, may ilang best practices kang dapat sundin para maprotektahan ang iyong pondo:

👩‍💻 I-verify ang link ng dApp gamit ang official project X (Twitter) account (gold check mark) o trusted third party, at i-bookmark ito. Nagsisimula ang maraming DeFi scam sa fake link, kahit sa popular na search engine.

🔓 Kapag nagbibigay ng on-chain `token allowance`, i-limit ito sa halaga ng trade mo. Maraming DEX na ngayon ang gumagamit ng signature-based approvals na sumasaklaw lang sa trade mo: tingnan ang [Managing Token Allowances](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Huwag makipag-ugnayan sa mga dApp gamit ang HODL wallet mo; gumamit ng hiwalay na wallet para dito. Tinatalakay ng [Web3 Security lesson](https://app.banklessacademy.com/lessons/web3-security) ang mga wallet strategy.

Handa ka na ngayong makipag-ugnayan sa isang Decentralized Exchange!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Paano mo masisiguradong napili mo ang isang reputable na DEX?

- [x] Sa pagche-check ng reputasyon nito at paggamit lang ng URL mula sa trusted sources.

> ℹ️ Tumpak! I-verify nang mag-isa ang online reputation ng DEX, at sundan lang ang mga URL na galing sa trusted party.

- [ ] Sa paggawa ng maliit na test interaction sa unang paggamit mo.

> ℹ️ Isang interaction lang sa masamang smart contract ay puwede nang maglinis ng buo mong wallet.

- [ ] Pareho sa nabanggit.

> ℹ️ Mali. Isang interaction lang sa masamang smart contract ay puwede nang maglinis ng buo mong wallet.
