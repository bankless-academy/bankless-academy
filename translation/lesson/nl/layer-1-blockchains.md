---
TITLE: Layer 1-blockchains
DESCRIPTION: Begrijp hoe Layer 1-blockchains werken en ontdek hun beperkingen!
LANGUAGE: Nederlands
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

# Inleiding

Er ontstaan problemen zodra meer gebruikers een `blockchain`-netwerk willen gebruiken dan het aankan. Grote vraag naar `blockspace` kan tijdelijk zijn, of aanhouden zolang gebruikers de blockchain graag willen blijven gebruiken. Bij hoge vraag bieden gebruikers tegen elkaar op om hun transacties snel verwerkt te krijgen. De kosten stijgen, waardoor gebruikers met minder kapitaal buiten de boot vallen.

Deze les verkent waarom Ethereum en andere blockchains onderhevig zijn aan het `blockchain-trilemma`, hoe dit trilemma de kern is van de problemen hierboven, en hoe het de plannen van Ethereum beïnvloedt om alle gebruikers te bedienen. We bekijken welke afwegingen verschillende blockchains rond het trilemma hebben gemaakt, en wat die keuzes betekenen voor Academy Explorers.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Blockchain-trilemma

Zoals het woord **tri**lemma al aangeeft, zijn er drie eigenschappen van blockchains die met elkaar concurreren. Je kunt ze niet alle drie tegelijk optimaliseren.

Dat zijn: `veiligheid`, `schaalbaarheid` en `decentralisatie`.

Wil een blockchain dienen als neutrale basis voor een monetair systeem op wereldschaal, dan moet hij in alle drie uitblinken. Een monetair systeem moet veilig zijn tegen fraude, dankzij decentralisatie beschermd zijn tegen censuur, en schaalbaar genoeg zijn voor meer dan 8 miljard mensen in een wereldwijde samenleving.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Het blockchain-trilemma beschrijft de relatie tussen:

- [ ] Ethereum, Bitcoin en altcoins

> ℹ️ Probeer het opnieuw! Het trilemma gaat over concurrerende eigenschappen binnen een blockchain, niet over concurrerende blockchains.

- [ ] veiligheid, censuur en fraude

> ℹ️ Probeer het opnieuw! Veiligheid is er één van de drie, maar censuur en fraude zijn bedreigingen, geen eigenschappen van het trilemma.

- [x] decentralisatie, schaalbaarheid en veiligheid

> ℹ️ Correct! Deze drie eigenschappen concurreren met elkaar, waardoor een blockchain ze nooit alle drie tegelijk kan optimaliseren.

- [ ] veiligheid, snelheid en lage kosten

> ℹ️ Probeer het opnieuw! Snelheid en kosten horen bij schaalbaarheid, slechts één van de drie: veiligheid, schaalbaarheid en decentralisatie.

# Veiligheid en consensus

Veiligheid is de meest fundamentele eis voor een publieke blockchain. Computers in een netwerk (zoals een blockchain-netwerk) moeten het eens zijn over welke transacties echt hebben plaatsgevonden om te kunnen samenwerken; die overeenstemming heet `consensus`. Een blockchain is veilig als aanvallers het netwerk niet kunnen verhinderen om het over die waarheid eens te worden. Consensusalgoritmes zijn ontworpen om zulke aanvallen te weerstaan.

Ketens zoals Bitcoin gebruiken `Proof-of-Work`-consensus en beschermen deze overeenstemming door blokproductie zeer competitief te maken; elke blokproducent racet om een rekenpuzzel op te lossen. Wie het eerst slaagt, mag het volgende blok maken en ontvangt de bijbehorende `blokbeloning`. De recente geschiedenis van de keten herschrijven zou enorme investeringen in rekenkracht en energie vergen; een aanvaller zou waarschijnlijk meer kwijt zijn dan het oplevert.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Blockchain-consensus voor cryptovaluta's is:

- [ ] Hoe nodes het eens worden over wat er onchain is gebeurd

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Belangrijk voor iedereen in het ecosysteem om fraude te voorkomen

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Beveiligd via economische prikkels

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Consensus is hoe nodes het eens worden over de waarheid, en economische prikkels maken een aanval duurder dan hij oplevert.

# Veiligheid en aanvallen

