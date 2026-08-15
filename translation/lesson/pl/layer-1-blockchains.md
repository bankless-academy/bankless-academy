---
TITLE: Blockchainy Layer 1
DESCRIPTION: Zrozum, jak działają blockchainy Layer 1, i poznaj ich ograniczenia!
LANGUAGE: Polski
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

Problemy pojawiają się wtedy, gdy sieć `blockchain` ma więcej chętnych, niż jest w stanie obsłużyć. Duży popyt na `przestrzeń blokową` bywa chwilowy albo trwa tak długo, jak długo ludzie chcą korzystać z blockchaina. Przy dużym popycie użytkownicy licytują między sobą, aby ich transakcje zostały przetworzone szybko. Opłaty rosną i wypychają osoby z mniejszym kapitałem.

Ta lekcja wyjaśnia, dlaczego `trylemat blockchaina` dotyczy Ethereum i innych sieci, dlaczego to on jest źródłem opisanych wyżej problemów i jak wpływa na plany Ethereum wobec potrzeb wszystkich użytkowników. Przyjrzymy się kompromisom, na jakie poszły różne blockchainy, i temu, co te kompromisy oznaczają dla Odkrywców Akademii.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Trylemat blockchaina

Jak podpowiada przedrostek **try**, blockchainy mają trzy cechy, które ze sobą konkurują. Nie da się zoptymalizować wszystkich trzech naraz.

Są to: `bezpieczeństwo`, `skalowalność` i `decentralizacja`.

Aby blockchain mógł być bezstronnym fundamentem systemu pieniężnego w skali globalnej, powinien być mocny we wszystkich trzech obszarach. System pieniężny musi być odporny na oszustwa, chroniony przed cenzurą dzięki decentralizacji i skalowalny na tyle, by obsłużyć ponad 8 miliardów ludzi.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Trylemat blockchaina opisuje zależność między:

- [ ] Ethereum, Bitcoinem i altcoinami

> ℹ️ Spróbuj jeszcze raz! Trylemat dotyczy cech konkurujących wewnątrz blockchaina, a nie konkurencji między blockchainami.

- [ ] bezpieczeństwem, cenzurą i oszustwem

> ℹ️ Spróbuj jeszcze raz! Bezpieczeństwo to jedna z trzech cech, ale cenzura i oszustwo to zagrożenia, przed którymi broni się blockchain.

- [x] decentralizacją, skalowalnością i bezpieczeństwem

> ℹ️ Dobrze! Te trzy cechy konkurują ze sobą, więc żaden blockchain nie zoptymalizuje wszystkich naraz.

- [ ] bezpieczeństwem, szybkością i niskimi opłatami

> ℹ️ Spróbuj jeszcze raz! Szybkość i opłaty należą do skalowalności, czyli tylko jednej z trzech cech.

# Bezpieczeństwo i konsensus

Bezpieczeństwo to najbardziej podstawowy wymóg publicznego blockchaina. Komputery w sieci muszą zgadzać się co do tego, jakie transakcje naprawdę się wydarzyły. Ta zgoda to `konsensus`. Blockchain jest bezpieczny, gdy atakujący nie potrafią jej zaburzyć. Algorytmy konsensusu są projektowane tak, by opierać się takim atakom.

Łańcuchy takie jak Bitcoin używają konsensusu `Proof of Work`: tworzenie bloków jest tam bardzo konkurencyjne, bo każdy producent bloków ściga się w rozwiązaniu zadania matematycznego. Pierwszy zdobywa prawo do utworzenia kolejnego bloku i `nagrodę za blok`. Przepisanie niedawnej historii łańcucha wymagałoby ogromnych nakładów mocy obliczeniowej i energii, więc atakujący wydałby więcej, niż zyskał.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Konsensus w sieciach kryptowalut:

- [ ] To proces, w którym węzły uzgadniają zdarzenia on-chain

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Jest ważny dla ekosystemu, bo zapobiega oszustwom

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Jest zabezpieczony bodźcami ekonomicznymi

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Konsensus to sposób, w jaki węzły uzgadniają prawdę, a bodźce ekonomiczne sprawiają, że atak kosztuje więcej, niż daje.

# Bezpieczeństwo i ataki

