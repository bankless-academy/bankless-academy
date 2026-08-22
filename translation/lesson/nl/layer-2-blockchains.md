---
TITLE: Layer 2-blockchains
DESCRIPTION: Stap in het Layer 2-ecosysteem voor snellere transacties en lagere kosten.
LANGUAGE: Nederlands
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

De gewenste toestand voor elke blockchain is zo gedecentraliseerd, veilig en schaalbaar mogelijk zijn. Een blockchain bouwen die alle drie deze aspecten goed afhandelt, blijkt een uitdaging die nog niet is opgelost. Deze uitdaging heeft een naam gekregen: het `blockchain-trilemma`.

Bitcoin en Ethereum zijn allebei redelijk gedecentraliseerd en veilig, maar ze schalen niet goed. Dat merk je aan de hoge transactiekosten en lange wachtrijen wanneer het netwerk druk is. Om deze problemen te omzeilen kunnen Explorers verschillende technologieën gebruiken die transactiekosten drastisch verlagen en de transactiesnelheid verhogen. Samen staan die bekend als Layer 2 (L2)-schaaloplossingen.

Het `Lightning Network` is de bekendste schaaloplossing van Bitcoin en gebruikt een technologie genaamd `betaalkanalen` om betalingen tussen partijen te schalen. Ethereum verlicht het blockchain-trilemma door transacties af te handelen via verschillende L2-oplossingen, ondersteund door goedkope, tijdelijke `blob`-opslag die in 2024 aan Mainnet is toegevoegd (een lichte vorm van de ooit geplande "sharding").

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Betaalkanalen

Op de Bitcoin-blockchain gebruikt het Lightning Network bidirectionele betaalkanalen, waarmee meerdere partijen BTC kunnen uitwisselen zonder transacties op de hoofdketen.

De architectuur laat twee gebruikers een betaalkanaal met elkaar openen. Elk kanaal is strikt tweezijdig, al kunnen betalingen via een netwerk van verbonden kanalen worden gerouteerd naar gebruikers verderop. Tussen het openen en sluiten van een kanaal kunnen partijen onderling geld verschuiven. De micro-grootboekvermelding van elke deelnemer wordt bijgewerkt nadat beide gebruikers de transactie hebben ondertekend, wat meestal vereist dat de nodes van beide partijen bereikbaar zijn.
Een kanaal kan op elk moment worden gesloten doordat een van beide partijen de meest recente versie van het micro-grootboek naar de blockchain stuurt.

Betaalkanalen ondersteunen geen geavanceerde `smart contract`-interacties, alleen simpele peer-to-peer-transacties.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Je moet online zijn om transacties te doen via het Bitcoin Lightning Network.

- [x] Waar

> ℹ️ Correct! Een betaalkanaal bijwerken vereist handtekeningen van beide gebruikers, dus hun nodes moeten meestal online zijn.

- [ ] Onwaar

> ℹ️ Probeer het opnieuw! Kanaalupdates hebben handtekeningen van beide partijen nodig, dus hun nodes moeten meestal online zijn.

# Schaaloplossingen voor Ethereum

Ethereum-ontwikkelaars werken al bijna net zo lang aan Ethereum-eigen schaaloplossingen als het netwerk live is.

De meeste leden van de Ethereum-community vinden dat een project alleen een "Ethereum-schaaloplossing" is als het de tekortkomingen in `schaalbaarheid` van Ethereum aanpakt zonder `veiligheid` of `decentralisatie` op te offeren. Voor gebruikers zijn de praktische behoeften vooral snellere transacties en goedkoper `gas` dan op Ethereum Mainnet. Om te concurreren zijn sommige schaaloplossingen bereid grotere afwegingen te maken binnen het trilemma dan andere.

Ethereum wordt gedefinieerd door zijn smart contract-mogelijkheden, dus het is ook belangrijk dat schaaloplossingen die ondersteuning overnemen. Je hebt niets aan snelle, goedkope transacties als gebruikers hun favoriete `dApps` niet kunnen gebruiken vanaf een Layer 2.

# Knowledge Check 2

Ethereum-schaaloplossingen:

- [ ] gebruiken betaalkanalen om het netwerk te schalen.

