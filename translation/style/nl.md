# Dutch (nl) style guide (translate-content)

**This wave has NO vendored ETHGlossary data** (upstream never covered nl), so
this guide is the only terminology authority. The ```terms``` block at the end
beats everything, including your own judgment. When you disagree with a pin,
follow it anyway and flag it in your report; it gets adjudicated centrally.

## Variety and register

- **Informal second person: je / jij / jouw / jezelf.** Never `u`. Dutch web
  copy for a learning product is uniformly informal; `u` reads as a bank
  letter. Imperatives are bare: "Klik op…", "Controleer je adres".
- Netherlands-neutral Dutch, no Flemish-only vocabulary (no `ge/gij`, no
  `goesting`); a Belgian reader must feel addressed too.
- Short declarative sentences. Dutch tolerates long nested clauses; this course
  does not. One idea per sentence, main clause first.
- The reader is smart but new to crypto (ELI5): plain Dutch first, the
  technical term after, backticked if it is a glossary keyword.

## Terminology: three buckets

Dutch crypto usage keeps far more English than French or German does. The
buckets, in order of preference:

1. **Established Dutch words** where they are what Dutch readers actually meet:
   `privésleutel`, `grootboek`, `transactie`, `schaalbaarheid`, `herstelzin`
   (MetaMask's own Dutch UI term), `beurs` for exchange.
2. **English loanwords Dutch crypto has fully adopted** — do not translate:
   wallet, blockchain, smart contract, token, staking, bridge, dapp, gas,
   seed phrase, stablecoin, mining/miner, rollup, sidechain, DeFi, DAO, DEX,
   NFT. Coining a Dutch word for these ("slimme overeenkomst") marks the text
   as machine-translated.
3. **Never invent purist coinages.** If neither bucket fits, keep English and
   explain in plain Dutch on first use.

### Gender of the loanwords (use consistently)

de wallet, de blockchain, de bridge, de node, de dapp, de rollup, de
stablecoin, de DAO, de DEX, de NFT, de seed phrase, de miner, de validator,
het token, het smart contract, het gas, het protocol, het netwerk.

### Verbs borrowed from English

Conjugate regularly, 't kofschip applies: staken → gestaket (in de
staking-betekenis), swappen → geswapt, minten → gemint, bridgen → gebridget.
**`staking` is also gewoon Nederlands voor werkonderbreking** — write so the
crypto sense is unambiguous ("je ETH staken", never "de staking begint" without
context).

## Compounds: the rule that keeps tooltips alive

Dutch joins compounds into one word, but **a glossary term inside a closed
compound is a dead tooltip** (`blockchaintechnologie` does not resolve to
`blockchain`). Dutch orthography allows a readability hyphen in any compound,
so use it to keep the term intact and backtickable:

- `blockchain`-technologie, `token`-standaard, `wallet`-adres
- With a proper noun the hyphen is mandatory anyway: `Ethereum`-blockchain,
  `Ethereum`-mainnet.
- Only backtick the glossary part; the hyphen and the rest stay outside the
  backticks.
- When a pinned term IS a compound (`liquiditeitspool`, `wachtwoordmanager`,
  `consensusmechanisme`), write it exactly as pinned — those are glossary
  keywords in their own right.

## Glossary entries (keywords.json halves)

- Keys are the ENGLISH terms, verbatim, lowercase as in the English file.
- Entry shape: `{ "keyword": …, "keyword_plural": …, "definition": … }` and
  nothing else — no `glossary` field. Include `keyword_plural` exactly when the
  English entry has one; Dutch plurals are real (wallet → wallets, blok →
  blokken, privésleutel → privésleutels, beurs → beurzen).
- Add `keyword_forms: [ … ]` only for a display variant lessons will genuinely
  use (e.g. a hyphenated compound form). Expect few — French shipped 13.
- Definitions: translated, never the English text, no em dashes, one or two
  sentences, same informal register as the lessons.

## Length

Dutch runs 10-20% longer than English. Slides have a hard estimated-line
ceiling; compress by cutting filler ("er is", "het is belangrijk om"), not
information. Quiz options ≤ ~70 characters; move nuance into the `> ℹ️`
feedback line (max ~150 chars).

## Typography

- Decimal comma, thousands dot: 1.000,50. Percentages closed up: 10%.
- Quotes: use 'enkele' of "dubbele" rechte aanhalingstekens, matching the
  English source's usage; no „lage" quotes.
- No em dashes (—) anywhere; use a comma, colon, parentheses or a new sentence.
- Punctuation stays OUTSIDE emphasis markers: `**Waarde**:` never
  `**Waarde:**`; bold the link text, not the link: `[**naam**](url)`.

## Interface strings (website namespaces)

- Keep `{{placeholders}}` and HTML tags exactly as in English.
- Buttons and sidebar labels live in fixed-width furniture: if the Dutch is
  >60% longer than the English, find a shorter phrasing ("Connect Wallet" →
  "Wallet koppelen", not "Verbind je portemonnee met de applicatie").
- Lesson names/descriptions in `lesson.json` are keyed by the exact English
  string.

## Fixed section headings

Every heading must be translated (an English heading passes every automated
check — read your own output before reporting back). These recur across
lessons split over five agents; use exactly this Dutch:

| English heading | Dutch |
|---|---|
| `Introduction` | `Inleiding` |
| `Key Takeaways` | `Belangrijkste punten` |
| `Frequently Asked Questions` | `Veelgestelde vragen` |
| `Walkthrough` | `Stappenplan` |
| `Prerequisites` | `Vereisten` |
| `FAQ` | `FAQ` |

- A suffixed heading keeps the pinned form and translates its own suffix:
  `## Walkthrough: Using Revoke.cash` → `## Stappenplan: Revoke.cash gebruiken`.
- **`Knowledge Check <n>` stays in ENGLISH with its original number** — it is a
  compiler identifier; the frontend renders its own translated label.
- Keep heading levels exactly as the source; sentence case; no trailing period.

## Fixed quiz feedback openers

Pin the opener, write the rest of the sentence freely:

| English opener | Dutch |
|---|---|
| `Try again!` | `Probeer het opnieuw!` |
| `Correct!` / `Correct.` | `Correct!` / `Correct.` |
| `Right!` | `Precies!` |
| `Incorrect` / `Incorrect.` | `Onjuist.` |

## Fixed True/False option labels

| English option | nl |
|---|---|
| `True` | **Waar** |
| `False` | **Onwaar** |

Neither label collides with a feedback opener (the correct-opener is
`Correct!`). Only the option TEXT changes: the `[x]` stays on the same option
index as English — answer numbers are saved in users' localStorage.

## Fixed handbook credit labels

The bold role labels above the bios at the end of each handbook. Use exactly:
**Auteur** (Author), **Redactie** (Editor — collective and gender-neutral, so
it never asserts a real person's gender), **Mecenas** (Patron, mirroring the
French Mécène). A bio's own prose may be gendered when the person's English
bio is ("She" → "schrijfster en redactrice" for Trewkat is correct).

## Pinned terms

Every term below appears in two or more lessons. `x = x` keeps English.
A pin fixes the WORDING everywhere; whether it gets backticks is decided by
whether the term resolves in `translation/keywords/nl/keywords.json`.

```terms
private key = privésleutel
blockchain = blockchain
layer 2 = Layer 2
smart contract = smart contract
cryptocurrency = cryptovaluta
decentralized = gedecentraliseerd
dapp = dApp
staking pool = staking pool
web3 = web3
block = blok
crypto wallet = cryptowallet
liquidity pool = liquiditeitspool
dex = DEX
liquidity = liquiditeit
validator node = validatornode
validator nodes = validatornodes
decentralization = decentralisatie
address = adres
gas = gas
optimistic rollup = optimistic rollup
seed phrase = seed phrase
dao = DAO
peer-to-peer = peer-to-peer
defi = DeFi
wallet = wallet
node operator = node-operator
blockchain apps = blockchain-apps
hot wallet = hot wallet
ledger = grootboek
public key = publieke sleutel
cex = CEX
token allowance = token allowance
price impact = prijsimpact
decentralized exchange = gedecentraliseerde beurs
centralized exchange = gecentraliseerde beurs
onchain = onchain
sidechain = sidechain
permissionless = permissionless
security = veiligheid
zk rollup = ZK-rollup
veto = veto
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
web2 = web2
custodian = custodian
btc = BTC
self-custody = self-custody
cryptocurrency wallet = cryptowallet   # same display form as crypto wallet, deliberate
block hash = blokhash
wallet app = wallet-app
trade route = handelsroute
ether = ether
eth = ETH
stake = stake
validator = validator
non-custodial wallet = non-custodial wallet
staking = staking
blockspace = blockspace
block space = blockspace   # same display form, deliberate
blockchain trilemma = blockchain-trilemma
scalability = schaalbaarheid
bridge = bridge
nft = NFT
public good = publiek goed
token = token
liquid staking token = liquid staking token
credible neutrality = geloofwaardige neutraliteit
recovery phrase = herstelzin
self-custody wallet = self-custody wallet
hardware wallet = hardware wallet
satoshi nakamoto = Satoshi Nakamoto
scarcity = schaarste
central bank = centrale bank
monetary policy = monetair beleid
max supply = maximale voorraad
circulating supply = circulerende voorraad
lightning network = Lightning Network
miner = miner
block explorer = block explorer
transaction = transactie
public = publiek
node = node
token swap = token swap
token pair = tokenpaar
sandwich attack = sandwich attack
gwei = gwei
slippage tolerance = slippagetolerantie
centralized services = gecentraliseerde diensten
ethereum blockchain = Ethereum-blockchain
crypto = crypto
onramp = onramp
ethereum mainnet = Ethereum-mainnet
stablecoin = stablecoin
consensus = consensus
block reward = blokbeloning
slashing = slashing
proof of stake = Proof-of-Stake
transaction throughput = transactiedoorvoer
sharding = sharding
rollup = rollup
payment channel = betaalkanaal
blob = blob
offchain = offchain
smart account = smart account
onchain governance = onchain governance
l2 = L2
delegate = gedelegeerde
primary name = primaire naam
consensus mechanism = consensusmechanisme
mint = minten
solo staking = solo staking
centralized exchange staking = CEX-staking
slashed = geslasht
attestation = attestatie
cold wallet = cold wallet
password manager = wachtwoordmanager
social engineering = social engineering
phishing = phishing
fomo = FOMO
allowance = allowance
```
