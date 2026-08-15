---
TITLE: Blockchain Layer 1
DESCRIPTION: Hiểu cách blockchain Layer 1 hoạt động và biết được giới hạn của chúng!
LANGUAGE: Tiếng Việt
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

# Giới thiệu

Vấn đề xuất hiện khi số người muốn dùng một mạng `blockchain` vượt quá khả năng xử lý của nó. Nhu cầu lớn về `không gian khối` có thể chỉ là tạm thời, hoặc kéo dài chừng nào người dùng còn muốn dùng blockchain đó. Khi nhu cầu cao, người dùng đấu giá với nhau để giao dịch được xử lý nhanh, phí tăng lên và những ai ít vốn bị đẩy ra ngoài.

Bài học này giải thích vì sao Ethereum và các blockchain khác chịu tác động của `bộ ba bất khả thi của blockchain`, vì sao nó là gốc rễ của những vấn đề trên, và nó ảnh hưởng thế nào tới kế hoạch phục vụ mọi người dùng của Ethereum. Chúng ta sẽ xem các blockchain đã đánh đổi ra sao trong bộ ba này, và điều đó có ý nghĩa gì với Nhà thám hiểm.

![](https://app.banklessacademy.com/images/layer-1-blockchains/introduction-feee7790.svg)

# Bộ ba bất khả thi của blockchain

Như tên gọi **bộ ba** cho thấy, có ba đặc tính của blockchain cạnh tranh với nhau, khiến ta không thể tối ưu cả ba cùng lúc.

Ba đặc tính đó là: `bảo mật`, `khả năng mở rộng` và `sự phi tập trung`.

Để làm nền tảng trung lập cho một hệ thống tiền tệ quy mô toàn cầu, blockchain cần xuất sắc ở cả ba mặt. Một hệ thống tiền tệ cần an toàn trước gian lận, được bảo vệ khỏi kiểm duyệt nhờ sự phi tập trung, và đủ sức mở rộng để phục vụ hơn 8 tỷ người.

![](https://app.banklessacademy.com/images/layer-1-blockchains/blockchain-trilemma-9bd1b1e4.svg)

# Knowledge Check 1

Bộ ba bất khả thi của blockchain mô tả mối quan hệ giữa:

- [ ] Ethereum, Bitcoin và altcoin

> ℹ️ Thử lại! Bộ ba nói về các đặc tính cạnh tranh bên trong một blockchain, không phải các blockchain cạnh tranh nhau.

- [ ] bảo mật, kiểm duyệt và gian lận

> ℹ️ Thử lại! Bảo mật là một trong ba, nhưng kiểm duyệt và gian lận là mối đe dọa mà blockchain chống lại, không phải đặc tính của bộ ba.

- [x] sự phi tập trung, khả năng mở rộng và bảo mật

> ℹ️ Chính xác! Ba đặc tính này cạnh tranh với nhau, khiến một blockchain không thể tối ưu cả ba cùng lúc.

- [ ] bảo mật, tốc độ và phí thấp

> ℹ️ Thử lại! Tốc độ và phí thuộc về khả năng mở rộng, chỉ là một trong ba đặc tính: bảo mật, khả năng mở rộng và sự phi tập trung.

# Bảo mật và đồng thuận

Bảo mật là yêu cầu nền tảng nhất của một blockchain công khai. Các máy tính trong một mạng lưới phải thống nhất với nhau về những giao dịch đã thực sự diễn ra thì mới phối hợp được; sự thống nhất đó gọi là `đồng thuận`. Một blockchain là an toàn nếu kẻ tấn công không thể phá vỡ sự thống nhất này. Các thuật toán đồng thuận được thiết kế để chống lại những cuộc tấn công đó.

Các chuỗi như Bitcoin dùng đồng thuận `Proof of Work` bảo vệ sự thống nhất này bằng cách khiến việc tạo khối trở nên rất cạnh tranh: mỗi nhà sản xuất khối đua nhau giải một bài toán. Ai giải được đầu tiên thì giành quyền tạo khối tiếp theo và nhận `phần thưởng khối` đi kèm. Viết lại lịch sử gần đây của chuỗi đòi hỏi đầu tư khổng lồ vào sức tính toán và năng lượng, nên kẻ tấn công thường tốn nhiều hơn số thu được.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-consensus-4e857c50.svg)

# Knowledge Check 2

Đồng thuận blockchain trong tiền mã hóa là:

- [ ] Quá trình các node thống nhất về những gì đã diễn ra on-chain

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Quan trọng với cả hệ sinh thái của chuỗi để ngăn gian lận

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Được bảo vệ bằng các động lực kinh tế

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Đồng thuận là cách các node thống nhất về sự thật, và động lực kinh tế khiến tấn công tốn kém hơn phần thu được.

# Bảo mật và tấn công

Một dạng tấn công vào đồng thuận là `tấn công 51%`: kẻ nắm phần lớn sức mạnh đồng thuận của mạng lưới có thể đảo ngược giao dịch gần đây để tiêu cùng một khoản hai lần, hoặc kiểm duyệt giao dịch mới. Họ không thể giả mạo chữ ký hay tiêu tiền của người khác. Phần lớn ở đây là 51% sức tính toán trong Proof of Work và 51% lượng `stake` trong Proof of Stake, một khoản vốn khổng lồ. Trong Proof of Stake, gian lận có bằng chứng như ký hai khối mâu thuẫn sẽ bị hủy stake (gọi là `slashing`), nên kẻ tấn công thường mất nhiều hơn được.

Trong đồng thuận `Proof of Stake`, nhà sản xuất khối không được chọn qua cạnh tranh mà được chỉ định ngẫu nhiên. Giống Proof of Work, thuật toán đồng thuận đảm bảo không một thực thể nào có thể thường xuyên “giành” quyền tạo `khối` mới.

![](https://app.banklessacademy.com/images/layer-1-blockchains/security-and-attacks-a73febc0.svg)

# Knowledge Check 3

Mục tiêu cuối cùng của một cuộc tấn công 51% là:

- [ ] Phá rối hoạt động khai thác

> ℹ️ Thử lại! Cuộc tấn công nhắm vào chính sự đồng thuận: đảo ngược hoặc kiểm duyệt giao dịch, chứ không phá rối thợ đào.

- [x] Tiêu hai lần cùng một khoản coin hoặc kiểm duyệt giao dịch

> ℹ️ Chính xác! Nắm đa số sức mạnh đồng thuận cho phép kẻ tấn công đảo ngược giao dịch gần đây hoặc chặn giao dịch mới.

- [ ] Tạo ra một loại tiền mã hóa mới

> ℹ️ Thử lại! Ai cũng có thể tạo tiền mã hóa mới mà không cần tấn công một mạng lưới có sẵn.

- [ ] Loại bỏ 49% còn lại

> ℹ️ Thử lại! Những người tham gia khác không bị loại bỏ. Đa số được dùng để đảo ngược hoặc kiểm duyệt giao dịch.

# Khả năng mở rộng - Thông lượng

`Khả năng mở rộng` là khả năng xử lý nhanh nhiều giao dịch của một blockchain. Hai yếu tố quyết định điều này: thông lượng và tính chung cuộc.

1) `Thông lượng giao dịch`: blockchain xử lý được bao nhiêu giao dịch cùng lúc, thường đo bằng số giao dịch mỗi giây (`TPS`).

Hãy hình dung nhiều người chờ ở bến xe buýt, mỗi phút lại có thêm người tới, ai cũng muốn đi. Nhưng mỗi chuyến xe chỉ chở được một số người nhất định. Muốn giải tỏa bến nhanh hơn, bạn phải dùng xe lớn hơn (chở nhiều người hơn) hoặc cho xe chạy dày hơn (bớt thời gian chờ). Việc nhét nhiều giao dịch vào `không gian khối` ít ỏi của mỗi khối cũng vậy. Xem hình ảnh trực quan với dữ liệu thời gian thực tại [https://txstreet.com/v/eth-btc](https://txstreet.com/v/eth-btc).

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-throughput-d36672c5.svg)

# Knowledge Check 4

Điều nào đúng với hình ảnh bến xe buýt dành cho giao dịch blockchain?

- [ ] Người (giao dịch) được gom vào các chuyến xe (khối)

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Mỗi chuyến xe (khối) chỉ chứa được số người (giao dịch) nhất định

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [ ] Chở nhiều người (giao dịch) hơn cần xe (khối) lớn hơn hoặc nhiều hơn

> ℹ️ Thử lại! Điều này đúng, nhưng không phải câu đúng duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Giao dịch lấp đầy không gian khối có hạn giống như khách lấp đầy xe buýt. Muốn giải tỏa nhanh hơn thì cần khối lớn hơn hoặc dày hơn.

# Khả năng mở rộng - Tính chung cuộc

Yếu tố thứ hai của khả năng mở rộng là:

2) `Tính chung cuộc`: khi nào ta có thể yên tâm rằng một giao dịch sẽ không bị thay đổi hay đảo ngược?

