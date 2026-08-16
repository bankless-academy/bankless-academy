---
TITLE: Bezpečnost ve Web3
DESCRIPTION: Ochraň sebe i svoji peněženku před nejčastějšími podvody ve Web3.
LANGUAGE: Čeština
EDITORS: Claude (Anthropic AI, 2026 review)
WRITERS:
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/web3-security
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

Digitální vlastnictví je novinka, kterou přináší Web3. Díky blockchainům, kryptoměnám a NFT vrací Web3 vlastnictví a moc zpátky lidem. Vlastnit digitální finanční produkty online je pro spoustu lidí nové a právě nezkušenost dává příležitost podvodníkům, kteří okrádají ostatní. Tyhle podvody fungují tak dobře hlavně proto, že většina lidí netuší, jak probíhají.

Podvody ale netrápí jenom Web3. Služby Web2, jako je e-mail nebo sociální sítě, jsou jich plné také. Navíc spousta nástrojů Web3 pořád visí na službách Web2, třeba na bankovních účtech nebo centralizovaných burzách, takže chránit je potřeba i je. Gratulujeme, Průzkumníku: věnuješ čas znalostem, které tě ochrání na cestách po `Web3`!

Tahle lekce pokrývá:

- Bezpečnost ve Web2 a ve Web3.
- Nejčastější způsoby, jak lidé přicházejí o peníze, a obranu proti nim.
- Obecnou strategii pro bezpečnost peněženky.
- Jak se z podvodu vzpamatovat, když se někdo stane obětí.

# Peníze ve Web2

Ve Web2 drží peníze instituce jménem lidí. Přístup ke svým penězům dostane jenom ten, kdo instituci prokáže totožnost. Funguje to stejně jako bankovní účet nebo `centralizovaná burza` (CEX): potřebuješ přihlašovací jméno a heslo.

Aby se podvodník dostal k tvým penězům, potřebuje právě tuhle dvojici jméno + heslo. Protože za ochranu peněz odpovídají instituce, podvodné transakce jde zvrátit, podobně jako reklamaci platby kreditní kartou.

