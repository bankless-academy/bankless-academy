---
TITLE: Layer 2’de Cüzdana Para Yükleme
DESCRIPTION: L2’de cüzdanına CEX’ler, üçüncü taraf onramp’ler ve bridge’lerle nasıl para yükleyeceğini öğren.
LANGUAGE: Türkçe
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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

> * Base, Optimism ya da Arbitrum gibi bir Ethereum ölçekleme çözümünde cüzdanına para yüklemenin birçok yolu var.
>
> * Merkezi borsalar genelde doğrudan bir Layer 2 `giriş rampası` sunar.
>
> * Üçüncü taraf ödeme uygulamaları, Layer 2'deki bir cüzdana banka hesabından ya da banka/kredi kartından para yüklemeni sağlar.
>
> * Protokol köprüleri, `Ethereum Mainnet` üzerinden Layer 2'ye para göndermeni sağlar.

Kriptoda yeniysen, `Layer 2` (ya da L2) hakkındaki onca konuşma sana biraz tuhaf, hatta kafa karıştırıcı gelebilir. Genelde [Ethereum Mainnet](https://ethereum.org/)'i ifade eden [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains)'in aksine Layer 2, kullanıcıların Ethereum'un güvenliğini devralmasını ama düşük işlem ücretlerinden ve hızlı `blok` eklenme sürelerinden yararlanmasını sağlayan belirli bir Ethereum ölçekleme çözümü türünün adıdır. [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/) ya da [Base](https://www.base.org/) adlarını duyduysan, bunlar Layer 2 ölçekleme çözümleridir. [Polygon](https://polygon.technology/) da çoğu zaman bu grupta anılır (aslında bir `yan zincir`, ama burada buna takılmayalım).

Her Ethereum işlemi `gas` denen bir ücret öder. Gas, ETH'in çok küçük bir birimi olan `gwei` cinsinden fiyatlanır. Ücretler talebe göre iner çıkar: 2021'deki zirve talepte Mainnet'te basit bir `token takası` onlarca dolara mal olabiliyordu, popüler NFT mintleri ise ücretleri çok daha yukarı itiyordu. Bugün tipik bir Mainnet işlemi bir doların epey altında, aynı işlem bir Layer 2'de ise sent ya da daha az tutar.

Layer 2'de işlemler hızlı onaylandığı ve ucuza çalıştığı için en yenilikçi protokollerin çoğu L2'ler üzerinde geliştiriliyor. Ama ekosistemde bir süredir bulunmuyorsan Layer 2'leri kullanmaya nasıl başlayacağını bilmek sezgisel değil. Neyse ki Ethereum ölçekleme çözümlerine yolculuğuna başlamak için net bir yer var: `cüzdanına` Layer 2'de para yüklemek.

Bir L2 cüzdanına para yüklemenin üç ana yolu var: kriptonu bir `merkezi borsadan` doğrudan bir Layer 2 ağına taşımak, L2 cüzdanını fonlamak için üçüncü taraf bir kripto ödeme servisi kullanmak ya da dijital varlıklarını bir köprü protokolüyle Mainnet'ten L2'ye göndermek.

> Devam etmek için [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/) ya da [Taho](https://taho.xyz/) gibi bir kripto para cüzdanın ve bir Ethereum cüzdan `adresin` olmalı. Henüz bir `saklayıcısız cüzdan` oluşturmadıysan lütfen [önce bu dersi al](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Saklayıcısız bir Ethereum cüzdan adresin olduğunda kripto yolculuğuna devam etmeye hazırsın.

## CEX'lerden Para Yükleme

Cüzdanına doğrudan bir merkezi borsadan (CEX) para yüklemek, özellikle borsada zaten kripto tutuyorsan dijital varlıkları bir L2'ye taşımanın belki de en basit yolu. Büyük CEX'lerin çoğu bu seçeneği sunar, ama kullanıcıya her zaman açıkça göstermez.

Örneğin [Coinbase](https://www.coinbase.com/)'de kullanıcılar paralarını birkaç adımda doğrudan Optimism, Polygon ya da Base (Coinbase'in kendi Layer 2'si) gibi ağlara gönderebilir:

1\. [Coinbase](https://www.coinbase.com/)'e git.

2\. Coinbase'de ETH [satın al](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) ya da elinde ETH tut.

3\. Sitenin üstündeki “Send & Receive” (Gönder ve Al) seçeneğini seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Göndermek istediğin tutarı fiat ya da ETH olarak gir (tutarın sağından fiat ile kripto arasında geçiş yapabilirsin), “Pay with” (Şununla öde) kısmından Ethereum'u seç ve “To” (Kime) alanına paranın gönderileceği cüzdan adresini yaz. “Continue” (Devam) seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Sonraki ekranda “Network” (Ağ) seçeneğine tıkla ve ağı Ethereum'dan Optimism'e değiştir (listede Base gibi başka Layer 2'ler de var).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Kontrol et ve doğruysa “Send Now” (Şimdi Gönder) seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Büyük borsaların çoğu kullanıcılara kriptolarını doğrudan bir L2'ye gönderme imkanı sunar. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/) ve [Kraken](https://www.kraken.com/) Base, Optimism ve Arbitrum gibi büyük Layer 2'lere çekimi destekler. Püf noktası: Göndermeden önce borsanın çekim ağı listesine bakıp hangi L2'leri desteklediğini kontrol et.

## Üçüncü Taraf Giriş Rampaları

L2 cüzdanına para yüklemenin bir başka basit yolu, birçok üçüncü taraf kripto ödeme şirketinin sunduğu doğrudan L2'ye gönderim hizmetlerinden yararlanmak. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/) ve [Transak](https://global.transak.com/), merkezi bir borsa kullanmadan kripto cüzdanı fonlamak için en popüler üç seçenek.

Çoğu borsa gibi bu üçüncü taraf `giriş rampaları` (onramp) da senden `Müşterini Tanı` bilgilerini ister. Ama bu temel engelleri aştığında, bu ödeme seçenekleri ekosistem genelinde kripto alıp Layer 2'ye aktarmanın kolay bir yolu.

MoonPay için adımlar:

1\. [MoonPay](https://www.moonpay.com/)'e git.

2\. Sitenin üstünde ya da ortasında yer alan “Buy crypto” (Kripto al) seçeneğini seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Göndermek istediğin fiat tutarını ve doğru para birimini gir.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Bir dijital varlık seç, burada ETH. “ETH” yaz; ETH satın alabileceğin farklı ağları göreceksin (aşağı kaydırman gerekebilir). Kullanmak istediğin Layer 2'yi seç ve “Continue” (Devam) tıkla.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Ardından kişisel doğrulama ve ödeme bilgilerini girmen istenecek.

6\. Tamamlayınca Ethereum cüzdan adresini gir. Cüzdanın kullanıma güvenli olduğundan emin olman istenecek.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Bitir, bilgilerin doğru olduğunu onayla ve “Pay” (Öde) seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

CEX'lerde olduğu gibi, büyük üçüncü taraf ödeme rampalarının çoğu doğrudan L2'ye gönderim sunar. İşlem ücretlerinden tasarruf etmek ve `blokzincir` keşiflerinin menzilini genişletmek için bu yeniliklerden yararlan.

## Köprülerle Para Yükleme

`Ethereum Mainnet'te` zaten paran varsa, kriptonu L2'ye taşımanın açık ara en kolay yolu bir köprü protokolü kullanmak. Köprü, paramızı kripto evreninde dolaştırmaya yardım etmek için tasarlanan protokollere verdiğimiz addır ve kriptoyu Ethereum Mainnet'ten Layer 2'lere taşımak için tasarlanmış birçok köprü var.

### Yerel Köprüler

Yerel köprüler, Layer 2 protokollerinin kendi tasarladığı köprülerdir. Arbitrum, Optimism ya da Base gibi bir `iyimser rollupta` yatırdığın para genelde birkaç dakika içinde L2'ye ulaşır, ama kriptoyu Mainnet'e geri taşımak yaklaşık bir hafta sürer. [Arbitrum Bridge](https://bridge.arbitrum.io/) ve [Optimism Bridge](https://app.optimism.io/bridge/) böyle çalışır: bekleme süresi, ağa geçersiz çekimleri mutabakattan önce yakalama fırsatı verir.

### Üçüncü Taraf Köprüler

Kimse beklemeyi sevmediği için, paramızı L2'lere ve L2'lerden anında taşımaya yardım eden birçok üçüncü taraf köprü servisi var. En popüler seçenekler arasında [Across Protocol](https://across.to/bridge) ve [Relay](https://relay.link/bridge) var, ama köprü ücretlerini birçok protokol arasında karşılaştırmak için [Bungee](https://bungee.exchange/) kullanabilirsin. Örneğin Across'u kullanmak için tek yapman gereken:

1\. [Across Protocol](https://across.to/bridge) köprüsüne git ve cüzdanını bağla.

2\. Parayı L2'ye köprülemek için “From” (Nereden) altında Ethereum'u seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Varlığını ve köprülemek istediğin tutarı seç (Püf noktası: yalnızca blokzincirin yerel `coini` olan varlığı köprüle, burada ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Sonra “To” (Nereye) alanında L2 çözümünü seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. İşlemi gözden geçir ve her şey doğru görünüyorsa “Send” (Gönder) seç.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Parayı Mainnet'ten L2'ye taşımak gerçekten bu kadar basit ve neredeyse tüm köprüler aynı şekilde çalışır. Para göndereceğin bir blokzincir seç, Base ya da Optimism gibi bir hedef belirle, bir varlık ve tutar seç ve blokzincir yarığının karşısına geç. Püf noktası: CEX'ten gönderirken olduğu gibi, L2 hedefine uygun bir köprü bulmak için [L2BEAT](https://l2beat.com/bridges/summary) kullanabilirsin.

## L2'ye Giden Yol

Layer 2'ler her deneyim seviyesinden kullanıcıya, Mainnet'te çoğu zaman erişilmez olan bir şekilde merkeziyetsiz finansı deneme fırsatı verir. Bu ağlarda işlem yapmak kuruşlar tuttuğu için (maliyetleri [buradan](https://www.growthepie.com/) karşılaştırabilirsin), merkeziyetsiz finansın temel yapı taşlarını (takaslar, `likidite havuzları` ya da `getiri çiftlikleri`) tanımak için harika bir yer.

Parayı L2'ye taşımak için bir CEX ya da köprü kullanmak, kripto acemiliğinden kripto yetkinliğine giden yolculuğunda gerekli bir adım. Unutma: paranı cüzdanında görebilmek için ağı cüzdan ayarlarına eklemen gerekebilir, bunu [Chainlist](https://chainlist.org/) üzerinden yapabilirsin. Sadece paranın L2 cüzdanına güvenle ulaştığını kontrol etmek istiyorsan, adresini birçok ağı aynı anda tarayan [Blockscan](https://blockscan.com/) gibi bir `blok gezgininde` aratabilir ya da [Uniswap](https://app.uniswap.org/) gibi bir DEX'e gidip L2 ağını ve varlığı seçerek bakiyeni görebilirsin.

Becerilerini büyütürken işlem ücretlerini küçültmenin yolunu da bulman gerekecek. Bir L2 cüzdanına para yüklemeyi öğrenmek ilk adım, ama kripto yolculuğundaki sonraki adımlar sana kalmış. Hoş geldin kaşif, yeni bir dünya seni bekliyor.

---

Hadi yola koyulalım, Layer 2 Ethereum bekliyor! Kaşif'in El Kitabı'ndaki bu bölümü, “Layer 2'de Cüzdana Para Yükleme”yi beğendiğini umuyoruz.

Yolculuklarında kolayca başvurabileceğin bir kopyaya sahip olmak ya da Bankless Academy'nin gelecek içeriklerini desteklemek istersen bu bölümü toplamayı unutma. İyi yolculuklar Kaşif!

***

**Yazar**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)**, BanklessDAO'da yazar, editör ve koordinatör; ayrıca Good Morning News'te Genel Yayın Yönetmeni. DAOpunks'ta hibe odaklı bir organizasyon kurmaya da yardım ediyor.

**Editör**

**[Trewkat](https://twitter.com/trewkat)**, BanklessDAO'da yazar ve editör. Kripto ve NFT'ler hakkında mümkün olduğunca çok şey öğrenmekle ilgileniyor, özellikle bu bilgiyi başkalarına en iyi nasıl aktaracağına odaklanıyor.

**Patron**

Bu makale **[Optimism](https://www.optimism.io/)** tarafından fonlandı.
