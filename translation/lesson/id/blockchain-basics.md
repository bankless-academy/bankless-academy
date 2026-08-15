---
TITLE: Dasar-Dasar Blockchain
DESCRIPTION: Pelajari arsitektur dasar teknologi blockchain.
LANGUAGE: Bahasa Indonesia
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/blockchain-basics
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

Teknologi `blockchain` adalah cara revolusioner untuk menyimpan dan melacak data, sekaligus membuat data itu bisa diakses siapa saja. Blockchain menata data dalam satu daftar publik berisi seluruh riwayat transaksi yang bisa dilihat siapa pun, tapi tidak bisa diubah. Daftar publik ini secara keseluruhan disebut `buku besar` blockchain.

Setelah menelusuri lapisan-lapisan blockchain, kamu akan memahami struktur yang ditampilkan alat bernama `penjelajah blok`: **daftar** blok, **transaksi** di dalam blok itu, dan **detail** tiap transaksi. Untuk melihatnya langsung, coba [Etherscan](https://etherscan.io/), penjelajah blok populer untuk Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Struktur Blockchain

Istilah blockchain bisa dipakai sebagai kata benda (blockchain Bitcoin) atau kata sifat (teknologi blockchain). Bagaimanapun, `blockchain` merujuk pada seluruh struktur tempat mata uang kripto dibangun.

Dilihat dari luar ke dalam, ada 3 tingkat struktur di sebuah blockchain:

1. `Blockchain` secara keseluruhan tersusun dari banyak blok yang terhubung berurutan
2. `Blok` tersusun dari kumpulan transaksi yang digabungkan
3. `Transaksi` adalah perpindahan nilai, atau instruksi ke program, antar `alamat` di jaringan

Struktur tiga tingkat ini menghasilkan buku besar kriptografis, yaitu riwayat seluruh transaksi di jaringan yang tidak bisa diubah.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Apa itu blockchain?

- [ ] Kumpulan transaksi tertata yang disebut blok

> ℹ️ Coba lagi! Blok memang bagian dari strukturnya, tapi bukan satu-satunya jawaban yang benar.

- [ ] Catatan bersama yang bisa dilihat siapa pun, tidak bisa diubah

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya jawaban yang benar.

- [ ] Blok yang saling terhubung secara berurutan

> ℹ️ Coba lagi! Ini menjelaskan rantai blok, tapi bukan satu-satunya jawaban yang benar.

- [x] Semua benar

> ℹ️ Tepat! Ketiganya benar: blockchain adalah catatan bersama yang tidak bisa diubah, berisi transaksi yang dikelompokkan ke dalam blok berurutan.

# Menelaah Buku Besar

Di sistem uang biasa, kita percaya pihak ketiga seperti bank untuk mencatat berapa uang yang dimiliki tiap orang. Tapi untuk benar-benar Bankless, kita ingin sistem yang tidak menuntut kita percaya pada satu pihak untuk mengelola buku besar.

`Buku besar` adalah daftar SEMUA transaksi yang pernah dibuat di sebuah blockchain, dan siapa pun bisa melihatnya di blockchain `publik`. Sekelompok transaksi dari buku besar membentuk blok yang bersama-sama menyusun blockchain.

Saat transaksi baru ditambahkan ke buku besar, saldo di tiap `alamat` diperbarui; transaksi lama tidak bisa diubah. Ibarat siapa pun boleh melihat seluruh riwayat transaksi rekening bank semua orang, kapan saja.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Transaksi di Buku Besar

Mari lihat beberapa contoh transaksi:

- Alice mengirim 5 ETH ke Bob
- Bob mengirim 2 ETH ke Charlie

Tiap transaksi menunjukkan *perubahan* jumlah mata uang kripto di setiap alamat, sehingga hasil total semua transaksi ADALAH jumlah mata uang kripto yang dimiliki tiap alamat.

---

⇒ Alice berkurang 5 ETH

⇒ Bob bertambah 3 ETH total (menerima 5, mengirim 2)

⇒ Charlie bertambah 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Mana yang benar tentang buku besar blockchain publik?

- [ ] Semua transaksi bersifat publik dan transaksi lama tak bisa diubah

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Buku besar mencatat jumlah mata uang kripto tiap alamat saat ini

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Buku besar bertambah panjang saat transaksi baru masuk

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [x] Semua benar

> ℹ️ Tepat! Buku besar bersifat publik, tidak bisa diubah, menjaga saldo tiap alamat tetap mutakhir, dan tumbuh dengan tiap transaksi baru.

# Desentralisasi

Transaksi di `buku besar` blockchain bukan hanya tidak bisa diubah, tapi juga dibagikan dan disebar ke jaringan komputer yang sangat luas. Agar tidak ada satu pihak pun yang bisa mengubah datanya, salinan buku besar blockchain disimpan di banyak komputer, yang disebut `node`, di seluruh jaringan.

Data yang dibagikan inilah yang membuat buku besar blockchain `terdesentralisasi`. Tidak ada otoritas atau pihak tunggal yang mengendalikan datanya. Blockchain seperti Ethereum juga bersifat `publik` karena buku besarnya bisa dilihat siapa saja.

Untuk pelajaran ini, cukup ingat bahwa data buku besar dibagikan ke banyak komputer yang menjalankan jaringan Ethereum.

# Knowledge Check 3

Apa yang membuat blockchain terdesentralisasi?

- [ ] Hanya satu pihak yang bisa menulis ke blockchain

> ℹ️ Coba lagi! Satu pihak yang memegang kendali justru kebalikan dari desentralisasi.

- [ ] Memenuhi syarat desentralisasi yang ditetapkan pemerintah

> ℹ️ Coba lagi! Desentralisasi lahir dari desain jaringannya, bukan dari restu pemerintah.

- [x] Buku besar tersimpan di banyak komputer, tanpa pengendali tunggal

> ℹ️ Tepat! Salinan buku besar di banyak node berarti tidak ada satu pihak pun yang bisa mengendalikan atau mengubah datanya.

- [ ] Buku besar disimpan di satu server yang aman

> ℹ️ Coba lagi! Satu server berarti satu titik kendali. Salinan buku besar disimpan di banyak node.

# Anatomi Blok

Fitur penting blockchain adalah data transaksi lama tidak bisa diubah setelah masuk ke dalam blok. Sebabnya, tiap blok punya `hash blok` yang unik, seperti sidik jari, yang dipakai untuk merangkai blok satu demi satu. Tidak ada yang bisa mengubah transaksi lama tanpa mengubah sidik jari itu, dan sidik jari SEMUA blok sesudahnya, karena tiap sidik jari bergantung pada sidik jari sebelumnya.

Jadi tiap `blok` sederhananya adalah sekelompok transaksi, ditambah sidik jari unik (`hash blok`) yang dihitung dari isi blok itu. Blok saling dirantai karena masing-masing merujuk sidik jari unik blok sebelumnya, membentuk satu block**chain** yang tersambung.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Apa fungsi hash blok?

- [ ] Mengenkripsi data blok agar tidak bisa dibaca siapa pun

> ℹ️ Coba lagi! Data blok tetap bisa dibaca publik. Hash adalah sidik jari, bukan enkripsi.

- [x] Merangkai blok dan menjaga data transaksi lama tetap utuh

> ℹ️ Tepat! Tiap blok merujuk sidik jari blok sebelumnya, jadi mengubah data lama akan merusak semua blok sesudahnya.

- [ ] Memastikan transaksi terkirim ke alamat yang benar

> ℹ️ Coba lagi! Alamat yang menentukan ke mana dana pergi. Hash blok merangkai blok satu sama lain.

- [ ] Memastikan blockchain tetap terdesentralisasi

> ℹ️ Coba lagi! Desentralisasi datang dari menyebarkan buku besar ke banyak node, bukan dari hash blok.

# Di Dalam Sebuah Blok

Ingat, data `blok` hanyalah sekelompok transaksi yang digabungkan. Melihat ke dalam satu blok, kita menemukan daftar transaksi dan sedikit data tentang siapa yang membuat blok itu.

Dari contoh tadi saat membahas buku besar blockchain, kedua transaksi itu bisa dikelompokkan dalam satu blok, atau tersebar ke beberapa blok seiring waktu. Tapi di blok mana pun mereka masuk, semuanya akhirnya ditambahkan ke buku besar blockchain.

- Alice mengirim 5 ETH ke Bob
- Bob mengirim 2 ETH ke Charlie

Ingat juga bahwa tiap blok harus merujuk `hash blok` blok sebelumnya untuk merangkai blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Informasi apa yang ada di dalam sebuah blok?

- [ ] Semua informasi yang ada di blok sebelumnya

> ℹ️ Coba lagi! Blok hanya merujuk hash blok sebelumnya. Ia tidak menyalin semua data lama.

- [ ] Apa pun yang relevan, karena ukuran blok tidak terbatas

> ℹ️ Coba lagi! Blok adalah sekelompok transaksi yang terbatas, bukan wadah tanpa batas.

- [x] Data transaksi dan rujukan ke blok sebelumnya

> ℹ️ Tepat! Blok adalah sekelompok transaksi ditambah hash blok sebelumnya, yang merangkai blok satu sama lain.

- [ ] Semua data transaksi dalam rentang waktu tertentu

> ℹ️ Coba lagi! Transaksi bisa dikelompokkan dalam satu blok atau tersebar ke beberapa blok seiring waktu.

# Transaksi Individual

Data di blockchain mana pun sederhananya adalah daftar `transaksi`, catatan perpindahan nilai antar pengguna. Tiap transaksi harus ditandatangani dengan `tanda tangan digital` pengirim agar sah.

Inilah yang kamu lakukan saat mengonfirmasi transaksi di dompet: kamu menandatanganinya untuk memberi izin. Anggap saja versi digital dari membubuhkan tanda tangan di cek, struk, atau transaksi kartu kredit.

Transaksi bisa sederhana, seperti mengirim aset kripto, atau lebih rumit, seperti menukar aset kripto atau bahkan memasang kode khusus yang berjalan saat dipicu, yang disebut `kontrak pintar`.

Terakhir, tiap transaksi punya penanda digital unik, disebut `hash transaksi`, yang tidak dimiliki transaksi lain. Ini memudahkan merujuk satu transaksi di kemudian hari dan memastikan detailnya tidak bisa diubah setelahnya.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Data di blockchain hanyalah daftar transaksi yang dikelompokkan ke dalam blok. Contoh transaksi seperti itu antara lain:

- [x] Mengirim atau menerima aset kripto

> ℹ️ Tepat! Transaksi mencatat perpindahan nilai antar pengguna, dari transfer sederhana sampai interaksi dengan kontrak pintar.

- [ ] Mengubah ukuran blok

> ℹ️ Coba lagi! Ukuran blok bukan sesuatu yang bisa diubah oleh sebuah transaksi.

- [ ] Menyunting data blockchain lama

> ℹ️ Coba lagi! Data blockchain lama tidak bisa diubah. Itu justru salah satu fitur inti blockchain.

- [ ] Semua benar

> ℹ️ Coba lagi! Hanya satu dari pilihan di atas yang merupakan transaksi blockchain yang sah.

# Alamat Pengguna

`Alamat` adalah penanda publik yang bisa dicari siapa saja di blockchain. Seperti alamat email, siapa pun bisa mengirim dana ke sana, tapi hanya pemegang `kunci privat` yang bisa membuka dan memakai dana di alamat itu.

Di Ethereum, alamat selalu diawali \_0x\_\_\_\_\_\_\_\_\_\_ dan terdiri dari 42 karakter berupa angka dan huruf yang diturunkan dari `kunci publik` alamat tersebut.

Saat melihat satu transaksi di penjelajah blok, kita bisa melihat alamat From: dan To:. Ini tidak memberi tahu siapa *orang* yang mengendalikan alamat itu, tapi siapa pun bisa melacak perpindahan mata uang kripto di seluruh buku besar blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Apa yang benar tentang alamat blockchain?

- [ ] Alamat adalah penanda publik berbagai pihak di blockchain

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Di Ethereum, alamat selalu diawali *0x*

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [ ] Pemegang kunci privat bisa memakai dana di alamat itu

> ℹ️ Coba lagi! Ini benar, tapi bukan satu-satunya pernyataan yang benar.

- [x] Semua benar

> ℹ️ Tepat! Alamat adalah penanda publik, diawali 0x di Ethereum, dan dananya dibuka oleh kunci privat.
