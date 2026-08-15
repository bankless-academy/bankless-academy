---
TITLE: Stablecoins verstehen
DESCRIPTION: Nutze Dollar, Euro und mehr auf der Blockchain.
LANGUAGE: Deutsch
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
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

> * Stablecoins sind das Blockchain-Gegenstück zu Fiatgeld wie Dollar oder Euro.
>
> * Sie werden meist als Token ausgegeben (zum Beispiel als `ERC-20`-Token auf Ethereum) und zirkulieren heute über viele Blockchains hinweg. DeFi-Nutzer wechseln damit schnell zwischen Fiat-Wert und Krypto-Wert, ohne die Blockchain zu verlassen.
>
> * Es gibt mehrere Kategorien von Stablecoins, jede mit eigenen Kompromissen und eigenem Risikoprofil.
>
> * Stablecoins können mehr Jahreszinsen bringen als Fiatgeld auf einem klassischen Bankkonto. Die Regulierung bestimmt inzwischen aber, wer diese Rendite anbieten darf und wie.

## Warum Stablecoins halten?

Stablecoins sind zu einem Eckpfeiler des DeFi-Ökosystems geworden. Nach rund 140 Milliarden US-Dollar Umlaufmenge auf dem Höhepunkt 2022 (siehe Bild) überstieg die Gesamtmenge 2026 die Marke von 300 Milliarden Dollar. 2025 wickelten Stablecoins über 30 Billionen Dollar an Transaktionswert ab, mehr als Visa in dem Jahr verarbeitete.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Darum sind sie gefragt:

* **Stabilität:** Stablecoins in deiner Wallet in Selbstverwahrung zu halten ist wie Fiatgeld zu halten, nur auf der Blockchain. Bei einem Stablecoin wie USD Coin (USDC), herausgegeben von Circle, darfst du einen Wert von 1:1 zum US-Dollar erwarten, während Werte wie Ether und Bitcoin schwanken.

* **Flexibilität:** Weil dieser gekoppelte Wert als Token auf der Blockchain existiert, wechselst du leicht zwischen Fiat-Wert und Krypto-Wert.

* **Zugang:** Stablecoins öffnen dir viele dezentrale Finanzdienste, etwa erlaubnisfreies Leihen oder Verleihen gegen Zinsen.

* **Sicherheit:** Kryptografie macht es Angreifern extrem schwer, Transaktionen abzufangen oder zu fälschen.

Wie ein Stablecoin die 1:1-Gleichheit mit seinem Fiat-Gegenstück hält, seine `Kopplung`, ist seine wichtigste Eigenschaft. So wie Fiatgeld nur so viel wert ist wie die Grundlagen dahinter, bestimmt der Kopplungsmechanismus den Wert deines Bestands.

## Kategorien von Stablecoins

Es gibt drei gängige Wege, wie ein Stablecoin seine Preiskopplung hält:

* 💵 **Fiat-gedeckt:** 1:1 durch echte Fiat-Reserven besichert.

* 🔗 **Krypto-besichert:** überbesichert durch Krypto-Einlagen in DeFi-Protokollen.

* 🔃 **Algorithmisch:** Algorithmen steuern das Angebot statt voller Besicherung, ein Ansatz mit schwieriger Geschichte.

### 1\. Fiat-gedeckte Stablecoins

Fiat-gedeckte Stablecoins halten ihren Wert, indem sie eine feste Token-Menge ausgeben, der Währungsreserven in der echten Welt gegenüberstehen. Ihr Onchain-Preis hält sich über Angebot und Nachfrage: Kaum jemand zahlt mehr als einen echten Dollar für einen Dollar Onchain-Wert, sondern handelt dann einfach woanders. Steigt die Nachfrage, sperrt der `Stablecoin-Herausgeber` zusätzliches Fiatgeld und erhöht die Token-Menge um denselben Betrag.

Bekannte fiat-gedeckte Stablecoins sind Tethers USDT und Circles USD Coin (USDC). Circle gibt mit EURC auch ein an den Euro gekoppeltes Gegenstück heraus.

Stablecoin-Herausgeber verdienen auf verschiedene Weise. Sie legen zum Beispiel einen Teil ihrer Fiat-Reserven in kurzlaufenden US-Staatsanleihen und Bargeldäquivalenten an oder mischen Einnahmen aus Transaktionsgebühren und Kreditgeschäften.

