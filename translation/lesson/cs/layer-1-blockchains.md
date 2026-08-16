---
TITLE: Blockchainy Layer 1
DESCRIPTION: Pochop, jak fungují blockchainy Layer 1, a poznej jejich limity!
LANGUAGE: Čeština
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

# Úvod

Problémy nastanou, když chce `blockchain` použít víc lidí, než dokáže obsloužit. Velká poptávka po `blokovém prostoru` může být krátkodobá, nebo může trvat tak dlouho, dokud lidé chtějí blockchain používat. Ve chvílích velké poptávky si lidé navzájem přihazují, aby jejich transakce prošly rychle. Poplatky rostou a vytlačí ty, kdo mají méně peněz.

V této lekci zjistíš, proč Ethereum i další blockchainy podléhají `blockchainovému trilematu`, proč je trilema příčinou popsaných problémů a jak ovlivňuje plány Etherea na obsluhu všech uživatelů. Podíváme se na kompromisy, které kvůli trilematu udělalo několik blockchainů, a na to, co znamenají pro Průzkumníky Akademie.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Blockchainové trilema

Jak napovídá slovo **tri**lema, blockchainy mají tři vlastnosti, které si navzájem konkurují. Nejde vyladit všechny tři najednou.

Jsou to `bezpečnost`, `škálovatelnost` a `decentralizace`.

Aby blockchain mohl sloužit jako nestranný základ měnového systému v celosvětovém měřítku, měl by vynikat ve všech třech. Měnový systém musí být chráněný před podvody, díky decentralizaci odolný proti útokům cenzorů a dost škálovatelný, aby pokryl potřeby více než 8 miliard lidí.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Blockchainové trilema popisuje vztah mezi:

- [ ] Ethereem, Bitcoinem a altcoiny

> ℹ️ Zkus to znovu! Trilema je o soupeřících vlastnostech uvnitř blockchainu, ne o soupeřících blockchainech.

- [ ] bezpečností, cenzurou a podvody

> ℹ️ Zkus to znovu! Bezpečnost mezi ty tři patří, ale cenzura a podvod jsou hrozby, proti kterým se blockchain brání.

- [x] decentralizací, škálovatelností a bezpečností

> ℹ️ Správně! Tyto tři vlastnosti si navzájem konkurují, takže blockchain nemůže vyladit všechny tři najednou.

- [ ] bezpečností, rychlostí a nízkými poplatky

> ℹ️ Zkus to znovu! Rychlost a poplatky spadají pod škálovatelnost, což je jen jedna ze tří vlastností.

# Bezpečnost a konsenzus

Bezpečnost je nejzákladnější požadavek na veřejný blockchain. Počítače v síti se musí shodnout na tom, které transakce se opravdu staly. Této shodě se říká `konsenzus`. Blockchain je bezpečný, když útočníci nedokážou síti v této shodě zabránit. Algoritmy konsenzu jsou navržené tak, aby takovým útokům odolaly.

Řetězce jako Bitcoin používají konsenzus `Proof of Work`. Chrání shodu tím, že tvorba bloků je hodně soutěživá: každý producent bloků se snaží vyřešit matematickou úlohu. Kdo je první, získá právo vytvořit další blok a s ním i peněžní `odměnu za blok`. Přepsat nedávnou historii řetězce by vyžadovalo obrovské investice do výpočetního výkonu a energie, takže by útočník nejspíš utratil víc, než by získal.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Blockchainový konsenzus u kryptoměn je:

- [ ] Proces, kdy se uzly shodnou na tom, co se stalo onchain

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Důležitý pro celý ekosystém řetězce, protože brání podvodům

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Zajištěný ekonomickými pobídkami

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [x] Všechno výše uvedené

> ℹ️ Správně! Konsenzus je způsob, jak se uzly shodnou na pravdě, a ekonomické pobídky dělají útok na tuto shodu dražší, než je jeho výnos.

# Bezpečnost a útoky

