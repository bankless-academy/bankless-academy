---
TITLE: Pag-unawa sa mga Ethereum Token Standard
DESCRIPTION: Alamin kung paano sinusuportahan ng mga asset template ng Ethereum ang mga tradisyonal at bagong asset class.
LANGUAGE: Filipino
WRITERS: Musharraf, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards
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
## **Mga pangunahing punto**

> * Ang mga `token` standard ng Ethereum ay predefined na mga patakaran at function na ginagamit para mag-deploy ng token sa Ethereum.
>
> * Ang pinakapopular na token standard sa Ethereum ay ang `ERC-20`, `ERC-721`, at `ERC-1155`.
>
> * Bawat standard ay nagbibigay ng iba't ibang antas ng `fungibility`, na nagpapahintulot sa paggawa ng parehong common at unique na onchain asset.
>
> * Pinapagana ng token standards ang interoperability ng token sa buong Ethereum ecosystem, kaya napakadali para sa mga dApp na mag-integrate ng bagong token, at para sa iyo na ma-access ang mga ito!

## Ano ang mga Token Standard ng Ethereum?

Milyon-milyong magkakaibang crypto token ang umiiral sa Ethereum at sa mga `Layer 2` network nito, bawat isa may kani-kanilang katangian at use case. Paano masisiguro ng network ang seamless na token support sa buong dApp ecosystem nito, nang hindi kinakailangang gumugol ng oras ang mga developer sa pag-integrate ng bawat token? Paano mauunawaan ng mga user ng mga token na ito ang kanilang mahahalagang katangian nang hindi kinakailangang mag-scroll sa mga oras ng documentation?

Dito pumapasok ang token standards!

Sinusuportahan ng mga template at ruleset na ito ang `interoperability` ng token sa buong Ethereum ecosystem. Ibig sabihin, kailangan lang suportahan ng mga dApp ang ilang common na token standard sa halip na libu-libong indibidwal na token. Para sa mga Explorer tulad mo, ibig sabihin nito, tinitingnan mo lang ang founding standard ng isang token para maintindihan ang basic na kakayahan nito sa buong Ethereum.

Itinatakda ng token standards:

* Paano dapat i-code ang smart contract ng isang token.

* Ang shared set ng function na kailangang suportahan ng bawat token ng ganung klase, para malaman ng kahit anong dApp kung paano makikipag-ugnayan dito.

Sa kasalukuyan, may tatlong karaniwang ginagamit na token standard ang Ethereum:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: Standard para sa madaling maipagpalit (o fungible) na token.

   hal. USDC at UNI token.

2. **ERC-721**: Standard para sa unique (o non-fungible) na token, kilala bilang mga `NFT`.

   hal. Bored Ape Yacht Club NFTs.

3. **ERC-1155**: Standard na ginagamit para sa parehong fungible at non-fungible na token sa iisang contract.

   hal. Mga item sa loob ng isang web3 video game.

Ngayon, siguradong iniisip mo: "Ano ba talaga ang fungibility?"

Tingnan natin ang konseptong ito mula sa tradisyonal na economics para maintindihan ang kahalagahan nito sa Ethereum ecosystem.

## Fungibility vs. Non-Fungibility.

**'Fungibility'** ay isang katangian ng isang economic asset o produkto, na nagpapakita ng dalawang pangunahing feature:

* Kapag na-trade ang asset, ang mga unit nito ay interchangeable nang walang pagbabago sa halaga.

  (Ang $1 USD ay maipagpapalit sa isa pang $1 USD, o apat na 25¢ na barya, o dalawampung 5¢ na barya.)

* Kapag hinati ang asset, pinapanatili ng mas maliliit na fraction ang fundamental na katangian nito.

  (Ang $1 USD, na hinati sa apat na 25¢ na barya, ay gumagana pa rin bilang store of value o ginagamit para bumili.)

Ang mga halimbawa ng fungible asset ay oil, fiat currency, government bonds, at company shares. Ang mga non-unique na asset na ito ay madaling maipagpapalit at mahahati.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Sa kabilang banda, ipinapakita ng **'non-fungibility'**:

* Ang asset ay may unique na katangian na nagpapaiba dito mula sa katulad nito, na nagbibigay dito ng unique na halaga.

  (Iba ang presyo ng isang canvas painting ni Van Gogh kumpara sa isa mula sa isang emerging modern artist, dahil sa itsura, rarity, antas ng skill, at reputasyon sa likod ng mga painting.)

* Naaapektuhan ng paghahati ang fundamental na katangian nito.

  (Ang isang painting na pinutol sa apat na piraso ay may mga seksyong hindi magkatulad, at maaaring iba-iba ang halaga ng bawat seksyon. Nawawala rin ang orihinal na intensyon ng painting.)

Ang ilang halimbawa ng non-fungible asset ay real estate, artwork, digital identity, at certification. Mas mahirap i-exchange at hatiin ang mga asset na ito dahil sa kanilang unique na katangian.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Kung nalilito ka tungkol sa fungibility, tanungin mo na lang ang sarili mo: "Gaano ito kadaling i-exchange at hatiin?" Kung mahirap, malamang non-fungible ito!

Layunin ng Ethereum na maging "ang settlement layer para sa world economy". Ang fungible at non-fungible asset functionality ay nagbubukas ng oportunidad para ma-represent `onchain` ang tradisyonal na asset classes, at para makagawa ng mga bago!

## Mga Standard at Function ng Token

Kapag nag-de-deploy ng bagong token contract sa Ethereum, pipili ang gumawa ng asset mula sa isa sa mga umiiral na token standard. Nagbibigay ito ng initial properties (tinatawag na function) tulad ng total supply ng asset, kung maililipat ba ito sa ibang wallet o hindi, at kung anong impormasyon ang kaya nitong hawakan.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Halimbawa, gumagamit ang ERC-20 ng mga function tulad nito:

**1\. totalSupply:** Tinutukoy ang total supply ng isang ERC-20 token.

Ang total supply ng isang token ay nagpapakita ng mahahalagang katangian tulad ng halaga at distribution nito.

**2\. balanceOf:** Che-check ang token balance ng isang tinukoy na address.

Tumutulong ito sa mga serbisyo at platform na i-check ang balance ng wallet mo bago i-execute ang hiniling mong transaksyon.

**3\. transfer:** Naglilipat ng token mula sa address mo papunta sa ibang address.

Tuwing magpapadala ka ng crypto token mula sa wallet mo papunta sa ibang wallet, ginagamit mo ang transfer function.

**4\. approve:** Nagpapahintulot sa isang address (kadalasang smart contract) na mag-transact nang automatic para sa wallet mo hanggang sa tinukoy na halaga.

Gamit ang function na ito, pwede mong payagan ang isang platform o serbisyo na automatic na gumamit ng tinukoy na bahagi ng pondo mo at mag-execute ng transaksyon.

**5\. allowance:** Ginagamit para malaman ang halagang pwedeng i-transact ng isang spender mula sa isang wallet.

Maaaring gamitin ng isang platform ang function na ito para i-check ang total na halagang pinayagan mong gamitin nito, at kung kaya nitong i-execute ang transaksyon nang hindi mo na kailangang mag-sign manually.

