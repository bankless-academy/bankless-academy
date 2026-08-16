---
TITLE: DEX agregátory
DESCRIPTION: Ponoř se do DEX agregátorů, likvidity a světa burz v DeFi.
LANGUAGE: Čeština
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

# Úvod

`Decentralizované burzy` (DEX) odstraňují náklady na prostředníky a šetří Průzkumníkům peníze při obchodování s aktivy.

Ale víš, Průzkumníku, že s technologií DeFi jde ušetřit ještě víc? S `DEX agregátory` prohledáš všechny možné obchody na různých DEX platformách naráz a jedinou akcí provedeš tu nejlepší obchodní trasu. Pomáhají ti získat nejlepší podmínky, když děláš `swap` tokenů. Stejně jako agregátory letenek hledají nejlevnější let, DEX agregátory hledají nejvyšší hodnotu tvého obchodu.

Tahle lekce ukáže:

1. Jak DEX dělí likviditu a jak to může zhoršit obchodní kurzy.
2. Jak DEX agregátory umožňují vidět a používat více DEX v jednom rozhraní.
3. Kolika způsoby může jedno rozhraní agregátoru ušetřit Průzkumníkům čas i peníze.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Jak likvidita ovlivňuje ceny

Množství tokenu, které je na jednom trhu k dispozici k obchodování, se nazývá `likvidita` tokenu. Dostupná likvidita silně ovlivňuje `cenový dopad` obchodů v DeFi: velký cenový dopad znamená, že obchod vyjde dráž, malý cenový dopad zase levněji. Většina lidí radši obchoduje na trzích s vyšší likviditou, aby cenový dopad snížila.

Představ si to jako bazén: čím víc vody (likvidity) v něm je, tím menší je *změna* hladiny (cenový dopad), když někdo skočí dovnitř nebo vyleze ven. Velikost toho „někoho“ (obchodu) tuhle *změnu* hladiny (cenový dopad) taky ovlivňuje.

# Příklad, jak likvidita ovlivňuje ceny

Podívejme se na příklad.

Představ si token, který se obchoduje na několika DEX naráz. Jeden DEX drží hluboký pool s většinou `likvidity` tokenu, druhý drží mělký pool jen se zlomkem.

Když Průzkumník koupí z každého poolu stejné množství tokenu, `cenový dopad` bude v mělkém poolu vyšší. Stejný obchod vytáhne mnohem větší procento celkové likvidity toho poolu, takže cenou pohne víc a kupujícího vyjde dráž.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Doplň chybějící slova: aby lidé našli nejlepší cenu, budou chtít obchodovat na trzích s ________ likviditou a mít tak ________ cenový dopad na své obchody.

- [ ] dobrou, maximální

> ℹ️ Zkus to znovu! Maximální cenový dopad znamená, že obchod vyjde dráž, ne levněji.

- [x] vysokou, nízký

> ℹ️ Správně! Víc likvidity znamená menší cenový dopad, stejně jako se větší bazén změní méně, když do něj někdo skočí.

- [ ] nízkou, dobrý

> ℹ️ Zkus to znovu! Nízká likvidita zvyšuje cenový dopad a obchody prodražuje.

- [ ] tenkou, velký

> ℹ️ Zkus to znovu! Tenká likvidita způsobuje velký cenový dopad, a přesně tomu se obchodníci chtějí vyhnout.

# Slabina klasických DEX: tenká likvidita

DeFi dál roste, ale pro uživatele se objevuje problém: čím víc DEX vzniká, tím víc se celkové množství každého tokenu rozprostírá. Tomu se říká tenká likvidita.

Vzpomeň si na bazén: když se dostupná voda (`likvidita`) rozdělí mezi několik bazénů, bude jí v každém z nich méně než v jednom původním.

V počátcích DeFi držela většinu likvidity jedna nebo dvě burzy DEX. V roce 2020 o ni začaly soupeřit nové DEX; jeden konkurent stáhl z Uniswapu během pár týdnů od spuštění přes 1 miliardu dolarů likvidity. Dnes je likvidita rozeseta po stovkách DEX na mnoha blockchainech a sítích `Layer 2`, takže každý jednotlivý pool je tenčí.

Každý obchod má proto větší `cenový dopad`, než když většinu likvidity ekosystému držela jediná burza DEX. Bez nových inovací stojí Průzkumníky obchodování na jediné burze DEX víc.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Které dva faktory určují cenový dopad obchodu na DEX?

- [ ] Volba DEX, na které obchod proběhne, a velikost obchodu

> ℹ️ Zkus to znovu! Samotná burza DEX nerozhoduje. Záleží na likviditě dostupné v poolu.

