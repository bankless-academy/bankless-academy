---
TITLE: Layer-1-Blockchains
DESCRIPTION: Verstehe, wie Layer-1-Blockchains funktionieren, und lerne ihre Grenzen kennen!
LANGUAGE: Deutsch
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

Probleme entstehen, wenn mehr Menschen eine `Blockchain` nutzen wollen, als sie verarbeiten kann. Die hohe Nachfrage nach `Blockspace` kann kurz sein oder so lange anhalten, wie der Andrang bleibt. In solchen Phasen überbieten sich Nutzer gegenseitig, damit ihre Transaktionen schnell durchgehen. Die Gebühren steigen, und wer wenig Kapital hat, bleibt außen vor.

Diese Lektion zeigt, warum Ethereum und andere Blockchains dem `Blockchain-Trilemma` unterliegen, warum es die Ursache dieser Probleme ist und wie es Ethereums Pläne für alle Nutzer beeinflusst. Wir sehen uns die Kompromisse mehrerer Blockchains an und was sie für Academy Explorer bedeuten.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Das Blockchain-Trilemma

Wie das Wort **Tri**lemma andeutet, konkurrieren drei Eigenschaften einer Blockchain miteinander. Alle drei zugleich zu optimieren, geht nicht.

Es sind: `Sicherheit`, `Skalierbarkeit` und `Dezentralisierung`.

Damit eine Blockchain als neutrale Grundlage für ein weltweites Geldsystem taugt, sollte sie in allen drei Punkten stark sein. Ein Geldsystem muss vor Betrug sicher sein, durch Dezentralisierung vor Zensur geschützt sein und für über 8 Milliarden Menschen skalieren.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Das Blockchain-Trilemma beschreibt das Verhältnis zwischen:

- [ ] Ethereum, Bitcoin und Altcoins

> ℹ️ Versuch es nochmal! Das Trilemma betrifft konkurrierende Eigenschaften einer Blockchain, nicht konkurrierende Blockchains.

- [ ] Sicherheit, Zensur und Betrug

> ℹ️ Versuch es nochmal! Sicherheit ist eine der drei, aber Zensur und Betrug sind Gefahren, keine Eigenschaften des Trilemmas.

- [x] Dezentralisierung, Skalierbarkeit und Sicherheit

> ℹ️ Richtig! Diese drei Eigenschaften konkurrieren, sodass keine Blockchain alle drei zugleich optimieren kann.

- [ ] Sicherheit, Tempo und niedrige Gebühren

> ℹ️ Versuch es nochmal! Tempo und Gebühren gehören zur Skalierbarkeit, also nur zu einer der drei Eigenschaften.

# Sicherheit und Konsens

Sicherheit ist die wichtigste Grundlage einer öffentlichen Blockchain. Computer in einem Netzwerk müssen sich einig sein, welche Transaktionen wirklich passiert sind. Diese Einigung heißt `Konsens`. Eine Blockchain ist sicher, wenn Angreifer diese Einigung nicht stören können. Konsens-Algorithmen sind genau darauf ausgelegt.

Ketten wie Bitcoin nutzen `Proof of Work`: Die Blockproduktion wird zum Wettbewerb, jeder Produzent löst um die Wette eine Rechenaufgabe. Wer zuerst fertig ist, darf den nächsten Block erstellen und bekommt die `Blockbelohnung`. Die jüngste Historie umzuschreiben, würde riesige Investitionen in Rechenleistung und Energie kosten, mehr als ein Angreifer gewinnen würde.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Blockchain-Konsens bei Kryptowährungen ist:

- [ ] Der Prozess, in dem Nodes sich über das Geschehene einigen

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [ ] Wichtig für das ganze Ökosystem, um Betrug zu verhindern

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [ ] Durch wirtschaftliche Anreize abgesichert

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [x] Alles davon

> ℹ️ Richtig! Konsens ist die Einigung der Nodes, und wirtschaftliche Anreize machen einen Angriff teurer als den möglichen Gewinn.

# Sicherheit und Angriffe

