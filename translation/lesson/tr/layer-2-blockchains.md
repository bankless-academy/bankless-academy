---
TITLE: Layer 2 Blokzincirler
DESCRIPTION: Layer 2 ekosistemine katıl: daha hızlı işlem, daha düşük ücret.
LANGUAGE: Türkçe
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

# Giriş

Her blokzincirin hedefi olabildiğince merkeziyetsiz, güvenli ve ölçeklenebilir olmaktır. Üçünü birden iyi yapan bir blokzincir kurmak ise bugüne kadar çözülemedi. Bu sorunun bir adı var: `blokzincir trilemması`.

Bitcoin ve Ethereum epey merkeziyetsiz ve güvenli, ama iyi ölçeklenmiyor. Ağ yoğunken yüksek işlem ücretleri ve uzun kuyruklar bunu gösterir. Kaşifler bu sorunları aşmak için işlem maliyetini ciddi biçimde düşüren ve hızı artıran teknolojiler kullanabilir. Bunların ortak adı Layer 2 (L2) ölçekleme çözümleridir.

`Lightning Network`, Bitcoin'in en bilinen ölçekleme çözümüdür ve taraflar arası ödemeleri ölçeklemek için `ödeme kanalları` teknolojisine dayanır. Ethereum ise trilemmayı çeşitli L2 çözümleriyle hafifletir; 2024'te Mainnet'e eklenen ucuz ve geçici `blob` depolaması buna destek olur (bir zamanlar planlanan “sharding”in hafif hali).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Ödeme Kanalları

Bitcoin blokzincirinde Lightning Network çift yönlü ödeme kanallarına dayanır. Böylece birden çok taraf, ana zincirde işlem yapmadan BTC değiş tokuş edebilir.

Bu mimaride iki kullanıcı aralarında bir ödeme kanalı açar. Her kanal kesinlikle iki taraflıdır, ama ödemeler birbirine bağlı kanallar ağı üzerinden daha uzaktaki kullanıcılara da yönlendirilebilir. Kanal açıkken taraflar aralarında istedikleri kadar para aktarır. Her katılımcının mikro defter kaydı, iki kullanıcı da işlemi imzaladıktan sonra güncellenir; bu da genelde iki tarafın düğümlerinin erişilebilir olmasını gerektirir.
Kanalı taraflardan biri istediği an kapatabilir: mikro defterin en güncel halini blokzincire yayınlaması yeterlidir.

Ödeme kanalları gelişmiş `akıllı sözleşme` etkileşimlerini desteklemez, yalnızca temel eşler arası işlemleri destekler.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Bitcoin Lightning Network üzerinden işlem yapmak için çevrimiçi olman gerekir.

- [x] Doğru

> ℹ️ Doğru! Bir ödeme kanalının güncellenmesi iki kullanıcının da imzasını ister, bu da genelde iki tarafın düğümlerinin erişilebilir olması demektir.

- [ ] Yanlış

> ℹ️ Tekrar dene! Kanal güncellemeleri iki tarafın da imzasını gerektirir, yani düğümleri genelde çevrimiçi olmalıdır.

# Ethereum'un Ölçekleme Çözümleri

Ethereum geliştiricileri, ağ yayına girdiğinden beri neredeyse aynı süredir Ethereum'a özgü ölçekleme çözümleri üzerinde çalışıyor.

Ethereum topluluğunun çoğuna göre bir proje, “Ethereum ölçekleme çözümü” sayılmak için Ethereum'un `ölçeklenebilirlik` eksiğini `güvenlikten` ya da `merkeziyetsizlikten` ödün vermeden gidermelidir. Kullanıcılar için en pratik ihtiyaç, Mainnet'ten daha hızlı işlem ve daha ucuz `gas`. Rekabet için bazı çözümler trilemmada daha büyük ödünler verir.

