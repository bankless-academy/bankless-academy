---
TITLE: Token İzinlerini Yönetme
DESCRIPTION: Cüzdanını istenmeyen akıllı sözleşme etkileşimlerinden koru.
LANGUAGE: Türkçe
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
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

> * Token izinleri, bir cüzdandaki tokenları her seferinde yeni bir onay almadan harcamak üzere `akıllı sözleşmelere` verilen izinlerdir.
>
> * Kullanıcı izinlerin açık olduğunun farkında değilse, kötü niyetli kişiler bunları istismar edebilir.
>
> * Revoke.cash gibi araçlar, kullanıcıların token izinlerini kolayca incelemesini ve iptal etmesini sağlar.

## Giriş

DeFi, kullanıcılara `özel anahtarları` dahil varlıkları üzerinde kontrol verir ve fonları üzerinde daha önce görülmemiş bir egemenlik sunar. Ama büyük güç daha büyük sorumluluk getirir: varlıklarının güvenliğini ve yönetimini tamamen sen üstlenirsin.

DeFi kullanıcılarının bilmesi gereken dört yaygın dolandırıcılık kategorisi var:

* **Kurtarma İfadesinin Ele Geçirilmesi:** Saldırganlar kullanıcıları kurtarma ifadelerini açıklamaya kandırmaya çalışır; bu da fonlara yetkisiz erişim demektir. Kurtarma ifadenle bir saldırgan tüm fonlarını boşaltabilir ve cüzdana yeni para yatırdıkça bunu sürdürebilir. Ne yazık ki bu durumdan geri dönüş yoktur; tek çözüm, yeni bir `kurtarma ifadesi` ile tamamen yeni bir cüzdan oluşturmaktır.

* **Doğrudan ETH Transferleri:** Dolandırıcılar ETH transferlerini “Security Update” gibi bir fonksiyon çağrısı kılığına sokup gizleyebilir. Bu dolandırıcılığın eski sürümlerindeki ham imza yöntemi MetaMask'ten kaldırıldı; günümüz oltalama kitleri bunun yerine sıradan görünen imza taleplerini kötüye kullanır ve cüzdanının gösterdiğini okumadan imzalamana güvenir. Bu tuzağa düşersen fonlarını geri alamazsın, ama cüzdanını diğer işlemler için güvenle kullanmaya devam edebilirsin.

* **NFT Pazar Yeri İlanları:** OpenSea gibi pazar yerlerine verdiğin izinleri istismar eden sahte ilanlara ve kötü niyetli sözleşmelere dikkat et. Dolandırıcılar seni, onay verdiğin `NFT'leri` satışa çıkaran `zincir dışı` bir mesajı imzalamaya kandırabilir; ortada gerçek bir token işlemi olmaz.

* **Token İzinleri:** Saldırganlar izinleri manipüle ederek başta onaylanandan daha fazla fona erişebilir. “Approval” (onay), tokenlarına veya NFT'lerine erişim veren zincir üstü bir işlemdir. “Permit” aynı erişimi sağlar ama sadece gas gerektirmeyen zincir dışı bir imza ister. Uniswap ve modern alım satım uygulamalarının çoğu bu sistemi (Permit2) kullanır. Permit imzaları kullanılana kadar zincir üstü onay olarak görünmez ve son kullanma tarihi taşıyabilir; Revoke.cash'in “Signatures” görünümünden bunları kontrol edip iptal edebilirsin.

  Akıllı sözleşmeler yaygınlaştıkça, güvendiğimiz sözleşmelerin özel anahtarları açığa çıkarmadan işlem yapabilmesi için `token izinleri` gerekli hale gelir. Token izinleri, dApp'lerin cüzdanındaki tokenları senin adına otomatik olarak taşımasına imkan verir. Bu kolaylık verimliliği artırsa da, kullanıcıları dolandırıcılık ve yetkisiz erişim yoluyla olası saldırılara da açık bırakır.

Bu makalede ‘Token İzinleri’ni ele alacak ve izinlerini yönetmene yardımcı olmak için yapılmış bir topluluk aracını tanıtacağız.

## Token İzinleri: Anlamak, Yönetmek ve Güvende Kalmak

Token izinleri, bir cüzdandaki tokenları harcamak üzere akıllı sözleşmelere önceden verilen izinlerdir. Cüzdandan doğrudan varlık transferi için her seferinde ayrı onay istemeden işlem yapılmasını sağladıkları için kritik bir rol oynarlar. Ama kötüye kullanıldığında token izinleri, farkında olmayan kullanıcılar için bir saldırı yoluna dönüşebilir. Bu riske karşı DeFi kullanıcılarının dikkatli olması, güvenlik konusunda kendini eğitmesi ve token izinlerinin gerçekte nasıl çalıştığını anlaması önemlidir.

Üçüncü taraf bir sözleşmeye izin verirken iki adım vardır:

1. Cüzdan bağlantısı: Cüzdanını bir dApp'e bağladığında, sadece cüzdan `adresin` onun arayüzüyle paylaşılır; böylece bakiyelerini ve hareketlerini gösterebilir. Bağlanmak tek başına zincir üstü hiçbir izin vermez.

2. Token onayı: dApp ile işlem yapmak için, akıllı sözleşmesinin belirli tokenları senin adına taşımasını onaylarsın. Gerçek harcama yetkisini veren adım budur.

Token izinlerini önceden yöneterek, hiçbir sözleşmenin cüzdanından başta belirlenen tutardan fazlasını çekmemesini sağlayabilirsin. Neyse ki DeFi kullanıcılarına güven ve huzur vermek için yapılmış topluluk araçları var.

## Adım Adım: Revoke.cash Kullanımı

[Revoke.cash](https://revoke.cash/), farklı dApp'lere verilen izinleri incelemeye ve izlemeye yarayan basit bir site üzerinden token izinlerini kolayca yönetmeni sağlar. Varlıklarını korumak ve cüzdanının kontrolünü geri almak için bu güçlü topluluk aracını nasıl kullanacağına adım adım bakalım.

**1\. Cüzdanını bağla**:

Token izinlerini iptal etmeye başlamak için [Revoke.cash](http://revoke.cash/) adresine git ve sağ üst köşedeki “Connect Wallet” (Cüzdanı Bağla) düğmesine tıkla. Alternatif olarak, cüzdanının genel adresini arama çubuğuna elle yazabilirsin. Yükleme bitince o ağdaki tüm `token onaylarının` listesini görürsün.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. İzinlerini incele**:

Cüzdanını bağladıktan sonra mevcut onaylarını inceleyebilirsin. Yetki verilen harcayıcı adrese göre sıralayabilir, filtreleyebilir veya arama yapabilirsin. Yakın zamanda kötü niyetli bir onaydan şüpheleniyorsan “Newest to Oldest” (yeniden eskiye) sıralaması özellikle işe yarar. Verdiğin token izinlerine genel bir bakış için sıralama ve filtreleme seçeneklerini kullan. İzinler zincir bazında verilir; bu yüzden ağ seçimini kullanarak incelemeyi kullandığın her ağda tekrarla.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. İstemediğin izinleri iptal et:**

İptal etmek istediğin onayları belirledikten sonra her birinin yanındaki “Revoke” (İptal Et) düğmesine tıkla. Onaya ileride hâlâ ihtiyacın varsa ama riski azaltmak istiyorsan, onaylanan tutarın yanındaki kalem simgesine tıklayarak tutarı değiştirebilirsin.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Şu durumlarda bir token iznini iptal etmek ya da ayarlamak senin yararına olabilir:

1. Yeni yayına alınan bir akıllı sözleşme istismar edilir ve düzenli kullandığın bir `merkeziyetsiz borsada` açık yaratır.

   Nisan 2023'te popüler `DEX` SushiSwap benzer bir istismara uğradı ve kullanıcılardan \~3,5 milyon dolar çalındı. Token iznini iptal etmemiş kullanıcılar risk altında kalmaya devam etti.

2. Kötü niyetli bir yönetişim önerisi, kullanıcıların fonlarını boşaltmak amacıyla birkaç sözleşmeyi günceller.

   BNB zincirindeki bir `DeFi` protokolü olan Atlantis Loans, birkaç sözleşmeyi hedefleyen bir yönetişim önerisini uygulayınca 2,5 milyon doların üzerinde varlık ele geçirildi. Onay limitini yöneten kullanıcılar, cüzdanlarının bu kötü niyetli öneriyle tamamen boşaltılması riskini azalttı.

## Delegasyonları Unutma

Ethereum'un Pectra yükseltmesinden (Mayıs 2025) bu yana, gözden geçirilmesi gereken tek izin türü token izinleri değil. Yeni bir cüzdan özelliği (EIP-7702), cüzdanının ek koda yetki devretmesine izin veriyor. Bu, işlemleri toplu yapmak gibi kolaylıklar sağlıyor, ama yeni bir boşaltma numarasına da kapı açıyor: tek bir kötü niyetli imza, yatırdığın her şeyi anında saldırgana ileten “süpürücü” kodu kurabilir, üstelik kurtarma ifaden hiç açığa çıkmadan. 2025'te Wintermute'taki araştırmacılar, ilk cüzdan delegasyonlarının %97'sinden fazlasının aynı süpürücü koda işaret ettiğini buldu.

Revoke.cash aktif delegasyonlarını “Delegations” sekmesinde gösterir, ama delegasyonları dApp'ler değil cüzdanın kontrol ettiği için istenmeyen bir delegasyonu cüzdanının kendi içinden iptal edersin. MetaMask'te hesap ayrıntılarını aç ve hesabı standart hesaba geri çevir. `Akıllı hesaba` geçmeyi hiç seçmediysen, bulduğun her delegasyonu düşmanca kabul et.

---

Cüzdan savunmamızı güçlendirme zamanı! Kaşif El Kitabı'nın bu bölümünü, ‘Token İzinlerini Yönetme’yi, beğendiğini umuyoruz.

Yolculuklarında kolayca başvurabileceğin bir kopyaya sahip olmak ya da Bankless Academy'nin gelecekteki içeriklerini desteklemek istiyorsan bu bölümü koleksiyonuna eklemeyi unutma. İyi yolculuklar Kaşif!

---

## SSS

### Revoke.cash'i ne zaman kullanmalıyım?

Revoke.cash'i düzenli aralıklarla, özellikle bir dApp'i aktif kullanmadığın dönemlerde ve özellikle NFT pazar yerleri için kullan. Onayları sınırlamak; hack, istismar veya oltalama yüzünden para kaybı riskini azaltır. Onaylarını en yeniden başlayacak şekilde sıralayarak şüpheli onayları bulup hemen iptal edebilir, daha fazla zararı önleyebilirsin.

### Cüzdanımın bağlantısını kesmek beni onay istismarlarından korur mu?

Cüzdanını bir dApp'ten ayırmak seni istismarlardan korumaz, onay kaynaklı olsun ya da olmasın. Daha önce verdiğin token onayları bağlantıyı kestikten sonra da aktif kalır, çünkü zincir üstünde saklanırlar.

### Token izni istismarlarından ve benzeri risklerden nasıl kaçınabilirim?

Token izinlerine önlem odaklı yaklaşım şunları içerir:

* izinleri sadece güvenilir dApp'lere vermek.

* token izinlerini düzenli olarak gözden geçirmek.

* gereksiz veya şüpheli izinleri kaldırmak.

* tanımadığın cüzdan delegasyonlarını kontrol etmek.

* dApp'lerin güvenlik güncellemelerinden haberdar olmak.

Revoke.cash [tarayıcı eklentisi](https://revoke.cash) gibi üçüncü taraf araçları kullanmayı düşün: olası tehditlere karşı önleyici bir katman sağlar. Eklenti, zararlı olabilecek bir şeyi imzalamak üzereyken seni uyarır ve oltalama dolandırıcılıklarından ya da diğer kötü niyetli işlerden korur.

### Revoke.cash ile fonlarımı geri alabilir miyim?

Ne yazık ki Revoke.cash çalınan fonları geri getiremez. Onay istismarlarına kurban gitme ihtimalini azaltan önleyici bir araçtır. Yine de fonlarını çalmakta kullanılan onayları iptal etmek, daha fazla hırsızlığı önleyebilir.

### Cüzdanıma her para yatırdığımda neden boşaltılıyor?

Cüzdanında bir “süpürücü bot” olabilir: ele geçirilmiş bir cüzdanı izleyen ve yeni gelen parayı sen tepki veremeden hızla dışarı aktaran bir betik. Nedenlerden biri ele geçirilmiş bir kurtarma ifadesidir. O durumda onayları iptal etmek işe yaramaz; cüzdanı bırak ve yenisini oluştur. Ama kötü niyetli bir cüzdan delegasyonu da aynı ölçüde olası bir nedendir: kurtarma ifaden sızmadan, kandırılarak verdiğin bir imzayla kurulmuş süpürücü kod. Revoke.cash'teki “Delegations” sekmesini kontrol et. Tanımadığın bir delegasyon bulursan cüzdanının içinden iptal et (örneğin MetaMask'in hesap ayrıntılarından). Delegasyon yoksa ve boşaltma sürüyorsa, kurtarma ifadenin ele geçirildiğini varsay ve yeni bir cüzdana geç.

---

**Yazar**

**[Marcus](https://twitter.com/estmcmxci)**, ENS DAO Bülteni'ni yayımlıyor. Protokol ücretlerinden doğan fazla gelirin uygulama katmanı geliştirmesini ve diğer açık kaynak altyapıyı nasıl destekleyebileceğini araştırıyor.

**Editörler**

**[Tetranome](https://twitter.com/Tetranome)**, Bankless Academy'de Project Champion olarak kullanıcı deneyimi, arayüz, tasarım ve içerik üzerine çalışıyor.

**[Trewkat](https://twitter.com/trewkat)**, BanklessDAO'da yazar ve editör. Kripto ve NFT'ler hakkında bilgi edinmeye, özellikle de bu bilgiyi başkalarına en iyi nasıl aktaracağına ilgi duyuyor.

**Destekçi**

Bu sponsorsuz makale, ücretsiz Bankless Academy eğitiminin bir parçası. Gelecekteki içerikleri desteklemek için makaleyi koleksiyonuna ekle!