Jedním z možných útoků na blockchainový konsenzus je `51% útok`. Útočník, který ovládá většinu konsenzuální síly sítě, může vrátit nedávné transakce a utratit stejné mince dvakrát, nebo cenzurovat nové. Nemůže ale padělat podpisy ani utrácet cizí prostředky. Většina znamená 51 % výpočetního výkonu u Proof of Work a 51 % `staku` u Proof of Stake, tedy obrovskou investici. U Proof of Stake se navíc prokazatelný podvod, třeba podpis dvou protichůdných bloků, trestá zničením vloženého staku. Říká se tomu `slashing`. Útočník by nejspíš ztratil víc, než by získal.

U konsenzu `Proof of Stake` se producent bloku nevybírá soutěží, ale losuje se náhodně. Stejně jako u Proof of Work algoritmus konsenzu zajistí, že žádný jednotlivý subjekt nemůže pravidelně „vyhrávat“ právo vytvořit nový `blok`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Cílem 51% útoku je:

- [ ] Narušit těžbu

> ℹ️ Zkus to znovu! Útok míří na samotný konsenzus: na vrácení nebo cenzuru transakcí, ne na těžaře.

- [x] Utratit mince dvakrát nebo cenzurovat transakce

> ℹ️ Správně! Většinová konsenzuální síla umožní vrátit nedávné transakce a utratit mince dvakrát, nebo blokovat nové.

- [ ] Vytvořit novou kryptoměnu

> ℹ️ Zkus to znovu! Novou kryptoměnu může vytvořit kdokoli, aniž by útočil na existující síť.

- [ ] Vyřadit zbylých 49 %

> ℹ️ Zkus to znovu! Ostatní účastníci nikam nezmizí. Většinová síla slouží k vrácení nebo cenzuře transakcí.

# Škálovatelnost: propustnost

`Škálovatelnost` je schopnost blockchainu zpracovat rychle hodně transakcí. Určují ji dvě části: propustnost a finalita.

1) `Propustnost transakcí`: kolik transakcí zvládne blockchain zpracovat najednou. Obvykle se měří v transakcích za sekundu (`TPS`).

Představ si zastávku, kde čeká spousta lidí a každou minutu přicházejí další. Všichni chtějí jet. Do autobusu se ale vejde jen omezený počet lidí. Aby se zastávka vyprázdnila rychleji, musely by jezdit větší autobusy (víc lidí), nebo by musely jezdit častěji (kratší čas). Stejně to funguje s transakcemi, které se snaží vejít do malého `blokového prostoru` každého bloku. Vizualizaci s živými daty najdeš na [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Co platí pro přirovnání blockchainových transakcí k autobusové zastávce?

- [ ] Lidé (transakce) se seskupují do autobusů (bloků)

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Do autobusu (bloku) se vejde omezený počet lidí

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Víc lidí uvezou jen větší nebo častější autobusy

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [x] Všechno výše uvedené

> ℹ️ Správně! Transakce plní omezený blokový prostor jako cestující autobus. Rychlejší odbavení fronty potřebuje větší nebo častější bloky.

# Škálovatelnost: finalita

Druhá část škálovatelnosti blockchainu je:

2) `Finalita`: kdy máme rozumnou jistotu, že se transakce už nezmění ani nevrátí zpět?

U řetězců s Proof of Work, jako je Bitcoin, se finalita měří v blocích: čím víc bloků přibude za tvoji transakci, tím menší je šance, že ji někdo vrátí. Bezpečný algoritmus konsenzu dělá změnu starých bloků velmi drahou a cena roste s tím, jak daleko do minulosti chce někdo zasáhnout. Bitcoin vytvoří nový `blok` zhruba každých 10 minut, takže čekání na několik potvrzení trvá asi hodinu. Ethereum jde s Proof of Stake jinou cestou: `validátoři` hlasují o finalizaci bloků a po zhruba 13 minutách (dvě `epochy` hlasování) je transakce finální.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Decentralizace rozděluje moc

`Decentralizace` je poslední pilíř blockchainového trilematu: je to přesun kontroly a rozhodování od jednoho subjektu k rozprostřené síti mnoha účastníků. Je to základní princip, díky kterému jsou blockchainy `odolné vůči cenzuře`. Použít je může kdokoli a kdokoli nad nimi může stavět software.

