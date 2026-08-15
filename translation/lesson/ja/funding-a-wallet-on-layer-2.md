---
TITLE: Layer 2 のウォレットに入金する
DESCRIPTION: CEX、外部のオンランプ、ブリッジを使って L2 のウォレットに入金する方法を学びます。
LANGUAGE: 日本語
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
## 重要なポイント

> * Base、Optimism、Arbitrum といった Ethereum のスケーリングソリューションでウォレットに入金する方法はいくつもあります。
>
> * 中央集権型取引所は、Layer 2 への直接の`オンランプ`を用意していることが多くあります。
>
> * 外部の決済アプリを使えば、銀行口座やデビットカード、クレジットカードから Layer 2 のウォレットに入金できます。
>
> * プロトコルのブリッジを使えば、`Ethereum メインネット`から Layer 2 へ資金を送れます。

暗号資産を始めたばかりだと、`Layer 2`（L2）が大切だという話は少し不思議で、正直わかりにくいはずです。[Layer 1](https://app.banklessacademy.com/lessons/layer-1-blockchains) が [Ethereum メインネット](https://ethereum.org/)を指すことが多いのに対し、Layer 2 は Ethereum のスケーリングソリューションの一種を指す言葉です。Ethereum のセキュリティを受け継ぎながら、トランザクションの手数料が安く、`ブロック`への取り込みが速いのが特徴です。[Optimism](https://www.optimism.io/)、[Arbitrum](https://arbitrum.io/)、[Base](https://www.base.org/) を聞いたことがあれば、それが Layer 2 のスケーリングソリューションです。[Polygon](https://polygon.technology/) も同じ仲間として扱われることが多くあります（正確には`サイドチェーン`ですが、ここでは気にしないでおきましょう）。

Ethereum のトランザクションには必ず手数料、つまり`ガス`がかかります。ガスは ETH のごく小さな単位である `gwei` で表されます。手数料は需要に応じて上下します。需要がピークだった 2021 年には、メインネットでの単純な`トークンスワップ`が数十ドルすることもあり、話題の NFT のミントでは手数料がさらに跳ね上がりました。今日では、メインネットの一般的なトランザクションは 1 ドルをかなり下回り、同じ操作が Layer 2 なら数セント以下で済みます。

Layer 2 のトランザクションは速く確定し、実行も安いので、最も新しいプロトコルの多くが L2 の上に作られています。ただ、この分野に長くいる人でなければ、L2 の使い始め方は直感的にはわかりません。それでも、Ethereum のスケーリングソリューションへの旅を始める場所ははっきりしています。Layer 2 で`ウォレット`に入金することです。

L2 のウォレットに入金する主な方法は 3 つあります。`中央集権型取引所`から Layer 2 のネットワークへ直接送る方法、外部の暗号資産決済サービスを使う方法、そしてブリッジのプロトコルでメインネットから L2 へデジタル資産を送る方法です。

> 進めるには、[Zerion](https://zerion.io/)、[MetaMask](https://metamask.io/)、[Taho](https://taho.xyz/) などの暗号資産ウォレットと、Ethereum のウォレット`アドレス`が必要です。まだ`ノンカストディアルウォレット`を作っていない場合は、[まずこのレッスンを受けてください](https://app.banklessacademy.com/lessons/wallet-basics)。
>
> ノンカストディアルな Ethereum のウォレットアドレスを用意できたら、暗号資産の旅を続ける準備は完了です。

## CEX から入金する

中央集権型取引所（CEX）から直接ウォレットに入金するのは、デジタル資産を L2 に移す最も簡単な方法かもしれません。すでに取引所に暗号資産を置いているなら特にそうです。主要な CEX のほとんどがこの方法を用意していますが、画面上ではわかりにくいこともあります。

たとえば [Coinbase](https://www.coinbase.com/) では、数ステップで Optimism、Polygon、Base（Coinbase 自身の Layer 2）といったネットワークに直接送金できます。

1\. [Coinbase](https://www.coinbase.com/) にアクセスします。

2\. Coinbase で ETH を[購入](https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency)するか、保有します。

3\. サイト上部の「Send & Receive」（送受信）を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-06c6d84b.png)

4\. 送りたい金額を法定通貨か ETH で入力し（金額欄の右で切り替えられます）、「Pay with」（支払い元）で Ethereum を選び、「To」（送り先）欄に送金先のウォレットアドレスを入力します。「Continue」（続ける）を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-11e1d7f9.png)

5\. 次の画面で「Network」（ネットワーク）を選び、Ethereum から Optimism に変更します（一覧には Base など他の Layer 2 もあります）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-c8d4dd72.png)

6\. 内容を確認し、問題がなければ「Send Now」（今すぐ送信）を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-9598ee73.png)

