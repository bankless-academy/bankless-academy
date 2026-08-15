---
TITLE: Blockchainy Layer 2
DESCRIPTION: Dołącz do ekosystemu Layer 2, aby przyspieszyć transakcje i obniżyć opłaty.
LANGUAGE: Polski
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

# Wprowadzenie

Każdy blockchain chce być jednocześnie jak najbardziej zdecentralizowany, bezpieczny i skalowalny. Zbudowanie sieci, która radzi sobie dobrze ze wszystkimi trzema, okazało się wyzwaniem wciąż nierozwiązanym. To wyzwanie ma nazwę: `trylemat blockchaina`.

Bitcoin i Ethereum są dość zdecentralizowane i bezpieczne, ale słabo się skalują. Widać to po wysokich opłatach i długich kolejkach transakcji, gdy sieć jest obciążona. Odkrywcy mogą to obejść dzięki technologiom, które mocno obniżają koszty i przyspieszają transakcje. Nazywamy je rozwiązaniami skalującymi Layer 2 (L2).

`Lightning Network` to najbardziej znane rozwiązanie skalujące Bitcoina. Stoją za nim `kanały płatności`, czyli technologia skalująca płatności między stronami. Ethereum łagodzi trylemat dzięki rozwiązaniom L2, wspieranym przez tani, tymczasowy zapis w `blobach`, dodany do Mainnetu w 2024 roku (to lekka wersja planowanego kiedyś „shardingu”).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Kanały płatności

W blockchainie Bitcoina Lightning Network opiera się na dwukierunkowych kanałach płatności, dzięki którym wiele stron wymienia BTC bez transakcji na głównym łańcuchu.

Dwaj użytkownicy otwierają między sobą kanał płatności. Każdy kanał łączy dokładnie dwie strony, ale płatności można kierować przez sieć połączonych kanałów do odbiorców położonych dalej. Od otwarcia do zamknięcia kanału strony przesuwają między sobą środki. Wpis w mikrorejestrze każdego uczestnika aktualizuje się po podpisaniu transakcji przez obie strony, co zwykle wymaga, aby węzły obu stron były dostępne.
Kanał może zamknąć w każdej chwili dowolna strona, ogłaszając w blockchainie najnowszą wersję mikrorejestru.

Kanały płatności nie obsługują zaawansowanych interakcji z `inteligentnymi kontraktami`, tylko podstawowe transakcje peer-to-peer.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Aby wykonać transakcję w Lightning Network, musisz być online.

- [x] Prawda

> ℹ️ Dobrze! Aktualizacja kanału wymaga podpisu obu stron, więc ich węzły muszą być zwykle dostępne.

- [ ] Fałsz

> ℹ️ Spróbuj jeszcze raz! Aktualizacja kanału wymaga podpisów obu stron, więc ich węzły muszą być zwykle online.

# Rozwiązania skalujące Ethereum

Deweloperzy Ethereum pracują nad natywnymi rozwiązaniami skalującymi niemal tak długo, jak długo działa ta sieć.

Większość społeczności Ethereum uważa, że „rozwiązanie skalujące Ethereum” musi poprawić `skalowalność` bez poświęcania `bezpieczeństwa` i `decentralizacji`. Dla użytkowników liczą się szybsze transakcje i tańszy `gaz` niż w sieci głównej Ethereum. Aby konkurować, niektóre rozwiązania idą w trylemacie na większe ustępstwa niż inne.

O sile Ethereum decydują inteligentne kontrakty, więc rozwiązania skalujące też muszą je obsługiwać. Szybkie i tanie transakcje nie mają sensu, jeśli z Layer 2 nie da się korzystać z ulubionych `dAppów`.

# Knowledge Check 2

Rozwiązania skalujące Ethereum:

- [ ] używają kanałów płatności do skalowania sieci.

