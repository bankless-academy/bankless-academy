---
TITLE: DEX-Aggregatoren
DESCRIPTION: Tauche ein in DEX-Aggregatoren, Liquidität und die DeFi-Börsenwelt.
LANGUAGE: Deutsch
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

`Dezentrale Börsen` (DEX) sparen dir beim Handel Geld, weil sie die Kosten von Vermittlern beseitigen.

Doch es geht noch günstiger, Explorer. Mit `DEX-Aggregatoren` durchsuchst du alle möglichen Trades auf vielen DEX-Plattformen gleichzeitig und führst die beste Handelsroute in einer einzigen Aktion aus. So bekommst du beim `Tausch` von Token den besten Preis. Wie ein Flugsuchportal den günstigsten Flug findet, holt ein DEX-Aggregator das Maximum aus deinem Trade.

Diese Lektion zeigt:

1. Wie DEX die Liquidität aufteilen und warum das die Kurse verschlechtert.
2. Wie DEX-Aggregatoren mehrere DEX über eine einzige Oberfläche zugänglich machen.
3. Auf wie viele Arten eine Aggregator-Oberfläche Zeit und Geld spart.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Wie Liquidität die Preise beeinflusst

Die Menge eines Tokens, die auf einem einzelnen Markt handelbar ist, heißt `Liquidität`. Wie viel davon vorhanden ist, bestimmt maßgeblich die `Preisauswirkung` deiner Trades in DeFi: Eine große Preisauswirkung macht den Trade teurer, eine kleine günstiger. Die meisten handeln deshalb lieber in Märkten mit hoher Liquidität.

Stell dir ein Schwimmbecken vor: Je mehr Wasser (Liquidität) darin ist, desto kleiner die _Änderung_ des Wasserstands (Preisauswirkung), wenn jemand hineinspringt oder herausklettert. Auch die Größe dieses „Jemand“ (der Trade) beeinflusst diese _Änderung_.

# Ein Beispiel: Liquidität und Preis

Sehen wir uns ein Beispiel an.

Stell dir ein Token vor, das auf mehreren DEX gleichzeitig gehandelt wird. Eine DEX hat einen tiefen Pool mit dem Großteil der `Liquidität`, eine andere nur einen flachen Pool mit einem kleinen Bruchteil davon.

Kauft ein Explorer aus beiden Pools dieselbe Menge, fällt die `Preisauswirkung` im flachen Pool höher aus. Derselbe Trade zieht dort einen viel größeren Anteil der gesamten Liquidität ab, bewegt den Preis stärker und kostet den Käufer mehr.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Fülle die Lücken: Für den besten Preis handelt man in Märkten mit ________ Liquidität, um ________ Preisauswirkung zu haben.

- [ ] guter, maximaler

> ℹ️ Versuch es nochmal! Eine maximale Preisauswirkung macht den Trade teurer, nicht günstiger.

- [x] hoher, geringer

> ℹ️ Richtig! Mehr Liquidität heißt kleinere Preisauswirkung, wie ein größeres Wasserbecken, das sich beim Sprung weniger ändert.

- [ ] geringer, guter

> ℹ️ Versuch es nochmal! Geringe Liquidität erhöht die Preisauswirkung und macht Trades teurer.

- [ ] dünner, großer

> ℹ️ Versuch es nochmal! Dünne Liquidität führt zu einer großen Preisauswirkung, genau das wollen Trader vermeiden.

# Schwäche klassischer DEX: dünne Liquidität

DeFi wächst weiter, doch für Nutzer entsteht ein Problem: Je mehr DEX starten, desto stärker verteilt sich die Gesamtmenge eines Tokens. Das nennt man dünne Liquidität.

Denk an das Schwimmbecken: Verteilt sich das Wasser (`Liquidität`) auf mehrere Becken, ist es in jedem einzelnen „dünner“ als zuvor im einen großen.

In den Anfängen von DeFi hielten ein bis zwei DEX fast die gesamte Liquidität. Ab 2020 kämpften neue DEX darum; eine Konkurrentin zog Uniswap binnen weniger Wochen über 1 Milliarde Dollar an Liquidität ab. Heute verteilt sie sich auf Hunderte DEX auf vielen Blockchains und `Layer-2`-Netzwerken, und jeder einzelne Pool wird dünner.

Jeder Trade hat dadurch eine größere `Preisauswirkung` als früher. Ohne neue Ideen wird der Handel auf einer einzelnen DEX für Explorer teurer.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Welche zwei Faktoren bestimmen die Preisauswirkung eines DEX-Trades?

- [ ] Die gewählte DEX und die Größe des Trades

> ℹ️ Versuch es nochmal! Die DEX selbst spielt keine Rolle. Es zählt die Liquidität im Pool.

