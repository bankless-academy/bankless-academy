---
TITLE: Kuelewa viwango vya tokeni za Ethereum
DESCRIPTION: Jifunze jinsi Ethereum inavyotumia violezo vya mali kuhudumia aina za mali za kawaida na zile zinazoibuka.
LANGUAGE: Kiswahili
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
## **Mambo muhimu**

> * Viwango vya `tokeni` za Ethereum ni sheria na kazi zilizowekwa awali zinazotumika kuzindua tokeni kwenye Ethereum.
>
> * Viwango maarufu zaidi vya tokeni za Ethereum ni `ERC-20`, `ERC-721` na `ERC-1155`.
>
> * Kila kiwango kinatoa daraja tofauti la `uwezo wa kubadilishana`, hivyo mali za onchain za kawaida na zile za kipekee zote zinaweza kuundwa.
>
> * Viwango vya tokeni vinawezesha tokeni kufanya kazi pamoja katika mfumo mzima wa Ethereum, hivyo dApp zinaunganisha tokeni mpya kwa urahisi sana, nawe unazifikia kwa urahisi!

## Viwango vya tokeni za Ethereum ni nini?

Mamilioni ya tokeni tofauti za kripto zinaishi kwenye Ethereum na mitandao yake ya `Layer 2`, kila moja ikiwa na sifa na matumizi yake. Mtandao unawezaje kuhakikisha tokeni zote zinatumika bila shida katika mfumo wake wa dApp, bila watengenezaji kutumia masaa mengi kuunganisha kila tokeni? Watumiaji wa tokeni hizi wanawezaje kuelewa sifa zake muhimu bila kusoma nyaraka kwa masaa?

Hapa ndipo viwango vya tokeni vinapoingia!

Violezo na sheria hizi zinaunga mkono `mwingiliano` wa tokeni katika mfumo mzima wa Ethereum. Maana yake dApp zinahitaji kuunga mkono viwango vichache tu vya kawaida badala ya maelfu ya tokeni moja moja. Kwa Wagunduzi kama wewe, maana yake unaweza kuangalia kiwango cha msingi cha tokeni na kuelewa uwezo wake wa msingi kote Ethereum.

Viwango vya tokeni vinaamua:

* Jinsi mkataba mahiri wa tokeni unavyopaswa kuandikwa.

* Kundi la kazi ambazo kila tokeni ya aina hiyo lazima iunge mkono, ili dApp yoyote ijue jinsi ya kuitumia.

Kwa sasa, Ethereum ina viwango vitatu vya tokeni vinavyotumika sana:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: kiwango cha tokeni zinazobadilishana kwa urahisi (fungible).

   k.m. tokeni za USDC na UNI.

2. **ERC-721**: kiwango cha tokeni za kipekee (non-fungible), zinazojulikana kama `NFT`.

   k.m. NFT za Bored Ape Yacht Club.

3. **ERC-1155**: kiwango kinachotumika kwa tokeni zinazobadilishana na zisizobadilishana ndani ya mkataba mmoja.

   k.m. vitu vilivyo ndani ya mchezo wa video wa web3.

Sasa pengine unajiuliza: "Uwezo wa kubadilishana hasa ni nini?"

Tuangalie dhana hii kutoka uchumi wa kawaida ili kuelewa umuhimu wake katika mfumo wa Ethereum.

## Uwezo wa kubadilishana dhidi ya kutobadilishana.

**"Uwezo wa kubadilishana"** ni sifa ya mali au bidhaa ya kiuchumi, inayoonyesha mambo mawili muhimu:

* Mali inapofanyiwa biashara, vipande vyake vinabadilishana bila thamani kubadilika.

  (Dola 1 ya Marekani inaweza kubadilishwa na dola 1 nyingine, au sarafu nne za senti 25, au sarafu ishirini za senti 5.)

* Mali inapogawanywa, vipande vidogo vinabaki na sifa zake za msingi.

  (Dola 1, ikigawanywa kuwa sarafu nne za senti 25, bado inafanya kazi kama hifadhi ya thamani au inatumika kununua vitu.)

Mifano ya mali zinazobadilishana ni mafuta, sarafu ya fiat, hati fungani za serikali na hisa za makampuni. Mali hizi zisizo za kipekee zinabadilishwa na kugawanywa kwa urahisi.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Kinyume chake, **"kutobadilishana"** kunaonyesha:

