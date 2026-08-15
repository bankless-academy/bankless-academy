---
TITLE: Blokzincir Temelleri
DESCRIPTION: Blokzincir teknolojisinin temel mimarisini öğren.
LANGUAGE: Türkçe
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

# Giriş

`Blokzincir` teknolojisi, veriyi saklamanın ve takip etmenin devrimci bir yolu; üstelik bu veriyi herkesin erişimine açar. Veriyi, herkesin görebildiği ama düzenleyemediği tek bir herkese açık işlem listesinde düzenler. Bu herkese açık işlem listesine topluca blokzincir `defteri` denir.

Bir blokzincirin katmanlarını inceledikten sonra, `blok gezgini` denen blokzincir aracının gösterdiği yapıyı anlayacaksın: blokların **listesi**, bu blokların içindeki **işlemler** ve her bir işlemin **detayları**. Çalışırken görmek için Ethereum'un popüler blok gezgini [Etherscan](https://etherscan.io/)'i dene.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Blokzincirin Yapısı

Blokzincir kelimesi bir isim (Bitcoin blokzinciri) ya da bir sıfat (blokzincir teknolojisi) olarak kullanılabilir. Her iki durumda da `blokzincir`, kripto paraların üzerine kurulduğu yapının tamamını ifade eder.

Dışarıdan yakınlaştırdığımızda bir blokzincirde 3 yapı katmanı vardır:

1. Genel `blokzincir`, sırayla birbirine bağlanan bloklardan oluşur
2. `Bloklar`, bir araya getirilmiş işlem gruplarından oluşur
3. Bir `işlem`, ağdaki `adresler` arasında bir değer transferi ya da bir programa verilen talimattır

Bu üç katmanlı yapı bir araya gelerek kriptografik bir defter oluşturur: ağda gerçekleşen tüm işlemlerin değiştirilemez tarihi.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Blokzincir nedir?

- [ ] Blok denen düzenli işlem grupları

> ℹ️ Tekrar dene! Bloklar yapının bir parçası, ama tek doğru cevap değil.

- [ ] Herkesin görebildiği ama kimsenin düzenleyemediği ortak bir kayıt

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru cevap değil.

- [ ] Sırayla birbirine bağlanan bloklar

> ℹ️ Tekrar dene! Bu, blok zincirini anlatıyor ama tek doğru cevap değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Üçü de doğru: blokzincir, bloklar halinde gruplanmış ve sırayla bağlanmış, ortak ve değiştirilemez bir işlem kaydıdır.

# Defteri İncelemek

Alışıldık para sistemlerinde, kimin ne kadar parası olduğunu takip etmek için bankalar gibi üçüncü taraflara güveniriz. Ama gerçekten Bankless olmak için, defteri yönetsin diye tek bir kuruma güvenmemizi gerektirmeyen bir sistem istiyoruz.

`Defter`, bir blokzincirde şimdiye kadar yapılmış TÜM işlemlerin listesidir ve `herkese açık` blokzincirlerde onu herkes görebilir. Defterdeki ayrı işlem grupları, bir araya gelip blokzinciri oluşturan blokları meydana getirir.

Deftere yeni işlemler eklendiğinde her `adreste` tutulan bakiyeler güncellenir; geçmiş işlemler değiştirilemez. Bu, herkesin tüm zamanlara ait banka hesap geçmişine istediğin an bakabilmek gibidir.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Defterdeki İşlemler

Birkaç örnek işleme bakalım:

- Alice, Bob'a 5 ETH gönderir
- Bob, Charlie'ye 2 ETH gönderir

Tek tek işlemler her adresin kripto para miktarındaki _değişimi_ gösterir, yani tüm işlemlerin toplam sonucu her adresin sahip olduğu kripto para miktarıdır.

---

⇒ Alice 5 ETH kaybetti

⇒ Bob toplamda 3 ETH kazandı (5 aldı, 2 gönderdi)

⇒ Charlie 2 ETH kazandı

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Herkese açık blokzincir defterleri için aşağıdakilerden hangisi doğrudur?

- [ ] Tüm işlemler herkese açıktır ve geçmiş işlemler değiştirilemez

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade değil.

- [ ] Defter, her adresin şu an ne kadar kripto parası olduğunu takip eder

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade değil.