Jedną z form ataku na konsensus jest `atak 51%`: kto kontroluje większość mocy konsensusu w sieci, może cofnąć niedawne transakcje i wydać te same monety dwa razy albo cenzurować nowe. Nie podrobi jednak podpisów ani nie wyda cudzych środków. Ta większość to 51% mocy obliczeniowej w Proof of Work i 51% `stawki` w Proof of Stake, czyli ogromny kapitał. W Proof of Stake udowodnione oszustwo, na przykład podpisanie dwóch sprzecznych bloków, kończy się zniszczeniem stawki (to `slashing`), więc atakujący straciłby więcej, niż zyskał.

W konsensusie `Proof of Stake` producent bloku nie wygrywa go w rywalizacji, tylko jest losowany. Podobnie jak w Proof of Work algorytm konsensusu pilnuje, by żaden pojedynczy podmiot nie „wygrywał” regularnie prawa do tworzenia nowego `bloku`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Celem ataku 51% jest:

- [ ] Zakłócenie kopania

> ℹ️ Spróbuj jeszcze raz! Atak celuje w sam konsensus, czyli w cofanie lub cenzurowanie transakcji, a nie w górników.

- [x] Podwójne wydanie monet lub cenzura transakcji

> ℹ️ Dobrze! Większość mocy konsensusu pozwala cofnąć niedawne transakcje i wydać monety dwa razy albo zablokować nowe.

- [ ] Stworzenie nowej kryptowaluty

> ℹ️ Spróbuj jeszcze raz! Nową kryptowalutę można stworzyć bez atakowania istniejącej sieci.

- [ ] Wyeliminowanie pozostałych 49%

> ℹ️ Spróbuj jeszcze raz! Pozostali uczestnicy nie znikają. Większość służy do cofania lub cenzurowania transakcji.

# Skalowalność - przepustowość

`Skalowalność` to zdolność blockchaina do szybkiego przetwarzania wielu transakcji. Składają się na nią dwa elementy: przepustowość i finalność.

1) `Przepustowość transakcji`: ile transakcji blockchain przetwarza naraz, zwykle mierzone w transakcjach na sekundę (`TPS`).

Wyobraź sobie przystanek, na którym czeka tłum ludzi, a co minutę dochodzą kolejni. Autobus zabierze tylko część z nich. Żeby przystanek pustoszał szybciej, potrzeba większych autobusów (więcej miejsc) albo częstszych kursów (mniej czasu). Tak samo jest z transakcjami, które muszą zmieścić się w niewielkiej `przestrzeni blokowej` każdego bloku. Wizualizację z danymi na żywo zobaczysz na [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Co jest prawdą w analogii z przystankiem autobusowym?

- [ ] Ludzie (transakcje) są grupowani w autobusach (blokach)

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Każdy autobus (blok) mieści ograniczoną liczbę osób

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [ ] Więcej osób wymaga większych albo częstszych autobusów

> ℹ️ Spróbuj jeszcze raz! To prawda, ale nie jedyna.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Transakcje wypełniają ograniczoną przestrzeń blokową tak jak pasażerowie autobus. Szybsza obsługa wymaga większych lub częstszych bloków.

# Skalowalność - finalność

Drugi element skalowalności blockchaina to:

2) `Finalność`: kiedy możemy być rozsądnie pewni, że transakcja nie zostanie zmieniona ani cofnięta?

W łańcuchach Proof of Work, takich jak Bitcoin, finalność mierzy się w blokach: im więcej bloków dołączy do łańcucha po twojej transakcji, tym pewniej nie zostanie ona cofnięta. Bezpieczny algorytm konsensusu sprawia, że zmiana dawnych bloków jest bardzo kosztowna, a koszt rośnie z każdym blokiem wstecz. Bitcoin tworzy nowy `blok` mniej więcej co 10 minut, więc kilka potwierdzeń to około godziny. Proof of Stake w Ethereum działa inaczej: `walidatory` głosują nad finalizacją bloków i po około 13 minutach (dwie `epoki` głosowań) transakcja jest ostateczna.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Decentralizacja rozprasza władzę

`Decentralizacja` to ostatni filar trylematu: przeniesienie kontroli i decyzji z jednego podmiotu na rozproszoną sieć wielu uczestników. To ona sprawia, że blockchainy są `niewymagające pozwoleń` i `odporne na cenzurę`: każdy może z nich korzystać i każdy może na nich budować oprogramowanie.

