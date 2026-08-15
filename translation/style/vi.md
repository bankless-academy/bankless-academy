# Vietnamese style guide (translate-content)

Register and address
- Address the reader as **`bạn`**. It is the one second-person pronoun that
  carries no age, gender or status claim, which is exactly the Bankless
  Academy voice: a peer teaching a peer. Every alternative encodes a
  relationship we have no right to assume, so do not use them: `quý khách` /
  `quý vị` (customer service, reads like a bank), `anh` / `chị` / `em`
  (presumes age and gender), `mình` (chatty blog voice, and it collides with
  the first person).
- **Two words for "we", and they are not interchangeable.** Use **`chúng tôi`**
  when the speaker is Bankless Academy and the reader is not included
  ("Chúng tôi khuyên bạn nên bắt đầu với ứng dụng ví Zerion"). Use
  **`chúng ta`** when the reader is inside the group, which is most of the
  teaching voice ("Trong bài học này, chúng ta sẽ tìm hiểu cách ví hoạt động").
  Getting this backwards makes the course sound like a vendor pitch.
- **Drop `của bạn` when ownership is obvious.** English repeats the possessive;
  Vietnamese does not. "Open your wallet app and check your balance" is
  `Mở ứng dụng ví của bạn và kiểm tra số dư`, not `... số dư của bạn`.
  Possessives on every noun are the clearest sign of a machine translation.
- Imperatives are the bare verb: `Nhấn vào nút Connect Wallet`, `Mở ứng dụng`,
  `Lưu cụm từ khôi phục ở nơi an toàn`. Add `hãy` only for encouragement, at
  most once per slide, and never `xin vui lòng` (form-letter register).
- Short sentences. Split a long English sentence at the clause boundary rather
  than chaining `mà`, `để`, `khi`, `do đó` into one paragraph-length line.
- Explorer, the site's word for its readers, is **`Nhà thám hiểm`**:
  "Chào mừng Nhà thám hiểm Bankless!"

Length
Vietnamese runs roughly 20-30% longer than English in characters: it is
analytic, so each concept becomes several space-separated syllables
("decentralized" 13 characters becomes `phi tập trung` 13, but "smart contract"
14 becomes `hợp đồng thông minh` 19). The 22-line ceiling is measured in Latin
character widths and counts Vietnamese correctly, so it will bite. Compress by
cutting filler (`một cách`, `việc`, `có thể được`, `nhằm mục đích`), not by
dropping information.

Diacritics are mandatory and meaning-bearing
Unaccented Vietnamese is **not acceptable output**, not in prose, not in
headings, not in quiz options, not in link text. Vietnamese diacritics are
letters and tones, not decoration: strip them and the word becomes a different
word or no word at all.

    phí  (fee)            vs  phi  (non-, as in phi tập trung)
    ví   (wallet)         vs  vì   (because)  vs  vị (position)
    mã   (code)           vs   ma  (ghost)    vs  mà (but)
    khóa (key, to lock)   vs  khoa (faculty, department)
    đào  (to mine)        vs  dao  (knife)

`phí` / `phi` is the pair that will actually hurt here: `phí tập trung` reads
as "centralization fee", not "decentralized". `đ` is a separate letter from
`d`, never a d with decoration, so `đào` and `dao` are unrelated words.
Uppercase keeps its diacritics too: `VÍ`, `KHÓA RIÊNG TƯ`, never `VI`, `KHOA`.

**Write precomposed (NFC) Unicode.** `ví tiền mã hóa` is 14 code points in NFC
and 19 in NFD, and the two never compare equal. `normalizeKeyword` (the
function behind every tooltip lookup and every validator check) only
lowercases and strips U+0307; it does **not** normalize, so an NFD backticked
term is a dead tooltip against an NFC glossary key even though the two look
identical on screen. NFD also inflates the length estimate by counting each
combining mark as a character, which fails slides that actually fit. The
vendored `translation/ethglossary/vi.json` is NFC; keep everything you write
NFC too.

**One tone-mark placement style, and it is `hóa`, not `hoá`.** Both are
accepted Vietnamese, but they are different byte strings, so mixing them breaks
glossary lookups on the highest-traffic terms in the course (`khóa riêng tư`,
`khóa công khai`, `tiền mã hóa`, `mã hóa`, `hàng hóa công cộng`). Write:

    hóa, khóa, hòa, tòa, xóa, thủy, khỏe, quý
    NOT hoá, khoá, hoà, toà, xoá, thuỷ, khoẻ, qúy

