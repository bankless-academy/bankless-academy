---
TITLE: Quản lý hạn mức token
DESCRIPTION: Bảo vệ ví khỏi những tương tác không mong muốn với hợp đồng thông minh.
LANGUAGE: Tiếng Việt
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
## Những điểm chính

> * Hạn mức token là quyền cấp trước cho `hợp đồng thông minh` để tiêu token từ một ví mà không cần phê duyệt lại.
>
> * Kẻ xấu có thể lợi dụng chúng nếu người dùng không biết mình đã cấp những quyền đó.
>
> * Các công cụ như Revoke.cash giúp người dùng dễ dàng kiểm tra và thu hồi hạn mức token.

## Giới thiệu

DeFi trao cho người dùng quyền kiểm soát tài sản của mình, gồm cả `khóa riêng tư`, mang lại mức tự chủ và quyền lực chưa từng có với số tiền của họ. Nhưng quyền lực lớn đi kèm trách nhiệm lớn hơn: người dùng phải tự lo toàn bộ việc bảo vệ và quản lý tài sản.

Có bốn nhóm lừa đảo phổ biến mà người dùng DeFi nên biết:

* **Lộ cụm từ khôi phục**: kẻ tấn công tìm cách dụ người dùng tiết lộ cụm từ khôi phục, thứ mở cho chúng lối truy cập trái phép vào tiền. Có cụm từ khôi phục của bạn, kẻ tấn công có thể rút sạch tiền và tiếp tục làm vậy mỗi khi bạn nạp thêm vào ví. Đáng tiếc là không có cách nào khắc phục tình huống này, giải pháp duy nhất là tạo một ví hoàn toàn mới với `cụm từ khôi phục` mới.

* **Chuyển thẳng ETH**: kẻ lừa đảo có thể che giấu các lệnh chuyển ETH bằng cách ngụy trang chúng thành một lời gọi hàm, chẳng hạn “Security Update”. Phương thức ký thô đứng sau các phiên bản cũ của trò này đã bị gỡ khỏi MetaMask; các bộ công cụ phishing hiện đại chuyển sang lạm dụng những yêu cầu ký trông rất bình thường, trông chờ bạn ký mà không đọc nội dung ví hiển thị. Dính trò này thì bạn không lấy lại được tiền, nhưng vẫn có thể dùng ví an toàn cho các giao dịch khác.

* **Rao bán trên chợ NFT**: hãy cẩn thận với những tin rao giả và hợp đồng độc hại lợi dụng chính hạn mức bạn đã cấp cho các chợ như OpenSea. Kẻ lừa đảo có thể dụ bạn ký một thông điệp `off-chain` rao bán số `NFT` bạn đã phê duyệt, mà không hề có giao dịch token nào diễn ra.

* **Hạn mức token**: kẻ tấn công có thể thao túng quyền hạn để chạm tới nhiều tiền hơn mức bạn phê duyệt ban đầu. “Approvals” (phê duyệt) là các giao dịch on-chain cấp quyền truy cập token hoặc NFT của bạn. “Permits” cho cùng quyền đó nhưng chỉ cần một chữ ký off-chain không tốn gas. Uniswap và hầu hết ứng dụng giao dịch hiện đại dùng hệ thống này (gọi là Permit2). Chữ ký permit không xuất hiện dưới dạng phê duyệt on-chain cho tới khi được sử dụng, và có thể có hạn dùng; mục “Signatures” của Revoke.cash cho phép bạn kiểm tra và hủy chúng.

  Khi hợp đồng thông minh ngày càng phổ biến, `hạn mức token` trở nên cần thiết để các hợp đồng đáng tin cậy thực hiện giao dịch mà không phải lộ khóa riêng tư. Hạn mức token cho phép dApp tự động chuyển token trong ví thay mặt bạn. Sự tiện lợi này tăng hiệu quả, nhưng cũng mở ra những hướng tấn công qua lừa đảo và truy cập trái phép.

Trong bài này, chúng ta sẽ bàn về “hạn mức token” và làm quen với một công cụ cộng đồng được xây dựng để giúp bạn quản lý các quyền đã cấp.

## Hạn mức token: hiểu, quản lý và giữ an toàn

Hạn mức token là quyền được cấp trước cho hợp đồng thông minh để tiêu token từ một ví. Chúng giữ vai trò then chốt: giúp giao dịch diễn ra mà không phải xin phép lại mỗi lần chuyển tài sản trực tiếp từ ví. Nhưng khi bị lạm dụng, hạn mức token có thể trở thành hướng tấn công nhắm vào người thiếu cảnh giác. Để giảm rủi ro đó, người dùng DeFi cần thận trọng, tự trang bị kiến thức về bảo mật, và hiểu hạn mức token thực sự hoạt động ra sao.

Có hai bước khi bạn cấp quyền cho một hợp đồng bên thứ ba:

1. Kết nối ví: khi kết nối ví với một dApp, bạn chỉ chia sẻ `địa chỉ` ví với giao diện của nó, để nó hiển thị số dư và hoạt động của bạn. Bản thân việc kết nối không cấp quyền on-chain nào.