Een mogelijke aanval op blockchain-consensus is een `51%-aanval`; een aanvaller met de meerderheid van de consensusmacht van een netwerk kan recente transacties terugdraaien om dezelfde coins twee keer uit te geven, of nieuwe transacties censureren. Handtekeningen vervalsen of andermans geld uitgeven kan niet. Die meerderheid betekent 51% van de rekenkracht bij Proof-of-Work en 51% van de `stake` bij Proof-of-Stake: een enorme kapitaalinvestering. En bij Proof-of-Stake wordt aantoonbaar valsspelen, zoals twee conflicterende blokken ondertekenen, bestraft door die stake te vernietigen (`slashing` genoemd); een aanvaller verliest waarschijnlijk meer dan hij wint.

Bij `Proof-of-Stake`-consensus wordt de blokproducent niet via competitie gekozen, maar willekeurig aangewezen. Net als bij Proof-of-Work zorgt het consensusalgoritme ervoor dat geen enkele partij regelmatig het recht kan "winnen" om een nieuw `blok` te maken.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Het einddoel van een 51%-aanval is:

- [ ] Miningactiviteiten verstoren

> ℹ️ Probeer het opnieuw! De aanval richt zich op de consensus zelf: transacties terugdraaien of censureren, niet miners verstoren.

- [x] Coins dubbel uitgeven of transacties censureren

> ℹ️ Correct! Met de meerderheid van de consensusmacht kan een aanvaller recente transacties terugdraaien of nieuwe blokkeren.

- [ ] Een nieuwe cryptovaluta creëren

> ℹ️ Probeer het opnieuw! Iedereen kan een nieuwe cryptovaluta maken zonder een bestaand netwerk aan te vallen.

- [ ] De overige 49% uitschakelen

> ℹ️ Probeer het opnieuw! De andere deelnemers worden niet verwijderd. De meerderheid wordt gebruikt om transacties terug te draaien of te censureren.

# Schaalbaarheid - doorvoer

`Schaalbaarheid` verwijst naar het vermogen van een blockchain om veel transacties snel te verwerken. Twee onderdelen bepalen de schaalbaarheid van een blockchain: doorvoer en finaliteit.

1) `Transactiedoorvoer`: hoeveel transacties een blockchain tegelijk kan verwerken, meestal gemeten in transacties per seconde (`TPS`).

Stel je een bushalte voor waar veel mensen wachten en er elke minuut meer aankomen; ze willen allemaal reizen. Maar er passen maar zoveel mensen in een bus. Om de halte sneller leeg te krijgen, heb je grotere bussen nodig (meer mensen) of moeten de bussen vaker rijden (minder tijd). Zo werkt het ook wanneer veel transacties in de beperkte `blockspace` van elk blok moeten passen. Bekijk deze visualisatie met live data op [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Wat is waar in de bushalte-analogie voor blockchain-transacties?

- [ ] Mensen (transacties) worden gegroepeerd in bussen (blokken)

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] In elke bus (blok) past een beperkt aantal mensen (transacties)

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Meer mensen (transacties) vergt grotere of meer bussen (blokken)

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Transacties vullen beperkte blockspace zoals passagiers bussen vullen. De rij sneller wegwerken vraagt grotere of frequentere blokken.

# Schaalbaarheid - finaliteit

Het tweede aspect van blockchain-schaalbaarheid is:

2) `Finaliteit`: wanneer kunnen we er redelijk zeker van zijn dat een transactie niet meer wordt gewijzigd of teruggedraaid?

Bij Proof-of-Work-ketens zoals Bitcoin meet je finaliteit in blokken: hoe meer blokken er na jouw transactie aan de keten zijn toegevoegd, hoe zekerder je weet dat ze niet wordt teruggedraaid. Onthoud: een veilig consensusalgoritme maakt het erg duur om oude blokken te wijzigen, en dat wordt duurder naarmate iemand verder terug wil. Bitcoin maakt ongeveer elke 10 minuten een nieuw `blok`, dus wachten op meerdere bevestigingen duurt ongeveer een uur. Ethereums Proof-of-Stake kiest een andere route: `validators` stemmen om blokken te finaliseren, en na zo'n 13 minuten (twee `epochs` aan stemmen) is een transactie definitief.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Decentralisatie verdeelt de macht

`Decentralisatie` is het laatste onderdeel van het blockchain-trilemma: het verplaatsen van controle en besluitvorming van één partij naar een verspreid netwerk van velen. Decentralisatie is het fundamentele principe dat blockchains `permissionless` en `censuurbestendig` maakt; iedereen kan gedecentraliseerde blockchains gebruiken en iedereen kan er software op bouwen.