* Mali ina sifa za kipekee zinazoitofautisha na nyingine, na kuipa thamani ya kipekee.

  (Mchoro wa Van Gogh una bei tofauti na wa msanii mpya wa kisasa, kwa sababu ya muonekano, uadimu, kiwango cha ustadi na sifa iliyo nyuma ya michoro hiyo.)

* Kitendo cha kugawanya kinaathiri sifa zake za msingi.

  (Mchoro uliokatwa vipande vinne una sehemu zisizofanana, na kila sehemu inaweza kuwa na thamani tofauti. Lengo la awali la mchoro nalo linapotea.)

Mifano ya mali zisizobadilishana ni majengo, kazi za sanaa, utambulisho wa kidijitali na vyeti. Mali hizi ni ngumu zaidi kubadilishana na kugawanya kwa sababu ya sifa zake za kipekee.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Ukichanganyikiwa kuhusu uwezo wa kubadilishana, jiulize tu: "Ni rahisi kiasi gani kuibadilisha na kuigawanya?" Ikiwa ni ngumu, pengine haibadilishani!

Ethereum inalenga kuwa "tabaka la ukamilishaji la uchumi wa dunia". Uwezo wa kushughulikia mali zinazobadilishana na zisizobadilishana unafungua fursa kwa aina za mali za kawaida kuwakilishwa onchain, na kwa mpya kuundwa!

## Viwango na kazi za tokeni

Anapozindua mkataba mpya wa tokeni kwenye Ethereum, mtengenezaji wa mali huchagua kimoja kati ya viwango vilivyopo. Hii inaipa sifa za awali (zinazoitwa kazi) kama vile jumla ya ugavi wa mali, kama inaweza kuhamishwa kwenda mkoba mwingine au la, na taarifa gani inaweza kubeba.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Kwa mfano, ERC-20 hutumia kazi kama hizi:

**1\. totalSupply**: inafafanua jumla ya ugavi wa tokeni ya ERC-20.

Jumla ya ugavi wa tokeni inaeleza sifa muhimu kama thamani yake na mgawanyo wake.

**2\. balanceOf**: inakagua salio la tokeni katika anwani uliyotaja.

Hii husaidia huduma na majukwaa kukagua salio la mkoba wako kabla ya kutekeleza muamala ulioomba.

**3\. transfer**: inahamisha tokeni kutoka anwani yako kwenda anwani nyingine.

Kila unapotuma tokeni ya kripto kutoka mkoba wako kwenda mkoba mwingine, unatumia kazi ya transfer.

**4\. approve**: inaruhusu anwani (mara nyingi mkataba mahiri) kufanya miamala kwa niaba ya mkoba wako hadi kiasi ulichotaja.

Kwa kazi hii, unaweza kuidhinisha jukwaa au huduma kutumia sehemu uliyoipanga ya pesa zako na kutekeleza miamala.

**5\. allowance**: inatumika kujua kiasi ambacho mtumiaji anaweza kuchukua kutoka kwenye mkoba.

Jukwaa linaweza kutumia kazi hii kukagua jumla ya kiasi ulichoiruhusu kutumia, na kama linaweza kutekeleza muamala bila wewe kusaini kwa mkono.

Kuweka viwango kwenye mchakato wa kutengeneza tokeni kunawezesha `utangamano` katika mfumo wa Ethereum. Kwa mfano, mtengenezaji anayejenga [soko lililogatuliwa (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) anaweza kuongeza uungwaji mkono wa tokeni yoyote inayofuata kiwango cha ERC-20, kwa sababu zote zitafanya kazi kwa njia inayofanana. Hatahitaji kujenga uungwaji mkono wa kila tokeni iliyoorodheshwa.

Vivyo hivyo, anayejenga soko la NFT anahitaji tu kufanya jukwaa lake liendane na viwango vya ERC-721 na ERC-1155 ili kuunga mkono NFT zote zilizoundwa kwenye Ethereum.

Sasa tunapoelewa viwango vya tokeni, uwezo wa kubadilishana na kazi, tuangalie matumizi ya viwango vitatu vikuu vya Ethereum.

### ERC-20: tokeni zinazobadilishana

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) ni kiwango cha tokeni kinachoweka sheria za kutengeneza mikataba ya tokeni zinazobadilishana.

Tokeni za ERC-20 zinaweza kuwa chochote kuanzia `memecoin` hadi njia ya malipo kwenye soko lililogatuliwa. Mara nyingi zinaingia katika mojawapo ya makundi haya manne:

