---
TITLE: Dobití peněženky na Layer 2
DESCRIPTION: Zjisti, jak si dobít peněženku na L2 přes CEX, fiat brány a mosty.
LANGUAGE: Čeština
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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

> * Peněženku na škálovacím řešení Etherea, jako je Base, Optimism nebo Arbitrum, si dobiješ hned několika způsoby.
>
> * Centralizovaná burza často funguje jako přímá `fiat brána` na Layer 2.
>
> * Platební aplikace třetích stran umožňují dobít peněženku na Layer 2 z bankovního účtu nebo z debetní či kreditní karty.
>
> * Protokolové mosty pošlou peníze z `Ethereum Mainnetu` na Layer 2.

Pokud krypto teprve poznáváš, všechny ty řeči o důležitosti `Layer 2` (nebo L2) můžou znít divně, vlastně dost zmateně. Zatímco [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains) obvykle označuje [Ethereum Mainnet](https://ethereum.org/), Layer 2 je pojem pro konkrétní typ škálovacího řešení Etherea. To dědí bezpečnost Etherea, ale nabízí nízké poplatky za transakce a rychlé zařazení do `bloku`. Možná znáš [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/) nebo [Base](https://www.base.org/): to všechno jsou škálovací řešení Layer 2. Často se k nim řadí i [Polygon](https://polygon.technology/) (ve skutečnosti je to `sidechain`, ale to teď neřešme).

Každá transakce na Ethereu platí poplatek, kterému se říká `gas`. Gas se počítá v `gwei`, drobné jednotce ETH. Poplatky rostou a klesají s poptávkou: na vrcholu poptávky v roce 2021 stál jednoduchý `swap tokenů` na Mainnetu desítky dolarů a vyhypované minty NFT hnaly poplatky ještě mnohem výš. Dnes běžná transakce na Mainnetu stojí hluboko pod dolarem a stejná akce na Layer 2 vyjde na centy nebo míň.

Protože se transakce na Layer 2 potvrzují rychle a jsou levné, staví na L2 řada nejinovativnějších protokolů. Pokud ale v ekosystému nejsi delší dobu, není úplně zřejmé, jak Layer 2 začít používat. Jedno jasné místo, odkud vyrazit do světa škálovacích řešení Etherea, tu ale je: `peněženka` na Layer 2, kterou si dobiješ.

Dobít peněženku na L2 jde třemi hlavními způsoby. První je `centralizovaná burza`, ze které pošleš kryptoměnu rovnou do sítě Layer 2. Druhý je krypto platební služba třetí strany. Třetí je most, který pošle tvoje digitální aktiva z Mainnetu na L2.

> Ještě než začneš: potřebuješ kryptoměnovou peněženku, třeba [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/) nebo [Taho](https://taho.xyz/), a s ní přijde i `adresa` na Ethereu. Pokud ti `nekustodiální peněženka` zatím chybí, [projdi si nejdřív tuhle lekci](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Jakmile máš nekustodiální ethereovou adresu, můžeš na kryptoměnové cestě pokračovat.

## Dobití z burz CEX

Dobít peněženku přímo z centralizované burzy (CEX) je asi nejjednodušší způsob, jak dostat digitální aktiva na L2, hlavně když už na burze kryptoměnu držíš. Většina velkých CEX tuhle možnost nabízí, i když ne vždycky viditelně.

Na [Coinbase](https://www.coinbase.com/) můžou lidé poslat peníze rovnou do sítí jako Optimism, Polygon nebo Base (vlastní Layer 2 od Coinbase), a to v pár krocích:

1\. Přejdi na [Coinbase](https://www.coinbase.com/).

2\. [Kup si](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) ETH na Coinbase, nebo ho tam už drž.

3\. Nahoře na webu vyber „Send & Receive“ (odeslat a přijmout).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Zadej částku ve fiatu nebo v ETH, kterou chceš poslat (přepínač mezi fiatem a kryptem je vpravo od částky), vyber „Pay with“ a zvol Ethereum a do pole „To“ vlož adresu peněženky, kam peníze půjdou. Klikni na „Continue“.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Na další obrazovce vyber „Network“ a přepni síť z Ethereum na Optimism (v seznamu jsou i další Layer 2, třeba Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Zkontroluj údaje, a pokud sedí, vyber „Send Now“.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Většina velkých burz umí poslat krypto přímo na L2. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/) i [Kraken](https://www.kraken.com/) podporují výběry na hlavní sítě Layer 2, jako jsou Base, Optimism a Arbitrum. Tip: než peníze pošleš, projdi si na burze seznam sítí pro výběr a ověř, které L2 podporuje.

## Fiat brány třetích stran

Další jednoduchá cesta, jak dobít peněženku na L2, je využít služby s přímým převodem na L2, které nabízí řada krypto platebních firem. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/) a [Transak](https://global.transak.com/) patří mezi nejoblíbenější možnosti, jak dobít krypto peněženku bez centralizované burzy.

Stejně jako většina burz budou i tyhle `fiat brány` chtít údaje pro `poznej svého klienta`. Jakmile ale tyhle základní překážky zvládneš, jsou takové platební služby snadná cesta, jak nakoupit krypto napříč ekosystémem a převést ho na Layer 2.

U MoonPay jsou kroky tyto:

1\. Přejdi na [MoonPay](https://www.moonpay.com/).

2\. Nahoře nebo uprostřed webu vyber „Buy crypto“ (koupit krypto).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Zadej částku ve fiatu, kterou chceš poslat, a správnou měnu.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Vyber digitální aktivum, v tomto případě ETH. Napiš „ETH“ a uvidíš různé sítě, na kterých se dá ETH koupit (možná budeš muset sjet níž); vyber Layer 2, kterou chceš použít. Klikni na „Continue“.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Dál tě systém vyzve k zadání ověřovacích a platebních údajů.

6\. Po dokončení zadej adresu své ethereové peněženky. Systém se zeptá, jestli je peněženka bezpečná.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Dokonči objednávku, zkontroluj správnost údajů a vyber „Pay“.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Stejně jako u CEX nabízí většina velkých platebních bran třetích stran přímý převod na L2. Využij toho, ušetříš na poplatcích za transakce a lépe prozkoumáš `blockchain`.

## Dobití přes mosty

Pokud už máš peníze na `Ethereum Mainnetu`, je zdaleka nejsnazší cesta na L2 přemosťovací protokol. Mosty je název pro protokoly, které nám pomáhají přesouvat peníze po kryptovesmíru, a hned několik z nich vzniklo pro převod kryptoměny z Ethereum Mainnetu na sítě Layer 2.

### Nativní mosty

Nativní mosty navrhly samotné protokoly Layer 2. `Optimistický rollup`, jako je Arbitrum, Optimism nebo Base, doručí vklad na L2 obvykle během pár minut, ale přesun kryptoměny zpátky na Mainnet trvá zhruba týden. [Arbitrum Bridge](https://bridge.arbitrum.io/) i [Optimism Bridge](https://app.optimism.io/bridge/) fungují takto: čekací doba dává síti čas odhalit neplatné výběry dřív, než se vypořádají.

### Mosty třetích stran

Protože nikdo nerad čeká, existuje řada přemosťovacích služeb třetích stran, které pomáhají přesunout peníze na L2 a zpátky okamžitě. Mezi nejoblíbenější patří [Across Protocol](https://across.to/bridge) a [Relay](https://relay.link/bridge), a přes [Bungee](https://bungee.exchange/) porovnáš poplatky za přemostění u řady protokolů. U Across stačí udělat tohle:

1\. Přejdi na most [Across Protocol](https://across.to/bridge) a připoj peněženku.

2\. Pro přemostění peněz na L2 vyber v poli „From“ Ethereum.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Vyber aktivum a částku, kterou chceš přemostit (tip: přemosťuj jen nativní `mince` dané sítě, v tomto případě ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Dál vyber svoje řešení L2 v poli „To“.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Zkontroluj transakci, a pokud vypadá všechno v pořádku, vyber „Send“.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Přesun peněz z Mainnetu na L2 je opravdu takhle jednoduchý a skoro všechny mosty fungují stejně. Vyber blockchain, ze kterého peníze pošleš, zvol cíl jako Base nebo Optimism, urči aktivum a částku a hurá přes blockchainovou propast. Tip: stejně jako u posílání z CEX si můžeš na [L2BEAT](https://l2beat.com/bridges/summary) najít most, který podporuje tvůj cíl na L2.

## Cesta na L2

Layer 2 nabízejí lidem na jakékoli úrovni zkušeností možnost zkoušet decentralizované finance způsobem, který je na Mainnetu často nedostupný. Protože transakce v těchto sítích stojí pár haléřů (ceny porovnáš [tady](https://www.growthepie.com/)), je to skvělé místo, kde se seznámíš se základními stavebními kameny decentralizovaných financí, jako jsou swapy, `pooly likvidity` nebo `yield farmy`.

Použít CEX nebo most k přesunu peněz na L2 je nutný krok na cestě od kryptoměnového nováčka ke kryptoměnové zdatnosti. Pamatuj, že aby se ti peníze v peněžence zobrazily, možná budeš muset přidat síť v nastavení peněženky, což jde na [Chainlist](https://chainlist.org/). Pokud si jen chceš ověřit, že peníze dorazily v pořádku do tvé peněženky na L2, vyhledej svoji adresu v `prohlížeči bloků`, jako je [Blockscan](https://blockscan.com/), který prohledá spoustu sítí naráz. Druhá možnost je zajít na DEX, třeba [Uniswap](https://app.uniswap.org/), vybrat síť L2 a aktivum a podívat se na zůstatek.

Jak porostou tvoje dovednosti, budeš potřebovat srazit poplatky za transakce dolů. Naučit se dobít peněženku na L2 je první krok, ale další kroky na kryptoměnové cestě jsou už na tobě. Vítej, Průzkumníku, čeká na tebe nový svět.

---

Vyrazme, Layer 2 na Ethereu čeká! Doufáme, že se ti tento záznam v Průzkumnické příručce líbil: „Dobití peněženky na Layer 2“.

Nezapomeň si záznam sebrat, pokud chceš vlastní kopii po ruce na cestách nebo chceš podpořit další obsah Bankless Academy. Šťastnou cestu, Průzkumníku!

***

**Autor**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** je spisovatel, editor a koordinátor v BanklessDAO a šéfredaktor Good Morning News. Zároveň pomáhá budovat organizaci DAOpunks zaměřenou na granty.

**Editorka**

**[Trewkat](https://twitter.com/trewkat)** je spisovatelka a editorka v BanklessDAO. Zajímá se o krypto a NFT co nejvíc do hloubky, hlavně o to, jak tyhle znalosti co nejlépe předat ostatním.

**Patron**

Tento článek financoval **[Optimism](https://www.optimism.io/)**.
