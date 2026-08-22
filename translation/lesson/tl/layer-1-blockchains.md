---
TITLE: Mga Layer 1 Blockchain
DESCRIPTION: Unawain kung paano gumagana ang mga Layer 1 blockchain at alamin ang mga limitasyon nito!
LANGUAGE: Filipino
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

May mga problemang lumalabas kapag mas maraming user ang gustong gumamit ng isang `blockchain` network kaysa sa kaya nitong hawakan. Ang malaking demand para sa `blockspace` ay puwedeng pansamantala lang o puwede ring magtagal hangga't malakas ang gusto ng mga user na gamitin ang blockchain. Sa panahon ng mataas na demand, nagkakandaan ang mga user para mapabilis ang pagproseso ng kanilang transaksyon, at tumataas ang fees, na nag-iiwan sa mga user na may mas kaunting puhunan.

Tatalakayin ng araling ito kung bakit sakop ng `Blockchain Trilemma` ang Ethereum at ang ibang blockchain, kung paano ang Trilemma ang ugat ng mga problemang nabanggit sa itaas, at kung paano nakaka-apekto ang Trilemma sa mga plano ng Ethereum para paglingkuran ang pangangailangan ng lahat ng user nito. Titingnan natin ang mga tradeoff na ginawa ng ilang blockchain kaugnay ng Blockchain Trilemma, at ang ibig sabihin ng mga tradeoff na iyon para sa mga Academy Explorer.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Blockchain Trilemma

Gaya ng ipinahihiwatig ng salitang **tri**lemma, may tatlong katangian ang mga blockchain na nagkukumpitensya sa isa't isa at pumipigil sa pag-optimize sa lahat ng tatlo nang sabay.

Ito ang mga ito: `seguridad`, `scalability`, at `desentralisasyon`.

Para makapagsilbing walang-kinikilingang pundasyon ang isang blockchain para sa isang monetary system sa global scale, dapat mahusay ito sa lahat ng tatlong aspeto. Kailangang secure laban sa pandaraya ang isang monetary system, ligtas sa mga pag-atake ng censor sa pamamagitan ng desentralisasyon, at scalable para matugunan ang pangangailangan ng mahigit 8 bilyong tao sa global society.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Inilalarawan ng Blockchain Trilemma ang relasyon sa pagitan ng:

- [ ] ethereum, bitcoin, at mga altcoin

> ℹ️ Subukan ulit! Ang Trilemma ay tungkol sa nagkukumpitensyang katangian sa loob ng isang blockchain, hindi sa magkakaibang blockchain.

- [ ] seguridad, censorship, at pandaraya

> ℹ️ Subukan ulit! Isa sa tatlo ang seguridad, pero ang censorship at pandaraya ay mga banta na hinaharap ng blockchain, hindi katangian ng Trilemma.

- [x] desentralisasyon, scalability, at seguridad

> ℹ️ Tama! Nagkukumpitensya ang tatlong katangiang ito, na pumipigil sa isang blockchain na i-optimize ang lahat ng tatlo nang sabay.

- [ ] seguridad, bilis, at mababang fees

> ℹ️ Subukan ulit! Kaugnay ng scalability ang bilis at fees, na isa lang sa tatlong katangian: seguridad, scalability, at desentralisasyon.

# Seguridad at Consensus

Ang seguridad ang pinakapundamental na requirement para sa isang public blockchain. Kailangang magkasundo ang mga computer sa loob ng isang network (gaya ng blockchain network) kung ano ang tunay na nangyaring transaksyon para magtulungan; ang pagkakasunduang ito ay tinatawag na `consensus`. Secure ang isang blockchain kung hindi kayang guluhin ng mga attacker ang pagkakasundo ng network sa katotohanang iyon. Idinisenyo ang mga consensus algorithm para labanan ang mga pag-atakeng ito.

