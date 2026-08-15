---
TITLE: Blockchain Grundlagen
DESCRIPTION: Erfahre mehr über die grundlegende Architektur der Blockchain-Technologie.
LANGUAGE: Deutsch
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
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

After examining the layers of a blockchain, you will understand the structure that a blockchain tool called a `block explorer` displays: the **list** of blocks, the **transactions** within those blocks, and the **details** of each individual transaction. To see it in action, try [Etherscan](https://etherscan.io/), a popular block explorer for Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-6d0b6137.svg)

# Struktur der Blockchain

The term blockchain can be used as a noun (the Bitcoin blockchain) or as an adjective (blockchain technology). In jedem Fall verweist der Name `Blockchain` auf die gesamte Struktur, auf der Kryptowährungen aufgebaut sind.

Von außen betrachtet, gibt es 3 Strukturebenen innerhalb einer Blockchain:

1. Die gesamte `Blockchain` besteht aus Blöcken, die in einer geordneten Reihenfolge miteinander verbunden sind
2. `Blöcke` bestehen aus Gruppen von Transaktionen, die zusammengefügt werden
3. `Transactions` are transfers of value, or instructions to programs, between `addresses` on the network

Diese dreistufige Struktur führt zu einem kryptografischen Register - einer unveränderlichen Historie aller im Netzwerk durchgeführten Transaktionen.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-346dae14.svg)

# Knowledge Check 1

Was ist eine Blockchain?

- [ ] Eine geordnete Gruppen von Transaktionen, die als Blöcke bezeichnet werden

> ℹ️ Try again! Blocks are part of the structure, but they aren’t the only correct answer.

- [ ] A shared record anyone can view but no one can edit

> ℹ️ Try again! This is true, but it isn’t the only correct answer.

- [ ] Blöcke, die in geordneter Reihenfolge miteinander verbunden sind

> ℹ️ Try again! This describes the chain of blocks, but it isn’t the only correct answer.

- [x] All of the above

> ℹ️ Correct! All three are true: a blockchain is a shared, uneditable record of transactions grouped into blocks, linked in sequence.

# Prüfung des Registers

In herkömmlichen Geldsystemen vertrauen wir darauf, dass Drittparteien wie beispielsweise Banken den Überblick darüber behalten, wie viel Geld eine Person besitzt. Aber um wirklich ohne Banken [bankless] handeln zu können, brauchen wir ein System, bei dem wir uns nicht auf einzelne Personen verlassen müssen, um dieses Register zu verwalten.

Das `Register` ist die Liste ALLER Transaktionen, die jemals auf einer Blockchain gemacht wurden, und jeder kann sie im Fall, dass die Blockchain `öffentlich` ist, einsehen. Einzelne Gruppen von Transaktionen aus dem Register bilden die Blöcke, die zusammen die Blockchain ergeben.

Wenn dem Register neue Transaktionen hinzugefügt werden, werden die Guthaben, die unter jeder `Adresse` gespeichert sind, aktualisiert; frühere Transaktionen können nicht geändert werden. It’s like letting anyone look at everyone’s all-time bank account transaction history, at any time.

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

Which of the following is true for public blockchain ledgers?

- [ ] Alle Transaktionen sind öffentlich und vergangene Transaktionen sind unveränderbar

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Das Register verfolgt, wie viel Kryptowährung jede Adresse derzeit hat

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Das Register wächst, wenn neue Transaktionen hinzugefügt werden

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! The ledger is public, unchangeable, keeps address balances up to date, and grows with every new transaction.

# Dezentralisierung

Die in einer `Blockchain` enthaltenen Transaktionen sind nicht nur unveränderlich, sondern werden auch auf ein großes Netzwerk an Computern verteilt und von diesem gemeinsam genutzt. To make sure that no single entity has the power to change the data, copies of the blockchain ledger are stored on many computers, called `nodes`, across the network.

