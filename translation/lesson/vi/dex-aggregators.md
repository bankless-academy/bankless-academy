---
TITLE: DEX Aggregator
DESCRIPTION: Tìm hiểu sâu về DEX aggregator, thanh khoản và bức tranh sàn giao dịch DeFi.
LANGUAGE: Tiếng Việt
WRITERS: iSpeakNerd
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/dex-aggregators
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

`Sàn giao dịch phi tập trung` (DEX) loại bỏ chi phí trung gian và giúp Nhà thám hiểm tiết kiệm tiền khi giao dịch tài sản.

Nhưng bạn có biết còn nhiều cách tiết kiệm khác với công nghệ DeFi? Dùng `DEX aggregator`, bạn quét mọi giao dịch khả dĩ trên nhiều nền tảng DEX cùng lúc rồi thực hiện lộ trình tốt nhất, tất cả trong một thao tác. Chúng giúp bạn có mức giá tốt nhất khi `hoán đổi` token. Giống như trang so sánh vé máy bay giúp tìm chuyến rẻ nhất, DEX aggregator giúp bạn tối đa hóa giá trị giao dịch.

Bài học này sẽ cho thấy:

1. Cách các DEX chia nhỏ thanh khoản và vì sao điều đó làm tỷ giá giao dịch xấu đi.
2. Cách DEX aggregator cho phép xem và dùng nhiều DEX qua một giao diện duy nhất.
3. Nhiều cách một giao diện aggregator giúp Nhà thám hiểm tiết kiệm thời gian và tiền bạc.

