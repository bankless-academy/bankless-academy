---
TITLE: Ether Stake Etme
DESCRIPTION: Ethereum’u koruyarak Ether’inden getiri elde et.
LANGUAGE: Türkçe
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/staking-ether
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
Bu, [“Ethereum'da Staking”](https://app.banklessacademy.com/lessons/staking-on-ethereum) dersimizin ve görevimizin özeti ve adım adım rehberidir. **Bilgini bir üst seviyeye taşımak ve rozetini almak için** [dersin tamamına](https://app.banklessacademy.com/lessons/staking-on-ethereum) göz at!

---

## Önemli Noktalar

> * Staking, Ethereum'da merkeziyetsizlik ve işlemlerin işlenmesi için şarttır.
>
> * Basit: ağa Ether kilitle, ödül kazan.
>
> * Bir `doğrulayıcı düğüm` çalıştırmak Ethereum'da stakingin temel biçimidir ve 32 Ether gerektirir.
>
> * rETH `tokenı` sayesinde Kaşifler her miktarda Ether ile stakinge katılabilir.

## Staking Nedir?

Basitçe söylemek gerekirse, Ethereum'da staking, herkesin ağın güvenliğine katkı vermesini sağlayan bir eylemdir. Ağa bir miktar Ether kilitlersin, ağ doğrulayıcılarına destek olursun ve ödül kazanırsın.

Staking, Ethereum'un `mutabakat mekanizmasının` temel bir parçasıdır: meşru işlem ve blokları sahte olanlardan `merkeziyetsiz` biçimde ayırma işi. Bu ayıklama, ağ genelinde adil bir ekonomiyi sürdürmek için şarttır.

Bu sana tanıdık gelebilir, çünkü Bitcoin ağındaki madencilikle aynı amacı taşır. Ama madencilikle staking arasında önemli bir fark var: Ethereum'da stakinge herkes erişebilir. Bitcoin'de madencilik yapmak için gereken güçlü bilgisayara ihtiyacın yoktur.

Yani sadece Ether alıp bir ağ `akıllı sözleşmesine` kilitleyerek staker olabilirsin. Böylece Ethereum'un sorunsuz çalışmasına yardım eder ve karşılığında ödül kazanırsın!

## rETH ile Stakinge Başla

Ethereum'un güvenliğine katılmanın en iyi yolu bir `doğrulayıcı düğüm` çalıştırmaktır. En çok ödülü verir ve ağın merkeziyetsizliğine en büyük katkıyı yapar. Sorun şu ki… 32 ETH, biraz teknik bilgi ve 7/24 elektrik ve internet erişimi olan özel bir bilgisayar gerektirir. Çoğu Kaşif için bu ağır bir yük. Neyse ki Ethereum topluluğundaki yenilikçiler herkesin kullanabileceği kolay bir giriş kapısı yarattı: `staking havuzları` ve `likit staking tokenları` (LST'ler).

Rocket Pool en bilinen merkeziyetsiz staking protokollerinden biridir ve yaklaşımı ağa yüksek olumlu katkı sağlar. Ether'ini onların staking havuzlarından birine kilitleyerek rETH `mint` edersin. rETH'i doğrudan Rocket Pool akıllı sözleşmesinden mint etmek ağın merkeziyetsizliğine en büyük katkıyı yapsa da, onu bir `merkeziyetsiz borsadan` da satın alabilirsin. Bu tokenı tutarak staking ödülü kazanmaya başlarsın. Getiriler ağ aktivitesine göre değişir; tarihsel olarak yılda yüzde birkaç seviyesindedir.

rETH'te staking ödülleri doğrudan tokenın değerine eklenir: bugün 1 rETH tutuyorsan bir yıl sonra da 1 rETH'in olur. Sadece daha değerli olur.

## Ön Koşullar

* Şu ağlardan birinde bir miktar normal ETH'ye ihtiyacın olacak: Ethereum, Optimism, Base, Arbitrum veya Polygon (POS).

## Adım Adım Rehber

### Seçenek #1: Yeni rETH Mint Etmek

>0,01 ETH gerektirir ve sadece Ethereum Mainnet'te çalışır.

**1\. <https://stake.rocketpool.net/> adresine git ve cüzdanını bağla.**

