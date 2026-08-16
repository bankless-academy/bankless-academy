---
TITLE: Swapování na decentralizované burze
DESCRIPTION: Začni svoji cestu do DeFi s návodem krok za krokem pro decentralizovanou burzu.
LANGUAGE: Čeština
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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

> * Decentralizované burzy jsou druh dApp, který umožňuje swapy tokenů ve vlastní správě.
>
> * K sebejistému používání DEX je potřeba pár praktických znalostí.
>
> * Ke kontrole onchain transakcí slouží prohlížeče bloků.

Decentralizovaná burza (DEX) je nejpoužívanější aplikace ve světě `decentralizovaných financí` (DeFi), a má to svůj důvod! DEX umožňují automaticky vyměnit jeden kryptoměnový token za jiný bez prostředníka. Na rozdíl od centralizovaných burz (CEX) navíc při tomhle typu swapu zůstávají aktiva celou dobu ve tvém vlastnictví.

Autonomie a protokoly nevyžadující povolení patří k pilířům DeFi. Dávají lidem skutečné vlastnictví digitálních aktiv a nepřetržitý přístup k základním blockchainovým službám. Do DeFi se dostane kdokoli s připojením k internetu, bez ohledu na původ, přesvědčení nebo místo bydliště.

V tomhle dílu příručky si projdeme, jak s peněženkou ve vlastní správě používat DEX a vyměnit jeden token za jiný. Víc o mechanice, vlastnostech a rizikovém profilu téhle technologie i o srovnání s CEX najdeš v naší lekci [Decentralizované burzy](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Jak vybrat DEX

První krok ke swapu tokenů je výběr dostupné a bezpečné platformy. V tomhle návodu použijeme Velodrome, zavedený DEX na síti Optimism. Až se budeš po blockchainu pohybovat s větší jistotou, naučíš se hodnotit i další burzy a najdeš tu, která ti sedne nejlíp. Naše lekce [Decentralizované burzy](https://app.banklessacademy.com/lessons/decentralized-exchanges) obsahuje ucelený seznam vlastností, kterých si všímat.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

DEX jsou skvělý začátek cesty do Web3, protože většina dApps má rozložení rozhraní podobné jako DEX a s peněženkou ve vlastní správě komunikuje obdobně.

Pojďme se pustit do swapu tokenů.

## Jak provést swap tokenů

**1\. Otevři dApp**:

Otevři [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) na nové kartě prohlížeče.

**2\. Připoj peněženku**:

Použij standardní tlačítko „Connect“, které v každé dApp bývá vpravo nahoře.

Na počítači se připoj peněženkou v prohlížeči.

Na mobilu ti výzva k připojení peněženky umožní propojit mobilní peněženku s dApp.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Schval připojení**:

V aplikaci peněženky zvol „Connect“ a potvrď připojení k webu. Díky tomu uvidí dApp adresu tvojí peněženky a zůstatky tokenů. Žádná další oprávnění tím zatím neuděluješ.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Přečti si podmínky a podepiš je (pokud s nimi souhlasíš)**:

Spousta dApps tě požádá o podpis zprávy, kterým potvrdíš přečtení jejich obchodních podmínek. Podepisování zpráv nestojí gas a neukládá na blockchain žádné informace. Pokud s podmínkami souhlasíš, můžeš zprávu podepsat.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Přepni na správnou síť**:

Pro tenhle návod měj v peněžence nastavenou síť Optimism.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. Nastav si swap**:

Teď vyber vstupní a výstupní token. V tomhle příkladu vyměníme ETH za OP, ale ty si můžeš vybrat jakékoli tokeny!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Schval oprávnění k tokenu (jen u swapů tokenů)**:

Když vyměňuješ token jako USDC, peněženka tě nejdřív požádá o schválení přístupu Velodrome k tomu tokenu. Doporučujeme omezit schválení na velikost obchodu. ETH je nativní měna sítě a schválení nepotřebuje, takže v našem příkladu jde peněženka rovnou na potvrzení swapu.

**8\. Potvrď transakci**:

Až ti nabídnutý kurz a nastavení vyhovují, můžeš swap spustit. Tenhle krok zahrnuje potvrzení v dApp a znovu v peněžence.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Zkontroluj zůstatek**:

Potvrzení transakce zabere pár vteřin. Potom uvidíš v peněžence nový zůstatek tokenu. Pokud se daný token nezobrazuje, zkontroluj, že máš naimportované adresy tokenů.

*Adresa kontraktu tokenu Optimism: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. Najdi hash transakce**:

Ke splnění úkolu z naší lekce [Decentralizované burzy](https://app.banklessacademy.com/lessons/decentralized-exchanges) budeš potřebovat ***hash transakce swapu*** (nepleť si ho s hashem transakce, která udělila oprávnění k tokenu, ani s adresou peněženky). V rozhraní DEX se obvykle objeví odkaz na prohlížeč bloků, kde si prohlédneš detaily potvrzené transakce. Pokud ti unikl nebo tam vůbec není, najdeš další odkaz v záznamu aktivity peněženky, přímo u svého obchodu.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

Je čas prozkoumat svět decentralizovaného obchodování! Doufáme, že se ti tenhle díl Příručky průzkumníka líbil: „Swapování na decentralizované burze“.

Nezapomeň si tenhle díl získat, pokud chceš mít vlastní kopii po ruce na cestách nebo podpořit další obsah Bankless Academy. Šťastnou cestu, Průzkumníku!

---

## Často kladené otázky

### Proč se mi nabídnutá cena každou minutu několikrát mění?

Cenová nabídka se obvykle počítá ve chvíli, kdy do rozhraní DEX zadáš požadovaný swap. Jak čas běží, další lidé obchodují a mění nabídku tokenů na burze. DEX proto nabídku pravidelně obnovuje, aby byla aktuální.

### Jak dlouho trvá provedení swapu tokenů?

Odpověď závisí na mnoha faktorech, hlavně na rychlosti bloků daného blockchainu a na tom, jak moc pod nebo nad cenou zaplatíš poplatek za gas. Potvrzení transakce DEX poslané na Ethereum Mainnet trvá obvykle od 12 sekund po pár minut. Transakce na Layer 2 bývají rychlejší!

### Proč moje transakce selhala?

Důvodů může být několik: málo peněz na zaplacení gasu, příliš nízký limit gasu nebo příliš nízko nastavený cenový skluz. Nejlepší je začít hledáním chybových hlášek v uživatelském rozhraní. Transakci si můžeš prohlédnout také v prohlížeči bloků, třeba na [Etherscanu](https://optimistic.etherscan.io/), a zkontrolovat, jestli tam nejsou onchain chybové zprávy. Když se ceny hýbou rychleji než tvůj obchod, zvyš si `toleranci skluzu` v nastavení swapu na DEX (pole „Slippage“). Spousta peněženek a DEX nabízí i chráněné směrování transakcí, které tvůj swap ukryje před `MEV` boty, co chtějí vydělat na čekajících obchodech.

### Můžu oprávnění k tokenům změnit nebo odebrat?

Udělení oprávnění k tokenu chytrému kontraktu může naši peněženku vystavit nechtěným budoucím interakcím, pokud někdo ten kontrakt hackne. Oprávnění k tokenům jde měnit i odebírat pomocí aplikací jako [Revoke.cash](https://revoke.cash/). Protože úprava oprávnění stojí gas, může se tahle opatrnost rychle prodražit. To je jeden z důvodů, proč spousta lidí drží digitální aktiva v jedné peněžence (studená peněženka) a s dApps pracuje z jiné (obchodní peněženka). Aktiva mezi nimi přesouvají jen podle potřeby.

### Proč token, který hledám, nejde vyměnit?

Když tvůj token není v nabídce hned, musíš do seznamu vložit adresu jeho kontraktu. Adresu kontraktu tokenu najdeš na <https://www.coingecko.com/> nebo na oficiálním webu projektu.

**Poznámka**: adresa jednoho a téhož tokenu se na různých sítích liší. Například [kontrakt USDC na Mainnetu](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) je jiný než [kontrakt USDC na Optimismu](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85). Před swapem si adresy tokenů vždycky ověř!

---

**Autor**

**[Tetranome](https://twitter.com/tetranome)** je Project Champion v Bankless Academy a věnuje se uživatelské zkušenosti, rozhraní, designu a kurikulu platformy.

**Editorka**

**[Trewkat](https://twitter.com/trewkat)** je autorka a editorka v BanklessDAO. Snaží se o kryptu a NFT zjistit co nejvíc, hlavně o tom, jak tyhle znalosti co nejlépe předávat dál.

**Patron**

Tenhle nesponzorovaný článek je součástí bezplatného vzdělávání Bankless Academy. Získej si ho a podpoř další obsah!
