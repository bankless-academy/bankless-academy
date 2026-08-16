---
TITLE: Jak fungují stablecoiny
DESCRIPTION: Používej dolary, eura a další měny na blockchainu.
LANGUAGE: Čeština
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
## Klíčové poznatky

> * Stablecoiny jsou blockchainová obdoba fiat měn, jako je dolar nebo euro.
>
> * Stablecoiny se obvykle vydávají jako tokeny (například tokeny `ERC-20` na Ethereu) a dnes kolují po spoustě blockchainů. Uživatelům DeFi umožňují rychle přecházet mezi fiat hodnotou a krypto hodnotou, a přitom zůstat na blockchainu.
>
> * Kategorií stablecoinů je několik a každá má svoje kompromisy i rizikový profil.
>
> * Stablecoiny dokážou přinést vyšší roční úrok než fiat na účtu v běžné bance. Regulace ale dnes určuje, kdo takový výnos smí nabízet a jak.

## Proč držet stablecoiny?

Stablecoiny se staly základním kamenem ekosystému DeFi. Na vrcholu v roce 2022 dosáhla jejich nabídka zhruba 140 miliard dolarů (viz graf níže), v roce 2026 překročila celková nabídka 300 miliard dolarů a v roce 2025 proteklo přes stablecoiny víc než 30 bilionů dolarů. To je víc, než ten rok zpracovala Visa.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Proč je o ně takový zájem:

* **Stabilita**: držet stablecoiny v peněžence ve vlastní správě je jako držet fiat měnu, jenom na blockchainu. U stablecoinu jako USD Coin (USDC) od Circle můžeš čekat, že si udrží hodnotu 1:1 vůči americkému dolaru, zatímco ceny aktiv jako ether nebo bitcoin kolísají.

* **Flexibilita**: protože tahle navázaná hodnota existuje jako token na blockchainu, přechod mezi fiat hodnotou a krypto hodnotou je snadný.

* **Přístup**: stablecoiny otevírají celou řadu decentralizovaných finančních služeb, třeba půjčování bez povolení nebo poskytování půjček s úrokem.

* **Bezpečnost**: díky kryptografii je pro útočníka nesmírně těžké transakci zachytit nebo zfalšovat.

Nejdůležitější vlastnost stablecoinu je `cenová vazba`, tedy způsob, jakým si drží poměr 1:1 vůči svému fiat protějšku. Stejně jako fiat měna má hodnotu jen díky tomu, co za ní stojí, i mechanismus cenové vazby určuje hodnotu toho, co držíš.

## Kategorie stablecoinů

Stablecoin si může držet cenovou vazbu třemi běžnými způsoby:

* 💵 **Krytí fiatem**: zajištění 1:1 skutečnými fiat rezervami.

* 🔗 **Krytí kryptem**: nadměrné zajištění krypto vklady do protokolů DeFi.

* 🔃 **Algoritmus**: místo plného zajištění algoritmy vyvažující nabídku, návrh s pohnutou historií.

### 1\. Stablecoiny kryté fiatem

Stablecoiny kryté fiatem si drží hodnotu tím, že vydávají pevnou nabídku tokenů krytou rezervami skutečné měny. Cenu na blockchainu drží ekonomika nabídky a poptávky: málokdo chce za dolar hodnoty onchain zaplatit víc než jeden skutečný dolar, a tak prostě obchoduje jinde. Když poptávka roste, `vydavatel stablecoinu` uzamkne další fiat a o stejnou částku zvýší nabídku tokenů.

Mezi známé stablecoiny kryté fiatem patří USDT od Tetheru a USD Coin (USDC) od Circle. Circle vydává i obdobu navázanou na euro, EURC.

Vydavatelé stablecoinů vydělávají několika způsoby. Část fiat rezerv investují do krátkodobých amerických státních dluhopisů a hotovostních ekvivalentů. K tomu používají smíšený model příjmů: vybírají poplatky za transakce a nabízejí půjčky.

