---
TITLE: Zarządzanie limitami wydatków tokenów
DESCRIPTION: Chroń portfel przed niechcianymi interakcjami z inteligentnymi kontraktami.
LANGUAGE: Polski
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
## Najważniejsze wnioski

> * Limity wydatków tokenów to pozwolenia, dzięki którym `inteligentne kontrakty` mogą wydawać tokeny z portfela bez kolejnego zatwierdzenia.
>
> * Mogą zostać wykorzystane przez złośliwych aktorów, jeśli użytkownik nie wie, że takie pozwolenia obowiązują.
>
> * Narzędzia takie jak Revoke.cash pozwalają łatwo sprawdzać i cofać limity wydatków tokenów.

## Wprowadzenie

DeFi daje użytkownikom kontrolę nad aktywami, w tym nad `kluczami prywatnymi`, a więc niespotykaną suwerenność i władzę nad środkami. Wielka moc to jednak jeszcze większa odpowiedzialność: bezpieczeństwo aktywów i zarządzanie nimi spoczywa w całości na tobie.

Są cztery częste kategorie oszustw, o których użytkownicy DeFi powinni wiedzieć:

* **Przejęcie frazy seed**: atakujący próbują nakłonić użytkowników do ujawnienia frazy seed, co daje im nieuprawniony dostęp do środków. Mając twoją frazę seed, atakujący opróżni portfel i będzie to robił dalej, gdy wpłacisz kolejne środki. Niestety nie da się z tego wyjść, a jedyne rozwiązanie to utworzyć zupełnie nowy portfel z nową `frazą seed`.

* **Bezpośrednie przelewy ETH**: oszuści potrafią ukryć przelew ETH pod wywołaniem funkcji, na przykład „Security Update”. Surowa metoda podpisu, na której opierały się starsze wersje tego oszustwa, została usunięta z MetaMask; nowoczesne zestawy phishingowe nadużywają za to zwyczajnie wyglądających próśb o podpis, licząc, że podpiszesz bez czytania tego, co pokazuje portfel. Po takim oszustwie środków nie odzyskasz, ale portfela możesz nadal bezpiecznie używać do innych transakcji.

* **Oferty na rynkach NFT**: uważaj na fałszywe oferty i złośliwe kontrakty, które wykorzystują limity przyznane rynkom takim jak OpenSea. Oszuści mogą nakłonić cię do podpisania wiadomości `off-chain`, która wystawia zatwierdzone `NFT` na sprzedaż, bez żadnej transakcji na tokenach.

* **Limity wydatków tokenów**: atakujący mogą manipulować pozwoleniami, aby sięgnąć po więcej środków, niż początkowo zatwierdzono. „Approvals” to transakcje on-chain, które dają dostęp do twoich tokenów lub NFT. „Permits” dają ten sam dostęp, ale wymagają tylko bezgazowego podpisu off-chain. Uniswap i większość nowoczesnych aplikacji handlowych korzysta z tego systemu (nazywa się Permit2). Podpisy typu permit nie pojawiają się jako zatwierdzenia on-chain, dopóki nie zostaną użyte, i mogą mieć daty ważności; widok „Signatures” w Revoke.cash pozwala je sprawdzić i anulować.

  Wraz z popularnością inteligentnych kontraktów `limity wydatków tokena` stały się potrzebne, aby zaufane kontrakty mogły wykonywać transakcje bez ujawniania kluczy prywatnych. Limity wydatków pozwalają aplikacjom dApp automatycznie przenosić tokeny w twoim portfelu w twoim imieniu. Ta wygoda podnosi efektywność, ale wystawia też użytkowników na wektory ataku przez oszustwa i nieuprawniony dostęp.

W tym artykule omówimy „limity wydatków tokenów” i przedstawimy narzędzie społeczności, które pomaga zarządzać pozwoleniami.

## Limity wydatków tokenów: zrozumieć, zarządzać, zabezpieczyć

Limity wydatków tokenów to pozwolenia dawane z góry inteligentnym kontraktom na wydawanie tokenów z portfela. Odgrywają kluczową rolę: dzięki nim transakcje nie wymagają osobnej zgody za każdym razem, gdy aktywa mają opuścić portfel. Źle użyte stają się jednak wektorem ataku na nieświadomych. Dlatego użytkownicy DeFi powinni zachować ostrożność, poznać krajobraz bezpieczeństwa i zrozumieć, jak limity wydatków naprawdę działają.

Przyznanie pozwoleń kontraktowi zewnętrznemu ma dwa kroki:

