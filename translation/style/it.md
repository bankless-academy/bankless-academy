# Italian style guide (translate-content)

Register and address
- Address the reader with **"tu"**, never "Lei". Bankless Academy is a peer
  teaching a peer. Imperatives are the tu form: "collega il tuo wallet",
  "clicca su", "conserva", "controlla".
- Short sentences, active voice. Italian runs ~15-20% longer than English, the
  mildest of the Romance languages here, but the 22-line ceiling still bites on
  slides that are already tight in English.
- Avoid burocratese: no "al fine di", "in merito a", "porre in essere",
  "effettuare". Write "per", "su", "fare".
- Avoid the impersonal "si" pile-up ("si può fare in modo che si possa…"); use
  "puoi".

Terms kept in English
- Product and network names: Bitcoin, Ethereum, Uniswap, Optimism, Base,
  MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea, Revoke.cash.
- Tickers and units: ETH, BTC, USDC, OP, gwei, wei.
- Established crypto vocabulary used as-is in Italian: blockchain, token,
  smart contract, staking, gas, DeFi, NFT, DAO, rollup, hash, stablecoin,
  wallet, mining, HODL, airdrop, memecoin, bridge, slippage, sidechain.
- Acronyms: API, DEX, CEX, AMM, KYC, TPS, APR/APY, TVL, LP, ERC-20, EIP.

Grammatical gender for the loanwords (hold these consistently)
- **il** wallet, **il** token, **il** blocco, **il** nodo, **il** rollup,
  **il** bridge, **lo** staking, **il** gas, **l'**hash, **il** DEX
- **la** blockchain, **la** DApp, **la** DAO, **la** stablecoin, **la** chiave,
  **la** transazione, **la** rete, **la** liquidità

Terms to translate
- wallet -> wallet (kept; "portafoglio" only where the sentence needs Italian)
- key (private/public) -> chiave (privata/pubblica)
- seed phrase -> frase seed; recovery phrase -> frase di recupero
- address -> indirizzo
- fee -> commissione (platform) / costo del gas (network)
- network -> rete
- node -> nodo
- block -> blocco
- ledger -> registro
- supply -> offerta; circulating supply -> offerta circolante
- yield -> rendimento
- lending / borrowing -> prestito / richiesta di prestito
- swap -> scambio (verb: scambiare); "swappare" is not acceptable
- self-custody -> autocustodia
- trustless -> senza necessità di fiducia
- permissionless -> senza permessi
- governance -> governance (kept)
- collateral -> collaterale (garanzia where it reads better)
- peg -> ancoraggio; pegged -> ancorato

Inflection
Italian adjectives agree in gender and number. The glossary entry carries the
masculine singular, so put the other three forms in `keyword_forms`
(decentralizzato / decentralizzata / decentralizzati / decentralizzate).
Without this a lesson has to reword around the term or ship a dead tooltip.

Glossary overrides
ETHGlossary returns inflected prose forms; always reduce to the base masculine
singular. `x = x` pins a term to its English form. Ordered by how many of the
19 lessons use the term.

```terms
private key = chiave privata
private keys = chiavi private
public key = chiave pubblica
blockchain = blockchain
blockchains = blockchain
blockchain technology = tecnologia blockchain
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = smart contract
smart contracts = smart contract
cryptocurrency = criptovaluta
cryptocurrencies = criptovalute
decentralized = decentralizzato
decentralization = decentralizzazione
dapp = dApp
dapps = dApp
staking pool = pool di staking
staking = staking
web3 = web3
web2 = web2
block = blocco
crypto wallet = crypto wallet
wallet = wallet
wallets = wallet
liquidity = liquidità
liquidity pool = pool di liquidità
dex = DEX
cex = CEX
validator node = nodo validatore
node operator = operatore di nodo
address = indirizzo
addresses = indirizzi
gas = gas
gas fee = costo del gas
optimistic rollup = rollup ottimistico
zk rollup = rollup ZK
rollup = rollup
seed phrase = frase seed
recovery phrase = frase di recupero
dao = DAO
peer-to-peer = peer-to-peer
defi = DeFi
hot wallet = hot wallet
cold wallet = cold wallet
ledger = registro
price impact = impatto sul prezzo
decentralized exchange = exchange decentralizzato
centralized exchange = exchange centralizzato
onchain = onchain
sidechain = sidechain
permissionless = senza permessi
trustless = senza necessità di fiducia
token = token
tokens = token
token allowance = autorizzazione del token
stablecoin = stablecoin
mining = mining
miners = miner
self-custody = autocustodia
hash = hash
nft = NFT
slippage = slippage
governance = governance
monetary policy = politica monetaria
central bank = banca centrale
gold standard = gold standard
max supply = offerta massima
circulating supply = offerta circolante
scarcity = scarsità
inflation = inflazione
halving = halving
```

Typography
- Italian uses « » rarely; prefer the straight double quotes “ ”.
- Never use em dashes (—). Use a comma, colon, parentheses, or a new sentence.
- Decimal comma and period thousands separator: 0,0002 ETH, 120.000. Space
  before the percent sign: 51 %.
- Apostrophes elide correctly: "l'indirizzo", "dell'ETH", "un'applicazione"
  (feminine only).

Interface strings
- Keep an English app's button label in English and gloss it in Italian on
  first use: clicca su “Connect Wallet” (collega il wallet).

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | it |
|---|---|
| `True` | **Vero** |
| `False` | **Falso** |

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
