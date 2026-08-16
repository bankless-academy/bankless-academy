---
TITLE: Správa povolených limitů tokenů
DESCRIPTION: Ochraň peněženku před nechtěnými interakcemi s chytrými kontrakty.
LANGUAGE: Čeština
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
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

> * Povolené limity tokenů jsou oprávnění, která dostanou `chytré kontrakty`, aby mohly utrácet tokeny z peněženky bez dalšího schvalování.
>
> * Když člověk o udělených oprávněních neví, útočník jich může zneužít.
>
> * Nástroje jako Revoke.cash umožňují povolené limity tokenů snadno prohlédnout a zrušit.

## Úvod

DeFi dává lidem kontrolu nad jejich aktivy včetně `soukromých klíčů` a s ní nebývalou svrchovanost a moc nad vlastními penězi. S velkou mocí ale přichází ještě větší odpovědnost: bezpečnost a správa aktiv je plně na tobě.

Uživatelé DeFi by měli znát čtyři běžné kategorie podvodů:

* **Prozrazení seed fráze**: útočníci se snaží z lidí vylákat seed frázi, která jim dá neoprávněný přístup k penězům. Se seed frází ti útočník vysaje všechny peníze a bude v tom pokračovat i u každého dalšího vkladu do té peněženky. Z téhle situace bohužel není cesta zpět. Jediné řešení je nová peněženka a nová `seed fráze`.

* **Přímé převody ETH**: podvodníci umí převod ETH zamaskovat jako volání funkce, třeba „Security Update“. Metodu surového podpisu, na které stály starší verze tohoto podvodu, MetaMask odstranil. Moderní phishingové sady místo toho zneužívají obyčejně vypadající žádosti o podpis a spoléhají na to, že podepíšeš bez čtení toho, co peněženka zobrazuje. Kdo tomuhle podvodu naletí, o peníze přijde, ale peněženku může dál bezpečně používat na jiné transakce.

* **Nabídky na tržištích NFT**: dávej pozor na falešné nabídky a škodlivé kontrakty, které zneužívají limity udělené tržištím, jako je OpenSea. Podvodníci tě můžou přimět podepsat `offchain` zprávu, která dá tvoje schválená `NFT` do prodeje, aniž by proběhla jakákoli transakce s tokenem.

* **Povolené limity tokenů**: útočníci můžou s oprávněními manipulovat a získat přístup k většímu objemu peněz, než bylo původně schváleno. „Approvals“ jsou onchain transakce, které dávají přístup k tvým tokenům nebo NFT. „Permits“ dávají stejný přístup, ale stačí k nim offchain podpis bez gasu. Uniswap a většina moderních obchodních aplikací tenhle systém používá (jmenuje se Permit2). Podpisy typu permit se jako onchain schválení neobjeví, dokud je někdo nepoužije, a můžou mít datum vypršení. Zkontrolovat a zrušit je jde v sekci „Signatures“ na Revoke.cash.

  Jak chytré kontrakty získávají na oblibě, jsou `povolené limity tokenů` čím dál potřebnější: díky nim může důvěryhodný kontrakt provádět transakce, aniž by se odhalily soukromé klíče. Povolené limity umožňují dApps automaticky hýbat tokeny v tvojí peněžence za tebe. Tahle pohodlnost zvyšuje efektivitu, ale zároveň otevírá dveře podvodům a neoprávněnému přístupu.

V tomhle článku se podíváme na povolené limity tokenů a představíme komunitní nástroj, který ti se správou oprávnění pomůže.

## Povolené limity tokenů: pochopit, spravovat a zabezpečit

Povolené limity tokenů jsou oprávnění, která chytré kontrakty dostanou předem, aby mohly utrácet tokeny z peněženky. Hrají klíčovou roli: díky nim nemusíš u každého přímého převodu aktiv z peněženky dávat výslovné svolení znovu. Když se ale zneužijí, stane se z nich vektor útoku na každého, kdo nedává pozor. Proto se vyplatí dávat pozor, vzdělávat se v bezpečnosti a rozumět tomu, jak povolené limity doopravdy fungují.

Udělení oprávnění kontraktu třetí strany má dva kroky:

1. Připojení peněženky: když peněženku připojíš k dApp, sdílíš s jejím rozhraním jenom `adresu` peněženky, aby uměla zobrazit zůstatky a aktivitu. Samotné připojení neuděluje žádná onchain oprávnění.

2. Schválení tokenu: pro obchodování s dApp pak jejímu chytrému kontraktu schválíš, že smí za tebe hýbat konkrétními tokeny. Právě tenhle krok dává skutečnou moc utrácet.

Kdo povolené limity aktivně spravuje, má jistotu, že žádný kontrakt z peněženky nevytáhne víc než původně stanovenou částku. Naštěstí existují komunitní nástroje, které uživatelům DeFi dodají klid a jistotu.

## Krok za krokem: použití Revoke.cash

[Revoke.cash](https://revoke.cash/) umožňuje snadno spravovat povolené limity tokenů přes jednoduchý web, na kterém si prohlédneš a ohlídáš limity udělené jednotlivým dApps. Pojďme si projít, jak tenhle mocný komunitní nástroj použít k ochraně svých aktiv a k převzetí kontroly nad peněženkou.

**1\. Připoj peněženku**:

Rušení povolených limitů začni na [Revoke.cash](http://revoke.cash/) kliknutím na „Connect Wallet“ vpravo nahoře. Případně můžeš do vyhledávacího pole ručně zadat veřejnou adresu peněženky. Až se stránka načte, uvidíš seznam všech svých `schválení tokenů` na dané síti.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Prohlédni si své limity**:

Po připojení peněženky si můžeš projít stávající schválení. Jde je řadit, filtrovat i vyhledávat podle adresy oprávněného utrácejícího. Řazení „Newest to Oldest“ se hodí hlavně tehdy, když máš podezření na nedávné škodlivé schválení. Pomocí řazení a filtrů si udělej přehled o udělených limitech. Limity se udělují zvlášť pro každý řetězec, takže přepínačem sítě projdi kontrolu na každé síti, kterou používáš.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Zruš nechtěné limity**:

Až najdeš schválení, která chceš zrušit, prostě u každého klikni na tlačítko „Revoke“. Volitelně můžeš schválení upravit na jinou částku: klikni na ikonu tužky vedle schválené částky. To se hodí, když schválení do budoucna ještě potřebuješ, ale chceš snížit riziko.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Zrušit nebo upravit povolený limit tokenu se vyplatí, když:

1. Někdo zneužije nedávno nasazený chytrý kontrakt a vznikne díra na `decentralizované burze`, kterou pravidelně používáš.

   V dubnu 2023 postihlo podobné zneužití populární `DEX` SushiSwap a uživatelům někdo ukradl zhruba 3,5 milionu dolarů. Zasažení uživatelé zůstávali v ohrožení, dokud svůj povolený limit nezrušili.

2. Škodlivý návrh v řízení protokolu aktualizuje několik kontraktů s cílem vysát peníze uživatelů.

   Aktiva za víc než 2,5 milionu dolarů byla ohrožena, když Atlantis Loans, protokol `DeFi` na řetězci BNB, provedl návrh řízení mířící na několik kontraktů. Kdo si hlídal výši schválení, snížil riziko, že mu škodlivý návrh vysaje celou peněženku.

## Nezapomeň na delegace

Od upgradu Pectra na Ethereu (květen 2025) nejsou povolené limity jediné oprávnění, které stojí za kontrolu. Novější funkce peněženek (EIP-7702) umožňuje peněžence delegovat na dodatečný kód. Přináší to pohodlí, třeba dávkování transakcí, ale i nový trik drainerů: jediný škodlivý podpis dokáže nainstalovat „sweeper“ kód, který okamžitě přeposílá každý tvůj vklad útočníkovi, aniž by kdy unikla seed fráze. V roce 2025 zjistili výzkumníci z Wintermute, že přes 97 % raných delegací peněženek mířilo na naprosto stejný sweeper kód.

Revoke.cash ukazuje aktivní delegace na záložce „Delegations“. Protože ale delegace neřídí dApps, nýbrž tvoje peněženka, nechtěnou delegaci rušíš přímo v ní. V MetaMasku otevři detaily účtu a přepni účet zpátky na standardní. Pokud si přechod na `chytrý účet` vědomě nezapínáš, ber každou nalezenou delegaci jako nepřátelskou.

---

Je čas posílit obranu peněženky! Doufáme, že se ti tenhle díl Příručky průzkumníka líbil: „Správa povolených limitů tokenů“.

Nezapomeň si tenhle díl získat, pokud chceš mít vlastní kopii po ruce na cestách nebo podpořit další obsah Bankless Academy. Šťastnou cestu, Průzkumníku!

---

## FAQ

### Kdy mám Revoke.cash používat?

Používej Revoke.cash pravidelně, hlavně v obdobích, kdy nějakou dApp aktivně nepoužíváš, a zvlášť u tržišť s NFT. Omezení schválení snižuje riziko ztráty peněz při hacku, zneužití nebo phishingovém podvodu. Když si schválení seřadíš od nejnovějších, snáz odhalíš ta podezřelá a rychle je zrušíš, čímž zabráníš dalším škodám.

### Ochrání mě odpojení peněženky před zneužitím schválení?

Odpojení peněženky od dApp tě před zneužitím nechrání, ať už jde o schválení, nebo o cokoli jiného. Dříve udělená schválení tokenů zůstávají aktivní i po odpojení, protože jsou uložená onchain.

### Jak se vyhnout zneužití povolených limitů a podobným rizikům?

Aktivní přístup k povoleným limitům tokenů znamená:

* udělovat limity jen důvěryhodným dApps.

* pravidelně povolené limity kontrolovat.

* rušit zbytečné nebo podezřelé limity.

* hlídat si delegace peněženky, které nepoznáváš.

* sledovat bezpečnostní novinky u dApps, které používáš.

Zvaž i nástroje třetích stran, třeba [rozšíření Revoke.cash do prohlížeče](https://revoke.cash): funguje jako prevence proti možným hrozbám. Rozšíření tě varuje, když se chystáš podepsat něco potenciálně škodlivého, a chrání tě tak před phishingem i další nekalou činností.

### Můžu přes Revoke.cash získat peníze zpátky?

Ukradené peníze bohužel Revoke.cash vrátit nedokáže. Slouží jako preventivní nástroj, který snižuje šanci, že se staneš obětí zneužitého schválení. Zrušení schválení, přes které peníze zmizely, ale může zabránit dalším krádežím.

### Proč se mi peněženka vysaje pokaždé, když ji dobiju?

V peněžence možná sedí „sweeper bot“, tedy skript, který hlídá napadenou peněženku a bleskově odesílá pryč každý nový vklad, dřív než stihneš zareagovat. Jednou příčinou je prozrazená seed fráze. V takovém případě rušení schválení nepomůže: peněženku opusť a vytvoř si novou. Stejně pravděpodobná příčina je ale škodlivá delegace peněženky, tedy sweeper kód nainstalovaný podpisem, ke kterému tě někdo přelstil, aniž by seed fráze unikla. Zkontroluj záložku „Delegations“ na Revoke.cash. Když tam najdeš delegaci, kterou nepoznáváš, zruš ji přímo v peněžence (například přes detaily účtu v MetaMasku). Pokud žádná delegace není a peníze mizí dál, počítej s tím, že seed fráze je prozrazená, a přejdi na čerstvou peněženku.

---

**Autor**

**[Marcus](https://twitter.com/estmcmxci)** vydává newsletter ENS DAO. Zkoumá, jak může přebytek příjmů z protokolových poplatků podpořit vývoj na aplikační vrstvě a další open source infrastrukturu.

**Editoři**

**[Tetranome](https://twitter.com/Tetranome)** je Project Champion v Bankless Academy a věnuje se uživatelské zkušenosti, rozhraní, designu a obsahu.

**[Trewkat](https://twitter.com/trewkat)** je autorka a editorka v BanklessDAO. Zajímá se o krypto a NFT, hlavně o to, jak tyhle znalosti co nejlépe předávat dál.

**Patron**

Tenhle nesponzorovaný článek je součástí bezplatného vzdělávání Bankless Academy. Získej si ho a podpoř další obsah!
