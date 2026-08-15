---
TITLE: Layer-2-Blockchains
DESCRIPTION: Komm ins Layer-2-Ökosystem: schnellere Transaktionen, niedrigere Gebühren.
LANGUAGE: Deutsch
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

# Einführung

Jede Blockchain möchte möglichst dezentral, sicher und skalierbar sein. Alle drei zugleich gut hinzubekommen, ist bisher niemandem gelungen. Dieses Problem hat einen Namen: das `Blockchain-Trilemma`.

Bitcoin und Ethereum sind recht dezentral und sicher, skalieren aber schlecht. Man sieht das an hohen Transaktionsgebühren und langen Warteschlangen, wenn viel los ist. Explorer können dagegen Technologien nutzen, die Kosten stark senken und Transaktionen beschleunigen. Zusammen heißen sie Layer-2-Skalierungslösungen (L2).

Das `Lightning Network` ist die bekannteste Lösung für Bitcoin. Es nutzt eine Technik namens `Zahlungskanäle`, um Zahlungen zwischen Parteien zu skalieren. Ethereum entschärft das Trilemma mit mehreren L2-Lösungen. Dabei hilft günstiger, kurzlebiger `Blob`-Speicher, den das Mainnet 2024 bekam (eine leichte Form des früher geplanten „Sharding“).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Zahlungskanäle

Auf der Bitcoin-Blockchain nutzt das Lightning Network beidseitige Zahlungskanäle. So tauschen mehrere Parteien BTC, ohne dafür die Hauptchain zu belasten.

Zwei Nutzer öffnen gemeinsam einen Kanal. Jeder Kanal hat genau zwei Parteien, doch Zahlungen können über ein Netz verbundener Kanäle auch weiter entfernte Nutzer erreichen. Zwischen Öffnen und Schließen verschieben die Parteien beliebig oft Geld untereinander. Jeder Eintrag im Mini-Kontobuch gilt erst, wenn beide unterschreiben, wofür beide Nodes in der Regel erreichbar sein müssen.
Jede Seite kann den Kanal jederzeit schließen und dafür die neueste Fassung des Mini-Kontobuchs an die Blockchain senden.

Zahlungskanäle unterstützen keine komplexen `Smart Contract`-Interaktionen, nur einfache Peer-to-Peer-Transaktionen.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Für Transaktionen im Bitcoin Lightning Network musst du online sein.

- [x] Wahr

> ℹ️ Richtig! Ein Zahlungskanal wird nur aktualisiert, wenn beide Seiten unterschreiben. Dafür müssen ihre Nodes in der Regel erreichbar sein.

- [ ] Falsch

> ℹ️ Versuch es nochmal! Kanal-Updates brauchen die Signatur beider Seiten, also müssen ihre Nodes meist online sein.

# Ethereums Skalierungslösungen

Entwickler arbeiten fast so lange an Ethereum-eigenen Skalierungslösungen, wie es das Netzwerk gibt.

Für die meisten in der Ethereum-Community gilt: Eine echte „Ethereum-Skalierungslösung“ verbessert die `Skalierbarkeit`, ohne `Sicherheit` oder `Dezentralisierung` zu opfern. Praktisch wollen Nutzer vor allem schnellere Transaktionen und günstigeres `Gas` als im Ethereum Mainnet. Manche Lösungen gehen dafür größere Kompromisse beim Trilemma ein als andere.

Ethereum lebt von seinen Smart Contracts. Deshalb müssen auch Skalierungslösungen sie unterstützen. Schnelle, günstige Transaktionen nützen wenig, wenn Nutzer ihre `DApps` auf einem Layer 2 nicht erreichen.

# Knowledge Check 2

Ethereum-Skalierungslösungen:

- [ ] nutzen Zahlungskanäle zur Skalierung.

> ℹ️ Versuch es nochmal! Zahlungskanäle gehören zu Bitcoins Lightning Network. Ethereum skaliert über Lösungen wie Rollups.

- [ ] können keine Smart Contracts unterstützen.