主要な取引所のほとんどが、暗号資産を L2 へ直接送る機能を用意しています。[Coinbase](https://www.coinbase.com/)、[Binance](https://www.binance.com/)、[Kraken](https://www.kraken.com/) はいずれも Base、Optimism、Arbitrum といった主要な Layer 2 への出金に対応しています。ワンポイント：送る前に、取引所の出金ネットワークの一覧で対応している L2 を必ず確認しましょう。

## 外部のオンランプ

L2 のウォレットに入金するもう一つの簡単な方法は、多くの外部の暗号資産決済会社が用意している L2 直行のサービスを使うことです。[MoonPay](https://www.moonpay.com/)、[Ramp](https://ramp.network/buy/)、[Transak](https://global.transak.com/) は、中央集権型取引所を使わずにウォレットへ入金できる人気の選択肢です。

多くの取引所と同じく、こうした外部の`オンランプ`でも`本人確認`の情報が必要です。ただ、その基本的な手続きを済ませれば、エコシステム全体で暗号資産を買い、Layer 2 に移せる手軽な方法になります。

MoonPay の手順は次のとおりです。

1\. [MoonPay](https://www.moonpay.com/) にアクセスします。

2\. サイト上部か中央の「Buy crypto」（暗号資産を買う）を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-4f0d6a11.png)

3\. 送りたい法定通貨の金額と、その通貨の単位を入力します。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-386958ca.png)

4\. デジタル資産を選びます。ここでは ETH です。「ETH」と入力すると、ETH を購入できるネットワークが表示されます（下にスクロールが必要な場合もあります）。使いたい Layer 2 を選び、「Continue」（続ける）をクリックします。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-fe6487dc.png)

5\. 次に、本人確認と支払い情報の入力を求められます。

6\. 入力が終わったら、Ethereum のウォレットアドレスを入力します。そのウォレットが安全に使えるかどうかの確認を求められます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-138ee98b.png)

7\. 完了したら内容が正しいことを確かめ、「Pay」（支払う）を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-99952ff9.png)

CEX と同じく、主要な外部の決済オンランプのほとんどが L2 直行の機能を備えています。こうした仕組みを活用して手数料を節約し、`ブロックチェーン`の探索の幅を広げましょう。

## ブリッジで入金する

すでに `Ethereum メインネット`に資金があるなら、暗号資産を L2 に移す最も簡単な方法はブリッジのプロトコルを使うことです。ブリッジとは、暗号の世界で資金を動かすために作られたプロトコルの呼び名で、Ethereum メインネットから Layer 2 へ資金を移すためのものがいくつもあります。

### ネイティブブリッジ

