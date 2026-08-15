---
TITLE: Merkeziyetsiz Borsada Takas
DESCRIPTION: Bu merkeziyetsiz borsa rehberiyle DeFi yolculuğuna başla.
LANGUAGE: Türkçe
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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

> * Merkeziyetsiz Borsalar, öz saklamalı token takasını mümkün kılan bir dApp türüdür.
>
> * Bir DEX ile güvenle etkileşmek için biraz pratik bilgi gerekir.
>
> * Zincir üstü işlemlerimizi incelemek için blok gezginlerini kullanabiliriz.

Merkeziyetsiz Borsa (DEX), `Merkeziyetsiz Finans` (DeFi) dünyasının en çok kullanılan uygulamasıdır ve bunun iyi bir nedeni var! DEX'ler, bir kripto para tokenını başka bir tokenla aracıya gerek kalmadan otomatik olarak takas etmeni sağlar. Merkezi Borsaların (CEX'ler) aksine, bu takas türünde kullanıcılar varlıklarının mülkiyetini tamamen ellerinde tutar.

Otonomi ve izinsiz protokoller DeFi'nin bel kemiğidir. Kullanıcılara dijital varlıkları üzerinde gerçek mülkiyet verir ve temel blokzincir hizmetlerine 7/24 açık erişim sağlar. İnternet bağlantısı olan herkes; geçmişi, inançları veya bulunduğu yer ne olursa olsun DeFi'ye erişebilir.

Bu el kitabı bölümünde, bir tokenı başka bir tokenla takas etmek amacıyla öz saklamalı cüzdanını bir DEX ile nasıl kullanacağını anlatacağız. Bu teknolojinin işleyişini, özelliklerini, risk profilini ve CEX'lerle karşılaştırmasını [Merkeziyetsiz Borsalar](https://app.banklessacademy.com/lessons/decentralized-exchanges) dersimizde bulabilirsin.

## DEX Seçmek

