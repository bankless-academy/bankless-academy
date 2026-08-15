---
TITLE: Agregator DEX
DESCRIPTION: Selami agregator DEX, likuiditas, dan lanskap bursa DeFi.
LANGUAGE: Bahasa Indonesia
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

`Bursa terdesentralisasi` (DEX) menghapus biaya perantara dan menghemat uang Penjelajah saat memperdagangkan aset.

Tapi tahukah kamu, Penjelajah, bahwa masih ada cara lain untuk berhemat dengan teknologi DeFi? Dengan `agregator DEX`, kamu bisa memindai semua kemungkinan perdagangan di berbagai platform DEX sekaligus lalu menjalankan rute terbaik, hanya dalam satu tindakan. Agregator membantu kamu mendapat harga terbaik saat melakukan `swap` token. Seperti agregator tiket pesawat membantu menemukan penerbangan termurah, agregator DEX membantu memaksimalkan nilai perdagangan kamu.

Pelajaran ini akan menunjukkan:

1. Bagaimana DEX memecah likuiditas dan bagaimana itu bisa memperburuk harga perdagangan.
2. Bagaimana agregator DEX membuat pengguna bisa melihat dan memakai banyak DEX lewat satu antarmuka.
3. Berbagai cara satu antarmuka agregator menghemat waktu dan uang Penjelajah.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Bagaimana Likuiditas Memengaruhi Harga

Jumlah sebuah token yang tersedia untuk diperdagangkan di satu pasar disebut `likuiditas` token itu. Besarnya likuiditas sangat memengaruhi `dampak harga` saat berdagang di DeFi; dampak harga yang besar berarti perdagangan jadi lebih mahal, dampak yang kecil berarti lebih murah. Kebanyakan orang lebih suka berdagang di pasar dengan likuiditas tinggi untuk menekan dampak harga.

Bayangkan seperti kolam renang: makin banyak airnya (likuiditas), makin kecil *perubahan* tinggi air (dampak harga) saat seseorang melompat masuk atau keluar. Ukuran "seseorang" itu (besarnya perdagangan) juga memengaruhi *perubahan* tinggi air (dampak harga).

# Contoh Pengaruh Likuiditas terhadap Harga

Mari lihat sebuah contoh.

Bayangkan sebuah token yang diperdagangkan di beberapa DEX sekaligus. Satu DEX punya kolam dalam yang menampung sebagian besar `likuiditas` token itu, sementara DEX lain punya kolam dangkal dengan sebagian kecil saja.

Kalau seorang Penjelajah membeli token dalam jumlah sama dari tiap kolam, `dampak harga` akan lebih besar di kolam yang dangkal. Perdagangan yang sama menyedot porsi jauh lebih besar dari total likuiditas kolam itu, sehingga harganya bergerak lebih jauh dan pembeli membayar lebih mahal.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Isi bagian kosong: Untuk mendapat harga terbaik, orang ingin berdagang di pasar dengan likuiditas ________ agar dampak harga perdagangannya ________.

- [ ] bagus, maksimum

> ℹ️ Coba lagi! Dampak harga maksimum berarti perdagangan jadi lebih mahal, bukan lebih murah.

- [x] tinggi, rendah

> ℹ️ Tepat! Likuiditas lebih besar berarti dampak harga lebih kecil, seperti kolam besar yang riaknya kecil saat orang melompat.

- [ ] rendah, bagus

> ℹ️ Coba lagi! Likuiditas rendah memperbesar dampak harga dan membuat perdagangan lebih mahal.

- [ ] tipis, besar

> ℹ️ Coba lagi! Likuiditas tipis menyebabkan dampak harga besar, persis yang ingin dihindari pedagang.

# Kelemahan DEX Tradisional: Likuiditas Tipis

DeFi terus tumbuh, tapi muncul masalah bagi pengguna: makin banyak DEX yang diluncurkan, makin tersebar total jumlah tiap token. Inilah yang disebut likuiditas tipis.

Ingat kolam renang tadi: kalau air yang tersedia (`likuiditas`) dipecah ke banyak kolam, air di tiap kolam akan lebih "tipis" dibanding total di satu kolam awal.

Di masa awal DeFi, satu atau dua DEX menguasai sebagian besar likuiditas. Pada 2020, DEX baru mulai memperebutkannya; satu pesaing menarik lebih dari $1 miliar likuiditas dari Uniswap hanya beberapa minggu setelah diluncurkan. Kini likuiditas tersebar di ratusan DEX pada banyak blockchain dan jaringan `Layer 2`, menipiskan tiap kolam.

Akibatnya, setiap perdagangan punya `dampak harga` lebih besar dibanding saat satu DEX menguasai hampir seluruh likuiditas ekosistem. Tanpa inovasi baru, Penjelajah membayar lebih mahal untuk berdagang di satu DEX saja.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Dua faktor apa yang menentukan dampak harga sebuah perdagangan di DEX?

- [ ] Pilihan DEX yang dipakai dan besarnya perdagangan