> ℹ️ Versuch es nochmal! Smart-Contract-Unterstützung ist entscheidend: Nutzer brauchen ihre DApps auch auf Layer 2.

- [x] steigern die Skalierbarkeit, ohne andere Trilemma-Ziele zu opfern.

> ℹ️ Richtig! Eine echte Skalierungslösung stärkt die Skalierbarkeit, ohne Sicherheit oder Dezentralisierung zu opfern.

- [ ] beschleunigen Transaktionen, kosten aber mehr Gas.

> ℹ️ Versuch es nochmal! Skalierungslösungen wollen beides: schnellere Transaktionen UND günstigeres Gas als das Mainnet.

# Layer 1 und Layer 2 verbinden

Wie in [Blockchain-Grundlagen](https://app.banklessacademy.com/lessons/blockchain-basics) gelernt, sind Blockchains Datenbanken, sogenannte `Kontobücher`. Sie führen eine kryptografisch gesicherte, zeitlich geordnete Liste aller Transaktionen. L1-Blockchains und L2-Lösungen sind jeweils eigene Blockchains mit eigenen Adressen und Daten.

Infrastruktur namens `Bridges` überträgt Informationen zwischen diesen Datenbanken. Stell dir das Ethereum Mainnet (oder eine andere `L1`-Blockchain) als eine Insel vor und deine bevorzugte Skalierungslösung als zweite. Eine Krypto-Bridge ist dann die Autobahn, die beide digitalen Inseln verbindet.

Die Technik dahinter ist komplex. Für dich als Nutzer heißt sie aber nur: Ziel auswählen.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechains

Eine `Sidechain` ist eine eigene Blockchain. Sie läuft unabhängig von Ethereum, hängt aber über eine `Bridge` am Mainnet. Für den Umzug sperrst du Token in einem Bridge-Contract auf dem Mainnet, und auf der Sidechain entstehen gleichwertige Token. Wichtig: Dein Geld erbt dabei NICHT Ethereums Sicherheit. Bridge und Sidechain hängen an den Validatoren der Sidechain. Wird eine von beiden geknackt (wie beim Ronin-Hack 2022, 625 Mio. $), ist das gesperrte Geld weg.

Auch Sidechains unterliegen dem Blockchain-Trilemma. Günstigere `Gas`-Gebühren und schnellere Transaktionen kommen von einer kleinen, starken Validatorengruppe: Dezentralisierung und Sicherheit gegen Skalierbarkeit.

Sidechains wie Polygon PoS veröffentlichen regelmäßig Momentaufnahmen („Checkpoints“) auf Ethereum. Das gibt ihrer Historie eine Art Finalität und erlaubt Nachweise beim Verlassen der Bridge. Genauso sicher wie auf dem Mainnet ist dein Geld dadurch nicht.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechains:

- [ ] sperren gebridgte Token in einem Contract auf dem Mainnet.

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [ ] haben günstigere Gas-Gebühren als das Mainnet.

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [ ] haben höhere Zentralisierungsrisiken als das Mainnet.

> ℹ️ Versuch es nochmal! Das stimmt, ist aber nicht die einzige richtige Aussage.

- [x] Alles davon.

> ℹ️ Richtig! Sidechains sperren Token auf dem Mainnet und sind günstiger, doch ihre kleine Validatorengruppe kostet Dezentralisierung.

# Rollups

Layer-2-Protokolle mit Rollup-Technologie bleiben der Sicherheit des Ethereum Mainnet deutlich näher.

Wie Sidechains führen Rollups Transaktionen abseits des Mainnets aus. Danach werden sie zu einem Bündel zusammengefasst und auf Ethereum abgelegt, in günstigen, kurzlebigen Datenräumen namens `Blobs`. Blobs kamen mit dem Dencun-Upgrade im März 2024 und sind der Hauptgrund, warum L2-Gebühren heute meist nur Cent-Beträge betragen.

Damit ein Rollup zeigen kann, dass es Transaktionen für das Mainnet sicher verarbeitet, muss es einen „überzeugenden Nachweis“ liefern: Die Transaktionen jedes Bündels sind sicher und gültig. Dieser Nachweis steckt im Rollup und wird vom Bridge-Contract auf dem Mainnet geprüft.

Zwei Rollup-Verfahren liefern diesen Nachweis: `Optimistic Rollups` und `ZK-Rollups`. Sehen wir sie uns genauer an.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollups

L2-Protokolle wie Optimism, Base und Arbitrum setzen alle auf `Optimistic Rollups`. Der Name kommt daher, dass die Daten im Bündel als gültig gelten, solange niemand das Gegenteil beweist: eine optimistische Annahme.

Damit das nicht ausgenutzt wird, dauert eine Auszahlung vom L2 zurück aufs Mainnet meist mehrere Tage. In dieser Zeit können Bridge-Validatoren einen `Betrugsnachweis` veröffentlichen und die Auszahlung stoppen. Das ähnelt den Clearing-Verfahren der Banken, nur dezentral.

Hinweis: Externe Bridge-Dienste wie Across und Relay bringen dein Geld in Minuten statt Tagen ans Ziel. Sie strecken es dir aus einem eigenen Topf vor. Du trägst also das Risiko ihrer Smart Contracts und Geldgeber, ein Stück mehr Vertrauen als bei der Bridge des Rollups selbst.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Bei Optimistic Rollups gelten Transaktionen als gültig, bis das Gegenteil bewiesen ist.

- [x] Wahr

> ℹ️ Richtig! Bündel gelten zunächst als gültig. In einer Einspruchsfrist können Betrugsnachweise falsche Auszahlungen noch stoppen.

- [ ] Falsch

> ℹ️ Versuch es nochmal! Genau diese optimistische Annahme gibt diesen Rollups ihren Namen.

# ZK-Rollups

`ZK-Rollups` bauen auf Zero-Knowledge-Technik. Anders als `Optimistic Rollups` brauchen sie niemanden, der nach Betrug sucht. Sie reichen stattdessen einen mathematischen Beweis ein, den `Gültigkeitsbeweis`. Damit prüft Ethereum ein ganzes Bündel, ohne die Arbeit zu wiederholen.

Der große Vorteil ist die `Abwicklungszeit`, auch `Transaktionsfinalität` genannt. Statt einer Einspruchsfrist von Tagen kommst du meist innerhalb weniger Stunden an dein Geld auf dem Mainnet, sobald der nächste Gültigkeitsbeweis vorliegt. Trotz des Namens dient Zero-Knowledge hier nicht der Privatsphäre: Transaktionen auf großen ZK-Rollups sind so öffentlich wie auf dem Mainnet.

Mehrere große Protokolle nutzen ZK-Rollups für ihre Skalierungslösungen, darunter ZKsync, Starknet und Linea. Die Entwicklung steht noch am Anfang, hat aber viel Potenzial.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Verglichen mit Optimistic Rollups gilt für ZK-Rollups:

- [ ] Sie halten Transaktionen auf dem Mainnet privat.

> ℹ️ Trotz des Namens „Zero-Knowledge“ sind große ZK-Rollups so transparent wie das Mainnet. Die Beweise dienen der Gültigkeit, nicht der Privatsphäre.

- [x] Sie nutzen Gültigkeitsbeweise statt langer Einspruchsfrist.

> ℹ️ Richtig! Ein mathematischer Gültigkeitsbeweis bestätigt jedes Bündel. Auf eine Betrugsfrist muss danach niemand mehr warten.

- [ ] Sie brauchen Beobachter, die Betrugsnachweise einreichen.

> ℹ️ So arbeiten Optimistic Rollups. ZK-Rollups beweisen die Gültigkeit stattdessen von vornherein.

# DApp-Kompatibilität über Chains hinweg

Beim Vergleich von `Optimistic Rollups` und `ZK-Rollups` schauen die meisten auf die Auszahlungsdauer. Externe Bridges lösen dieses Warteproblem aber ohnehin. Bei der Wahl deiner Skalierungslösung sollte es also keine große Rolle spielen.

Viele Optimistic Rollups sind „EVM-äquivalent“: Das L2 unterstützt jede DApp, die auf der `Ethereum Virtual Machine` (EVM) läuft. So lässt sich jeder Smart Contract vom Mainnet direkt auf dem L2 einsetzen, und Nutzer finden dort ihre gewohnten DApps.

Auch Sidechains wie Polygon PoS führen die EVM aus, und die meisten modernen ZK-Rollups (ZKsync, Linea, Scroll) sind ebenfalls EVM-äquivalent oder fast. Deine liebsten Ethereum-DApps gibt es also fast überall im L2-Ökosystem.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

EVM-äquivalente Skalierungslösungen können Smart Contracts vom Mainnet einfach weiterverwenden.

- [x] Wahr

> ℹ️ Richtig! EVM-Äquivalenz heißt: Jeder Smart Contract vom Mainnet läuft auch auf dem L2, samt der gewohnten DApps.

- [ ] Falsch

> ℹ️ Versuch es nochmal! Genau dafür gibt es EVM-Äquivalenz: Mainnet-Contracts weiterverwenden.

# Rückblick auf die Lektion

L1-Blockchains wie Bitcoin und Ethereum stoßen an das `Blockchain-Trilemma`. `Zahlungskanäle` auf Bitcoin sowie Sidechains und Rollups auf Ethereum helfen beim Skalieren und entschärfen das Trilemma.

`Bridges` verbinden L1-Blockchains mit `Sidechains` und `Rollups`. Wie der Bridge-Contract arbeitet, prägt die Eigenschaften des verbundenen Netzwerks.

Gelder auf einer Sidechain erben Ethereums `Sicherheit` nicht: Gebridgte Token liegen zwar in einem Contract auf dem Mainnet, ihre Sicherheit hängt aber an den Validatoren und dem Bridge-Contract der Sidechain. Diese Chains haben eine kleine, leistungsstarke Validatorengruppe. Das bringt Tempo und niedrige Gas-Gebühren, kostet aber Dezentralisierung und Sicherheit.

Rollups verarbeiten ihre Transaktionen ebenfalls selbst. Ihr Bridge-Contract verlangt aber einen „überzeugenden Nachweis“, bevor die Daten als gültig gelten. So halten sie `Sicherheit` und `Dezentralisierung` auf Ethereum-Niveau. Für den Nachweis gibt es zwei Wege. `Optimistic Rollups` warten mehrere Tage, bevor sie auf dem Mainnet abrechnen; in dieser Zeit melden Bridge-Validatoren Betrug. `ZK-Rollups` belegen die Gültigkeit mathematisch, dank `Zero-Knowledge`-Technik.

Beide Rollup-Arten sind heute weitgehend kompatibel mit den Smart Contracts des Mainnets. DApps vom Mainnet lassen sich also leicht auf ihren Netzwerken einsetzen. Viele halten ZK-Rollups für die Skalierungslösung der Zukunft, wegen ihrer schnellen Finalität und starken Gültigkeitsgarantien.

# Starte deine Layer-2-Reise mit Optimism oder Base 🙂

Optimism und Base sind beide EVM-äquivalente Optimistic Rollups und ein guter Start für Explorer. DApps fühlen sich dort an wie auf L1, nur günstiger und schneller, und beide nutzen ETH als Gas. Deine nächste Quest ist der erste Schritt auf Optimism oder Base!

Beide Ökosysteme sind stark von Ethereums Werten geprägt. Optimism ist bekannt dafür, [öffentliche Güter zu fördern](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY), zum Beispiel kostenlose Bildung von Bankless Academy.

Optimism und Base sind mehr als Plattformen auf Optimistic Rollups. Sie zeigen, wie Blockchains echte Probleme lösen und neue Wege zum Handeln und Zusammenarbeiten öffnen. Das sollte uns alle optimistisch stimmen. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
