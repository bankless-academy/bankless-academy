---
TITLE: Mengelola Izin Token
DESCRIPTION: Lindungi dompet kamu dari interaksi kontrak pintar yang tidak diinginkan.
LANGUAGE: Bahasa Indonesia
WRITERS: estmcmxci, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/managing-token-allowances
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

> * Izin token adalah izin yang diberikan kepada `kontrak pintar` untuk membelanjakan token dari sebuah dompet tanpa persetujuan lagi.
>
> * Izin ini bisa dieksploitasi pelaku jahat kalau pengguna tidak sadar izinnya masih aktif.
>
> * Alat seperti Revoke.cash membuat pengguna mudah memeriksa dan mencabut izin token.

## Pendahuluan

DeFi memberi pengguna kendali atas asetnya, termasuk `kunci privat`, sehingga mereka punya kedaulatan dan wewenang atas dananya seperti belum pernah ada sebelumnya. Tapi kekuatan besar datang bersama tanggung jawab yang lebih besar: pengguna harus sepenuhnya mengurus keamanan dan pengelolaan asetnya sendiri.

Ada empat kategori penipuan umum yang perlu diwaspadai pengguna DeFi:

* **Seed Phrase Bocor**: Penyerang berusaha menipu pengguna agar mengungkap seed phrase-nya, yang memberi mereka akses tidak sah ke dana. Dengan seed phrase kamu, penyerang bisa menguras semua dana kamu dan terus melakukannya setiap kali kamu menyetor dana baru ke dompet itu. Sayangnya tidak ada cara pulih dari situasi ini, dan satu-satunya solusi adalah membuat dompet yang benar-benar baru dengan `seed phrase` baru.

* **Transfer ETH Langsung**: Penipu bisa menyembunyikan transfer ETH dengan menyamarkannya sebagai pemanggilan fungsi, misalnya "Security Update". Metode tanda tangan mentah di balik versi lama penipuan ini sudah dihapus dari MetaMask; perangkat phishing modern justru menyalahgunakan permintaan tanda tangan yang terlihat biasa, mengandalkan kebiasaan kamu menandatangani tanpa membaca apa yang ditampilkan dompet. Kalau kamu tertipu, dana itu tidak bisa dikembalikan, tapi dompet kamu masih aman dipakai untuk transaksi lain.

* **Daftar Jual di Pasar NFT**: Waspadai daftar jual palsu dan kontrak berbahaya yang memanfaatkan izin yang kamu berikan ke pasar seperti OpenSea. Penipu bisa menjebak kamu menandatangani pesan `offchain` yang memasang `NFT` kamu untuk dijual, tanpa ada transaksi token yang benar-benar terjadi.

* **Izin Token**: Penyerang bisa memanipulasi izin untuk mendapat akses ke dana lebih banyak daripada yang awalnya disetujui. "Approval" adalah transaksi onchain yang memberi akses ke token atau NFT kamu. "Permit" memberi akses yang sama tapi hanya butuh tanda tangan offchain tanpa gas. Uniswap dan kebanyakan aplikasi trading modern memakai sistem ini (disebut Permit2). Tanda tangan permit tidak muncul sebagai persetujuan onchain sampai dipakai, dan bisa punya tanggal kedaluwarsa; tampilan "Signatures" di Revoke.cash membuat kamu bisa memeriksa dan membatalkannya.

  Seiring kontrak pintar makin populer, `izin token` jadi perlu supaya kontrak tepercaya bisa menjalankan transaksi tanpa membuka kunci privat kamu. Izin token membuat dApp bisa memindahkan token di dompet kamu secara otomatis atas nama kamu. Kemudahan ini menaikkan efisiensi, tapi sekaligus membuka celah serangan lewat penipuan dan akses tidak sah.

Di artikel ini, kami akan membahas "Izin Token" dan memperkenalkan alat komunitas yang dibuat untuk membantu mengelola izin kamu.

## Izin Token: Memahami, Mengelola, dan Menjaga Keamanan

Izin token adalah izin yang diberikan di muka kepada kontrak pintar untuk membelanjakan token dari sebuah dompet. Izin ini penting karena membuat transaksi bisa berjalan tanpa meminta persetujuan eksplisit setiap kali aset dipindahkan langsung dari dompet. Tapi kalau disalahgunakan, izin token bisa menjadi celah serangan bagi orang yang lengah. Untuk menekan risiko itu, pengguna DeFi perlu berhati-hati, membekali diri soal lanskap keamanan, dan memahami cara kerja izin token yang sebenarnya.

Ada dua langkah saat memberi izin ke kontrak pihak ketiga:

1. Menghubungkan dompet: Saat menghubungkan dompet kamu ke sebuah dApp, kamu hanya membagikan `alamat` dompet kamu ke antarmukanya, supaya dApp bisa menampilkan saldo dan aktivitas kamu. Menghubungkan saja tidak memberi izin onchain apa pun.

2. Persetujuan token: Untuk bertransaksi dengan dApp itu, kamu lalu menyetujui kontrak pintarnya memindahkan token tertentu atas nama kamu. Langkah inilah yang memberi kuasa membelanjakan sungguhan.

Dengan mengelola izin token secara proaktif, pengguna bisa memastikan tidak ada kontrak yang menarik lebih dari jumlah yang ditetapkan di awal dari dompetnya. Untungnya, ada alat komunitas yang dibuat untuk memberi pengguna DeFi rasa percaya diri dan ketenangan.

## Panduan: Memakai Revoke.cash

[Revoke.cash](https://revoke.cash/) memudahkan pengguna mengelola izin tokennya lewat situs sederhana yang membantu memeriksa dan memantau izin yang sudah diberikan ke berbagai dApp. Mari kita telusuri cara memakai alat komunitas yang ampuh ini untuk menjaga aset kamu dan merebut kembali kendali atas dompet kamu.

**1\. Hubungkan dompet kamu**:

Untuk mulai mencabut izin token kamu, buka [Revoke.cash](http://revoke.cash/) lalu klik "Connect Wallet" (hubungkan dompet) di pojok kanan atas. Alternatifnya, kamu bisa memasukkan alamat publik dompet kamu secara manual di kolom pencarian. Setelah selesai memuat, kamu akan melihat daftar semua `persetujuan token` kamu di jaringan itu.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Periksa izin kamu**:

Setelah dompet terhubung, kamu bisa memeriksa persetujuan yang sudah ada. Kamu bisa mengurutkan, menyaring, atau mencari persetujuan tertentu berdasarkan alamat pihak yang diberi kuasa. Mengurutkan dengan "Newest to Oldest" (terbaru ke terlama) sangat berguna kalau kamu mencurigai ada persetujuan berbahaya baru-baru ini. Pakai opsi pengurutan dan penyaringan itu untuk melihat gambaran izin token yang sudah kamu berikan. Izin diberikan per jaringan, jadi pakai pemilih jaringan untuk mengulang pemeriksaan di setiap jaringan yang kamu pakai.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Cabut izin yang tidak diinginkan**:

Setelah kamu menemukan persetujuan yang mau dicabut, cukup klik tombol "Revoke" (cabut) di sebelahnya. Kalau kamu masih butuh persetujuan itu di kemudian hari tapi ingin menekan risiko, kamu juga bisa mengubah jumlahnya dengan mengklik ikon pensil di sebelah jumlah yang disetujui.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Mencabut atau menyesuaikan izin token bisa jadi pilihan terbaik kalau:

1. Kontrak pintar yang baru dipasang dieksploitasi dan menciptakan celah di `bursa terdesentralisasi` yang rutin kamu pakai.

   Pada April 2023, `DEX` populer SushiSwap mengalami eksploitasi serupa, dengan \~$3,5 juta dicuri dari pengguna. Pengguna yang terdampak tetap berisiko kalau belum mencabut izin tokennya.

2. Proposal tata kelola berbahaya memperbarui beberapa kontrak dengan tujuan menguras dana pengguna.

   Lebih dari $2,5 juta aset terkompromi ketika Atlantis Loans, protokol `DeFi` di BNB chain, menjalankan proposal tata kelola yang menyasar beberapa kontrak. Pengguna yang membatasi jumlah persetujuannya menekan risiko dompetnya dikuras habis oleh proposal berbahaya itu.

## Jangan Lupakan Delegasi

Sejak pembaruan Pectra di Ethereum (Mei 2025), izin bukan lagi satu-satunya perizinan yang perlu ditinjau. Fitur dompet yang lebih baru (EIP-7702) membuat dompet kamu bisa mendelegasikan ke kode tambahan, sehingga muncul kemudahan seperti penggabungan transaksi, tapi juga trik penguras baru: satu tanda tangan berbahaya bisa memasang kode "sweeper" yang langsung meneruskan apa pun yang kamu setorkan ke penyerang, tanpa seed phrase kamu pernah bocor. Pada 2025, peneliti di Wintermute menemukan lebih dari 97% delegasi dompet awal mengarah ke kode sweeper yang identik.

Revoke.cash menampilkan delegasi aktif kamu di tab "Delegations", tapi karena delegasi dikendalikan oleh dompet kamu, bukan oleh dApp, kamu mencabut delegasi yang tidak diinginkan dari dalam dompet itu sendiri. Di MetaMask, buka detail akun lalu kembalikan akun ke akun standar. Kalau kamu tidak pernah memilih meningkatkan ke `akun pintar`, anggap delegasi apa pun yang kamu temukan sebagai serangan.

---

Saatnya memperkuat pertahanan dompet kita! Kami harap kamu menikmati artikel Handbook Penjelajah ini: "Mengelola Izin Token".

Jangan lupa mengoleksi artikel ini kalau kamu ingin punya salinannya sebagai rujukan cepat dalam perjalanan, atau untuk mendukung konten Bankless Academy berikutnya. Selamat menjelajah, Penjelajah!

---

## FAQ

### Kapan Sebaiknya Memakai Revoke.cash?

Pakai Revoke.cash secara berkala, terutama saat kamu sedang tidak aktif memakai sebuah dApp, khususnya pasar NFT. Membatasi persetujuan mengurangi risiko kehilangan dana akibat peretasan, eksploitasi, atau penipuan phishing. Dengan mengurutkan persetujuan dari yang terbaru, kamu bisa mengenali persetujuan mencurigakan dan segera mencabutnya, sehingga kerusakan lanjutan bisa ditekan.

### Apakah Memutus Koneksi Dompet Melindungi dari Eksploitasi Persetujuan?

Memutus koneksi dompet kamu dari sebuah dApp tidak melindungi kamu dari eksploitasi, baik lewat persetujuan maupun cara lain. Persetujuan token yang sudah kamu berikan tetap aktif setelah koneksi diputus, karena tersimpan onchain.

### Bagaimana Cara Menghindari Eksploitasi Izin Token dan Risiko Sejenis?

Pendekatan proaktif terhadap izin token mencakup:

* memberi izin hanya ke dApp yang tepercaya.

* meninjau izin token secara berkala.

* menghapus izin yang tidak perlu atau mencurigakan.

* memeriksa delegasi dompet yang tidak kamu kenali.

* mengikuti kabar pembaruan keamanan dApp.

Pertimbangkan memakai alat pihak ketiga seperti [ekstensi peramban](https://revoke.cash) Revoke.cash: alat ini bekerja sebagai langkah pencegahan terhadap ancaman. Ekstensi itu memperingatkan kamu kalau kamu hampir menandatangani sesuatu yang berpotensi berbahaya, sehingga melindungi kamu dari penipuan phishing atau aktivitas jahat lain.

### Bisakah Dana Dipulihkan lewat Revoke.cash?

Sayangnya, Revoke.cash tidak bisa memulihkan dana yang sudah dicuri. Alat ini bersifat pencegahan, untuk menurunkan kemungkinan kamu jadi korban eksploitasi persetujuan. Tapi mencabut persetujuan yang dipakai mencuri dana kamu bisa mencegah pencurian berikutnya.

### Kenapa Dompet Selalu Terkuras Setiap Kali Diisi Ulang?

Dompet kamu mungkin punya "sweeper bot", skrip yang mengawasi dompet yang sudah terkompromi dan langsung memindahkan setiap setoran baru sebelum kamu sempat bertindak. Salah satu penyebabnya adalah seed phrase yang bocor. Kalau itu masalahnya, mencabut persetujuan tidak akan menolong: tinggalkan dompet itu dan buat yang baru. Tapi delegasi dompet yang berbahaya sama besar kemungkinannya: kode sweeper terpasang lewat tanda tangan yang kamu berikan karena dijebak, tanpa seed phrase kamu bocor. Cek tab "Delegations" di Revoke.cash. Kalau kamu menemukan delegasi yang tidak kamu kenali, cabut dari dalam dompet kamu (misalnya lewat detail akun MetaMask). Kalau tidak ada delegasi tapi pengurasan terus terjadi, anggap seed phrase kamu bocor dan pindah ke dompet baru.

---

**Penulis**

[**Marcus**](https://twitter.com/estmcmxci) menerbitkan ENS DAO Newsletter. Dia meneliti bagaimana surplus pendapatan dari biaya protokol bisa mensubsidi pengembangan lapisan aplikasi dan infrastruktur open source lain.

**Editor**

[**Tetranome**](https://twitter.com/Tetranome) adalah Project Champion di Bankless Academy, berfokus pada pengalaman pengguna, antarmuka, desain, dan konten.

[**Trewkat**](https://twitter.com/trewkat) adalah penulis dan editor di BanklessDAO. Dia tertarik mempelajari kripto dan NFT, dengan fokus khusus pada cara terbaik menyampaikan pengetahuan itu kepada orang lain.

**Patron**

Artikel tanpa sponsor ini adalah bagian dari pendidikan gratis Bankless Academy. Koleksi artikel ini untuk mendukung konten berikutnya!
