---
TITLE: Tìm hiểu các tiêu chuẩn token Ethereum
DESCRIPTION: Tìm hiểu cách các khuôn mẫu tài sản của Ethereum hỗ trợ cả loại tài sản truyền thống lẫn mới nổi.
LANGUAGE: Tiếng Việt
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
## **Những điểm chính**

> * Tiêu chuẩn `token` của Ethereum là bộ quy tắc và hàm định sẵn dùng để phát hành token trên Ethereum.
>
> * Ba tiêu chuẩn token Ethereum phổ biến nhất là `ERC-20`, `ERC-721` và `ERC-1155`.
>
> * Mỗi tiêu chuẩn cho phép mức `khả năng thay thế` khác nhau, nhờ đó tạo được cả tài sản on-chain thông thường lẫn tài sản độc nhất.
>
> * Tiêu chuẩn token giúp token dùng chung được trên khắp hệ sinh thái Ethereum, khiến dApp tích hợp token mới rất dễ, và khiến bạn tiếp cận chúng cũng rất dễ!

## Tiêu chuẩn token Ethereum là gì?

Hàng triệu token crypto khác nhau đang sống trên Ethereum và các mạng `Layer 2` của nó, mỗi loại có tính chất và công dụng riêng. Làm sao mạng lưới bảo đảm mọi dApp hỗ trợ được tất cả token đó mà lập trình viên không phải mất hàng giờ tích hợp từng token một? Làm sao người dùng nắm được tính chất chính của một token mà không phải đọc hàng giờ tài liệu?

Tiêu chuẩn token ra đời!

Những khuôn mẫu và bộ quy tắc này mang lại `khả năng tương tác` cho token trên khắp hệ sinh thái Ethereum. Nghĩa là dApp chỉ cần hỗ trợ vài tiêu chuẩn token chung thay vì hàng nghìn token riêng lẻ. Với Nhà thám hiểm như bạn, chỉ cần nhìn tiêu chuẩn gốc của một token là hiểu được những khả năng cơ bản của nó trên Ethereum.

Tiêu chuẩn token quy định:

* Cách viết mã cho hợp đồng thông minh của token.

* Bộ hàm chung mà mọi token thuộc loại đó phải hỗ trợ, để dApp nào cũng biết cách làm việc với nó.

Hiện nay, Ethereum có ba tiêu chuẩn token được dùng phổ biến:

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-eb8638eb.png)

1. **ERC-20**: Tiêu chuẩn cho token dễ trao đổi (hay có thể thay thế).

   ví dụ: token USDC và UNI.

2. **ERC-721**: Tiêu chuẩn cho token độc nhất (hay không thể thay thế), gọi là `NFT`.

   ví dụ: NFT Bored Ape Yacht Club.

3. **ERC-1155**: Tiêu chuẩn dùng cho cả token có thể thay thế lẫn không thể thay thế trong cùng một hợp đồng.

   ví dụ: vật phẩm bên trong một trò chơi điện tử web3.

Giờ hẳn bạn đang tự hỏi: “Khả năng thay thế chính xác là gì?”

Hãy nhìn khái niệm này từ kinh tế học truyền thống để hiểu vì sao nó quan trọng trong hệ sinh thái Ethereum.

## Có thể thay thế và không thể thay thế.

**“Khả năng thay thế”** là một tính chất của tài sản hay hàng hóa kinh tế, thể hiện qua hai đặc điểm chính:

* Khi tài sản được trao đổi, các đơn vị của nó hoán đổi cho nhau mà giá trị không đổi.

  (1 USD đổi được lấy 1 USD khác, hoặc bốn đồng 25¢, hoặc hai mươi đồng 5¢.)

* Khi tài sản được chia nhỏ, các phần nhỏ vẫn giữ đặc tính cơ bản.

  (1 USD chia thành bốn đồng 25¢ vẫn là phương tiện lưu trữ giá trị, vẫn dùng để mua hàng.)

Ví dụ về tài sản có thể thay thế: dầu mỏ, tiền pháp định, trái phiếu chính phủ và cổ phiếu công ty. Những tài sản không độc nhất này dễ trao đổi và dễ chia nhỏ.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-8e5e9468.png)

Ngược lại, **“không thể thay thế”** nghĩa là:

* Tài sản có những tính chất riêng khiến nó khác biệt với các tài sản cùng loại, tạo cho nó một giá trị riêng.

  (Một bức sơn dầu của Van Gogh được định giá khác một bức của họa sĩ đương đại mới nổi, vì hình thức, độ hiếm, trình độ và danh tiếng đứng sau bức tranh.)

