---
TITLE: Mga Layer 2 Blockchain
DESCRIPTION: Sumali sa Layer 2 ecosystem para mapabilis ang mga transaksyon mo at mapababa ang fees.
LANGUAGE: Filipino
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

# Panimula

Ang gustong estado ng operasyon ng anumang blockchain ay maging maka-desentralisado, secure, at scalable hangga't maaari. Napatunayang mahirap gawin ang blockchain na mahusay sa lahat ng tatlong aspeto. Binigyan ng pangalan ang hamong ito: ang `Blockchain Trilemma`.

Desentralisado at secure ang Bitcoin at Ethereum, pero hindi sila magaling mag-scale, gaya ng makikita sa mataas na fees at mahabang pila ng transaksyon kapag busy ang network. Para maiwasan ito, puwedeng gumamit ang mga Explorer ng teknolohiyang malaki ang ibinababa sa gastos at pinapabilis ang transaksyon. Tinatawag ang mga ito na Layer 2 (L2) scaling solutions.

Ang `Lightning Network` ang pinakakilalang scaling solution ng Bitcoin, umaasa ito sa `payment channel` para mag-scale ng mga bayad sa pagitan ng mga partido. Pinapagaan ng Ethereum ang Trilemma sa pamamagitan ng iba't ibang L2 solution, suportado ng murang, pansamantalang `blob` storage na naidagdag sa Mainnet noong 2024 (light na bersyon ng "sharding" na dating pinlano).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Mga Payment Channel

Sa Bitcoin blockchain, umaasa ang Lightning Network sa bidirectional na `payment channel`, na nagbibigay-daan sa maraming partido na mag-exchange ng BTC nang hindi nagtatransact sa main chain.

Ang architecture nito ay nagbibigay-daan sa dalawang user na magbukas ng payment channel sa pagitan nila. Strictly two-party ang bawat channel, kahit puwedeng i-route ang mga bayad sa isang network ng magkakakonektang channel para maabot ang mas malalayong user. Sa pagitan ng pagbukas at pagsara ng channel, puwedeng ilipat-lipat ng mga partido ang pondo sa isa't isa. Na-a-update ang micro-ledger entry ng bawat participant pagkatapos maglagda ang dalawang user para sa transaksyon, na kadalasang nangangailangang naa-reach ang mga node ng dalawang partido.
Puwedeng isara ang isang channel anumang oras kapag ni-broadcast ng alinman sa dalawang partido ang pinakahuling bersyon ng micro-ledger sa blockchain.

Hindi sinusuportahan ng mga payment channel ang advanced na `smart contract` interaction, basic peer-to-peer transaction lang.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Kailangan mong naka-online para makapag-transact gamit ang Bitcoin Lightning Network.

- [x] Totoo

> ℹ️ Tama! Ang pag-update ng payment channel ay nangangailangan ng lagda mula sa dalawang user, na kadalasang nangangahulugang kailangang naa-reach ang mga node nila.

- [ ] Hindi totoo

> ℹ️ Subukan ulit! Kailangan ng lagda ng dalawang partido ang pag-update ng channel, kaya kadalasang kailangang naka-online ang kanilang mga node.

# Mga Solusyon sa Scaling ng Ethereum

Halos kasing tagal ng network na iyon nang live, nagtatrabaho na ang mga developer ng Ethereum sa mga Ethereum-native na scaling solution.

Karamihan sa mga miyembro ng Ethereum community ay nagsasabing para maging "Ethereum scaling solution", dapat tugunan ng isang proyekto ang mga kakulangan ng `scalability` ng Ethereum nang hindi isinasakripisyo ang `seguridad` o `desentralisasyon`. Para sa mga user, ang pinaka-praktikal na pangangailangan ay mas mabilis na transaksyon at mas murang `gas` kaysa sa Ethereum Mainnet. Para makipagkumpitensya, handang gumawa ang ilang scaling solution ng mas malaking tradeoff sa Trilemma kaysa sa iba.

Kilala ang Ethereum sa kakayahan nitong mag-smart contract, kaya importante ring manahin ng mga scaling solution nito ang suportang ito. Walang saysay ang mabilis at murang transaksyon kung hindi maa-access ng mga user ang paborito nilang `dApp` mula sa isang Layer 2.

# Knowledge Check 2

Ang mga Ethereum scaling solution ay:

- [ ] gumagamit ng payment channel para mag-scale ng network.

