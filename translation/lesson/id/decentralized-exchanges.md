---
TITLE: Bursa Terdesentralisasi
DESCRIPTION: Temukan cara bursa berbasis kontrak pintar memungkinkan swap token tanpa izin!
LANGUAGE: Bahasa Indonesia
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

# Apa Itu Bursa Terdesentralisasi?

Bursa terdesentralisasi (DEX) adalah pasar onchain tempat Penjelajah menukar mata uang kripto dengan pengguna lain secara aman, sambil tetap memegang sendiri dana dompet mereka. Perdagangan peer-to-peer ini berjalan lewat kontrak pintar yang terbuka untuk umum, yang menghubungkan pengguna dengan brankas token komunal berukuran besar. Brankas itu disebut `kolam likuiditas`. DEX ada di hampir semua blockchain, termasuk di Layer 1 dan Layer 2 Ethereum.

Menukar token adalah bagian penting dari `DeFi`. Di DeFi kamu menemukan ragam dan kegunaan token yang lebih luas daripada di jenis bursa mana pun. Sebagian pengguna membeli token untuk mengakses produk dan layanan onchain, sebagian lain sebagai investasi. Sebagian token memberi pemegangnya hak suara atas arah proyek, mirip saham di perusahaan tradisional! Apa pun alasanmu, kamu akan sering mampir ke DEX.

Mari pelajari cara kerjanya dan bagaimana DEX bisa paling berguna untukmu.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Bursa Terpusat dan Bursa Terdesentralisasi

Mari bahas beda teknologi bursa terpusat (seperti Coinbase, Binance, Kraken) dan bursa terdesentralisasi (seperti Uniswap, PancakeSwap).

Bursa terpusat (`CEX`) memungkinkan pengguna berdagang dan berinvestasi di mata uang kripto tanpa menyentuh ekosistem blockchain itu sendiri. Karena akunmu terdaftar di CEX, kunci privat dan danamu ada dalam kustodi mereka: kamu tunduk pada pengelolaan, aturan, dan risiko model bisnis mereka.

Bursa terdesentralisasi (`DEX`) memungkinkan pengguna berdagang sepenuhnya dalam penyimpanan mandiri, tujuan awal blockchain dibuat. Model peer-to-peer membuatmu bisa menjadi konsumen sekaligus penyedia, dengan akses ke peluang finansial yang dulu hanya milik kalangan keuangan. Sistemnya transparan dan tahan sensor: tidak ada yang bisa membekukan aksesmu atau membatalkan perdaganganmu. Risiko peretasan tetap ada, dan akan kita bahas nanti.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Mana pernyataan yang benar tentang bursa mata uang kripto?

- [ ] Tidak ada tim di balik sebuah DEX.

> ℹ️ DEX tetap punya tim pengembang, tapi pengaruh mereka pada proyek terbatas.

- [ ] Di CEX kamu hanya bisa rugi karena salah berdagang.

> ℹ️ CEX juga punya risiko. Pada 2022 bursa FTX kolaps dan hampir semua penggunanya kehilangan simpanan.

- [x] DEX membuatmu berdagang dalam penyimpanan mandiri, CEX tidak.

> ℹ️ Kecuali dinyatakan sebaliknya, kunci privatmu dipegang oleh CEX.

# Aplikasi Terdesentralisasi

DEX adalah salah satu jenis `dApp`, yaitu aplikasi terdesentralisasi yang berjalan di blockchain. Agar sebuah aplikasi internet disebut "terdesentralisasi", aplikasi itu harus terbuka bagi siapa pun tanpa pandang bulu, memproses interaksi pengguna tanpa perlu orang lain, dan ditulis dengan kode yang transparan untuk umum.

Layanan dApp dijalankan oleh kontrak pintar, yaitu baris kode yang menerima aksi onchain pengguna dan memberi respons onchain yang bisa ditebak. Ethereum Foundation menyamakan kontrak pintar dengan mesin penjual otomatis: pengguna menekan nomor barang yang diinginkan, memasukkan uang secukupnya, lalu menerima keluaran yang diharapkan (camilannya) tanpa perlu orang lain memproses transaksi itu.

Kontrak pintar DEX menangani berbagai perintah, seperti swap token, pemungutan suara, atau menambah dan menarik `likuiditas`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Aplikasi Terdesentralisasi (lanjutan)

DEX memakai logika yang sama dengan mesin penjual otomatis: menerima token masukan pengguna dan mengeluarkan token yang diinginkan. Contoh dApp lain:

🎟️ **dApp pemungutan suara**: menyalurkan suara pengguna ke pihak tertentu.

