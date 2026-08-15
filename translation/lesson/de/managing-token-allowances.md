---
TITLE: Token-Freigaben verwalten
DESCRIPTION: Schütze deine Wallet vor ungewollten Smart-Contract-Interaktionen.
LANGUAGE: Deutsch
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
## Wichtigste Erkenntnisse

> * Token-Freigaben sind Erlaubnisse an `Smart Contracts`, Token aus einer Wallet auszugeben, ohne jedes Mal neu zu fragen.
>
> * Angreifer können sie ausnutzen, wenn Nutzer nicht wissen, dass solche Erlaubnisse bestehen.
>
> * Werkzeuge wie Revoke.cash machen es leicht, Token-Freigaben zu prüfen und zu widerrufen.

## Einführung

DeFi gibt Nutzern die Kontrolle über ihre Werte, auch über ihre `privaten Schlüssel`, und damit eine bisher unbekannte Hoheit über das eigene Geld. Doch mit großer Macht kommt größere Verantwortung: Du musst die Sicherheit und Verwaltung deiner Werte selbst in die Hand nehmen.

Vier Arten von Betrug sollten DeFi-Nutzer kennen:

* **Kompromittierte Seed-Phrase:** Angreifer versuchen, dich zur Preisgabe deiner Seed-Phrase zu bringen, um unbefugt an dein Geld zu kommen. Mit deiner Seed-Phrase können sie deine Wallet leeren, immer wieder, auch wenn du später neues Geld einzahlst. Davon erholt man sich leider nicht: Die einzige Lösung ist eine völlig neue Wallet mit neuer `Seed-Phrase`.

* **Direkte ETH-Überweisungen:** Betrüger tarnen ETH-Überweisungen als Funktionsaufruf, etwa als „Security Update“. Die rohe Signaturmethode hinter älteren Varianten dieser Masche hat MetaMask entfernt; moderne Phishing-Baukästen missbrauchen stattdessen harmlos aussehende Signaturanfragen und setzen darauf, dass du unterschreibst, ohne zu lesen, was deine Wallet anzeigt. Wer darauf hereinfällt, bekommt sein Geld nicht zurück, kann die Wallet aber weiter sicher für andere Transaktionen nutzen.

* **Angebote auf NFT-Marktplätzen:** Sei vorsichtig bei gefälschten Angeboten und bösartigen Contracts, die die Freigaben für Marktplätze wie OpenSea ausnutzen. Betrüger bringen dich womöglich dazu, eine `offchain`-Nachricht zu signieren, die deine freigegebenen `NFTs` zum Verkauf stellt, ganz ohne echte Token-Transaktion.

* **Token-Freigaben:** Angreifer können Erlaubnisse so verdrehen, dass sie an mehr Geld kommen als ursprünglich freigegeben. „Approvals“ sind Onchain-Transaktionen, die Zugriff auf deine Token oder NFTs geben. „Permits“ geben denselben Zugriff, brauchen aber nur eine gaslose Offchain-Signatur. Uniswap und die meisten modernen Handels-Apps nutzen dieses System (Permit2). Permit-Signaturen tauchen erst als Onchain-Freigabe auf, wenn sie eingelöst werden, und können ein Ablaufdatum haben; in der Ansicht „Signatures“ von Revoke.cash kannst du sie prüfen und abbrechen.

  Je beliebter Smart Contracts werden, desto nötiger sind `Token-Freigaben`: Nur so führen vertraute Contracts Transaktionen aus, ohne dass du private Schlüssel preisgibst. Token-Freigaben erlauben dApps, in deinem Namen automatisch Token in deiner Wallet zu bewegen. Das ist bequem und effizient, öffnet aber auch Angriffswege über Betrug und unbefugten Zugriff.

In diesem Artikel geht es um „Token-Freigaben“ und um ein Werkzeug aus der Community, das beim Verwalten deiner Erlaubnisse hilft.

## Token-Freigaben verstehen, verwalten und sicher halten

Token-Freigaben sind Erlaubnisse, die du Smart Contracts im Voraus gibst, um Token aus deiner Wallet auszugeben. Sie sind wichtig, damit nicht jede direkte Übertragung aus der Wallet einzeln bestätigt werden muss. Werden sie missbraucht, werden sie für Ahnungslose zum Angriffsweg. Deshalb sollten DeFi-Nutzer vorsichtig sein, sich mit der Sicherheitslage befassen und verstehen, wie Token-Freigaben wirklich funktionieren.

Eine Erlaubnis an einen fremden Contract entsteht in zwei Schritten:

1. Wallet-Verbindung: Verbindest du deine Wallet mit einer dApp, teilst du nur deine Wallet-`Adresse` mit deren Oberfläche, damit sie Guthaben und Aktivität anzeigen kann. Die Verbindung allein gibt keine Onchain-Rechte.