Gecentraliseerde platforms zoals Facebook en Twitter kunnen ieders account op elk moment deactiveren. Veel invloedrijke streamers op Twitch of TikTok zijn zonder reden van hun platform verwijderd. Zelfs als gebruikers hun account kunnen terugkrijgen, is dat vaak een lang en pijnlijk proces. Zonder decentralisatie is een blockchain-`grootboek` slechts een financiële spreadsheet op een bankcomputer; de bank bepaalt wie er een rekening mag openen. Een `permissionless` netwerk betekent dat de macht voldoende gedecentraliseerd is; niemand kan iemands toegang afnemen.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Welke van deze stellingen is NIET waar voor decentralisatie?

- [ ] Decentralisatie maakt blockchains censuurbestendig

> ℹ️ Probeer het opnieuw! Deze stelling is waar: zonder één controlerende partij kan niemand het netwerk censureren.

- [ ] Decentralisatie maakt blockchains permissionless

> ℹ️ Probeer het opnieuw! Deze stelling is waar: gedecentraliseerde macht betekent dat niemand iemands toegang kan afnemen.

- [x] Decentralisatie helpt autoritaire machten controle te houden

> ℹ️ Correct! Dit is NIET waar: decentralisatie doet het tegenovergestelde en verdeelt de controle weg van elke afzonderlijke partij.

- [ ] Iedereen overal kan permissionless systemen gebruiken

> ℹ️ Probeer het opnieuw! Deze stelling is waar: permissionless betekent dat niemand de toegang kan worden geweigerd.

# Is het gedecentraliseerd?

Maar of iets gedecentraliseerd is, is niet simpelweg ja of nee. Zijn 10 controlerende partijen gedecentraliseerd? En 1.000? Eén miljoen? Er is geen vaste grens voor "voldoende gedecentraliseerd", dus je kunt decentralisatie het best zien als een spectrum. Naast zwart en wit bestaan er ook veel grijstinten.

We kunnen dus zeggen dat iets "meer of minder gedecentraliseerd is dan iets anders", in plaats van "gecentraliseerd of gedecentraliseerd". Een hoge mate van decentralisatie is nodig om als neutraal monetair systeem censuur door staten te weerstaan. Nieuwere blockchains ruilen decentralisatie vaak in voor schaalbaarheid, maar maken zichzelf zo kwetsbaar voor dezelfde druk van samenlevingen en overheden die volledig gecentraliseerde platforms voelen. Ze kunnen uiteindelijk dezelfde censuur toepassen als gecentraliseerde socialemedianetwerken.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Verschillende blockchains gebruiken verschillende maten van decentralisatie.

- [x] Waar

> ℹ️ Correct! Decentralisatie is een spectrum: elke blockchain kiest hoeveel ervan wordt ingeruild voor schaalbaarheid of andere doelen.

- [ ] Onwaar

> ℹ️ Probeer het opnieuw! Decentralisatie is een spectrum, en elke blockchain maakt daarop zijn eigen afweging.

# Enkele voorbeelden

Elke blockchain benadert het trilemma op zijn eigen manier en maakt afwegingen die passen bij zijn doelen. Bitcoin en Ethereum kiezen voor veiligheid en decentralisatie boven schaalbaarheid, wat leidt tot een lange `finaliteitstijd` bij Bitcoin en beperkte `blockspace` op Ethereum. Als de vraag naar `smart contracts` piekt, vooral voor DeFi, stijgen de kosten op Ethereum; tijdens de piekvraag van 2021 kon één transactie tientallen dollars kosten.

Stijgende kosten boden een kans aan `alternatieve Layer 1's` zoals BNB Chain, die schaalbaarheid boven decentralisatie stelden voor hogere `transactiedoorvoer` en lagere kosten. Derde-generatie-ketens zoals Solana gebruiken nieuwe methoden om het trilemma op te lossen, maar alle blockchains blijven onderhevig aan deze basisbeperkingen. De keuze van elke keten bepaalt zijn ecosysteem, via de fundamentele gevolgen van die keuze.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Wat kunnen we eraan doen?

Als Ethereum kiest voor hoge veiligheid en decentralisatie, hoe kan het dan opschalen om alle gebruikers te bedienen als het wereldwijde financiële netwerk dat het wil worden? De Ethereum-roadmap verkende twee antwoorden: `Layer 2's` en blockchain-`sharding`.