- [ ] Das gewählte Token und die gewählte DEX

> ℹ️ Versuch es nochmal! Weder Token noch DEX-Marke bestimmen die Preisauswirkung, sondern Liquidität und Trade-Größe.

- [x] Die Größe des Trades und die verfügbare Liquidität

> ℹ️ Richtig! Wie im Schwimmbecken hängt die Größe des Spritzers davon ab, wie schwer der Springer ist und wie viel Wasser darin steht.

- [ ] Die verfügbare Liquidität und das gewählte Token

> ℹ️ Versuch es nochmal! Liquidität ist ein Faktor, der andere ist die Größe des Trades, nicht das Token.

# Liquidität mit DEX-Aggregatoren bündeln

Um die Preisauswirkung zu senken und dir Geld zu sparen, braucht es viel `Liquidität`. DEX-Aggregatoren leiten einen Trade über mehrere DEX gleichzeitig und senken so die Preisauswirkung: Ein großer Trade aus deiner Wallet wird in viele kleine Trades auf mehreren DEX zerlegt.

DEX-Aggregatoren können einen Trade sogar über ein `Zwischen-Token` oder mehrere leiten, wenn das Ergebnis dann besser ist. Ein Flugsuchportal schlägt ja auch einen zusätzlichen Zwischenstopp vor, wenn er günstiger ist. Diese beste `Handelsroute` finden ausgefeilte Algorithmen, die alle möglichen Wege durchsuchen.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Trade-Routing bei DEX-Aggregatoren bedeutet:

- [ ] Trades laufen über Sonderabsprachen mit bestimmten DEX

> ℹ️ Versuch es nochmal! Aggregatoren durchsuchen alle verfügbaren DEX algorithmisch, nicht über Sonderabsprachen.

- [ ] Trades laufen immer über mehrere DEX

> ℹ️ Versuch es nochmal! Aggregatoren teilen einen Trade nur auf, wenn das Ergebnis besser wird. Manchmal ist eine einzelne DEX die beste Route.

- [ ] Trades laufen nur über die Lieblings-DEX des Nutzers

> ℹ️ Versuch es nochmal! Bei einer DEX zu bleiben wäre sinnlos. Aggregatoren suchen über viele DEX hinweg den besten Preis.

- [x] Trades können über mehrere DEX und Zwischen-Token laufen

> ℹ️ Richtig! Algorithmen durchsuchen alle Wege, auch zusätzliche „Zwischenstopps“ über Zwischen-Token, um die günstigste Route zu finden.

# Wie Gas-Kosten auf Ethereum berechnet werden

Frischen wir die Rechnung auf, bevor wir sehen, wie Aggregatoren Netzwerkgebühren senken. Am meisten bringt das auf dem Ethereum Mainnet; auf `Layer-2`-Netzwerken kostet es meist nur Cent.

Wie Benzin für ein Auto ist `Gas` der Treibstoff für Code auf Ethereum. Je mehr Rechenschritte, desto mehr Gas braucht dein Code. Der Gas-Preis wird in winzigen Ether-Einheiten gemessen, den `gwei`: 1 gwei ist ein Milliardstel Ether (0,000000001 ETH).

Die Gesamtkosten hängen vom verbrauchten Gas und vom Preis pro Einheit zum Zeitpunkt ab. Die Formel lautet:
_Verbrauchtes Gas * Gas-Preis = Gesamte Gas-Kosten_

Beispiel: Gas kostet 22 gwei je Einheit, die Transaktion verbraucht 120 000 Einheiten:
_120 000 * 22 gwei = 2 640 000 gwei_ _**oder**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Wie Aggregatoren Gas-Kosten senken

Einen Trade aufzuteilen würde durch die zusätzliche Onchain-Aktivität mehr Transaktionsgebühren bedeuten. Doch fortgeschrittene Aggregatoren rechnen diese Gebühren ein, wenn sie die Route planen. Sie simulieren Trades offchain samt `Gas`-Kosten und suchen die `Handelsrouten`, die dem Explorer am Ende am meisten Wert lassen.

Manche gehen noch weiter. 1inch, Pionier der DEX-Aggregation, lässt inzwischen professionelle Ausführer um deinen Trade konkurrieren und das Gas selbst zahlen (ein System namens Fusion). Der Nutzer zahlt oft gar kein Gas.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Womit senken DEX-Aggregatoren die Transaktionskosten NICHT?

- [ ] Trades vor der Ausführung offchain simulieren

> ℹ️ Versuch es nochmal! Aggregatoren simulieren Trades tatsächlich offchain, samt Gas-Kosten, um die beste Route zu finden.

- [x] DEX bitten, die Netzwerkgebühren für ihre Nutzer zu senken

> ℹ️ Richtig! Netzwerkgebühren setzt die Blockchain fest, nicht die DEX. Niemand kann einfach um eine Senkung bitten.

