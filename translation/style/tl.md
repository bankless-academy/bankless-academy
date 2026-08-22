# Filipino (tl) style guide (translate-content)

**This wave has NO vendored ETHGlossary data** (upstream never covered tl), so
this guide is the only terminology authority. The ```terms``` block at the end
beats everything, including your own judgment. When you disagree with a pin,
follow it anyway and flag it in your report; it gets adjudicated centrally.

## Variety and register

- **Conversational Filipino with natural English retention (Taglish register)**
  — the register of GCash help pages, PH fintech explainers and classroom
  English-Filipino code-switching. NOT purist Filipino: a reader who meets
  "salansang-bloke" for blockchain closes the tab.
- **Informal second person singular: ikaw / ka / mo / iyong.** No `po/opo`, no
  `kayo` — the course speaks peer-to-peer, like Duolingo, not like a
  government form.
- Short declarative sentences, one idea each. Filipino word order is flexible;
  prefer the plain ang-focus sentence a beginner parses fastest.
- The reader is smart but new to crypto (ELI5): explain in plain Filipino
  first, then the English technical term, backticked if it is a glossary
  keyword.

## Terminology: three buckets

1. **Native/established Filipino** where it is what readers actually use:
   transaksyon, seguridad, desentralisado, kakapusan (scarcity), bangko
   sentral, patakarang pananalapi (monetary policy), pampubliko.
2. **English kept as-is** — the overwhelming default for crypto/tech terms:
   wallet, blockchain, private key, smart contract, token, staking, gas,
   seed phrase, exchange, bridge, mining, rollup, DeFi, DAO, DEX, NFT.
   English spelling stays exact: never respell loanwords (no "bloktseyn").
3. **Never invent purist coinages.** If neither bucket fits, keep English and
   explain in plain Filipino on first use.

## Grammar mechanics that interact with the pipeline

- **Plural is `mga` + the bare term, and `mga` stays OUTSIDE the backticks**:
  "ang mga `wallet`", "mga `validator node`". Never pluralize the English word
  inside backticks ("mga wallets" is double-marked and the tooltip still
  resolves, but pick one system: `mga` + singular).
- **Verbal affixes on English loans take a hyphen, and the hyphen + affix stay
  OUTSIDE the backticks**: i-`swap`, mag-`stake`, na-`slash`, i-`mint`,
  mag-`mint`. If an affixed form reads awkwardly, rephrase with a light verb
  ("gawin ang swap") instead of burying the term.
