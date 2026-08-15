---
TITLE: Podstawy blockchaina
DESCRIPTION: Poznaj podstawową architekturę technologii blockchain.
LANGUAGE: Polski
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

# Wprowadzenie

Technologia `blockchain` to rewolucyjny sposób przechowywania i śledzenia danych, które jednocześnie są dostępne dla każdego. Dane układają się w jedną publiczną listę wszystkich dotychczasowych transakcji: każdy może ją przeglądać, nikt nie może jej edytować. Ta lista to `rejestr` blockchaina.

Gdy poznasz warstwy blockchaina, zrozumiesz strukturę, którą pokazuje narzędzie o nazwie `eksplorator bloków`: **listę** bloków, **transakcje** w tych blokach i **szczegóły** każdej z nich. Zobacz to na żywo w serwisie [Etherscan](https://etherscan.io/), popularnym eksploratorze bloków dla Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Budowa blockchaina

Słowo blockchain bywa rzeczownikiem (blockchain Bitcoina) i przydawką (technologia blockchain). Tak czy inaczej, `blockchain` oznacza całą strukturę, na której zbudowane są kryptowaluty.

Patrząc od zewnątrz, blockchain ma 3 poziomy struktury:

1. Cały `blockchain` składa się z bloków połączonych po kolei
2. `Bloki` to zgrupowane razem transakcje
3. `Transakcje` to przelewy wartości lub polecenia dla programów między `adresami` w sieci

Te trzy poziomy tworzą kryptograficzny rejestr, czyli niezmienną historię wszystkich transakcji w sieci.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Blockchain to:

- [ ] Uporządkowane grupy transakcji zwane blokami

> ℹ️ Spróbuj jeszcze raz! Bloki to część struktury, ale nie jedyna poprawna odpowiedź.

- [ ] Wspólny zapis, który każdy widzi, a nikt nie edytuje

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna poprawna odpowiedź.

- [ ] Bloki połączone po kolei w łańcuch

> ℹ️ Spróbuj jeszcze raz! To opis łańcucha bloków, ale nie jedyna poprawna odpowiedź.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Blockchain to wspólny, nieedytowalny zapis transakcji pogrupowanych w bloki i połączonych po kolei.

# Przyjrzyjmy się rejestrowi

W zwykłych systemach pieniężnych ufamy stronom trzecim, na przykład bankom, że policzą, ile kto ma pieniędzy. Ale żeby być naprawdę Bankless, potrzebujemy systemu, w którym rejestrem nie zarządza jeden zaufany podmiot.

`Rejestr` to lista WSZYSTKICH transakcji, jakie kiedykolwiek wykonano na blockchainie, a w blockchainach `publicznych` widzi ją każdy. Wydzielone grupy transakcji z rejestru tworzą bloki, a bloki tworzą blockchain.

Gdy do rejestru dochodzą nowe transakcje, salda przy każdym `adresie` się aktualizują, a dawnych transakcji nie da się zmienić. To tak, jakby każdy mógł w dowolnej chwili obejrzeć pełną historię konta każdego z nas.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transakcje w rejestrze

Spójrzmy na przykładowe transakcje:

- Alicja wysyła 5 ETH do Boba
- Bob wysyła 2 ETH do Karola

Pojedyncza transakcja pokazuje *zmianę* liczby kryptowaluty na danym adresie, więc suma wszystkich transakcji TO JEST stan każdego adresu.

---

⇒ Alicja straciła 5 ETH

⇒ Bob zyskał łącznie 3 ETH (dostał 5, wysłał 2)

⇒ Karol zyskał 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Co jest prawdą o rejestrach publicznych blockchainów?

- [ ] Wszystkie transakcje są jawne, a dawne niezmienne

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Rejestr pokazuje, ile kryptowaluty ma każdy adres

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Rejestr rośnie wraz z nowymi transakcjami

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Rejestr jest jawny i niezmienny, pokazuje aktualne salda adresów i rośnie z każdą nową transakcją.

# Decentralizacja

Transakcje zapisane w rejestrze `blockchaina` są nie tylko niezmienne. Są też współdzielone i rozproszone w wielkiej sieci komputerów. Żeby żaden pojedynczy podmiot nie mógł zmienić danych, kopie rejestru leżą na wielu komputerach w sieci, zwanych `węzłami`.

To współdzielenie danych sprawia, że rejestr blockchaina jest `zdecentralizowany`. Żadna władza ani podmiot nie kontroluje danych. Blockchainy takie jak Ethereum są też `publiczne`, bo rejestr może obejrzeć każdy.

Na potrzeby tej lekcji zapamiętaj, że dane rejestru są współdzielone przez wiele komputerów tworzących sieć Ethereum.

# Knowledge Check 3

Co sprawia, że blockchain jest zdecentralizowany?

- [ ] Tylko jeden podmiot może pisać do blockchaina

> ℹ️ Spróbuj jeszcze raz! Kontrola jednego podmiotu to przeciwieństwo decentralizacji.

- [ ] Spełnia wymogi decentralizacji ustalone przez rząd

> ℹ️ Spróbuj jeszcze raz! Decentralizacja wynika z budowy sieci, a nie ze zgody rządu.

- [x] Rejestr leży na wielu komputerach i nikt nim nie rządzi

> ℹ️ Dobrze! Kopie rejestru na wielu węzłach sprawiają, że żaden pojedynczy podmiot nie zmieni danych.

- [ ] Rejestr leży na jednym bezpiecznym serwerze

> ℹ️ Spróbuj jeszcze raz! Jeden serwer to centralny punkt kontroli. Kopie rejestru leżą na wielu węzłach.

# Budowa bloku

Ważna cecha blockchainów: dane dawnych transakcji nie dają się zmienić po tym, jak trafią do bloku. Każdy blok ma bowiem unikalny `hash bloku`, czyli odcisk palca, który łączy bloki jeden po drugim. Nie da się zmienić dawnej transakcji bez zmiany tego odcisku i odcisku KAŻDEGO kolejnego bloku, bo każdy odcisk zależy od poprzedniego.

Każdy `blok` to więc po prostu grupa transakcji plus unikalny odcisk (`hash bloku`) wyliczony z zawartości bloku. Bloki są ze sobą splecione, bo każdy wskazuje odcisk poprzedniego i razem tworzą jeden **łańcuch** bloków.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Do czego służy hash bloku?

- [ ] Do zaszyfrowania danych bloku, żeby nikt ich nie czytał

> ℹ️ Spróbuj jeszcze raz! Dane bloku pozostają jawne. Hash to odcisk palca, nie szyfrowanie.

- [x] Do łączenia bloków i utrzymania niezmienności dawnych danych

> ℹ️ Dobrze! Każdy blok wskazuje odcisk poprzedniego, więc zmiana dawnych danych zepsułaby wszystkie kolejne bloki.

- [ ] Do pilnowania, by transakcje trafiały pod właściwy adres

> ℹ️ Spróbuj jeszcze raz! Za kierunek środków odpowiadają adresy. Hash bloku łączy bloki.

- [ ] Do utrzymania decentralizacji blockchaina

> ℹ️ Spróbuj jeszcze raz! Decentralizacja bierze się z rozproszenia rejestru po węzłach, nie z hasha bloku.

# Wewnątrz bloku

Pamiętaj: dane bloku to po prostu zebrane razem transakcje. Zaglądając do pojedynczego `bloku`, widzimy listę transakcji i dane o tym, kto ten blok utworzył.

Obie transakcje z wcześniejszego przykładu mogą trafić do jednego bloku albo rozłożyć się na kilka bloków w czasie. Niezależnie od tego, w którym bloku wylądują, wszystkie w końcu trafią do wspólnego rejestru.

- Alicja wysyła 5 ETH do Boba
- Bob wysyła 2 ETH do Karola

Pamiętaj też, że każdy blok musi wskazywać `hash bloku` poprzednika, żeby spiąć blockchain w całość.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Jakie informacje zawiera blok?

- [ ] Wszystkie informacje z poprzednich bloków

> ℹ️ Spróbuj jeszcze raz! Blok wskazuje tylko hash poprzednika. Nie kopiuje wszystkich dawnych danych.

- [ ] Cokolwiek, bo rozmiar bloku jest nieograniczony

> ℹ️ Spróbuj jeszcze raz! Blok to wydzielona grupa transakcji, a nie pojemnik bez dna.

- [x] Dane transakcji i odwołanie do poprzedniego bloku

> ℹ️ Dobrze! Blok to grupa transakcji plus hash poprzedniego bloku, który spina bloki w łańcuch.

- [ ] Wszystkie transakcje z ustalonego przedziału czasu

> ℹ️ Spróbuj jeszcze raz! Transakcje mogą trafić do jednego bloku albo rozłożyć się na kilka.

# Pojedyncze transakcje

Dane na każdym blockchainie to po prostu lista `transakcji`, czyli zapisów przepływu waluty między użytkownikami. Żeby transakcja była ważna, nadawca musi ją opatrzyć `podpisem cyfrowym`.

Właśnie to robisz, zatwierdzając transakcję w portfelu: podpisujesz ją cyfrowo i tym samym autoryzujesz. To cyfrowy odpowiednik podpisu na czeku, paragonie czy potwierdzeniu płatności kartą.

Transakcje bywają proste, jak wysłanie aktywów, albo bardziej złożone, jak wymiana aktywów czy wdrożenie kodu, który wykonuje się po wywołaniu. Taki kod to `inteligentne kontrakty`.

Na koniec: każda transakcja ma unikalny identyfikator, `hash transakcji`, którego nie ma żadna inna. Dzięki niemu łatwo wskazać konkretną transakcję i mieć pewność, że jej szczegóły się nie zmienią.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Dane na blockchainie to lista transakcji pogrupowanych w bloki. Taką transakcją może być:

- [x] Wysłanie lub odebranie aktywów krypto

> ℹ️ Dobrze! Transakcje zapisują przepływ waluty między użytkownikami, od prostych przelewów po interakcje z kontraktami.

- [ ] Zmiana rozmiaru bloku

> ℹ️ Spróbuj jeszcze raz! Rozmiaru bloku transakcja nie zmienia.

- [ ] Edycja dawnych danych blockchaina

> ℹ️ Spróbuj jeszcze raz! Dawnych danych blockchaina nie da się zmienić. To jego kluczowa cecha.

- [ ] Wszystkie powyższe

> ℹ️ Spróbuj jeszcze raz! Tylko jedna z powyższych to prawdziwa transakcja.

# Adresy użytkowników

`Adres` to publiczny identyfikator, który każdy może sprawdzić na blockchainie. Jak przy adresie e-mail, każdy może wysłać na niego środki, ale odblokować je i wydać może tylko ten, kto ma `klucz prywatny`.

W Ethereum adres zawsze zaczyna się od \_0x\_\_\_\_\_\_\_\_\_\_ i ma 42 znaki: cyfry i litery wyprowadzone z `klucza publicznego` tego adresu.

Oglądając pojedynczą transakcję w eksploratorze bloków, widzimy adresy From: i To:. Nie mówi to nam, jakie *osoby* kontrolują te adresy, ale pozwala każdemu śledzić ruch kryptowaluty w rejestrze blockchaina.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Co jest prawdą o adresach na blockchainie?

- [ ] To publiczne identyfikatory podmiotów na blockchainie

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] W Ethereum zawsze zaczynają się od 0x

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Środkami dysponuje ten, kto ma klucz prywatny

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Adresy to publiczne identyfikatory, w Ethereum zaczynają się od 0x, a środki odblokowuje klucz prywatny.
