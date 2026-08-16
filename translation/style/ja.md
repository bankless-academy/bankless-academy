# Japanese style guide (translate-content)

Register and address
- Use **です・ます体** (polite form) throughout. Not 敬語 (humble/honorific) —
  that reads like a bank. Not だ・である体 — that reads like a textbook.
- **Do not use 「あなた」** as a second-person pronoun. Japanese drops the
  subject; "あなたのウォレット" should be just "ウォレット" or "ご自身のウォレット"
  when ownership must be explicit. Overusing あなた is the clearest sign of a
  machine translation.
- Short sentences. Break long English sentences at the clause boundary rather
  than chaining with 〜ので〜ため〜が.
- Explorer (the site's term for its readers) -> **エクスプローラー**.

Length — Japanese is the one language that gets SHORTER
Japanese typically renders in 40-60% of the English character count, but each
character is **full width**, occupying about two Latin character widths. The
length estimator accounts for this (`displayWidth` in `content-lib.js` counts
CJK as 2), so the 22-line ceiling is measured correctly — but the intuition
"my translation is much shorter, so it must fit" is wrong. Trust the verifier.

Script and terms
- Established crypto vocabulary stays in **katakana**: ブロックチェーン、トークン、
  ウォレット、ステーキング、マイニング、ロールアップ、ステーブルコイン、
  スマートコントラクト、エアドロップ、ブリッジ。
- Product and network names stay in **Latin script**: Bitcoin, Ethereum,
  Uniswap, Optimism, Base, MetaMask, Coinbase, Velodrome, Rocket Pool,
  OpenSea, Revoke.cash. Do not transliterate them.
- Tickers, units and acronyms stay Latin: ETH, BTC, USDC, OP, gwei, wei, API,
  DEX, CEX, AMM, KYC, TVL, LP, NFT, DAO, DeFi, Web3, ERC-20, EIP.
- Where a native Japanese term is genuinely standard, use it: 秘密鍵
  (private key), 公開鍵 (public key), 取引 / トランザクション (transaction),
  手数料 (fee), 分散型 (decentralized), 中央集権型 (centralized).

Particles and tooltips
Japanese has no spaces, so a backticked term sits directly against its
particle: `ウォレット`を、`ウォレット`は、`ウォレット`が. The backtick boundary
keeps the term intact, so the tooltip resolves on the bare term — you do NOT
need suffixed forms the way Turkish and Ukrainian do. Keep the particle
**outside** the backticks.

Emphasis — punctuation must sit OUTSIDE the markers
CommonMark decides whether `**` opens or closes from the characters flanking
it, and Japanese breaks the rule constantly because 「」： are punctuation and
there are no word spaces. These do **not** render, and ship a literal `**` to
the reader:

    **価値：**時間が…        ->  **価値**：時間が…
    **「代替可能性」**は…     ->  「**代替可能性**」は…
    **[レッスン名](url)**の   ->  [**レッスン名**](url)の
    ウォレットの_増減_を      ->  ウォレットの*増減*を

Rules: never end or begin a `**…**` span on punctuation, never wrap a whole
link in bold (bold the link *text* instead), and never use `_…_` next to
Japanese characters — `_` cannot open or close intraword, so use `*…*`.
`validate-content.js` renders every line with markdown-it and fails the build
on any marker that survives as literal text.

No nakaguro in katakana compounds
ETHGlossary separates katakana compounds with ・ (スマート・コントラクト、
ステーキング・プール、ピア・ツー・ピア). **We do not.** Write them solid:
スマートコントラクト、ステーキングプール、ピアツーピア、ブロックエクスプローラー、
オプティミスティックロールアップ. The one exception is a foreign personal name,
where ・ is correct Japanese: サトシ・ナカモト.

Glossary overrides
`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
use the term.

Two terms that drift
- **transaction -> トランザクション**, always, when it means an onchain
  transaction. Reserve **取引** for trading and exchange senses (trade, order
  book, OTC), otherwise 取引所 stops reading as "place of transactions".
- **Proof of Work / Proof of Stake -> プルーフオブワーク / プルーフオブステーク**
  in prose; the acronyms PoW / PoS stay Latin.

```terms
transaction = トランザクション
proof of work = プルーフオブワーク
proof of stake = プルーフオブステーク
mint = ミント
allowance = 許可枠
token allowance = トークン許可
bridge = ブリッジ
trade = 取引する
validator = バリデーター
private key = 秘密鍵
public key = 公開鍵
blockchain = ブロックチェーン
blockchain technology = ブロックチェーン技術
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = スマートコントラクト
cryptocurrency = 暗号資産
decentralized = 分散型
decentralization = 分散化
dapp = dApp
staking pool = ステーキングプール
staking = ステーキング
web3 = Web3
web2 = Web2
block = ブロック
crypto wallet = 暗号資産ウォレット
wallet = ウォレット
liquidity = 流動性
liquidity pool = 流動性プール
dex = DEX
cex = CEX
validator node = バリデーターノード
node operator = ノードオペレーター
address = アドレス
gas = ガス
gas fee = ガス代
optimistic rollup = オプティミスティックロールアップ
zk rollup = ZKロールアップ
rollup = ロールアップ
seed phrase = シードフレーズ
recovery phrase = リカバリーフレーズ
dao = DAO
peer-to-peer = ピアツーピア
defi = DeFi
hot wallet = ホットウォレット
cold wallet = コールドウォレット
ledger = 台帳
price impact = 価格インパクト
decentralized exchange = 分散型取引所
centralized exchange = 中央集権型取引所
onchain = オンチェーン
sidechain = サイドチェーン
permissionless = パーミッションレス
trustless = トラストレス
token = トークン
token allowance = トークン許可
stablecoin = ステーブルコイン
mining = マイニング
miners = マイナー
self-custody = 自己保管
hash = ハッシュ
nft = NFT
slippage = スリッページ
governance = ガバナンス
monetary policy = 金融政策
central bank = 中央銀行
gold standard = 金本位制
max supply = 最大供給量
circulating supply = 流通供給量
scarcity = 希少性
inflation = インフレ
halving = 半減期
```

Typography
- Use the full-width Japanese period 。 and comma 、 — never . and , in
  Japanese prose.
- Quotation marks are 「 」 (and 『 』 nested).
- **No spaces between Japanese words.** Put a space only around Latin-script
  runs where it aids readability (Ethereum の, ETH を).
- Never use em dashes (—).
- Numbers stay half-width Arabic: 0.0002 ETH, 120,000, 51%. Note Japanese uses
  a **period** decimal separator and comma thousands separator, and **no space**
  before the percent sign — unlike the European languages in this repo.
- Large figures may use 万 / 億 where natural (1億ドル), but keep the figure
  itself accurate to the English.

Interface strings
- Keep an English app's button label in English and gloss it in Japanese on
  first use: 「Connect Wallet」(ウォレットを接続)をクリックします。

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | ja |
|---|---|
| `True` | **正しい** |
| `False` | **誤り** |

**Do not re-translate these per lesson.** The 19 lessons are split across five
independent agents, so an unpinned two-word string drifts: before this section
existed, German shipped both *Wahr* and *Richtig*, Hindi both गलत and ग़लत (a
nukta apart, visually near-identical), Chinese both 正确 and 对, and Russian
three different pairs across five agents. None of it was visible to the
structural verifier, which checks that the option COUNT and the `[x]` index
match English and never looks at the option text.

Two constraints on the choice, both already satisfied above:

1. **The label must not collide with a quiz-feedback opener.** If the
   correct-answer opener were the same word as the "True" option, the toast
   would read as an echo of the option the learner just clicked rather than as
   a verdict. This is why Russian uses Правда/Неправда and not Верно/Неверно
   (its opener is `Верно!`), and why Indonesian uses Tepat! as its opener
   rather than Benar!, which is its "True" option.
2. **Keep the `[x]` on the same option index as English.** Only the option
   TEXT changes here; users have answer numbers saved in localStorage.

## Fixed section headings

The 19 lessons are split across independent agents, and these headings recur
across many of them. **Use exactly the Japanese in this table. Do not
re-translate them per lesson, and do not improve on them.** Two agents each
picking a defensible synonym is exactly what shipped three different renderings
of `Key Takeaways` in German and four of `Try again!` in Japanese, all
repaired centrally afterwards.

| English heading | Japanese | occurrences |
|---|---|---|
| `Key Takeaways` | `重要ポイント` | 7 |
| `Introduction` | `はじめに` | 6 |
| `Walkthrough` | `手順` | 3 |
| `FAQ` | `FAQ` | 3 |
| `Frequently Asked Questions` | `よくある質問` | 3 |
| `Prerequisites` | `事前に必要なもの` | 2 |
| `Choosing a DEX` | `DEX を選ぶ` | 2 |

- **`FAQ` and `Frequently Asked Questions` stay distinct** where both appear,
  exactly as in the English source.
- **A suffixed heading keeps the pinned form and appends its own suffix**,
  translated: `## Walkthrough: Using Revoke.cash` keeps the pinned rendering of
  *Walkthrough* and translates only the part after the colon.
- Keep the heading level (`#` vs `##` vs `###`) exactly as the source has it.
  No trailing period, no `**bold**`.
- **`Knowledge Check <n>` stays in English, with its original number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two.

## Fixed quiz-feedback openers

Almost every `> ℹ️` line opens with one of a handful of English interjections.
**Pin the opener; write the rest of the sentence freely.**

| English opener | Japanese |
|---|---|
| `Try again!` | `もう一度お試しください。` |
| `Correct!` | `正解です。` |

Keep the opener and the sentence after it on the same line, and keep the whole
feedback to one or two short sentences: it renders as a toast overlay, which
gets intrusive on mobile.
