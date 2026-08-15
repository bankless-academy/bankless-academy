---
TITLE: Blockchain Layer 2
DESCRIPTION: Tham gia hệ sinh thái Layer 2 để giao dịch nhanh hơn và giảm phí.
LANGUAGE: Tiếng Việt
WRITERS: HiroKennelly, Tetranome
EDITORS: Claude (Anthropic AI, 2026 review)
TRANSLATORS: Claude (Anthropic AI)
LINK: https://app.banklessacademy.com/lessons/layer-2-blockchains
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

Trạng thái lý tưởng của mọi blockchain là phi tập trung, bảo mật và mở rộng tốt nhất có thể. Xây một blockchain làm tốt cả ba vẫn là bài toán chưa có lời giải. Thách thức này có tên riêng: `bộ ba bất khả thi của blockchain`.

Bitcoin và Ethereum khá phi tập trung và bảo mật, nhưng mở rộng kém: phí giao dịch cao và hàng đợi dài mỗi khi mạng bận. Để né những vấn đề đó, Nhà thám hiểm có thể dùng nhiều công nghệ giúp giảm mạnh chi phí và tăng tốc độ giao dịch. Chúng được gọi chung là giải pháp mở rộng Layer 2 (L2).

`Lightning Network` là giải pháp mở rộng nổi tiếng nhất của Bitcoin, dựa trên công nghệ `kênh thanh toán` để mở rộng thanh toán giữa các bên. Ethereum giảm nhẹ bộ ba bất khả thi bằng cách để nhiều giải pháp L2 xử lý giao dịch, với sự hỗ trợ của kho lưu trữ `blob` rẻ và tạm thời thêm vào Mainnet năm 2024 (một dạng nhẹ của “sharding” từng được lên kế hoạch).

