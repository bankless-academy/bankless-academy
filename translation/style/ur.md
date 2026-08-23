# Urdu (ur) style guide (translate-content)

**Second RTL language** (after Arabic — same UI, registry `dir: 'rtl'`, see
`docs/rtl-audit.md`); your job is ONLY the text. Vendored ETHGlossary data
EXISTS for ur (`translation/ethglossary/ur.json`) but is KNOWN-DIRTY: it mixes
Arabic code points into Urdu words (لامركزی with Arabic ك), uses Eastern
digits (۵۱٪), and carries izafat diacritics (علمِ تشفیر). Authority order is:
the ```terms``` block at the end of this guide, then ETHGlossary
**normalized per Script mechanics below**, then your own judgment. When you
disagree with a pin, follow it anyway and flag it in your report; it gets
adjudicated centrally.

## Variety and register

- **Standard Urdu (معیاری اردو)** — the register of Urdu tech and finance
  explainers (BBC Urdu tech, Independent Urdu, SBP consumer material). No
  regionalisms, no Hindi-register substitutions, no literary flourish.
- **Address the reader as آپ, always.** Imperatives in the آپ form:
  ڈاؤن لوڈ کریں، منتخب کریں، لکھ لیں. Never تم or تو, never third-person
  circumlocutions.
- Short declarative sentences, one idea each, natural SOV order. Urdu tech
  writing transliterates freely — prefer the established transliteration over
  a Persianate calque nobody uses (والیٹ, not بٹوہ; اسٹیکنگ, not حصہ داری).
- ELI5: explain in plain Urdu first, then the technical term, backticked if it
  is a glossary keyword. When a Latin acronym is the established term (NFT,
  DeFi, DAO), spell out the Urdu meaning at first use in the lesson, then use
  the acronym.

## Script mechanics that interact with the pipeline (READ TWICE)

These are the ur-specific dead-tooltip traps. A backticked term whose string
differs in ANY way from its glossary form is a tooltip that renders perfectly
and resolves to nothing.

1. **Urdu code points ONLY, never their Arabic twins.** The pairs are visually
   near-identical and never string-match:
   - kaf: ک (U+06A9), never ك (U+0643)
   - ye: ی (U+06CC), never ي (U+064A); bari ye: ے (U+06D2)
   - he: ہ (U+06C1) as the ordinary he; ھ (U+06BE) ONLY inside aspirates
     (بھ پھ تھ ٹھ جھ چھ دھ ڈھ کھ گھ); never Arabic ه (U+0647)
   - no ة/ۃ ever — Arabic loans take ت or ہ (حکومت، معاملہ)
   ETHGlossary ur violates this; normalize anything you adopt from it.
2. **NO aerab/diacritics anywhere** — no zer/zabar/pesh/tashdid/jazm in lesson
   text, glossary keywords, or UI strings. That includes **izafat zer**: avoid
   izafat constructions entirely and use کا/کی/کے genitives instead
   (دھوکہ دہی کا ثبوت, never ثبوتِ دھوکہ دہی). Fixed phrases conventionally
   written without the zer (افراط زر) are fine.
   **Watch the common words whose standard spelling carries a diacritic** —
   they slip in unconsciously. Substitute: مثلاً → مثال کے طور پر,
   تقریباً → لگ بھگ, وقتاً فوقتاً → وقتا فوقتا, لہٰذا → اس لیے,
   اعلیٰ → اعلی, غالباً → ممکنہ طور پر, ترجیحاً → ترجیحی طور پر,
   حتیٰ کہ → یہاں تک کہ, دعویٰ → rephrase, قابلِ X → X کے قابل or rephrase.
   The rule stays flat (no exemptions): one orthography everywhere is what
   keeps every string comparison in the pipeline exact.
3. **No invisible characters.** Never ZWNJ/ZWJ (U+200C/U+200D) — an invisible
   code point inside a backticked term is a dead tooltip no eye can catch.