> ℹ️ Subukan ulit! Payment channel ang approach ng Lightning Network ng Bitcoin. Nag-sscale ang Ethereum sa pamamagitan ng mga solusyon gaya ng Rollup.

- [ ] hindi kayang suportahan ang smart contract interaction.

> ℹ️ Subukan ulit! Mahalaga ang suporta sa smart contract. Kailangan ng user na maa-access ang paborito nilang dApp mula sa isang Layer 2.

- [x] dapat pataasin ang scalability nang hindi pinapahina ang trilemma.

> ℹ️ Tama! Tinutugunan ng tunay na Ethereum scaling solution ang scalability nang hindi isinasakripisyo ang seguridad o desentralisasyon.

- [ ] pinapayagan ang mas mabilis na transaksyon sa gastos ng mas mataas na gas.

> ℹ️ Subukan ulit! Layunin ng mga scaling solution ang mas mabilis na transaksyon AT mas murang gas kaysa sa Ethereum Mainnet.

# Pag-bridge ng Layer 1 at Layer 2

Gaya ng natutunan natin sa [Blockchain Basics](https://app.banklessacademy.com/lessons/blockchain-basics), ang mga blockchain ay database na tinatawag na `ledger`, na nagtatala ng cryptographically secured at chronological na listahan ng mga transaksyon. Ang mga L1 blockchain at L2 scaling solution ay parehong blockchain sa sarili nilang karapatan, na may sarili nilang database ng mga address at data.

Ginagamit ang infrastructure na tinatawag na `bridge` para maglipat ng impormasyon sa pagitan ng iba't ibang blockchain database. Halimbawa, kung iisipin mo ang Ethereum Mainnet (o anumang `L1` blockchain) bilang isang isla, at ang ibang blockchain o paborito mong scaling solution bilang isa pang isla, ang crypto bridge ang generic na termino para sa networked highway na kumokonekta sa dalawang digital na islang ito.

Napakacomplex ng teknolohiya, pero mula sa perspektibo ng end user, kasingsimple lang ito ng pagpili ng destinasyon.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Mga Sidechain

Ang `sidechain` ay hiwalay na blockchain na tumatakbo nang independent sa Ethereum, pero konektado sa Mainnet sa pamamagitan ng `bridge`. Para mag-migrate ng token, iniiwan mo ito sa bridge contract sa Mainnet, at may katumbas na mi-mint sa sidechain. Mahalaga: HINDI nito ibinibigay ang seguridad ng Ethereum sa pondo mo, umaasa lang ito sa sariling validators ng sidechain. Kung na-compromise ito (gaya ng $625M na Ronin bridge hack noong 2022), puwedeng manakaw ang nakatagong pondo.

Sakop pa rin ng Trilemma ang mga sidechain: mas mababang `gas` fees at mas mabilis na transaksyon galing sa mas maliit pero mas makapangyarihang validator set, na nagpapalit ng desentralisasyon at seguridad para sa scalability.

Regular na naglalathala ang mga sidechain gaya ng Polygon PoS ng mga snapshot ("checkpoints") sa Ethereum, nagbibigay ng anyo ng finality at pinapayagan ang mga user na patunayan ang balance kapag lumalabas sa bridge, pero hindi kasingsecure ng Mainnet ang pondo nila.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Ang mga sidechain:

- [ ] nagla-lock ng mga bridged token sa isang contract sa Mainnet.

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] mas mura ang gas fees kaysa sa Mainnet.

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] mas malaki ang panganib sa centralization kaysa sa Mainnet.

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [x] Lahat ng nasa itaas.

> ℹ️ Tama! Nagla-lock ang mga sidechain ng bridged token sa Mainnet at mas mura ang fees, pero mas maliit na validator set ang nagpapalit ng desentralisasyon para dito.

# Mga Rollup

Ang mga Layer 2 protocol na gumagamit ng Rollup technology ay mas malapit sa antas ng seguridad ng Ethereum Mainnet.

Gaya ng mga sidechain, pinapayagan ng mga `rollup` na mag-execute ang onchain transaction sa labas ng Ethereum Mainnet. Pinagsasama-sama ("rolled up") ang mga ito sa isang batch, at ipinapadala ang batch data sa Ethereum sa murang, pansamantalang data packet na tinatawag na `blob`, ipinakilala sa Dencun upgrade noong Marso 2024. Ang mga blob ang pangunahing dahilan kung bakit bumaba ang tipikal na L2 fees sa ilang sentimo o mas mababa pa.