- [ ] Gas-Kosten bei der Routenplanung einrechnen

> ℹ️ Versuch es nochmal! Fortgeschrittene Aggregatoren beziehen Transaktionsgebühren in die Routenberechnung ein.

- [ ] Profis den Trade ausführen und das Gas zahlen lassen

> ℹ️ Versuch es nochmal! In Intent-Systemen wie 1inch Fusion übernehmen die Ausführer das Gas für die Nutzer.

# Meta-Aggregatoren

Es gibt sogar Meta-Aggregatoren von DEX-Aggregatoren! Diese Plattformen durchsuchen konkurrierende DEX-Aggregatoren und zeigen dir die besten Angebote. Die eingebaute Tauschfunktion in Wallets wie MetaMask holt zum Beispiel Angebote von mehreren Anbietern ein, darunter DEX-Aggregatoren wie 1inch, und schlägt eine eigene Servicegebühr auf.

Hinweis: So bequem sie sind, `Meta-Aggregator`-Dienste können zusätzlich zu den Netzwerkgebühren Kosten verursachen. Explorer: Achte darauf, dass dein Trade nicht teurer wird als gedacht.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-Aggregatoren vergleichen mehrere DEX-Aggregatoren, um für ihre Nutzer die besten Preise zu finden.

- [x] Wahr

> ℹ️ Richtig! Meta-Aggregatoren durchsuchen konkurrierende DEX-Aggregatoren und zeigen den Nutzern die besten Angebote.

- [ ] Falsch

> ℹ️ Versuch es nochmal! Genau das tun Meta-Aggregatoren: Sie suchen über mehrere DEX-Aggregatoren hinweg.

# Sandwich-Angriffe vermeiden

Wer direkt über `DEXs` tauscht, kann bis zur Grenze seiner `Slippage-Toleranz` Wert verlieren, wenn Bots direkt vor und nach dem Trade handeln, um den Preis zu bewegen. Diese Verluste heißen `Sandwich-Angriffe`; allein 2021 kosteten sie Nutzer rund 235 000 000 Dollar. Heute schützen Verfahren wie `private Transaktionsweiterleitung` und Intent-Handel die meisten Alltags-Trades. Trotzdem lohnt sich beim Tauschen eine niedrige Slippage-Toleranz.

Weil DEX-Aggregatoren die Liquidität wieder bündeln, fällt die Preisauswirkung eines Trades geringer aus. Explorer können ihre Slippage-Toleranz also niedrig halten und sparen mit einem Aggregator mehr als beim Handel direkt auf einer DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Zu deinem Schutz solltest du deine Slippage-Toleranz halten:

- [x] niedrig

> ℹ️ Richtig! Eine niedrige Slippage-Toleranz begrenzt, wie viel Wert ein Sandwich-Angriff aus deinem Trade ziehen kann.

- [ ] hoch

> ℹ️ Versuch es nochmal! Eine hohe Slippage-Toleranz lässt Sandwich-Angriffe mehr Wert aus deinem Trade ziehen.

# Mehr Schutz vor Sandwiches: OTC-Trades

Manche Aggregatoren wie 1inch bieten sogar `OTC`-Dienste (`Over the Counter`), die vollständig vor Sandwich-Angriffen schützen. Diese optionalen Dienste ermöglichen den direkten Handel mit anderen Nutzern, statt über die `Liquiditätspools` von DeFi zu gehen, und sparen Explorern noch einmal Geld.

CoW Swap geht einen anderen Weg: Nutzer unterschreiben eine Handelsanfrage (einen `Intent`), und professionelle `Solver` konkurrieren in `Batch-Auktionen` darum, sie zum besten Preis auszuführen. Solver können zwei Nutzer sogar direkt zusammenbringen, sodass Trades von Haus aus vor Sandwich-Angriffen geschützt sind.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Womit sparen viele DEX-Aggregatoren ihren Nutzern Geld?

- [ ] Trades über die Liquidität mehrerer DEX leiten.

> ℹ️ Versuch es nochmal! Gebündelte Liquidität senkt die Preisauswirkung, aber das ist nicht die einzige Ersparnis.

- [ ] OTC-Trades, die voll vor Sandwich-Angriffen schützen.

> ℹ️ Versuch es nochmal! Das ist eine Art zu sparen, aber nicht die einzige.

- [ ] Gas-Kosten beim Bau der besten Handelsrouten einrechnen.

> ℹ️ Versuch es nochmal! Das ist eine Art zu sparen, aber nicht die einzige.

- [x] Alles davon

> ℹ️ Richtig! Aggregatoren bündeln Liquidität, rechnen Gas-Kosten ein und bieten OTC-Trades an, damit dir mehr Wert bleibt.
