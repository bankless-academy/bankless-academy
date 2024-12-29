---
TITLE: Blockchain Grundlagen
DESCRIPTION: Erfahre mehr über die grundlegende Architektur der Blockchain-Technologie.
LANGUAGE: Deutsch
WRITERS: iSpeakNerd
TRANSLATORS: Ruben Silva Otero
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

Die `Blockchain`-Technologie ist ein revolutionäres Verfahren zur Speicherung und Verfolgung von Daten und macht diese Daten gleichzeitig für jeden zugänglich. Es handelt sich dabei um eine Möglichkeit, Daten aller historischen Transaktionen in einer einzigen öffentlich zugänglichen Liste zu organisieren, die jeder einsehen, aber nicht bearbeiten kann. Diese öffentliche Liste der Transaktionen wird als Blockchain `Register` [ledger] bezeichnet.

Nachdem wir die Ebenen einer Blockchain untersucht haben, werden wir ein Blockchain-Tool namens `Block Explorer` verwenden, um die Besonderheiten der Ethereum-Blockchain-Struktur zu untersuchen; wir werden in die Ethereum-Blockchain hineinzoomen, um die **Liste** der Blöcke, die **Transaktionen** innerhalb dieser Blöcke und die **Details** jeder einzelnen Transaktion zu sehen.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-6d0b6137.svg)

# Struktur der Blockchain

Der Begriff Blockchain kann als Substantiv - die Bitcoin-Blockchain - oder als Adjektiv - Blockchain-Technologie - verwendet werden. In jedem Fall verweist der Name `Blockchain` auf die gesamte Struktur, auf der Kryptowährungen aufgebaut sind.

Von außen betrachtet, gibt es 3 Strukturebenen innerhalb einer Blockchain:

1. Die gesamte `Blockchain` besteht aus Blöcken, die in einer geordneten Reihenfolge miteinander verbunden sind
2. `Blöcke` bestehen aus Gruppen von Transaktionen, die zusammengefügt werden
3. `Transaktionen` repräsentieren einen Geldbetrag, der zwischen zwei `Adressen` im Netzwerk versendet wird

Diese dreistufige Struktur führt zu einem kryptografischen Register - einer unveränderlichen Historie aller im Netzwerk durchgeführten Transaktionen.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-346dae14.svg)

# Knowledge Check 1

Was ist eine Blockchain?

- [ ] Eine geordnete Gruppen von Transaktionen, die als Blöcke bezeichnet werden
- [ ] Eine Liste von Geldbeträgen, die zwischen zwei Adressen verschickt wurden
- [ ] Blöcke, die in geordneter Reihenfolge miteinander verbunden sind
- [ ] Alle oben genannten Punkte

# Prüfung des Registers

In herkömmlichen Geldsystemen vertrauen wir darauf, dass Drittparteien wie beispielsweise Banken den Überblick darüber behalten, wie viel Geld eine Person besitzt. Aber um wirklich ohne Banken [bankless] handeln zu können, brauchen wir ein System, bei dem wir uns nicht auf einzelne Personen verlassen müssen, um dieses Register zu verwalten.

Das `Register` ist die Liste ALLER Transaktionen, die jemals auf einer Blockchain gemacht wurden, und jeder kann sie im Fall, dass die Blockchain `öffentlich` ist, einsehen. Einzelne Gruppen von Transaktionen aus dem Register bilden die Blöcke, die zusammen die Blockchain ergeben.

Wenn dem Register neue Transaktionen hinzugefügt werden, werden die Guthaben, die unter jeder `Adresse` gespeichert sind, aktualisiert; frühere Transaktionen können nicht geändert werden. Das ist so, als ob man jedem erlauben würde, jederzeit und für immer alle Transaktionen auf dem Bankkonto eines jeden einzusehen.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-74e5f072.svg)

# Transaktionen im Register

Schauen wir uns einige Beispieltransaktionen an:

- Alice sendet 5 ETH an Bob
- Bob schickt 2 ETH an Charlie

Einzelne Transaktionen zeigen die _Änderung_ in der Menge der Kryptowährung für jede einzelne Adresse, sodass das Gesamtergebnis aller Transaktionen die Menge der Kryptowährung IST, die jede Adresse besitzt.

---

⇒ Alice hat 5 ETH verloren

