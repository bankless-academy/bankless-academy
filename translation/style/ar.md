# Arabic (ar) style guide (translate-content)

**First RTL language.** The UI ships RTL support already (registry `dir: 'rtl'`,
see `docs/rtl-audit.md`); your job is ONLY the text. Vendored ETHGlossary data
EXISTS for ar (`translation/ethglossary/ar.json`) — authority order is: the
```terms``` block at the end of this guide, then ETHGlossary, then your own
judgment. When you disagree with a pin, follow it anyway and flag it in your
report; it gets adjudicated centrally.

## Variety and register

- **Modern Standard Arabic (فصحى مبسطة)** — the register of Arabic fintech
  explainers and tech media (Binance Academy, CoinTelegraph Arabic, Wikipedia
  tech articles). No dialect, no literary constructions, no rhetorical
  flourish.
- **Address the reader as second person masculine singular (أنت)** — the
  unmarked, standard form of Arabic UX writing. Consistent throughout; never
  switch to plural or feminine mid-lesson.
- Short declarative sentences, one idea each. Prefer verbal sentences
  (فعل + فاعل) where they read naturally; avoid stacked idafa chains longer
  than three nouns.
- ELI5: explain in plain Arabic first, then the technical term, backticked if
  it is a glossary keyword. When a Latin acronym is the established term (NFT,
  DeFi, DAO), spell out the Arabic meaning at first use in the lesson, then use
  the acronym.

## Script mechanics that interact with the pipeline (READ TWICE)

These are the ar-specific dead-tooltip traps. A backticked term whose string
differs in ANY way from its glossary form is a tooltip that renders perfectly
and resolves to nothing.

1. **NO tashkeel/diacritics anywhere** — not in lesson text, not in glossary
   keywords, not in UI strings. ETHGlossary ar carries diacritics
   (مُدَقِّق، مُعَدِّن); strip them when adopting a term (→ مدقق، معدن).
   A diacritized keyword and an undiacritized backtick never match.
2. **One hamza orthography.** Always write hamza fully: أ إ آ ؤ ئ ء. Never
   plain ا where أ/إ belongs (اثيريوم is wrong, إيثيريوم is pinned). Never ه
   for ة. Never ى for ي (or the reverse). Spelling variants of the same word
   are dead tooltips that no eye catches.
3. **Backtick only the bare or الـ-definite form of a term.** The glossary
   keyword is the pinned form; `keyword_forms` adds its definite counterpart
   and definite plural. Anything else attached to the word means REPHRASE:
   - **Attached pronouns never**: محفظتك cannot resolve → write "محفظتك" without
     backticks, or rephrase to "المحفظة الخاصة بك" with `المحفظة` backticked.
   - **Attached prepositions ب/ل/ك/ف never touch a backticked term** — they
     join cursively to the first letter, and the keyword span breaks cursive
     joining, so بـ`المحفظة` renders visibly broken. Use a free preposition
     instead: في المحفظة، إلى المحفظة، من المحفظة.
   - **و (and) is the one safe attached particle**: و never joins to the letter
     after it, so و`المحفظة` renders correctly. Write it outside the backticks.
4. **The glossary entry shape for ar**: `keyword` = exactly the pinned display
   form; `keyword_plural` = the plural (broken plurals are fine: محفظة →
   محافظ); `keyword_forms` = definite forms of both (المحفظة، المحافظ) plus any
   alias this guide names. Arabic has no case folding, so strings must match
   exactly after NFC.

## RTL and bidi in markdown

- Write the markdown source as ordinary Arabic text; the renderer handles
  direction. URLs, image paths, code spans and Latin terms stay exactly as in
  English — never reorder link syntax "for RTL".
- Numbers and Latin runs inside Arabic sentences are fine (the UI isolates
  backticked terms). Avoid STARTING a sentence or list item with an
  unbackticked Latin word or a number where a natural rephrase exists; a
  leading strong-LTR run can jump visually in RTL context.