Ein möglicher Angriff auf den Konsens ist der `51-%-Angriff`: Wer die Mehrheit der Konsensmacht kontrolliert, kann jüngste Transaktionen umkehren, dieselben Coins zweimal ausgeben oder neue Transaktionen zensieren. Signaturen fälschen oder fremdes Guthaben ausgeben kann er nicht. Diese Mehrheit heißt 51 % der Rechenleistung bei Proof of Work und 51 % des `Stake` bei Proof of Stake, also enormes Kapital. Bei Proof of Stake wird nachweisbarer Betrug zusätzlich bestraft, etwa das Signieren zweier widersprüchlicher Blöcke: Der Stake wird zerstört (`Slashing`). Ein Angreifer verliert dabei meist mehr, als er gewinnt.

Bei `Proof of Stake` wird der Blockproduzent nicht im Wettbewerb bestimmt, sondern zufällig ausgelost. Wie bei Proof of Work sorgt der Algorithmus dafür, dass keine einzelne Partei regelmäßig den nächsten `Block` erstellen darf.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Das Ziel eines 51-%-Angriffs ist:

- [ ] Mining-Betriebe zu stören

> ℹ️ Versuch es nochmal! Der Angriff zielt auf den Konsens selbst: Transaktionen umkehren oder zensieren, nicht Miner stören.

- [x] Coins doppelt auszugeben oder Transaktionen zu zensieren

> ℹ️ Richtig! Mit der Mehrheit der Konsensmacht lassen sich jüngste Transaktionen umkehren oder neue blockieren.

- [ ] Eine neue Kryptowährung zu erschaffen

> ℹ️ Versuch es nochmal! Eine neue Kryptowährung kann jeder starten, ganz ohne Angriff auf ein bestehendes Netzwerk.

- [ ] Die anderen 49 % zu beseitigen

> ℹ️ Versuch es nochmal! Die übrigen Teilnehmer verschwinden nicht. Die Mehrheit dient dazu, Transaktionen umzukehren oder zu zensieren.

# Skalierbarkeit: Durchsatz

`Skalierbarkeit` beschreibt, wie viele Transaktionen eine Blockchain schnell verarbeiten kann. Zwei Teile bestimmen sie: Durchsatz und Finalität.

1) `Transaktionsdurchsatz`: Wie viele Transaktionen eine Blockchain gleichzeitig verarbeitet, meist gemessen in Transaktionen pro Sekunde (`TPS`).

Stell dir eine Bushaltestelle vor: Immer mehr Menschen kommen an und wollen mitfahren. Aber in einen Bus passen nur so viele Personen. Damit die Haltestelle schneller leer wird, brauchst du größere Busse (mehr Menschen) oder häufigere Fahrten (weniger Zeit). Genauso ist es, wenn viele Transaktionen in den knappen `Blockspace` jedes Blocks passen sollen. Live siehst du das unter [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Was trifft auf den Vergleich mit der Bushaltestelle zu?

- [ ] Menschen (Transaktionen) fahren gebündelt in Bussen (Blöcken)

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [ ] In jeden Bus (Block) passen nur begrenzt viele Menschen

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [ ] Mehr Menschen brauchen größere oder mehr Busse (Blöcke)

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [x] Alles davon

> ℹ️ Richtig! Transaktionen füllen begrenzten Blockspace wie Fahrgäste die Busse. Schneller wird es nur mit größeren oder häufigeren Blöcken.

# Skalierbarkeit: Finalität

Der zweite Teil der Skalierbarkeit ist:

2) `Finalität`: Ab wann können wir ziemlich sicher sein, dass eine Transaktion nicht mehr geändert oder umgekehrt wird?

Bei Proof-of-Work-Ketten wie Bitcoin misst man Finalität in Blöcken: Je mehr Blöcke nach deiner Transaktion folgen, desto sicherer bleibt sie bestehen. Ein sicherer Konsens macht das Ändern alter Blöcke sehr teuer, und je weiter zurück, desto teurer. Bitcoin erzeugt etwa alle 10 Minuten einen `Block`, mehrere Bestätigungen dauern also rund eine Stunde. Ethereums Proof of Stake geht anders vor: `Validatoren` stimmen über Blöcke ab, nach etwa 13 Minuten (zwei `Epochen`) ist eine Transaktion final.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Dezentralisierung verteilt Macht

`Dezentralisierung` ist die dritte Säule des Trilemmas: Kontrolle und Entscheidungen wandern von einer einzelnen Instanz zu einem verteilten Netzwerk aus vielen. Sie ist das Grundprinzip, das Blockchains `erlaubnisfrei` und `zensurresistent` macht. Jeder darf sie nutzen, und jeder darf Software darauf bauen.