![](https://app.banklessacademy.com/images/web3-security/money-in-web2-7e1a5fd1.svg)

# Peníze ve Web3

Ve Web3 fungují peníze jinak. Je to spíš jako zamčená peněženka s hotovostí: co jednou utratíš, je pryč. `Seed fráze` (ta zvláštní sada tajných slov) odemyká tvoje `soukromé klíče`, takže kdo ji získá, ovládá celou peněženku. ***Nikdy*** ji nikomu nedávej a nikdy ji neukládej digitálně: fotky i poznámkové aplikace se dají prolomit.

Seed fráze ale není jediný cíl. Jediný škodlivý podpis (transakce nebo zpráva, kterou schválíš) může podvodníkovi umožnit vysát tvoje tokeny, aniž by seed frázi kdy viděl. Chraň **seed frázi** *i* **podpis**.

![](https://app.banklessacademy.com/images/web3-security/money-in-web3-f575b0f6.svg)

# Knowledge Check 1

Pravda, nebo nepravda? Podvodníci dokážou vysát tokeny z tvojí peněženky tím, že tě navedou k podpisu škodlivé transakce nebo schválení, aniž by znali tvoji seed frázi.

- [x] Pravda

> ℹ️ Správně! Škodlivý podpis nebo schválení tokenu vydá tvoje peníze i sám o sobě. Chraň to, co podepisuješ, stejně pečlivě jako seed frázi.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Seed fráze není jediný cíl: i jediné škodlivé schválení nebo podpis dokáže vysát tvoje tokeny.

# Bezpečné uložení seed fráze

Způsobů, jak bezpečně uložit seed frázi, je celá řada. Dobrý začátek je mít ji na fyzickém nosiči (laminovaný papír nebo něco podobného) a uložit ji doma do vodotěsného a ohnivzdorného sejfu. `Seed fráze` **nepatří** na fotku ani do jiného digitálního úložiště, a to ani do správce hesel.

Špatná místa pro seed frázi:

- V kartotéce
- V aplikaci na poznámky
- V práci
- Na digitální fotce

Ať už seed frázi uložíš kamkoli, měj jistotu, že k ní máš přístup jenom ty a že je chráněná před ztrátou i zničením. Nikdy nevíš, co přinese budoucnost!

# Chraň svoje hesla

Rozumné používání hesel a péče o ně patří k základům každodenního pohybu po internetu.

Pro každou službu Web2 měj jiné heslo. Platí to pro e-mail, centralizované burzy i další účty. Je problém, když někdo získá jméno a heslo k jednomu účtu. Mnohem horší je, když ta samá dvojice odemkne všechny tvoje účty!

`Správce hesel`, například 1Password, Bitwarden nebo KeePass, bezpečně ukládá a šifruje spoustu hesel. Umí dokonce vygenerovat nová silná hesla a rovnou je uložit. Stačí si pamatovat jediné hlavní heslo.

Seed frázi z Web3 do správce hesel **neukládej**: stačí jediný únik hesla a přijdeš o všechna svoje aktiva ve Web3. Nikdo ti je nevrátí.

# Knowledge Check 2

Proč je správce hesel užitečný?

- [ ] Stačí si pamatovat jediné hlavní heslo.

> ℹ️ Zkus to znovu! To je pravda, ale není to jediná výhoda.

- [ ] Generuje a ukládá silná a jedinečná hesla.

> ℹ️ Zkus to znovu! To je pravda, ale není to jediná výhoda.

- [ ] Šifruje hesla, aby zůstala v bezpečí.

> ℹ️ Zkus to znovu! To je pravda, ale není to jediná výhoda.

- [x] Vše výše uvedené

> ℹ️ Správně! Správce hesel generuje, šifruje a ukládá jedinečné heslo ke každému účtu. Ty si pamatuješ jenom hlavní heslo.

# Dvoufaktorové ověření

`Dvoufaktorové ověření` (2FA) je druhá vrstva bezpečnosti ve Web2.

Spoustě lidí někdo ukradl účet nebo přihlašovací údaje i přes silné heslo. Weby Web2 (a dokonce i `správce hesel`) proto nabízejí 2FA: kromě hesla chtějí důkaz z dalšího zařízení nebo aplikace.

Ne každé 2FA je stejné:

🥉 **SMS kódy** jsou nejslabší: podvodník pomocí `sociálního inženýrství` přepíše tvoje číslo na svoji SIM a kódy chodí jemu. Pořád je to ale lepší než nic.

🥈 **Autentizační aplikace** (Google Authenticator, 2FAS, Aegis) generují kódy přímo v telefonu. Solidní volba pro většinu účtů.

🥇 **Passkeys a hardwarové bezpečnostní klíče** (třeba YubiKey) jsou zlatý standard odolný vůči phishingu: váží se na pravý web, takže na podvrhu se prostě nepřihlásí.

![](https://app.banklessacademy.com/images/web3-security/two-factor-authentication-7fa9bfdf.svg)

# Knowledge Check 3

Proč se dvoufaktorové ověření tak doporučuje?

- [ ] Se zapnutým 2FA se účet nedá hacknout.

> ℹ️ Zkus to znovu! 2FA bezpečnost hodně zvyšuje, ale žádná metoda nedělá účet nehacknutelným. SMS kódy třeba obejde výměna SIM.

- [x] Přidává účtům ve Web2 další vrstvu bezpečnosti.

> ℹ️ Správně! 2FA chce kromě hesla i důkaz z dalšího zařízení nebo aplikace, takže samotné ukradené heslo nestačí.

- [ ] Dělá hesla silnějšími.

> ℹ️ Zkus to znovu! 2FA tvoje heslo nemění. Přidává k němu druhou vrstvu důkazu.

- [ ] Vše výše uvedené

> ℹ️ Zkus to znovu! Pravdivé je jenom jedno z těchto tvrzení.

# Podvody se sociálním inženýrstvím

Ve Web2 i ve Web3 používají podvodníci `phishing`, aby z lidí vylákali hesla a seed fráze nebo je přiměli podepsat škodlivou transakci. Často se vydávají za podporu produktu („Dobrý den, tady podpora MetaMasku“) nebo za správce komunity („Nový mint NFT, exkluzivně pro naši komunitu“).

K nátlaku na lidi slouží `sociální inženýrství`. Příklady:

- „Čas se krátí!“ vyvolá pocit spěchu.
- „Gratulujeme k výhře v naší soutěži!“ vyvolá pocit výjimečnosti.
- „Získej předčasný přístup k našemu pre-mintu!“ vyvolá u oběti `FOMO`.

![](https://app.banklessacademy.com/images/web3-security/social-engineering-scams-73c69132.svg)

# Strach, že o něco přijdeš

`FOMO` je zkratka anglického „Fear Of Missing Out“, tedy strachu, že o něco přijdeš. Je to stresující pocit, že velkou výhodu nebo příležitost získáš jenom tehdy, když něco uděláš **hned teď**.

Nejlepší obrana proti FOMO je odejít od počítače a dát si pauzu. Ve stresu lidé nepřemýšlejí jasně, a právě proto je FOMO tak účinný nástroj podvodníků. Když od situace odstoupíš, poznat podvod je najednou mnohem snazší.

# Knowledge Check 4

Jak podvodníci využívají sociální inženýrství?

- [ ] Vydávají se za autoritu v komunitě.

> ℹ️ Zkus to znovu! To je jedna z taktik, ale není jediná.

- [ ] Tlačí na lidi krátkým časovým limitem.

> ℹ️ Zkus to znovu! To je jedna z taktik, ale není jediná.

- [ ] Nabízejí soutěže nebo NFT zdarma, aby vyvolali FOMO.

> ℹ️ Zkus to znovu! To je jedna z taktik, ale není jediná.

- [x] Vše výše uvedené

> ℹ️ Správně! Podvodníci se vydávají za autority, tlačí na čas a vyvolávají FOMO. Všechno proto, aby ti zabránili v jasném uvažování.

# Bezpečnost na sociálních sítích

Podvodníci se rádi ozývají na sociálních sítích a na Discordu krypto projektů. Konverzaci pak stáhnou do soukromých zpráv, aby si jich zkušenější členové nevšimli. Bav se na veřejnosti a ***nikdy*** nikomu nedávej `seed frázi` ani nepodepisuj nic z odkazu, který přišel v DM.

`Varovné signály` na sítích:

🚩 **Chyby v pravopisu a gramatice**: chybějící diakritika, divné formulace.

🚩 **FOMO**: „Nenech si to ujít!“

🚩 **Vydávání se za někoho jiného**: správce, podpora, Vitalik Buterin, Elon Musk.

🚩 **Zaručené výnosy**: v kryptu není zaručeno nic.

🚩 **Nevyžádané odkazy a nabídky**, *hlavně v soukromých zprávách*.

![](https://app.banklessacademy.com/images/web3-security/social-media-safety-a76a39f4.svg)

# Osvědčené postupy na sociálních sítích

Jak zůstat v bezpečí:

✅ Když ti někdo musí produkt nabízet v soukromé zprávě, nejspíš ho nechceš.

✅ Zkontroluj počet sledujících a členů projektu. Sám o sobě ale nezaručuje legitimitu, kvalitu ani stabilitu.

✅ Všechno si ověř z vnějšího zdroje, třeba z jiného oficiálního účtu projektu.

✅ Když máš pochybnosti, zeptej se uznávaných členů velké komunity, které věříš. A ptej se veřejně.

![](https://app.banklessacademy.com/images/web3-security/social-media-best-practices-48ad350f.svg)

# Podvodné tokeny a otrava adres

Objevují se ti v peněžence neznámé tokeny nebo NFT? `Podvodné tokeny` se rozesílají na tisíce peněženek najednou. Útočník doufá, že je někdo zkusí přeposlat nebo prodat a tím spustí škodlivý kód ukrytý v kontraktu tokenu, nebo že oběť naláká na `phishingový` web, který chce seed frázi či škodlivý podpis. Nejlepší reakce: vůbec s nimi nepracuj, nech je být nebo je v peněžence skryj.

Příbuzný trik je **otrava adres**. Podvodník pošle drobnou částku z adresy, která má stejné první a poslední znaky jako ta tvoje. Když si pak zkopíruješ adresu z historie transakcí, můžeš omylem chytit tu jeho.

Jak se bránit:

- Nekopíruj adresy z historie transakcí.
- Ověřuj víc než jen prvních a posledních pár znaků.
- Před velkým převodem pošli malou testovací částku.

![](https://app.banklessacademy.com/images/web3-security/scam-tokens-761d5f63.svg)

# Škodlivá schválení a slepé podepisování

Dnes lidé nejčastěji nepřicházejí o peníze kvůli ukradené seed frázi, ale kvůli podpisům, které rozdali. Phishingové sady „wallet drainer“ ti ukážou transakci nebo zprávu, která vypadá běžně, ale běžná není:

- **Škodlivá schválení**: jediná schvalovací transakce může dát kontraktu podvodníka neomezený `povolený limit tokenu` na tvoje tokeny nebo NFT.
- **Phishing podpisů**: schválení podpisem bez gasu (třeba Permit2) umí povolit převod tokenů. Žádná transakce k tomu není potřeba.
- **Vysátí přes delegaci**: novější funkce peněženek (EIP-7702) dovolí jedním podpisem nainstalovat kód na tvůj účet. Drainery toho zneužívají k automatickému vysávání peněženek.

Podepisovat něco, čemu nerozumíš, se říká **slepé podepisování**. Naletí na to i profesionálové: v únoru 2025 přišla burza Bybit zhruba o 1,5 miliardy dolarů, když schválila transakci s upraveným zobrazením.

Jak se bránit: zpomal, čti každou žádost o podpis, ber výzvy typu „ověř svoji peněženku“ jako nepřátelské a používej peněženku, která transakce před podpisem simuluje.

# Knowledge Check 5

Přijde ti soukromá zpráva: „Tvoje peněženka potřebuje migraci: připoj se na metamask-upgrade.app a podpisem ověř svoje aktiva.“ Web po tobě chce podpis schválení bez gasu. Co je na tom špatně?

- [ ] Nic. Podpisy jsou zdarma a nemůžou hýbat penězi.

> ℹ️ Zkus to znovu! Podpis schválení bez gasu umí povolit převod tokenů úplně sám.

- [ ] Nebezpečné je to, jen když zadáš i seed frázi.

> ℹ️ Zkus to znovu! Seed fráze potřeba není. Sám podpis může dát právo utrácet tvoje tokeny.

- [ ] Je to v pořádku, podpora píše lidem do soukromých zpráv.

> ℹ️ Zkus to znovu! Skutečná podpora ti nikdy nenapíše první. To je klasický varovný signál.

- [x] Je to phishing podpisu: podpis může vysát tvoje tokeny.

> ℹ️ Správně! Nevyžádaná zpráva, tlak na čas, podobná adresa webu a žádost o podpis. Tohle je wallet drainer.

# Hardwarové peněženky

Jak víš z lekce [Základy peněženek](https://app.banklessacademy.com/lessons/wallet-basics), `hardwarová peněženka` drží `soukromé klíče` na vyhrazeném zařízení, mimo počítač připojený k internetu. Peníze jsou tak mnohem bezpečnější: malware klíče nepřečte a zloděj by musel zařízení fyzicky ukrást a prolomit. Známé jsou Ledger, Trezor nebo Keystone. Kupuj vždy přímo od výrobce.

Hardwarovou peněženku můžeš používat i přes peněženku v prohlížeči, třeba MetaMask, a spojit tak pohodlí s hardwarovou bezpečností. Ledger k tomu [sepsal vlastní návod](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask).

Jedno omezení: hardwarová peněženka podepíše cokoli, co schválíš. Slepý podpis škodlivé transakce tě o peníze připraví i s ní. Před potvrzením si vždycky ověř detaily na displeji samotného zařízení.

![](https://app.banklessacademy.com/images/web3-security/hardware-wallets-22a096d4.svg)

# Knowledge Check 6

Pravda, nebo nepravda? Hardwarová peněženka udrží tvoje peníze v bezpečí jenom tehdy, když si každou transakci před schválením ověříš.

- [x] Pravda

> ℹ️ Správně! Hardwarová peněženka chrání klíče, ale peníze ochrání až to, že si ověříš, co podepisuješ.

- [ ] Nepravda

> ℹ️ Zkus to znovu! Hardwarová peněženka podepíše cokoli, co schválíš. Slepý podpis ji vysaje také.

# Strategie pro peněženky

Když už máš hardwarovou peněženku, další skvělá obrana je rozdělit peníze mezi víc `peněženek`. Tady je strategie se třemi oddělenými peněženkami:

1. **Sociální peněženka**: `horká peněženka` skoro bez peněz na přihlašování, mintování a zkoušení nových dApps. Počítej s tím, že o obsah můžeš přijít.
2. **Obchodní peněženka**: `horká peněženka` na obchodování a na peníze, které je občas potřeba rychle přesunout.
3. **HODL peněženka**: `hardwarová peněženka` na dlouhodobé držení, tedy na `HODL`. ***Nikdy*** z ní nechoď na chytré kontrakty ani na neznámé weby.

👍 **Výhody**: podvod ohrozí jenom peníze v *té jedné peněžence*, ne *všechno*.

👎 **Nevýhody**: hůř se to hlídá, ale peněženky si většinou jdou pojmenovat.

![](https://app.banklessacademy.com/images/web3-security/wallet-strategies-2b743061.svg)

# Knowledge Check 7

Pro vyšší bezpečnost doporučujeme držet peníze _______________.

- [ ] uložené ve více airdropech

> ℹ️ Zkus to znovu! Airdrop je rozdávání tokenů, ne místo pro uložení peněz.

- [ ] zamčené ve více NFT

> ℹ️ Zkus to znovu! NFT jsou samy o sobě aktiva, ne bezpečnostní strategie pro tvoje peníze.

- [x] rozdělené mezi více peněženek

> ℹ️ Správně! Když peníze rozdělíš mezi oddělené peněženky, podvod ohrozí jenom to, co je v jedné z nich.

- [ ] likvidní na více adresách

> ℹ️ Zkus to znovu! O likviditu tady nejde. Škodu z podvodu omezí rozdělení peněz mezi různé peněženky.

# Jak se vzpamatovat z podvodů ve Web2

Snad se ti podvodník zatím vyhnul. Pokud ne, existuje pár kroků, kterými účty zase zabezpečíš.

U podvodu na službě Web2, třeba na Gmailu nebo Discordu:

- Změň heslo u zasaženého účtu.
- Kde to jde, použij tlačítko „odhlásit všude jinde“ a vyhoď podvodníky ze svého účtu.
- Zapni `2FA`: ideálně passkey nebo hardwarový bezpečnostní klíč, jinak autentizační aplikaci.
- Nahlas podvod dané službě.
- Zkontroluj, že je v bezpečí i tvůj e-mailový účet.
- Mluv o podvodu s přáteli nebo s důvěryhodnými členy komunity.

# Jak se vzpamatovat z podvodů ve Web3

Kontrakty musí na Ethereu dostat výslovné svolení utrácet tokeny. `Povolený limit` udává, kolik smí konkrétní kontrakt z peněženky utratit. Nízké limity snižují riziko pro tvoje aktiva.

Ve Web3 není nikdo, kdo protokoly řídí a komu by šlo podvodníky nahlásit. Přesto se dá jednat:

- Okamžitě přesuň peníze, které v napadené peněžence zůstaly, na jinou adresu. **Nová adresa musí mít jinou seed frázi**.
- Projdi a zruš svoje `povolené limity` přes [revoke.cash](https://revoke.cash) (funguje na spoustě sítí) nebo [etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker). Rušení stojí gas. Revoke.cash má i [návod krok za krokem](https://revoke.cash/learn/approvals/how-to-revoke-token-approvals).
- Na revoke.cash zkontroluj také záložku „Delegations“, jestli tam není delegace peněženky, kterou nepoznáváš. Odstraníš ji přímo v aplikaci peněženky.
- Do budoucna používej `hardwarovou peněženku` a ověřuj všechno, co podepisuješ.
- Varuj ostatní: nahlas podvod zasažené komunitě.
- Mluv o průběhu podvodu s přáteli nebo s důvěryhodnými členy komunity a hledej, jak se příště chránit.
