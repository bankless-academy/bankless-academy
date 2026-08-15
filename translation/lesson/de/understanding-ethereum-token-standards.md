---
TITLE: Ethereum-Token-Standards verstehen
DESCRIPTION: Erfahre, wie Ethereums Asset-Vorlagen klassische und neue Anlageklassen abbilden.
LANGUAGE: Deutsch
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
## **Wichtigste Erkenntnisse**

> * Ethereums `Token`-Standards sind festgelegte Regeln und Funktionen, mit denen Token auf Ethereum veröffentlicht werden.
>
> * Die bekanntesten Ethereum-Token-Standards sind `ERC-20`, `ERC-721` und `ERC-1155`.
>
> * Jeder Standard erlaubt einen anderen Grad an `Fungibilität` und damit sowohl alltägliche als auch einzigartige Onchain-Werte.
>
> * Token-Standards machen Token im ganzen Ethereum-Ökosystem kompatibel. dApps binden neue Token dadurch mühelos ein, und du kommst leicht an sie heran!

## Was sind Ethereum-Token-Standards?

Millionen verschiedener Krypto-Token leben auf Ethereum und seinen `Layer-2`-Netzwerken, jedes mit eigenen Eigenschaften und Einsatzzwecken. Wie sorgt das Netzwerk dafür, dass alle dApps sie reibungslos unterstützen, ohne dass Entwickler jedes Token stundenlang einbauen müssen? Und wie verstehen Nutzer die wichtigsten Eigenschaften eines Tokens, ohne sich durch endlose Dokumentation zu scrollen?

Hier kommen die Token-Standards ins Spiel!

Diese Vorlagen und Regelwerke sorgen für `Interoperabilität` im Ethereum-Ökosystem. dApps müssen also nur ein paar gängige Standards unterstützen statt Tausender einzelner Token. Für Explorer wie dich heißt das: Am Standard eines Tokens erkennst du seine grundlegenden Fähigkeiten in ganz Ethereum.

Token-Standards legen fest:

* Wie der Smart Contract eines Tokens programmiert sein soll.

* Welche gemeinsamen Funktionen jedes Token dieses Typs beherrschen muss, damit jede dApp damit umgehen kann.

Aktuell hat Ethereum drei gebräuchliche Token-Standards:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: ein Standard für leicht tauschbare (fungible) Token.

   Zum Beispiel USDC und UNI.

2. **ERC-721**: ein Standard für einzigartige (nicht fungible) Token, bekannt als `NFTs`.

   Zum Beispiel NFTs des Bored Ape Yacht Club.

3. **ERC-1155**: ein Standard für fungible und nicht fungible Token im selben Contract.

   Zum Beispiel Gegenstände in einem Web3-Videospiel.

Jetzt fragst du dich vermutlich: „Was genau ist Fungibilität?“

Sehen wir uns diesen Begriff aus der klassischen Wirtschaft an, um seine Bedeutung für Ethereum zu verstehen.

## Fungibel gegen nicht fungibel.

**„Fungibilität“** ist eine Eigenschaft eines Wirtschaftsguts und meint zwei Dinge:

* Beim Handel sind die Einheiten austauschbar, ohne dass sich der Wert ändert.

  (1 US-Dollar lässt sich gegen einen anderen US-Dollar tauschen, oder gegen vier 25-Cent-Münzen, oder gegen zwanzig 5-Cent-Münzen.)

* Beim Teilen behalten die kleineren Bruchteile ihre grundlegenden Eigenschaften.

  (1 US-Dollar, aufgeteilt in vier 25-Cent-Münzen, dient weiter als Wertspeicher und zum Einkaufen.)

Beispiele für fungible Güter sind Öl, Fiatgeld, Staatsanleihen und Unternehmensaktien. Diese nicht einzigartigen Werte lassen sich leicht tauschen und teilen.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Umgekehrt bedeutet **„nicht fungibel“**:

