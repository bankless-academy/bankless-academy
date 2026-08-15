---
TITLE: Blockchain Layer 1
DESCRIPTION: Pahami cara kerja blockchain Layer 1 dan pelajari keterbatasannya!
LANGUAGE: Bahasa Indonesia
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-1-blockchains
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

# Pendahuluan

Masalah muncul ketika pengguna yang ingin memakai jaringan `blockchain` lebih banyak daripada yang sanggup ditangani jaringan itu. Permintaan besar terhadap `ruang blok` bisa bersifat sementara, atau bertahan selama pengguna masih ingin memakai blockchain tersebut. Saat permintaan tinggi, pengguna saling menawar agar transaksi mereka diproses cepat, biaya pun naik dan pengguna bermodal kecil tersingkir.

Pelajaran ini membahas kenapa Ethereum dan blockchain lain tunduk pada `trilema blockchain`, bagaimana trilema menjadi akar masalah di atas, dan bagaimana trilema memengaruhi rencana Ethereum untuk melayani kebutuhan semua penggunanya. Kita akan melihat kompromi yang diambil beberapa blockchain terkait trilema ini, dan apa artinya bagi Penjelajah Academy.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Trilema Blockchain

Seperti tersirat dari kata **tri**lema, ada tiga kualitas blockchain yang saling bersaing sehingga ketiganya tidak bisa dioptimalkan sekaligus.

Ketiganya adalah: `keamanan`, `skalabilitas`, dan `desentralisasi`.

Agar bisa menjadi fondasi yang netral bagi sistem moneter berskala global, sebuah blockchain harus unggul di ketiga aspek itu. Sistem moneter perlu aman dari kecurangan, terlindung dari sensor lewat desentralisasi, dan cukup skalabel untuk melayani lebih dari 8 miliar manusia di masyarakat global.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Trilema blockchain menjelaskan hubungan antara:

- [ ] ethereum, bitcoin, dan altcoin

> ℹ️ Coba lagi! Trilema soal kualitas yang bersaing di dalam satu blockchain, bukan blockchain yang saling bersaing.

- [ ] keamanan, sensor, dan kecurangan

> ℹ️ Coba lagi! Keamanan memang salah satu dari tiga, tapi sensor dan kecurangan adalah ancaman, bukan kualitas trilema.

- [x] desentralisasi, skalabilitas, dan keamanan

> ℹ️ Tepat! Ketiga kualitas ini saling bersaing, sehingga blockchain tidak bisa mengoptimalkan ketiganya sekaligus.

- [ ] keamanan, kecepatan, dan biaya rendah

> ℹ️ Coba lagi! Kecepatan dan biaya masuk ke skalabilitas, satu dari tiga kualitas: keamanan, skalabilitas, desentralisasi.

# Keamanan dan Konsensus

Keamanan adalah syarat paling mendasar bagi blockchain publik. Komputer di dalam sebuah jaringan harus sepakat tentang transaksi apa yang benar-benar terjadi agar bisa bekerja sama; kesepakatan ini disebut `konsensus`. Sebuah blockchain aman jika penyerang tidak bisa mengganggu jaringan dalam menyepakati kebenaran itu. Algoritma konsensus dirancang untuk menahan serangan semacam itu.

Rantai seperti Bitcoin yang memakai konsensus `Proof of Work` melindungi kesepakatan ini dengan membuat produksi blok sangat kompetitif; tiap produsen blok berlomba memecahkan soal matematika. Yang pertama berhasil memenangkan hak membuat blok berikutnya beserta `imbalan blok` yang menyertainya. Menulis ulang sejarah rantai butuh investasi daya komputasi dan energi yang sangat besar, jadi penyerang biasanya rugi lebih banyak daripada untungnya.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Konsensus blockchain untuk mata uang kripto adalah:

- [ ] Proses saat node menyepakati apa yang terjadi onchain

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Penting bagi ekosistem rantai itu untuk mencegah kecurangan

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Diamankan lewat insentif ekonomi

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [x] Semua benar

> ℹ️ Tepat! Konsensus adalah cara node menyepakati kebenaran, dan insentif ekonomi membuat serangan lebih mahal daripada hasilnya.

# Keamanan dan Serangan

