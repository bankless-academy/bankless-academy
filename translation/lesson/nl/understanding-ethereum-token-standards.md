---
TITLE: Ethereum-tokenstandaarden begrijpen
DESCRIPTION: Leer hoe de asset-sjablonen van Ethereum zowel traditionele als opkomende assetklassen ondersteunen.
LANGUAGE: Nederlands
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
## **Belangrijkste punten**

> * Ethereum-`token`-standaarden zijn vooraf gedefinieerde regels en functies voor het uitrollen van tokens op Ethereum.
>
> * De populairste Ethereum-tokenstandaarden zijn `ERC-20`, `ERC-721` en `ERC-1155`.
>
> * Elke standaard biedt een ander niveau van `fungibiliteit`, waardoor je zowel gangbare als unieke onchain assets kunt creëren.
>
> * Tokenstandaarden maken tokens interoperabel binnen het hele Ethereum-ecosysteem. Zo kunnen dApps heel makkelijk nieuwe tokens integreren, en heb jij er direct toegang toe!

## Wat zijn Ethereum-tokenstandaarden?

Er bestaan miljoenen verschillende cryptotokens op Ethereum en zijn `Layer 2`-netwerken, elk met eigen eigenschappen en toepassingen. Hoe zorgt het netwerk voor naadloze token-ondersteuning in zijn hele dApp-ecosysteem, zonder dat ontwikkelaars uren kwijt zijn aan het integreren van elke token? En hoe begrijpen gebruikers de belangrijkste eigenschappen van die tokens zonder urenlang door documentatie te scrollen?

Maak kennis met tokenstandaarden!

Deze sjablonen en regelsets ondersteunen de `interoperabiliteit` van tokens in het hele Ethereum-ecosysteem. Dat betekent dat dApps maar een paar gangbare tokenstandaarden hoeven te ondersteunen in plaats van duizenden individuele tokens. Voor Explorers zoals jij betekent het dat je aan de onderliggende standaard van een token kunt aflezen wat die token in de basis kan op Ethereum.

Tokenstandaarden bepalen:

* Hoe het smart contract van een token gecodeerd moet worden.

* De gedeelde set functies die elke token van dat type moet ondersteunen, zodat elke dApp ermee overweg kan.

Op dit moment heeft Ethereum drie veelgebruikte tokenstandaarden:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: een standaard voor makkelijk uitwisselbare (of fungibele) tokens.

   Bijv. USDC- en UNI-tokens.

2. **ERC-721**: een standaard voor unieke (of non-fungibele) tokens, bekend als `NFT's`.

   Bijv. Bored Ape Yacht Club-NFT's.

3. **ERC-1155**: een standaard voor zowel fungibele als non-fungibele tokens in hetzelfde contract.

   Bijv. items in een web3-videogame.

Nu vraag je je waarschijnlijk af: "Wat is fungibiliteit precies?"

Laten we dit concept uit de traditionele economie bekijken om het belang ervan in het Ethereum-ecosysteem te begrijpen.

## Fungibiliteit vs. non-fungibiliteit

**'Fungibiliteit'** is een eigenschap van een economisch goed of asset, en wijst op twee kenmerken:

* Bij het verhandelen van de asset zijn de eenheden onderling inwisselbaar zonder dat de waarde verandert.

  ($1 kun je inwisselen voor een andere $1, voor vier munten van 25¢ of voor twintig munten van 5¢.)

* Bij het opdelen van de asset behouden de kleinere delen de fundamentele eigenschappen.

  ($1, opgedeeld in vier munten van 25¢, werkt nog steeds als middel om waarde te bewaren of om aankopen mee te doen.)

Voorbeelden van fungibele assets zijn olie, fiatgeld, staatsobligaties en bedrijfsaandelen. Deze niet-unieke assets zijn makkelijk uit te wisselen en op te delen.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Omgekeerd wijst **'non-fungibiliteit'** op het volgende:

* De asset heeft unieke eigenschappen waardoor die zich onderscheidt van soortgenoten, en dus een unieke waarde heeft.

  (Een schilderij van Van Gogh is anders geprijsd dan dat van een opkomende moderne kunstenaar, vanwege het uiterlijk, de zeldzaamheid, het vakmanschap en de reputatie achter de schilderijen.)

* Opdelen tast de fundamentele eigenschappen aan.

  (Een schilderij dat in vier stukken is gesneden, heeft delen die niet op elkaar lijken, en elk deel kan anders gewaardeerd worden. De oorspronkelijke bedoeling van het schilderij is bovendien verdwenen.)

Voorbeelden van non-fungibele assets zijn vastgoed, kunstwerken, digitale identiteiten en certificaten. Deze assets zijn door hun unieke eigenschappen moeilijker uit te wisselen en op te delen.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Twijfel je ooit over fungibiliteit, vraag jezelf dan af: "Hoe makkelijk is dit uit te wisselen en op te delen?" Is dat lastig, dan is het waarschijnlijk non-fungibel!

Ethereum wil "de afwikkelingslaag van de wereldeconomie" worden. Functionaliteit voor fungibele en non-fungibele assets opent de deur om traditionele assetklassen onchain weer te geven, en om compleet nieuwe te creëren!

## Standaarden & tokenfuncties

Wie een nieuw token-contract op Ethereum uitrolt, kiest een van de bestaande tokenstandaarden. Die geeft de asset zijn eerste eigenschappen (functies genoemd), zoals de totale voorraad, of de token naar een andere wallet kan worden overgedragen, en welke informatie de token kan bevatten.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

ERC-20 gebruikt bijvoorbeeld functies als deze:

**1\. totalSupply**: bepaalt de totale voorraad van een ERC-20-token.

De totale voorraad van een token zegt iets over belangrijke eigenschappen zoals de waarde en de verdeling ervan.

**2\. balanceOf**: controleert het tokensaldo van een opgegeven adres.

Hiermee kunnen diensten en platforms het saldo van je wallet controleren voordat ze je gevraagde transactie uitvoeren.

**3\. transfer**: verstuurt tokens van jouw adres naar andere adressen.

Elke keer dat je een cryptotoken van jouw wallet naar een andere wallet stuurt, gebruik je de transfer-functie.

**4\. approve**: staat een adres (meestal een smart contract) toe om automatisch namens jouw wallet te handelen, tot een opgegeven bedrag.

Met deze functie kun je een platform of dienst goedkeuring geven om automatisch een afgesproken deel van je geld te gebruiken en transacties uit te voeren.

**5\. allowance**: vraagt op welk bedrag een uitgever vanuit een wallet mag besteden.

Een platform kan met deze functie controleren welk totaalbedrag jij hebt goedgekeurd, en of het de transactie kan uitvoeren zonder dat jij handmatig hoeft te ondertekenen.

Het standaardiseren van tokencreatie maakt `composability` in het Ethereum-ecosysteem mogelijk. Een ontwikkelaar die een [gedecentraliseerde beurs (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) bouwt, kan bijvoorbeeld elke token ondersteunen die de ERC-20-standaard volgt, omdat ze zich allemaal ongeveer hetzelfde gedragen. Aparte ondersteuning inbouwen voor elke genoteerde token is niet nodig.

Op dezelfde manier hoeft iemand die een NFT-marktplaats bouwt het platform alleen compatibel te maken met de standaarden ERC-721 en ERC-1155 om alle NFT's op Ethereum te ondersteunen.

Nu we tokenstandaarden, fungibiliteit en functies begrijpen, bekijken we de toepassingen van de drie belangrijkste standaarden op Ethereum.

### ERC-20: fungibele tokens

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) is een tokenstandaard die de regels bepaalt voor het maken van fungibele token-contracten.

ERC-20-tokens kunnen van alles zijn, van een `memecoin` tot een betaalmiddel op een gedecentraliseerde marktplaats. Meestal vallen ze in een van deze vier categorieën:

