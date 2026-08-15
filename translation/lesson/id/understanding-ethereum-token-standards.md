---
TITLE: Memahami Standar Token Ethereum
DESCRIPTION: Pelajari bagaimana templat aset Ethereum mendukung kelas aset tradisional maupun yang baru muncul.
LANGUAGE: Bahasa Indonesia
WRITERS: Musharraf, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-ethereum-token-standards
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
## **Poin Penting**

> * Standar `token` Ethereum adalah aturan dan fungsi baku yang dipakai untuk menerbitkan token di Ethereum.
>
> * Standar token Ethereum yang paling populer adalah `ERC-20`, `ERC-721`, dan `ERC-1155`.
>
> * Setiap standar memberi tingkat `fungibilitas` yang berbeda, sehingga aset onchain yang umum maupun yang unik sama-sama bisa dibuat.
>
> * Standar token membuat token bisa saling beroperasi di seluruh ekosistem Ethereum, sehingga dApp sangat mudah mengintegrasikan token baru, dan kamu pun mudah mengaksesnya!

## Apa Itu Standar Token Ethereum?

Jutaan token kripto yang berbeda hidup di Ethereum dan jaringan `Layer 2`-nya, masing-masing dengan sifat dan kegunaan tersendiri. Bagaimana jaringan bisa memastikan dukungan token yang mulus di seluruh ekosistem dApp-nya, tanpa membuat pengembang menghabiskan berjam-jam mengintegrasikan setiap token? Bagaimana pengguna token bisa memahami sifat utamanya tanpa menyusuri dokumentasi berjam-jam?

Di sinilah standar token berperan!

Templat dan kumpulan aturan ini mendukung `interoperabilitas` token di seluruh ekosistem Ethereum. Artinya, dApp cukup mendukung beberapa standar token umum, bukan ribuan token satu per satu. Bagi Penjelajah seperti kamu, artinya kamu bisa melihat standar asal sebuah token dan langsung paham kemampuan dasarnya di Ethereum.

Standar token menentukan:

* Bagaimana kontrak pintar sebuah token harus ditulis.

* Kumpulan fungsi bersama yang harus didukung setiap token jenis itu, agar dApp mana pun tahu cara memakainya.

Saat ini Ethereum punya tiga standar token yang umum dipakai:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: standar untuk token yang mudah dipertukarkan (atau fungible).

   Contoh: token USDC dan UNI.

2. **ERC-721**: standar untuk token unik (atau non-fungible), yang dikenal sebagai `NFT`.

   Contoh: NFT Bored Ape Yacht Club.

3. **ERC-1155**: standar untuk token fungible sekaligus non-fungible dalam satu kontrak.

   Contoh: item di dalam gim video web3.

Sekarang kamu mungkin bertanya: "Apa sebenarnya fungibilitas itu?"

Mari lihat konsep dari ilmu ekonomi tradisional ini untuk memahami pentingnya di ekosistem Ethereum.

## Fungibilitas vs. Non-Fungibilitas.

**"Fungibilitas"** adalah sifat sebuah aset atau barang ekonomi yang menunjukkan dua ciri utama:

* Saat aset diperdagangkan, unitnya bisa saling ditukar tanpa perubahan nilai.

  (Uang $1 bisa ditukar dengan $1 lain, atau empat koin 25¢, atau dua puluh koin 5¢.)

* Saat aset dibagi, pecahan kecilnya tetap punya ciri dasar yang sama.

  (Uang $1 yang dipecah menjadi empat koin 25¢ tetap berfungsi sebagai penyimpan nilai dan tetap bisa dipakai berbelanja.)

Contoh aset fungible antara lain minyak, mata uang fiat, obligasi pemerintah, dan saham perusahaan. Aset yang tidak unik ini mudah ditukar dan dibagi.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Sebaliknya, **"non-fungibilitas"** berarti:

* Aset punya sifat unik yang membedakannya dari aset sejenis, sehingga nilainya pun unik.

  (Lukisan kanvas karya Van Gogh dihargai berbeda dari karya pelukis modern pendatang baru, karena tampilan, kelangkaan, tingkat keterampilan, dan reputasi di balik lukisan itu.)

* Tindakan membagi memengaruhi ciri dasarnya.

  (Lukisan yang dipotong menjadi empat menghasilkan bagian yang tidak saling mirip, dan tiap bagian bisa dinilai berbeda. Maksud awal lukisan itu pun hilang.)

Beberapa contoh aset non-fungible adalah properti, karya seni, identitas digital, dan sertifikasi. Aset ini lebih sulit ditukar dan dibagi karena sifatnya yang unik.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Kalau kamu bingung soal fungibilitas, tanyakan saja: "Seberapa mudah aset ini ditukar dan dibagi?" Kalau sulit, kemungkinan besar aset itu non-fungible!

Ethereum ingin menjadi "lapisan penyelesaian bagi ekonomi dunia". Dukungan untuk aset fungible maupun non-fungible membuka peluang agar kelas aset tradisional bisa diwakili onchain, dan kelas aset baru bisa diciptakan!

## Standar dan Fungsi Token

Saat menerbitkan kontrak token baru di Ethereum, pembuat aset memilih salah satu standar token yang sudah ada. Standar itu memberi sifat awal (disebut fungsi) seperti total pasokan aset, apakah aset bisa dikirim ke dompet lain, dan informasi apa yang bisa disimpannya.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Sebagai contoh, ERC-20 memakai fungsi seperti berikut:

**1\. totalSupply**: menentukan total pasokan sebuah token ERC-20.

Total pasokan sebuah token menentukan hal penting seperti nilai dan distribusinya.

**2\. balanceOf**: memeriksa saldo token pada sebuah alamat tertentu.

Ini membantu layanan dan platform mengecek saldo dompetmu sebelum menjalankan transaksi yang kamu minta.

**3\. transfer**: mengirim token dari alamatmu ke alamat lain.

Setiap kali kamu mengirim token kripto dari dompetmu ke dompet lain, kamu memakai fungsi transfer.

**4\. approve**: mengizinkan sebuah alamat (biasanya kontrak pintar) bertransaksi otomatis atas nama dompetmu sampai jumlah tertentu.

Lewat fungsi ini, kamu bisa menyetujui sebuah platform atau layanan untuk memakai sebagian dana yang kamu tentukan dan menjalankan transaksi secara otomatis.

**5\. allowance**: dipakai untuk mengetahui jumlah yang boleh dibelanjakan sebuah pihak dari sebuah dompet.

Sebuah platform bisa memakai fungsi ini untuk mengecek total jumlah yang sudah kamu setujui, dan apakah transaksinya bisa dijalankan tanpa kamu tanda tangani manual.

Membakukan proses pembuatan token menghadirkan `komposabilitas` di ekosistem Ethereum. Misalnya, pengembang yang membangun [bursa terdesentralisasi (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) bisa mendukung token apa pun yang mengikuti standar ERC-20, karena semuanya berperilaku serupa. Mereka tidak perlu membuat dukungan khusus untuk setiap token yang terdaftar.

Begitu pula, pembuat pasar NFT cukup membuat platformnya patuh pada standar ERC-721 dan ERC-1155 untuk mendukung semua NFT yang dibuat di Ethereum.

Setelah memahami standar token, fungibilitas, dan fungsi, mari lihat kegunaan tiga standar utama di Ethereum.

### ERC-20: Token Fungible

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) adalah standar token yang menetapkan aturan pembuatan kontrak token fungible.

Token ERC-20 bisa berupa apa saja, dari `memecoin` sampai alat pembayaran di pasar terdesentralisasi. Umumnya token ini masuk salah satu dari empat kategori berikut:

**1\. Token utilitas**: melayani kegunaan tertentu di dalam ekosistem sebuah aplikasi atau platform.

Contoh: Chainlink (LINK) dipakai untuk membayar operator yang mengirim data dunia nyata, seperti harga pasar, ke kontrak pintar.

**2\. Token tata kelola**: memberi pemegangnya hak suara dalam keputusan tata kelola sebuah platform.

Contoh: pemegang Ethereum Name Service (ENS) bisa memberi suara pada usulan pembaruan protokol registri domain.

**3\. Stablecoin**: dirancang untuk menjaga nilainya tetap stabil, biasanya setara dolar AS.

Contoh: Tether (USDT), USD Coin (USDC), dan pendatang yang lebih baru seperti USDS dari Sky.

**4\. Token efek**: mewakili kepemilikan atas sebuah aset dasar, seperti saham perusahaan.

Contoh: dana investasi yang ditokenisasi, seperti reksa dana pasar uang yang mulai diterbitkan onchain oleh manajer aset besar pada 2024.

Satu token bisa masuk lebih dari satu kategori. Misalnya, token tata kelola juga bisa punya kegunaan tertentu di dalam sebuah platform.

Kamu bisa dengan mudah [membeli token ERC-20 di DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) seperti Uniswap, atau di `bursa terpusat` seperti Binance atau Coinbase.

### ERC-721: Token Non-Fungible

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) adalah standar yang menetapkan aturan bagi pengguna Ethereum untuk membuat atau memakai token non-fungible. Standar ini memastikan setiap NFT yang dibuat terbukti unik.

Apa saja kegunaan token ERC-721?

**1\. Kepemilikan aset**: token ERC-721 banyak dipakai untuk mewakili kepemilikan aset digital maupun aset dunia nyata yang unik. Contohnya, entri Handbook Penjelajah ini tersedia dalam 100 versi bernomor (bukan hanya untuk dibaca, tapi untuk dimiliki), seperti buku di rak digitalmu. (Kamu bisa `mint` dan memilikinya dengan menekan tombol emas "Collect Entry" di bagian atas.) "Datadisk Collectibles" milik Bankless Academy bekerja dengan cara yang sama.

**2\. Langganan dan keanggotaan**: kreator, seniman, klub, dan perusahaan sudah memakai NFT untuk langganan, tiket acara, dan keanggotaan. Keunikan NFT yang bisa dibuktikan memastikan setiap unit dari pasokan tetapnya terikat pada satu pengguna.

**3\. Imbalan loyalitas**: Starbucks menjalankan program loyalitas bernama Odyssey sampai Maret 2024, tempat anggotanya menyelesaikan misi untuk mendapat NFT yang bisa ditukar dengan hadiah digital maupun hadiah nyata. Banyak merek lain menawarkan NFT sebagai imbalan loyalitas yang bisa ditukar atau dijual pengguna kapan saja.

**4\. Identitas dan sertifikasi**: token ERC-721 bisa dipakai untuk membuat identitas dan sertifikasi yang tidak bisa dipalsukan. Kalau identitas digital atau sertifikatmu berupa token ERC-721, kamu mudah membuktikan kepemilikannya dan hampir mustahil bagi siapa pun memalsukan lalu menyalahgunakan dokumenmu.

Untuk mendapat token ERC-721, buat akun di pasar NFT seperti [OpenSea](https://opensea.io/) lalu beli NFT yang terdaftar di sana. Pastikan kamu mengikuti pelajaran [Keamanan Web3](https://app.banklessacademy.com/lessons/web3-security) agar terlindung dari penipuan di pasar NFT.

### ERC-1155: Token Fungible dan Non-Fungible

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Sering disebut `standar multi-token`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) menggabungkan konsep ERC-20 dan ERC-721 sehingga pembangun bisa menulis kontrak yang mendukung token fungible sekaligus non-fungible. Ini tidak banyak mengubah pengalaman pengguna, tapi bisa membantu mengoptimalkan fitur platform. Contohnya, menerbitkan mata uang dalam gim yang fungible dan aset dalam gim yang non-fungible di bawah satu kontrak.

