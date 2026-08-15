---
TITLE: Dezentrale Börsen
DESCRIPTION: Entdecke, wie Börsen aus Smart Contracts erlaubnisfreies Tauschen von Token ermöglichen!
LANGUAGE: Deutsch
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# Was ist eine dezentrale Börse?

Dezentrale Börsen (DEX) sind Onchain-Marktplätze. Explorer tauschen dort sicher Kryptowährungen mit anderen Nutzern und behalten ihr Wallet-Guthaben in Selbstverwahrung. Diese Peer-to-Peer-Trades laufen über öffentlich zugängliche Smart Contracts, die Nutzer mit großen gemeinsamen Token-Tresoren verbinden: den `Liquiditätspools`. DEX gibt es auf fast jeder Blockchain, auch auf Layer 1 und Layer 2 von Ethereum.

Token zu tauschen gehört fest zu `DeFi`. Dort findest du mehr Vielfalt und mehr Nutzen als bei jeder anderen Art von Börse. Manche kaufen Token für Onchain-Produkte, andere als Investment. Manche Token geben Stimmrecht über die Richtung eines Projekts, ähnlich wie Aktien an einem Unternehmen! Was auch immer dich antreibt: In DeFi bist du regelmäßig auf DEX unterwegs.

Sehen wir uns an, wie sie funktionieren und was sie dir bringen.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Zentralisierte und dezentrale Börsen

Sehen wir uns den Unterschied an zwischen der Technik einer zentralisierten Börse (Coinbase, Binance, Kraken) und der einer dezentralen Börse (Uniswap, PancakeSwap).

Zentralisierte Börsen (`CEXs`) lassen dich Kryptowährungen handeln, ohne dass du das Blockchain-Ökosystem selbst betrittst. Dein Konto liegt bei der CEX, also liegen auch deine privaten Schlüssel und dein Geld in ihrer Obhut: Du unterliegst ihrer Verwaltung, ihren Regeln und den Risiken ihres Geschäftsmodells.

Dezentrale Börsen (`DEXs`) lassen dich vollständig in Selbstverwahrung handeln, genau dafür wurden Blockchains gebaut. Im Peer-to-Peer-Modell bist du Kunde und Anbieter zugleich und erreichst Finanzchancen, die früher nur der Finanzbranche offenstanden. Das System ist transparent und zensurresistent: Niemand kann deinen Zugang einfrieren oder deine Trades rückgängig machen. Hacks bleiben ein Risiko, dazu später mehr.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Welche Aussage über Krypto-Börsen ist wahr?

- [ ] Hinter einer DEX steht kein Team.

> ℹ️ DEX haben durchaus Entwicklungsteams, aber deren Einfluss auf das Projekt ist begrenzt.

- [ ] Auf einer CEX verlierst du Geld nur durch einen schlechten Trade.

> ℹ️ Auch CEX haben Risiken. 2022 brach die Börse FTX zusammen, fast alle Nutzer verloren ihre Einlagen.

- [x] Auf einer DEX handelst du in Selbstverwahrung, auf einer CEX nicht.

> ℹ️ Sofern nicht ausdrücklich anders angegeben, besitzt eine CEX deine privaten Schlüssel.

# Dezentrale Anwendungen

Eine DEX ist eine Art `dApp`, eine dezentrale Anwendung auf einer Blockchain. „Dezentral“ heißt: Jeder darf sie ohne Unterschied nutzen, sie verarbeitet Interaktionen ohne eine zweite Person, und ihr Code ist öffentlich einsehbar.

Die Dienste einer dApp laufen über Smart Contracts, also Code, der eine Onchain-Aktion entgegennimmt und eine vorhersehbare Onchain-Antwort zurückgibt. Die Ethereum Foundation vergleicht Smart Contracts mit Automaten: Du gibst die Nummer des gewünschten Artikels ein, wirfst den passenden Betrag ein und bekommst das erwartete Ergebnis (deinen Snack), ohne dass ein Mensch mithelfen muss.

Die Smart Contracts einer DEX beherrschen viele Befehle: Token tauschen, abstimmen oder `Liquidität` hinzufügen und abziehen.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Dezentrale Anwendungen (Fortsetzung)

Eine DEX folgt der Logik des Automaten: Sie nimmt dein Token entgegen und gibt das gewünschte Token aus. Weitere dApp-Beispiele:

🎟️ **Abstimmungs-dApps:** Sie ordnen die Stimme eines Nutzers einer Option zu.

