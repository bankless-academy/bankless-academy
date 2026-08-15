---
TITLE: Nạp tiền vào ví trên Layer 2
DESCRIPTION: Tìm hiểu cách nạp tiền vào ví trên L2 qua CEX, các on-ramp bên thứ ba và cầu nối.
LANGUAGE: Tiếng Việt
WRITERS: HiroKennelly
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/funding-a-wallet-on-layer-2
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

> * Có nhiều cách nạp tiền vào ví trên một giải pháp mở rộng của Ethereum như Base, Optimism hay Arbitrum.
>
> * Các sàn giao dịch tập trung thường cung cấp `on-ramp` thẳng lên Layer 2.
>
> * Ứng dụng thanh toán của bên thứ ba cho phép nạp tiền vào ví trên Layer 2 từ tài khoản ngân hàng hoặc thẻ ghi nợ, thẻ tín dụng.
>
> * Cầu nối của giao thức cho phép gửi tiền từ `mạng chính Ethereum` sang Layer 2.

Nếu bạn mới bước vào crypto, mọi lời bàn về tầm quan trọng của `Layer 2` (hay L2) hẳn nghe hơi lạ, thậm chí khó hiểu. Khác với [Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains), thường chỉ [mạng chính Ethereum](https://ethereum.org/), Layer 2 là tên gọi cho một dạng giải pháp mở rộng của Ethereum, giúp người dùng thừa hưởng bảo mật của Ethereum nhưng trả phí giao dịch thấp và được đưa vào `khối` nhanh. Nếu bạn từng nghe tới [Optimism](https://www.optimism.io/), [Arbitrum](https://arbitrum.io/) hay [Base](https://www.base.org/), đó chính là các giải pháp mở rộng Layer 2. [Polygon](https://polygon.technology/) cũng hay được xếp chung nhóm (thực ra nó là một `sidechain`, nhưng ở đây ta không cần bận tâm).

Mọi giao dịch Ethereum đều trả một khoản phí gọi là `gas`. Gas được tính bằng `gwei`, một đơn vị rất nhỏ của ETH. Phí lên xuống theo nhu cầu: vào lúc cao điểm năm 2021, một lần `hoán đổi token` đơn giản trên mạng chính có thể tốn vài chục đô la, còn những đợt mint NFT được săn đón đẩy phí lên cao hơn nhiều. Ngày nay, một giao dịch mạng chính thông thường tốn chưa tới một đô la, và cũng hành động đó trên Layer 2 chỉ tốn vài xu hoặc ít hơn.

Vì giao dịch trên Layer 2 xác nhận nhanh và rẻ, nhiều giao thức sáng tạo nhất đang xây dựng trên L2. Tuy nhiên, nếu chưa ở trong hệ sinh thái đủ lâu, bạn khó biết phải bắt đầu dùng Layer 2 từ đâu. Nhưng có một điểm khởi đầu rõ ràng cho hành trình vào các giải pháp mở rộng Ethereum: nạp tiền vào `ví` trên Layer 2.

Có ba cách chính để nạp tiền vào ví L2: chuyển crypto từ một `sàn giao dịch tập trung` thẳng sang mạng Layer 2, dùng dịch vụ thanh toán crypto của bên thứ ba để nạp vào ví L2, hoặc gửi tài sản số từ mạng chính sang L2 qua một giao thức cầu nối.

> Xin lưu ý, bạn cần có sẵn một ví tiền mã hóa như [Zerion](https://zerion.io/), [MetaMask](https://metamask.io/) hay [Taho](https://taho.xyz/), cùng một `địa chỉ` ví Ethereum thì mới tiếp tục được. Nếu bạn chưa tạo `ví không lưu ký`, hãy [học bài này trước](https://app.banklessacademy.com/lessons/wallet-basics)!
>
> Khi đã có địa chỉ ví Ethereum không lưu ký, bạn sẵn sàng đi tiếp trên hành trình crypto của mình.

## Nạp tiền từ CEX

Nạp tiền vào ví thẳng từ một sàn giao dịch tập trung (CEX) có lẽ là cách đơn giản nhất để đưa tài sản số sang L2, nhất là khi bạn đã giữ tiền mã hóa trên sàn. Hầu hết các CEX lớn đều có tùy chọn này, dù không phải lúc nào cũng dễ thấy.

Ví dụ, trên [Coinbase](https://www.coinbase.com/), người dùng gửi tiền thẳng sang các mạng như Optimism, Polygon hay Base (Layer 2 của chính Coinbase) chỉ trong vài bước:

1\. Vào [Coinbase](https://www.coinbase.com/).

2\. [Mua](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency) hoặc giữ sẵn ETH trên Coinbase.

3\. Chọn “Send & Receive” (gửi và nhận) ở phía trên trang web.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. Nhập số tiền pháp định hoặc số ETH bạn muốn gửi (bạn chuyển qua lại giữa tiền pháp định và crypto ở bên phải ô số tiền), chọn “Pay with” (thanh toán bằng) rồi chọn Ethereum, và ở ô “To” (gửi tới), nhập địa chỉ ví sẽ nhận tiền. Chọn “Continue”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. Ở màn hình kế tiếp, chọn “Network” (mạng lưới) và đổi mạng từ Ethereum sang Optimism (danh sách này còn có các Layer 2 khác, như Base).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. Kiểm tra lại, nếu đúng thì chọn “Send Now”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

Hầu hết sàn lớn đều cho phép gửi crypto thẳng sang một L2. [Coinbase](https://www.coinbase.com/), [Binance](https://www.binance.com/) và [Kraken](https://www.kraken.com/) đều hỗ trợ rút về các Layer 2 lớn như Base, Optimism và Arbitrum. Mẹo nhỏ: luôn xem danh sách mạng rút tiền trên sàn để biết sàn hỗ trợ những L2 nào trước khi gửi.

## On-ramp của bên thứ ba

Một cách đơn giản khác để nạp tiền vào ví L2 là tận dụng dịch vụ đi thẳng lên L2 của nhiều công ty thanh toán crypto bên thứ ba. [MoonPay](https://www.moonpay.com/), [Ramp](https://ramp.network/buy/) và [Transak](https://global.transak.com/) là ba lựa chọn phổ biến nhất để nạp tiền vào ví crypto mà không cần dùng sàn tập trung.

Giống hầu hết các sàn, những `on-ramp` bên thứ ba này sẽ yêu cầu bạn cung cấp thông tin `định danh khách hàng`. Nhưng khi qua được các bước cơ bản đó, đây là cách dễ dàng để mua crypto trong hệ sinh thái và chuyển sang Layer 2.

Với MoonPay, các bước là:

1\. Vào [MoonPay](https://www.moonpay.com/).

2\. Chọn “Buy crypto” (mua crypto) ở phía trên hoặc giữa trang web.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. Nhập số tiền pháp định bạn muốn gửi và đơn vị tiền tương ứng.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. Chọn một tài sản số, ở đây là ETH. Gõ “ETH” và bạn sẽ thấy các mạng khác nhau có thể mua ETH (có thể phải cuộn xuống); chọn Layer 2 bạn muốn dùng. Nhấn “Continue”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. Tiếp theo, bạn sẽ được yêu cầu nhập thông tin xác minh cá nhân và dữ liệu thanh toán.

6\. Xong bước đó, hãy nhập địa chỉ ví Ethereum của bạn. Bạn sẽ được hỏi để xác nhận ví này an toàn.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. Hoàn tất, xác nhận thông tin chính xác, rồi chọn “Pay”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

Cũng như với CEX, hầu hết on-ramp lớn của bên thứ ba đều cho phép đi thẳng lên L2. Hãy tận dụng những tiến bộ này để tiết kiệm phí giao dịch và mở rộng phạm vi khám phá `blockchain` của bạn.

## Nạp tiền qua cầu nối

Nếu bạn đã có tiền trên `mạng chính Ethereum`, cách dễ nhất để đưa crypto lên L2 là dùng một giao thức cầu nối. Cầu nối là tên chúng ta đặt cho các giao thức giúp di chuyển tiền quanh thế giới crypto, và có khá nhiều cầu nối được thiết kế để chuyển crypto từ mạng chính Ethereum sang các Layer 2.

### Cầu nối gốc

Cầu nối gốc là cầu do chính các giao thức Layer 2 xây dựng. Trên một `Optimistic Rollup` như Arbitrum, Optimism hay Base, tiền gửi thường tới L2 trong vài phút, nhưng chuyển crypto ngược về mạng chính mất khoảng một tuần. [Cầu Arbitrum](https://bridge.arbitrum.io/) và [cầu Optimism](https://app.optimism.io/bridge/) đều hoạt động như vậy: khoảng thời gian chờ cho mạng lưới kịp phát hiện các lệnh rút không hợp lệ trước khi chúng được quyết toán.

### Cầu nối của bên thứ ba

Vì chẳng ai thích chờ, đã có nhiều dịch vụ cầu nối bên thứ ba giúp chuyển tiền tức thì tới và đi khỏi L2. Trong số phổ biến nhất có [Across Protocol](https://across.to/bridge) và [Relay](https://relay.link/bridge), còn [Bungee](https://bungee.exchange/) giúp bạn so sánh phí cầu nối giữa nhiều giao thức. Chẳng hạn, để dùng Across, bạn chỉ cần:

1\. Vào cầu [Across Protocol](https://across.to/bridge) và kết nối ví.

2\. Để chuyển tiền sang L2, chọn Ethereum ở mục “From” (từ).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. Chọn tài sản và số lượng bạn muốn chuyển (mẹo nhỏ: chỉ nên chuyển `coin` gốc của blockchain, ở đây là ETH).

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. Tiếp theo, chọn L2 của bạn ở mục “To”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. Kiểm tra lại giao dịch, nếu mọi thứ đều đúng thì chọn “Send”.

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

Chuyển tiền từ mạng chính sang L2 đơn giản đến vậy, và gần như mọi cầu nối đều hoạt động giống nhau. Chọn blockchain để gửi tiền đi, chọn đích đến như Base hay Optimism, chọn tài sản và số lượng, rồi bạn vượt qua khe nứt giữa các blockchain. Mẹo nhỏ: cũng như khi gửi từ CEX, bạn dùng [L2BEAT](https://l2beat.com/bridges/summary) để tìm cầu nối phù hợp với L2 mình muốn tới.

## Đường lên L2

Layer 2 cho người dùng ở mọi trình độ cơ hội thử nghiệm tài chính phi tập trung theo cách mà mạng chính thường khiến ta chùn bước. Vì giao dịch trên các mạng này chỉ tốn vài xu (bạn so sánh chi phí [tại đây](https://www.growthepie.com/)), đây là nơi tuyệt vời để làm quen với những viên gạch nền của tài chính phi tập trung, như hoán đổi, `pool thanh khoản` hay `yield farm`.

Dùng một CEX hoặc một cầu nối để chuyển tiền sang L2 là bước cần thiết trên hành trình từ người mới đến người thạo crypto. Nhớ rằng để thấy tiền hiển thị trong ví, có thể bạn phải thêm mạng lưới trong phần cài đặt của ví, việc này làm được tại [Chainlist](https://chainlist.org/). Nếu chỉ muốn kiểm tra tiền đã tới ví L2 an toàn chưa, hãy tra địa chỉ của bạn trên một `trình khám phá khối` như [Blockscan](https://blockscan.com/), công cụ tìm trên nhiều mạng cùng lúc, hoặc vào một DEX như [Uniswap](https://app.uniswap.org/), chọn mạng L2 và tài sản để xem số dư.

Khi nâng cấp kỹ năng, bạn sẽ cần tìm cách hạ thấp phí giao dịch. Học cách nạp tiền vào ví L2 là bước đầu tiên, còn những bước tiếp theo trên hành trình crypto là tùy ở bạn. Chào mừng Nhà thám hiểm, một thế giới mới đang đợi.

---

Lên đường thôi, Ethereum Layer 2 đang đợi! Chúng tôi hy vọng bạn thích bài viết này trong Sổ tay Nhà thám hiểm: “Nạp tiền vào ví trên Layer 2”.

Đừng quên sưu tầm bài viết nếu bạn muốn sở hữu một bản để tra cứu trên đường đi, hoặc để ủng hộ nội dung tương lai của Bankless Academy. Thượng lộ bình an, Nhà thám hiểm!

***

**Tác giả**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** là cây bút, biên tập viên và điều phối viên tại BanklessDAO, đồng thời là Tổng biên tập của Good Morning News. Anh cũng đang góp sức xây dựng một tổ chức chuyên về tài trợ tại DAOpunks.

**Biên tập**

**[Trewkat](https://twitter.com/trewkat)** là cây bút và biên tập viên tại BanklessDAO. Cô quan tâm đến việc tìm hiểu nhiều nhất có thể về crypto và NFT, đặc biệt là cách truyền đạt kiến thức này tốt nhất cho người khác.

**Nhà bảo trợ**

Bài viết này được tài trợ bởi **[Optimism](https://www.optimism.io/)**.