Zentrale Plattformen wie Facebook und Twitter können jedes Konto jederzeit sperren. Viele bekannte Streamer auf Twitch oder TikTok wurden ohne Grund entfernt. Selbst wer sein Konto zurückbekommt, braucht dafür oft lange. Ohne Dezentralisierung ist ein Blockchain-`Kontobuch` nur eine Tabelle auf einem Bankcomputer, und die Bank entscheidet, wer ein Konto bekommt. `Erlaubnisfrei` heißt: Die Macht ist ausreichend verteilt, niemandem kann der Zugang entzogen werden.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Welche Aussage über Dezentralisierung ist NICHT wahr?

- [ ] Dezentralisierung macht Blockchains zensurresistent

> ℹ️ Versuch es nochmal! Diese Aussage stimmt: Ohne kontrollierende Instanz kann niemand das Netzwerk zensieren.

- [ ] Dezentralisierung macht Blockchains erlaubnisfrei

> ℹ️ Versuch es nochmal! Diese Aussage stimmt: Verteilte Macht bedeutet, dass niemandem der Zugang entzogen werden kann.

- [x] Dezentralisierung hilft autoritären Mächten beim Machterhalt

> ℹ️ Richtig! Das stimmt NICHT: Dezentralisierung bewirkt das Gegenteil und nimmt einzelnen Instanzen die Kontrolle.

- [ ] Erlaubnisfreie Systeme kann jeder überall nutzen

> ℹ️ Versuch es nochmal! Diese Aussage stimmt: Erlaubnisfrei bedeutet, dass niemandem der Zugang verwehrt wird.

# Ist es dezentral?

Ob etwas dezentral ist, lässt sich nicht mit Ja oder Nein beantworten. Sind 10 kontrollierende Instanzen dezentral? Oder 1000? Eine Million? Es gibt keine feste Grenze für „ausreichend dezentral“, also denkt man besser in einem Spektrum. Zwischen Schwarz und Weiß liegen viele Grautöne.

Wir können also sagen, etwas sei „dezentraler als etwas anderes“ statt „zentral oder dezentral“. Ein neutrales Geldsystem braucht einen hohen Grad an Dezentralisierung, um staatlicher Zensur zu widerstehen. Neuere Blockchains tauschen oft Dezentralisierung gegen Skalierbarkeit. Damit setzen sie sich demselben Druck von Gesellschaften und Regierungen aus, den zentrale Plattformen spüren, und könnten am Ende genauso zensieren.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Verschiedene Blockchains sind unterschiedlich stark dezentralisiert.

- [x] Richtig

> ℹ️ Richtig! Dezentralisierung ist ein Spektrum: Jede Blockchain wählt, wie viel sie für Skalierbarkeit oder andere Ziele eintauscht.

- [ ] Falsch

> ℹ️ Versuch es nochmal! Dezentralisierung ist ein Spektrum, und jede Blockchain trifft darauf ihre eigene Wahl.

# Ein paar Beispiele

Jede Blockchain geht das Trilemma anders an und macht Kompromisse für ihre Ziele. Bitcoin und Ethereum stellen Sicherheit und Dezentralisierung über Skalierbarkeit. Die Folge: lange `Finalitätszeit` bei Bitcoin und knapper `Blockspace` bei Ethereum. Steigt die Nachfrage nach `Smart Contracts`, vor allem für DeFi, steigen Ethereums Gebühren; in der Spitze 2021 kostete eine einzige Transaktion mehrere zehn Dollar.

Steigende Gebühren öffneten die Tür für `alternative Layer 1` wie BNB Chain, die Skalierbarkeit über Dezentralisierung stellen, für mehr `Transaktionsdurchsatz` und günstigere Gebühren. Ketten der dritten Generation wie Solana suchen neue Wege, doch alle Blockchains bleiben diesen Grundgrenzen unterworfen. Jede Wahl prägt das Ökosystem der Kette von Grund auf.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Was lässt sich tun?

Wenn Ethereum Sicherheit und Dezentralisierung priorisiert: Wie skaliert es dann zum weltweiten Finanznetzwerk, das es werden will? Die Ethereum-Roadmap prüfte zwei Antworten: `Layer 2` und `Sharding`.