`Layer 2's` vergroten de schaalbaarheid van Ethereum zonder in te leveren op de andere twee onderdelen van het blockchain-trilemma. Het is een extra laag boven op de hoofdblockchain: ze vertrouwen op de hoofdketen voor veiligheid, terwijl gebruikers profiteren van lagere kosten en snellere transacties. In onze Layer 2-les verkennen we ze verder.

`Sharding` zou de blockchain hebben opgesplitst in meerdere parallelle ketens, zoals extra rijstroken op een weg. Ethereum zette dat plan opzij voor een eenvoudiger plan: blokdata goedkoper maken voor Layer 2's (toegevoegd in 2024) en de capaciteit stap voor stap vergroten, zonder veiligheid of decentralisatie op te offeren.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2's:

- [ ] Zorgen voor hun eigen veiligheid

> ℹ️ Probeer het opnieuw! Layer 2's vertrouwen voor hun veiligheid op de hoofdblockchain.

- [x] Vergroten de schaalbaarheid van de hoofdblockchain

> ℹ️ Correct! Layer 2's liggen boven op de hoofdketen en voegen schaalbaarheid toe zonder veiligheid of decentralisatie op te geven.

- [ ] Verhogen de kosten voor gebruikers

> ℹ️ Probeer het opnieuw! Layer 2's doen het tegenovergestelde: gebruikers profiteren van lagere kosten.

- [ ] Verlengen de finaliteitstijd voor gebruikers

> ℹ️ Probeer het opnieuw! Layer 2's bieden snellere transacties, geen tragere.

# De toekomst van Ethereum

Het Ethereum-netwerk blijft zijn schaalbaarheid verbeteren zonder de andere aspecten van het trilemma op te offeren. De Merge naar `Proof-of-Stake`-consensus (2022) verlaagde het energieverbruik van het netwerk met meer dan 99%, en goedkope blokdata voor Layer 2's kwamen in 2024. **Opschalen is doorlopend werk: elke upgrade maakt Ethereum sneller en goedkoper in gebruik, terwijl veiligheid en decentralisatie kernwaarden blijven.** De Ethereum Foundation heeft een uitstekende pagina over de [Ethereum-roadmap](https://ethereum.org/roadmap/).

Ondertussen bouwen veel `Layer 2`-protocollen boven op Ethereum om aan de vraag van gebruikers te voldoen, zonder dat het Ethereum-protocol zelf hoeft te veranderen. Deze Layer 2-protocollen vertrouwen op Layer 1 Ethereum voor gedecentraliseerde veiligheid, terwijl zij voor schaalbaarheid zorgen; de diversiteit aan Layer 2's vormt een gedecentraliseerd ecosysteem! Toonaangevende `rollups` zijn Arbitrum, OP Mainnet en Base; Polygon PoS is een populaire `sidechain` met eigen, losstaande veiligheid.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Ethereum-upgrades omvatten:

- [ ] Layer 2's en goedkopere blokdata voor meer schaalbaarheid

> ℹ️ Probeer het opnieuw! Dit hoort bij de upgrades, maar het is niet het enige.

- [ ] Decentralisatie en veiligheid behouden als kernprincipes

> ℹ️ Probeer het opnieuw! Dit hoort bij de upgrades, maar het is niet het enige.

- [ ] Minder energieverbruik dankzij Proof-of-Stake-consensus

> ℹ️ Probeer het opnieuw! Dit hoort bij de upgrades, maar het is niet het enige.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Layer 2's en blokdata voegen schaal toe, Proof-of-Stake bespaart energie, en veiligheid en decentralisatie blijven kernwaarden.

# Wat betekent dit voor Explorers?

Gebruikers hebben lage kosten nodig om de technologie te leren kennen: lage drempels om in te stappen en goedkope fouten, zeker aan het begin van hun reis. De Ethereum-blockchain is nog niet ideaal, maar zijn waarden maken hem een van de beste kandidaten om de droom van een wereldwijd financieel computersysteem waar te maken. Explorers kunnen leren omgaan met Ethereum zonder enorme kosten; met Layer 2's combineer je de veiligheid en decentralisatie van Ethereum met hogere schaalbaarheid.

De volgende les legt `Layer 2`-oplossingen uit en hoe je ermee begint. Voorwaarts, Explorers!
