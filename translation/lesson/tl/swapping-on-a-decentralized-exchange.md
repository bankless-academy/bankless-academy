---
TITLE: Pag-swap sa Decentralized Exchange
DESCRIPTION: Simulan ang DeFi journey mo gamit ang Decentralized Exchange walkthrough na ito.
LANGUAGE: Filipino
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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

> * Ang Decentralized Exchange ay isang klase ng dApp na nagpapadali ng self-custody token swaps.
>
> * May kailangang praktikal na kaalaman para makipag-ugnayan nang may kumpiyansa sa isang DEX.
>
> * Magagamit natin ang block explorers para siyasatin ang ating mga on-chain transaksyon.

Ang Decentralized Exchange (DEX) ay ang pinakakaraniwang ginagamit na application sa mundo ng `Decentralized Finance` (DeFi), at may magandang dahilan dito! Pinapayagan ng mga DEX ang automated na pagpapalit ng isang cryptocurrency token para sa iba, nang hindi kailangan ng mediator. Hindi tulad ng Centralized Exchanges (CEXs), ang uri ng pagpapalit na ito ay nagbibigay-daan din sa users na mag-swap habang nananatiling buo ang pagmamay-ari nila sa kanilang assets.

Ang autonomiya, at mga permissionless protocol, ay pangunahing katangian ng DeFi. Binibigyan nila ang mga DeFi user ng tunay na pagmamay-ari sa kanilang digital assets, at bukas na access sa fundamental blockchain services 24/7. Kahit sino na may internet connection ay makaka-access ng DeFi, anuman ang kanilang personal na background, paniniwala, o lokasyon.