* Der Wert hat einzigartige Eigenschaften, die ihn von seinesgleichen unterscheiden und ihm einen eigenen Preis geben.

  (Ein Gemälde von Van Gogh kostet etwas anderes als eines einer aufstrebenden modernen Künstlerin, wegen Aussehen, Seltenheit, Können und Ruf dahinter.)

* Das Teilen verändert seine grundlegenden Eigenschaften.

  (Ein in vier Teile geschnittenes Gemälde hat Stücke, die einander nicht gleichen und unterschiedlich bewertet werden können. Die ursprüngliche Idee des Bildes ist außerdem dahin.)

Beispiele für nicht fungible Werte sind Immobilien, Kunst, digitale Identitäten und Zertifikate. Wegen ihrer einzigartigen Eigenschaften lassen sie sich schwerer tauschen und teilen.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Wenn du bei der Fungibilität ins Grübeln kommst, frag dich einfach: „Wie leicht lässt sich das tauschen und teilen?“ Ist es schwierig, ist es wahrscheinlich nicht fungibel!

Ethereum will „die Abwicklungsebene der Weltwirtschaft“ werden. Fungible und nicht fungible Werte eröffnen die Chance, klassische Anlageklassen onchain abzubilden und ganz neue zu schaffen!

## Standards und Token-Funktionen

Wer auf Ethereum einen neuen Token-Contract veröffentlicht, wählt einen der bestehenden Token-Standards. Damit bekommt das Token seine ersten Eigenschaften (Funktionen genannt): etwa die Gesamtmenge, ob es an eine andere Wallet übertragen werden kann und welche Informationen es tragen darf.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

ERC-20 nutzt zum Beispiel diese Funktionen:

**1\. totalSupply:** legt die Gesamtmenge eines ERC-20-Tokens fest.

Die Gesamtmenge sagt viel über wichtige Eigenschaften wie Wert und Verteilung aus.

**2\. balanceOf:** prüft den Token-Bestand einer bestimmten Adresse.

So können Dienste und Plattformen dein Guthaben prüfen, bevor sie deine Transaktion ausführen.

**3\. transfer:** überträgt Token von deiner Adresse an andere Adressen.

Jedes Mal, wenn du ein Krypto-Token aus deiner Wallet an eine andere Wallet schickst, nutzt du die transfer-Funktion.

**4\. approve:** erlaubt einer Adresse (meist einem Smart Contract), bis zu einem festgelegten Betrag im Namen deiner Wallet zu handeln.

Damit erlaubst du einer Plattform, einen bestimmten Teil deines Guthabens automatisch zu nutzen und Transaktionen auszuführen.

**5\. allowance:** liefert den Betrag, den ein Ausgeber aus einer Wallet bewegen darf.

Eine Plattform prüft damit, wie viel du ihr freigegeben hast und ob sie die Transaktion ohne deine manuelle Signatur ausführen kann.

Weil die Token-Erstellung standardisiert ist, entsteht im Ethereum-Ökosystem `Komponierbarkeit`. Wer zum Beispiel eine [dezentrale Börse (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) baut, kann jedes Token nach dem ERC-20-Standard unterstützen, weil sie sich alle ähnlich verhalten. Für jedes gelistete Token eigenen Code zu schreiben, ist nicht nötig.

Genauso muss jemand, der einen NFT-Marktplatz baut, die Plattform nur mit ERC-721 und ERC-1155 kompatibel machen, um alle NFTs auf Ethereum zu unterstützen.

Jetzt kennen wir Token-Standards, Fungibilität und Funktionen. Sehen wir uns die Einsatzzwecke der drei wichtigsten Standards auf Ethereum an.

### ERC-20: fungible Token

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) ist ein Token-Standard mit den Regeln für Contracts fungibler Token.

