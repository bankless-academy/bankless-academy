---
TITLE: Ethereum’da Staking
DESCRIPTION: Ethereum’un koruyucusu ol: ağı güvende tut, Ether ödülü kazan.
LANGUAGE: Türkçe
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/staking-on-ethereum
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

# Ethereum'da Staking

Hoş geldin Kaşif, yeni dersine!

Bugün “staking” sürecine bakacağız: dijital servet kurmanın basit bir yolu.

`Staking`, Bitcoin ağındaki `madencilik` ile benzerdir: ikisi de katılımcıların ödül karşılığında blokzincirde işlem işlemesini sağlayan sistemlerdir. Ağlarımızı `merkeziyetsiz` tutarlar.

Ama madencilik ile staking arasında önemli bir fark var. Ethereum'da staking, başkalarıyla yarışmak için güçlü bir bilgisayar gerektirmez. Ether'i (ETH) bir ağ `akıllı sözleşmesine` kilitlemen Ethereum'u çalışır tutar ve sana ödül kazandırır.

![](https://app.banklessacademy.com/images/staking-on-ethereum/staking-on-ethereum-50472cf7.png)

# Ethereum Seni İstiyor!

`Staking`, bir “internet tahvili” gibidir.

Devletini tahvillerle desteklemek nasıl finansal getiri sağlıyorsa, Ethereum'u desteklemek de ödül getirir! Dahası, devlet tahvilleri gibi staking de değerlerini ve yaşamak istediğin dünyayı finansal olarak desteklemenin bir yoludur.

Ether stake ettiğinde, Ether'in Ethereum'da işlem işleyen bir `doğrulayıcı düğüme` atanır. Ne kadar çok Ether stake edilirse Ethereum o kadar çok düğüme sahip olabilir. Daha çok düğümle Ethereum daha `merkeziyetsiz` ve güvenli olur.

Bir `staker` olarak **Ethereum'un koruyucusu olursun!**

Şimdi staking mekaniğine yakından bakalım ve staking yolculuğuna bugün başlamak için stressiz, düşük maliyetli bir fırsat keşfedelim.

Ekipmanını kap, hadi gidelim!

![](https://app.banklessacademy.com/images/staking-on-ethereum/ethereum-wants-you-fd40b9e5.png)

# Blokzincir Güvenliği

`Doğrulayıcı düğümler`, Ethereum'da güvenli ve meşru bir ekonominin anahtarıdır. Blokzinciri `sahtekarlıktan` korurlar.

Blokzincir dünyasında sahtekarlık, bir kullanıcının bakiyeleri değiştirmesi ya da var olmayan kripto yaratması gibi görünür. Ethereum bunu, her işlemin geçerli olmasını ve hiçbir katılımcının diğerleri üzerinde güç sahibi olmamasını sağlayarak engeller. Bu adalete `güvenilir tarafsızlık` denir ve hayati önemdedir. Neden? Kimse aldatmanın ve güvensizliğin olduğu bir ekonominin parçası olmak istemez; böyle bir ekonomi eninde sonunda çöker.

Sağlıklı bir blokzincirde doğrulayıcı düğümlerin tek bir amacı vardır: **ağ genelinde, blokzincirin durumu üzerinde merkeziyetsiz bir uzlaşıya varmak.** Düğümler işlemleri tarar, blokzincirin geçmişiyle karşılaştırır ve geçerliliği için oy verir. Düğümlerin `mutabakatı` ile geçerli sayılan işlemler blokzincire eklenir.

![](https://app.banklessacademy.com/images/staking-on-ethereum/blockchain-security-7f2149fe.svg)

# Knowledge Check 1

Doğrulayıcı düğümler Ethereum'da sahtekarlığı nasıl önler?

- [ ] Birbirlerini alt ederek.

> ℹ️ Tekrar dene! Düğümlerin birbiri üzerinde etkisi yoktur. Blokzinciri etkilemek için birlikte çalışırlar.

- [ ] Bazı kişiler için var olmayan kripto yaratarak.

> ℹ️ Tekrar dene! Bu, sahtekarlık yapmak olurdu.

- [x] Geçerli işlemler üzerinde merkeziyetsiz uzlaşıya vararak.

> ℹ️ Doğru! Düğümler blokzincirin durumu üzerinde anlaşır.

# Proof-of-Stake

`Doğrulayıcı düğüm` çalıştırmak isteyen kullanıcıların en az 32 ETH kilitlemesi gerekir ve bu çok para. (2025'ten beri tek bir doğrulayıcı daha büyük bakiye de tutabiliyor ve stakerlar bir kuyruk üzerinden istedikleri zaman çıkabiliyor.) Ağda büyük bir finansal “pay” almanın karşılığında `düğüm operatörü`, Ethereum'da işlem blokları önerip inceleyebilir ve ödül kazanır. Blokları, ağa gönderilen işlem grupları olarak düşün.

Ağın `mutabakat mekanizması`, bir sonraki bloğu önermesi için rastgele bir doğrulayıcı düğüm seçer; kararı, dürüstlükten emin olmak için diğer düğümlerce çapraz kontrol edilir. Bir düğüm bloğu başarıyla önerdiğinde `stake'i` büyür.

![](https://app.banklessacademy.com/images/staking-on-ethereum/proof-of-stake-49c358ed.svg)

# Slashing

Bir düğüm kanıtlanabilir şekilde hile yaptığında, örneğin çelişen iki bloğu imzaladığında, stake'ine `slashing` uygulanır: Ether'inin bir kısmını kaybeder. Yavaş ya da çevrimdışı olmak slashing değildir; bu sadece küçük bir cezaya mal olur. Böylece stake edilen Ether bir güvence teminatına dönüşür ve düğümler dürüst olmaya, Ethereum'u sorunsuz çalıştırmaya teşvik edilir.

Bir saldırganın Ethereum'da sahtekarlığı onaylatabilmesi için doğrulayıcı düğümlerin, dolayısıyla stake edilen Ether'in çoğunluğunu kontrol etmesi gerekir. Neyse ki sıradan kullanıcılar staking'e katıldığında bu olamaz. Ağın `merkeziyetsiz` sahipliği, karar verme gücünü böler.

![](https://app.banklessacademy.com/images/staking-on-ethereum/slashing-ccabe137.svg)

# Knowledge Check 2

Doğru mu Yanlış mı: Çelişen iki bloğu imzalamak gibi hile yaparken yakalanan doğrulayıcı düğümler stake'lerinin bir kısmını kaybeder.

- [x] Doğru

> ℹ️ Doğru! Bu “slashing”, kanıtlanabilir hileyi cezalandırır. Çevrimdışı olmak yalnızca küçük bir cezaya mal olur.

- [ ] Yanlış

> ℹ️ Tekrar dene! Kanıtlanabilir hile slashing ile cezalandırılır. Sadece yavaş ya da çevrimdışı olmak cezalandırılmaz.

# İşlemleri Doğrulamak

Düğümlerin `Proof of Stake` mutabakatıyla nasıl anlaşmaya vardığına adım adım bakalım:

1. **Staking:** Bir `düğüm operatörü` ağda 32 ETH kilitler ve bir `doğrulayıcı düğüm` çalıştırmaya başlar.
2. **Blok Oluşturma:** Kullanıcılar işlem gönderir, `blok oluşturucular` bunları `bloklar` halinde sıralar.
3. **Önerici Seçimi:** Bir algoritma, blokzincire eklenecek sonraki bloğu önermek üzere bir doğrulayıcı düğüm seçer.
4. **Blok Önerisi:** `blok önericisi` olası blokları inceler, birini seçer ve geçerliyse `onay` verir.
5. **Çapraz Doğrulama:** Diğer doğrulayıcılar bloğu kontrol eder ve geçerliyse onay verir. Geçersiz bloklar yok sayılır, zincire hiç katılmaz.
6. **Blok Ekleme:** Geçerli blok Ethereum blokzincirine eklenir.
7. **Ödüller:** Blok önericisi bir `blok ödülü` ve işlem bahşişleri kazanır. Diğer doğrulayıcılar da ödüllendirilir.

[embed](https://app.banklessacademy.com/animation/validating-tx-with-ethereum-staking)

# Knowledge Check 3

Ethereum'a eklenecek sonraki bloğu seçen doğrulayıcı düğümün adı nedir?

- [ ] Staker

> ℹ️ Tekrar dene! Stakerlar doğrulayıcı düğümleri destekler, ama düğümü kendileri çalıştırmaz.

- [ ] Blok oluşturucu

> ℹ️ Tekrar dene! Blok oluşturucular gelen işlemleri olası bloklar halinde sıralar, ama onları blokzincire eklemez.

- [x] Blok önericisi

> ℹ️ Doğru! Blok önericileri, blok oluşturucuların hazırladığı bloklara bakıp blokzincire ekleyeceği birini seçer.

# Ethernomik

Bir doğrulayıcı düğüme Ether sağladıkları için stakerlar, düğümün ödüllerinin bir kısmını kazanır.

Düğümlerin aldığı ödüller çeşitli ekosistem etkenlerine bağlıdır ve değişebilir. Basitçe ödüller, işlem ücretlerinin bir kısmı ile yeni bloklara eklenen az miktarda yeni basılmış Ether'dir.

Yıllık getiri zamanla değişir; tarihsel olarak stake edilen Ether üzerinde yüzde birkaç seviyesindedir. Kesin miktar iki temel etkene bağlıdır:

- 📈 **Ağ Etkinliği:** Genelde trafik düşükse ödüller düşük, trafik yüksekse ödüller yüksek olur.
- 👥 **Doğrulayıcı Düğüm Sayısı:** Katılımcı arttıkça ödüller daha çok bölünür.

Getiriler, Ether'ini tam olarak nasıl stake ettiğine göre de değişir. Seçeneklerimize bakalım.

![](https://app.banklessacademy.com/images/staking-on-ethereum/ethernomics-33407ddc.svg)

# Staking Türleri

`Doğrulayıcı düğüm` çalıştırmak için genelde 32 ETH kilitlemen gerekir, ama yeni staking yöntemleri Ethereum'u korumayı herkese açtı.

Yani Ethereum'u korumanın üç yolu var:

- 📡 **Bireysel Staking:** Doğrulayıcı düğümü kendin çalıştır.
- ⛲ **Staking Havuzları:** Bir staker grubuna katıl ve düğümü birlikte çalıştır.
- 🏦 **Merkezi Borsada Staking:** Bir “kripto banka” düğümüne katıl.

Her yöntem kurulum için farklı düzeyde teknik bilgi ister ve kendi risklerini taşır.

Kendi `özel anahtarlarını` tutmaktan rahatsan ama 32 ETH'in yoksa, bir staking havuzunda başkalarına katılmayı düşün.

Kriptonun `öz saklamasını` üstlenmeye henüz hazır değilsen merkezi borsada staking'e bak. Bu arada [Cüzdan Temelleri](https://app.banklessacademy.com/lessons/wallet-basics) dersimizi al ve kriptonun sahipliğini cesurca üstlen!

# Staking Türleri (2. Bölüm)

![](https://app.banklessacademy.com/images/staking-on-ethereum/types-of-staking-part-2-9de268fd.svg)

**Bireysel Staking**

🟡 32 ETH gerekir
🟡 Teknik kurulum
🟢 Ethereum'u merkeziyetsizleştirir

**Riskler:** Anahtar kaybı, `slashing`, çevrimdışı ceza.

![](https://app.banklessacademy.com/images/staking-on-ethereum/types-of-staking-part-2-96f11caf.svg)

**Staking Havuzları**

🟢 Her miktarda ETH
🟢 Kolay kurulum
🟡 Merkeziyetsiz seçenekler

**Riskler:** Akıllı sözleşme hataları, anahtar kaybı.

![](https://app.banklessacademy.com/images/staking-on-ethereum/types-of-staking-part-2-27091ef5.svg)

**Merkezi Borsada Staking**

🟢 Her miktarda ETH
🟢 Kolay kurulum
🔴 Ethereum'u merkezileştirir

**Riskler:** Borsanın iflası paranı götürebilir.

# Ağın Merkezileşmesi

**Çok sayıda düğümü tek bir kuruluşun altında toplayan her staking, Ethereum'u merkezileştirmeye başlar.**

Ethereum'u birbirine bağlı `doğrulayıcı düğümlerden` oluşan bir ağ gibi düşün. Düğümler bir ya da birkaç kuruluşta toplandığında bütün ağ dengesiz ve güvensiz hale gelir. Bunun olmaması için çok sayıda bağımsız bağlantı noktası gerekir.

Tek bir kuruluşun yeterince düğümü kontrol etmesi kötüdür: işlem blokları ağın merkezileşmiş bölümünden geçmek zorunda kalır. Merkezi kuruluş sahte blokları onaylamaya, hatta geçerli olanları reddetmeye başlayabilir. Bu da `güvenilir tarafsızlığı` yok ederdi.

Koruyucuları olarak, ağı dengeli ve `merkeziyetsiz` tutan staking yöntemlerine odaklanmalıyız.

Yeni başlayan biri için kendi doğrulayıcı düğümünü çalıştırmak zordur. Bunun yerine merkeziyetsiz staking'in kolay bir seçeneğine bakalım: `staking havuzları`.

![](https://app.banklessacademy.com/images/staking-on-ethereum/network-centralization-0622ba07.svg)

# Knowledge Check 4

Tek bir kuruluş doğrulayıcı düğümlerin çoğunluğunu kontrol etseydi ne olurdu?

- [x] Sahte işlemler içeren blokları onaylayabilirdi.

> ℹ️ Doğru! Ethereum güvenilir tarafsızlığını kaybederdi.

- [ ] Tüm doğrulayıcı düğümlerin kontrolünü ele geçirirdi.

> ℹ️ Tekrar dene! Diğer düğümler kontrol edilemez, ama sesleri bastırılabilir.

- [ ] Ethereum işlem işlemeyi tamamen durdururdu.

> ℹ️ Tekrar dene! Böyle bir saldırıda Ethereum durmazdı, ama güvenilir tarafsızlığını kaybederdi.

- [ ] Yukarıdakilerin hepsi.

> ℹ️ Tekrar dene! Yukarıdaki cevaplardan yalnızca biri doğru.

# Staking Havuzları

`Staking havuzlarının` en güzel yanı, tamamen `akıllı sözleşmelerin` yönetmesidir. Diğer stakerlarla yüz yüze tanışman ya da onlara güvenmen gerekmez. Ama akıllı sözleşmeye güvenmen gerekir.

Staking havuzlarını, dünyanın her yerindeki stakerları birbirine bağlayan dijital platformlar olan `staking sağlayıcıları` düzenler. Havuzda bir `düğüm operatörü` 32 ETH'in bir kısmını stake edip düğümü çalıştırır, kalan Ether'i diğer katılımcılar sağlar. Düğüm operatörü hizmeti karşılığında ek getiri kazanır.

Diğer katılımcılara, havuza üyeliklerini temsil eden “Likit Staking Tokenları” (LST) verilir. Bu `tokenlar` havuzun stake edilmiş Ether'inden bir payı temsil eder. Sahibi, temsil edilen stake kadar ödül kazanır ve istediği zaman payını bozdurmak için kullanabilir.

Sadece bir LST tutarak (Rocket Pool'un rETH'i gibi) bir staking havuzunun payına sahip olursun. Evet, Ether'in hem Ethereum'u merkeziyetsizleştiriyor hem staking ödülü kazanıyor!

![](https://app.banklessacademy.com/images/staking-on-ethereum/staking-pools-46c96251.svg)

# Knowledge Check 5

Staking havuzunu hangi taraf barındırır?

- [ ] Düğüm operatörü.

> ℹ️ Tekrar dene! Düğüm operatörleri doğrulayıcı düğümü çalıştırır, havuzun kendisini değil.

- [ ] Diğer staking katılımcıları.

> ℹ️ Tekrar dene! Stakerlar Ether sağlar, ama havuzu çalıştırmaz.

- [x] Staking sağlayıcısı.

> ℹ️ Doğru! Havuz, sağlayıcının akıllı sözleşmeleriyle barındırılır.

# Likit Staking Tokenları

`LST'lerin` en güzel yanı, Ether'in stake edilmiş ve getiri toplarken bile `likit` biçimini korumasıdır.

Buradaki “likit”, ekosistemde akmaya devam edebilmesi demektir. Bir staking havuzunun payını tuttuğunu düşün… ama onu para gibi kullanabiliyorsun! LST'ler takas edilebilir, krediler için teminat olarak kullanılabilir, hatta ek risk karşılığında ek getiri sunan isteğe bağlı bir strateji olan `restaking` platformlarına yatırılabilir.

LST'ler harikadır çünkü stake edilmiş Ether'e erişimi açar. Staking havuzlarının havuza Ether eklemek için genelde minimum yatırma tutarı vardır (0,01 ETH civarı). Ama LST'lerle, sevdiğin `merkeziyetsiz borsada` çok daha küçük miktarlarda stake edilmiş Ether alabilirsin.

# Ağın Merkezileşmesi, Yine!

Staking havuzları ve LST'ler diğer staking yöntemleriyle aynı püf noktayı taşır: **farklı derecelerde merkezileşme ve merkeziyetsizlikle çalışırlar.**

Rocket Pool gibi `staking sağlayıcıları`, her yerden herkesin bir staking havuzunun `düğüm operatörü` olabilmesini sağladı. Bu, yeni düğüm operatörlerinin 32 ETH'lik stake'ini kurmasına destek olur ve Ethereum'u merkeziyetsizleştirir. Ama bazı sağlayıcılar düğümlerini yalnızca dar bir çevrenin çalıştırmasına izin verir; bu da stake edilen Ether'in merkezileşmesini riske dönüştürür.

Herhangi bir kuruluş stake edilmiş Ether'in %33'ünden fazlasını ele geçirirse ağda sorun çıkarabilir. %50'de ise Ethereum'da `güvenilir tarafsızlığı` ciddi biçimde tehdit eder.

Bazı büyük staking sağlayıcıları o %33 sınırına yaklaştı. Stake'i birçok sağlayıcıya yaymak ağı güvende tutar.

Ethereum'u korumak için araştırma yapmalıyız. `Staking havuzlarında` bile merkeziyetsizliği destekleyen seçimler yapmalıyız.

![](https://app.banklessacademy.com/images/staking-on-ethereum/network-centralization-again-43bfd55b.svg)

# Knowledge Check 6

Doğru mu Yanlış mı: Yeni düğüm operatörlerini desteklemek Ethereum'u merkeziyetsizleştirmeye yardım eder.

- [x] Doğru

> ℹ️ Doğru! Daha çok düğüm operatörü, sahtekarlığı tespit eden daha çok bağımsız doğrulayıcı düğüm demektir.

- [ ] Yanlış

> ℹ️ Tekrar dene! Bağımsız düğüm sayısı arttıkça daha iyi.

# rETH - Merkeziyetsiz Staking'e Giden Yolun

Staker olma zamanı: Ethereum'un koruyucusu olma zamanı.
Bugünkü görevde Rocket Pool'da bir `staking havuzunun` sahipliğini alıyoruz.

🪙 Basit: Rocket Pool'un `likit staking tokenı` **rETH**'i mint et ya da satın al.

Staking yolculuğundaki ilk adım olarak, Ether ödülleri karşılığında blok işleyecek bir `doğrulayıcı düğümü` fonlayacaksın.

**Not:** rETH ile staking ödülleri tokenın değerine eklenir. Bugün 1 rETH tutuyorsan bir yıl sonra da 1 rETH'in olur. Sadece daha değerli olur.

Görevinde bol şans Kaşif! Ethereum'un merkeziyetsiz geleceğine bağlılığın bolca ödüllendirilsin.

![](https://app.banklessacademy.com/images/staking-on-ethereum/reth-your-path-to-decentralized-staking-a5172608.svg)
