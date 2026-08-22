---
TITLE: Pamamahala ng mga Token Allowance
DESCRIPTION: Protektahan ang wallet mo mula sa mga hindi gustong smart contract interaction.
LANGUAGE: Filipino
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
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

> * Ang `token allowance` ay pahintulot na ibinibigay sa mga `smart contract` para gastusin ang token mula sa wallet nang walang karagdagang approval.
>
> * Puwede itong abusuhin ng mga umaatake kung hindi alam ng user na may ganitong pahintulot.
>
> * May mga tool tulad ng Revoke.cash na nagpapadali sa pag-inspect at pag-revoke ng mga token allowance.

## Panimula

Binibigyan ng `DeFi` ang mga user ng kontrol sa mga asset nila, kabilang ang mga `private key`, na nagbibigay ng dating hindi pa naranasang soberanya at awtoridad sa pondo nila. Pero kasama ng malaking kapangyarihan ang mas malaking responsibilidad: kailangang buong-buo mong pangasiwaan ang seguridad at pamamahala ng mga asset mo.

May apat na karaniwang kategorya ng scam na dapat malaman ng mga user ng DeFi:

* **Pagkalantad ng Seed Phrase:** Sinusubukan ng mga umaatake na linlangin ang mga user para ibunyag ang seed phrase nila, na magbibigay sa kanila ng hindi awtorisadong access sa pondo. Sa seed phrase mo, kaya ng umaatake na ubusin ang lahat ng pondo mo, at ipagpapatuloy niya ito kung maglalagay ka pa ng dagdag na pondo sa wallet. Sa kasamaang-palad, walang paraan para mabawi ito; ang tanging solusyon ay gumawa ng bagong-bagong wallet gamit ang bagong `seed phrase`.

* **Direktang Paglipat ng ETH:** Kaya ng mga scammer na itago ang paglipat ng ETH sa likod ng isang function call, tulad ng “Security Update.” Naalis na sa MetaMask ang raw signature method sa likod ng lumang bersyon ng scam na ito; ang modernong phishing kit naman ay inaabuso ang mga karaniwang mukhang signature request, umaasang pipirma ka nang hindi binabasa ang ipinapakita ng wallet mo. Kapag nabiktima ka rito, hindi mo na mababawi ang pondo mo, pero puwede mo pa ring gamitin nang ligtas ang wallet mo sa ibang transaksyon.

* **Listing sa NFT Marketplace:** Mag-ingat sa mga pekeng listing at malisyosong contract na inaabuso ang mga allowance na ibinigay mo sa mga marketplace tulad ng OpenSea. Puwede kang lokohin ng mga scammer na pumirma ng isang `offchain` na mensahe na naglilista ng mga naaprubahang `NFT` mo para ibenta, kahit walang aktwal na token transaction na nangyayari.

* **Mga Token Allowance:** Puwedeng i-manipula ng mga umaatake ang pahintulot para makakuha ng mas maraming pondo kaysa sa orihinal na inaprubahan. Ang “Approvals” ay onchain na transaksyon na nagbibigay ng access sa mga token o NFT mo. Ang “Permits” ay parehong access pero gasless offchain signature lang ang kailangan. Ginagamit ito ng Uniswap at ng karamihan ng modernong trading app (tinatawag na Permit2). Hindi lumalabas ang permit signature bilang onchain approval hangga't hindi ito nagagamit, at may expiration date pa ito; puwede mo itong tingnan at kanselahin sa “Signatures” view ng Revoke.cash.

  Habang lumalaganap ang mga `smart contract`, nagiging kailangan ang mga `token allowance` para magawa ng mga pinagkakatiwalaang contract ang transaksyon nang hindi nilalantad ang private key. Hinahayaan ng token allowance ang mga dApp na awtomatikong igalaw ang mga token sa wallet mo para sa iyo. Kahit napapabilis nito ang proseso, nilalantad din nito ang mga user sa posibleng pag-atake sa pamamagitan ng scam at hindi awtorisadong access.

Sa artikulong ito, tatalakayin natin ang ‘Token Allowances’ at ipapakilala ang isang community tool na ginawa para tumulong sa pamamahala ng mga pahintulot mo.

## Mga Token Allowance: Pag-unawa, Pamamahala, at Pagsisiguro ng Kaligtasan

Ang `token allowance` ay pahintulot na ibinibigay nang maaga sa mga `smart contract` para gastusin ang token mula sa wallet. Mahalaga ang papel nito sa pagpapadali ng transaksyon nang hindi na kailangan ng tahasang pahintulot sa bawat direktang paglipat ng asset mula sa wallet. Pero kapag inabuso, puwedeng maging paraan ng pag-atake ang token allowance sa mga hindi alerto. Para maiwasan ito, mahalagang mag-ingat ang mga user ng DeFi, matuto tungkol sa landscape ng seguridad, at maunawaan kung paano talaga gumagana ang token allowance.