Salah satu serangan terhadap konsensus blockchain adalah `serangan 51%`: penyerang yang menguasai mayoritas kekuatan konsensus bisa membatalkan transaksi terbaru untuk membelanjakan koin yang sama dua kali, atau menyensor transaksi baru. Mereka tidak bisa memalsukan tanda tangan atau memakai dana orang lain. Mayoritas ini berarti 51% daya komputasi di Proof of Work, dan 51% `stake` di Proof of Stake, sebuah modal yang sangat besar. Di Proof of Stake, kecurangan yang terbukti seperti menandatangani dua blok yang bertentangan membuat stake itu dihancurkan (disebut `slashing`), jadi penyerang biasanya rugi lebih besar daripada untungnya.

Pada konsensus `Proof of Stake`, produsen blok tidak dipilih lewat persaingan, melainkan ditunjuk secara acak. Seperti pada Proof of Work, algoritma konsensus memastikan tidak ada satu pihak pun yang bisa rutin "memenangkan" hak membuat `blok` baru.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Tujuan akhir serangan 51% adalah:

- [ ] Mengganggu operasi penambangan

> ℹ️ Coba lagi! Serangan ini menyasar konsensus itu sendiri: membatalkan atau menyensor transaksi, bukan mengganggu penambang.

- [x] Membelanjakan koin dua kali atau menyensor transaksi

> ℹ️ Tepat! Kekuatan konsensus mayoritas memungkinkan penyerang membatalkan transaksi terbaru atau memblokir transaksi baru.

- [ ] Membuat mata uang kripto baru

> ℹ️ Coba lagi! Siapa pun bisa membuat mata uang kripto baru tanpa menyerang jaringan yang sudah ada.

- [ ] Menyingkirkan 49% sisanya

> ℹ️ Coba lagi! Peserta lain tidak disingkirkan. Kekuatan mayoritas dipakai untuk membatalkan atau menyensor transaksi.

# Skalabilitas - Throughput

`Skalabilitas` adalah kemampuan blockchain memproses banyak transaksi dengan cepat. Dua hal menentukannya: throughput dan finalitas.

1) `Throughput transaksi`: berapa banyak transaksi yang bisa diproses blockchain sekaligus, biasanya diukur dalam transaksi per detik (`TPS`).

Bayangkan banyak orang menunggu di halte bus dan terus berdatangan tiap menit. Semua ingin berangkat, tapi satu bus hanya muat sekian orang. Agar halte cepat kosong, perlu bus yang lebih besar (lebih banyak orang) atau bus yang lebih sering jalan (lebih hemat waktu). Sama halnya saat banyak transaksi harus muat ke `ruang blok` yang terbatas di tiap blok. Lihat visualisasinya dengan data langsung di [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Mana yang benar tentang analogi halte bus untuk transaksi blockchain?

- [ ] Orang (transaksi) dikelompokkan ke dalam bus (blok)

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Tiap bus (blok) hanya muat sejumlah orang (transaksi)

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Mengangkut lebih banyak orang butuh bus lebih besar atau lebih banyak

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [x] Semua benar

> ℹ️ Tepat! Transaksi mengisi ruang blok yang terbatas seperti penumpang mengisi bus. Antrean cepat habis jika blok lebih besar atau lebih sering.

# Skalabilitas - Finalitas

Aspek kedua dari skalabilitas blockchain adalah:

2) `Finalitas`: kapan kita bisa cukup yakin sebuah transaksi tidak akan diubah atau dibatalkan?

Di rantai Proof of Work seperti Bitcoin, finalitas diukur dalam blok: makin banyak blok yang ditambahkan setelah transaksi kamu, makin yakin transaksi itu tidak akan dibatalkan. Ingat, algoritma konsensus yang aman membuat perubahan blok lama sangat mahal, dan biayanya membengkak makin jauh ke belakang. Bitcoin menghasilkan `blok` baru sekitar tiap 10 menit, jadi menunggu beberapa konfirmasi memakan waktu sekitar satu jam. Proof of Stake milik Ethereum menempuh jalan lain: `validator` memberi suara untuk memfinalkan blok, dan setelah sekitar 13 menit (dua `epoch` pemungutan suara) transaksi menjadi final.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Desentralisasi Menyebarkan Kekuasaan

`Desentralisasi` adalah dasar terakhir trilema blockchain: memindahkan kendali dan pengambilan keputusan dari satu pihak ke jaringan yang tersebar luas. Desentralisasi adalah prinsip yang membuat blockchain bisa `tanpa izin` (siapa pun boleh ikut) dan `tahan sensor`; siapa pun bisa memakai blockchain terdesentralisasi, dan siapa pun bisa membangun perangkat lunak di atasnya.