ERC-20-Token können alles Mögliche sein, vom `Memecoin` bis zum Zahlungsmittel auf einem dezentralen Marktplatz. Meist fallen sie in eine dieser vier Kategorien:

**1\. Utility-Token:** erfüllt einen bestimmten Zweck in einer App oder Plattform.

Beispiel: Chainlink (LINK) bezahlt die Betreiber, die Daten aus der echten Welt wie Marktpreise an Smart Contracts liefern.

**2\. Governance-Token:** gibt Haltern Stimmrecht bei Entscheidungen einer Plattform.

Beispiel: Wer Ethereum Name Service (ENS) hält, kann über Vorschläge zur Weiterentwicklung des Domain-Registers abstimmen.

**3\. Stablecoin:** soll einen stabilen Wert halten, meist gleich dem US-Dollar.

Beispiele: Tether (USDT), USD Coin (USDC) und neuere wie Skys USDS.

**4\. Security-Token:** steht für Eigentum an einem dahinterliegenden Wert, etwa Aktien eines Unternehmens.

Beispiel: tokenisierte Investmentfonds, etwa die Geldmarktfonds, die große Vermögensverwalter ab 2024 onchain herausgaben.

Ein Token kann in mehrere Kategorien fallen. Ein Governance-Token kann zum Beispiel auch einen Nutzen auf der Plattform haben.

ERC-20-Token kaufst du leicht [auf einer DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) wie Uniswap oder auf einer `zentralisierten Börse` wie Binance oder Coinbase.

### ERC-721: nicht fungible Token

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) legt die Regeln fest, nach denen Ethereum-Nutzer nicht fungible Token erstellen oder nutzen. Der Standard stellt sicher, dass jedes NFT nachweisbar einzigartig ist.

Wofür werden ERC-721-Token eingesetzt?

**1\. Eigentum an Werten:** ERC-721-Token bilden häufig das Eigentum an einzigartigen digitalen und realen Werten ab. Von diesem Eintrag im Explorer-Handbuch gibt es zum Beispiel 100 einzeln nummerierte Ausgaben, nicht nur zum Lesen, sondern zum Besitzen, wie ein Buch im digitalen Regal. (Du kannst es `minten` und besitzen, mit dem goldenen Button „Collect Entry“ oben.) Die „Datadisk Collectibles“ der Bankless Academy funktionieren genauso.

**2\. Abos und Mitgliedschaften:** Kreative, Künstler, Clubs und Unternehmen nutzen NFTs schon heute für Abos, Eintrittskarten und Mitgliedschaften. Weil die Einzigartigkeit eines NFT nachweisbar ist, gehört jedes Stück der festen Menge genau einer Person.

**3\. Treueprämien:** Starbucks führte bis März 2024 ein Treueprogramm namens Odyssey, in dem Mitglieder Aufgaben lösten und NFTs erhielten, die sie gegen digitale und reale Prämien einlösen konnten. Viele andere Marken bieten NFTs als Treueprämie an, die Nutzer einlösen oder jederzeit verkaufen können.

**4\. Identität und Zertifikate:** Mit ERC-721-Token lassen sich fälschungssichere Identitäten und Zertifikate erstellen. Sind deine digitale Identität oder deine Zeugnisse ERC-721-Token, weist du dein Eigentum leicht nach, und fast niemand kann deine Dokumente fälschen und missbrauchen.

