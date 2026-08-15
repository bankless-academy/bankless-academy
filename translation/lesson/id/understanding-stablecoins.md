---
TITLE: Memahami Stablecoin
DESCRIPTION: Gunakan dolar, euro, dan mata uang lain di blockchain.
LANGUAGE: Bahasa Indonesia
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
## Poin Penting

> * Stablecoin adalah padanan mata uang fiat di blockchain, seperti dolar atau euro.
>
> * Stablecoin biasanya diterbitkan sebagai token (misalnya token `ERC-20` di Ethereum) dan kini beredar di banyak blockchain. Stablecoin membuat pengguna DeFi bisa berpindah cepat antara nilai fiat dan nilai kripto tanpa keluar dari blockchain.
>
> * Ada beberapa kategori stablecoin, masing-masing dengan konsekuensi dan profil risikonya sendiri.
>
> * Stablecoin bisa menghasilkan bunga tahunan lebih besar daripada menyimpan fiat di bank tradisional, meski regulasi kini menentukan siapa yang boleh menawarkan imbal hasil itu dan bagaimana caranya.

## Kenapa Memegang Stablecoin?

Stablecoin sudah menjadi fondasi ekosistem DeFi. Setelah pasokannya mencapai sekitar $140 miliar pada puncak 2022 (lihat gambar di bawah), total pasokan melewati $300 miliar pada 2026, dan pada 2025 stablecoin menyelesaikan transaksi bernilai lebih dari $30 triliun, lebih besar daripada yang diproses Visa tahun itu.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Inilah alasan stablecoin banyak dicari:

* **Stabilitas**: Menyimpan stablecoin di dompet penyimpanan mandiri kamu mirip memegang mata uang fiat, tapi di blockchain. Saat memegang stablecoin seperti USD Coin (USDC) yang diterbitkan Circle, kamu bisa mengharapkan nilainya tetap 1:1 dengan dolar AS, sementara harga aset seperti ether dan bitcoin naik turun.

* **Fleksibilitas**: Karena nilai yang dipatok ini ada sebagai token di blockchain, berpindah antara nilai fiat dan nilai kripto jadi mudah.

* **Akses**: Stablecoin membuka akses ke berbagai layanan keuangan terdesentralisasi, seperti meminjam atau meminjamkan tanpa izin untuk mendapat bunga.

* **Keamanan**: Kriptografi membuat penyerang sangat sulit menyita atau memalsukan transaksi.

Cara sebuah stablecoin menjaga kesetaraan 1:1, atau `patokan`, terhadap mata uang fiat pasangannya adalah sifatnya yang paling penting. Sama seperti mata uang fiat yang hanya bernilai sebesar fundamental yang menopangnya, mekanisme patokan sebuah stablecoin menentukan nilai aset yang kamu pegang.

## Kategori Stablecoin

Ada tiga strategi umum yang dipakai stablecoin untuk menjaga patokan harganya:

* 💵 **Didukung fiat**: diagunkan 1:1 oleh cadangan fiat di dunia nyata.

* 🔗 **Diagunkan kripto**: kelebihan agunan berupa setoran kripto ke protokol DeFi.

* 🔃 **Algoritmik**: algoritma penyeimbang pasokan menggantikan agunan penuh, desain dengan sejarah bermasalah.

### 1\. Stablecoin yang Didukung Fiat

Stablecoin yang didukung fiat menjaga nilainya dengan menerbitkan pasokan token tetap yang diimbangi cadangan mata uang di dunia nyata. Harga onchain-nya dijaga oleh ekonomi penawaran dan permintaan: sedikit orang mau membayar lebih dari satu dolar nyata untuk satu dolar nilai onchain, jadi mereka memilih tempat lain. Untuk memenuhi permintaan yang naik, `penerbit stablecoin` mengunci fiat tambahan dan menambah pasokan token dalam jumlah yang sama.

Stablecoin yang didukung fiat dan paling menonjol antara lain USDT dari Tether dan USD Coin (USDC) dari Circle. Circle juga menerbitkan padanan yang dipatok ke euro, yaitu EURC.

Penerbit stablecoin memperoleh pendapatan lewat berbagai cara, antara lain menginvestasikan sebagian cadangan fiat mereka di surat utang jangka pendek pemerintah AS dan setara kas, serta memakai model pendapatan campuran berupa biaya transaksi dan layanan pemberian pinjaman.

