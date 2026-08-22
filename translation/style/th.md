# Thai (th) style guide (translate-content)

**This wave has NO vendored ETHGlossary data** (upstream never covered th), so
this guide is the only terminology authority. The ```terms``` block at the end
beats everything, including your own judgment. When you disagree with a pin,
follow it anyway and flag it in your report; it gets adjudicated centrally.

## Variety and register

- **Neutral polite written Thai** (ภาษาเขียนกึ่งทางการ), the register of Thai
  educational websites and exchange academies. **No politeness particles**
  (ครับ/ค่ะ/นะ): they are spoken register AND gendered, and this text has no
  single speaker.
- Address the reader as **คุณ**. Never ท่าน (too formal), never เธอ/แก.
- Short sentences, one idea each. Thai runs long fast; prefer verbs over
  nominalizations (ใช้ over การใช้งาน where grammar allows).
- The reader is smart but new to crypto (ELI5): plain Thai first, the technical
  term after, backticked if it is a glossary keyword.

## Terminology: three buckets

Thai crypto writing mixes scripts heavily and that mix IS the authentic
register (Bitkub Academy, Binance TH, SEC Thailand all write this way):

1. **Established Thai words**: ธุรกรรม (transaction), กระเป๋าเงิน (wallet),
   สมุดบัญชี (ledger), นักขุด (miner), ฉันทามติ (consensus), อุปทาน (supply),
   ธนาคารกลาง (central bank), ความปลอดภัย (security).
2. **Established Thai transliterations**: บล็อกเชน, โทเคน, สเตเบิลคอยน์,
   คริปโทเคอร์เรนซี (the Royal Society spelling), โหนด, บริดจ์, ฟิชชิ่ง,
   มินต์, ออนเชน/ออฟเชน, ไซด์เชน.
3. **Latin kept as-is** where Thai crypto media keep it: Staking, Validator,
   Gas, Seed Phrase, Rollup, Sharding, Slashing, DeFi, DAO, DEX, NFT, Web3,
   Proof-of-Stake, Hot/Cold Wallet, Blob, Gwei. Do NOT invent Thai
   transliterations for these; the mixed keyword forms in the pins
   (โหนด Validator, พูล Staking) are deliberate and standard.

Never coin a purist Thai term no Thai crypto reader has met. When unsure
between bucket 2 and 3, prefer what Bitkub/Binance Thai content actually
prints.

## Thai script mechanics (each of these has broken a build before)

- **No spaces between Thai words. A single space separates sentences and
  clauses** — that space is the Thai full stop.
- **One space on each side of any Latin word or number** inside Thai text
  (ค่า Gas สูง, ERC-20 คือ…), but no space before punctuation like `!` or `?`.
- **No Thai periods.** Statements end with a space (or the end of the line).
  Use `?` at the end of direct questions (quiz questions, FAQ headings). Use
  `!` where the ENGLISH source has one (celebratory copy, the pinned feedback
  openers); never add one the English does not have. No ๆ-abuse: repeat the
  word if the reduplication is not standard.
- **quest = เควส** (the gaming-standard short form, never เควสต์) and
  **badge = แบดจ์** — recurring UI words, already shipped in the th website
  namespaces; keep lesson prose consistent with them.
- **Arabic numerals** (1, 2, 3), never Thai numerals (๑ ๒ ๓).
- Thai does not inflect: `keyword_plural` copies the `keyword` string whenever
  the English entry has a plural (the ja/zh convention), and `keyword_forms`
  stays absent.
- Backticked terms sit directly against Thai letters with no space
  (`กระเป๋าเงิน`ของคุณ) — that is correct; only Latin runs get breathing
  spaces.
- Emphasis: punctuation stays OUTSIDE the markers (`**มูลค่า**:` never
  `**มูลค่า:**`), and never use `_…_` against a Thai letter — use `*…*`.
  CommonMark cannot close a delimiter that has punctuation on its inside edge;
  this shipped literal `**` to ja/zh readers 87 times in one wave.

## Glossary entries (keywords.json halves)

