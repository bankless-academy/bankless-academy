---
TITLE: Blockchain-Grundlagen
DESCRIPTION: Lerne die grundlegende Architektur der Blockchain-Technologie kennen.
LANGUAGE: Deutsch
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

# Einführung

Die `Blockchain`-Technologie speichert und verfolgt Daten auf revolutionäre Weise und macht sie für alle zugänglich. Sie ordnet Daten in einer einzigen öffentlichen Liste aller bisherigen Transaktionen, die jeder ansehen, aber niemand ändern kann. Diese öffentliche Liste heißt das Blockchain-`Kontobuch`.

Wenn du die Ebenen einer Blockchain kennst, verstehst du auch, was ein `Block-Explorer` anzeigt: die **Liste** der Blöcke, die **Transaktionen** darin und die **Details** jeder einzelnen Transaktion. Probiere es mit [Etherscan](https://etherscan.io/), einem beliebten Block-Explorer für Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Aufbau einer Blockchain

Blockchain kann ein Hauptwort sein (die Bitcoin-Blockchain) oder ein Eigenschaftswort (Blockchain-Technologie). So oder so meint `Blockchain` die gesamte Struktur, auf der Kryptowährungen aufbauen.

Von außen betrachtet hat eine Blockchain 3 Ebenen:

1. Die gesamte `Blockchain` besteht aus Blöcken, die der Reihe nach verkettet sind
2. `Blöcke` bestehen aus Gruppen von Transaktionen
3. `Transaktionen` übertragen Werte zwischen `Adressen` im Netzwerk oder geben Programmen Anweisungen

Diese drei Ebenen ergeben zusammen ein kryptografisches Kontobuch: eine unveränderliche Geschichte aller Transaktionen im Netzwerk.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Was ist eine Blockchain?

- [ ] Geordnete Gruppen von Transaktionen, Blöcke genannt

> ℹ️ Versuch es nochmal! Blöcke gehören dazu, sind aber nicht die einzige richtige Antwort.

- [ ] Ein geteiltes Register, das jeder sehen, aber niemand ändern kann

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Antwort.

- [ ] Blöcke, die der Reihe nach verkettet sind

> ℹ️ Versuch es nochmal! Das beschreibt die Kette der Blöcke, ist aber nicht die einzige richtige Antwort.

- [x] Alle genannten Antworten

> ℹ️ Richtig! Alle drei stimmen: Eine Blockchain ist ein geteiltes, unveränderliches Register aus Transaktionen in verketteten Blöcken.

# Das Kontobuch ansehen

In üblichen Geldsystemen vertrauen wir Dritten wie Banken, dass sie festhalten, wie viel Geld jeder hat. Wirklich bankless sind wir aber erst mit einem System, das keiner einzelnen Instanz vertrauen muss.

Das `Kontobuch` ist die Liste ALLER Transaktionen einer Blockchain. Bei `öffentlichen` Blockchains kann sie jeder einsehen. Abgegrenzte Gruppen dieser Transaktionen bilden die Blöcke, die zusammen die Blockchain ergeben.

Kommen neue Transaktionen dazu, aktualisieren sich die Guthaben jeder `Adresse`; alte Transaktionen bleiben unveränderlich. Es ist, als dürfte jeder jederzeit die gesamte Kontohistorie aller Menschen einsehen.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transaktionen im Kontobuch

Schauen wir uns ein paar Beispieltransaktionen an:

- Alice sendet 5 ETH an Bob
- Bob sendet 2 ETH an Charlie

Einzelne Transaktionen zeigen die _Veränderung_ der Kryptomenge je Adresse. Das Gesamtergebnis aller Transaktionen IST also die Kryptomenge, die jede Adresse besitzt.

---

⇒ Alice hat 5 ETH verloren

⇒ Bob hat insgesamt 3 ETH gewonnen (5 erhalten, 2 gesendet)

⇒ Charlie hat 2 ETH gewonnen

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Was gilt für öffentliche Blockchain-Kontobücher?

- [ ] Alle Transaktionen sind öffentlich und alte unveränderlich

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige wahre Aussage.

- [ ] Das Kontobuch zeigt, wie viel Krypto jede Adresse gerade hat

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige wahre Aussage.

- [ ] Das Kontobuch wächst mit jeder neuen Transaktion

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige wahre Aussage.

- [x] Alle genannten Antworten

> ℹ️ Richtig! Das Kontobuch ist öffentlich und unveränderlich, hält Guthaben aktuell und wächst mit jeder Transaktion.

# Dezentralisierung

Transaktionen in einem `Blockchain`-Kontobuch sind nicht nur unveränderlich, sie sind auch über ein großes Netzwerk von Computern verteilt. Damit keine einzelne Instanz die Daten ändern kann, liegen Kopien des Kontobuchs auf vielen Computern im Netzwerk, den `Nodes`.

Diese geteilten Daten machen das Kontobuch `dezentral`. Keine einzelne Autorität kontrolliert die Daten. Blockchains wie Ethereum sind außerdem `öffentlich`, weil jeder das Kontobuch einsehen kann.

Für diese Lektion merke dir: Die Daten des Kontobuchs sind über die vielen Computer verteilt, die das Ethereum-Netzwerk betreiben.

# Knowledge Check 3

Was macht eine Blockchain dezentral?

- [ ] Nur eine Instanz darf in die Blockchain schreiben

> ℹ️ Versuch es nochmal! Eine einzelne Instanz an der Kontrolle ist das Gegenteil von Dezentralisierung.

- [ ] Sie erfüllt staatliche Vorgaben für Dezentralisierung

> ℹ️ Versuch es nochmal! Dezentralisierung entsteht durch den Aufbau des Netzwerks, nicht durch eine Behörde.

- [x] Keine einzelne Instanz kontrolliert das verteilte Kontobuch

> ℹ️ Richtig! Kopien auf vielen Nodes sorgen dafür, dass niemand allein die Daten kontrollieren oder ändern kann.

- [ ] Das Kontobuch liegt auf einem einzigen sicheren Server

> ℹ️ Versuch es nochmal! Ein einzelner Server wäre ein zentraler Punkt. Kopien liegen auf vielen Nodes.

# Aufbau eines Blocks

Eine wichtige Eigenschaft von Blockchains: Transaktionsdaten lassen sich nicht mehr ändern, sobald sie in einem Block stehen. Denn jeder Block hat einen eigenen `Block-Hash`, einen Fingerabdruck, der die Blöcke nacheinander verkettet. Niemand kann alte Transaktionen ändern, ohne diesen Fingerabdruck und den JEDES folgenden Blocks zu ändern, denn jeder Fingerabdruck hängt vom vorherigen ab.

Ein `Block` ist also einfach eine Gruppe von Transaktionen plus ein eigener Fingerabdruck (sein `Block-Hash`), berechnet aus dem Inhalt des Blocks. Die Blöcke sind verkettet, weil jeder auf den Fingerabdruck des vorherigen Blocks verweist. So entsteht eine zusammenhängende Block**kette**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Wozu dient ein Block-Hash?

- [ ] Er verschlüsselt Blockdaten, damit niemand sie lesen kann

> ℹ️ Versuch es nochmal! Blockdaten bleiben öffentlich lesbar. Der Hash ist ein Fingerabdruck, keine Verschlüsselung.

- [x] Er verkettet Blöcke und hält alte Daten unveränderlich

> ℹ️ Richtig! Jeder Block verweist auf den Fingerabdruck des vorherigen. Eine Änderung würde alle folgenden Blöcke brechen.

- [ ] Er sorgt dafür, dass Geld an die richtige Adresse geht

> ℹ️ Versuch es nochmal! Wohin Geld geht, regeln Adressen. Der Block-Hash verkettet die Blöcke.

- [ ] Er hält die Blockchain dezentral

> ℹ️ Versuch es nochmal! Dezentralisierung entsteht durch die Verteilung des Kontobuchs auf viele Nodes, nicht durch den Hash.

# In einem Block

Denk dran: Die Daten eines `Blocks` sind einfach eine Gruppe von Transaktionen. Öffnen wir einen einzelnen Block, sehen wir eine Liste von Transaktionen und Daten dazu, wer den Block erstellt hat.

Unsere beiden Beispieltransaktionen von vorhin können zusammen in einem Block stehen oder sich über mehrere Blöcke verteilen. Egal in welchem Block sie landen: Am Ende kommen sie alle ins Kontobuch der Blockchain.

- Alice sendet 5 ETH an Bob
- Bob sendet 2 ETH an Charlie

Denk daran, dass jeder Block auch den `Block-Hash` des vorherigen Blocks nennen muss, damit die Blockchain verkettet bleibt.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Welche Informationen stehen in einem Block?

- [ ] Alle Informationen aus den vorherigen Blöcken

> ℹ️ Versuch es nochmal! Ein Block nennt nur den Hash des vorherigen Blocks. Er kopiert keine alten Daten.

- [ ] Alles Passende, denn die Blockgröße ist unbegrenzt

> ℹ️ Versuch es nochmal! Ein Block ist eine abgegrenzte Gruppe von Transaktionen, kein unbegrenzter Behälter.

- [x] Transaktionsdaten und ein Verweis auf den vorherigen Block

> ℹ️ Richtig! Ein Block ist eine Gruppe von Transaktionen plus der Hash des vorherigen Blocks, der die Kette bildet.

- [ ] Alle Transaktionsdaten aus einem festen Zeitraum

> ℹ️ Versuch es nochmal! Transaktionen können in einem Block stehen oder sich über mehrere Blöcke verteilen.

# Einzelne Transaktionen

Die Daten jeder Blockchain sind einfach eine Liste von `Transaktionen`, also Aufzeichnungen über Geld, das zwischen Nutzern bewegt wurde. Jede Transaktion braucht die `digitale Signatur` des Absenders, um gültig zu sein.

Genau das tust du, wenn du eine Transaktion in deiner Wallet bestätigst: Du signierst sie digital und erlaubst sie damit. Das ist das digitale Gegenstück zum Unterschreiben eines Schecks, einer Quittung oder einer Kartenzahlung.

Transaktionen können einfach sein, etwa Krypto senden, oder komplexer, etwa Krypto tauschen oder speziellen Code veröffentlichen, der bei Bedarf läuft: `Smart Contracts`.

Jede Transaktion hat außerdem eine eindeutige Kennung, ihren `Transaktions-Hash`. So lässt sich jede einzelne Transaktion später leicht wiederfinden, und ihre Details bleiben unveränderlich.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Daten auf einer Blockchain sind einfach eine Liste von Transaktionen in Blöcken. Beispiele dafür sind:

- [x] Krypto senden oder empfangen

> ℹ️ Richtig! Transaktionen halten fest, wie Geld zwischen Nutzern bewegt wird, von einfachen Überweisungen bis zu Smart Contracts.

- [ ] Die Größe des Blocks ändern

> ℹ️ Versuch es nochmal! Die Blockgröße kann eine Transaktion nicht ändern.

- [ ] Alte Blockchain-Daten bearbeiten

> ℹ️ Versuch es nochmal! Alte Blockchain-Daten lassen sich nicht ändern. Das ist ein Kernmerkmal von Blockchains.

- [ ] Alle genannten Antworten

> ℹ️ Versuch es nochmal! Nur eine der Antworten ist eine gültige Blockchain-Transaktion.

# Adressen der Nutzer

Eine `Adresse` ist eine öffentliche Kennung, die jeder auf der Blockchain nachschlagen kann. Wie bei einer E-Mail-Adresse kann jeder Geld dorthin senden, aber nur wer den `privaten Schlüssel` besitzt, kann das Guthaben dort nutzen.

Auf Ethereum beginnt eine Adresse immer mit \_0x\_\_\_\_\_\_\_\_\_\_ und besteht aus 42 Zeichen aus Zahlen und Buchstaben, abgeleitet vom `öffentlichen Schlüssel` dieser Adresse.

Sehen wir uns eine einzelne Transaktion in einem Block-Explorer an, erkennen wir die Adressen unter From: und To:. Wer diese Adressen kontrolliert, verrät das nicht, aber jeder kann so die Bewegung von Kryptowährung im Kontobuch verfolgen.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Was stimmt über Blockchain-Adressen?

- [ ] Sie sind die öffentlichen Kennungen verschiedener Akteure

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige wahre Aussage.

- [ ] Auf Ethereum beginnen sie immer mit _0x_

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige wahre Aussage.

- [ ] Wer den privaten Schlüssel hat, kann das Guthaben nutzen

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige wahre Aussage.

- [x] Alle genannten Antworten

> ℹ️ Richtig! Adressen sind öffentliche Kennungen, beginnen auf Ethereum mit 0x, und ihr Guthaben öffnet der private Schlüssel.
