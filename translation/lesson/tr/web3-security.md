---
TITLE: Web3 Güvenliği
DESCRIPTION: Kendini ve cüzdanını web3'teki en yaygın dolandırıcılıklardan koru.
LANGUAGE: Türkçe
EDITORS: Claude (Anthropic AI, 2026 review)
WRITERS:
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/web3-security
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

Dijital sahiplik web3'ün yeni özelliğidir. Blokzincirler, kripto paralar ve NFT'ler sayesinde web3, sahipliği ve gücü kullanıcılara geri verir. Dijital finansal ürünlere çevrimiçi sahip olmak çoğu kişi için yeni. Bu deneyimsizlik, avcı ruhlu kişilere başkalarının varlıklarını dolandırma ve çalma fırsatı verir. Bu dolandırıcılıklar çok işe yarıyor, çünkü çoğu insan nasıl işlediklerini bilmiyor.

Ama dolandırıcılık sadece web3'e özgü değil; e-posta ve sosyal medya gibi web2 hizmetleri de dolandırıcılıkla dolu. Üstelik birçok web3 aracı hâlâ banka hesapları veya merkezi borsalar gibi web2 hizmetlerine bağlı, yani onları korumak da önemli. Tebrikler Academy Kaşifi: `web3` dünyasına açılırken seni koruyacak bilgiyle donanmak için zaman ayırıyorsun!

Bu ders şunları kapsayacak:

- Web2 ve web3 güvenliği.
- İnsanların paralarını en sık nasıl kaybettiği ve bundan nasıl korunacağın.
- Cüzdan güvenliği için genel bir strateji.
- Dolandırılan biri nasıl toparlanabilir.

# Web2'de Para

Web2'de parayı kurumlar insanlar adına tutar. Kullanıcı, parasına erişip onu kullanabilmek için kimliğini kuruma kanıtlamak zorundadır. Banka hesabı ya da `merkezi borsa` (CEX) gibi: bir giriş kimliği ve parola gerekir.

Bir dolandırıcının paranı ele geçirmesi için bu kimlik + parola ikilisi gerekir. Paranı korumakla kurumlar görevli olduğu için, sahte işlemler geri alınabilir; kredi kartı işlemine itiraz etmek gibi.

