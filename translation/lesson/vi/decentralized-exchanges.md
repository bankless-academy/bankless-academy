---
TITLE: Sàn giao dịch phi tập trung
DESCRIPTION: Khám phá cách các sàn chạy bằng hợp đồng thông minh cho phép hoán đổi token không cần cấp phép!
LANGUAGE: Tiếng Việt
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/decentralized-exchanges
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

# Sàn giao dịch phi tập trung là gì?

Sàn giao dịch phi tập trung (DEX) là chợ on-chain giúp Nhà thám hiểm trao đổi tiền mã hóa với người dùng khác mà vẫn tự lưu ký tiền trong ví. Các giao dịch ngang hàng này chạy qua hợp đồng thông minh công khai, nối người dùng với những kho token chung gọi là `pool thanh khoản`. DEX có mặt trên hầu hết mọi blockchain, cả Ethereum Layer 1 lẫn Layer 2.

Hoán đổi token là phần thiết yếu khi dùng `DeFi`. Ở đây có nhiều loại token và công dụng hơn bất kỳ sàn nào khác. Có người mua token để dùng sản phẩm on-chain, có người mua để đầu tư. Một số token cho chủ sở hữu quyền biểu quyết định hướng dự án, giống như nắm cổ phần công ty! Dù mục tiêu là gì, bạn sẽ ghé DEX thường xuyên trong DeFi.

Hãy cùng tìm hiểu cách chúng hoạt động và cách tận dụng chúng tốt nhất.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-a-decentralized-exchange-7eed6afb.svg)

# Sàn tập trung và sàn phi tập trung

Hãy xem công nghệ của sàn giao dịch tập trung (như Coinbase, Binance, Kraken) khác gì công nghệ của sàn giao dịch phi tập trung (như Uniswap, PancakeSwap).

Sàn tập trung (`CEX`) cho phép mua bán và đầu tư tiền mã hóa mà không cần chạm vào hệ sinh thái blockchain. Vì tài khoản đăng ký trên CEX, khóa riêng tư và tiền của bạn nằm trong tay họ: bạn chịu rủi ro từ cách họ quản lý, từ quy định và mô hình kinh doanh của họ.

Sàn phi tập trung (`DEX`) cho phép giao dịch tiền mã hóa hoàn toàn ở chế độ tự lưu ký, đúng mục đích ban đầu của blockchain. Mô hình ngang hàng để bạn vừa là người dùng vừa là nhà cung cấp, tiếp cận cơ hội tài chính trước đây chỉ dành cho giới tài chính. Hệ thống blockchain vừa minh bạch vừa chống kiểm duyệt: không ai đóng băng quyền truy cập hay đảo ngược giao dịch của bạn. Rủi ro bị hack vẫn còn, chúng ta sẽ bàn ở phần sau.

![](https://app.banklessacademy.com/images/decentralized-exchanges/centralized-and-decentralized-exchanges-f6f6324c.svg)

# Knowledge Check 1

Điều nào sau đây đúng về các sàn giao dịch tiền mã hóa?

- [ ] Không có đội ngũ nào đứng sau một DEX.

> ℹ️ DEX vẫn có đội phát triển, nhưng ảnh hưởng của họ lên dự án bị giới hạn.

- [ ] Cách duy nhất mất tiền trên CEX là do giao dịch sai.

> ℹ️ CEX cũng có rủi ro. Năm 2022, sàn FTX sụp đổ và gần như toàn bộ người dùng mất tiền gửi.

- [x] DEX cho phép giao dịch tự lưu ký, còn CEX thì không.

> ℹ️ Trừ khi được nêu rõ khác đi, CEX nắm giữ khóa riêng tư của bạn.

# Ứng dụng phi tập trung

DEX là một dạng `dApp`, tức ứng dụng phi tập trung chạy trên blockchain. Để được coi là “phi tập trung”, một ứng dụng internet phải cho bất kỳ ai dùng mà không phân biệt, xử lý tương tác mà không cần người khác can thiệp, và được viết bằng mã công khai minh bạch.

Dịch vụ dApp chạy bằng hợp đồng thông minh: những dòng mã nhận hành động on-chain của người dùng và trả về phản hồi on-chain đoán trước được. Ethereum Foundation ví hợp đồng thông minh với máy bán hàng tự động: bạn bấm số của món muốn mua, bỏ đủ tiền, rồi nhận đúng món đó mà không cần ai đứng ra hỗ trợ.

Hợp đồng thông minh của DEX xử lý nhiều lệnh khác nhau, như hoán đổi token, biểu quyết, hay thêm và rút `thanh khoản`.

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-99447b26.svg)