Para patunayang secure ang rollup na iproseso ang transaksyon sa ngalan ng Mainnet, kailangan itong magbigay ng "convincing evidence" na secure at valid ang mga transaksyon sa bawat batch. Kasama ang ebidensyang ito sa transaction rollup at ve-verify ng bridge contract sa Ethereum Mainnet.

May dalawang paraan para magbigay ng ebidensyang ito: `optimistic rollup` at `zk rollup`. Tingnan natin nang mas malapitan.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Mga Optimistic Rollup

Ang mga L2 protocol gaya ng Optimism, Base, at Arbitrum ay gumagamit ng `optimistic rollup` bilang scaling architecture nila. Tinatawag itong optimistic dahil itinuturing na valid ang impormasyon sa batch maliban kung mapatunayang hindi.

Para mabawasan ang abuso sa teknik na ito, karaniwang may multi-day delay kapag humiling ang user na ilipat ang pondo mula sa L2 pabalik sa Mainnet. Sa panahong ito, puwedeng maglathala ang mga bridge validator ng `fraud proof` para kanselahin ang withdrawal, katulad ng clearance process ng banking industry pero desentralisado.

Tandaan: Tumutulong ang mga third-party bridging service gaya ng Across at Relay na mag-bridge ng pondo sa loob lang ng ilang minuto sa halip na araw. Ino-front ng mga mabilis na bridge na ito ang pera mula sa sarili nilang pool, kaya kinukuha mo ang risk ng smart contract ng bridge at ng nagbibigay ng pondo, dagdag na layer ng tiwala kumpara sa sariling bridge ng rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Sa mga Optimistic Rollup, itinuturing na valid ang mga transaksyon hanggang mapatunayang hindi.

- [x] Totoo

> ℹ️ Tama! Ang optimistic na palagay ay valid ang mga batch, na may challenge period kung saan puwedeng kanselahin ng fraud proof ang masamang withdrawal.

- [ ] Hindi totoo

> ℹ️ Subukan ulit! Ang optimistic na palagay na iyon mismo ang pinagmulan ng pangalan ng mga rollup na ito.

# Mga ZK Rollup

Ang `zk rollup` ay uri ng rollup na umaasa sa Zero-Knowledge technology. Hindi tulad ng `optimistic rollup`, kinukumpirma nito ang legitimacy ng mga naka-batch na transaksyon nang hindi umaasa sa user na maghanap ng ebidensya ng pandaraya. Sa halip, nagsusumite ito ng mathematical proof, tinatawag na `validity proof`, na nagbibigay-daan sa Ethereum na i-check ang buong batch nang hindi na ginagawa ulit ang trabaho.

Ang pinakamalaking benepisyo nito ay ang `settlement time`, kilala rin bilang `transaction finality`. Sa halip na multi-day na challenge period, maa-access ng user ang pondo nila sa Mainnet sa loob lang ng ilang oras, sa sandaling maisumite ang susunod na validity proof. Sa kabila ng pangalan, hindi ito ginagamit para sa privacy: kasingpublic pa rin ng Mainnet ang mga transaksyon sa mga major zk rollup.

May ilang major protocol na gumagamit ng zk rollup technology, kasama ang ZKsync, Starknet, at Linea. Maaga pa ito sa development, pero may magandang potensyal sa hinaharap.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Kumpara sa Optimistic Rollup, ang mga ZK Rollup:

- [ ] pinapanatiling private ang transaksyon ng user sa Mainnet.

> ℹ️ Sa kabila ng pangalang "Zero-Knowledge," kasingtransparent pa rin ng Ethereum Mainnet ang mga major zk rollup: para sa validity ang mga proof, hindi privacy.

- [x] gumagamit ng validity proof, iniiwasan ang multi-day challenge period.

> ℹ️ Tama! Kinukumpirma ng isang mathematical validity proof ang bawat batch, kaya hindi na kailangang maghintay ng fraud-proof window para sa finality sa Mainnet.

- [ ] umaasa sa mga watcher na magsumite ng fraud proof sa challenge window.

> ℹ️ Ganito gumagana ang Optimistic Rollup. Pinapatunayan agad ng ZK Rollup ang validity sa halip.

# Compatibility ng mga dApp Sa Iba't Ibang Chain

Kapag kinukumpara ang `optimistic rollup` at `zk rollup`, ang pangunahing pokus ng karamihan ng user ay ang withdrawal time. Pero dahil malulutas ang mga isyung ito sa pagkaantala ng withdrawal sa pamamagitan ng mga third-party bridge, hindi ito dapat maging malaking konsiderasyon kapag pinipili kung aling scaling solution ang eeksplorahin.