* Việc chia nhỏ làm thay đổi đặc tính cơ bản của nó.

  (Một bức tranh cắt làm bốn có các phần chẳng giống nhau, mỗi phần có thể được định giá khác nhau. Ý đồ ban đầu của bức tranh cũng mất luôn.)

Vài ví dụ về tài sản không thể thay thế: bất động sản, tác phẩm nghệ thuật, danh tính số và chứng chỉ. Vì mang tính chất riêng, chúng khó trao đổi và khó chia nhỏ hơn.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-ebe8683a.png)

Nếu có lúc nào bạn phân vân về khả năng thay thế, hãy tự hỏi: “Trao đổi và chia nhỏ nó dễ đến mức nào?” Nếu khó, nhiều khả năng nó không thể thay thế!

Ethereum đặt mục tiêu trở thành “lớp quyết toán cho nền kinh tế thế giới”. Việc hỗ trợ cả tài sản có thể thay thế lẫn không thể thay thế mở ra cơ hội đưa các loại tài sản truyền thống lên on-chain, và tạo ra những loại hoàn toàn mới!

## Tiêu chuẩn và các hàm của token

Khi triển khai hợp đồng token mới trên Ethereum, người tạo tài sản sẽ chọn một trong các tiêu chuẩn token hiện có. Việc này gán cho token những tính chất ban đầu (gọi là hàm), như tổng nguồn cung của tài sản, token có chuyển sang ví khác được hay không, và nó lưu được thông tin gì.

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-242de5f5.png)

Ví dụ, ERC-20 dùng những hàm như sau:

**1\. totalSupply**: Xác định tổng nguồn cung của một token ERC-20.

Tổng nguồn cung của token cho biết nhiều điều quan trọng như giá trị và cách phân phối của nó.

**2\. balanceOf**: Kiểm tra số dư token của một địa chỉ cụ thể.

Hàm này giúp các dịch vụ và nền tảng kiểm tra số dư trong ví bạn trước khi thực hiện giao dịch bạn yêu cầu.

**3\. transfer**: Chuyển token từ địa chỉ của bạn sang các địa chỉ khác.

Mỗi lần bạn gửi một token crypto từ ví mình sang ví khác là bạn đang dùng hàm transfer.

**4\. approve**: Cho phép một địa chỉ (thường là hợp đồng thông minh) tự động giao dịch thay mặt ví bạn, tới một mức đã định.

Nhờ hàm này, bạn có thể phê duyệt cho một nền tảng hay dịch vụ tự động dùng một phần tiền đã định và thực hiện giao dịch.

**5\. allowance**: Dùng để biết một bên chi tiêu được phép giao dịch bao nhiêu từ một ví.

Nền tảng có thể dùng hàm này để kiểm tra tổng số tiền bạn đã cho phép và xem nó có thực hiện được giao dịch mà không cần bạn ký tay hay không.

Việc chuẩn hóa quy trình tạo token mang lại `khả năng kết hợp` cho hệ sinh thái Ethereum. Chẳng hạn, lập trình viên xây một [sàn giao dịch phi tập trung (DEX)](https://app.banklessacademy.com/lessons/decentralized-exchanges) có thể hỗ trợ mọi token theo chuẩn ERC-20, vì tất cả đều hoạt động giống nhau. Họ không phải viết riêng phần hỗ trợ cho từng token niêm yết.

Tương tự, người xây một chợ NFT chỉ cần làm cho nền tảng tuân thủ chuẩn ERC-721 và ERC-1155 là hỗ trợ được mọi NFT tạo ra trên Ethereum.

Giờ đã hiểu tiêu chuẩn token, khả năng thay thế và các hàm, hãy xem công dụng của ba tiêu chuẩn chính trên Ethereum.

### ERC-20: Token có thể thay thế

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-4708764e.png)

