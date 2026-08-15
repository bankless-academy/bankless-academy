---
TITLE: Kiến thức cơ bản về blockchain
DESCRIPTION: Tìm hiểu kiến trúc nền tảng của công nghệ blockchain.
LANGUAGE: Tiếng Việt
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

# Giới thiệu

Công nghệ `blockchain` là cách lưu trữ và theo dõi dữ liệu mang tính cách mạng, đồng thời để ai cũng xem được dữ liệu đó. Nó tổ chức dữ liệu thành một danh sách công khai duy nhất chứa mọi giao dịch trong lịch sử, ai cũng xem được nhưng không ai sửa được. Danh sách công khai này được gọi chung là `sổ cái` blockchain.

Sau khi xem qua các lớp của một blockchain, bạn sẽ hiểu cấu trúc mà công cụ mang tên `trình khám phá khối` hiển thị: **danh sách** các khối, các **giao dịch** trong những khối đó, và **chi tiết** của từng giao dịch. Hãy thử [Etherscan](https://etherscan.io/), một trình khám phá khối phổ biến cho Ethereum.

![](https://app.banklessacademy.com/images/blockchain-basics/introduction-1e34f31e.svg)

# Cấu trúc blockchain

Từ blockchain có thể dùng như danh từ (blockchain Bitcoin) hoặc như tính từ (công nghệ blockchain). Dù thế nào, `blockchain` cũng chỉ toàn bộ cấu trúc mà tiền mã hóa được xây dựng trên đó.

Nhìn từ ngoài vào, một blockchain có 3 tầng cấu trúc:

1. Toàn bộ `blockchain` gồm các khối được nối với nhau theo thứ tự
2. `Khối` gồm các nhóm giao dịch gộp lại
3. `Giao dịch` là những lần chuyển giá trị, hoặc lệnh gửi tới chương trình, giữa các `địa chỉ` trên mạng lưới

Ba tầng này hợp lại tạo nên một sổ cái mật mã: lịch sử không thể sửa đổi của mọi giao dịch đã thực hiện trên mạng lưới.

![](https://app.banklessacademy.com/images/blockchain-basics/blockchain-structure-1c9a9ed4.svg)

# Knowledge Check 1

Blockchain là gì?

- [ ] Các nhóm giao dịch được sắp xếp, gọi là khối

> ℹ️ Thử lại! Khối là một phần của cấu trúc, nhưng đó không phải câu trả lời đúng duy nhất.

- [ ] Một bản ghi chung ai cũng xem được nhưng không ai sửa được

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu trả lời đúng duy nhất.

- [ ] Các khối được nối với nhau theo thứ tự

> ℹ️ Thử lại! Ý này mô tả chuỗi các khối, nhưng không phải câu trả lời đúng duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Cả ba đều đúng: blockchain là bản ghi giao dịch dùng chung, không sửa được, gom thành khối và nối theo thứ tự.

# Xem xét sổ cái

Trong các hệ thống tiền tệ thông thường, ta tin ngân hàng và các bên thứ ba theo dõi xem mỗi người có bao nhiêu tiền. Nhưng để thực sự Bankless, ta cần một hệ thống không buộc mình phải tin vào một thực thể duy nhất quản lý sổ cái.

`Sổ cái` là danh sách TẤT CẢ giao dịch từng thực hiện trên một blockchain, và với các blockchain `công khai` thì ai cũng xem được. Từng nhóm giao dịch riêng biệt trong sổ cái tạo nên các khối, và các khối hợp lại thành blockchain.

Khi giao dịch mới được thêm vào sổ cái, số dư ở mỗi `địa chỉ` được cập nhật; giao dịch cũ không thể sửa. Giống như cho phép ai cũng xem toàn bộ lịch sử tài khoản ngân hàng của mọi người, bất cứ lúc nào.

![](https://app.banklessacademy.com/images/blockchain-basics/examining-the-ledger-838ca24f.svg)

# Giao dịch trên sổ cái

Hãy xem vài giao dịch ví dụ:

- Alice gửi 5 ETH cho Bob
- Bob gửi 2 ETH cho Charlie

Mỗi giao dịch cho thấy phần *thay đổi* lượng tiền mã hóa của từng địa chỉ, nên tổng kết quả của mọi giao dịch CHÍNH LÀ số tiền mã hóa mà mỗi địa chỉ đang có.

---

⇒ Alice mất 5 ETH

⇒ Bob có thêm tổng cộng 3 ETH (nhận 5, gửi 2)

⇒ Charlie có thêm 2 ETH

![](https://app.banklessacademy.com/images/blockchain-basics/transactions-on-the-ledger-6b86493d.svg)

# Knowledge Check 2

Điều nào đúng với sổ cái của các blockchain công khai?

- [ ] Mọi giao dịch đều công khai và giao dịch cũ không thể sửa

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Sổ cái theo dõi mỗi địa chỉ đang có bao nhiêu tiền mã hóa

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Sổ cái lớn dần khi có thêm giao dịch mới

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Sổ cái công khai, không sửa được, luôn cập nhật số dư từng địa chỉ và lớn dần theo mỗi giao dịch mới.

# Sự phi tập trung

Giao dịch được ghi vào sổ cái `blockchain` không chỉ không thể sửa, chúng còn được chia sẻ và phân tán trên một mạng lưới lớn gồm nhiều máy tính. Để chắc chắn không thực thể nào có quyền thay đổi dữ liệu, các bản sao của sổ cái được lưu trên rất nhiều máy tính, gọi là `node`, khắp mạng lưới.

Dữ liệu dùng chung này chính là thứ khiến sổ cái blockchain trở nên `phi tập trung`. Không một cơ quan hay thực thể nào kiểm soát dữ liệu. Các blockchain như Ethereum còn `công khai`, vì ai cũng xem được sổ cái.

Với bài học này, chỉ cần nhớ rằng dữ liệu sổ cái được chia sẻ trên rất nhiều máy tính đang chạy mạng Ethereum.

# Knowledge Check 3

Điều gì khiến một blockchain trở nên phi tập trung?

- [ ] Chỉ một thực thể được ghi vào blockchain

> ℹ️ Thử lại! Một thực thể duy nhất nắm quyền là điều ngược lại với sự phi tập trung.

- [ ] Nó đáp ứng yêu cầu phi tập trung do chính phủ đặt ra

> ℹ️ Thử lại! Sự phi tập trung đến từ thiết kế của mạng lưới, không phải từ sự phê duyệt của chính phủ.

- [x] Sổ cái nằm trên nhiều máy tính, không thực thể nào kiểm soát

> ℹ️ Chính xác! Lưu bản sao sổ cái trên nhiều node nghĩa là không thực thể nào có quyền kiểm soát hay thay đổi dữ liệu.

- [ ] Sổ cái được lưu trên một máy chủ bảo mật duy nhất

> ℹ️ Thử lại! Một máy chủ duy nhất sẽ là điểm kiểm soát tập trung. Bản sao sổ cái được lưu trên nhiều node.

# Cấu tạo của khối

Một đặc điểm quan trọng của blockchain là dữ liệu giao dịch cũ không thể thay đổi sau khi đã vào khối. Lý do là mỗi khối có một `mã băm khối` riêng, như dấu vân tay, dùng để nối các khối lại lần lượt với nhau. Không ai sửa được giao dịch cũ mà không làm đổi dấu vân tay đó và dấu vân tay của MỌI khối phía sau, vì mỗi dấu vân tay phụ thuộc vào dấu vân tay trước nó.

Vậy mỗi `khối` đơn giản là một nhóm giao dịch, cộng thêm dấu vân tay riêng (`mã băm khối`) tính từ nội dung của khối. Các khối được xâu chuỗi vì mỗi khối tham chiếu tới dấu vân tay của khối trước, tạo thành một block**chain** liền mạch.

![](https://app.banklessacademy.com/images/blockchain-basics/block-anatomy-5c22845b.svg)

# Knowledge Check 4

Mã băm khối dùng để làm gì?

- [ ] Mã hóa dữ liệu khối để không ai đọc được

> ℹ️ Thử lại! Dữ liệu khối vẫn công khai và đọc được. Mã băm là dấu vân tay, không phải mã hóa.

- [x] Nối các khối lại và giữ cho dữ liệu giao dịch cũ không đổi

> ℹ️ Chính xác! Mỗi khối tham chiếu dấu vân tay của khối trước, nên sửa dữ liệu cũ sẽ phá vỡ mọi khối phía sau.

- [ ] Đảm bảo giao dịch được gửi đúng địa chỉ

> ℹ️ Thử lại! Địa chỉ quyết định tiền đi đâu. Mã băm khối dùng để nối các khối lại.

- [ ] Đảm bảo blockchain luôn phi tập trung

> ℹ️ Thử lại! Sự phi tập trung đến từ việc phân tán sổ cái trên nhiều node, không phải từ mã băm khối.

# Bên trong một khối

Hãy nhớ, dữ liệu `khối` chỉ là một nhóm giao dịch gộp lại. Nhìn vào bên trong một khối, ta thấy danh sách giao dịch và một ít dữ liệu về ai đã tạo ra khối đó.

Trong ví dụ về sổ cái ở phần trước, hai giao dịch đó có thể nằm chung một khối, hoặc rải ra nhiều khối theo thời gian. Nhưng dù nằm ở khối nào, cuối cùng chúng đều được thêm vào sổ cái blockchain.

- Alice gửi 5 ETH cho Bob
- Bob gửi 2 ETH cho Charlie

Nhớ rằng mỗi khối cũng phải tham chiếu `mã băm khối` của khối trước để xâu chuỗi blockchain lại.

![](https://app.banklessacademy.com/images/blockchain-basics/inside-a-block-b0c2dd11.svg)

# Knowledge Check 5

Một khối chứa những thông tin gì?

- [ ] Toàn bộ thông tin của các khối trước đó

> ℹ️ Thử lại! Một khối chỉ tham chiếu mã băm của khối trước, nó không sao chép mọi dữ liệu cũ.

- [ ] Mọi thứ liên quan tới blockchain, vì khối không giới hạn kích thước

> ℹ️ Thử lại! Một khối là nhóm giao dịch có giới hạn, không phải cái hộp chứa vô hạn.

- [x] Dữ liệu giao dịch và tham chiếu tới khối liền trước

> ℹ️ Chính xác! Một khối gồm nhóm giao dịch cộng với mã băm của khối trước, thứ xâu chuỗi các khối lại.

- [ ] Mọi dữ liệu giao dịch phát sinh trong một khoảng thời gian cố định

> ℹ️ Thử lại! Giao dịch có thể gom vào một khối hoặc rải ra nhiều khối theo thời gian.

# Giao dịch riêng lẻ

Dữ liệu trên mọi blockchain chỉ là một danh sách `giao dịch`, các bản ghi về tiền chuyển giữa những người dùng. Mỗi giao dịch phải được người gửi ký bằng `chữ ký số` thì mới hợp lệ.

Đó chính là điều bạn làm khi xác nhận một giao dịch bằng ví: bạn ký bằng chữ ký số để cho phép giao dịch. Hãy xem nó như phiên bản số của việc ký tay lên séc, hóa đơn hay biên lai thẻ tín dụng.

Giao dịch có thể đơn giản như gửi tài sản crypto, hoặc phức tạp hơn như hoán đổi tài sản, thậm chí triển khai đoạn mã đặc biệt tự chạy khi được kích hoạt, gọi là `hợp đồng thông minh`.

Cuối cùng, mỗi giao dịch có một định danh số riêng, gọi là `mã băm giao dịch`, không giao dịch nào khác trùng. Nhờ đó ta dễ dàng nhắc lại một giao dịch bất kỳ về sau, và chi tiết của nó không thể bị sửa.

![](https://app.banklessacademy.com/images/blockchain-basics/individual-transactions-de83e15c.svg)

# Knowledge Check 6

Dữ liệu trên blockchain chỉ là danh sách giao dịch gom thành khối. Ví dụ về những giao dịch đó là:

- [x] Gửi hoặc nhận tài sản crypto

> ℹ️ Chính xác! Giao dịch ghi lại tiền chuyển giữa người dùng, từ chuyển khoản đơn giản tới tương tác với hợp đồng thông minh.

- [ ] Thay đổi kích thước của khối

> ℹ️ Thử lại! Kích thước khối không phải thứ một giao dịch thay đổi được.

- [ ] Sửa dữ liệu blockchain cũ

> ℹ️ Thử lại! Dữ liệu blockchain cũ không thể thay đổi. Đó là đặc tính cốt lõi của blockchain.

- [ ] Tất cả các ý trên

> ℹ️ Thử lại! Chỉ một trong các ý trên là giao dịch blockchain hợp lệ.

# Địa chỉ người dùng

`Địa chỉ` là định danh công khai mà ai cũng tra được trên blockchain. Giống địa chỉ email, ai cũng gửi tiền tới đó được, nhưng chỉ người nắm `khóa riêng tư` mới mở và dùng được số tiền ở địa chỉ đó.

Trên Ethereum, địa chỉ luôn bắt đầu bằng \_0x\_\_\_\_\_\_\_\_\_\_ và dài 42 ký tự gồm chữ và số, được tạo ra từ `khóa công khai` của địa chỉ đó.

Khi xem một giao dịch trong trình khám phá khối, ta thấy địa chỉ From: và To:. Điều đó không cho biết *người* kiểm soát những địa chỉ ấy là ai, nhưng cho phép mọi người theo dõi dòng tiền mã hóa chảy qua sổ cái blockchain.

![](https://app.banklessacademy.com/images/blockchain-basics/user-addresses-57e130d9.svg)

# Knowledge Check 7

Điều gì đúng về địa chỉ blockchain?

- [ ] Chúng là định danh công khai của các thực thể trên blockchain

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Trên Ethereum, chúng luôn bắt đầu bằng *0x*

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Ai nắm khóa riêng tư thì dùng được tiền ở địa chỉ đó

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Địa chỉ là định danh công khai, bắt đầu bằng 0x trên Ethereum, và tiền ở đó được mở bằng khóa riêng tư.