- [ ] Který token se obchoduje a která DEX se použije

> ℹ️ Zkus to znovu! Cenový dopad neurčuje token ani značka DEX, ale likvidita a velikost obchodu.

- [x] Velikost obchodu a množství dostupné likvidity

> ℹ️ Správně! Jako u bazénu záleží velikost šplouchnutí na tom, jak velký skokan je a kolik je v bazénu vody.

- [ ] Množství dostupné likvidity a který token se obchoduje

> ℹ️ Zkus to znovu! Likvidita je jeden faktor, ten druhý je velikost obchodu, ne zvolený token.

# Skládání likvidity zpět s DEX agregátory

Ke snížení cenového dopadu a k úspoře peněz je potřeba hodně `likvidity`. DEX agregátory umožňují posílat obchody přes několik DEX najednou a cenový dopad tak snížit: velký obchod z peněženky Průzkumníka se rozdělí na několik malých obchodů na několika DEX.

DEX agregátory umí obchod směrovat i přes `zprostředkující token`, případně přes několik, když to pro uživatele dopadne lépe. Je to podobné, jako když agregátor letenek navrhne mezipřistání na jiném letišti, protože to vyjde levněji. Tuhle optimální `obchodní trasu` hledají chytré algoritmy, které procházejí všechny možné cesty a najdou tu nejlevnější v dané chvíli.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Směrování obchodů u DEX agregátorů znamená:

- [ ] Obchody jdou přes zvláštní dohody s konkrétními DEX

> ℹ️ Zkus to znovu! Agregátory prohledávají všechny dostupné DEX algoritmicky, ne přes zvláštní dohody.

- [ ] Obchody jdou vždy přes několik DEX

> ℹ️ Zkus to znovu! Agregátory obchod rozdělí, jen když to dopadne lépe. Někdy nabídne nejlepší trasu jediná burza DEX.

- [ ] Obchody jdou jen přes oblíbenou DEX uživatele

> ℹ️ Zkus to znovu! Držet se jedné burzy DEX by celý smysl popřelo. Agregátory hledají nejlepší cenu napříč mnoha DEX.

- [x] Obchody mohou jít přes několik DEX a zprostředkující tokeny

> ℹ️ Správně! Algoritmy prochází všechny možné cesty včetně „mezizastávek“ přes zprostředkující tokeny, aby našly nejlevnější trasu.

# Jak se na Ethereu počítá cena gasu

Než se podíváme, jak DEX agregátory snižují poplatky sítě, zopakujme si, jak se počítá gas. Nejvíc se tyhle úspory projeví na Ethereum Mainnetu, kde poplatky bývají vysoké; na sítích `Layer 2` jde obvykle o centy.

Stejně jako benzín pro auto je `gas` palivem pro běh blockchainového kódu na Ethereu. Čím víc výpočtů děláš, tím víc gasu tvůj kód potřebuje. Cena gasu se měří ve velmi malých jednotkách etheru, kterým se říká `gwei`, podobně jako centy k dolaru. 1 gwei je miliardtina etheru (1 gwei = 0,000000001 ETH).

Celková cena za gas závisí na spotřebovaném gasu a na jednotkové ceně gasu v danou chvíli. Vzorec vypadá takto:
*Množství spotřebovaného gasu × cena gasu = celková cena za gas*

Příklad: řekněme, že gas stojí 22 gwei za jednotku a transakce spotřebuje 120 tisíc jednotek:
*120 000 × 22 gwei = 2 640 000 gwei* **nebo** *0,00264 ETH*

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Jak agregátory snižují náklady na gas

Rozdělení obchodu by znamenalo víc poplatků za transakce kvůli aktivitě navíc onchain. Pokročilé agregátory ale s poplatky počítají a zahrnují je do výpočtu obchodní trasy. Obchody simulují offchain včetně nákladů na `gas`, aby našly `obchodní trasy`, po kterých Průzkumníkům na konci zůstane nejvíc hodnoty.

Některé agregátory jdou ještě dál. 1inch, který stál u zrodu agregace DEX, dnes navíc nechává profesionální plniče soutěžit o provedení tvého obchodu a gas platí oni (systém jménem Fusion). Uživatel často neplatí za gas vůbec nic.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Který z následujících způsobů DEX agregátory NEPOUŽÍVAJÍ ke snížení nákladů na transakce?

- [ ] Simulují transakce offchain před provedením obchodu

> ℹ️ Zkus to znovu! Agregátory obchody offchain opravdu simulují, včetně nákladů na gas, aby našly nejlepší trasu.