# Ứng dụng phi tập trung (tiếp theo)

DEX theo đúng logic của máy bán hàng tự động: nhận token bạn nạp vào và trả ra token bạn muốn. Vài ví dụ dApp khác:

🎟️ **dApp biểu quyết**: phân bổ phiếu bầu của người dùng cho một đối tượng cụ thể.

📦 **dApp cầu nối**: chuyển tiền mã hóa từ mạng blockchain này sang mạng khác.

🤝 **dApp cho vay/đi vay**: cấp khoản vay cho người dùng đáp ứng điều kiện đặt ra.

Hợp đồng thông minh là tài khoản trên Ethereum: chúng có địa chỉ và số dư, tự động hành động khi nhận được lệnh kèm chuyển khoản. Một DEX là tài khoản Ethereum đã lập trình sẵn với nhiều chức năng.

`dApp` thường dùng website làm giao diện để người dùng tương tác với hợp đồng thông minh bên dưới. Nếu website sập, người có kinh nghiệm vẫn gọi thẳng được hợp đồng thông minh!

![](https://app.banklessacademy.com/images/decentralized-exchanges/decentralized-applications-continued-728cfade.svg)

# Knowledge Check 2

Một dApp cần những tính chất nào để được coi là phi tập trung?

- [ ] Không cần cấp phép: mọi người dùng đều truy cập được.

> ℹ️ Đây là một tính chất của dApp, nhưng không phải tính chất duy nhất.

- [ ] Tự vận hành: tương tác không cần bên trung gian.

> ℹ️ Đây là một tính chất của dApp, nhưng không phải tính chất duy nhất.

- [ ] Minh bạch: mã của hợp đồng thông minh được công khai.

> ℹ️ Đây là một tính chất của dApp, nhưng không phải tính chất duy nhất.

- [x] Tất cả các ý trên.

> ℹ️ dApp trên Ethereum được đánh giá cao vì không cần cấp phép, tự vận hành và minh bạch.

# Nhà tạo lập thị trường tự động

Trên thị trường truyền thống và `CEX`, bên lưu ký dùng `sổ lệnh`: cơ sở dữ liệu chứa các lệnh mua và bán. CEX ghép lệnh của bạn với lệnh của người khác. Bạn thường bị thu hoa hồng cố định hoặc theo bậc, lại không rõ cách ghép lệnh kín đó có mang về mức giá tốt nhất hay không.

Phần lớn `DEX` dùng công nghệ “Nhà tạo lập thị trường tự động” (`AMM`), thiết kế phổ biến nhất cho hoán đổi token: hệ thống định giá giao dịch bằng thuật toán công khai. Một số DEX mới dùng sổ lệnh hoặc hệ thống dựa trên ý định. Vì thuật toán AMM là mã nguồn mở, ai cũng hiểu, sao chép và cải tiến được, tạo ra cạnh tranh lành mạnh và đổi mới liên tục.

AMM định tuyến giao dịch qua các `pool thanh khoản` thay vì ghép trực tiếp lệnh mua với lệnh bán. Những kho token chung này nhận vào và trả ra token theo từng tương tác, mọi bước đều hiện rõ trên blockchain công khai.

![](https://app.banklessacademy.com/images/decentralized-exchanges/automated-market-makers-78ad7439.svg)

# Knowledge Check 3

AMM có lợi thế gì so với sổ lệnh truyền thống?

- [ ] Giao dịch qua AMM nhanh hơn giao dịch qua sổ lệnh.

> ℹ️ Nếu tính cả thời gian mạng lưới xác nhận thì điều này không hẳn đúng.

- [ ] AMM nối bạn trực tiếp với người dùng bên kia.

> ℹ️ AMM định tuyến giao dịch qua các kho token chung gọi là pool thanh khoản, chứ không nối trực tiếp giữa hai người dùng.

- [x] Bạn phát hiện và ngăn được các bên tạo giao dịch một chiều.

> ℹ️ Nhờ AMM minh bạch, nền tảng khó che giấu hành vi xấu hơn nhiều, và người dùng cũng khó làm điều xấu!

# Hoán đổi token

Giao dịch tiền mã hóa trên blockchain gọi là `hoán đổi token`. Những lần tương tác hợp đồng thông minh này đổi đồng tiền này lấy đồng tiền khác qua `pool thanh khoản` của AMM. Bằng cách dựng `lộ trình giao dịch`, tức đường đi qua các pool phù hợp, hợp đồng thông minh của DEX đổi token bạn nạp vào lấy token bạn muốn. Vì mỗi pool thường chỉ giữ hai token và không phải `cặp token` nào cũng có pool, một lộ trình có thể đi qua vài pool.

Để hợp đồng thông minh chạm được vào ví, chúng ta cấp cho nó quyền rút tiền tới một mức nhất định (hoặc không giới hạn). Các `hạn mức token` này giúp hợp đồng đáng tin thực hiện giao dịch mà không cần khóa riêng tư. Cấp quyền tốn gas nên quyền thường để mở cho lần sau: một lý do nên giao dịch bằng ví này và cất giữ bằng ví khác. Bài [Quản lý hạn mức token](https://app.banklessacademy.com/lessons/managing-token-allowances) chỉ cách theo dõi và thu hồi!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-41ceb8e1.svg)

# Hoán đổi token (tiếp theo)

Hãy xem một ví dụ để hiểu quy trình cấp quyền và trao đổi: hoán đổi USDC sang OP trên Velodrome, một DEX lớn trên mạng Optimism. Giao dịch này thường đi qua hai pool, vì `pool thanh khoản` USDC/OP không tối ưu chi phí:

1. Trước tiên, bạn cấp cho hợp đồng thông minh Velodrome quyền rút USDC từ ví.
2. Bạn gửi yêu cầu giao dịch hoán đổi tới Velodrome.
3. Giao dịch được chấp nhận: Velodrome rút số USDC đã định từ ví bạn vào pool USDC/ETH. Lượng ETH tương ứng rời pool này và chuyển sang pool ETH/OP. Cuối cùng, OP đi từ pool thứ hai về địa chỉ ví của bạn.

Giao dịch hoán đổi hoàn tất. USDC của bạn đã đổi thành OP, thông qua ETH!

![](https://app.banklessacademy.com/images/decentralized-exchanges/token-swaps-continued-bad45a9b.svg)

# Knowledge Check 4

AMM có thể định tuyến một lệnh qua nhiều pool thanh khoản, tất cả trong một giao dịch duy nhất.

- [x] Đúng

> ℹ️ Chính xác! Bạn có thể trả phí mạng lưới cao hơn, nhưng các hành động được gộp vào một giao dịch.

- [ ] Sai

> ℹ️ Chưa đúng, hãy xem lại slide trước để hiểu vì sao.

# Thanh khoản là gì?

Thanh khoản trong crypto là khả năng của một thị trường trong việc mua và bán tài sản số ở mức giá hợp lý. Thanh khoản cao thì giá ổn định hơn; thanh khoản thấp thì giá biến động mạnh hơn. Vì người dùng thích giá công bằng, `DEX` luôn muốn thanh khoản cao ở mọi pool.

Thanh khoản cao nghĩa là pool chứa nhiều token, thường chia giá trị 50/50 giữa hai token mà người dùng ra vào. Ví dụ, pool USDC/ETH phục vụ mọi giao dịch của `cặp token` này trên nền tảng. Càng nhiều token thì mỗi lệnh càng ít làm lệch cán cân 50/50, nhờ đó giá ổn định hơn. Mức lệch mà một lệnh gây ra gọi là `tác động giá`.

Là Nhà thám hiểm, bạn muốn tác động giá thấp nhất có thể để có mức giá tốt nhất! Nghĩa là bạn muốn thanh khoản cao và cân bằng.

![](https://app.banklessacademy.com/images/decentralized-exchanges/what-is-liquidity-a88af170.svg)

# Nhà cung cấp thanh khoản

Tối ưu `thanh khoản` là yếu tố sống còn với một DEX, nhưng vì hệ sinh thái tiền mã hóa chỉ có chừng đó thanh khoản, các DEX phải cạnh tranh để hút về càng nhiều càng tốt. Vậy thanh khoản đến từ đâu?

Trong hệ sinh thái phi tập trung, công dân DeFi được khuyến khích cấp thanh khoản cho một pool để nâng TVL (tổng giá trị khóa) của nền tảng. Phí thu từ người giao dịch qua pool được chia cho các LP (nhà cung cấp thanh khoản) theo lượng thanh khoản họ góp. Đúng vậy: cho pool của DEX mượn token, bạn có thể tạo ra thu nhập thụ động.

Làm `LP` có nhiều điều phải cân nhắc, chúng ta sẽ bàn trong nội dung sau. Hiện tại, hãy nhớ những con số APR (lãi suất năm) lớn hiển thị trên các pool DEX không được đảm bảo, và bạn vẫn có thể lỗ.

![](https://app.banklessacademy.com/images/decentralized-exchanges/liquidity-providers-4f46eebb.svg)

# Knowledge Check 5

Hoàn thành câu sau: “Khi thanh khoản __________.”

- [ ] cao, biến động cao.

> ℹ️ Chưa đúng, hãy thử lại.

- [ ] thấp, biến động thấp.

> ℹ️ Chưa đúng, hãy thử lại.

- [x] thấp, biến động cao.

> ℹ️ Đúng rồi! Thanh khoản và biến động thường tỉ lệ nghịch với nhau.

# Knowledge Check 6

DEX khuyến khích người dùng cấp thanh khoản bằng cách nào?

- [ ] Bảo hiểm cho các khoản lỗ khi giao dịch.

> ℹ️ Cả CEX lẫn DEX đều không bảo vệ bạn khỏi thua lỗ do đầu tư sai.

- [x] Chia sẻ phí nền tảng và/hoặc token thưởng.

> ℹ️ Phí thu khi dùng DEX thường được chia cho nhiều bên liên quan, gồm cả LP. Một số nền tảng còn thưởng thêm.

- [ ] Quyền vào các pool thanh khoản riêng tư.

> ℹ️ Không có pool thanh khoản riêng tư; lưu lượng thấp khó mang lại lợi suất đủ tốt.

- [ ] Tất cả các ý trên.

> ℹ️ Ở đây chỉ có một đáp án đúng, bạn tìm ra chưa?

# Phí nền tảng

Cả CEX lẫn DEX đều thu phí dịch vụ, và tương tác với blockchain cũng không miễn phí. Dưới đây là năm loại chi phí cần cân nhắc khi chọn nền tảng.

🏷️ **Phí nền tảng**: CEX tự đặt mức hoa hồng giao dịch, còn phí pool của DEX thay đổi theo từng pool (thường là một phần nhỏ của 1%). Khác biệt then chốt: phí DEX hiện on-chain cho bất kỳ ai kiểm tra.

🌐 **Phí mạng lưới**: Blockchain thu phí gas bên cạnh giao dịch dApp. Bạn giảm được chi phí này bằng cách dùng mạng lưới vào giờ thấp điểm. Etherscan.io có công cụ ước tính gas theo thời gian thực cho mạng chính Ethereum: [Etherscan.io](https://etherscan.io/gastracker). Trên Layer 2, phí rẻ hơn rất nhiều; so sánh các mạng tại [growthepie](https://www.growthepie.com/).

📦 **Phí cầu nối**: Cả CEX lẫn cầu nối blockchain đều thu phí khi chuyển tiền mã hóa từ mạng blockchain này sang mạng khác. Với CEX, hãy xem thông tin trên trang của họ. dApp cầu nối hiện ước tính phí trước khi bạn xác nhận.

💹 **Tỷ giá**: Khi mua tiền mã hóa trực tiếp bằng tiền pháp định trên CEX hoặc DEX, hãy cảnh giác với tỷ giá không phản ánh giá thị trường.

🧊 **Trượt giá**: Giá chạy rất nhanh nên DEX chừa biên độ dao động cho mỗi lần hoán đổi: đó gọi là `trượt giá` (tùy chỉnh được, thường 0,5-2%). Bạn có thể mất tới mức đó trên một lệnh, nhưng đặt quá thấp thì lệnh dễ bị từ chối.

Luôn tự nghiên cứu trước khi giao dịch, để hiểu rõ chi phí và đánh đổi của một nền tảng.

# Ưu điểm của DEX

Chúng ta đã đi qua khá nhiều lý thuyết, nhưng có thể bạn vẫn tự hỏi DEX có hợp với mình không. Nhìn chung, bạn sẽ hưởng lợi từ sàn giao dịch phi tập trung nếu:

- 🔑 Bạn muốn tự nắm quyền sở hữu tài sản số của mình.
- 🔒 Bạn muốn giữ tài sản trên blockchain, tránh cảnh CEX sụp đổ.
- ⌛ Bạn muốn vào thị trường tiền mã hóa 24/7.
- 👛 Bạn muốn tiếp cận nhiều loại tiền mã hóa hơn.
- 🤑 Bạn quan tâm đến việc cấp thanh khoản.
- 🛂 Bạn không muốn đăng ký và `KYC` trên mọi nền tảng mình dùng.
- ⚔️ Bạn tìm kiếm rủi ro và phần thưởng lớn hơn của tài chính phi tập trung.

Dù vậy, gần như mọi người dùng DeFi đều có tài khoản trên sàn tập trung, vì CEX có cổng nạp/rút dễ dàng với hệ thống ngân hàng truyền thống: bạn chuyển tiền từ tài khoản ngân hàng lên blockchain và ngược lại rất nhanh. [Ryan Sean Adams](https://twitter.com/RyanSAdams) ví việc này với nhà vệ sinh công cộng: *“Vào, giải quyết xong, rồi đi ra.”*

Hay ở chỗ bạn có thể bắt đầu bằng tài khoản CEX rồi từ từ chuyển sang DeFi khi đã tự tin hơn.

# Rủi ro của DEX

Dùng DEX cũng có rủi ro. Dưới đây là vài rủi ro đáng kể nhất:

🐞 **Rủi ro hợp đồng thông minh**: Kiểm toán làm giảm khả năng có lỗi trong hợp đồng thông minh nhưng không xóa hết: năm 2025, một DEX lớn đã qua nhiều đơn vị kiểm toán vẫn mất 128 triệu USD vì một lỗi mã tinh vi. Xấu nhất, bạn có thể mất tới toàn bộ số tiền giao dịch. Hãy ưu tiên hợp đồng thông minh uy tín, được kiểm toán kỹ.

💰 **Rủi ro tự lưu ký**: Một mình chịu trách nhiệm về khóa riêng tư nghĩa là bạn có thể mất cả ví vì trộm cắp, lừa đảo hoặc thất lạc cụm từ khôi phục. Vì thế cần giảm rủi ro bằng chiến lược nhiều ví, và luôn sao lưu cụm từ khôi phục ở một nơi an toàn ngoài đời thực.

🥪 **Tấn công sandwich**: Đặt mức trượt giá cao làm tăng khả năng kẻ chạy trước lệnh phối hợp `tấn công sandwich` nhắm vào bạn. Trong một cú tấn công sandwich, bạn có thể mất tới đúng mức trượt giá đã đặt. Chúng ta sẽ bàn cách phòng tránh trong nội dung sau.

Cân nhắc cả ưu điểm lẫn rủi ro, một CEX có thể hợp với bạn hơn nếu:

- 🎓 Bạn còn mới với tiền mã hóa, đang tìm hiểu rủi ro và phần thưởng.
- ⚖️ Tần suất và khối lượng giao dịch của bạn nhỏ, khiến phí blockchain thành gánh nặng.
- 🏰 Bạn thích tin tưởng một sàn giữ tiền hộ hơn là tự chịu trách nhiệm.

Một số người chọn cách kết hợp để giảm rủi ro chung: dùng CEX để mua bán, còn lưu trữ trên chính blockchain.

# Knowledge Check 7

Vì sao bạn nên dùng sàn phi tập trung thay vì sàn tập trung?

- [ ] Bạn muốn mua token không niêm yết trên sàn tập trung.

> ℹ️ Đây là một ưu điểm của DEX, nhưng không phải ưu điểm duy nhất.

- [ ] Bạn muốn giữ toàn quyền sở hữu số tiền đã trao đổi.

> ℹ️ Đây là một ưu điểm của DEX, nhưng không phải ưu điểm duy nhất.

- [ ] Bạn muốn dùng công cụ và cơ hội thường không có sẵn.

> ℹ️ Đây là một ưu điểm của DEX, nhưng không phải ưu điểm duy nhất.

- [x] Tất cả các ý trên.

> ℹ️ Đúng rồi! DEX mang lại tất cả những lợi ích này so với CEX.

# Chọn một DEX

Trong DeFi có rất nhiều sàn giao dịch phi tập trung, và chất lượng không đồng đều. Hãy cân nhắc năm yếu tố sau khi chọn DEX:

🥇 **Uy tín**: Đơn vị này có được biết đến vì độ tin cậy, chất lượng và tuổi đời không?

⛲ **Thanh khoản**: `TVL` của pool có đủ cao để giảm tác động giá không?

🖱️ **Dễ dùng**: Giao diện có dễ thao tác không?

🔐 **Bảo mật**: Hợp đồng thông minh đã được nhiều đơn vị kiểm toán chưa?

🎁 **Phần thưởng và tính năng**: Có thưởng cho người dùng trung thành hoặc người cấp thanh khoản không? Bạn có được biểu quyết quản trị không?

Vài cái tên nổi bật ở các tiêu chí này gồm Uniswap, Curve, Velodrome và PancakeSwap. Bạn có thể chuyển từ DEX này sang DEX khác đến khi tìm được vài lựa chọn ưng ý! Cho nhiệm vụ của bài học, chúng ta sẽ dùng Velodrome, một DEX lâu năm trên mạng Optimism. Nó dễ dùng, và vì nằm trên Layer 2 nên phí hợp lý hơn hẳn!

# Thực hành tốt khi dùng DEX

Trước khi tương tác với một dApp, hãy theo vài thói quen sau để giữ an toàn cho tiền của bạn:

👩‍💻 Xác minh link của dApp qua tài khoản X (Twitter) chính thức của dự án (dấu tích vàng) hoặc một bên thứ ba đáng tin, rồi lưu vào bookmark. Nhiều vụ lừa đảo DeFi bắt đầu từ một link giả, kể cả trên công cụ tìm kiếm phổ biến.

🔓 Khi cấp `hạn mức token` on-chain, hãy giới hạn đúng bằng số tiền giao dịch. Nhiều DEX nay dùng phê duyệt bằng chữ ký, chỉ áp cho lần giao dịch đó: xem [Quản lý hạn mức token](https://app.banklessacademy.com/lessons/managing-token-allowances).

♟️ Đừng dùng ví HODL để vào dApp; hãy dành riêng một ví khác cho việc đó. Bài [Bảo mật Web3](https://app.banklessacademy.com/lessons/web3-security) trình bày các chiến lược ví.

Giờ thì bạn đã sẵn sàng tương tác với một sàn giao dịch phi tập trung!

![](https://app.banklessacademy.com/images/decentralized-exchanges/dex-best-practices-62cbc83b.svg)

# Knowledge Check 8

Làm sao để chắc chắn bạn đã chọn một DEX uy tín?

- [x] Kiểm tra danh tiếng và chỉ dùng URL từ nguồn đáng tin.

> ℹ️ Đúng rồi! Hãy tự kiểm chứng danh tiếng của DEX và chỉ theo các URL do bên đáng tin cung cấp.

- [ ] Thử một giao dịch nhỏ trong lần dùng đầu tiên.

> ℹ️ Chỉ một lần tương tác với hợp đồng thông minh xấu cũng có thể rút cạn cả ví.

- [ ] Cả hai ý trên.

> ℹ️ Chưa đúng. Chỉ một lần tương tác với hợp đồng thông minh xấu cũng có thể rút cạn cả ví.