**1\. Utility token**: heeft een specifieke functie binnen het ecosysteem van een app of platform.

Voorbeeld: met Chainlink (LINK) betaal je de operators die echte data, zoals marktprijzen, aan smart contracts leveren.

**2\. Governance token**: geeft houders stemrecht bij bestuursbeslissingen over een platform.

Voorbeeld: houders van Ethereum Name Service (ENS) kunnen stemmen over voorstellen om het domeinregisterprotocol bij te werken.

**3\. Stablecoin**: ontworpen om een stabiele waarde te houden, meestal gelijk aan de Amerikaanse dollar.

Voorbeelden: Tether (USDT), USD Coin (USDC) en nieuwere spelers zoals USDS van Sky.

**4\. Security token**: vertegenwoordigt eigendom van een onderliggende asset, zoals aandelen van een bedrijf.

Voorbeeld: getokeniseerde beleggingsfondsen, zoals de geldmarktfondsen die grote vermogensbeheerders in 2024 onchain begonnen uit te geven.

Eén token kan in meerdere categorieën vallen. Een governance token kan bijvoorbeeld ook een bepaalde functie binnen een platform hebben.

Je kunt eenvoudig [ERC-20-tokens kopen op een DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) zoals Uniswap, of op een `gecentraliseerde beurs` zoals Binance of Coinbase.

### ERC-721: non-fungibele tokens

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) is een standaard die de regels bepaalt waarmee Ethereum-gebruikers non-fungibele tokens maken of gebruiken. De standaard garandeert dat elke gemaakte NFT aantoonbaar uniek is.

Wat zijn enkele toepassingen van ERC-721-tokens?

**1\. Eigendom van assets**: ERC-721-tokens worden veel gebruikt om eigendom van unieke digitale en fysieke assets vast te leggen. Zo zijn er van dit deel van het Explorer-handboek 100 individueel genummerde exemplaren beschikbaar (niet alleen om te lezen, maar om te bezitten), als een boek op je digitale boekenplank. (Je kunt het `minten` en bezitten via de gouden knop 'Collect Entry' bovenaan.) De 'Datadisk Collectibles' van Bankless Academy werken op dezelfde manier.

**2\. Abonnementen en lidmaatschappen**: makers, artiesten, clubs en bedrijven gebruiken NFT's al voor abonnementen, tickets en lidmaatschappen. De aantoonbare uniekheid van NFT's garandeert dat elk exemplaar van de vaste voorraad aan één gebruiker is gekoppeld.

**3\. Loyaliteitsbeloningen**: Starbucks had tot maart 2024 een loyaliteitsprogramma genaamd Odyssey, waarin leden quests konden voltooien om NFT's te verdienen en die in te wisselen voor digitale en fysieke beloningen. Veel andere merken bieden NFT's aan als loyaliteitsbeloning die gebruikers kunnen inwisselen of verkopen wanneer ze maar willen.

**4\. Identiteit en certificaten**: met ERC-721-tokens kun je fraudebestendige identiteiten en certificaten maken. Als je digitale identiteit of certificaten ERC-721-tokens zijn, kun jij je eigendom makkelijk bewijzen en is het vrijwel onmogelijk voor anderen om je documenten te vervalsen en te misbruiken.