Sa entry na ito ng handbook, tatalakayin natin kung paano gamitin ang iyong self-custody wallet para makipag-ugnayan sa isang DEX, na ang layunin ay magpalit ng isang token para sa iba. Mas malalaman mo pa ang mekanismo, katangian, at risk profile ng teknolohiyang ito, at kung paano ito naihahambing sa mga CEX, sa ating lesson na [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Pagpili ng DEX

Ang pagpili ng affordable at ligtas na platform ang unang hakbang sa paggawa ng token swap. Sa walkthrough na ito, gagamitin natin ang Velodrome, isang well-established na DEX sa Optimism network. Habang lumalaki ang kumpiyansa mo sa blockchain navigation, matutunan mong suriin ang ibang exchange at hanapin ang pinakaangkop para sa iyong pangangailangan. Kasama sa ating [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson ang komprehensibong listahan ng mga katangiang dapat tingnan.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

Magandang simula ang mga DEX para sa web3 journey mo dahil karamihan sa mga dApp ay sumusunod sa layout ng user interface na katulad ng mga DEX, at gumagamit ng katulad na interaction sa iyong self-custody wallet.

Simulan na natin ang ating token swap.

## Paggawa ng Token Swap

**1\. I-load ang dApp:**

Buksan ang [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) sa bagong browser tab.

**2\. Ikonekta ang wallet mo:**

Gamitin ang standard na 'Connect' button, na karaniwang nasa upper right corner ng anumang dApp.

Kung nasa desktop ka, kumonekta gamit ang browser wallet mo.

Kung nasa mobile ka, may lalabas na wallet-connection prompt para ikonekta ang mobile wallet mo sa dApp.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Aprubahan ang koneksyon:**

Piliin ang 'Connect' sa iyong wallet application para kumpirmahin ang site connection. Pinapayagan nito ang dApp na makita ang wallet address at token balances mo. Wala ka pang binibigay na ibang permission dito.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Suriin at pirmahan ang terms of service (kung sasang-ayon ka):**

Maraming dApp ang hihilingin sa iyong pumirma ng mensahe para kumpirmahing nabasa mo ang kanilang terms and conditions. Ang pagpirma ng mga mensahe ay hindi nangangailangan ng gas, at hindi nag-iimbak ng anumang impormasyon sa blockchain. Kung sang-ayon ka sa terms, maaari mong pirmahan ang mensahe.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Lumipat sa tamang network:**

Para sa walkthrough na ito, siguraduhing naka-set ang wallet mo sa Optimism network.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. I-customize ang swap mo:**

Panahon na para piliin ang gusto mong input at output tokens. Sa halimbawang ito, magpapalit tayo ng ETH para sa OP, pero kaya mong ipalit ang anumang token na gusto mo!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Aprubahan ang token permissions (para sa token swaps lang):**

Kung nagpapalit ka ng token tulad ng USDC, hihilingin muna ng wallet mo na aprubahan ang permission para makagamit ang Velodrome ng token na iyon. Iminumungkahi naming limitahan ang approval sa laki ng trade mo. Ang ETH ay ang native currency ng network at hindi na nangangailangan ng approval, kaya sa halimbawa natin, dire-diretso na sa swap confirmation ang wallet.

**8\. Kumpirmahin ang transaksyon:**

Kapag kontento ka na sa swap quote at settings mo, maaari mong simulan ang swap. Kasama sa hakbang na ito ang pagkumpirma sa dApp, at muli sa iyong wallet.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Suriin ang balance mo:**

Ilang segundo lang ang aabutin para makumpirma ang transaksyon mo, at makikita mo pagkatapos ang bago mong token balance sa wallet mo. Kung hindi ipinapakita ang uri ng token mo, siguraduhing na-import mo ang mga token address.

*Optimism token contract address: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. Kunin ang transaction hash mo:**

Para makumpleto ang quest para sa ating [Decentralized Exchanges](https://app.banklessacademy.com/lessons/decentralized-exchanges) lesson, kakailanganin mo ang ***transaction hash ng swap*** (hindi ito dapat ipagkamali sa hash mula sa isang token permission transaction, o sa iyong wallet address). Karaniwang may lalabas na block explorer link sa DEX interface, na magpapakita sa iyo ng detalye ng kumpirmadong transaksyon. Kung hindi mo ito nakita, o kulang ito, may makikita kang isa pang link sa wallet activity log mo, na direktang naka-ugnay sa trade mo.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

Panahon na para tuklasin ang mundo ng decentralized trading! Umaasa kaming nasiyahan ka sa entry na ito ng Explorer's Handbook: 'Swapping on a Decentralized Exchange'.

Huwag kalimutang kolektahin ang entry na ito kung gusto mong magkaroon ng sarili mong kopya para sa madaling reference sa iyong paglalakbay, o para suportahan ang future content sa Bankless Academy. Ingat sa paglalakbay, Explorer!

---

## Mga madalas itanong

### Bakit nagbabago ang price quote ko ilang beses bawat minuto?

Karaniwang kinakalkula ang price quotes sa oras na ilagay mo ang gusto mong swap sa DEX interface. Habang tumatagal, nagsasagawa ng swaps ang ibang users at naaapektuhan ang token supply sa exchange. Regular na rine-refresh ng DEX ang quote mo para manatiling updated.

### Gaano katagal bago ma-execute ang isang token swap?

Depende ang sagot sa iba't ibang factor, pangunahin ang block speed ng blockchain at kung gaano ka kaunti o kalabis magbayad ng gas fee. Karaniwang tumatagal ang mga DEX transaksyon na isinumite sa Ethereum Mainnet nang 12 segundo hanggang ilang minuto bago makumpirma. Mas mabilis karaniwan ang mga Layer 2 transaksyon!

### Bakit nabigo ang transaksyon ko?

May ilang dahilan kung bakit maaaring mabigo ang isang transaksyon: kulang na pondo para bayaran ang gas, masyadong mababang gas limit, o masyadong mababang slippage. Ang pinakamagandang paraan para magsimulang mag-troubleshoot ay ang paghanap ng User Interface error messages. Maaari mo ring tingnan ang transaksyon mo sa isang block explorer, tulad ng [Etherscan](https://optimistic.etherscan.io/), para tingnan kung may mga on-chain error messages. Maaari mong itaas ang iyong `slippage tolerance` sa DEX swap settings kung mas mabilis gumalaw ang presyo kaysa sa trade mo. Maraming wallets at DEX din ang nag-aalok ng protected transaction routing, na nagpoprotekta sa swap mo laban sa mga `MEV` bots na sumusubok kumita mula sa mga pending trade.

### Puwede ko bang baguhin o alisin ang token permissions?

Ang pagbibigay ng token permissions sa isang smart contract ay maaaring iwanang vulnerable ang wallet natin sa hindi gustong future interactions, sakaling ma-hack ang smart contract. Posibleng baguhin o alisin ang token permissions gamit ang mga app tulad ng [Revoke.cash](https://revoke.cash/). Dahil may gastos na gas ang pag-aayos ng permissions, mabilis na maaaring maging mahal ang pag-iingat na ito. Isa ito sa mga dahilan kung bakit maraming users ang nag-iimbak ng digital assets nila sa isang wallet (cold wallet), habang nakikipag-ugnayan sa mga dApp sa iba (trading wallet). Naglilipat lang sila ng assets sa pagitan ng dalawa kapag kinakailangan.

### Bakit hindi available para sa swap ang token na hinahanap ko?

Kung hindi naka-list by default ang token mo, kakailanganin mong i-paste ang token contract address sa listahan. Para mahanap ang token contract address, tingnan ang <https://www.coingecko.com/> o ang opisyal na website ng proyekto.

**Tandaan:** Maaaring magbago ang token addresses para sa isang partikular na token sa iba't ibang network. Halimbawa, iba ang [USDC contract sa Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) kumpara sa [USDC contract sa Optimism](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85). Laging i-verify ang token addresses bago mag-swap!

---

**May-akda**

**[Tetranome](https://twitter.com/tetranome)** ang Project Champion sa Bankless Academy, na nakatuon sa user experience, UI, design, at platform curriculum.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** ay isang writer at editor sa BanklessDAO. Interesado siyang matuto ng kahit ano tungkol sa crypto at NFTs, na may partikular na pokus sa pinakamahusay na paraan para ipaabot ang kaalamang ito sa iba.

**Patron**

Ang unsponsored na artikulong ito ay bahagi ng iyong libreng edukasyon sa Bankless Academy. Kolektahin ang artikulo para suportahan ang future content!
