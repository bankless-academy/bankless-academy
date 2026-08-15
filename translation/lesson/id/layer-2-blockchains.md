---
TITLE: Blockchain Layer 2
DESCRIPTION: Masuk ke ekosistem Layer 2 untuk mempercepat transaksi dan menekan biaya.
LANGUAGE: Bahasa Indonesia
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

Kondisi ideal bagi setiap blockchain adalah seterdesentralisasi, seaman, dan sebisa mungkin diskalakan. Membangun blockchain yang menangani ketiganya dengan baik ternyata sulit, dan sampai kini belum terpecahkan. Tantangan ini punya nama: `trilema blockchain`.

Bitcoin dan Ethereum cukup terdesentralisasi dan aman, tapi skalanya terbatas. Ini terlihat dari biaya transaksi yang tinggi dan antrean panjang saat jaringan sibuk. Untuk mengatasinya, Penjelajah bisa memakai berbagai teknologi yang memangkas biaya dan mempercepat transaksi. Semuanya disebut solusi penskalaan Layer 2 (L2).

`Lightning Network` adalah solusi penskalaan Bitcoin yang paling dikenal, dan bertumpu pada teknologi bernama `kanal pembayaran` untuk menskalakan pembayaran antarpihak. Ethereum meringankan trilema dengan mengandalkan berbagai solusi L2 untuk memproses transaksi, dibantu penyimpanan `blob` yang murah dan sementara, yang ditambahkan ke Mainnet pada 2024 (versi ringan dari "sharding" yang dulu direncanakan).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Kanal Pembayaran

Di blockchain Bitcoin, Lightning Network memakai kanal pembayaran dua arah, yang memungkinkan banyak pihak bertukar BTC tanpa bertransaksi di rantai utama.

Arsitekturnya memungkinkan dua pengguna membuka kanal pembayaran di antara mereka. Setiap kanal hanya melibatkan dua pihak, tapi pembayaran bisa dirutekan melewati jaringan kanal yang saling terhubung untuk menjangkau pengguna yang lebih jauh. Selama kanal terbuka, kedua pihak bisa memindahkan dana di antara mereka. Catatan buku besar mini tiap peserta diperbarui setelah keduanya menandatangani transaksi, yang umumnya menuntut node kedua pihak bisa dihubungi.
Kanal bisa ditutup kapan saja: salah satu pihak menyiarkan versi terbaru buku besar mini itu ke blockchain.

Kanal pembayaran tidak mendukung interaksi `kontrak pintar` yang rumit, hanya transaksi peer-to-peer dasar.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Kamu harus online untuk bertransaksi lewat Bitcoin Lightning Network.

- [x] Benar

> ℹ️ Tepat! Memperbarui kanal pembayaran butuh tanda tangan kedua pengguna, jadi node keduanya umumnya harus bisa dihubungi.

- [ ] Salah

> ℹ️ Coba lagi! Pembaruan kanal butuh tanda tangan kedua pihak, jadi node mereka umumnya harus online.

# Solusi Penskalaan Ethereum

Pengembang Ethereum sudah menggarap solusi penskalaan asli Ethereum hampir sejak jaringan itu aktif.

Sebagian besar anggota komunitas Ethereum berpendapat bahwa untuk disebut "solusi penskalaan Ethereum", sebuah proyek harus mengatasi kelemahan `skalabilitas` Ethereum tanpa mengorbankan `keamanan` atau `desentralisasi`. Bagi pengguna, yang paling terasa adalah transaksi lebih cepat dan `gas` lebih murah daripada Ethereum Mainnet. Untuk bersaing, sebagian solusi bersedia mengambil kompromi trilema yang lebih besar daripada yang lain.

Ethereum dikenal karena kemampuan kontrak pintarnya, jadi solusi penskalaannya juga harus mewarisi dukungan itu. Percuma punya transaksi cepat dan murah kalau pengguna tidak bisa mengakses `dApp` favoritnya dari Layer 2.

# Knowledge Check 2

Solusi penskalaan Ethereum:

- [ ] memakai kanal pembayaran untuk menskalakan jaringan.

