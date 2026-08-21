---
TITLE: 為 Layer 2 錢包充值
DESCRIPTION: 學會透過 CEX、第三方入金通道和跨鏈橋為 L2 錢包充值。
LANGUAGE: 繁體中文
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
## 要點總結

> * 在 Base、Optimism、Arbitrum 這類以太坊擴容方案上，給錢包充值有很多種方式。
>
> * 中心化交易所常常提供直達 Layer 2 的`入金通道`。
>
> * 第三方支付應用讓使用者可以用銀行帳戶、簽帳金融卡或信用卡為 Layer 2 上的錢包充值。
>
> * 協議自帶的跨鏈橋讓使用者把資金從`以太坊主網`傳送到 Layer 2。

如果你剛接觸加密世界，那些關於 `Layer 2`（簡稱 L2）有多重要的討論，聽起來大概有點奇怪，甚至讓人困惑。[Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains) 通常指的是[以太坊主網](https://ethereum.org/)，而 Layer 2 是一類特定的以太坊擴容方案：它讓使用者繼承以太坊的安全性，同時享受低廉的交易費和很快的`區塊`確認時間。如果你聽說過 [Optimism](https://www.optimism.io/)、[Arbitrum](https://arbitrum.io/) 或 [Base](https://www.base.org/)，它們就是 Layer 2 擴容方案。[Polygon](https://polygon.technology/) 也常被歸入同一類（它其實是`側鏈`，不過這裡先不深究）。

以太坊上的每一筆交易都要付費，這筆費用叫 `Gas`。Gas 以 `gwei` 計價，那是 ETH 的一個極小單位。費用隨需求漲落：2021 年需求高峰時，主網上一次簡單的`代幣兌換`可能要花幾十美元，熱門 NFT 鑄造更是把費用推得高得多。如今，主網上一筆典型交易的成本遠低於 1 美元，同樣的操作在 Layer 2 上只要幾美分甚至更少。

因為 Layer 2 上的交易確認快、執行成本低，許多最有創意的協議都建在 L2 上。不過，除非你在這個生態裡待了一陣子，否則很難憑直覺知道該怎麼開始使用 Layer 2。但有一個明確的起點：給你在 Layer 2 上的`錢包`充值。

給 L2 錢包充值主要有三種方式：把加密資產從`中心化交易所`直接提到 Layer 2 網路；用第三方加密支付服務為 L2 錢包充值；或者透過跨鏈協議把數位資產從主網傳送到 L2。

> 請注意，你需要有一個加密貨幣錢包，比如 [Zerion](https://zerion.io/)、[MetaMask](https://metamask.io/) 或 [Taho](https://taho.xyz/)，以及一個以太坊錢包`地址`，才能繼續。如果你還沒有建立`非託管錢包`，請[先上這一課](https://app.banklessacademy.com/lessons/wallet-basics)！
>
> 有了非託管的以太坊錢包地址之後，你就可以繼續自己的加密之旅了。

## 從 CEX 充值

直接從中心化交易所（CEX）給錢包充值，可能是把數位資產轉到 L2 最簡單的方式，尤其是當你已經在交易所裡持有加密貨幣時。多數主流 CEX 都提供這個選項，只是介面上不一定標得很清楚。

以 [Coinbase](https://www.coinbase.com/) 為例，使用者只要幾步就能把資金直接傳送到 Optimism、Polygon 或 Base（Coinbase 自己的 Layer 2）這些網路：

1\. 開啟 [Coinbase](https://www.coinbase.com/)。

2\. 在 Coinbase 上[購買](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency)或持有 ETH。

3\. 選擇網站頂部的「Send & Receive」（傳送與接收）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. 輸入你想傳送的法幣或 ETH 金額（可以在金額右側切換法幣和加密貨幣），選擇「Pay with」（支付方式）並選中 Ethereum，然後在「To」（接收方）欄裡填入接收資金的錢包地址。點選「Continue」（繼續）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. 在下一屏，選擇「Network」（網路），把網路從 Ethereum 改成 Optimism（列表裡也有 Base 等其他 Layer 2）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. 核對資訊，確認無誤後選擇「Send Now」（立即傳送）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

多數主流交易所都支援把加密資產直接傳送到 L2。[Coinbase](https://www.coinbase.com/)、[Binance](https://www.binance.com/) 和 [Kraken](https://www.kraken.com/) 都支援提現到 Base、Optimism、Arbitrum 等主要 Layer 2。小貼士：傳送之前，先在交易所的提現網路列表裡確認它支援哪些 L2。

## 第三方入金通道

給 L2 錢包充值的另一個簡單辦法，是利用許多第三方加密支付公司提供的直達 L2 服務。[MoonPay](https://www.moonpay.com/)、[Ramp](https://ramp.network/buy/) 和 [Transak](https://global.transak.com/) 是最常用的三個選項，不用中心化交易所也能給加密錢包充值。

和多數交易所一樣，這些第三方`入金通道`會要求你提供`瞭解你的客戶`資訊。不過一旦過了這些基本門檻，這類支付方式就是在整個生態中購買加密資產並轉到 Layer 2 的便捷途徑。

以 MoonPay 為例，步驟是：

1\. 開啟 [MoonPay](https://www.moonpay.com/)。

2\. 選擇網站頂部或中間的「Buy crypto」（購買加密貨幣）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. 輸入你想支付的法幣金額和對應幣種。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. 選擇一種數位資產，這裡是 ETH。輸入「ETH」，你會看到可以購買 ETH 的不同網路（可能需要往下滾動）；選中你想用的 Layer 2。點選「Continue」（繼續）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. 接著，系統會提示你輸入身份驗證和支付資訊。

6\. 完成後，輸入你的以太坊錢包地址。系統會請你確認這個錢包可以安全使用。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. 全部填好後核對資訊無誤，選擇「Pay」（支付）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

和 CEX 一樣，多數主流第三方支付入金通道都提供直達 L2 的功能。好好利用這些創新，省下交易費用，也讓你的`區塊鏈`探索走得更遠。

## 透過跨鏈橋充值

如果你已經在`以太坊主網`上有資金，把加密資產轉到 L2 最簡單的辦法就是使用跨鏈協議。跨鏈橋是我們對這類協議的稱呼，它們幫我們在加密世界裡搬運資金，其中有不少是專門把加密資產從以太坊主網轉到 Layer 2 的。

### 原生跨鏈橋

原生跨鏈橋是由 Layer 2 協議自己設計的橋。在 Arbitrum、Optimism、Base 這類 `Optimistic Rollup` 上，存入的資金通常幾分鐘內就會到達 L2，但把加密資產轉回主網大約需要一週。[Arbitrum 跨鏈橋](https://bridge.arbitrum.io/)和 [Optimism 跨鏈橋](https://app.optimism.io/bridge/)都是這樣工作的：這段等待期讓網路有時間在提款結算前攔下無效的提款。

### 第三方跨鏈橋

因為沒人喜歡等待，於是出現了不少第三方跨鏈服務，幫我們在 L2 之間即時轉移資金。最常用的選項包括 [Across Protocol](https://across.to/bridge) 和 [Relay](https://relay.link/bridge)，你也可以用 [Bungee](https://bungee.exchange/) 比較多個協議的跨鏈費用。以 Across 為例，你只需要：

1\. 開啟 [Across Protocol](https://across.to/bridge) 跨鏈橋並連線錢包。

2\. 要把資金跨到 L2，在「From」（來源）中選擇 Ethereum。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. 選擇資產和你想跨鏈的數量（小貼士：只跨鏈某條區塊鏈的原生`幣`，這裡是 ETH）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. 接著，在「To」（目標）中選擇你的 L2 方案。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. 核對交易資訊，如果一切無誤，選擇「Send」（傳送）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

把資金從主網轉到 L2 就是這麼簡單，幾乎所有跨鏈橋的用法都一樣：選一條傳送資金的區塊鏈，選一個像 Base 或 Optimism 這樣的目的地，挑好資產和金額，你就跨過了區塊鏈之間的裂谷。小貼士：和從 CEX 傳送一樣，你可以用 [L2BEAT](https://l2beat.com/bridges/summary) 找到通往你目標 L2 的合適跨鏈橋。

## 通往 L2 之路

Layer 2 讓各種經驗水平的使用者，都有機會去嘗試那些在主網上往往成本過高的去中心化金融玩法。因為在這些網路上交易只要幾分錢（你可以在[這裡](https://www.growthepie.com/)比較成本），它是熟悉去中心化金融基礎模組的好地方，比如兌換、`流動性池`或`收益農場`。

用 CEX 或跨鏈橋把資金轉到 L2，是你從加密新手走向熟練的必經一步。記住，要在錢包裡看到這些資金，你可能需要在錢包設定裡新增對應網路，這可以在 [Chainlist](https://chainlist.org/) 上完成。如果你只想確認資金安全到達了 L2 錢包，可以在 [Blockscan](https://blockscan.com/) 這類`區塊瀏覽器`上查詢你的地址，它能一次搜尋多條網路；或者開啟 [Uniswap](https://app.uniswap.org/) 這樣的 DEX，選擇 L2 網路和對應資產來檢視餘額。

隨著技能提升，你還需要學會把交易費用降下來。學會給 L2 錢包充值只是第一步，接下來的路要靠你自己走。歡迎你，探索者，新世界正在等著你。

---

出發吧，Layer 2 上的以太坊在等著你！希望你喜歡《探索者手冊》中的這一篇：《為 Layer 2 錢包充值》。

如果你想擁有一份副本，方便旅途中隨時查閱，或者想支援 Bankless Academy 未來的內容，別忘了收藏這一篇。一路平安，探索者！

***

**作者**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** 是 BanklessDAO 的作者、編輯和協調人，也是 Good Morning News 的主編。他還在 DAOpunks 幫助建設一個以資助為核心的組織。

**編輯**

**[Trewkat](https://twitter.com/trewkat)** 是 BanklessDAO 的作者和編輯。她熱衷於儘可能多地瞭解加密貨幣和 NFT，尤其關注如何把這些知識更好地傳達給別人。

**贊助方**

本文由 **[Optimism](https://www.optimism.io/)** 資助。