- [x] Požádají DEX o snížení poplatků sítě pro své uživatele

> ℹ️ Správně! Poplatky sítě určuje blockchain, ne burzy DEX. Nikdo je nemůže jen tak požádat o slevu.

- [ ] Počítají s cenou gasu při směrování obchodů

> ℹ️ Zkus to znovu! Pokročilé agregátory poplatky za transakce do výpočtu obchodní trasy zahrnují.

- [ ] Nechají profesionální plniče provést obchod a zaplatit gas

> ℹ️ Zkus to znovu! V systémech se záměry, jako je 1inch Fusion, plniči gas za uživatele opravdu platí.

# Meta-agregátory

Existují dokonce meta-agregátory DEX agregátorů! Tyto platformy prohledávají konkurenční DEX agregátory a uživatelům servírují nejlepší cenové nabídky. Například vestavěná funkce swapu v peněženkách jako MetaMask sbírá nabídky od více poskytovatelů včetně DEX agregátorů, jako je 1inch, a přidává k tomu vlastní poplatek za službu.

Poznámka: služby `meta-agregátorů` jsou sice pohodlné, ale mohou k poplatkům sítě přidat další náklady a celkovou cenu pro uživatele zvýšit. Průzkumníku, hlídej si, aby tvoje obchody nakonec nevyšly dráž, než čekáš.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-agregátory porovnávají více DEX agregátorů, aby pro své uživatele našly nejlepší ceny.

- [x] Pravda

> ℹ️ Správně! Meta-agregátory prohledávají konkurenční DEX agregátory a servírují uživatelům nejlepší cenové nabídky.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Prohledávání více DEX agregátorů je přesně to, co meta-agregátory dělají.

# Jak se vyhnout sendvičovým útokům

Když uživatel swapuje přímo přes `DEX`, může přijít o hodnotu až do výše své `tolerance skluzu`, protože boti umístí obchody těsně před jeho obchod a za něj a pohnou cenou. Těmto ztrátám se říká `sendvičové útoky`; jen v roce 2021 stály uživatele asi 235 000 000 dolarů. Dnes většinu běžných obchodů chrání `soukromé směrování transakcí` a obchodování podle záměrů, ale pořád se vyplatí držet toleranci skluzu nízko.

Díky složené likviditě, kterou nabízejí DEX agregátory, je navíc cenový dopad obchodu nižší. Průzkumníci si tak mohou držet nízkou toleranci skluzu a s DEX agregátory ušetřit víc než při obchodování přímo na burze DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Pro vlastní ochranu si toleranci skluzu drž:

- [x] nízko

> ℹ️ Správně! Nízká tolerance skluzu omezuje, kolik hodnoty může sendvičový útok z obchodu vytáhnout.

- [ ] vysoko

> ℹ️ Zkus to znovu! Vysoká tolerance skluzu nechá sendvičové útoky vytáhnout z obchodu víc hodnoty.

# Další ochrana před sendviči: OTC obchody

Některé agregátory jako 1inch dokonce nabízejí specializované služby `OTC` (`mimoburzovní obchod`), které před sendvičovými útoky chrání úplně. Tyto volitelné služby umožňují obchodovat přímo s jinými uživateli místo směrování přes `pooly likvidity` v DeFi, což je pro Průzkumníky další skvělý způsob, jak ušetřit.

CoW Swap na to jde jinak: uživatel podepíše žádost o obchod (`záměr`) a profesionální `solveři` pak v `dávkových aukcích` soutěží, kdo ji vyplní za nejlepší cenu. Solveři umí spárovat i dva uživatele přímo, takže obchody jsou před sendvičovými útoky chráněné rovnou.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Které nástroje nabízí řada DEX agregátorů, aby uživatelům ušetřila peníze?

- [ ] Směrování obchodů přes likviditu z více DEX.

> ℹ️ Zkus to znovu! Složená likvidita snižuje cenový dopad, ale není to jediný způsob, jak agregátory šetří peníze.

- [ ] OTC obchody s plnou ochranou před sendvičovými útoky.

> ℹ️ Zkus to znovu! Tohle je jeden ze způsobů, jak agregátory šetří peníze, ale není jediný.

- [ ] Počítání s cenou gasu při hledání nejlepších obchodních tras.

> ℹ️ Zkus to znovu! Tohle je jeden ze způsobů, jak agregátory šetří peníze, ale není jediný.

- [x] Vše výše uvedené

> ℹ️ Správně! Agregátory skládají likviditu, počítají s cenou gasu a nabízejí OTC obchody, aby uživatelům zůstalo víc hodnoty.