- **Linkers**: use `na` after a consonant-final English word ("wallet na
  ito"), never attach `-ng` to a word inside backticks.
- Because the bare English form is what lessons backtick, glossary
  `keyword_plural` = same string as `keyword` whenever the English entry has a
  plural (the ja/zh convention), and `keyword_forms` stays absent.

## Glossary entries (keywords.json halves)

- Keys are the ENGLISH terms, verbatim, lowercase as in the English file.
- Entry shape: `{ "keyword": …, "keyword_plural": …, "definition": … }` and
  nothing else — no `glossary` field.
- Definitions: translated into Filipino (Taglish register is fine, but the
  SENTENCE must be Filipino), never the English text, no em dashes, one or two
  sentences.

## Length

Filipino runs 20-30% longer than English. The slide ceiling is enforced by the
verifier; compress by cutting scaffolding ("ito ay", "upang sa gayon"), not
information. Quiz options ≤ ~70 characters; nuance goes into the `> ℹ️`
feedback line (max ~150 chars).

## Typography

- English punctuation conventions throughout; Arabic numerals; decimal point
  and comma separators as in English (1,000.50).
- No em dashes (—) anywhere; use a comma, colon, parentheses or a new sentence.
- Punctuation stays OUTSIDE emphasis markers: `**Halaga**:` never
  `**Halaga:**`; bold the link text, not the link: `[**pangalan**](url)`.

## Interface strings (website namespaces)

- Keep `{{placeholders}}` and HTML tags exactly as in English.
- Buttons and sidebar labels live in fixed-width furniture: if the Filipino is
  >60% longer than the English, find a shorter phrasing ("Connect Wallet" →
  "Ikonekta ang wallet").
- Lesson names/descriptions in `lesson.json` are keyed by the exact English
  string.

## Fixed section headings

Every heading must be translated (an English heading passes every automated
check — read your own output before reporting back). Use exactly this
Filipino:

| English heading | Filipino |
|---|---|
| `Introduction` | `Panimula` |
| `Key Takeaways` | `Mga pangunahing punto` |
| `Frequently Asked Questions` | `Mga madalas itanong` |
| `Walkthrough` | `Hakbang-hakbang na gabay` |
| `Prerequisites` | `Mga kailangan bago magsimula` |
| `FAQ` | `FAQ` |

- A suffixed heading keeps the pinned form and translates its own suffix:
  `## Walkthrough: Using Revoke.cash` →
  `## Hakbang-hakbang na gabay: Paggamit ng Revoke.cash`.
- **`Knowledge Check <n>` stays in ENGLISH with its original number** — it is a
  compiler identifier; the frontend renders its own translated label.
- Keep heading levels exactly as the source; sentence case; no trailing period.

## Fixed quiz feedback openers

Pin the opener, write the rest of the sentence freely:

| English opener | Filipino |
|---|---|
| `Try again!` | `Subukan ulit!` |
| `Correct!` / `Correct.` | `Tama!` / `Tama.` |
| `Right!` | `Tumpak!` |
| `Incorrect` / `Incorrect.` | `Mali.` |

## Fixed True/False option labels

| English option | tl |
|---|---|
| `True` | **Totoo** |
| `False` | **Hindi totoo** |

Totoo/Hindi totoo judges the STATEMENT, so it cannot collide with the
correct-answer opener `Tama!` (which judges the learner's pick) or the
wrong-answer `Mali.` — the school pair Tama/Mali is deliberately NOT used for
the options for exactly that reason. Only the option TEXT changes: the `[x]`
stays on the same option index as English — answer numbers are saved in users'
localStorage.

## Fixed handbook credit labels

The bold role labels above the bios at the end of each handbook. Use exactly:
**May-akda** (Author), **Editor** (Editor — the Taglish default; Patnugot is
journalism-formal), **Patron** (Patron). All three are gender-neutral; do not
coin alternatives per lesson.

## Pinned terms

Every term below appears in two or more lessons. `x = x` keeps English.
A pin fixes the WORDING everywhere; whether it gets backticks is decided by
whether the term resolves in `translation/keywords/tl/keywords.json`.

```terms
private key = private key
blockchain = blockchain
layer 2 = Layer 2
smart contract = smart contract
cryptocurrency = cryptocurrency
decentralized = desentralisado
dapp = dApp
staking pool = staking pool
web3 = web3
block = block
crypto wallet = crypto wallet
liquidity pool = liquidity pool
dex = DEX
liquidity = liquidity
validator node = validator node
validator nodes = validator node   # mga + singular carries the plural, deliberate duplicate
decentralization = desentralisasyon
address = address
gas = gas
optimistic rollup = optimistic rollup
seed phrase = seed phrase
dao = DAO
peer-to-peer = peer-to-peer
defi = DeFi
wallet = wallet
node operator = node operator
blockchain apps = blockchain app   # mga + singular, see grammar mechanics
hot wallet = hot wallet
ledger = ledger
public key = public key
cex = CEX
token allowance = token allowance
price impact = price impact
decentralized exchange = decentralized exchange
centralized exchange = centralized exchange
onchain = onchain
sidechain = sidechain
permissionless = permissionless
security = seguridad
zk rollup = ZK rollup
veto = veto
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
web2 = web2
custodian = custodian
btc = BTC
self-custody = self-custody
cryptocurrency wallet = cryptocurrency wallet
block hash = block hash
wallet app = wallet app
trade route = trade route
ether = ether
eth = ETH
stake = stake
validator = validator
non-custodial wallet = non-custodial wallet
staking = staking
blockspace = blockspace
block space = block space
blockchain trilemma = blockchain trilemma
scalability = scalability
bridge = bridge
nft = NFT
public good = public good
token = token
liquid staking token = liquid staking token
credible neutrality = credible neutrality
recovery phrase = recovery phrase
self-custody wallet = self-custody wallet
hardware wallet = hardware wallet
satoshi nakamoto = Satoshi Nakamoto
scarcity = kakapusan
central bank = bangko sentral
monetary policy = patakarang pananalapi
max supply = max supply
circulating supply = circulating supply
lightning network = Lightning Network
miner = miner
block explorer = block explorer
transaction = transaksyon
public = pampubliko
node = node
token swap = token swap
token pair = token pair
sandwich attack = sandwich attack
gwei = gwei
slippage tolerance = slippage tolerance
centralized services = sentralisadong serbisyo
ethereum blockchain = Ethereum blockchain
crypto = crypto
onramp = onramp
ethereum mainnet = Ethereum mainnet
stablecoin = stablecoin
consensus = consensus
block reward = block reward
slashing = slashing
proof of stake = Proof-of-Stake
transaction throughput = transaction throughput
sharding = sharding
rollup = rollup
payment channel = payment channel
blob = blob
offchain = offchain
smart account = smart account
onchain governance = onchain governance
l2 = L2
delegate = delegate
primary name = primary name
consensus mechanism = consensus mechanism
mint = mint
solo staking = solo staking
centralized exchange staking = centralized exchange staking
slashed = slashed
attestation = attestation
cold wallet = cold wallet
password manager = password manager
social engineering = social engineering
phishing = phishing
fomo = FOMO
allowance = allowance
```
