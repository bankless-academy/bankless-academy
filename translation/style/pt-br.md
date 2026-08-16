# Brazilian Portuguese style guide (translate-content)

Variety and register
- Write **Brazilian Portuguese**, not European. "você" (never "tu" as a
  pronoun), gerund progressives ("está carregando", not "está a carregar"),
  "celular" not "telemóvel", "tela" not "ecrã", "arquivo" not "ficheiro",
  "time" not "equipa", "usuário" not "utilizador", "mouse" not "rato".
- Address the reader as **você**, warm and direct. Imperatives take the
  informal form matching "você": "conecte sua carteira", "clique em",
  "guarde", "verifique". Never the "tu" forms ("conecta", "clica").
- Prefer the active voice and short sentences. Portuguese runs ~20-25% longer
  than English. Cut filler ("de forma a", "é importante ressaltar que",
  "com o intuito de") rather than let a slide overflow.
- Avoid anglicisms where a natural Portuguese word exists ("carteira" not
  "wallet" in prose), but keep the English term when it is what Brazilian
  crypto speakers actually say (see below).

Terms kept in English
- Product and network names: Bitcoin, Ethereum, Uniswap, Optimism, Base,
  MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea, Revoke.cash.
- Tickers and units: ETH, BTC, USDC, OP, gwei, wei.
- Established crypto vocabulary used as-is in Brazilian Portuguese: blockchain,
  token, smart contract, staking, gas, DeFi, NFT, DAO, rollup, hash,
  stablecoin, HODL, airdrop, memecoin, bridge, mining (though "mineração" is
  standard and preferred in prose), sidechain, slippage.
- Acronyms: API, DEX, CEX, AMM, KYC, TPS, APR/APY, TVL, LP, ERC-20, EIP.

Grammatical gender for the loanwords (use these consistently)
- **a** blockchain, **a** wallet (but prefer "a carteira"), **a** DApp,
  **a** DAO, **a** stablecoin, **a** sidechain
- **o** token, **o** smart contract, **o** staking, **o** gas, **o** hash,
  **o** rollup, **o** NFT, **o** bloco, **o** nó, **o** bridge

Terms to translate
- wallet -> carteira  (NOT "bolsa", NOT "wallet" in prose)
- key (private/public) -> chave (privada/pública)
- seed phrase / recovery phrase -> frase semente / frase de recuperação
- address -> endereço
- fee -> taxa
- network -> rede
- node -> nó
- block -> bloco
- ledger -> livro-razão (the shared-record sense)
- supply -> oferta; circulating supply -> oferta circulante
- yield -> rendimento
- lending / borrowing -> empréstimo / tomada de empréstimo
- swap -> troca (verb: trocar); "swap" as a product noun is acceptable
- trade (verb) -> negociar; (noun) -> negociação
- self-custody -> autocustódia
- mining -> mineração; miner -> minerador
- liquidity pool -> pool de liquidez ("pool" stays English, it is what is said)
- governance -> governança
- collateral -> colateral (garantia where it reads better)
- peg -> paridade; pegged -> atrelado
- permissionless -> sem permissão
- trustless -> sem necessidade de confiança

Glossary overrides
These win over the vendored ETHGlossary, which returns inflected forms
("descentralizados") and prefers some terms Brazilian crypto speakers do not
use ("ponto a ponto" for peer-to-peer, "gás" for gas). `x = x` pins a term to
its English form. Ordered by how many lessons use the term, so the ones most
likely to drift between translators are pinned first.

