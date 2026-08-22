---
TITLE: DEX-aggregators
DESCRIPTION: Duik in DEX-aggregators, liquiditeit en het beurslandschap van DeFi.
LANGUAGE: Nederlands
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

`Gedecentraliseerde beurzen` (DEX's) schrappen de kosten van tussenpartijen en besparen Explorers geld bij het handelen in assets.

Maar wist je, Explorer, dat DeFi-technologie nog meer manieren biedt om te besparen? Met `DEX-aggregators` scan je alle mogelijke trades op verschillende DEX-platforms tegelijk en voer je de beste handelsroute uit, in één handeling. Zo krijg je de beste deal bij een token-`swap`. Net zoals vluchtaggregators je helpen de goedkoopste vlucht te vinden, helpen DEX-aggregators je maximale waarde uit je trade te halen.

Deze les laat zien:

1. Hoe DEX's liquiditeit versnipperen en hoe dat kan leiden tot slechtere koersen.
2. Hoe je met DEX-aggregators meerdere DEX's bekijkt en gebruikt via één interface.
3. Meerdere manieren waarop één aggregator-interface Explorers tijd en geld bespaart.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Hoe liquiditeit prijzen beïnvloedt

De hoeveelheid van een token die op één markt beschikbaar is om te verhandelen, heet de `liquiditeit` van dat token. De beschikbare liquiditeit bepaalt sterk de `prijsimpact` van trades in DeFi: een grote prijsimpact maakt de trade duurder, een lage prijsimpact goedkoper. De meeste mensen handelen het liefst in markten met veel liquiditeit om hun prijsimpact te beperken.

Zie het als een zwembad: hoe meer water (liquiditeit) er is, hoe kleiner de _verandering_ van het waterpeil (prijsimpact) wanneer iemand erin springt of eruit klimt. De grootte van die 'iemand' (de trade) beïnvloedt ook de _verandering_ van het waterpeil (prijsimpact).

# Een voorbeeld van hoe liquiditeit prijzen beïnvloedt

Laten we naar een voorbeeld kijken.

Stel je een token voor dat op meerdere DEX's tegelijk wordt verhandeld. De ene DEX heeft een diepe pool met het grootste deel van de `liquiditeit` van het token, de andere een ondiepe pool met maar een klein deel ervan.

Koopt een Explorer bij beide pools dezelfde hoeveelheid van het token, dan is de `prijsimpact` in de ondiepe pool hoger. Dezelfde trade beslaat daar een veel groter percentage van de totale liquiditeit van de pool, dus beweegt de prijs meer en betaalt de koper meer.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Vul de lege plekken in: om de beste prijs te vinden, handelen mensen het liefst in markten met ________ liquiditeit, zodat hun trades een ________ prijsimpact hebben.

- [ ] goede, maximale

> ℹ️ Probeer het opnieuw! Een maximale prijsimpact maakt de trade juist duurder, niet goedkoper.

- [x] hoge, lage

> ℹ️ Correct! Meer liquiditeit betekent een kleinere prijsimpact, zoals een groter zwembad dat minder verandert als iemand erin springt.

- [ ] lage, goede

> ℹ️ Probeer het opnieuw! Weinig liquiditeit vergroot de prijsimpact en maakt trades duurder.

- [ ] dunne, grote

> ℹ️ Probeer het opnieuw! Dunne liquiditeit zorgt voor een grote prijsimpact, en dat willen handelaren juist vermijden.

# Tekortkomingen van traditionele DEX's: dunne liquiditeit

DeFi blijft groeien, maar er ontstaat een probleem voor gebruikers: hoe meer DEX's er starten, hoe meer de totale hoeveelheid van elk token verspreid raakt. Dit heet dunne liquiditeit.

Denk aan het zwembad: als het beschikbare water (`liquiditeit`) wordt verdeeld over meerdere baden, is het water in elk bad 'dunner' dan het totaal in het ene oorspronkelijke bad.

In de begindagen van DeFi hadden één of twee DEX's bijna alle liquiditeit. In 2020 gingen nieuwe DEX's ermee concurreren; één rivaal trok binnen weken na de lancering ruim 1 miljard dollar aan liquiditeit weg bij Uniswap. Vandaag is liquiditeit verspreid over honderden DEX's op veel blockchains en `Layer 2`-netwerken, wat elke pool verdunt.

Elke trade heeft dus een grotere `prijsimpact` dan toen één DEX bijna alle liquiditeit van het ecosysteem had. Zonder nieuwe innovaties kost handelen op één DEX Explorers meer.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Welke twee factoren bepalen de prijsimpact van een DEX-trade?

- [ ] De gekozen DEX voor de trade en de grootte van de trade

> ℹ️ Probeer het opnieuw! De DEX zelf maakt niet uit. Het gaat om de liquiditeit die in de pool beschikbaar is.

- [ ] Welk token je verhandelt en welke DEX je gebruikt

> ℹ️ Probeer het opnieuw! Niet het token of het DEX-merk bepaalt de prijsimpact, maar liquiditeit en tradegrootte.

- [x] De grootte van de trade en de beschikbare liquiditeit

> ℹ️ Correct! Net als bij een zwembad: de plons hangt af van hoe groot de springer is en hoeveel water er in het bad zit.

- [ ] De beschikbare liquiditeit en welk token je verhandelt

> ℹ️ Probeer het opnieuw! Liquiditeit is één factor, maar de andere is de grootte van de trade, niet het gekozen token.

# Liquiditeit herbundelen met DEX-aggregators

Er zijn grote hoeveelheden `liquiditeit` nodig om prijsimpact te beperken en jou geld te besparen. Met DEX-aggregators laat je trades via meerdere DEX's tegelijk lopen en verlaag je de prijsimpact: een grote trade uit de wallet van een Explorer wordt opgeknipt in meerdere kleine trades over meerdere DEX's.

DEX-aggregators kunnen trades zelfs routeren via een `tussentoken`, of meer dan één, als dat gebruikers een beter resultaat oplevert. Net zoals een vluchtaggregator een extra tussenstop op een ander vliegveld kan voorstellen als dat goedkoper is voor de passagier. Het vinden van de optimale `handelsroute` gebeurt door geavanceerde algoritmes die alle mogelijke paden doorzoeken naar de goedkoopste handelsroute van dat moment.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Handelsroutering bij DEX-aggregators betekent:

- [ ] Trades lopen via speciale afspraken met bepaalde DEX's

> ℹ️ Probeer het opnieuw! Aggregators doorzoeken alle beschikbare DEX's algoritmisch, niet via speciale afspraken.

- [ ] Trades lopen altijd via meerdere DEX's

> ℹ️ Probeer het opnieuw! Aggregators splitsen trades alleen als dat een beter resultaat geeft. Soms biedt één DEX de beste route.

- [ ] Trades lopen alleen via de favoriete DEX van de gebruiker

> ℹ️ Probeer het opnieuw! Vasthouden aan één DEX mist het hele punt. Aggregators zoeken over veel DEX's naar de beste prijs.

- [x] Trades kunnen via meerdere DEX's en tussentokens lopen

> ℹ️ Correct! Algoritmes doorzoeken alle mogelijke paden, inclusief extra 'tussenstops' via tussentokens, naar de goedkoopste handelsroute.

# Hoe gaskosten op Ethereum worden berekend

Even opfrissen hoe gas wordt berekend, voor we zien hoe DEX-aggregators netwerkkosten verlagen. Deze besparingen tellen vooral op het Ethereum-mainnet, waar kosten hoog kunnen zijn; op `Layer 2`-netwerken betaal je meestal maar centen.

Net als benzine voor een auto is `gas` de brandstof om blockchain-code op Ethereum te draaien. Hoe meer berekeningen je doet, hoe meer gas je code nodig heeft. De gasprijs wordt gemeten in heel kleine hoeveelheden Ether, `gwei` genaamd, zoals centen bij een dollar. 1 gwei is een miljardste ether (1 gwei = 0,000000001 ETH).

De totale gaskosten hangen af van hoeveel gas je transactie gebruikt en van de gasprijs per eenheid op dat moment. De formule voor de prijs van een transactie is:
_hoeveelheid gebruikt gas * gasprijs = totale gaskosten_

Stel bijvoorbeeld dat gas 22 gwei per gaseenheid kost en de transactie 120 duizend eenheden gebruikt:
_120.000 * 22 gwei = 2.640.000 gwei_ _**of**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Hoe aggregators gaskosten voor gebruikers verlagen

Trades splitsen zou juist méér transactiekosten opleveren door de extra onchain activiteit, maar geavanceerde aggregators calculeren transactiekosten in bij het bepalen van de handelsroute. Ze simuleren trades offchain, inclusief `gas`-kosten, om `handelsroutes` te vinden die Explorers aan het einde van de interactie de meeste waarde opleveren.

Sommige aggregators gaan nog verder. 1inch, de pionier van DEX-aggregatie, laat professionele fillers tegenwoordig ook concurreren om jouw trade uit te voeren en zelf de gas te betalen (een systeem genaamd Fusion). De gebruiker betaalt vaak helemaal geen gas.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Wat is GEEN manier waarop DEX-aggregators transactiekosten voor gebruikers proberen te verlagen?

- [ ] Transacties offchain simuleren vóór de uitvoering van de trade

> ℹ️ Probeer het opnieuw! Aggregators simuleren trades echt offchain, inclusief gaskosten, om de beste route te vinden.

- [x] DEX's vragen om lagere netwerkkosten voor hun gebruikers

> ℹ️ Correct! Netwerkkosten worden bepaald door de blockchain, niet door DEX's. Niemand kan simpelweg om verlaging vragen.

- [ ] Gaskosten meenemen in de handelsroutering

> ℹ️ Probeer het opnieuw! Geavanceerde aggregators nemen transactiekosten echt mee in hun routeberekeningen.

- [ ] Professionele fillers trades laten uitvoeren en de gas laten betalen

> ℹ️ Probeer het opnieuw! In intent-systemen zoals 1inch Fusion betalen fillers inderdaad de gas voor gebruikers.

# Meta-aggregators

Er bestaan zelfs meta-aggregators van DEX-aggregators! Deze platforms doorzoeken concurrerende DEX-aggregators en tonen gebruikers de beste prijsoffertes. De ingebouwde swapfunctie in wallets zoals MetaMask verzamelt bijvoorbeeld offertes van meerdere aanbieders, waaronder DEX-aggregators zoals 1inch, en rekent daarbovenop een eigen servicevergoeding.

Let op: hoe handig ook, `meta-aggregator`-diensten kunnen extra kosten toevoegen bovenop de netwerkkosten van een transactie, waardoor de totale kosten voor gebruikers stijgen. Explorers: zorg dat je trades niet duurder uitpakken dan je bedoelde.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-aggregators vergelijken meerdere DEX-aggregators om de beste prijzen voor hun gebruikers te vinden.

- [x] Waar

> ℹ️ Correct! Meta-aggregators doorzoeken concurrerende DEX-aggregators en tonen gebruikers de beste prijsoffertes.

- [ ] Onwaar

> ℹ️ Probeer het opnieuw! Zoeken over meerdere DEX-aggregators is precies wat meta-aggregators doen.

# Sandwich attacks vermijden

Gebruikers die rechtstreeks via `DEX's` swappen, kunnen waarde verliezen tot de grens van hun `slippagetolerantie` wanneer bots vlak vóór en na hun trade orders plaatsen om de prijs te bewegen. Deze verliezen heten `sandwich attacks`; alleen al in 2021 kostten ze gebruikers zo'n 235.000.000 dollar. Tegenwoordig beschermen maatregelen zoals `private transactieroutering` en intent-gebaseerd handelen de meeste alledaagse trades, maar een lage slippagetolerantie blijft lonen bij het swappen van tokens.

Gelukkig verlaagt de herbundelde liquiditeit van DEX-aggregators de prijsimpact van een trade. Explorers kunnen hun slippagetolerantie laag houden en meer besparen met DEX-aggregators dan wanneer ze rechtstreeks op een DEX handelen.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Om jezelf te beschermen houd je je slippagetolerantie:

- [x] laag

> ℹ️ Correct! Een lage slippagetolerantie beperkt hoeveel waarde een sandwich attack uit je trade kan halen.

- [ ] hoog

> ℹ️ Probeer het opnieuw! Met een hoge slippagetolerantie kunnen sandwich attacks meer waarde uit je trade halen.

# Meer bescherming tegen sandwiches: OTC-trades

Sommige aggregators, zoals 1inch, bieden zelfs gespecialiseerde `OTC`-diensten (`over the counter`) die volledige bescherming geven tegen sandwich attacks. Met deze optionele diensten handel je rechtstreeks met andere gebruikers, in plaats van via `liquiditeitspools` in DeFi: opnieuw een mooie manier voor Explorers om te besparen.

CoW Swap pakt het anders aan: gebruikers ondertekenen een handelsverzoek (een `intent`), en professionele `solvers` concurreren in `batchveilingen` om dat tegen de beste prijs uit te voeren. Solvers kunnen zelfs twee gebruikers rechtstreeks aan elkaar koppelen, zodat trades standaard beschermd zijn tegen sandwich attacks.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Veel DEX-aggregators bieden welke tool(s) om hun gebruikers geld te besparen?

- [ ] Trades routeren via liquiditeit van meerdere DEX's.

> ℹ️ Probeer het opnieuw! Gebundelde liquiditeit verlaagt de prijsimpact, maar het is niet de enige besparing van aggregators.

- [ ] OTC-trades die volledig beschermen tegen sandwich attacks.

> ℹ️ Probeer het opnieuw! Dit is één manier waarop aggregators gebruikers geld besparen, maar niet de enige.

- [ ] Gaskosten meenemen bij het bouwen van de beste handelsroutes.

> ℹ️ Probeer het opnieuw! Dit is één manier waarop aggregators gebruikers geld besparen, maar niet de enige.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Aggregators bundelen liquiditeit, rekenen gaskosten mee en bieden OTC-trades, alles om gebruikers meer waarde te laten overhouden.
