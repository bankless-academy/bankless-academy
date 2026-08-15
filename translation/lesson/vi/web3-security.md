---
TITLE: Bảo mật Web3
DESCRIPTION: Bảo vệ bản thân và chiếc ví của bạn khỏi những trò lừa đảo phổ biến nhất trong Web3.
LANGUAGE: Tiếng Việt
EDITORS: Claude (Anthropic AI, 2026 review)
WRITERS:
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/web3-security
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

Quyền sở hữu số là điểm mới của Web3. Nhờ blockchain, tiền mã hóa và NFT, Web3 trao lại quyền sở hữu và quyền lực cho người dùng. Việc tự sở hữu các sản phẩm tài chính số còn mới với nhiều người, và sự thiếu kinh nghiệm đó mở đường cho kẻ xấu lừa đảo và đánh cắp tài sản của người khác. Các trò lừa này hiệu quả vì phần lớn mọi người không biết chúng hoạt động ra sao.

Nhưng không chỉ Web3 mới có lừa đảo: các dịch vụ Web2 như email và mạng xã hội cũng đầy rẫy. Hơn nữa, nhiều công cụ Web3 vẫn gắn với dịch vụ Web2 như tài khoản ngân hàng hay sàn giao dịch tập trung, nên bảo vệ chúng cũng quan trọng. Xin chúc mừng Nhà thám hiểm của Academy, bạn đã dành thời gian trang bị kiến thức sẽ bảo vệ mình khi bước vào `Web3`!

Bài học này sẽ trình bày:

- Bảo mật Web2 và Web3.
- Những cách phổ biến nhất khiến người dùng mất tiền và cách phòng tránh.
- Một chiến lược chung để bảo vệ ví.
- Cách xử lý nếu bạn trở thành nạn nhân của một vụ lừa đảo.

# Tiền trong Web2

Trong Web2, các tổ chức giữ tiền thay cho người dùng. Bạn phải chứng minh danh tính với tổ chức đó mới truy cập và sử dụng được tiền của mình. Giống như tài khoản ngân hàng hay một `sàn giao dịch tập trung` (CEX): bạn cần tên đăng nhập và mật khẩu.

Kẻ lừa đảo cần đúng cặp tên đăng nhập và mật khẩu này mới chạm được vào tiền của bạn. Vì các tổ chức có trách nhiệm bảo vệ tiền của bạn, giao dịch gian lận có thể bị đảo ngược, giống như khi bạn khiếu nại một giao dịch thẻ tín dụng.