⇒ Bob hat insgesamt 3 ETH gewonnen (5 erhalten, 2 versendet)

⇒ Charlie hat 2 ETH erhalten

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-f4f9d470.svg)

# Knowledge Check 2

Welche der folgenden Aussage(n) ist/sind für öffentliche Blockchain-Register zutreffend?

- [ ] Alle Transaktionen sind öffentlich und vergangene Transaktionen sind unveränderbar
- [ ] Das Register verfolgt, wie viel Kryptowährung jede Adresse derzeit hat
- [ ] Das Register wächst, wenn neue Transaktionen hinzugefügt werden
- [ ] Alle oben genannten Punkte

# Dezentralisierung

Die in einer `Blockchain` enthaltenen Transaktionen sind nicht nur unveränderlich, sondern werden auch auf ein großes Netzwerk an Computern verteilt und von diesem gemeinsam genutzt. Um sicherzustellen, dass keine einzelne Person oder Organisation die Macht hat, diese Daten zu verändern, wird das Blockchain-Register auf jedem Gerät im Netzwerk, einer sogenannten `Node`, gespeichert.

Diese gemeinschaftlich verteilten Daten sind es, die das Blockchain-Register `dezentralisiert` machen. Keine einzelne Behörde oder Einrichtung kontrolliert die Daten. Blockchains wie Ethereum sind ebenfalls `öffentlich`, weil das Register von jedem eingesehen werden kann.

In unserer nächsten Lektion zur Blockchain-Theorie werden wir sehen, wie neue Daten hinzugefügt werden und wie wir sicherstellen, dass jeder immer eine Kopie derselben Daten hat. Für diese Lektion genügt es, sich daran zu erinnern, dass die Daten innerhalb des Registers von jedem Computer im Ethereum-Netzwerk gemeinsam genutzt werden.

# Knowledge Check 3

Was macht eine Blockchain dezentral?

- [ ] Nur eine einzelne Person oder Organisation kann in die Blockchain schreiben
- [ ] Sie erfüllt die von der Regierungen festgelegten Anforderungen zur Dezentralisierung
- [ ] Keine einzelne Behörde oder Einrichtung kontrolliert das Register oder den Zugang zu den Daten des Registers, da es über ein großes Netzwerk von Computern verteilt ist
- [ ] Das Register wird auf einem einzigen sicheren Server gespeichert

# Block Anatomie

Ein wichtiges Merkmal von Blockchains ist es, dass frühere Transaktionsdaten nicht mehr geändert werden können, nachdem sie in einen Block aufgenommen wurden. Das liegt daran, dass jeder Block einen einzigartigen sogenannten `Block Hash` hat, der wie ein Fingerabdruck verwendet wird, um die Blöcke miteinander zu verbinden. Niemand kann vergangene Transaktionen ändern, ohne diesen Fingerabdruck und den Fingerabdruck JEDES darauf folgenden Blocks zu verändern, da jeder Fingerabdruck vom vorherigen abhängt.

So ist jeder `Block` einfach eine Gruppierung von Transaktionen, die in einer Datei gemeinsam mit dem `Block Hash` zusammengefasst werden. Die Blöcke sind miteinander verkettet, da jeder Block auf den eindeutigen Fingerabdruck des vorherigen Blocks verweist, um eine zusammenhängende Block_**chain**_ [Kette von Blöcken] zu bilden.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-8ba3bea2.svg)

# Knowledge Check 4

Was ist der Zweck eines Block-Hashs?

- [ ] Daten eines Blocks so zu verschlüsseln, dass niemand sie lesen kann
- [ ] Um jeden Block mit dem vorherigen zu verknüpfen und sicherzustellen, dass sich die Daten vergangener Transaktionen nicht ändern
- [ ] Um sicherzustellen, dass Transaktionen an die richtige Adresse gesendet werden
- [ ] Um sicherzustellen, dass die Blockchain dezentralisiert bleibt

# Innerhalb eines Blocks

Denk daran, dass die Daten eines `Blocks` nur eine Gruppe von Transaktionen sind, die zusammengefügt wurden. Innerhalb eines einzelnen Blocks sehen wir eine Liste von Transaktionen und einige Daten darüber, wer den Block erstellt hat.