> ℹ️ Probeer het opnieuw! Betaalkanalen zijn de aanpak van Bitcoins Lightning Network. Ethereum schaalt via oplossingen zoals rollups.

- [ ] kunnen geen smart contract-interacties ondersteunen.

> ℹ️ Probeer het opnieuw! Ondersteuning van smart contracts is essentieel. Gebruikers willen hun favoriete dApps op een Layer 2 gebruiken.

- [x] moeten schalen zonder de andere trilemma-punten te verzwakken.

> ℹ️ Correct! Een echte Ethereum-schaaloplossing pakt schaalbaarheid aan zonder veiligheid of decentralisatie op te offeren.

- [ ] maken snellere transacties mogelijk ten koste van hoger gas.

> ℹ️ Probeer het opnieuw! Schaaloplossingen mikken op snellere transacties ÉN goedkoper gas dan Ethereum Mainnet.

# Bridgen tussen Layer 1 en Layer 2

Zoals we leerden in [Basiskennis blockchain](https://app.banklessacademy.com/lessons/blockchain-basics) zijn blockchains databases die bekendstaan als `grootboeken`: cryptografisch beveiligde, chronologische lijsten van transacties. L1-blockchains en L2-schaaloplossingen zijn elk zelfstandige blockchains, met hun eigen databases van adressen en data.

Infrastructuur genaamd `bridges` wordt gebruikt om informatie tussen verschillende blockchain-databases over te dragen. Zie het Ethereum Mainnet (of elke andere `L1`-blockchain) als een eiland, en een andere blockchain of je favoriete schaaloplossing als een tweede eiland: een cryptobridge is de algemene term voor de digitale snelweg die deze twee eilanden verbindt.

De technologie is erg complex, maar voor de eindgebruiker is dit proces zo simpel als een bestemming kiezen.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechains

Een `sidechain` is een aparte blockchain die onafhankelijk van Ethereum draait, maar via een `bridge` met Ethereum Mainnet is verbonden. Om tokens te migreren vergrendel je ze in een bridge-contract op Mainnet; op de sidechain worden gelijkwaardige tokens gemint. Belangrijk: dit geeft je geld NIET de veiligheid van Ethereum. De bridge en sidechain leunen op de eigen validators van de sidechain. Wordt een van beide gecompromitteerd (zoals bij de Ronin-bridgehack van 625 miljoen dollar in 2022), dan kan het vergrendelde geld worden gestolen.

Sidechains blijven onderworpen aan het blockchain-trilemma. Hun lagere `gas`-kosten en snellere transacties komen van een kleinere maar krachtigere validatorset: ze ruilen wat decentralisatie en veiligheid in voor schaalbaarheid.

Sidechains zoals Polygon PoS publiceren regelmatig snapshots ("checkpoints") naar Ethereum. Die geven hun geschiedenis een vorm van finaliteit en laten gebruikers saldi bewijzen bij het verlaten van de bridge, maar ze maken sidechain-geld niet zo veilig als Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechains:

- [ ] vergrendelen gebridgede tokens in een contract op Mainnet.

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] hebben goedkopere gas fees dan Mainnet.

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] hebben grotere centralisatierisico's dan Mainnet.

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [x] Alle bovenstaande antwoorden.

> ℹ️ Correct! Sidechains vergrendelen gebridgede tokens op Mainnet en zijn goedkoper, maar hun kleinere validatorset ruilt decentralisatie in voor snelheid.

# Rollups

Layer 2-protocollen die rollup-technologie gebruiken, blijven dichter bij het veiligheidsniveau van Ethereum Mainnet.

Net als sidechains laten rollups onchain transacties buiten Ethereum Mainnet uitvoeren. Deze transacties worden vervolgens 'opgerold' tot één batch, en de batchdata wordt naar Ethereum gestuurd in goedkope, tijdelijke datapakketten genaamd `blobs`, geïntroduceerd in de Dencun-upgrade van maart 2024. Blobs zijn de belangrijkste reden dat typische L2-kosten zijn gedaald tot een paar cent of minder.

Om te bewijzen dat de rollup veilig genoeg is om transacties namens Mainnet te verwerken, moet hij "overtuigend bewijs" leveren dat de transacties in elke ingediende batch veilig en geldig zijn. Dit bewijs zit in de transactierollup en wordt geverifieerd door het bridge-contract op Ethereum Mainnet.

