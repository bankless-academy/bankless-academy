---
TITLE: Misingi ya blockchain
DESCRIPTION: Jifunze kuhusu muundo wa msingi wa teknolojia ya blockchain.
LANGUAGE: Kiswahili
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

# Utangulizi

Teknolojia ya `blockchain` ni njia mpya kabisa ya kuhifadhi na kufuatilia data, huku ikifanya data hiyo ipatikane kwa mtu yeyote. Ni njia ya kupanga data katika orodha moja ya umma ya miamala yote ya zamani, ambayo mtu yeyote anaweza kuiona lakini hakuna anayeweza kuihariri. Orodha hii ya umma ya miamala inaitwa `daftari` la blockchain.

Baada ya kuchunguza matabaka ya blockchain, utaelewa muundo unaoonyeshwa na zana ya blockchain iitwayo `kichunguzi cha bloku`: **orodha** ya bloku, **miamala** iliyomo ndani ya bloku hizo, na **maelezo** ya kila muamala. Ili kuiona ikifanya kazi, jaribu [Etherscan](https://etherscan.io/), kichunguzi maarufu cha bloku cha Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Muundo wa blockchain

Neno blockchain linaweza kutumika kama nomino (blockchain ya Bitcoin) au kama kivumishi (teknolojia ya blockchain). Kwa vyovyote vile, `blockchain` inamaanisha muundo mzima ambao sarafu za kripto zimejengwa juu yake.

Tukikaribia kutoka nje, kuna ngazi 3 za muundo ndani ya blockchain:

1. `Blockchain` nzima imeundwa na bloku zilizounganishwa kwa mfuatano
2. `Bloku` zimeundwa na makundi ya miamala yaliyowekwa pamoja
3. `Miamala` ni uhamishaji wa thamani, au maagizo kwa programu, kati ya `anwani` kwenye mtandao

Ngazi hizi tatu kwa pamoja zinaunda daftari la kriptografia: historia isiyoweza kubadilishwa ya miamala yote iliyofanyika kwenye mtandao.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Blockchain ni nini?

- [ ] Makundi ya miamala yaliyopangwa yaitwayo bloku

> ℹ️ Jaribu tena! Bloku ni sehemu ya muundo, lakini si jibu pekee sahihi.

- [ ] Rekodi ya pamoja inayoonekana na wote lakini isiyoharirika

> ℹ️ Jaribu tena! Hii ni kweli, lakini si jibu pekee sahihi.

- [ ] Bloku zilizounganishwa kwa mfuatano

> ℹ️ Jaribu tena! Hii inaelezea mnyororo wa bloku, lakini si jibu pekee sahihi.

- [x] Yote yaliyo hapo juu

> ℹ️ Sahihi! Zote tatu ni kweli: blockchain ni rekodi ya pamoja isiyoharirika ya miamala iliyopangwa kwenye bloku zilizounganishwa.

# Kuchunguza daftari

Katika mifumo ya kawaida ya pesa, tunaamini wahusika wa tatu kama benki wafuatilie kiasi cha pesa alichonacho kila mtu. Lakini ili kuwa Bankless kikweli, tunataka mfumo usiotulazimu kuamini taasisi moja iendeshe daftari.

`Daftari` ni orodha ya miamala YOTE iliyowahi kufanyika kwenye blockchain, na kwenye blockchain `za umma` mtu yeyote anaweza kuiona. Makundi tofauti ya miamala kutoka kwenye daftari huunda bloku zinazotengeneza blockchain kwa pamoja.

Miamala mipya inapoongezwa kwenye daftari, salio lililohifadhiwa kwenye kila `anwani` linasasishwa; miamala ya zamani haiwezi kubadilishwa. Ni kama kumruhusu yeyote aone historia ya miamala ya akaunti ya benki ya kila mtu, wakati wowote.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Miamala kwenye daftari

Tuangalie mifano ya miamala:

- Alice anatuma 5 ETH kwa Bob
- Bob anatuma 2 ETH kwa Charlie

Kila muamala unaonyesha *mabadiliko* ya kiasi cha sarafu ya kripto kwa kila anwani, hivyo jumla ya miamala yote NDIYO kiasi cha sarafu ya kripto kilichopo kwenye kila anwani.

---

⇒ Alice amepoteza 5 ETH

⇒ Bob amepata jumla ya 3 ETH (amepokea 5, ametuma 2)

⇒ Charlie amepata 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Lipi kati ya haya ni kweli kuhusu madaftari ya blockchain za umma?

- [ ] Miamala yote ni ya umma na ya zamani haibadiliki

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee ya kweli.

- [ ] Daftari linafuatilia kiasi cha kripto kilichopo kwenye kila anwani

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee ya kweli.

- [ ] Daftari linakua kadri miamala mipya inavyoongezwa

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee ya kweli.

- [x] Yote yaliyo hapo juu

> ℹ️ Sahihi! Daftari ni la umma, halibadiliki, linaonyesha salio la kila anwani, na linakua kwa kila muamala mpya.

# Ugatuzi

Miamala iliyo kwenye daftari la `blockchain` haibadiliki, na zaidi ya hapo inashirikiwa na kusambazwa kwenye mtandao mkubwa wa kompyuta. Ili kuhakikisha hakuna taasisi moja yenye uwezo wa kubadilisha data, nakala za daftari la blockchain zinahifadhiwa kwenye kompyuta nyingi, ziitwazo `nodi`, kote kwenye mtandao.

Data hii inayoshirikiwa ndiyo inayofanya daftari la blockchain kuwa `lililogatuliwa`. Hakuna mamlaka wala taasisi moja inayodhibiti data. Blockchain kama Ethereum pia ni `za umma` kwa sababu daftari linaweza kuonwa na mtu yeyote.

Kwa somo hili, kumbuka tu kwamba data ya daftari inashirikiwa kwenye kompyuta nyingi zinazoendesha mtandao wa Ethereum.

# Knowledge Check 3

Ni nini kinachofanya blockchain igatuliwe?

- [ ] Taasisi moja tu ndiyo inayoweza kuandika kwenye blockchain

> ℹ️ Jaribu tena! Taasisi moja kudhibiti ni kinyume kabisa cha ugatuzi.

- [ ] Inakidhi masharti ya ugatuzi yaliyowekwa na serikali

> ℹ️ Jaribu tena! Ugatuzi unatokana na muundo wa mtandao, si idhini ya serikali.

- [x] Hakuna taasisi moja inayodhibiti daftari lililo kwenye kompyuta nyingi

> ℹ️ Sahihi! Kuhifadhi nakala za daftari kwenye nodi nyingi kunaondoa uwezekano wa taasisi moja kudhibiti au kubadilisha data.

- [ ] Daftari linahifadhiwa kwenye seva moja salama

> ℹ️ Jaribu tena! Seva moja ingekuwa kitovu cha udhibiti. Nakala za daftari zipo kwenye nodi nyingi.

# Muundo wa bloku

Kipengele muhimu cha blockchain ni kwamba data ya miamala ya zamani haiwezi kubadilishwa baada ya kuingizwa kwenye bloku. Sababu ni kwamba kila bloku ina `heshi ya bloku` ya kipekee, kama alama ya kidole, inayotumika kuunganisha bloku moja baada ya nyingine. Hakuna anayeweza kubadilisha miamala ya zamani bila kubadilisha alama hiyo na alama ya KILA bloku inayofuata, kwa sababu kila alama inategemea ile iliyotangulia.

Kwa hiyo kila `bloku` ni kundi la miamala, pamoja na alama ya kipekee (`heshi ya bloku` yake) inayohesabiwa kutokana na yaliyomo ndani yake. Bloku zinaunganishwa kwa sababu kila moja inarejea alama ya bloku iliyotangulia, na kutengeneza block**chain** moja.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Kusudi la heshi ya bloku ni nini?

- [ ] Kusimba data ya bloku ili isisomeke

> ℹ️ Jaribu tena! Data ya bloku inabaki wazi kusomeka. Heshi ni alama ya kidole, si usimbaji fiche.

- [x] Kuunganisha bloku na kuzuia data ya zamani kubadilishwa

> ℹ️ Sahihi! Kila bloku inarejea alama ya bloku iliyotangulia, hivyo kubadilisha data ya zamani kungevunja kila bloku inayofuata.

- [ ] Kuhakikisha miamala inafika kwenye anwani sahihi

> ℹ️ Jaribu tena! Anwani ndizo zinazoamua pesa zinakoenda. Heshi ya bloku inaunganisha bloku.

- [ ] Kuhakikisha blockchain inabaki iliyogatuliwa

> ℹ️ Jaribu tena! Ugatuzi unatokana na kusambaza daftari kwenye nodi nyingi, si heshi ya bloku.

# Ndani ya bloku

Kumbuka, data ya `bloku` ni kundi la miamala iliyowekwa pamoja. Tukiangalia ndani ya bloku moja, tunaona orodha ya miamala na baadhi ya data kuhusu aliyetengeneza bloku hiyo.

Kutoka kwenye mfano wetu wa awali wa daftari, miamala hiyo miwili inaweza kuwekwa kwenye bloku moja, au kutawanywa kwenye bloku kadhaa kwa muda. Lakini haijalishi imo kwenye bloku ipi, yote hatimaye inaingizwa kwenye daftari zima la blockchain.

- Alice anatuma 5 ETH kwa Bob
- Bob anatuma 2 ETH kwa Charlie

Kumbuka pia kwamba kila bloku lazima irejee `heshi ya bloku` iliyotangulia ili kuunganisha blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Ni taarifa gani zilizomo ndani ya bloku?

- [ ] Taarifa zote zilizomo kwenye bloku zilizotangulia

> ℹ️ Jaribu tena! Bloku inarejea tu heshi ya bloku iliyotangulia. Hainakili data yote ya zamani.

- [ ] Chochote kinachohusu blockchain, kwa kuwa bloku haina kikomo

> ℹ️ Jaribu tena! Bloku ni kundi maalum la miamala, si chombo kisicho na kikomo.

- [x] Data ya miamala na rejea ya bloku iliyotangulia

> ℹ️ Sahihi! Bloku ni kundi la miamala pamoja na heshi ya bloku iliyotangulia, ambayo ndiyo inayounganisha bloku.

- [ ] Data yote ya miamala iliyozalishwa ndani ya muda maalum

> ℹ️ Jaribu tena! Miamala inaweza kuwekwa kwenye bloku moja au kutawanywa kwenye bloku kadhaa.

# Miamala mmoja mmoja

Data ya blockchain yoyote ni orodha ya `miamala`, yaani rekodi za pesa zilizohamishwa kati ya watumiaji. Kila muamala lazima utiwe `saini ya kidijitali` ya mtumaji ili uwe halali.

Hiki ndicho unachofanya unapothibitisha muamala kwa mkoba: unatia saini yako ya kidijitali kuidhinisha muamala. Ni sawa na kutia saini hundi au risiti kwa mkono.

Miamala inaweza kuwa rahisi, kama kutuma mali za kripto, au tata zaidi, kama kubadilisha mali au kusakinisha msimbo maalum unaojiendesha unapoamilishwa, ujulikanao kama `mikataba mahiri`.

Mwisho, kila muamala una kitambulisho cha kipekee, `heshi ya muamala`, ambacho hakuna muamala mwingine unao. Hii inarahisisha kurejea muamala wowote baadaye na inahakikisha maelezo yake hayabadiliki.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Data kwenye blockchain ni orodha ya miamala iliyopangwa kwenye bloku. Mifano ya miamala hiyo ni pamoja na:

- [x] Kutuma au kupokea mali za kripto

> ℹ️ Sahihi! Miamala inarekodi pesa zinapohama kati ya watumiaji, kuanzia utumaji rahisi hadi mwingiliano na mikataba mahiri.

- [ ] Kubadilisha ukubwa wa bloku

> ℹ️ Jaribu tena! Ukubwa wa bloku si kitu ambacho muamala unaweza kubadilisha.

- [ ] Kuhariri data ya zamani ya blockchain

> ℹ️ Jaribu tena! Data ya zamani ya blockchain haiwezi kubadilishwa. Hicho ni kipengele cha msingi cha blockchain.

- [ ] Yote yaliyo hapo juu

> ℹ️ Jaribu tena! Ni moja tu kati ya hayo ambayo ni muamala halali wa blockchain.

# Anwani za watumiaji

`Anwani` ni kitambulisho cha umma ambacho mtu yeyote anaweza kukitafuta kwenye blockchain. Kama anwani ya barua pepe, yeyote anaweza kutuma pesa kwenye anwani hiyo, lakini ni yule tu anayedhibiti `ufunguo wa siri` ndiye anayeweza kufungua na kutumia pesa zilizopo hapo.

Kwenye Ethereum, anwani huanza daima na \_0x\_\_\_\_\_\_\_\_\_\_ na ina herufi na tarakimu 42 zinazotokana na `ufunguo wa umma` wa anwani hiyo.

Tunapoangalia muamala mmoja kwenye kichunguzi cha bloku, tunaona anwani ya From: na ya To:. Hii haituambii *watu* wanaodhibiti anwani hizo ni akina nani, lakini inamwezesha mtumiaji yeyote kufuatilia mwendo wa sarafu ya kripto kwenye daftari zima la blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Ni kauli ipi ya kweli kuhusu anwani za blockchain?

- [ ] Ni vitambulisho vya umma vya wahusika kwenye blockchain

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee ya kweli.

- [ ] Kwenye Ethereum daima huanza na *0x*

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee ya kweli.

- [ ] Anayedhibiti ufunguo wa siri anaweza kutumia pesa zilizopo hapo

> ℹ️ Jaribu tena! Hii ni kweli, lakini si kauli pekee ya kweli.

- [x] Yote yaliyo hapo juu

> ℹ️ Sahihi! Anwani ni vitambulisho vya umma, huanza na 0x kwenye Ethereum, na pesa zake hufunguliwa na ufunguo wa siri.