![](https://app.banklessacademy.com/images/web3-security/money-in-web2-7e1a5fd1.svg)

# Tiền trong Web3

Trong Web3, tiền vận hành khác hẳn. Nó giống một chiếc ví tiền mặt có khóa: đã tiêu là mất. `Cụm từ khôi phục` (bộ từ bí mật đặc biệt đó) mở ra `khóa riêng tư` của bạn, nên ai lấy được nó sẽ kiểm soát ví của bạn. ***Không bao giờ*** đưa nó cho bất kỳ ai, và đừng bao giờ lưu dưới dạng số: ảnh chụp và ứng dụng ghi chú đều có thể bị xâm nhập.

Nhưng cụm từ khôi phục không phải mục tiêu duy nhất: chỉ một chữ ký độc hại (một giao dịch hay thông điệp bạn phê duyệt) cũng đủ để kẻ lừa đảo rút sạch token mà không cần thấy cụm từ khôi phục. Hãy bảo vệ cả **cụm từ khôi phục** *lẫn* **chữ ký** của bạn.

![](https://app.banklessacademy.com/images/web3-security/money-in-web3-f575b0f6.svg)

# Knowledge Check 1

Đúng hay sai? Kẻ lừa đảo có thể rút sạch token trong ví của bạn bằng cách dụ bạn ký một giao dịch hoặc phê duyệt độc hại, mà không cần biết cụm từ khôi phục.

- [x] Đúng

> ℹ️ Chính xác! Một chữ ký hoặc phê duyệt token độc hại tự nó đã đủ để lấy đi tiền của bạn. Hãy bảo vệ thứ bạn ký cẩn thận như cụm từ khôi phục.

- [ ] Sai

> ℹ️ Thử lại! Cụm từ khôi phục không phải mục tiêu duy nhất: một phê duyệt hay chữ ký độc hại cũng có thể rút sạch token của bạn.

# Cất giữ cụm từ khôi phục an toàn

Có nhiều cách cất giữ cụm từ khôi phục an toàn, nhưng khởi đầu tốt là ghi ra vật liệu vật lý (giấy ép plastic hoặc tương tự) và để trong két chống nước, chống cháy tại nhà bạn. **Không** lưu `cụm từ khôi phục` dưới dạng ảnh hay bất kỳ dạng số nào, kể cả trong trình quản lý mật khẩu.

Những nơi không nên cất cụm từ khôi phục:

- Trong tủ hồ sơ
- Ứng dụng ghi chú trên máy
- Tại nơi làm việc
- Ảnh chụp lưu trên thiết bị

Dù cất ở đâu, hãy bảo đảm chỉ mình bạn tiếp cận được và nó được bảo vệ khỏi mất mát, hư hỏng. Không ai biết trước tương lai sẽ ra sao!

# Bảo vệ mật khẩu của bạn

Dùng và quản lý mật khẩu lành mạnh là một phần quan trọng khi khám phá internet mỗi ngày.

Mỗi dịch vụ Web2 bạn dùng nên có một mật khẩu riêng, kể cả email, sàn giao dịch tập trung và các tài khoản dịch vụ khác. Việc ai đó lấy được tên đăng nhập và mật khẩu của một tài khoản đã là rắc rối, nhưng sẽ tệ hơn nhiều nếu cặp đó mở được toàn bộ tài khoản của bạn!

Các ứng dụng `trình quản lý mật khẩu` như 1Password, Bitwarden và KeePass lưu trữ và mã hóa nhiều mật khẩu một cách an toàn; chúng còn tạo được mật khẩu mạnh mới và tự lưu lại. Bạn chỉ cần nhớ một mật khẩu chính duy nhất.

**Không** lưu `cụm từ khôi phục` Web3 trong trình quản lý mật khẩu: chỉ cần một lần lộ mật khẩu là toàn bộ tài sản Web3 của bạn bị lấy đi, và không ai lấy lại giúp bạn được.

# Knowledge Check 2

Vì sao trình quản lý mật khẩu lại hữu ích?

- [ ] Bạn chỉ cần nhớ một mật khẩu chính để dùng chúng.

> ℹ️ Thử lại! Điều này đúng, nhưng đó không phải lợi ích duy nhất.

- [ ] Chúng tạo và lưu mật khẩu mạnh, không trùng lặp.

> ℹ️ Thử lại! Điều này đúng, nhưng đó không phải lợi ích duy nhất.

- [ ] Chúng mã hóa mật khẩu để giữ an toàn.

> ℹ️ Thử lại! Điều này đúng, nhưng đó không phải lợi ích duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Trình quản lý mật khẩu tạo, mã hóa và lưu mật khẩu riêng cho từng tài khoản. Bạn chỉ cần nhớ mật khẩu chính.

# Xác thực hai yếu tố

`Xác thực hai yếu tố`, hay 2FA, là lớp bảo mật thứ hai của Web2.

Nhiều người bị hack tài khoản hoặc lộ thông tin đăng nhập dù mật khẩu rất mạnh. Các trang Web2 (và cả `trình quản lý mật khẩu`) thường hỗ trợ 2FA: một bằng chứng từ thiết bị hoặc ứng dụng khác, bên cạnh mật khẩu thường ngày.

Không phải 2FA nào cũng như nhau:

🥉 **Mã SMS** yếu nhất: kẻ lừa đảo dùng `social engineering` để “SIM-swap” số điện thoại của bạn sang máy chúng và nhận mã. Dù vậy, có SMS vẫn hơn không có 2FA.

🥈 **Ứng dụng xác thực** (như Google Authenticator, 2FAS hay Aegis) tạo mã ngay trên thiết bị của bạn, lựa chọn tốt cho hầu hết tài khoản.

🥇 **Passkey và khóa bảo mật phần cứng** (như YubiKey) là chuẩn vàng chống phishing: chúng gắn với đúng trang thật nên không đăng nhập trên trang giả.

![](https://app.banklessacademy.com/images/web3-security/two-factor-authentication-7fa9bfdf.svg)

# Knowledge Check 3

Vì sao xác thực hai yếu tố được khuyến nghị mạnh mẽ?

- [ ] Bật 2FA thì tài khoản không thể bị hack.

> ℹ️ Thử lại! 2FA cải thiện bảo mật rất nhiều, nhưng không cách nào khiến tài khoản bất khả xâm phạm. SIM-swap có thể vượt qua mã SMS.

- [x] Nó thêm một lớp bảo mật cho tài khoản Web2.

> ℹ️ Chính xác! 2FA đòi hỏi bằng chứng từ thiết bị hoặc ứng dụng khác ngoài mật khẩu, nên chỉ đánh cắp mật khẩu là chưa đủ.

- [ ] Nó làm mật khẩu trở nên mạnh hơn.

> ℹ️ Thử lại! 2FA không thay đổi mật khẩu của bạn. Nó thêm một lớp xác minh thứ hai bên trên mật khẩu.

- [ ] Tất cả các ý trên

> ℹ️ Thử lại! Chỉ một trong các phát biểu trên là đúng.

# Lừa đảo bằng social engineering

Ở cả Web2 lẫn Web3, kẻ lừa đảo dùng chiêu `phishing` để dụ người dùng giao mật khẩu, cụm từ khôi phục, hoặc ký một giao dịch độc hại. Chúng thường giả làm nhân viên hỗ trợ sản phẩm, “Xin chào, đây là bộ phận hỗ trợ MetaMask”, hoặc giả làm quản trị viên cộng đồng, “Đợt mint NFT mới, dành riêng cho cộng đồng ta”.

Chúng dùng `social engineering` để gây áp lực. Ví dụ:

- “Sắp hết giờ rồi!”, khiến bạn thấy vội vã.
- “Chúc mừng bạn đã trúng thưởng!”, tạo cảm giác đặc quyền.
- “Nhận quyền truy cập sớm đợt pre-mint!”, tạo `FOMO` cho nạn nhân.

![](https://app.banklessacademy.com/images/web3-security/social-engineering-scams-73c69132.svg)

# Nỗi sợ bỏ lỡ

`FOMO` viết tắt của “Fear Of Missing Out”, nỗi sợ bỏ lỡ: cảm giác căng thẳng rằng bạn sẽ mất một lợi ích hay cơ hội lớn nếu không hành động **ngay lập tức**.

Cách phòng vệ tốt nhất trước FOMO là rời khỏi máy tính và nghỉ một chút. Người ta không suy nghĩ sáng suốt khi căng thẳng, đó là lý do FOMO là công cụ lừa đảo hiệu quả đến vậy. Khi bước ra khỏi tình huống, bạn sẽ dễ nhận ra trò lừa hơn nhiều.

# Knowledge Check 4

Kẻ lừa đảo dùng social engineering như thế nào?

- [ ] Giả làm người có thẩm quyền trong cộng đồng.

> ℹ️ Thử lại! Đây là một chiêu, nhưng không phải chiêu duy nhất.

- [ ] Gây áp lực bằng thời hạn ngắn ngủi.

> ℹ️ Thử lại! Đây là một chiêu, nhưng không phải chiêu duy nhất.

- [ ] Tặng quà hay NFT miễn phí để tạo FOMO.

> ℹ️ Thử lại! Đây là một chiêu, nhưng không phải chiêu duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Kẻ lừa đảo mạo danh người có thẩm quyền, tạo áp lực thời gian và gây FOMO, tất cả để bạn không kịp suy nghĩ tỉnh táo.

# An toàn trên mạng xã hội

Kẻ lừa đảo rất thích tiếp cận trên mạng xã hội và trong máy chủ Discord của các dự án crypto, thường kéo câu chuyện sang tin nhắn riêng để tránh bị thành viên kỳ cựu phát hiện. Hãy trao đổi nơi công khai, ***không bao giờ*** đưa `cụm từ khôi phục` cho ai, và đừng ký gì từ liên kết gửi qua tin nhắn riêng.

`Dấu hiệu cảnh báo` trên mạng xã hội:

🚩 **Lỗi chính tả và ngữ pháp**: thiếu dấu, sai từ, câu như dịch máy.

🚩 **FOMO**: “Đừng bỏ lỡ!”

🚩 **Mạo danh**: quản trị viên, bộ phận hỗ trợ, Vitalik Buterin, Elon Musk...

🚩 **Hứa hẹn lợi nhuận chắc chắn**: trong crypto không có gì chắc chắn.

🚩 **Liên kết và lời mời không ai yêu cầu**, *nhất là trong tin nhắn riêng*.

![](https://app.banklessacademy.com/images/web3-security/social-media-safety-a76a39f4.svg)

# Thói quen tốt trên mạng xã hội

Những cách giữ an toàn:

✅ Nếu ai đó phải nhắn tin riêng để bán sản phẩm, có lẽ bạn không cần sản phẩm đó.

✅ Xem số người theo dõi và số thành viên của dự án, dù các con số này không bảo đảm dự án hợp pháp, chất lượng hay ổn định.

✅ Xác minh mọi thứ qua nguồn bên ngoài, ví dụ một tài khoản chính thức khác của dự án.

✅ Khi còn phân vân, hãy hỏi các thành viên uy tín trong cộng đồng lớn mà bạn tin tưởng, và hỏi công khai.

![](https://app.banklessacademy.com/images/web3-security/social-media-best-practices-48ad350f.svg)

# Token lừa đảo và đầu độc địa chỉ

Bỗng thấy token hay NFT lạ trong ví? `Token lừa đảo` được gửi cùng lúc tới hàng nghìn ví, chờ ai đó thử chuyển hoặc bán chúng để kích hoạt mã độc giấu trong hợp đồng thông minh của token, hoặc dụ nạn nhân vào trang `phishing` đòi `cụm từ khôi phục` hay một chữ ký độc hại. Cách xử lý tốt nhất: đừng tương tác gì cả, cứ để yên hoặc ẩn chúng trong ví.

Một chiêu liên quan là **đầu độc địa chỉ**: kẻ lừa đảo gửi những khoản siêu nhỏ từ một địa chỉ được tạo ra trông gần giống hệt địa chỉ bạn hay dùng, khớp cả ký tự đầu và cuối. Nếu sau đó bạn sao chép địa chỉ từ lịch sử giao dịch, bạn có thể lấy nhầm địa chỉ giả của chúng.

Cách tự bảo vệ:

- Đừng sao chép địa chỉ từ lịch sử giao dịch.
- Kiểm tra nhiều hơn vài ký tự đầu và cuối.
- Gửi một khoản thử nhỏ trước khi chuyển số tiền lớn.

![](https://app.banklessacademy.com/images/web3-security/scam-tokens-761d5f63.svg)

# Phê duyệt độc hại và ký mù

Ngày nay, phần lớn tiền bị mất không phải do lộ cụm từ khôi phục mà do chữ ký bị trao đi. Các bộ công cụ `phishing` kiểu “wallet drainer” đưa ra một giao dịch hoặc thông điệp trông rất bình thường, nhưng không hề bình thường:

- **Phê duyệt độc hại**: chỉ một giao dịch phê duyệt cũng có thể trao cho hợp đồng của kẻ lừa đảo `hạn mức token` không giới hạn để tiêu token hoặc NFT của bạn.
- **Phishing chữ ký**: các phê duyệt bằng chữ ký không tốn gas (như Permit2) có thể cho phép chuyển token mà không cần giao dịch nào.
- **Rút tiền qua ủy quyền**: một tính năng ví mới (EIP-7702) cho phép một chữ ký cài mã lên tài khoản của bạn; kẻ xấu lợi dụng để tự động quét sạch ví.

Ký thứ bạn không hiểu gọi là **ký mù**, và ngay cả dân chuyên nghiệp cũng dính: vào tháng 2 năm 2025, sàn Bybit mất khoảng 1,5 tỷ USD khi phê duyệt một giao dịch có phần hiển thị đã bị can thiệp.

Cách phòng vệ: chậm lại, đọc kỹ mọi yêu cầu ký, coi lời nhắc “xác minh ví của bạn” là thù địch, và dùng ví có mô phỏng giao dịch trước khi bạn ký.

# Knowledge Check 5

Bạn nhận được tin nhắn riêng: “Ví của bạn cần được chuyển đổi: kết nối tại metamask-upgrade.app và ký để xác minh tài sản.” Trang đó yêu cầu bạn ký một phê duyệt không tốn gas. Vấn đề ở đây là gì?

- [ ] Không có gì: chữ ký miễn phí và không chuyển được tiền.

> ℹ️ Thử lại! Chữ ký phê duyệt không tốn gas tự nó đã có thể cho phép chuyển token.

- [ ] Chỉ nguy hiểm nếu bạn còn nhập cả cụm từ khôi phục.

> ℹ️ Thử lại! Không cần cụm từ khôi phục. Bản thân chữ ký đã trao quyền tiêu token của bạn.

- [ ] An toàn thôi, vì đội hỗ trợ hay nhắn tin riêng cho người dùng.

> ℹ️ Thử lại! Đội hỗ trợ chính thống không bao giờ nhắn riêng trước. Đó là dấu hiệu cảnh báo kinh điển.

- [x] Đây là phishing chữ ký: chữ ký có thể rút sạch token.

> ℹ️ Chính xác! Tin nhắn riêng không mời mà đến, sự gấp gáp, URL nhái và yêu cầu ký: đây là một wallet drainer.

# Ví phần cứng

Như bài [Kiến thức cơ bản về ví](https://app.banklessacademy.com/lessons/wallet-basics) đã nói, `ví phần cứng` giữ `khóa riêng tư` trên một thiết bị chuyên dụng, tách khỏi máy tính nối mạng. Nhờ vậy tiền của bạn an toàn hơn nhiều: mã độc không đọc được khóa, còn kẻ trộm phải lấy được thiết bị và phá được nó. Vài lựa chọn phổ biến là Ledger, Trezor và Keystone. Luôn mua trực tiếp từ nhà sản xuất.

Bạn thậm chí có thể dùng ví phần cứng qua ví tiện ích trình duyệt như MetaMask, kết hợp sự tiện lợi với bảo mật phần cứng. Ledger có [hướng dẫn riêng](https://www.ledger.com/academy/security/the-safest-way-to-use-metamask) về cách thiết lập.

Một giới hạn: ví phần cứng ký bất cứ thứ gì bạn phê duyệt, nên ký mù một giao dịch độc hại vẫn khiến bạn mất tiền. Luôn kiểm tra chi tiết ngay trên màn hình thiết bị trước khi xác nhận.

![](https://app.banklessacademy.com/images/web3-security/hardware-wallets-22a096d4.svg)

# Knowledge Check 6

Đúng hay sai? Ví phần cứng chỉ giữ tiền của bạn an toàn nếu bạn kiểm tra từng giao dịch trước khi phê duyệt.

- [x] Đúng

> ℹ️ Chính xác! Ví phần cứng bảo vệ khóa của bạn, nhưng chỉ việc kiểm tra thứ bạn ký mới bảo vệ được tiền.

- [ ] Sai

> ℹ️ Thử lại! Ví phần cứng ký bất cứ thứ gì bạn phê duyệt. Ký mù vẫn có thể khiến ví bị rút sạch.

# Chiến lược dùng ví

Sau khi bổ sung ví phần cứng, một trong những cách tốt nhất để bảo vệ tiền là chia chúng ra nhiều `ví` khác nhau. Đây là chiến lược phân ngăn với ba ví riêng biệt:

1. **Ví xã hội**: một `ví nóng` chứa rất ít hoặc không có tiền, dùng để đăng nhập, mint và thử dApp mới. Hãy coi như mọi thứ trong đó đều có thể mất.
2. **Ví giao dịch**: một `ví nóng` để giao dịch và các hoạt động cần chuyển tiền gấp.
3. **Ví HODL**: một `ví phần cứng` để `HODL` dài hạn, tức số tiền bạn định giữ thật lâu. ***Không bao giờ*** dùng ví này để tương tác với hợp đồng thông minh hay trang web lạ.

👍 **Ưu điểm**: việc tách biệt bảo đảm một vụ lừa đảo chỉ đe dọa số tiền trong *chính chiếc ví đó*, chứ không phải *toàn bộ*.

👎 **Nhược điểm**: theo dõi phức tạp hơn, nhưng nhiều ứng dụng ví cho phép bạn đặt tên cho từng ví.

![](https://app.banklessacademy.com/images/web3-security/wallet-strategies-2b743061.svg)

# Knowledge Check 7

Chúng tôi khuyên bạn nên giữ tiền _______________ để tăng mức bảo mật.

- [ ] lưu trong nhiều đợt airdrop

> ℹ️ Thử lại! Airdrop là hoạt động phát token miễn phí, không phải nơi cất tiền.

- [ ] khóa trong nhiều NFT

> ℹ️ Thử lại! NFT bản thân là tài sản, không phải chiến lược bảo mật cho tiền của bạn.

- [x] tách riêng trong nhiều ví

> ℹ️ Chính xác! Chia tiền ra các ví riêng biệt nghĩa là một vụ lừa đảo chỉ đe dọa số tiền trong chính chiếc ví đó.

- [ ] ở dạng thanh khoản trên nhiều địa chỉ

> ℹ️ Thử lại! Vấn đề không nằm ở thanh khoản. Tách tiền giữa các ví riêng biệt mới là điều giới hạn thiệt hại.

# Khắc phục sau khi bị lừa trong Web2

Hy vọng bạn chưa từng là nạn nhân của kẻ lừa đảo. Nếu đã từng, có vài bước bạn nên làm để bảo vệ lại tài khoản của mình.

Với vụ lừa đảo liên quan đến dịch vụ Web2 như Gmail hay Discord, bạn nên:

- Đổi mật khẩu của tài khoản bị ảnh hưởng.
- Dùng nút “đăng xuất khỏi mọi thiết bị khác” nếu có, để đá kẻ lừa đảo ra khỏi tài khoản.
- Bật `2FA`: tốt nhất là passkey hoặc khóa bảo mật phần cứng, nếu không thì ứng dụng xác thực.
- Báo vụ lừa đảo cho dịch vụ liên quan.
- Bảo đảm tài khoản email của bạn cũng an toàn.
- Trao đổi về vụ việc với bạn bè hoặc thành viên cộng đồng đáng tin cậy.

# Khắc phục sau khi bị lừa trong Web3

Trên Ethereum, hợp đồng phải được cấp quyền rõ ràng mới tiêu được token. `Hạn mức` token là số lượng bạn cho phép một hợp đồng cụ thể tiêu. Giữ hạn mức ở mức thấp giúp giảm rủi ro cho tài sản.

Web3 không có ai đứng đầu các giao thức để bạn báo cáo kẻ lừa đảo, nhưng bạn vẫn có thể hành động:

- Chuyển ngay số tiền còn lại trong ví bị xâm phạm sang một địa chỉ ví khác, **hãy chắc chắn địa chỉ mới dùng cụm từ khôi phục khác**.
- Xem lại và thu hồi `hạn mức` token bằng [revoke.cash](https://revoke.cash) (hỗ trợ nhiều mạng lưới) hoặc [etherscan.io/tokenapprovalchecker](https://etherscan.io/tokenapprovalchecker). Việc thu hồi tốn phí gas; revoke.cash có [hướng dẫn từng bước](https://revoke.cash/learn/approvals/how-to-revoke-token-approvals).
- Kiểm tra thêm tab “Delegations” trên revoke.cash xem có ủy quyền ví nào bạn không nhận ra, rồi gỡ nó ngay trong ứng dụng ví.
- Về sau hãy dùng `ví phần cứng`, và kiểm tra mọi thứ bạn ký.
- Cảnh báo người khác bằng cách báo vụ lừa đảo cho cộng đồng bị ảnh hưởng.
- Trao đổi về cách thức vụ lừa đảo với bạn bè hoặc thành viên cộng đồng đáng tin cậy để cùng bảo vệ nhau về sau.