[ERC-20](https://eips.ethereum.org/EIPS/eip-20) là tiêu chuẩn token đặt ra quy tắc để tạo hợp đồng token có thể thay thế.

Token ERC-20 có thể là bất cứ thứ gì, từ một `memecoin` cho tới phương tiện thanh toán trong một chợ phi tập trung. Phần lớn chúng rơi vào một trong bốn nhóm sau:

**1\. Token tiện ích**: Phục vụ một công dụng cụ thể trong hệ sinh thái của ứng dụng hoặc nền tảng.

Ví dụ: Chainlink (LINK) dùng để trả cho các bên đưa dữ liệu đời thực, như giá thị trường, vào hợp đồng thông minh.

**2\. Token quản trị**: Cho người nắm giữ quyền biểu quyết trong các quyết định quản trị của nền tảng.

Ví dụ: người giữ Ethereum Name Service (ENS) được bỏ phiếu cho các đề xuất cập nhật giao thức đăng ký tên miền.

**3\. Stablecoin**: Được thiết kế để giữ giá trị ổn định, thường ngang với đô la Mỹ.

Ví dụ: Tether (USDT), USD Coin (USDC), và những cái tên mới hơn như USDS của Sky.

**4\. Token chứng khoán**: Đại diện cho quyền sở hữu một tài sản cơ sở, như cổ phiếu của một công ty.

Ví dụ: các quỹ đầu tư được token hóa, như những quỹ thị trường tiền tệ mà các nhà quản lý tài sản lớn bắt đầu phát hành on-chain vào năm 2024.

Một token có thể thuộc nhiều nhóm cùng lúc. Chẳng hạn, một token quản trị vẫn có thể có công dụng nhất định trong nền tảng.

Bạn dễ dàng [mua token ERC-20 trên một DEX](https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange) như Uniswap, hoặc trên một `sàn giao dịch tập trung` như Binance hay Coinbase.

### ERC-721: Token không thể thay thế

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-aa1af1d5.png)

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) là tiêu chuẩn đặt ra quy tắc để người dùng Ethereum tạo hoặc dùng token không thể thay thế. Nó bảo đảm mỗi NFT tạo ra là độc nhất và chứng minh được điều đó.

Token ERC-721 dùng vào những việc gì?

**1\. Quyền sở hữu tài sản**: Token ERC-721 được dùng rộng rãi để thể hiện quyền sở hữu các tài sản số và tài sản đời thực độc nhất. Ví dụ, bài Sổ tay Nhà thám hiểm này có 100 bản đánh số riêng để sở hữu, chứ không chỉ để đọc, như một cuốn sách trên kệ sách số của bạn. (Bạn `mint` và sở hữu nó bằng cách nhấn nút vàng “Collect Entry” ở phía trên.) “Datadisk Collectibles” của Bankless Academy cũng hoạt động như vậy.

**2\. Đăng ký và thành viên**: Nhà sáng tạo, nghệ sĩ, câu lạc bộ và doanh nghiệp đang dùng NFT cho gói đăng ký, vé sự kiện và tư cách thành viên. Vì tính độc nhất chứng minh được, mỗi bản trong nguồn cung cố định gắn với đúng một người dùng.

**3\. Phần thưởng khách hàng thân thiết**: Starbucks từng chạy chương trình Odyssey đến tháng 3 năm 2024, ở đó thành viên hoàn thành nhiệm vụ để nhận NFT rồi đổi lấy phần thưởng số và phần thưởng đời thực. Nhiều thương hiệu khác cũng tặng NFT làm phần thưởng thân thiết mà người dùng có thể đổi hoặc bán bất cứ lúc nào.

**4\. Danh tính và chứng chỉ**: Token ERC-721 dùng được để tạo danh tính và chứng chỉ chống giả mạo. Khi danh tính số hay bằng cấp của bạn là token ERC-721, bạn dễ dàng chứng minh quyền sở hữu, còn người khác gần như không thể làm giả và lạm dụng giấy tờ của bạn.