Ang mga chain gaya ng Bitcoin na gumagamit ng `Proof-of-Work` consensus ay pinoprotektahan ang kasunduang ito sa pamamagitan ng paggawang lubhang competitive sa pagprodyus ng block; nakikipagkarera ang bawat block producer para lutasin ang isang math problem. Ang unang makakalutas ay nagwawagi ng karapatang gumawa ng susunod na block at tumatanggap ng monetary na `block reward` na kasama nito. Ang muling pagsulat ng kasaysayan ng chain ay mangangailangan ng napakalaking puhunan sa computing power at enerhiya, kaya mas malamang na mas malaki ang magagastos ng attacker kaysa sa makukuha nito.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Ang blockchain consensus para sa mga cryptocurrency ay:

- [ ] Ang proseso kung saan nagkakasundo ang mga node sa nangyari onchain

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Importante sa buong ecosystem para maiwasan ang pandaraya

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Sinisiguro sa pamamagitan ng economic incentive

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Ang consensus ang paraan ng pagkakasundo ng mga node sa katotohanan, at ginagawang mas mataas ang gastos ng pag-atake kaysa sa makukuha rito ng economic incentive.

# Seguridad at Mga Pag-atake

Isang posibleng anyo ng pag-atake sa blockchain consensus ay ang `51% attack`; puwedeng i-reverse ng isang attacker na kontrolado ang mayorya ng consensus power ng network ang mga bagong transaksyon para gastusin nang dalawang beses ang parehong coin, o i-censor ang mga bago. Hindi nila kayang i-fake ang mga lagda o gastusin ang pondo ng iba. Ang mayorya na ito ay nangangahulugang 51% ng computing power sa Proof-of-Work consensus at 51% ng `stake` sa Proof-of-Stake consensus, isang napakalaking puhunan. At sa Proof-of-Stake, sinisira ang stake kapag napatunayang nandaya, gaya ng paglagda sa dalawang magkasalungat na block (tinatawag na `slashing`); mas malamang na mas malaki ang mawawala sa attacker kaysa sa makukuha nito.

Sa `Proof-of-Stake` consensus, hindi sa kumpetisyon pinipili ang block producer kundi random na itinatalaga. Gaya sa Proof-of-Work, sinisiguro ng consensus algorithm na walang iisang entity ang regular na "mananalo" ng karapatang gumawa ng bagong `block`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Ang end-goal ng isang 51% attack ay:

- [ ] Guluhin ang mga mining operation

> ℹ️ Subukan ulit! Target ng pag-atake ang consensus mismo: pag-reverse o pag-censor ng transaksyon, hindi ang pagligalig sa mga miner.

- [x] Doble-gastusin ang mga coin o i-censor ang mga transaksyon

> ℹ️ Tama! Kayang i-reverse ng mayorya ng consensus power ang mga bagong transaksyon para gastusin ang coin nang dalawang beses, o harangan ang mga bago.

- [ ] Gumawa ng bagong cryptocurrency

> ℹ️ Subukan ulit! Kahit sino ay puwedeng gumawa ng bagong cryptocurrency nang hindi umaatake sa existing network.

- [ ] Alisin ang natitirang 49%

> ℹ️ Subukan ulit! Hindi inaalis ang ibang participant. Ginagamit ang mayoryang kapangyarihan para i-reverse o i-censor ang mga transaksyon.

# Scalability - Throughput

Ang `scalability` ay tumutukoy sa kakayahan ng isang blockchain na iproseso ang maraming transaksyon nang mabilis. Dalawang bagay ang nagtatakda ng scalability ng isang blockchain: throughput at finality.

1) `Transaction throughput`: Ilang transaksyon ang kayang iproseso ng isang blockchain nang sabay-sabay, karaniwang sinusukat sa transaksyon bawat segundo (`TPS`).

