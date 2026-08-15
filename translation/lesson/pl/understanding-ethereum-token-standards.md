---
TITLE: Zrozumieć standardy tokenów Ethereum
DESCRIPTION: Poznaj szablony aktywów Ethereum, które obsługują zarówno tradycyjne, jak i nowe klasy aktywów.
LANGUAGE: Polski
WRITERS: Musharraf, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards
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
## **Najważniejsze wnioski**

> * Standardy `tokenów` na Ethereum to z góry określone reguły i funkcje służące do wdrażania tokenów.
>
> * Najpopularniejsze standardy tokenów Ethereum to `ERC-20`, `ERC-721` i `ERC-1155`.
>
> * Każdy standard daje inny poziom `wymienialności`, co pozwala tworzyć zarówno pospolite, jak i unikatowe aktywa on-chain.
>
> * Standardy zapewniają tokenom interoperacyjność w całym ekosystemie Ethereum: dAppom łatwo dodać nowy token, a tobie łatwo z niego korzystać.

## Czym są standardy tokenów Ethereum?

Na Ethereum i w jego sieciach `Layer 2` żyją miliony różnych tokenów, każdy o innych właściwościach i zastosowaniach. Jak sieć ma zapewnić im płynną obsługę w całym ekosystemie dAppów, bez godzin pracy deweloperów nad każdym tokenem z osobna? I jak użytkownicy mają poznać kluczowe cechy tokena, nie przekopując się przez dokumentację?

Tu wkraczają standardy tokenów.

Te szablony i zestawy reguł zapewniają `interoperacyjność` tokenów w całym ekosystemie Ethereum. dAppy muszą obsłużyć tylko kilka wspólnych standardów, a nie tysiące pojedynczych tokenów. Odkrywcom takim jak ty wystarczy spojrzeć na standard tokena, aby wiedzieć, co ten token potrafi na Ethereum.

Standardy tokenów określają:

* Jak ma być napisany inteligentny kontrakt tokena.

* Wspólny zestaw funkcji, które musi obsługiwać każdy token tego typu, aby dowolny dApp umiał z nim pracować.

Obecnie na Ethereum powszechnie stosuje się trzy standardy tokenów:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: standard dla tokenów łatwo wymienialnych (fungible).

   Na przykład tokeny USDC i UNI.

2. **ERC-721**: standard dla tokenów unikatowych (niewymienialnych), znanych jako `NFT`.

   Na przykład NFT z kolekcji Bored Ape Yacht Club.

3. **ERC-1155**: standard obsługujący w jednym kontrakcie tokeny wymienialne i niewymienialne.

   Na przykład przedmioty w grze wideo Web3.

Pewnie zastanawiasz się teraz: „czym właściwie jest wymienialność?”.

Przyjrzyjmy się temu pojęciu z tradycyjnej ekonomii, aby zrozumieć jego wagę w ekosystemie Ethereum.

## Wymienialność a niewymienialność

**„Wymienialność”** to cecha aktywa lub dobra ekonomicznego, która oznacza dwie rzeczy:

* W obrocie jednostki aktywa można wymieniać jedna za drugą bez zmiany wartości.

  (1 USD można wymienić na inny 1 USD, na cztery monety 25¢ albo na dwadzieścia monet 5¢.)

* Po podzieleniu mniejsze części zachowują podstawowe cechy całości.

  (1 USD rozmieniony na cztery monety 25¢ nadal przechowuje wartość i pozwala robić zakupy.)

Przykłady aktywów wymienialnych to ropa, waluty fiat, obligacje skarbowe i akcje spółek. Takie nieunikatowe aktywa łatwo wymienić i podzielić.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Z kolei **„niewymienialność”** oznacza:

* Aktywo ma unikatowe cechy, które odróżniają je od innych i nadają mu własną wartość.

  (Obraz Van Gogha wyceniany jest inaczej niż płótno debiutującego artysty, ze względu na wygląd, rzadkość, poziom warsztatu i renomę autora.)

* Podział zmienia jego podstawowe cechy.

  (Obraz pocięty na cztery części daje fragmenty, które nie przypominają jeden drugiego, a każdy może mieć inną wartość. Znika też pierwotny zamysł dzieła.)

Przykłady aktywów niewymienialnych to nieruchomości, dzieła sztuki, tożsamości cyfrowe i certyfikaty. Przez swoje unikatowe cechy trudniej je wymienić i podzielić.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Gdy nie wiesz, czy coś jest wymienialne, zadaj sobie pytanie: „jak łatwo to wymienić i podzielić?”. Jeśli trudno, prawdopodobnie jest niewymienialne.

Ethereum chce zostać „warstwą rozliczeniową światowej gospodarki”. Obsługa aktywów wymienialnych i niewymienialnych pozwala przenieść tradycyjne klasy aktywów on-chain i tworzyć zupełnie nowe.

