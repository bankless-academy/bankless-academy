---
TITLE: Token allowances beheren
DESCRIPTION: Bescherm je wallet tegen ongewenste interacties met smart contracts.
LANGUAGE: Nederlands
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
## Belangrijkste punten

> * Token allowances zijn permissies die aan `smart contracts` worden gegeven om tokens uit een wallet uit te geven zonder verdere goedkeuring.
>
> * Kwaadwillenden kunnen ze misbruiken als de gebruiker niet weet dat die permissies actief zijn.
>
> * Met tools zoals Revoke.cash kun je token allowances eenvoudig inspecteren en intrekken.

## Inleiding

DeFi geeft gebruikers controle over hun assets, inclusief hun `privésleutels`: een ongekende soevereiniteit en zeggenschap over hun geld. Maar met grote macht komt grotere verantwoordelijkheid: gebruikers moeten zelf volledig instaan voor de veiligheid en het beheer van hun assets.

Er zijn vier veelvoorkomende categorieën scams waar DeFi-gebruikers op moeten letten:

* **Gecompromitteerde seed phrase**: aanvallers proberen gebruikers hun seed phrase te ontfutselen, waarmee ze ongeautoriseerde toegang tot het geld krijgen. Met je seed phrase kan een aanvaller al je geld wegsluizen, en dat blijven doen zodra je nieuw geld op de wallet stort. Hier is helaas geen herstel van mogelijk; de enige oplossing is een volledig nieuwe wallet met een nieuwe `seed phrase`.

* **Directe ETH-overboekingen**: scammers kunnen ETH-overboekingen verbergen door ze te vermommen als een functieaanroep, zoals "Security Update". De raw-signature-methode achter oudere versies van deze scam is uit MetaMask verwijderd; moderne phishingkits misbruiken in plaats daarvan normaal ogende handtekeningverzoeken, in de hoop dat je tekent zonder te lezen wat je wallet toont. Trap je erin, dan is je geld niet terug te halen, maar je kunt je wallet wel veilig blijven gebruiken voor andere transacties.

* **NFT-marktplaatslistings**: pas op voor valse listings en kwaadaardige contracten die de allowances misbruiken die je aan marktplaatsen zoals OpenSea geeft. Scammers kunnen je een `offchain` bericht laten ondertekenen dat je goedgekeurde `NFT's` te koop zet, zonder dat er een echte tokentransactie plaatsvindt.

* **Token allowances**: aanvallers kunnen permissies manipuleren om toegang te krijgen tot meer geld dan oorspronkelijk goedgekeurd. "Approvals" zijn onchain transacties die toegang geven tot je tokens of NFT's. "Permits" geven dezelfde toegang, maar vereisen alleen een gasless offchain handtekening. Uniswap en de meeste moderne trading-apps gebruiken dit systeem (Permit2 genoemd). Permit-handtekeningen verschijnen pas als onchain approvals zodra ze worden gebruikt, en kunnen een vervaldatum hebben; via de weergave "Signatures" van Revoke.cash kun je ze controleren en annuleren.

  Nu smart contracts populairder worden, zijn `token allowances` nodig om vertrouwde contracten transacties te laten uitvoeren zonder privésleutels bloot te stellen. Token allowances laten dApps automatisch tokens in je wallet namens jou verplaatsen. Dat gemak verhoogt de efficiëntie, maar stelt gebruikers ook bloot aan mogelijke aanvallen via scams en ongeautoriseerde toegang.

In dit artikel bespreken we 'token allowances' en introduceren we een communitytool die je helpt je permissies te beheren.

## Token allowances: begrijpen, beheren en veilig houden

Token allowances zijn permissies die vooraf aan smart contracts worden gegeven om tokens uit een wallet uit te geven. Ze spelen een cruciale rol bij het mogelijk maken van transacties, zonder dat je elke keer expliciet toestemming hoeft te geven voor directe overdrachten uit de wallet. Bij misbruik kunnen token allowances echter een aanvalsroute worden voor nietsvermoedende gebruikers. Daarom is het belangrijk dat DeFi-gebruikers voorzichtig zijn, zich verdiepen in de beveiligingsrisico's en begrijpen hoe token allowances echt werken.

Permissies geven aan een extern contract gebeurt in twee stappen:

1. Wallet verbinden: als je je wallet met een dApp verbindt, deel je alleen je wallet-`adres` met de front-end, zodat die je saldi en activiteit kan tonen. Verbinden geeft op zichzelf geen enkele onchain permissie.

2. Token approval: om met de dApp te handelen, geef je vervolgens het smart contract goedkeuring om specifieke tokens namens jou te verplaatsen. Dit is de stap die echte bestedingsmacht verleent.

Door token allowances proactief te beheren, zorg je dat geen enkel contract meer uit je wallet haalt dan het oorspronkelijk opgegeven bedrag. Gelukkig zijn er communitytools gebouwd die DeFi-gebruikers vertrouwen en gemoedsrust geven.

## Stappenplan: Revoke.cash gebruiken

[Revoke.cash](https://revoke.cash/) laat gebruikers hun token allowances eenvoudig beheren via een simpele website waarmee je de allowances aan verschillende dApps kunt inspecteren en monitoren. Laten we doorlopen hoe je deze krachtige communitytool gebruikt om je assets te beschermen en de controle over je wallet terug te nemen.

**1\. Verbind je wallet**:

Om je token allowances in te trekken, ga je naar [Revoke.cash](http://revoke.cash/) en klik je rechtsboven op "Connect Wallet". Je kunt ook handmatig je publieke wallet-adres in de zoekbalk invoeren. Zodra het laden klaar is, zie je een lijst met al je `token approvals` op dat netwerk.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Inspecteer je allowances**:

Met je wallet verbonden kun je je bestaande approvals inspecteren. Je kunt sorteren, filteren of zoeken naar specifieke approvals op basis van het geautoriseerde spender-adres. Sorteren van "Newest to Oldest" is vooral handig als je een recente kwaadaardige approval vermoedt. Gebruik de sorteer- en filteropties om overzicht te krijgen van de token allowances die je hebt gegeven. Allowances gelden per chain, dus gebruik de netwerkkeuze om de controle te herhalen op elk netwerk dat je gebruikt.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Trek ongewenste allowances in**:

Zie je approvals die je wilt intrekken, klik dan simpelweg op de knop "Revoke" ernaast. Je kunt een approval ook aanpassen naar een ander bedrag via het potloodicoon naast het goedgekeurde bedrag, als je de approval later nog nodig hebt maar je risico wilt verkleinen.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Het kan verstandig zijn een token allowance in te trekken of aan te passen als:

1. Een recent uitgerold smart contract wordt geëxploiteerd en een kwetsbaarheid veroorzaakt in een `gedecentraliseerde beurs` die je regelmatig gebruikt.

   In april 2023 trof zo'n exploit de populaire `DEX` SushiSwap, waarbij \~$3,5 miljoen van gebruikers werd gestolen. Getroffen gebruikers bleven risico lopen zolang ze hun token allowance niet hadden ingetrokken.

2. Een kwaadaardig governancevoorstel meerdere contracten bijwerkt met de bedoeling het geld van gebruikers weg te sluizen.

   Meer dan $2,5 miljoen aan assets werd buitgemaakt toen Atlantis Loans, een `DeFi`-protocol op een BNB-chain, een governancevoorstel uitvoerde dat meerdere contracten trof. Gebruikers die hun approval-limiet beheerden, beperkten het risico dat hun wallet volledig werd leeggehaald door het kwaadaardige voorstel.

## Vergeet de delegaties niet

Sinds Ethereums Pectra-upgrade (mei 2025) zijn allowances niet meer de enige permissie die je moet controleren. Een nieuwere walletfunctie (EIP-7702) laat je wallet delegeren aan extra code. Dat maakt gemakken mogelijk zoals het bundelen van transacties, maar ook een nieuwe drainer-truc: één kwaadaardige handtekening kan "sweeper"-code installeren die alles wat je stort direct doorstuurt naar een aanvaller, zonder dat je seed phrase ooit wordt blootgesteld. In 2025 ontdekten onderzoekers van Wintermute dat ruim 97% van de vroege wallet-delegaties naar identieke sweeper-code wees.

Revoke.cash toont je actieve delegaties onder het tabblad "Delegations", maar omdat delegaties door je wallet worden beheerd en niet door dApps, trek je een ongewenste delegatie in vanuit je wallet zelf. In MetaMask open je de accountgegevens en zet je het account terug naar een standaardaccount. Heb je nooit zelf gekozen voor een upgrade naar een `smart account`, behandel dan elke delegatie die je vindt als vijandig.

---

Tijd om onze wallet-verdediging te versterken! We hopen dat je genoten hebt van dit deel van het Explorer-handboek: 'Token allowances beheren'.

Vergeet niet dit artikel te verzamelen als je een eigen exemplaar wilt voor snelle naslag onderweg, of om toekomstige content van Bankless Academy te steunen. Goede reis, Explorer!

---

## FAQ

### Wanneer moet ik Revoke.cash gebruiken?

Gebruik Revoke.cash periodiek, vooral in periodes waarin je een dApp niet actief gebruikt, zeker bij NFT-marktplaatsen. Approvals beperken verkleint het risico op geldverlies door hacks, exploits of phishing-scams. Door je approvals op meest recent te sorteren, spoor je verdachte approvals op en trek je ze snel in, wat verdere schade beperkt.

### Beschermt mijn wallet loskoppelen me tegen approval-exploits?

Je wallet loskoppelen van een dApp beschermt je niet tegen exploits, via approvals of anderszins. De token approvals die je eerder gaf blijven actief, ook na het loskoppelen, omdat ze onchain zijn opgeslagen.

### Hoe vermijd ik token allowance-exploits en vergelijkbare risico's?

Een proactieve aanpak van token allowances betekent:

* alleen allowances geven aan vertrouwde dApps.

* je token allowances periodiek controleren.

* onnodige of verdachte allowances verwijderen.

* controleren op wallet-delegaties die je niet herkent.

* op de hoogte blijven van beveiligingsupdates van dApps.

Overweeg externe tools zoals de [browserextensie](https://revoke.cash) van Revoke.cash: die werkt als proactieve maatregel tegen mogelijke dreigingen. De extensie waarschuwt je als je op het punt staat iets potentieel schadelijks te ondertekenen, en beschermt je zo tegen phishing-scams en andere kwaadaardige activiteiten.

### Kan ik geld terughalen met Revoke.cash?

Helaas kan Revoke.cash gestolen geld niet terughalen. Het is een preventieve tool die de kans verkleint dat je slachtoffer wordt van approval-exploits. Het intrekken van de approvals waarmee je geld is gestolen, kan wel verdere diefstal voorkomen.

### Waarom wordt mijn wallet steeds leeggehaald zodra ik hem bijvul?

Je wallet bevat mogelijk een "sweeper bot": een script dat een gecompromitteerde wallet in de gaten houdt en nieuwe stortingen razendsnel wegsluist voordat jij kunt ingrijpen. Eén oorzaak is een gecompromitteerde seed phrase. In dat geval helpt approvals intrekken niet; verlaat de wallet en maak een nieuwe aan. Maar een kwaadaardige wallet-delegatie is een even waarschijnlijke oorzaak: sweeper-code, geïnstalleerd via een handtekening die je is ontfutseld, zonder dat je seed phrase is gelekt. Controleer het tabblad "Delegations" op Revoke.cash. Vind je een delegatie die je niet herkent, trek die dan in vanuit je wallet (bijvoorbeeld via de accountgegevens in MetaMask). Is er geen delegatie en gaat het leeghalen door, ga er dan van uit dat je seed phrase gecompromitteerd is en stap over op een nieuwe wallet.

---

**Auteur**

**[Marcus](https://twitter.com/estmcmxci)** publiceert de nieuwsbrief van de ENS DAO. Hij onderzoekt hoe overtollige inkomsten uit protocolkosten de ontwikkeling van de applicatielaag en andere open source-infrastructuur kunnen subsidiëren.

**Redactie**

**[Tetranome](https://twitter.com/Tetranome)** is Project Champion bij Bankless Academy en richt zich op gebruikerservaring, interface, design en content.

**[Trewkat](https://twitter.com/trewkat)** is schrijfster en redactrice bij BanklessDAO. Ze wil graag meer leren over crypto en NFT's, met speciale aandacht voor hoe je die kennis het best aan anderen overbrengt.

**Mecenas**

Dit ongesponsorde artikel is onderdeel van je gratis Bankless Academy-opleiding. Verzamel het artikel om toekomstige content te steunen!