- [ ] Yeni işlemler eklendikçe defter büyür

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Defter herkese açıktır, değiştirilemez, adres bakiyelerini güncel tutar ve her yeni işlemle büyür.

# Merkeziyetsizlik

Bir `blokzincir` defterindeki işlemler yalnızca değiştirilemez değildir; aynı zamanda geniş bir bilgisayar ağına paylaştırılır ve dağıtılır. Tek bir kurumun veriyi değiştirme gücü olmasın diye, blokzincir defterinin kopyaları ağ boyunca `düğüm` denen birçok bilgisayarda saklanır.

Blokzincir defterini `merkeziyetsiz` yapan şey bu paylaşılan veridir. Veriyi tek bir otorite ya da kurum kontrol etmez. Ethereum gibi blokzincirler aynı zamanda `herkese açıktır`, çünkü defteri herkes görebilir.

Bu ders için şunu hatırlaman yeterli: defter verisi, Ethereum ağını çalıştıran birçok bilgisayar arasında paylaşılır.

# Knowledge Check 3

Bir blokzinciri merkeziyetsiz yapan nedir?

- [ ] Blokzincire yalnızca tek bir kurum yazabilir

> ℹ️ Tekrar dene! Tek bir kurumun kontrolü, merkeziyetsizliğin tam tersidir.

- [ ] Devletin belirlediği merkeziyetsizlik şartlarını karşılar

> ℹ️ Tekrar dene! Merkeziyetsizlik ağın tasarımından gelir, devlet onayından değil.

- [x] Defteri tek bir kurum kontrol etmez, birçok bilgisayarda durur

> ℹ️ Doğru! Defterin kopyalarını birçok düğümde tutmak, tek bir kurumun veriyi kontrol etmesini ya da değiştirmesini engeller.

- [ ] Defter tek bir güvenli sunucuda saklanır

> ℹ️ Tekrar dene! Tek bir sunucu merkezi bir kontrol noktası olurdu. Defterin kopyaları birçok düğümde saklanır.

# Blok Anatomisi

Blokzincirlerin önemli bir özelliği, geçmiş işlem verisinin bir bloka girdikten sonra değiştirilememesidir. Bunun nedeni, her blokun parmak izi gibi benzersiz bir `blok hash'i` olması ve blokların bununla art arda birbirine bağlanmasıdır. Kimse geçmiş işlemleri, o parmak izini ve ardından gelen HER blokun parmak izini değiştirmeden değiştiremez, çünkü her parmak izi bir öncekine dayanır.

Yani her `blok` basitçe bir işlem grubudur, artı blokun içeriğinden hesaplanan benzersiz bir parmak izi (`blok hash'i`). Bloklar birbirine zincirlenir, çünkü her biri bir önceki blokun benzersiz parmak izine atıf yapar ve tek bir bağlı blok**zinciri** oluşur.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Blok hash'inin amacı nedir?

- [ ] Blok verisini kimse okuyamasın diye şifrelemek

> ℹ️ Tekrar dene! Blok verisi herkese açık kalır. Hash bir parmak izidir, şifreleme değil.

- [x] Blokları birbirine bağlamak ve geçmiş veriyi değiştirilemez kılmak

> ℹ️ Doğru! Her blok bir öncekinin parmak izine atıf yapar, yani geçmişi değiştirmek sonraki tüm blokları bozar.

- [ ] İşlemlerin doğru adrese gitmesini sağlamak

> ℹ️ Tekrar dene! Paranın nereye gideceğini adresler belirler. Blok hash'i blokları birbirine bağlar.

- [ ] Blokzincirin merkeziyetsiz kalmasını sağlamak

> ℹ️ Tekrar dene! Merkeziyetsizlik, defterin birçok düğüme dağıtılmasından gelir, blok hash'inden değil.

# Blokun İçi

Unutma: `blok` verisi bir araya getirilmiş bir işlem grubundan ibarettir. Tek bir blokun içine baktığımızda bir işlem listesi ve bloku kimin oluşturduğuna dair birkaç veri görürüz.

Blokzincir defterini konuşurken verdiğimiz örnekteki iki işlem tek bir blokta gruplanabilir ya da zaman içinde birden fazla bloka dağılabilir. Ama hangi bloka girerlerse girsinler, sonunda hepsi genel blokzincir defterine eklenir.

- Alice, Bob'a 5 ETH gönderir
- Bob, Charlie'ye 2 ETH gönderir

