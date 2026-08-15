# German style guide (translate-content)

Register and address
- Address the reader with **"du"**, not "Sie". Bankless Academy is a peer
  teaching a peer, not an institution addressing a customer. Imperatives are
  the du form: "verbinde deine Wallet", "klicke auf", "bewahre auf".
- Short sentences. German is the worst offender for length: it runs ~25-35%
  longer than English once compounds and subordinate clauses pile up, more than
  French or Spanish. Cut filler ruthlessly rather than let a slide overflow.
- Prefer a verb-first main clause over a nested subordinate one. Break a long
  German sentence into two short ones instead of chaining with "wobei", "sodass",
  "welche".
- Avoid Behördendeutsch: no "im Rahmen von", "diesbezüglich", "seitens",
  "Zurverfügungstellung". Write how a knowledgeable friend would explain it.

Compounds and hyphens
- German compounds are one word, but crypto compounds with an English part take
  a hyphen: **Staking-Pool**, **Seed-Phrase**, **Hot-Wallet**, **Gas-Gebühr**,
  **Layer-2-Netzwerk**, **Smart-Contract-Adresse**. Never "Stakingpool".
- Do not invent a German compound where the English term is what people say.
  "Liquiditätspool" is fine and established; "Schlüsselwortwerkzeug" is not.

Terms kept in English
- Product and network names: Bitcoin, Ethereum, Uniswap, Optimism, Base,
  MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea, Revoke.cash.
- Tickers and units: ETH, BTC, USDC, OP, gwei, wei.
- Established crypto vocabulary used as-is in German: Blockchain, Token,
  Smart Contract, Staking, Gas, DeFi, NFT, DAO, Rollup, Hash, Stablecoin,
  Wallet, Mining, HODL, Airdrop, Memecoin, Bridge, Slashing, Layer 1/Layer 2.
  These are all **nouns and therefore capitalized**: die Wallet, das Token,
  der Smart Contract.
- Acronyms: API, DEX, CEX, AMM, KYC, TPS, APR/APY, TVL, LP, ERC-20, EIP.

Grammatical gender for the loanwords (use these consistently)
- **die** Wallet, **die** Blockchain, **die** Node (or der Node; pick die),
  **die** Transaktion, **die** Adresse, **die** Seed-Phrase, **die** DApp
- **das** Token, **das** Staking, **das** Mining, **das** Gas, **das** NFT,
  **das** Rollup, **das** Netzwerk
- **der** Smart Contract, **der** Block, **der** Hash, **der** Validator,
  **der** Schlüssel, **der** Stablecoin, **der** Bridge

Terms to translate
- wallet -> Wallet (kept, but "Krypto-Wallet" for "crypto wallet")
- key (private/public) -> Schlüssel (privater/öffentlicher Schlüssel)
- address -> Adresse
- fee -> Gebühr ("Gas-Gebühr" for gas fee)
- network -> Netzwerk
- node -> Node (kept; "Knoten" reads like graph theory)
- block -> Block
- ledger -> Kontobuch (the shared-record sense), NOT "Ledger" (that is a
  hardware-wallet brand and will be misread)
- supply -> Angebot (monetary), Umlaufmenge for circulating supply
- yield -> Rendite
- lending / borrowing -> Verleihen / Leihen
- swap -> Tausch (verb: tauschen); "swappen" is acceptable in walkthrough steps
- self-custody -> Selbstverwahrung
- trustless -> vertrauensfrei
- permissionless -> erlaubnisfrei
- slippage -> Slippage (kept)
- governance -> Governance (kept)

Glossary overrides
These win over the vendored ETHGlossary, which returns inflected forms
("privaten Schlüssel") and sometimes over-Germanized coinages. `x = x` pins a
term to its English form. Ordered by how many lessons use the term, so the ones
most likely to drift between translators are pinned first.

```terms
private key = privater Schlüssel
private keys = private Schlüssel
public key = öffentlicher Schlüssel
blockchain = Blockchain
blockchains = Blockchains
blockchain technology = Blockchain-Technologie
blockchain apps = Blockchain-Apps
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = Smart Contract
smart contracts = Smart Contracts
cryptocurrency = Kryptowährung
cryptocurrencies = Kryptowährungen
decentralized = dezentral
decentralization = Dezentralisierung
decentralized money = dezentrales Geld
dapp = DApp
dapps = DApps
staking pool = Staking-Pool
staking pools = Staking-Pools
staking = Staking
web3 = Web3
web2 = Web2
block = Block
crypto wallet = Krypto-Wallet
cryptocurrency wallet = Krypto-Wallet
wallet = Wallet
wallets = Wallets
liquidity = Liquidität
liquidity pool = Liquiditätspool
liquidity pools = Liquiditätspools
dex = DEX
cex = CEX
validator node = Validator-Node
validator nodes = Validator-Nodes
node operator = Node-Betreiber
address = Adresse
gas = Gas
gas fee = Gas-Gebühr
optimistic rollup = Optimistic Rollup
zk rollup = ZK-Rollup
rollup = Rollup
rollups = Rollups
seed phrase = Seed-Phrase
recovery phrase = Wiederherstellungsphrase
dao = DAO
peer-to-peer = Peer-to-Peer
defi = DeFi
hot wallet = Hot-Wallet
cold wallet = Cold-Wallet
ledger = Kontobuch
price impact = Preisauswirkung
decentralized exchange = dezentrale Börse
centralized exchange = zentralisierte Börse
onchain = onchain
sidechain = Sidechain
permissionless = erlaubnisfrei
trustless = vertrauensfrei
token = Token
tokens = Token
token allowance = Token-Freigabe
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
stablecoin = Stablecoin
stablecoins = Stablecoins
mining = Mining
miners = Miner
self-custody = Selbstverwahrung
custodian = Verwahrer
hash = Hash
nft = NFT
airdrop = Airdrop
memecoin = Memecoin
slippage = Slippage
governance = Governance
monetary policy = Geldpolitik
central bank = Zentralbank
central banks = Zentralbanken
gold standard = Goldstandard
max supply = maximales Angebot
circulating supply = Umlaufmenge
scarcity = Knappheit
inflation = Inflation
halving = Halving
```

Typography
- German quotation marks „so" (low-high) where the surrounding text quotes
  speech; straight double quotes are acceptable inside UI instructions.
- Never use em dashes (—). Use a comma, colon, parentheses, or a new sentence.
- Decimal comma and a thin/normal space as thousands separator: 0,0002 ETH,
  120 000. Space before the percent sign: 51 %.
- Capitalize all nouns, including the English loanwords (das Token, die Wallet).

Interface strings
- When a slide describes clicking a button in an app whose interface is
  English, keep the button label in English and gloss it in German on first
  use: klicke auf „Connect Wallet" (Wallet verbinden).