Centralizované platformy jako Facebook nebo Twitter mohou komukoli kdykoli zrušit účet. Spousta vlivných streamerů na Twitchi nebo TikToku přišla o účet bez udání důvodu. I když jde účet obnovit, bývá to dlouhý a nepříjemný proces. Bez decentralizace je blockchainová `účetní kniha` jen finanční tabulka v počítači banky a bankéři rozhodují, kdo si u nich smí založit účet. Síť `nevyžadující povolení` znamená, že je moc dostatečně decentralizovaná: přístup nejde nikomu odebrat.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Které tvrzení o decentralizaci NEPLATÍ?

- [ ] Decentralizace dělá blockchainy odolné vůči cenzuře

> ℹ️ Zkus to znovu! Toto tvrzení platí: bez jediného vládce nemůže síť nikdo cenzurovat.

- [ ] Díky decentralizaci nepotřebuješ k použití povolení

> ℹ️ Zkus to znovu! Toto tvrzení platí: rozdělená moc znamená, že nikdo nemůže odebrat přístup.

- [x] Decentralizace pomáhá autoritářské moci udržet kontrolu

> ℹ️ Správně! Toto NEPLATÍ: decentralizace dělá pravý opak, odvádí kontrolu pryč od jediného subjektu.

- [ ] Systémy bez povolení může použít kdokoli a odkudkoli

> ℹ️ Zkus to znovu! Toto tvrzení platí: bez povolení znamená, že přístup nelze nikomu odepřít.

# Je to decentralizované?

Jenže odpověď na otázku, jestli je něco decentralizované, není jen ano, nebo ne. Je decentralizované, když kontrolu drží 10 subjektů? A co 1000? Nebo milion? Neexistuje žádná pevná hranice, od které je něco dost decentralizované, takže dává smysl brát decentralizaci jako škálu. Místo černé a bílé je mezi nimi spousta odstínů šedé.

Můžeme tedy říct, že něco je „více nebo méně decentralizované než něco jiného“, místo „centralizované, nebo decentralizované“. Aby neutrální měnový systém odolal cenzuře na úrovni států, potřebuje vysokou míru decentralizace. Novější blockchainy často mění decentralizaci za škálovatelnost, ale tím se vystavují stejným tlakům společnosti a vlád, jaké cítí plně centralizované platformy. Můžou skončit u stejné cenzury, jakou vidíme na centralizovaných sociálních sítích.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Různé blockchainy mají různou míru decentralizace.

- [x] Pravda

> ℹ️ Správně! Decentralizace je škála: každý blockchain si volí, kolik jí vymění za škálovatelnost nebo jiné cíle.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Decentralizace je škála a každý blockchain na ní dělá vlastní kompromis.

# Několik příkladů

Každý blockchain přistupuje k trilematu po svém a každý udělal kompromisy podle svých cílů. Bitcoin a Ethereum staví bezpečnost a decentralizaci nad škálovatelnost. U Bitcoinu z toho plyne dlouhá `doba do finality`, na Ethereu omezený `blokový prostor`. Když prudce vzroste poptávka po `chytrých kontraktech`, hlavně v DeFi, poplatky na Ethereu stoupají. Ve špičce v roce 2021 stála jedna transakce i desítky dolarů.

Rostoucí poplatky otevřely prostor pro `alternativní Layer 1`, třeba BNB Chain, které daly přednost škálovatelnosti před decentralizací kvůli vyšší `propustnosti transakcí` a levnějším poplatkům. Řetězce třetí generace jako Solana řeší trilema novými způsoby, ale tato základní omezení platí pro všechny blockchainy. Volba každého řetězce určuje jeho ekosystém.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Co se s tím dá dělat?

Když Ethereum postavilo na první místo bezpečnost a decentralizaci, jak se může škálovat a obsloužit všechny uživatele jako celosvětová finanční síť, kterou se chce stát? Plán Etherea prozkoumal dvě odpovědi: `Layer 2` a blockchainový `sharding`.

