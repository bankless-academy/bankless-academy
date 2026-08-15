---
TITLE: Merkeziyetsiz Borsalar
DESCRIPTION: Akıllı sözleşmeyle çalışan borsaların izinsiz token takasını nasıl mümkün kıldığını keşfet!
LANGUAGE: Türkçe
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# Merkeziyetsiz Borsa Nedir?

Merkeziyetsiz Borsalar (DEX'ler), Kaşiflerin cüzdanlarındaki fonların kontrolünü kendilerinde tutarak diğer kullanıcılarla güvenle kripto para takas etmesini sağlayan zincir üstü pazar yerleridir. Bu eşler arası alım satımlar, kullanıcıları büyük ortak token kasalarına bağlayan ve herkesin erişebildiği `akıllı sözleşmeler` sayesinde gerçekleşir. Bu kasalara `likidite havuzu` denir. DEX'ler neredeyse her blokzincirde bulunur; Ethereum Layer 1 ve Layer 2'de de vardır.

Token takas etmek `DeFi` kullanmanın temel bir parçasıdır. DeFi'de başka hiçbir borsa türünde bulamayacağın kadar çeşitli ve işlevli token vardır. Bazı kullanıcılar zincir üstü ürün ve hizmetlere erişmek için token alır. Bazıları yatırım amacıyla alır. Bazı tokenlar ise sahibine, tıpkı bir şirkette hisse tutmak gibi, projenin yönünü belirleyen oy hakkı verir! Amacın ne olursa olsun, DeFi'de DEX'leri düzenli olarak ziyaret edeceksin.

Şimdi nasıl çalıştıklarını ve sana en iyi nasıl hizmet edebileceklerini öğrenelim.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Merkezi ve Merkeziyetsiz Borsalar

Bir Merkezi Borsanın (Coinbase, Binance, Kraken gibi) ve bir Merkeziyetsiz Borsanın (Uniswap, PancakeSwap gibi) kullandığı teknoloji arasındaki farklara bakalım.

Merkezi Borsalar (`CEX'ler`), kullanıcıların blokzincir ekosistemine hiç girmeden kripto para alıp satmasına ve yatırım yapmasına izin verir. Hesabın CEX'te kayıtlı olduğu için `özel anahtarların` ve fonların onların elindedir: yönetimlerine, kurallarına ve iş modeli risklerine tabisin.

Merkeziyetsiz Borsalar (`DEX'ler`), kripto parayı tamamen öz saklamayla alıp satmanı sağlar: blokzincirlerin asıl amacı da buydu. Eşler arası model sayesinde hem tüketici hem sağlayıcı olur, daha önce sadece finans sınıfına açık olan fırsatlara ulaşırsın. Blokzincir hem şeffaf hem sansüre dirençlidir: kimse erişimini donduramaz, işlemlerini geri alamaz. Hack riski yine de vardır; buna dersin ilerleyen kısmında değineceğiz.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Kripto para borsalarıyla ilgili aşağıdakilerden hangisi doğrudur?

- [ ] Bir DEX'in arkasında ekip yoktur.

> ℹ️ DEX'lerin de geliştirici ekipleri vardır, ama projeye etkileri sınırlıdır.

- [ ] CEX'te para kaybetmenin tek yolu kötü bir alım satımdır.

> ℹ️ CEX'lerin de riskleri var. 2022'de FTX borsası çöktü ve kullanıcıların neredeyse tamamı parasını kaybetti.

- [x] DEX'ler öz saklamayla alım satım sağlar, CEX'ler sağlamaz.

> ℹ️ Aksi açıkça belirtilmedikçe özel anahtarların CEX'in elindedir.

# Merkeziyetsiz Uygulamalar

DEX'ler birer `dApp`, yani blokzincir üzerinde çalışan merkeziyetsiz uygulamadır. Bir internet uygulamasının ‘merkeziyetsiz’ sayılması için üç şart vardır: herkesin ayrım gözetmeden kullanabilmesi, etkileşimleri başka bir kişiye gerek kalmadan işlemesi ve kodunun herkese açık olması.

dApp hizmetleri `akıllı sözleşmeler` sayesinde çalışır: kullanıcının zincir üstü bir eylemini alıp öngörülebilir bir zincir üstü yanıt döndüren kod satırları. Ethereum Foundation akıllı sözleşmeleri otomatlara benzetir: kullanıcı istediği ürünün numarasını ve doğru parayı girer, başka bir insana gerek kalmadan beklediği çıktıyı (atıştırmalığını) alır.

DEX akıllı sözleşmeleri token takası, oylama, `likidite` ekleme ve çıkarma gibi çeşitli komutları işler.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Merkeziyetsiz Uygulamalar (devamı)

DEX'ler otomatla aynı mantığı izler: kullanıcının verdiği tokenı alır, istediği tokenı verir. Diğer dApp örnekleri:

🎟️ **Oylama dApp'leri:** kullanıcının oyunu belirtilen tarafa aktarır.

📦 **Köprü dApp'leri:** kullanıcının kripto parasını bir blokzincir ağından diğerine taşır.

🤝 **Borç verme/alma dApp'leri:** belirli şartları karşılayan kullanıcılara kredi verir.

Akıllı sözleşmeler Ethereum'da birer hesaptır: adresleri ve bakiyeleri vardır, bir transfer ve komutla tetiklendiğinde otomatik işlem yaparlar. DEX de birkaç işlevi olan, programlanmış bir Ethereum hesabıdır.

`dApp'ler` genelde arayüz olarak bir web sitesi kullanır; böylece kullanıcılar alttaki akıllı sözleşmelerle daha kolay etkileşir. Site çökse bile biraz deneyimle akıllı sözleşmeye yine ulaşabilirsin!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Bir dApp'in merkeziyetsiz sayılması için hangi özellikler gerekir?

- [ ] İzinsiz: tüm kullanıcılara açık erişim.

> ℹ️ Bu bir dApp özelliğidir, ama tek özellik değildir.

- [ ] Otonom: kullanıcı etkileşimleri aracıya ihtiyaç duymaz.

> ℹ️ Bu bir dApp özelliğidir, ama tek özellik değildir.

- [ ] Şeffaf: akıllı sözleşme kodu herkese açıktır.

> ℹ️ Bu bir dApp özelliğidir, ama tek özellik değildir.

- [x] Yukarıdakilerin hepsi.

> ℹ️ Ethereum dApp'leri izinsiz, otonom ve şeffaf olabilme kapasiteleriyle saygı görür.

# Otomatik Piyasa Yapıcılar

Geleneksel piyasalarda ve `CEX'lerde` saklayıcın bir `emir defteri` kullanır: alış ve satış tekliflerinin toplandığı bir veritabanı. CEX senin teklifini başka birininkiyle eşleştirir. Genelde işleminden sabit veya kademeli bir komisyon alınır ve açıklanmayan eşleştirme yönteminin sana gerçekten en iyi fiyatı bulup bulmadığını bilemezsin.

`DEX'lerin` çoğu ‘Otomatik Piyasa Yapıcı’ (`AMM`) teknolojisini kullanır: token takasının en yaygın tasarımı, alım satımını herkese açık bir algoritmayla fiyatlayan bir sistem. Bazı yeni DEX'ler bunun yerine emir defteri veya niyet tabanlı sistemler kullanır. AMM algoritması açık kaynak olduğu için herkes onu anlayabilir, kopyalayabilir ve geliştirebilir; bu da sağlıklı rekabet ve sürekli yenilik getirir.

AMM'ler alım satımları kullanıcıların alış ve satış tekliflerini doğrudan eşleştirerek değil, `likidite havuzları` üzerinden yönlendirir. Bu ortak token kasaları kullanıcı etkileşimlerine göre token biriktirir ve dağıtır; her adım herkese açık blokzincirde görünür.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Geleneksel bir emir defterine kıyasla AMM kullanmanın faydası nedir?

- [ ] AMM işlemi, emir defteri işleminden daha hızlıdır.

> ℹ️ Ağın onay süresini de hesaba katınca bu her zaman doğru değil.

- [ ] AMM'ler seni doğrudan diğer kullanıcıya bağlar.

> ℹ️ AMM'ler alım satımları kullanıcılar arasında değil, likidite havuzu denen ortak token kasaları üzerinden yönlendirir.

- [x] Tek taraflı işlem kuranları fark edip engelleyebilirsin.

> ℹ️ AMM'lerin şeffaflığı sayesinde platformların kötü niyetli işleri gizlemesi, hatta kullanıcıların kötü niyetli olması çok daha zordur!

# Token Takasları

Blokzincirdeki kripto para alım satımlarına `token takası` denir. Bu akıllı sözleşme etkileşimleri, AMM `likidite havuzlarını` kullanarak bir kripto parayı başka bir kripto paraya çevirir. DEX akıllı sözleşmesi bir `takas rotası`, yani uygun havuzlardan geçen bir yol kurar ve verdiğin tokenı istediğin tokenla değiştirir. Havuzlar genelde sadece iki token tuttuğu ve her `token çifti` için havuz olmadığı için rota birkaç havuzdan geçebilir.

Bir akıllı sözleşmenin cüzdanımıza erişmesi için ona belirli (ya da sınırsız) bir tutara kadar para çekme izni veririz. Bu `token izinleri` sayesinde güvendiğimiz sözleşmeler özel anahtarımız olmadan işlem yapabilir. İzin vermek gas harcadığı için izinler ileride kullanılmak üzere açık kalır: alım satımı bir cüzdandan, saklamayı başka bir cüzdandan yapmanın nedenlerinden biri budur. İzinleri [Token İzinlerini Yönetme](https://app.banklessacademy.com/lessons/managing-token-allowances) dersinde izliyor ve iptal ediyoruz!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Token Takasları (devamı)

İzin ve takas sürecini anlamak için örnek bir takasa bakalım. Örnek, Optimism ağının büyük DEX'i Velodrome üzerinde USDC'den OP'ye bir takas. USDC/OP `likidite havuzu` yeterince verimli olmadığı için bu alım satım genelde iki havuz üzerinden yönlendirilir:

1. Önce ilgili Velodrome akıllı sözleşmesine cüzdanından USDC çekme izni verirsin.
2. Takas işlemi talebini Velodrome'a gönderirsin.
3. İşlem kabul edilir: Velodrome belirttiğin miktarda USDC'yi cüzdanından çekip USDC/ETH likidite havuzuna koyar. Bu ilk havuzdan eşdeğer miktarda ETH çıkar ve ETH/OP likidite havuzuna aktarılır. Son olarak ikinci havuzdan cüzdan adresine OP gönderilir.

Takas işlemi tamamlandı. USDC tokenların ETH üzerinden OP ile takas edildi!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

AMM'ler bir alım satımı, tek bir işlem içinde birden çok likidite havuzu üzerinden yönlendirebilir.

- [x] Doğru

> ℹ️ Doğru! Ağ ücreti daha yüksek olabilir, ama tüm adımlar tek bir işlemde toplanır.

- [ ] Yanlış

> ℹ️ Yanlış, nedenini anlamak için önceki slayta bak.

# Likidite Nedir?

Kripto dünyasında likidite, bir pazar yerinin dijital varlıkları adil fiyatlarla alıp satabilme kapasitesidir. Likidite yüksekken fiyatlar daha istikrarlı, düşükken daha oynaktır. Kullanıcılar genelde daha adil fiyatlara yöneldiği için `DEX'ler` tüm likidite havuzlarında yüksek likidite hedefler.

Yüksek likidite, likidite havuzunda çok sayıda token olması demektir; genelde kullanıcıların havuza girip çıkardığı iki token değer olarak 50/50 bölünür. Örneğin bir USDC/ETH havuzu, o platformdaki bu `token çifti` arasındaki tüm alım satımları karşılar.
Havuzda daha çok token varken, alım satım yapan kullanıcılar 50/50 dengesini daha az bozar ve fiyatlar istikrarlı kalır. Bir alım satımın bu dengeyi bozma miktarına `fiyat etkisi` denir.

Bir Kaşif olarak en iyi fiyatı almak için alım satımlarında fiyat etkisinin mümkün olduğunca düşük olmasını istersin! Yani yüksek ve dengeli likidite istersin.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Likidite Sağlayıcılar

Yüksek `likidite` bir DEX'in başarısı için şarttır, ama kripto ekosistemindeki likidite sınırlıdır; bu yüzden her DEX olabildiğince çok likidite çekmek için yarışır. Peki bu likidite nereden gelir?

Merkeziyetsiz bir ekosistemde DeFi vatandaşları, bir platformun TVL'sini (kilitli toplam değer) artırmak için havuza likidite sağlamaya teşvik edilir. Havuz üzerinden alım satım yapan kullanıcılardan toplanan ücretler, sağladıkları likidite miktarına göre LP'lere (likidite sağlayıcılar) dağıtılır. Doğru duydun: tokenlarını bir DEX likidite havuzuna ödünç vererek pasif gelir elde edebilirsin.

`LP` olmanın dikkat edilecek pek çok yanı var; bunu ileride ele alacağız. Şimdilik şunu bil: DEX likidite havuzlarında görünen yüksek APR'lerin (yıllık yüzde getiri) garantisi yoktur ve zarar da edebilirsin.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Cümleyi tamamla: “Likidite __________.”

- [ ] yüksekken oynaklık yüksektir.

> ℹ️ Yanlış, tekrar dene.

- [ ] düşükken oynaklık düşüktür.

> ℹ️ Yanlış, tekrar dene.

- [x] düşükken oynaklık yüksektir.

> ℹ️ Doğru! Likidite ve oynaklık genelde ters orantılıdır.

# Knowledge Check 6

DEX'ler kullanıcıları likidite sağlamaya nasıl teşvik eder?

- [ ] Alım satım zararlarına karşı sigortayla.

> ℹ️ Ne CEX'ler ne de DEX'ler seni kötü bir yatırımın zararından korur.

- [x] Platform ücretlerinden pay ve/veya bonus tokenlarla.

> ℹ️ DEX ücretleri genelde LP'ler dahil çeşitli paydaşlar arasında paylaşılır. Bazı platformlar ek bonus bile verir.

- [ ] Özel likidite havuzlarına erişimle.

> ℹ️ Özel likidite havuzu yoktur; düşük hacim yeterli getiri sağlamazdı.

- [ ] Yukarıdakilerin hepsiyle.

> ℹ️ Burada tek bir doğru cevap var, hangisi olduğunu bulabilir misin?

# Platform Ücretleri

Hem CEX'ler hem DEX'ler hizmetleri için ücret alır, blokzincirle etkileşmek de bedava değildir. Platform seçerken hesaba katman gereken beş yaygın maliyet:

🏷️ **Platform ücretleri:** CEX'ler komisyonlarını kendileri belirler; DEX havuz ücretleri havuza göre değişir (genelde yüzdenin küçük bir kesri). Temel fark: DEX ücretleri zincir üstünde herkese açıktır.

🌐 **Ağ ücretleri:** Blokzincirler dApp işleminin üstüne gas ücreti alır. Ağı sakin saatlerde kullanarak bu maliyeti azaltabilirsin. Ethereum Mainnet için canlı gas tahmini: [Etherscan.io](https://etherscan.io/gastracker). Layer 2'lerde ücretler çok daha ucuz; ağları [growthepie](https://www.growthepie.com/) üzerinden karşılaştır.

📦 **Köprü ücretleri:** Hem CEX'ler hem blokzincir köprüleri, kripto parayı bir ağdan diğerine taşımak için ücret alır. CEX'lerde kendi sayfalarındaki bilgilere bak. Köprü dApp'leri transferi onaylamadan önce ücret tahmini gösterir.

💹 **Döviz kurları:** Bir CEX veya DEX'te doğrudan itibari parayla kripto alırken piyasa kurunu yansıtmayan fiyatlara dikkat et.

🧊 **Slippage:** Fiyatlar hızlı hareket eder, bu yüzden DEX'ler takasta dalgalanmaya pay bırakır: buna `slippage` denir (ayarlanabilir, genelde %0,5-2). Bir alım satımda bu değere kadar kaybedebilirsin, ama ayarı çok düşük tutarsan işlemin reddedilebilir.

Alım satım yapmadan önce mutlaka kendi araştırmanı yap; platformun maliyetlerini ve ödünlerini anla.

# DEX Avantajları

Bu derste çok teori işledik, ama DEX'lerin sana uygun olup olmadığını hâlâ merak ediyor olabilirsin. Genel olarak şu durumlarda Merkeziyetsiz Borsalardan fayda görürsün:

- 🔑 Dijital varlıklarının kontrolünü kendinde tutmak istiyorsan.
- 🔒 Varlıklarını blokzincirde güvenceye alıp CEX çöküşlerinden kaçınmak istiyorsan.
- ⌛ Kripto para piyasasına 7/24 erişmek istiyorsan.
- 👛 Daha geniş bir kripto para yelpazesine ulaşmak istiyorsan.
- 🤑 Likidite sağlamakla ilgileniyorsan.
- 🛂 Girdiğin her platformda kayıt olup `KYC` yapmak istemiyorsan.
- ⚔️ Merkeziyetsiz Finansı keşfetmenin ek risk ve ödüllerini arıyorsan.

Yine de neredeyse her DeFi kullanıcısının bir Merkezi Borsada hesabı vardır. Çünkü CEX'ler geleneksel bankacılık dünyasına kolay giriş ve çıkış imkanı sunar; banka hesabındaki parayı kolayca blokzincire, oradan da geri taşıyabilirsin. [Ryan Sean Adams](https://twitter.com/RyanSAdams) bunu umumi tuvalet kullanmaya benzetir: _“Girersin, işini görürsün, çıkarsın.”_

Bu iyi bir şey: bir CEX hesabıyla başlayıp gezinmeye alıştıkça yavaş yavaş DeFi'ye geçebilirsin.

# DEX Riskleri

DEX kullanmanın riskleri de vardır. En etkili olanlardan birkaçı:

🐞 **Akıllı sözleşme riski:** Denetimler akıllı sözleşme hatası ihtimalini azaltır ama yok etmez: 2025'te birden fazla firmaca denetlenmiş büyük bir DEX, ince bir kod hatası yüzünden 128 milyon dolar kaybetti. En kötü senaryoda alım satım tutarın kadar kaybedebilirsin. Güvenilir ve çok denetlenmiş akıllı sözleşmeleri tercih et.

💰 **Öz saklama riski:** Özel anahtarlarından tek başına sorumlu olman, hırsızlık, dolandırıcılık ya da kaybolan bir kurtarma ifadesi yüzünden cüzdanının tamamını kaybedebilmen demektir. Bu yüzden riski çoklu cüzdan stratejisiyle azaltmak ve kurtarma ifadelerinin bir kopyasını güvenli, gerçek dünyadaki bir yerde saklamak önemlidir.

🥪 **Sandviç saldırıları:** Takas slippage'ını yüksek ayarlamak, önden koşan işlemcilerin sana karşı `sandviç saldırısı` düzenleme ihtimalini artırır. Bir sandviç saldırısında, bir alım satımda slippage tutarın kadar kaybedebilirsin. Bu saldırıdan nasıl korunacağını ileride ele alacağız.

Bu avantaj ve riskleri düşününce, şu durumlarda bir CEX sana daha uygun olabilir:

- 🎓 Kripto para yolculuğunun başındaysan ve riskleri, ödülleri anlamaya çalışıyorsan.
- ⚖️ Alım satım sıklığın ve hacmin küçükse, blokzincir ücretleri gerçekçi bir maliyet değilse.
- 🏰 Fonlarından kendin sorumlu olmak yerine bir borsaya güvenmeyi tercih ediyorsan.

Bazı kullanıcılar riski düşürmek için karma bir yol izler: kripto parayı alıp satmak için CEX kullanır, saklamak için blokzinciri.

# Knowledge Check 7

Neden Merkezi Borsa yerine Merkeziyetsiz Borsa kullanırsın?

- [ ] Merkezi Borsada listelenmeyen tokenlara erişmek için.

> ℹ️ Bu bir DEX özelliğidir, ama tek özellik değildir.

- [ ] Takas edilen fonların kontrolünü elinde tutmak için.

> ℹ️ Bu bir DEX özelliğidir, ama tek özellik değildir.

- [ ] Normalde ulaşamayacağın araç ve fırsatlara erişmek için.

> ℹ️ Bu bir DEX özelliğidir, ama tek özellik değildir.

- [x] Yukarıdakilerin hepsi.

> ℹ️ Doğru! DEX'ler CEX'lere kıyasla bu avantajların hepsini sunar.

# DEX Seçmek

DeFi'de çok sayıda Merkeziyetsiz Borsa var ve bazıları diğerlerinden iyi. Hangi DEX'i kullanacağına karar verirken şu beş etkene bak:

🥇 **Meşruiyet:** Kurum güvenilirliği, kalitesi ve uzun ömrüyle tanınıyor mu?

⛲ **Likidite:** Likidite havuzunun `TVL`'si fiyat etkisini en aza indirecek kadar yüksek mi?

🖱️ **Kullanım kolaylığı:** Arayüzle etkileşmek kolay mı?

🔐 **Güvenlik:** Akıllı sözleşmeler birden fazla denetçi tarafından denetlendi mi?

🎁 **Ödüller ve özellikler:** Borsayı kullanmak ya da likidite sağlamak için sadakat ödülü var mı? Yönetişimde oy kullanabiliyor musun?

Bu alanlarda yüksek puan alan bilinen isimler arasında Uniswap, Curve, Velodrome ve PancakeSwap var. Birkaç favori bulana kadar DEX'ler arasında kolayca geçiş yapabilirsin! Ders görevinde, Optimism ağının köklü DEX'i Velodrome'u kullanacağız. Kullanımı kolay ve Layer 2'de olduğu için ücretler çok daha makul!

# DEX'te İyi Alışkanlıklar

Bir dApp ile etkileşmeden önce fonlarını güvende tutmak için izlemen gereken bazı iyi alışkanlıklar var:

👩‍💻 Bir dApp'in bağlantısını projenin resmi X (Twitter) hesabından (altın onay işareti) veya güvenilir bir üçüncü taraftan doğrula, sonra yer imlerine ekle. Birçok DeFi dolandırıcılığı sahte bir bağlantıyla başlar; popüler arama motorlarında bile.

🔓 Zincir üstü `token izinleri` verirken izni alım satım tutarınla sınırla. Birçok DEX artık sadece o alım satımı kapsayan imza tabanlı onaylar kullanıyor: [Token İzinlerini Yönetme](https://app.banklessacademy.com/lessons/managing-token-allowances) dersine bak.

♟️ HODL cüzdanınla dApp'lere girme; dApp'ler için ayrı bir cüzdan kullan. [Web3 Güvenliği dersimiz](https://app.banklessacademy.com/lessons/web3-security) cüzdan stratejilerini anlatıyor.

Artık bir Merkeziyetsiz Borsayla etkileşime hazırsın!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Saygın bir DEX seçtiğinden nasıl emin olursun?

- [x] İtibarını araştırıp sadece güvenilir URL'leri kullanarak.

> ℹ️ Doğru! DEX'in çevrimiçi itibarını bağımsız olarak doğrula ve sadece güvenilir bir kaynağın verdiği URL'leri kullan.

- [ ] İlk kullanımda küçük bir test etkileşimi yaparak.

> ℹ️ Kötü bir akıllı sözleşmeyle tek bir etkileşim cüzdanının tamamını boşaltabilir.

- [ ] Yukarıdakilerin ikisiyle de.

> ℹ️ Yanlış. Kötü bir akıllı sözleşmeyle tek bir etkileşim cüzdanının tamamını boşaltabilir.
