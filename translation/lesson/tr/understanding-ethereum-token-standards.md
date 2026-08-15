---
TITLE: Ethereum Token Standartlarını Anlamak
DESCRIPTION: Ethereum’un varlık şablonlarının hem geleneksel hem yeni varlık sınıflarını nasıl desteklediğini öğren.
LANGUAGE: Türkçe
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
## **Önemli Noktalar**

> * Ethereum `token` standartları, Ethereum'da token yayınlamak için kullanılan önceden tanımlı kural ve işlevlerdir.
>
> * En popüler Ethereum token standartları `ERC-20`, `ERC-721` ve `ERC-1155`'tir.
>
> * Her standart farklı düzeyde `değiştirilebilirlik` sağlar; böylece hem sıradan hem benzersiz zincir üstü varlıklar oluşturulabilir.
>
> * Token standartları, Ethereum ekosisteminde tokenların birlikte çalışmasını sağlar; dApp'lerin yeni tokenları entegre etmesi ve senin bunlara erişmen çok kolaylaşır!

## Ethereum Token Standartları Nedir?

Ethereum ve `Layer 2` ağlarında, her biri farklı özelliklere ve kullanım alanlarına sahip milyonlarca kripto token var. Ağ, geliştiriciler her tokenı entegre etmek için saatler harcamadan dApp ekosisteminde sorunsuz token desteğini nasıl sağlayabilir? Bu tokenları kullananlar, saatlerce belge okumadan temel özelliklerini nasıl anlayabilir?

İşte token standartları burada devreye giriyor!

Bu şablonlar ve kural setleri, Ethereum ekosisteminde token `birlikte çalışabilirliği` sağlar. Yani dApp'lerin binlerce ayrı tokenı değil, sadece birkaç ortak token standardını desteklemesi yeterlidir. Senin gibi Kaşifler için bu şu demek: bir tokenın dayandığı standarda bakarak Ethereum genelindeki temel yeteneklerini anlayabilirsin.

Token standartları şunları belirler:

* Bir tokenın akıllı sözleşmesinin nasıl kodlanacağını.

* O türdeki her tokenın desteklemesi gereken ortak işlev setini; böylece her dApp onunla nasıl çalışacağını bilir.

Şu anda Ethereum'da yaygın kullanılan üç token standardı var:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: Kolayca değiştirilebilen (fungible) tokenlar için bir standart.

   örn. USDC ve UNI tokenları.

2. **ERC-721**: `NFT'ler` olarak bilinen benzersiz (non-fungible) tokenlar için bir standart.

   örn. Bored Ape Yacht Club NFT'leri.

3. **ERC-1155**: Aynı sözleşmede hem değiştirilebilir hem değiştirilemez tokenlar için kullanılan bir standart.

   örn. bir web3 video oyunundaki eşyalar.

Şimdi muhtemelen şunu soruyorsun: “Değiştirilebilirlik tam olarak nedir?”

Ethereum ekosistemindeki önemini anlamak için geleneksel ekonomiden gelen bu kavrama bakalım.

## Değiştirilebilirlik ve Değiştirilemezlik.

**‘Değiştirilebilirlik’**, bir ekonomik varlığın veya malın özelliğidir ve iki temel niteliği gösterir:

* Varlık alınıp satıldığında birimleri, değerinde hiçbir değişiklik olmadan birbirinin yerine geçebilir.

  (1 ABD doları, başka bir 1 ABD dolarıyla, dört adet 25 sentle veya yirmi adet 5 sentle değiştirilebilir.)

* Varlık bölündüğünde, küçük parçalar temel niteliklerini korur.

  (Dört adet 25 sente bölünen 1 ABD doları, hâlâ değer saklama aracı olarak işler veya alışverişte kullanılır.)

Değiştirilebilir varlıklara örnek: petrol, itibari para, devlet tahvilleri ve şirket hisseleri. Benzersiz olmayan bu varlıklar kolayca değiştirilip bölünebilir.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Buna karşılık **‘değiştirilemezlik’** şunları gösterir:

* Varlığın, onu benzerlerinden ayıran ve ona kendine özgü bir değer kazandıran benzersiz özellikleri vardır.

  (Van Gogh'un bir tuval tablosu, yükselen bir modern sanatçının tablosundan farklı fiyatlanır; görünüm, nadirlik, ustalık düzeyi ve tabloların arkasındaki itibar yüzünden.)

* Bölme işlemi temel niteliklerini etkiler.

  (Dört parçaya kesilen bir tablonun parçaları birbirine benzemez ve her parça farklı değerlenebilir. Tablonun ilk amacı da kaybolur.)

Değiştirilemez varlıklara örnek: gayrimenkul, sanat eserleri, dijital kimlikler ve sertifikalar. Bu varlıkların benzersiz özellikleri yüzünden değiştirilmesi ve bölünmesi daha zordur.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Değiştirilebilirlik konusunda kafan karışırsa kendine şunu sor: “Değiştirmesi ve bölmesi ne kadar kolay?” Zorsa, büyük ihtimalle değiştirilemezdir!

Ethereum, “dünya ekonomisinin mutabakat katmanı” olmayı hedefliyor. Değiştirilebilir ve değiştirilemez varlık işlevleri, geleneksel varlık sınıflarının zincir üstünde temsil edilmesine ve yenilerinin yaratılmasına kapı açıyor!

## Standartlar ve Token İşlevleri

Ethereum'da yeni bir token sözleşmesi yayınlarken varlığın yaratıcısı mevcut token standartlarından birini seçer. Bu seçim, ona başlangıç özellikleri (bunlara işlev deniyor) kazandırır: varlığın toplam arzı, başka bir cüzdana aktarılıp aktarılamayacağı ve hangi bilgileri tutabileceği gibi.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Örneğin ERC-20 şuna benzer işlevler kullanır:

**1\. totalSupply:** Bir ERC-20 tokenının toplam arzını tanımlar.

Bir tokenın toplam arzı, değeri ve dağılımı gibi önemli nitelikler hakkında bilgi verir.

**2\. balanceOf:** Belirtilen bir adresin token bakiyesini kontrol eder.

Bu, hizmet ve platformların talep ettiğin işlemi yapmadan önce cüzdanının bakiyesini kontrol etmesini sağlar.

**3\. transfer:** Tokenları senin adresinden başka adreslere aktarır.

Cüzdanından başka bir cüzdana her kripto token gönderdiğinde transfer işlevini kullanıyorsun.

**4\. approve:** Bir adresin (genelde bir akıllı sözleşmenin) belirtilen bir tutara kadar cüzdanın adına otomatik işlem yapmasına izin verir.

Bu işlevle bir platformun veya hizmetin, fonlarının belirlediğin kısmını otomatik olarak kullanmasını ve işlem yapmasını onaylayabilirsin.

**5\. allowance:** Bir harcayıcının bir cüzdandan işlem yapabileceği tutarı öğrenmek için kullanılır.

Bir platform bu işlevle, kullanmasına onay verdiğin toplam tutarı ve işlemi sen elle imzalamadan gerçekleştirip gerçekleştiremeyeceğini kontrol edebilir.

Token oluşturma sürecinin standartlaşması Ethereum ekosisteminde `birleştirilebilirlik` sağlar. Örneğin [merkeziyetsiz borsa (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) yapan bir geliştirici, ERC-20 standardını izleyen her tokene destek ekleyebilir; çünkü hepsi benzer şekilde davranır. Listelenen her token için ayrı ayrı destek yazması gerekmez.

Benzer şekilde, NFT pazar yeri yapan biri, Ethereum'da oluşturulmuş tüm NFT'leri desteklemek için platformunu sadece ERC-721 ve ERC-1155 standartlarına uyumlu hale getirir.

Token standartlarını, değiştirilebilirliği ve işlevleri anladığımıza göre, şimdi Ethereum'daki üç temel standardın kullanım alanlarına bakalım.

### ERC-20: Değiştirilebilir Tokenlar

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20), değiştirilebilir token sözleşmeleri oluşturmanın kurallarını tanımlayan bir token standardıdır.

ERC-20 tokenları bir `memecoin`den merkeziyetsiz bir pazar yerindeki ödeme aracına kadar her şey olabilir. Çoğu durumda şu dört kategoriden birine girerler:

**1\. Fayda tokenı:** Bir uygulama/platform ekosisteminde belirli bir işi görür.

Örnek: Chainlink (LINK), akıllı sözleşmelere piyasa fiyatları gibi gerçek dünya verilerini ileten operatörlere ödeme yapmak için kullanılır.

**2\. Yönetişim tokenı:** Sahiplerine bir platformun yönetişim kararlarında oy hakkı verir.

Örnek: Ethereum Name Service (ENS) sahipleri, alan adı kayıt protokolünü güncelleme önerilerinde oy kullanabilir.

**3\. Stablecoin:** Genelde ABD dolarına eşit, istikrarlı bir değeri korumak üzere tasarlanır.

Örnekler: Tether (USDT), USD Coin (USDC) ve Sky'ın USDS'i gibi daha yeni oyuncular.

**4\. Menkul kıymet tokenı:** Bir şirketin hisseleri gibi, dayanak bir varlıktaki mülkiyeti temsil eder.

Örnek: büyük varlık yöneticilerinin 2024'te zincir üstünde çıkarmaya başladığı para piyasası fonları gibi tokenleştirilmiş yatırım fonları.

Tek bir token birden fazla kategoriye girebilir. Örneğin bir yönetişim tokenının platform içinde belirli bir faydası da olabilir.

[ERC-20 tokenlarını bir DEX'te satın almak](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) çok kolaydır: Uniswap gibi bir DEX ya da Binance veya Coinbase gibi bir `merkezi borsa` kullanabilirsin.

### ERC-721: Değiştirilemez Tokenlar

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721), Ethereum kullanıcılarının değiştirilemez token oluşturması veya kullanması için kuralları tanımlayan bir standarttır. Oluşturulan her NFT'nin kanıtlanabilir biçimde benzersiz olmasını sağlar.

ERC-721 tokenlarının kullanım alanları neler?

**1\. Varlık mülkiyeti:** ERC-721 tokenları, benzersiz dijital ve gerçek dünya varlıklarının mülkiyetini temsil etmek için yaygın olarak kullanılır. Örneğin Kaşif El Kitabı'nın bu bölümünün, dijital kitaplığındaki bir kitap gibi tek tek numaralanmış 100 sürümü var (sadece okumak için değil, sahip olmak için). (Üstteki altın renkli ‘Collect Entry’ düğmesine basarak `mint` edip sahip olabilirsin.) Bankless Academy'nin ‘Datadisk Koleksiyonları’ da aynı şekilde çalışır.

**2\. Abonelikler ve üyelikler:** Yaratıcılar, sanatçılar, kulüpler ve şirketler NFT'leri abonelik, etkinlik bileti ve üyelik için şimdiden kullanıyor. NFT'lerin kanıtlanabilir benzersizliği, sabit arzın her bir biriminin tek bir kullanıcıya bağlanmasını sağlar.

**3\. Sadakat ödülleri:** Starbucks, Mart 2024'e kadar Odyssey adlı bir sadakat programı yürüttü; üyeler görevleri tamamlayarak dijital ve gerçek dünya ödülleriyle takas edebilecekleri NFT'ler kazanıyordu. Başka birçok marka da kullanıcıların istediği zaman kullanabileceği veya satabileceği bir sadakat ödülü olarak NFT sunuyor.

**4\. Kimlik ve sertifikalar:** ERC-721 tokenları, değiştirilemeyecek kimlikler ve sertifikalar oluşturmak için kullanılabilir. Dijital kimliğin veya sertifikaların birer ERC-721 tokenı olduğunda, sahipliğini kanıtlaman kolay, birinin belgelerini taklit edip kötüye kullanması ise neredeyse imkansız olur.

Bir ERC-721 tokenı edinmek için [OpenSea](https://opensea.io/) gibi bir NFT pazar yerinde hesap aç ve listelenen herhangi bir NFT'yi satın al. Pazar yeri dolandırıcılıklarından korunmak için [Web3 Güvenliği](https://app.banklessacademy.com/lessons/web3-security) dersimizi mutlaka al.

### ERC-1155: Değiştirilebilir ve Değiştirilemez Tokenlar

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Sık sık `çoklu token standardı` olarak anılan [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155), ERC-20 ve ERC-721 kavramlarını birleştirir ve geliştiricilerin hem değiştirilebilir hem değiştirilemez tokenları destekleyen sözleşmeler yazmasını sağlar. Bu, kullanıcı deneyiminde büyük bir fark yaratmaz ama platform özelliklerini optimize etmeye yardımcı olabilir. Örneğin, oyun içi değiştirilebilir bir para birimi ile oyun içi benzersiz varlıkları tek bir sözleşme altında yayınlamak.

Bu standart ayrıca yarı değiştirilebilir tokenların oluşturulmasına da izin verir: belirli koşullarda değiştirilebilir, belirli koşullarda değiştirilemez olan tokenlar. Örneğin bir takas kartı koleksiyonunda aynı nadirlikteki tüm kartlar değiştirilebilir (birbirinin yerine geçebilir) olabilirken, farklı nadirlik seviyelerindeki kartlar değiştirilemez (birbirinin yerine geçemez) olabilir.

ERC-1155 ayrıca birden çok token türünü tek seferde göndermek için toplu işlemlere imkan verir; bu da kullanıcıların `gas` maliyetini düşürebilir.

---

Kaşif El Kitabı'nın bu uzun bölümünü, ‘Token Standartlarını Anlamak’ı, sonuna kadar okuduğun için seni tebrik ederiz.

Yolculuklarında kolayca başvurabileceğin bir kopyaya sahip olmak ya da Bankless Academy'nin gelecekteki içeriklerini desteklemek istiyorsan bu bölümü koleksiyonuna eklemeyi unutma. İyi yolculuklar Kaşif!

---

## Ethereum Token Standardı SSS

### Ethereum token standartları nasıl oluşturulur?

Token standartları, Ethereum Improvement Proposals (EIP) adlı bir öneri süreciyle önerilir ve Ethereum'da yayımlanır. Oylama yoktur: öneri açık tartışmayla olgunlaştırılır ve topluluk genel olarak işe yaradığı konusunda hemfikir olduğunda editörler onu Ethereum Request for Comment (ERC) adlı bir standart olarak nihai hale getirir. Sonra EIP'nin sıra numarası eklenerek standardın adı tamamlanır; örneğin ERC-20 veya ERC-721.

### Ether (ETH) bir token standardını izler mi?

Hayır. Aslında ETH bir ‘token’ değil ‘coin’ olarak bilinir; yani kendi [blokzinciri](https://app.banklessacademy.com/lessons/blockchain-basics) vardır.

### Herkes token çıkarabilir mi?

Evet. Ethereum izinsiz bir ekosistemdir ve herkes değiştirilebilir ya da değiştirilemez token çıkarabilir. Ancak teknik bilgiye veya kod gerektirmeyen araçlara erişime ihtiyacın olur.

### İki tokenın adı aynıysa hangisinin resmi token olduğunu nasıl bilirim?

Orijinal tokenı belirlemek için, kullanmak istediğin tokenın yayınlandığı sözleşme adresini kontrol et ve projenin resmi belgeleriyle karşılaştır. Böylece cüzdanını boşaltabilecek kötü niyetli bir token sözleşmesiyle etkileşmemiş olursun.

### Ethereum'da ERC-20, 721 ve 1155 dışında başka token standartları var mı?

Evet. Bazıları yaygın kullanılır; örneğin [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), DeFi'de getiri kazanan mevduatları temsil eden `kasa` tokenları için ortak bir standarttır. Daha yeni standartlar `akıllı hesapları` da kapsar ve bir cüzdanın kendi kodunu çalıştırmasına izin verir. [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) ve [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948) gibi diğerleri ise hiç tutmadı ya da çok dar kullanım alanlarına hizmet ediyor.

---

**Yazarlar**

**[Musharraf](https://x.com/musharrafff)**, Unhashed'in kurucu ortağı. Web3 projelerine içerik stratejisi ve uygulaması konusunda yardım ediyor.

**[Tetranome](https://twitter.com/Tetranome)**, Bankless Academy'de Project Champion olarak kullanıcı deneyimi, arayüz, tasarım ve içerik üzerine çalışıyor.

**Editörler**

**[Trewkat](https://twitter.com/trewkat)**, BanklessDAO'da yazar ve editör. Kripto ve NFT'ler hakkında bilgi edinmeye, özellikle de bu bilgiyi başkalarına en iyi nasıl aktaracağına ilgi duyuyor.

**Destekçi**

Bu sponsorsuz makale, ücretsiz Bankless Academy eğitiminin bir parçası. Gelecekteki içerikleri desteklemek için makaleyi koleksiyonuna ekle!