1. Połączenie portfela: łącząc portfel z aplikacją dApp, po prostu udostępniasz jej front-endowi swój `adres` portfela, dzięki czemu może pokazać twoje salda i aktywność. Samo połączenie nie daje żadnych pozwoleń on-chain.

2. Zatwierdzenie tokena: aby wykonać transakcję w tej aplikacji dApp, zatwierdzasz jej inteligentnemu kontraktowi przenoszenie konkretnych tokenów w twoim imieniu. To ten krok daje realne prawo do wydawania.

Aktywnie zarządzając limitami wydatków tokenów, masz pewność, że żaden kontrakt nie pobierze z portfela więcej, niż zostało określone. Na szczęście istnieją narzędzia społeczności, które dają użytkownikom DeFi pewność i spokój.

## Krok po kroku: korzystanie z Revoke.cash

[Revoke.cash](https://revoke.cash/) pozwala łatwo zarządzać limitami wydatków tokenów przez prostą stronę, która pomaga sprawdzać i monitorować limity przyznane różnym aplikacjom dApp. Zobaczmy krok po kroku, jak używać tego potężnego narzędzia społeczności, aby chronić aktywa i odzyskać kontrolę nad portfelem.

**1\. Połącz portfel**:

Aby zacząć cofanie limitów wydatków tokenów, wejdź na [Revoke.cash](http://revoke.cash/) i kliknij „Connect Wallet” w prawym górnym rogu. Możesz też ręcznie wpisać publiczny adres portfela w pasku wyszukiwania. Po wczytaniu zobaczysz listę wszystkich swoich `zatwierdzeń tokenów` w tej sieci.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Sprawdź swoje limity**:

Po połączeniu portfela możesz przejrzeć istniejące zatwierdzenia. Da się je sortować, filtrować i wyszukiwać po adresie uprawnionego wydającego. Sortowanie „Newest to Oldest” przydaje się zwłaszcza wtedy, gdy podejrzewasz niedawne złośliwe zatwierdzenie. Skorzystaj z dostępnych opcji sortowania i filtrowania, aby zobaczyć całość przyznanych limitów wydatków tokenów. Limity przyznaje się osobno na każdym łańcuchu, więc użyj wyboru sieci i powtórz przegląd w każdej sieci, z której korzystasz.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Cofnij niechciane limity:**

Gdy znajdziesz zatwierdzenia do cofnięcia, po prostu kliknij przycisk „Revoke” obok każdego z nich. Możesz też zmienić zatwierdzenie na inną kwotę, klikając ikonę ołówka przy zatwierdzonej kwocie, jeśli zatwierdzenie nadal będzie ci potrzebne, ale chcesz zmniejszyć ryzyko.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Warto cofnąć lub zmienić limit wydatków tokena, gdy:

1. Niedawno wdrożony inteligentny kontrakt zostaje zaatakowany i tworzy lukę w `zdecentralizowanej giełdzie`, z której regularnie korzystasz.

   W kwietniu 2023 roku popularna giełda `DEX` SushiSwap padła ofiarą podobnego exploita, w którym użytkownicy stracili \~3,5 mln USD. Poszkodowani pozostawali zagrożeni, dopóki nie cofnęli limitu wydatków tokena.

2. Złośliwa propozycja zarządzania aktualizuje kilka kontraktów z zamiarem opróżnienia środków użytkowników.

   Ponad 2,5 mln USD w aktywach przepadło, gdy Atlantis Loans, protokół `DeFi` na łańcuchu BNB, wykonał propozycję zarządzania wymierzoną w kilka kontraktów. Użytkownicy, którzy pilnowali limitu zatwierdzeń, ograniczyli ryzyko całkowitego opróżnienia portfeli przez tę złośliwą propozycję.

## Nie zapomnij o delegacjach

Od aktualizacji Pectra w Ethereum (maj 2025) limity wydatków to nie jedyne pozwolenia warte przeglądu. Nowsza funkcja portfeli (EIP-7702) pozwala portfelowi delegować do dodatkowego kodu, co daje wygody takie jak łączenie transakcji w paczki, ale też nową sztuczkę drenującą: jeden złośliwy podpis może zainstalować kod „zamiatarki”, który natychmiast przekazuje atakującemu wszystko, co wpłacisz, bez ujawnienia frazy seed. W 2025 roku badacze z Wintermute stwierdzili, że ponad 97% wczesnych delegacji portfeli wskazywało na identyczny kod zamiatarki.

Revoke.cash pokazuje aktywne delegacje w zakładce „Delegations”, ale ponieważ delegacjami steruje twój portfel, a nie aplikacje dApp, niechcianą delegację cofasz z poziomu samego portfela. W MetaMask otwórz szczegóły konta i przełącz konto z powrotem na standardowe. Jeśli przejście na `inteligentne konto` nigdy nie było twoim wyborem, traktuj każdą znalezioną delegację jako wrogą.

---

Czas wzmocnić obronę portfela! Mamy nadzieję, że ten wpis z Poradnika Odkrywcy, „Zarządzanie limitami wydatków tokenów”, przypadł ci do gustu.

Nie zapomnij go zebrać, jeśli chcesz mieć własny egzemplarz pod ręką w podróży albo wesprzeć przyszłe treści Bankless Academy. Szerokiej drogi, Odkrywco!

---

## FAQ

### Kiedy używać Revoke.cash?

Używaj Revoke.cash regularnie, zwłaszcza w okresach, gdy nie korzystasz aktywnie z danej aplikacji dApp, a szczególnie w przypadku rynków NFT. Ograniczanie zatwierdzeń zmniejsza ryzyko utraty środków przez włamania, exploity i phishing. Sortując zatwierdzenia od najnowszych, wyłapiesz te podejrzane i szybko je cofniesz, ograniczając dalsze szkody.

### Czy rozłączenie portfela chroni przed exploitami zatwierdzeń?

Rozłączenie portfela od aplikacji dApp nie chroni przed exploitami, ani tymi na zatwierdzeniach, ani żadnymi innymi. Zatwierdzenia tokenów przyznane wcześniej pozostają aktywne także po rozłączeniu, bo są zapisane on-chain.

### Jak unikać exploitów limitów wydatków i podobnych ryzyk?

Proaktywne podejście do limitów wydatków tokenów to:

* przyznawanie limitów tylko zaufanym aplikacjom dApp.

* okresowy przegląd limitów wydatków tokenów.

* usuwanie zbędnych i podejrzanych limitów.

* sprawdzanie, czy nie ma nieznanych delegacji portfela.

* śledzenie aktualizacji bezpieczeństwa aplikacji dApp.

Rozważ też narzędzia zewnętrzne, jak [rozszerzenie przeglądarki](https://revoke.cash) Revoke.cash: to działanie zapobiegawcze wobec możliwych zagrożeń. Rozszerzenie ostrzega, gdy masz podpisać coś potencjalnie szkodliwego, i chroni cię przed phishingiem oraz innymi złośliwymi działaniami.

### Czy mogę odzyskać środki przez Revoke.cash?

Niestety Revoke.cash nie odzyska skradzionych środków. To narzędzie zapobiegawcze, które zmniejsza szansę na padnięcie ofiarą exploita zatwierdzeń. Cofnięcie zatwierdzeń użytych do kradzieży może jednak powstrzymać dalsze straty.

### Dlaczego portfel jest opróżniany za każdym razem, gdy go zasilę?

W twoim portfelu może siedzieć „bot zamiatarka”, skrypt, który obserwuje przejęty portfel i błyskawicznie wyprowadza każdą nową wpłatę, zanim zdążysz zareagować. Jedną z przyczyn jest przejęta fraza seed. Wtedy cofanie zatwierdzeń nie pomoże: porzuć ten portfel i utwórz nowy. Równie prawdopodobna jest jednak złośliwa delegacja portfela, czyli kod zamiatarki zainstalowany przez podpis, do którego cię podpuszczono, bez wycieku frazy seed. Sprawdź zakładkę „Delegations” w Revoke.cash. Jeśli znajdziesz nieznaną delegację, cofnij ją z poziomu portfela (na przykład przez szczegóły konta w MetaMask). Jeśli delegacji nie ma, a opróżnianie trwa, załóż, że fraza seed jest przejęta, i przenieś się na nowy portfel.

---

**Autor**

**[Marcus](https://twitter.com/estmcmxci)** wydaje newsletter ENS DAO. Bada, jak nadwyżkowe przychody z opłat protokołu mogą finansować rozwój warstwy aplikacji i innej infrastruktury open source.

**Redaktorzy**

**[Tetranome](https://twitter.com/Tetranome)** jest Project Championem w Bankless Academy i zajmuje się doświadczeniem użytkownika, interfejsem, designem oraz treściami.

**[Trewkat](https://twitter.com/trewkat)** jest pisarką i redaktorką w BanklessDAO. Interesuje się krypto i NFT, a szczególnie tym, jak najlepiej przekazywać tę wiedzę innym.

**Patron**

Ten niesponsorowany artykuł jest częścią twojej darmowej edukacji w Bankless Academy. Zbierz artykuł, aby wesprzeć przyszłe treści!
