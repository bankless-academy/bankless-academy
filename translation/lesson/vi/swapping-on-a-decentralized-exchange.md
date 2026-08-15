---
TITLE: Hoán đổi trên sàn giao dịch phi tập trung
DESCRIPTION: Bắt đầu hành trình DeFi với hướng dẫn sử dụng sàn giao dịch phi tập trung này.
LANGUAGE: Tiếng Việt
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/swapping-on-a-decentralized-exchange
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

> * Sàn giao dịch phi tập trung là một loại dApp cho phép hoán đổi token theo kiểu tự lưu ký.
>
> * Cần một chút kiến thức thực hành để tương tác tự tin với một DEX.
>
> * Chúng ta có thể dùng trình khám phá khối để xem lại các giao dịch on-chain của mình.

Sàn giao dịch phi tập trung (DEX) là ứng dụng được dùng nhiều nhất trong thế giới `tài chính phi tập trung` (DeFi), và điều đó có lý do! DEX cho phép tự động hoán đổi token tiền mã hóa này lấy token khác, không cần bên trung gian. Khác với sàn giao dịch tập trung (CEX), kiểu hoán đổi này còn cho phép người dùng giao dịch mà vẫn giữ trọn quyền sở hữu tài sản.

Tính tự chủ và các giao thức không cần cấp phép là xương sống của DeFi. Chúng trao cho người dùng DeFi quyền sở hữu thật sự với tài sản số, và mở lối vào các dịch vụ blockchain nền tảng suốt 24/7. Bất kỳ ai có kết nối internet đều tiếp cận được DeFi, bất kể xuất thân, niềm tin hay vị trí địa lý.

Trong mục cẩm nang này, chúng ta sẽ tìm hiểu cách dùng ví tự lưu ký để tương tác với một DEX, với mục tiêu hoán đổi token này lấy token khác. Bạn có thể tìm hiểu thêm về cơ chế, đặc tính và hồ sơ rủi ro của công nghệ này, cũng như so sánh với CEX, trong bài học [Sàn giao dịch phi tập trung](https://app.banklessacademy.com/lessons/decentralized-exchanges).

## Chọn một DEX

Chọn một nền tảng chi phí hợp lý và an toàn là bước đầu tiên khi hoán đổi token. Trong hướng dẫn này, chúng ta sẽ dùng Velodrome, một DEX lâu năm trên mạng Optimism. Khi đã tự tin hơn trong việc đi lại giữa các blockchain, bạn sẽ biết cách đánh giá các sàn khác và tìm ra nơi phù hợp nhất với mình. Bài học [Sàn giao dịch phi tập trung](https://app.banklessacademy.com/lessons/decentralized-exchanges) có danh sách đầy đủ những đặc tính cần lưu ý.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-a5b39b1d.png)

DEX là điểm khởi đầu tuyệt vời cho hành trình Web3 của bạn, vì hầu hết dApp đều có bố cục giao diện tương tự DEX và tương tác với ví tự lưu ký theo cách giống nhau.

Bắt đầu hoán đổi token thôi.

## Thực hiện một lần hoán đổi token

**1\. Mở dApp**:

Mở [Velodrome](https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042) trong một tab trình duyệt mới.

**2\. Kết nối ví**:

Dùng nút “Connect” (kết nối) quen thuộc, thường nằm ở góc trên bên phải của mọi dApp.

Nếu dùng máy tính, hãy kết nối bằng ví trình duyệt.

Nếu dùng điện thoại, một hộp thoại kết nối ví sẽ giúp bạn liên kết ví di động với dApp.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-1d7c44d3.png)

**3\. Chấp nhận kết nối**:

Chọn “Connect” trong ứng dụng ví để xác nhận kết nối với trang. Việc này cho phép dApp thấy địa chỉ ví và số dư token của bạn. Bạn chưa cấp bất kỳ quyền nào khác.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-6ecdef56.png)

**4\. Đọc và ký điều khoản dịch vụ (nếu bạn đồng ý)**:

Nhiều dApp sẽ yêu cầu bạn ký một thông điệp để xác nhận đã đọc điều khoản và điều kiện của họ. Ký thông điệp không tốn phí gas và không lưu thông tin nào lên blockchain. Nếu bạn đồng ý với các điều khoản, bạn có thể ký thông điệp đó.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-e3f7c7e8.png)

**5\. Chuyển sang đúng mạng lưới**:

Với hướng dẫn này, hãy bảo đảm ví của bạn đang đặt ở mạng Optimism.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-8d15c6f6.png)

**6\. Tùy chỉnh lệnh hoán đổi**:

Đã đến lúc chọn token đầu vào và token đầu ra bạn muốn. Trong ví dụ này, chúng ta sẽ hoán đổi ETH lấy OP, nhưng bạn có thể chọn cặp token nào tùy ý!

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-7b117655.png)

**7\. Phê duyệt quyền với token (chỉ khi hoán đổi token)**:

Nếu bạn hoán đổi một token như USDC, ví sẽ hỏi bạn phê duyệt quyền để Velodrome truy cập token đó trước. Chúng tôi khuyên nên giới hạn phê duyệt đúng bằng quy mô giao dịch. ETH là tiền tệ gốc của mạng lưới nên không cần phê duyệt, vì vậy trong ví dụ này ví chuyển thẳng tới bước xác nhận hoán đổi.

**8\. Xác nhận giao dịch**:

Khi đã hài lòng với báo giá và thiết lập, bạn có thể bắt đầu hoán đổi. Bước này gồm xác nhận trên dApp, rồi xác nhận lại trong ví.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-89f87156.png)

**9\. Kiểm tra số dư**:

