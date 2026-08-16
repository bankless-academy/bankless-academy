---
TITLE: Decentralizované burzy
DESCRIPTION: Zjisti, jak burzy na chytrých kontraktech umožňují swapovat tokeny bez povolení!
LANGUAGE: Čeština
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

# Co je decentralizovaná burza?

Decentralizované burzy (DEX) jsou onchain tržiště, kde Průzkumníci bezpečně směňují kryptoměny s ostatními uživateli a přitom si drží vlastní správu nad penězi v peněžence. Tyto peer-to-peer obchody zajišťují veřejně dostupné chytré kontrakty, které uživatele propojují s velkými společnými zásobami tokenů. Těmto zásobám se říká `pooly likvidity`. DEX najdeš skoro na každém blockchainu, na Ethereu na Layer 1 i Layer 2.

Směna tokenů je základ práce s `DeFi`. Najdeš tu pestřejší nabídku tokenů a jejich využití než na jakékoli jiné burze. Někdo kupuje tokeny kvůli přístupu k onchain produktům a službám, jiný je bere jako investici. Některé tokeny dávají držitelům hlasovací právo o směřování projektu, podobně jako akcie ve firmě. Ať už tě láká cokoli, v DeFi budeš burzy DEX navštěvovat pravidelně.

Pojďme se podívat, jak fungují a co ti dají.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Centralizované a decentralizované burzy

Projděme si rozdíly mezi technologií centralizované burzy (Coinbase, Binance, Kraken) a burzy decentralizované (Uniswap, PancakeSwap).

Centralizované burzy (`CEX`) umožňují obchodovat s kryptoměnami a investovat do nich bez vstupu do samotného blockchainového ekosystému. Účet je registrovaný na CEX, takže soukromé klíče i peníze má ve správě burza: podléháš jejímu vedení, pravidlům a obchodním rizikům.

Decentralizované burzy (`DEX`) umožňují obchodovat kryptoměny plně ve vlastní správě, což byl původní záměr blockchainů. Model peer-to-peer z tebe dělá zároveň zákazníka i poskytovatele a otevírá finanční příležitosti, které dřív měla jen finanční třída. Blockchain je průhledný a odolný vůči cenzuře: nikdo ti nezmrazí přístup ani nevrátí zpět tvoje obchody. Riziko hacků zůstává, k tomu se v lekci ještě dostaneme.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Které tvrzení o kryptoměnových burzách je pravdivé?

- [ ] Za DEX nestojí žádný tým.

> ℹ️ DEX mají vývojářské týmy, ale jejich vliv na projekt je omezený.

- [ ] Na CEX můžeš přijít o peníze jedině špatným obchodem.

> ℹ️ I CEX mají svá rizika. V roce 2022 padla burza FTX a téměř všichni uživatelé přišli o vklady.

- [x] DEX ti umožní obchodovat ve vlastní správě, CEX ne.

> ℹ️ Pokud není výslovně řečeno jinak, soukromé klíče vlastní CEX.

# Decentralizované aplikace

DEX je typ `dApp`, tedy decentralizované aplikace běžící na blockchainu. Aby se internetová aplikace považovala za „decentralizovanou“, musí být bez rozdílu otevřená komukoli, musí zpracovat akce uživatele bez účasti další osoby a musí být napsaná ve veřejně čitelném kódu.

Služby dAppů zajišťují chytré kontrakty: řádky kódu, které přijmou onchain akci uživatele a vrátí předvídatelnou onchain odpověď. Ethereum Foundation přirovnává chytré kontrakty k automatu na jídlo: zadáš číslo produktu, vhodíš správnou částku a dostaneš očekávaný výstup, aniž by transakci musel zprostředkovat další člověk.

Chytré kontrakty DEX zvládají různé příkazy: swap tokenů, hlasování nebo přidání a odebrání `likvidity`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Decentralizované aplikace (pokračování)

DEX funguje stejně jako ten automat: přijme vstupní token a vydá token, který chceš. Další příklady dAppů:

🎟️ **Hlasovací dAppy**: přiřadí hlas uživatele zvolenému subjektu.

📦 **Mostové dAppy**: převedou kryptoměnu uživatele z jedné blockchainové sítě do druhé.