## Standardy i funkcje tokenów

Wdrażając nowy kontrakt tokena na Ethereum, twórca aktywa wybiera jeden z istniejących standardów. Ten nadaje tokenowi początkowe właściwości, zwane funkcjami: całkowitą podaż, możliwość przesyłania do innego portfela czy zakres przechowywanych informacji.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

ERC-20 korzysta na przykład z takich funkcji:

**1\. totalSupply**: określa całkowitą podaż tokena ERC-20.

Całkowita podaż mówi o ważnych cechach tokena, takich jak wartość i dystrybucja.

**2\. balanceOf**: sprawdza saldo tokenów pod wskazanym adresem.

Dzięki temu usługi i platformy sprawdzą saldo portfela, zanim wykonają zleconą transakcję.

**3\. transfer**: przesyła tokeny z twojego adresu na inne adresy.

Za każdym razem, gdy wysyłasz token z portfela do innego portfela, korzystasz z funkcji transfer.

**4\. approve**: pozwala adresowi (zwykle inteligentnemu kontraktowi) automatycznie działać w imieniu portfela do określonej kwoty.

Tą funkcją zezwalasz platformie lub usłudze na automatyczne użycie części środków i wykonywanie transakcji.

**5\. allowance**: zwraca kwotę, którą dany podmiot może wydać z portfela.

Platforma sprawdza nią, ile środków ma zatwierdzone i czy wykona transakcję bez twojego ręcznego podpisu.

Standaryzacja tworzenia tokenów daje ekosystemowi Ethereum `kompozycyjność`. Deweloper budujący [zdecentralizowaną giełdę (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) może obsłużyć każdy token zgodny z ERC-20, bo wszystkie zachowują się podobnie. Nie musi dodawać osobnej obsługi dla każdego tokena z listy.

Podobnie twórca rynku NFT musi tylko dostosować platformę do standardów ERC-721 i ERC-1155, aby obsłużyć wszystkie NFT powstałe na Ethereum.

Skoro znasz już standardy, wymienialność i funkcje, przyjrzyjmy się zastosowaniom trzech głównych standardów Ethereum.

### ERC-20: tokeny wymienialne

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) to standard, który określa zasady tworzenia kontraktów tokenów wymienialnych.

Token ERC-20 może być wszystkim, od `memecoina` po środek płatniczy na zdecentralizowanym rynku. Zwykle mieści się w jednej z czterech kategorii:

**1\. Token użytkowy**: pełni konkretną rolę w ekosystemie aplikacji lub platformy.

Przykład: Chainlink (LINK) służy do opłacania operatorów, którzy dostarczają inteligentnym kontraktom dane ze świata, na przykład ceny rynkowe.

**2\. Token zarządzania**: daje posiadaczom prawo głosu w decyzjach platformy.

Przykład: posiadacze Ethereum Name Service (ENS) głosują nad propozycjami zmian w protokole rejestru domen.

**3\. Stablecoin**: zaprojektowany tak, by trzymać stabilną wartość, zwykle równą dolarowi amerykańskiemu.

Przykłady: Tether (USDT), USD Coin (USDC) oraz nowsi gracze, jak USDS od Sky.

**4\. Token inwestycyjny**: reprezentuje własność aktywa bazowego, na przykład akcji spółki.

Przykład: tokenizowane fundusze inwestycyjne, jak fundusze rynku pieniężnego, które duzi zarządzający zaczęli emitować on-chain w 2024 roku.

Jeden token może należeć do kilku kategorii naraz. Token zarządzania bywa też użytkowy w ramach platformy.

Tokeny ERC-20 [kupisz łatwo na DEX-ie](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) takim jak Uniswap albo na `scentralizowanej giełdzie`, jak Binance czy Coinbase.

### ERC-721: tokeny niewymienialne

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) to standard określający zasady tworzenia i używania tokenów niewymienialnych na Ethereum. Gwarantuje, że każdy powstały NFT jest dowodliwie unikatowy.

Do czego służą tokeny ERC-721?

**1\. Własność aktywów**: tokeny ERC-721 często reprezentują własność unikatowych aktywów cyfrowych i rzeczywistych. Ten wpis z Podręcznika Odkrywcy ma 100 osobno numerowanych egzemplarzy, które można nie tylko przeczytać, ale i mieć na własność, jak książkę na cyfrowej półce. Możesz go `mintować` i zatrzymać, klikając złoty przycisk „Collect Entry” u góry. Tak samo działają „Datadisk Collectibles” od Bankless Academy.

**2\. Subskrypcje i członkostwa**: twórcy, artyści, kluby i firmy już wykorzystują NFT jako subskrypcje, bilety na wydarzenia i karty członkowskie. Dowodliwa unikatowość sprawia, że każdy egzemplarz ze stałej puli jest przypisany do jednej osoby.