In unserem Beispiel von vorhin, als wir das Blockchain-Register besprochen haben, könnten beide Transaktionen in einem Block zusammengefasst oder über mehrere Blöcke verteilt werden. Aber unabhängig davon, in welchem Block sie enthalten sind, werden sie schließlich alle dem gesamten Blockchain-Register hinzugefügt.

- Alice sendet 5 ETH an Bob
- Bob schickt 2 ETH an Charlie

Vielleicht erinnerst du dich, dass jeder Block auch auf den `Block Hash` des vorherigen Blocks verweisen muss, um die Blockchain miteinander zu verbinden.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b11c74ce.svg)

# Knowledge Check 5

Die folgenden Informationen sind in einem Block enthalten:

- [ ] Alle Informationen aus früheren Blöcken, sodass die Blockchain immer aktuell ist
- [ ] Alles, was für die Blockchain relevant ist, da die Blockgröße unbegrenzt ist
- [ ] Transaktionsdaten und ein Verweis auf den vorherigen Block
- [ ] Alle Transaktionsdaten, die innerhalb eines festen Zeitrahmens erzeugt werden

# Individuelle Transaktionen

Die Daten auf jeder Blockchain bestehen einfach aus einer Liste von `Transaktionen`, Aufzeichnungen von Geldbewegungen zwischen Nutzern. Jede Transaktion muss durch die `digitale Signatur` des Absenders unterschrieben werden, um gültig zu sein.

Genau das tust du, wenn du eine Transaktion mit einer Wallet bestätigst: Du unterschreibst mit deiner digitalen Signatur, um eine Transaktion zu autorisieren. Du kannst es dir als das digitale Äquivalent einer physischen Unterzeichnung eines Schecks, Quittung oder Kreditkartentransaktion vorstellen.

Transaktionen können einfach sein, wie das Versenden von Krypto-Vermögenswerten, oder komplexer, wie der Tauschhandel von Krypto-Vermögenswerten oder sogar der Einsatz von speziellem Code, der ausgeführt wird, wenn er ausgelöst wird, ein sogenannter `Smart Contract`.

Schließlich hat jede Transaktion einen eindeutigen digitalen Identifikator, den sogenannten `Transaktions-Hash`, den keine andere Transaktion hat. Dies macht es einfach, später auf einzelne Transaktionen zu verweisen und stellt sicher, dass die Details dieser Transaktion danach nicht geändert werden können.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-2f6bf118.svg)

# Knowledge Check 6

Die Daten auf einer Blockchain sind einfach ausgedrückt, eine Liste von Transaktionen, die in Blöcken zusammengefasst wurden. Beispiele für solche Transaktionen können sein:

- [ ] Senden oder Empfangen von Krypto-Vermögenswerten
- [ ] Ändern der Größe des Blocks
- [ ] Bearbeiten vergangener Blockchain-Daten
- [ ] Alle oben genannten Punkte

# Benutzeradressen

Eine `Adresse` ist eine öffentliche Kennung, die jeder in der Blockchain einsehen kann. Wie bei einer E-Mail-Adresse kann jeder Geld an diese Adresse senden, aber nur jemand, der den `privaten Schlüssel` [private key] kontrolliert, kann auf das Guthaben dieser Adresse zugreifen und dieses verwenden.

Bei Ethereum beginnt eine Adresse immer mit _0x__________ und besteht aus 42 Zeichen aus Zahlen und Buchstaben, die aus dem `öffentlichen Schlüssel` [public key] dieser Adresse abgeleitet sind.

Wenn wir eine einzelne Transaktion in einem Block Explorer [Suchmaschine] betrachten, können wir die Adresse vom Absender [From:] und die des Adressaten [To:] sehen. Dies verrät uns nicht, wer die _Personen_ sind, die diese Adressen kontrollieren, aber es ermöglicht jedem Benutzer, die Bewegungen der Kryptowährung im Blockchain-Register zu verfolgen.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-e9456d37.svg)

# Knowledge Check 7

Was gilt für Blockchain-Adressen?

- [ ] Sie sind die öffentliche Kennung verschiedener Personen oder Organisationen auf einer Blockchain
- [ ] Sie beginnen immer mit _0x_ auf Ethereum
- [ ] Wer den privaten Schlüssel für eine Adresse besitzt, kann über die Mittel dieser Adresse verfügen
- [ ] Alle oben genannten Punkte