`Layer 2` erhöhen Ethereums Skalierbarkeit, ohne die anderen beiden Teile des Trilemmas zu opfern. Sie liegen als zusätzliche Schicht auf der Hauptkette, beziehen ihre Sicherheit von ihr und bringen den Nutzern geringere Gebühren und schnellere Transaktionen. Mehr dazu in unserer Layer-2-Lektion.

`Sharding` hätte die Blockchain in mehrere parallele Ketten geteilt, wie zusätzliche Fahrspuren auf einer Straße. Ethereum legte den Plan beiseite und wählte einen einfacheren: Blockdaten für Layer 2 günstiger machen (seit 2024) und die Kapazität Schritt für Schritt erhöhen, ohne Sicherheit oder Dezentralisierung zu opfern.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2:

- [ ] Liefern ihre eigene Sicherheit

> ℹ️ Versuch es nochmal! Layer 2 beziehen ihre Sicherheit von der Haupt-Blockchain.

- [x] Erhöhen die Skalierbarkeit der Haupt-Blockchain

> ℹ️ Richtig! Layer 2 liegen auf der Hauptkette und bringen Skalierbarkeit, ohne Sicherheit oder Dezentralisierung zu opfern.

- [ ] Erhöhen die Gebühren für Nutzer

> ℹ️ Versuch es nochmal! Layer 2 bewirken das Gegenteil: Nutzer zahlen weniger Gebühren.

- [ ] Erhöhen die Finalitätszeit für Nutzer

> ℹ️ Versuch es nochmal! Layer 2 bieten schnellere Transaktionen, nicht langsamere.

# Die Zukunft von Ethereum

Ethereum verbessert seine Skalierbarkeit weiter, ohne die anderen Seiten des Trilemmas zu opfern. Der Merge zu `Proof of Stake` (2022) senkte den Energieverbrauch des Netzwerks um über 99 %, und 2024 kamen günstige Blockdaten für Layer 2. **Skalierung ist Daueraufgabe: Jedes Upgrade macht Ethereum schneller und günstiger, während Sicherheit und Dezentralisierung Grundsätze bleiben.** Die Ethereum Foundation hat eine sehr gute Seite zur [Ethereum-Roadmap](https://ethereum.org/roadmap/).

Daneben bauen viele `Layer 2`-Protokolle auf Ethereum, um die Nachfrage zu bedienen, ohne das Protokoll selbst zu ändern. Sie holen sich dezentrale Sicherheit von Layer 1 und liefern Skalierbarkeit; ihre Vielfalt macht das Ökosystem dezentral! Führende `Rollups` sind Arbitrum, OP Mainnet und Base; Polygon PoS ist eine beliebte `Sidechain` mit eigener Sicherheit.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Zu Ethereums Upgrades gehören:

- [ ] Layer 2 und günstigere Blockdaten für mehr Skalierbarkeit

> ℹ️ Versuch es nochmal! Das gehört dazu, ist aber nicht das Einzige.

- [ ] Dezentralisierung und Sicherheit als Grundprinzipien

> ℹ️ Versuch es nochmal! Das gehört dazu, ist aber nicht das Einzige.

- [ ] Weniger Energieverbrauch durch Proof of Stake

> ℹ️ Versuch es nochmal! Das gehört dazu, ist aber nicht das Einzige.

- [x] Alles davon

> ℹ️ Richtig! Layer 2 und günstige Blockdaten bringen Skalierung, Proof of Stake senkte den Energieverbrauch, und Sicherheit und Dezentralisierung bleiben Kern.

# Was bedeutet das für Explorer?

Nutzer brauchen niedrige Gebühren, um die Technologie mit geringen Hürden und günstigen Fehlern zu lernen, gerade am Anfang ihrer Reise. Die Ethereum-Blockchain ist noch nicht ideal, aber ihre Werte machen sie zu einem der besten Kandidaten für ein weltweites Finanz- und Rechensystem. Explorer können Ethereum nutzen und ausprobieren, ohne hohe Gebühren zu zahlen: Über Layer 2 bekommen sie Ethereums Sicherheit und Dezentralisierung zusammen mit höherer Skalierbarkeit.

Die nächste Lektion erklärt `Layer 2`-Lösungen und wie du loslegst. Weiter geht es, Explorer!