> ℹ️ Spróbuj jeszcze raz! Kanały płatności to podejście Lightning Network. Ethereum skaluje się przez rozwiązania takie jak rollupy.

- [ ] nie obsługują inteligentnych kontraktów.

> ℹ️ Spróbuj jeszcze raz! Obsługa inteligentnych kontraktów jest kluczowa. Z Layer 2 trzeba mieć dostęp do ulubionych dAppów.

- [x] mają zwiększać skalowalność bez szkody dla reszty trylematu.

> ℹ️ Dobrze! Prawdziwe rozwiązanie skalujące poprawia skalowalność bez poświęcania bezpieczeństwa i decentralizacji.

- [ ] przyspieszają transakcje kosztem droższego gazu.

> ℹ️ Spróbuj jeszcze raz! Rozwiązania skalujące dają szybsze transakcje ORAZ tańszy gaz niż sieć główna Ethereum.

# Mosty między Layer 1 a Layer 2

Jak wiemy z lekcji [Podstawy blockchaina](https://app.banklessacademy.com/lessons/blockchain-basics), blockchainy to bazy danych zwane `rejestrami`: zapisują kryptograficznie zabezpieczoną, chronologiczną listę transakcji. Blockchainy L1 i rozwiązania skalujące L2 to osobne blockchainy, każdy z własną bazą adresów i danych.

Do przenoszenia informacji między bazami różnych blockchainów służą `mosty`. Wyobraź sobie sieć główną Ethereum (lub inny blockchain `L1`) jako jedną wyspę, a inny blockchain albo twoje rozwiązanie skalujące jako drugą. Most to ogólna nazwa autostrady łączącej te dwie cyfrowe wyspy.

Technologia jest bardzo złożona, ale z perspektywy użytkownika wystarczy wybrać cel podróży.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechainy

`Sidechain` to osobny blockchain działający niezależnie od Ethereum, ale połączony z siecią główną przez `most`. Aby przenieść tokeny, blokujesz je w kontrakcie mostu na Mainnecie, a na sidechainie powstają ich odpowiedniki. Uwaga: to NIE daje środkom bezpieczeństwa Ethereum, bo most i sidechain opierają się na własnych walidatorach sidechaina. Gdy któreś z nich padnie (jak w ataku na most Ronin w 2022 roku, 625 mln USD), zablokowane środki można ukraść.

Sidechainy nadal podlegają trylematowi blockchaina. Niższe opłaty za `gaz` i szybsze transakcje biorą się z mniejszego, ale mocniejszego zbioru walidatorów, który wymienia część decentralizacji i bezpieczeństwa na skalowalność.

Sidechainy takie jak Polygon PoS regularnie publikują na Ethereum migawki („checkpointy”). Dają one historii pewną formę finalności i pozwalają udowodnić saldo przy wyjściu przez most, ale nie czynią środków na sidechainie tak bezpiecznymi jak na Mainnecie.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechainy:

- [ ] blokują przeniesione tokeny w kontrakcie na Mainnecie.

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jest to jedyne prawdziwe zdanie.

- [ ] mają tańszy gaz niż Mainnet.

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jest to jedyne prawdziwe zdanie.

- [ ] niosą większe ryzyko centralizacji niż Mainnet.

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jest to jedyne prawdziwe zdanie.

- [x] Wszystkie powyższe.

> ℹ️ Dobrze! Sidechainy blokują tokeny na Mainnecie i mają tańsze opłaty, ale mniejszy zbiór walidatorów oddaje decentralizację za tę szybkość.

# Rollupy

Protokoły Layer 2 oparte na technologii rollup trzymają się bliżej poziomu bezpieczeństwa sieci głównej Ethereum.

Podobnie jak sidechainy, rollupy wykonują transakcje poza siecią główną Ethereum. Transakcje są potem „zwijane” w jedną paczkę, a jej dane trafiają na Ethereum w tanich, tymczasowych pakietach zwanych `blobami`, wprowadzonych w aktualizacji Dencun w marcu 2024 roku. To głównie dzięki nim typowe opłaty na L2 spadły do kilku centów lub mniej.

Aby rollup mógł przetwarzać transakcje w imieniu Mainnetu, musi dostarczyć „przekonujący dowód”, że transakcje w każdej paczce są bezpieczne i poprawne. Dowód trafia razem z paczką, a sprawdza go kontrakt mostu w sieci głównej Ethereum.

Dziś takie dowody dostarczają dwie metody: `Optimistic Rollupy` i `ZK Rollupy`. Przyjrzyjmy się obu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollupy

Za protokołami L2 takimi jak Optimism, Base i Arbitrum stoją `Optimistic Rollupy`. Nazwa bierze się stąd, że dane w paczce uznaje się za poprawne, dopóki ktoś nie udowodni czegoś innego. To optymistyczne założenie.

Aby ograniczyć nadużycia, wypłata środków z L2 na Mainnet trwa zwykle kilka dni. W tym czasie walidatory mostu mogą opublikować `dowód oszustwa` i anulować wypłatę. Mechanizm przypomina bankowe rozliczenia, tylko że jest zdecentralizowany.

Uwaga: zewnętrzne mosty, takie jak Across i Relay, przenoszą środki w minuty zamiast dni. Wykładają pieniądze z własnej puli, więc bierzesz na siebie ryzyko ich inteligentnych kontraktów i dostawców środków. To dodatkowa warstwa zaufania wobec własnego mostu rollupu.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

W Optimistic Rollupach transakcje uznaje się za poprawne, dopóki ktoś nie udowodni inaczej.

- [x] Prawda

> ℹ️ Dobrze! Zakłada się poprawność paczek, a w okresie sporu dowody oszustwa mogą anulować złe wypłaty.

- [ ] Fałsz

> ℹ️ Spróbuj jeszcze raz! Właśnie od tego optymistycznego założenia wzięła się ich nazwa.

# ZK Rollupy

`ZK Rollupy` to rollupy oparte na technologii zero-knowledge. W odróżnieniu od `Optimistic Rollupów` nie polegają na tym, że ktoś wyszuka ślady oszustwa. Zamiast tego składają matematyczny `dowód ważności`, dzięki któremu Ethereum sprawdza całą paczkę bez powtarzania obliczeń.

Ich główną zaletą jest `czas rozliczenia`, zwany też `finalnością transakcji`. Zamiast wielodniowego okresu sporu środki wracają na Mainnet zwykle w kilka godzin, gdy tylko pojawi się kolejny dowód ważności. Mimo nazwy technologia zero-knowledge nie służy tu prywatności: transakcje na dużych ZK Rollupach są tak samo jawne jak na Ethereum.

Na technologii ZK Rollup budują między innymi ZKsync, Starknet i Linea. To wciąż wczesny etap rozwoju, ale potencjał jest duży.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

W porównaniu z Optimistic Rollupami ZK Rollupy:

- [ ] ukrywają transakcje użytkowników na Mainnecie.

> ℹ️ Mimo nazwy „zero-knowledge” duże ZK Rollupy są tak samo jawne jak Ethereum: dowody służą ważności, nie prywatności.

- [x] używają dowodów ważności zamiast wielodniowego okresu sporu.

> ℹ️ Dobrze! Matematyczny dowód potwierdza każdą paczkę, więc finalność na Mainnecie nie wymaga czekania na okno sporu.

- [ ] polegają na obserwatorach zgłaszających dowody oszustwa.

> ℹ️ Tak działają Optimistic Rollupy. ZK Rollupy dowodzą ważności z góry.

# Zgodność dAppów między łańcuchami

Porównując `Optimistic Rollupy` i `ZK Rollupy`, większość użytkowników patrzy na czas wypłaty. Opóźnienia da się jednak obejść zewnętrznymi mostami, więc nie powinny decydować o wyborze rozwiązania.

Wiele Optimistic Rollupów jest „równoważnych z EVM”: obsługują natywnie każdy dApp, który działa na `Wirtualnej Maszynie Ethereum` (EVM). Dzięki temu można wdrożyć na nich dowolny kontrakt z Mainnetu, a użytkownicy L2 mają dostęp do ulubionych dAppów.

Sidechainy takie jak Polygon PoS też uruchamiają EVM natywnie, a większość nowoczesnych ZK Rollupów (ZKsync, Linea, Scroll) jest równoważna z EVM lub bardzo blisko. W efekcie ulubione dAppy z Ethereum działają w większości ekosystemu L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Rozwiązania równoważne z EVM łatwo ponownie wykorzystują kontrakty wdrożone na Mainnecie.

- [x] Prawda

> ℹ️ Dobrze! Równoważność z EVM oznacza, że każdy kontrakt z Mainnetu można wdrożyć na L2 razem ze znanymi dAppami.

- [ ] Fałsz

> ℹ️ Spróbuj jeszcze raz! Ponowne użycie kontraktów z Mainnetu to cały sens równoważności z EVM.

# Podsumowanie lekcji

Blockchainy L1 takie jak Bitcoin i Ethereum ogranicza dziś `trylemat blockchaina`. `Kanały płatności` w sieci Bitcoin oraz sidechainy i rollupy na Ethereum pomagają tym sieciom się skalować i łagodzą trylemat.

`Mosty` łączą blockchainy L1 z `sidechainami` i `rollupami`, a sposób działania kontraktu mostu wpływa na właściwości podłączonej sieci.

Środki na sidechainie nie dziedziczą `bezpieczeństwa` Ethereum: przeniesione tokeny leżą w kontrakcie na Mainnecie, ale ich los zależy od walidatorów i kontraktu mostu samego sidechaina. Te łańcuchy mają mały, lecz mocny zbiór walidatorów, dzięki czemu są szybsze i tańsze kosztem decentralizacji i bezpieczeństwa.

Rollupy, tak jak sidechainy, same weryfikują i przetwarzają transakcje, ale kontrakt mostu żąda od nich „przekonującego dowodu” poprawności, zanim dane zostaną uznane. Dzięki temu utrzymują poziom `bezpieczeństwa` i `decentralizacji` zgodny z wartościami Ethereum. Dowód dostarczają dwiema metodami. `Optimistic Rollupy` czekają kilka dni przed rozliczeniem na Mainnecie, a w tym czasie walidatory mostu wykrywają i zgłaszają oszustwa. `ZK Rollupy` dają matematyczną pewność co do transakcji dzięki technologii `zero-knowledge`.

Dziś zarówno Optimistic Rollupy, jak i nowoczesne ZK Rollupy są wysoko zgodne z kontraktami z sieci głównej Ethereum, więc dAppy łatwo się na nich wdrażają. Wielu uważa, że przyszłość należy do ZK Rollupów dzięki szybkiej finalności i mocnym gwarancjom ważności.

# Zacznij przygodę z Layer 2 na Optimism lub Base 🙂

Optimism i Base to Optimistic Rollupy równoważne z EVM i świetny start dla Odkrywców. Korzystanie z dAppów przypomina tam L1, tylko taniej i szybciej, a gazem w obu jest ETH. Nadchodzące zadanie to twój pierwszy krok na Optimism lub Base!

Oba ekosystemy mocno czerpią z wartości Ethereum. Optimism słynie z [finansowania dóbr publicznych](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY), które wzbogacają ekosystem, jak darmowa edukacja w Bankless Academy.

Optimism i Base to nie tylko platformy oparte na Optimistic Rollupach: pokazują, jak blockchainy rozwiązują realne problemy i otwierają nowe sposoby zawierania transakcji i współpracy. I to powinno nastrajać optymistycznie. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