- Keys are the ENGLISH terms, verbatim, lowercase as in the English file.
- Entry shape: `{ "keyword": …, "keyword_plural": …, "definition": … }` and
  nothing else — no `glossary` field. `keyword_plural` = same string as
  `keyword` exactly when the English entry has a plural.
- Definitions: translated, never the English text, no em dashes, one or two
  sentences, same register as the lessons.

## Length

Thai is compact per idea but each word is many characters; rendered width ends
up close to English. The slide ceiling is enforced by the verifier; compress by
dropping nominalizer scaffolding (การ/ความ chains) and filler (ซึ่ง, โดยที่),
never information. Quiz options ≤ ~70 characters; nuance goes into the `> ℹ️`
feedback (max ~150 chars).

## Interface strings (website namespaces)

- Keep `{{placeholders}}` and HTML tags exactly as in English.
- Buttons and sidebar labels live in fixed-width furniture: prefer the shortest
  natural Thai ("Connect Wallet" → "เชื่อมต่อกระเป๋าเงิน").
- Lesson names/descriptions in `lesson.json` are keyed by the exact English
  string.

## Fixed section headings

Every heading must be translated (an English heading passes every automated
check — read your own output before reporting back). Use exactly this Thai:

| English heading | Thai |
|---|---|
| `Introduction` | `บทนำ` |
| `Key Takeaways` | `ประเด็นสำคัญ` |
| `Frequently Asked Questions` | `คำถามที่พบบ่อย` |
| `Walkthrough` | `ขั้นตอนการใช้งาน` |
| `Prerequisites` | `สิ่งที่ต้องมีก่อนเริ่ม` |
| `FAQ` | `FAQ` |

- A suffixed heading keeps the pinned form and translates its own suffix:
  `## Walkthrough: Using Revoke.cash` → `## ขั้นตอนการใช้งาน: การใช้ Revoke.cash`.
- **`Knowledge Check <n>` stays in ENGLISH with its original number** — it is a
  compiler identifier; the frontend renders its own translated label.
- Keep heading levels exactly as the source. Thai headings slugify to nothing,
  so `/content` anchors fall back to `section-N`; that is expected, not a bug.

## Fixed quiz feedback openers

Pin the opener, write the rest of the sentence freely:

| English opener | Thai |
|---|---|
| `Try again!` | `ลองอีกครั้ง!` |
| `Correct!` / `Correct.` | `ถูกต้อง!` / `ถูกต้อง` |
| `Right!` | `ใช่เลย!` |
| `Incorrect` / `Incorrect.` | `ไม่ถูกต้อง` |

Keep the opener and the sentence after it on the same line, separated by one
space.

## Fixed True/False option labels

| English option | th |
|---|---|
| `True` | **จริง** |
| `False` | **เท็จ** |

จริง/เท็จ is the statement-truth pair and does not collide with the
correct-answer opener ถูกต้อง! (which judges the LEARNER, not the statement).
Only the option TEXT changes: the `[x]` stays on the same option index as
English — answer numbers are saved in users' localStorage.

## Fixed handbook credit labels

The bold role labels above the bios at the end of each handbook. Use exactly:
**ผู้เขียน** (Author), **บรรณาธิการ** (Editor), **ผู้สนับสนุน** (Patron).
All three are gender-neutral in Thai; do not coin alternatives per lesson.

## Pinned terms

Every term below appears in two or more lessons. A pin fixes the WORDING
everywhere; whether it gets backticks is decided by whether the term resolves
in `translation/keywords/th/keywords.json`.

