---
TITLE: Agregatory DEX
DESCRIPTION: Zanurz się w agregatory DEX, płynność i świat giełd DeFi.
LANGUAGE: Polski
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

`Zdecentralizowane giełdy` (DEX-y) usuwają koszty pośredników i oszczędzają pieniądze Odkrywców przy handlu aktywami.

Czy wiesz, Odkrywco, że DeFi daje jeszcze więcej sposobów na oszczędzanie? `Agregatory DEX` przeszukują jednocześnie wszystkie możliwe wymiany na różnych platformach DEX i wykonują najlepszą trasę w jednym ruchu. Pomagają ugrać najlepszy kurs przy wymianie tokenów. Tak jak wyszukiwarki lotów znajdują najtańszy bilet, agregatory DEX wyciskają maksimum wartości z twojej wymiany.

W tej lekcji zobaczysz:

1. Jak DEX-y dzielą płynność i dlaczego pogarsza to kursy wymiany.
2. Jak agregatory DEX pozwalają przeglądać i używać wielu DEX-ów w jednym interfejsie.
3. Na ile sposobów jeden interfejs agregatora oszczędza Odkrywcom czas i pieniądze.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Jak płynność wpływa na ceny

Ilość tokena dostępna do handlu na jednym rynku to jego `płynność`. Od niej mocno zależy `wpływ na cenę` przy wymianach w DeFi: duży wpływ oznacza droższą wymianę, mały tańszą. Dlatego większość osób woli rynki o wyższej płynności.

Wyobraź sobie basen: im więcej wody (płynności), tym mniejsza _zmiana_ poziomu wody (wpływ na cenę), gdy ktoś do niego wskoczy albo z niego wyjdzie. Wielkość tego „kogoś” (czyli wymiany) też wpływa na _zmianę_ poziomu wody.

# Przykład wpływu płynności na ceny

Spójrzmy na przykład.

Wyobraź sobie token notowany na kilku DEX-ach naraz. Jeden ma głęboką pulę z większością `płynności` tego tokena, a drugi płytką, z niewielkim ułamkiem.

Gdy Odkrywca kupi tyle samo tokena z każdej puli, `wpływ na cenę` będzie większy w tej płytkiej. Ta sama wymiana zabiera z niej dużo większy procent płynności, więc mocniej rusza cenę i więcej kosztuje kupującego.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Uzupełnij luki: aby znaleźć najlepszą cenę, warto handlować na rynkach o ________ płynności, żeby mieć ________ wpływ na cenę wymiany.

- [ ] dobrej, maksymalny

> ℹ️ Spróbuj jeszcze raz! Maksymalny wpływ na cenę oznacza droższą, a nie tańszą wymianę.

- [x] wysokiej, niski

> ℹ️ Dobrze! Więcej płynności to mniejszy wpływ na cenę, tak jak większy basen mniej się kołysze.

- [ ] niskiej, dobry

> ℹ️ Spróbuj jeszcze raz! Niska płynność zwiększa wpływ na cenę i podnosi koszt wymiany.

- [ ] cienkiej, duży

> ℹ️ Spróbuj jeszcze raz! Cienka płynność daje duży wpływ na cenę, czyli dokładnie to, czego chcemy uniknąć.

# Słabość klasycznych DEX-ów: cienka płynność

DeFi rośnie, ale rodzi to problem dla użytkowników: im więcej DEX-ów powstaje, tym bardziej rozprasza się całkowita ilość każdego tokena. Nazywamy to cienką płynnością.

Wróćmy do basenu: gdy dostępna woda (`płynność`) rozlewa się na wiele basenów, w każdym z nich jest jej mniej niż w jednym dużym.

Na początku DeFi jeden lub dwa DEX-y trzymały większość płynności. W 2020 roku zaczęły o nią walczyć nowe giełdy: jedna z nich w kilka tygodni po starcie odciągnęła od Uniswapa ponad 1 miliard USD. Dziś płynność rozkłada się na setki DEX-ów w wielu blockchainach i sieciach `Layer 2`, przez co każda pula jest cieńsza.

Każda wymiana ma więc większy `wpływ na cenę` niż wtedy, gdy jeden DEX trzymał większość płynności ekosystemu. Bez nowych rozwiązań handel na pojedynczym DEX-ie kosztuje Odkrywców więcej.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Które dwa czynniki decydują o wpływie wymiany na cenę?

- [ ] Wybrany DEX i wielkość wymiany

> ℹ️ Spróbuj jeszcze raz! Sam DEX nie ma znaczenia. Liczy się płynność dostępna w puli.

- [ ] Wybrany token i wybrany DEX

