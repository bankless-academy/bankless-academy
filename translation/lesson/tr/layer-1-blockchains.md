---
TITLE: Layer 1 Blokzincirler
DESCRIPTION: Layer 1 blokzincirlerin nasıl çalıştığını ve sınırlarını öğren!
LANGUAGE: Türkçe
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

# Giriş

Bir `blokzincir` ağını, kaldırabileceğinden daha fazla kullanıcı kullanmak isteyince sorunlar başlar. `Blok alanına` talep geçici olabilir ya da kullanıcılar o blokzinciri kullanmayı çok istediği sürece devam edebilir. Talebin yüksek olduğu dönemlerde kullanıcılar işlemlerinin hızla işlenmesi için birbirlerine karşı teklif verir, ücretler yükselir ve sermayesi az olanlar dışarıda kalır.

Bu ders, Ethereum'un ve diğer blokzincirlerin neden `blokzincir trilemmasına` tabi olduğunu, trilemmanın yukarıdaki sorunların kökeninde nasıl yattığını ve Ethereum'un tüm kullanıcılarının ihtiyacını karşılama planlarını nasıl etkilediğini inceliyor. Birkaç blokzincirin trilemma karşısında yaptığı ödünleşimlere ve bunların Academy Kaşifleri için ne anlama geldiğine bakacağız.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Blokzincir Trilemması

**Tri**lemma kelimesinin ima ettiği gibi, blokzincirlerin birbiriyle yarışan ve üçünü aynı anda en iyi hale getirmeyi engelleyen üç niteliği vardır.

Bunlar: `güvenlik`, `ölçeklenebilirlik` ve `merkeziyetsizlik`.

Bir blokzincirin küresel ölçekte tarafsız bir parasal sistemin temeli olabilmesi için üçünde de üstün olması gerekir. Parasal bir sistem dolandırıcılığa karşı güvenli, merkeziyetsizlik sayesinde sansürcülerin saldırılarına kapalı ve 8 milyardan fazla insanın ihtiyacını karşılayacak kadar ölçeklenebilir olmalıdır.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Blokzincir trilemması şunlar arasındaki ilişkiyi anlatır:

- [ ] ethereum, bitcoin ve altcoinler

> ℹ️ Tekrar dene! Trilemma, rakip blokzincirlerle değil, bir blokzincirin içindeki rakip niteliklerle ilgilidir.

- [ ] güvenlik, sansür ve dolandırıcılık

> ℹ️ Tekrar dene! Güvenlik üçünden biri, ama sansür ve dolandırıcılık blokzincirlerin savunduğu tehditlerdir, trilemma nitelikleri değil.

- [x] merkeziyetsizlik, ölçeklenebilirlik ve güvenlik

> ℹ️ Doğru! Bu üç nitelik birbiriyle yarışır ve bir blokzincirin üçünü birden en iyi hale getirmesini engeller.

- [ ] güvenlik, hız ve düşük ücretler

> ℹ️ Tekrar dene! Hız ve ücretler, üç nitelikten yalnızca biri olan ölçeklenebilirlikle ilgilidir.

# Güvenlik ve Mutabakat

Güvenlik, herkese açık bir blokzincirin en temel gerekliliğidir. Bir ağdaki bilgisayarların birlikte çalışabilmesi için hangi işlemlerin gerçekten olduğu konusunda anlaşması gerekir; bu anlaşmaya `mutabakat` denir. Saldırganlar ağın bu gerçek üzerinde anlaşmasını bozamıyorsa blokzincir güvenlidir. Mutabakat algoritmaları bu saldırılara direnmek için tasarlanır.

Bitcoin gibi `Proof of Work` kullanan zincirler, blok üretimini son derece rekabetçi kılarak bu anlaşmayı korur; her blok üreticisi bir matematik problemini çözmek için yarışır. İlk çözen, sonraki bloku oluşturma hakkını ve beraberinde gelen parasal `blok ödülünü` kazanır. Zincirin yakın geçmişini yeniden yazmak devasa işlem gücü ve enerji yatırımı gerektirir, yani saldırgan büyük ihtimalle kazanacağından fazlasını harcar.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Kripto paralarda blokzincir mutabakatı:

- [ ] Düğümlerin zincir üstünde ne olduğunda anlaştığı süreçtir

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [ ] Dolandırıcılığı önlemek için tüm ekosistem için önemlidir

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [ ] Ekonomik teşviklerle güvence altına alınır

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Mutabakat, düğümlerin gerçek üzerinde anlaşma yoludur; ekonomik teşvikler de bu anlaşmaya saldırmayı kazancından pahalı kılar.

# Güvenlik ve Saldırılar

