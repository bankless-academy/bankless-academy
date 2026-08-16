---
TITLE: Blockchainy Layer 2
DESCRIPTION: Přidej se k ekosystému Layer 2, zrychli transakce a sniž poplatky.
LANGUAGE: Čeština
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

Ideální stav každého blockchainu je být co nejvíc decentralizovaný, bezpečný a škálovatelný. Postavit blockchain, který zvládá všechny tři věci dobře, se zatím nikomu nepodařilo. Tahle výzva má svoje jméno: `blockchainové trilema`.

Bitcoin i Ethereum jsou docela decentralizované a bezpečné, ale špatně škálují, což je vidět na vysokých poplatcích a dlouhých frontách transakcí, když je síť vytížená. Průzkumníci se tomu mohou vyhnout technologiemi, které výrazně snižují náklady a zrychlují transakce. Souhrnně se jim říká škálovací řešení Layer 2 (L2).

`Lightning Network` je nejznámější škálovací řešení Bitcoinu a ke škálování plateb mezi stranami používá technologii, které se říká `platební kanály`. Ethereum si trilema ulevuje tím, že transakce přenechává různým řešením L2. Pomáhá jim levné dočasné úložiště `blob`, přidané na Mainnet v roce 2024 jako lehčí forma kdysi plánovaného shardingu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Platební kanály

Na blockchainu Bitcoinu staví Lightning Network na obousměrných platebních kanálech, díky kterým si více stran může vyměňovat BTC bez transakcí na hlavním řetězci.

Tato architektura umožňuje dvěma uživatelům otevřít mezi sebou platební kanál. Každý kanál je striktně jen mezi dvěma stranami, platby se ale mohou směrovat sítí propojených kanálů až ke vzdálenějším uživatelům. Mezi otevřením a uzavřením kanálu si strany mohou prostředky přesouvat. Záznam v mikroúčetní knize každého účastníka se aktualizuje poté, co transakci podepíší oba uživatelé, což obvykle vyžaduje dostupné uzly obou stran.
Kanál může kdykoli uzavřít kterákoli strana tím, že na blockchain odešle nejnovější verzi mikroúčetní knihy.

Platební kanály nepodporují pokročilé interakce s `chytrým kontraktem`, jen základní transakce mezi dvěma stranami.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

K transakcím přes Bitcoin Lightning Network musíš být online.

- [x] Pravda

> ℹ️ Správně! Aktualizace platebního kanálu vyžaduje podpis obou uživatelů, což obvykle znamená, že uzly obou stran musí být dostupné.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Aktualizace kanálu potřebuje podpisy obou stran, takže jejich uzly obvykle musí být online.

# Škálovací řešení Etherea

Vývojáři Etherea pracují na vlastních škálovacích řešeních skoro tak dlouho, jak dlouho tahle síť běží.

Většina komunity kolem Etherea tvrdí, že „škálovací řešení Etherea“ musí řešit nedostatky ve `škálovatelnosti` bez obětování `bezpečnosti` nebo `decentralizace`. Pro uživatele jsou nejdůležitější rychlejší transakce a levnější `gas` než na Ethereum Mainnetu. Aby řešení obstálo v konkurenci, je někdy ochotné dělat v trilematu větší ústupky než jiná.

Ethereum definují jeho chytré kontrakty, takže je důležité, aby je jeho škálovací řešení podporovala také. Rychlé a levné transakce jsou k ničemu, když se uživatelé z Layer 2 nedostanou ke svým oblíbeným `dApps`.

# Knowledge Check 2

Škálovací řešení Etherea:

- [ ] používají ke škálování sítě platební kanály.

> ℹ️ Zkus to znovu! Platební kanály jsou přístup Lightning Networku u Bitcoinu. Ethereum škáluje řešeními jako rollupy.

- [ ] nezvládají interakce s chytrými kontrakty.

> ℹ️ Zkus to znovu! Podpora chytrých kontraktů je zásadní. Uživatelé potřebují své oblíbené dApps i na Layer 2.

