---
TITLE: Mengisi Dompet di Layer 2
DESCRIPTION: Pelajari cara mengisi dompet kamu di L2 lewat CEX, onramp pihak ketiga, dan jembatan.
LANGUAGE: Bahasa Indonesia
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
## Poin Penting

> * Ada beberapa cara mengisi dompet kamu di solusi penskalaan Ethereum seperti Base, Optimism, atau Arbitrum.
>
> * Bursa terpusat sering menyediakan `onramp` langsung ke Layer 2.
>
> * Aplikasi pembayaran pihak ketiga memungkinkan pengguna mengisi dompet di Layer 2 dari rekening bank, kartu debit, atau kartu kredit.
>
> * Jembatan protokol memungkinkan pengguna mengirim dana dari `Ethereum Mainnet` ke Layer 2.

Kalau kamu baru di dunia kripto, semua pembicaraan tentang pentingnya `Layer 2` (atau L2) mungkin terdengar aneh dan membingungkan. Berbeda dari [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), yang sering merujuk ke [Ethereum Mainnet](https://ethereum.org/), Layer 2 adalah istilah untuk jenis solusi penskalaan Ethereum tertentu yang membuat pengguna mewarisi keamanan Ethereum sekaligus menikmati biaya transaksi rendah dan waktu masuk `blok` yang cepat. Kalau kamu pernah mendengar [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/), atau [Base](https://www.base.org/), itu semua solusi penskalaan Layer 2. [Polygon](https://polygon.technology/) sering dikelompokkan bersama mereka juga (sebenarnya Polygon adalah `sidechain`, tapi mari tidak membahasnya di sini).

Setiap transaksi Ethereum membayar biaya yang disebut `gas`. Gas dihitung dalam `gwei`, satuan sangat kecil dari ETH. Biayanya naik turun mengikuti permintaan: pada puncak permintaan tahun 2021, satu `swap token` sederhana di Mainnet bisa memakan biaya puluhan dolar, dan mint NFT yang ramai mendorong biaya jauh lebih tinggi. Sekarang, transaksi Mainnet biasa berbiaya jauh di bawah satu dolar, dan aksi yang sama di Layer 2 hanya beberapa sen atau kurang.

Karena transaksi di Layer 2 terkonfirmasi cepat dan murah dijalankan, banyak protokol paling inovatif dibangun di L2. Namun, kalau kamu belum lama berada di ekosistem ini, cara mulai memakai Layer 2 tidak langsung terasa jelas. Untungnya ada titik awal yang jelas untuk perjalananmu ke solusi penskalaan Ethereum: mengisi `dompet` kamu di Layer 2.

Ada tiga cara utama mengisi dompet L2: memindahkan kripto dari `bursa terpusat` langsung ke jaringan Layer 2, memakai layanan pembayaran kripto pihak ketiga untuk mengisi dompet L2, atau mengirim aset digitalmu dari Mainnet ke L2 lewat protokol jembatan.

> Perhatikan, kamu perlu punya dompet mata uang kripto seperti [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/), atau [Taho](https://taho.xyz/), serta `alamat` dompet Ethereum untuk melanjutkan. Kalau kamu belum membuat `dompet non-kustodian`, silakan [ikuti pelajaran ini dulu](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Setelah punya alamat dompet Ethereum non-kustodian, kamu siap melanjutkan perjalanan kriptomu.

## Mengisi Dompet dari CEX

Mengisi dompet langsung dari bursa terpusat (CEX) mungkin cara paling sederhana memindahkan aset digital ke L2, apalagi kalau kamu sudah menyimpan kripto di bursa itu. Sebagian besar CEX besar menyediakan opsi ini, meski tidak selalu terlihat jelas oleh pengguna.

Di [Coinbase](https://www.coinbase.com/), misalnya, pengguna bisa mengirim dana langsung ke jaringan seperti Optimism, Polygon, atau Base (Layer 2 milik Coinbase sendiri) hanya dalam beberapa langkah:

1\. Buka [Coinbase](https://www.coinbase.com/).

2\. [Beli](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) atau simpan ETH di Coinbase.

3\. Pilih "Send & Receive" (kirim dan terima) di bagian atas situs.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Masukkan jumlah dalam fiat atau ETH yang ingin kamu kirim (kamu bisa beralih antara fiat dan kripto di sebelah kanan kolom jumlah), pilih "Pay with" lalu pilih Ethereum, dan di kolom "To" masukkan alamat dompet tujuan dana itu. Pilih "Continue".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Di layar berikutnya, pilih "Network" dan ubah jaringan dari Ethereum menjadi Optimism (daftarnya juga memuat Layer 2 lain, seperti Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Periksa kembali, dan kalau sudah benar, pilih "Send Now".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Sebagian besar bursa besar memungkinkan pengguna mengirim kripto langsung ke L2. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/), dan [Kraken](https://www.kraken.com/) sama-sama mendukung penarikan ke Layer 2 utama seperti Base, Optimism, dan Arbitrum. Tips: selalu cek daftar jaringan penarikan di bursamu untuk melihat L2 mana saja yang didukung sebelum kamu mengirim.

## Onramp Pihak Ketiga

Cara sederhana lain mengisi dompet L2 adalah memanfaatkan layanan langsung ke L2 yang ditawarkan banyak perusahaan pembayaran kripto pihak ketiga. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/), dan [Transak](https://global.transak.com/) adalah tiga pilihan paling populer untuk mengisi dompet kripto tanpa memakai bursa terpusat.

Seperti kebanyakan bursa, `onramp` pihak ketiga ini akan meminta data `Know Your Customer` darimu. Namun begitu rintangan dasar itu terlewati, pilihan pembayaran ini adalah cara mudah membeli kripto di seluruh ekosistem dan memindahkannya ke Layer 2.

Untuk MoonPay, langkahnya:

1\. Buka [MoonPay](https://www.moonpay.com/).

2\. Pilih "Buy crypto" (beli kripto) di bagian atas atau tengah situs.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Masukkan jumlah fiat yang ingin kamu kirim beserta mata uangnya.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Pilih aset digital, dalam hal ini ETH. Ketik "ETH" dan kamu akan melihat berbagai jaringan tempat ETH bisa dibeli (mungkin perlu menggulir ke bawah); pilih Layer 2 yang ingin kamu pakai. Klik "Continue".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Berikutnya, kamu akan diminta memasukkan data verifikasi pribadi dan data pembayaran.

6\. Setelah selesai, masukkan alamat dompet Ethereum kamu. Kamu akan diminta memastikan dompet itu aman dipakai.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Rampungkan, pastikan informasinya benar, lalu pilih "Pay".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Seperti CEX, sebagian besar onramp pembayaran pihak ketiga yang besar menyediakan fungsi langsung ke L2. Manfaatkan inovasi ini untuk menghemat biaya transaksi dan memperluas jelajah `blockchain` kamu.

## Mengisi Dompet lewat Jembatan

Kalau kamu sudah punya dana di `Ethereum Mainnet`, cara termudah membawa kripto ke L2 adalah memakai protokol jembatan. Jembatan adalah sebutan untuk protokol yang dirancang membantu kita memindahkan dana di semesta kripto, dan ada banyak jembatan yang dibuat untuk memindahkan kripto dari Ethereum Mainnet ke Layer 2.

### Jembatan Asli

Jembatan asli dirancang oleh protokol Layer 2 itu sendiri. Di `Optimistic Rollup` seperti Arbitrum, Optimism, atau Base, setoran biasanya sampai di L2 dalam beberapa menit, tapi memindahkan kripto kembali ke Mainnet butuh sekitar satu minggu. [Arbitrum Bridge](https://bridge.arbitrum.io/) dan [Optimism Bridge](https://app.optimism.io/bridge/) sama-sama bekerja seperti ini: masa tunggu itu memberi jaringan waktu untuk menangkap penarikan tidak sah sebelum diselesaikan.

### Jembatan Pihak Ketiga

Karena tidak ada yang suka menunggu, ada sejumlah layanan jembatan pihak ketiga yang membantu memindahkan dana secara instan dari dan ke L2. Pilihan paling populer antara lain [Across Protocol](https://across.to/bridge) dan [Relay](https://relay.link/bridge), sedangkan [Bungee](https://bungee.exchange/) bisa dipakai untuk membandingkan biaya jembatan di berbagai protokol. Untuk memakai Across, misalnya, kamu cukup:

1\. Buka jembatan [Across Protocol](https://across.to/bridge) lalu hubungkan dompetmu.

2\. Untuk menjembatani dana ke L2, pilih Ethereum di bagian "From".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Pilih asetmu dan jumlah yang ingin dijembatani (tips: jembatani hanya `koin` asli sebuah blockchain, dalam hal ini ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Berikutnya, pilih solusi L2 kamu di bagian "To".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Periksa transaksinya, dan kalau semua sudah benar, pilih "Send".

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Memindahkan dana dari Mainnet ke L2 memang sesederhana itu, dan hampir semua jembatan bekerja dengan cara yang sama. Pilih blockchain asal dana, pilih tujuan seperti Base atau Optimism, tentukan aset dan jumlahnya, lalu kamu pun menyeberangi jurang antar blockchain. Tips: seperti saat mengirim dari CEX, kamu bisa memakai [L2BEAT](https://l2beat.com/bridges/summary) untuk menemukan jembatan yang cocok dengan L2 tujuanmu.

## Jalan Menuju L2

Layer 2 memberi pengguna di semua tingkat pengalaman kesempatan bereksperimen dengan keuangan terdesentralisasi, sesuatu yang sering terlalu mahal di Mainnet. Karena bertransaksi di jaringan ini hanya memakan beberapa sen (bandingkan biayanya [di sini](https://www.growthepie.com/)), L2 adalah tempat yang bagus untuk mengenal balok penyusun dasar keuangan terdesentralisasi, seperti swap, `kolam likuiditas`, atau `yield farm`.

Memakai CEX atau jembatan untuk memindahkan dana ke L2 adalah langkah yang perlu dalam perjalananmu dari pemula kripto menuju kecakapan kripto. Ingat, agar danamu tampil di dompet, kamu mungkin perlu menambahkan jaringannya di pengaturan dompet, yang bisa dilakukan lewat [Chainlist](https://chainlist.org/). Kalau kamu hanya ingin memastikan dana sampai dengan aman di dompet L2, cari alamatmu di `penjelajah blok` seperti [Blockscan](https://blockscan.com/), yang menelusuri banyak jaringan sekaligus, atau buka DEX seperti [Uniswap](https://app.uniswap.org/), lalu pilih jaringan L2 dan asetnya untuk melihat saldomu.

Seiring keterampilanmu naik, kamu perlu tahu cara menekan biaya transaksimu. Belajar mengisi dompet L2 adalah langkah pertama, tapi langkah berikutnya dalam perjalanan kriptomu ada di tanganmu. Selamat datang, Penjelajah, dunia baru menantimu.

---

Ayo bergerak, Layer 2 Ethereum sudah menanti! Semoga kamu menikmati entri Handbook Penjelajah ini: "Mengisi Dompet di Layer 2".

Jangan lupa mengoleksi entri ini kalau kamu ingin punya salinannya sebagai rujukan mudah dalam perjalananmu, atau untuk mendukung konten Bankless Academy berikutnya. Selamat menjelajah, Penjelajah!

***

**Penulis**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** adalah penulis, editor, dan koordinator di BanklessDAO serta Pemimpin Redaksi Good Morning News. Ia juga ikut membangun organisasi yang berfokus pada hibah di DAOpunks.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** adalah penulis dan editor di BanklessDAO. Ia ingin mempelajari kripto dan NFT sebanyak mungkin, terutama cara terbaik menyampaikan pengetahuan itu kepada orang lain.

**Patron**

Artikel ini didanai oleh [**Optimism**](https://www.optimism.io/).