📦 **dApp jembatan**: memindahkan mata uang kripto pengguna dari satu jaringan blockchain ke jaringan lain.

🤝 **dApp pinjam-meminjam**: memberi pinjaman kepada pengguna yang memenuhi syarat tertentu.

Kontrak pintar adalah akun di Ethereum: punya alamat dan saldo, serta menjalankan aksi otomatis saat dipicu oleh transfer dan perintah. Sebuah DEX adalah akun Ethereum terprogram dengan sejumlah fungsi.

`dApp` biasanya memakai situs web sebagai antarmuka visual agar pengguna lebih mudah berinteraksi dengan kontrak pintar di baliknya. Kalau situsnya mati, kamu tetap bisa mengakses kontrak pintarnya jika sudah berpengalaman!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Sifat apa saja yang membuat sebuah dApp disebut terdesentralisasi?

- [ ] Tanpa izin: terbuka untuk semua pengguna.

> ℹ️ Ini salah satu sifat dApp, tapi bukan satu-satunya.

- [ ] Otonom: interaksi pengguna tidak butuh perantara.

> ℹ️ Ini salah satu sifat dApp, tapi bukan satu-satunya.

- [ ] Transparan: kode kontrak pintarnya terbuka untuk umum.

> ℹ️ Ini salah satu sifat dApp, tapi bukan satu-satunya.

- [x] Semua benar.

> ℹ️ dApp Ethereum dihargai karena bisa tanpa izin, otonom, dan transparan.

# Automated Market Maker

Di pasar tradisional dan `CEX`, kustodianmu memakai `order book`, yaitu basis data berisi penawaran beli dan jual. CEX mencocokkan penawaranmu dengan penawaran orang lain. Kamu biasanya dikenai komisi dasar atau berjenjang, dan kamu tidak pernah tahu apakah metode pencocokan yang tertutup itu memberimu harga terbaik.

Sebagian besar `DEX` memakai teknologi "Automated Market Maker" (`AMM`), rancangan paling umum untuk swap token: sistem yang menentukan harga dengan algoritma publik. Beberapa DEX baru memakai order book atau sistem berbasis intent. Karena algoritma AMM bersifat open source, siapa pun bisa memahami, menyalin, dan memperbaikinya, sehingga persaingan sehat dan inovasi terus berjalan.

AMM menyalurkan perdagangan pengguna lewat `kolam likuiditas`, bukan mencocokkan penawaran antar pengguna secara langsung. Brankas token komunal ini menerima dan mengeluarkan token sesuai interaksi pengguna, dan setiap langkahnya terlihat di blockchain publik.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

Apa keunggulan AMM dibandingkan order book tradisional?

- [ ] Perdagangan lewat AMM lebih cepat daripada lewat order book.

> ℹ️ Kalau waktu konfirmasi jaringan ikut dihitung, ini belum tentu benar.

- [ ] AMM menghubungkanmu langsung dengan pengguna lain.

> ℹ️ AMM menyalurkan perdagangan lewat brankas token komunal bernama kolam likuiditas, bukan langsung antar pengguna.

- [x] Kamu bisa mendeteksi dan mencegah perdagangan berat sebelah.

> ℹ️ Sifat AMM yang transparan membuat platform jauh lebih sulit menyembunyikan tindakan jahat, bahkan bagi pengguna sekalipun!

# Swap Token

Perdagangan mata uang kripto di blockchain disebut `swap token`. Interaksi kontrak pintar ini mengubah satu mata uang kripto menjadi yang lain lewat `kolam likuiditas` AMM. Dengan menyusun `rute perdagangan`, yaitu jalur melewati kolam likuiditas yang tepat, kontrak pintar DEX menukar token masukanmu dengan token yang kamu inginkan. Karena satu kolam biasanya hanya memuat dua token dan tidak setiap `pasangan token` punya kolam, satu rute bisa melewati beberapa kolam.

