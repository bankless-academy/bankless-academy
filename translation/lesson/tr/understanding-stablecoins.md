---
TITLE: Stablecoin’leri Anlamak
DESCRIPTION: Blokzincirde dolar, euro ve daha fazlasını kullan.
LANGUAGE: Türkçe
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
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
## Önemli Noktalar

> * Stablecoinler, dolar veya euro gibi itibari paraların blokzincirdeki karşılığıdır.
>
> * Stablecoinler genelde token olarak çıkarılır (örneğin Ethereum'da `ERC-20` tokenları) ve artık birçok blokzincirde dolaşır. DeFi kullanıcılarının blokzincirde kalarak itibari para değeriyle kripto değer arasında hızlıca geçiş yapmasını sağlarlar.
>
> * Birkaç stablecoin kategorisi vardır ve her birinin kendi ödünleri ile risk profili vardır.
>
> * Stablecoinler geleneksel bir bankada itibari para tutmaktan daha fazla yıllık faiz getirebilir, ama artık bu getiriyi kimin ve nasıl sunabileceğini düzenlemeler belirliyor.

## Neden Stablecoin Tutmalı?

Stablecoinler DeFi ekosisteminin temel taşlarından biri oldu. 2022 zirvesinde arz yaklaşık 140 milyar dolara ulaştıktan (aşağıdaki grafik) sonra toplam arz 2026'da 300 milyar doları geçti. Stablecoinlerle 2025'te 30 trilyon doların üzerinde işlem gerçekleşti; bu, Visa'nın o yıl işlediğinden fazla.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Talep görmelerinin nedenleri:

* **İstikrar:** Öz saklamalı cüzdanında stablecoin tutmak, itibari para tutmak gibidir, ama blokzincirde. Circle'ın çıkardığı USD Coin (USDC) gibi bir stablecoin tuttuğunda, ether ve bitcoin gibi varlıkların fiyatı dalgalanırken onun ABD dolarıyla 1:1 değerini korumasını beklersin.

* **Esneklik:** Bu sabitlenmiş değer blokzincirde bir token olarak var olduğu için, itibari para değeriyle kripto değer arasında geçiş kolaydır.

* **Erişim:** Stablecoinler, izinsiz borç alma ya da faiz kazanmak için borç verme gibi bir dizi merkeziyetsiz finans hizmetine erişim sağlar.

* **Güvenlik:** Kriptografi, saldırganların işlemleri ele geçirmesini veya taklit etmesini son derece zorlaştırır.

Bir stablecoinin itibari karşılığıyla 1:1 eşitliğini, yani `fiyat çapasını`, nasıl koruduğu en önemli özelliğidir. İtibari para nasıl sadece altındaki temeller kadar değerliyse, bir stablecoinin çapa mekanizması da elindekinin değerini belirler.

## Stablecoin Kategorileri

Bir stablecoinin fiyat çapasını korumak için üç yaygın strateji vardır:

* 💵 **İtibari para destekli:** gerçek dünyadaki itibari para rezervleriyle 1:1 teminatlandırılmış.

* 🔗 **Kripto teminatlı:** DeFi protokollerine yatırılan kripto ile aşırı teminatlandırılmış.

* 🔃 **Algoritmik:** tam teminat yerine arzı dengeleyen algoritmalar; sorunlu bir geçmişi olan tasarım.

### 1\. İtibari Para Destekli Stablecoinler

İtibari para destekli stablecoinler, gerçek dünyadaki para rezervleriyle eşleşen sabit bir token arzı çıkararak değerini korur. Zincir üstü fiyatları arz/talep ekonomisiyle tutulur: kimse zincir üstündeki 1 dolarlık değere gerçek dünyada 1 dolardan fazla ödemek istemez, alım satımını başka yere taşır. Artan talebi karşılamak için `stablecoin ihraççısı` ek itibari para kilitler ve token arzını aynı miktarda artırır.

Öne çıkan itibari para destekli stablecoinler arasında Tether'in USDT'si ve Circle'ın USD Coin'i (USDC) var. Circle ayrıca euroya sabitlenmiş karşılığı EURC'yi de çıkarıyor.

Stablecoin ihraççıları çeşitli yollarla gelir elde eder. Bunlar arasında itibari rezervlerinin bir kısmını kısa vadeli ABD Hazine tahvillerine ve nakit benzerlerine yatırmak, ayrıca işlem ücreti toplamayı ve borç verme hizmeti sunmayı içeren karma bir gelir modeli kullanmak var.

> **İtibari Para Destekli Stablecoinlerle Yenilik ve Hayırseverlik: Glo Dollar**
>
> Glo Foundation, ABD doları destekli stablecoini [Glo Dollar](https://www.glodollar.org/) (USDGLO) ile rezerv gelirine yenilikçi bir yaklaşım getiriyor: rezervlerden kazanılan faiz, aşırı yoksulluk içindeki insanlar için temel gelir programlarını finanse ediyor. Kullanıcılar sadece USDGLO tutarak gömülü bir hayırseverlik yapmış oluyor. Glo Dollar'ın nasıl çalıştığını [buradan](https://www.glodollar.org/articles/how-glo-works) öğrenebilirsin.

İtibari para destekli stablecoin kullanırken dikkat edilecekler:

* **Rezerv Raporlaması:** Sahiplerin, stablecoin tokenlarının itibari rezervlerle birebir eşleştiğinden emin olması gerekir. Çoğu ihraççı `onay` yayımlar (bağımsız bir muhasebeci rezervlerin belirli bir tarihte var olduğunu doğrular); bu, ihraççının mali durumunun tam denetiminden zayıftır ve şu anda büyük ihraççıların hiçbiri tam denetim yayımlamıyor. Circle aylık USDC onayları yayımlıyor (Deloitte); teminatı konusunda tarihsel olarak şeffaf olmayan Tether ise artık üç ayda bir onay yayımlıyor (BDO).

* **Düzenleme:** ABD'de GENIUS Yasası (Temmuz 2025'te imzalandı), ödeme stablecoini ihraççılarının rezervlerini 1:1 oranında nakit ve kısa vadeli ABD Hazine tahvillerinde tutmasını zorunlu kılıyor ve sahiplerine faiz ödemesini yasaklıyor. AB'de MiCA çerçevesi, büyük borsaların Avrupalı kullanıcılar için USDT gibi uyumsuz stablecoinleri listeden çıkarmasına yol açtı.

* **Sansür Riski:** Hem USDC hem USDT devlet soruşturmalarına tabi olduğu için, bu tokenların `akıllı sözleşmeleri` bir dondurma işlevi içerir: uygun görülmeyen faaliyet durumunda kullanıcının zincir üstü varlıkları kilitlenebilir. Bu dondurma işlevi `saklayıcısız cüzdanlarda` tutulan tokenlar için de geçerlidir.

İtibari para destekli stablecoin sektöründeki yüksek merkezileşme, itibari paraya sabitlenmiş değeri kripto-yerlisi bir şekilde tutmak için hâlâ büyük bir gelişim alanı bırakıyor.

### 2\. Kripto Teminatlı Stablecoinler

Kripto teminatlı stablecoinler daha şeffaf ve merkeziyetsiz bir seçenektir; bu özellikler bazı riskleri ortadan kaldırmaya yardım eder. İtibari çapayı kripto varlık rezervleriyle korurlar. Kripto piyasasının oynaklığı bu rezervlerin toplam değerini etkilediği için bu stablecoinler aşırı teminatlandırılır, bazen %200'e kadar! Teminata konan tüm varlıklar zincir üstünde görülebilir; böylece kullanıcılar stablecoinlerinin gerçek bileşimine 7/24 erişir.

Bu kategorinin en bilinen örneği Sky'ın USDS'idir: MakerDAO'nun 2024'te Sky olarak yeniden markalanmasının ardından, ilk kripto teminatlı stablecoin olan MakerDAO'nun Dai'sinin (DAI) halefi. Merkeziyetsizliğin daha saf bir yorumu için Liquity'nin LUSD'si yalnızca aşırı teminatlandırılmış ETH mevduatlarıyla desteklenir.

![USDS'in öncülü DAI'nin teminat dağılımı (Haziran 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Dikkat edilecekler:

* **Teminat Değerlemesi:** Bir stablecoinin rezervleri genelde kriptodan, diğer stablecoinlerden ve hatta başka varlık sınıflarından oluşur. Örneğin USDS; ETH, stablecoinler, ABD Hazine tahvilleri gibi gerçek dünya varlıkları ve birkaç küçük bileşenle desteklenir. Bu çeşitli varlıkların risklerini azaltmak için USDS aşırı teminatlandırılmıştır (bu yazının yazıldığı tarihte). ETH fiyatı %20 düşse bile USDS'in tokenlarını karşılayacak [yeterli teminatı](https://defillama.com/stablecoins) olurdu. Yine de varlık yelpazesindeki daha fazla fiyat oynaklığı çapayı aşındırmaya başlayabilir.

* `Karşı taraf riski`: Birden çok varlık sınıfına dayanmak, varlıklardan birinin sıkıntıya girip elindekinin değerini etkileme ihtimalini artırır. Ama her bir riskin etkisine yalnızca kısmi olarak maruz kalırsın.

* **Yönetişim Riski:** Bu tür stablecoin ve hazinesi, merkeziyetsiz bir yönetişim oylayıcıları grubu tarafından yönetilir. Bu da insan hatası ve olası yönetişim ele geçirilmesi riskleri demektir.

### 3\. Algoritmik Stablecoinler

Bu tokenlar çapalarını, tam teminat tutmak yerine kendi arzlarını otomatik dengeleyerek korumaya çalışır: zincir üstü bir algoritma, piyasa fiyatı çapanın altına düştüğünde tokenları dolaşımdan çeker, üstüne çıktığında yenilerini mint eder. Kâğıt üzerinde bu, bankasız ve teminatsız bir stablecoin vaat eder. Pratikte bu tasarımın saf hali felaketle sonuçlandı.

En bilinen örnek Terra'nın UST'sidir: algoritması, sahiplerin her zaman 1 UST'yi Terra'nın oynak LUNA tokenının 1 dolarlık miktarıyla takas etmesine izin veriyordu. Mayıs 2022'de kitlesel UST satışı algoritmayı devasa miktarda LUNA mint etmeye zorladı; bu da LUNA fiyatını çökertti ve daha fazla satışı tetikledi: birkaç gün içinde yaklaşık 40 milyar doları silen bir `ölüm sarmalı`. UST çapasını bir daha hiç geri kazanamadı.

Ayakta kalan projeler saf modeli terk etti. Bir zamanlar kısmen algoritmik olan Frax, 2023'te %100 teminatlandırmaya geçti; şu anki stablecoini frxUSD, tokenleştirilmiş ABD Hazine fonlarını da içeren rezervlerle destekleniyor. FRAX ise artık protokolün yönetişim tokenı.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Enkazdan farklı ve modern bir kategori doğdu: Ethena'nın USDe'si gibi hibrit ya da ‘sentetik dolar’ tasarımları. Bunlar kripto teminatın yanında, fiyat hareketlerini sıfırlayan dengeleyici alım satım pozisyonları da tutar (‘delta-nötr’ korunma). Teminatlıdırlar, ama yeni bir biçimde ve kendi riskleriyle: bu pozisyonları tutan borsalara ve korunmayı kârlı tutan piyasa koşullarına bağımlılık gibi.

Dikkat edilecekler:

* **Ölüm Sarmalı Riski:** Saf algoritmik bir çapa, piyasa güveninin sürmesine bağlıdır. Güven kırıldığında arz mekanizması çöküşü durdurmak yerine büyütebilir ve geri alınacak teminat kalmaz.

* **Çok Teknik:** Güven ve risk/ödül bilinci oluşturmak için tokenı gerçekte neyin desteklediğini (ve bu desteğin hangi koşullarda çökebileceğini) anlaman gerekir.

* **Yeni Teknoloji Riski:** Hibrit ve sentetik tasarımlar tam bir piyasa döngüsünden büyük ölçüde geçmedi. Sadece üst düzey denetçilerce birkaç kez denetlenmiş akıllı sözleşmelere sahip tokenları kullan ve unutma: denetimler hatalı bir ekonomik tasarıma karşı koruyamaz.

## Stablecoin Seçmek

Tutulacak en iyi stablecoin hangisi? DeFi'de her şeyde olduğu gibi, bunun cevabı senin **ihtiyaçlarına**, **değerlerine** ve **risk toleransına** bağlı.

Kategorilerin kısa bir özeti:

* 💵 **İtibari para destekli:** Geleneksel yaklaşım; zincir üstünde itibari para tutmaya en yakın seçenek.

  * Değerler: Alışılmışlık, kurumsal güven.

  * Riskler: Şeffaf olmayan teminat, sağlayıcının fonları dondurabilmesi.

* 🔗 **Kripto teminatlı:** Dengeli, kripto-yerlisi bir yaklaşım; teminat riskini birden çok varlık sınıfına yayar.

  * Değerler: Çeşitlendirme, şeffaflık, ilerleme.

  * Riskler: Kripto piyasasının oynaklığı, diğer varlıklara bağımlılık.

* 🔃 **Algoritmik:** Deneysel sınır: saf tasarımlar felaketle sonuçlandı, modern hibritler ise hâlâ kanıtlanmadı.

  * Değerler: Yenilik, sermaye verimliliği, ilerleme.

  * Riskler: Ölüm sarmalları, hatalı ekonomik tasarımlar, akıllı sözleşme hataları.

Her zamanki gibi, bir şeyi öğrenmenin en iyi yolu onu denemektir. Hatta farklı stablecoinlerden bir karışım tutmaya bile karar verebilirsin.

Ve unutma, her kategorideki stablecoinlerin hepsi eşit değildir! Yeni bir tokenla etkileşmeden önce kendi araştırmanı yap.

---

Kaşif El Kitabı'nın bu bölümünü, ‘Stablecoin'leri Anlamak’ı, beğendiğini umuyoruz.

Yolculuklarında kolayca başvurabileceğin bir kopyaya sahip olmak ya da Bankless Academy'nin gelecekteki içeriklerini desteklemek istiyorsan bu bölümü koleksiyonuna eklemeyi unutma. İyi yolculuklar Kaşif!

---

## Sık Sorulan Sorular

### En popüler stablecoinler hangileri?

`Piyasa değeri` en yüksek stablecoinlere bakmak, piyasanın şu anki tercihi hakkında fikir verir; ama bu, nasıl pozisyon alman gerektiği ya da o pozisyonun ne kadar güvenli olduğu konusunda bir tavsiye değildir.

Piyasa değerine göre en büyük stablecoinlerin canlı listesi: <https://defillama.com/stablecoins>

Kripto para kullanıcıları yatırım seçenekleri arasından seçim yaparken sık sık ‘Lindy Etkisi’nden söz eder. Bu kavrama göre bir şey ne kadar uzun süredir varsa, var olmayı sürdürme ihtimali o kadar yüksektir. On yedi yıllık kripto para tarihi bunun sadece bazen doğru olduğunu gösterdi.

### Stablecoinleri nereden alabilirim?

Merkezi Borsalar (CEX'ler) popüler itibari para destekli stablecoinleri (ve genelde kendi markalı stablecoinlerini) sunar; diğer stablecoin türleri çoğu zaman bulunmaz.

Kripto teminatlı ve algoritmik tokenlar için bir Merkeziyetsiz Borsaya (DEX) uğra ya da ‘MetaMask Buy’ gibi doğrudan cüzdan giriş hizmetlerini kullan. Eşler arası pazar yerleri hakkında daha fazlası için [Merkeziyetsiz Borsalar](https://app.banklessacademy.com/lessons/decentralized-exchanges) dersimize göz at.

### Stablecoinlerden nasıl faiz kazanırım?

Bazı CEX'ler, sadece platformlarında stablecoin tutmaya getiri verir; bu getiri, platform kullanımını teşvik etmek için platform kârından karşılanır. ABD'deki okurlara not: GENIUS Yasası uyarınca, düzenlemeye tabi stablecoin ihraççıları sahiplerine faiz ödeyemez; getiri yalnızca üçüncü taraf platformlardan gelir ve ülkeden ülkeye değişir.

DeFi'de de güven gerektirmeyen borç verme ve borç alma platformlarıyla faiz kazanabilirsin. Bu platformlar borç verenlerle borç alanları buluşturur ve riski zincir üstü teminat ile akıllı sözleşmeler üzerinden yönetir. Stablecoin ile borç verenler geleneksel bankacılıktakinden çok daha yüksek yıllık getiri elde edebilir, ama ödülün olduğu yerde risk vardır!

Borç verme ve borç alma konusu kendi Bankless Academy bölümünü hak ediyor. Şimdiden daha fazlasını öğrenmek istiyorsan [Aave.com](https://aave.com/) ve [Curve.fi](https://curve.fi/) gibi platformları araştırabilirsin.

### Bir stablecoin çapasını kaybederse ne olur?

Her stablecoinin piyasa fiyatı, alım satımın gelgitiyle biraz kayar. Büyük stablecoinlerde bu sapma genelde 1 doların bir sentin birkaç yüzde biri kadar üstünde veya altındadır. Bu küçük sapmalar, arbitraj fırsatlarını değerlendiren yatırımcılarca hızla kapatılır.

Yine de bir stablecoinin çapasını güvenli ve geçici aralıkların ötesinde kaybettiği durumlar olur. Bu etki her zaman kalıcı değildir (USDC, Mart 2023), ama kalıcı da olabilir (Terra, Mayıs 2022).

USDC gibi bazı itibari para destekli stablecoin ihraççıları, kendi sitelerinden stablecoini 1:1 oranında normal itibari paraya çevirme imkanı sunar. Bunun kriz zamanlarında da geçerli olup olmadığı ayrı bir konu.

---

**Yazar**

**[Tetranome](https://twitter.com/tetranome)**, Bankless Academy'de Project Champion olarak kullanıcı deneyimi, arayüz, tasarım ve platform müfredatı üzerine çalışıyor.

**Editör**

**[Trewkat](https://twitter.com/trewkat)**, BanklessDAO'da yazar ve editör. Kripto ve NFT'ler hakkında bilgi edinmeye, özellikle de bu bilgiyi başkalarına en iyi nasıl aktaracağına ilgi duyuyor.

**Destekçi**

Bu sponsorsuz makale, ücretsiz Bankless Academy eğitiminin bir parçası. Gelecekteki içerikleri desteklemek için makaleyi koleksiyonuna ekle!