4. **One orthography per word, exactly as pinned.** English s-cluster loans
   take an initial alif: اسمارٹ، اسٹیک، اسٹیبل، اسکام، اسپاٹ (like اسمارٹ فون،
   اسکول). Compounds keep their pinned spacing character-for-character:
   بلاک چین (spaced), never بلاکچین. A missing or extra space is a dead
   tooltip.
5. **Backtick only forms the glossary carries.** Urdu inflects: oblique
   singulars/plurals before postpositions (والیٹ → والیٹوں میں), plural
   direct forms (پتہ → پتے). The glossary entry shape for ur: `keyword` =
   exactly the pinned display form; `keyword_plural` = the direct plural where
   one is natural (پتہ → پتے، بلاک → بلاکس); `keyword_forms` = oblique forms
   (پتوں، والیٹوں، بلاکوں) plus any alias this guide names. If the inflected
   form you need is not in the glossary, either rephrase so the bare form
   works, or leave that mention unbackticked — and flag recurring gaps so the
   forms get added centrally.
6. **Postpositions are separate words — keep them outside the backticks.**
   کا کی کے میں پر سے کو نے تک والا never attach to the term:
   `والیٹ` میں، `بلاک چین` پر. (Urdu is easier than Arabic here: nothing
   joins cursively across the keyword span if you keep the space.)

## RTL and bidi in markdown

- Write the markdown source as ordinary Urdu text; the renderer handles
  direction. URLs, image paths, code spans and Latin terms stay exactly as in
  English — never reorder link syntax "for RTL".
- Numbers and Latin runs inside Urdu sentences are fine (the UI isolates
  backticked terms). Avoid STARTING a sentence or list item with an
  unbackticked Latin word or a number where a natural rephrase exists; a
  leading strong-LTR run can jump visually in RTL context.
- **Emphasis**: never `_…_` against an Urdu letter (CommonMark flanking fails,
  the build gate rejects it) — use `*…*` or `**…**`. Punctuation stays OUTSIDE
  the markers: `**قدر**:` never `**قدر:**`. Bold the link text, not the link:
  [**نام**](url). Italic renders poorly in Urdu script; where English
  italicizes a single Urdu word for emphasis, bold is acceptable.

## Digits, punctuation, typography

- **Western digits (0-9) everywhere**, including percentages: 51%، 1,000.50.
  Never Urdu/Eastern digits (۰-۹ or ٠-٩). % sign, not ٪.
- **Urdu punctuation where Urdu grammar rules**: full stop ۔ (U+06D4), comma ،
  question mark ؟ semicolon ؛. Exclamation stays "!". English quotation marks
  "…" for quoted words.
- Match English exclamation marks one-for-one in quiz feedback and UI strings.
- No em dashes (—) anywhere; use a comma, colon, parentheses or a new sentence.
- Proper nouns: بٹ کوائن، ایتھیریم، ساتوشی ناکاموٹو — these exact spellings.
  Product/brand names stay Latin: Uniswap, MetaMask, Ledger, Etherscan,
  Coinbase, Revoke.cash, Optimism, Base.

## Length

Urdu runs 10-20% longer than English in characters. The slide ceiling is
enforced by the verifier; if a slide runs long, cut scaffolding, not
information: drop کرنے کے لیے chains where a direct imperative works, drop
filler openers (یہ بات قابل ذکر ہے کہ). Quiz options ≤ ~70 characters; nuance
goes into the `> ℹ️` feedback line (max ~150 chars).

## Interface strings (website namespaces)

- Keep `{{placeholders}}` and HTML tags exactly as in English, character for
  character, including their position relative to the text.
- Buttons and sidebar labels live in fixed-width furniture: if the Urdu is
  >60% longer than the English, find a shorter phrasing
  ("Connect Wallet" → "والیٹ جوڑیں").
- Lesson names/descriptions in `lesson.json` are keyed by the exact English
  string.

## Fixed section headings

Every heading must be translated (an English heading passes every automated
check — read your own output before reporting back). Use exactly this Urdu:

| English heading | Urdu |
|---|---|
| `Introduction` | `تعارف` |
| `Key Takeaways` | `اہم نکات` |
| `Frequently Asked Questions` | `عمومی سوالات` |
| `FAQ` | `عمومی سوالات` |
| `Walkthrough` | `مرحلہ وار رہنمائی` |
| `Prerequisites` | `پیشگی شرائط` |

- A suffixed heading keeps the pinned form and translates its own suffix:
  `## Walkthrough: Using Revoke.cash` →
  `## مرحلہ وار رہنمائی: Revoke.cash کا استعمال`.
- **`Knowledge Check <n>` stays in ENGLISH with its original number** — it is a
  compiler identifier; the frontend renders its own translated label.
- Keep heading levels exactly as the source; no trailing ۔ on headings.

## Fixed quiz feedback openers

Pin the opener, write the rest of the sentence freely:

| English opener | Urdu |
|---|---|
| `Correct!` / `Correct.` | `شاباش!` / `شاباش۔` |
| `Right!` | `بالکل!` |
| `Try again!` | `دوبارہ کوشش کریں!` |
| `Incorrect` / `Incorrect.` | `غلط جواب۔` |

## Fixed True/False option labels

| English option | ur |
|---|---|
| `True` | **صحیح** |
| `False` | **غلط** |

صحیح/غلط judges the STATEMENT; the correct-answer opener شاباش! judges the
learner's pick, so the two never collide (the reason the opener is NOT صحیح!).
Only the option TEXT changes: the `[x]` stays on the same option index as
English — answer numbers are saved in users' localStorage.

## Fixed handbook credit labels

The bold role labels above the bios at the end of each handbook name REAL
people, and Urdu personal role nouns gender (مصنف/مصنفہ). Use the
gender-neutral verbal nouns, exactly:
**تحریر** (Author), **تدوین** (Editor), **سرپرستی** (Patron).
Never the personal nouns, never per-lesson alternatives.

## Pinned terms

Every pin fixes the WORDING everywhere; whether it gets backticks is decided by
whether the term resolves in `translation/keywords/ur/keywords.json`.
`x = x` keeps English/Latin. Glossary agents: `keyword` = the pinned string
exactly; add the natural plural to `keyword_plural`, oblique forms and any
alias noted here to `keyword_forms`.

