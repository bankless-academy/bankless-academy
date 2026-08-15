---
TITLE: Auf einer dezentralen Börse tauschen
DESCRIPTION: Starte in DeFi mit dieser Anleitung für eine dezentrale Börse.
LANGUAGE: Deutsch
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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
## Wichtigste Erkenntnisse

> * Dezentrale Börsen sind eine Art dApp, die Token-Tausche in Selbstverwahrung ermöglicht.
>
> * Für den sicheren Umgang mit einer DEX braucht es etwas praktisches Wissen.
>
> * Mit Block-Explorern prüfen wir unsere Onchain-Transaktionen.

Die dezentrale Börse (DEX) ist die meistgenutzte Anwendung der `Decentralized Finance` (DeFi), und das aus gutem Grund! DEX tauschen automatisch ein Krypto-Token gegen ein anderes, ganz ohne Vermittler. Anders als bei zentralisierten Börsen (CEX) behältst du dabei die volle Verfügung über deine Werte.

Autonomie und erlaubnisfreie Protokolle sind das Rückgrat von DeFi. Sie geben Nutzern echtes Eigentum an ihren digitalen Werten und rund um die Uhr Zugang zu grundlegenden Blockchain-Diensten. Jeder mit einer Internetverbindung kann DeFi nutzen, unabhängig von Herkunft, Überzeugung oder Wohnort.

