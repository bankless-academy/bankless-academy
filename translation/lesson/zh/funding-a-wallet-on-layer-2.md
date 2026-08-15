---
TITLE: 为 Layer 2 钱包充值
DESCRIPTION: 学会通过 CEX、第三方入金通道和跨链桥为 L2 钱包充值。
LANGUAGE: 简体中文
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
## 要点速览

> * 在 Base、Optimism、Arbitrum 这类以太坊扩容方案上，给钱包充值有很多种方式。
>
> * 中心化交易所常常提供直达 Layer 2 的`入金通道`。
>
> * 第三方支付应用让用户可以用银行账户、借记卡或信用卡为 Layer 2 上的钱包充值。
>
> * 协议自带的跨链桥让用户把资金从`以太坊主网`发送到 Layer 2。

如果你刚接触加密世界，那些关于 `Layer 2`（简称 L2）有多重要的讨论，听起来大概有点奇怪，甚至让人困惑。[Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains) 通常指的是[以太坊主网](https://ethereum.org/)，而 Layer 2 是一类特定的以太坊扩容方案：它让用户继承以太坊的安全性，同时享受低廉的交易费和很快的`区块`确认时间。如果你听说过 [Optimism](https://www.optimism.io/)、[Arbitrum](https://arbitrum.io/) 或 [Base](https://www.base.org/)，它们就是 Layer 2 扩容方案。[Polygon](https://polygon.technology/) 也常被归入同一类（它其实是`侧链`，不过这里先不深究）。

以太坊上的每一笔交易都要付费，这笔费用叫 `Gas`。Gas 以 `gwei` 计价，那是 ETH 的一个极小单位。费用随需求涨落：2021 年需求高峰时，主网上一次简单的`代币兑换`可能要花几十美元，热门 NFT 铸造更是把费用推得高得多。如今，主网上一笔典型交易的成本远低于 1 美元，同样的操作在 Layer 2 上只要几美分甚至更少。

因为 Layer 2 上的交易确认快、执行成本低，许多最有创意的协议都建在 L2 上。不过，除非你在这个生态里待了一阵子，否则很难凭直觉知道该怎么开始使用 Layer 2。但有一个明确的起点：给你在 Layer 2 上的`钱包`充值。

给 L2 钱包充值主要有三种方式：把加密资产从`中心化交易所`直接提到 Layer 2 网络；用第三方加密支付服务为 L2 钱包充值；或者通过跨链协议把数字资产从主网发送到 L2。

> 请注意，你需要有一个加密货币钱包，比如 [Zerion](https://zerion.io/)、[MetaMask](https://metamask.io/) 或 [Taho](https://taho.xyz/)，以及一个以太坊钱包`地址`，才能继续。如果你还没有创建`非托管钱包`，请[先上这一课](https://app.banklessacademy.com/lessons/wallet-basics)！
>
> 有了非托管的以太坊钱包地址之后，你就可以继续自己的加密之旅了。

## 从 CEX 充值

直接从中心化交易所（CEX）给钱包充值，可能是把数字资产转到 L2 最简单的方式，尤其是当你已经在交易所里持有加密货币时。多数主流 CEX 都提供这个选项，只是界面上不一定标得很清楚。

以 [Coinbase](https://www.coinbase.com/) 为例，用户只要几步就能把资金直接发送到 Optimism、Polygon 或 Base（Coinbase 自己的 Layer 2）这些网络：

1\. 打开 [Coinbase](https://www.coinbase.com/)。

2\. 在 Coinbase 上[购买](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency)或持有 ETH。

3\. 选择网站顶部的「Send & Receive」（发送与接收）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. 输入你想发送的法币或 ETH 金额（可以在金额右侧切换法币和加密货币），选择「Pay with」（支付方式）并选中 Ethereum，然后在「To」（接收方）栏里填入接收资金的钱包地址。点击「Continue」（继续）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. 在下一屏，选择「Network」（网络），把网络从 Ethereum 改成 Optimism（列表里也有 Base 等其他 Layer 2）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. 核对信息，确认无误后选择「Send Now」（立即发送）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

多数主流交易所都支持把加密资产直接发送到 L2。[Coinbase](https://www.coinbase.com/)、[Binance](https://www.binance.com/) 和 [Kraken](https://www.kraken.com/) 都支持提现到 Base、Optimism、Arbitrum 等主要 Layer 2。小贴士：发送之前，先在交易所的提现网络列表里确认它支持哪些 L2。

## 第三方入金通道

给 L2 钱包充值的另一个简单办法，是利用许多第三方加密支付公司提供的直达 L2 服务。[MoonPay](https://www.moonpay.com/)、[Ramp](https://ramp.network/buy/) 和 [Transak](https://global.transak.com/) 是最常用的三个选项，不用中心化交易所也能给加密钱包充值。

和多数交易所一样，这些第三方`入金通道`会要求你提供`了解你的客户`信息。不过一旦过了这些基本门槛，这类支付方式就是在整个生态中购买加密资产并转到 Layer 2 的便捷途径。

以 MoonPay 为例，步骤是：

1\. 打开 [MoonPay](https://www.moonpay.com/)。

2\. 选择网站顶部或中间的「Buy crypto」（购买加密货币）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. 输入你想支付的法币金额和对应币种。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. 选择一种数字资产，这里是 ETH。输入「ETH」，你会看到可以购买 ETH 的不同网络（可能需要往下滚动）；选中你想用的 Layer 2。点击「Continue」（继续）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. 接着，系统会提示你输入身份验证和支付信息。

6\. 完成后，输入你的以太坊钱包地址。系统会请你确认这个钱包可以安全使用。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. 全部填好后核对信息无误，选择「Pay」（支付）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

和 CEX 一样，多数主流第三方支付入金通道都提供直达 L2 的功能。好好利用这些创新，省下交易费用，也让你的`区块链`探索走得更远。

## 通过跨链桥充值

如果你已经在`以太坊主网`上有资金，把加密资产转到 L2 最简单的办法就是使用跨链协议。跨链桥是我们对这类协议的称呼，它们帮我们在加密世界里搬运资金，其中有不少是专门把加密资产从以太坊主网转到 Layer 2 的。

### 原生跨链桥

原生跨链桥是由 Layer 2 协议自己设计的桥。在 Arbitrum、Optimism、Base 这类 `Optimistic Rollup` 上，存入的资金通常几分钟内就会到达 L2，但把加密资产转回主网大约需要一周。[Arbitrum 跨链桥](https://bridge.arbitrum.io/)和 [Optimism 跨链桥](https://app.optimism.io/bridge/)都是这样工作的：这段等待期让网络有时间在提款结算前拦下无效的提款。

### 第三方跨链桥

因为没人喜欢等待，于是出现了不少第三方跨链服务，帮我们在 L2 之间即时转移资金。最常用的选项包括 [Across Protocol](https://across.to/bridge) 和 [Relay](https://relay.link/bridge)，你也可以用 [Bungee](https://bungee.exchange/) 比较多个协议的跨链费用。以 Across 为例，你只需要：

1\. 打开 [Across Protocol](https://across.to/bridge) 跨链桥并连接钱包。

2\. 要把资金跨到 L2，在「From」（来源）中选择 Ethereum。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. 选择资产和你想跨链的数量（小贴士：只跨链某条区块链的原生`币`，这里是 ETH）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. 接着，在「To」（目标）中选择你的 L2 方案。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. 核对交易信息，如果一切无误，选择「Send」（发送）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

把资金从主网转到 L2 就是这么简单，几乎所有跨链桥的用法都一样：选一条发送资金的区块链，选一个像 Base 或 Optimism 这样的目的地，挑好资产和金额，你就跨过了区块链之间的裂谷。小贴士：和从 CEX 发送一样，你可以用 [L2BEAT](https://l2beat.com/bridges/summary) 找到通往你目标 L2 的合适跨链桥。

## 通往 L2 之路

Layer 2 让各种经验水平的用户，都有机会去尝试那些在主网上往往成本过高的去中心化金融玩法。因为在这些网络上交易只要几分钱（你可以在[这里](https://www.growthepie.com/)比较成本），它是熟悉去中心化金融基础模块的好地方，比如兑换、`流动性池`或`收益农场`。

用 CEX 或跨链桥把资金转到 L2，是你从加密新手走向熟练的必经一步。记住，要在钱包里看到这些资金，你可能需要在钱包设置里添加对应网络，这可以在 [Chainlist](https://chainlist.org/) 上完成。如果你只想确认资金安全到达了 L2 钱包，可以在 [Blockscan](https://blockscan.com/) 这类`区块浏览器`上查询你的地址，它能一次搜索多条网络；或者打开 [Uniswap](https://app.uniswap.org/) 这样的 DEX，选择 L2 网络和对应资产来查看余额。

随着技能提升，你还需要学会把交易费用降下来。学会给 L2 钱包充值只是第一步，接下来的路要靠你自己走。欢迎你，探索者，新世界正在等着你。

---

出发吧，Layer 2 上的以太坊在等着你！希望你喜欢《探索者手册》中的这一篇：《为 Layer 2 钱包充值》。

如果你想拥有一份副本，方便旅途中随时查阅，或者想支持 Bankless Academy 未来的内容，别忘了收藏这一篇。一路平安，探索者！

***

**作者**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** 是 BanklessDAO 的作者、编辑和协调人，也是 Good Morning News 的主编。他还在 DAOpunks 帮助建设一个以资助为核心的组织。

**编辑**

**[Trewkat](https://twitter.com/trewkat)** 是 BanklessDAO 的作者和编辑。她热衷于尽可能多地了解加密货币和 NFT，尤其关注如何把这些知识更好地传达给别人。

**赞助方**

本文由 **[Optimism](https://www.optimism.io/)** 资助。