Platform terpusat seperti Facebook dan Twitter bisa menonaktifkan akun siapa saja kapan saja. Banyak streamer berpengaruh di Twitch atau TikTok tiba-tiba dikeluarkan tanpa sebab jelas. Memulihkan akun pun bisa panjang dan melelahkan. Tanpa desentralisasi, `buku besar` blockchain hanyalah spreadsheet keuangan di komputer bank, dan bankir yang menentukan siapa boleh punya akun. Jaringan `tanpa izin` berarti kewenangan cukup tersebar sehingga akses seseorang tidak bisa dicabut.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Pernyataan mana yang TIDAK benar tentang desentralisasi?

- [ ] Desentralisasi membuat blockchain tahan sensor

> ℹ️ Coba lagi! Pernyataan ini benar: tanpa satu pihak pengendali, tidak ada yang bisa menyensor jaringan.

- [ ] Desentralisasi membuat blockchain tanpa izin

> ℹ️ Coba lagi! Pernyataan ini benar: kewenangan yang tersebar berarti akses seseorang tidak bisa dicabut.

- [x] Desentralisasi membantu penguasa otoriter mempertahankan kendali

> ℹ️ Tepat! Ini TIDAK benar: desentralisasi justru sebaliknya, menyebarkan kendali menjauh dari satu pihak.

- [ ] Siapa pun di mana pun bisa memakai sistem tanpa izin

> ℹ️ Coba lagi! Pernyataan ini benar: tanpa izin berarti tidak ada yang bisa ditolak aksesnya.

# Seberapa Terdesentralisasi?

Tapi terdesentralisasi atau tidak bukan sekadar jawaban ya atau tidak. Apakah 10 pihak pengendali sudah terdesentralisasi? Bagaimana dengan 1.000? Satu juta? Tidak ada batas baku untuk "cukup terdesentralisasi", jadi masuk akal memandang desentralisasi sebagai spektrum. Bukan hanya hitam dan putih, ada banyak abu-abu di antaranya.

Jadi kita bisa bilang sesuatu "lebih atau kurang terdesentralisasi dibanding yang lain", bukan sekadar "terpusat atau terdesentralisasi". Sistem moneter yang netral butuh desentralisasi tinggi untuk menahan sensor tingkat negara. Blockchain baru sering menukar desentralisasi demi skalabilitas, tapi mereka jadi rentan pada tekanan masyarakat dan pemerintah yang sama seperti platform terpusat, dan bisa berakhir menyensor persis seperti media sosial terpusat.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Blockchain yang berbeda memakai tingkat desentralisasi yang berbeda.

- [x] Benar

> ℹ️ Tepat! Desentralisasi adalah spektrum: tiap blockchain memilih seberapa banyak yang ditukar demi skalabilitas atau tujuan lain.

- [ ] Salah

> ℹ️ Coba lagi! Desentralisasi adalah spektrum, dan tiap blockchain punya kompromi sendiri di sepanjang spektrum itu.

# Beberapa Contoh

Tiap blockchain punya pendekatan sendiri terhadap trilema, dan masing-masing berkompromi demi tujuannya. Bitcoin dan Ethereum mengutamakan keamanan dan desentralisasi di atas skalabilitas, sehingga `waktu finalitas` Bitcoin lama dan `ruang blok` Ethereum terbatas. Ketika permintaan memakai `kontrak pintar` melonjak, terutama untuk DeFi, biaya Ethereum ikut naik; pada puncak permintaan tahun 2021, satu transaksi bisa menelan puluhan dolar.

Biaya yang naik membuka peluang bagi `Layer 1 alternatif` seperti BNB Chain, yang mengutamakan skalabilitas di atas desentralisasi demi `throughput transaksi` lebih tinggi dan biaya lebih murah. Rantai generasi ketiga seperti Solana memakai metode baru untuk menjawab trilema, tapi semua blockchain tetap tunduk pada batasan dasar ini. Pilihan tiap rantai membentuk ekosistemnya lewat efek mendasar dari pilihan itu.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Jadi Apa yang Bisa Dilakukan?

Kalau Ethereum mengutamakan keamanan dan desentralisasi tinggi, bagaimana ia bisa menskala untuk melayani semua pengguna sebagai jaringan keuangan global yang dicita-citakannya? Peta jalan Ethereum menelusuri dua jawaban: `Layer 2` dan `sharding` blockchain.