```terms
private key = คีย์ส่วนตัว
blockchain = บล็อกเชน
layer 2 = เลเยอร์ 2
smart contract = สัญญาอัจฉริยะ
cryptocurrency = คริปโทเคอร์เรนซี
decentralized = แบบกระจายศูนย์
dapp = dApp
staking pool = พูล Staking
web3 = Web3
block = บล็อก
crypto wallet = กระเป๋าเงินคริปโต
liquidity pool = พูลสภาพคล่อง
dex = DEX
liquidity = สภาพคล่อง
validator node = โหนด Validator
validator nodes = โหนด Validator   # Thai has no plural, deliberate duplicate
decentralization = การกระจายศูนย์
address = ที่อยู่
gas = Gas
optimistic rollup = Optimistic Rollup
seed phrase = Seed Phrase
dao = DAO
peer-to-peer = เพียร์ทูเพียร์
defi = DeFi
wallet = กระเป๋าเงิน
node operator = ผู้ดูแลโหนด
blockchain apps = แอปบนบล็อกเชน
hot wallet = Hot Wallet
ledger = สมุดบัญชี
public key = คีย์สาธารณะ
cex = CEX
token allowance = การอนุญาตใช้โทเคน
price impact = ผลกระทบต่อราคา
decentralized exchange = กระดานซื้อขายแบบกระจายศูนย์
centralized exchange = กระดานซื้อขายแบบรวมศูนย์
onchain = ออนเชน
sidechain = ไซด์เชน
permissionless = แบบไม่ต้องขออนุญาต
security = ความปลอดภัย
zk rollup = ZK Rollup
veto = สิทธิ์ยับยั้ง
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
web2 = Web2
custodian = ผู้รับฝากสินทรัพย์
btc = BTC
self-custody = Self-Custody
cryptocurrency wallet = กระเป๋าเงินคริปโต   # same display form as crypto wallet, deliberate
block hash = แฮชของบล็อก
wallet app = แอปกระเป๋าเงิน
trade route = เส้นทางการเทรด
ether = Ether
eth = ETH
stake = Stake
validator = Validator
non-custodial wallet = กระเป๋าเงินแบบ Non-Custodial
staking = Staking
blockspace = พื้นที่บล็อก
block space = พื้นที่บล็อก   # same display form, deliberate
blockchain trilemma = ไตรลีมาของบล็อกเชน
scalability = ความสามารถในการขยายขนาด
bridge = บริดจ์
nft = NFT
public good = สินค้าสาธารณะ
token = โทเคน
liquid staking token = Liquid Staking Token
credible neutrality = ความเป็นกลางที่เชื่อถือได้
recovery phrase = วลีกู้คืน
self-custody wallet = กระเป๋าเงิน Self-Custody
hardware wallet = Hardware Wallet
satoshi nakamoto = ซาโตชิ นากาโมโตะ
scarcity = ความขาดแคลน
central bank = ธนาคารกลาง
monetary policy = นโยบายการเงิน
max supply = อุปทานสูงสุด
circulating supply = อุปทานหมุนเวียน
lightning network = Lightning Network
miner = นักขุด
block explorer = Block Explorer
transaction = ธุรกรรม
public = สาธารณะ
node = โหนด
token swap = การสวอปโทเคน
token pair = คู่โทเคน
sandwich attack = การโจมตีแบบแซนด์วิช
gwei = Gwei
slippage tolerance = ค่าเผื่อ Slippage
centralized services = บริการแบบรวมศูนย์
ethereum blockchain = บล็อกเชน Ethereum
crypto = คริปโต
onramp = On-ramp
ethereum mainnet = เมนเน็ต Ethereum
stablecoin = สเตเบิลคอยน์
consensus = ฉันทามติ
block reward = รางวัลบล็อก
slashing = Slashing
proof of stake = Proof-of-Stake
transaction throughput = อัตราการประมวลผลธุรกรรม
sharding = Sharding
rollup = Rollup
payment channel = ช่องทางการชำระเงิน
blob = Blob
offchain = ออฟเชน
smart account = บัญชีอัจฉริยะ
onchain governance = การกำกับดูแลแบบออนเชน
l2 = L2
delegate = ผู้รับมอบสิทธิ์
primary name = ชื่อหลัก
consensus mechanism = กลไกฉันทามติ
mint = มินต์
solo staking = Solo Staking
centralized exchange staking = การ Staking ผ่าน CEX
slashed = ถูก Slash
attestation = การรับรอง
cold wallet = Cold Wallet
password manager = โปรแกรมจัดการรหัสผ่าน
social engineering = วิศวกรรมสังคม
phishing = ฟิชชิ่ง
fomo = FOMO
allowance = การอนุญาต
```
