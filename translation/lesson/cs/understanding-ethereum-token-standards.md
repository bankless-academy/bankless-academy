---
TITLE: Jak fungují standardy tokenů na Ethereu
DESCRIPTION: Zjisti, jak šablony aktiv na Ethereu zvládají tradiční i nově vznikající třídy aktiv.
LANGUAGE: Čeština
WRITERS: Musharraf, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards
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
## **Klíčové poznatky**

> * `Token` se na Ethereu vydává podle standardu, tedy podle předem daných pravidel a funkcí.
>
> * Nejpoužívanější standardy tokenů na Ethereu jsou `ERC-20`, `ERC-721` a `ERC-1155`.
>
> * Každý standard umožňuje jinou míru `zaměnitelnosti`, takže vzniknou běžná i jedinečná onchain aktiva.
>
> * Standardy tokenů propojují tokeny napříč ekosystémem Etherea. dAppy díky nim snadno přidají nový token a ty se k němu snadno dostaneš!

## Co jsou standardy tokenů na Ethereu?

Napříč Ethereem a jeho sítěmi `Layer 2` žijí miliony různých krypto tokenů, každý s jinými vlastnostmi a využitím. Jak může síť zajistit bezproblémovou podporu tokenů v celém ekosystému dAppů, aniž by vývojáři trávili hodiny integrací každého tokenu zvlášť? A jak mají lidé, kteří tyto tokeny používají, pochopit jejich klíčové vlastnosti, aniž by hodiny procházeli dokumentaci?

Nastupují standardy tokenů!

Tyto šablony a sady pravidel podporují interoperabilitu tokenů napříč ekosystémem Etherea. Znamená to, že dAppy potřebují podporovat jen několik běžných standardů místo tisíců jednotlivých tokenů. Pro Průzkumníky, jako jsi ty, to znamená, že se podíváš na standard, podle kterého token vznikl, a hned rozumíš jeho základním schopnostem napříč Ethereem.

Standardy tokenů určují:

* Jak má být naprogramovaný chytrý kontrakt tokenu.

* Společnou sadu funkcí, kterou musí každý token daného typu podporovat, aby s ním uměl pracovat každý dApp.

Ethereum dnes běžně používá tři standardy tokenů:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: standard pro snadno směnitelné (neboli zaměnitelné) tokeny.

   např. tokeny USDC a UNI.

2. **ERC-721**: standard pro jedinečné (neboli nezaměnitelné) tokeny, známé jako `NFT`.

   např. NFT ze sbírky Bored Ape Yacht Club.

3. **ERC-1155**: standard pro zaměnitelné i nezaměnitelné tokeny v jednom kontraktu.

   např. předměty uvnitř videohry ve Web3.

Nejspíš tě teď napadá: „Co přesně je zaměnitelnost?“

Podívejme se na tento pojem z tradiční ekonomie, ať je jasné, proč je v ekosystému Etherea důležitý.

## Zaměnitelnost a nezaměnitelnost

**„Zaměnitelnost“** je vlastnost ekonomického aktiva nebo statku a ukazuje dvě věci:

* Když se aktivum obchoduje, jeho jednotky jsou navzájem zaměnitelné bez jakékoli změny hodnoty.

  (1 USD vyměníš za jiný 1 USD, za čtyři mince po 25 centech nebo za dvacet mincí po 5 centech.)

* Když se aktivum dělí, menší části si zachovají jeho základní vlastnosti.

  (1 USD rozdělený na čtyři mince po 25 centech pořád slouží k uchování hodnoty i k placení.)

Mezi zaměnitelná aktiva patří ropa, fiat měny, státní dluhopisy a akcie firem. Tato aktiva nejsou jedinečná, a proto se snadno směňují i dělí.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Naopak **„nezaměnitelnost“** znamená:

* Aktivum má jedinečné vlastnosti, které ho odlišují od ostatních a dávají mu vlastní hodnotu.

  (Obraz od Van Gogha má jinou cenu než obraz začínajícího moderního umělce, a to kvůli vzhledu, vzácnosti, míře dovednosti i pověsti, která za obrazy stojí.)

* Dělení mění jeho základní vlastnosti.

  (Obraz rozřezaný na čtyři části má úseky, které si navzájem nejsou podobné, a každý může mít jinou hodnotu. Původní záměr obrazu je navíc pryč.)

Mezi nezaměnitelná aktiva patří nemovitosti, umělecká díla, digitální identity a certifikáty. Kvůli jedinečným vlastnostem se hůř směňují i dělí.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Když si se zaměnitelností nevíš rady, zeptej se: „Jak snadné je to směnit a rozdělit?“ Když je to těžké, nejspíš je to nezaměnitelné!

Ethereum chce být „zúčtovací vrstvou světové ekonomiky“. Podpora zaměnitelných i nezaměnitelných aktiv otevírá cestu tradičním třídám aktiv na blockchain a umožňuje vznik úplně nových!