> ℹ️ Coba lagi! Kanal pembayaran adalah pendekatan Lightning Network di Bitcoin. Ethereum menskalakan lewat solusi seperti Rollup.

- [ ] tidak bisa mendukung interaksi kontrak pintar.

> ℹ️ Coba lagi! Dukungan kontrak pintar itu penting. Pengguna butuh akses ke dApp favoritnya dari Layer 2.

- [x] harus menaikkan skalabilitas tanpa melemahkan sifat trilema lain.

> ℹ️ Tepat! Solusi penskalaan Ethereum sejati mengatasi skalabilitas tanpa mengorbankan keamanan atau desentralisasi.

- [ ] mempercepat transaksi dengan biaya gas lebih tinggi.

> ℹ️ Coba lagi! Solusi penskalaan mengejar transaksi lebih cepat DAN gas lebih murah daripada Ethereum Mainnet.

# Menjembatani Layer 1 dan Layer 2

Seperti yang kita pelajari di [Dasar-Dasar Blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), blockchain adalah basis data yang disebut `buku besar`, yang mencatat daftar transaksi berurutan waktu dan diamankan secara kriptografis. Blockchain L1 dan solusi penskalaan L2 sama-sama blockchain tersendiri, dengan basis data alamat dan datanya masing-masing.

Infrastruktur bernama `jembatan` dipakai untuk memindahkan informasi antara basis data blockchain yang berbeda. Misalnya, bayangkan Ethereum Mainnet (atau blockchain `L1` lain) sebagai satu pulau, dan blockchain lain atau solusi penskalaan pilihan kamu sebagai pulau kedua. Jembatan kripto adalah istilah umum untuk jalan raya yang menghubungkan kedua pulau digital itu.

Teknologinya sangat rumit, tapi dari sisi pengguna prosesnya semudah memilih tujuan.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechain

`Sidechain` adalah blockchain terpisah yang berjalan sendiri di luar Ethereum, tapi terhubung ke Ethereum Mainnet lewat sebuah `jembatan`. Untuk memindahkan token, kamu menguncinya di kontrak jembatan di Mainnet, lalu token setara di-mint di sidechain. Yang penting, ini TIDAK memberi dana kamu keamanan Ethereum: jembatan dan sidechain bergantung pada validator sidechain itu sendiri. Kalau salah satunya dibobol (seperti peretasan jembatan Ronin senilai $625 juta pada 2022), dana yang terkunci bisa dicuri.

Sidechain tetap tunduk pada trilema blockchain. Biaya `gas` yang lebih rendah dan transaksi yang lebih cepat datang dari kumpulan validator yang lebih kecil tapi lebih kuat, menukar sebagian desentralisasi dan keamanan demi skalabilitas.

Sidechain seperti Polygon PoS rutin menerbitkan snapshot ("checkpoint") ke Ethereum. Ini memberi riwayatnya semacam finalitas dan membantu pengguna membuktikan saldo saat keluar lewat jembatan, tapi tidak membuat dana di sidechain seaman Mainnet.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechain:

- [ ] mengunci token yang dijembatani di kontrak Mainnet.

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] punya biaya gas lebih murah daripada Mainnet.

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] punya risiko sentralisasi lebih besar daripada Mainnet.

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [x] Semua jawaban di atas.

> ℹ️ Tepat! Sidechain mengunci token di Mainnet dan menawarkan biaya lebih murah, tapi validatornya yang sedikit menukar desentralisasi demi kecepatan.

# Rollup

Protokol Layer 2 yang memakai teknologi Rollup tetap lebih selaras dengan tingkat keamanan Ethereum Mainnet.

Seperti sidechain, Rollup memungkinkan transaksi onchain dieksekusi jauh dari Ethereum Mainnet. Transaksi itu lalu "digulung" menjadi satu batch, dan datanya dikirim ke Ethereum dalam paket data murah dan sementara bernama `blob`, yang diperkenalkan lewat pemutakhiran Dencun pada Maret 2024. Blob adalah alasan utama biaya L2 kini turun ke beberapa sen atau kurang.

Agar Rollup terbukti cukup aman memproses transaksi atas nama Mainnet, ia harus menyediakan "bukti yang meyakinkan" bahwa transaksi di tiap batch aman dan valid. Bukti ini disertakan dalam rollup transaksi dan diverifikasi oleh kontrak jembatan di Ethereum Mainnet.