> **Innovation und Wohltätigkeit mit fiat-gedeckten Stablecoins: Glo Dollar**
>
> Die Glo Foundation geht mit [Glo Dollar](https://www.glodollar.org/) (USDGLO), ihrem an den US-Dollar gedeckten Stablecoin, einen neuen Weg bei den Reserveerträgen: Die Zinsen auf die Reserven finanzieren Grundeinkommensprogramme für Menschen in extremer Armut. Wer USDGLO hält, tut also nebenbei Gutes. Wie Glo Dollar funktioniert, erfährst du [hier](https://www.glodollar.org/articles/how-glo-works).

Worauf du bei fiat-gedeckten Stablecoins achten solltest:

* **Berichte über die Reserven:** Wer sie hält, braucht die Gewissheit, dass jedem Token eine Fiat-Reserve gegenübersteht. Die meisten Herausgeber veröffentlichen `Attestierungen` (ein unabhängiger Prüfer bestätigt, dass die Reserven zu einem bestimmten Stichtag vorhanden waren). Das ist schwächer als eine vollständige Prüfung der Finanzen des Herausgebers, und die veröffentlicht derzeit kein großer Anbieter. Circle legt monatliche USDC-Attestierungen vor (durch Deloitte), und Tether, historisch undurchsichtig bei seiner Deckung, veröffentlicht inzwischen quartalsweise Attestierungen (durch BDO).

* **Regulierung:** In den USA verlangt der GENIUS Act (unterzeichnet im Juli 2025) von Herausgebern von Zahlungs-Stablecoins Reserven im Verhältnis 1:1 in Bargeld und kurzlaufenden US-Staatsanleihen und verbietet ihnen, Zinsen an Halter zu zahlen. In der EU führte der MiCA-Rahmen dazu, dass große Börsen nicht konforme Stablecoins wie USDT für europäische Nutzer aus dem Angebot nahmen.

* **Zensurrisiko:** Weil USDC und USDT staatlichen Ermittlungen unterliegen, enthalten die `Smart Contracts` dieser Token eine Einfrierfunktion. Damit lassen sich die Onchain-Bestände eines Nutzers bei beanstandeter Aktivität sperren. Diese Funktion greift auch bei Token in `Non-Custodial-Wallets`.

Der hohe Grad an Zentralisierung bei fiat-gedeckten Stablecoins lässt viel Raum für bessere, krypto-native Wege, an den Fiat-Wert gekoppelt zu bleiben.

### 2\. Krypto-besicherte Stablecoins

Krypto-besicherte Stablecoins sind transparenter und dezentraler, was bestimmte Risiken ausräumt. Sie halten ihre Fiat-Kopplung über Reserven aus Krypto-Assets. Weil der Kryptomarkt schwankt und damit der Gesamtwert dieser Reserven, sind diese Stablecoins überbesichert, teils bis zu 200 %! Alle besicherten Werte sind onchain einsehbar, du siehst also rund um die Uhr, woraus dein Stablecoin wirklich besteht.

Das bekannteste Beispiel ist USDS von Sky, der Nachfolger von MakerDAOs Dai (DAI), dem ersten krypto-besicherten Stablecoin, nachdem MakerDAO sich 2024 in Sky umbenannt hat. Wer es noch dezentraler will: LUSD von Liquity ist ausschließlich durch überbesicherte ETH-Einlagen gedeckt.

![Zusammensetzung der Sicherheiten von DAI, dem Vorgänger von USDS (Juni 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Worauf du achten solltest:

* **Bewertung der Sicherheiten:** Die Reserven eines Stablecoins bestehen meist aus Krypto, anderen Stablecoins und sogar weiteren Anlageklassen. USDS ist zum Beispiel durch ETH, Stablecoins, reale Werte wie US-Staatsanleihen und einige kleinere Bausteine gedeckt. Um die Risiken dieser Mischung abzufedern, ist USDS überbesichert (zum Zeitpunkt des Schreibens). Selbst wenn der ETH-Preis um 20 % einbräche, hätte USDS noch [genug Sicherheiten](https://defillama.com/stablecoins) für seine Token. Weitere starke Schwankungen über alle Anlagen hinweg könnten die Kopplung allerdings aushöhlen.

* `Gegenparteirisiko`: Wer auf mehrere Anlageklassen setzt, erhöht die Chance, dass eine davon in Schwierigkeiten gerät und den Wert deines Bestands drückt. Dafür bist du jedem einzelnen Risiko nur anteilig ausgesetzt.

* **Governance-Risiko:** Diese Art von Stablecoin und ihre Kasse werden von einer dezentralen Gruppe von Governance-Wählern verwaltet. Damit drohen menschliche Fehler oder eine Übernahme der Governance.

### 3\. Algorithmische Stablecoins

Diese Token versuchen, ihre Kopplung zu halten, indem sie ihr eigenes Angebot automatisch ausgleichen statt volle Sicherheiten zu halten: Ein Onchain-Algorithmus nimmt Token aus dem Umlauf, wenn der Marktpreis unter die Kopplung fällt, und erzeugt neue, wenn er darüber steigt. Auf dem Papier verspricht das einen Stablecoin ohne Banken und ohne Sicherheiten. In der Praxis ist die reine Form dieses Designs katastrophal gescheitert.

Das prägende Beispiel ist Terras UST. Sein Algorithmus erlaubte Haltern, 1 UST jederzeit gegen Terras schwankendes LUNA-Token im Wert von 1 Dollar zu tauschen. Im Mai 2022 zwangen massive UST-Verkäufe den Algorithmus, riesige Mengen LUNA zu erzeugen. Das drückte dessen Preis und löste noch mehr Verkäufe aus: eine `Todesspirale`, die binnen Tagen rund 40 Milliarden Dollar auslöschte. UST erreichte seine Kopplung nie wieder.

Die überlebenden Projekte haben das reine Modell aufgegeben. Frax, einst teils algorithmisch, ging 2023 auf 100 % Besicherung über; sein heutiger Stablecoin frxUSD ist unter anderem durch tokenisierte US-Staatsanleihenfonds gedeckt, während FRAX jetzt als Governance-Token des Protokolls dient.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Aus den Trümmern ist eine eigene, moderne Kategorie entstanden: hybride Entwürfe oder „synthetische Dollar“ wie Ethenas USDe. Sie halten Krypto-Sicherheiten plus gegenläufige Handelspositionen, die Preisbewegungen ausgleichen (eine „delta-neutrale“ Absicherung). Sie sind besichert, aber auf neue Art, mit eigenen Risiken: Sie hängen von den Börsen ab, die diese Positionen halten, und von Marktbedingungen, die die Absicherung rentabel halten.

Worauf du achten solltest:

* **Risiko der Todesspirale:** Eine rein algorithmische Kopplung lebt vom Vertrauen des Marktes. Bricht das Vertrauen, kann der Angebotsmechanismus den Absturz verstärken statt ihn zu stoppen, und es bleiben keine Sicherheiten zum Einlösen.

* **Sehr technisch:** Du musst verstehen, was das Token wirklich deckt und unter welchen Bedingungen diese Deckung versagen könnte, um Vertrauen und ein Gefühl für Risiko und Ertrag zu entwickeln.

* **Risiko junger Technik:** Hybride und synthetische Entwürfe sind kaum durch einen vollen Marktzyklus erprobt. Nutze nur Token mit mehreren Smart-Contract-Audits von erstklassigen Prüfern, und denk daran: Audits schützen nicht vor einem fehlerhaften Wirtschaftsmodell.

## Den passenden Stablecoin wählen

Welcher Stablecoin ist der beste? Wie überall in DeFi hängt die Antwort von deinen **Bedürfnissen**, deinen **Werten** und deiner **Risikobereitschaft** ab.

Hier noch einmal jede Kategorie in Kürze:

* 💵 **Fiat-gedeckt:** der klassische Weg, so nah an Fiatgeld onchain wie es geht.

  * Werte: Konvention, Vertrauen in Institutionen.

  * Risiken: undurchsichtige Deckung, Anbieter kann Guthaben einfrieren.

* 🔗 **Krypto-besichert:** ein ausgewogener, krypto-nativer Weg, der das Risiko der Sicherheiten über mehrere Anlageklassen streut.

  * Werte: Streuung, Transparenz, Fortschritt.

  * Risiken: Schwankungen am Kryptomarkt, Abhängigkeit von anderen Werten.

* 🔃 **Algorithmisch:** die experimentelle Grenze: reine Entwürfe sind katastrophal gescheitert, moderne Hybride sind noch unerprobt.

  * Werte: Innovation, Kapitaleffizienz, Fortschritt.

  * Risiken: Todesspiralen, fehlerhafte Wirtschaftsmodelle, Fehler in Smart Contracts.

Wie immer lernst du am besten, indem du es ausprobierst. Vielleicht hältst du am Ende sogar mehrere Stablecoins.

Und denk daran: Nicht alle Stablecoins einer Kategorie sind gleich gut! Recherchiere selbst, bevor du dich auf ein neues Token einlässt.

---

Wir hoffen, dieser Eintrag im Explorer-Handbuch, „Stablecoins verstehen“, hat dir gefallen.

Vergiss nicht, diesen Eintrag zu sammeln, wenn du ein Exemplar zum Nachschlagen auf deinen Reisen haben oder künftige Inhalte der Bankless Academy unterstützen willst. Gute Reise, Explorer!

---

## Häufige Fragen

### Welches sind die beliebtesten Stablecoins?

Ein Blick auf die führenden Stablecoins nach `Marktkapitalisierung` zeigt, was der Markt gerade bevorzugt. Es ist aber keine Empfehlung, wie du dich aufstellen solltest, und auch keine Aussage darüber, wie sicher das wäre.

Hier eine Echtzeitliste der größten Stablecoins nach Marktkapitalisierung: <https://defillama.com/stablecoins>

Krypto-Nutzer berufen sich bei der Wahl von Anlagen oft auf den „Lindy-Effekt“. Die Idee: Je länger etwas schon existiert, desto eher besteht es weiter. Siebzehn Jahre Kryptogeschichte zeigen, dass das nur manchmal stimmt.

### Wo kann ich Stablecoins kaufen?

Zentralisierte Börsen (CEX) bieten die bekannten fiat-gedeckten Stablecoins an (und meist einen eigenen), andere Arten fehlen dort oft.

Für krypto-besicherte und algorithmische Token gehst du auf eine dezentrale Börse (DEX) oder nutzt einen Einstieg direkt in der Wallet wie „MetaMask Buy“. Mehr über Peer-to-Peer-Marktplätze erfährst du in unserer Lektion [Dezentrale Börsen](https://app.banklessacademy.com/lessons/decentralized-exchanges).

### Wie verdiene ich Zinsen auf Stablecoins?

Manche CEX zahlen schon fürs Halten von Stablecoins auf ihrer Plattform eine Rendite, finanziert aus einem Teil ihres Gewinns, um die Nutzung zu fördern. Hinweis für Leser in den USA: Nach dem GENIUS Act dürfen regulierte Stablecoin-Herausgeber selbst keine Zinsen an Halter zahlen. Rendite kommt nur von dritten Plattformen, und was verfügbar ist, hängt vom Rechtsraum ab.

Zinsen gibt es auch in DeFi, über vertrauensfreie Plattformen zum Verleihen und Leihen. Sie bringen Kreditgeber und Kreditnehmer zusammen und steuern das Risiko über Onchain-Sicherheiten und Smart Contracts. Wer Stablecoins verleiht, kann deutlich mehr Jahresertrag erzielen als im klassischen Bankwesen. Aber wo es Belohnung gibt, gibt es Risiko!

Das Thema Verleihen und Leihen verdient einen eigenen Eintrag bei Bankless Academy. Wenn du jetzt schon mehr wissen willst, sieh dir Plattformen wie [Aave.com](https://aave.com/) und [Curve.fi](https://curve.fi/) an.

### Was passiert, wenn ein Stablecoin seine Kopplung verliert?

Der Marktpreis jedes Stablecoins schwankt mit dem Handel leicht hin und her. Bei den großen sind das meist nur wenige Hundertstel Cent über oder unter 1 Dollar. Diese winzigen Abweichungen schließen Händler schnell, indem sie die Arbitrage ausnutzen.

Es gibt aber Fälle, in denen ein Stablecoin seine Kopplung über den sicheren, vorübergehenden Bereich hinaus verliert. Das muss nicht dauerhaft sein (USDC, März 2023), kann es aber (Terra, Mai 2022).

Manche Herausgeber fiat-gedeckter Stablecoins wie USDC bieten über ihre Website die Einlösung 1:1 in normales Fiatgeld an. Ob das auch in einer Krise gilt, steht auf einem anderen Blatt.

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** ist Project Champion bei Bankless Academy und kümmert sich um Nutzererfahrung, Oberfläche, Design und Lehrplan der Plattform.

**Redakteurin**

**[Trewkat](https://twitter.com/trewkat)** ist Autorin und Redakteurin bei BanklessDAO. Sie will so viel wie möglich über Krypto und NFT lernen, mit besonderem Blick darauf, wie man dieses Wissen am besten vermittelt.

**Förderer**

Dieser Artikel ohne Sponsor ist Teil deiner kostenlosen Bankless-Academy-Ausbildung. Sammle den Artikel, um künftige Inhalte zu unterstützen!