> ℹ️ Coba lagi! DEX-nya sendiri tidak menentukan. Yang penting adalah likuiditas yang tersedia di kolam.

- [ ] Token yang dipilih dan DEX yang dipakai untuk berdagang

> ℹ️ Coba lagi! Baik token maupun merek DEX tidak menentukan dampak harga. Likuiditas dan besar perdagangan yang menentukan.

- [x] Besarnya perdagangan dan jumlah likuiditas yang tersedia

> ℹ️ Tepat! Seperti kolam renang, besar cipratan tergantung ukuran pelompat dan banyaknya air di kolam.

- [ ] Jumlah likuiditas yang tersedia dan token yang dipilih

> ℹ️ Coba lagi! Likuiditas memang satu faktor, tapi faktor lainnya adalah besar perdagangan, bukan token yang dipilih.

# Menyatukan Kembali Likuiditas dengan Agregator DEX

Likuiditas dalam jumlah besar dibutuhkan untuk menekan dampak harga dan menghemat uang kamu. Agregator DEX membuat pengguna bisa menjalankan perdagangan lewat banyak DEX sekaligus dan menurunkan dampak harga; satu perdagangan besar dari dompet Penjelajah dipecah menjadi banyak perdagangan kecil di beberapa DEX.

Agregator DEX bahkan bisa merutekan perdagangan lewat sebuah `token perantara`, atau lebih dari satu, kalau hasilnya lebih baik bagi pengguna. Mirip agregator penerbangan yang menyarankan satu transit tambahan di bandara lain kalau itu lebih murah bagi penumpang. Pencarian `rute perdagangan` terbaik ini dilakukan algoritma canggih yang menelusuri semua jalur yang mungkin untuk menemukan rute termurah saat itu.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Perutean perdagangan pada agregator DEX berarti:

- [ ] Perdagangan dirutekan lewat kesepakatan khusus dengan DEX tertentu

> ℹ️ Coba lagi! Agregator menelusuri semua DEX yang tersedia secara algoritmis, bukan lewat kesepakatan khusus.

- [ ] Perdagangan selalu dirutekan lewat beberapa DEX

> ℹ️ Coba lagi! Agregator memecah perdagangan hanya kalau hasilnya lebih baik. Kadang satu DEX saja sudah rute terbaik.

- [ ] Perdagangan hanya dirutekan lewat DEX favorit pengguna

> ℹ️ Coba lagi! Bertahan di satu DEX menghilangkan gunanya. Agregator mencari harga terbaik di banyak DEX.

- [x] Perdagangan bisa dirutekan lewat banyak DEX dan token perantara

> ℹ️ Tepat! Algoritma menelusuri semua jalur yang mungkin, termasuk "transit" lewat token perantara, untuk mencari rute termurah.

# Cara Menghitung Biaya Gas di Ethereum

Mari kita segarkan lagi cara menghitung gas sebelum melihat bagaimana agregator DEX menekan biaya jaringan. Penghematan ini paling terasa di Ethereum Mainnet, tempat biaya bisa tinggi; di jaringan `Layer 2`, biayanya biasanya hanya beberapa sen.

Seperti bensin untuk mobil, `gas` adalah bahan bakar untuk menjalankan kode blockchain di Ethereum. Makin banyak komputasi, makin banyak gas yang dibutuhkan kode kamu. Harga gas diukur dalam satuan ether yang sangat kecil bernama `gwei`, seperti sen terhadap dolar. 1 gwei adalah satu per miliar ether (1 gwei = 0,000000001 ETH).

Total biaya gas ditentukan oleh berapa banyak gas yang dipakai transaksi kamu dan harga satuan gas saat itu. Rumusnya seperti ini:
_Jumlah gas yang dipakai * Harga gas = Total biaya gas_

Sebagai contoh, misalkan harga gas 22 gwei per unit dan transaksi memakai 120 ribu unit:
_120.000 * 22 gwei = 2.640.000 gwei_ _**atau**_ _0,00264 ETH_

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Cara Agregator Menekan Biaya Gas Pengguna

Memecah perdagangan seharusnya menambah biaya transaksi karena aktivitas onchain bertambah, tapi agregator canggih sudah memperhitungkan biaya transaksi dalam kalkulasi rute perdagangannya. Mereka menyimulasikan perdagangan di luar rantai, termasuk biaya `gas`, untuk mencari `rute perdagangan` yang menyisakan nilai paling besar bagi Penjelajah di akhir interaksi.

Sebagian agregator melangkah lebih jauh. 1inch, pelopor agregasi DEX, kini juga membiarkan pengeksekusi profesional bersaing menjalankan perdagangan kamu sambil membayar gasnya sendiri (sistem bernama Fusion). Pengguna sering tidak membayar gas sama sekali.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Manakah yang BUKAN cara agregator DEX menekan biaya transaksi pengguna?

- [ ] Menyimulasikan transaksi di luar rantai sebelum dieksekusi

> ℹ️ Coba lagi! Agregator memang menyimulasikan perdagangan di luar rantai, termasuk biaya gas, untuk mencari rute terbaik.