Her blokun, blokzinciri birbirine bağlamak için bir önceki blokun `blok hash'ine` de atıf yapması gerektiğini hatırla.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Bir blokta hangi bilgiler bulunur?

- [ ] Önceki bloklardaki tüm bilgiler

> ℹ️ Tekrar dene! Bir blok yalnızca önceki blokun hash'ine atıf yapar. Tüm geçmiş veriyi kopyalamaz.

- [ ] Blok boyutu sınırsız olduğu için blokzincirle ilgili her şey

> ℹ️ Tekrar dene! Blok, sınırsız bir kap değil, ayrı bir işlem grubudur.

- [x] İşlem verisi ve önceki bloka bir atıf

> ℹ️ Doğru! Blok, bir işlem grubu artı blokları birbirine zincirleyen önceki blokun hash'idir.

- [ ] Belirli bir zaman aralığında oluşan tüm işlem verisi

> ℹ️ Tekrar dene! İşlemler tek bir blokta gruplanabilir ya da zaman içinde birden fazla bloka dağılabilir.

# Tek Tek İşlemler

Herhangi bir blokzincirdeki veri basitçe `işlemlerin` listesidir: kullanıcılar arasında hareket eden paranın kayıtları. Her işlemin geçerli olması için gönderenin `dijital imzası` ile imzalanması gerekir.

Bir işlemi cüzdanınla onaylarken yaptığın şey budur: işlemi yetkilendirmek için dijital imzanla imzalarsın. Bunu bir çeki, fişi ya da kredi kartı slipini fiziksel olarak imzalamanın dijital karşılığı gibi düşünebilirsin.

İşlemler kripto varlık göndermek gibi basit olabilir. Kripto varlık takas etmek ya da tetiklendiğinde çalışan özel kodlar (`akıllı sözleşmeler`) yerleştirmek gibi daha karmaşık da olabilir.

Son olarak, her işlemin başka hiçbir işlemde bulunmayan benzersiz bir dijital kimliği vardır: `işlem hash'i`. Bu, sonradan tek bir işleme kolayca atıf yapmayı sağlar ve o işlemin detaylarının sonradan değiştirilemeyeceğini garanti eder.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Blokzincirdeki veri, bloklar halinde gruplanmış basit bir işlem listesidir. Bu işlemlere örnek olarak şunlar verilebilir:

- [x] Kripto varlık göndermek ya da almak

> ℹ️ Doğru! İşlemler, basit transferlerden akıllı sözleşme etkileşimlerine kadar kullanıcılar arasındaki para hareketini kaydeder.

- [ ] Blokun boyutunu değiştirmek

> ℹ️ Tekrar dene! Blok boyutu, bir işlemin değiştirebileceği bir şey değildir.

- [ ] Geçmiş blokzincir verisini düzenlemek

> ℹ️ Tekrar dene! Geçmiş blokzincir verisi değiştirilemez. Bu, blokzincirlerin temel özelliğidir.

- [ ] Yukarıdakilerin hepsi

> ℹ️ Tekrar dene! Yukarıdakilerden yalnızca biri geçerli bir blokzincir işlemidir.

# Kullanıcı Adresleri

`Adres`, herkesin blokzincirde arayabileceği herkese açık bir kimliktir. E-posta adresi gibi, herkes ona para gönderebilir ama o adresteki parayı yalnızca `özel anahtarı` elinde tutan kişi açıp kullanabilir.

Ethereum'da bir adres her zaman \_0x\_\_\_\_\_\_\_\_\_\_ ile başlar ve o adresin `genel anahtarından` türetilen 42 karakterlik rakam ve harften oluşur.

Bir blok gezgininde tek bir işleme baktığımızda From: ve To: adreslerini görebiliriz. Bu bize o adresleri kontrol eden _kişilerin_ kim olduğunu söylemez, ama herkesin kripto paranın blokzincir defteri boyunca hareketini takip etmesini sağlar.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Blokzincir adresleri hakkında ne doğrudur?

- [ ] Blokzincirdeki farklı tarafların herkese açık kimlikleridir

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade değil.

- [ ] Ethereum'da her zaman _0x_ ile başlarlar

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade değil.

- [ ] Özel anahtarı kontrol eden kişi o adresteki parayı kullanabilir

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Adresler herkese açık kimliklerdir, Ethereum'da 0x ile başlar ve içindeki para özel anahtarla açılır.