## Standardy a funkce tokenů

Když někdo na Ethereu nasazuje nový kontrakt tokenu, vybere si jeden z existujících standardů. Tím token získá počáteční vlastnosti (říká se jim funkce), třeba celkovou nabídku aktiva, možnost převodu do jiné peněženky nebo to, jaké informace může nést.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

ERC-20 například používá tyto funkce:

**1\. totalSupply**: určuje celkovou nabídku tokenu ERC-20.

Celková nabídka tokenu vypovídá o důležitých vlastnostech, jako je jeho hodnota a distribuce.

**2\. balanceOf**: zjišťuje zůstatek tokenů na zadané adrese.

Díky tomu si služby a platformy ověří zůstatek tvé peněženky, než provedou požadovanou transakci.

**3\. transfer**: převádí tokeny z tvé adresy na jiné adresy.

Pokaždé, když posíláš krypto token z peněženky do jiné peněženky, používáš funkci transfer.

**4\. approve**: umožňuje adrese (obvykle chytrému kontraktu) automaticky provádět transakce za tvoji peněženku do stanovené výše.

Touto funkcí schválíš platformě nebo službě, že smí automaticky použít určenou část tvých peněz a provést transakce.

**5\. allowance**: slouží ke zjištění částky, kterou daná strana smí z peněženky utratit.

Platforma tuto funkci využije, aby zjistila celkovou schválenou částku a jestli může transakci provést bez tvého ručního podpisu.

Standardizace vzniku tokenů přináší do ekosystému Etherea `skládatelnost`. Vývojář, který staví [decentralizovanou burzu (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges), tak může přidat podporu pro jakýkoli token podle standardu ERC-20, protože se všechny chovají podobně. Nemusí programovat podporu pro každý nabízený token zvlášť.

Podobně stačí, aby ten, kdo staví tržiště s NFT, udělal platformu kompatibilní se standardy ERC-721 a ERC-1155, a podpoří všechna NFT vytvořená na Ethereu.

Teď, když rozumíme standardům, zaměnitelnosti i funkcím, se pojďme podívat na využití tří hlavních standardů na Ethereu.

### ERC-20: zaměnitelné tokeny

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) je standard tokenu, který určuje pravidla pro vytváření kontraktů se zaměnitelnými tokeny.

Tokenem ERC-20 může být klidně `memecoin` i platidlo v decentralizovaném tržišti. Většinou spadá do jedné ze čtyř kategorií:

**1\. Utility token**: slouží konkrétnímu účelu v ekosystému aplikace nebo platformy.

Příklad: Chainlink (LINK) se používá k placení operátorům, kteří chytrým kontraktům dodávají data z reálného světa, třeba tržní ceny.

**2\. Governance token**: dává držitelům hlasovací právo v rozhodnutích o řízení platformy.

Příklad: držitelé Ethereum Name Service (ENS) můžou hlasovat o návrzích na úpravu protokolu registru domén.

**3\. Stablecoin**: je navržený tak, aby držel stabilní hodnotu, obvykle rovnou americkému dolaru.

Příklady: Tether (USDT), USD Coin (USDC) a novější příchozí, třeba USDS od Sky.

**4\. Security token**: představuje vlastnictví podkladového aktiva, třeba akcií firmy.

Příklad: tokenizované investiční fondy, jako jsou fondy peněžního trhu, které velcí správci aktiv začali vydávat onchain v roce 2024.

Jeden token může spadat i do víc kategorií. Governance token může mít třeba zároveň užitek uvnitř platformy.

Tokeny ERC-20 snadno [koupíš na DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange), třeba na Uniswapu. Druhou cestou je `centralizovaná burza`, například Binance nebo Coinbase.

### ERC-721: nezaměnitelné tokeny

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) je standard, který určuje pravidla pro vytváření a používání nezaměnitelných tokenů na Ethereu. Zaručuje, že každé vzniklé NFT je prokazatelně jedinečné.

K čemu se tokeny ERC-721 hodí?

**1\. Vlastnictví aktiv**: tokeny ERC-721 se hojně používají k zápisu vlastnictví jedinečných digitálních i reálných aktiv. Tenhle záznam v Průzkumnické příručce má například 100 očíslovaných verzí, které si můžeš nejen přečíst, ale i vlastnit, jako knihu v digitální knihovně. (Zlatým tlačítkem „Collect Entry“ nahoře si ho můžeš `mintovat` a vlastnit.) Stejně fungují i sběratelské Datadisky od Bankless Academy.

**2\. Předplatné a členství**: tvůrci, umělci, kluby i firmy už NFT používají pro předplatné, vstupenky na akce a členství. Prokazatelná jedinečnost NFT zajistí, že každý kus z pevné nabídky patří konkrétnímu člověku.