📦 **Bridge-dApps:** Sie bringen Kryptowährung von einer Blockchain auf eine andere.

🤝 **Kredit-dApps:** Sie vergeben Darlehen an Nutzer, die die Bedingungen erfüllen.

Smart Contracts sind Konten auf Ethereum: Sie haben eine Adresse und ein Guthaben und handeln automatisch, sobald eine Überweisung mit Befehl eintrifft. Eine DEX ist ein programmiertes Ethereum-Konto mit mehreren Funktionen.

`dApps` nutzen meist eine Website als Oberfläche für die Smart Contracts dahinter. Ist die Website offline, kommst du mit etwas Erfahrung trotzdem an den Contract!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Welche Eigenschaften braucht eine dApp, um als dezentral zu gelten?

- [ ] Erlaubnisfrei: offener Zugang für alle Nutzer.

> ℹ️ Das ist eine Eigenschaft einer dApp, aber nicht die einzige.

- [ ] Autonom: Interaktionen brauchen keinen Vermittler.

> ℹ️ Das ist eine Eigenschaft einer dApp, aber nicht die einzige.

- [ ] Transparent: der Code des Smart Contracts ist öffentlich.

> ℹ️ Das ist eine Eigenschaft einer dApp, aber nicht die einzige.

- [x] Alles davon.

> ℹ️ Ethereum-dApps werden dafür geschätzt, erlaubnisfrei, autonom und transparent sein zu können.

# Automatisierte Market Maker

Auf klassischen Märkten und `CEXs` führt dein Verwahrer ein `Orderbuch`: eine Datenbank voller Kauf- und Verkaufsangebote. Die CEX führt dein Angebot mit dem einer anderen Person zusammen. Meist zahlst du eine feste oder gestaffelte Provision, und ob dich das geheime Matching wirklich zum besten Preis gebracht hat, erfährst du nie.

Die meisten `DEXs` setzen auf „Automated Market Maker“ (`AMM`), das gängigste Design für Token-Tausche: ein System, das deinen Trade über einen öffentlichen Algorithmus bepreist. Einige neuere DEX nutzen stattdessen Orderbücher oder Intent-Systeme. Weil der AMM-Algorithmus quelloffen ist, kann ihn jeder verstehen, kopieren und verbessern. Das sorgt für gesunden Wettbewerb und ständige Innovation.

AMM leiten Trades durch `Liquiditätspools`, statt Gebote direkt zusammenzuführen. Diese gemeinsamen Tresore sammeln und verteilen Token je nach Interaktion, jeder Schritt sichtbar auf der öffentlichen Blockchain.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Welchen Vorteil bietet ein AMM gegenüber einem klassischen Orderbuch?

- [ ] Der Trade über einen AMM ist schneller als über ein Orderbuch.

> ℹ️ Rechnet man die Bestätigungszeit des Netzwerks mit, stimmt das nicht unbedingt.

- [ ] Ein AMM verbindet dich direkt mit dem anderen Nutzer.

> ℹ️ AMM leiten Trades durch gemeinsame Token-Tresore, die Liquiditätspools, und nicht direkt zwischen Nutzern.

- [x] Du erkennst einseitige Trades anderer Parteien und kannst sie verhindern.

> ℹ️ Weil AMM transparent sind, lassen sich bösartige Aktionen viel schwerer verstecken, von Plattformen wie von Nutzern!

# Token-Tausche

Krypto-Trades auf der Blockchain heißen `Token-Tausche`. Diese Smart-Contract-Interaktionen wandeln eine Kryptowährung über die `Liquiditätspools` eines AMM in eine andere um. Über eine `Handelsroute`, einen Weg durch die passenden Pools, tauscht der Contract der DEX dein Eingangstoken gegen das gewünschte. Da ein Pool meist nur zwei Token hält und nicht jedes `Token-Paar` einen Pool hat, führt eine Route manchmal über mehrere Pools.