Er zijn momenteel twee rollup-methoden die dit bewijs kunnen leveren: `optimistic rollups` en `ZK-rollups`. Laten we deze twee processen eens nader bekijken.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic rollups

L2-protocollen zoals Optimism, Base en Arbitrum gebruiken allemaal `optimistic rollups` als architectuur voor hun schaaloplossing. Optimistic rollups heten zo omdat de informatie in de rollup-batch als geldig wordt beschouwd tenzij het tegendeel wordt bewezen: er wordt een optimistische aanname gedaan.

Om misbruik van deze techniek tegen te gaan, geldt er meestal een vertraging van meerdere dagen zodra een gebruiker geld van de L2 terug naar Mainnet wil verplaatsen. In die periode kunnen bridge-validators een `fraudebewijs` publiceren om de opname te annuleren. Dit fraudebewijsmechanisme lijkt op de clearingprocessen van banken, maar is gedecentraliseerd.

Let op: externe bridge-diensten zoals Across en Relay helpen gebruikers om geld in enkele minuten in plaats van dagen te bridgen. Deze snelle bridges schieten je het geld voor uit hun eigen pool. Je neemt dus het risico van de smart contracts van de bridge en zijn geldverstrekkers: een extra vertrouwenslaag vergeleken met de eigen bridge van de rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Bij optimistic rollups worden transacties als geldig beschouwd tot het tegendeel is bewezen.

- [x] Waar

> ℹ️ Correct! De optimistische aanname is dat batches geldig zijn, met een challenge-periode waarin fraudebewijzen foute opnames kunnen annuleren.

- [ ] Onwaar

> ℹ️ Probeer het opnieuw! Die optimistische aanname is precies waar deze rollups hun naam vandaan halen.

# ZK-rollups

`ZK-rollups` zijn een type rollup dat leunt op zero-knowledge-technologie. Anders dan `optimistic rollups` bevestigen ZK-rollups de geldigheid van de gebatchte transacties zonder te vertrouwen op bepaalde gebruikers die naar bewijs van fraude zoeken. In plaats daarvan dienen deze rollups een wiskundig bewijs in, een `geldigheidsbewijs`, waarmee Ethereum een hele batch kan controleren zonder het werk opnieuw te doen.

Het grote voordeel van ZK-rollups is de `afwikkelingstijd`, ook wel `transactiefinaliteit` genoemd. In plaats van een challenge-periode van meerdere dagen geven ZK-rollups gebruikers meestal binnen een paar uur toegang tot hun geld op Mainnet, zodra het volgende geldigheidsbewijs is ingediend. Ondanks de naam wordt zero-knowledge-technologie hier niet gebruikt voor privacy: transacties op grote ZK-rollups zijn net zo publiek als op Ethereum Mainnet.

Een aantal grote protocollen bouwt zijn Ethereum-schaaloplossing met ZK-rollup-technologie, waaronder ZKsync, Starknet en Linea. De ontwikkeling staat nog vrij vroeg, maar de toekomstpotentie is groot.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

ZK-rollups, vergeleken met optimistic rollups:

- [ ] houden gebruikerstransacties privé op Mainnet.

> ℹ️ Ondanks de naam "zero-knowledge" zijn grote ZK-rollups net zo transparant als Ethereum Mainnet: de bewijzen dienen voor geldigheid, niet voor privacy.

- [x] gebruiken geldigheidsbewijzen, zonder dagenlange challenge-periode.

> ℹ️ Correct! Een wiskundig geldigheidsbewijs bevestigt elke batch, dus finaliteit op Mainnet vereist geen wachttijd voor fraudebewijzen.

- [ ] leunen op waarnemers die tijdens een challenge-periode fraude melden.

> ℹ️ Zo werken optimistic rollups. ZK-rollups bewijzen geldigheid juist vooraf.

# Cross-chain dApp-compatibiliteit

Bij het vergelijken van `optimistic rollups` en `ZK-rollups` kijken de meeste gebruikers vooral naar opnametijden. Maar omdat die vertraging bij opnames kan worden opgelost door externe bridges, hoeft dit geen grote rol te spelen bij het kiezen van een schaaloplossing om te verkennen.

