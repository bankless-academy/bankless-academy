---
TITLE: Zasilanie portfela na Layer 2
DESCRIPTION: Dowiedz się, jak zasilić portfel na L2 przez giełdy CEX, zewnętrzne onrampy i mosty.
LANGUAGE: Polski
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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

> * Portfel na rozwiązaniu skalującym Ethereum, takim jak Base, Optimism czy Arbitrum, zasilisz na kilka sposobów.
>
> * Giełdy scentralizowane często oferują bezpośredni `onramp` na Layer 2.
>
> * Zewnętrzne aplikacje płatnicze pozwalają zasilić portfel na Layer 2 z konta bankowego albo z karty debetowej lub kredytowej.
>
> * Mosty protokołów pozwalają wysyłać środki z `sieci głównej Ethereum` na Layer 2.

Jeśli dopiero zaczynasz z krypto, całe to gadanie o znaczeniu `Layer 2` (albo L2) brzmi pewnie dziwnie i myląco. W odróżnieniu od [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), czyli zwykle [sieci głównej Ethereum](https://ethereum.org/), Layer 2 to określona klasa rozwiązań skalujących Ethereum: dziedziczą jego bezpieczeństwo, a przy tym dają niskie opłaty za transakcje i szybkie trafianie do `bloku`. [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/) i [Base](https://www.base.org/) to właśnie rozwiązania Layer 2. Często dolicza się do nich [Polygon](https://polygon.technology/) (formalnie to `sidechain`, ale tutaj nie ma to znaczenia).

Każda transakcja na Ethereum wiąże się z opłatą. Ta opłata to `gaz`, wyceniany w `gwei`, maleńkiej jednostce ETH. Stawki rosną i spadają wraz z popytem: w szczycie 2021 roku prosta `wymiana tokenów` na Mainnecie potrafiła kosztować dziesiątki dolarów, a rozgrzane mintowanie NFT windowało je jeszcze wyżej. Dziś typowa transakcja na Mainnecie kosztuje znacznie mniej niż dolara, a to samo działanie na Layer 2 to grosze albo mniej.

Transakcje na Layer 2 potwierdzają się szybko i kosztują niewiele, więc wiele najciekawszych protokołów powstaje właśnie tam. Jeśli jednak nie siedzisz w ekosystemie od dawna, początek bywa nieoczywisty. Jest za to jasny punkt startu w podróży po rozwiązaniach skalujących Ethereum: zasilenie `portfela` na Layer 2.

Portfel na L2 zasilisz na trzy główne sposoby: przenosząc krypto ze `scentralizowanej giełdy` prosto do sieci Layer 2, korzystając z zewnętrznej usługi płatności kryptowalutowych albo wysyłając aktywa cyfrowe z Mainnetu na L2 przez protokół mostowy.

> Uwaga: potrzebujesz portfela kryptowalutowego, takiego jak [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/) czy [Taho](https://taho.xyz/), oraz `adresu` portfela Ethereum. Jeśli nie masz jeszcze `portfela niepowierniczego`, [zacznij od tej lekcji](https://app.banklessacademy.com/lessons/wallet-basics).
>
> Gdy masz już adres niepowierniczego portfela Ethereum, możesz ruszać w dalszą podróż po krypto.

## Zasilanie z giełd CEX

Zasilenie portfela prosto z giełdy scentralizowanej (CEX) to chyba najprostszy sposób na przeniesienie aktywów cyfrowych na L2, zwłaszcza gdy trzymasz już tam kryptowaluty. Większość dużych giełd to umożliwia, choć nie zawsze mówi o tym wprost.

Na przykład na [Coinbase](https://www.coinbase.com/) wyślesz środki prosto do sieci takich jak Optimism, Polygon czy Base (własny Layer 2 Coinbase) w kilku krokach:

1\. Wejdź na [Coinbase](https://www.coinbase.com/).

2\. [Kup](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) ETH na Coinbase lub miej je już na koncie.

3\. Wybierz „Send & Receive” u góry strony.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Wpisz kwotę w fiat lub w ETH (przełącznik fiat/krypto jest po prawej stronie pola), w „Pay with” wybierz Ethereum, a w polu „To” podaj adres portfela, na który trafią środki. Kliknij „Continue”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Na kolejnym ekranie kliknij „Network” i zmień sieć z Ethereum na Optimism (na liście są też inne sieci Layer 2, na przykład Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Sprawdź dane i jeśli wszystko się zgadza, kliknij „Send Now”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Większość dużych giełd pozwala wysłać krypto prosto na L2. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/) i [Kraken](https://www.kraken.com/) obsługują wypłaty na główne sieci Layer 2, w tym Base, Optimism i Arbitrum. Wskazówka: przed wysyłką sprawdź na giełdzie listę sieci wypłat, aby wiedzieć, które L2 są dostępne.

## Zewnętrzne onrampy

Inny prosty sposób na zasilenie portfela L2 to usługi firm płatniczych, które wysyłają środki prosto na L2. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/) i [Transak](https://global.transak.com/) to trzy najpopularniejsze opcje zasilenia portfela bez giełdy scentralizowanej.

Jak większość giełd, te zewnętrzne `onrampy` poproszą o dane w ramach procedury `poznaj swojego klienta`. Po przejściu tych formalności kupisz przez nie krypto w całym ekosystemie i przeniesiesz je na Layer 2.

W MoonPay kroki wyglądają tak:

1\. Wejdź na [MoonPay](https://www.moonpay.com/).

2\. Kliknij „Buy crypto” u góry lub na środku strony.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Wpisz kwotę w fiat i wybierz właściwą walutę.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Wybierz aktywo cyfrowe, tutaj ETH. Wpisz „ETH”, a zobaczysz sieci, w których można je kupić (być może trzeba przewinąć w dół). Wskaż sieć Layer 2, z której chcesz korzystać, i kliknij „Continue”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Następnie podasz dane do weryfikacji tożsamości i dane płatnicze.

6\. Na koniec wpisz adres portfela Ethereum. Serwis poprosi o potwierdzenie, że portfel jest bezpieczny.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Sprawdź, czy dane się zgadzają, i kliknij „Pay”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Podobnie jak giełdy, większość dużych onrampów wysyła środki prosto na L2. Korzystaj z tego, aby oszczędzać na opłatach za transakcje i śmielej zwiedzać `blockchain`.

## Zasilanie przez mosty

Jeśli masz już środki w `sieci głównej Ethereum`, najprościej przenieść je na L2 protokołem mostowym. Mostami nazywamy protokoły, które przerzucają nasze środki po kryptoświecie, a kilka z nich powstało właśnie po to, by przenosić krypto z sieci głównej Ethereum na sieci Layer 2.

### Mosty natywne

Mosty natywne budują same protokoły Layer 2. Na sieci typu `Optimistic Rollup`, jak Arbitrum, Optimism czy Base, wpłata dociera na L2 zwykle w kilka minut, ale powrót na Mainnet trwa około tygodnia. Tak działają [most Arbitrum](https://bridge.arbitrum.io/) i [most Optimism](https://app.optimism.io/bridge/): okres oczekiwania daje sieci czas na wychwycenie nieprawidłowych wypłat, zanim się rozliczą.

### Mosty zewnętrzne

Nikt nie lubi czekać, więc powstało wiele zewnętrznych mostów, które przenoszą środki na L2 i z powrotem niemal natychmiast. Do najpopularniejszych należą [Across Protocol](https://across.to/bridge) i [Relay](https://relay.link/bridge), a opłaty kilku protokołów porównasz na [Bungee](https://bungee.exchange/). Aby użyć Across, wystarczy:

1\. Wejść na most [Across Protocol](https://across.to/bridge) i połączyć portfel.

2\. Aby przenieść środki na L2, wybrać Ethereum w polu „From”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Wybrać aktywo i kwotę do przeniesienia (wskazówka: przenoś tylko natywną `monetę` danego blockchaina, tutaj ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Wskazać docelową sieć L2 w polu „To”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Sprawdzić transakcję i jeśli wszystko się zgadza, kliknąć „Send”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Przeniesienie środków z Mainnetu na L2 jest naprawdę takie proste, a niemal wszystkie mosty działają tak samo. Wybierasz blockchain źródłowy, cel taki jak Base czy Optimism, aktywo i kwotę, i przeskakujesz przez przepaść między sieciami. Wskazówka: podobnie jak przy wysyłce z giełdy, most zgodny z twoją siecią L2 znajdziesz na [L2BEAT](https://l2beat.com/bridges/summary).

## Droga na L2

Sieci Layer 2 pozwalają eksperymentować ze zdecentralizowanymi finansami niezależnie od doświadczenia, a na Mainnecie bywa to zbyt drogie. Transakcja kosztuje tu grosze (koszty porównasz [tutaj](https://www.growthepie.com/)), więc to świetne miejsce, aby poznać podstawowe klocki DeFi: wymiany, `pule płynności` czy `yield farmy`.

Przeniesienie środków na L2 z giełdy albo mostem to konieczny krok w drodze od nowicjusza do sprawnego użytkownika krypto. Pamiętaj: aby zobaczyć środki w portfelu, może być potrzebne dodanie sieci w ustawieniach portfela, co zrobisz na [Chainlist](https://chainlist.org/). Jeśli chcesz tylko sprawdzić, czy środki bezpiecznie dotarły, wpisz swój adres w `eksploratorze bloków`, takim jak [Blockscan](https://blockscan.com/), który przeszukuje wiele sieci naraz, albo wejdź na DEX, na przykład [Uniswap](https://app.uniswap.org/), wybierz sieć L2 i aktywo, aby zobaczyć saldo.

Im bardziej skalujesz swoje umiejętności, tym bardziej opłaca się skalować w dół opłaty za transakcje. Zasilenie portfela na L2 to pierwszy krok, a kolejne zależą już od ciebie. Witaj, Odkrywco, nowy świat czeka.

---

Ruszajmy, Layer 2 na Ethereum czeka. Mamy nadzieję, że podobał ci się ten wpis z Podręcznika Odkrywcy: „Zasilanie portfela na Layer 2”.

Nie zapomnij odebrać tego wpisu, jeśli chcesz mieć własny egzemplarz pod ręką w podróży albo wesprzeć kolejne materiały Bankless Academy. Szerokiej drogi, Odkrywco!

***

**Autor**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** to autor, redaktor i koordynator w BanklessDAO oraz redaktor naczelny Good Morning News. Współtworzy też organizację grantową DAOpunks.

**Redakcja**

**[Trewkat](https://twitter.com/trewkat)** to autorka i redaktorka w BanklessDAO. Chce wiedzieć o krypto i NFT jak najwięcej, a szczególnie interesuje ją, jak najlepiej przekazywać tę wiedzę innym.

**Patron**

Ten artykuł sfinansował **[Optimism](https://www.optimism.io/)**.