Saat ini ada dua metode Rollup yang bisa menyediakan bukti tersebut: `Optimistic Rollup` dan `ZK Rollup`. Mari kita lihat lebih dekat.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollup

Protokol L2 seperti Optimism, Base, dan Arbitrum memakai `Optimistic Rollup` sebagai arsitektur penskalaannya. Namanya "optimistic" karena informasi di dalam batch dianggap valid kecuali terbukti sebaliknya: sebuah asumsi optimis diambil.

Untuk menekan penyalahgunaan teknik ini, biasanya ada jeda beberapa hari setelah pengguna meminta memindahkan dana dari L2 kembali ke Mainnet. Selama jeda itu, validator jembatan bisa menerbitkan `bukti kecurangan` untuk membatalkan penarikan. Mekanisme ini mirip proses kliring di industri perbankan, tapi terdesentralisasi.

Catatan: layanan jembatan pihak ketiga, seperti Across dan Relay, membantu memindahkan dana dalam hitungan menit, bukan hari. Jembatan cepat ini menalangi dana dari kolam mereka sendiri, jadi kamu menanggung risiko kontrak pintar jembatan itu dan penyedia dananya, satu lapis kepercayaan tambahan dibanding jembatan resmi rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Pada Optimistic Rollup, transaksi dianggap valid sampai terbukti sebaliknya.

- [x] Benar

> ℹ️ Tepat! Asumsi optimisnya adalah batch itu valid, dengan masa sanggah tempat bukti kecurangan bisa membatalkan penarikan yang curang.

- [ ] Salah

> ℹ️ Coba lagi! Asumsi optimis itulah asal nama Rollup ini.

# ZK Rollup

`ZK Rollup` adalah jenis Rollup yang bertumpu pada teknologi Zero-Knowledge. Berbeda dengan `Optimistic Rollup`, ZK Rollup memastikan keabsahan transaksi dalam batch tanpa bergantung pada pengguna tertentu yang mencari bukti kecurangan. Sebagai gantinya, Rollup ini mengirim bukti matematis bernama `bukti validitas`, yang membuat Ethereum bisa memeriksa satu batch penuh tanpa mengulang pekerjaannya.

Keunggulan utama ZK Rollup adalah `waktu penyelesaian`, yang juga disebut `finalitas transaksi`. Alih-alih masa sanggah berhari-hari, ZK Rollup umumnya membuat dana bisa diakses di Mainnet dalam beberapa jam, begitu bukti validitas berikutnya dikirim. Meski namanya begitu, teknologi Zero-Knowledge di sini bukan untuk privasi: transaksi di ZK Rollup besar sama terbukanya seperti di Ethereum Mainnet.

Beberapa protokol besar memakai teknologi ZK Rollup untuk solusi penskalaan Ethereum mereka, termasuk ZKsync, Starknet, dan Linea. Pengembangannya masih awal, tapi potensinya besar.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

Dibandingkan Optimistic Rollup, ZK Rollup:

- [ ] menjaga transaksi pengguna tetap privat di Mainnet.

> ℹ️ Meski bernama "Zero-Knowledge", ZK Rollup besar sama terbukanya seperti Ethereum Mainnet: buktinya untuk validitas, bukan privasi.

- [x] memakai bukti validitas, sehingga tanpa masa sanggah berhari-hari.

> ℹ️ Tepat! Bukti validitas matematis memastikan tiap batch, jadi finalitas di Mainnet tidak perlu menunggu jendela bukti kecurangan.

- [ ] mengandalkan pengawas pengirim bukti kecurangan saat masa sanggah.

> ℹ️ Begitulah cara kerja Optimistic Rollup. ZK Rollup membuktikan validitas di awal.

# Kompatibilitas dApp Lintas Rantai

Saat membandingkan `Optimistic Rollup` dan `ZK Rollup`, fokus utama kebanyakan pengguna adalah waktu penarikan. Namun karena keterlambatan penarikan bisa diatasi jembatan pihak ketiga, hal itu tidak perlu menjadi pertimbangan besar saat memilih solusi penskalaan.