🤝 **Půjčovací dAppy**: poskytnou půjčku uživatelům, kteří splní dané podmínky.

Chytré kontrakty jsou účty na Ethereu: mají adresu a zůstatek a po přijetí převodu s příkazem provedou naprogramovanou akci. DEX je naprogramovaný účet Etherea s několika dostupnými funkcemi.

`dApp` obvykle používá webovou stránku jako vizuální rozhraní, které lidem pomáhá pracovat s kontrakty pod ní. Když web nefunguje, s trochou zkušeností se ke kontraktu dostaneš i tak.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Jaké vlastnosti musí mít dApp, aby byl decentralizovaný?

- [ ] Nevyžaduje povolení: přístup otevřený všem.

> ℹ️ To je jedna z vlastností dAppu, ale není jediná.

- [ ] Autonomie: interakce uživatelů nepotřebují prostředníka.

> ℹ️ To je jedna z vlastností dAppu, ale není jediná.

- [ ] Průhlednost: kód chytrého kontraktu je veřejně dostupný.

> ℹ️ To je jedna z vlastností dAppu, ale není jediná.

- [x] Všechny výše uvedené.

> ℹ️ dAppy na Ethereu se cení za to, že nevyžadují povolení, jsou autonomní a průhledné.

# Automatičtí tvůrci trhu

Na tradičních trzích a na burzách `CEX` vede správce `knihu objednávek`: databázi nabídek na nákup a prodej. CEX spáruje tvoji nabídku s nabídkou někoho jiného. Obvykle platíš základní nebo stupňovanou provizi a přitom nevíš, jestli ti nezveřejněná metoda párování našla nejlepší možnou cenu.

Většina burz `DEX` používá technologii „automatického tvůrce trhu“ (`AMM`), nejběžnější řešení pro swapy tokenů: systém, který obchod ocení podle veřejného algoritmu. Některé novější burzy sázejí místo toho na knihy objednávek nebo systémy založené na záměrech. Algoritmus AMM je open source, takže mu každý může porozumět, zkopírovat ho a vylepšit. To vede ke zdravé konkurenci a stálým inovacím.

AMM směrují obchody přes `pooly likvidity` místo přímého párování nabídek. Tyto společné zásoby tokenů přijímají a vydávají tokeny podle akcí uživatelů a každý krok je vidět na veřejném blockchainu.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Jaká je výhoda AMM oproti tradiční knize objednávek?

- [ ] Obchod přes AMM je rychlejší než přes knihu objednávek.

> ℹ️ Když započítáme čas potvrzení v síti, nemusí to platit.

- [ ] AMM tě propojí přímo s druhým uživatelem.

> ℹ️ AMM směrují obchody přes společné zásoby tokenů, tedy pooly likvidity, ne přímo mezi uživateli.

- [x] Můžeš odhalit a zastavit jednostranné obchody druhé strany.

> ℹ️ Díky průhlednosti AMM je pro platformy mnohem těžší skrýt škodlivé jednání a pro uživatele škodit vůbec.

# Swapy tokenů

Obchody s kryptoměnami na blockchainu se nazývají `swapy tokenů`. Tyto interakce s chytrým kontraktem převádějí jednu kryptoměnu na druhou přes pooly likvidity AMM. Kontrakt DEX sestaví `obchodní trasu`, tedy cestu skrz vhodné pooly likvidity, a vymění tvůj vstupní token za ten, který chceš. Pooly obvykle drží jen dva tokeny a ne každý `pár tokenů` má svůj pool, takže trasa může vést přes několik poolů.