![](https://app.banklessacademy.com/images/staking-ether/image-80cf7889.png)

**2\. Stake etmek istediğin miktarı gir, ‘Stake’e bas, sonra cüzdanında ‘Submit’e bas.**

İşlemin işlendiğinde rETH cüzdanına düşer. Bu kadar kolay.

![](https://app.banklessacademy.com/images/staking-ether/image-255e1bf8.png)

### Seçenek #2: Merkeziyetsiz Borsada rETH Satın Almak

Minimum bakiye şartı yoktur ve yukarıda listelenen tüm ağlarda çalışır.

**1\. <https://app.uniswap.org/swap> adresine geç ve cüzdanını bağla.**

Takası Optimism `Layer 2` ağında yapıyoruz, çünkü gas ücretleri Ethereum mainnet'e göre çok daha düşük. Optimism'e nasıl köprü kuracağını [“Layer 2'de Cüzdana Para Yükleme” makalemizden](https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2) öğrenebilirsin.

Küçük bir ağda takas yapmadan önce teklif edilen fiyata ve `likiditeye` bak: oradaki rETH havuzları sığ olabilir ve sana daha kötü bir kur verebilir.

![](https://app.banklessacademy.com/images/staking-ether/image-8d944152.png)

**2\. Tutmak istediğin miktarı gir, ‘Swap’e bas, sonra cüzdanında ‘Confirm’e bas.**

İşlemin işlendiğinde rETH cüzdanına düşer. Bu kadar kolay.

![](https://app.banklessacademy.com/images/staking-ether/image-5d667f3c.png)

---

**Ethereum'un koruyucusu olma zamanı!** Kaşif El Kitabı'nın bu bölümünü, “Ether Stake Etme”yi, beğendiğini umuyoruz.

Yolculuklarında kolayca başvurabileceğin bir kopyaya sahip olmak ve Bankless Academy'nin gelecekteki içeriklerini desteklemek istiyorsan bu bölümü koleksiyonuna eklemeyi unutma.

İyi yolculuklar Kaşif!

---

## SSS

### Stakingin riskleri nelerdir?

Kullandığın yönteme bağlı, ama ortak olan bir risk var: dahil olduğun doğrulayıcı düğümler cezalandırılabilir (slashing). Çoğu staking havuzunda ve merkezi borsada stakingde bu tür kayıplar platformun tamamına dağıtılır (herkes payını üstlenir, etkisi azalır) ya da sigortalanır.

Diğer riskler:

* `Bireysel staking`: Doğrulayıcı düğümün seçtiği `doğrulayıcı istemcisi` yazılımındaki bir hata.

* `Staking havuzları`: Staking havuzunun akıllı sözleşmelerindeki veya doğrulayıcı istemci yazılımındaki bir hata. Denetimler bu riski azaltır ama tamamen ortadan kaldırmaz.

* `Likit staking tokenları`: rETH gibi bir LST'nin piyasa fiyatı, temsil ettiği Ether'in değerinin biraz üstünde veya altında işlem görebilir.

* `Merkezi borsada staking`: Borsanın ani iflası ve oradaki stake'in tamamen kaybı.

Her riskin olası etkisini önceden kestirmek çok zor, ama Ether'i stake etmenin onu sadece tutmaktan daha riskli olduğunu rahatlıkla söyleyebiliriz. Ödülün olduğu yerde risk vardır! Sadece kaybetmeyi göze aldığın kadarını yatır.

### Her staking Ethereum'a fayda sağlar mı?

Fayda `merkeziyetsizlik` biçiminde gelir: mümkün olduğunca çok bağımsız `düğüm operatörü` istersin.

* `Bireysel staking`: En yüksek merkeziyetsizlik, çünkü bu genelde tek bir kişinin elinde sadece birkaç düğüm demektir.

* `Staking havuzları`: Platforma bağlı. Bazı staking sağlayıcıları havuzlarında sadece belirli kişilerin doğrulayıcı düğüm olmasına izin verir. Bu, birkaç kişinin elinde çok sayıda düğüm demektir; merkezileştirici bir güç. Rocket Pool, herkesin bir staking havuzunun düğüm operatörü olmasına izin veren az sayıdaki sağlayıcıdan biridir. Bu da platformlarını Ethereum vatandaşları için en iyi staking seçeneklerinden biri yapar.

* `Merkezi borsada staking`: Staking havuzlarındaki merkezileştirici güçler gibi, tek bir kurumun elindeki çok sayıda düğüm de Ethereum için kötüdür.

### Staking ödülleri değişir mi?

Evet, ödüller iki temel etkene bağlıdır:

* **Ağ aktivitesi:** Genel olarak trafik düşükken ödüller düşük, yüksekken daha yüksektir.

* **Doğrulayıcı düğüm sayısı:** Katılımcı arttıkça ödüller daha çok bölünür.

Ödüller seçilen staking yöntemine göre de değişir. Daha fazlası için [“Ethereum'da Staking” dersimize](https://app.banklessacademy.com/lessons/staking-on-ethereum) göz at!

### Doğrulayıcı düğümü nasıl çalıştırırım?

`Bireysel staker` olmak istiyorsan tam 32 ETH'ye ve doğrulayıcı donanımına ihtiyacın olur. [CoinCashew'un bu harika rehberine](https://docs.coincashew.com/guides/mainnet) göz at.

Bunun küçük bir kısmıyla (2026 itibarıyla doğrulayıcı başına 4 ETH) Rocket Pool gibi bir `staking havuzu` üzerinden de düğüm çalıştırabilirsin; kalan Ether'i diğer katılımcılar sağlar. Elbette doğrulayıcı donanımına yine ihtiyacın olur. Başlamak için [Rocket Pool'un belgelerine](https://docs.rocketpool.net/guides/) göz at! Sadece rETH tutmak içinse donanım gerekmez: herkes istediği miktarda Ether ile katılabilir.

---

**Yazar**

[Tetranome](https://twitter.com/Tetranome), Bankless Academy'de Project Champion olarak kullanıcı deneyimi, arayüz, tasarım ve içerik üzerine çalışıyor.

**Destekçi**

Bu makale [Rocket Pool](https://rocketpool.net/) tarafından finanse edilmiştir.