Ang pag-standardize ng proseso ng paggawa ng token ay nagbibigay-daan sa `composability` sa Ethereum ecosystem. Halimbawa, ang isang developer na gumagawa ng [decentralized exchange (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) ay pwedeng magdagdag ng support para sa kahit anong token na sumusunod sa ERC-20 standard dahil magkatulad ang kilos nilang lahat. Hindi na nila kailangang gumawa ng hiwalay na support para sa bawat naka-list na token.

Parehong-pareho, ang isang gumagawa ng NFT marketplace ay kailangan lang gawing compliant ang platform sa ERC-721 at ERC-1155 standards para suportahan ang lahat ng NFT na ginawa sa Ethereum.

Ngayong naiintindihan na natin ang token standards, fungibility, at functions, tingnan natin ang use case para sa tatlong pangunahing standard sa Ethereum.

### ERC-20: Mga Fungible Token

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

Ang [ERC-20](https://eips.ethereum.org/EIPS/eip-20) ay isang token standard na tumutukoy sa mga patakaran para sa paggawa ng fungible token contract.

Ang mga ERC-20 token ay maaaring kahit ano, mula sa `memecoin` hanggang sa paraan ng pagbabayad sa isang decentralized marketplace. Sa karamihan, mapapasok sila sa isa sa apat na kategoryang ito:

**1\. Utility token:** Nagsisilbi para sa tiyak na use case sa loob ng ekosistema ng isang app/platform.

Halimbawa: Ginagamit ang Chainlink (LINK) para bayaran ang mga operator na naghahatid ng real-world data, tulad ng market prices, sa mga smart contract.

**2\. Governance token:** Nagbibigay sa may-hawak ng karapatang bumoto sa mga governance decision ng isang platform.

Halimbawa: Ang mga may-hawak ng Ethereum Name Service (ENS) ay pwedeng bumoto sa mga proposal para i-update ang domain registry protocol.

**3\. Stablecoin:** Ginawa para mapanatili ang stable na halaga, kadalasang katumbas ng U.S. dollar.

Halimbawa: Tether (USDT), USD Coin (USDC), at mga mas bagong entrant tulad ng USDS ng Sky.

**4\. Security token:** Kumakatawan sa pagmamay-ari sa isang underlying asset, tulad ng stocks ng isang kumpanya.

Halimbawa: mga tokenized investment fund, tulad ng money-market funds na sinimulang i-isyu `onchain` ng mga major asset manager noong 2024.

Ang iisang token ay pwedeng mapabilang sa mahigit sa isang kategorya. Halimbawa, ang isang governance token ay maaari ring may certain na utility sa loob ng isang platform.

Madali kang makakabili ng [ERC-20 token sa isang DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) tulad ng Uniswap o isang `centralized exchange` tulad ng Binance o Coinbase.

### ERC-721: Mga Non-fungible Token

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

Ang [ERC-721](https://eips.ethereum.org/EIPS/eip-721) ay isang standard na tumutukoy sa mga patakaran para sa mga user ng Ethereum na gumawa o gumamit ng non-fungible token. Sinisiguro nitong provably unique ang bawat NFT na nagawa.

Ano ang ilang use case ng ERC-721 token?

**1\. Pagmamay-ari ng asset:** Malawakang ginagamit ang mga ERC-721 token para kumatawan sa pagmamay-ari ng unique na digital at real-world asset. Halimbawa, ang entry na ito ng Explorer's Handbook ay may 100 indibidwal na numeradong bersyon (hindi lang para basahin, kundi para angkinin), parang isang libro sa digital bookshelf mo. (Pwede mong i-`mint` at angkinin ito sa pag-click ng gintong button na 'Collect Entry' sa taas). Ganito rin gumagana ang 'Datadisk Collectibles' ng Bankless Academy.

**2\. Subscription at membership:** Gumagamit na ng mga NFT ang mga creator, artist, club, at kumpanya para sa subscription, tiket sa event, at membership. Sinisiguro ng provable uniqueness ng mga NFT na ang bawat isa sa fixed supply ay nakatali sa isang indibidwal na user.

**3\. Loyalty reward:** Nagpatakbo ang Starbucks ng loyalty program na tinatawag na Odyssey hanggang Marso 2024, kung saan pwedeng kompletuhin ng mga miyembro ang mga quest para makakuha ng NFT na maaari nilang i-redeem para sa digital at real-world na reward. Maraming ibang brand ang nag-aalok ng NFT bilang loyalty reward na pwedeng i-redeem o ibenta ng mga user kung kailan nila gusto.

**4\. Identity at Certification:** Pwedeng gamitin ang mga ERC-721 token para gumawa ng tamper-proof na identity at certification. Kapag ang digital identity o certificate mo ay ERC-721 token, madali mong mapapatunayan ang pagmamay-ari mo, at halos imposibleng may makapeke sa mga dokumento mo at abusuhin ito.

Para makakuha ng ERC-721 token, gumawa ng account sa isang NFT marketplace tulad ng [OpenSea](https://opensea.io/) at bumili ng kahit anong naka-list na NFT. Siguraduhing kunin mo ang aming [Web3 Security](https://app.banklessacademy.com/lessons/web3-security) lesson para maprotektahan ang sarili mo mula sa mga scam sa marketplace.

### ERC-1155: Fungible at Non-fungible na Token

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Madalas tawaging `multi-token standard`, pinagsasama ng [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) ang konsepto ng ERC-20 at ERC-721, at hinahayaan ang mga builder na gumawa ng contract na kayang suportahan ang parehong fungible at non-fungible na token. Hindi ito nagbibigay ng malaking pagkakaiba sa user experience pero nakakatulong ito na i-optimize ang mga feature ng platform. Halimbawa nito ay ang pag-deploy ng parehong fungible na in-game currency at non-fungible na in-game asset sa iisang contract.

Pinapayagan din ng standard na ito ang paggawa ng semi-fungible na token: mga tokeng fungible at non-fungible sa tiyak na sitwasyon. Halimbawa, sa isang trading card collection, ang lahat ng card na may parehong rarity ay maaaring fungible (interchangeable), habang ang mga card na iba-iba ang antas ng rarity ay maaaring non-fungible (non-interchangeable).

Pinapagana rin ng ERC-1155 ang batch transaction para makapagpadala ng maraming klase ng token nang sabay-sabay, na posibleng magbawas sa gastos sa `gas` ng mga user.

---

Binabati ka namin sa pagtatapos ng mahabang entry na ito sa Explorer's Handbook: 'Understanding Token Standards'.

Huwag kalimutang kolektahin ang entry na ito kung gusto mong magkaroon ng sarili mong kopya para sa madaling reference sa iyong paglalakbay, o para suportahan ang future content sa Bankless Academy. Ingat sa paglalakbay, Explorer!

---

## Ethereum Token Standard FAQ

### Paano ginawa ang mga token standard ng Ethereum?

Iminumungkahi at inilalathala ang mga token standard sa Ethereum sa pamamagitan ng proseso ng panukala na tinatawag na Ethereum Improvement Proposals (EIPs). Walang botohan: pinapasadya ang isang panukala sa pampublikong diskusyon, at kapag pangkalahatang sumang-ayon ang komunidad na gumagana ito, tinatapos ito ng mga editor bilang isang standard na tinatawag na Ethereum Request for Comment (ERC). Idinaragdag ang serial number ng EIP para makumpleto ang pangalan ng standard, hal. ERC-20 o ERC-721.

### Sumusunod ba ang ether (ETH) sa isang token standard?

Hindi. Sa katunayan, kilala ang ETH bilang 'coin' hindi 'token', ibig sabihin, may sarili itong [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### Kahit sino ba pwedeng mag-launch ng token?

Oo. Ang Ethereum ay isang `permissionless` na ecosystem, at kahit sino ay pwedeng mag-launch ng fungible o non-fungible na token. Pero kakailanganin mo ng technical know-how o access sa no-code tools.

### Kung magkatulad ang pangalan ng dalawang token, paano ko malalaman kung alin ang official na token?

Para makilala ang orihinal na token, dapat mong i-check ang contract address na ginamit para i-publish ang token na gusto mong gamitin, at i-reference ito sa official na project documentation. Sa ganitong paraan, masisiguro mong hindi ka makikipag-ugnayan sa isang malicious na token contract na kayang ubusin ang wallet mo.

### May iba pa bang token standard sa Ethereum bukod sa ERC-20, 721, at 1155?

Oo. May ilang malawakang ginagamit, tulad ng [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), isang shared standard para sa `vault` na token na kumakatawan sa mga deposit na kumikita ng yield sa DeFi. Sinasaklaw din ng mas bagong standard ang mga `smart account`, na nagpapahintulot sa isang wallet na magpatakbo ng sarili nitong code. Ang iba, tulad ng [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462), at [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), ay hindi kailanman na-popularize o naglilingkod lang sa napaka-niche na use case.

---

**Mga May-akda**

**[Musharraf](https://x.com/musharrafff)** ang co-founder ng Unhashed. Tumutulong siya sa mga web3 project sa content strategy at execution.

**[Tetranome](https://twitter.com/Tetranome)** ang Project Champion sa Bankless Academy, na nakatuon sa user experience, interface, design, at content.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** ay isang writer at editor sa BanklessDAO. Interesado siyang matuto ng kahit ano tungkol sa crypto at NFTs, na may partikular na pokus sa pinakamahusay na paraan para ipaabot ang kaalamang ito sa iba.

**Patron**

Ang unsponsored na artikulong ito ay bahagi ng iyong libreng edukasyon sa Bankless Academy. Kolektahin ang artikulo para suportahan ang future content!