```terms
private key = chave privada
private keys = chaves privadas
public key = chave pública
blockchain = blockchain
blockchains = blockchains
blockchain technology = tecnologia blockchain
blockchain apps = aplicativos blockchain
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = smart contract
smart contracts = smart contracts
cryptocurrency = criptomoeda
cryptocurrencies = criptomoedas
decentralized = descentralizado
decentralization = descentralização
decentralized money = dinheiro descentralizado
dapp = dApp
dapps = dApps
staking pool = pool de staking
staking pools = pools de staking
staking = staking
web3 = web3
web2 = web2
block = bloco
crypto wallet = carteira cripto
cryptocurrency wallet = carteira de criptomoedas
wallet = carteira
wallets = carteiras
liquidity = liquidez
liquidity pool = pool de liquidez
liquidity pools = pools de liquidez
dex = DEX
cex = CEX
validator node = nó validador
validator nodes = nós validadores
node operator = operador de nó
address = endereço
addresses = endereços
gas = gas
gas fee = taxa de gas
optimistic rollup = rollup otimista
zk rollup = rollup ZK
rollup = rollup
rollups = rollups
seed phrase = frase semente
recovery phrase = frase de recuperação
dao = DAO
peer-to-peer = peer-to-peer
defi = DeFi
hot wallet = carteira quente
cold wallet = carteira fria
ledger = livro-razão
price impact = impacto no preço
decentralized exchange = exchange descentralizada
centralized exchange = exchange centralizada
onchain = onchain
sidechain = sidechain
permissionless = sem permissão
trustless = sem necessidade de confiança
token = token
tokens = tokens
token allowance = permissão de token
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
stablecoin = stablecoin
stablecoins = stablecoins
mining = mineração
miners = mineradores
self-custody = autocustódia
custodian = custodiante
hash = hash
nft = NFT
airdrop = airdrop
memecoin = memecoin
slippage = slippage
governance = governança
monetary policy = política monetária
central bank = banco central
central banks = bancos centrais
gold standard = padrão-ouro
max supply = oferta máxima
circulating supply = oferta circulante
scarcity = escassez
inflation = inflação
halving = halving
```

Typography
- Portuguese quotation marks are the straight double quotes “ ”; do not use « ».
- Never use em dashes (—). Use a comma, colon, parentheses, or a new sentence.
- Decimal comma and period as thousands separator, Brazilian convention:
  0,0002 ETH, 120.000, R$ 1.500,00. Space before the percent sign: 51 %.
- Accents are mandatory: "é" vs "e", "está" vs "esta", "só", "você", "não",
  "então", "também", "após". Watch "por que / porque / por quê / porquê".

Interface strings
- When a slide describes clicking a button in an app whose interface is
  English, keep the button label in English and gloss it in Portuguese on
  first use: clique em “Connect Wallet” (conectar carteira).

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | pt-br |
|---|---|
| `True` | **Verdadeiro** |
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

## Fixed section headings

The 19 lessons are split across independent agents, and these headings recur
across many of them. **Use exactly the Portuguese in this table. Do not
re-translate them per lesson, and do not improve on them.** Two agents each
picking a defensible synonym is exactly what shipped three different renderings
of `Key Takeaways` in German and four of `Try again!` in Japanese, all
repaired centrally afterwards.

| English heading | Portuguese | occurrences |
|---|---|---|
| `Key Takeaways` | `Pontos principais` | 7 |
| `Introduction` | `Introdução` | 6 |
| `Walkthrough` | `Passo a passo` | 3 |
| `FAQ` | `Perguntas frequentes` | 3 |
| `Frequently Asked Questions` | `Perguntas frequentes` | 3 |
| `Prerequisites` | `Pré-requisitos` | 2 |
| `Choosing a DEX` | `Como escolher uma DEX` | 2 |

- **`FAQ` and `Frequently Asked Questions` stay distinct** where both appear,
  exactly as in the English source.
- **A suffixed heading keeps the pinned form and appends its own suffix**,
  translated: `## Walkthrough: Using Revoke.cash` keeps the pinned rendering of
  *Walkthrough* and translates only the part after the colon.
- Keep the heading level (`#` vs `##` vs `###`) exactly as the source has it.
  No trailing period, no `**bold**`.
- **`Knowledge Check <n>` stays in English, with its original number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two.

## Fixed quiz-feedback openers

Almost every `> ℹ️` line opens with one of a handful of English interjections.
**Pin the opener; write the rest of the sentence freely.**

| English opener | Portuguese |
|---|---|
| `Try again!` | `Tente de novo!` |
| `Correct!` | `Correto!` |

Keep the opener and the sentence after it on the same line, and keep the whole
feedback to one or two short sentences: it renders as a toast overlay, which
gets intrusive on mobile.