Isipin ang maraming taong naghihintay sa isang bus stop, may dumarating pa habang tumatagal, at gusto nilang lahat maglakbay. Pero limitado lang ang bilang ng taong kayang isakay ng bus. Para mabilis na maubos ang mga tao sa bus stop, kailangan mong gumamit ng mas malalaking bus (mas maraming tao) o mas madalasin ang biyahe ng bus (mas kaunting oras). Pareho ang mekanismo sa pagsubok na ipasok ang maraming transaksyon sa maliit na `block space` na available sa bawat block. Makikita mo ang visualization na ito gamit ang live data sa [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Alin sa mga sumusunod ang totoo para sa bus stop analogy ng blockchain transactions?

- [ ] Pinagsasama-sama ang mga tao (transaksyon) sa mga bus (block)

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Limitado ang bilang ng tao (transaksyon) na kasya sa bawat bus (block)

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Kailangan ng mas malaki o mas maraming bus (block) para sa mas maraming tao

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Pinupuno ng transaksyon ang limitadong block space, gaya ng pasahero sa bus. Kailangan ng mas malaki o mas madalas na block para mas mabilis maubos ang pila.

# Scalability - Finality

Ang pangalawang aspeto ng scalability ng blockchain ay:

2) `Finality`: Kailan tayo makakasiguro na hindi na babaguhin o irereverse ang isang transaksyon?

Sa mga Proof-of-Work chain gaya ng Bitcoin, sinusukat ang finality sa bilang ng block: mas maraming block ang naidagdag sa chain pagkatapos ng transaksyon mo, mas malaki ang siguradong hindi na ito mababawi. Tandaan, ginagawang napakamahal ng secure na consensus algorithm ang pagbabago ng lumang block, at lumalaki ang gastos habang mas malayo pa ang sinusubukang baguhin. Gumagawa ang Bitcoin ng bagong `block` bawat 10 minuto, kaya aabutin ng humigit-kumulang isang oras ang paghihintay ng ilang confirmation. Iba ang route na kinuha ng Proof-of-Stake ng Ethereum: bumoboto ang mga `validator` para i-finalize ang mga block, at pagkalipas ng humigit-kumulang 13 minuto (dalawang `epoch` ng boto), final na ang isang transaksyon.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Ipinapamahagi ng Desentralisasyon ang Kapangyarihan

Ang `desentralisasyon` ang huling batayan ng blockchain trilemma: paglipat ng kontrol at desisyon mula sa iisang entity papunta sa distributed network ng marami. Ito ang nagbibigay-daan sa mga blockchain na maging `permissionless` at `censorship-resistant`; kahit sino ay puwedeng gumamit at bumuo ng software gamit ang mga ito.

Puwedeng i-deactivate anumang oras ng mga centralized platform gaya ng Facebook at Twitter ang account ng kahit sino, at maraming influential na streamer sa Twitch o TikTok ang natanggal nang walang dahilan. Kung walang desentralisasyon, ang blockchain `ledger` ay isa lang financial spreadsheet sa computer ng bangko; ang mga bangkero ang nagpapasya kung sino ang makakapagbukas ng account. Sa `permissionless` na network, desentralisado na ang awtoridad kaya walang paraan para tanggalin ang access ng sinuman.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Alin sa mga pahayag na ito ang HINDI totoo para sa desentralisasyon?

- [ ] Ginagawang censorship-resistant ng desentralisasyon ang mga blockchain

> ℹ️ Subukan ulit! Totoo ang pahayag na ito: kung walang iisang kumokontrol na entity, walang makapagsa-censor sa network.

- [ ] Ginagawang permissionless ng desentralisasyon ang mga blockchain

> ℹ️ Subukan ulit! Totoo ang pahayag na ito: ang desentralisadong awtoridad ay nangangahulugang walang makakatanggal ng access ng isang tao.

- [x] Tumutulong ang desentralisasyon sa mga awtoritaryan na manatili sa kontrol

> ℹ️ Tama! HINDI ito totoo: ang desentralisasyon ay ginagawa ang kabaligtaran sa pamamagitan ng paglayo ng kontrol mula sa anumang iisang entity.

- [ ] Kahit sino, kahit saan, ay puwedeng gumamit ng permissionless system

> ℹ️ Subukan ulit! Totoo ang pahayag na ito: ang permissionless ay nangangahulugang walang matatanggihan ng access.

# Desentralisado Ba Ito?