Để có một token ERC-721, hãy tạo tài khoản trên một chợ NFT như [OpenSea](https://opensea.io/) và mua bất kỳ NFT nào đang bán. Nhớ học bài [Bảo mật Web3](https://app.banklessacademy.com/lessons/web3-security) để tự bảo vệ trước các trò lừa trên chợ NFT.

### ERC-1155: Token có thể thay thế và không thể thay thế

![](https://app.banklessacademy.com/images/understanding-ethereum-token-standards/image-d804ad2f.png)

Thường được gọi là `tiêu chuẩn đa token`, [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) gộp ý tưởng của ERC-20 và ERC-721, cho phép lập trình viên viết hợp đồng hỗ trợ cả token có thể thay thế lẫn không thể thay thế. Điều này không thay đổi nhiều trải nghiệm người dùng nhưng giúp tối ưu tính năng của nền tảng. Ví dụ: phát hành cả đồng tiền trong game (có thể thay thế) lẫn vật phẩm trong game (không thể thay thế) dưới cùng một hợp đồng.

Tiêu chuẩn này còn cho phép tạo token bán thay thế: token vừa thay thế được vừa không, tùy hoàn cảnh. Ví dụ, trong một bộ thẻ bài sưu tầm, các thẻ cùng độ hiếm có thể thay thế cho nhau, còn thẻ khác độ hiếm thì không.

ERC-1155 cũng hỗ trợ giao dịch theo lô để gửi nhiều loại token cùng lúc, có thể giảm chi phí `gas` cho người dùng.

---

Xin chúc mừng bạn đã đọc hết bài dài này trong Sổ tay Nhà thám hiểm: “Tìm hiểu các tiêu chuẩn token”.

Đừng quên sưu tầm bài viết nếu bạn muốn sở hữu một bản để tra cứu trên đường đi, hoặc để ủng hộ nội dung tương lai của Bankless Academy. Thượng lộ bình an, Nhà thám hiểm!

---

## Hỏi đáp về tiêu chuẩn token Ethereum

### Tiêu chuẩn token Ethereum được tạo ra như thế nào?

Tiêu chuẩn token được đề xuất và công bố trên Ethereum qua quy trình mang tên Đề xuất Cải tiến Ethereum (EIP). Không có bỏ phiếu: đề xuất được mài giũa qua thảo luận công khai, và khi cộng đồng nhìn chung thấy nó chạy tốt, các biên tập viên chốt lại thành một tiêu chuẩn gọi là Ethereum Request for Comment (ERC). Số thứ tự của EIP được ghép vào để thành tên đầy đủ của tiêu chuẩn, ví dụ ERC-20 hay ERC-721.

### Ether (ETH) có theo tiêu chuẩn token nào không?

Không. Thực ra ETH được gọi là “coin” chứ không phải “token”, nghĩa là nó có [blockchain](https://app.banklessacademy.com/lessons/blockchain-basics) riêng.

### Ai cũng phát hành được token à?

Đúng vậy. Ethereum là hệ sinh thái không cần cấp phép và bất kỳ ai cũng phát hành được token có thể thay thế hoặc không thể thay thế. Tuy nhiên, bạn cần kiến thức kỹ thuật hoặc công cụ không cần viết mã.

### Nếu hai token trùng tên, làm sao biết đâu là token chính thức?

Để nhận ra token gốc, hãy kiểm tra địa chỉ hợp đồng đã phát hành token bạn muốn dùng và đối chiếu với tài liệu chính thức của dự án. Nhờ vậy bạn tránh tương tác với một hợp đồng token độc hại có thể rút cạn ví.

### Ngoài ERC-20, 721 và 1155, Ethereum còn tiêu chuẩn token nào khác không?

Có. Một số được dùng rộng rãi, như [ERC-4626](https://eips.ethereum.org/EIPS/eip-4626), tiêu chuẩn chung cho token `kho tiền` đại diện cho các khoản gửi sinh lợi suất trong DeFi. Những tiêu chuẩn mới hơn còn bao gồm `tài khoản thông minh`, cho phép một ví tự chạy mã của nó. Số khác, như [ERC-223](https://eips.ethereum.org/EIPS/eip-223), [ERC-1462](https://eips.ethereum.org/EIPS/eip-1462) và [ERC-1948](https://eips.ethereum.org/EIPS/eip-1948), chưa bao giờ phổ biến hoặc chỉ phục vụ những nhu cầu rất hẹp.

---

**Tác giả**

**[Musharraf](https://x.com/musharrafff)** là đồng sáng lập Unhashed. Anh hỗ trợ các dự án web3 về chiến lược nội dung và triển khai nội dung.

**[Tetranome](https://twitter.com/Tetranome)** là Project Champion tại Bankless Academy, tập trung vào trải nghiệm người dùng, giao diện, thiết kế và nội dung.

**Biên tập**

**[Trewkat](https://twitter.com/trewkat)** là cây bút và biên tập viên tại BanklessDAO. Cô quan tâm đến việc tìm hiểu crypto và NFT, đặc biệt là cách truyền đạt kiến thức này tốt nhất cho người khác.

**Nhà bảo trợ**

Bài viết không có tài trợ này là một phần trong chương trình giáo dục miễn phí của Bankless Academy. Hãy sưu tầm bài viết để ủng hộ nội dung tương lai!
