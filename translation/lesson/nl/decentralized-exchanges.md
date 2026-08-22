---
TITLE: Gedecentraliseerde beurzen
DESCRIPTION: Ontdek hoe beurzen op basis van smart contracts permissionless token swaps mogelijk maken!
LANGUAGE: Nederlands
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

# Wat is een gedecentraliseerde beurs?

Gedecentraliseerde beurzen (DEX's) zijn onchain marktplaatsen waar Explorers veilig cryptovaluta ruilen met andere gebruikers, terwijl ze zelf de controle over hun wallet-tegoeden houden. Deze peer-to-peer trades verlopen via publiek toegankelijke smart contracts die gebruikers verbinden met grote gemeenschappelijke kluizen vol tokens. Die kluizen heten `liquiditeitspools`. DEX's vind je op bijna elke blockchain, ook op Ethereum Layer 1 en 2.

Tokens ruilen is een essentieel onderdeel van `DeFi`. In DeFi vind je meer variatie en toepassingen in tokens dan op welk ander type beurs dan ook. Sommige gebruikers kopen tokens om toegang te krijgen tot onchain producten en diensten. Anderen kopen tokens als investering. Sommige tokens geven houders stemrecht over de richting van een project, net zoals aandelen in een traditioneel bedrijf! Wat je motivatie ook is, in DeFi ga je regelmatig DEX's bezoeken.

Laten we leren hoe ze werken en hoe je er het meeste uit haalt.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Gecentraliseerde en gedecentraliseerde beurzen

Laten we de verschillen bekijken tussen de technologie van een gecentraliseerde beurs (zoals Coinbase, Binance of Kraken) en die van een gedecentraliseerde beurs (zoals Uniswap of PancakeSwap).

Op gecentraliseerde beurzen (`CEX's`) kun je handelen en investeren in cryptovaluta zonder zelf het blockchain-ecosysteem in te stappen. Omdat je account bij de CEX geregistreerd staat, beheert die jouw privésleutels en tegoeden: je bent afhankelijk van hun beheer, hun regels en de risico's van hun bedrijfsmodel.

Op gedecentraliseerde beurzen (`DEX's`) handel je in cryptovaluta volledig in self-custody: precies waar blockchains oorspronkelijk voor bedoeld zijn. Dankzij het peer-to-peer model ben je zowel consument als aanbieder, met toegang tot financiële kansen die vroeger alleen voor de financiële elite waren. Het blockchain-systeem is transparant en censuurbestendig: niemand kan je toegang bevriezen of je trades terugdraaien. Hacks blijven een risico; daar komen we later in deze les op terug.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Welke van de volgende stellingen over cryptobeurzen is waar?

- [ ] Achter een DEX zit geen team.

> ℹ️ DEX's hebben wel degelijk ontwikkelteams, maar hun invloed op het project is beperkt.

- [ ] Op een CEX kun je alleen geld verliezen door een slechte trade.

> ℹ️ Ook CEX's kennen risico's. In 2022 stortte de beurs FTX in en verloren bijna alle gebruikers hun tegoeden.

- [x] Op een DEX handel je in self-custody, op een CEX niet.

> ℹ️ Tenzij expliciet anders vermeld, bezit een CEX jouw privésleutels.

# Gedecentraliseerde applicaties

DEX's zijn een soort `dApp`: een gedecentraliseerde applicatie die op een blockchain draait. Een internetapplicatie geldt pas als 'gedecentraliseerd' als iedereen haar zonder onderscheid mag gebruiken, interacties zonder tussenpersoon worden verwerkt en de code publiek inzichtelijk is.

dApp-diensten draaien op smart contracts: regels code die een onchain actie van een gebruiker omzetten in een voorspelbare onchain reactie. De Ethereum Foundation vergelijkt smart contracts met snoepautomaten: je voert het nummer van het gewenste product in, betaalt het juiste bedrag en krijgt de verwachte uitvoer (je snack), zonder dat er een ander mens aan te pas komt.

De smart contracts van een DEX verwerken allerlei opdrachten, zoals tokens swappen, stemmen, of `liquiditeit` toevoegen en weghalen.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Gedecentraliseerde applicaties (vervolg)

DEX's volgen dezelfde logica als de snoepautomaat: ze nemen het input-token van de gebruiker aan en geven het gewenste token terug. Andere voorbeelden van dApps zijn:

🎟️ **Stem-dApps**: kennen de stem van een gebruiker toe aan een gekozen partij.

📦 **Bridge-dApps**: verplaatsen cryptovaluta van een gebruiker van het ene blockchain-netwerk naar het andere.

🤝 **Leen- en uitleen-dApps**: verstrekken leningen aan gebruikers die aan bepaalde voorwaarden voldoen.

Smart contracts zijn accounts op Ethereum: ze hebben een adres en een saldo, en voeren automatisch acties uit zodra een overdracht met opdracht ze activeert. Een DEX is een geprogrammeerd Ethereum-account met meerdere beschikbare functies.

`dApps` gebruiken meestal een website als visuele interface, zodat gebruikers makkelijk met de onderliggende smart contracts kunnen werken. Ligt de website eruit, dan kun je met wat ervaring nog steeds bij het smart contract!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Welke eigenschappen heeft een dApp nodig om als gedecentraliseerd te gelden?

- [ ] Permissionless: open toegang voor alle gebruikers.

> ℹ️ Dit is een eigenschap van een dApp, maar niet de enige.

- [ ] Autonoom: interacties hebben geen tussenpartij nodig.

> ℹ️ Dit is een eigenschap van een dApp, maar niet de enige.

- [ ] Transparant: de smart contract-code is publiek beschikbaar.

> ℹ️ Dit is een eigenschap van een dApp, maar niet de enige.

- [x] Alle bovenstaande.

> ℹ️ Ethereum-dApps worden gewaardeerd omdat ze permissionless, autonoom en transparant zijn.

# Automated Market Makers

Op traditionele markten en `CEX's` gebruikt je custodian een `orderboek`: een database vol koop- en verkooporders. De CEX koppelt jouw order aan die van iemand anders. Meestal betaal je een vaste of oplopende commissie per trade, en je weet nooit of de geheime matchingmethode jou wel de beste deal heeft opgeleverd.

De meeste `DEX's` gebruiken 'Automated Market Maker'-technologie (`AMM`), het meest gebruikte ontwerp voor token swaps: een systeem dat de prijs van je trade bepaalt met een publiek algoritme. Sommige nieuwere DEX's gebruiken juist orderboeken of intent-systemen. Omdat het AMM-algoritme open source is, kan iedereen het begrijpen, kopiëren en verbeteren. Dat zorgt voor gezonde concurrentie en constante innovatie.

AMM's leiden trades door `liquiditeitspools` in plaats van koop- en verkooporders rechtstreeks aan elkaar te koppelen. Deze gemeenschappelijke tokenkluizen verzamelen tokens en geven ze weer uit op basis van gebruikersinteracties, met elke stap zichtbaar op de publieke blockchain.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Wat is een voordeel van AMM's ten opzichte van een traditioneel orderboek?

- [ ] Een AMM-trade is sneller dan een orderboek-trade.

> ℹ️ Als je de bevestigingstijd van het netwerk meetelt, is dit niet per se waar.

- [ ] AMM's verbinden je rechtstreeks met de andere gebruiker.

> ℹ️ AMM's leiden trades door gemeenschappelijke tokenkluizen (liquiditeitspools), niet rechtstreeks tussen gebruikers.

- [x] Je kunt eenzijdige trades van anderen opsporen en voorkomen.

> ℹ️ Door de transparantie van AMM's kunnen platforms kwaadaardige acties veel moeilijker verbergen, en gebruikers al helemaal!

# Token swaps

Cryptotrades op de blockchain heten `token swaps`. Deze smart contract-interacties zetten de ene cryptovaluta om in de andere via de `liquiditeitspools` van een AMM. Door een `handelsroute` te vormen, een pad door de juiste liquiditeitspools, ruilt een DEX-smart contract jouw input-token voor het gewenste output-token. Pools bevatten meestal maar twee tokens en niet elk `tokenpaar` heeft een pool, dus een route kan door meerdere pools lopen om je swap uit te voeren.

Om een smart contract toegang te geven tot je wallet, geef je het toestemming om tot een bepaald (of onbeperkt) bedrag op te nemen. Met deze `token allowances` kunnen vertrouwde contracts transacties uitvoeren zonder jouw privésleutel. Toestemming geven kost gas, dus permissies blijven openstaan voor later gebruik: één reden om te traden vanuit de ene wallet en te sparen in een andere. In onze les [Token allowances beheren](https://app.banklessacademy.com/lessons/managing-token-allowances) leer je allowances controleren en intrekken!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Token swaps (vervolg)

Laten we een voorbeeldswap bekijken om het toestemmings- en ruilproces te begrijpen. Het voorbeeld is een swap van USDC naar OP op Velodrome, een grote DEX op het Optimism-netwerk. Deze trade loopt vaak via twee pools, omdat de USDC/OP-`liquiditeitspool` minder kostenefficiënt is:

1. Eerst geef je het juiste Velodrome-smart contract toestemming om USDC uit je wallet op te nemen.
2. Je dient je swap-transactieverzoek in bij Velodrome.
3. De transactie wordt geaccepteerd: Velodrome haalt het opgegeven bedrag aan USDC uit je wallet en stort het in de USDC/ETH-liquiditeitspool. De tegenwaarde in ETH verlaat deze eerste liquiditeitspool en gaat naar de ETH/OP-liquiditeitspool. Tot slot gaat er OP van de tweede liquiditeitspool naar jouw wallet-adres.

De swap-transactie is voltooid. Je USDC-tokens zijn geswapt voor OP, via ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

AMM's kunnen een trade via meerdere liquiditeitspools leiden, in één enkele transactie.

- [x] Waar

> ℹ️ Correct! Je betaalt misschien een hogere netwerkvergoeding, maar de acties zijn gebundeld in één transactie.

- [ ] Onwaar

> ℹ️ Onjuist. Bekijk de vorige slide om te zien waarom.

# Wat is liquiditeit?

Liquiditeit betekent in crypto: het vermogen van een marktplaats om digitale assets tegen eerlijke prijzen te laten kopen en verkopen. Bij hoge liquiditeit zijn prijzen stabieler; bij lage liquiditeit zijn ze volatieler. Omdat gebruikers afkomen op eerlijke prijzen, streven `DEX's` naar hoge liquiditeit in al hun liquiditeitspools.

Hoge liquiditeit betekent dat er veel tokens in de liquiditeitspool zitten, meestal met een 50/50-waardeverdeling tussen de twee tokens die gebruikers in en uit de pool traden. Een USDC/ETH-pool verwerkt bijvoorbeeld alle trades tussen dit `tokenpaar` op het platform.
Hoe meer tokens er zijn, hoe minder één trade de 50/50-balans verstoort, wat prijzen stabiel houdt. De mate waarin een trade die balans verstoort, heet `prijsimpact`.

Als Explorer wil je een zo laag mogelijke prijsimpact op je trades, zodat je de beste deal krijgt! Je wilt dus hoge, gebalanceerde liquiditeit.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Liquiditeitsverschaffers

Hoge `liquiditeit` is essentieel voor het succes van een DEX. Maar er is maar een beperkte hoeveelheid liquiditeit in het crypto-ecosysteem, dus elke DEX strijdt om zoveel mogelijk liquiditeit binnen te halen. Waar komt die liquiditeit vandaan?

In een gedecentraliseerd ecosysteem worden DeFi-gebruikers beloond om liquiditeit aan een pool te leveren en zo de TVL (total value locked) van een platform te verhogen. De vergoedingen die traders in de pool betalen, worden verdeeld onder de LP's (liquidity providers), naar rato van de geleverde liquiditeit. Je leest het goed: door je tokens uit te lenen aan een DEX-liquiditeitspool kun je passief inkomen verdienen.

Er komt van alles kijken bij het worden van een `LP`; daar gaan we in toekomstige content op in. Weet voor nu dat de hoge APR's (jaarlijkse rentepercentages) bij DEX-liquiditeitspools niet gegarandeerd zijn, en dat verlies mogelijk is.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Maak de stelling af: "Als de liquiditeit __________."

- [ ] hoog is, is de volatiliteit hoog.

> ℹ️ Onjuist. Probeer het opnieuw.

- [ ] laag is, is de volatiliteit laag.

> ℹ️ Onjuist. Probeer het opnieuw.

- [x] laag is, is de volatiliteit hoog.

> ℹ️ Precies! Liquiditeit en volatiliteit zijn doorgaans omgekeerd gecorreleerd.

# Knowledge Check 6

Hoe stimuleren DEX's gebruikers om liquiditeit te leveren?

- [ ] Een verzekering tegen handelsverliezen.

> ℹ️ CEX's noch DEX's beschermen je tegen verliezen op een slechte investering.

- [x] Een deel van de platformkosten en/of bonustokens.

> ℹ️ De kosten voor het gebruik van de DEX worden vaak verdeeld onder belanghebbenden, waaronder LP's. Sommige platforms geven zelfs extra bonussen.

- [ ] Toegang tot privé-liquiditeitspools.

> ℹ️ Privé-liquiditeitspools bestaan niet; weinig verkeer zou waarschijnlijk te weinig rendement opleveren.

- [ ] Alle bovenstaande.

> ℹ️ Er is hier maar één juist antwoord; weet jij welk?

# Platformkosten

Zowel CEX's als DEX's rekenen kosten voor hun diensten, en ook interactie met de blockchain is niet gratis. Dit zijn vijf veelvoorkomende kosten om mee te wegen bij je platformkeuze.

🏷️ **Platformkosten**: CEX's bepalen hun eigen handelscommissies; bij DEX's verschillen de poolkosten per pool (vaak een fractie van een procent). Het grote verschil: DEX-kosten zijn onchain zichtbaar voor iedereen.

🌐 **Netwerkkosten**: blockchains rekenen gas fees bovenop de dApp-transactie. Je beperkt deze kosten door het netwerk in rustige periodes te gebruiken. Etherscan.io heeft een realtime gas-schatting voor Ethereum Mainnet: [Etherscan.io](https://etherscan.io/gastracker). Op Layer 2's zijn de kosten veel lager; vergelijk netwerken op [growthepie](https://www.growthepie.com/).

📦 **Bridge-kosten**: zowel CEX's als blockchain-bridges rekenen kosten om cryptovaluta van het ene blockchain-netwerk naar het andere te verplaatsen. Voor CEX's: bekijk de informatie op hun site. Bridge-dApps tonen een kostenschatting voordat je de overdracht bevestigt.

💹 **Wisselkoersen**: koop je cryptovaluta rechtstreeks met fiat op een CEX of DEX, let dan op wisselkoersen die afwijken van de marktprijs.

🧊 **Slippage**: prijzen bewegen snel, dus DEX's laten ruimte voor schommeling bij een swap: dit heet `slippage` (instelbaar, meestal 0,5-2%). Je kunt tot dat percentage verliezen op een trade, maar een te lage instelling kan je trade laten mislukken.

Doe altijd je eigen onderzoek voordat je gaat traden, zodat je de kosten en afwegingen van een platform begrijpt.

# Voordelen van DEX's

We hebben veel theorie behandeld in deze les, maar misschien vraag je je nog af of DEX's iets voor jou zijn. In het algemeen heb je waarschijnlijk baat bij gedecentraliseerde beurzen als:

- 🔑 Je zelf de controle over je digitale assets wilt houden.
- 🔒 Je je assets op de blockchain wilt beveiligen, veilig voor CEX-instortingen.
- ⌛ Je 24/7 toegang wilt tot de cryptomarkt.
- 👛 Je toegang wilt tot een breder aanbod aan cryptovaluta's.
- 🤑 Je interesse hebt in het leveren van liquiditeit.
- 🛂 Je je niet op elk platform wilt registreren en `KYC` wilt doorlopen.
- ⚔️ Je de extra risico's en beloningen van Decentralized Finance opzoekt.

Dat gezegd hebbende: bijna elke DeFi-gebruiker heeft een account op een gecentraliseerde beurs. CEX's bieden namelijk makkelijke onramps en offramps van en naar de traditionele bankwereld; je krijgt eenvoudig geld van je bankrekening naar de blockchain en andersom. [Ryan Sean Adams](https://twitter.com/RyanSAdams) vergelijkt het met een openbaar toilet: *"Je gaat naar binnen, je doet je ding, je gaat weer weg."*

Dat is handig: je kunt beginnen met een CEX-account en langzaam overstappen naar DeFi naarmate je er zekerder in wordt.

# Risico's van DEX's

Een DEX gebruiken brengt ook risico's met zich mee. Dit zijn een paar van de belangrijkste:

🐞 **Smart contract-risico**: audits verkleinen de kans op bugs in smart contracts, maar sluiten ze niet uit: in 2025 verloor een grote DEX die door meerdere bureaus was geaudit 128 miljoen dollar door een subtiele bug in de code. In het slechtste geval verlies je tot je volledige trade-bedrag. Kies voor vertrouwde, grondig geauditeerde smart contracts.

💰 **Self-custody-risico**: jij alleen bent verantwoordelijk voor je privésleutels, dus je kunt een hele wallet verliezen door diefstal, scams of een kwijtgeraakte seed phrase. Beperk daarom het risico met een multi-wallet-strategie en bewaar altijd een kopie van je seed phrases op een veilige plek in de echte wereld.

🥪 **Sandwich attacks**: een hoge slippage-instelling vergroot de kans dat frontrunners `sandwich attacks` tegen je opzetten. Bij een sandwich attack kun je tot je slippage-percentage verliezen op een trade. In toekomstige content leggen we uit hoe je je hiertegen beschermt.

Alle voordelen en risico's afgewogen, past een CEX misschien beter bij je als:

- 🎓 Je nog aan het begin van je cryptoreis staat en de risico's en beloningen nog leert kennen.
- ⚖️ Je weinig en met kleine bedragen tradet, waardoor blockchain-kosten onrealistisch hoog uitpakken.
- 🏰 Je je tegoeden liever aan een beurs toevertrouwt dan er zelf verantwoordelijk voor te zijn.

Sommige gebruikers kiezen een hybride aanpak om hun totale risico te verlagen: ze kopen en verkopen cryptovaluta via een CEX, maar bewaren die op de blockchain zelf.

# Knowledge Check 7

Waarom zou je een gedecentraliseerde beurs verkiezen boven een gecentraliseerde?

- [ ] Je wilt tokens die niet op een gecentraliseerde beurs staan.

> ℹ️ Dit is een eigenschap van een DEX, maar niet de enige.

- [ ] Je wilt volledige controle houden over de geruilde tegoeden.

> ℹ️ Dit is een eigenschap van een DEX, maar niet de enige.

- [ ] Je wilt toegang tot tools en kansen die je elders niet vindt.

> ℹ️ Dit is een eigenschap van een DEX, maar niet de enige.

- [x] Alle bovenstaande.

> ℹ️ Precies! DEX's bieden al deze voordelen ten opzichte van CEX's.

# Een DEX kiezen

Er zijn veel gedecentraliseerde beurzen in DeFi, en de ene is beter dan de andere. Weeg deze vijf factoren mee bij je keuze voor een DEX:

🥇 **Legitimiteit**: staat de partij bekend om betrouwbaarheid, kwaliteit en een lange staat van dienst?

⛲ **Liquiditeit**: is de `TVL` van de liquiditeitspool hoog genoeg om prijsimpact te beperken?

🖱️ **Gebruiksgemak**: is de interface makkelijk te gebruiken?

🔐 **Veiligheid**: zijn de smart contracts door meerdere auditors gecontroleerd?

🎁 **Beloningen en functies**: zijn er loyaliteitsbeloningen voor het gebruiken van de beurs of het leveren van liquiditeit? Kun je meestemmen in de governance?

Bekende namen die hier hoog scoren zijn Uniswap, Curve, Velodrome en PancakeSwap. Je stapt eenvoudig van de ene DEX naar de andere tot je een paar favorieten hebt! Voor de les-quest gebruiken we Velodrome, een gevestigde DEX op het Optimism-netwerk. Hij is makkelijk in gebruik, en omdat hij op een Layer 2 draait zijn de kosten veel redelijker!

# Best practices voor DEX's

Voordat je een dApp gebruikt, zijn er een paar best practices om je tegoeden veilig te houden:

👩‍💻 Controleer de link van een dApp via het officiële X-account (Twitter) van het project (gouden vinkje) of een vertrouwde derde partij, en sla hem op als bladwijzer. Veel DeFi-scams beginnen met een neplink, zelfs op populaire zoekmachines.

🔓 Geef je onchain `token allowances`, beperk de allowance dan tot je trade-bedrag. Veel DEX's gebruiken nu goedkeuringen via handtekeningen die alleen jouw trade dekken: zie [Token allowances beheren](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Gebruik dApps niet vanuit je HODL-wallet; gebruik een aparte wallet alleen voor dApps. Onze les [Web3-veiligheid](https://app.banklessacademy.com/lessons/web3-security) behandelt wallet-strategieën.

Nu ben je klaar om met een gedecentraliseerde beurs aan de slag te gaan!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Hoe weet je zeker dat je een betrouwbare DEX hebt gekozen?

- [x] Door reputatie te checken en alleen vertrouwde URL's te gebruiken.

> ℹ️ Precies! Controleer zelf de online reputatie van de DEX en volg alleen URL's van een vertrouwde partij.

- [ ] Door bij het eerste gebruik een kleine testinteractie te doen.

> ℹ️ Eén interactie met een kwaadaardig smart contract kan je hele wallet leegtrekken.

- [ ] Beide bovenstaande.

> ℹ️ Onjuist. Eén interactie met een kwaadaardig smart contract kan je hele wallet leegtrekken.