Diese gemeinschaftlich verteilten Daten sind es, die das Blockchain-Register `dezentralisiert` machen. Keine einzelne Behörde oder Einrichtung kontrolliert die Daten. Blockchains wie Ethereum sind ebenfalls `öffentlich`, weil das Register von jedem eingesehen werden kann.

For this lesson, just remember that the ledger data is shared across the many computers running the Ethereum network.

# Knowledge Check 3

Was macht eine Blockchain dezentral?

- [ ] Nur eine einzelne Person oder Organisation kann in die Blockchain schreiben

> ℹ️ Try again! A single entity in control is the opposite of decentralization.

- [ ] Sie erfüllt die von der Regierungen festgelegten Anforderungen zur Dezentralisierung

> ℹ️ Try again! Decentralization comes from the network’s design, not from government approval.

- [x] No single entity controls the ledger, stored on many computers

> ℹ️ Correct! Storing copies of the ledger on many nodes means no single entity has the power to control or change the data.

- [ ] Das Register wird auf einem einzigen sicheren Server gespeichert

> ℹ️ Try again! A single server would be a central point of control. Copies of the ledger are stored on many nodes.

# Block Anatomie

Ein wichtiges Merkmal von Blockchains ist es, dass frühere Transaktionsdaten nicht mehr geändert werden können, nachdem sie in einen Block aufgenommen wurden. Das liegt daran, dass jeder Block einen einzigartigen sogenannten `Block Hash` hat, der wie ein Fingerabdruck verwendet wird, um die Blöcke miteinander zu verbinden. Niemand kann vergangene Transaktionen ändern, ohne diesen Fingerabdruck und den Fingerabdruck JEDES darauf folgenden Blocks zu verändern, da jeder Fingerabdruck vom vorherigen abhängt.

So each `block` is simply a group of transactions, plus a unique fingerprint (its `block hash`) computed from the block’s contents. The blocks are chained together because each one references the previous block’s unique fingerprint to form one connected block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-8ba3bea2.svg)

# Knowledge Check 4

Was ist der Zweck eines Block-Hashs?

- [ ] Daten eines Blocks so zu verschlüsseln, dass niemand sie lesen kann

> ℹ️ Try again! Block data stays publicly readable. The hash is a fingerprint, not encryption.

- [x] To link blocks together and keep past transaction data unchangeable

> ℹ️ Correct! Each block references the previous block’s fingerprint, so changing past data would break every block that follows.

- [ ] Um sicherzustellen, dass Transaktionen an die richtige Adresse gesendet werden

> ℹ️ Try again! Addresses handle where funds go. The block hash links blocks together.

- [ ] Um sicherzustellen, dass die Blockchain dezentralisiert bleibt

> ℹ️ Try again! Decentralization comes from distributing the ledger across many nodes, not from the block hash.

# Innerhalb eines Blocks

Denk daran, dass die Daten eines `Blocks` nur eine Gruppe von Transaktionen sind, die zusammengefügt wurden. Innerhalb eines einzelnen Blocks sehen wir eine Liste von Transaktionen und einige Daten darüber, wer den Block erstellt hat.

In unserem Beispiel von vorhin, als wir das Blockchain-Register besprochen haben, könnten beide Transaktionen in einem Block zusammengefasst oder über mehrere Blöcke verteilt werden. Aber unabhängig davon, in welchem Block sie enthalten sind, werden sie schließlich alle dem gesamten Blockchain-Register hinzugefügt.

- Alice sendet 5 ETH an Bob
- Bob schickt 2 ETH an Charlie

Vielleicht erinnerst du dich, dass jeder Block auch auf den `Block Hash` des vorherigen Blocks verweisen muss, um die Blockchain miteinander zu verbinden.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b11c74ce.svg)

# Knowledge Check 5

What information is contained in a block?

- [ ] All the information contained in previous blocks

> ℹ️ Try again! A block only references the previous block’s hash. It doesn’t copy all past data.

- [ ] Alles, was für die Blockchain relevant ist, da die Blockgröße unbegrenzt ist

> ℹ️ Try again! A block is a discrete group of transactions, not an unlimited container.