Agar kontrak pintar bisa mengakses dompet kita, kita memberinya izin menarik dana sampai jumlah tertentu (atau tanpa batas). Dengan `izin token` ini, kontrak tepercaya bisa menjalankan transaksi tanpa kunci privat kita. Memberi izin memakan gas, jadi izin dibiarkan terbuka untuk dipakai lagi: satu alasan untuk berdagang dari satu dompet dan menyimpan di dompet lain. Cara memantau dan mencabut izin ada di pelajaran [Mengelola Izin Token](https://app.banklessacademy.com/lessons/managing-token-allowances)!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Swap Token (lanjutan)

Mari lihat satu contoh swap untuk memahami proses izin dan pertukarannya. Contohnya swap USDC ke OP di Velodrome, DEX besar di jaringan Optimism. Perdagangan ini sering dilewatkan dua kolam, karena `kolam likuiditas` USDC/OP kurang efisien dari sisi biaya:

1. Pertama, kamu memberi kontrak pintar Velodrome yang tepat izin untuk menarik USDC dari dompetmu.
2. Kamu mengirim permintaan transaksi swap ke Velodrome.
3. Transaksi diterima: Velodrome menarik sejumlah USDC dari dompetmu ke kolam likuiditas USDC/ETH. ETH senilai itu keluar dari kolam pertama dan dipindahkan ke kolam likuiditas ETH/OP. Terakhir, OP dikirim dari kolam kedua ke alamat dompetmu.

Transaksi swap selesai. USDC kamu sudah ditukar menjadi OP, lewat ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

AMM bisa menyalurkan satu perdagangan lewat beberapa kolam likuiditas sekaligus dalam satu transaksi.

- [x] Benar

> ℹ️ Tepat! Biaya jaringannya mungkin lebih tinggi, tapi semua aksi digabung menjadi satu transaksi.

- [ ] Salah

> ℹ️ Kurang tepat, cek slide sebelumnya untuk memahami alasannya.

# Apa Itu Likuiditas?

Likuiditas di dunia kripto adalah kemampuan sebuah pasar melayani jual beli aset digital pada harga yang wajar. Saat likuiditas tinggi, harga lebih stabil; saat likuiditas rendah, harga lebih bergejolak. Karena pengguna umumnya tertarik pada harga yang wajar, `DEX` berusaha menjaga likuiditas tetap tinggi di semua kolamnya.

Likuiditas tinggi berarti jumlah token di kolam likuiditas banyak, umumnya dengan nilai terbagi 50/50 antara dua token yang keluar masuk kolam. Contohnya, kolam USDC/ETH melayani semua perdagangan `pasangan token` ini di platform tersebut.
Semakin banyak token, semakin kecil pengaruh setiap perdagangan pada keseimbangan 50/50 itu, sehingga harga lebih stabil. Besarnya pergeseran keseimbangan akibat sebuah perdagangan disebut `dampak harga`.

Sebagai Penjelajah, kamu ingin dampak harga sekecil mungkin agar dapat harga terbaik! Artinya, kamu ingin likuiditas yang tinggi dan seimbang.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Penyedia Likuiditas

Mengejar `likuiditas` tinggi sangat penting bagi keberhasilan sebuah DEX, tapi likuiditas di ekosistem kripto terbatas, jadi setiap DEX bersaing merebut sebanyak mungkin. Lalu, dari mana likuiditas itu datang?

Di ekosistem terdesentralisasi, warga DeFi diberi insentif untuk menyediakan likuiditas ke sebuah kolam demi menaikkan TVL (total nilai terkunci) platform. Biaya yang terkumpul dari pengguna yang berdagang lewat kolam itu dibagikan kepada para LP (penyedia likuiditas) sesuai jumlah likuiditas yang disetor. Benar sekali: dengan meminjamkan token ke kolam likuiditas DEX, kamu bisa memperoleh penghasilan pasif.

Ada banyak hal yang perlu dipertimbangkan sebelum menjadi `LP`, dan kami akan membahasnya di konten mendatang. Untuk sekarang, ingat bahwa APR (imbal hasil tahunan) besar yang dipajang di kolam likuiditas DEX tidak dijamin, dan kerugian bisa terjadi.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Lengkapi pernyataan ini: "Saat likuiditas __________."

- [ ] tinggi, volatilitas juga tinggi.

> ℹ️ Kurang tepat, coba lagi.

- [ ] rendah, volatilitas juga rendah.

> ℹ️ Kurang tepat, coba lagi.

- [x] rendah, volatilitas tinggi.

> ℹ️ Tepat! Likuiditas dan volatilitas umumnya berbanding terbalik.

# Knowledge Check 6

Bagaimana DEX memberi insentif agar pengguna menyediakan likuiditas?

- [ ] Asuransi atas kerugian perdagangan.

> ℹ️ Baik CEX maupun DEX tidak melindungimu dari kerugian akibat investasi yang buruk.

- [x] Bagian dari biaya platform dan/atau token bonus.

> ℹ️ Biaya penggunaan DEX sering dibagi ke berbagai pemangku kepentingan, termasuk LP. Sebagian platform bahkan memberi bonus tambahan.

- [ ] Akses ke kolam likuiditas privat.

> ℹ️ Tidak ada kolam likuiditas privat; lalu lintas yang sepi tidak akan memberi imbal hasil memadai.

- [ ] Semua benar.

> ℹ️ Hanya ada satu jawaban benar di sini, bisa kamu temukan yang mana?

# Biaya Platform

Baik CEX maupun DEX mengenakan biaya atas layanannya, dan berinteraksi dengan blockchain juga tidak gratis. Berikut lima biaya umum yang perlu dipertimbangkan saat memilih platform.

🏷️ **Biaya platform**: CEX menetapkan komisi dagangnya sendiri, sedangkan biaya kolam DEX berbeda-beda per kolam (umumnya sepersekian persen). Bedanya: biaya DEX terlihat onchain dan bisa dicek siapa saja.

🌐 **Biaya jaringan**: blockchain mengenakan biaya gas di atas transaksi dApp. Kamu bisa menekannya dengan bertransaksi saat jaringan sepi. Etherscan.io punya alat perkiraan gas waktu nyata untuk Ethereum Mainnet: [Etherscan.io](https://etherscan.io/gastracker). Di Layer 2 biayanya jauh lebih murah; bandingkan jaringan di [growthepie](https://www.growthepie.com/).

📦 **Biaya jembatan**: CEX dan jembatan blockchain sama-sama menarik biaya untuk memindahkan kripto antar jaringan. Untuk CEX, lihat informasi di situs mereka. dApp jembatan menampilkan perkiraan biaya sebelum kamu mengonfirmasi.

💹 **Kurs**: saat membeli mata uang kripto langsung dengan fiat di CEX atau DEX, waspadai kurs yang tidak mencerminkan harga pasar.

🧊 **Slippage**: harga bergerak cepat, jadi DEX menyediakan ruang fluktuasi pada swap, yang disebut `slippage` (bisa diatur, biasanya 0,5-2%). Kamu bisa kehilangan sampai sebesar nilai itu, tapi setelan yang terlalu rendah bisa membuat perdaganganmu ditolak.

Selalu lakukan riset sendiri sebelum berdagang agar kamu paham biaya dan konsekuensi setiap platform.

# Keunggulan DEX

Kita sudah membahas banyak teori di pelajaran ini, tapi kamu mungkin masih bertanya apakah DEX cocok untukmu. Secara umum, kamu kemungkinan besar diuntungkan oleh bursa terdesentralisasi jika:

- 🔑 Kamu ingin tetap memegang kendali atas aset digitalmu.
- 🔒 Kamu ingin mengamankan aset di blockchain dan terhindar dari kolapsnya CEX.
- ⌛ Kamu ingin akses ke pasar kripto 24 jam sehari, 7 hari seminggu.
- 👛 Kamu ingin akses ke lebih banyak jenis mata uang kripto.
- 🤑 Kamu tertarik menyediakan likuiditas.
- 🛂 Kamu tidak ingin mendaftar dan `KYC` di setiap platform yang kamu pakai.
- ⚔️ Kamu mencari risiko dan imbalan tambahan dari menjelajahi keuangan terdesentralisasi.

Meski begitu, hampir semua pengguna DeFi punya akun di bursa terpusat. Sebabnya, CEX punya fitur onramp dan offramp yang mudah ke dunia perbankan tradisional; kamu bisa memindahkan uang dari rekening bank ke blockchain dan sebaliknya. [Ryan Sean Adams](https://twitter.com/RyanSAdams) menyamakannya dengan memakai toilet umum: *"Kamu masuk, kamu selesaikan urusanmu, kamu keluar."*

Ini bagus, karena artinya kamu bisa mulai dari akun CEX lalu perlahan pindah ke DeFi seiring kamu makin percaya diri.

# Risiko DEX

Memakai DEX juga punya risiko. Berikut beberapa yang paling berdampak:

🐞 **Risiko kontrak pintar**: audit menekan kemungkinan bug kontrak pintar, tapi tidak menghilangkannya. Pada 2025, sebuah DEX besar yang sudah diaudit beberapa firma kehilangan $128 juta karena bug kode yang halus. Dalam skenario terburuk, kamu bisa kehilangan sebesar nilai perdaganganmu. Pilih kontrak pintar tepercaya yang sudah banyak diaudit.

💰 **Risiko penyimpanan mandiri**: karena kunci privat sepenuhnya tanggung jawabmu, satu dompet bisa hilang seluruhnya akibat pencurian, penipuan, atau seed phrase yang terselip. Karena itu penting menekan risiko dengan strategi banyak dompet, dan selalu menyimpan cadangan seed phrase di tempat fisik yang aman.

🥪 **Serangan sandwich**: menyetel slippage swap terlalu tinggi memperbesar peluang pendahulu perdagangan melancarkan `serangan sandwich` terhadapmu. Dalam serangan ini, kamu bisa kehilangan sampai sebesar nilai slippage-mu. Cara melindungi diri akan kami bahas di konten mendatang.

Setelah menimbang keunggulan dan risikonya, CEX mungkin lebih cocok untukmu jika:

- 🎓 Kamu masih di awal perjalanan kripto dan sedang memahami risiko serta imbalannya.
- ⚖️ Frekuensi dan volume dagangmu kecil, sehingga biaya blockchain terasa tidak sepadan.
- 🏰 Kamu lebih suka memercayakan dana ke bursa daripada menjaganya sendiri.

Sebagian pengguna memilih pendekatan campuran untuk menekan risiko: membeli dan menjual kripto di CEX, lalu menyimpannya di blockchain.

# Knowledge Check 7

Mengapa kamu memilih bursa terdesentralisasi daripada bursa terpusat?

- [ ] Kamu ingin akses ke token yang tidak ada di bursa terpusat.

> ℹ️ Ini salah satu keunggulan DEX, tapi bukan satu-satunya.

- [ ] Kamu ingin tetap memegang penuh dana yang ditukar.

> ℹ️ Ini salah satu keunggulan DEX, tapi bukan satu-satunya.

- [ ] Kamu ingin akses ke alat dan peluang yang biasanya tak tersedia.

> ℹ️ Ini salah satu keunggulan DEX, tapi bukan satu-satunya.

- [x] Semua benar.

> ℹ️ Tepat! DEX menawarkan semua keunggulan itu dibanding CEX.

# Memilih DEX

Ada banyak bursa terdesentralisasi di DeFi, dan sebagian lebih baik daripada yang lain. Pertimbangkan lima faktor kunci ini saat memilih DEX:

🥇 **Legitimasi**: apakah entitasnya dikenal tepercaya, berkualitas, dan bertahan lama?

⛲ **Likuiditas**: apakah `TVL` kolam likuiditasnya cukup tinggi untuk menekan dampak harga?

🖱️ **Kemudahan pakai**: apakah antarmukanya mudah digunakan?

🔐 **Keamanan**: apakah kontrak pintarnya sudah diaudit oleh beberapa auditor?

🎁 **Imbalan dan fitur**: adakah imbalan loyalitas untuk memakai bursa atau menyediakan likuiditas? Bisakah kamu ikut memilih di tata kelola?

Nama yang menonjol di bidang ini antara lain Uniswap, Curve, Velodrome, dan PancakeSwap. Kamu bisa berpindah dari satu DEX ke DEX lain sampai menemukan beberapa favorit! Untuk Quest pelajaran ini, kita akan memakai Velodrome, DEX mapan di jaringan Optimism. Mudah dipakai, dan karena berada di Layer 2, biayanya jauh lebih masuk akal!

# Praktik Terbaik di DEX

Sebelum berinteraksi dengan dApp, ikuti beberapa praktik terbaik ini agar danamu aman:

👩‍💻 Pastikan tautan dApp lewat akun X (Twitter) resmi proyek (centang emas) atau pihak ketiga tepercaya, lalu simpan sebagai bookmark. Banyak penipuan DeFi berawal dari tautan palsu, bahkan di mesin pencari populer.

🔓 Saat memberi `izin token` onchain, batasi izinnya sebesar nilai perdaganganmu. Kini banyak DEX memakai persetujuan berbasis tanda tangan yang hanya mencakup perdaganganmu: lihat [Mengelola Izin Token](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Jangan berinteraksi dengan dApp dari dompet HODL kamu; pakai dompet terpisah khusus dApp. Pelajaran [Keamanan Web3](https://app.banklessacademy.com/lessons/web3-security) membahas strategi dompet.

Sekarang kamu siap berinteraksi dengan bursa terdesentralisasi!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Bagaimana memastikan kamu memilih DEX yang bereputasi baik?

- [x] Cek reputasinya dan hanya pakai URL dari sumber tepercaya.

> ℹ️ Tepat! Periksa sendiri reputasi DEX itu, dan hanya ikuti URL dari pihak tepercaya.

- [ ] Coba dulu interaksi kecil saat pertama kali memakainya.

> ℹ️ Satu interaksi dengan kontrak pintar jahat bisa menguras seluruh dompetmu.

- [ ] Keduanya benar.

> ℹ️ Kurang tepat. Satu interaksi dengan kontrak pintar jahat bisa menguras seluruh dompetmu.