ETHGlossary's own `vi.json` is inconsistent here (224 `hóa` against 40 `hoá`,
55 `toà` against 0 `tòa`), so do not copy its spelling: apply the rule above.
For the two ambiguous high-traffic stems, add the other spelling to
`keyword_forms` as a safety net: `khoá riêng tư`, `khoá công khai`,
`tiền mã hoá`.

Terms kept in English
Vietnamese crypto writing is genuinely anglicized and we follow real usage
rather than purism. Keep in Latin script:
- Product, network and organisation names: Bitcoin, Ethereum, Uniswap,
  Optimism, Base, MetaMask, Coinbase, Zerion, Velodrome, Rocket Pool, Lido,
  OpenSea, Etherscan, Revoke.cash, Gitcoin, Aave.
- Tickers and units: ETH, BTC, USDC, OP, gwei, wei, Ether.
- Acronyms, unchanged and uppercase: API, DEX, CEX, AMM, LP, TVL, APR, APY,
  KYC, TPS, NFT, DAO, DeFi, Web3, Web2, PoW, PoS, ERC-20, ERC-721, ERC-1155,
  EIP, EVM, OTC, FOMO, RetroPGF.
- Crypto vocabulary Vietnamese speakers actually use untranslated: blockchain,
  token, staking, stake, gas, node, validator, rollup, Layer 1 / Layer 2,
  stablecoin, dApp, mint, airdrop, halving, coin, crypto, slashing, epoch,
  blob, sharding, sidechain, phishing, solver, on-chain / off-chain.
- **Where the ```terms``` block below pins a Vietnamese rendering, the pin
  wins**, even when the English word also circulates: `mining` is
  `khai thác`, `swap` is `hoán đổi`, `slippage` is `trượt giá`, `ledger` is
  `sổ cái`. When a lesson introduces a pinned Vietnamese term for the first
  time, gloss the English once in parentheses (`cụm từ khôi phục (seed
  phrase)`), then use the Vietnamese alone. Put the English spelling in
  `keyword_forms` so prose that uses it still resolves to a tooltip.

Terms to translate
- wallet -> `ví`; crypto wallet -> `ví tiền mã hóa`; wallet app -> `ứng dụng ví`
- key (private / public) -> `khóa` (`khóa riêng tư` / `khóa công khai`)
- seed phrase / recovery phrase -> `cụm từ khôi phục`
- address -> `địa chỉ`
- fee -> `phí`; gas fee -> `phí gas`; transaction fee -> `phí giao dịch`
- network -> `mạng lưới` (`mạng Ethereum` when naming one)
- node -> `node` (kept: `nút` means "button" or "knot")
- block -> `khối`; block reward -> `phần thưởng khối`
- ledger -> `sổ cái` (the accounting term, not `sổ kế toán`)
- supply -> `nguồn cung`; max supply -> `nguồn cung tối đa`;
  circulating supply -> `nguồn cung lưu hành`
- yield -> `lợi suất` (not `lợi nhuận`, which is profit)
- lending / borrowing -> `cho vay` / `đi vay`
- swap -> `hoán đổi` (noun and verb)
- self-custody -> `tự lưu ký`; custodian -> `bên lưu ký`
- decentralized -> `phi tập trung`; decentralization -> `sự phi tập trung`
- permissionless -> `không cần cấp phép`
- trustless -> `không cần tin cậy` (it means "no trust required", never
  "untrustworthy"; if a sentence could be read the second way, rewrite it)
- governance -> `quản trị`
- mining -> `khai thác`; miner -> `thợ đào`
- liquidity -> `thanh khoản`; liquidity pool -> `pool thanh khoản`

Classifiers and plural markers stay OUTSIDE the backticks
Vietnamese puts a classifier or a plural marker in front of the noun, and the
noun itself never changes shape. The tooltip resolves on the bare pinned form,
so everything in front of it must sit outside the backticks:

    một chiếc `ví`        NOT  `một chiếc ví`
    các `ví`, những `khối`, mỗi `giao dịch`, hai `node`
    cuộc `tấn công 51%`   NOT  `cuộc tấn công 51%`
    tính `thanh khoản`    NOT  `tính thanh khoản`