**1\. Tokeni ya matumizi**: inatimiza kusudi maalum ndani ya mfumo wa programu au jukwaa.

Mfano: Chainlink (LINK) inatumika kulipa waendeshaji wanaopeleka data ya ulimwengu halisi, kama bei za soko, kwenye mikataba mahiri.

**2\. Tokeni ya utawala**: inawapa wamiliki haki ya kupiga kura katika maamuzi ya utawala wa jukwaa.

Mfano: wamiliki wa Ethereum Name Service (ENS) wanaweza kupiga kura katika mapendekezo ya kubadilisha itifaki ya usajili wa majina.

**3\. Sarafu thabiti**: imeundwa kudumisha thamani thabiti, mara nyingi sawa na dola ya Marekani.

Mifano: Tether (USDT), USD Coin (USDC), na wapya kama USDS ya Sky.

**4\. Tokeni ya uwekezaji (security token)**: inawakilisha umiliki wa mali ya msingi, kama hisa za kampuni.

Mfano: mifuko ya uwekezaji iliyowekwa kwenye tokeni, kama mifuko ya soko la fedha ambayo wasimamizi wakubwa wa mali walianza kutoa onchain mwaka 2024.

Tokeni moja inaweza kuingia katika kundi zaidi ya moja. Kwa mfano, tokeni ya utawala inaweza pia kuwa na matumizi fulani ndani ya jukwaa.

Unaweza [kununua tokeni za ERC-20 kwenye DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) kama Uniswap, au kwenye `soko la kati` kama Binance au Coinbase.

### ERC-721: tokeni zisizobadilishana

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) ni kiwango kinachoweka sheria za watumiaji wa Ethereum kutengeneza au kutumia tokeni zisizobadilishana. Kinahakikisha kila NFT iliyoundwa ni ya kipekee kwa njia inayothibitika.

Matumizi ya tokeni za ERC-721 ni yapi?

**1\. Umiliki wa mali**: tokeni za ERC-721 zinatumika sana kuwakilisha umiliki wa mali za kipekee, za kidijitali na za ulimwengu halisi. Kwa mfano, ingizo hili la Kitabu cha Mgunduzi lina nakala 100 zenye namba zake (si za kusoma tu, bali za kumiliki), kama kitabu kwenye rafu yako ya kidijitali. (Unaweza `kuzalisha` na kumiliki nakala kwa kubofya kitufe cha dhahabu cha "Collect Entry" juu.) "Datadisk Collectibles" za Bankless Academy zinafanya kazi vivyo hivyo.

**2\. Usajili na uanachama**: watayarishi, wasanii, vilabu na makampuni tayari wanatumia NFT kwa usajili, tiketi za matukio na uanachama. Upekee unaothibitika wa NFT unahakikisha kila moja kati ya idadi maalum inafungamana na mtumiaji mmoja.

**3\. Tuzo za uaminifu**: Starbucks iliendesha mpango wa uaminifu ulioitwa Odyssey hadi Machi 2024, ambapo wanachama wake walikamilisha majukumu ili kupata NFT walizoweza kubadilisha kwa zawadi za kidijitali na za ulimwengu halisi. Chapa nyingine nyingi zinatoa NFT kama tuzo ya uaminifu ambayo watumiaji wanaweza kuibadilisha au kuiuza wakati wowote.

**4\. Utambulisho na vyeti**: tokeni za ERC-721 zinaweza kutumika kutengeneza vitambulisho na vyeti visivyoweza kuchezewa. Utambulisho au vyeti vyako vikiwa tokeni za ERC-721, ni rahisi kwako kuthibitisha umiliki na ni vigumu sana kwa mtu yeyote kughushi nyaraka zako na kuzitumia vibaya.

Ili kupata tokeni ya ERC-721, fungua akaunti kwenye soko la NFT kama [OpenSea](https://opensea.io/) na ununue NFT yoyote iliyoorodheshwa. Hakikisha unasoma somo letu la [Usalama wa Web3](https://app.banklessacademy.com/lessons/web3-security) ili kujilinda dhidi ya ulaghai wa masoko haya.

### ERC-1155: tokeni zinazobadilishana na zisizobadilishana

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Mara nyingi kinaitwa `kiwango cha tokeni nyingi`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) kinaunganisha dhana za ERC-20 na ERC-721 na kuwaruhusu wajenzi kuandika mikataba inayoweza kubeba tokeni zinazobadilishana na zisizobadilishana. Hili halibadilishi sana matumizi ya kila siku, lakini linasaidia kuboresha vipengele vya jukwaa. Mfano ni kuzindua sarafu ya ndani ya mchezo inayobadilishana pamoja na mali za kipekee za mchezo chini ya mkataba mmoja.