Token takası yapmanın ilk adımı, uygun fiyatlı ve güvenli bir platform seçmektir. Bu rehberde Optimism ağının köklü DEX'i Velodrome'u kullanacağız. Blokzincirde gezinmeye alıştıkça diğer borsaları nasıl değerlendireceğini ve ihtiyacına en uygun olanı nasıl bulacağını öğreneceksin. [Merkeziyetsiz Borsalar](https://app.banklessacademy.com/lessons/decentralized-exchanges) dersimizde dikkat edilmesi gereken özelliklerin kapsamlı bir listesi var.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

DEX'ler web3 yolculuğuna başlamak için harika bir yerdir: çoğu dApp DEX'lere benzer bir arayüz düzeni izler ve öz saklamalı cüzdanınla benzer şekilde etkileşir.

Token takasımıza başlayalım.

## Token Takası Yapmak

**1\. dApp'i aç:**

Yeni bir tarayıcı sekmesinde [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) sayfasını aç.

**2\. Cüzdanını bağla:**

Genelde her dApp'in sağ üst köşesinde bulunan standart ‘Connect’ (Bağlan) düğmesini kullan.

Masaüstündeysen tarayıcı cüzdanınla bağlan.

Mobildeysen çıkan cüzdan bağlama penceresi, mobil cüzdanını dApp'e bağlamanı sağlar.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Bağlantıyı onayla:**

Site bağlantısını doğrulamak için cüzdan uygulamanda ‘Connect’ (Bağlan) seçeneğine tıkla. Bu, dApp'in cüzdan adresini ve token bakiyelerini görmesini sağlar. Henüz başka hiçbir izin vermedin.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Hizmet şartlarını oku ve (kabul ediyorsan) imzala:**

Birçok dApp, şartlarını okuduğunu onaylaman için bir mesaj imzalamanı ister. Mesaj imzalamak gas harcamaz ve blokzincire hiçbir bilgi kaydetmez. Şartları kabul ediyorsan mesajı imzalayabilirsin.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Doğru ağa geç:**

Bu rehber için cüzdanının Optimism ağına ayarlı olduğundan emin ol.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. Takasını ayarla:**

Şimdi vereceğin ve alacağın tokenları seçme zamanı. Bu örnekte ETH'yi OP ile takas edeceğiz, ama sen istediğin tokenları takas edebilirsin!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Token izinlerini onayla (sadece token takaslarında):**

USDC gibi bir tokenı takas ediyorsan, cüzdanın önce Velodrome'un o tokene erişmesi için izin onayı ister. İzni alım satım tutarınla sınırlamanı öneririz. ETH ağın yerel parası olduğu için onay gerektirmez; bu yüzden örneğimizde cüzdan doğrudan takas onayına geçer.

**8\. İşlemi onayla:**

Takas teklifinden ve ayarlarından memnunsan takası başlatabilirsin. Bu adımda önce dApp'te, sonra da cüzdanında onay verirsin.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Bakiyeni kontrol et:**

İşlemin birkaç saniyede onaylanır; ardından yeni token bakiyeni cüzdanında görürsün. Tokenın görünmüyorsa token adreslerini içe aktardığından emin ol.

*Optimism token sözleşme adresi: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. İşlem hash'ini al:**

[Merkeziyetsiz Borsalar](https://app.banklessacademy.com/lessons/decentralized-exchanges) dersimizin görevini tamamlamak için ***takasın işlem hash'i*** gerekir (token izni işleminin hash'i veya cüzdan adresinle karıştırma). DEX arayüzünde genelde bir blok gezgini bağlantısı çıkar ve onaylanan işlemin ayrıntılarını görmeni sağlar. Kaçırdıysan veya hiç çıkmadıysa, cüzdanının işlem geçmişinde alım satımına doğrudan bağlı başka bir bağlantı bulursun.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

Merkeziyetsiz alım satım dünyasını keşfetme zamanı! Kaşif El Kitabı'nın bu bölümünü, ‘Merkeziyetsiz Borsada Takas’ı, beğendiğini umuyoruz.

Yolculuklarında kolayca başvurabileceğin bir kopyaya sahip olmak ya da Bankless Academy'nin gelecekteki içeriklerini desteklemek istiyorsan bu bölümü koleksiyonuna eklemeyi unutma. İyi yolculuklar Kaşif!

---

## Sık Sorulan Sorular

### Fiyat teklifim neden dakikada birkaç kez değişiyor?

Fiyat teklifleri genelde istediğin takası DEX arayüzüne girdiğin anda hesaplanır. Zaman geçtikçe başka kullanıcılar takas yapar ve borsadaki token arzını etkiler. DEX, güncel kalmak için teklifini düzenli olarak yeniler.

### Bir token takası ne kadar sürede gerçekleşir?

Cevap birçok etkene bağlıdır; başta blokzincirin blok hızı ve gas ücretini ne kadar düşük ya da yüksek ödediğin. Ethereum Mainnet'e gönderilen DEX işlemleri genelde 12 saniye ile birkaç dakika arasında onaylanır. Layer 2 işlemleri genelde daha hızlıdır!

### İşlemim neden başarısız oldu?

Bir işlemin başarısız olmasının birçok nedeni olabilir: gas ödemek için yetersiz bakiye, çok düşük ayarlanmış gas limiti ya da çok düşük slippage. Sorunu çözmeye başlamanın en iyi yolu arayüzdeki hata mesajlarına bakmaktır. İşlemini [Etherscan](https://optimistic.etherscan.io/) gibi bir blok gezgininde görüntüleyip zincir üstü hata mesajı olup olmadığını da kontrol edebilirsin. Fiyatlar alım satımından hızlı hareket ediyorsa DEX takas ayarlarından `slippage toleransını` yükseltebilirsin. Birçok cüzdan ve DEX ayrıca korumalı işlem yönlendirmesi sunar; bu, takasını bekleyen işlemlerden kâr etmeye çalışan `MEV` botlarından korur.

### Token izinlerini değiştirebilir veya kaldırabilir miyim?

Bir akıllı sözleşmeye token izni vermek, sözleşme hacklenirse cüzdanımızı istenmeyen gelecek etkileşimlere açık bırakabilir. Token izinlerini [Revoke.cash](https://revoke.cash/) gibi uygulamalarla değiştirmek veya kaldırmak mümkündür. İzinleri düzenlemek gas harcadığı için bu önlem hızla pahalıya gelebilir. Birçok kullanıcının dijital varlıklarını bir cüzdanda (soğuk cüzdan) saklayıp dApp'lerle başka bir cüzdandan (işlem cüzdanı) etkileşmesinin nedenlerinden biri budur. Varlıklar aralarında sadece gerektiğinde taşınır.

### Aradığım token neden takas listesinde yok?

Tokenın varsayılan olarak listelenmiyorsa, token sözleşme adresini listeye yapıştırman gerekir. Token sözleşme adresini bulmak için <https://www.coingecko.com/> adresine veya projenin resmi sitesine bak.

**Not:** Aynı tokenın adresi farklı ağlarda değişebilir. Örneğin [Mainnet'teki USDC sözleşmesi](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) ile [Optimism'deki USDC sözleşmesi](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85) farklıdır. Takas etmeden önce token adreslerini mutlaka doğrula!

---

**Yazar**

**[Tetranome](https://twitter.com/tetranome)**, Bankless Academy'de Project Champion olarak kullanıcı deneyimi, arayüz, tasarım ve platform müfredatı üzerine çalışıyor.

**Editör**

**[Trewkat](https://twitter.com/trewkat)**, BanklessDAO'da yazar ve editör. Kripto ve NFT'ler hakkında olabildiğince çok şey öğrenmeye, özellikle de bu bilgiyi başkalarına en iyi nasıl aktaracağına ilgi duyuyor.

**Destekçi**

Bu sponsorsuz makale, ücretsiz Bankless Academy eğitiminin bir parçası. Gelecekteki içerikleri desteklemek için makaleyi koleksiyonuna ekle!