The same goes for the nominalizers `sự`, `việc`, `tính`, `cách` and for `của`
phrases. The one exception is when the nominalizer is **part of the pinned
form**: `decentralization` is pinned as `sự phi tập trung`, so that whole
string goes inside the backticks, while the adjective `decentralized` is
`phi tập trung`. Keep those two apart in the glossary and do not cross-list
them in `keyword_forms`; they are two English keys and one shared display form
would make one tooltip shadow the other.

Because Vietnamese does not inflect, `keyword_forms` is **not** needed for
grammar the way it is in Turkish or Ukrainian. Use it only for: the English
loanword spelling when the pin is Vietnamese (`swap` under `hoán đổi`), the
nominalized variant (`tính thanh khoản` under `thanh khoản`), and the
alternate tone-mark spelling for the `khóa` / `hóa` stems listed above.

Sino-Vietnamese and native doublets
Most crypto concepts have both a Sino-Vietnamese compound (formal, precise,
usually the established technical term) and a native word (shorter, warmer).
Pick by what Vietnamese crypto readers already see, not by register:
- Sino-Vietnamese wins where it is the settled term: `phi tập trung`
  (decentralized), `giao dịch` (transaction), `quản trị` (governance),
  `thanh khoản` (liquidity), `đồng thuận` (consensus), `bảo mật` (security).
- Native wins where the Sino-Vietnamese form sounds bureaucratic: `thợ đào`
  for miner, not `người khai thác`; `sổ cái` for ledger; `ví` for wallet, bare,
  not `ví điện tử` on every mention.
- `mining` splits across the doublet on purpose: the activity is
  `khai thác` (Sino-Vietnamese, what media writes) and the person is
  `thợ đào` (native, what everyone says). That is correct, keep both.
- Watch three near-synonyms that are not synonyms: `bảo mật` (information
  security, what our `security` entry means), `an ninh` (public or physical
  security), `an toàn` (safety). Only `bảo mật` is right here.
- `tiền mã hóa` for cryptocurrency, never `tiền ảo` ("virtual money", carries a
  dismissive edge in Vietnamese press). `tiền điện tử` is acceptable as a
  `keyword_forms` alias only, because it also means e-money and CBDCs.

Compounds are spaced, never hyphenated
Vietnamese is written syllable by syllable with a space between every syllable:
`hợp đồng thông minh` is four tokens, `sàn giao dịch phi tập trung` is six.
- **Do not hyphenate Vietnamese compounds.** `hợp-đồng`, `phi-tập-trung` and
  `Việt-Nam` are pre-1975 orthography and read as a typo today.
- **Do not syllabify loanwords.** Write `blockchain`, `token`, `bitcoin`, never
  `blốc-chên`, `tô-ken`, `bít-coin`.
- Hyphens survive only inside borrowed technical strings that carry them in
  English: `ERC-20`, `peer-to-peer` when kept in English, `on-chain`,
  `off-chain`, `Proof-of-Stake`.
- Never insert a space inside a syllable, and never delete the space between
  two syllables to make a line fit.

Headings and capitalization
Vietnamese does not use English title case. Capitalize the first word and
proper nouns only: `Ví tiền mã hóa là gì?`, not `Ví Tiền Mã Hóa Là Gì?`.
ETHGlossary's `heading` and `ui` contexts return Title Case (`Cầu Nối`) and its
`term` field is sometimes capitalized mid-word; ignore both and take the
`prose` form, lowercased. Accented headings are safe: the anchor slugifier
turns `Ví tiền điện tử là gì?` into `vi-tien-dien-tu-la-gi` correctly.

Emphasis markers
Vietnamese has word spaces and ASCII punctuation, so the CJK flanking disaster
does not apply, but the rules still hold: keep punctuation outside the markers
(`**Giá trị**:`, not `**Giá trị:**`), bold the link *text* rather than the whole
link (`[**tên bài học**](url)`), and prefer `*…*` over `_…_` since `_` cannot
open or close against a letter. `validate-content.js` renders every line with
markdown-it and fails the build on any marker that survives as literal text.

