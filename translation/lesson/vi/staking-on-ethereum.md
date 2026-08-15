---
TITLE: Staking trên Ethereum
DESCRIPTION: Trở thành người bảo vệ Ethereum: giữ an toàn cho mạng lưới và nhận phần thưởng Ether.
LANGUAGE: Tiếng Việt
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/staking-on-ethereum
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

# Staking trên Ethereum

Chào mừng Nhà thám hiểm đến với bài học tiếp theo!

Hôm nay chúng ta tìm hiểu “staking”: một cách đơn giản để xây dựng tài sản số.

`Staking` khá giống `khai thác` trên mạng Bitcoin: cả hai đều là cơ chế cho phép người tham gia xử lý giao dịch trên blockchain để đổi lấy phần thưởng, và giữ cho mạng lưới của chúng ta luôn `phi tập trung`.

Tuy nhiên, giữa hai cách có một khác biệt quan trọng. Staking trên Ethereum không đòi hỏi máy tính mạnh để đua với người khác. Chỉ cần khóa Ether (ETH) vào một `hợp đồng thông minh` của mạng lưới là bạn đã giúp Ethereum vận hành và được thưởng.

![](https://app.banklessacademy.com/images/staking-on-ethereum/staking-on-ethereum-50472cf7.png)

# Ethereum cần bạn!

Hãy xem `staking` như một loại “trái phiếu internet”.

Giống như mua trái phiếu chính phủ mang lại lợi nhuận tài chính, ủng hộ Ethereum cũng mang lại phần thưởng! Hơn nữa, cũng như trái phiếu chính phủ, staking là cách thể hiện sự ủng hộ bằng tiền cho những giá trị và thế giới mà bạn muốn sống trong đó.

Khi bạn stake Ether, số Ether đó được gán cho một `node validator` đang xử lý giao dịch trên Ethereum. Càng nhiều Ether được stake, Ethereum càng có nhiều node. Càng nhiều node, Ethereum càng `phi tập trung` và an toàn.

Là một `staker`, bạn trở thành **người bảo vệ Ethereum!**

Giờ hãy đi sâu vào cơ chế staking và khám phá một cách bắt đầu nhẹ nhàng, chi phí thấp ngay hôm nay.

Chuẩn bị hành trang, lên đường thôi!

![](https://app.banklessacademy.com/images/staking-on-ethereum/ethereum-wants-you-fd40b9e5.png)

# Bảo mật blockchain

`Node validator` là chìa khóa cho một nền kinh tế an toàn và chính danh trên Ethereum. Chúng bảo vệ blockchain khỏi `gian lận`.

Gian lận trong thế giới blockchain là khi ai đó thao túng số dư hoặc tạo ra crypto không tồn tại. Cách Ethereum ngăn chặn là bảo đảm mọi giao dịch đều hợp lệ và không ai có quyền lực hơn người khác. Sự công bằng này, gọi là `tính trung lập đáng tin cậy`, rất quan trọng. Vì sao? Không ai muốn tham gia một nền kinh tế đầy dối trá và ngờ vực; sớm muộn nó cũng sụp đổ.

Trong một blockchain khỏe mạnh, các node validator cùng chung một mục tiêu: **đạt được đồng thuận phi tập trung trên toàn mạng lưới về trạng thái của blockchain.** Node quét các giao dịch, đối chiếu với lịch sử blockchain và bỏ phiếu về tính hợp lệ. Giao dịch được các node `đồng thuận` là hợp lệ sẽ được thêm vào blockchain.

![](https://app.banklessacademy.com/images/staking-on-ethereum/blockchain-security-7f2149fe.svg)

# Knowledge Check 1

Node validator ngăn gian lận trên Ethereum bằng cách nào?

- [ ] Áp đảo lẫn nhau.

> ℹ️ Thử lại! Các node không chi phối lẫn nhau. Chúng phối hợp để tác động lên blockchain.

- [ ] Tạo ra crypto không tồn tại cho một số người.

> ℹ️ Thử lại! Đó chính là hành vi gian lận.

- [x] Đạt đồng thuận phi tập trung về các giao dịch hợp lệ.

> ℹ️ Chính xác! Các node thống nhất với nhau về trạng thái của blockchain.

# Proof-of-Stake

Ai muốn chạy một `node validator` phải khóa ít nhất 32 ETH, và đó là số tiền lớn. (Từ năm 2025, một validator cũng có thể giữ số dư lớn hơn, và người stake có thể rút ra bất cứ lúc nào qua hàng đợi.) Đổi lại việc đặt cược tài chính lớn vào mạng lưới, `người vận hành node` được quyền đề xuất và rà soát các khối giao dịch trên Ethereum, đồng thời nhận phần thưởng. Hãy hình dung khối là những nhóm giao dịch được gửi lên mạng lưới.

`Cơ chế đồng thuận` của mạng lưới chọn ngẫu nhiên một node validator để đề xuất khối tiếp theo, và quyết định của nó được các node khác kiểm tra chéo để bảo đảm trung thực. Khi một node đề xuất khối thành công, `stake` của nó tăng lên.

![](https://app.banklessacademy.com/images/staking-on-ethereum/proof-of-stake-49c358ed.svg)

# Slashing

Khi một node gian lận có bằng chứng rõ ràng, ví dụ ký hai khối mâu thuẫn nhau, phần stake của nó `bị slash`: node mất một phần Ether. Chậm hoặc offline thì không phải `slashing`, chỉ chịu một khoản phạt nhỏ. Nhờ vậy, Ether đã stake trở thành khoản đặt cọc bảo đảm, khiến các node có động lực trung thực và giữ Ethereum chạy trơn tru.

Muốn phê duyệt một giao dịch gian lận trên Ethereum, kẻ tấn công phải kiểm soát phần lớn node validator, tức phần lớn Ether đã stake. May thay, điều đó khó xảy ra nếu người dùng bình thường cùng tham gia staking. Quyền sở hữu mạng lưới theo hướng `phi tập trung` chia nhỏ quyền ra quyết định.

![](https://app.banklessacademy.com/images/staking-on-ethereum/slashing-ccabe137.svg)

# Knowledge Check 2

Đúng hay Sai: Node validator bị bắt quả tang gian lận, như ký hai khối mâu thuẫn, sẽ mất một phần stake.

- [x] Đúng

> ℹ️ Chính xác! “Slashing” trừng phạt hành vi gian lận có bằng chứng. Offline chỉ chịu phạt nhẹ.

- [ ] Sai

> ℹ️ Thử lại! Gian lận có bằng chứng bị phạt bằng slashing. Chỉ chậm hoặc offline thì không.

# Xác thực giao dịch

Cùng đi qua từng bước để xem các node đạt đồng thuận bằng cơ chế `Proof-of-Stake` như thế nào:

1. **Staking**: `Người vận hành node` khóa 32 ETH trên mạng lưới và bắt đầu chạy một `node validator`.
2. **Dựng khối**: Người dùng gửi giao dịch, chúng được các `nhà xây dựng khối` sắp xếp thành `khối`.
3. **Chọn người đề xuất**: Một thuật toán chọn ra node validator sẽ đề xuất khối tiếp theo cho blockchain.
4. **Đề xuất khối**: `Nhà đề xuất khối` xem các khối tiềm năng, chọn một khối và cấp `chứng thực` nếu khối hợp lệ.
5. **Kiểm tra chéo**: Các validator khác kiểm tra lại khối và cấp chứng thực nếu hợp lệ. Khối không hợp lệ bị bỏ qua và không bao giờ vào chuỗi.
6. **Thêm khối**: Khối hợp lệ được thêm vào blockchain Ethereum.
7. **Phần thưởng**: Nhà đề xuất khối nhận `phần thưởng khối` và tiền tip từ giao dịch. Các validator khác cũng được thưởng.

[embed](https://app.banklessacademy.com/animation/validating-tx-with-ethereum-staking)

# Knowledge Check 3

Node validator chọn khối tiếp theo để thêm vào Ethereum được gọi là gì?

- [ ] Staker

> ℹ️ Thử lại! Staker hỗ trợ node validator, nhưng không tự vận hành node.

- [ ] Nhà xây dựng khối

> ℹ️ Thử lại! Họ sắp xếp giao dịch đến thành khối tiềm năng, nhưng không thêm khối vào blockchain.

- [x] Nhà đề xuất khối

> ℹ️ Chính xác! Nhà đề xuất khối xem các khối từ nhà xây dựng khối và chọn một khối để thêm vào blockchain.

# Kinh tế học của Ether

Khi cấp Ether cho một node validator, người stake nhận một phần phần thưởng của node đó.

Phần thưởng của node phụ thuộc nhiều yếu tố trong hệ sinh thái và có thể thay đổi. Nói gọn, đó là một phần phí giao dịch cộng với một lượng nhỏ Ether mới phát hành kèm theo khối mới.

Lợi suất hằng năm thay đổi theo thời gian, trong lịch sử ở mức vài phần trăm trên số Ether đã stake. Con số cụ thể dựa vào hai yếu tố chính:

- 📈 **Mức độ hoạt động của mạng lưới**: lưu lượng thấp thì phần thưởng thấp, lưu lượng cao thì phần thưởng cao.
- 👥 **Số lượng node validator**: càng nhiều người tham gia, phần thưởng càng bị chia nhỏ.

Lợi suất còn thay đổi tùy cách bạn stake Ether. Hãy xem các lựa chọn.

![](https://app.banklessacademy.com/images/staking-on-ethereum/ethernomics-33407ddc.svg)

# Các kiểu staking

Thông thường bạn cần khóa 32 ETH để chạy một `node validator`, nhưng những phương thức staking mới đã đưa việc bảo vệ Ethereum đến với tất cả mọi người.

Có ba cách để bảo vệ Ethereum:

- 📡 **Solo staking**: tự chạy một node validator.
- ⛲ **Pool staking**: tham gia một nhóm người stake và cùng chạy node.
- 🏦 **Staking trên sàn tập trung**: tham gia node của một “ngân hàng crypto”.

Mỗi cách đòi hỏi mức hiểu biết kỹ thuật khác nhau để thiết lập, kèm theo rủi ro riêng.

Nếu bạn thoải mái với việc tự giữ `khóa riêng tư` nhưng chưa có 32 ETH, hãy cân nhắc tham gia một pool staking cùng người khác.

Nếu bạn chưa sẵn sàng `tự lưu ký` crypto của mình, hãy xem staking trên sàn tập trung. Trong lúc đó, hãy học bài [Kiến thức cơ bản về ví](https://app.banklessacademy.com/lessons/wallet-basics) và mạnh dạn nắm quyền sở hữu crypto của bạn!

# Các kiểu staking (Phần 2)

![](https://app.banklessacademy.com/images/staking-on-ethereum/types-of-staking-part-2-9de268fd.svg)

**Solo staking**

🟡 Cần 32 ETH
🟡 Thiết lập kỹ thuật
🟢 Giúp Ethereum phi tập trung

**Rủi ro**: mất khóa, stake `bị slash`, phạt do offline.

![](https://app.banklessacademy.com/images/staking-on-ethereum/types-of-staking-part-2-96f11caf.svg)

**Pool staking**

🟢 Bao nhiêu ETH cũng được
🟢 Thiết lập dễ dàng
🟡 Có lựa chọn phi tập trung

**Rủi ro**: lỗi hợp đồng thông minh của pool, hoặc mất khóa.

![](https://app.banklessacademy.com/images/staking-on-ethereum/types-of-staking-part-2-27091ef5.svg)

**Staking trên sàn tập trung**

🟢 Bao nhiêu ETH cũng được
🟢 Thiết lập dễ dàng
🔴 Tập trung hóa Ethereum

**Rủi ro**: sàn phá sản có thể cuốn theo tiền của bạn.

# Tập trung hóa mạng lưới

**Bất kỳ hình thức staking nào dẫn đến nhiều node nằm dưới một tổ chức đều bắt đầu tập trung hóa Ethereum.**

Hãy hình dung Ethereum là một mạng lưới các `node validator` nối với nhau. Khi node dồn về một hoặc vài tổ chức, cả mạng lưới mất cân bằng và kém an toàn. Để tránh điều đó, chúng ta cần thật nhiều điểm kết nối độc lập.

Một tổ chức kiểm soát đủ nhiều node là điều tệ hại: khối giao dịch sẽ bị ép đi qua phần tập trung của mạng lưới. Tổ chức đó có thể duyệt các khối gian lận, hoặc từ chối khối hợp lệ, phá hủy `tính trung lập đáng tin cậy` của Ethereum.

Là người bảo vệ Ethereum, chúng ta phải ưu tiên những cách staking giữ mạng lưới cân bằng và `phi tập trung`.

Người mới sẽ gặp nhiều rào cản khi tự chạy node validator. Vậy hãy xem một lựa chọn thân thiện hơn: `pool staking`.

![](https://app.banklessacademy.com/images/staking-on-ethereum/network-centralization-0622ba07.svg)

# Knowledge Check 4

Điều gì xảy ra nếu một tổ chức kiểm soát phần lớn node validator?

- [x] Họ có thể duyệt khối chứa giao dịch gian lận.

> ℹ️ Chính xác! Ethereum sẽ mất đi tính trung lập đáng tin cậy.

- [ ] Họ sẽ giành quyền kiểm soát toàn bộ node validator.

> ℹ️ Thử lại! Không thể kiểm soát các node khác, nhưng có thể áp đảo tiếng nói của chúng.

- [ ] Ethereum sẽ ngừng xử lý giao dịch hoàn toàn.

> ℹ️ Thử lại! Ethereum vẫn chạy trong một cuộc tấn công như vậy, chỉ mất tính trung lập đáng tin cậy.

- [ ] Tất cả các ý trên.

> ℹ️ Thử lại! Chỉ một trong các đáp án trên là đúng.

# Pool staking

Điều hay nhất ở `pool staking` là chúng chạy hoàn toàn bằng `hợp đồng thông minh`. Bạn không cần gặp mặt hay tin tưởng những người stake khác. Nhưng bạn phải tin vào hợp đồng thông minh.

Pool staking do các `nhà cung cấp dịch vụ staking` tổ chức, những nền tảng số kết nối người stake khắp thế giới. Trong pool, một `người vận hành node` stake một phần của 32 ETH và chạy node, số Ether còn lại do người tham gia khác góp. Người vận hành node nhận thêm lợi suất cho dịch vụ đó.

Những người tham gia còn lại nhận “Liquid Staking Token” (LST) đại diện cho suất trong pool. Các `token` này tương ứng với một phần Ether đã stake. Người giữ LST hưởng phần thưởng tương ứng và có thể dùng chúng để rút stake bất cứ lúc nào.

Chỉ cần giữ một LST (như rETH của Rocket Pool), bạn đã sở hữu một phần pool staking. Đúng vậy, Ether của bạn đang giúp Ethereum phi tập trung hơn và sinh phần thưởng!

![](https://app.banklessacademy.com/images/staking-on-ethereum/staking-pools-46c96251.svg)

# Knowledge Check 5

Bên nào đứng ra tổ chức pool staking?

- [ ] Người vận hành node.

> ℹ️ Thử lại! Người vận hành node chạy node validator, nhưng không tổ chức pool.

- [ ] Những người tham gia stake còn lại.

> ℹ️ Thử lại! Người stake góp Ether, nhưng không vận hành pool.

- [x] Nhà cung cấp dịch vụ staking.

> ℹ️ Chính xác! Pool được vận hành qua hợp đồng thông minh của nhà cung cấp.

# Liquid Staking Token

Điều tuyệt nhất ở `LST` là ngay cả khi Ether của bạn đang được stake và sinh lợi suất, nó vẫn giữ được hình thái `có tính thanh khoản`.

“Thanh khoản” ở đây nghĩa là nó vẫn lưu thông được trong hệ sinh thái. Hãy hình dung bạn nắm một suất trong pool staking… nhưng dùng được nó như tiền! LST có thể đem hoán đổi, dùng làm tài sản thế chấp để vay, hoặc gửi vào các nền tảng `restaking`, một chiến lược tùy chọn đánh đổi rủi ro cao hơn lấy lợi suất cao hơn.

LST rất hay vì chúng mở cánh cửa tiếp cận Ether đã stake. Pool staking thường yêu cầu số tiền gửi tối thiểu (khoảng 0,01 ETH). Nhưng với LST, bạn có thể mua những phần Ether đã stake nhỏ hơn nhiều trên `sàn giao dịch phi tập trung` yêu thích.

# Lại chuyện tập trung hóa!

Pool staking và LST cũng vướng đúng vấn đề của các phương thức staking: **chúng hoạt động ở những mức độ tập trung và phi tập trung khác nhau.**

Các nhà cung cấp như Rocket Pool bảo đảm ai ở đâu cũng có thể làm `người vận hành node` của một pool. Điều này giúp người mới gom đủ 32 ETH và giúp Ethereum phi tập trung hơn. Nhưng nhà cung cấp khác chỉ cho một nhóm nhỏ quen biết chạy node, tạo rủi ro tập trung hóa Ether đã stake.

Nếu một tổ chức nắm trên 33% toàn bộ Ether đã stake, họ có thể gây rắc rối cho mạng lưới. Ở mức 50%, họ đe dọa nghiêm trọng `tính trung lập đáng tin cậy` của Ethereum.

Vài nhà cung cấp lớn đã tiến gần mốc 33%. Trải stake ra nhiều nhà cung cấp giúp mạng lưới an toàn.

Muốn bảo vệ Ethereum, chúng ta phải tìm hiểu kỹ. Ngay cả với `pool staking`, hãy chọn phương án ủng hộ sự phi tập trung.

![](https://app.banklessacademy.com/images/staking-on-ethereum/network-centralization-again-43bfd55b.svg)

# Knowledge Check 6

Đúng hay Sai: Hỗ trợ những người vận hành node mới giúp Ethereum phi tập trung hơn.

- [x] Đúng

> ℹ️ Chính xác! Càng nhiều người vận hành node thì càng nhiều node validator độc lập phát hiện gian lận.

- [ ] Sai

> ℹ️ Thử lại! Càng nhiều node độc lập thì càng tốt.

# rETH: con đường đến staking phi tập trung

Đã đến lúc trở thành người stake: một người bảo vệ Ethereum.
Trong nhiệm vụ hôm nay, chúng ta sẽ sở hữu một phần `pool staking` tại Rocket Pool.

🪙 Rất đơn giản: mint hoặc mua `liquid staking token` của Rocket Pool, **rETH**.

Là bước đầu tiên trên hành trình staking, bạn sẽ góp vốn cho một `node validator` xử lý các khối, đổi lại nhận phần thưởng bằng Ether.

**Lưu ý**: với rETH, phần thưởng staking được cộng vào giá trị của token. Hôm nay bạn giữ 1 rETH thì một năm sau vẫn là 1 rETH, chỉ có điều nó đáng giá hơn.

Chúc bạn may mắn, Nhà thám hiểm! Mong cam kết của bạn với tương lai phi tập trung của Ethereum được đền đáp xứng đáng.

![](https://app.banklessacademy.com/images/staking-on-ethereum/reth-your-path-to-decentralized-staking-a5172608.svg)