`Layer 2` menambah skalabilitas Ethereum tanpa mengorbankan dua sisi trilema lainnya. Layer 2 adalah lapisan tambahan di atas blockchain utama: keamanannya bersandar pada rantai utama, sementara pengguna menikmati biaya lebih murah dan transaksi lebih cepat. Kita akan membahasnya lebih dalam di pelajaran Layer 2.

`Sharding` akan memecah blockchain menjadi beberapa rantai paralel, seperti menambah lajur di jalan raya. Ethereum menyingkirkan rencana itu demi cara yang lebih sederhana: membuat data blok lebih murah untuk dipakai Layer 2 (hadir pada 2024) dan menaikkan kapasitas sedikit demi sedikit, tanpa mengorbankan keamanan atau desentralisasi.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2:

- [ ] Menyediakan keamanannya sendiri

> ℹ️ Coba lagi! Layer 2 bersandar pada blockchain utama untuk keamanannya.

- [x] Menambah skalabilitas untuk blockchain utama

> ℹ️ Tepat! Layer 2 berada di atas rantai utama, menambah skalabilitas tanpa mengorbankan keamanan atau desentralisasi.

- [ ] Menaikkan biaya bagi pengguna

> ℹ️ Coba lagi! Layer 2 justru sebaliknya: pengguna menikmati biaya yang lebih murah.

- [ ] Memperlama waktu finalitas bagi pengguna

> ℹ️ Coba lagi! Layer 2 menawarkan transaksi yang lebih cepat, bukan lebih lambat.

# Masa Depan Ethereum

Jaringan Ethereum terus mengembangkan skalabilitasnya tanpa mengorbankan sisi lain dari trilema. The Merge ke konsensus `Proof of Stake` (2022) memangkas konsumsi energi jaringan lebih dari 99%, dan data blok murah untuk Layer 2 hadir pada 2024. **Penskalaan adalah pekerjaan yang tidak pernah selesai: tiap peningkatan membuat Ethereum lebih cepat dan lebih murah, sambil menjaga keamanan dan desentralisasi sebagai prinsip utama.** Ethereum Foundation punya halaman yang sangat bagus tentang [peta jalan Ethereum](https://ethereum.org/roadmap/).

Sementara itu, banyak protokol `Layer 2` dibangun di atas Ethereum untuk memenuhi permintaan pengguna tanpa mengubah protokol Ethereum sendiri. Layer 2 mengandalkan Layer 1 Ethereum untuk keamanan terdesentralisasi, sementara mereka menyediakan skalabilitas; keberagaman Layer 2 menciptakan ekosistem yang terdesentralisasi! `Rollup` terkemuka antara lain Arbitrum, OP Mainnet, dan Base; Polygon PoS adalah `sidechain` populer dengan keamanannya sendiri.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Peningkatan Ethereum mencakup:

- [ ] Memakai Layer 2 dan data blok murah untuk menambah skalabilitas

> ℹ️ Coba lagi! Ini bagian dari peningkatan, tapi bukan satu-satunya.

- [ ] Menjaga desentralisasi dan keamanan sebagai prinsip inti

> ℹ️ Coba lagi! Ini bagian dari peningkatan, tapi bukan satu-satunya.

- [ ] Memangkas konsumsi energi dengan konsensus Proof of Stake

> ℹ️ Coba lagi! Ini bagian dari peningkatan, tapi bukan satu-satunya.

- [x] Semua benar

> ℹ️ Tepat! Layer 2 dan data blok murah menambah skala, Proof of Stake memangkas energi, dan keamanan serta desentralisasi tetap jadi prinsip utama.

# Apa Artinya bagi Penjelajah?

Pengguna butuh biaya rendah agar bisa belajar dan menjelajah teknologi ini dengan hambatan kecil dan risiko kesalahan yang murah, apalagi di awal perjalanan. Blockchain Ethereum memang belum ideal, tapi nilai-nilainya menjadikannya salah satu kandidat terbaik untuk mewujudkan mimpi sistem komputasi keuangan global. Penjelajah bisa belajar berinteraksi dan memakai Ethereum tanpa membayar biaya besar; dengan Layer 2, Penjelajah mendapat keamanan dan desentralisasi Ethereum sekaligus skalabilitas yang lebih tinggi.

Pelajaran berikutnya akan menjelaskan solusi `Layer 2` dan cara memulainya. Maju terus, Penjelajah!
