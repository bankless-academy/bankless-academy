---
TITLE: Základy blockchainu
DESCRIPTION: Poznej základní architekturu blockchainové technologie.
LANGUAGE: Čeština
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/blockchain-basics
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

Technologie `blockchain` je revoluční způsob, jak ukládat a sledovat data a zároveň je zpřístupnit komukoli. Data se uspořádají do jediného veřejného seznamu všech historických transakcí, do kterého každý vidí, ale nikdo ho nemůže upravit. Tomuto veřejnému seznamu transakcí se souhrnně říká blockchainová `účetní kniha`.

Až projdeme vrstvy blockchainu, pochopíš strukturu, kterou zobrazuje nástroj zvaný `prohlížeč bloků`: **seznam** bloků, **transakce** uvnitř těchto bloků a **detaily** každé jednotlivé transakce. Vyzkoušej si to na [Etherscanu](https://etherscan.io/), oblíbeném prohlížeči bloků pro Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Struktura blockchainu

Slovo blockchain se dá použít jako podstatné jméno (blockchain Bitcoinu) i jako přídavné jméno (blockchainová technologie). Tak či tak `blockchain` označuje celou strukturu, na které kryptoměny stojí.

Když se na ni podíváme zvenčí dovnitř, má tři úrovně:

1. Celý `blockchain` tvoří bloky pospojované za sebou
2. `Bloky` tvoří skupiny transakcí dané dohromady
3. `Transakce` jsou přesuny hodnoty nebo pokyny programům mezi `adresami` v síti

Tyto tři úrovně dohromady vytvoří kryptografickou účetní knihu: neměnnou historii všech transakcí provedených v síti.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Co je blockchain?

- [ ] Uspořádané skupiny transakcí zvané bloky

> ℹ️ Zkus to znovu! Bloky jsou součástí struktury, ale nejsou jedinou správnou odpovědí.

- [ ] Sdílený záznam, který každý vidí, ale nikdo neupraví

> ℹ️ Zkus to znovu! To je pravda, ale není to jediná správná odpověď.

- [ ] Bloky pospojované za sebou

> ℹ️ Zkus to znovu! Tohle popisuje řetězec bloků, ale není to jediná správná odpověď.

- [x] Všechno výše uvedené

> ℹ️ Správně! Platí všechny tři: blockchain je sdílený neupravitelný záznam transakcí seskupených do bloků, které jdou za sebou.

# Pohled do účetní knihy

V běžných peněžních systémech věříme třetím stranám, třeba bankám, že hlídají, kolik kdo má peněz. Být opravdu Bankless ale znamená chtít systém, ve kterém účetní knihu nespravuje jediný subjekt, kterému musíme věřit.

`Účetní kniha` je seznam VŠECH transakcí, které kdy na blockchainu proběhly, a u `veřejných` blockchainů do ní vidí každý. Oddělené skupiny transakcí z účetní knihy tvoří bloky, které dohromady dávají blockchain.

Když do účetní knihy přibudou nové transakce, aktualizují se zůstatky, které každá `adresa` drží. Staré transakce změnit nejde. Je to, jako by kdokoli mohl kdykoli nahlédnout do kompletní historie bankovních účtů všech lidí.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transakce v účetní knize

Podívejme se na pár ukázkových transakcí:

- Alice posílá Bobovi 5 ETH
- Bob posílá Charliemu 2 ETH

Jednotlivé transakce ukazují _změnu_ množství kryptoměny u každé adresy, takže celkový výsledek všech transakcí JE množství kryptoměny, které každá adresa má.

---

⇒ Alice přišla o 5 ETH

⇒ Bob má celkem o 3 ETH víc (přijal 5, poslal 2)

⇒ Charlie má o 2 ETH víc

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Co platí pro účetní knihy veřejných blockchainů?

- [ ] Všechny transakce jsou veřejné a staré už nejdou změnit

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Kniha sleduje, kolik kryptoměny každá adresa právě má

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Kniha roste s tím, jak do ní přibývají nové transakce

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [x] Všechno výše uvedené

> ℹ️ Správně! Účetní kniha je veřejná, neměnná, drží zůstatky adres aktuální a roste s každou novou transakcí.

# Decentralizace

Transakce zapsané v účetní knize `blockchainu` nejenže nejdou změnit, navíc jsou sdílené a rozprostřené po velké síti počítačů. Aby žádný jediný subjekt neměl moc data měnit, ukládají se kopie účetní knihy na mnoha počítačích po celé síti. Říká se jim `uzly`.

Díky těmto sdíleným datům je účetní kniha blockchainu `decentralizovaná`. Data neovládá žádná jediná autorita ani subjekt. Blockchainy jako Ethereum jsou navíc `veřejné`, protože do účetní knihy vidí každý.

Pro tuhle lekci si stačí zapamatovat, že data účetní knihy sdílí mnoho počítačů, které provozují síť Ethereum.

# Knowledge Check 3

Čím je blockchain decentralizovaný?

- [ ] Do blockchainu smí zapisovat jen jeden subjekt

> ℹ️ Zkus to znovu! Jediný subjekt u řízení je pravý opak decentralizace.

- [ ] Splňuje požadavky na decentralizaci dané vládou

> ℹ️ Zkus to znovu! Decentralizace plyne z návrhu sítě, ne ze schválení vládou.

- [x] Účetní knihu na mnoha počítačích neovládá jediný subjekt

> ℹ️ Správně! Kopie účetní knihy na mnoha uzlech znamenají, že žádný jediný subjekt nemůže data ovládat ani měnit.

- [ ] Účetní kniha leží na jediném zabezpečeném serveru

> ℹ️ Zkus to znovu! Jediný server by byl centrálním bodem kontroly. Kopie účetní knihy leží na mnoha uzlech.

# Anatomie bloku

Důležitá vlastnost blockchainů je, že data starých transakcí už po zařazení do bloku nejdou změnit. Každý blok má totiž jedinečný `hash bloku`, něco jako otisk prstu, který bloky spojuje jeden za druhým. Nikdo nemůže změnit staré transakce, aniž by změnil ten otisk a zároveň otisk KAŽDÉHO dalšího bloku, protože každý otisk závisí na tom předchozím.

Každý `blok` je tedy prostě skupina transakcí plus jedinečný otisk (jeho `hash bloku`) spočítaný z obsahu bloku. Bloky drží v řetězu proto, že každý odkazuje na jedinečný otisk předchozího bloku a dohromady tvoří jeden propojený block**chain**.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

K čemu slouží hash bloku?

- [ ] K zašifrování dat bloku, aby je nikdo nepřečetl

> ℹ️ Zkus to znovu! Data bloku zůstávají veřejně čitelná. Hash je otisk prstu, ne šifrování.

- [x] Ke spojení bloků a k neměnnosti dat starých transakcí

> ℹ️ Správně! Každý blok odkazuje na otisk toho předchozího, takže změna starých dat by rozbila každý další blok.

- [ ] K zajištění, že transakce dorazí na správnou adresu

> ℹ️ Zkus to znovu! Kam peníze dorazí, řeší adresy. Hash bloku spojuje bloky.

- [ ] K zajištění, že blockchain zůstane decentralizovaný

> ℹ️ Zkus to znovu! Decentralizace plyne z rozprostření účetní knihy po mnoha uzlech, ne z hashe bloku.

# Uvnitř bloku

Připomeňme si, že data `bloku` jsou jen skupina transakcí dané dohromady. Když nahlédneme dovnitř jednoho bloku, uvidíme seznam transakcí a nějaká data o tom, kdo blok vytvořil.

Obě transakce z dřívějšího příkladu s účetní knihou mohou skončit v jednom bloku, nebo se v čase rozdělit do několika bloků. Ať už jsou v kterémkoli bloku, nakonec se všechny dostanou do celkové účetní knihy blockchainu.

- Alice posílá Bobovi 5 ETH
- Bob posílá Charliemu 2 ETH

Nezapomeň, že každý blok musí odkazovat i na `hash bloku`, který mu předcházel, aby blockchain držel pohromadě.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Jaké informace jsou v bloku?

- [ ] Všechny informace z předchozích bloků

> ℹ️ Zkus to znovu! Blok jen odkazuje na hash předchozího bloku. Nekopíruje všechna stará data.

- [ ] Cokoli, protože velikost bloku je neomezená

> ℹ️ Zkus to znovu! Blok je oddělená skupina transakcí, ne neomezená nádoba.

- [x] Data transakcí a odkaz na předchozí blok

> ℹ️ Správně! Blok je skupina transakcí plus hash předchozího bloku, který bloky spojuje do řetězu.

- [ ] Všechna data transakcí za pevně daný časový úsek

> ℹ️ Zkus to znovu! Transakce mohou skončit v jednom bloku, nebo se v čase rozdělit do několika.

# Jednotlivé transakce

Data na jakémkoli blockchainu jsou prostě seznam `transakcí`, tedy záznamů o měně, která se přesunula mezi uživateli. Aby byla transakce platná, musí ji odesílatel podepsat svým `digitálním podpisem`.

Přesně to děláš, když v peněžence potvrzuješ transakci: podepisuješ ji digitálním podpisem, a tím ji schvaluješ. Ber to jako digitální obdobu toho, když fyzicky podepisuješ šek, účtenku nebo platbu kartou.

Transakce mohou být jednoduché, třeba poslání kryptoaktiv, nebo složitější, třeba swap kryptoaktiv nebo dokonce nasazení zvláštního kódu, který se spustí, když ho něco vyvolá. Tomuto kódu se říká `chytré kontrakty`.

Každá transakce má nakonec jedinečný digitální identifikátor, `hash transakce`, který žádná jiná transakce nemá. Díky němu se dá na konkrétní transakci snadno odkázat a její detaily už nejde dodatečně změnit.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Data na blockchainu jsou prostě seznam transakcí seskupených do bloků. Příkladem takové transakce je:

- [x] Odeslání nebo přijetí kryptoaktiv

> ℹ️ Správně! Transakce zaznamenávají pohyb měny mezi uživateli, od prostých převodů po interakce s chytrými kontrakty.

- [ ] Změna velikosti bloku

> ℹ️ Zkus to znovu! Velikost bloku transakce změnit nemůže.

- [ ] Úprava starých dat blockchainu

> ℹ️ Zkus to znovu! Stará data blockchainu změnit nejdou. To je jedna ze základních vlastností blockchainů.

- [ ] Všechno výše uvedené

> ℹ️ Zkus to znovu! Platná blockchainová transakce je jen jedna z uvedených možností.

# Adresy uživatelů

`Adresa` je veřejný identifikátor, který si kdokoli může na blockchainu vyhledat. Podobně jako u e-mailové adresy na ni může kdokoli poslat peníze, ale odemknout je a použít dokáže jen ten, kdo ovládá `soukromý klíč`.

Na Ethereu adresa vždy začíná na \_0x\_\_\_\_\_\_\_\_\_\_ a má 42 znaků, čísel a písmen odvozených z `veřejného klíče` té adresy.

Když se v prohlížeči bloků díváme na jednu transakci, vidíme adresy From: a To:. Neřekne nám to, kteří *lidé* ty adresy ovládají, ale komukoli to umožní sledovat pohyb kryptoměny napříč účetní knihou blockchainu.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Co platí o blockchainových adresách?

- [ ] Jsou to veřejné identifikátory subjektů na blockchainu

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Na Ethereu vždy začínají na _0x_

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [ ] Kdo ovládá soukromý klíč, může použít peníze na té adrese

> ℹ️ Zkus to znovu! To je pravda, ale není to jediné správné tvrzení.

- [x] Všechno výše uvedené

> ℹ️ Správně! Adresy jsou veřejné identifikátory, na Ethereu začínají na 0x a peníze na nich odemyká soukromý klíč.