- [x] Meminta DEX menurunkan biaya jaringan bagi penggunanya

> ℹ️ Tepat! Biaya jaringan ditetapkan blockchain, bukan DEX. Tidak ada yang bisa sekadar meminta biaya itu diturunkan.

- [ ] Memperhitungkan biaya gas dalam perutean perdagangan

> ℹ️ Coba lagi! Agregator canggih memang memasukkan biaya transaksi ke dalam perhitungan rute perdagangan.

- [ ] Membiarkan pengeksekusi profesional berdagang dan membayar gas

> ℹ️ Coba lagi! Pada sistem intent seperti 1inch Fusion, pengeksekusi memang menanggung gas pengguna.

# Meta-Agregator

Bahkan ada meta-agregator dari agregator DEX! Platform ini menelusuri agregator DEX yang saling bersaing lalu menyajikan penawaran harga terbaik kepada pengguna. Contohnya, fitur swap bawaan di dompet seperti MetaMask mengumpulkan penawaran dari beberapa penyedia, termasuk agregator DEX seperti 1inch, lalu menambahkan biaya layanannya sendiri.

Catatan: meski praktis, layanan `meta-agregator` bisa menambah biaya di atas biaya transaksi jaringan, sehingga total biaya pengguna naik. Penjelajah, pastikan perdagangan kamu tidak berakhir lebih mahal dari yang kamu perkirakan.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-agregator membandingkan beberapa agregator DEX untuk menemukan harga terbaik bagi penggunanya.

- [x] Benar

> ℹ️ Tepat! Meta-agregator menelusuri agregator DEX yang saling bersaing lalu menyajikan penawaran harga terbaik kepada pengguna.

- [ ] Salah

> ℹ️ Coba lagi! Menelusuri banyak agregator DEX persis itulah yang dilakukan meta-agregator.

# Menghindari Serangan Sandwich

Pengguna yang melakukan `swap` langsung lewat `DEX` bisa kehilangan nilai sampai batas `toleransi slippage` mereka ketika bot menyelipkan perdagangan tepat sebelum dan sesudah perdagangan itu untuk menggeser harga. Kerugian ini disebut `serangan sandwich`; pada 2021 saja, kerugiannya sekitar $235.000.000. Kini perlindungan seperti `perutean transaksi privat` dan perdagangan berbasis intent menjaga sebagian besar perdagangan harian, tapi menjaga toleransi slippage tetap rendah masih menguntungkan saat swap token.

Untungnya, karena likuiditas disatukan kembali oleh agregator DEX, dampak harga sebuah perdagangan menjadi lebih kecil. Penjelajah bisa menjaga toleransi slippage tetap rendah sekaligus lebih hemat lewat agregator DEX, dibanding berdagang langsung di satu DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Untuk melindungi diri, kamu sebaiknya menjaga toleransi slippage tetap:

- [x] rendah

> ℹ️ Tepat! Toleransi slippage yang rendah membatasi nilai yang bisa diambil serangan sandwich dari perdagangan kamu.

- [ ] tinggi

> ℹ️ Coba lagi! Toleransi slippage yang tinggi membuat serangan sandwich bisa mengambil lebih banyak nilai.

# Perlindungan Lain dari Sandwich: Perdagangan OTC

Sebagian agregator seperti 1inch bahkan menawarkan layanan khusus `OTC` (`over the counter`) yang memberi perlindungan penuh dari serangan sandwich. Layanan opsional ini memungkinkan perdagangan langsung dengan pengguna lain, alih-alih melewati `kolam likuiditas` DeFi, sehingga Penjelajah punya satu lagi cara berhemat.

CoW Swap memakai pendekatan berbeda: pengguna menandatangani permintaan perdagangan (sebuah `intent`), lalu `solver` profesional bersaing dalam `lelang batch` untuk memenuhinya dengan harga terbaik. Solver bahkan bisa memasangkan dua pengguna secara langsung, jadi perdagangan otomatis terlindung dari serangan sandwich.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Alat apa saja yang ditawarkan banyak agregator DEX untuk menghemat uang penggunanya?

- [ ] Merutekan perdagangan lewat likuiditas dari banyak DEX.

> ℹ️ Coba lagi! Likuiditas gabungan menekan dampak harga, tapi itu bukan satu-satunya cara agregator berhemat.

- [ ] Perdagangan OTC yang sepenuhnya melindungi dari serangan sandwich.

> ℹ️ Coba lagi! Ini satu cara agregator menghemat uang pengguna, tapi bukan satu-satunya.

- [ ] Memperhitungkan biaya gas saat menyusun rute perdagangan terbaik.

> ℹ️ Coba lagi! Ini satu cara agregator menghemat uang pengguna, tapi bukan satu-satunya.

- [x] Semua jawaban di atas

> ℹ️ Tepat! Agregator menggabungkan likuiditas, memperhitungkan biaya gas, dan bisa menawarkan perdagangan OTC, semuanya demi menyisakan nilai lebih bagi pengguna.