- **Emphasis**: never `_…_` against an Arabic letter (CommonMark flanking
  fails, the build gate rejects it) — use `*…*` or `**…**`. Punctuation stays
  OUTSIDE the markers: `**القيمة**:` never `**القيمة:**`. Bold the link text,
  not the link: [**الاسم**](url). Italic renders poorly in Arabic script; where
  English italicizes a single Arabic word for emphasis, bold is acceptable.

## Digits, punctuation, typography

- **Western digits (0-9) everywhere**, including percentages: 51%، 1,000.50.
  Never Eastern Arabic digits (٠-٩). % sign, not ٪.
- **Arabic punctuation where Arabic grammar rules**: comma ، question mark ؟
  semicolon ؛. Period stays "." and exclamation stays "!". English quotation
  marks "…" (no guillemets).
- Match English exclamation marks one-for-one in quiz feedback and UI strings.
- No em dashes (—) anywhere; use a comma, colon, parentheses or a new sentence.
- Proper nouns: بيتكوين، إيثيريوم، ساتوشي ناكاموتو — these exact spellings.
  Product/brand names stay Latin: Uniswap, MetaMask, Ledger, Etherscan,
  Coinbase, Revoke.cash, Optimism, Base.

## Length

Arabic usually runs at or under English length in characters. The slide
ceiling is enforced by the verifier; if a slide runs long, cut scaffolding,
not information: drop قم بـ + masdar chains in favor of the plain imperative
(قم بتحميل التطبيق → حمل التطبيق — undiacritized, context disambiguates), and
drop filler إن/الجدير بالذكر openers. Quiz options ≤ ~70 characters; nuance
goes into the `> ℹ️` feedback line (max ~150 chars).

## Interface strings (website namespaces)

- Keep `{{placeholders}}` and HTML tags exactly as in English, character for
  character, including their position relative to the text.
- Buttons and sidebar labels live in fixed-width furniture: if the Arabic is
  >60% longer than the English, find a shorter phrasing
  ("Connect Wallet" → "اربط المحفظة").
- Lesson names/descriptions in `lesson.json` are keyed by the exact English
  string.

## Fixed section headings

Every heading must be translated (an English heading passes every automated
check — read your own output before reporting back). Use exactly this Arabic:

| English heading | Arabic |
|---|---|
| `Introduction` | `مقدمة` |
| `Key Takeaways` | `أهم النقاط` |
| `Frequently Asked Questions` | `الأسئلة الشائعة` |
| `FAQ` | `الأسئلة الشائعة` |
| `Walkthrough` | `شرح خطوة بخطوة` |
| `Prerequisites` | `المتطلبات الأساسية` |

- A suffixed heading keeps the pinned form and translates its own suffix:
  `## Walkthrough: Using Revoke.cash` →
  `## شرح خطوة بخطوة: استخدام Revoke.cash`.
- **`Knowledge Check <n>` stays in ENGLISH with its original number** — it is a
  compiler identifier; the frontend renders its own translated label.
- Keep heading levels exactly as the source; no trailing period.

## Fixed quiz feedback openers

Pin the opener, write the rest of the sentence freely:

| English opener | Arabic |
|---|---|
| `Correct!` / `Correct.` | `أحسنت!` / `أحسنت.` |
| `Right!` | `بالضبط!` |
| `Try again!` | `حاول مرة أخرى!` |
| `Incorrect` / `Incorrect.` | `إجابة خاطئة.` |

## Fixed True/False option labels

| English option | ar |
|---|---|
| `True` | **صحيح** |
| `False` | **خطأ** |

صحيح/خطأ judges the STATEMENT; the correct-answer opener أحسنت! judges the
learner's pick, so the two never collide (the reason the opener is NOT صحيح!).
Only the option TEXT changes: the `[x]` stays on the same option index as
English — answer numbers are saved in users' localStorage.

## Fixed handbook credit labels