Wil je een ERC-721-token, maak dan een account aan op een NFT-marktplaats zoals [OpenSea](https://opensea.io/) en koop een aangeboden NFT. Volg zeker onze les [Web3-beveiliging](https://app.banklessacademy.com/lessons/web3-security) om je te beschermen tegen scams op marktplaatsen.

### ERC-1155: fungibele & non-fungibele tokens

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

[ERC-1155](https://eips.ethereum.org/EIPS/eip-1155), vaak een `multi-token-standaard` genoemd, combineert de concepten van ERC-20 en ERC-721. Bouwers kunnen er contracten mee schrijven die zowel fungibele als non-fungibele tokens ondersteunen. Voor de gebruikerservaring maakt dat weinig verschil, maar het helpt om platformfuncties te optimaliseren. Denk aan één contract met daarin zowel een fungibele in-game valuta als non-fungibele in-game items.

Deze standaard maakt ook semi-fungibele tokens mogelijk: tokens die in specifieke omstandigheden fungibel of non-fungibel zijn. In een verzameling ruilkaarten kunnen alle kaarten met dezelfde zeldzaamheid bijvoorbeeld fungibel (inwisselbaar) zijn, terwijl kaarten met verschillende zeldzaamheidsniveaus non-fungibel (niet inwisselbaar) zijn.

ERC-1155 ondersteunt daarnaast batchtransacties om meerdere tokentypes tegelijk te versturen, wat de `gas`-kosten voor gebruikers kan verlagen.

---

Goed gedaan dat je dit lange deel van het Explorer-handboek hebt doorgewerkt: 'Tokenstandaarden begrijpen'.

Vergeet niet dit artikel te verzamelen als je een eigen exemplaar wilt voor snelle naslag onderweg, of om toekomstige content van Bankless Academy te steunen. Goede reis, Explorer!

---

## FAQ over Ethereum-tokenstandaarden

### Hoe worden Ethereum-tokenstandaarden gemaakt?

Tokenstandaarden worden voorgesteld en gepubliceerd op Ethereum via een voorstelproces genaamd Ethereum Improvement Proposals (EIP's). Er wordt niet gestemd: een voorstel wordt in publieke discussie aangescherpt, en zodra de community het er breed over eens is dat het werkt, ronden redacteuren het af als een standaard genaamd een Ethereum Request for Comment (ERC). Het serienummer van de EIP wordt eraan toegevoegd om de naam compleet te maken, bijv. ERC-20 of ERC-721.

### Volgt ether (ETH) een tokenstandaard?

Nee. ETH staat zelfs bekend als een 'coin' en niet als een 'token', wat betekent dat het een eigen [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics) heeft.

### Kan iedereen een token lanceren?

Ja. Ethereum is een permissionless ecosysteem en iedereen kan een fungibele of non-fungibele token lanceren. Je hebt wel technische kennis nodig, of toegang tot no-code tools.

### Als twee tokens dezelfde naam hebben, hoe weet ik dan welke de officiële token is?

Om de originele token te herkennen, controleer je het contractadres waarmee de tokens zijn gepubliceerd en vergelijk je dat met de officiële projectdocumentatie. Zo voorkom je dat je interactie hebt met een kwaadaardig token-contract dat je wallet kan leeghalen.

### Zijn er op Ethereum nog andere tokenstandaarden naast ERC-20, 721 en 1155?

Ja. Sommige worden veel gebruikt, zoals [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), een gedeelde standaard voor `vault`-tokens die stortingen vertegenwoordigen die rendement opleveren in DeFi. Nieuwere standaarden gaan ook over `smart accounts`, waarmee een wallet eigen code kan draaien. Andere, zoals [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) en [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), sloegen nooit aan of dienen zeer specifieke nichetoepassingen.

---

**Auteurs**

**[Musharraf](https://x.com/musharrafff)** is medeoprichter van Unhashed. Hij helpt web3-projecten met contentstrategie en -uitvoering.

**[Tetranome](https://twitter.com/Tetranome)** is Project Champion bij Bankless Academy en richt zich op gebruikerservaring, interface, design en content.

**Redactie**

**[Trewkat](https://twitter.com/trewkat)** is schrijfster en redactrice bij BanklessDAO. Ze wil graag meer leren over crypto en NFT's, met speciale aandacht voor hoe je die kennis het best aan anderen overbrengt.

**Mecenas**

Dit ongesponsorde artikel is onderdeel van je gratis Bankless Academy-opleiding. Verzamel het artikel om toekomstige content te steunen!