**3\. Věrnostní odměny**: Starbucks provozoval do března 2024 věrnostní program Odyssey, kde členové plnili questy a získávali NFT, které šlo vyměnit za digitální i reálné odměny. NFT jako věrnostní odměnu, kterou si lidé můžou nechat proplatit nebo ji prodat, nabízí i řada dalších značek.

**4\. Identita a certifikáty**: tokeny ERC-721 umožňují vytvářet identity a certifikáty odolné proti padělání. Když jsou tvoje digitální identita nebo osvědčení tokeny ERC-721, snadno prokážeš vlastnictví a padělat je a zneužít je téměř nemožné.

Pro získání tokenu ERC-721 si založ účet na tržišti s NFT, třeba [OpenSea](https://opensea.io/), a kup si některé nabízené NFT. Určitě si projdi lekci [Bezpečnost ve Web3](https://app.banklessacademy.com/lessons/web3-security), ať tě podvody na tržištích nezaskočí.

### ERC-1155: zaměnitelné i nezaměnitelné tokeny

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Standardu [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) se často říká `multitokenový standard`. Spojuje myšlenky ERC-20 a ERC-721 a nechá vývojáře psát kontrakty, které zvládnou zaměnitelné i nezaměnitelné tokeny naráz. Pro uživatele se toho moc nemění, ale platformám to pomáhá ladit funkce. Příkladem je jediný kontrakt, ve kterém běží zaměnitelná herní měna i nezaměnitelné herní předměty.

Tento standard umožňuje i vznik částečně zaměnitelných tokenů: tokenů, které jsou za určitých okolností zaměnitelné a jindy ne. Ve sbírce sběratelských karet můžou být třeba všechny karty stejné vzácnosti zaměnitelné, zatímco karty s různou vzácností zaměnitelné nejsou.

ERC-1155 také umožňuje dávkové transakce, které pošlou několik typů tokenů najednou, a tím dokážou snížit náklady na `gas`.

---

Gratulujeme, tenhle dlouhý záznam v Průzkumnické příručce má název „Jak fungují standardy tokenů“ a máš ho za sebou.

Nezapomeň si záznam sebrat, pokud chceš vlastní kopii po ruce na cestách nebo chceš podpořit další obsah Bankless Academy. Šťastnou cestu, Průzkumníku!

---

## FAQ ke standardům tokenů na Ethereu

### Jak standardy tokenů na Ethereu vznikají?

Standardy se navrhují a zveřejňují na Ethereu procesem, kterému se říká Ethereum Improvement Proposals (EIP). Nehlasuje se: návrh se ladí ve veřejné diskusi, a jakmile se komunita široce shodne, že funguje, editoři ho dokončí jako standard s názvem Ethereum Request for Comment (ERC). K názvu standardu se pak připojí pořadové číslo EIP, například ERC-20 nebo ERC-721.

### Řídí se ether (ETH) nějakým standardem tokenu?

Ne. ETH je vlastně „mince“, ne „token“, což znamená, že má vlastní [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### Může token vydat kdokoli?

Ano. Ethereum je ekosystém nevyžadující povolení a zaměnitelný i nezaměnitelný token tu může vydat kdokoli. Potřebuješ ale technické znalosti nebo přístup k nástrojům, které se obejdou bez programování.

### Když mají dva tokeny stejný název, jak poznám ten oficiální?

Původní token poznáš podle adresy kontraktu, ze které se token vydává: porovnej ji s oficiální dokumentací projektu. Tak si zajistíš, že se nedostaneš ke škodlivému kontraktu tokenu, který by ti mohl vysát peněženku.

### Existují na Ethereu i jiné standardy tokenů než ERC-20, 721 a 1155?

Ano. Některé se hojně používají, třeba [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), společný standard pro tokeny typu `vault`, které představují vklady vydělávající v DeFi. Novější standardy pokrývají také `chytré účty`, díky nimž peněženka umí spustit vlastní kód. Jiné, jako [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) a [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), se neujaly nebo slouží hodně úzkým účelům.

---

**Autoři**

**[Musharraf](https://x.com/musharrafff)** je spoluzakladatel Unhashed. Pomáhá projektům Web3 se strategií a tvorbou obsahu.

**[Tetranome](https://twitter.com/Tetranome)** je Project Champion v Bankless Academy a věnuje se uživatelské zkušenosti, rozhraní, designu a obsahu.

**Editoři**

**[Trewkat](https://twitter.com/trewkat)** je spisovatelka a editorka v BanklessDAO. Zajímá se o krypto a NFT, hlavně o to, jak tyhle znalosti co nejlépe předat ostatním.

**Patron**

Tento nesponzorovaný článek je součástí tvého bezplatného vzdělávání v Bankless Academy. Seber si článek a podpoř další obsah!
