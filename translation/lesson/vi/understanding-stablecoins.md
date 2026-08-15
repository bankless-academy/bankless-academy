---
TITLE: Tìm hiểu stablecoin
DESCRIPTION: Dùng đô la, euro và nhiều loại tiền khác trên blockchain.
LANGUAGE: Tiếng Việt
WRITERS: Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/understanding-stablecoins
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

> * Stablecoin là phiên bản blockchain của tiền pháp định, như đô la hay euro.
>
> * Stablecoin thường được phát hành dưới dạng token (ví dụ token `ERC-20` trên Ethereum) và nay lưu hành trên nhiều blockchain. Chúng cho phép người dùng DeFi chuyển nhanh giữa giá trị tiền pháp định và giá trị crypto mà vẫn ở trên blockchain.
>
> * Có nhiều nhóm stablecoin, mỗi nhóm có đánh đổi và hồ sơ rủi ro riêng.
>
> * Stablecoin có thể sinh lãi hằng năm cao hơn gửi tiền pháp định ở ngân hàng truyền thống, dù quy định hiện nay chi phối ai được phép trả lợi suất đó và trả bằng cách nào.

## Vì sao nên nắm giữ stablecoin?

Stablecoin đã trở thành trụ cột của hệ sinh thái DeFi. Sau khi đạt nguồn cung khoảng 140 tỷ USD ở đỉnh năm 2022 (xem hình dưới), tổng nguồn cung vượt 300 tỷ USD vào năm 2026, và trong năm 2025 stablecoin đã quyết toán hơn 30 nghìn tỷ USD giá trị giao dịch, nhiều hơn cả Visa xử lý trong năm đó.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-0c080b13.png)

Vì sao chúng được ưa chuộng:

* **Ổn định**: giữ stablecoin trong ví tự lưu ký cũng giống như giữ tiền pháp định, nhưng trên blockchain. Khi nắm giữ một stablecoin như USD Coin (USDC) do Circle phát hành, bạn có thể trông đợi nó giữ giá trị 1:1 với đô la Mỹ, trong khi giá của các tài sản như ether và bitcoin thì lên xuống thất thường.

* **Linh hoạt**: vì giá trị được neo này tồn tại dưới dạng token trên blockchain, việc chuyển qua lại giữa giá trị tiền pháp định và giá trị crypto rất dễ dàng.

* **Tiếp cận**: stablecoin mở cửa vào nhiều dịch vụ tài chính phi tập trung, như đi vay hoặc cho vay không cần cấp phép để hưởng lãi.

* **Bảo mật**: mật mã học khiến kẻ tấn công cực kỳ khó chiếm đoạt hay giả mạo giao dịch.

Cách một stablecoin duy trì tỷ lệ 1:1, hay `neo giá`, với đồng tiền pháp định tương ứng là đặc tính quan trọng nhất của nó. Cũng như tiền pháp định chỉ có giá trị bằng những nền tảng chống đỡ nó, cơ chế neo giá của stablecoin quyết định giá trị số tài sản bạn nắm giữ.

## Các nhóm stablecoin

Có ba chiến lược phổ biến để một stablecoin giữ được mức neo giá:

* 💵 **Bảo chứng bằng tiền pháp định**: thế chấp 1:1 bằng dự trữ tiền pháp định ngoài đời thực.

* 🔗 **Thế chấp bằng crypto**: thế chấp vượt mức bằng crypto gửi vào các giao thức DeFi.

* 🔃 **Thuật toán**: dùng thuật toán cân bằng nguồn cung thay cho tài sản thế chấp đầy đủ, một thiết kế có lịch sử đầy trắc trở.

### 1\. Stablecoin bảo chứng bằng tiền pháp định

Nhóm này giữ giá trị bằng cách phát hành một lượng token cố định, khớp với dự trữ tiền tệ ngoài đời thực. Giá on-chain được duy trì nhờ quy luật cung cầu: ít ai muốn trả hơn một đô la thật để lấy một đô la giá trị on-chain, họ sẽ đi giao dịch nơi khác. Để đáp ứng nhu cầu tăng lên, `tổ chức phát hành stablecoin` khóa thêm tiền pháp định và tăng nguồn cung token đúng bằng lượng đó.