Kiwango hiki pia kinaruhusu kuundwa kwa tokeni za nusu-kubadilishana: tokeni zinazobadilishana na zisizobadilishana kutegemea mazingira. Kwa mfano, katika mkusanyiko wa kadi za biashara, kadi zote zenye uadimu sawa zinaweza kubadilishana, wakati kadi zenye viwango tofauti vya uadimu haziwezi kubadilishana.

ERC-1155 pia inawezesha miamala ya kundi ya kutuma aina kadhaa za tokeni kwa mara moja, jambo linaloweza kupunguza gharama ya `gesi` kwa watumiaji.

---

Tunakupongeza kwa kumaliza ingizo hili refu la Kitabu cha Mgunduzi: "Kuelewa viwango vya tokeni".

Usisahau kukusanya ingizo hili ikiwa unataka kumiliki nakala ya kurejea kwa urahisi safarini mwako, au kuunga mkono maudhui yajayo ya Bankless Academy. Safari njema, Mgunduzi!

---

## FAQ ya viwango vya tokeni za Ethereum

### Viwango vya tokeni za Ethereum vinaundwaje?

Viwango vya tokeni vinapendekezwa na kuchapishwa kwenye Ethereum kupitia mchakato uitwao Ethereum Improvement Proposals (EIP). Hakuna kura: pendekezo linaboreshwa kwa majadiliano ya wazi, na jamii ikikubaliana kwa mapana kwamba linafanya kazi, wahariri wanalikamilisha kama kiwango kiitwacho Ethereum Request for Comment (ERC). Kisha namba ya EIP inaongezwa ili kukamilisha jina la kiwango, k.m. ERC-20 au ERC-721.

### Je, ether (ETH) inafuata kiwango cha tokeni?

Hapana. Kwa kweli, ETH inajulikana kama "sarafu" si "tokeni", maana yake ina [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics) yake mwenyewe.

### Je, mtu yeyote anaweza kuzindua tokeni?

Ndiyo. Ethereum ni mfumo usiohitaji ruhusa na mtu yeyote anaweza kuzindua tokeni inayobadilishana au isiyobadilishana. Hata hivyo, utahitaji ujuzi wa kiufundi au zana zisizohitaji msimbo.

### Tokeni mbili zikiwa na jina moja, najuaje ipi ni rasmi?

Ili kutambua tokeni halisi, unapaswa kukagua anwani ya mkataba iliyotumika kuchapisha tokeni unayotaka kutumia na kuilinganisha na nyaraka rasmi za mradi. Kwa njia hii utahakikisha hutumii mkataba wa tokeni hatari unaoweza kumaliza mkoba wako.

### Je, kuna viwango vingine vya tokeni kwenye Ethereum zaidi ya ERC-20, 721 na 1155?

Ndiyo. Vingine vinatumika sana, kama [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), kiwango cha pamoja cha tokeni za `hifadhi` zinazowakilisha amana zinazozalisha faida katika DeFi. Viwango vipya zaidi vinashughulikia `akaunti mahiri`, vikiruhusu mkoba kuendesha msimbo wake mwenyewe. Vingine, kama [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) na [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), havikuenea au vinahudumia matumizi machache sana.

---

**Waandishi**

**[Musharraf](https://x.com/musharrafff)** ni mwanzilishi mwenza wa Unhashed. Anasaidia miradi ya web3 kwa mkakati na utekelezaji wa maudhui.

**[Tetranome](https://twitter.com/Tetranome)** ni Project Champion katika Bankless Academy, akijikita katika matumizi, kiolesura, muundo na maudhui.

**Wahariri**

**[Trewkat](https://twitter.com/trewkat)** ni mwandishi na mhariri katika BanklessDAO. Anapenda kujifunza kuhusu kripto na NFT, hasa jinsi bora ya kuwasilisha maarifa haya kwa wengine.

**Mfadhili**

Makala hii isiyo na udhamini ni sehemu ya elimu yako ya bure ya Bankless Academy. Kusanya makala ili kuunga mkono maudhui yajayo!