Ein ERC-721-Token bekommst du, indem du dir auf einem NFT-Marktplatz wie [OpenSea](https://opensea.io/) ein Konto anlegst und ein angebotenes NFT kaufst. Mach vorher unsere Lektion [Web3-Sicherheit](https://app.banklessacademy.com/lessons/web3-security), um dich vor Betrug auf Marktplätzen zu schützen.

### ERC-1155: fungible und nicht fungible Token

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Oft `Multi-Token-Standard` genannt, verbindet [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) die Ideen von ERC-20 und ERC-721. Entwickler schreiben damit Contracts, die fungible und nicht fungible Token zugleich tragen. Für die Nutzung macht das kaum einen Unterschied, hilft aber, Plattformen zu optimieren. Ein Beispiel: eine fungible Spielwährung und nicht fungible Spielgegenstände in einem einzigen Contract.

Der Standard erlaubt außerdem halb fungible Token, also Token, die je nach Situation fungibel oder nicht fungibel sind. In einer Sammelkartenserie könnten etwa alle Karten derselben Seltenheit untereinander austauschbar sein, Karten unterschiedlicher Seltenheit dagegen nicht.

ERC-1155 ermöglicht auch Sammel-Transaktionen, mit denen mehrere Token-Arten auf einmal verschickt werden. Das kann die `Gas`-Kosten senken.

---

Respekt, dass du diesen langen Eintrag im Explorer-Handbuch, „Token-Standards verstehen“, geschafft hast.

Vergiss nicht, diesen Eintrag zu sammeln, wenn du ein Exemplar zum Nachschlagen auf deinen Reisen haben oder künftige Inhalte der Bankless Academy unterstützen willst. Gute Reise, Explorer!

---

## FAQ zu Ethereum-Token-Standards

### Wie entstehen Ethereum-Token-Standards?

Standards werden über ein Verfahren namens Ethereum Improvement Proposals (EIPs) vorgeschlagen und veröffentlicht. Abgestimmt wird nicht: Ein Vorschlag wird öffentlich diskutiert und verfeinert, und sobald die Community sich weitgehend einig ist, dass er funktioniert, machen Redakteure daraus einen Standard, einen Ethereum Request for Comment (ERC). Die laufende Nummer des EIP wird angehängt und ergibt den vollständigen Namen, etwa ERC-20 oder ERC-721.

### Folgt Ether (ETH) einem Token-Standard?

Nein. ETH gilt als „Coin“, nicht als „Token“, denn es hat seine eigene [Blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### Kann jeder ein Token starten?

Ja. Ethereum ist ein erlaubnisfreies Ökosystem, jeder kann ein fungibles oder nicht fungibles Token starten. Du brauchst dafür aber technisches Wissen oder Werkzeuge ohne Programmierung.

### Wenn zwei Token denselben Namen haben, woran erkenne ich das echte?

Prüfe die Contract-Adresse, unter der das gewünschte Token veröffentlicht wurde, und gleiche sie mit der offiziellen Dokumentation des Projekts ab. So gerätst du nicht an einen bösartigen Token-Contract, der deine Wallet leeren könnte.

### Gibt es außer ERC-20, 721 und 1155 noch andere Token-Standards auf Ethereum?

Ja. Manche sind weit verbreitet, etwa [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), ein gemeinsamer Standard für `Vault`-Token, die Einlagen mit Rendite in DeFi abbilden. Neuere Standards decken auch `Smart Accounts` ab, also Wallets, die eigenen Code ausführen. Andere wie [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) und [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948) haben sich nie durchgesetzt oder decken sehr enge Nischen ab.

---

**Autoren**

**[Musharraf](https://x.com/musharrafff)** ist Mitgründer von Unhashed. Er unterstützt Web3-Projekte bei Inhaltsstrategie und Umsetzung.

**[Tetranome](https://twitter.com/Tetranome)** ist Project Champion bei Bankless Academy und kümmert sich um Nutzererfahrung, Oberfläche, Design und Inhalte.

**Redaktion**

**[Trewkat](https://twitter.com/trewkat)** ist Autorin und Redakteurin bei BanklessDAO. Sie will so viel wie möglich über Krypto und NFT lernen, mit besonderem Blick darauf, wie man dieses Wissen am besten vermittelt.

**Förderer**

Dieser Artikel ohne Sponsor ist Teil deiner kostenlosen Bankless-Academy-Ausbildung. Sammle den Artikel, um künftige Inhalte zu unterstützen!