Damit ein Smart Contract an deine Wallet darf, erlaubst du ihm, bis zu einem festgelegten (oder unbegrenzten) Betrag abzubuchen. Diese `Token-Freigaben` lassen vertraute Contracts ohne deinen privaten Schlüssel handeln. Eine Freigabe kostet Gas, also bleibt sie für später offen: ein Grund, aus einer Wallet zu handeln und in einer anderen zu halten. Wie du sie prüfst und widerrufst, zeigt unsere Lektion [Token-Freigaben verwalten](https://app.banklessacademy.com/lessons/managing-token-allowances)!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Token-Tausche (Fortsetzung)

Ein Beispiel zeigt, wie Freigabe und Tausch ablaufen: ein Tausch von USDC in OP auf Velodrome, einer großen DEX im Optimism-Netzwerk. Der Trade läuft oft über zwei Pools, weil der `Liquiditätspool` USDC/OP weniger günstig ist:

1. Zuerst erlaubst du dem passenden Velodrome-Smart-Contract, USDC von deiner Wallet abzubuchen.
2. Du schickst deine Tauschanfrage an Velodrome.
3. Die Transaktion wird angenommen: Velodrome bucht die angegebene Menge USDC von deiner Wallet in den Pool USDC/ETH. Der gleichwertige Betrag in ETH verlässt diesen ersten Pool und geht in den Pool ETH/OP. Zuletzt wandert OP aus dem zweiten Pool an deine Wallet-Adresse.

Der Tausch ist fertig. Deine USDC wurden über ETH in OP getauscht!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

Ein AMM kann einen Trade in einer einzigen Transaktion durch mehrere Liquiditätspools leiten.

- [x] Wahr

> ℹ️ Richtig! Die Netzwerkgebühr fällt vielleicht höher aus, aber alle Schritte stecken in einer Transaktion.

- [ ] Falsch

> ℹ️ Falsch, sieh dir noch einmal die vorherige Folie an.

# Was ist Liquidität?

Liquidität heißt in Krypto: wie gut ein Markt Käufe und Verkäufe digitaler Werte zu fairen Preisen ermöglicht. Ist sie hoch, sind die Preise stabiler; ist sie niedrig, schwanken sie stärker. Weil Nutzer faire Preise suchen, streben `DEXs` in allen ihren Pools hohe Liquidität an.

Hohe Liquidität heißt: viele Token im Pool, meist wertmäßig 50/50 auf die beiden Token verteilt, die ein- und ausgetauscht werden. Ein USDC/ETH-Pool bedient zum Beispiel alle Trades mit diesem `Token-Paar` auf der Plattform.
Je mehr Token, desto weniger stört ein einzelner Trade das 50/50-Verhältnis, und desto stabiler bleiben die Preise. Wie stark ein Trade dieses Verhältnis verschiebt, nennt man `Preisauswirkung`.

Als Explorer willst du eine möglichst kleine Preisauswirkung, damit du den besten Preis bekommst! Also willst du hohe, ausgewogene Liquidität.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Liquiditätsanbieter

Hohe `Liquidität` entscheidet über den Erfolg einer DEX. Doch im Krypto-Ökosystem gibt es nur begrenzt davon, also konkurriert jede DEX um möglichst viel. Woher kommt sie?

In einem dezentralen Ökosystem haben DeFi-Bürger einen Anreiz, Liquidität in einen Pool zu geben und so die TVL (Total Value Locked) einer Plattform zu erhöhen. Die Gebühren aus den Trades durch den Pool gehen an die LPs (Liquidity Provider), je nach eingebrachter Menge. Ganz richtig: Wer seine Token an einen DEX-Pool verleiht, verdient passiv mit.

Als `LP` gibt es einiges zu bedenken, das behandeln wir später. Merke dir vorerst: Die hohen APR (jährliche Zinssätze), die DEX-Pools anzeigen, sind nicht garantiert, und Verluste sind möglich.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Vervollständige den Satz: „Wenn die Liquidität __________.“

- [ ] hoch ist, ist die Volatilität hoch.

> ℹ️ Falsch, versuch es noch einmal.

- [ ] niedrig ist, ist die Volatilität niedrig.

> ℹ️ Falsch, versuch es noch einmal.

- [x] niedrig ist, ist die Volatilität hoch.

> ℹ️ Richtig! Liquidität und Volatilität verlaufen meist gegenläufig.

# Knowledge Check 6

Wie motivieren DEX ihre Nutzer, Liquidität bereitzustellen?

- [ ] Mit einer Versicherung gegen Verluste beim Handel.

> ℹ️ Weder CEX noch DEX schützen dich vor Verlusten aus einer schlechten Investition.

- [x] Mit einem Anteil an den Gebühren und/oder Bonus-Token.

> ℹ️ Die Gebühren einer DEX werden oft unter den Beteiligten aufgeteilt, auch an die LPs. Manche Plattformen zahlen noch Boni dazu.

- [ ] Mit Zugang zu privaten Liquiditätspools.

> ℹ️ Private Liquiditätspools gibt es nicht; bei so wenig Verkehr käme kaum eine Rendite zusammen.

- [ ] Alles davon.

> ℹ️ Hier ist nur eine Antwort richtig. Findest du heraus, welche?

# Plattformgebühren

CEX wie DEX lassen sich ihre Dienste bezahlen, und die Blockchain ist auch nicht gratis. Fünf Kosten, die du bei der Wahl einer Plattform beachten solltest.

🏷️ **Plattformgebühren:** CEX legen ihre Provisionen selbst fest; bei einer DEX hängt die Gebühr vom Pool ab (oft ein Bruchteil eines Prozents) und ist onchain für alle sichtbar.

🌐 **Netzwerkgebühren:** Die Blockchain berechnet zusätzlich Gas. Nutze das Netzwerk in ruhigen Zeiten und prüfe den Preis auf [Etherscan](https://etherscan.io/gastracker). Auf Layer 2 ist es viel günstiger, vergleiche auf [growthepie](https://www.growthepie.com/).

📦 **Bridge-Gebühren:** CEX und Bridges berechnen den Wechsel von einem Netzwerk zum anderen. Bridge-dApps zeigen vorher eine Schätzung.

💹 **Wechselkurse:** Kaufst du direkt mit Fiatgeld, achte auf Kurse, die nicht dem Markt entsprechen.

🧊 **Slippage:** Preise bewegen sich schnell, also lassen DEX Spielraum für Schwankungen: die `Slippage` (einstellbar, meist 0,5 bis 2 %). So viel kannst du höchstens verlieren; ein zu niedriger Wert lässt den Trade scheitern.

Recherchiere immer selbst, damit du die Kosten einer Plattform kennst.

# Vorteile einer DEX

Wir haben viel Theorie behandelt, aber vielleicht fragst du dich noch, ob DEX etwas für dich sind. In der Regel profitierst du davon, wenn:

- 🔑 Du die Verwahrung deiner digitalen Werte behalten willst.
- 🔒 Du deine Werte auf der Blockchain sichern und CEX-Pleiten ausweichen willst.
- ⌛ Du rund um die Uhr Zugang zum Kryptomarkt willst.
- 👛 Du eine größere Auswahl an Kryptowährungen willst.
- 🤑 Du Liquidität bereitstellen möchtest.
- 🛂 Du dich nicht auf jeder Plattform anmelden und `KYC` machen willst.
- ⚔️ Du die zusätzlichen Risiken und Chancen der dezentralen Finanzwelt suchst.

Trotzdem hat fast jeder DeFi-Nutzer ein Konto bei einer zentralisierten Börse. CEX bieten die einfachen Ein- und Ausstiege in die klassische Bankenwelt: Du bekommst Geld leicht vom Bankkonto auf die Blockchain und zurück. [Ryan Sean Adams](https://twitter.com/RyanSAdams) vergleicht das mit einer öffentlichen Toilette: _„Du gehst rein, erledigst dein Geschäft, gehst wieder raus.“_

Das ist praktisch: Du kannst mit einem CEX-Konto starten und nach und nach in DeFi wechseln, sobald du dich sicherer fühlst.

# Risiken einer DEX

Eine DEX zu nutzen birgt auch Risiken. Hier die folgenschwersten:

🐞 **Smart-Contract-Risiko:** Audits senken die Wahrscheinlichkeit von Fehlern, beseitigen sie aber nicht: 2025 verlor eine große, mehrfach geprüfte DEX 128 Millionen Dollar durch einen unscheinbaren Code-Fehler. Im schlimmsten Fall verlierst du bis zu deinem Trade-Betrag. Bevorzuge bewährte, gründlich geprüfte Smart Contracts.

💰 **Risiko der Selbstverwahrung:** Wer allein für seine privaten Schlüssel verantwortlich ist, kann eine ganze Wallet durch Diebstahl, Betrug oder eine verlegte Seed-Phrase verlieren. Darum eine Strategie mit mehreren Wallets, und eine Kopie deiner Seed-Phrasen an einem sicheren Ort in der echten Welt.

🥪 **Sandwich-Angriffe:** Eine hoch eingestellte Slippage macht es wahrscheinlicher, dass Bots `Sandwich-Angriffe` gegen dich fahren. Dabei verlierst du bis zu deinem Slippage-Betrag. Wie du dich schützt, zeigen wir in künftigen Inhalten.

Nach Abwägung von Vorteilen und Risiken passt eine CEX vielleicht besser zu dir, wenn:

- 🎓 Du noch am Anfang deiner Krypto-Reise stehst und Risiken und Chancen erst verstehen willst.
- ⚖️ Du selten und in kleinen Beträgen handelst, sodass Blockchain-Gebühren unverhältnismäßig sind.
- 🏰 Du dein Geld lieber einer Börse anvertraust, statt selbst dafür geradezustehen.

Manche fahren zweigleisig, um ihr Risiko zu senken: kaufen und verkaufen auf einer CEX, aufbewahren auf der Blockchain.

# Knowledge Check 7

Warum eine dezentrale statt einer zentralisierten Börse nutzen?

- [ ] Für Zugang zu Token, die keine zentralisierte Börse listet.

> ℹ️ Das ist eine Eigenschaft einer DEX, aber nicht die einzige.

- [ ] Um die volle Verwahrung über die getauschten Mittel zu behalten.

> ℹ️ Das ist eine Eigenschaft einer DEX, aber nicht die einzige.

- [ ] Für Werkzeuge und Chancen, die sonst nicht offenstehen.

> ℹ️ Das ist eine Eigenschaft einer DEX, aber nicht die einzige.

- [x] Alles davon.

> ℹ️ Richtig! DEX bieten all diese Vorteile gegenüber CEX.

# Die richtige DEX wählen

In DeFi gibt es viele dezentrale Börsen, und manche sind besser als andere. Wäge diese fünf Punkte ab:

🥇 **Seriosität:** Ist der Anbieter für Vertrauenswürdigkeit, Qualität und Beständigkeit bekannt?

⛲ **Liquidität:** Ist die `TVL` der Pools hoch genug, um die Preisauswirkung klein zu halten?

🖱️ **Bedienbarkeit:** Lässt sich die Oberfläche angenehm bedienen?

🔐 **Sicherheit:** Wurden die Smart Contracts von mehreren Prüfern auditiert?

🎁 **Belohnungen und Funktionen:** Gibt es Treueprämien fürs Handeln oder für Liquidität? Kannst du in der Governance abstimmen?

Gut schneiden hier unter anderem Uniswap, Curve, Velodrome und PancakeSwap ab. Du kannst leicht von einer DEX zur nächsten wechseln, bis du deine Favoriten findest! Für die Quest dieser Lektion nutzen wir Velodrome, eine etablierte DEX im Optimism-Netzwerk. Sie ist einfach zu bedienen, und weil sie auf einem Layer 2 läuft, sind die Gebühren viel angenehmer!

# Gute Gewohnheiten auf einer DEX

Bevor du mit einer dApp arbeitest, halte dich an ein paar Regeln, damit dein Geld sicher bleibt:

👩‍💻 Prüfe den Link einer dApp über den offiziellen X-Account (Twitter) des Projekts (goldener Haken) oder eine vertrauenswürdige Quelle, dann setze ein Lesezeichen. Viele DeFi-Betrügereien starten mit einem falschen Link, auch bei bekannten Suchmaschinen.

🔓 Beschränke `Token-Freigaben` onchain auf deinen Trade-Betrag. Viele DEX nutzen inzwischen Freigaben per Signatur, die nur den einen Trade abdecken: siehe [Token-Freigaben verwalten](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Nutze für dApps nicht deine HODL-Wallet, sondern eine eigene. Unsere [Lektion Web3-Sicherheit](https://app.banklessacademy.com/lessons/web3-security) erklärt Wallet-Strategien.

Jetzt bist du bereit für deine erste dezentrale Börse!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Woran erkennst du, dass du eine seriöse DEX gewählt hast?

- [x] An ihrem Ruf und an URLs aus vertrauenswürdigen Quellen.

> ℹ️ Richtig! Prüfe den Ruf der DEX selbst und folge nur URLs aus einer vertrauenswürdigen Quelle.

- [ ] Indem du beim ersten Mal einen kleinen Test-Trade machst.

> ℹ️ Eine einzige Interaktion mit einem bösartigen Smart Contract kann deine ganze Wallet leeren.

- [ ] Beides davon.

> ℹ️ Falsch. Eine einzige Interaktion mit einem bösartigen Smart Contract kann deine ganze Wallet leeren.