- [x] mají zvýšit škálovatelnost bez oslabení dalších částí trilematu.

> ℹ️ Správně! Skutečné škálovací řešení Etherea zvyšuje škálovatelnost bez obětování bezpečnosti nebo decentralizace.

- [ ] zrychlují transakce za cenu dražšího gasu.

> ℹ️ Zkus to znovu! Škálovací řešení cílí na rychlejší transakce A zároveň levnější gas než Ethereum Mainnet.

# Propojení Layer 1 a Layer 2

Jak už víme z lekce [Základy blockchainu](https://app.banklessacademy.com/lessons/blockchain-basics), blockchainy jsou databáze zvané `účetní knihy`, které vedou kryptograficky zabezpečený chronologický seznam transakcí. L1 blockchainy i škálovací řešení L2 jsou samy o sobě blockchainy s vlastními databázemi adres a dat.

K přenosu informací mezi různými blockchainovými databázemi slouží infrastruktura zvaná `mosty`. Představ si třeba Ethereum Mainnet (nebo jakýkoli jiný `L1` blockchain) jako jeden ostrov a jiný blockchain nebo tvoje oblíbené škálovací řešení jako druhý: kryptomost je obecný název pro dálnici, která tyhle dva digitální ostrovy propojuje.

Technologie je hodně složitá, ale z pohledu koncového uživatele je to jednoduché jako výběr cíle cesty.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechainy

`Sidechain` je samostatný blockchain, který běží nezávisle na Ethereu, ale s Ethereum Mainnetem ho spojuje `most`. Když chceš přenést tokeny, zamkneš je v kontraktu mostu na Mainnetu a na sidechainu vznikne jejich ekvivalent. Důležité je, že tvoje prostředky tím NEZÍSKAJÍ bezpečnost Etherea: most i sidechain spoléhají na vlastní validátory sidechainu. Když je některý z nich prolomený (jako u hacku mostu Ronin za 625 milionů dolarů v roce 2022), zamčené prostředky jde ukrást.

Sidechainy pořád podléhají blockchainovému trilematu. Nižší poplatky za `gas` a rychlejší transakce plynou z menší, ale výkonnější sady validátorů, která mění část decentralizace a bezpečnosti za škálovatelnost.

Sidechainy jako Polygon PoS pravidelně zveřejňují na Ethereu snímky stavu („checkpointy“). Ty dávají jejich historii jistou formu finality a umožňují při odchodu přes most doložit zůstatky, prostředky na sidechainu tím ale nejsou stejně bezpečné jako na Mainnetu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechainy:

- [ ] zamykají přemostěné tokeny v kontraktu na Mainnetu.

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné pravdivé tvrzení.

- [ ] mají levnější poplatky za gas než Mainnet.

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné pravdivé tvrzení.

- [ ] nesou větší riziko centralizace než Mainnet.

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné pravdivé tvrzení.

- [x] Vše výše uvedené.

> ℹ️ Správně! Sidechainy zamykají přemostěné tokeny na Mainnetu a mají nižší poplatky, ale menší sada validátorů mění decentralizaci za rychlost.

# Rollupy

Protokoly Layer 2, které používají technologii rollup, drží blíž úrovni bezpečnosti Ethereum Mainnetu.

Stejně jako sidechainy umožňují rollupy provádět onchain transakce mimo Ethereum Mainnet. Tyto transakce se pak „srolují“ do jedné dávky a data dávky se na Ethereum zapíšou v levných dočasných datových balíčcích zvaných `bloby`, které přinesl upgrade Dencun v březnu 2024. Bloby jsou hlavní důvod, proč běžné poplatky na L2 klesly na pár centů nebo méně.

Aby rollup prokázal, že je dost bezpečný na zpracování transakcí za Mainnet, musí dodat „přesvědčivý důkaz“, že transakce v každé odeslané dávce jsou bezpečné a platné. Tento důkaz je součástí rollupu a ověřuje ho kontrakt mostu na Ethereum Mainnetu.

Takový důkaz dnes umí dodat dvě metody rollupů: `optimistické rollupy` a `ZK rollupy`. Pojďme se na oba postupy podívat blíž.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistické rollupy

Protokoly L2 jako Optimism, Base a Arbitrum používají jako architekturu svého škálovacího řešení `optimistické rollupy`. Jmenují se tak proto, že informace v dávce rollupu se považují za platné, dokud se neprokáže opak: dělá se optimistický předpoklad.

Aby se tenhle postup nedal zneužít, obvykle platí několikadenní zpoždění, když uživatel požádá o přesun prostředků z L2 zpět na Mainnet. Během té doby mohou validátoři mostu zveřejnit `důkaz o podvodu` a výběr zrušit. Tenhle mechanismus se podobá zúčtovacím procesům v bankovnictví, jen je decentralizovaný.

Poznámka: mosty třetích stran, jako Across a Relay, pomáhají přesunout prostředky během minut místo dnů. Tyto rychlé mosty ti peníze půjčí z vlastního poolu, takže bereš na sebe riziko jejich chytrých kontraktů a poskytovatelů prostředků, tedy vrstvu důvěry navíc oproti vlastnímu mostu rollupu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

U optimistických rollupů se transakce považují za platné, dokud se neprokáže opak.

- [x] Pravda

> ℹ️ Správně! Optimistický předpoklad říká, že dávky jsou platné, a během lhůty na námitky mohou důkazy o podvodu zrušit špatné výběry.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Právě z toho optimistického předpokladu má tenhle typ rollupů jméno.

# ZK rollupy

`ZK rollupy` jsou typ rollupu, který staví na technologii zero-knowledge. Na rozdíl od `optimistických rollupů` potvrzují legitimitu dávky transakcí, aniž by spoléhaly na to, že někdo bude hledat důkazy podvodu. Místo toho posílají matematický důkaz, `důkaz platnosti`, díky kterému Ethereum ověří celou dávku bez opakování práce.

Hlavní výhodou ZK rollupů je `doba vypořádání`, jinak taky `finalita transakce`. Místo několikadenní lhůty na námitky se uživatelé ke svým prostředkům na Mainnetu obvykle dostanou během pár hodin, jakmile dorazí další důkaz platnosti. Navzdory názvu se tu technologie zero-knowledge nepoužívá kvůli soukromí: transakce na velkých ZK rollupech jsou stejně veřejné jako na Ethereum Mainnetu.

Technologii ZK rollupů používá několik velkých protokolů, včetně ZKsync, Starknet a Linea. Vývoj je pořád na začátku, ale potenciál je velký.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Ve srovnání s optimistickými rollupy ZK rollupy:

- [ ] drží transakce uživatelů na Mainnetu v soukromí.

> ℹ️ Navzdory názvu „zero-knowledge“ jsou velké ZK rollupy stejně transparentní jako Ethereum Mainnet: důkazy slouží k platnosti, ne k soukromí.

- [x] používají důkazy platnosti a obejdou se bez několikadenní lhůty.

> ℹ️ Správně! Matematický důkaz platnosti potvrdí každou dávku, takže finalita na Mainnetu nečeká na uplynutí lhůty pro důkazy o podvodu.

- [ ] spoléhají na hlídače, kteří ve lhůtě podávají důkazy o podvodu.

> ℹ️ Takhle fungují optimistické rollupy. ZK rollupy platnost dokazují rovnou dopředu.

# Kompatibilita dApps napříč řetězci

Při srovnání `optimistických rollupů` a `ZK rollupů` uživatele nejvíc zajímá doba výběru. Protože ale zpoždění výběrů umí vyřešit mosty třetích stran, nemělo by to být hlavní kritérium při výběru škálovacího řešení.

Řada optimistických rollupů je „EVM ekvivalentních“, což znamená, že L2 nativně podporuje jakoukoli dApp, která běží na `Ethereum Virtual Machine` (EVM). Ekvivalence s EVM umožňuje nasadit jakýkoli chytrý kontrakt dřív nasazený na Mainnetu, takže uživatelé L2 mají přístup ke svým oblíbeným dApps.

Sidechainy jako Polygon PoS také běží nativně na EVM a většina moderních ZK rollupů (třeba ZKsync, Linea a Scroll) je EVM ekvivalentní nebo velmi blízko. Tvoje oblíbené aplikace na Ethereu jsou tak dostupné napříč většinou ekosystému L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Škálovací řešení ekvivalentní s EVM umí snadno znovu použít chytré kontrakty nasazené na Mainnetu.

- [x] Pravda

> ℹ️ Správně! Ekvivalence s EVM znamená, že každý chytrý kontrakt z Mainnetu jde nasadit na L2, a známé dApps jdou s ním.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Znovupoužití chytrých kontraktů z Mainnetu je celý smysl ekvivalence s EVM.

# Shrnutí lekce

L1 blockchainy jako Bitcoin a Ethereum dnes omezuje `blockchainové trilema`. `Platební kanály` v síti Bitcoinu nebo sidechainy a rollupy na Ethereu pomáhají těmto sítím škálovat a trilema zmírňovat.

`Mosty` propojují L1 blockchainy se `sidechainy` a `rollupy` a způsob, jakým kontrakt mostu funguje, ovlivňuje vlastnosti připojené sítě.

Prostředky na sidechainu nedědí `bezpečnost` Etherea: přemostěné tokeny jsou zamčené v kontraktu na Mainnetu, ale jejich bezpečí závisí na validátorech a kontraktu mostu daného sidechainu. Tyto řetězce mají malou, ale výkonnou sadu validátorů, díky které zrychlují transakce a snižují poplatky za gas, a to za cenu decentralizace a bezpečnosti.

Rollupy si stejně jako sidechainy ověřují a zpracovávají vlastní transakce, jejich kontrakt mostu ale vyžaduje „přesvědčivý důkaz“ platnosti transakcí, než jsou data uznána za platná. Díky tomu drží úroveň `bezpečnosti` a `decentralizace` v souladu s hodnotami Etherea. Takový důkaz jde dodat dvěma způsoby: optimistickými rollupy a ZK rollupy. `Optimistické rollupy` drží několikadenní zpoždění, než své dávky vypořádají na Mainnetu, a během té doby validátoři mostu odhalují a hlásí podvody. `ZK rollupy` dávají matematickou jistotu o legitimitě transakcí díky technologii `zero-knowledge`.

Dnes nabízejí optimistické i moderní ZK rollupy vysokou kompatibilitu chytrých kontraktů s Ethereum Mainnetem, takže dApps z Mainnetu jdou snadno nasadit i na jejich sítích. Mnozí věří, že ZK rollupy budou škálovacím řešením budoucnosti díky rychlé finalitě a silným zárukám platnosti.

# Začni svoji cestu na Layer 2 se sítí Optimism nebo Base 🙂

Optimism a Base jsou optimistické rollupy ekvivalentní s EVM a pro Průzkumníky jsou skvělým začátkem mezi L2. Používání dApps na obou sítích působí podobně jako na L1, jen levněji a rychleji, a obě používají na gas ETH. Tvoje nadcházející výprava je prvním krokem cesty na síti Optimism nebo Base!

Oba ekosystémy hluboce ovlivňují hodnoty Etherea. Optimism je známý [financováním veřejných statků](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY), které přinášejí ekosystému hodnotu, jako je bezplatné vzdělávání od Bankless Academy.

Optimism a Base nejsou jen platformy postavené na optimistických rollupech: ukazují, jak mohou blockchainy řešit reálné problémy a otevírat nové způsoby, jak spolu obchodovat a koordinovat se. A díky tomu můžeme být všichni optimističtí. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