> **Inovasi & Filantropi lewat Stablecoin yang Didukung Fiat: Glo Dollar**
>
> Glo Foundation memakai pendekatan inovatif terhadap pendapatan cadangan lewat [Glo Dollar](https://www.glodollar.org/) (USDGLO), stablecoin yang didukung dolar AS: bunga dari cadangannya mendanai program pendapatan dasar untuk orang dalam kemiskinan ekstrem. Cukup dengan memegang USDGLO, pengguna sudah ikut berfilantropi. Pelajari cara kerja Glo Dollar [di sini](https://www.glodollar.org/articles/how-glo-works).

Hal yang perlu dipertimbangkan saat memakai stablecoin yang didukung fiat:

* **Pelaporan Cadangan**: Pemegang perlu jaminan bahwa token stablecoin mereka diimbangi satu banding satu oleh cadangan fiat. Kebanyakan penerbit menerbitkan `atestasi` (akuntan independen memastikan cadangan itu ada pada tanggal tertentu), yang lebih lemah daripada audit penuh atas keuangan penerbit; sampai sekarang belum ada penerbit besar yang menerbitkan audit penuh. Circle merilis atestasi USDC bulanan (oleh Deloitte), dan Tether, yang dulu tertutup soal jaminannya, kini menerbitkan atestasi triwulanan (oleh BDO).

* **Regulasi**: Di AS, GENIUS Act (disahkan Juli 2025) mewajibkan penerbit stablecoin pembayaran memegang cadangan 1:1 berupa kas dan surat utang jangka pendek pemerintah AS, dan melarang mereka membayar bunga kepada pemegang. Di Uni Eropa, kerangka MiCA membuat bursa besar menghapus stablecoin yang tidak patuh seperti USDT untuk pengguna Eropa.

* **Risiko Sensor**: Karena USDC dan USDT sama-sama tunduk pada penyelidikan pemerintah, `kontrak pintar` token ini punya fungsi pembekuan yang bisa mengunci kepemilikan onchain seorang pengguna kalau aktivitasnya dianggap bermasalah. Fungsi pembekuan ini juga berlaku untuk token yang disimpan di `dompet non-kustodian`.

Tingkat sentralisasi yang tinggi di sektor stablecoin yang didukung fiat menyisakan banyak ruang perbaikan untuk memegang nilai yang dipatok ke fiat dengan cara yang benar-benar kripto.

### 2\. Stablecoin yang Diagunkan Kripto

Stablecoin yang diagunkan kripto adalah pilihan yang lebih transparan dan terdesentralisasi, dan sifat itu membantu menghilangkan sebagian risiko. Stablecoin ini menjaga patokan fiat lewat cadangan aset kripto. Karena volatilitas pasar kripto memengaruhi total nilai cadangan itu, stablecoin jenis ini memakai kelebihan agunan, kadang sampai 200%! Semua aset agunan bisa dilihat onchain, jadi pengguna bisa memeriksa komposisi asli stablecoin mereka kapan saja.

Contoh paling menonjol di kategori ini adalah USDS dari Sky, penerus Dai (DAI) milik MakerDAO, stablecoin pertama yang diagunkan kripto, setelah MakerDAO berganti nama menjadi Sky pada 2024. Untuk desentralisasi yang lebih murni, LUSD dari Liquity hanya didukung setoran ETH dengan kelebihan agunan.

![Rincian agunan DAI, pendahulu USDS (Juni 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Hal yang perlu dipertimbangkan:

* **Penilaian Agunan**: Cadangan sebuah stablecoin biasanya terdiri dari kripto, stablecoin lain, bahkan kelas aset lain. Contohnya, USDS didukung ETH, stablecoin, aset dunia nyata seperti surat utang pemerintah AS, dan beberapa komponen kecil lain. Untuk menekan risiko dari beragam aset ini, USDS memakai kelebihan agunan (saat tulisan ini dibuat). Bahkan kalau harga ETH anjlok 20%, USDS masih punya [agunan yang cukup](https://defillama.com/stablecoins) untuk menutupi tokennya. Namun gejolak harga lebih lanjut di berbagai asetnya bisa mulai menggerus patokan.

* `Risiko pihak lawan`: Bergantung pada banyak kelas aset berarti peluang salah satu aset bermasalah dan memengaruhi nilai aset kamu jadi lebih besar. Tapi kamu hanya terpapar sebagian dari dampak tiap risiko.

* **Risiko Tata Kelola**: Stablecoin jenis ini dan perbendaharaannya dikelola oleh kelompok pemilih tata kelola yang terdesentralisasi. Artinya ada risiko kesalahan manusia, atau kemungkinan tata kelola dikuasai pihak tertentu.

### 3\. Stablecoin Algoritmik

Token ini berusaha menjaga patokannya dengan menyeimbangkan pasokannya sendiri secara otomatis, bukan dengan memegang agunan penuh: algoritma onchain menarik token dari peredaran saat harga pasar turun di bawah patokan, dan mencetak token baru saat harga naik di atasnya. Di atas kertas, ini menjanjikan stablecoin tanpa bank dan tanpa agunan. Pada praktiknya, versi murni desain ini gagal total.

Contoh paling terkenal adalah UST dari Terra, yang algoritmanya selalu mengizinkan pemegang menukar 1 UST dengan token LUNA milik Terra senilai $1. Pada Mei 2022, penjualan UST besar-besaran memaksa algoritma mencetak LUNA dalam jumlah luar biasa, menjatuhkan harganya dan memicu penjualan lebih banyak lagi: sebuah `spiral kematian` yang melenyapkan sekitar $40 miliar hanya dalam hitungan hari. UST tidak pernah kembali ke patokannya.

Proyek yang bertahan sudah meninggalkan model murni itu. Frax, yang dulu sebagian algoritmik, beralih ke agunan 100% pada 2023; stablecoin-nya sekarang, frxUSD, didukung cadangan termasuk dana surat utang AS yang ditokenisasi, sementara FRAX kini menjadi token tata kelola protokol.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Dari puing-puingnya muncul kategori modern yang berbeda: desain hibrida atau "dolar sintetis" seperti USDe dari Ethena, yang memegang agunan kripto plus posisi perdagangan penyeimbang yang menetralkan pergerakan harga (lindung nilai "delta-neutral"). Desain ini tetap beragunan, tapi dengan cara baru dan risikonya sendiri, seperti ketergantungan pada bursa yang menampung posisi itu, dan pada kondisi pasar yang menjaga lindung nilai tetap menguntungkan.

Hal yang perlu dipertimbangkan:

* **Risiko Spiral Kematian**: Patokan algoritmik murni bergantung pada kepercayaan pasar yang terus terjaga. Saat kepercayaan itu runtuh, mekanisme pasokan bisa memperbesar keruntuhannya, bukan menghentikannya, tanpa sisa agunan untuk ditebus.

* **Sangat Teknis**: Kamu perlu memahami apa yang sebenarnya menopang token itu (dan dalam kondisi apa penopang itu bisa gagal) untuk membangun keyakinan serta kesadaran akan risiko dan imbalannya.

* **Risiko Teknologi Baru**: Desain hibrida dan sintetis sebagian besar belum teruji melewati satu siklus pasar penuh. Pakai hanya token dengan beberapa audit kontrak pintar dari auditor kelas atas, dan ingat bahwa audit tidak bisa melindungi dari desain ekonomi yang cacat.

## Memilih Stablecoin

Stablecoin apa yang paling baik dipegang? Seperti semua hal di DeFi, jawabannya bergantung pada **kebutuhan**, **nilai**, dan **toleransi risiko** kamu.

Ringkasan singkat tiap kategori:

* 💵 **Didukung fiat**: Pendekatan tradisional, paling mendekati memegang fiat di blockchain.

  * Nilai: kelaziman, kepercayaan institusional.

  * Risiko: jaminan agunan yang tidak transparan, penyedia bisa membekukan dana.

* 🔗 **Diagunkan kripto**: Pendekatan seimbang dan asli kripto, menyebar risiko agunan ke beberapa kelas aset.

  * Nilai: diversifikasi, transparansi, kemajuan.

  * Risiko: volatilitas pasar kripto, ketergantungan pada aset lain.

* 🔃 **Algoritmik**: Wilayah eksperimen: desain murni sudah gagal total, dan hibrida modern masih belum terbukti.

  * Nilai: inovasi, efisiensi modal, kemajuan.

  * Risiko: spiral kematian, desain ekonomi yang cacat, bug kontrak pintar.

Seperti biasa, cara terbaik mempelajari sesuatu adalah mencobanya. Kamu bahkan mungkin memutuskan memegang beberapa jenis stablecoin sekaligus.

Dan ingat, tidak semua stablecoin dalam satu kategori itu setara! Lakukan riset sendiri sebelum berinteraksi dengan token baru.

---

Kami harap kamu menikmati artikel Handbook Penjelajah ini: "Memahami Stablecoin".

Jangan lupa mengoleksi artikel ini kalau kamu ingin punya salinannya sebagai rujukan cepat dalam perjalanan, atau untuk mendukung konten Bankless Academy berikutnya. Selamat menjelajah, Penjelajah!

---

## Pertanyaan yang Sering Diajukan

### Apa Stablecoin yang Paling Populer?

Melihat stablecoin teratas berdasarkan `kapitalisasi pasar` memberi gambaran preferensi pasar saat ini, tapi ini bukan panduan tentang posisi yang sebaiknya kamu ambil, atau seberapa aman posisi itu.

Berikut daftar realtime stablecoin teratas berdasarkan kapitalisasi pasar: <https://defillama.com/stablecoins>

Pengguna mata uang kripto sering menyebut "Efek Lindy" saat memilih opsi investasi. Konsep ini menyatakan bahwa semakin lama sesuatu bertahan, semakin besar harapan ia akan terus bertahan. Tujuh belas tahun sejarah mata uang kripto menunjukkan hal itu hanya kadang-kadang benar.

### Di Mana Bisa Membeli Stablecoin?

Bursa terpusat (CEX) menyediakan stablecoin populer yang didukung fiat (dan biasanya stablecoin bermerek mereka sendiri), sementara jenis stablecoin lain sering tidak tersedia.

Kunjungi bursa terdesentralisasi (DEX), atau pakai layanan onramp langsung di dompet seperti "MetaMask Buy", untuk mendapatkan token yang diagunkan kripto dan token algoritmik. Baca pelajaran kami tentang [Bursa Terdesentralisasi](https://app.banklessacademy.com/lessons/decentralized-exchanges) untuk mempelajari pasar peer-to-peer.

### Bagaimana Cara Mendapat Bunga dari Stablecoin?

Beberapa CEX menawarkan imbal hasil hanya dengan menyimpan stablecoin di platform mereka, yang didanai dari sebagian laba platform untuk mendorong penggunaan. Catatan untuk pembaca di AS: berdasarkan GENIUS Act, penerbit stablecoin yang teregulasi tidak boleh membayar bunga kepada pemegang, jadi imbal hasil hanya datang dari platform pihak ketiga, dan ketersediaannya berbeda tiap yurisdiksi.

Kamu juga bisa mendapat bunga di DeFi lewat platform pemberian pinjaman dan peminjaman tanpa perlu percaya. Platform ini menghubungkan pemberi pinjaman dengan peminjam, dan mengelola risiko lewat agunan onchain dan kontrak pintar. Pemberi pinjaman stablecoin bisa memperoleh imbal hasil tahunan jauh lebih tinggi daripada di sektor perbankan tradisional, tapi di mana ada imbalan, di situ ada risiko!

Topik pemberian pinjaman dan peminjaman layak punya artikel Bankless Academy sendiri. Kalau kamu sudah tertarik mendalaminya, kamu bisa meneliti platform seperti [Aave.com](https://aave.com/) dan [Curve.fi](https://curve.fi/).

### Apa yang Terjadi kalau Stablecoin Kehilangan Patokannya?

Harga pasar stablecoin mana pun bergeser sedikit mengikuti pasang surut perdagangan. Untuk stablecoin besar, pergeserannya biasanya hanya beberapa perseratus sen di atas atau di bawah $1. Selisih kecil ini cepat tertutup oleh trader yang memanfaatkan peluang arbitrase.

Namun ada kasus ketika stablecoin kehilangan patokannya jauh di luar rentang sementara yang aman. Efek ini belum tentu permanen (USDC, Maret 2023), tapi bisa saja permanen (Terra, Mei 2022).

Sebagian penerbit stablecoin yang didukung fiat, seperti USDC, menawarkan penebusan 1:1 dari stablecoin mereka ke fiat biasa lewat situs mereka. Apakah itu tetap berlaku saat krisis, ceritanya lain lagi.

---

**Penulis**

[**Tetranome**](https://twitter.com/tetranome) adalah Project Champion di Bankless Academy, berfokus pada pengalaman pengguna, UI, desain, dan kurikulum platform.

**Editor**

[**Trewkat**](https://twitter.com/trewkat) adalah penulis dan editor di BanklessDAO. Dia tertarik mempelajari kripto dan NFT, dengan fokus khusus pada cara terbaik menyampaikan pengetahuan itu kepada orang lain.

**Patron**

Artikel tanpa sponsor ini adalah bagian dari pendidikan gratis Bankless Academy. Koleksi artikel ini untuk mendukung konten berikutnya!