Blokzincir mutabakatına yönelik olası saldırılardan biri `%51 saldırısı`dır; bir ağın mutabakat gücünün çoğunluğunu elinde tutan saldırgan, aynı parayı iki kez harcamak için son işlemleri geri alabilir veya yeni işlemleri sansürleyebilir. İmza taklit edemez, başkasının parasını harcayamaz. Bu çoğunluk, Proof of Work'te işlem gücünün %51'i, Proof of Stake'te ise `stake'in` %51'i demektir; devasa bir sermaye yatırımı. Üstelik Proof of Stake'te birbiriyle çelişen iki bloku imzalamak gibi kanıtlanabilir hileler o stake'in yok edilmesine yol açar (buna `slashing` denir); saldırgan büyük ihtimalle kazanacağından fazlasını kaybeder.

`Proof of Stake` mutabakatında blok üreticisi rekabetle değil, rastgele seçilir. Proof of Work'te olduğu gibi mutabakat algoritması, tek bir tarafın yeni bir `blok` oluşturma hakkını sürekli “kazanmasını” engeller.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

%51 saldırısının nihai amacı:

- [ ] Madencilik işlemlerini aksatmak

> ℹ️ Tekrar dene! Saldırı doğrudan mutabakatı hedefler: işlemleri geri almak veya sansürlemek, madencileri aksatmak değil.

- [x] Aynı parayı iki kez harcamak veya işlemleri sansürlemek

> ℹ️ Doğru! Çoğunluk mutabakat gücü, saldırganın son işlemleri geri alıp parayı iki kez harcamasına ya da yenilerini engellemesine izin verir.

- [ ] Yeni bir kripto para yaratmak

> ℹ️ Tekrar dene! Herkes mevcut bir ağa saldırmadan yeni bir kripto para yaratabilir.

- [ ] Kalan %49'u yok etmek

> ℹ️ Tekrar dene! Diğer katılımcılar ortadan kaldırılmaz. Çoğunluk gücü işlemleri geri almak veya sansürlemek için kullanılır.

# Ölçeklenebilirlik - Kapasite

`Ölçeklenebilirlik`, bir blokzincirin çok sayıda işlemi hızlıca işleyebilme yeteneğidir. Bunu iki şey belirler: işlem kapasitesi ve kesinlik.

1) `Saniyedeki işlem sayısı` (`TPS`): Bir blokzincirin aynı anda kaç işlem işleyebildiğini gösterir.

Otobüs durağında bekleyen, her dakika sayısı artan bir kalabalık düşün; hepsi yola çıkmak istiyor. Ama otobüsle ancak belli sayıda kişi seyahat edebilir. Durağı daha hızlı boşaltmak için ya daha büyük otobüsler (daha çok kişi) ya da daha sık sefer (daha az bekleme) gerekir. Her blok için ayrılan küçük `blok alanına` çok sayıda işlem sığdırmaya çalışmak da aynı şekilde işler. Bunu canlı verilerle [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc) adresinde görebilirsin.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Blokzincir işlemleri için otobüs durağı benzetmesinde hangisi doğrudur?

- [ ] İnsanlar (işlemler) otobüslerde (bloklarda) gruplanır

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [ ] Her otobüse (bloka) sınırlı sayıda kişi (işlem) sığar

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [ ] Daha çok işlem için daha büyük veya daha sık otobüs (blok) gerekir

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! İşlemler, yolcuların otobüsleri doldurduğu gibi sınırlı blok alanını doldurur. Sırayı hızlı eritmek daha büyük veya daha sık blok ister.

# Ölçeklenebilirlik - Kesinlik

Blokzincir ölçeklenebilirliğinin ikinci yönü şudur:

2) `Kesinlik`: Bir işlemin değişmeyeceğinden veya geri alınmayacağından ne zaman makul ölçüde emin olabiliriz?

Bitcoin gibi Proof of Work zincirlerinde kesinlik blokla ölçülür: işleminden sonra zincire eklenen blok sayısı arttıkça geri alınmayacağından o kadar emin olursun. Unutma, güvenli bir mutabakat algoritması geçmiş blokları değiştirmeyi çok pahalı kılar ve ne kadar geriye gidilirse maliyet o kadar büyür. Bitcoin yaklaşık 10 dakikada bir yeni `blok` üretir, yani birkaç onay beklemek yaklaşık bir saat sürer. Ethereum'un Proof of Stake'i farklı bir yol izler: `doğrulayıcılar` blokları kesinleştirmek için oy verir ve yaklaşık 13 dakika (iki `epoch` oylaması) sonra işlem kesinleşir.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Merkeziyetsizlik gücü dağıtır

`Merkeziyetsizlik`, blokzincir trilemmasının son ayağıdır: kontrolün ve karar verme yetkisinin tek bir taraftan çok sayıda katılımcıya dağıtılması. Blokzincirlerin `izinsiz` ve `sansüre dayanıklı` olmasını sağlayan temel ilke budur; merkeziyetsiz blokzincirleri herkes kullanabilir ve herkes onların üzerine yazılım geliştirebilir.

Facebook ve Twitter gibi merkezi platformlar herhangi bir hesabı istedikleri an kapatabilir. Twitch veya TikTok'ta pek çok etkili yayıncı, kendini sebepsizce platformdan atılmış halde buldu. Kullanıcılar hesaplarını geri alabilse bile bu uzun ve yorucu bir süreç olabiliyor. Merkeziyetsizlik olmadan blokzincir `defteri`, bir banka bilgisayarındaki finansal tablodan farksızdır; kimin hesap açabileceğine bankacılar karar verir. Bir ağın `izinsiz` olması, yetkinin yeterince dağıtıldığı anlamına gelir; bir kişinin ya da kurumun erişimini kesmenin yolu yoktur.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Merkeziyetsizlik için aşağıdakilerden hangisi DOĞRU DEĞİLDİR?

- [ ] Merkeziyetsizlik blokzincirleri sansüre dayanıklı kılar

> ℹ️ Tekrar dene! Bu ifade doğru: kontrolü elinde tutan tek bir taraf olmadığında kimse ağı sansürleyemez.

- [ ] Merkeziyetsizlik blokzincirleri izinsiz kılar

> ℹ️ Tekrar dene! Bu ifade doğru: yetki dağıldığında kimse bir kişinin erişimini kesemez.

- [x] Merkeziyetsizlik otoriter güçlerin kontrolü elde tutmasına yarar

> ℹ️ Doğru! Bu DOĞRU DEĞİL: merkeziyetsizlik tam tersini yapar ve kontrolü tek bir taraftan uzaklaştırır.

- [ ] İzinsiz sistemleri her yerde herkes kullanabilir

> ℹ️ Tekrar dene! Bu ifade doğru: izinsiz olmak, kimsenin erişiminin reddedilemeyeceği anlamına gelir.

# Merkeziyetsiz mi?

Ama bir şeyin merkeziyetsiz olup olmadığı basit bir evet-hayır sorusu değil. Kontrolü elinde tutan 10 taraf merkeziyetsiz sayılır mı? Peki ya 1.000? Bir milyon? Yeterince merkeziyetsiz olmanın standart bir eşiği yok, bu yüzden merkeziyetsizliği bir yelpaze olarak düşünmek mantıklı. Tek seçenek siyah ve beyaz değil; aralarında pek çok gri ton var.

Yani “merkezi mi merkeziyetsiz mi” demek yerine “şundan daha çok ya da daha az merkeziyetsiz” diyebiliriz. Tarafsız bir parasal sistemin devlet düzeyindeki sansüre direnmesi için yüksek derecede merkeziyetsizlik gerekir. Yeni blokzincirler sık sık merkeziyetsizliği ölçeklenebilirlik için feda eder, ama böylece tamamen merkezi platformların hissettiği toplumsal ve devlet baskılarına açık hale gelirler. Sonunda merkezi sosyal medya ağlarındakine benzer bir sansüre girişebilirler.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Farklı blokzincirler farklı derecelerde merkeziyetsizlik kullanır.

- [x] Doğru

> ℹ️ Doğru! Merkeziyetsizlik bir yelpazedir: her blokzincir, ölçeklenebilirlik veya başka hedefler için ne kadarını takas edeceğini seçer.

- [ ] Yanlış

> ℹ️ Tekrar dene! Merkeziyetsizlik bir yelpazedir ve her blokzincir bu yelpaze üzerinde kendi ödünleşimini yapar.

# Birkaç Örnek

Her blokzincirin trilemmaya kendi yaklaşımı var ve her biri hedeflerine odaklanmak için ödünleşimler yaptı. Bitcoin ve Ethereum, güvenliği ve merkeziyetsizliği ölçeklenebilirliğin önüne koydu; sonuç, Bitcoin'de uzun `kesinleşme süresi` ve Ethereum'da sınırlı `blok alanı` oldu. `Akıllı sözleşmelere` talep, özellikle DeFi için sıçradığında Ethereum ücretleri yükselir; 2021'deki zirve talepte tek bir işlem onlarca dolara mal olabiliyordu.

Yükselen ücretler, BNB Chain gibi `alternatif Layer 1'lere` kapı açtı; onlar daha yüksek `işlem kapasitesi` ve daha ucuz ücretler için merkeziyetsizliği ölçeklenebilirliğin gerisine attı. Solana gibi üçüncü nesil zincirler trilemmayı çözmek için yeni yöntemler kullanıyor, ama bütün blokzincirler hâlâ bu temel kısıtlara tabi. Her zincirin seçimi, o seçimden doğan temel etkilerle kendi ekosistemini tanımlar.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Peki ne yapılabilir?

