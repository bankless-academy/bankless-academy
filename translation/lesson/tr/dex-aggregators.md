---
TITLE: DEX Toplayıcıları
DESCRIPTION: DEX toplayıcılarına, likiditeye ve DeFi borsa dünyasına dal.
LANGUAGE: Türkçe
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

# Giriş

`Merkeziyetsiz borsalar` (DEX'ler) aracı maliyetlerini ortadan kaldırır ve varlık alıp satarken Kaşiflere tasarruf ettirir.

Peki Kaşif, DeFi teknolojisiyle tasarruf etmenin başka yolları da olduğunu biliyor muydun? `DEX toplayıcıları` sayesinde farklı DEX platformlarındaki tüm olası alım satımları aynı anda tarayıp en iyi rotayı tek hamlede uygulayabilirsin. Bir token `takası` yaparken en iyi fiyatı bulmana yardım ederler. Uçuş arama siteleri en ucuz bileti bulmana yardım ettiği gibi, DEX toplayıcıları da alım satımından en yüksek değeri almanı sağlar.

Bu ders şunları gösterecek:

1. DEX'lerin likiditeyi nasıl böldüğünü ve bunun alım satım oranlarını nasıl düşürebildiğini.
2. DEX toplayıcılarının kullanıcılara tek arayüzden birçok DEX'i görme ve kullanma imkanı nasıl verdiğini.
3. Tek bir toplayıcı arayüzünün Kaşiflere zaman ve para kazandırma yollarını.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Likidite Fiyatları Nasıl Etkiler?

Tek bir piyasada alınıp satılabilen token miktarına o tokenın `likiditesi` denir. Mevcut likidite, DeFi'de alım satım yaparken oluşan `fiyat etkisini` güçlü biçimde belirler; büyük fiyat etkisi alım satımın daha pahalıya, düşük fiyat etkisi daha ucuza gelmesi demektir. Çoğu kişi fiyat etkisini azaltmak için likiditesi yüksek piyasalarda işlem yapmayı tercih eder.

Bunu bir yüzme havuzu gibi düşünebilirsin: içinde ne kadar çok su (likidite) varsa, biri atladığında ya da çıktığında su seviyesindeki _değişim_ (fiyat etkisi) o kadar küçük olur. O ‘birinin’ boyutu (alım satımın büyüklüğü) de su seviyesindeki _değişimi_ (fiyat etkisini) etkiler.

# Likiditenin Fiyatları Etkilemesine Bir Örnek

Bir örneğe bakalım.

Aynı anda birkaç DEX'te işlem gören bir token düşün. Bir DEX'te derin bir havuz var ve tokenın `likiditesi` çoğunlukla orada; diğerinde ise bunun sadece küçük bir kısmını tutan sığ bir havuz var.

Bir Kaşif her iki havuzdan da aynı miktarda token alırsa, `fiyat etkisi` sığ havuzda daha yüksek olur. Aynı alım satım, o havuzun toplam likiditesinin çok daha büyük bir yüzdesini çeker; bu yüzden fiyatı daha fazla oynatır ve alıcıya daha pahalıya gelir.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Boşlukları doldur: En iyi fiyatı bulmak için insanlar ________ likiditeye sahip piyasalarda işlem yapıp alım satımlarında ________ fiyat etkisi ister.

- [ ] iyi, maksimum

> ℹ️ Tekrar dene! Maksimum fiyat etkisi, alım satımın daha ucuza değil daha pahalıya gelmesi demektir.

- [x] yüksek, düşük

> ℹ️ Doğru! Daha çok likidite daha küçük fiyat etkisi demektir; büyük bir havuzun biri atladığında daha az değişmesi gibi.

- [ ] düşük, iyi

> ℹ️ Tekrar dene! Düşük likidite fiyat etkisini artırır ve alım satımı pahalılaştırır.

- [ ] ince, büyük

> ℹ️ Tekrar dene! İnce likidite büyük bir fiyat etkisi yaratır; yatırımcıların tam da kaçındığı şey budur.

# Geleneksel DEX'lerin Zayıf Yanı: İnce Likidite

DeFi büyümeye devam ediyor, ama kullanıcılar için bir sorun ortaya çıkıyor: Yeni DEX'ler açıldıkça her bir tokenın toplam miktarı dağılıyor. Buna ince likidite denir.

Yüzme havuzunu hatırla: mevcut su (`likidite`) birden çok havuza bölünürse, her havuzdaki su miktarı tek bir havuzdaki toplama kıyasla daha “ince” olur.

DeFi'nin ilk günlerinde likiditenin çoğunu bir iki DEX tutuyordu. 2020'de yeni DEX'ler bunun için yarışmaya başladı; bir rakip, açılışından haftalar sonra Uniswap'ten 1 milyar doların üzerinde likidite çekti. Bugün likidite, birçok blokzincir ve `Layer 2` ağındaki yüzlerce DEX'e dağılmış durumda; bu da her havuzu inceltiyor.

Dolayısıyla her alım satımın `fiyat etkisi`, tek bir DEX'in ekosistem likiditesinin çoğunu tuttuğu döneme göre daha büyük. Yeni çözümler olmasa, Kaşiflerin tek bir DEX'te işlem yapması daha pahalıya gelirdi.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Bir DEX alım satımının fiyat etkisini hangi iki etken belirler?

- [ ] Kullanılan DEX seçimi ve alım satımın büyüklüğü

> ℹ️ Tekrar dene! DEX'in kendisi önemli değil; havuzdaki mevcut likidite belirleyicidir.

- [ ] Seçilen token ve alım satımda kullanılan DEX

> ℹ️ Tekrar dene! Fiyat etkisini ne token ne de DEX markası belirler; likidite ve işlem büyüklüğü belirler.

- [x] Alım satımın büyüklüğü ve mevcut likidite miktarı

> ℹ️ Doğru! Yüzme havuzu gibi: sıçramanın büyüklüğü atlayanın boyutuna ve havuzdaki su miktarına bağlıdır.

- [ ] Mevcut likidite miktarı ve seçilen token

> ℹ️ Tekrar dene! Likidite etkenlerden biri, ama diğeri seçilen token değil alım satımın büyüklüğü.

# Likiditeyi DEX Toplayıcılarıyla Yeniden Birleştirmek

Fiyat etkisini azaltmak ve sana tasarruf ettirmek için büyük miktarda `likidite` gerekir. DEX toplayıcıları, kullanıcıların alım satımlarını aynı anda birden çok DEX üzerinden yürütmesine ve fiyat etkisini düşürmesine imkan verir; bir Kaşifin cüzdanından çıkan büyük bir alım satım, birçok DEX'e yayılmış küçük alım satımlara bölünür.

DEX toplayıcıları, kullanıcı için daha iyi sonuç veriyorsa alım satımı bir `aracı token` ya da birden fazlası üzerinden bile yönlendirebilir; tıpkı bir uçuş arama sitesinin daha ucuzsa başka bir havalimanında ek aktarma önermesi gibi. En uygun `takas rotası`, o andaki en ucuz rotayı bulmak için tüm olası yolları tarayan gelişmiş algoritmalarla keşfedilir.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

DEX toplayıcılarında rota yönlendirmesi şu demektir:

- [ ] Alım satımlar belirli DEX'lerle özel anlaşmalarla yönlendirilir

> ℹ️ Tekrar dene! Toplayıcılar özel anlaşmalarla değil, algoritmayla tüm DEX'leri tarar.

- [ ] Alım satımlar her zaman birden çok DEX üzerinden gider

> ℹ️ Tekrar dene! Toplayıcılar sadece daha iyi sonuç verdiğinde böler. Bazen tek bir DEX en iyi rotayı sunar.

- [ ] Alım satımlar sadece kullanıcının favori DEX'inden geçer

> ℹ️ Tekrar dene! Tek DEX'te kalmak amacı boşa çıkarır. Toplayıcılar en iyi fiyat için birçok DEX'i tarar.

- [x] Alım satımlar birden çok DEX ve aracı token üzerinden gidebilir

> ℹ️ Doğru! Algoritmalar, en ucuz rotayı bulmak için aracı tokenlar üzerinden ek “duraklar” dahil tüm olası yolları tarar.

# Ethereum'da Gas Maliyeti Nasıl Hesaplanır

Toplayıcıların ağ ücretlerini nasıl düşürdüğünü görmeden önce gas hesabını tazeleyelim. Bu tasarruf en çok Ethereum Mainnet'te önemli; `Layer 2` ağlarında ücretler zaten birkaç kuruş.

Arabanın yakıtı gibi, `gas` de Ethereum'da kodu çalıştıran yakıttır. Ne kadar çok hesaplama yaparsan kodun o kadar çok gas ister. Fiyatı, doların sentleri gibi çok küçük ether birimleri olan `gwei` ile ölçülür: 1 gwei, bir ether'in milyarda biridir (0,000000001 ETH).

Toplam gas maliyeti, işleminin kullandığı gas miktarına ve o andaki birim gas fiyatına bağlıdır. Bir işlemin fiyatını hesaplama formülü şöyledir:
_Kullanılan gas miktarı * Gas fiyatı = Toplam gas maliyeti_

Örnek olarak, gas birim başına 22 gwei olsun ve işlem 120 bin birim kullansın:
_120.000 * 22 gwei = 2.640.000 gwei_ _**veya**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Toplayıcılar Gas Maliyetini Nasıl Düşürür

Alım satımı bölmek, ek zincir üstü hareket yüzünden daha çok işlem ücreti doğururdu; ama gelişmiş toplayıcılar işlem ücretlerini önceden hesaba katıp rota hesabına dahil eder. Alım satımları `gas` maliyeti dahil zincir dışında simüle ederek, Kaşiflere etkileşim sonunda en çok değeri bırakan `takas rotalarını` bulurlar.

Bazı toplayıcılar bir adım öteye gider. DEX toplayıcılığının öncüsü 1inch, artık profesyonel doldurucuların alım satımını gerçekleştirmek için yarışmasına ve gası kendilerinin ödemesine de izin veriyor (Fusion adlı sistem). Kullanıcı çoğu zaman hiç gas ödemez.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Aşağıdakilerden hangisi DEX toplayıcılarının işlem maliyetini düşürme yollarından biri DEĞİLDİR?

- [ ] İşlemleri gerçekleşmeden önce zincir dışında simüle etmek

> ℹ️ Tekrar dene! Toplayıcılar en iyi rotayı bulmak için alım satımları gas maliyeti dahil zincir dışında simüle eder.

- [x] DEX'lerden ağ ücretlerini düşürmesini istemek

> ℹ️ Doğru! Ağ ücretlerini DEX'ler değil blokzincir belirler. Kimse öylece düşürülmesini isteyemez.

- [ ] Rota hesabında gas maliyetini hesaba katmak

> ℹ️ Tekrar dene! Gelişmiş toplayıcılar işlem ücretlerini rota hesaplarına dahil eder.

- [ ] Profesyonel doldurucuların işlemi yapıp gası ödemesi

> ℹ️ Tekrar dene! 1inch Fusion gibi niyet tabanlı sistemlerde gası doldurucular karşılar.

# Meta-Toplayıcılar

DEX toplayıcılarının bile meta-toplayıcıları var! Bu platformlar birbiriyle yarışan DEX toplayıcılarını tarar ve kullanıcıya en iyi fiyat tekliflerini sunar. Örneğin MetaMask gibi cüzdanların yerleşik takas özelliği, 1inch gibi DEX toplayıcıları dahil birçok sağlayıcıdan teklif toplar ve üzerine kendi hizmet ücretini ekler.

Not: Pratik olsalar da `meta-toplayıcı` hizmetleri ağ işlem ücretlerinin üstüne ek maliyet bindirebilir ve toplam maliyeti artırabilir. Kaşif: alım satımının düşündüğünden pahalıya gelmediğinden emin ol.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-toplayıcılar, kullanıcıları için en iyi fiyatları bulmak amacıyla birden çok DEX toplayıcısını karşılaştırır.

- [x] Doğru

> ℹ️ Doğru! Meta-toplayıcılar birbiriyle yarışan DEX toplayıcılarını tarar ve kullanıcıya en iyi fiyat tekliflerini sunar.

- [ ] Yanlış

> ℹ️ Tekrar dene! Birden çok DEX toplayıcısını taramak tam olarak meta-toplayıcıların yaptığı şeydir.

# Sandviç Saldırılarından Kaçınmak

Doğrudan `DEX'ler` üzerinden takas yapan kullanıcılar, botlar fiyatı oynatmak için hemen önlerine ve arkalarına işlem soktuğunda `slippage toleransı` kadar değer kaybedebilir. Bu kayıplara `sandviç saldırısı` denir; sadece 2021'de kullanıcılara yaklaşık 235.000.000 dolara mal oldular. Bugün `özel işlem yönlendirmesi` ve niyet tabanlı alım satım gibi korumalar günlük işlemlerin çoğunu kalkan altına alıyor, ama token takas ederken slippage toleransını düşük tutmak yine de kazandırır.

Neyse ki DEX toplayıcılarının yeniden birleştirdiği likidite sayesinde bir alım satımın fiyat etkisi azalır. Kaşifler, doğrudan bir DEX'te işlem yapmak yerine DEX toplayıcılarını kullanarak slippage toleransını düşük tutup daha çok tasarruf edebilir.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Kendini korumak için slippage toleransını nasıl tutmalısın?

- [x] düşük

> ℹ️ Doğru! Düşük slippage toleransı, bir sandviç saldırısının alım satımından çekebileceği değeri sınırlar.

- [ ] yüksek

> ℹ️ Tekrar dene! Yüksek slippage toleransı, sandviç saldırılarının alım satımından daha çok değer almasına izin verir.

# Sandviçlere Karşı Daha Fazla Koruma: OTC İşlemleri

1inch gibi bazı toplayıcılar, sandviç saldırılarına karşı tam koruma sağlayan özel `OTC` (`tezgah üstü`) hizmetleri bile sunar. İsteğe bağlı bu hizmetler, DeFi `likidite havuzları` üzerinden geçmek yerine diğer kullanıcılarla doğrudan alım satım yapmanı sağlar ve Kaşiflere bir tasarruf yolu daha açar.

CoW Swap farklı bir yol izler: kullanıcılar bir alım satım talebi (`niyet`) imzalar, profesyonel `çözücüler` de bunu en iyi fiyattan karşılamak için `toplu açık artırmalarda` yarışır. Çözücüler iki kullanıcıyı doğrudan bile eşleştirebilir; böylece işlemler sandviç saldırılarına karşı varsayılan olarak korunur.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Birçok DEX toplayıcısı kullanıcılarına tasarruf ettirmek için hangi araçları sunar?

- [ ] Alım satımları birçok DEX'in likiditesi üzerinden yönlendirme.

> ℹ️ Tekrar dene! Birleştirilmiş likidite fiyat etkisini azaltır, ama toplayıcıların tasarruf ettirdiği tek yol bu değil.

- [ ] Sandviç saldırılarına karşı tam koruyan OTC işlemleri.

> ℹ️ Tekrar dene! Bu, toplayıcıların tasarruf ettirme yollarından biri, ama tek yol değil.

- [ ] En iyi rotayı kurarken gas maliyetini hesaba katma.

> ℹ️ Tekrar dene! Bu, toplayıcıların tasarruf ettirme yollarından biri, ama tek yol değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Toplayıcılar likiditeyi birleştirir, gas maliyetini hesaba katar ve OTC işlemleri sunabilir; hepsi kullanıcıya daha çok değer bırakmak için.