**3\. Nagrody lojalnościowe**: Starbucks prowadził do marca 2024 roku program Odyssey, w którym uczestnicy wykonywali zadania i zdobywali NFT wymienialne na nagrody cyfrowe i rzeczywiste. Wiele innych marek oferuje NFT jako nagrodę lojalnościową, którą można wymienić albo sprzedać w dowolnym momencie.

**4\. Tożsamość i certyfikaty**: na tokenach ERC-721 można oprzeć tożsamości i certyfikaty odporne na podrobienie. Gdy twoja tożsamość cyfrowa lub dyplom to token ERC-721, łatwo udowodnisz swoje prawa, a podrobienie dokumentów staje się niemal niemożliwe.

Aby zdobyć token ERC-721, załóż konto na rynku NFT, takim jak [OpenSea](https://opensea.io/), i kup dowolny wystawiony NFT. Wcześniej przejdź lekcję [Bezpieczeństwo w Web3](https://app.banklessacademy.com/lessons/web3-security), aby uchronić się przed oszustwami na takich rynkach.

### ERC-1155: tokeny wymienialne i niewymienialne

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Nazywany zwykle `standardem wielotokenowym`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) łączy pomysły z ERC-20 i ERC-721: pozwala pisać kontrakty obsługujące jednocześnie tokeny wymienialne i niewymienialne. Dla użytkownika zmienia to niewiele, ale ułatwia optymalizację funkcji platformy. Przykład: jeden kontrakt z wymienialną walutą w grze i niewymienialnymi przedmiotami z tej samej gry.

Ten standard pozwala też tworzyć tokeny półwymienialne, czyli takie, które w jednych sytuacjach są wymienialne, a w innych nie. W kolekcji kart kolekcjonerskich wszystkie karty o tej samej rzadkości mogą być wymienne, a karty o różnym poziomie rzadkości już nie.

ERC-1155 obsługuje też transakcje zbiorcze, które wysyłają kilka rodzajów tokenów naraz i potrafią obniżyć koszt opłat za `gaz`.

---

Gratulacje za przejście przez ten obszerny wpis z Podręcznika Odkrywcy: „Zrozumieć standardy tokenów”.

Nie zapomnij odebrać tego wpisu, jeśli chcesz mieć własny egzemplarz pod ręką w podróży albo wesprzeć kolejne materiały Bankless Academy. Szerokiej drogi, Odkrywco!

---

## FAQ o standardach tokenów Ethereum

### Jak powstają standardy tokenów Ethereum?

Standardy zgłasza się i publikuje na Ethereum w procesie Ethereum Improvement Proposals (EIP). Nie ma głosowania: propozycja jest dopracowywana w publicznej dyskusji, a gdy społeczność szeroko uzna, że działa, redaktorzy finalizują ją jako standard Ethereum Request for Comment (ERC). Do nazwy standardu dokleja się numer EIP, na przykład ERC-20 czy ERC-721.

### Czy ether (ETH) podlega standardowi tokena?

Nie. ETH nazywamy „monetą”, a nie „tokenem”, bo ma własny [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics).

### Czy każdy może wypuścić token?

Tak. Ethereum to ekosystem niewymagający pozwoleń, więc każdy może wypuścić token wymienialny lub niewymienialny. Potrzebna jest jednak wiedza techniczna albo narzędzia typu no-code.

### Dwa tokeny mają tę samą nazwę. Jak poznać ten oficjalny?

Sprawdź adres kontraktu, z którego pochodzi token, i porównaj go z oficjalną dokumentacją projektu. Dzięki temu nie połączysz się ze złośliwym kontraktem, który mógłby opróżnić twój portfel.

### Czy poza ERC-20, 721 i 1155 są inne standardy tokenów?

Tak. Część jest szeroko stosowana, jak [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), wspólny standard dla tokenów, za którymi stoi `skarbiec` z depozytami zarabiającymi w DeFi. Nowsze standardy obejmują `inteligentne konta`, dzięki którym portfel uruchamia własny kod. Inne, jak [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) i [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), nigdy się nie przyjęły albo służą bardzo niszowym zastosowaniom.

---

**Autorzy**

**[Musharraf](https://x.com/musharrafff)** to współzałożyciel Unhashed. Pomaga projektom Web3 w strategii i tworzeniu treści.

**[Tetranome](https://twitter.com/Tetranome)** to Project Champion w Bankless Academy. Zajmuje się doświadczeniem użytkownika, interfejsem, designem i treścią.

**Redakcja**

**[Trewkat](https://twitter.com/trewkat)** to autorka i redaktorka w BanklessDAO. Interesuje się krypto i NFT, a szczególnie tym, jak najlepiej przekazywać tę wiedzę innym.

**Patron**

Ten artykuł nie ma sponsora i jest częścią bezpłatnej edukacji Bankless Academy. Odbierz go, aby wesprzeć kolejne materiały.
