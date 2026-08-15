# Spanish style guide (translate-content)

Variety and register
- Write **neutral Latin American Spanish**, understandable from Mexico to
  Argentina to Spain. Avoid regionalisms ("ordenador", "coger", "platicar",
  "vos", "chévere", "guay"). Prefer "computadora" over "ordenador",
  "celular"/"teléfono" over "móvil".
- Address the reader with **"tú"**, warm and direct. Never "usted", never
  "vosotros". Imperatives are the tú form: "haz clic", "conecta tu billetera",
  "revisa", "guarda".
- Prefer the active voice and short sentences. Spanish runs ~20-25% longer than
  English, more than French does: cut filler rather than let a slide overflow.
  Drop "de manera", "con el fin de", "es importante destacar que" and similar
  padding; say the thing directly.
- Avoid anglicisms where a natural Spanish word exists ("billetera" not
  "wallet" in prose), but keep the English term when it is what Spanish
  speakers actually say in crypto (see below).

Terms kept in English
- Product and network names: Bitcoin, Ethereum, Uniswap, Optimism, Base,
  MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea, Revoke.cash.
- Ticker symbols and units: ETH, BTC, USDC, OP, gwei, wei.
- Established crypto vocabulary used as-is in Spanish: blockchain, token,
  smart contract, staking, gas, DeFi, NFT, DAO, rollup, hash, stablecoin,
  HODL, airdrop, memecoin, bridge (as a noun for the product category).
- Acronyms: API, DEX, CEX, AMM, KYC, TPS, APR/APY, TVL, LP, ERC-20, EIP.

Terms to translate
- wallet -> billetera  (NOT "cartera", NOT "monedero" — pick one and hold it;
  the existing Spanish lessons use "billetera")
- ledger -> registro
- key (private/public) -> clave (privada/pública)
- seed phrase / recovery phrase -> frase semilla / frase de recuperación
- address -> dirección
- fee -> comisión (platform/service) / tarifa (network gas fee: "tarifa de gas")
- network -> red
- node -> nodo
- block -> bloque
- supply -> suministro (monetary supply), oferta where it means market supply
- yield -> rendimiento
- lending / borrowing -> préstamo / crédito (verbs: prestar / pedir prestado)
- swap -> intercambio (the verb "intercambiar"; "swapear" is not acceptable)
- trade (verb) -> operar / intercambiar; (noun) -> operación
- self-custody -> autocustodia
- mining -> minería; miner -> minero
- slippage -> deslizamiento
- liquidity pool -> pool de liquidez  ("pool" stays English, it is what is said)
- governance -> gobernanza
- proposal -> propuesta
- collateral -> colateral (garantía is fine where it reads better)
- peg -> paridad; pegged -> anclado

Glossary overrides
These win over the vendored ETHGlossary, which prefers formally-correct Spanish
that Spanish crypto speakers do not actually use ("cadena de bloques" for
blockchain). `x = x` pins a term to its English form. The generator injects
these as required translations for backticked terms.

```terms
blockchain = blockchain
blockchains = blockchains
blockchain technology = tecnología blockchain
token = token
tokens = tokens
smart contract = smart contract
smart contracts = smart contracts
staking = staking
gas = gas
rollup = rollup
rollups = rollups
hash = hash
stablecoin = stablecoin
stablecoins = stablecoins
airdrop = airdrop
memecoin = memecoin
mining = minería
cryptocurrency mining = minería de criptomonedas
self-custody = autocustodia
self-custodial = de autocustodia
custodian = custodio
custodians = custodios
peer-to-peer = entre pares
private key = clave privada
private keys = claves privadas
public key = clave pública
seed phrase = frase semilla
recovery phrase = frase de recuperación
wallet = billetera
wallets = billeteras
max supply = suministro máximo
circulating supply = suministro en circulación
halving = halving
scarcity = escasez
scarce = escaso
inflation = inflación
monetary policy = política monetaria
central bank = banco central
central banks = bancos centrales
commercial banks = bancos comerciales
gold standard = patrón oro
decentralization = descentralización
decentralized = descentralizado
decentralized money = dinero descentralizado
miners = mineros
spot ETFs = ETF al contado
Lightning Network = Lightning Network
cryptocurrency wallet = billetera de criptomonedas
equality of opportunity = igualdad de oportunidades
liquidity = liquidez
liquidity pool = pool de liquidez
liquidity pools = pools de liquidez
slippage = deslizamiento
price impact = impacto en el precio
order book = libro de órdenes
governance = gobernanza
```

Typography
- Open questions and exclamations with the inverted mark: ¿…? and ¡…!
  This is not optional, including inside quiz questions and feedback lines.
- Use « » only if the surrounding text already does; otherwise plain double
  quotes “ ”. No no-break-space rules apply to Spanish, write normal spaces.
- Never use em dashes (—). Use a comma, a colon, parentheses, or split the
  sentence.
- Decimal comma and thousands separator per Latin American convention
  (1,5 %  /  120 000). Leave a space before the percent sign.
- Accents are mandatory, including on capitals (Éter, Índice). Watch the ones
  that change meaning: "más" (more) vs "mas" (but), "sólo"/"solo", "él"/"el",
  "tú"/"tu", "qué"/"que", "cómo"/"como", "dónde"/"donde".

Interface strings
- When a slide describes clicking a button in an app whose interface is
  English, keep the button label in English and gloss it in Spanish on first
  use, e.g. haz clic en “Connect Wallet” (conectar la billetera).