Ethereum yüksek güvenliği ve merkeziyetsizliği önceliklendirdiyse, hedeflediği küresel finans ağı olmak için tüm kullanıcılara nasıl yetişecek? Ethereum yol haritası iki yanıt aradı: `Layer 2`'ler ve blokzincir `sharding`.

`Layer 2`'ler, trilemmanın diğer iki ayağından ödün vermeden Ethereum'un ölçeklenebilirliğini artırır. Ana blokzincirin üzerinde duran ek bir katmandır; güvenlik için ana zincire yaslanır, kullanıcılara ise daha düşük ücret ve daha hızlı işlem sunar. Onları Layer 2 dersimizde ayrıntılı inceleyeceğiz.

`Sharding`, blokzinciri birden fazla paralel zincire bölecekti; yola şerit eklemek gibi. Ethereum bu planı bırakıp daha basitini seçti: blok verisini Layer 2'lerin kullanması için ucuzlatmak (2024'te eklendi) ve kapasiteyi güvenlikten ya da merkeziyetsizlikten ödün vermeden adım adım artırmak.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2'ler:

- [ ] Kendi güvenliklerini sağlar

> ℹ️ Tekrar dene! Layer 2'ler güvenlikleri için ana blokzincire yaslanır.

- [x] Ana blokzincirin ölçeklenebilirliğini artırır