The bold role labels above the bios at the end of each handbook name REAL
people, and Arabic role nouns are gendered (مؤلف/مؤلفة). Use the
gender-neutral verbal nouns, exactly:
**تأليف** (Author), **تحرير** (Editor), **رعاية** (Patron).
Never the personal nouns, never per-lesson alternatives.

## Pinned terms

Every pin fixes the WORDING everywhere; whether it gets backticks is decided by
whether the term resolves in `translation/keywords/ar/keywords.json`.
`x = x` keeps English/Latin. Glossary agents: `keyword` = the pinned string
exactly; add the الـ-definite form(s) and any alias noted here to
`keyword_forms`.

```terms
private key = مفتاح خاص
blockchain = بلوكتشين   # usage over ETHGlossary's سلسلة الكتل; add سلسلة الكتل and البلوكتشين to keyword_forms
layer 2 = الطبقة الثانية
l2 = L2
l1 = L1
alternative layer 1 = طبقة أولى بديلة
smart contract = عقد ذكي
cryptocurrency = عملة مشفرة
crypto = كريبتو
decentralized = لامركزي
decentralization = لامركزية
dapp = تطبيق لامركزي
staking pool = مجمع تخزين
web3 = Web3
web2 = Web2
block = كتلة
crypto wallet = محفظة عملات مشفرة
cryptocurrency wallet = محفظة عملات مشفرة
liquidity pool = مجمع سيولة
liquidity = سيولة
dex = DEX
cex = CEX
validator node = عقدة تدقيق
validator nodes = عقدة تدقيق   # plural handled by keyword_plural عقد تدقيق
node operator = مشغل عقدة
address = عنوان
gas = غاز
gas fee = رسوم الغاز
optimistic rollup = رول أب متفائل
rollup = رول أب   # unified on the transliteration ETHGlossary itself uses in compounds
zk rollup = رول أب ZK
seed phrase = عبارة الاسترداد
recovery phrase = عبارة الاسترداد   # deliberate synonym pair, same as English
dao = DAO
peer-to-peer = نظير إلى نظير
peer = نظير
defi = DeFi
decentralized finance = التمويل اللامركزي
wallet = محفظة
blockchain apps = تطبيقات البلوكتشين
hot wallet = محفظة ساخنة
cold wallet = محفظة باردة
hardware wallet = محفظة أجهزة   # usage over ETHGlossary's عتادية
ledger = سجل
public key = مفتاح عام
token allowance = سماحية الرموز
allowance = سماحية
token approval = الموافقة على الرموز
price impact = تأثير السعر
decentralized exchange = منصة تداول لامركزية
centralized exchange = منصة تداول مركزية
onchain = على السلسلة
offchain = خارج السلسلة
sidechain = سلسلة جانبية
permissionless = غير مقيد بإذن
security = أمان   # network-security sense (per the en definition), NOT the financial instrument
veto = فيتو
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
custodian = وصي
custodial wallet = محفظة وصائية
non-custodial wallet = محفظة غير وصائية
self-custody = حفظ ذاتي
self-custody wallet = محفظة حفظ ذاتي
self-custodial = حفظ ذاتي
btc = BTC
eth = ETH
ether = إيثر
block hash = تجزئة الكتلة
wallet app = تطبيق محفظة
trade route = مسار تداول
stake = حصة تخزين
staking = تخزين
staker = مخزن   # plural مخزنون disambiguates; singular reads from context
solo staking = تخزين فردي
centralized exchange staking = تخزين عبر منصة مركزية
liquid staking token = رمز تخزين سائل
restaking = إعادة تخزين
slashing = اقتطاع
validator = مدقق
non-custodial = غير وصائي
blockspace = مساحة الكتل
block space = مساحة الكتل
blockchain trilemma = معضلة البلوكتشين الثلاثية
scalability = قابلية التوسع
bridge = جسر
nft = NFT
public good = منفعة عامة
token = رمز مميز
credible neutrality = حيادية موثوقة
satoshi nakamoto = ساتوشي ناكاموتو
scarcity = ندرة
inflation = تضخم
central bank = بنك مركزي
commercial bank = بنك تجاري
monetary policy = سياسة نقدية
gold standard = معيار الذهب
halving = التنصيف
max supply = الحد الأقصى للمعروض
circulating supply = المعروض المتداول
lightning network = شبكة البرق
miner = معدن   # plural معدنون; the metal reading never survives context
mining = تعدين
cryptocurrency mining = تعدين العملات المشفرة
block explorer = مستكشف الكتل
transaction = معاملة
transaction hash = تجزئة المعاملة
public = عام
node = عقدة
token swap = مبادلة رموز
swap = مبادلة
token pair = زوج رموز
sandwich attack = هجوم الشطيرة
gwei = Gwei
slippage = انزلاق سعري
slippage tolerance = حد الانزلاق السعري
centralized services = خدمات مركزية
ethereum blockchain = بلوكتشين إيثيريوم
ethereum mainnet = شبكة إيثيريوم الرئيسية
ethereum virtual machine = آلة إيثيريوم الافتراضية
onramp = onramp   # niche; the definition explains it converts regular money to crypto
stablecoin = عملة مستقرة
consensus = إجماع
consensus mechanism = آلية إجماع
block reward = مكافأة الكتلة
proof of stake = إثبات الحصة
proof-of-stake = إثبات الحصة
proof of work = إثبات العمل
transaction throughput = معدل معالجة المعاملات
sharding = تجزئة الشبكة   # NOT bare تجزئة, which is hash's display form (real collision caught at merge)
payment channel = قناة دفع
blob = Blob   # ETHGlossary's كتلة بيانات collides with block = كتلة; keep Latin
smart account = حساب ذكي
smart wallet = محفظة ذكية
onchain governance = حوكمة على السلسلة
network governance = حوكمة الشبكة
governance = حوكمة
delegate = مفوض
delegation = تفويض
primary name = الاسم الأساسي
onchain identity = هوية على السلسلة
mint = سك
attestation = تصديق
password manager = مدير كلمات المرور
social engineering = هندسة اجتماعية
phishing = تصيد احتيالي
fomo = FOMO
hodl = HODL
2fa = 2FA
two factor authentication = المصادقة الثنائية
red flag = علامة تحذير
scam-token = رمز احتيالي
kyc = KYC
know-your-customer = اعرف عميلك
fiat = عملة ورقية
coin = عملة
memecoin = عملة ميم
digital signature = توقيع رقمي
cryptography = علم التشفير
encryption = تشفير
zero-knowledge = معرفة صفرية
fraud proof = إثبات الاحتيال
validity proof = إثبات الصلاحية
finality = نهائية
epoch = حقبة
fork = تفرع
open source = مفتوح المصدر
trustless = منزوع الثقة
censorship-resistant = مقاوم للرقابة
51% attack = هجوم 51%
tps = TPS
mev = MEV
amm = AMM
lp = LP
tvl = TVL
otc = OTC
over the counter = التداول خارج المنصات
order book = دفتر الأوامر
dex aggregator = مجمع DEX
meta-aggregator = مجمع المجمعات
intent = قصد
solver = solver   # niche jargon, kept Latin like the ecosystem does
batch auction = مزاد بالدفعات
front-running = استباق
collateral = ضمان
liquidation = تصفية
vault = خزنة   # ETHGlossary's قبو is a cellar; خزنة/خزائن is the DeFi usage
peg = ربط
death spiral = دوامة الموت
counterparty risk = مخاطر الطرف المقابل
market cap = القيمة السوقية
stablecoin issuer = جهة إصدار عملة مستقرة
interoperability = قابلية التشغيل البيني
composability = قابلية التركيب
fungibility = قابلية الاستبدال
multi-token standard = معيار متعدد الرموز
yield farm = مزرعة عائد
quadratic funding = تمويل تربيعي
retropgf = RetroPGF
equality of opportunity = تكافؤ الفرص
decentralized money = نقود لامركزية
intermediary = وسيط
intermediary token = رمز وسيط
app = تطبيق
app store = متجر تطبيقات
```
