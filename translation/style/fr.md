# French style guide (translate-content)

Register and address
- Use **vouvoiement** ("vous"), the register the existing French lessons use.
  Stay warm and direct, never stiff or administrative.
- Prefer the active voice and short sentences. French runs ~15-20% longer than
  English: cut filler rather than let a slide overflow.
- Avoid anglicisms where a natural French word exists ("portefeuille" not
  "wallet" in prose), but keep the English term when it is what French speakers
  actually say in crypto (see below).

Terms kept in English
- Product and network names: Bitcoin, Ethereum, Uniswap, Optimism, Base,
  MetaMask, Coinbase.
- Ticker symbols and units: ETH, BTC, USDC, gwei, wei.
- Established crypto vocabulary used as-is in French: blockchain, token,
  smart contract, staking, gas, DeFi, NFT, DAO, rollup, hash, mining
  (though "minage" is fine when it reads better), HODL.
- Acronyms: API, DEX, AMM, KYC, TPS, APR/APY.

Terms to translate
- wallet -> portefeuille
- ledger -> registre
- key (private/public) -> clé (privée/publique)
- recovery phrase -> phrase de récupération
- address -> adresse
- transaction -> transaction
- fee -> frais
- network -> réseau
- node -> nœud
- block -> bloc
- supply -> offre (monetary supply), réserve where it means a stock
- yield -> rendement
- lending / borrowing -> prêt / emprunt
- swap -> échange (the verb "swapper" is acceptable in walkthrough steps)

Glossary overrides
These win over the vendored ETHGlossary, which prefers formally-correct French
that French crypto speakers do not actually use ("chaîne de blocs" for
blockchain). `x = x` pins a term to its English form. The generator injects
these as required translations for backticked terms.

```terms
blockchain = blockchain
blockchains = blockchains
blockchain technology = technologie blockchain
token = token
tokens = tokens
smart contract = smart contract
smart contracts = smart contracts
staking = staking
gas = gas
rollup = rollup
rollups = rollups
hash = hash
mining = minage
cryptocurrency mining = minage de cryptomonnaie
self-custody = auto-conservation
self-custodial = en auto-conservation
custodian = dépositaire
custodians = dépositaires
peer-to-peer = pair-à-pair
private key = clé privée
private keys = clés privées
public key = clé publique
recovery phrase = phrase de récupération
max supply = offre maximale
circulating supply = offre en circulation
halving = halving
scarcity = rareté
scarce = rare
inflation = inflation
monetary policy = politique monétaire
central bank = banque centrale
central banks = banques centrales
commercial banks = banques commerciales
gold standard = étalon-or
decentralization = décentralisation
decentralized = décentralisé
decentralized money = monnaie décentralisée
miners = mineurs
spot ETFs = ETF au comptant
Lightning Network = Lightning Network
cryptocurrency wallet = portefeuille de cryptomonnaie
equality of opportunity = égalité des chances
```

Typography
- Use French quotation marks « » for quoted speech, and straight or curly
  apostrophes consistently with the surrounding text.
- A no-break space goes before : ; ! ? and inside « ». `translate-content`
  applies this automatically after translating (see `applyTypography` in
  content-lib.js), so write a normal space and let the pipeline fix it. A plain
  space here is a real bug: the line can wrap and strand the punctuation alone
  at the start of the next line.
- Never use em dashes (—). Use a comma, a colon, parentheses, or split the
  sentence.
- Decimal comma (1,5 %) and a space before the percent sign.

Interface strings
- When a slide describes clicking a button in an app whose interface is
  English, keep the button label in English and gloss it in French on first
  use, e.g. « cliquez sur "Connect Wallet" (connecter le portefeuille) ».