```terms
private key = نجی کلید
public key = عوامی کلید
blockchain = بلاک چین
layer 2 = لیئر 2
l2 = L2
layer 1 = لیئر 1
l1 = L1
alternative layer 1 = متبادل لیئر 1
smart contract = اسمارٹ کنٹریکٹ   # alif-initial per Script mechanics; overrides ETHGlossary's سمارٹ
cryptocurrency = کرپٹو کرنسی
crypto = کرپٹو
decentralized = غیر مرکزی   # over ETHGlossary لامرکزی; add لامرکزی to keyword_forms
decentralization = غیر مرکزیت   # add لامرکزیت to keyword_forms
dapp = ڈی ایپ   # plural ڈی ایپس
staking pool = اسٹیکنگ پول
web3 = Web3   # never ویب۳
web2 = Web2
block = بلاک   # plural بلاکس, oblique بلاکوں
crypto wallet = کرپٹو والیٹ
cryptocurrency wallet = کرپٹو کرنسی والیٹ
liquidity pool = سیالیت کا پول   # oblique سیالیت کے پول in keyword_forms
liquidity = سیالیت
dex = DEX
cex = CEX
validator = ویلیڈیٹر   # over ETHGlossary توثیق کار (add as alias); matches speech and the نوڈ/کلائنٹ compounds
validator node = ویلیڈیٹر نوڈ
validator client = ویلیڈیٹر کلائنٹ
node operator = نوڈ آپریٹر
address = پتہ   # plural پتے, oblique پتوں
gas = گیس
gas fee = گیس فیس
optimistic rollup = آپٹمسٹک رول اپ
rollup = رول اپ
zk rollup = ZK رول اپ
seed phrase = سیڈ فریز
recovery phrase = ریکوری فریز   # deliberate synonym pair, same as English
dao = DAO
peer-to-peer = پیئر ٹو پیئر
peer = پیئر
defi = DeFi
decentralized finance = غیر مرکزی مالیات
wallet = والیٹ   # oblique والیٹوں
blockchain apps = بلاک چین ایپس
blockchain technology = بلاک چین ٹیکنالوجی
hot wallet = ہاٹ والیٹ
cold wallet = کولڈ والیٹ
hardware wallet = ہارڈویئر والیٹ
wallet app = والیٹ ایپ
ledger = کھاتہ   # the record-book sense; the brand Ledger stays Latin
token allowance = ٹوکن الاؤنس
allowance = الاؤنس
token approval = ٹوکن کی منظوری
price impact = قیمت پر اثر
decentralized exchange = غیر مرکزی ایکسچینج
centralized exchange = مرکزی ایکسچینج
centralized exchange staking = مرکزی ایکسچینج اسٹیکنگ
centralized services = مرکزی خدمات
onchain = آن چین
offchain = آف چین
sidechain = سائیڈ چین
permissionless = بلا اجازت
security = سکیورٹی   # network-security sense (per the en definition), NOT the financial instrument
veto = ویٹو
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
custodian = متولی
custodial wallet = تحویلی والیٹ
non-custodial wallet = غیر تحویلی والیٹ
non-custodial = غیر تحویلی
self-custody = خود تحویلی
self-custody wallet = خود تحویلی والیٹ
self-custodial = خود تحویلی
btc = BTC
eth = ETH
ether = ایتھر
block hash = بلاک ہیش
transaction hash = ٹرانزیکشن ہیش
trade route = تجارتی راستہ
stake = اسٹیک
staking = اسٹیکنگ
staker = اسٹیکر   # plural اسٹیکرز
solo staking = سولو اسٹیکنگ
solo staker = سولو اسٹیکر
liquid staking token = لیکویڈ اسٹیکنگ ٹوکن
liquid = لیکویڈ
lsts = LSTs
restaking = ری اسٹیکنگ
staking providers = اسٹیکنگ فراہم کنندگان
slashing = کٹوتی
blockspace = بلاک اسپیس
block space = بلاک اسپیس
blockchain trilemma = بلاک چین ٹرائلیما
scalability = توسیع پذیری
bridge = پل
nft = NFT
public good = عوامی مفاد
token = ٹوکن   # plural ٹوکنز, oblique ٹوکنوں
credible neutrality = معتبر غیر جانبداری
satoshi nakamoto = ساتوشی ناکاموٹو
scarcity = قلت
scarce = کمیاب
inflation = افراط زر
central bank = مرکزی بینک
commercial bank = کمرشل بینک
monetary policy = زری پالیسی
gold standard = سونے کا معیار
halving = ہالونگ
max supply = زیادہ سے زیادہ سپلائی
circulating supply = گردشی سپلائی
lightning network = لائٹننگ نیٹ ورک
miner = کان کن
mining = کان کنی
cryptocurrency mining = کرپٹو کرنسی کی کان کنی
block explorer = بلاک ایکسپلورر
transaction = ٹرانزیکشن
public = عوامی
node = نوڈ   # plural نوڈز
token swap = ٹوکن سواپ
swap = سواپ   # the DEX action; تبادلہ stays available in prose, add to keyword_forms
token pair = ٹوکن جوڑا
sandwich attack = سینڈوچ حملہ
gwei = Gwei
slippage = سلپج
slippage tolerance = سلپج کی حد
ethereum blockchain = ایتھیریم بلاک چین
ethereum mainnet = ایتھیریم مین نیٹ
ethereum virtual machine = ایتھیریم ورچوئل مشین
onramp = onramp   # niche; the definition explains it converts regular money to crypto
stablecoin = اسٹیبل کوائن   # alif-initial; overrides ETHGlossary's سٹیبل کوائن
stablecoin issuer = اسٹیبل کوائن جاری کنندہ
consensus = اتفاق رائے
consensus mechanism = اتفاق رائے کا طریقہ کار
block reward = بلاک انعام   # forms بلاک کا انعام, بلاک کے انعام
proof of stake = پروف آف اسٹیک
proof-of-stake = پروف آف اسٹیک
proof of work = پروف آف ورک
transaction throughput = ٹرانزیکشن کی رفتار
sharding = شارڈنگ
payment channel = ادائیگی چینل
blob = بلاب
smart account = اسمارٹ اکاؤنٹ
smart wallet = اسمارٹ والیٹ
onchain governance = آن چین گورننس
network governance = نیٹ ورک گورننس
governance = گورننس
delegate = نمائندہ
delegation = تفویض
primary name = بنیادی نام
onchain identity = آن چین شناخت
mint = منٹ   # stable transliteration for tooltips; ڈھالنا welcome in prose, unbackticked
attestation = تصدیق
password manager = پاس ورڈ مینیجر
social engineering = سوشل انجینئرنگ
phishing = فشنگ
fomo = FOMO
hodl = HODL
2fa = 2FA
two factor authentication = دو مرحلہ توثیق
red flag = خطرے کی علامت
scam-token = جعلی ٹوکن
kyc = KYC
know-your-customer = اپنے صارف کو جانیں
fiat = فیاٹ
coin = کوائن   # plural کوائنز
memecoin = میم کوائن
digital signature = ڈیجیٹل دستخط
cryptography = کرپٹوگرافی   # over ETHGlossary علمِ تشفیر (izafat + opaque)
encryption = خفیہ کاری
zero-knowledge = زیرو نالج
fraud proof = فراڈ کا ثبوت
fraud = فراڈ
validity proof = درستگی کا ثبوت
finality = حتمیت
finality time = حتمیت کا وقت
transaction finality = ٹرانزیکشن کی حتمیت
settlement time = سیٹلمنٹ کا وقت   # NOT تصفیہ, which is liquidation's pinned form (collision)
epoch = دور
fork = فورک
open source = اوپن سورس
trustless = ٹرسٹ لیس   # بلا اعتماد reads as "untrustworthy"; transliteration + tooltip definition
censorship-resistant = سنسرشپ مزاحم
51% attack = 51% حملہ   # Western digits and % sign, overriding ETHGlossary's ۵۱٪
tps = TPS
mev = MEV
amm = AMM
lp = LP
tvl = TVL
otc = OTC
over the counter = اوور دی کاؤنٹر
order book = آرڈر بک
dex aggregator = DEX ایگریگیٹر
meta-aggregator = میٹا ایگریگیٹر
intent = ارادہ
solver = solver   # niche jargon, kept Latin like the ecosystem does
batch auction = اجتماعی نیلامی   # بیچ would collide with بیچنا (to sell)
front-running = فرنٹ رننگ
private transaction routing = نجی ٹرانزیکشن روٹنگ
collateral = ضمانت
liquidation = تصفیہ
vault = تجوری
peg = پیگ
death spiral = تباہی کا چکر
counterparty risk = فریق ثانی کا خطرہ
market cap = مارکیٹ کیپ
interoperability = باہمی عمل پذیری
composability = ترکیب پذیری
fungibility = تبادلہ پذیری
multi-token standard = ملٹی ٹوکن معیار
standard record = معیاری ریکارڈ
custom record = کسٹم ریکارڈ
yield farm = ییلڈ فارم
quadratic funding = مربعی فنڈنگ
retropgf = RetroPGF
allo protocol = Allo Protocol
equality of opportunity = مواقع کی برابری
decentralized money = غیر مرکزی کرنسی
intermediary = بچولیا   # plural بچولیے, oblique بچولیوں
intermediary token = درمیانی ٹوکن
value-extractive = استحصالی
value-extraction = استحصال
value-creation = قدر کی تخلیق
app = ایپ   # plural ایپس
app store = ایپ اسٹور
spot etf = اسپاٹ ETF
token distribution = ٹوکن کی تقسیم
block producer = بلاک پروڈیوسر
block builder = بلاک بلڈر
block proposer = بلاک تجویز کنندہ
asynchronous = غیر ہم وقت
.eth = .eth
yourname.eth = yourname.eth
```
