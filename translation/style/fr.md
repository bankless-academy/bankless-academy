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

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | fr |
|---|---|
| `True` | **Vrai** |
| `False` | **Faux** |

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
across many of them. **Use exactly the French in this table. Do not
re-translate them per lesson, and do not improve on them.** Two agents each
picking a defensible synonym is exactly what shipped three different renderings
of `Key Takeaways` in German and four of `Try again!` in Japanese, all
repaired centrally afterwards.

| English heading | French | occurrences |
|---|---|---|
| `Key Takeaways` | `Points clés` | 7 |
| `Introduction` | `Introduction` | 6 |
| `Walkthrough` | `Guide pas à pas` | 3 |
| `FAQ` | `FAQ` | 3 |
| `Frequently Asked Questions` | `Questions fréquentes` | 3 |
| `Prerequisites` | `Prérequis` | 2 |
| `Choosing a DEX` | `Choisir un DEX` | 2 |

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

| English opener | French |
|---|---|
| `Try again!` | `Réessayez !` |
| `Correct!` | `Correct !` |

Keep the opener and the sentence after it on the same line, and keep the whole
feedback to one or two short sentences: it renders as a toast overlay, which
gets intrusive on mobile.