Veel optimistic rollups zijn "EVM-equivalent": de L2 ondersteunt dan native elke dApp die op de `Ethereum Virtual Machine` (EVM) kan draaien. EVM-equivalentie maakt het mogelijk om smart contracts die eerder op Mainnet zijn geplaatst opnieuw te gebruiken, zodat L2-gebruikers toegang hebben tot hun favoriete dApps.

Sidechains zoals Polygon PoS draaien de EVM ook native, en de meeste moderne ZK-rollups (zoals ZKsync, Linea en Scroll) zijn ook EVM-equivalent of komen daar heel dichtbij. Daardoor zijn je favoriete Ethereum-dApps beschikbaar in het grootste deel van het L2-ecosysteem.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

EVM-equivalente schaaloplossingen kunnen smart contracts die op Mainnet staan eenvoudig hergebruiken.

- [x] Waar

> ℹ️ Correct! EVM-equivalentie betekent dat elk smart contract dat op Mainnet draait ook op de L2 kan worden geplaatst, inclusief vertrouwde dApps.

- [ ] Onwaar

> ℹ️ Probeer het opnieuw! Smart contracts van Mainnet hergebruiken is precies het doel van EVM-equivalentie.

# Samenvatting van de les

L1-blockchains zoals Bitcoin en Ethereum worden momenteel beperkt door het `blockchain-trilemma`. `Betaalkanalen` op het Bitcoin-netwerk, of sidechains en rollups op Ethereum, helpen deze netwerken te schalen en het trilemma te verlichten.

`Bridges` verbinden L1-blockchains met `sidechains` en `rollups`, en de manier waarop het bridge-contract werkt, bepaalt mede de eigenschappen van het verbonden netwerk.

Sidechain-geld erft de `veiligheid` van Ethereum niet: gebridgede tokens worden vergrendeld in een contract op Mainnet, maar hun veiligheid hangt af van de eigen validators en het bridge-contract van de sidechain. Deze ketens hebben een kleine maar krachtige validatorset waarmee ze de transactiesnelheid verhogen en gas fees verlagen, ten koste van decentralisatie en veiligheid.

Rollups valideren en verwerken, net als sidechains, hun eigen transacties, maar hun bridge-contract eist "overtuigend bewijs" van transactiegeldigheid voordat de data als geldig wordt beschouwd. Zo behouden ze `veiligheid` en `decentralisatie` in lijn met de waarden van Ethereum. Dit bewijs kan op twee manieren worden geleverd: `optimistic rollups` hanteren een vertraging van meerdere dagen voordat hun transactierollups op Mainnet worden afgewikkeld, waarin bridge-validators fraude opsporen en melden; `ZK-rollups` bieden wiskundige zekerheid over de geldigheid van transacties, dankzij `zero-knowledge`-technologie.

Momenteel bieden zowel optimistic rollups als moderne ZK-rollups een hoge mate van smart contract-compatibiliteit met Ethereum Mainnet, waardoor dApps van Ethereum Mainnet eenvoudig op hun netwerken kunnen worden geplaatst. Velen geloven dat ZK-rollups de schaaloplossing van de toekomst worden, dankzij hun snelle finaliteit en sterke geldigheidsgaranties.

# Begin je Layer 2-reis met Optimism of Base 🙂

Optimism en Base, allebei EVM-equivalente optimistic rollups, zijn geweldige L2's om als Explorer mee te beginnen. Het gebruik van dApps op beide chains voelt vergelijkbaar met L1, alleen goedkoper en sneller, en beide gebruiken ETH als gas. Je aankomende quest is de eerste stap van je reis op Optimism of Base!

Beide ecosystemen zijn sterk beïnvloed door de waarden van Ethereum. Optimism staat bekend om het [financieren van publieke goederen](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) die waarde toevoegen aan het ecosysteem, zoals gratis onderwijs van Bankless Academy.

Optimism en Base zijn niet zomaar platformen die op optimistic rollups leunen: ze laten zien hoe blockchains echte problemen kunnen oplossen en nieuwe manieren openen om samen te handelen en te coördineren. En daar mogen we allemaal optimistisch van worden. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