`Layer 2` zvyšuje škálovatelnost Etherea, aniž by ustoupila ze zbylých dvou částí trilematu. Je to další vrstva nad hlavním blockchainem: bezpečnost si bere z hlavního řetězce, ale lidem přináší nižší poplatky a rychlejší transakce. Podrobně ji probereme v lekci o Layer 2.

`Sharding` měl blockchain rozdělit na několik paralelních řetězců, jako když se k silnici přidají další pruhy. Ethereum ten plán odložilo a zvolilo jednodušší cestu: zlevnit bloková data pro Layer 2 (přidáno v roce 2024) a zvyšovat kapacitu krok za krokem, bez obětování bezpečnosti a decentralizace.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2:

- [ ] Zajišťují si vlastní bezpečnost

> ℹ️ Zkus to znovu! Layer 2 si berou bezpečnost z hlavního blockchainu.

- [x] Zvyšují škálovatelnost hlavního blockchainu

> ℹ️ Správně! Layer 2 sedí nad hlavním řetězcem a přidávají škálovatelnost, aniž by ustoupily z bezpečnosti a decentralizace.

- [ ] Zvyšují poplatky pro uživatele

> ℹ️ Zkus to znovu! Layer 2 dělají pravý opak: poplatky jsou na nich nižší.

- [ ] Prodlužují dobu do finality

> ℹ️ Zkus to znovu! Layer 2 nabízejí rychlejší transakce, ne pomalejší.

# Budoucnost Etherea

Síť Ethereum dál zlepšuje svoji škálovatelnost, aniž by obětovala zbylé části trilematu. Přechod na konsenzus `Proof of Stake` v roce 2022 snížil spotřebu energie sítě o více než 99 % a levná bloková data pro Layer 2 dorazila v roce 2024. **Škálování je nepřetržitá práce: každý upgrade dělá Ethereum rychlejší a levnější a bezpečnost s decentralizací zůstávají hlavními principy**. Ethereum Foundation má o tom výbornou stránku, [plán Etherea](https://ethereum.org/roadmap/).

Mezitím spousta protokolů `Layer 2` staví nad Ethereem a pomáhá pokrýt poptávku, aniž by se musel měnit samotný protokol Etherea. Tyto protokoly si berou decentralizovanou bezpečnost z Layer 1 Etherea a samy dodávají škálovatelnost. Rozmanitost Layer 2 tvoří decentralizovaný ekosystém! Mezi přední `rollupy` patří Arbitrum, OP Mainnet a Base. Polygon PoS je populární `sidechain` s vlastní bezpečností.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

K upgradům Etherea patří:

- [ ] Layer 2 a levnější bloková data pro vyšší škálovatelnost

> ℹ️ Zkus to znovu! To je součást upgradů, ale není jediná.

- [ ] Udržení decentralizace a bezpečnosti jako hlavních principů

> ℹ️ Zkus to znovu! To je součást upgradů, ale není jediná.

- [ ] Snížení spotřeby energie díky konsenzu Proof of Stake

> ℹ️ Zkus to znovu! To je součást upgradů, ale není jediná.

- [x] Všechno výše uvedené

> ℹ️ Správně! Layer 2 a levná bloková data přidávají kapacitu, Proof of Stake snížil spotřebu a bezpečnost s decentralizací zůstávají základem.

# Co to znamená pro Průzkumníky?

Nízké poplatky potřebuje každý, kdo se technologii teprve učí: bariéra vstupu je nižší a chyby stojí míň. Na začátku cesty to platí dvojnásob. Blockchain Ethereum zatím není ideální, ale jeho hodnoty z něj dělají jednoho z nejlepších kandidátů na splnění snu o celosvětovém finančním počítači. Průzkumníci se mohou naučit Ethereum používat, aniž by platili obří poplatky. Díky Layer 2 získají bezpečnost a decentralizaci Etherea spolu s vyšší škálovatelností.

Další lekce vysvětlí řešení `Layer 2` a jak s nimi začít. Vzhůru na cestu, Průzkumníci!
