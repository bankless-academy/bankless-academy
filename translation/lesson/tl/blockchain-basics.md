---
TITLE: Basics ng Blockchain
DESCRIPTION: Alamin ang pundamental na arkitektura ng blockchain technology.
LANGUAGE: Filipino
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/blockchain-basics
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

Ang `blockchain` technology ay isang makabagong paraan ng pag-iimbak at pagsubaybay ng data, habang ginagawa rin itong accessible sa lahat. Ito ay isang paraan ng pag-oorganisa ng data sa isang pampublikong listahan ng lahat ng nangyaring transaksyon na kahit sino ay puwedeng tingnan pero walang makakapag-edit. Ang pampublikong listahan ng mga transaksyon na ito ay tinatawag na blockchain `ledger`.

Pagkatapos suriin ang mga layer ng isang blockchain, mauunawaan mo ang istruktura na ipinapakita ng isang blockchain tool na tinatawag na `block explorer`: ang **listahan** ng mga block, ang mga **transaksyon** sa loob ng mga block na iyon, at ang **detalye** ng bawat indibidwal na transaksyon. Para makita ito sa aksyon, subukan ang [Etherscan](https://etherscan.io/), isang popular na block explorer para sa Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Istruktura ng Blockchain

Ang terminong blockchain ay puwedeng gamitin bilang noun (ang Bitcoin blockchain) o bilang adjective (blockchain technology). Sa alinmang paraan, tumutukoy ang `blockchain` sa buong istruktura na pinagbabatayan ng mga cryptocurrency.

Kung titingnan mula sa labas, may 3 antas ng istruktura sa isang blockchain:

1. Ang kabuuang `blockchain` ay binubuo ng mga block na magkakadugtong nang sunud-sunod
2. Ang mga `block` ay binubuo ng mga grupo ng transaksyon na pinagsama-sama
3. Ang mga `transaksyon` ay paglipat ng halaga, o instruksyon sa mga program, sa pagitan ng mga `address` sa network

Ang three-tiered na istrukturang ito ay bumubuo ng isang cryptographic ledger, isang hindi mababagong kasaysayan ng lahat ng transaksyong ginawa sa network.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Ano ang blockchain?

- [ ] Mga organisadong grupo ng transaksyon na tinatawag na block

> ℹ️ Subukan ulit! Bahagi ito ng istruktura, pero hindi lang ito ang tamang sagot.

- [ ] Record na kahit sino ay puwedeng tingnan pero walang makaka-edit

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Mga block na magkakadugtong nang sunud-sunod

> ℹ️ Subukan ulit! Inilalarawan nito ang chain ng mga block, pero hindi lang ito ang tamang sagot.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Totoo ang tatlo: ang blockchain ay isang shared at hindi mababagong record ng mga transaksyong naka-grupo sa mga block, na magkakadugtong.

# Pagsusuri sa Ledger

Sa karaniwang sistema ng pera, nagtitiwala tayo sa mga third party gaya ng bangko para subaybayan kung magkano ang pera ng bawat tao. Pero para maging tunay na Bankless, gusto natin ng sistema na hindi nangangailangan ng tiwala sa isang entity para pangasiwaan ang ledger.

Ang `ledger` ay ang listahan ng LAHAT ng transaksyong nagawa na sa isang blockchain, at makikita ito ng kahit sino para sa mga `pampubliko` na blockchain. Ang magkahiwalay na grupo ng mga transaksyon mula sa ledger ang bumubuo sa mga block na sama-samang gumagawa ng blockchain.

Kapag may bagong transaksyong idinagdag sa ledger, na-a-update ang balance na naka-imbak sa bawat `address`; hindi na mababago ang mga nakaraang transaksyon. Parang pinapayagan ang kahit sino na tingnan ang buong kasaysayan ng transaksyon ng bank account ng lahat, anumang oras.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Mga Transaksyon sa Ledger

Tingnan natin ang ilang halimbawang transaksyon:

- Nagpadala si Alice ng 5 ETH kay Bob
- Nagpadala si Bob ng 2 ETH kay Charlie

Ipinapakita ng bawat transaksyon ang _pagbabago_ sa halaga ng cryptocurrency ng bawat address, kaya ang kabuuang resulta ng lahat ng transaksyon ANG halaga ng cryptocurrency ng bawat address.

---

⇒ Nawalan si Alice ng 5 ETH

⇒ Nadagdagan si Bob ng 3 ETH sa kabuuan (natanggap 5, nagpadala ng 2)

⇒ Nadagdagan si Charlie ng 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Alin sa mga sumusunod ang totoo para sa mga public blockchain ledger?

- [ ] Pampubliko ang lahat ng transaksyon at hindi na mababago ang mga nakaraan

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Sinusubaybayan ng ledger ang balanse ng bawat address ngayon

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Lumalaki ang ledger habang may naidadagdag na bagong transaksyon

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Pampubliko ang ledger, hindi na mababago, laging updated ang balance ng address, at lumalaki sa bawat bagong transaksyon.

# Desentralisasyon

Hindi lang hindi na mababago ang mga transaksyong nasa `blockchain` ledger, shared at distributed din ito sa isang malaking network ng mga computer. Para masiguradong walang iisang entity ang may kapangyarihang baguhin ang data, ang mga kopya ng blockchain ledger ay naka-imbak sa maraming computer, tinatawag na mga `node`, sa buong network.

Ang shared data na ito ang dahilan kung bakit `desentralisado` ang blockchain ledger. Walang iisang awtoridad o entity ang kumokontrol sa data. Ang mga blockchain gaya ng Ethereum ay `pampubliko` din dahil kahit sino ay puwedeng tumingin sa ledger.

Para sa araling ito, tandaan lang na ang data ng ledger ay shared sa maraming computer na nagpapatakbo ng Ethereum network.

# Knowledge Check 3

Ano ang nagpapa-desentralisado sa isang blockchain?

- [ ] Iisang entity lang ang puwedeng sumulat sa blockchain

> ℹ️ Subukan ulit! Ang iisang entity na kumokontrol ay kabaligtaran ng desentralisasyon.

- [ ] Nakakatugon ito sa mga desentralisasyon requirement na itinakda ng gobyerno

> ℹ️ Subukan ulit! Galing sa disenyo ng network ang desentralisasyon, hindi sa pag-apruba ng gobyerno.

- [x] Walang iisang entity ang kumokontrol sa ledger na nasa maraming computer

> ℹ️ Tama! Ang pag-iimbak ng mga kopya ng ledger sa maraming node ang dahilan kung bakit walang iisang entity ang may kapangyarihang kontrolin o baguhin ang data.

- [ ] Naka-imbak ang ledger sa iisang secure na server

> ℹ️ Subukan ulit! Magiging central point of control ang iisang server. Naka-imbak ang mga kopya ng ledger sa maraming node.

# Anatomiya ng Block

Isang mahalagang feature ng mga blockchain ay hindi na mababago ang data ng nakaraang transaksyon kapag naisama na ito sa isang block. Ito ay dahil ang bawat block ay may kakaibang `block hash`, parang fingerprint, na ginagamit para pag-ugnayin ang mga block nang sunud-sunod. Walang makakapagbago ng nakaraang transaksyon nang hindi binabago ang fingerprint na iyon at ang fingerprint ng BAWAT block na sumunod dito dahil nakadepende ang bawat fingerprint sa nauna.

Kaya ang bawat `block` ay simpleng grupo ng mga transaksyon, kasama ang kakaibang fingerprint (ang `block hash` nito) na kinalkula mula sa laman ng block. Magkakadugtong ang mga block dahil tumutukoy ang bawat isa sa fingerprint ng naunang block para bumuo ng isang konektadong block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Ano ang layunin ng block hash?

- [ ] I-encrypt ang data ng block para walang makakabasa nito

> ℹ️ Subukan ulit! Nananatiling pampubliko ang data ng block. Fingerprint ang hash, hindi encryption.

- [x] Pag-ugnayin ang mga block at panatiling hindi mababago ang lumang transaksyon

> ℹ️ Tama! Tumutukoy ang bawat block sa fingerprint ng naunang block, kaya ang pagbabago ng lumang data ay masisira ang lahat ng sumunod na block.

- [ ] Tiyaking napupunta sa tamang address ang mga transaksyon

> ℹ️ Subukan ulit! Ang address ang humahawak kung saan napupunta ang pondo. Ang block hash ang nag-uugnay ng mga block.

- [ ] Tiyaking nananatiling desentralisado ang blockchain

> ℹ️ Subukan ulit! Ang desentralisasyon ay galing sa pamamahagi ng ledger sa maraming node, hindi sa block hash.

# Sa Loob ng Isang Block

Tandaan, ang data ng `block` ay simpleng grupo ng mga transaksyong pinagsama-sama. Kapag tiningnan ang loob ng isang block, makikita natin ang listahan ng mga transaksyon at ilang data tungkol sa kung sino ang gumawa ng block.

Mula sa naunang halimbawa natin tungkol sa blockchain ledger, puwedeng pareho itong ma-grupo sa isang block, o mahati sa maraming block sa paglipas ng panahon. Pero anumang block ang mapasukan nila, lahat ito ay maidaragdag sa kabuuang blockchain ledger sa huli.

- Nagpadala si Alice ng 5 ETH kay Bob
- Nagpadala si Bob ng 2 ETH kay Charlie

Alalahanin na kailangan ding tumukoy ang bawat block sa `block hash` ng naunang block para pag-ugnayin ang blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Anong impormasyon ang laman ng isang block?

- [ ] Lahat ng impormasyong nasa mga naunang block

> ℹ️ Subukan ulit! Tumutukoy lang ang block sa hash ng naunang block. Hindi nito kinokopya ang lahat ng lumang data.

- [ ] Anumang related sa blockchain dahil walang limitasyon ang laki ng block

> ℹ️ Subukan ulit! Ang block ay isang hiwalay na grupo ng transaksyon, hindi isang walang-limitasyong container.

- [x] Data ng transaksyon at reperensiya sa naunang block

> ℹ️ Tama! Ang block ay grupo ng mga transaksyon kasama ang hash ng naunang block, na siyang nag-uugnay sa mga block.

- [ ] Lahat ng data ng transaksyong nabuo sa loob ng nakatakdang panahon

> ℹ️ Subukan ulit! Puwedeng ma-grupo sa isang block ang mga transaksyon o mahati sa maraming block sa paglipas ng panahon.

# Mga Indibidwal na Transaksyon

Ang data sa anumang blockchain ay simpleng listahan ng mga `transaksyon`, record ng pera na inilipat sa pagitan ng mga user. Kailangang lagdaan ang bawat transaksyon ng `digital signature` ng nagpadala para maging valid ito.

Ito ang ginagawa mo kapag nagko-confirm ka ng transaksyon gamit ang isang wallet: lumalagda ka gamit ang iyong digital signature para pahintulutan ang isang transaksyon. Puwede mo itong isipin bilang digital na katumbas ng physical na paglagda sa isang tseke, resibo, o credit card transaction.

Puwedeng simple lang ang mga transaksyon, gaya ng pagpapadala ng crypto asset, o mas complex, gaya ng pag-swap ng crypto asset o kahit pag-deploy ng espesyal na code na tumatakbo kapag na-trigger, tinatawag na `smart contract`.

Huli, may sarili at kakaibang digital identifier ang bawat transaksyon, tinatawag na `transaction hash`, na walang ibang transaksyon ang mayroon. Nagpapadali ito para tukuyin ang anumang solong transaksyon sa hinaharap at tinitiyak na hindi na mababago ang detalye ng transaksyong iyon.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Ang data sa isang blockchain ay simpleng listahan ng mga transaksyong naka-grupo sa mga block. Kasama sa mga halimbawa ng ganitong transaksyon ang:

- [x] Pagpapadala o pagtanggap ng crypto asset

> ℹ️ Tama! Naitatala ng transaksyon ang paglipat ng pera sa pagitan ng mga user, mula simpleng transfer hanggang smart contract interaction.

- [ ] Pagbabago ng laki ng block

> ℹ️ Subukan ulit! Hindi kayang baguhin ng transaksyon ang laki ng block.

- [ ] Pag-edit ng lumang blockchain data

> ℹ️ Subukan ulit! Hindi puwedeng baguhin ang lumang blockchain data. Pangunahing feature ito ng mga blockchain.

- [ ] Lahat ng nasa itaas

> ℹ️ Subukan ulit! Isa lang sa mga nasa itaas ang valid na blockchain transaction.

# Mga Address ng User

Ang `address` ay isang pampublikong identifier na puwedeng hanapin ng kahit sino sa blockchain. Parang email address, kahit sino ay puwedeng magpadala ng pondo dito pero tanging ang taong may hawak ng `private key` lang ang makaka-unlock at makakagamit ng pondo sa address na iyon.

Sa Ethereum, ang address ay palaging nagsisimula sa \_0x\_\_\_\_\_\_\_\_\_\_ at binubuo ng 42 character na numero at letra na hango mula sa `public key` ng address na iyon.

Kapag tinitingnan ang isang solong transaksyon sa block explorer, makikita natin ang From: at To: na address. Hindi nito sinasabi kung sino ang mga _taong_ kumokontrol sa mga address na iyon pero pinapayagan ang kahit sinong user na subaybayan ang paggalaw ng cryptocurrency sa buong blockchain ledger.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Ano ang totoo tungkol sa mga blockchain address?

- [ ] Sila ang pampublikong identifier ng iba't ibang entity sa isang blockchain

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Palagi silang nagsisimula sa _0x_ sa Ethereum

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [ ] Ang may hawak ng private key lang ang makakagamit ng pondo roon

> ℹ️ Subukan ulit! Tama ito, pero hindi lang ito ang tamang sagot.

- [x] Lahat ng nasa itaas

> ℹ️ Tama! Pampublikong identifier ang mga address, nagsisimula sa 0x sa Ethereum, at ang private key ang nag-a-unlock ng pondo nito.
