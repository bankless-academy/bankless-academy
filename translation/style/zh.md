# Chinese (Simplified) style guide (translate-content)

Variety and register
- **Simplified Chinese (简体中文), mainland conventions.** Not Traditional, not
  Taiwan or Hong Kong terminology. Where mainland and Taiwan crypto usage
  differs, use mainland: 区块链 (not 區塊鏈), 智能合约 (not 智慧合約),
  比特币, 以太坊, 钱包, 质押.
- Plain, direct, second person 你 (not 您 — 您 reads like a bank).
- Short sentences. Chinese renders in roughly 40-60% of the English character
  count, so slides come out visually shorter, but avoid the temptation to pad.

Length — the estimator already handles full width
Chinese characters are full width, occupying about two Latin character widths.
`displayWidth` in `content-lib.js` counts them as 2, so the 22-line ceiling is
measured correctly. Do not assume "fewer characters means it fits" — trust the
verifier.

Script and terms
- Established crypto vocabulary is translated, not transliterated: 区块链
  (blockchain), 代币 (token), 钱包 (wallet), 质押 (staking), 挖矿 (mining),
  智能合约 (smart contract), 稳定币 (stablecoin), 私钥 / 公钥 (private/public key).
- Product and network names stay in **Latin script**: Bitcoin, Ethereum,
  Uniswap, Optimism, Base, MetaMask, Coinbase, Velodrome, Rocket Pool,
  OpenSea, Revoke.cash. Do not transliterate them (比特币 and 以太坊 are the
  exceptions — those two are genuinely standard as Chinese words for the
  currency and network).
- Tickers, units and acronyms stay Latin: ETH, BTC, USDC, OP, gwei, wei, API,
  DEX, CEX, AMM, KYC, TVL, LP, NFT, DAO, DeFi, Web3, ERC-20, EIP.
- Some crypto terms are conventionally kept in English even in Chinese prose:
  Rollup, Gas, Layer 1 / Layer 2, DeFi, NFT. Keep them.

Measure words and tooltips
Chinese has no spaces and no inflection, so a backticked term sits directly
against its measure word or particle: 一个`钱包`、这些`代币`. The term itself
never changes shape, so — unlike Turkish or Ukrainian — you do **not** need
`keyword_forms` for grammar. Keep measure words and 的 **outside** the
backticks.

Emphasis — punctuation must sit OUTSIDE the markers
CommonMark decides whether `**` opens or closes from the characters flanking
it, and Chinese breaks the rule constantly because ：、「」 are punctuation and
there are no word spaces. These do **not** render, and ship a literal `**` to
the reader:

    **平台费用：**CEX 自行…    ->  **平台费用**：CEX 自行…
    **「影响」**的分配…         ->  「**影响**」的分配…
    **[课程名](url)**的        ->  [**课程名**](url)的
    水位的_变化_（价格影响）    ->  水位的*变化*（价格影响）

Rules: never end or begin a `**…**` span on punctuation, never wrap a whole
link in bold (bold the link *text* instead), and never use `_…_` next to
Chinese characters — `_` cannot open or close intraword, so use `*…*`.
`validate-content.js` renders every line with markdown-it and fails the build
on any marker that survives as literal text.

Glossary overrides
`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
use the term.

```terms
private key = 私钥
public key = 公钥
blockchain = 区块链
blockchain technology = 区块链技术
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = 智能合约
cryptocurrency = 加密货币
decentralized = 去中心化
decentralization = 去中心化
dapp = dApp
staking pool = 质押池
staking = 质押
web3 = Web3
web2 = Web2
block = 区块
crypto wallet = 加密钱包
wallet = 钱包
liquidity = 流动性
liquidity pool = 流动性池
dex = DEX
cex = CEX
validator node = 验证者节点
node operator = 节点运营者
address = 地址
gas = Gas
gas fee = Gas 费
optimistic rollup = Optimistic Rollup
zk rollup = ZK Rollup
rollup = Rollup
seed phrase = 助记词
recovery phrase = 助记词
dao = DAO
peer-to-peer = 点对点
defi = DeFi
hot wallet = 热钱包
cold wallet = 冷钱包
ledger = 账本
price impact = 价格影响
decentralized exchange = 去中心化交易所
centralized exchange = 中心化交易所
onchain = 链上
sidechain = 侧链
permissionless = 无需许可
trustless = 无需信任
token = 代币
token allowance = 代币授权
stablecoin = 稳定币
mining = 挖矿
miners = 矿工
self-custody = 自我托管
hash = 哈希
nft = NFT
slippage = 滑点
governance = 治理
monetary policy = 货币政策
central bank = 中央银行
gold standard = 金本位
max supply = 最大供应量
circulating supply = 流通供应量
scarcity = 稀缺性
inflation = 通货膨胀
halving = 减半
```

Typography
- Use full-width Chinese punctuation: 。，、；：？！（）「」《》 — never the
  half-width . , ; : ? ! ( ) in Chinese prose.
- **No spaces between Chinese words.** Put a space around Latin-script runs
  and numbers where it aids readability (使用 Ethereum 网络，支付 0.01 ETH).
- Never use em dashes (—). Chinese uses —— as a dash; do not introduce it,
  rewrite with a colon or a new sentence.
- Numbers stay half-width Arabic with a period decimal separator and comma
  thousands separator: 0.0002 ETH, 120,000, 51%. **No space** before the
  percent sign — unlike the European languages in this repo.
- Large figures may use 万 / 亿 where natural (1 亿美元), but keep the figure
  accurate to the English.

Interface strings
- Keep an English app's button label in English and gloss it in Chinese on
  first use: 点击「Connect Wallet」(连接钱包)。