Maraming Optimistic Rollup ang "EVM equivalent," ibig sabihin, native na sinusuportahan ng L2 ang anumang dApp na tumatakbo sa `Ethereum Virtual Machine` (EVM). Pinapayagan ng EVM equivalence ang deployment ng anumang smart contract na na-deploy na dati sa Mainnet, kaya naa-access ng mga L2 user ang mga paborito nilang dApp.

Native ring pinapatakbo ng mga sidechain gaya ng Polygon PoS ang EVM, at karamihan sa mga modernong zk rollup (gaya ng ZKsync, Linea, at Scroll) ay EVM equivalent din o malapit na dito. Dahil dito, available ang mga paborito mong Ethereum dApp sa karamihan ng L2 ecosystem.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Madaling nagagamit muli ng mga EVM equivalent na scaling solution ang mga smart contract na na-deploy sa Mainnet.

- [x] Totoo

> ℹ️ Tama! Ibig sabihin ng EVM equivalence, anumang smart contract na tumatakbo sa Mainnet ay puwedeng i-deploy sa L2, kasama ang mga pamilyar na dApp.

- [ ] Hindi totoo

> ℹ️ Subukan ulit! Ang muling paggamit ng mga smart contract sa Mainnet mismo ang buong punto ng EVM equivalence.

# Buod ng Aralin

Limitado ngayon ang mga L1 blockchain gaya ng Bitcoin at Ethereum ng `Blockchain Trilemma`. Tumutulong ang mga `payment channel` sa Bitcoin, o sidechain at rollup sa Ethereum, para mag-scale ang mga network na ito at gawing magaan ang Trilemma. Kumokonekta ang mga `bridge` sa mga L1 blockchain sa mga `sidechain` at `rollup`, at ang paggana ng bridge contract ang nakaka-impluwensya sa katangian ng nakakonektang network.

Hindi minamana ng pondo sa sidechain ang `seguridad` ng Ethereum: naka-lock ang bridged token sa contract sa Mainnet, pero nakadepende ang kaligtasan nila sa sariling validators at bridge contract ng sidechain. May maliit pero makapangyarihang validator set ang mga chain na ito, kaya mas mabilis ang transaksyon at mas mababa ang gas fees sa gastos ng desentralisasyon at seguridad.

Ang mga rollup, gaya ng mga sidechain, ay nagpoproseso rin ng sarili nilang transaksyon, pero hinihiling ng bridge contract nila ng "convincing evidence" ng validity bago ituring na valid ang data, kaya napapanatili ang antas ng `seguridad` at `desentralisasyon` na naaayon sa values ng Ethereum. May dalawang paraan para dito: nagpapanatili ang mga `optimistic rollup` ng multi-day delay bago mag-settle sa Mainnet, kung saan nade-detect at inirereport ng mga bridge validator ang pandaraya; nagbibigay naman ang mga `zk rollup` ng mathematical assurance salamat sa `zero-knowledge` technology.

Ngayon, nag-aalok ang parehong optimistic rollup at modernong zk rollup ng mataas na smart contract compatibility sa Mainnet, kaya madaling ma-deploy ang mga dApp sa network nila. Maraming naniniwalang magiging scaling solution ng hinaharap ang mga zk rollup, salamat sa mabilis na finality at malakas na validity guarantee.

# Simulan ang Iyong Paglalakbay sa Layer 2 Gamit ang Optimism o Base 🙂

Ang Optimism at Base, parehong EVM-equivalent na Optimistic Rollup, ay magandang simulan ng mga Explorer sa L2. Kasingdali ng L1 ang paggamit ng dApp sa alinman sa dalawang chain, mas mura at mas mabilis lang, at parehong gumagamit ng ETH bilang gas. Ang unang hakbang ng paglalakbay mo sa Optimism o Base ang susunod mong quest!

Malalim na naiimpluwensyahan ang parehong ecosystem ng values ng Ethereum, kilala ang Optimism sa [pagpondo ng public good](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) na nagdaragdag ng halaga sa ecosystem, gaya ng libreng edukasyon mula sa Bankless Academy.

Hindi lang platform na umaasa sa Optimistic Rollup ang Optimism at Base: ipinapakita nila kung paano malulutas ng mga blockchain ang tunay na problema at magbukas ng mga bagong paraan ng pagtransact at pagtutulungan. At dapat tayong maging optimistic dahil dito. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