2. Phê duyệt token: để giao dịch với dApp, bạn phê duyệt cho hợp đồng thông minh của nó được chuyển những token cụ thể thay mặt bạn. Đây mới là bước trao quyền tiêu tiền thật sự.

Bằng cách chủ động quản lý hạn mức token, người dùng bảo đảm không hợp đồng nào rút khỏi ví nhiều hơn mức đã đặt ra ban đầu. May mắn là có những công cụ cộng đồng được xây dựng để người dùng DeFi thêm tự tin và an tâm.

## Hướng dẫn: sử dụng Revoke.cash

[Revoke.cash](https://revoke.cash/) giúp người dùng dễ dàng quản lý hạn mức token qua một trang web đơn giản, cho phép kiểm tra và theo dõi các hạn mức đã cấp cho từng dApp. Cùng xem cách dùng công cụ cộng đồng mạnh mẽ này để bảo vệ tài sản và giành lại quyền kiểm soát ví của bạn.

**1\. Kết nối ví**:

Để bắt đầu thu hồi hạn mức token, hãy vào [Revoke.cash](http://revoke.cash/) và nhấn “Connect Wallet” (kết nối ví) ở góc trên bên phải. Hoặc bạn có thể tự nhập địa chỉ công khai của ví vào ô tìm kiếm. Khi tải xong, bạn sẽ thấy danh sách toàn bộ `phê duyệt token` của mình trên mạng lưới đó.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f95ea594.png)

**2\. Kiểm tra các hạn mức**:

Sau khi kết nối ví, bạn có thể xem lại những phê duyệt hiện có. Bạn có thể sắp xếp, lọc hoặc tìm một phê duyệt cụ thể theo địa chỉ được cấp quyền tiêu. Sắp xếp theo “Newest to Oldest” (mới nhất trước) rất hữu ích nếu bạn nghi ngờ vừa có một phê duyệt độc hại. Hãy dùng các tùy chọn sắp xếp và lọc để có cái nhìn tổng quan về những hạn mức token bạn đã cấp. Hạn mức được cấp riêng theo từng chuỗi, nên hãy dùng ô chọn mạng lưới để lặp lại việc rà soát trên mỗi mạng bạn dùng.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-f3b00f4a.png)

**3\. Thu hồi các hạn mức không mong muốn**:

Khi đã xác định được những phê duyệt muốn gỡ bỏ, chỉ cần nhấn nút “Revoke” (thu hồi) bên cạnh từng mục. Nếu vẫn cần giữ phê duyệt cho sau này nhưng muốn giảm rủi ro, bạn có thể sửa mức đã phê duyệt sang con số khác bằng biểu tượng bút chì nằm cạnh số tiền đó.

![](https://app.banklessacademy.com/images/managing-token-allowances/image-138cb12e.png)

Bạn nên thu hồi hoặc điều chỉnh một hạn mức token khi:

1. Một hợp đồng thông minh mới triển khai bị khai thác và tạo ra lỗ hổng trong một `sàn giao dịch phi tập trung` bạn hay dùng.

   Vào tháng 4 năm 2023, `DEX` nổi tiếng SushiSwap dính một vụ khai thác tương tự, \~3,5 triệu USD bị lấy đi từ người dùng. Những ai chưa thu hồi hạn mức token vẫn còn nằm trong vùng rủi ro.

2. Một đề xuất quản trị độc hại cập nhật nhiều hợp đồng nhằm rút sạch tiền của người dùng.

   Hơn 2,5 triệu USD tài sản đã bị ảnh hưởng khi Atlantis Loans, một giao thức `DeFi` trên BNB chain, thực thi một đề xuất quản trị nhắm vào nhiều hợp đồng. Những người có quản lý hạn mức phê duyệt đã giảm được rủi ro bị đề xuất độc hại rút sạch ví.

## Đừng quên các ủy quyền

Kể từ bản nâng cấp Pectra của Ethereum (tháng 5 năm 2025), hạn mức không còn là loại quyền duy nhất đáng rà soát. Một tính năng ví mới (EIP-7702) cho phép ví của bạn ủy quyền cho đoạn mã bổ sung, mở ra những tiện ích như gộp nhiều giao dịch, nhưng cũng mở ra một chiêu rút tiền mới: chỉ một chữ ký độc hại có thể cài đoạn mã “sweeper” tự động chuyển ngay mọi khoản bạn nạp vào cho kẻ tấn công, mà cụm từ khôi phục của bạn không hề bị lộ. Năm 2025, các nhà nghiên cứu tại Wintermute phát hiện hơn 97% ủy quyền ví thời kỳ đầu đều trỏ tới cùng một đoạn mã sweeper.

Revoke.cash hiển thị các ủy quyền đang hoạt động ở tab “Delegations”, nhưng vì ủy quyền do ví của bạn kiểm soát chứ không phải do dApp, bạn phải gỡ ủy quyền không mong muốn ngay trong chính ví. Với MetaMask, mở phần chi tiết tài khoản và chuyển tài khoản về dạng tiêu chuẩn. Nếu bạn chưa từng chọn nâng cấp lên `tài khoản thông minh`, hãy coi mọi ủy quyền tìm thấy được là thù địch.

---

Đã đến lúc củng cố hàng phòng thủ cho ví! Chúng tôi hy vọng bạn thấy thú vị với mục này trong Cẩm nang Nhà thám hiểm: “Quản lý hạn mức token”.

Đừng quên sưu tầm mục này nếu bạn muốn giữ một bản để tra cứu trên hành trình, hoặc để ủng hộ nội dung tương lai của Bankless Academy. Thượng lộ bình an, Nhà thám hiểm!

---

## Câu hỏi thường gặp

### Khi nào tôi nên dùng Revoke.cash?

Hãy dùng Revoke.cash định kỳ, nhất là trong những giai đoạn bạn không tích cực sử dụng một dApp, đặc biệt với các chợ NFT. Giới hạn phê duyệt làm giảm nguy cơ mất tiền vì bị hack, khai thác lỗ hổng hay lừa đảo phishing. Sắp xếp các phê duyệt theo thứ tự mới nhất giúp bạn nhận ra phê duyệt đáng ngờ và thu hồi kịp thời, hạn chế thiệt hại lan rộng.

### Ngắt kết nối ví có bảo vệ tôi khỏi các vụ khai thác phê duyệt không?

Ngắt kết nối ví khỏi một dApp không bảo vệ bạn khỏi các vụ khai thác, dù liên quan tới phê duyệt hay không. Những phê duyệt token bạn đã cấp trước đó vẫn còn hiệu lực sau khi ngắt kết nối, vì chúng được lưu on-chain.

### Làm sao tránh các vụ khai thác hạn mức token và rủi ro tương tự?

Cách tiếp cận chủ động với hạn mức token gồm:

* chỉ cấp hạn mức cho những dApp đáng tin cậy.

* rà soát hạn mức token định kỳ.

* gỡ bỏ những hạn mức không cần thiết hoặc đáng ngờ.

* kiểm tra xem có ủy quyền ví nào bạn không nhận ra.

* theo dõi các cập nhật bảo mật của dApp.

Hãy cân nhắc dùng công cụ bên thứ ba như [tiện ích trình duyệt](https://revoke.cash) của Revoke.cash: đây là biện pháp phòng ngừa chủ động trước các mối đe dọa tiềm tàng. Tiện ích này cảnh báo khi bạn sắp ký thứ gì đó có thể gây hại, bảo vệ bạn khỏi lừa đảo phishing và các hoạt động độc hại khác.

### Revoke.cash có giúp tôi lấy lại tiền không?

Đáng tiếc là Revoke.cash không thể lấy lại tiền đã bị đánh cắp. Nó là công cụ phòng ngừa, giúp giảm khả năng bạn trở thành nạn nhân của các vụ khai thác phê duyệt. Tuy nhiên, thu hồi những phê duyệt đã bị dùng để lấy tiền có thể ngăn các vụ trộm tiếp theo.

### Vì sao ví của tôi cứ bị rút sạch mỗi lần nạp tiền?

Ví của bạn có thể đang dính “sweeper bot”, một đoạn mã canh chừng ví bị xâm phạm và chuyển nhanh mọi khoản nạp mới ra ngoài trước khi bạn kịp phản ứng. Một nguyên nhân là cụm từ khôi phục đã bị lộ. Khi đó, thu hồi phê duyệt không giúp được gì; hãy bỏ ví đó và tạo ví mới. Nhưng một ủy quyền ví độc hại cũng là nguyên nhân dễ xảy ra không kém: mã sweeper được cài qua một chữ ký bạn bị dụ ký, mà cụm từ khôi phục không hề rò rỉ. Hãy kiểm tra tab “Delegations” trên Revoke.cash. Nếu thấy ủy quyền nào bạn không nhận ra, hãy gỡ nó ngay trong ví (ví dụ qua phần chi tiết tài khoản của MetaMask). Nếu không có ủy quyền nào mà ví vẫn bị rút, hãy coi như cụm từ khôi phục đã bị lộ và chuyển sang ví mới.

---

**Tác giả**

**[Marcus](https://twitter.com/estmcmxci)** là người phát hành ENS DAO Newsletter. Anh nghiên cứu cách doanh thu thặng dư từ phí giao thức có thể hỗ trợ việc phát triển tầng ứng dụng và các hạ tầng mã nguồn mở khác.

**Biên tập viên**

**[Tetranome](https://twitter.com/Tetranome)** là Project Champion tại Bankless Academy, tập trung vào trải nghiệm người dùng, giao diện, thiết kế và nội dung.

**[Trewkat](https://twitter.com/trewkat)** là cây viết và biên tập viên tại BanklessDAO. Cô quan tâm tới việc tìm hiểu crypto và NFT, đặc biệt là cách truyền đạt kiến thức này tới người khác sao cho hiệu quả nhất.

**Nhà bảo trợ**

Bài viết không có tài trợ này là một phần trong chương trình học Bankless miễn phí của bạn. Hãy sưu tầm bài viết để ủng hộ nội dung trong tương lai!