Ethereum'u tanımlayan şey akıllı sözleşme yetenekleridir, bu yüzden ölçekleme çözümlerinin de bunu devralması önemli. Kullanıcılar sevdikleri `dApp'lere` bir Layer 2'den erişemiyorsa hızlı ve ucuz işlemin faydası yok.

# Knowledge Check 2

Ethereum ölçekleme çözümleri:

- [ ] ağı ölçeklemek için ödeme kanalları kullanır.

> ℹ️ Tekrar dene! Ödeme kanalları Bitcoin'in Lightning Network yaklaşımıdır. Ethereum rolluplar gibi çözümlerle ölçeklenir.

- [ ] akıllı sözleşme etkileşimlerini destekleyemez.

> ℹ️ Tekrar dene! Akıllı sözleşme desteği şart. Kullanıcılar sevdikleri dApp'lere Layer 2'den de erişebilmeli.

- [x] diğer trilemma özelliklerini zayıflatmadan ölçeği artırmalı.

> ℹ️ Doğru! Gerçek bir Ethereum ölçekleme çözümü, güvenlikten ya da merkeziyetsizlikten ödün vermeden ölçeklenebilirliği çözer.

- [ ] daha hızlı işlem sağlar ama gas ücretini yükseltir.

> ℹ️ Tekrar dene! Ölçekleme çözümleri hem daha hızlı işlem hem Mainnet'ten daha ucuz gas hedefler.

# Layer 1 ile Layer 2'yi Bağlamak

[Blokzincir Temelleri](https://app.banklessacademy.com/lessons/blockchain-basics) dersinde öğrendiğimiz gibi blokzincirler, kriptografik olarak korunan kronolojik bir işlem listesi tutan ve `defter` denen veri tabanlarıdır. L1 blokzincirler ile L2 ölçekleme çözümlerinin her biri, kendi adres ve veri tabanına sahip birer blokzincirdir.

`Köprü` denen altyapı, farklı blokzincir veri tabanları arasında bilgi taşır. Örneğin Ethereum Mainnet'i (ya da başka bir `L1` blokzinciri) bir ada, tercih ettiğin ölçekleme çözümünü de başka bir ada gibi düşün. Kripto köprüsü, bu iki dijital adayı bağlayan otoyolun genel adıdır.

Teknoloji çok karmaşık, ama son kullanıcı için bu süreç bir varış noktası seçmek kadar basit.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Yan Zincirler

`Yan zincir`, Ethereum'dan bağımsız çalışan ama Mainnet'e bir `köprü` ile bağlı ayrı bir blokzincirdir. Tokenları taşımak için onları Mainnet'teki köprü sözleşmesinde kilitlersin, yan zincirde de eşdeğerleri basılır. Önemli nokta: paran bununla Ethereum'un güvenliğini KAZANMAZ. Köprü de yan zincir de yan zincirin kendi doğrulayıcılarına dayanır. Biri ele geçirilirse (2022'deki 625 milyon dolarlık Ronin köprü saldırısı gibi) kilitli paralar çalınabilir.

Yan zincirler de blokzincir trilemmasına tabidir. Daha düşük `gas` ücretleri ve daha hızlı işlemler, küçük ama daha güçlü bir doğrulayıcı kümesinden gelir: ölçeklenebilirlik için biraz merkeziyetsizlik ve güvenlik feda edilir.

Polygon PoS gibi yan zincirler Ethereum'a düzenli anlık görüntüler (“checkpoint”) yayınlar. Bu, geçmişlerine bir tür kesinlik verir ve köprüden çıkarken bakiyeni kanıtlamanı sağlar, ama paranı Mainnet kadar güvenli yapmaz.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Yan zincirler:

- [ ] köprülenen tokenları Mainnet'teki bir sözleşmede kilitler.

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [ ] Mainnet'ten daha ucuz gas ücretlerine sahiptir.

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [ ] Mainnet'ten daha yüksek merkezileşme riski taşır.

> ℹ️ Tekrar dene! Bu doğru, ama tek doğru ifade bu değil.

- [x] Yukarıdakilerin hepsi.

> ℹ️ Doğru! Yan zincirler tokenları Mainnet'te kilitler ve daha ucuzdur, ama küçük doğrulayıcı kümesi hız için merkeziyetsizlikten ödün verir.

# Rolluplar

Rollup teknolojisi kullanan Layer 2 protokolleri, Ethereum Mainnet'in güvenlik seviyesine daha yakın durur.

Yan zincirler gibi rolluplar da işlemleri Mainnet dışında çalıştırır. Bu işlemler sonra tek bir partide “toplanır” ve parti verisi Ethereum'a ucuz, geçici veri paketleriyle yazılır: Mart 2024'teki Dencun yükseltmesiyle gelen `bloblar`. Tipik L2 ücretlerinin birkaç sente kadar düşmesinin ana nedeni bloblardır.

Bir rollupun Mainnet adına işlem yapacak kadar güvenli olduğunu göstermesi için, gönderdiği her partideki işlemlerin güvenli ve geçerli olduğuna dair “ikna edici kanıt” sunması gerekir. Bu kanıt rollupun içinde yer alır ve Mainnet'teki köprü sözleşmesi tarafından doğrulanır.

Şu an bu kanıtı sunabilen iki rollup yöntemi var: `iyimser rolluplar` ve `ZK rolluplar`. Şimdi bu iki sürece daha yakından bakalım.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# İyimser Rolluplar

Optimism, Base ve Arbitrum gibi L2 protokollerinin hepsi ölçekleme mimarisi olarak `iyimser rollup` kullanır. Adları şuradan gelir: rollup partisindeki bilgi, aksi kanıtlanana kadar geçerli sayılır, yani iyimser bir varsayım yapılır.

Bu tekniğin kötüye kullanılmaması için, kullanıcı parasını L2'den Mainnet'e geri taşımak istediğinde genelde birkaç günlük bir gecikme olur. Bu süre boyunca köprü doğrulayıcıları, çekimi iptal etmek üzere `sahtekarlık kanıtı` yayınlayabilir. Bu mekanizma bankacılıktaki takas süreçlerine benzer, ama merkeziyetsizdir.

Not: Across ve Relay gibi üçüncü taraf köprü servisleri paranı günler yerine dakikalar içinde taşır. Bu hızlı köprüler parayı kendi havuzlarından sana peşin verir; yani köprünün akıllı sözleşmelerinin ve fon sağlayıcılarının riskini alırsın. Rollupun kendi köprüsüne göre fazladan bir güven katmanı.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

İyimser rolluplarda işlemler, aksi kanıtlanana kadar geçerli sayılır.

- [x] Doğru

> ℹ️ Doğru! İyimser varsayım, partilerin geçerli olduğudur; itiraz süresinde sahtekarlık kanıtları hatalı çekimleri iptal edebilir.

- [ ] Yanlış

> ℹ️ Tekrar dene! Bu rolluplar adını tam da o iyimser varsayımdan alır.

# ZK Rolluplar

`ZK rollup`, sıfır bilgi teknolojisine dayanan bir rollup türüdür. Partideki işlemlerin doğruluğunu, `iyimser rolluplardan` farklı olarak, sahtekarlık arayan kullanıcılara güvenmeden onaylar. Bunun yerine `geçerlilik kanıtı` denen matematiksel bir kanıt sunar; Ethereum böylece tüm partiyi işi baştan yapmadan kontrol eder.

ZK rollupların en büyük artısı `mutabakat süresi`, diğer adıyla `işlem kesinliği`. Günlerce süren itiraz dönemi yerine paran, bir sonraki geçerlilik kanıtı gönderilir gönderilmez, genelde birkaç saat içinde Mainnet'te erişilebilir olur. Adına rağmen sıfır bilgi teknolojisi burada gizlilik için kullanılmaz: büyük ZK rolluplardaki işlemler Mainnet kadar açıktır.

ZKsync, Starknet ve Linea gibi büyük protokoller Ethereum ölçekleme çözümlerini ZK rollup teknolojisiyle kuruyor. Geliştirme açısından hâlâ erken, ama geleceği parlak.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

İyimser rolluplarla karşılaştırıldığında ZK rolluplar:

- [ ] kullanıcı işlemlerini Mainnet'te gizli tutar.

> ℹ️ “Sıfır bilgi” adına rağmen büyük ZK rolluplar Mainnet kadar şeffaftır: kanıtlar gizlilik için değil, geçerlilik için kullanılır.

- [x] geçerlilik kanıtı kullanır, günlerce itiraz beklemez.

> ℹ️ Doğru! Matematiksel bir geçerlilik kanıtı her partiyi onaylar, böylece Mainnet'te kesinlik için sahtekarlık penceresi beklenmez.

- [ ] itiraz süresinde sahtekarlık kanıtı sunan gözcülere dayanır.

> ℹ️ İyimser rolluplar böyle çalışır. ZK rolluplar bunun yerine geçerliliği baştan kanıtlar.

# Zincirler Arası dApp Uyumluluğu

Çoğu kullanıcı `iyimser rollup` ile `ZK rollup` karşılaştırırken çekim sürelerine odaklanır. Ama bu bekleme sorunu üçüncü taraf köprülerle çözülebildiği için, hangi ölçekleme çözümünü keşfedeceğine karar verirken belirleyici olmamalı.

Birçok iyimser rollup “EVM eşdeğeri”dir: L2, `Ethereum Sanal Makinesi` (EVM) üzerinde çalışabilen her dApp'i doğrudan destekler. EVM eşdeğerliği, daha önce Mainnet'e kurulmuş her akıllı sözleşmenin kurulabilmesini sağlar, böylece L2 kullanıcıları sevdikleri dApp'lere erişir.

Polygon PoS gibi yan zincirler de EVM'yi doğrudan çalıştırır ve modern ZK rollupların çoğu (ZKsync, Linea, Scroll) EVM eşdeğeri ya da buna çok yakındır. Sonuçta sevdiğin Ethereum dApp'leri L2 ekosisteminin büyük kısmında mevcuttur.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

EVM eşdeğeri ölçekleme çözümleri, Mainnet'e kurulmuş akıllı sözleşmeleri kolayca yeniden kullanabilir.

- [x] Doğru

> ℹ️ Doğru! EVM eşdeğerliği, Mainnet'te çalışan her akıllı sözleşmenin L2'ye kurulabilmesi demektir; tanıdık dApp'ler de böyle gelir.

- [ ] Yanlış

> ℹ️ Tekrar dene! Mainnet akıllı sözleşmelerini yeniden kullanmak EVM eşdeğerliğinin bütün amacıdır.

# Ders Özeti

Bitcoin ve Ethereum gibi L1 blokzincirler şu an `blokzincir trilemması` ile sınırlıdır. Bitcoin ağındaki `ödeme kanalları`, Ethereum'daki yan zincirler ve rolluplar bu ağların ölçeklenmesine ve trilemmanın hafiflemesine yardım eder.

`Köprüler`, L1 blokzincirleri `yan zincirler` ve `rolluplar` ile bağlar; köprü sözleşmesinin çalışma şekli, bağlı ağın özelliklerini belirler.

Yan zincirdeki paralar Ethereum'un `güvenliğini` devralmaz: köprülenen tokenlar Mainnet'teki bir sözleşmede kilitlenir, ama güvenlikleri yan zincirin kendi doğrulayıcılarına ve köprü sözleşmesine bağlıdır. Bu zincirlerin küçük ama güçlü doğrulayıcı kümesi işlem hızını artırıp gas ücretlerini düşürür, karşılığında merkeziyetsizlik ve güvenlikten ödün verilir.

Rolluplar da yan zincirler gibi kendi işlemlerini doğrular ve işler. Ama köprü sözleşmeleri, veriyi geçerli saymadan önce işlem geçerliliğine dair “ikna edici kanıt” ister. Böylece Ethereum değerleriyle uyumlu bir `güvenlik` ve `merkeziyetsizlik` seviyesi korurlar. Bu kanıtı sunmanın iki yolu var. Bunlardan `iyimser rolluplar`, Mainnet'te mutabakattan önce birkaç günlük gecikme uygular; bu sürede köprü doğrulayıcıları sahtekarlığı tespit edip bildirir. `ZK rolluplar` ise `sıfır bilgi` teknolojisi sayesinde işlem doğruluğunu matematiksel olarak garanti eder.

Bugün hem iyimser rolluplar hem modern ZK rolluplar Mainnet ile yüksek düzeyde akıllı sözleşme uyumluluğu sunar; Mainnet dApp'leri kolayca bu ağlara kurulabilir. Birçok kişi, hızlı kesinliği ve güçlü geçerlilik garantileri sayesinde ZK rollupların geleceğin ölçekleme çözümü olacağına inanıyor.

# Layer 2 Yolculuğuna Optimism ya da Base ile Başla 🙂

Optimism ve Base, ikisi de EVM eşdeğeri iyimser rollup ve Kaşifler için harika birer başlangıç L2'si. Her iki zincirde de dApp kullanmak L1'e benziyor, sadece daha ucuz ve daha hızlı; ikisi de gas için ETH kullanıyor. Yaklaşan görevin, Optimism ya da Base'deki yolculuğunun ilk adımı!

Her iki ekosistem de Ethereum değerlerinden derinden etkilenmiştir. Optimism, ekosisteme değer katan [kamu mallarını fonlamasıyla](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) tanınır; Bankless Academy'nin ücretsiz eğitimi de bunlardan biri.

Optimism ve Base sadece iyimser rolluplara dayanan platformlar değil: blokzincirlerin gerçek sorunları nasıl çözebileceğini, işlem yapmanın ve birlikte koordine olmanın yeni yollarını gösteriyorlar. Bu da hepimizi iyimser yapmalı. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