- [x] Transaction data and a reference to the previous block

> ℹ️ Correct! A block is a group of transactions plus the previous block’s hash, which chains the blocks together.

- [ ] Alle Transaktionsdaten, die innerhalb eines festen Zeitrahmens erzeugt werden

> ℹ️ Try again! Transactions can be grouped into one block or spread across multiple blocks over time.

# Individuelle Transaktionen

Die Daten auf jeder Blockchain bestehen einfach aus einer Liste von `Transaktionen`, Aufzeichnungen von Geldbewegungen zwischen Nutzern. Jede Transaktion muss durch die `digitale Signatur` des Absenders unterschrieben werden, um gültig zu sein.

Genau das tust du, wenn du eine Transaktion mit einer Wallet bestätigst: Du unterschreibst mit deiner digitalen Signatur, um eine Transaktion zu autorisieren. Du kannst es dir als das digitale Äquivalent einer physischen Unterzeichnung eines Schecks, Quittung oder Kreditkartentransaktion vorstellen.

Transaktionen können einfach sein, wie das Versenden von Krypto-Vermögenswerten, oder komplexer, wie der Tauschhandel von Krypto-Vermögenswerten oder sogar der Einsatz von speziellem Code, der ausgeführt wird, wenn er ausgelöst wird, ein sogenannter `Smart Contract`.

Schließlich hat jede Transaktion einen eindeutigen digitalen Identifikator, den sogenannten `Transaktions-Hash`, den keine andere Transaktion hat. Dies macht es einfach, später auf einzelne Transaktionen zu verweisen und stellt sicher, dass die Details dieser Transaktion danach nicht geändert werden können.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-2f6bf118.svg)

# Knowledge Check 6

Die Daten auf einer Blockchain sind einfach ausgedrückt, eine Liste von Transaktionen, die in Blöcken zusammengefasst wurden. Beispiele für solche Transaktionen können sein:

- [x] Sending or receiving crypto assets

> ℹ️ Correct! Transactions record currency moving between users, from simple transfers to smart contract interactions.

- [ ] Ändern der Größe des Blocks

> ℹ️ Try again! Block size isn’t something a transaction can change.

- [ ] Bearbeiten vergangener Blockchain-Daten

> ℹ️ Try again! Past blockchain data cannot be changed. That’s a core feature of blockchains.

- [ ] Alle oben genannten Punkte

> ℹ️ Try again! Only one of the above is a valid blockchain transaction.

# Benutzeradressen

Eine `Adresse` ist eine öffentliche Kennung, die jeder in der Blockchain einsehen kann. Wie bei einer E-Mail-Adresse kann jeder Geld an diese Adresse senden, aber nur jemand, der den `privaten Schlüssel` [private key] kontrolliert, kann auf das Guthaben dieser Adresse zugreifen und dieses verwenden.

On Ethereum, an address always starts with \_0x\_\_\_\_\_\_\_\_\_\_ and is 42 characters of numbers and letters derived from the `public key` of that address.

Wenn wir eine einzelne Transaktion in einem Block Explorer [Suchmaschine] betrachten, können wir die Adresse vom Absender [From:] und die des Adressaten [To:] sehen. Dies verrät uns nicht, wer die _Personen_ sind, die diese Adressen kontrollieren, aber es ermöglicht jedem Benutzer, die Bewegungen der Kryptowährung im Blockchain-Register zu verfolgen.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-e9456d37.svg)

# Knowledge Check 7

Was gilt für Blockchain-Adressen?

- [ ] Sie sind die öffentliche Kennung verschiedener Personen oder Organisationen auf einer Blockchain

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Sie beginnen immer mit _0x_ auf Ethereum

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [ ] Whoever controls the private key can use the funds at that address

> ℹ️ Try again! This is true, but it isn’t the only true statement.

- [x] All of the above

> ℹ️ Correct! Addresses are public identifiers, start with 0x on Ethereum, and their funds are unlocked by the private key.