Pero ang pagiging desentralisado ng isang bagay ay hindi lang oo-o-hindi na sagot. Desentralisado ba ang 10 kumokontrol na entity? Paano ang 1000? Isang milyon? Walang standard na cutoff para masabing sapat na ang desentralisasyon ng isang bagay, kaya makatuwirang isipin ang desentralisasyon bilang isang spectrum. Sa halip na itim o puti lang ang pagpipilian, may maraming kulay-abo rin sa pagitan.

Kaya puwede nating sabihing "mas desentralisado o hindi kumpara sa iba" imbes na "sentralisado o desentralisado." Kailangan ng mataas na antas ng desentralisasyon para lumaban sa censorship ng state ang isang neutral na monetary system. Kadalasang ipinapalit ng mas bagong mga blockchain ang desentralisasyon para sa scalability, pero naiiwan silang vulnerable sa parehong presyon mula sa lipunan at gobyerno na nararamdaman din ng mga ganap na sentralisadong platform. Puwede silang matapos na gumawa ng parehong censorship na nakikita sa mga sentralisadong social media network.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Iba-iba ang antas ng desentralisasyon na ginagamit ng iba't ibang blockchain.

- [x] Totoo

> ℹ️ Tama! Spectrum ang desentralisasyon: pinipili ng bawat blockchain kung magkano ang ipapalit nito para sa scalability o iba pang layunin.

- [ ] Hindi totoo

> ℹ️ Subukan ulit! Spectrum ang desentralisasyon, at bawat blockchain ay gumagawa ng sariling tradeoff dito.

# Ilang Halimbawa

May sariling approach ang bawat blockchain sa trilemma, at bawat isa ay gumawa ng tradeoff para makapokus sa kanilang layunin. Inuuna ng Bitcoin at Ethereum ang seguridad at desentralisasyon kaysa sa scalability, na nagresulta sa mahabang `finality time` para sa Bitcoin at limitadong `block space` sa Ethereum. Kapag tumaas ang demand para gumamit ng `smart contract`, lalo na para sa DeFi, tumataas ang fees ng Ethereum; noong 2021 sa peak demand, puwedeng magkahalaga ng sampu-sampung dolyar ang iisang transaksyon.

Nagbigay ng pagkakataon ang tumataas na fees para sa mga `alternative Layer 1` gaya ng BNB Chain, na inuuna ang scalability kaysa sa desentralisasyon para sa mas mataas na `transaction throughput` at mas murang fees. Gumagamit ang mga third-generation na chain gaya ng Solana ng mga bagong paraan para lutasin ang trilemma, pero lahat ng blockchain ay sakop pa rin ng mga pangunahing limitasyong ito. Tinutukoy ng pinili ng bawat chain ang kanilang ecosystem sa pamamagitan ng pundamental na epekto na nagmumula sa piniling iyon.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Kaya Ano ang Puwedeng Gawin?

Kaya kung inuuna ng Ethereum ang mataas na seguridad at desentralisasyon, paano ito makaka-scale para paglingkuran ang pangangailangan ng lahat ng user bilang ang global financial network na gusto nitong maging? Tinalakay ng Ethereum roadmap ang dalawang sagot: ang `Layer 2` at ang blockchain `sharding`.

Dinadagdagan ng `Layer 2` ang scalability ng Ethereum nang hindi kinokompromiso ang dalawa pang bahagi ng blockchain trilemma. Isa itong karagdagang layer na nasa ibabaw ng pangunahing blockchain, umaasa sa main chain para sa seguridad pero pinapayagan ang mga user na makinabang sa mas mababang fees at mas mabilis na transaksyon. Tatalakayin natin ito nang mas detalyado sa Layer 2 lesson natin.

Hahatiin sana ng `sharding` ang blockchain sa maraming parallel na chain, gaya ng pagdagdag ng mas maraming lane sa isang kalsada. Itinabi ng Ethereum ang planong iyon para sa mas simpleng paraan: pagpapamura sa block data para gamitin ng mga Layer 2 (naidagdag noong 2024) at unti-unting pagtaas ng kapasidad, nang hindi isinasakripisyo ang seguridad o desentralisasyon.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Ang mga Layer 2:

- [ ] Nagbibigay ng sarili nilang seguridad