![](https://app.banklessacademy.com/images/dex-aggregators/introduction-1f25c90b.svg)

# Thanh khoản ảnh hưởng đến giá thế nào

Lượng token có sẵn để giao dịch trên một thị trường được gọi là `thanh khoản` của token đó. Lượng thanh khoản có sẵn ảnh hưởng mạnh tới `tác động giá` khi giao dịch trong DeFi; tác động giá lớn nghĩa là giao dịch tốn hơn, tác động giá nhỏ thì rẻ hơn. Phần lớn mọi người thích giao dịch ở thị trường có thanh khoản cao để giảm tác động giá.

Hãy hình dung một hồ bơi: càng nhiều nước (thanh khoản) thì mực nước càng *thay đổi* ít (tác động giá) khi ai đó nhảy vào hay bước ra. Kích cỡ của “ai đó” (quy mô giao dịch) cũng ảnh hưởng tới *thay đổi* của mực nước (tác động giá).

# Ví dụ về ảnh hưởng của thanh khoản tới giá

Hãy xem một ví dụ.

Hình dung một token giao dịch trên nhiều DEX cùng lúc. Một DEX có pool sâu, giữ phần lớn `thanh khoản` của token, trong khi DEX khác chỉ có pool nông với một phần nhỏ.

Nếu một Nhà thám hiểm mua cùng một lượng token từ mỗi pool, `tác động giá` ở pool nông sẽ cao hơn. Cùng lệnh đó rút một tỷ lệ lớn hơn nhiều trong tổng thanh khoản của pool, nên giá dịch chuyển mạnh hơn và người mua trả nhiều hơn.

![](https://app.banklessacademy.com/images/dex-aggregators/an-example-of-how-liquidity-impacts-prices-24eb7dd7.svg)

# Knowledge Check 1

Điền vào chỗ trống: Để có giá tốt nhất, người ta muốn giao dịch ở thị trường có thanh khoản ________ để tác động giá lên lệnh của mình là ________.

- [ ] tốt, tối đa

> ℹ️ Thử lại! Tác động giá tối đa nghĩa là lệnh tốn hơn, chứ không rẻ hơn.

- [x] cao, thấp

> ℹ️ Chính xác! Nhiều thanh khoản hơn thì tác động giá nhỏ hơn, như hồ nước lớn đổi mực nước ít khi có người nhảy vào.

- [ ] thấp, tốt

> ℹ️ Thử lại! Thanh khoản thấp làm tăng tác động giá và khiến lệnh đắt hơn.

- [ ] mỏng, lớn

> ℹ️ Thử lại! Thanh khoản mỏng gây tác động giá lớn, đúng thứ mà người giao dịch muốn tránh.

# Điểm yếu của DEX truyền thống: thanh khoản mỏng

DeFi vẫn tăng trưởng, nhưng một vấn đề đang nảy sinh cho người dùng: càng nhiều DEX ra mắt, tổng lượng của mỗi token càng bị dàn mỏng. Đó gọi là thanh khoản mỏng.

Nhớ lại hồ bơi: nếu lượng nước (`thanh khoản`) bị chia cho nhiều hồ, nước trong mỗi hồ sẽ “mỏng” hơn so với hồ gốc duy nhất.

Thời DeFi sơ khai, một hai DEX nắm phần lớn thanh khoản. Năm 2020, các DEX mới bắt đầu cạnh tranh; một đối thủ kéo hơn 1 tỷ USD thanh khoản khỏi Uniswap chỉ vài tuần sau khi ra mắt. Ngày nay, thanh khoản trải khắp hàng trăm DEX trên nhiều blockchain và mạng `Layer 2`, làm mỗi pool mỏng đi.

Vì thế, mọi lệnh đều có `tác động giá` lớn hơn thời một DEX nắm phần lớn thanh khoản của hệ sinh thái. Nếu không có đổi mới, Nhà thám hiểm sẽ tốn hơn khi giao dịch trên bất kỳ DEX đơn lẻ nào.

![](https://app.banklessacademy.com/images/dex-aggregators/shortcomings-of-traditional-dexs-thin-liquidity-384b90b6.svg)

# Knowledge Check 2

Hai yếu tố nào quyết định tác động giá của một lệnh trên DEX?

- [ ] DEX được chọn để giao dịch và quy mô lệnh

> ℹ️ Thử lại! Bản thân DEX không quan trọng. Điều đáng kể là lượng thanh khoản có trong pool.

- [ ] Token nào được chọn và DEX nào được dùng

> ℹ️ Thử lại! Cả token lẫn thương hiệu DEX đều không quyết định tác động giá. Thanh khoản và quy mô lệnh mới quyết định.

- [x] Quy mô lệnh và lượng thanh khoản có sẵn

> ℹ️ Chính xác! Như hồ bơi, vệt nước bắn lớn hay nhỏ tùy người nhảy to cỡ nào và hồ có bao nhiêu nước.

- [ ] Lượng thanh khoản có sẵn và token nào được chọn

> ℹ️ Thử lại! Thanh khoản là một yếu tố, yếu tố còn lại là quy mô lệnh, không phải token được chọn.

# Gộp lại thanh khoản với DEX aggregator

Cần lượng `thanh khoản` lớn để giảm tác động giá và tiết kiệm tiền cho bạn. DEX aggregator cho phép chạy lệnh qua nhiều DEX cùng lúc và giảm tác động giá; một lệnh lớn từ ví của Nhà thám hiểm được chia thành nhiều lệnh nhỏ trên nhiều DEX.

DEX aggregator thậm chí có thể định tuyến qua một `token trung gian`, hoặc nhiều hơn, nếu điều đó cho kết quả tốt hơn, giống như trang so sánh vé đề xuất thêm một điểm dừng ở sân bay khác vì rẻ hơn cho hành khách. Việc tìm ra `lộ trình giao dịch` tối ưu do các thuật toán tinh vi đảm nhận, quét mọi đường đi khả dĩ để tìm lộ trình rẻ nhất tại thời điểm đó.

![](https://app.banklessacademy.com/images/dex-aggregators/recombining-liquidity-with-dex-aggregators-c12c49a1.svg)

# Knowledge Check 3

Định tuyến giao dịch trong DEX aggregator nghĩa là:

- [ ] Lệnh đi theo thỏa thuận riêng với vài DEX cụ thể

> ℹ️ Thử lại! Aggregator quét mọi DEX có sẵn bằng thuật toán, không qua thỏa thuận riêng.

- [ ] Lệnh luôn luôn được chia qua nhiều DEX

> ℹ️ Thử lại! Aggregator chỉ chia lệnh khi kết quả tốt hơn. Đôi khi một DEX duy nhất cho lộ trình tốt nhất.

- [ ] Lệnh chỉ đi qua DEX yêu thích của người dùng

> ℹ️ Thử lại! Bám vào một DEX là mất hết ý nghĩa. Aggregator quét nhiều DEX để tìm giá tốt nhất.

- [x] Lệnh có thể đi qua nhiều DEX và token trung gian

> ℹ️ Chính xác! Thuật toán quét mọi đường đi, kể cả các “điểm dừng” qua token trung gian, để tìm lộ trình rẻ nhất.

# Cách tính chi phí gas trên Ethereum

Hãy ôn lại cách tính gas trước khi xem DEX aggregator giảm phí mạng ra sao. Khoản tiết kiệm này đáng kể nhất trên mạng chính Ethereum, nơi phí có thể cao; trên mạng `Layer 2`, phí thường chỉ vài xu.

Giống xăng cho ô tô, `gas` là nhiên liệu để chạy mã blockchain trên Ethereum. Càng nhiều phép tính thì mã của bạn càng tốn gas. Giá gas đo bằng những phần rất nhỏ của Ether gọi là `gwei`, như xu so với đô la. 1 gwei bằng một phần tỷ ether (1 gwei = 0,000000001 ETH).

Tổng chi phí gas dựa trên lượng gas mà giao dịch dùng và đơn giá gas lúc đó. Công thức tính giá một giao dịch như sau:
*Lượng gas dùng × Giá gas = Tổng chi phí gas*

Ví dụ, giả sử giá gas là 22 gwei mỗi đơn vị và giao dịch dùng 120 nghìn đơn vị:
*120.000 × 22 gwei = 2.640.000 gwei* ***hoặc*** *0,00264 ETH*

![](https://app.banklessacademy.com/images/dex-aggregators/how-gas-cost-is-calculated-on-ethereum-c7d692cd.svg)

# Aggregator giảm chi phí gas cho người dùng ra sao

Chia nhỏ lệnh sẽ sinh thêm phí giao dịch vì hoạt động on-chain nhiều hơn, nhưng các aggregator tiên tiến đã tính trước phí đó và đưa vào bài toán tìm lộ trình. Chúng mô phỏng lệnh off-chain, gồm cả chi phí `gas`, để tìm `lộ trình giao dịch` để lại nhiều giá trị nhất cho Nhà thám hiểm khi kết thúc.

Một số aggregator còn đi xa hơn. 1inch, đơn vị tiên phong về DEX aggregator, nay còn cho các bên khớp lệnh chuyên nghiệp cạnh tranh nhau thực hiện lệnh của bạn và tự trả gas (hệ thống tên là Fusion). Người dùng thường không phải trả gas.

![](https://app.banklessacademy.com/images/dex-aggregators/how-aggregators-reduce-gas-costs-for-users-aea20eff.svg)

# Knowledge Check 4

Cách nào sau đây KHÔNG phải cách DEX aggregator giảm chi phí giao dịch cho người dùng?

- [ ] Mô phỏng giao dịch off-chain trước khi thực hiện lệnh

> ℹ️ Thử lại! Aggregator có mô phỏng lệnh off-chain, gồm cả chi phí gas, để tìm lộ trình tốt nhất.

- [x] Yêu cầu các DEX giảm phí mạng cho người dùng

> ℹ️ Chính xác! Phí mạng do blockchain quy định, không do DEX. Không ai chỉ cần hỏi xin là được giảm.

- [ ] Tính chi phí gas vào việc định tuyến giao dịch

> ℹ️ Thử lại! Aggregator tiên tiến có đưa phí giao dịch vào tính toán lộ trình.

- [ ] Để bên khớp lệnh chuyên nghiệp chạy lệnh và trả gas

> ℹ️ Thử lại! Trong các hệ thống theo ý định như 1inch Fusion, bên khớp lệnh có trả gas thay người dùng.

# Meta-aggregator

Thậm chí còn có meta-aggregator của các DEX aggregator! Những nền tảng này quét các DEX aggregator cạnh tranh nhau và đưa báo giá tốt nhất tới người dùng. Ví dụ, tính năng hoán đổi tích hợp trong ví như MetaMask thu thập báo giá từ nhiều nhà cung cấp, gồm cả DEX aggregator như 1inch, rồi cộng thêm phí dịch vụ của mình.

Lưu ý: tuy tiện lợi, dịch vụ `meta-aggregator` có thể cộng thêm chi phí lên trên phí giao dịch mạng, làm tổng chi phí của người dùng tăng lên. Nhà thám hiểm hãy chắc rằng giao dịch của mình không đắt hơn dự tính.

![](https://app.banklessacademy.com/images/dex-aggregators/meta-aggregators-7609a2ce.svg)

# Knowledge Check 5

Meta-aggregator đối chiếu nhiều DEX aggregator để tìm giá tốt nhất cho người dùng.

- [x] Đúng

> ℹ️ Chính xác! Meta-aggregator quét các DEX aggregator cạnh tranh nhau và đưa báo giá tốt nhất tới người dùng.

- [ ] Sai

> ℹ️ Thử lại! Quét qua nhiều DEX aggregator chính là việc mà meta-aggregator làm.

# Tránh tấn công sandwich

Người dùng hoán đổi thẳng qua `DEX` có thể mất giá trị tới tận mức `dung sai trượt giá` của mình, khi bot đặt lệnh ngay trước và ngay sau lệnh của họ để đẩy giá. Những khoản mất này gọi là `tấn công sandwich`; chỉ riêng năm 2021, chúng đã lấy của người dùng khoảng 235.000.000 USD. Ngày nay, các lớp bảo vệ như `định tuyến giao dịch riêng tư` và giao dịch theo ý định che chắn phần lớn lệnh thường ngày, nhưng vẫn nên giữ dung sai trượt giá thấp khi hoán đổi token.

May thay, nhờ thanh khoản được gộp lại ở DEX aggregator, tác động giá của một lệnh giảm đi. Nhà thám hiểm có thể giữ dung sai trượt giá thấp mà vẫn tiết kiệm nhiều hơn so với giao dịch thẳng trên một DEX.

![](https://app.banklessacademy.com/images/dex-aggregators/avoiding-sandwich-attacks-d4114147.svg)

# Knowledge Check 6

Để tự bảo vệ, bạn nên giữ dung sai trượt giá ở mức:

- [x] thấp

> ℹ️ Chính xác! Dung sai trượt giá thấp giới hạn phần giá trị mà một cuộc tấn công sandwich rút được từ lệnh của bạn.

- [ ] cao

> ℹ️ Thử lại! Dung sai trượt giá cao cho phép tấn công sandwich lấy nhiều giá trị hơn từ lệnh của bạn.

# Bảo vệ thêm khỏi sandwich: giao dịch OTC

Một số aggregator như 1inch còn có dịch vụ `giao dịch OTC` chuyên biệt (`OTC`, mua bán trực tiếp ngoài sàn), bảo vệ hoàn toàn khỏi tấn công sandwich. Các dịch vụ tùy chọn này cho phép giao dịch thẳng với người dùng khác, thay vì đi qua `pool thanh khoản` của DeFi, mang đến cho Nhà thám hiểm thêm một cách tiết kiệm tuyệt vời.

CoW Swap chọn hướng khác: người dùng ký một yêu cầu giao dịch (một `ý định`), rồi các `solver` chuyên nghiệp cạnh tranh trong `đấu giá theo lô` để khớp lệnh với giá tốt nhất. Solver thậm chí có thể ghép trực tiếp hai người dùng, nên lệnh được bảo vệ khỏi tấn công sandwich theo mặc định.

![](https://app.banklessacademy.com/images/dex-aggregators/more-protection-from-sandwiches-otc-trades-3da1b5df.svg)

# Knowledge Check 7

Nhiều DEX aggregator cung cấp công cụ nào để giúp người dùng tiết kiệm tiền?

- [ ] Định tuyến lệnh qua thanh khoản từ nhiều DEX.

> ℹ️ Thử lại! Thanh khoản gộp làm giảm tác động giá, nhưng đó không phải cách duy nhất aggregator giúp tiết kiệm.

- [ ] Giao dịch OTC bảo vệ hoàn toàn khỏi tấn công sandwich.

> ℹ️ Thử lại! Đây là một cách aggregator giúp tiết kiệm, nhưng không phải cách duy nhất.

- [ ] Tính chi phí gas khi dựng lộ trình giao dịch tốt nhất.

> ℹ️ Thử lại! Đây là một cách aggregator giúp tiết kiệm, nhưng không phải cách duy nhất.

- [x] Tất cả các ý trên

> ℹ️ Chính xác! Aggregator gộp thanh khoản, tính cả chi phí gas và có thể cung cấp giao dịch OTC, tất cả để người dùng giữ lại nhiều giá trị hơn.