Glossary overrides
These beat the vendored ETHGlossary, which returns inflected prose forms,
glued-on classifiers, and calques that no Vietnamese crypto reader uses
(`cụm từ hạt giống` is literally "plant-seed phrase"). `x = x` pins a term to
its English form. Ordered by how many of the 19 lessons backtick each term.

```terms
private key = khóa riêng tư
private keys = khóa riêng tư
blockchain = blockchain
blockchains = blockchain
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = hợp đồng thông minh
smart contracts = hợp đồng thông minh
cryptocurrency = tiền mã hóa
cryptocurrencies = tiền mã hóa
decentralized = phi tập trung
dapp = dApp
staking pool = pool staking
web3 = Web3
web2 = Web2
block = khối
crypto wallet = ví tiền mã hóa
cryptocurrency wallet = ví tiền mã hóa
liquidity pool = pool thanh khoản
dex = DEX
cex = CEX
liquidity = thanh khoản
validator node = node validator
validator nodes = node validator
decentralization = sự phi tập trung
address = địa chỉ
addresses = địa chỉ
gas = gas
gas fee = phí gas
optimistic rollup = Optimistic Rollup
zk rollup = ZK Rollup
rollup = rollup
seed phrase = cụm từ khôi phục
recovery phrase = cụm từ khôi phục
dao = DAO
peer-to-peer = ngang hàng
peer = bên ngang hàng
defi = DeFi
wallet = ví
wallets = ví
node = node
node operator = người vận hành node
blockchain apps = ứng dụng blockchain
blockchain technology = công nghệ blockchain
ethereum blockchain = blockchain Ethereum
hot wallet = ví nóng
cold wallet = ví lạnh
hardware wallet = ví phần cứng
wallet app = ứng dụng ví
ledger = sổ cái
public key = khóa công khai
token = token
tokens = token
token allowance = hạn mức token
token approval = phê duyệt token
allowance = hạn mức
price impact = tác động giá
decentralized exchange = sàn giao dịch phi tập trung
centralized exchange = sàn giao dịch tập trung
centralized services = dịch vụ tập trung
onchain = on-chain
offchain = off-chain
onchain governance = quản trị on-chain
onchain identity = danh tính on-chain
sidechain = sidechain
permissionless = không cần cấp phép
trustless = không cần tin cậy
security = bảo mật
scalability = khả năng mở rộng
veto = phủ quyết
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
custodian = bên lưu ký
btc = BTC
eth = ETH
ether = Ether
gwei = gwei
self-custody = tự lưu ký
self-custodial = tự lưu ký
self-custody wallet = ví tự lưu ký
non-custodial wallet = ví không lưu ký
block hash = mã băm khối
transaction hash = mã băm giao dịch
hash = mã băm
trade route = lộ trình giao dịch
stake = stake
staking = staking
solo staking = solo staking
centralized exchange staking = staking trên sàn tập trung
liquid staking token = liquid staking token
validator = validator
slashing = slashing
slashed = bị slash
attestation = chứng thực
epoch = epoch
blockspace = không gian khối
block space = không gian khối
blockchain trilemma = bộ ba bất khả thi của blockchain
bridge = cầu nối
nft = NFT
public good = hàng hóa công cộng
public = công khai
credible neutrality = tính trung lập đáng tin cậy
quadratic funding = tài trợ bậc hai
allo protocol = Allo Protocol
retropgf = RetroPGF
satoshi nakamoto = Satoshi Nakamoto
scarcity = sự khan hiếm
scarce = khan hiếm
inflation = lạm phát
central bank = ngân hàng trung ương
commercial bank = ngân hàng thương mại
monetary policy = chính sách tiền tệ
gold standard = bản vị vàng
fiat = tiền pháp định
coin = coin
crypto = crypto
max supply = nguồn cung tối đa
circulating supply = nguồn cung lưu hành
halving = halving
spot etf = ETF giao ngay
lightning network = Lightning Network
decentralized money = tiền phi tập trung
mining = khai thác
cryptocurrency mining = khai thác tiền mã hóa
miner = thợ đào
miners = thợ đào
block explorer = trình khám phá khối
block producer = nhà sản xuất khối
block reward = phần thưởng khối
transaction = giao dịch
transaction throughput = thông lượng giao dịch
token swap = hoán đổi token
token pair = cặp token
token distribution = phân phối token
swap = hoán đổi
sandwich attack = tấn công sandwich
51% attack = tấn công 51%
slippage = trượt giá
slippage tolerance = dung sai trượt giá
order book = sổ lệnh
amm = AMM
lp = LP
tvl = TVL
kyc = KYC
know-your-customer = định danh khách hàng
onramp = on-ramp
ethereum mainnet = mạng chính Ethereum
ethereum virtual machine = Máy ảo Ethereum
stablecoin = stablecoin
consensus = đồng thuận
consensus mechanism = cơ chế đồng thuận
proof of work = Proof of Work
proof of stake = Proof of Stake
sharding = sharding
payment channel = kênh thanh toán
blob = blob
smart account = tài khoản thông minh
primary name = tên chính
delegate = ủy quyền
delegation = sự ủy quyền
governance = quản trị
network governance = quản trị mạng lưới
mint = mint
password manager = trình quản lý mật khẩu
social engineering = social engineering
phishing = phishing
fomo = FOMO
digital signature = chữ ký số
cryptography = mật mã học
encryption = mã hóa
zero-knowledge = zero-knowledge
fraud proof = bằng chứng gian lận
validity proof = bằng chứng tính hợp lệ
finality = tính chung cuộc
finality time = thời gian chung cuộc
transaction finality = tính chung cuộc của giao dịch
settlement time = thời gian quyết toán
censorship-resistant = chống kiểm duyệt
tps = TPS
l1 = L1
l2 = L2
alternative layer 1 = Layer 1 thay thế
fork = phân nhánh
open source = mã nguồn mở
asynchronous = bất đồng bộ
dex aggregator = DEX aggregator
meta-aggregator = meta-aggregator
private transaction routing = định tuyến giao dịch riêng tư
intermediary token = token trung gian
intent = ý định
solver = solver
batch auction = đấu giá theo lô
otc = OTC
over the counter = giao dịch OTC
yield farm = yield farm
yield = lợi suất
collateral = tài sản thế chấp
liquidation = thanh lý
lending = cho vay
borrowing = đi vay
fee = phí
transaction fee = phí giao dịch
network = mạng lưới
supply = nguồn cung
intermediary = bên trung gian
intermediaries = bên trung gian
value-extraction = trích xuất giá trị
value-extractive = trích xuất giá trị
value-creation = tạo ra giá trị
equality of opportunity = bình đẳng về cơ hội
app = ứng dụng
app store = cửa hàng ứng dụng
```