![](https://app.banklessacademy.com/images/layer-2-blockchains/introduction-c1f2c88f.svg)

# Kênh thanh toán

Trên blockchain Bitcoin, Lightning Network dựa vào các kênh thanh toán hai chiều, cho phép nhiều bên trao đổi BTC mà không cần giao dịch trên chuỗi chính.

Kiến trúc này cho phép hai người mở một kênh thanh toán giữa họ. Mỗi kênh chỉ có đúng hai bên, nhưng khoản thanh toán có thể đi qua một mạng các kênh nối nhau để tới người ở xa hơn. Từ lúc mở đến lúc đóng kênh, các bên có thể chuyển tiền qua lại. Bút toán trong sổ cái nhỏ của mỗi bên được cập nhật sau khi cả hai cùng ký, nên thường cả hai node đều phải kết nối được.
Kênh có thể đóng bất cứ lúc nào: một bên phát bản mới nhất của sổ cái nhỏ lên blockchain.

Kênh thanh toán không hỗ trợ tương tác `hợp đồng thông minh` phức tạp, chỉ các giao dịch ngang hàng cơ bản.

![](https://app.banklessacademy.com/images/layer-2-blockchains/payment-channels-31677af9.svg)

# Knowledge Check 1

Bạn phải trực tuyến thì mới giao dịch được qua Lightning Network của Bitcoin.

- [x] Đúng

> ℹ️ Chính xác! Cập nhật một kênh thanh toán cần cả hai bên cùng ký, nên thường cả hai node phải kết nối được.

- [ ] Sai

> ℹ️ Thử lại! Cập nhật kênh cần chữ ký của cả hai bên, nên node của họ thường phải trực tuyến.

# Giải pháp mở rộng của Ethereum

Các nhà phát triển Ethereum đã xây giải pháp mở rộng riêng cho mạng này gần như từ khi nó ra đời.

Phần lớn cộng đồng Ethereum cho rằng để là một “giải pháp mở rộng của Ethereum”, dự án phải khắc phục điểm yếu về `khả năng mở rộng` mà không hy sinh `bảo mật` hay `sự phi tập trung`. Với người dùng, nhu cầu thiết thực nhất là giao dịch nhanh hơn và `gas` rẻ hơn mạng chính Ethereum. Để cạnh tranh, một số giải pháp chấp nhận đánh đổi trong bộ ba bất khả thi nhiều hơn số khác.

Ethereum được định nghĩa bởi khả năng chạy hợp đồng thông minh, nên các giải pháp mở rộng cũng cần kế thừa điều đó. Giao dịch nhanh và rẻ chẳng để làm gì nếu người dùng không truy cập được `dApp` yêu thích từ Layer 2.

# Knowledge Check 2

Các giải pháp mở rộng của Ethereum:

- [ ] dùng kênh thanh toán để mở rộng mạng lưới.

> ℹ️ Thử lại! Kênh thanh toán là cách của Lightning Network trên Bitcoin. Ethereum mở rộng bằng những giải pháp như Rollup.

- [ ] không hỗ trợ tương tác hợp đồng thông minh.

> ℹ️ Thử lại! Hỗ trợ hợp đồng thông minh là thiết yếu. Người dùng cần truy cập dApp yêu thích từ Layer 2.

- [x] nên tăng khả năng mở rộng mà không làm yếu hai yếu tố còn lại.

> ℹ️ Chính xác! Giải pháp mở rộng đúng nghĩa cải thiện khả năng mở rộng mà không hy sinh bảo mật hay sự phi tập trung.

- [ ] cho giao dịch nhanh hơn nhưng phải trả gas cao hơn.

> ℹ️ Thử lại! Giải pháp mở rộng nhắm tới cả giao dịch nhanh hơn VÀ gas rẻ hơn mạng chính Ethereum.

# Nối Layer 1 với Layer 2

Như đã học trong [Kiến thức cơ bản về blockchain](https://app.banklessacademy.com/lessons/blockchain-basics), blockchain là những cơ sở dữ liệu gọi là `sổ cái`, ghi lại danh sách giao dịch theo thứ tự thời gian và được mật mã bảo vệ. Blockchain L1 và giải pháp mở rộng L2 đều là blockchain thực thụ, mỗi bên có cơ sở dữ liệu địa chỉ và dữ liệu riêng.

Hạ tầng gọi là `cầu nối` được dùng để chuyển thông tin giữa các cơ sở dữ liệu blockchain khác nhau. Ví dụ, nếu coi mạng chính Ethereum (hay bất kỳ blockchain `L1` nào) là một hòn đảo, còn blockchain khác hoặc giải pháp mở rộng bạn thích là đảo thứ hai, thì cầu nối crypto là tên gọi chung cho đường cao tốc nối hai hòn đảo số đó.

Công nghệ này rất phức tạp, nhưng với người dùng cuối, quá trình đơn giản như chọn điểm đến.

![](https://app.banklessacademy.com/images/layer-2-blockchains/bridging-layer-1-and-layer-2-c219a748.svg)

# Sidechain

`Sidechain` là một blockchain riêng, chạy độc lập với Ethereum nhưng nối với mạng chính Ethereum bằng `cầu nối`. Để chuyển token sang, bạn khóa chúng trong hợp đồng cầu nối trên mạng chính, và số token tương đương được mint trên sidechain. Quan trọng: cách này KHÔNG cho tiền của bạn mức bảo mật của Ethereum, vì cầu nối và sidechain dựa vào validator của riêng sidechain. Nếu một trong hai bị xâm phạm (như vụ hack cầu nối Ronin 625 triệu USD năm 2022), số tiền bị khóa có thể bị lấy mất.

Sidechain vẫn chịu bộ ba bất khả thi. Phí `gas` thấp và giao dịch nhanh hơn đến từ tập validator nhỏ nhưng mạnh hơn, tức đánh đổi một phần phi tập trung và bảo mật lấy khả năng mở rộng.

Các sidechain như Polygon PoS thường xuyên đăng ảnh chụp trạng thái (“checkpoint”) lên Ethereum. Chúng cho lịch sử của sidechain một dạng tính chung cuộc và giúp người dùng chứng minh số dư khi rút qua cầu nối, nhưng không làm tiền trên sidechain an toàn bằng mạng chính.

![](https://app.banklessacademy.com/images/layer-2-blockchains/sidechains-464f0191.svg)

# Knowledge Check 3

Sidechain:

- [ ] khóa token bắc cầu trong một hợp đồng trên mạng chính.

> ℹ️ Thử lại! Điều này đúng, nhưng không phải phát biểu đúng duy nhất.

- [ ] có phí gas rẻ hơn mạng chính.

> ℹ️ Thử lại! Điều này đúng, nhưng không phải phát biểu đúng duy nhất.

- [ ] có rủi ro tập trung hóa cao hơn mạng chính.

> ℹ️ Thử lại! Điều này đúng, nhưng không phải phát biểu đúng duy nhất.

- [x] Tất cả các ý trên.

> ℹ️ Chính xác! Sidechain khóa token trên mạng chính và có phí rẻ hơn, nhưng tập validator nhỏ đánh đổi sự phi tập trung lấy tốc độ.

# Rollup

Các giao thức Layer 2 dùng công nghệ Rollup bám sát mức bảo mật của mạng chính Ethereum hơn.

Giống sidechain, `rollup` cho phép giao dịch on-chain chạy bên ngoài mạng chính Ethereum. Các giao dịch đó được “cuộn” lại thành một lô, rồi dữ liệu của lô được đăng lên Ethereum trong những gói dữ liệu rẻ và tạm thời gọi là `blob`, ra mắt cùng bản nâng cấp Dencun tháng 3 năm 2024. Blob là lý do chính khiến phí L2 điển hình giảm còn vài xu hoặc ít hơn.

Để chứng minh mình đủ an toàn khi xử lý giao dịch thay mạng chính, rollup phải đưa ra “bằng chứng thuyết phục” rằng các giao dịch trong mỗi lô là an toàn và hợp lệ. Bằng chứng này nằm trong lô rollup và được hợp đồng cầu nối trên mạng chính Ethereum kiểm tra.

Hiện có hai phương pháp rollup cung cấp được bằng chứng đó: `Optimistic Rollup` và `ZK Rollup`. Hãy xem kỹ hơn hai quy trình này.

![](https://app.banklessacademy.com/images/layer-2-blockchains/rollups-308dc6c9.svg)

# Optimistic Rollup

Các giao thức L2 như Optimism, Base và Arbitrum đều dùng `Optimistic Rollup` làm kiến trúc mở rộng. Tên gọi “optimistic” đến từ việc thông tin trong lô rollup được coi là hợp lệ cho đến khi có bằng chứng ngược lại: một giả định lạc quan.

Để hạn chế lạm dụng kỹ thuật này, thường có độ trễ vài ngày khi người dùng yêu cầu rút tiền từ L2 về mạng chính. Trong thời gian đó, validator của cầu nối có thể đăng `bằng chứng gian lận` để hủy lệnh rút. Cơ chế này giống quy trình bù trừ của ngành ngân hàng, nhưng phi tập trung.

Lưu ý: các dịch vụ cầu nối bên thứ ba như Across và Relay giúp bắc cầu chỉ trong vài phút thay vì vài ngày. Những cầu nhanh này ứng tiền từ quỹ riêng của họ, nên bạn nhận rủi ro từ hợp đồng thông minh của cầu và từ bên cấp vốn, tức thêm một lớp tin cậy so với cầu nối riêng của rollup.

![](https://app.banklessacademy.com/images/layer-2-blockchains/optimistic-rollups-846aad61.svg)

# Knowledge Check 4

Với Optimistic Rollup, giao dịch được coi là hợp lệ cho đến khi có bằng chứng ngược lại.

- [x] Đúng

> ℹ️ Chính xác! Giả định lạc quan là các lô đều hợp lệ, kèm giai đoạn khiếu nại để bằng chứng gian lận hủy lệnh rút xấu.

- [ ] Sai

> ℹ️ Thử lại! Chính giả định lạc quan đó là nguồn gốc tên gọi của loại Rollup này.

# ZK Rollup

`ZK Rollup` là loại rollup dựa trên công nghệ zero-knowledge. Khác `Optimistic Rollup`, ZK Rollup xác nhận tính hợp lệ của lô giao dịch mà không cần trông chờ một số người dùng đi tìm dấu hiệu gian lận. Thay vào đó, nó nộp một chứng minh toán học gọi là `bằng chứng tính hợp lệ`, giúp Ethereum kiểm tra cả lô là đúng mà không phải làm lại từ đầu.

Ưu thế lớn của ZK Rollup là `thời gian quyết toán`, còn gọi là `tính chung cuộc của giao dịch`. Thay vì giai đoạn khiếu nại kéo dài nhiều ngày, ZK Rollup thường cho người dùng chạm tới tiền trên mạng chính trong vài giờ, ngay khi bằng chứng hợp lệ kế tiếp được nộp. Dù mang tên zero-knowledge, công nghệ này ở đây không dùng cho quyền riêng tư: giao dịch trên các ZK Rollup lớn công khai y như trên mạng chính Ethereum.

Một số giao thức lớn đang dùng công nghệ ZK Rollup để xây giải pháp mở rộng cho Ethereum, gồm ZKsync, Starknet và Linea. Mảng này còn khá mới nhưng tiềm năng tương lai rất lớn.

![](https://app.banklessacademy.com/images/layer-2-blockchains/zk-rollups-9d65de85.svg)

# Knowledge Check 5

So với Optimistic Rollup, ZK Rollup:

- [ ] giữ giao dịch của người dùng ở dạng riêng tư trên mạng chính.

> ℹ️ Dù mang tên “zero-knowledge”, các ZK Rollup lớn minh bạch y như mạng chính Ethereum: bằng chứng dùng để xác thực, không phải để riêng tư.

- [x] dùng bằng chứng tính hợp lệ, tránh giai đoạn khiếu nại nhiều ngày.

> ℹ️ Chính xác! Một bằng chứng toán học xác nhận từng lô, nên tính chung cuộc trên mạng chính không cần chờ hết cửa sổ chống gian lận.

- [ ] dựa vào người giám sát nộp bằng chứng gian lận trong cửa sổ khiếu nại.

> ℹ️ Đó là cách Optimistic Rollup hoạt động. ZK Rollup chứng minh tính hợp lệ ngay từ đầu.

# Tương thích dApp đa chuỗi

Khi so sánh `Optimistic Rollup` và `ZK Rollup`, phần lớn người dùng quan tâm nhất tới thời gian rút tiền. Nhưng vì độ trễ khi rút có thể được giải quyết bằng cầu nối bên thứ ba, đó không nên là yếu tố quyết định khi chọn giải pháp mở rộng để khám phá.

Nhiều Optimistic Rollup “tương đương EVM”, nghĩa là L2 hỗ trợ sẵn mọi dApp chạy được trên `Máy ảo Ethereum` (EVM). Tương đương EVM cho phép triển khai lại mọi hợp đồng thông minh từng chạy trên mạng chính, nhờ đó người dùng L2 truy cập được dApp yêu thích.

Các sidechain như Polygon PoS cũng chạy EVM sẵn, và phần lớn ZK Rollup hiện đại (như ZKsync, Linea và Scroll) cũng tương đương EVM hoặc rất gần như vậy. Kết quả là những dApp Ethereum yêu thích của bạn có mặt trên hầu hết hệ sinh thái L2.

![](https://app.banklessacademy.com/images/layer-2-blockchains/cross-chain-dapp-compatibility-8a372647.svg)

# Knowledge Check 6

Giải pháp mở rộng tương đương EVM có thể dễ dàng tái dùng hợp đồng thông minh đã triển khai trên mạng chính.

- [x] Đúng

> ℹ️ Chính xác! Tương đương EVM nghĩa là mọi hợp đồng thông minh chạy trên mạng chính đều triển khai được trên L2, kéo theo các dApp quen thuộc.

- [ ] Sai

> ℹ️ Thử lại! Tái dùng hợp đồng thông minh của mạng chính chính là mục đích của tương đương EVM.

# Tóm tắt bài học

Các blockchain L1 như Bitcoin và Ethereum hiện bị ràng buộc bởi `bộ ba bất khả thi của blockchain`. `Kênh thanh toán` trên mạng Bitcoin, hay sidechain và Rollup trên Ethereum, giúp các mạng này mở rộng và giảm nhẹ bộ ba đó.

`Cầu nối` kết nối blockchain L1 với `sidechain` và `rollup`, và cách hợp đồng cầu nối vận hành ảnh hưởng tới đặc tính của mạng được kết nối.

Tiền trên sidechain không kế thừa `bảo mật` của Ethereum: token bắc cầu bị khóa trong một hợp đồng trên mạng chính, nhưng độ an toàn của chúng phụ thuộc vào validator và hợp đồng cầu nối của chính sidechain. Các chuỗi này có tập validator nhỏ nhưng mạnh, cho phép tăng tốc độ giao dịch và giảm phí gas, đổi lại là phi tập trung và bảo mật kém hơn.

Rollup cũng tự xác thực và xử lý giao dịch như sidechain, nhưng hợp đồng cầu nối buộc chúng đưa ra “bằng chứng thuyết phục” về tính hợp lệ trước khi dữ liệu được công nhận. Nhờ đó chúng giữ được mức `bảo mật` và `sự phi tập trung` phù hợp với giá trị của Ethereum. Có hai cách tạo “bằng chứng thuyết phục” này: Optimistic Rollup và ZK Rollup. `Optimistic Rollup` giữ độ trễ vài ngày trước khi quyết toán lô giao dịch trên mạng chính, trong thời gian đó validator của cầu nối phát hiện và báo cáo gian lận. `ZK Rollup` cung cấp bảo đảm toán học về tính hợp lệ của giao dịch, nhờ công nghệ `zero-knowledge`.

Hiện nay, cả Optimistic Rollup và ZK Rollup hiện đại đều tương thích cao với hợp đồng thông minh của mạng chính Ethereum, giúp dApp từ mạng chính dễ dàng triển khai trên mạng của chúng. Nhiều người tin ZK Rollup sẽ là giải pháp mở rộng của tương lai, nhờ tính chung cuộc nhanh và bảo đảm hợp lệ mạnh mẽ.

# Bắt đầu hành trình Layer 2 với Optimism hoặc Base 🙂

Optimism và Base, cả hai đều là Optimistic Rollup tương đương EVM, là những L2 tuyệt vời để Nhà thám hiểm khởi đầu. Dùng dApp trên hai chuỗi này có cảm giác giống L1, chỉ rẻ hơn và nhanh hơn, và cả hai đều dùng ETH làm gas. Nhiệm vụ sắp tới là bước đầu tiên trên hành trình của bạn với Optimism hoặc Base!

Cả hai hệ sinh thái đều thấm đẫm giá trị Ethereum, trong đó Optimism nổi tiếng với việc [tài trợ hàng hóa công cộng](https://optimism.mirror.xyz/wqk1Yeyn2OhV9paDzbRXvQ0m0JYDu2npbSkMClwk1rY) mang lại giá trị cho hệ sinh thái, như chương trình giáo dục miễn phí của Bankless Academy.

Optimism và Base không chỉ là nền tảng dựa trên Optimistic Rollup: chúng cho thấy blockchain có thể giải quyết vấn đề thật và mở ra cách giao dịch, phối hợp mới. Và điều đó đủ để tất cả chúng ta lạc quan. 🙂

![](https://app.banklessacademy.com/images/layer-2-blockchains/start-your-layer-2-journey-with-optimism-or-base--54a0f80a.svg)