Scentralizowane platformy, takie jak Facebook czy Twitter, mogą w każdej chwili wyłączyć dowolne konto. Wielu znanych streamerów zniknęło z Twitcha czy TikToka bez podania powodu. Odzyskanie konta bywa długie i bolesne. Bez decentralizacji `rejestr` blockchaina byłby zwykłym arkuszem w banku, a bankierzy decydowaliby, kto może założyć konto. Sieć `niewymagająca pozwoleń` oznacza, że władza jest wystarczająco rozproszona i nikomu nie da się odebrać dostępu.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Które zdanie o decentralizacji NIE jest prawdziwe?

- [ ] Decentralizacja czyni blockchainy odpornymi na cenzurę

> ℹ️ Spróbuj jeszcze raz! To prawda: bez jednego podmiotu kontrolującego nikt nie ocenzuruje sieci.

- [ ] Decentralizacja znosi konieczność pozwoleń

> ℹ️ Spróbuj jeszcze raz! To prawda: rozproszona władza sprawia, że nikomu nie można odebrać dostępu.

- [x] Decentralizacja pomaga władzom autorytarnym utrzymać kontrolę

> ℹ️ Dobrze! To nieprawda: decentralizacja działa odwrotnie, bo odbiera kontrolę pojedynczym podmiotom.

- [ ] Z systemów bez pozwoleń może korzystać każdy i wszędzie

> ℹ️ Spróbuj jeszcze raz! To prawda: brak pozwoleń oznacza, że nikomu nie odmówi się dostępu.

# Czy to jest zdecentralizowane?

Decentralizacja to nie odpowiedź „tak” albo „nie”. Czy 10 podmiotów kontrolujących to już decentralizacja? A 1000? Milion? Nie ma progu, od którego coś jest „wystarczająco zdecentralizowane”, więc lepiej myśleć o decentralizacji jak o skali. Między czernią a bielą jest wiele odcieni szarości.

Dlatego mówimy, że coś jest „bardziej lub mniej zdecentralizowane niż coś innego”, a nie „scentralizowane albo zdecentralizowane”. Neutralny system pieniężny potrzebuje wysokiego stopnia decentralizacji, żeby oprzeć się cenzurze na poziomie państwa. Nowsze blockchainy często wymieniają decentralizację na skalowalność, ale zostają wtedy podatne na te same naciski społeczne i rządowe, co platformy w pełni scentralizowane. Mogą skończyć na tej samej cenzurze, jaką widać w scentralizowanych mediach społecznościowych.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Różne blockchainy mają różny stopień decentralizacji.

- [x] Prawda

> ℹ️ Dobrze! Decentralizacja to skala, a każdy blockchain sam wybiera, ile jej odda za skalowalność lub inne cele.

- [ ] Fałsz

> ℹ️ Spróbuj jeszcze raz! Decentralizacja to skala, a każdy blockchain wybiera na niej własny kompromis.

# Kilka przykładów

Każdy blockchain podchodzi do trylematu inaczej i każdy zawarł kompromisy pasujące do jego celów. Bitcoin i Ethereum stawiają bezpieczeństwo i decentralizację ponad skalowalność, dlatego Bitcoin ma długi `czas do finalności`, a Ethereum ograniczoną `przestrzeń blokową`. Gdy popyt na `inteligentne kontrakty` rośnie, zwłaszcza w DeFi, opłaty w Ethereum idą w górę: w szczycie w 2021 roku jedna transakcja potrafiła kosztować dziesiątki dolarów.

Rosnące opłaty otworzyły drogę projektom takim jak BNB Chain, czyli `alternatywny Layer 1`, który postawił skalowalność ponad decentralizację, aby uzyskać większą `przepustowość transakcji` i tańsze opłaty. Łańcuchy trzeciej generacji, takie jak Solana, próbują nowych metod, ale wszystkie blockchainy wciąż podlegają tym samym ograniczeniom. Wybór każdego łańcucha definiuje jego ekosystem.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Co można z tym zrobić?

Skoro Ethereum postawiło na wysokie bezpieczeństwo i decentralizację, jak ma się skalować do potrzeb wszystkich użytkowników globalnej sieci finansowej? Mapa drogowa Ethereum rozważała dwie odpowiedzi: `Layer 2` i `sharding`.