Typography
- Quotation marks are the curly double quotes “ ”, with ‘ ’ nested inside.
  Do not use « » or straight ASCII quotes in prose.
- **No space before `:` `;` `!` `?`**, one space after. This is the opposite of
  the French rule in this repo, and `applyTypography` has no `vi` entry, so
  nothing will fix it for you.
- Never use the em dash (U+2014) or the en dash (U+2013). Use a comma, a
  colon, parentheses, or a new sentence. A spaced hyphen is acceptable in the
  rare case a parenthetical really needs a dash.
- **Decimal comma, period for thousands**: `0,05 ETH`, `3,5%`, `120.000 giao
  dịch`, `1.000.000 USD`. The one exception is a literal value the reader must
  type into an English app interface, or anything inside code, an address, a
  hash or a URL: keep those exactly as the English source has them
  (`nhập 0.05 vào ô Amount`).
- **Percent sign after the number, no space**: `51%`, `3,5%`. Not `% 51`, not
  `51 %`.
- Keep the source currency, do not convert to đồng. `100 USD` or `$100` stay as
  they are; if a Vietnamese figure is ever needed, write `1.000.000 đồng`.
- Dates are day first: `ngày 3 tháng 1 năm 2025` in prose, `03/01/2025` in a
  compact context. Years take `năm`: `vào năm 2025`.
- Standard and ticker strings keep their English shape: `ERC-20`, `EIP-1559`,
  `USDC`, `ETH`.

Interface strings
- Keep an English app's button label in English and gloss it in Vietnamese on
  first use, then use the English label alone afterwards:
  `nhấn vào “Connect Wallet” (kết nối ví)`.
- Do not translate a label the reader has to find on screen. If the interface
  says `Approve`, the lesson says `Approve`, not `Phê duyệt`, no matter what
  the ```terms``` block pins for the concept.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | vi |
|---|---|
| `True` | **Đúng** |
| `False` | **Sai** |

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