ネイティブブリッジは、Layer 2 のプロトコル自身が作ったブリッジです。Arbitrum、Optimism、Base のような`オプティミスティックロールアップ`では、入金はたいてい数分で L2 に届きますが、メインネットに戻すには 1 週間ほどかかります。[Arbitrum Bridge](https://bridge.arbitrum.io/) も [Optimism Bridge](https://app.optimism.io/bridge/) もこの仕組みです。待機期間は、無効な出金が確定する前にネットワークがそれを見つけるための時間です。

### 外部のブリッジ

待つのは誰でも嫌なので、L2 との間で資金をすぐに動かせる外部のブリッジサービスがいくつもあります。人気なのは [Across Protocol](https://across.to/bridge) と [Relay](https://relay.link/bridge) ですが、[Bungee](https://bungee.exchange/) を使えば複数のプロトコルの手数料を比べられます。たとえば Across を使う手順は次のとおりです。

1\. [Across Protocol](https://across.to/bridge) のブリッジにアクセスし、ウォレットを接続します。

2\. L2 に資金を送るには、「From」（送り元）で Ethereum を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-0f4e1bde.png)

3\. ブリッジする資産と金額を選びます（ワンポイント：ブリッジするのは、そのブロックチェーンのネイティブな`コイン`、ここでは ETH だけにしましょう）。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-659f509f.png)

4\. 次に、「To」（送り先）で使いたい L2 を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/across-bridge-select-destination.png)

5\. 内容を確認し、問題がなければ「Send」（送信）を選びます。

![](https://app.banklessacademy.com/images/funding-a-wallet-on-layer-2/image-8d84ca0b.png)

メインネットから L2 に資金を移すのは本当にこれだけで、ほぼすべてのブリッジが同じ流れです。送り元のブロックチェーンを選び、Base や Optimism などの送り先を選び、資産と金額を決めれば、チェーンの谷を越えていけます。ワンポイント：CEX から送るときと同じく、[L2BEAT](https://l2beat.com/bridges/summary) を使えば送り先の L2 に対応したブリッジを探せます。

## L2 への道

Layer 2 は、メインネットでは費用がかさんで手を出しにくい分散型金融を、どんな経験レベルの人でも試せるようにします。これらのネットワークでのトランザクションは数セント程度で済むので（費用は[こちら](https://www.growthepie.com/)で比べられます）、スワップ、`流動性プール`、`イールドファーム`といった分散型金融の基本要素に慣れるにはうってつけの場所です。

CEX やブリッジで L2 に資金を移すことは、暗号資産の初心者から使いこなす人になるために欠かせない一歩です。ウォレットに資金を表示するには、ウォレットの設定でネットワークを追加する必要があるかもしれません。追加は [Chainlist](https://chainlist.org/) でできます。資金が L2 のウォレットに無事届いたか確かめたいだけなら、多くのネットワークをまとめて検索できる [Blockscan](https://blockscan.com/) のような`ブロックエクスプローラー`でアドレスを調べるか、[Uniswap](https://app.uniswap.org/) のような DEX で L2 のネットワークと資産を選んで残高を見ましょう。

スキルを広げていくにつれて、手数料を抑える方法も考える必要が出てきます。L2 のウォレットへの入金はその第一歩ですが、次にどこへ進むかは自分次第です。ようこそ、エクスプローラー。新しい世界が待っています。

---

さあ動き出しましょう。Layer 2 の Ethereum が待っています。エクスプローラーズハンドブックのこの一編、「Layer 2 のウォレットに入金する」を楽しんでいただけたなら幸いです。

旅先ですぐ参照できるよう手元に置きたい方、あるいは Bankless Academy の今後のコンテンツを支援したい方は、このエントリーの収集をお忘れなく。よい旅を、エクスプローラー！

***

**著者**

**[Hiro Kennelly](https://twitter.com/HiroKennelly)** は BanklessDAO のライター、編集者、コーディネーターで、Good Morning News の編集長です。DAOpunks では助成金に力を入れた組織づくりも手伝っています。

**編集**

**[Trewkat](https://twitter.com/trewkat)** は BanklessDAO のライター兼編集者です。暗号資産と NFT についてできるだけ多くを学ぶことに関心があり、特にその知識をどう伝えるのが最善かに注目しています。

**支援**

この記事は **[Optimism](https://www.optimism.io/)** の支援で制作されました。