> **Inovace a filantropie ve stablecoinu krytém fiatem: Glo Dollar**
>
> Nadace Glo Foundation přistupuje k výnosům z rezerv novátorsky se stablecoinem [Glo Dollar](https://www.glodollar.org/) (USDGLO), který je krytý americkým dolarem: úrok z jeho rezerv financuje programy základního příjmu pro lidi v extrémní chudobě. Už jenom tím, že USDGLO držíš, děláš filantropii. Jak Glo Dollar funguje, se dozvíš [zde](https://www.glodollar.org/articles/how-glo-works).

Na co myslet u stablecoinů krytých fiatem:

* **Vykazování rezerv**: držitelé potřebují jistotu, že jejich tokeny kryjí fiat rezervy jedna ku jedné. Většina vydavatelů zveřejňuje `atestace`, tedy potvrzení nezávislého účetního, že rezervy k danému dni existovaly. To je slabší než plný audit financí vydavatele a ten dnes nezveřejňuje žádný velký vydavatel. Circle vydává měsíční atestace USDC (od Deloitte) a Tether, historicky velmi neprůhledný, dnes zveřejňuje čtvrtletní atestace (od BDO).

* **Regulace**: v USA vyžaduje zákon GENIUS Act (podepsaný v červenci 2025) po vydavatelích platebních stablecoinů rezervy 1:1 v hotovosti a krátkodobých amerických státních dluhopisech a zakazuje jim vyplácet držitelům úrok. V EU vedl rámec MiCA velké burzy k tomu, že evropským uživatelům přestaly nabízet nevyhovující stablecoiny jako USDT.

* **Riziko cenzury**: USDC i USDT čelí vyšetřování ze strany úřadů a jejich `chytré kontrakty` obsahují funkci zmrazení, kterou jde onchain zůstatek uživatele zamknout, pokud jde o nežádoucí činnost. Tahle funkce platí i pro tokeny v `nekustodiálních peněženkách`.

Vysoká míra centralizace u stablecoinů krytých fiatem nechává hodně prostoru pro zlepšení v tom, jak držet hodnotu navázanou na fiat opravdu krypto nativním způsobem.

### 2\. Stablecoiny kryté kryptem

Stablecoiny kryté kryptem jsou průhlednější a decentralizovanější volba a právě tyhle vlastnosti pomáhají odstranit některá rizika. Vazbu na fiat drží pomocí rezerv v krypto aktivech. Protože volatilita krypto trhu ovlivňuje celkovou hodnotu těchto rezerv, bývají tyhle stablecoiny nadměrně zajištěné, někdy až na 200 %! Všechna zajišťovací aktiva jsou vidět onchain, takže máš nepřetržitý přístup ke skutečnému složení svého stablecoinu.

Nejznámější příklad v této kategorii je USDS od Sky, nástupce Dai (DAI) od MakerDAO, což byl vůbec první stablecoin krytý kryptem. MakerDAO se v roce 2024 přejmenovalo na Sky. Čistší pohled na decentralizaci nabízí LUSD od Liquity, který je krytý výhradně nadměrně zajištěnými vklady v ETH.

![Složení zajištění DAI, předchůdce USDS (červen 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Na co myslet:

* **Ocenění zajištění**: rezervy stablecoinu obvykle tvoří krypto, další stablecoiny a někdy i jiné třídy aktiv. USDS je například krytý ETH, stablecoiny, reálnými aktivy jako americké státní dluhopisy a několika dalšími menšími složkami. Kvůli rizikům takhle pestré škály aktiv je USDS nadměrně zajištěný (v době psaní tohoto textu). I kdyby cena ETH spadla o 20 %, USDS by měl pořád [dost zajištění](https://defillama.com/stablecoins) na krytí svých tokenů. Další cenové výkyvy napříč jeho aktivy ale mohou vazbu začít nahlodávat.

* `Riziko protistrany`: spoléhání na několik tříd aktiv znamená vyšší šanci, že se jedno z nich dostane do potíží a ovlivní hodnotu toho, co držíš. Na druhou stranu tě každé jednotlivé riziko zasáhne jen zčásti.

* **Riziko řízení**: tenhle typ stablecoinu i jeho pokladnu spravuje decentralizovaná skupina hlasujících. Hrozí tedy lidská chyba nebo ovládnutí řízení.

### 3\. Algoritmické stablecoiny

Tyhle tokeny se snaží držet vazbu tím, že místo plného zajištění automaticky vyvažují vlastní nabídku: onchain algoritmus stahuje tokeny z oběhu, když tržní cena klesne pod vazbu, a mintuje nové, když stoupne nad ni. Na papíře to slibuje stablecoin bez bank a bez zajištění. V praxi čistá verze tohoto návrhu katastrofálně selhala.

Učebnicový příklad je UST od Terry. Jeho algoritmus umožňoval držitelům kdykoli vyměnit 1 UST za volatilní token LUNA v hodnotě jednoho dolaru. V květnu 2022 hromadný výprodej UST donutil algoritmus vytvořit obrovské množství LUNA, což srazilo její cenu a spustilo další vlnu prodejů. Vznikla `spirála smrti`, která během pár dní smazala zhruba 40 miliard dolarů. UST se k vazbě už nikdy nevrátil.

Projekty, které přežily, čistý model opustily. Frax, kdysi zčásti algoritmický, přešel v roce 2023 na 100% zajištění. Jeho dnešní stablecoin frxUSD kryjí rezervy včetně tokenizovaných fondů amerických státních dluhopisů, zatímco FRAX dnes slouží jako token pro řízení protokolu.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Z trosek vyrostla samostatná moderní kategorie: hybridní návrhy neboli „syntetické dolary“, třeba USDe od Etheny. Ten drží krypto zajištění a k tomu protichůdné obchodní pozice, které vyruší cenové pohyby (takzvané delta neutrální zajištění). Zajištěné tedy jsou, ale novým způsobem a s vlastními riziky: spoléhají na burzy, které ty pozice drží, a na tržní podmínky, díky nimž se zajištění vyplácí.

Na co myslet:

* **Riziko spirály smrti**: čistě algoritmická vazba stojí na trvalé důvěře trhu. Když důvěra praskne, mechanismus nabídky pád spíš zesílí, než zastaví, a k vykoupení nezbude žádné zajištění.

* **Hodně technické**: musíš rozumět tomu, co token doopravdy kryje a za jakých podmínek by krytí mohlo selhat. Bez toho nemáš jak posoudit poměr rizika a výnosu.

* **Riziko nové technologie**: hybridní a syntetické návrhy zatím neprošly celým tržním cyklem. Používej jen tokeny s několika audity chytrých kontraktů od špičkových auditorů a pamatuj, že audit neochrání před chybným ekonomickým návrhem.

## Jak si vybrat stablecoin

Který stablecoin je nejlepší držet? Jako u všeho v DeFi závisí odpověď na tvých **potřebách**, **hodnotách** a **toleranci k riziku**.

Rychlé shrnutí jednotlivých kategorií:

* 💵 **Krytí fiatem**: tradiční přístup, nejblíž tomu držet fiat přímo na blockchainu.

  * Hodnoty: konvenčnost, důvěra v instituce.

  * Rizika: neprůhledné krytí, možnost poskytovatele zmrazit peníze.

* 🔗 **Krytí kryptem**: vyvážený, krypto nativní přístup, který rozkládá riziko zajištění mezi víc tříd aktiv.

  * Hodnoty: diverzifikace, průhlednost, posun vpřed.

  * Rizika: volatilita krypto trhu, závislost na jiných aktivech.

* 🔃 **Algoritmus**: experimentální hranice. Čisté návrhy katastrofálně selhaly a moderní hybridy jsou zatím neověřené.

  * Hodnoty: inovace, kapitálová efektivita, posun vpřed.

  * Rizika: spirály smrti, chybné ekonomické návrhy, chyby v chytrých kontraktech.

Jako vždycky platí, že nejlepší způsob, jak něco poznat, je vyzkoušet si to. Klidně se můžeš rozhodnout držet stablecoinů víc druhů.

A pamatuj: ani v rámci jedné kategorie nejsou všechny stablecoiny stejné! Než začneš s novým tokenem pracovat, prověř si ho.

---

Doufáme, že se ti tenhle díl Příručky průzkumníka líbil: „Jak fungují stablecoiny“.

Nezapomeň si tenhle díl získat, pokud chceš mít vlastní kopii po ruce na cestách nebo podpořit další obsah Bankless Academy. Šťastnou cestu, Průzkumníku!

---

## Často kladené otázky

### Které stablecoiny jsou nejpopulárnější?

Pohled na přední stablecoiny podle `tržní kapitalizace` napoví, čemu trh zrovna dává přednost. Není to ale rada, jak se máš zařídit ty, ani ukazatel toho, jak bezpečná taková pozice je.

Průběžný žebříček největších stablecoinů podle tržní kapitalizace: <https://defillama.com/stablecoins>

Uživatelé kryptoměn se při výběru investic často odvolávají na „Lindyho efekt“. Ten říká, že čím déle už něco existuje, tím spíš můžeme čekat, že bude existovat dál. Sedmnáct let historie kryptoměn ukázalo, že to platí jen občas.

### Kde se dají stablecoiny koupit?

Centralizované burzy (CEX) nabízejí populární stablecoiny kryté fiatem (a obvykle i vlastní značkový stablecoin). Ostatní typy tam často chybí.

Pro stablecoiny kryté kryptem a algoritmické tokeny zajdi na decentralizovanou burzu (DEX) nebo použij nákup přímo v peněžence, třeba „MetaMask Buy“. Víc o peer-to-peer tržištích najdeš v naší lekci [Decentralizované burzy](https://app.banklessacademy.com/lessons/decentralized-exchanges).

### Jak si na stablecoinech vydělat úrok?

Některé CEX nabízejí výnos jen za to, že na jejich platformě stablecoiny držíš. Financují ho z části svých zisků, aby lidi motivovaly platformu používat. Poznámka pro čtenáře v USA: podle zákona GENIUS Act nesmějí regulovaní vydavatelé stablecoinů vyplácet držitelům úrok sami. Výnos přichází jen od platforem třetích stran a jeho dostupnost se liší podle jurisdikce.

Úrok jde vydělat i v DeFi na platformách pro půjčky nevyžadujících důvěru. Ty propojují věřitele s dlužníky a řídí riziko pomocí onchain zajištění a chytrých kontraktů. Kdo stablecoiny půjčuje, může dosáhnout na roční výnosy mnohem vyšší než v tradičním bankovnictví. Kde je ale odměna, tam je i riziko!

Půjčování a zapůjčování si zaslouží vlastní díl Bankless Academy. Pokud tě to zajímá už teď, prozkoumej platformy jako [Aave.com](https://aave.com/) a [Curve.fi](https://curve.fi/).

### Co se stane, když stablecoin ztratí cenovou vazbu?

Tržní cena každého stablecoinu se s přílivem a odlivem obchodů mírně pohupuje. U velkých stablecoinů jde obvykle o pár setin centu nad nebo pod jedním dolarem. Tyhle drobné odchylky rychle uzavřou obchodníci, kteří využijí příležitost k arbitráži.

Existují ale případy, kdy stablecoin ztratí vazbu mimo bezpečné a dočasné rozmezí. Nemusí to být napořád (USDC, březen 2023), ale může (Terra, květen 2022).

Někteří vydavatelé stablecoinů krytých fiatem, třeba USDC, nabízejí přes svůj web výměnu 1:1 zpátky za běžný fiat. Jestli to platí i v době krize, je jiná otázka.

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** je Project Champion v Bankless Academy a věnuje se uživatelské zkušenosti, rozhraní, designu a kurikulu platformy.

**Editorka**

**[Trewkat](https://twitter.com/trewkat)** je autorka a editorka v BanklessDAO. Zajímá se o krypto a NFT, hlavně o to, jak tyhle znalosti co nejlépe předávat dál.

**Patron**

Tenhle nesponzorovaný článek je součástí bezplatného vzdělávání Bankless Academy. Získej si ho a podpoř další obsah!