Giao dịch thường mất vài giây để được xác nhận, sau đó bạn sẽ thấy số dư token mới trong ví. Nếu loại token đó không hiển thị, hãy kiểm tra xem bạn đã nhập địa chỉ token hay chưa.

*Địa chỉ hợp đồng token Optimism: 0x4200000000000000000000000000000000000042*

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-c8b8abcc.png)

**10\. Lấy mã băm giao dịch**:

Để hoàn thành nhiệm vụ của bài học [Sàn giao dịch phi tập trung](https://app.banklessacademy.com/lessons/decentralized-exchanges), bạn cần ***mã băm giao dịch của lệnh hoán đổi*** (đừng nhầm với mã băm của giao dịch cấp quyền token, hay với địa chỉ ví của bạn). Một liên kết tới trình khám phá khối thường hiện trên giao diện DEX, cho phép bạn xem chi tiết giao dịch đã được xác nhận. Nếu bạn bỏ lỡ hoặc không thấy liên kết đó, bạn sẽ tìm được một liên kết khác trong nhật ký hoạt động của ví, gắn trực tiếp với lệnh giao dịch của bạn.

![](https://app.banklessacademy.com/images/swapping-on-a-decentralized-exchange/image-bcfdf0ee.png)

---

Đã đến lúc khám phá thế giới giao dịch phi tập trung! Chúng tôi hy vọng bạn thấy thú vị với mục này trong Cẩm nang Nhà thám hiểm: “Hoán đổi trên sàn giao dịch phi tập trung”.

Đừng quên sưu tầm mục này nếu bạn muốn giữ một bản để tra cứu trên hành trình, hoặc để ủng hộ nội dung tương lai của Bankless Academy. Thượng lộ bình an, Nhà thám hiểm!

---

## Câu hỏi thường gặp

### Vì sao báo giá của tôi thay đổi vài lần mỗi phút?

Báo giá thường được tính vào lúc bạn nhập lệnh hoán đổi mong muốn vào giao diện DEX. Thời gian trôi qua, những người dùng khác cũng hoán đổi và làm thay đổi nguồn cung token trên sàn. DEX sẽ thường xuyên làm mới báo giá để giữ số liệu cập nhật.

### Một lệnh hoán đổi token mất bao lâu để thực thi?

Câu trả lời tùy thuộc nhiều yếu tố, chủ yếu là tốc độ tạo khối của blockchain và việc bạn trả phí gas thấp hay cao hơn mức cần thiết. Giao dịch DEX gửi lên mạng chính Ethereum thường mất từ 12 giây tới vài phút để được xác nhận. Giao dịch trên Layer 2 thường nhanh hơn!

### Vì sao giao dịch của tôi thất bại?

Có nhiều lý do khiến một giao dịch thất bại: không đủ tiền trả gas, đặt giới hạn gas quá thấp, hoặc đặt mức trượt giá quá thấp. Cách gỡ rối tốt nhất là bắt đầu từ các thông báo lỗi trên giao diện. Bạn cũng có thể xem giao dịch trên một trình khám phá khối như [Etherscan](https://optimistic.etherscan.io/) để kiểm tra xem có thông báo lỗi on-chain nào không. Bạn có thể nâng `dung sai trượt giá` trong phần thiết lập hoán đổi của DEX nếu giá đang chạy nhanh hơn lệnh của bạn. Nhiều ví và DEX cũng cung cấp định tuyến giao dịch được bảo vệ, che chắn lệnh hoán đổi của bạn khỏi các bot `MEV` đang tìm cách kiếm lời từ những giao dịch đang chờ.

### Tôi có thể thay đổi hoặc gỡ bỏ quyền với token không?

Cấp quyền với token cho một hợp đồng thông minh có thể khiến ví của chúng ta dễ tổn thương trước những tương tác không mong muốn về sau, nếu hợp đồng đó bị hack. Bạn có thể thay đổi hoặc gỡ bỏ quyền với token bằng những ứng dụng như [Revoke.cash](https://revoke.cash/). Vì việc điều chỉnh quyền tốn phí gas, biện pháp phòng ngừa này có thể nhanh chóng trở nên tốn kém. Đó là một lý do khiến nhiều người cất tài sản số trong một ví (ví lạnh), còn tương tác với dApp bằng ví khác (ví giao dịch). Họ chỉ chuyển tài sản giữa hai ví khi thật sự cần.

### Vì sao token tôi đang tìm không có sẵn để hoán đổi?

Nếu token của bạn không được liệt kê sẵn, bạn phải dán địa chỉ hợp đồng của token vào danh sách. Để tìm địa chỉ hợp đồng token, hãy xem <https://www.coingecko.com/> hoặc trang web chính thức của dự án.

**Lưu ý**: cùng một token có thể có địa chỉ khác nhau trên các mạng lưới khác nhau. Ví dụ [hợp đồng USDC trên mạng chính](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) khác với [hợp đồng USDC trên Optimism](https://optimistic.etherscan.io/token/0x0b2c639c533813f4aa9d7837caf62653d097ff85). Luôn kiểm tra kỹ địa chỉ token trước khi hoán đổi!

---

**Tác giả**

**[Tetranome](https://twitter.com/tetranome)** là Project Champion tại Bankless Academy, tập trung vào trải nghiệm người dùng, giao diện, thiết kế và chương trình học của nền tảng.

**Biên tập viên**

**[Trewkat](https://twitter.com/trewkat)** là cây viết và biên tập viên tại BanklessDAO. Cô muốn tìm hiểu nhiều nhất có thể về crypto và NFT, đặc biệt là cách truyền đạt kiến thức này tới người khác sao cho hiệu quả nhất.

**Nhà bảo trợ**

Bài viết không có tài trợ này là một phần trong chương trình học Bankless miễn phí của bạn. Hãy sưu tầm bài viết để ủng hộ nội dung trong tương lai!