Những cái tên nổi bật gồm USDT của Tether và USD Coin (USDC) của Circle. Circle cũng phát hành EURC, phiên bản neo theo đồng euro.

Các tổ chức phát hành stablecoin kiếm doanh thu theo nhiều cách: đầu tư một phần dự trữ tiền pháp định vào trái phiếu kho bạc Mỹ ngắn hạn và các khoản tương đương tiền, đồng thời áp dụng mô hình doanh thu hỗn hợp gồm thu phí giao dịch và cung cấp dịch vụ cho vay.

> **Đổi mới và thiện nguyện qua stablecoin bảo chứng bằng tiền pháp định: Glo Dollar**
>
> Glo Foundation có cách tiếp cận đổi mới với doanh thu từ dự trữ nhờ [Glo Dollar](https://www.glodollar.org/) (USDGLO), stablecoin bảo chứng bằng đô la Mỹ của tổ chức này: tiền lãi thu được từ dự trữ dùng để tài trợ các chương trình thu nhập cơ bản cho người nghèo cùng cực. Chỉ bằng việc nắm giữ USDGLO, người dùng đã tham gia thiện nguyện. Tìm hiểu cách Glo Dollar hoạt động [tại đây](https://www.glodollar.org/articles/how-glo-works).

Những điều cần cân nhắc khi dùng stablecoin bảo chứng bằng tiền pháp định:

* **Báo cáo dự trữ**: người nắm giữ cần được bảo đảm rằng mỗi token stablecoin đều khớp một đổi một với dự trữ tiền pháp định. Phần lớn tổ chức phát hành công bố `chứng thực` (một kế toán độc lập xác nhận dự trữ có tồn tại vào một ngày nhất định), yếu hơn hẳn so với kiểm toán đầy đủ tình hình tài chính của tổ chức; hiện chưa tổ chức lớn nào công bố kiểm toán như vậy. Circle công bố chứng thực USDC hằng tháng (do Deloitte thực hiện), còn Tether, vốn kín tiếng về tài sản bảo chứng, nay công bố chứng thực hằng quý (do BDO thực hiện).

* **Quy định**: tại Mỹ, Đạo luật GENIUS (ký tháng 7 năm 2025) buộc các tổ chức phát hành stablecoin thanh toán phải giữ dự trữ 1:1 bằng tiền mặt và trái phiếu kho bạc Mỹ ngắn hạn, đồng thời cấm họ trả lãi cho người nắm giữ. Tại EU, khung MiCA khiến các sàn lớn gỡ niêm yết những stablecoin không tuân thủ như USDT đối với người dùng châu Âu.

* **Rủi ro kiểm duyệt**: vì cả USDC lẫn USDT đều nằm trong tầm điều tra của chính phủ, `hợp đồng thông minh` của các token này có hàm đóng băng, cho phép khóa số dư on-chain của một người dùng trong những trường hợp bị xem là hoạt động không phù hợp. Hàm đóng băng này áp dụng cả với token nằm trong `ví không lưu ký`.

Mức độ tập trung cao trong mảng stablecoin bảo chứng bằng tiền pháp định để lại rất nhiều dư địa cải tiến, nếu ta muốn nắm giữ giá trị neo theo tiền pháp định theo cách thuần crypto.

### 2\. Stablecoin thế chấp bằng crypto

Stablecoin thế chấp bằng crypto là lựa chọn minh bạch và phi tập trung hơn, và chính hai phẩm chất đó giúp loại bỏ một số rủi ro. Chúng neo theo tiền pháp định thông qua dự trữ là tài sản crypto. Vì biến động của thị trường crypto ảnh hưởng tới tổng giá trị dự trữ, các stablecoin này được thế chấp vượt mức, đôi khi tới 200%! Mọi tài sản thế chấp đều xem được on-chain, cho người dùng truy cập 24/7 vào thành phần thật sự của stablecoin họ nắm giữ.

Ví dụ nổi bật nhất trong nhóm này là USDS của Sky, kế nhiệm Dai (DAI) của MakerDAO, stablecoin thế chấp bằng crypto đầu tiên, sau khi MakerDAO đổi tên thành Sky vào năm 2024. Nếu muốn cách tiếp cận thuần phi tập trung hơn, LUSD của Liquity chỉ được bảo chứng bằng ETH gửi vào theo tỷ lệ thế chấp vượt mức.

![Cơ cấu tài sản thế chấp của DAI, tiền thân của USDS (tháng 6 năm 2023)](https://app.banklessacademy.com/images/understanding-stablecoins/image-573e657a.png)

Những điều cần cân nhắc:

* **Định giá tài sản thế chấp**: dự trữ của một stablecoin thường gồm crypto, các stablecoin khác, và cả những loại tài sản khác. Ví dụ, USDS được bảo chứng bằng ETH, stablecoin, tài sản thực như trái phiếu kho bạc Mỹ và vài thành phần nhỏ khác. Để giảm rủi ro từ dải tài sản đa dạng này, USDS được thế chấp vượt mức (tại thời điểm viết bài). Ngay cả khi giá ETH sụt 20%, USDS vẫn [đủ tài sản thế chấp](https://defillama.com/stablecoins) để bảo chứng cho số token đang lưu hành. Tuy nhiên, biến động giá mạnh hơn trên dải tài sản đó có thể bắt đầu bào mòn mức neo giá.

* `Rủi ro đối tác`: dựa vào nhiều loại tài sản nghĩa là khả năng một trong số đó gặp trục trặc và ảnh hưởng tới giá trị bạn nắm giữ sẽ cao hơn. Bù lại, bạn chỉ chịu tác động một phần từ mỗi rủi ro riêng lẻ.

* **Rủi ro quản trị**: loại stablecoin này và ngân quỹ của nó do một nhóm cử tri quản trị phi tập trung điều hành. Điều đó kéo theo rủi ro sai sót của con người, hoặc khả năng quyền quản trị bị thâu tóm.

### 3\. Stablecoin thuật toán

Các token này cố giữ mức neo giá bằng cách tự động cân bằng nguồn cung thay vì nắm giữ tài sản thế chấp đầy đủ: một thuật toán on-chain rút bớt token khỏi lưu thông khi giá thị trường xuống dưới mức neo, và mint thêm token mới khi giá vượt lên trên. Trên lý thuyết, đây là lời hứa về một stablecoin không cần ngân hàng lẫn tài sản thế chấp. Trên thực tế, phiên bản thuần túy của thiết kế này đã thất bại thảm khốc.

Ví dụ điển hình là UST của Terra: thuật toán luôn cho phép người nắm giữ hoán đổi 1 UST lấy 1 USD giá trị token LUNA đầy biến động của Terra. Vào tháng 5 năm 2022, làn sóng bán tháo UST buộc thuật toán mint ra lượng LUNA khổng lồ, kéo sập giá của nó và châm ngòi cho đợt bán tiếp theo: một `vòng xoáy sụp đổ` xóa sạch khoảng 40 tỷ USD chỉ trong vài ngày. UST không bao giờ lấy lại được mức neo giá.

Các dự án còn sống sót đã từ bỏ mô hình thuần thuật toán. Frax, từng chạy một phần bằng thuật toán, chuyển sang thế chấp 100% vào năm 2023; stablecoin hiện nay của họ, frxUSD, được bảo chứng bằng dự trữ gồm cả quỹ trái phiếu kho bạc Mỹ đã token hóa, còn FRAX nay đóng vai trò token quản trị của giao thức.

![](https://app.banklessacademy.com/images/understanding-stablecoins/image-4f6e4c7f.png)

Từ đống đổ nát đó, một nhóm hiện đại khác biệt đã xuất hiện: các thiết kế lai hay “đô la tổng hợp” như USDe của Ethena, vừa nắm tài sản thế chấp crypto vừa mở các vị thế giao dịch đối ứng để triệt tiêu biến động giá (phòng hộ “delta-neutral”). Chúng có thế chấp, nhưng theo cách mới mẻ và mang rủi ro riêng, chẳng hạn phụ thuộc vào các sàn đang giữ những vị thế đó, và vào điều kiện thị trường giúp khoản phòng hộ còn sinh lời.

Những điều cần cân nhắc:

* **Rủi ro vòng xoáy sụp đổ**: một mức neo giá thuần thuật toán phụ thuộc vào niềm tin thị trường được duy trì. Khi niềm tin gãy, cơ chế nguồn cung có thể khuếch đại cú sập thay vì chặn nó lại, và không còn tài sản thế chấp nào để hoàn lại.

* **Rất kỹ thuật**: bạn cần hiểu thứ gì thực sự bảo chứng cho token (và trong điều kiện nào sự bảo chứng đó có thể đổ vỡ) để xây dựng niềm tin cùng nhận thức về rủi ro so với lợi ích.

* **Rủi ro công nghệ mới nổi**: các thiết kế lai và tổng hợp phần lớn chưa được thử thách qua trọn một chu kỳ thị trường. Chỉ dùng token đã qua nhiều lần kiểm toán hợp đồng thông minh bởi các đơn vị hàng đầu, và nhớ rằng kiểm toán không bảo vệ được trước một thiết kế kinh tế sai lầm.

## Chọn một stablecoin

Stablecoin nào là tốt nhất để nắm giữ? Như mọi thứ trong DeFi, câu trả lời tùy thuộc vào **nhu cầu**, **giá trị bạn theo đuổi** và **mức chấp nhận rủi ro** của bạn.

Ôn nhanh từng nhóm:

* 💵 **Bảo chứng bằng tiền pháp định**: cách tiếp cận truyền thống, gần nhất với việc giữ tiền pháp định on-chain.

  * Giá trị: sự quy chuẩn, niềm tin vào tổ chức.

  * Rủi ro: tài sản bảo chứng kém minh bạch, nhà phát hành có thể đóng băng tiền.

* 🔗 **Thế chấp bằng crypto**: cách tiếp cận cân bằng, thuần crypto, trải rủi ro thế chấp ra nhiều loại tài sản.

  * Giá trị: đa dạng hóa, minh bạch, tiến bộ.

  * Rủi ro: biến động thị trường crypto, phụ thuộc vào tài sản khác.

* 🔃 **Thuật toán**: biên giới thử nghiệm: các thiết kế thuần túy đã thất bại thảm khốc, còn những mô hình lai hiện đại vẫn chưa được kiểm chứng.

  * Giá trị: đổi mới, hiệu quả vốn, tiến bộ.

  * Rủi ro: vòng xoáy sụp đổ, thiết kế kinh tế sai lầm, lỗi hợp đồng thông minh.

Như thường lệ, cách học tốt nhất về một thứ là thử nó. Bạn thậm chí có thể quyết định nắm giữ nhiều loại stablecoin khác nhau.

Và nhớ rằng, trong cùng một nhóm, các stablecoin không hề như nhau! Hãy tự nghiên cứu trước khi tương tác với bất kỳ token mới nào.

---

Chúng tôi hy vọng bạn thấy thú vị với mục này trong Cẩm nang Nhà thám hiểm: “Tìm hiểu stablecoin”.

Đừng quên sưu tầm mục này nếu bạn muốn giữ một bản để tra cứu trên hành trình, hoặc để ủng hộ nội dung tương lai của Bankless Academy. Thượng lộ bình an, Nhà thám hiểm!

---

## Câu hỏi thường gặp

### Những stablecoin nào phổ biến nhất?

Nhìn vào các stablecoin dẫn đầu theo `vốn hóa thị trường` cho bạn ý niệm về lựa chọn hiện tại của thị trường, nhưng đó không phải lời khuyên về vị thế bạn nên nắm giữ, hay mức an toàn của vị thế đó.

Đây là danh sách theo thời gian thực các stablecoin hàng đầu theo vốn hóa thị trường: <https://defillama.com/stablecoins>

Người dùng tiền mã hóa thường nhắc tới “hiệu ứng Lindy” khi chọn phương án đầu tư. Khái niệm này nói rằng thứ gì tồn tại càng lâu thì càng có khả năng tiếp tục tồn tại. Mười bảy năm lịch sử tiền mã hóa cho thấy điều đó chỉ đúng trong một số trường hợp.

### Mua stablecoin ở đâu?

Các sàn giao dịch tập trung (CEX) cung cấp những stablecoin bảo chứng bằng tiền pháp định phổ biến (và thường có cả stablecoin thương hiệu riêng), nhưng hay thiếu các nhóm stablecoin khác.

Hãy ghé một sàn giao dịch phi tập trung (DEX), hoặc dùng dịch vụ on-ramp ngay trong ví như “MetaMask Buy”, để mua token thế chấp bằng crypto và token thuật toán. Xem bài học [Sàn giao dịch phi tập trung](https://app.banklessacademy.com/lessons/decentralized-exchanges) để hiểu thêm về các chợ ngang hàng.

### Làm sao để kiếm lãi từ stablecoin?

Một số CEX trả lợi suất chỉ với việc bạn giữ stablecoin trên nền tảng của họ, lấy từ một phần lợi nhuận nền tảng để khuyến khích người dùng. Lưu ý cho bạn đọc ở Mỹ: theo Đạo luật GENIUS, chính các tổ chức phát hành stablecoin được quản lý thì không được trả lãi cho người nắm giữ; lợi suất chỉ đến từ nền tảng bên thứ ba, và mức độ sẵn có tùy theo khu vực pháp lý.

Bạn cũng có thể kiếm lãi trong DeFi, với các nền tảng cho vay và đi vay không cần tin cậy. Chúng kết nối người cho vay với người đi vay, quản lý rủi ro bằng tài sản thế chấp on-chain và hợp đồng thông minh. Người cho vay stablecoin có thể nhận lợi suất hằng năm cao hơn nhiều so với ngân hàng truyền thống, nhưng ở đâu có phần thưởng, ở đó có rủi ro!

Chủ đề cho vay và đi vay xứng đáng có một mục riêng ở Bankless Academy. Nếu bạn muốn tìm hiểu thêm ngay bây giờ, có thể nghiên cứu các nền tảng như [Aave.com](https://aave.com/) và [Curve.fi](https://curve.fi/).

### Điều gì xảy ra nếu một stablecoin mất mức neo giá?

Giá thị trường của mọi stablecoin đều trôi nhẹ theo nhịp mua bán. Với các stablecoin lớn, mức trôi thường chỉ vài phần trăm xu quanh mốc 1 USD. Những sai lệch nhỏ này nhanh chóng được khép lại nhờ các nhà giao dịch tận dụng cơ hội chênh lệch giá.

Tuy nhiên, có những trường hợp stablecoin mất mức neo giá vượt xa biên độ tạm thời an toàn. Điều đó không nhất thiết là vĩnh viễn (USDC, tháng 3 năm 2023), nhưng cũng có thể là vĩnh viễn (Terra, tháng 5 năm 2022).

Một số tổ chức phát hành stablecoin bảo chứng bằng tiền pháp định, như USDC, cho phép hoàn đổi 1:1 sang tiền pháp định thông thường qua trang web của họ. Còn điều đó có giữ nguyên trong khủng hoảng hay không lại là chuyện khác.

---

**Tác giả**

**[Tetranome](https://twitter.com/tetranome)** là Project Champion tại Bankless Academy, tập trung vào trải nghiệm người dùng, giao diện, thiết kế và chương trình học của nền tảng.

**Biên tập viên**

**[Trewkat](https://twitter.com/trewkat)** là cây viết và biên tập viên tại BanklessDAO. Cô quan tâm tới việc tìm hiểu crypto và NFT, đặc biệt là cách truyền đạt kiến thức này tới người khác sao cho hiệu quả nhất.

**Nhà bảo trợ**

Bài viết không có tài trợ này là một phần trong chương trình học Bankless miễn phí của bạn. Hãy sưu tầm bài viết để ủng hộ nội dung trong tương lai!