2. Token-Freigabe: Um mit der dApp zu handeln, erlaubst du danach ihrem Smart Contract, bestimmte Token in deinem Namen zu bewegen. Erst dieser Schritt gibt echte Ausgabemacht.

Wer seine Token-Freigaben aktiv verwaltet, stellt sicher, dass kein Contract mehr aus der Wallet abbucht als ursprünglich festgelegt. Zum Glück gibt es Werkzeuge aus der Community, die DeFi-Nutzern Sicherheit und ein ruhiges Gewissen geben.

## Anleitung: Revoke.cash nutzen

Mit [Revoke.cash](https://revoke.cash/) verwaltest du deine Token-Freigaben ganz einfach: Die Website zeigt und überwacht die Freigaben, die du verschiedenen dApps gegeben hast. Sehen wir uns Schritt für Schritt an, wie du mit diesem starken Community-Werkzeug deine Werte schützt und die Kontrolle über deine Wallet zurückholst.

**1\. Verbinde deine Wallet**:

Geh zu [Revoke.cash](http://revoke.cash/) und klicke oben rechts auf „Connect Wallet“ (Wallet verbinden). Alternativ tippst du deine öffentliche Wallet-Adresse in die Suchleiste. Sobald alles geladen ist, siehst du eine Liste aller deiner `Token-Genehmigungen` in diesem Netzwerk.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Prüfe deine Freigaben**:

Ist die Wallet verbunden, kannst du deine bestehenden Freigaben ansehen. Du kannst sie sortieren, filtern oder nach der Adresse des berechtigten Ausgebers suchen. Die Sortierung „Newest to Oldest“ (neueste zuerst) hilft besonders, wenn du eine kürzlich erteilte bösartige Freigabe vermutest. Verschaff dir mit den Sortier- und Filteroptionen einen Überblick über alle erteilten Token-Freigaben. Freigaben gelten pro Chain, wiederhole die Prüfung also über die Netzwerkauswahl für jedes Netzwerk, das du nutzt.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Widerrufe unerwünschte Freigaben:**

Hast du die Freigaben gefunden, die weg sollen, klicke einfach neben jeder auf „Revoke“ (widerrufen). Du kannst den Betrag auch ändern, indem du auf das Stiftsymbol neben dem freigegebenen Betrag klickst, falls du die Freigabe künftig noch brauchst, aber dein Risiko senken willst.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Eine Token-Freigabe zu widerrufen oder anzupassen lohnt sich zum Beispiel, wenn:

1. Ein frisch veröffentlichter Smart Contract ausgenutzt wird und eine Lücke in einer `dezentralen Börse` aufreißt, die du regelmäßig nutzt.

   Im April 2023 traf ein solcher Angriff die bekannte `DEX` SushiSwap, rund 3,5 Millionen Dollar wurden Nutzern gestohlen. Wer seine Token-Freigabe nicht widerrufen hatte, blieb gefährdet.

2. Ein bösartiger Governance-Vorschlag mehrere Contracts ändert, um Nutzergelder abzuziehen.

   Über 2,5 Millionen Dollar an Werten waren betroffen, als Atlantis Loans, ein `DeFi`-Protokoll auf einer BNB-Chain, einen Governance-Vorschlag ausführte, der auf mehrere Contracts zielte. Wer sein Freigabelimit im Griff hatte, verringerte das Risiko, dass die Wallet komplett geleert wurde.

## Vergiss die Delegationen nicht

Seit Ethereums Pectra-Upgrade (Mai 2025) sind Freigaben nicht mehr die einzige Erlaubnis, die eine Prüfung verdient. Eine neuere Wallet-Funktion (EIP-7702) lässt deine Wallet an zusätzlichen Code delegieren. Das ermöglicht Bequemlichkeiten wie gebündelte Transaktionen, aber auch einen neuen Trick der Leerräumer: Eine einzige bösartige Signatur installiert „Sweeper“-Code, der alles sofort an einen Angreifer weiterleitet, was du einzahlst, ganz ohne dass deine Seed-Phrase je preisgegeben wurde. 2025 fanden Forscher von Wintermute heraus, dass über 97 % der frühen Wallet-Delegationen auf identischen Sweeper-Code zeigten.

Revoke.cash zeigt deine aktiven Delegationen im Reiter „Delegations“. Weil Delegationen aber von deiner Wallet gesteuert werden und nicht von dApps, widerrufst du eine unerwünschte Delegation in der Wallet selbst. In MetaMask öffnest du die Kontodetails und stellst das Konto zurück auf ein Standardkonto. Hast du nie bewusst auf einen `Smart Account` umgestellt, behandle jede gefundene Delegation als feindlich.

---

Zeit, die Abwehr unserer Wallet zu stärken! Wir hoffen, dieser Eintrag im Explorer-Handbuch, „Token-Freigaben verwalten“, hat dir gefallen.

Vergiss nicht, diesen Eintrag zu sammeln, wenn du ein Exemplar zum Nachschlagen auf deinen Reisen haben oder künftige Inhalte der Bankless Academy unterstützen willst. Gute Reise, Explorer!

---

## FAQ

### Wann sollte ich Revoke.cash nutzen?

Nutze Revoke.cash regelmäßig, vor allem in Zeiten, in denen du eine dApp gerade nicht verwendest, und besonders bei NFT-Marktplätzen. Weniger Freigaben heißt weniger Risiko, bei Hacks, Exploits oder Phishing Geld zu verlieren. Sortierst du deine Freigaben nach den neuesten, erkennst du verdächtige Einträge und kannst sie schnell widerrufen, bevor mehr Schaden entsteht.

### Schützt mich das Trennen meiner Wallet vor Freigabe-Angriffen?

Nein. Trennst du deine Wallet von einer dApp, schützt dich das weder vor Freigabe-Angriffen noch vor anderen. Bereits erteilte Token-Genehmigungen bleiben aktiv, weil sie onchain gespeichert sind.

### Wie vermeide ich Angriffe über Token-Freigaben und ähnliche Risiken?

Wer vorausschauend mit Token-Freigaben umgeht:

* erteilt Freigaben nur an vertrauenswürdige dApps.

* prüft Token-Freigaben regelmäßig.

* entfernt unnötige oder verdächtige Freigaben.

* achtet auf Wallet-Delegationen, die er nicht kennt.

* bleibt über Sicherheitsupdates der dApps informiert.

Denk auch an Werkzeuge von Dritten wie die [Browser-Erweiterung](https://revoke.cash) von Revoke.cash: Sie wirkt vorbeugend gegen mögliche Bedrohungen. Die Erweiterung warnt dich, bevor du etwas potenziell Schädliches signierst, und schützt so vor Phishing und anderen bösartigen Aktionen.

### Kann ich mit Revoke.cash Geld zurückholen?

Leider nicht. Revoke.cash holt gestohlenes Geld nicht zurück. Es ist ein Werkzeug zur Vorbeugung, das die Wahrscheinlichkeit senkt, Opfer eines Freigabe-Angriffs zu werden. Die Freigaben zu widerrufen, über die dein Geld gestohlen wurde, verhindert aber weitere Diebstähle.

### Warum wird meine Wallet nach jedem Aufladen wieder leergeräumt?

Vermutlich hat es deine Wallet mit einem „Sweeper-Bot“ zu tun, einem Skript, das eine kompromittierte Wallet beobachtet und jede neue Einzahlung sofort abzieht, bevor du reagieren kannst. Eine Ursache ist eine kompromittierte Seed-Phrase. Dann hilft es nicht, Freigaben zu widerrufen: Gib die Wallet auf und erstelle eine neue. Ebenso wahrscheinlich ist aber eine bösartige Wallet-Delegation, also Sweeper-Code, der über eine erschlichene Signatur installiert wurde, ohne dass deine Seed-Phrase je durchgesickert ist. Sieh im Reiter „Delegations“ bei Revoke.cash nach. Findest du eine Delegation, die du nicht kennst, widerrufe sie in deiner Wallet (in MetaMask etwa über die Kontodetails). Gibt es keine Delegation und geht das Leerräumen weiter, geh von einer kompromittierten Seed-Phrase aus und wechsle zu einer frischen Wallet.

---

**Autor**

**[Marcus](https://twitter.com/estmcmxci)** gibt den ENS DAO Newsletter heraus. Er erforscht, wie Überschüsse aus Protokollgebühren die Entwicklung auf Anwendungsebene und andere Open-Source-Infrastruktur mitfinanzieren können.

**Redaktion**

**[Tetranome](https://twitter.com/Tetranome)** ist Project Champion bei Bankless Academy und kümmert sich um Nutzererfahrung, Oberfläche, Design und Inhalte.

**[Trewkat](https://twitter.com/trewkat)** ist Autorin und Redakteurin bei BanklessDAO. Sie will so viel wie möglich über Krypto und NFT lernen, mit besonderem Blick darauf, wie man dieses Wissen am besten vermittelt.

**Förderer**

Dieser Artikel ohne Sponsor ist Teil deiner kostenlosen Bankless-Academy-Ausbildung. Sammle den Artikel, um künftige Inhalte zu unterstützen!