In diesem Handbuch-Eintrag zeigen wir, wie du mit deiner Wallet in Selbstverwahrung eine DEX bedienst und ein Token gegen ein anderes tauschst. Mehr über Technik, Eigenschaften und Risiken dieser Technologie und den Vergleich mit CEX findest du in unserer Lektion [Dezentrale Börsen](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Die richtige DEX wählen

Der erste Schritt zu einem Token-Tausch ist die Wahl einer günstigen und sicheren Plattform. In dieser Anleitung nutzen wir Velodrome, eine etablierte DEX im Optimism-Netzwerk. Mit mehr Erfahrung auf der Blockchain lernst du, andere Börsen zu bewerten und die passende für dich zu finden. Unsere Lektion [Dezentrale Börsen](https://app.banklessacademy.com/lessons/decentralized-exchanges) enthält eine ausführliche Liste der Kriterien.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

DEX sind ein guter Start in deine Web3-Reise, denn die meisten dApps haben eine ähnliche Oberfläche und arbeiten auf die gleiche Weise mit deiner Wallet in Selbstverwahrung.

Beginnen wir mit dem Token-Tausch.

## Einen Token-Tausch durchführen

**1\. Öffne die dApp:**

Öffne [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) in einem neuen Browser-Tab.

**2\. Verbinde deine Wallet:**

Nutze den üblichen Button „Connect“ (Verbinden), meist oben rechts in jeder dApp.

Am Computer verbindest du dich mit deiner Browser-Wallet.

Auf dem Handy erscheint eine Verbindungsaufforderung, mit der du deine mobile Wallet an die dApp koppelst.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Bestätige die Verbindung:**

Wähle in deiner Wallet-App „Connect“, um die Verbindung zur Seite zu bestätigen. Damit sieht die dApp deine Wallet-Adresse und deine Token-Bestände. Weitere Rechte hast du noch nicht vergeben.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Prüfe die Nutzungsbedingungen und signiere sie (wenn du zustimmst):**

Viele dApps bitten dich, eine Nachricht zu signieren, mit der du die Kenntnisnahme der Bedingungen bestätigst. Eine Nachricht zu signieren kostet kein Gas und speichert nichts auf der Blockchain. Bist du mit den Bedingungen einverstanden, kannst du signieren.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Wechsle ins richtige Netzwerk:**

Für diese Anleitung muss deine Wallet auf das Optimism-Netzwerk eingestellt sein.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. Stelle deinen Tausch ein:**

Jetzt wählst du dein Eingangs- und dein Zieltoken. In diesem Beispiel tauschen wir ETH gegen OP, aber du kannst tauschen, was du willst!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Erteile die Token-Freigabe (nur bei Token-Tauschen):**

Tauschst du ein Token wie USDC, fragt deine Wallet zuerst nach einer Freigabe für Velodrome. Beschränke die Freigabe am besten auf deinen Trade-Betrag. ETH ist die native Währung des Netzwerks und braucht keine Freigabe, deshalb geht die Wallet in unserem Beispiel direkt zur Bestätigung des Tauschs.

**8\. Bestätige die Transaktion:**

Wenn dir Kurs und Einstellungen zusagen, kannst du den Tausch starten. Dazu bestätigst du einmal in der dApp und noch einmal in deiner Wallet.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Prüfe dein Guthaben:**

Die Transaktion sollte in wenigen Sekunden bestätigt sein, danach siehst du den neuen Token-Bestand in deiner Wallet. Wird dein Token nicht angezeigt, prüfe, ob du die Token-Adresse importiert hast.

*Contract-Adresse des Optimism-Tokens: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. Hole dir den Transaktions-Hash:**

Für die Quest unserer Lektion [Dezentrale Börsen](https://app.banklessacademy.com/lessons/decentralized-exchanges) brauchst du den ***Transaktions-Hash des Tauschs*** (nicht zu verwechseln mit dem Hash einer Freigabe-Transaktion oder mit deiner Wallet-Adresse). Meist erscheint in der DEX-Oberfläche ein Link zu einem Block-Explorer, über den du die bestätigte Transaktion ansiehst. Hast du ihn verpasst oder fehlt er, findest du im Aktivitätsprotokoll deiner Wallet einen weiteren Link direkt zu deinem Trade.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

Zeit, die Welt des dezentralen Handels zu erkunden! Wir hoffen, dieser Eintrag im Explorer-Handbuch, „Auf einer dezentralen Börse tauschen“, hat dir gefallen.

Vergiss nicht, diesen Eintrag zu sammeln, wenn du ein Exemplar zum Nachschlagen auf deinen Reisen haben oder künftige Inhalte der Bankless Academy unterstützen willst. Gute Reise, Explorer!

---

## Häufige Fragen

### Warum ändert sich mein Kurs mehrmals pro Minute?

Kurse werden in dem Moment berechnet, in dem du deinen Tausch in die DEX-Oberfläche eingibst. In der Zwischenzeit tauschen andere Nutzer und verändern das Token-Angebot auf der Börse. Die DEX aktualisiert deinen Kurs deshalb regelmäßig.

### Wie lange dauert ein Token-Tausch?

Das hängt von mehreren Faktoren ab, vor allem von der Blockgeschwindigkeit der Blockchain und davon, wie viel Gas-Gebühr du zahlst. Eine DEX-Transaktion auf dem Ethereum Mainnet ist meist in 12 Sekunden bis wenigen Minuten bestätigt. Auf Layer 2 geht es in der Regel schneller!

### Warum ist meine Transaktion fehlgeschlagen?

Dafür gibt es mehrere Gründe: zu wenig Guthaben für das Gas, ein zu niedriges Gas-Limit oder eine zu niedrige Slippage-Toleranz. Am besten suchst du zuerst nach Fehlermeldungen in der Oberfläche. Du kannst deine Transaktion auch in einem Block-Explorer wie [Etherscan](https://optimistic.etherscan.io/) ansehen und dort nach Onchain-Fehlermeldungen suchen. Bewegen sich die Preise schneller als dein Trade, erhöhe die `Slippage-Toleranz` in den DEX-Einstellungen. Viele Wallets und DEX bieten außerdem eine geschützte Weiterleitung, die deinen Tausch vor `MEV`-Bots abschirmt, die an wartenden Trades verdienen wollen.

### Kann ich Token-Freigaben ändern oder entfernen?

Eine Freigabe an einen Smart Contract kann unsere Wallet für ungewollte spätere Zugriffe öffnen, falls der Contract gehackt wird. Ändern oder entfernen lassen sich Freigaben mit Apps wie [Revoke.cash](https://revoke.cash/). Weil das Gas kostet, wird diese Vorsicht schnell teuer. Auch deshalb bewahren viele Nutzer ihre digitalen Werte in einer Wallet auf (Cold-Wallet) und arbeiten mit dApps aus einer anderen (Trading-Wallet). Zwischen beiden wird nur bei Bedarf übertragen.

### Warum kann ich das gesuchte Token nicht tauschen?

Steht dein Token nicht in der Standardliste, musst du seine Contract-Adresse dort einfügen. Die findest du auf <https://www.coingecko.com/> oder auf der offiziellen Website des Projekts.

**Hinweis:** Die Adresse desselben Tokens ändert sich von Netzwerk zu Netzwerk. Der [USDC-Contract auf dem Mainnet](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) unterscheidet sich zum Beispiel vom [USDC-Contract auf Optimism](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85). Prüfe Token-Adressen immer vor dem Tausch!

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** ist Project Champion bei Bankless Academy und kümmert sich um Nutzererfahrung, Oberfläche, Design und Lehrplan der Plattform.

**Redakteurin**

**[Trewkat](https://twitter.com/trewkat)** ist Autorin und Redakteurin bei BanklessDAO. Sie will so viel wie möglich über Krypto und NFT lernen, mit besonderem Blick darauf, wie man dieses Wissen am besten vermittelt.

**Förderer**

Dieser Artikel ohne Sponsor ist Teil deiner kostenlosen Bankless-Academy-Ausbildung. Sammle den Artikel, um künftige Inhalte zu unterstützen!