Banyak Optimistic Rollup bersifat "setara EVM", artinya L2 itu mendukung langsung dApp apa pun yang bisa berjalan di `Ethereum Virtual Machine` (EVM). Kesetaraan EVM memungkinkan penerapan kontrak pintar mana pun yang sudah ada di Mainnet, sehingga pengguna L2 bisa mengakses dApp favoritnya.

Sidechain seperti Polygon PoS juga menjalankan EVM secara langsung, dan sebagian besar ZK Rollup modern (seperti ZKsync, Linea, dan Scroll) juga setara EVM atau nyaris setara. Hasilnya, dApp Ethereum favorit kamu tersedia di hampir seluruh ekosistem L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Solusi penskalaan yang setara EVM bisa dengan mudah memakai ulang kontrak pintar yang sudah ada di Mainnet.

- [x] Benar

> ℹ️ Tepat! Kesetaraan EVM berarti kontrak pintar mana pun yang berjalan di Mainnet bisa diterapkan di L2, membawa serta dApp yang sudah dikenal.

- [ ] Salah

> ℹ️ Coba lagi! Memakai ulang kontrak pintar Mainnet adalah inti dari kesetaraan EVM.

# Rangkuman Pelajaran

Blockchain L1 seperti Bitcoin dan Ethereum saat ini dibatasi `trilema blockchain`. `Kanal pembayaran` di jaringan Bitcoin, atau sidechain dan Rollup di Ethereum, membantu jaringan ini menskalakan diri dan meringankan trilema.

`Jembatan` menghubungkan blockchain L1 dengan `sidechain` dan `rollup`, dan cara kerja kontrak jembatan memengaruhi sifat jaringan yang terhubung.

Dana di sidechain tidak mewarisi `keamanan` Ethereum: token yang dijembatani terkunci di kontrak Mainnet, tapi keselamatannya bergantung pada validator dan kontrak jembatan sidechain itu sendiri. Rantai ini punya validator sedikit tapi kuat, sehingga transaksi lebih cepat dan gas lebih murah, dengan mengorbankan desentralisasi dan keamanan.

Seperti sidechain, Rollup juga memvalidasi dan memproses transaksinya sendiri, tapi kontrak jembatannya menuntut "bukti yang meyakinkan" atas validitas transaksi sebelum data dianggap sah. Ini menjaga `keamanan` dan `desentralisasi` tetap selaras dengan nilai Ethereum. Ada dua metode: `Optimistic Rollup` menahan penyelesaian di Mainnet selama beberapa hari, saat validator jembatan mendeteksi dan melaporkan kecurangan; `ZK Rollup` memberi jaminan matematis atas keabsahan transaksi lewat teknologi `Zero-Knowledge`.

Kini Optimistic Rollup dan ZK Rollup modern sama-sama sangat kompatibel dengan kontrak pintar Ethereum Mainnet, sehingga dApp Mainnet mudah diterapkan di jaringan mereka. Banyak yang yakin ZK Rollup akan menjadi solusi penskalaan masa depan, berkat finalitasnya yang cepat dan jaminan validitasnya yang kuat.

# Mulai Perjalanan Layer 2 Kamu dengan Optimism atau Base 🙂

Optimism dan Base, keduanya Optimistic Rollup yang setara EVM, adalah L2 yang cocok untuk Penjelajah pemula. Memakai dApp di kedua rantai terasa mirip L1, hanya lebih murah dan cepat, dan keduanya memakai ETH sebagai gas. Quest kamu berikutnya adalah langkah pertama perjalanan di Optimism atau Base!

Kedua ekosistem sangat dipengaruhi nilai-nilai Ethereum. Optimism dikenal karena [mendanai barang publik](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) yang menambah nilai bagi ekosistem, seperti pendidikan gratis dari Bankless Academy.

Optimism dan Base bukan sekadar platform yang memakai Optimistic Rollup: keduanya menunjukkan bagaimana blockchain bisa memecahkan masalah nyata dan membuka cara baru untuk bertransaksi dan berkoordinasi bersama. Dan itu sepatutnya membuat kita semua optimis. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