> ℹ️ Spróbuj jeszcze raz! Ani token, ani marka DEX-a o tym nie decydują. Robią to płynność i wielkość wymiany.

- [x] Wielkość wymiany i dostępna płynność

> ℹ️ Dobrze! Jak w basenie: plusk zależy od tego, kto skacze i ile wody jest w środku.

- [ ] Dostępna płynność i wybrany token

> ℹ️ Spróbuj jeszcze raz! Płynność to jeden czynnik, ale drugim jest wielkość wymiany, a nie wybrany token.

# Łączenie płynności przez agregatory DEX

Aby zmniejszyć wpływ na cenę i oszczędzić pieniądze, potrzebna jest duża `płynność`. Agregatory DEX prowadzą wymianę przez wiele DEX-ów naraz: duża wymiana z portfela Odkrywcy dzieli się na wiele mniejszych, rozłożonych po różnych giełdach.

Agregatory potrafią też poprowadzić wymianę przez `token pośredni`, a nawet kilka, jeśli daje to lepszy wynik. To jak wyszukiwarka lotów, która proponuje dodatkową przesiadkę, bo tak wychodzi taniej. Optymalną `trasę wymiany` znajdują zaawansowane algorytmy, przeszukujące wszystkie możliwe ścieżki w danej chwili.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Trasowanie wymiany w agregatorach DEX oznacza, że:

- [ ] wymiany idą przez specjalne umowy z wybranymi DEX-ami

> ℹ️ Spróbuj jeszcze raz! Agregatory przeszukują wszystkie dostępne DEX-y algorytmicznie, bez żadnych umów.

- [ ] wymiany zawsze idą przez wiele DEX-ów

> ℹ️ Spróbuj jeszcze raz! Agregatory dzielą wymianę tylko wtedy, gdy to się opłaca. Czasem najlepszy jest jeden DEX.

- [ ] wymiany idą tylko przez ulubiony DEX użytkownika

> ℹ️ Spróbuj jeszcze raz! Trzymanie się jednej giełdy przeczy idei. Agregatory szukają najlepszej ceny na wielu DEX-ach.

- [x] wymiany mogą iść przez wiele DEX-ów i tokenów pośrednich

> ℹ️ Dobrze! Algorytmy sprawdzają wszystkie ścieżki, w tym „przesiadki” przez tokeny pośrednie, aby znaleźć najtańszą trasę.

# Jak liczy się koszt gazu na Ethereum

Zanim zobaczymy, jak agregatory obniżają opłaty sieciowe, przypomnijmy sobie, jak liczy się gaz. Te oszczędności liczą się najbardziej w sieci głównej Ethereum, gdzie opłaty bywają wysokie. W sieciach `Layer 2` to zwykle grosze.

Tak jak paliwo w samochodzie, `gaz` napędza uruchamianie kodu na Ethereum. Im więcej obliczeń, tym więcej gazu potrzebuje twój kod. Cenę gazu mierzy się w bardzo małych częściach ethera zwanych `gwei`, tak jak centy w dolarze. 1 gwei to jedna miliardowa ethera (1 gwei = 0,000000001 ETH).

Całkowity koszt gazu zależy od tego, ile gazu zużywa transakcja i ile kosztuje jednostka gazu w danej chwili. Wzór na cenę transakcji wygląda tak:
_Zużyty gaz * cena gazu = całkowity koszt gazu_

Przykład: gaz kosztuje 22 gwei za jednostkę, a transakcja zużywa 120 tysięcy jednostek:
_120 000 * 22 gwei = 2 640 000 gwei_ _**lub**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Jak agregatory obniżają koszt gazu

Dzielenie wymiany oznaczałoby wyższe opłaty, bo na łańcuchu dzieje się więcej. Zaawansowane agregatory wliczają jednak opłaty do obliczeń trasy. Symulują wymiany off-chain razem z kosztem `gazu`, aby znaleźć `trasy wymiany`, które zostawiają Odkrywcom najwięcej wartości.

Niektóre agregatory idą jeszcze dalej. 1inch, pionier agregacji DEX, pozwala dziś zawodowym wykonawcom konkurować o realizację twojej wymiany i samemu płacić za gaz (system Fusion). Użytkownik często nie płaci gazu w ogóle.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Który sposób NIE służy agregatorom DEX do obniżania kosztów transakcji?

- [ ] Symulowanie transakcji off-chain przed wykonaniem wymiany

> ℹ️ Spróbuj jeszcze raz! Agregatory symulują wymiany off-chain razem z kosztem gazu, aby znaleźć najlepszą trasę.

- [x] Proszenie DEX-ów o obniżenie opłat sieciowych