May dalawang hakbang sa pagbibigay ng pahintulot sa isang third-party contract:

1. Pag-connect ng wallet: Kapag nag-connect ka ng wallet mo sa isang dApp, ibinabahagi mo lang ang `address` ng wallet mo sa front-end nito, para maipakita nito ang balance at aktibidad mo. Walang ibinibigay na onchain na pahintulot ang pag-connect mismo.

2. Token approval: Para makipag-transaksyon sa dApp, ina-approve mo ang smart contract nito para igalaw ang mga partikular na token para sa iyo. Ito ang hakbang na nagbibigay ng aktwal na kapangyarihang gumastos.

Sa proactive na pamamahala ng token allowance, masisiguro ng mga user na walang contract na makaka-withdraw nang higit sa dating tinakdang halaga mula sa wallet nila. Sa kabutihang-palad, may mga community tool na ginawa para bigyan ng kumpiyansa at kapayapaan ng isipan ang mga user ng DeFi.

## Hakbang-hakbang na gabay: Paggamit ng Revoke.cash

Binibigyang-kapangyarihan ng [Revoke.cash](https://revoke.cash/) ang mga user na madaling pamahalaan ang mga token allowance nila gamit ang simpleng website na tumutulong mag-inspect at mag-monitor ng mga allowance na ibinigay sa iba't ibang dApp. Tingnan natin kung paano mo gagamitin ang makapangyarihang community tool na ito para protektahan ang mga asset mo at mabawi ang kontrol sa wallet mo.

**1\. I-connect ang wallet mo**:

Para simulan ang pag-revoke ng mga token allowance mo, pumunta sa [Revoke.cash](http://revoke.cash/) at i-click ang “Connect Wallet” sa kanang-itaas na sulok. Puwede mo ring i-type nang manu-mano ang public address ng wallet mo sa search bar. Kapag tapos na mag-load, makikita mo ang listahan ng lahat ng `token approval` mo sa network na iyon.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. I-inspect ang mga allowance mo**:

Kapag naka-connect na ang wallet mo, puwede mong i-inspect ang mga kasalukuyang approval mo. Puwede mong i-sort, i-filter, o hanapin ang mga partikular na approval base sa authorized spender address. Kapaki-pakinabang ang pag-sort ng “Newest to Oldest” kapag pinaghihinalaan mong may kamakailang malisyosong approval. Gamitin ang mga opsyon sa pag-sort at pag-filter para makakuha ng buong larawan ng mga token allowance na ibinigay mo. Ibinibigay ang allowance kada chain, kaya gamitin ang network selection para ulitin ang pagsusuri sa bawat network na ginagamit mo.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. I-revoke ang mga hindi gustong allowance:**

Kapag nakita mo na ang mga approval na gusto mong i-revoke, i-click lang ang button na “Revoke” sa tabi ng bawat isa. Puwede mo ring baguhin ang approval sa ibang halaga sa pag-click ng pencil icon sa tabi ng inaprubahang halaga, kung kailangan mo pa ito sa hinaharap pero gusto mong bawasan ang risk.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Makabubuting i-revoke o i-adjust ang isang token allowance kung:

1. May kamakailang na-deploy na smart contract na na-exploit at gumawa ng kahinaan sa isang `decentralized exchange` na regular mong ginagamit.

   Noong Abril 2023, dumanas ng katulad na exploit ang popular na `DEX` na SushiSwap, kung saan halos $3.5M ang ninakaw mula sa mga user. Nanatiling nasa panganib ang mga apektadong user kung hindi nila na-revoke ang token allowance nila.

2. May malisyosong governance proposal na nag-a-update sa ilang contract na may layuning ubusin ang pondo ng mga user.

   Mahigit $2.5M na asset ang na-compromise nang isagawa ng Atlantis Loans, isang `DeFi` protocol sa BNB chain, ang governance proposal na nag-target sa ilang contract. Nabawasan ang panganib ng mga user na namahala sa approval limit nila laban sa pagkaubos ng wallet nila dahil sa malisyosong proposal.

## Huwag Kalimutan ang mga Delegation

Mula nang mag-upgrade ang Ethereum sa Pectra (Mayo 2025), hindi na lang allowance ang dapat suriin. May bagong wallet feature (EIP-7702) na hinahayaan ang wallet mo na mag-delegate sa dagdag na code, na nagbibigay ng convenience tulad ng transaction batching, pero may bago ring drainer trick: isang malisyosong signature lang ay puwedeng mag-install ng "sweeper" code na agad magpapadala ng anumang idineposito mo sa umaatake, kahit hindi nalantad ang seed phrase mo. Noong 2025, natuklasan ng mga researcher sa Wintermute na mahigit 97% ng maagang wallet delegation ay tumuturo sa parehong sweeper code.

Ipinapakita ng Revoke.cash ang mga aktibong delegation mo sa tab na "Delegations", pero dahil kontrolado ng wallet mo ang delegation, hindi ng dApp, kailangan mong i-revoke ang hindi gustong delegation sa loob mismo ng wallet mo. Sa MetaMask, buksan ang account details at ibalik ang account sa standard account. Kung hindi ka kailanman nag-upgrade sa `smart account`, ituring na mapanganib ang anumang delegation na makita mo.

---

Oras na para palakasin ang depensa ng wallet natin! Sana nasiyahan ka sa entry na ito ng Explorer's Handbook: 'Managing Token Allowances'.

Huwag kalimutang i-collect ang entry na ito kung gusto mong magkaroon ng sariling kopya para madaling ma-refer sa iyong paglalakbay, o para suportahan ang susunod na content ng Bankless Academy. Ingat sa iyong paglalakbay, Explorer!

---

## FAQ

### Kailan ko dapat gamitin ang Revoke.cash?

Gamitin ang Revoke.cash paminsan-minsan, lalo na kapag hindi mo aktibong ginagamit ang isang dApp, partikular sa mga NFT marketplace. Binabawasan ng paglilimita sa approval ang panganib ng pagkawala ng pondo dahil sa hack, exploit, o phishing scam. Sa pag-sort ng mga approval mo para ipakita ang pinakabago, makikilala mo ang mga kahina-hinalang approval at agad itong ma-revoke, para mabawasan ang karagdagang pinsala.

### Poprotektahan ba ako ng pag-disconnect ng wallet ko sa mga approval exploit?

Hindi ka poprotektahan ng pag-disconnect ng wallet mo sa isang dApp laban sa exploit, approval man o iba pa. Nananatiling aktibo ang mga token approval na naibigay mo na kahit pagkatapos mag-disconnect, dahil naka-store ito onchain.

### Paano ko maiiwasan ang mga token allowance exploit at katulad na panganib?

Kasama sa proactive na paraan sa token allowance ang:

* pagbibigay ng allowance lang sa mga pinagkakatiwalaang dApp.

* regular na pagsusuri ng mga token allowance.

* pag-aalis ng mga hindi kailangan o kahina-hinalang allowance.

* pagsuri sa mga wallet delegation na hindi mo kilala.

* pananatiling updated sa mga security update ng mga dApp.

Isaalang-alang ang paggamit ng third-party tool tulad ng [browser extension](https://revoke.cash) ng Revoke.cash: gumagana ito bilang proactive na hakbang laban sa posibleng banta. Binabalaan ka ng extension kapag malapit ka nang pumirma ng puwedeng mapanganib, protektado ka laban sa phishing scam o iba pang malisyosong aktibidad.

### Puwede ba akong makabawi ng pondo gamit ang Revoke.cash?

Sa kasamaang-palad, hindi kayang bumawi ng nanakaw na pondo ang Revoke.cash. Nagsisilbi itong preventive tool para bawasan ang tsansang mabiktima ka ng approval exploit. Pero puwedeng maiwasan ng pag-revoke ng mga approval na ginamit para nakawin ang pondo mo ang karagdagang pagnanakaw.

### Bakit paulit-ulit na naaagawan ang wallet ko tuwing maglalagay ako ng pondo?

Posibleng may "sweeper bot" ang wallet mo, isang script na nagbabantay sa na-compromise na wallet at mabilis na naglilipat ng bagong deposito bago ka pa makagalaw. Isang dahilan ay ang na-compromise na seed phrase. Kung ganito, hindi makakatulong ang pag-revoke ng approval; iwan ang wallet at gumawa ng bago. Pero kasing-posible rin na dahilan ang malisyosong wallet delegation: sweeper code na na-install sa pamamagitan ng signature na nalinlang kang ibigay, kahit hindi nalantad ang seed phrase mo. Suriin ang tab na "Delegations" sa Revoke.cash. Kung may makita kang delegation na hindi mo kilala, i-revoke ito sa loob ng wallet mo (hal., sa account details ng MetaMask). Kung walang delegation at patuloy pa rin ang pagkaubos, ipagpalagay na na-compromise na ang seed phrase mo at lumipat sa bagong wallet.

---

**May-akda**

**[Marcus](https://twitter.com/estmcmxci)** ang naglalathala ng ENS DAO Newsletter. Nag-aaral siya kung paano puwedeng gamitin ang labis na kita mula sa protocol fee para tumustos sa development ng application layer at iba pang open source infrastructure.

**Editor**

**[Tetranome](https://twitter.com/Tetranome)** ang Project Champion sa Bankless Academy, nakatutok sa user experience, interface, disenyo, at content.

**[Trewkat](https://twitter.com/trewkat)** ay isang writer at editor sa BanklessDAO. Interesado siya sa pag-aaral tungkol sa crypto at NFT, na partikular na nakatuon sa pinakamahusay na paraan para maipaabot ang kaalamang ito sa iba.

**Patron**

Ang unsponsored na artikulong ito ay bahagi ng libreng edukasyon mo sa Bankless Academy. I-collect ang artikulo para suportahan ang susunod na content!