Standar ini juga memungkinkan pembuatan token semi-fungible: token yang bersifat fungible dan non-fungible tergantung situasi. Misalnya, dalam koleksi kartu dagang, semua kartu dengan tingkat kelangkaan sama bisa saling ditukar (fungible), sedangkan kartu dengan tingkat kelangkaan berbeda tidak saling ditukar (non-fungible).

ERC-1155 juga memungkinkan transaksi borongan untuk mengirim beberapa jenis token sekaligus, sehingga biaya `gas` bagi pengguna berpotensi lebih murah.

---

Selamat, kamu berhasil menuntaskan entri panjang di Handbook Penjelajah ini: "Memahami Standar Token".

Jangan lupa mengoleksi entri ini kalau kamu ingin punya salinannya sebagai rujukan mudah dalam perjalananmu, atau untuk mendukung konten Bankless Academy berikutnya. Selamat menjelajah, Penjelajah!

---

## FAQ Standar Token Ethereum

### Bagaimana standar token Ethereum dibuat?

Standar token diusulkan dan diterbitkan di Ethereum lewat proses usulan bernama Ethereum Improvement Proposals (EIP). Tidak ada pemungutan suara: usulan disempurnakan lewat diskusi terbuka, dan begitu komunitas secara luas sepakat bahwa usulan itu berjalan baik, para editor memfinalkannya sebagai standar bernama Ethereum Request for Comment (ERC). Nomor seri EIP lalu ditambahkan untuk melengkapi nama standarnya, misalnya ERC-20 atau ERC-721.

### Apakah ether (ETH) mengikuti standar token?

Tidak. ETH justru disebut "koin", bukan "token", artinya ETH punya [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics) sendiri.

### Bisakah siapa pun meluncurkan token?

Bisa. Ethereum adalah ekosistem tanpa izin, siapa pun bisa ikut, dan siapa pun bisa meluncurkan token fungible maupun non-fungible. Namun kamu butuh pengetahuan teknis atau akses ke alat tanpa kode.

### Kalau dua token bernama sama, bagaimana saya tahu mana yang resmi?

Untuk mengenali token aslinya, cek alamat kontrak yang dipakai menerbitkan token yang ingin kamu pakai, lalu cocokkan dengan dokumentasi resmi proyeknya. Dengan begitu kamu tidak akan berinteraksi dengan kontrak token jahat yang bisa menguras dompetmu.

### Adakah standar token lain di Ethereum selain ERC-20, 721, dan 1155?

Ada. Sebagian dipakai luas, seperti [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), standar bersama untuk token `brankas` yang mewakili simpanan penghasil imbal hasil di DeFi. Standar yang lebih baru juga mencakup `akun pintar`, yang membuat sebuah dompet bisa menjalankan kodenya sendiri. Yang lain, seperti [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462), dan [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), tidak pernah populer atau hanya melayani kebutuhan yang sangat khusus.

---

**Penulis**

**[Musharraf](https://x.com/musharrafff)** adalah salah satu pendiri Unhashed. Ia membantu proyek web3 dalam strategi dan eksekusi konten.

**[Tetranome](https://twitter.com/Tetranome)** adalah Project Champion di Bankless Academy, berfokus pada pengalaman pengguna, antarmuka, desain, dan konten.

**Editor**

**[Trewkat](https://twitter.com/trewkat)** adalah penulis dan editor di BanklessDAO. Ia tertarik mempelajari kripto dan NFT, terutama cara terbaik menyampaikan pengetahuan itu kepada orang lain.

**Patron**

Artikel tanpa sponsor ini adalah bagian dari pendidikan gratis Bankless Academy. Koleksi artikel ini untuk mendukung konten berikutnya!