> ℹ️ Doğru! Layer 2'ler ana zincirin üzerinde durur ve güvenlikten ya da merkeziyetsizlikten ödün vermeden ölçek katar.

- [ ] Kullanıcılar için ücretleri artırır

> ℹ️ Tekrar dene! Layer 2'ler tam tersini yapar: kullanıcılar daha düşük ücret öder.

- [ ] Kullanıcılar için kesinleşme süresini uzatır

> ℹ️ Tekrar dene! Layer 2'ler daha yavaş değil, daha hızlı işlem sunar.

# Ethereum'un geleceği

Ethereum ağı, trilemmanın diğer yönlerinden ödün vermeden ölçeklenebilirliğini geliştirmeye devam ediyor. `Proof of Stake` mutabakatına geçiş (2022'deki Merge) ağın enerji kullanımını %99'un üzerinde azalttı; Layer 2'ler için ucuz blok verisi ise 2024'te geldi. **Ölçeklenme sürekli bir iştir: her yükseltme Ethereum'u daha hızlı ve daha ucuz kılarken güvenliği ve merkeziyetsizliği temel ilke olarak koruyor.** Ethereum Foundation'ın [Ethereum yol haritası](https://ethereum.org/roadmap/) hakkında mükemmel bir sayfası var.

Bu arada pek çok `Layer 2` protokolü, Ethereum protokolünü güncellemeye gerek kalmadan kullanıcı talebini karşılamak için Ethereum'un üzerine inşa ediyor. Bu Layer 2 protokolleri merkeziyetsiz güvenlik için Layer 1 Ethereum'a yaslanırken kendileri ölçeklenebilirlik sunar; Layer 2 çeşitliliği merkeziyetsiz bir ekosistem yaratır! Önde gelen `rolluplar` arasında Arbitrum, OP Mainnet ve Base var; Polygon PoS ise kendi ayrı güvenliğine sahip popüler bir `yan zincir`.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Ethereum yükseltmeleri şunları içerir:

- [ ] Ölçeklenebilirlik için Layer 2'ler ve ucuz blok verisi

> ℹ️ Tekrar dene! Bu yükseltmelerin bir parçası, ama tek parçası değil.

- [ ] Merkeziyetsizliği ve güvenliği temel ilke olarak korumak

> ℹ️ Tekrar dene! Bu yükseltmelerin bir parçası, ama tek parçası değil.

- [ ] Proof of Stake mutabakatıyla enerji tüketimini azaltmak

> ℹ️ Tekrar dene! Bu yükseltmelerin bir parçası, ama tek parçası değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Layer 2'ler ve ucuz blok verisi ölçek katar, Proof of Stake enerjiyi düşürdü, güvenlik ve merkeziyetsizlik ise temel ilke kaldı.

# Kaşifler için bu ne anlama geliyor?

Kullanıcıların teknolojiyi öğrenip keşfetmesi için düşük ücretler gerekir; giriş engeli ve hata maliyeti düşük olmalı, özellikle de yolculuğun başında. Ethereum blokzinciri henüz ideal değil, ama değerleri onu küresel bir finansal bilgi işlem sistemi hayalini gerçekleştirmeye en uygun adaylardan biri yapıyor. Kaşifler devasa ücretler ödemeden Ethereum'u kullanmayı öğrenebilir; Layer 2'ler sayesinde Ethereum'un güvenlik ve merkeziyetsizlik faydalarını daha yüksek ölçeklenebilirlikle birleştirebilirler.

Sonraki ders `Layer 2` çözümlerini ve nasıl başlayacağını anlatacak. Haydi kaşifler!