> ℹ️ Subukan ulit! Umaasa ang mga Layer 2 sa pangunahing blockchain para sa kanilang seguridad.

- [x] Nagpapataas ng scalability para sa pangunahing blockchain

> ℹ️ Tama! Nasa ibabaw ng main chain ang mga Layer 2, nagdaragdag ng scalability nang hindi kinokompromiso ang seguridad o desentralisasyon.

- [ ] Nagpapataas ng fees para sa mga user

> ℹ️ Subukan ulit! Kabaligtaran ang ginagawa ng mga Layer 2: nakikinabang ang mga user sa mas mababang fees.

- [ ] Nagpapataas ng finality time para sa mga user

> ℹ️ Subukan ulit! Nag-aalok ang mga Layer 2 ng mas mabilis na transaksyon, hindi mas mabagal.

# Ang Kinabukasan ng Ethereum

Patuloy na umuunlad ang Ethereum network sa scalability nito nang hindi isinasakripisyo ang ibang aspeto ng trilemma. Ang The Merge tungo sa `Proof-of-Stake` consensus (2022) ay nagbawas ng energy use nang mahigit 99%, at dumating ang murang block data para sa mga Layer 2 noong 2024. **Patuloy na trabaho ang scaling: pinapabilis at pinapamura ng bawat upgrade ang Ethereum habang nananatiling pangunahing prinsipyo ang seguridad at desentralisasyon.** May magandang webpage ang Ethereum Foundation tungkol sa [Ethereum roadmap](https://ethereum.org/roadmap/).

Marami ring `Layer 2` protocol ang bumubuo sa ibabaw ng Ethereum para tumulong matugunan ang demand nang hindi nangangailangan ng update sa Ethereum protocol mismo. Umaasa sila sa Layer 1 Ethereum para sa desentralisadong seguridad habang nagbibigay ng scalability; ang pagkakaiba-iba ng mga Layer 2 ang gumagawa ng desentralisadong ecosystem! Kasama sa mga nangungunang `rollup` ang Arbitrum, OP Mainnet, at Base; ang Polygon PoS ay isang popular na `sidechain` na may sarili at hiwalay na seguridad.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Kasama sa mga upgrade ng Ethereum ang:

- [ ] Paggamit ng Layer 2 at mas murang block data para taasan ang scalability

> ℹ️ Subukan ulit! Bahagi ito ng mga upgrade, pero hindi lang ito ang tanging isa.

- [ ] Pagpapanatili ng desentralisasyon at seguridad bilang prinsipyo

> ℹ️ Subukan ulit! Bahagi ito ng mga upgrade, pero hindi lang ito ang tanging isa.

- [ ] Pagbawas ng paggamit ng enerhiya gamit ang Proof-of-Stake consensus

> ℹ️ Subukan ulit! Bahagi ito ng mga upgrade, pero hindi lang ito ang tanging isa.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Nagdagdag ng scale ang Layer 2 at mas murang block data, binawasan ng Proof-of-Stake ang energy use, at nanatili ang seguridad at desentralisasyon.

# Ano ang Ibig Sabihin Nito Para sa mga Explorer?

Kailangan ng mababang fees ng mga user para matuto at ma-explore ang teknolohiyang ito nang may mababang hadlang sa pagsisimula at mababang gastos sa mga pagkakamali, lalo na sa simula ng kanilang paglalakbay. Hindi pa perpekto ang Ethereum blockchain, pero ginagawa itong isa sa pinakamagandang kandidato ng mga values nito para sa pagtupad ng pangarap na isang global financial computing system. Puwedeng matutong makipag-ugnayan at gamitin ang Ethereum ng mga Explorer nang hindi nagbabayad ng malaking fees; ang paggamit ng Layer 2 ay nagbibigay-daan sa mga Explorer na magkaroon ng benepisyo ng seguridad at desentralisasyon ng Ethereum kasama ang mas mataas na scalability.

Ipapaliwanag ng susunod na aralin ang mga solusyon ng `Layer 2` at kung paano magsisimula. Patuloy na maglakbay, mga Explorer!