`Layer 2` zwiększa skalowalność Ethereum bez uszczerbku dla dwóch pozostałych części trylematu. To dodatkowa warstwa nad główną siecią: bezpieczeństwo bierze z głównego łańcucha, a użytkownikom daje niższe opłaty i szybsze transakcje. Poznasz ją dokładniej w lekcji o Layer 2.

`Sharding` miał podzielić blockchain na wiele równoległych łańcuchów, jak dokładanie pasów do drogi. Ethereum odłożyło ten plan na rzecz prostszego: potanienia danych blokowych dla Layer 2 (wprowadzone w 2024 roku) i stopniowego zwiększania przepustowości, bez utraty bezpieczeństwa i decentralizacji.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Sieci Layer 2:

- [ ] Zapewniają własne bezpieczeństwo

> ℹ️ Spróbuj jeszcze raz! Layer 2 czerpie bezpieczeństwo z głównego blockchaina.

- [x] Zwiększają skalowalność głównego blockchaina

> ℹ️ Dobrze! Layer 2 działa nad głównym łańcuchem i dokłada skalowalność bez utraty bezpieczeństwa i decentralizacji.

- [ ] Podnoszą opłaty dla użytkowników

> ℹ️ Spróbuj jeszcze raz! Jest odwrotnie: użytkownicy płacą niższe opłaty.

- [ ] Wydłużają czas do finalności

> ℹ️ Spróbuj jeszcze raz! Layer 2 oferuje szybsze transakcje, nie wolniejsze.

# Przyszłość Ethereum

Ethereum wciąż rozwija skalowalność, nie rezygnując z pozostałych elementów trylematu. Przejście na konsensus `Proof of Stake` (The Merge, 2022) obniżyło zużycie energii sieci o ponad 99%, a tanie dane blokowe dla Layer 2 pojawiły się w 2024 roku. **Skalowanie to praca ciągła: każda aktualizacja czyni Ethereum szybszym i tańszym, a bezpieczeństwo i decentralizacja pozostają fundamentem.** Fundacja Ethereum prowadzi świetną stronę o [mapie drogowej Ethereum](https://ethereum.org/roadmap/).

Tymczasem wiele protokołów `Layer 2` buduje na Ethereum, aby zaspokoić popyt bez zmian w samym protokole Ethereum. Czerpią one zdecentralizowane bezpieczeństwo z Layer 1, a same dostarczają skalowalność. Różnorodność sieci Layer 2 tworzy zdecentralizowany ekosystem! Czołowe `rollupy` to Arbitrum, OP Mainnet i Base, a Polygon PoS to popularny `sidechain` z własnym bezpieczeństwem.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Aktualizacje Ethereum obejmują:

- [ ] Layer 2 i tańsze dane blokowe dla większej skalowalności

> ℹ️ Spróbuj jeszcze raz! To część aktualizacji, ale nie jedyna.

- [ ] Utrzymanie decentralizacji i bezpieczeństwa jako fundamentów

> ℹ️ Spróbuj jeszcze raz! To część aktualizacji, ale nie jedyna.

- [ ] Zmniejszenie zużycia energii dzięki Proof of Stake

> ℹ️ Spróbuj jeszcze raz! To część aktualizacji, ale nie jedyna.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Layer 2 i tańsze dane blokowe dodają skali, Proof of Stake obniżył zużycie energii, a bezpieczeństwo i decentralizacja pozostają fundamentem.

# Co to oznacza dla Odkrywców?

Niskie opłaty są potrzebne, aby poznawać tę technologię przy niskim progu wejścia i niewielkim koszcie pomyłek, zwłaszcza na początku drogi. Blockchain Ethereum nie jest jeszcze idealny, ale jego wartości czynią go jednym z najlepszych kandydatów do spełnienia marzenia o globalnym finansowym systemie obliczeniowym. Odkrywcy mogą uczyć się Ethereum bez ogromnych opłat: dzięki sieciom Layer 2 łączą bezpieczeństwo i decentralizację Ethereum z wyższą skalowalnością.

Następna lekcja wyjaśni rozwiązania `Layer 2` i pokaże, jak zacząć. Naprzód, Odkrywco!