![](https://app.banklessacademy.com/images/web3-security/money-in-web2-7e1a5fd1.svg)

# Web3'te Para

Web3'te para farklı çalışır. Daha çok kilitli bir nakit cüzdanı gibidir; para bir kez harcandı mı gitmiştir. `Kurtarma ifadesi` (o özel gizli kelime dizisi) `özel anahtarlarını` açar, yani onu ele geçiren herkes cüzdanını kontrol eder. Onu _**asla**_ kimseye verme ve asla dijital ortamda saklama; fotoğraflar ve not uygulamaları ele geçirilebilir.

Ama tek hedef kurtarma ifaden değil: onayladığın tek bir kötü niyetli imza (bir işlem ya da mesaj), dolandırıcının kurtarma ifadeni hiç görmeden tokenlarını boşaltmasına yeter. Hem **kurtarma ifadeni** _hem de_ **imzanı** koru.

![](https://app.banklessacademy.com/images/web3-security/money-in-web3-f575b0f6.svg)

# Knowledge Check 1

Doğru mu yanlış mı? Dolandırıcılar, kurtarma ifadeni hiç bilmeden, seni kötü niyetli bir işlem ya da onay imzalamaya kandırarak cüzdanındaki tokenları boşaltabilir.

- [x] Doğru

> ℹ️ Doğru! Kötü niyetli bir imza ya da token onayı tek başına paranı teslim edebilir. İmzaladığın şeyi kurtarma ifaden kadar dikkatli koru.

- [ ] Yanlış

> ℹ️ Tekrar dene! Tek hedef kurtarma ifaden değil; tek bir kötü niyetli onay veya imza da tokenlarını boşaltabilir.

# Kurtarma İfadesini Güvenle Saklamak

Kurtarma ifadelerini güvenle saklamanın birçok yolu var, ama iyi bir başlangıç onu fiziksel bir ortamda (lamine kağıt veya benzeri) tutmak ve kendi evindeki suya ve ateşe dayanıklı bir kasada saklamaktır. `Kurtarma ifadesini` fotoğraf olarak ya da başka dijital yöntemlerle **saklama**, parola yöneticisinde bile.

Kurtarma ifadesi için kötü saklama yerleri:

- Dosya dolabı
- Dijital not uygulaması
- İş yerin
- Dijital fotoğraf

Kurtarma ifadeni nerede saklarsan sakla, ona yalnızca senin erişebildiğinden ve kaybolmaya ya da zarar görmeye karşı korunduğundan emin ol. Gelecekte ne olacağını asla bilemezsin!

# Parolalarını Koru

Sağlıklı parola kullanımı ve yönetimi, günlük internet keşfinin önemli bir parçasıdır.

Parolalar, çevrimiçi kullandığın her web2 hizmeti için farklı olmalı. Buna e-posta, merkezi borsalar ve diğer hizmet hesapları dahil. Birinin tek bir hesabın kimlik + parolasını ele geçirmesi zaten sorun, ama o ikili bütün hesaplarını açıyorsa çok daha kötü!

1Password, Bitwarden ve KeePass gibi `parola yöneticisi` uygulamaları birden fazla parolayı güvenle saklar ve şifreler; hatta yeni ve yüksek güvenlikli parolalar üretip otomatik kaydedebilir. Kullanıcının tek bir ana parolayı hatırlaması yeter.

Web3 `kurtarma ifadesini` bir parola yöneticisinde **saklama**; tek bir parola ihlali tüm web3 varlıklarını ele geçirmeye yeter ve varlıklarını senin için kurtaracak kimse yoktur.

# Knowledge Check 2

Parola yöneticileri neden faydalıdır?

- [ ] Kullanmak için sadece ana parolanı hatırlaman yeter.

> ℹ️ Tekrar dene! Bu doğru, ama tek faydası bu değil.

- [ ] Güçlü ve benzersiz parolalar üretip saklarlar.

> ℹ️ Tekrar dene! Bu doğru, ama tek faydası bu değil.

- [ ] Parolaları güvende tutmak için şifrelerler.

> ℹ️ Tekrar dene! Bu doğru, ama tek faydası bu değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Parola yöneticileri her hesap için benzersiz parola üretir, şifreler ve saklar. Sen sadece ana parolayı hatırlarsın.

# İki Faktörlü Kimlik Doğrulama

2FA olarak da bilinen `iki faktörlü kimlik doğrulama`, web2 güvenliğinin ikinci katmanıdır.

Güçlü parolalara rağmen birçok kişinin hesabı hacklendi ya da bilgileri çalındı. Web2 siteleri (hatta `parola yöneticileri`) genelde ikinci katman olarak 2FA sunar: normal parolanın yanında, başka bir cihazdan veya uygulamadan kanıt.

Her 2FA aynı değil:

🥉 **SMS kodları** en zayıf seçenek: dolandırıcılar `sosyal mühendislik` ile numaranı kendi cihazlarına taşıyıp (“SIM swap”) kodlarını alır. Yine de SMS, hiç 2FA olmamasından iyidir.

🥈 **Doğrulayıcı uygulamalar** (Google Authenticator, 2FAS veya Aegis gibi) kodları cihazında üretir; çoğu hesap için sağlam bir seçim.

🥇 **Passkey'ler ve donanım güvenlik anahtarları** (YubiKey gibi) oltalamaya dayanıklı altın standarttır: gerçek siteye bağlıdırlar, sahte bir kopyada giriş yapmazlar.

![](https://app.banklessacademy.com/images/web3-security/two-factor-authentication-7fa9bfdf.svg)

# Knowledge Check 3

İki faktörlü kimlik doğrulama neden şiddetle tavsiye edilir?

- [ ] 2FA açıkken bir hesabı hacklemek imkânsızdır.

> ℹ️ Tekrar dene! 2FA güvenliği çok artırır, ama hiçbir yöntem hesabı hacklenemez yapmaz. Örneğin SIM swap, SMS kodlarını aşabilir.

- [x] Web2 hesaplarına ek bir güvenlik katmanı ekler.

> ℹ️ Doğru! 2FA, parolanın üstüne başka bir cihazdan veya uygulamadan kanıt ister; çalınan parola tek başına yetmez.

- [ ] Parolaları daha güçlü yapar.

> ℹ️ Tekrar dene! 2FA parolanı değiştirmez. Onun üstüne ikinci bir kanıt katmanı ekler.

- [ ] Yukarıdakilerin hepsi

> ℹ️ Tekrar dene! Bu ifadelerden yalnızca biri doğru.

# Sosyal Mühendislik Dolandırıcılıkları

Hem web2'de hem web3'te dolandırıcılar, insanları parolalarını ve kurtarma ifadelerini vermeye ya da kötü niyetli bir işlem imzalamaya kandırmak için `oltalama` taktikleri kullanır. Çoğu zaman yardım teklif eden bir destek görevlisi (“Merhaba, ben MetaMask destek”) ya da bir topluluğun yöneticisi (“Yeni NFT mint'i, topluluğumuza özel”) gibi davranırlar.

İnsanları sıkıştırmak için `sosyal mühendislik` kullanırlar. Örnekler:

- “Süre doluyor!” - seni acele ettirmek.
- “Tebrikler, çekilişimizi kazandın!” - ayrıcalıklı hissettirmek.
- “Ön satışımıza erken erişim al!” - dolandırılan kişide `FOMO` yaratmak.

![](https://app.banklessacademy.com/images/web3-security/social-engineering-scams-73c69132.svg)

# Kaçırma Korkusu

`FOMO`, “Fear Of Missing Out” yani “kaçırma korkusu” demektir. **Hemen şimdi** bir şey yapmazsan büyük bir fırsatı kaçıracağın hissini veren o stresli duygudur.

FOMO'ya karşı en iyi savunma, bilgisayarından bir adım geri çekilip ara vermektir. İnsanlar stresliyken net düşünemez; FOMO'nun bu kadar etkili bir dolandırıcılık aracı olmasının sebebi de bu. Durumdan uzaklaşınca dolandırıcılığı olduğu gibi görmek çok daha kolaylaşır.

# Knowledge Check 4

Dolandırıcılar sosyal mühendisliği nasıl kullanır?

- [ ] Bir toplulukta yetkili biri gibi davranarak.

> ℹ️ Tekrar dene! Bu taktiklerden biri, ama tek taktik değil.

- [ ] İnsanları kısa süre baskısıyla sıkıştırarak.

> ℹ️ Tekrar dene! Bu taktiklerden biri, ama tek taktik değil.

- [ ] FOMO yaratmak için çekiliş veya bedava NFT sunarak.

> ℹ️ Tekrar dene! Bu taktiklerden biri, ama tek taktik değil.

- [x] Yukarıdakilerin hepsi

> ℹ️ Doğru! Dolandırıcılar yetkili kişileri taklit eder, zaman baskısı kurar ve FOMO yaratır; hepsi net düşünmeni engellemek için.

# Sosyal Medyada Güvenlik

Dolandırıcılar sosyal medyada ve kripto projelerinin Discord sunucularında dolaşmayı sever; deneyimli üyelere yakalanmamak için konuşmayı genelde özel mesaja taşırlar. Herkese açık alanlarda konuş, `kurtarma ifadesini` _**asla**_ kimseye verme ve özel mesajla gelen bir bağlantıda hiçbir şey imzalama.

Sosyal medyadaki `tehlike işaretleri`:

🚩 **Dil ve yazım hataları:** bozuk cümleler, makine çevirisi kokan metinler.

🚩 **FOMO:** “Kaçırma!”

🚩 **Taklit:** yönetici, destek ekibi, Vitalik Buterin, Elon Musk vb.

🚩 **Garantili getiri:** Kriptoda hiçbir şey garanti değildir.

🚩 **İstenmeyen bağlantılar ve teklifler,** _özellikle özel mesajlarda_.

![](https://app.banklessacademy.com/images/web3-security/social-media-safety-a76a39f4.svg)

# Sosyal Medyada İyi Alışkanlıklar

Güvende kalmak için:

✅ Ürününü satmak için sana özel mesaj atmak zorunda kalıyorsa, muhtemelen o ürünü istemezsin.

✅ Projenin takipçi ve üye sayısına bak; yine de bunlar projenin meşruluğunu, kalitesini veya sağlamlığını garanti etmez.

✅ Her şeyi dışarıdan bir kaynakla, örneğin projenin başka bir resmi hesabıyla doğrula.

✅ Emin olamadığında güvendiğin büyük bir topluluğun saygın üyelerine danış, üstelik herkese açık alanda sor.

![](https://app.banklessacademy.com/images/web3-security/social-media-best-practices-48ad350f.svg)

# Dolandırıcı Tokenlar ve Adres Zehirleme

Cüzdanında rastgele tokenlar veya NFT'ler mi beliriyor? `Dolandırıcı tokenlar` aynı anda binlerce cüzdana gönderilir; biri onları taşımaya ya da satmaya kalksın diye. Böylece tokenın akıllı sözleşmesinde gizlenen kötü niyetli kod tetiklenir veya kurban, `kurtarma ifadesi` ya da kötü niyetli bir imza isteyen bir `oltalama` sitesine çekilir. En iyi tepki: onlarla hiç etkileşime girme; oldukları yerde bırak ya da cüzdanında gizle.

Benzer bir hile de **adres zehirleme**: dolandırıcılar, kullandığın bir adrese neredeyse birebir benzeyen, ilk ve son karakterleri aynı olan bir adresten minik transferler gönderir. Sonradan işlem geçmişinden bir adres kopyalarsan, dolandırıcının benzerini kapabilirsin.

Kendini koru:

- İşlem geçmişinden adres kopyalama.
- Sadece ilk ve son birkaç karakteri değil, adresin tamamını doğrula.
- Büyük transferlerden önce küçük bir deneme gönder.

![](https://app.banklessacademy.com/images/web3-security/scam-tokens-761d5f63.svg)

# Kötü Niyetli Onaylar ve Kör İmzalama

Bugün paralar çoğunlukla çalınan kurtarma ifadeleri yüzünden değil, verilen imzalar yüzünden kaybediliyor. “Cüzdan boşaltıcı” oltalama kitleri, sıradan görünen ama olmayan bir işlem ya da mesaj sunar:

- **Kötü niyetli onaylar:** tek bir onay işlemi, dolandırıcının sözleşmesine tokenlarını veya NFT'lerini harcaması için sınırsız `token izni` verebilir.
- **İmza oltalaması:** gassız imza onayları (Permit2 gibi) token transferlerine yetki verebilir, işlem bile gerekmez.
- **Yetki devri boşaltmaları:** yeni bir cüzdan özelliği (EIP-7702) tek imzayla hesabına kod kurulmasını sağlar; boşaltıcılar bunu cüzdanları otomatik süpürmek için kötüye kullanır.

Anlamadığın şeyi imzalamaya **kör imzalama** denir ve profesyoneller bile yanıyor: 2025 Şubat'ında Bybit borsası, ekrandaki gösterimi değiştirilmiş bir işlemi onaylayarak yaklaşık 1,5 milyar dolar kaybetti.

Savunman: yavaşla, her imza isteğini oku, “cüzdanını doğrula” tarzı istekleri düşmanca kabul et ve imzalamadan önce işlemleri simüle eden bir cüzdan kullan.

# Knowledge Check 5

Bir DM alıyorsun: “Cüzdanının taşınması gerekiyor: metamask-upgrade.app adresine bağlan ve varlıklarını doğrulamak için imzala.” Site senden gassız bir onay imzalamanı istiyor. Buradaki sorun ne?

- [ ] Hiçbir sorun yok: imzalar ücretsizdir ve para taşıyamaz.

> ℹ️ Tekrar dene! Gassız onay imzaları tek başına token transferlerine yetki verebilir.

- [ ] Sadece kurtarma ifadeni de yazarsan tehlikeli olur.

> ℹ️ Tekrar dene! Kurtarma ifadesi gerekmiyor. İmzanın kendisi tokenların üzerinde harcama yetkisi verebilir.

- [ ] Güvenli, çünkü destek ekipleri kullanıcılara özel mesaj atar.

> ℹ️ Tekrar dene! Gerçek destek ekipleri sana ilk mesajı asla atmaz. Bu klasik bir tehlike işaretidir.

- [x] Bu imza oltalaması: imza tokenlarını boşaltabilir.

> ℹ️ Doğru! İstenmeyen bir DM, aciliyet, benzer görünen bir URL ve imza isteği: bu bir cüzdan boşaltıcı.

# Donanım Cüzdanları

[Cüzdan Temelleri](https://app.banklessacademy.com/lessons/wallet-basics) dersimizden hatırlarsan, `donanım cüzdanı` `özel anahtarlarını` internete bağlı bilgisayarından uzakta, ayrı bir cihazda tutar. Bu, paranı çok daha güvenli kılar: zararlı yazılım anahtarlarını okuyamaz, hırsızın da cihazı fiziksel olarak çalıp kırması gerekir. Popüler seçenekler arasında Ledger, Trezor ve Keystone var. Her zaman doğrudan üreticiden satın al.

Donanım cüzdanını MetaMask gibi tarayıcı eklentisi cüzdanlarıyla birlikte de kullanabilir, kolaylıkla donanım güvenliğini birleştirebilirsin. Ledger bunun kurulumu için [kendi rehberini yazdı](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask).

Tek sınırı: donanım cüzdanı neyi onaylarsan onu imzalar, yani kötü niyetli bir işlemi kör imzalarsan paranı yine kaybedersin. Onaylamadan önce ayrıntıları her zaman cihazın kendi ekranında doğrula.

![](https://app.banklessacademy.com/images/web3-security/hardware-wallets-22a096d4.svg)

# Knowledge Check 6

Doğru mu yanlış mı? Donanım cüzdanı paranı ancak her işlemi onaylamadan önce doğrularsan güvende tutar.

- [x] Doğru

> ℹ️ Doğru! Donanım cüzdanı anahtarlarını korur, ama paranı ancak imzaladığın şeyi doğrulaman korur.

- [ ] Yanlış

> ℹ️ Tekrar dene! Donanım cüzdanı neyi onaylarsan onu imzalar. Kör imzalama onu da boşaltabilir.

# Cüzdan Stratejileri

Kurulumuna bir donanım cüzdanı ekledikten sonra, paranı güvenceye almanın en iyi yollarından biri onu birden fazla `cüzdana` yaymaktır. İşte üç ayrı cüzdanla bölümlere ayırma stratejisi:

1. **Sosyal Cüzdan:** Girişler, mint'ler ve yeni dApp denemeleri için, içinde çok az para olan ya da hiç olmayan bir `sıcak cüzdan`. İçindeki her şeyin kaybolabileceğini varsay.
2. **Ticaret Cüzdanı:** Alım satım ve kısa sürede taşınması gerekebilecek paralarla ilgili işler için bir `sıcak cüzdan`.
3. **HODL Cüzdanı:** Uzun vadeli `HODL` için bir `donanım cüzdanı`: uzun süre tutmayı planladığın paralar. Bu cüzdanı akıllı sözleşmelerle veya tanımadığın sitelerle etkileşim için _**asla**_ kullanma.

👍 **ARTILARI:** Bu ayrım sayesinde dolandırıcılık _her şeyi_ değil, yalnızca _o cüzdandaki_ parayı tehdit eder.

👎 **EKSİLERİ:** Takibi daha karmaşık, ama birçok cüzdan uygulaması cüzdanlarına isim vermene izin verir.

![](https://app.banklessacademy.com/images/web3-security/wallet-strategies-2b743061.svg)

# Knowledge Check 7

Daha yüksek güvenlik için paranı _______________ tutmanı öneririz.

- [ ] birden fazla airdrop'ta

> ℹ️ Tekrar dene! Airdrop'lar token dağıtımıdır, para saklanacak bir yer değil.

- [ ] birden fazla NFT'de kilitli

> ℹ️ Tekrar dene! NFT'ler başlı başına birer varlıktır, paran için bir güvenlik stratejisi değil.

- [x] birden fazla cüzdanda ayrı

> ℹ️ Doğru! Parayı ayrı cüzdanlara bölmek, bir dolandırıcılığın yalnızca o cüzdandaki parayı tehdit etmesi demektir.

- [ ] birden fazla adreste likit

> ℹ️ Tekrar dene! Mesele likidite değil. Zararı sınırlayan şey, parayı ayrı cüzdanlara bölmektir.

# Web2 Dolandırıcılıklarından Sonra Toparlanmak

Umarız henüz bir dolandırıcıya kurban gitmemişsindir. Gittiysen, hesaplarını yeniden güvene almak için atman gereken adımlar var.

Gmail veya Discord gibi bir web2 hizmetini ilgilendiren bir dolandırıcılıkta şunları yap:

- Etkilenen hesabın parolasını değiştir.
- Varsa “diğer tüm cihazlardan çıkış yap” düğmesiyle dolandırıcıları hesabından at.
- `2FA'yı` etkinleştir: tercihen passkey ya da donanım güvenlik anahtarı, olmazsa doğrulayıcı uygulama.
- Dolandırıcılığı ilgili hizmete bildir.
- E-posta hesabının da güvende olduğundan emin ol.
- Dolandırıcılığı arkadaşlarınla veya güvendiğin topluluk üyeleriyle konuş.

# Web3 Dolandırıcılıklarından Sonra Toparlanmak

Ethereum'da sözleşmelere token harcama izni açıkça verilmelidir. Token `harcama izni`, belirli bir sözleşmeye harcaması için tanıdığın miktardır. İzinleri düşük tutmak varlıklarının riskini azaltır.

Web3'te dolandırıcıları şikâyet edebileceğin, protokollerin başında duran biri yok, ama yine de yapabileceklerin var:

- Ele geçirilen cüzdanda kalan parayı hemen farklı bir cüzdan adresine taşı, **yeni adresin farklı bir kurtarma ifadesine sahip olduğundan emin ol.**
- Token `harcama izinlerini` [revoke.cash](https://revoke.cash) (birçok ağda çalışır) veya [etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker) ile gözden geçir ve iptal et. İptal etmek gas harcar; revoke.cash'in bir [adım adım rehberi](https://revoke.cash/learn/approvals/how-to-revoke-token-approvals) var.
- Ayrıca revoke.cash'in “Delegations” sekmesinde tanımadığın bir cüzdan yetki devri var mı bak, varsa cüzdan uygulamandan kaldır.
- Bundan sonra `donanım cüzdanı` kullan ve imzaladığın her şeyi doğrula.
- Dolandırıcılığı etkilenen topluluğa bildirerek başkalarını uyar.
- Gelecekte kendini ve başkalarını nasıl koruyacağını görmek için dolandırıcılık sürecini arkadaşlarınla veya güvendiğin topluluk üyeleriyle konuş.