Ở các chuỗi Proof of Work như Bitcoin, tính chung cuộc được đo bằng số khối: càng nhiều khối được thêm vào sau giao dịch của bạn, bạn càng chắc chắn nó không bị đảo ngược. Hãy nhớ rằng thuật toán đồng thuận an toàn khiến việc sửa các khối cũ rất tốn kém, và càng lùi xa thì càng tốn hơn. Bitcoin tạo một `khối` mới khoảng 10 phút một lần, nên chờ vài xác nhận mất khoảng một giờ. Proof of Stake của Ethereum đi hướng khác: các `validator` bỏ phiếu để chốt khối, và sau khoảng 13 phút (hai `epoch` bỏ phiếu) giao dịch trở thành chung cuộc.

![](https://app.banklessacademy.com/images/layer-1-blockchains/scalability-finality-73177220.svg)

# Phi tập trung phân tán quyền lực

`Sự phi tập trung` là trụ cột cuối cùng của bộ ba: chuyển quyền kiểm soát và quyền ra quyết định từ một thực thể duy nhất sang một mạng lưới phân tán gồm nhiều bên. Đây là nguyên tắc nền tảng giúp blockchain trở nên `không cần cấp phép` và `chống kiểm duyệt`: ai cũng dùng được blockchain phi tập trung, và ai cũng xây được phần mềm trên đó.

Các nền tảng tập trung như Facebook và Twitter có thể vô hiệu hóa tài khoản của bất kỳ ai, bất kỳ lúc nào. Nhiều streamer lớn trên Twitch hay TikTok đã bị gỡ khỏi nền tảng mà không có lý do. Kể cả khi khôi phục được tài khoản, quá trình đó rất dài và mệt mỏi. Thiếu sự phi tập trung, `sổ cái` blockchain chỉ là một bảng tính tài chính trên máy tính ngân hàng, và ngân hàng quyết định ai được mở tài khoản. Mạng lưới `không cần cấp phép` nghĩa là quyền lực đã đủ phân tán: không cách nào tước quyền truy cập của ai.

![](https://app.banklessacademy.com/images/layer-1-blockchains/decentralization-distributes-power-feafb05a.svg)

# Knowledge Check 5

Phát biểu nào KHÔNG đúng về sự phi tập trung?

- [ ] Sự phi tập trung giúp blockchain chống kiểm duyệt

> ℹ️ Thử lại! Phát biểu này đúng: không có thực thể kiểm soát duy nhất thì không ai kiểm duyệt được mạng lưới.

- [ ] Sự phi tập trung giúp blockchain không cần cấp phép

> ℹ️ Thử lại! Phát biểu này đúng: quyền lực phân tán nghĩa là không ai tước được quyền truy cập của người khác.

- [x] Sự phi tập trung giúp các thế lực độc tài giữ quyền kiểm soát

> ℹ️ Chính xác! Đây là điều KHÔNG đúng: sự phi tập trung làm ngược lại, nó tách quyền kiểm soát khỏi mọi thực thể đơn lẻ.

- [ ] Ai ở đâu cũng dùng được hệ thống không cần cấp phép

> ℹ️ Thử lại! Phát biểu này đúng: không cần cấp phép nghĩa là không ai bị từ chối truy cập.

# Có phi tập trung không?

Nhưng phi tập trung hay không thì không chỉ có câu trả lời có hoặc không. 10 thực thể kiểm soát đã là phi tập trung chưa? Còn 1.000 thì sao? Một triệu? Không có ngưỡng chuẩn nào cho “đủ phi tập trung”, nên hãy xem sự phi tập trung như một dải liên tục. Thay vì chỉ có trắng và đen, giữa hai đầu còn rất nhiều sắc xám.

Vì vậy ta nói một thứ “phi tập trung hơn hoặc kém hơn thứ khác”, thay vì “tập trung hay phi tập trung”. Một hệ thống tiền tệ trung lập cần mức độ phi tập trung cao để chống lại kiểm duyệt ở cấp nhà nước. Nhiều blockchain mới đánh đổi sự phi tập trung lấy khả năng mở rộng, nhưng như vậy họ dễ chịu sức ép từ xã hội và chính phủ y hệt các nền tảng tập trung, và có thể kiểm duyệt giống hệt mạng xã hội tập trung.

![](https://app.banklessacademy.com/images/layer-1-blockchains/is-it-decentralized-9cd381fb.svg)

# Knowledge Check 6

Các blockchain khác nhau có mức độ phi tập trung khác nhau.

- [x] Đúng

> ℹ️ Chính xác! Sự phi tập trung là một dải liên tục: mỗi blockchain tự chọn đánh đổi bao nhiêu để lấy khả năng mở rộng hay mục tiêu khác.

- [ ] Sai

> ℹ️ Thử lại! Sự phi tập trung là một dải liên tục, và mỗi blockchain tự chọn điểm đánh đổi của mình.

# Một vài ví dụ

Mỗi blockchain có cách tiếp cận riêng với bộ ba và tự chọn đánh đổi theo mục tiêu của mình. Bitcoin và Ethereum ưu tiên bảo mật và sự phi tập trung hơn khả năng mở rộng, dẫn tới `thời gian chung cuộc` dài ở Bitcoin và `không gian khối` hạn chế trên Ethereum. Khi nhu cầu dùng `hợp đồng thông minh` tăng vọt, nhất là với DeFi, phí Ethereum tăng theo: vào năm 2021, một giao dịch có thể tốn hàng chục đô la.

Phí tăng mở đường cho các `Layer 1 thay thế` như BNB Chain, vốn ưu tiên khả năng mở rộng hơn sự phi tập trung để có `thông lượng giao dịch` cao hơn và phí rẻ hơn. Các chuỗi thế hệ ba như Solana dùng phương pháp mới để giải bộ ba, nhưng mọi blockchain đều chịu những ràng buộc cơ bản này. Lựa chọn của mỗi chuỗi định hình hệ sinh thái của nó.

![](https://app.banklessacademy.com/images/layer-1-blockchains/some-examples-30020a8d.svg)

# Vậy có thể làm gì?

Nếu Ethereum đã ưu tiên bảo mật và sự phi tập trung ở mức cao, làm sao nó mở rộng được để phục vụ mọi người dùng như một mạng tài chính toàn cầu? Lộ trình Ethereum đã xét hai câu trả lời: `Layer 2` và `sharding`.

`Layer 2` tăng khả năng mở rộng cho Ethereum mà không hy sinh hai yếu tố còn lại của bộ ba. Đó là một lớp bổ sung nằm trên blockchain chính, dựa vào chuỗi chính để có bảo mật nhưng mang lại cho người dùng phí thấp hơn và giao dịch nhanh hơn. Chúng ta sẽ tìm hiểu kỹ hơn trong bài học Layer 2.

`Sharding` sẽ chia blockchain thành nhiều chuỗi song song, như mở thêm làn cho một con đường. Ethereum gác kế hoạch đó lại để chọn hướng đơn giản hơn: làm dữ liệu khối rẻ hơn cho Layer 2 (bổ sung năm 2024) và nâng dung lượng từng bước, không hy sinh bảo mật hay sự phi tập trung.

![](https://app.banklessacademy.com/images/layer-1-blockchains/so-what-can-be-done-043c43fb.svg)

# Knowledge Check 7

Layer 2:

- [ ] Tự cung cấp bảo mật cho chính mình

> ℹ️ Thử lại! Layer 2 dựa vào blockchain chính để có bảo mật.

- [x] Tăng khả năng mở rộng cho blockchain chính

> ℹ️ Chính xác! Layer 2 nằm trên chuỗi chính, thêm khả năng mở rộng mà không hy sinh bảo mật hay sự phi tập trung.

- [ ] Làm tăng phí cho người dùng

> ℹ️ Thử lại! Layer 2 làm điều ngược lại: người dùng được hưởng phí thấp hơn.

- [ ] Kéo dài thời gian chung cuộc cho người dùng

> ℹ️ Thử lại! Layer 2 mang lại giao dịch nhanh hơn, không phải chậm hơn.

# Tương lai của Ethereum

Mạng Ethereum liên tục cải thiện khả năng mở rộng mà không hy sinh các yếu tố còn lại của bộ ba. The Merge chuyển sang đồng thuận `Proof of Stake` (năm 2022) đã cắt hơn 99% năng lượng tiêu thụ, và dữ liệu khối giá rẻ cho Layer 2 đến vào năm 2024. **Mở rộng là công việc liên tục: mỗi bản nâng cấp giúp Ethereum nhanh và rẻ hơn, trong khi bảo mật và sự phi tập trung vẫn là nguyên tắc cốt lõi.** Ethereum Foundation có một trang rất hay về [lộ trình Ethereum](https://ethereum.org/roadmap/).

Song song đó, nhiều giao thức `Layer 2` xây trên Ethereum để đáp ứng nhu cầu người dùng mà không cần sửa chính giao thức Ethereum. Chúng dựa vào Layer 1 Ethereum để có bảo mật phi tập trung, còn chúng lo phần khả năng mở rộng: sự đa dạng của Layer 2 tạo nên một hệ sinh thái phi tập trung! Các `rollup` dẫn đầu gồm Arbitrum, OP Mainnet và Base; Polygon PoS là `sidechain` phổ biến với bảo mật riêng.

![](https://app.banklessacademy.com/images/layer-1-blockchains/the-future-of-ethereum-1f05c338.svg)

# Knowledge Check 8

Các bản nâng cấp của Ethereum bao gồm:

- [ ] Dùng Layer 2 và dữ liệu khối rẻ hơn để tăng khả năng mở rộng

> ℹ️ Thử lại! Đây là một phần của các bản nâng cấp, nhưng không phải phần duy nhất.

- [ ] Giữ sự phi tập trung và bảo mật làm nguyên tắc cốt lõi

> ℹ️ Thử lại! Đây là một phần của các bản nâng cấp, nhưng không phải phần duy nhất.

- [ ] Giảm tiêu thụ năng lượng nhờ đồng thuận Proof of Stake

> ℹ️ Thử lại! Đây là một phần của các bản nâng cấp, nhưng không phải phần duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Layer 2 và dữ liệu khối rẻ giúp mở rộng, Proof of Stake giảm năng lượng, còn bảo mật và sự phi tập trung vẫn là cốt lõi.

# Ý nghĩa với Nhà thám hiểm

Người dùng cần phí thấp để học và khám phá công nghệ với rào cản nhỏ và cái giá của sai lầm cũng nhỏ, nhất là khi mới bắt đầu hành trình. Blockchain Ethereum chưa hoàn hảo, nhưng các giá trị của nó khiến nó là một trong những ứng viên tốt nhất cho giấc mơ về một hệ thống tính toán tài chính toàn cầu. Nhà thám hiểm có thể học cách tương tác và dùng Ethereum mà không phải trả phí lớn: dùng Layer 2 cho bạn lợi ích bảo mật và phi tập trung của Ethereum cùng khả năng mở rộng cao hơn.

Bài học tiếp theo sẽ giải thích các giải pháp `Layer 2` và cách bắt đầu. Tiến lên, Nhà thám hiểm!