> ℹ️ Dobrze! Opłaty sieciowe ustala blockchain, a nie DEX-y. Nikt nie może po prostu poprosić o ich obniżenie.

- [ ] Uwzględnianie kosztu gazu przy wyborze trasy

> ℹ️ Spróbuj jeszcze raz! Zaawansowane agregatory wliczają opłaty do obliczeń trasy wymiany.

- [ ] Oddanie wymiany zawodowym wykonawcom płacącym gaz

> ℹ️ Spróbuj jeszcze raz! W systemach intencji, jak 1inch Fusion, wykonawcy pokrywają gaz za użytkownika.

# Meta-agregatory

Istnieją nawet meta-agregatory agregatorów DEX! Przeszukują konkurujące agregatory i podają użytkownikom najlepsze wyceny. Wbudowana wymiana w portfelach takich jak MetaMask zbiera oferty od wielu dostawców, w tym od agregatorów DEX jak 1inch, i dolicza własną prowizję.

Uwaga: `meta-agregator` jest wygodny, ale potrafi dołożyć koszty ponad opłaty sieciowe i podnieść cenę całej operacji. Odkrywco, sprawdzaj, czy wymiana nie wychodzi drożej, niż zakładasz.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-agregatory porównują wiele agregatorów DEX, aby znaleźć najlepsze ceny dla użytkowników.

- [x] Prawda

> ℹ️ Dobrze! Meta-agregatory przeszukują konkurujące agregatory DEX i podają użytkownikom najlepsze wyceny.

- [ ] Fałsz

> ℹ️ Spróbuj jeszcze raz! Przeszukiwanie wielu agregatorów DEX to właśnie zadanie meta-agregatorów.

# Jak unikać ataków kanapkowych

Wymieniając tokeny bezpośrednio na giełdach `DEX`, możesz stracić nawet tyle, ile wynosi twoja `tolerancja poślizgu`: boty ustawiają swoje wymiany tuż przed twoją i tuż po niej, aby ruszyć cenę. Te straty to `ataki kanapkowe`. W samym 2021 roku kosztowały użytkowników około 235 000 000 USD. Dziś większość codziennych wymian chroni `prywatny routing transakcji` i handel oparty na intencjach, ale niska tolerancja poślizgu wciąż się opłaca.

Na szczęście połączona płynność agregatorów DEX zmniejsza wpływ wymiany na cenę. Odkrywcy mogą trzymać niską tolerancję poślizgu i oszczędzać więcej niż przy handlu wprost na jednym DEX-ie.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Aby się chronić, trzymaj tolerancję poślizgu na poziomie:

- [x] niskim

> ℹ️ Dobrze! Niska tolerancja poślizgu ogranicza to, ile wartości atak kanapkowy wyciągnie z twojej wymiany.

- [ ] wysokim

> ℹ️ Spróbuj jeszcze raz! Wysoka tolerancja poślizgu pozwala atakom kanapkowym zabrać więcej wartości.

# Więcej ochrony przed kanapkami: handel OTC

Niektóre agregatory, jak 1inch, oferują usługi `OTC` (`obrót pozagiełdowy`), które w pełni chronią przed atakami kanapkowymi. Pozwalają handlować bezpośrednio z innymi użytkownikami zamiast przez `pule płynności` DeFi, co daje Odkrywcom kolejny sposób na oszczędzanie.

CoW Swap idzie inną drogą: podpisujesz zlecenie wymiany (`intencja`), a o jego realizację konkurują zawodowe `solvery`. Rozstrzyga `aukcja zbiorcza`, w której wygrywa najlepsza cena. Solver może nawet skojarzyć dwóch użytkowników wprost, więc ochrona przed kanapkami działa domyślnie.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Jakie narzędzia oszczędzania pieniędzy oferuje wiele agregatorów DEX?

- [ ] Prowadzenie wymian przez płynność wielu DEX-ów.

> ℹ️ Spróbuj jeszcze raz! Połączona płynność zmniejsza wpływ na cenę, ale to nie jedyny sposób na oszczędności.

- [ ] Handel OTC z pełną ochroną przed atakami kanapkowymi.

> ℹ️ Spróbuj jeszcze raz! To jeden ze sposobów na oszczędności, ale nie jedyny.

- [ ] Uwzględnianie kosztu gazu przy budowie najlepszych tras.

> ℹ️ Spróbuj jeszcze raz! To jeden ze sposobów na oszczędności, ale nie jedyny.

- [x] Wszystkie powyższe

> ℹ️ Dobrze! Agregatory łączą płynność, wliczają koszt gazu i oferują handel OTC, aby zostawić użytkownikom więcej wartości.