Aby chytrý kontrakt mohl sáhnout do peněženky, dáš mu povolení vybírat prostředky do určité (nebo neomezené) výše. Tyto `povolené limity tokenů` nechají důvěryhodné kontrakty provádět transakce bez tvého soukromého klíče. Udělení stojí gas, takže povolení zůstávají otevřená do budoucna: jeden z důvodů, proč obchodovat z jedné peněženky a držet v druhé. Jak limity sledovat a rušit, ukazuje lekce [Správa povolených limitů tokenů](https://app.banklessacademy.com/lessons/managing-token-allowances).

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Swapy tokenů (pokračování)

Podívejme se na příklad swapu, ať je jasný proces povolení i samotné směny. Jde o swap z USDC na OP na Velodrome, velké burze DEX v síti Optimism. Tento obchod často vede přes dva pooly, protože `pool likvidity` USDC/OP není tak úsporný:

1. Nejdřív dáš příslušnému chytrému kontraktu Velodrome povolení vybírat USDC z peněženky.
2. Odešleš Velodrome požadavek na swap.
3. Transakce je přijata: Velodrome vybere z peněženky zadané množství USDC a pošle je do poolu USDC/ETH. Odpovídající množství ETH opustí tento první pool a putuje do poolu ETH/OP. Nakonec se OP převede z druhého poolu na adresu tvé peněženky.

Swap je hotový. Tvoje USDC se přes ETH vyměnily za OP.

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

AMM může směrovat obchod přes několik poolů likvidity v jediné transakci.

- [x] Pravda

> ℹ️ Správně! Zaplatíš možná vyšší poplatek sítě, ale všechny kroky jsou spojené do jedné transakce.

- [ ] Nepravda

> ℹ️ Špatně, podívej se na předchozí snímek a zjisti proč.

# Co je likvidita?

Likvidita v kryptu znamená schopnost trhu zajistit nákup a prodej digitálních aktiv za férové ceny. Když je likvidita vysoká, ceny jsou stabilnější; když je nízká, ceny víc kolísají. Lidi obvykle lákají férovější ceny, a proto burzy `DEX` usilují o vysokou likviditu ve všech svých poolech.

Vysoká likvidita znamená velké množství tokenů v poolu, obvykle v hodnotovém poměru 50/50 mezi dvěma tokeny, které uživatelé mění. Například pool USDC/ETH obsluhuje všechny obchody s tímto `párem tokenů` na dané platformě.
Čím víc tokenů, tím méně jednotlivý obchod naruší poměr 50/50, což pomáhá udržet ceny stabilní. Míra, o kterou obchod tento poměr vychýlí, se nazývá `cenový dopad`.

Jako Průzkumník chceš na svých obchodech co nejnižší cenový dopad, protože to znamená nejlepší cenu. A to vyžaduje vysokou a vyváženou likviditu.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Poskytovatelé likvidity

Vysoká `likvidita` je pro úspěch DEX zásadní, jenže v kryptoekosystému jí je omezené množství, takže každá burza soupeří o co největší podíl. Odkud se tedy likvidita bere?

V decentralizovaném ekosystému mají občané DeFi motivaci dodávat likviditu do poolu a zvyšovat tak TVL (celkovou zamčenou hodnotu) platformy. Poplatky vybrané od lidí, kteří přes pool obchodují, se rozdělují mezi LP (poskytovatele likvidity) podle množství dodané likvidity. Ano, čteš správně: půjčením tokenů do poolu likvidity DEX si můžeš vydělat pasivní příjem.

Role `LP` s sebou nese řadu úvah a probereme je v dalším obsahu. Zatím věz, že vysoká APR (roční procentní výnosnost), kterou pooly na DEX ukazují, není zaručená a ztráty jsou možné.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Doplň větu: „Když je likvidita __________.“

- [ ] vysoká, volatilita je vysoká.

> ℹ️ Špatně, zkus to znovu.

- [ ] nízká, volatilita je nízká.

> ℹ️ Špatně, zkus to znovu.

- [x] nízká, volatilita je vysoká.

> ℹ️ Přesně tak! Likvidita a volatilita jsou obvykle nepřímo úměrné.

# Knowledge Check 6

Jak burzy DEX motivují lidi k dodávání likvidity?

- [ ] Pojištěním ztrát z obchodů.

> ℹ️ Ani CEX, ani DEX tě neochrání před ztrátou ze špatné investice.

- [x] Podílem z poplatků platformy nebo bonusovými tokeny.

> ℹ️ Poplatky za používání DEX se často dělí mezi zúčastněné strany včetně LP. Některé platformy přidávají i další bonusy.

- [ ] Přístupem do soukromých poolů likvidity.

> ℹ️ Soukromé pooly likvidity neexistují, nízký provoz by stejně nepřinesl dost velké výnosy.

- [ ] Všechny výše uvedené.

> ℹ️ Správná odpověď je tu jen jedna. Zvládneš přijít na to, která?

# Poplatky platforem

Poplatky si účtují CEX i DEX a ani práce s blockchainem není zadarmo. Tady je pět běžných nákladů, které zvaž při výběru platformy.

🏷️ **Poplatky platformy**: CEX si nastavují vlastní provize, zatímco poplatky poolů na DEX se liší pool od poolu (často zlomek procenta). Zásadní rozdíl: poplatky DEX jsou vidět onchain a zkontrolovat si je může kdokoli.

🌐 **Poplatky sítě**: Blockchainy si nad rámec transakce v dAppu účtují poplatky za gas. Náklady snížíš, když síť využiješ v klidnějších obdobích. Etherscan.io má nástroj s odhadem gasu pro Ethereum Mainnet v reálném čase: [Etherscan.io](https://etherscan.io/gastracker). Na sítích Layer 2 jsou poplatky mnohem nižší; sítě porovnáš na [growthepie](https://www.growthepie.com/).

📦 **Poplatky mostů**: Za převod kryptoměny z jedné blockchainové sítě do druhé si účtují jak CEX, tak blockchainové mosty. U CEX najdeš informace přímo na jejich webu. Mostové dAppy ukážou odhad poplatku ještě před potvrzením převodu.

💹 **Směnné kurzy**: Když kupuješ kryptoměnu přímo za fiat na CEX nebo DEX, dej si pozor na kurzy, které neodpovídají tržní ceně.

🧊 **Cenový skluz**: Ceny se hýbou rychle, a tak DEX nechávají u swapu prostor pro výkyv: říká se mu `cenový skluz` (nastavitelný, obvykle 0,5-2 %). Na obchodu můžeš ztratit až tuhle hodnotu, ale příliš nízké nastavení může obchod zablokovat.

Než začneš obchodovat, vždycky si udělej vlastní průzkum, ať víš, jaké má platforma náklady a kompromisy.

# Výhody DEX

Probrali jsme hodně teorie, ale možná pořád váháš, jestli jsou DEX pro tebe. Obecně platí, že decentralizované burzy ti nejspíš prospějí, pokud:

- 🔑 Chceš si nad digitálními aktivy udržet vlastní správu.
- 🔒 Chceš mít aktiva v bezpečí na blockchainu a vyhnout se krachům CEX.
- ⌛ Chceš přístup na kryptoměnový trh 24/7.
- 👛 Chceš přístup k širší nabídce kryptoměn.
- 🤑 Zajímá tě dodávání likvidity.
- 🛂 Nechceš se registrovat a procházet `KYC` na každé platformě.
- ⚔️ Vyhledáváš vyšší rizika i odměny decentralizovaných financí.

I tak má skoro každý uživatel DeFi účet na centralizované burze. CEX totiž nabízejí snadnou cestu mezi tradičním bankovnictvím a blockchainem; peníze z bankovního účtu dostaneš na blockchain a zpátky bez potíží. [Ryan Sean Adams](https://twitter.com/RyanSAdams) to přirovnává k veřejným záchodkům: *„Vejdeš, uděláš, co potřebuješ, a jdeš pryč.“*

Je to dobrá zpráva: můžeš začít s účtem na CEX a do DeFi přecházet postupně, jak budeš získávat jistotu.

# Rizika DEX

Používání DEX má i svá rizika. Tady jsou ta nejzávažnější:

🐞 **Riziko chytrého kontraktu**: Audity snižují šanci na chyby v kódu, ale neodstraní je: v roce 2025 přišla velká burza DEX auditovaná několika firmami o 128 milionů dolarů kvůli drobné chybě v kódu. V nejhorším případě můžeš přijít až o částku svého obchodu. Dávej přednost důvěryhodným a důkladně auditovaným kontraktům.

💰 **Riziko vlastní správy**: Za soukromé klíče neseš plnou odpovědnost, takže o celou peněženku můžeš přijít krádeží, podvodem nebo ztrátou seed fráze. Proto je důležité riziko snižovat strategií více peněženek a mít vždy zálohu seed frází na bezpečném místě mimo internet.

🥪 **Sendvičové útoky**: Vysoko nastavený cenový skluz zvyšuje šanci, že proti tobě obchodní předbíhači spustí `sendvičové útoky`. Při takovém útoku můžeš na obchodu ztratit až hodnotu svého skluzu. Jak se před tímto typem útoku chránit, ukážeme v dalším obsahu.

Když zvážíš tyhle výhody i rizika, CEX pro tebe může být lepší volba, pokud:

- 🎓 Jsi na začátku kryptoměnové cesty a teprve chápeš rizika a odměny.
- ⚖️ Obchoduješ málo a v malých objemech, takže poplatky blockchainu nedávají smysl.
- 🏰 Raději svěříš peníze burze, než aby odpovědnost ležela jen na tobě.

Někteří lidé volí hybridní přístup a snižují celkové riziko: kryptoměnu nakupují a prodávají na CEX, ale drží ji na samotném blockchainu.

# Knowledge Check 7

Proč použít decentralizovanou burzu místo centralizované?

- [ ] Chceš tokeny, které centralizovaná burza nenabízí.

> ℹ️ To je jedna z předností DEX, ale není jediná.

- [ ] Chceš si nad směněnými penězi udržet plnou správu.

> ℹ️ To je jedna z předností DEX, ale není jediná.

- [ ] Chceš nástroje a příležitosti, které jinde nejsou.

> ℹ️ To je jedna z předností DEX, ale není jediná.

- [x] Všechny výše uvedené.

> ℹ️ Přesně tak! DEX nabízejí oproti CEX všechny tyto výhody.

# Jak vybrat DEX

Decentralizovaných burz je v DeFi spousta a některé jsou lepší než jiné. Při výběru zvaž těchto pět klíčových faktorů:

🥇 **Důvěryhodnost**: Je subjekt známý spolehlivostí, kvalitou a dlouhou historií?

⛲ **Likvidita**: Má pool likvidity dost vysoké `TVL`, aby byl cenový dopad malý?

🖱️ **Snadnost použití**: Je uživatelské rozhraní přehledné?

🔐 **Bezpečnost**: Prošly chytré kontrakty auditem u více auditorů?

🎁 **Odměny a funkce**: Nabízí burza odměny za věrnost nebo za dodávání likvidity? Můžeš hlasovat v řízení?

Mezi zvučná jména, která v těchto oblastech bodují, patří Uniswap, Curve, Velodrome a PancakeSwap. Mezi burzami se dá snadno přecházet, dokud si nenajdeš pár oblíbených. V questu k lekci použijeme Velodrome, zavedenou burzu DEX v síti Optimism. Ovládá se snadno, a protože běží na Layer 2, poplatky jsou mnohem přijatelnější.

# Osvědčené postupy na DEX

Než začneš pracovat s dAppem, dodržuj pár osvědčených postupů, které udrží tvoje peníze v bezpečí:

👩‍💻 Odkaz na dApp si ověř přes oficiální účet projektu na X (Twitteru) se zlatou fajfkou nebo přes důvěryhodnou třetí stranu a pak si ho ulož do záložek. Spousta podvodů v DeFi začíná falešným odkazem, i ve vyhledávačích.

🔓 Když uděluješ onchain `povolené limity tokenů`, omez limit na částku obchodu. Řada burz DEX dnes používá schválení podpisem, které pokryje jen tvůj obchod: viz [Správa povolených limitů tokenů](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ S dApps nepracuj ze své HODL peněženky; používej na ně samostatnou peněženku. Strategie peněženek popisuje lekce [Bezpečnost ve Web3](https://app.banklessacademy.com/lessons/web3-security).

Teď můžeš vyrazit na decentralizovanou burzu!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Jak si ověříš, že je zvolená burza DEX důvěryhodná?

- [x] Ověřením její pověsti a používáním URL jen z důvěryhodných zdrojů.

> ℹ️ Přesně tak! Pověst DEX si ověř nezávisle a otevírej jen odkazy od důvěryhodné strany.

- [ ] Malou testovací transakcí při prvním použití.

> ℹ️ Jediná interakce se špatným chytrým kontraktem může vysát celou peněženku.

- [ ] Obojí výše uvedené.

> ℹ️ Špatně. Jediná interakce se špatným chytrým kontraktem může vysát celou peněženku.
