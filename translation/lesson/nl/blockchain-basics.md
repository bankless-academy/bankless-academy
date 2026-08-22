---
TITLE: Basiskennis blockchain
DESCRIPTION: Leer alles over de fundamentele architectuur van blockchain-technologie.
LANGUAGE: Nederlands
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

# Inleiding

`Blockchain`-technologie is een revolutionaire manier om data op te slaan en bij te houden, en die data tegelijk voor iedereen toegankelijk te maken. Het is een manier om data te ordenen in één publieke lijst van alle historische transacties, die iedereen kan bekijken maar niemand kan aanpassen. Deze publieke lijst van transacties staat samen bekend als het `grootboek` van de blockchain.

Na het verkennen van de lagen van een blockchain begrijp je de structuur die een blockchain-tool genaamd een `block explorer` weergeeft: de **lijst** van blokken, de **transacties** in die blokken en de **details** van elke individuele transactie. Wil je het in actie zien? Probeer [Etherscan](https://etherscan.io/), een populaire block explorer voor Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Blockchain-structuur

De term blockchain kan een zelfstandig naamwoord zijn (de Bitcoin-blockchain) of een bijvoeglijk naamwoord (blockchain-technologie). In beide gevallen verwijst `blockchain` naar de volledige structuur waarop cryptovaluta's zijn gebouwd.

Van buiten naar binnen ingezoomd heeft een blockchain 3 structuurniveaus:

1. De totale `blockchain` bestaat uit blokken die in volgorde aan elkaar zijn gekoppeld
2. `Blokken` bestaan uit groepen transacties die zijn samengevoegd
3. `Transacties` zijn overdrachten van waarde, of instructies aan programma's, tussen `adressen` op het netwerk

Deze drielaagse structuur vormt samen een cryptografisch grootboek: een onveranderbare geschiedenis van alle transacties op het netwerk.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Wat is een blockchain?

- [ ] Georganiseerde groepen transacties, blokken genoemd

> ℹ️ Probeer het opnieuw! Blokken zijn onderdeel van de structuur, maar dit is niet het enige juiste antwoord.

- [ ] Een gedeeld register dat iedereen kan zien maar niemand kan aanpassen

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet het enige juiste antwoord.

- [ ] Blokken die in volgorde aan elkaar zijn gekoppeld

> ℹ️ Probeer het opnieuw! Dit beschrijft de keten van blokken, maar het is niet het enige juiste antwoord.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Alle drie kloppen: een blockchain is een gedeeld, onbewerkbaar overzicht van transacties, gegroepeerd in blokken en in volgorde gekoppeld.

# Het grootboek bekijken

In gangbare geldsystemen vertrouwen we op derde partijen zoals banken om bij te houden hoeveel geld iedereen heeft. Maar om echt Bankless te zijn, willen we een systeem waarbij we niet één partij hoeven te vertrouwen om het grootboek te beheren.

Het `grootboek` is de lijst van ALLE transacties die ooit op een blockchain zijn gedaan, en bij blockchains die `publiek` zijn kan iedereen die lijst bekijken. Afzonderlijke groepen transacties uit het grootboek vormen de blokken die samen de blockchain maken.

Wanneer nieuwe transacties aan het grootboek worden toegevoegd, worden de saldi op elk `adres` bijgewerkt; eerdere transacties kunnen niet worden gewijzigd. Het is alsof iedereen op elk moment de volledige transactiegeschiedenis van ieders bankrekening kan inzien.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transacties in het grootboek

Laten we een paar voorbeeldtransacties bekijken:

- Alice stuurt 5 ETH naar Bob
- Bob stuurt 2 ETH naar Charlie

Individuele transacties tonen de _verandering_ in de hoeveelheid cryptovaluta per adres, dus het totale resultaat van alle transacties IS de hoeveelheid cryptovaluta die elk adres heeft.

---

⇒ Alice is 5 ETH kwijtgeraakt

⇒ Bob heeft er in totaal 3 ETH bij (5 ontvangen, 2 verstuurd)

⇒ Charlie heeft er 2 ETH bij

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Wat is waar voor publieke blockchain-grootboeken?

- [ ] Transacties zijn publiek en kunnen achteraf niet worden gewijzigd

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Het grootboek houdt bij hoeveel cryptovaluta elk adres nu heeft

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Het grootboek groeit als er nieuwe transacties worden toegevoegd

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Het grootboek is publiek, onveranderbaar, houdt de saldi van adressen actueel en groeit met elke nieuwe transactie.

# Decentralisatie

Transacties in een `blockchain`-grootboek zijn niet alleen onveranderbaar, ze worden ook gedeeld en verspreid over een groot netwerk van computers. Om te zorgen dat geen enkele partij de macht heeft om de data te wijzigen, worden kopieën van het blockchain-grootboek opgeslagen op veel computers in het netwerk, `nodes` genoemd.

Deze gedeelde data maakt het blockchain-grootboek `gedecentraliseerd`. Geen enkele autoriteit of partij heeft de controle over de data. Blockchains zoals Ethereum zijn ook `publiek`, omdat iedereen het grootboek kan bekijken.

Onthoud voor deze les vooral dat de grootboekdata wordt gedeeld over de vele computers die het Ethereum-netwerk draaien.

# Knowledge Check 3

Wat maakt een blockchain gedecentraliseerd?

- [ ] Slechts één partij kan naar de blockchain schrijven

> ℹ️ Probeer het opnieuw! Eén partij die alles bepaalt is juist het tegenovergestelde van decentralisatie.

- [ ] Hij voldoet aan decentralisatie-eisen van de overheid

> ℹ️ Probeer het opnieuw! Decentralisatie komt voort uit het ontwerp van het netwerk, niet uit goedkeuring door de overheid.

- [x] Geen partij beheert het grootboek; het staat op veel computers

> ℹ️ Correct! Doordat kopieën van het grootboek op veel nodes staan, kan geen enkele partij de data beheren of wijzigen.

- [ ] Het grootboek staat op één beveiligde server

> ℹ️ Probeer het opnieuw! Eén server zou een centraal controlepunt zijn. Kopieën van het grootboek staan op veel nodes.

# Anatomie van een blok

Een belangrijke eigenschap van blockchains is dat eerdere transactiedata niet meer kan worden gewijzigd nadat die in een blok is opgenomen. Dat komt doordat elk blok een unieke `blokhash` heeft, als een vingerafdruk, die wordt gebruikt om de blokken één voor één aan elkaar te koppelen. Niemand kan eerdere transacties wijzigen zonder die vingerafdruk te veranderen, plus de vingerafdruk van ELK blok dat erna komt, want elke vingerafdruk hangt af van de vorige.

Elk `blok` is dus simpelweg een groep transacties, plus een unieke vingerafdruk (de `blokhash`) die wordt berekend uit de inhoud van het blok. De blokken vormen een keten doordat elk blok verwijst naar de unieke vingerafdruk van het vorige blok: samen één verbonden block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Wat is het doel van een blokhash?

- [ ] Blokdata versleutelen zodat niemand die kan lezen

> ℹ️ Probeer het opnieuw! Blokdata blijft publiek leesbaar. De hash is een vingerafdruk, geen versleuteling.

- [x] Blokken koppelen en eerdere transactiedata onveranderbaar houden

> ℹ️ Correct! Elk blok verwijst naar de vingerafdruk van het vorige blok, dus oude data wijzigen breekt elk blok dat erna komt.

- [ ] Zorgen dat transacties naar het juiste adres gaan

> ℹ️ Probeer het opnieuw! Adressen bepalen waar het geld heen gaat. De blokhash koppelt blokken aan elkaar.

- [ ] Zorgen dat de blockchain gedecentraliseerd blijft

> ℹ️ Probeer het opnieuw! Decentralisatie komt van het verspreiden van het grootboek over veel nodes, niet van de blokhash.

# In een blok

Onthoud: `blok`-data is gewoon een groep samengevoegde transacties. Als we binnen één blok kijken, zien we een lijst transacties en wat data over wie het blok heeft gemaakt.

Denk aan ons eerdere voorbeeld bij het blockchain-grootboek: die twee transacties kunnen samen in één blok zitten, of verspreid zijn over meerdere blokken in de tijd. Maar in welk blok ze ook worden opgenomen, uiteindelijk worden ze allemaal toegevoegd aan het totale blockchain-grootboek.

- Alice stuurt 5 ETH naar Bob
- Bob stuurt 2 ETH naar Charlie

Onthoud dat elk blok ook moet verwijzen naar de `blokhash` van het vorige blok om de blockchain aan elkaar te koppelen.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Welke informatie zit er in een blok?

- [ ] Alle informatie uit eerdere blokken

> ℹ️ Probeer het opnieuw! Een blok verwijst alleen naar de hash van het vorige blok. Het kopieert niet alle oude data.

- [ ] Alles wat relevant is voor de blockchain, want blokken zijn onbeperkt

> ℹ️ Probeer het opnieuw! Een blok is een afgebakende groep transacties, geen onbeperkte container.

- [x] Transactiedata en een verwijzing naar het vorige blok

> ℹ️ Correct! Een blok is een groep transacties plus de hash van het vorige blok, wat de blokken aan elkaar koppelt.

- [ ] Alle transactiedata uit een vaste tijdsperiode

> ℹ️ Probeer het opnieuw! Transacties kunnen in één blok zitten of verspreid zijn over meerdere blokken in de tijd.

# Individuele transacties

De data op elke blockchain is simpelweg een lijst van `transacties`: registraties van valuta die tussen gebruikers wordt verplaatst. Elke transactie moet zijn ondertekend met de `digitale handtekening` van de verzender om geldig te zijn.

Dit is wat je doet wanneer je een transactie bevestigt met een wallet: je ondertekent met je digitale handtekening om de transactie goed te keuren. Zie het als de digitale versie van het ondertekenen van een cheque, bon of creditcardbetaling.

Transacties kunnen simpel zijn, zoals crypto-assets versturen, of complexer, zoals crypto-assets swappen of zelfs speciale code plaatsen die wordt uitgevoerd zodra die wordt aangeroepen: `smart contracts`.

Tot slot heeft elke transactie een unieke digitale identificatie, de `transactiehash`, die geen enkele andere transactie heeft. Zo kun je later makkelijk naar één specifieke transactie verwijzen en kunnen de details ervan achteraf niet worden gewijzigd.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Data op een blockchain is simpelweg een lijst transacties, gegroepeerd in blokken. Voorbeelden van zulke transacties zijn:

- [x] Crypto-assets versturen of ontvangen

> ℹ️ Correct! Transacties registreren valuta die tussen gebruikers beweegt, van simpele overboekingen tot interacties met smart contracts.

- [ ] De grootte van het blok aanpassen

> ℹ️ Probeer het opnieuw! De blokgrootte is niet iets wat een transactie kan veranderen.

- [ ] Eerdere blockchain-data bewerken

> ℹ️ Probeer het opnieuw! Eerdere blockchain-data kan niet worden gewijzigd. Dat is een kernfunctie van blockchains.

- [ ] Alle bovenstaande antwoorden

> ℹ️ Probeer het opnieuw! Slechts één van de bovenstaande is een geldige blockchain-transactie.

# Gebruikersadressen

Een `adres` is een publieke identificatie die iedereen op de blockchain kan opzoeken. Net als bij een e-mailadres kan iedereen er geld naartoe sturen, maar alleen wie de `privésleutel` beheert, kan het geld op dat adres ontgrendelen en gebruiken.

Op Ethereum begint een adres altijd met \_0x\_\_\_\_\_\_\_\_\_\_ en bestaat het uit 42 tekens (cijfers en letters), afgeleid van de `publieke sleutel` van dat adres.

Als we één transactie bekijken in een block explorer, zien we de From: en To: adressen. Dit vertelt ons niet wie de _mensen_ zijn die deze adressen beheren, maar zo kan elke gebruiker de beweging van cryptovaluta door het hele blockchain-grootboek volgen.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Wat is waar over blockchain-adressen?

- [ ] Het zijn publieke identificaties van partijen op een blockchain

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Op Ethereum beginnen ze altijd met _0x_

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [ ] Wie de privésleutel beheert, kan het geld op dat adres gebruiken

> ℹ️ Probeer het opnieuw! Dit klopt, maar het is niet de enige juiste stelling.

- [x] Alle bovenstaande antwoorden

> ℹ️ Correct! Adressen zijn publieke identificaties, beginnen op Ethereum met 0x en het geld erop wordt ontgrendeld met de privésleutel.
