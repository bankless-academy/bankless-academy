# Swahili style guide (translate-content)

Swahili is the first Bantu language in this repo, and nothing that came before
it transfers. There is no gender, no case, no article, and no gendered past
tense, so most of the traps that bit German, Polish and Russian simply do not
exist here. In their place sits one trap that is bigger than all of them:
**the noun class**. Every adjective, every verb, every "of", every "this" and
every "your" in a Swahili sentence takes a prefix chosen by the class of the
noun it belongs to. Two translators who disagree about which class `tokeni`
belongs to produce visibly broken Swahili on adjacent slides, and no automated
check in this repo can see it.

Read "Noun classes" twice. Everything else in this file is craft; that section
is correctness.

## Variety and register

**Write Standard Swahili (Kiswahili sanifu)**: the coastal/Zanzibar-based
standard codified by TUKI and BAKITA and taught in schools across Tanzania,
Kenya, Uganda and the region. Grammar, orthography and morphology follow that
standard, without exception.

**Take vocabulary from East African tech and fintech usage, not from the
purist end of the dictionary.** The audience is an East African crypto reader:
someone who already sends money on M-Pesa, Tigo Pesa or Airtel Money, has met
"P2P" on an exchange app, and reads a mix of Swahili and English online every
day. Where a formally-correct BAKITA-style coinage exists but the reader has
never met it, this guide pins the word people actually use, which is often the
English one. That is a deliberate choice, and the ```terms``` block below is
where it is recorded.

The M-Pesa generation's money vocabulary is the reality check for every
money, wallet and transaction word. It is why this guide says **muamala**
(transaction), **ada** (fee), **pesa** (money), **salio** (balance) and
**nenosiri** (password): those are the words a Swahili speaker has already read
on a phone screen a thousand times.

Not this variety:

- **No Sheng and no Nairobi street register**: not *poa*, *buda*, *doo*,
  *mzee* as filler, *sasa* as a greeting.
- **No Kingwana / Congolese forms**, no Comorian, no Kimvita spellings.
- **No heavy code-switching.** English words appear only where this guide pins
  them. A sentence like "unaweza ku-*check* balance yako" is out.
- **No colloquial money slang**: *pesa*, never *hela* or *chuma*.
- Where Tanzanian and Kenyan usage differ at all, take the TUKI/BAKITA form.

## Address: second person singular, always

- **Address the reader as one person in the second person singular**: subject
  prefix `u-`, pronoun *wewe*, possessive *-ako*. "Utaona", "unaweza",
  "mkoba wako", "funguo zako".
- Imperatives are the bare singular: **fungua, bofya, hifadhi, angalia,
  chagua, kumbuka, nakili**. Negative imperatives take `usi-`: **usishiriki,
  usitume, usibofye**.
- **Never use the plural/polite `m-` / *ninyi* / *-enu* for one reader**, and
  never the plural imperative (*fungueni*, *bofyeni*). Addressing one person
  in the plural is the deference register of a letter to an elder, a sermon or
  a government notice, which is exactly the institution these lessons teach the
  reader to do without. Every product the reader already uses speaks to them in
  the singular: the M-Pesa prompt says *Weka namba yako ya siri*, not *Wekeni*.
- **Never the impersonal third person.** *Mtumiaji anapaswa kuhifadhi ufunguo
  wake* ("the user should store their key") is manual Swahili and puts a wall
  between the writer and the reader. Write *Hifadhi ufunguo wako*.
- *tafadhali* ("please") is rare in Swahili instructions. Use it once in a
  genuine request, not on every step.
- **"We" is safe.** Swahili does not mark the inclusive/exclusive distinction
  that Indonesian does, so *tutaangalia* ("we will look at") works when the
  lesson walks the reader through something. When Bankless Academy speaks as an
  organisation, name it: *Bankless Academy inapendekeza…*, not *tunapendekeza*.
- **Swahili verbs carry no gender.** Unlike Polish or Russian, *umemaliza somo
  hili* is correct for every reader. There is nothing to work around here.
- Short, active sentences. Swahili tolerates very long relative chains and
  machine Swahili abuses them; split at the clause boundary instead of stacking
  *ambao … ambayo … ambacho*.

**Explorer**, the site's word for its readers, is **Mgunduzi** (plural
**Wagunduzi**), capitalised as a title. Do **not** use *Mchunguzi*: that root is
already spoken for by *kichunguzi cha bloku* (block explorer), and the collision
lands on exactly the slides where both words appear.

## Noun classes: the section that decides correctness

A Swahili noun belongs to a class. The class chooses the prefix on the verb,
on the adjective, on the possessive, on the demonstrative and on the "of"
particle. Get the class wrong and the whole sentence is wrong.

### The rule for loanwords

**Every English crypto loanword that this guide keeps in English, or that
Swahili has borrowed phonetically, takes class 9/10 (the N-class).** That is
the class Swahili puts modern borrowings in, it is the one with no visible
prefix, and its singular and plural are spelled identically. Concords:
`i-` singular / `zi-` plural on the verb, **ya / za** for "of", **hii / hizi**
for "this/these", **yako / zako** for "your".

    blockchain hii inarekodi kila muamala.        (cl. 9)
    tokeni zako zote ziko kwenye mkoba mmoja.     (cl. 10)
    rollup ya Optimism ina ada ndogo.
    nodi zinathibitisha kila bloku.

**Do not invent a `ma-` plural for a loanword.** *matokeni*, *manodi* and
*mabloku* are not Swahili; the plural of a class 9/10 noun is the same word,
and the verb prefix `zi-` carries the count.

### Declared classes for the high-traffic terms

Everything below is fixed. Do not reassign a class because a sentence would be
easier.

| term | class | singular / plural | subject prefix sg/pl | "of" sg/pl | this/these | your |
|---|---|---|---|---|---|---|
| blockchain | 9/10 | blockchain / blockchain | i- / zi- | ya / za | hii / hizi | yako / zako |
| tokeni | 9/10 | tokeni / tokeni | i- / zi- | ya / za | hii / hizi | yako / zako |
| bloku | 9/10 | bloku / bloku | i- / zi- | ya / za | hii / hizi | yako / zako |
| nodi | 9/10 | nodi / nodi | i- / zi- | ya / za | hii / hizi | yako / zako |
| anwani | 9/10 | anwani / anwani | i- / zi- | ya / za | hii / hizi | yako / zako |
| ada | 9/10 | ada / ada | i- / zi- | ya / za | hii / hizi | yako / zako |
| akaunti | 9/10 | akaunti / akaunti | i- / zi- | ya / za | hii / hizi | yako / zako |
| heshi | 9/10 | heshi / heshi | i- / zi- | ya / za | hii / hizi | yako / zako |
| rollup, staking, gesi, itifaki, sarafu, pesa, hifadhi, tuzo, nia, jozi, kura, rekodi, hatari, kasi, njia, nafasi, orakeli | 9/10 | unchanged | i- / zi- | ya / za | hii / hizi | yako / zako |
| DEX, CEX, NFT, DAO, DeFi, ETF, LST, AMM, LP, TVL, MEV, TPS, OTC, KYC | 9/10 | unchanged | i- / zi- | ya / za | hii / hizi | yako / zako |
| **mkoba** (wallet) | 3/4 | mkoba / mikoba | u- / i- | wa / ya | huu / hii | wako / yako |
| **mkataba mahiri** (smart contract) | 3/4 | mkataba / mikataba | u- / i- | wa / ya | huu / hii | wako / yako |
| **muamala** (transaction) | 3/4 | muamala / miamala | u- / i- | wa / ya | huu / hii | wako / yako |
| **mtandao** (network) | 3/4 | mtandao / mitandao | u- / i- | wa / ya | huu / hii | wako / yako |
| mnyororo, mfumo, mchepuo, mgawanyo, mwafaka, mfumuko, mnada, mzunguko, mwingiliano | 3/4 | m- / mi- | u- / i- | wa / ya | huu / hii | wako / yako |
| **ufunguo** (key) | 11/10 | ufunguo / funguo | u- / zi- | wa / za | huu / hizi | wako / zako |
| **daraja** (bridge) | 5/6 | daraja / madaraja | li- / ya- | la / ya | hili / haya | lako / yako |
| **soko** (exchange) | 5/6 | soko / masoko | li- / ya- | la / ya | hili / haya | lako / yako |
| **bwawa** (pool) | 5/6 | bwawa / mabwawa | li- / ya- | la / ya | hili / haya | lako / yako |
| daftari, badilishano, tabaka, pendekezo, shambulio, fungamanisho, neno | 5/6 | Ø / ma- | li- / ya- | la / ya | hili / haya | lako / yako |
| **kibali** (allowance) | 7/8 | kibali / vibali | ki- / vi- | cha / vya | hiki / hivi | chako / vyako |
| kichunguzi, kikusanyaji, kipindi, kiwango, kitendakazi, chanzo | 7/8 | ki-/ch- / vi-/vy- | ki- / vi- | cha / vya | hiki / hivi | chako / vyako |
| **mthibitishaji** (validator) | 1/2 | mthibitishaji / wathibitishaji | a- / wa- | wa / wa | huyu / hawa | wako / wako |
| mchimbaji, mtatuaji, mwakilishi, mdhamini, mpatanishi, mwenza, mkopaji, mkopeshaji, mwendeshaji, mtoaji, mjenzi, mpendekezaji, mtengenezaji | 1/2 | m-/mw- / wa- | a- / wa- | wa / wa | huyu / hawa | wako / wako |
| **ukwasi** (liquidity) | 14 | no plural | u- | wa | huu | wako |
| usalama, ugatuzi, uchimbaji, uhaba, uthibitisho, udanganyifu, ugavi, uwakilishi, utawala, utangamano, utambulisho, uelekezaji, usimbaji, uhifadhi, utelezi, ulaghai, usawa | 14 | no plural | u- | wa | huu | wako |

### The associative particle: the single most visible agreement

Almost every multi-word term in this guide is `NOUN + a-particle + NOUN`, and
**the particle is chosen by the class of the FIRST noun, never the second**.
This is the agreement that drifts between agents, because it looks like a free
choice and is not:

    ada ya gesi              ada is cl. 9   -> ya
    bwawa la ukwasi          bwawa is cl. 5 -> la
    mkoba wa maunzi          mkoba is cl. 3 -> wa
    kichunguzi cha bloku     kichunguzi cl. 7 -> cha
    funguo za siri           funguo is cl. 10 -> za
    nodi ya mthibitishaji    nodi is cl. 9  -> ya
    mikataba ya mahiri  <- WRONG, "mahiri" is an adjective, not a noun:
                             write mikataba mahiri

Full set: cl.1/2 **wa**, cl.3 **wa**, cl.4 **ya**, cl.5 **la**, cl.6 **ya**,
cl.7 **cha**, cl.8 **vya**, cl.9 **ya**, cl.10 **za**, cl.11/14 **wa**.

### Adjectives: which ones agree and which do not

Bantu-stem adjectives take the class prefix. Arabic-loan adjectives do not, and
they are your friends: they are invariable in every class.

- **Invariable (use these freely)**: *mahiri* (smart), *safi*, *salama*
  (safe), *ghali*, *rahisi* (easy/cheap), *bora* (best), *hasa* (exact),
  *adimu* (scarce), *mbadala* (alternative), *sugu* (resistant), *maalum*
  (special), *sambamba* (parallel), *huria* (free/open), *thabiti* (stable),
  *kuu* (main), *bandia* (fake).
- **Agreeing**: *-pya* (mpya / mipya / kipya / vipya / mapya), *-kubwa*,
  *-dogo*, *-zuri*, *-ingi*, *-ote*.

This is why `smart contract` is **mkataba mahiri** and not *mkataba mwerevu*:
*mahiri* never changes, so *mikataba mahiri* needs no thought and cannot drift.
For the same reason `smart account` is **akaunti mahiri** and `smart wallet` is
**mkoba mahiri**, one adjective for the whole family.

### Relative/participial terms: the Swahili version of adjective agreement

Four pinned terms are relative verb forms, and a relative form carries its
class inside it. `decentralized` is the worst offender: it appears on nine
lessons and has eleven surface forms.

| class | `decentralized` | `-enye` (having) |
|---|---|---|
| 1 | aliyegatuliwa | mwenye |
| 2 | waliogatuliwa | wenye |
| 3 | uliogatuliwa | wenye |
| 4 | iliyogatuliwa | yenye |
| 5 | lililogatuliwa | lenye |
| 6 | yaliyogatuliwa | yenye |
| 7 | kilichogatuliwa | chenye |
| 8 | vilivyogatuliwa | vyenye |
| 9 | **iliyogatuliwa** (citation form) | **yenye** |
| 10 | zilizogatuliwa | zenye |
| 11/14 | uliogatuliwa | wenye |

    soko lililogatuliwa        decentralized exchange (soko is cl. 5)
    mtandao uliogatuliwa       decentralized network  (mtandao is cl. 3)
    fedha zilizogatuliwa       decentralized finance  (fedha is cl. 10)
    pesa iliyogatuliwa         decentralized money    (pesa is cl. 9)

The glossary registers the class-9 form as `keyword` and all the others in
`keyword_forms`, so any of them resolves to a tooltip. But **prefer the noun**:
`ugatuzi` (decentralization, class 14) is invariable and is the word Kenyan
readers already know from devolution. *Mtandao wenye ugatuzi* says the same
thing with no agreement to get wrong.

The same treatment applies to `centralized` (**ya kati**, where the particle
agrees: *wa kati / la kati / cha kati / za kati*), `self-custodial`
(**wa uhifadhi binafsi**, same particle set), `liquid` (**yenye ukwasi**),
`asynchronous` (**isiyo sambamba**) and `value-extractive` (**unaochota
thamani**).

## Swahili, English, or a Swahili word: the three buckets

Every crypto term falls into exactly one bucket. Decide with this test, in
order, and never move a term between buckets across two lessons.

1. **English, untouched.** Product, network and company names: Bitcoin,
   Ethereum, Uniswap, Optimism, Base, MetaMask, Coinbase, Zerion, Velodrome,
   Rocket Pool, OpenSea, Etherscan, Revoke.cash, Lightning Network, Allo
   Protocol. People: Satoshi Nakamoto. Tickers and units: ETH, BTC, USDC, OP,
   gwei, wei. Acronyms, uppercase and unchanged: API, DEX, CEX, AMM, LP, TVL,
   MEV, KYC, TPS, APR, APY, NFT, DAO, DeFi, ETF, Web3, Web2, L1, L2, PoW, PoS,
   ERC-20, ERC-721, ERC-1155, EIP, EVM, OTC, 2FA, FOMO, HODL, RetroPGF, POAP.
   Domain-like strings: yourname.eth, .eth.

   ETHGlossary marks 32 terms `always_latin` (API, APY, KZG, IPFS, SSZ, gwei,
   wei, ETH, USDC, DAI, KYC, SNARK, STARK, UTXO, Solidity, POAP, web3 …) and 22
   `keep_latin` (Etherscan, Sepolia, MEV-Boost, ZK-SNARK, ZK-STARK, zkEVM,
   Vyper, Foundry, Hardhat …). Honour both. Its `transliterate` rule (Bitcoin,
   Ethereum, MetaMask, Coinbase, Optimism, Arbitrum …) is aimed at non-Latin
   scripts; **Swahili is Latin script, so "transliterate" here means "copy the
   English spelling exactly".**

2. **English borrowed into Swahili prose**, because that is what East African
   crypto speakers write and a Swahili coinage would be a word the reader never
   meets anywhere else: blockchain, staking, stake, rollup, sidechain,
   slashing, sharding, blob, phishing, halving, memecoin, onramp, fiat,
   onchain, offchain, zero-knowledge, seed phrase, peer-to-peer, yield farm,
   solo staking, Layer 1 / Layer 2, Optimistic Rollup / ZK Rollup, Proof of
   Work / Proof of Stake, dApp.

3. **A real Swahili word**, because the concept already exists in Swahili
   finance, computing or everyday speech and the Swahili word teaches better:
   mkoba (wallet), ufunguo (key), anwani (address), muamala (transaction), ada
   (fee), mtandao (network), daftari (ledger), soko (exchange), pesa (money),
   sarafu (coin), ugavi (supply), uhaba (scarcity), mfumuko wa bei (inflation),
   benki kuu (central bank), sera ya fedha (monetary policy), uchimbaji
   (mining), mchimbaji (miner), ukwasi (liquidity), usalama (security),
   ugatuzi (decentralization), dhamana (collateral), maunzi (hardware),
   programu (software / app), nenosiri (password), usimbaji fiche
   (encryption), usawa wa fursa (equality of opportunity).

**The tiebreaker between buckets 2 and 3 is what an East African crypto reader
actually sees, not what is formally correct.** That is why the pins say
*staking* and not *uwekaji dhamana*, *blockchain* and not *mnyororo wa vitalu*,
*onchain* and not *mnyororoni*, *sidechain* and not *mnyororo wa kando*. Where
the Swahili word wins instead, the English spelling still belongs in
`keyword_forms` so prose that uses it resolves to a tooltip.

### Loanword spelling: nativise only what Swahili has already nativised

Swahili absorbs loans phonetically, and several are settled: **tokeni, nodi,
bloku, heshi, gesi, kripto, akaunti, itifaki, programu, kompyuta, intaneti,
orakeli, trilema, kriptografia, demokrasia, rekodi, meneja, oda**. Use those
spellings.

**Do not invent new phonetic spellings** for crypto-native jargon that has no
settled Swahili form. *Blokicheni*, *steking*, *rolapu*, *fishingi* and
*sarafufiche* are not words anyone writes; the English spelling is.

Never blend the two inside one word: *blokchain*, *crypto sarafu* and *mkoba wa
crypto* are all wrong. Write **blockchain**, **sarafu ya kripto**, **mkoba wa
kripto**.

When a loanword needs a verb, use a light Swahili verb plus the noun rather
than gluing a Swahili prefix onto an English stem: **kufanya staking**, **kufanya
badilishano**, **kutuma tokeni**. Never the hyphenated *ku-stake*, *ku-swap*,
*ku-mint*.

## The glossary keyword rule

**The `keyword` is the display form a lesson backticks, and the runtime index
matches it as an exact string after lowercasing.** It must be the citation
form: the singular noun, with no locative suffix, no relative prefix and no
associative particle attached.

Swahili is far gentler here than the Slavic languages: only about **8% of the
541 Swahili ETHGlossary entries have a `contexts.prose` form that differs from
the citation form** (`delegate` is one: term *kaimisha*, prose *kumkaimisha*).
But the 8% is real, so **never copy `contexts.prose` into `keyword`.** Take
`term`, or better, take the pin from the ```terms``` block below.

Four things do change the surface string in Swahili, and all four must stay
outside the backticks:

1. **The locative suffix `-ni`.** *mtandao* -> *mtandaoni*, *soko* -> *sokoni*,
   *mnyororo* -> *mnyororoni*. This is Swahili's version of the affix trap.

       dead:   Miamala yote inarekodiwa kwenye `mtandaoni`.
       live:   Miamala yote inarekodiwa kwenye `mtandao`.

2. **The noun-class plural.** *mkoba* -> *mikoba*, *muamala* -> *miamala*,
   *ufunguo* -> *funguo*, *daraja* -> *madaraja*, *mthibitishaji* ->
   *wathibitishaji*, *kibali* -> *vibali*. These go in `keyword_plural`, which
   the index also matches, so the plural is safe to backtick, but only if the
   glossary wave wrote it. Class 9/10 loans are identical in both numbers; set
   `keyword_plural` equal to `keyword` or leave it out.

3. **The associative particle.** Backtick the noun, leave the particle outside:
   write "mkoba wa `maunzi`" only if *maunzi* is itself an entry; otherwise
   backtick the whole pinned term (`mkoba wa maunzi`) exactly as the pin spells
   it. Never backtick a bare *wa / ya / la / cha / za*.

4. **Verb and agent derivations.** *badilishano* -> *kubadilishana*,
   *uchimbaji* -> *kuchimba* / *mchimbaji*, *uthibitisho* -> *kuthibitisha* /
   *mthibitishaji*. These belong in `keyword_forms`.

Three ways out when the natural sentence would inflect a term, in order of
preference:

1. **Recast so the term stands in its citation form**, usually as the subject:

       live:   `Ufunguo wa siri` ndio uthibitisho pekee wa umiliki.
       live:   `Daftari` linarekodi kila muamala.

2. **Do not backtick that mention.** The structural verifier does not count
   backticks, and `validate-content.js` only complains about backticked terms
   that fail to resolve, so leaving a mention plain costs nothing. Backtick the
   term once, where it is introduced, and let the rest of the lesson inflect
   freely.

3. **Register the form** in `keyword_forms` (glossary wave only). Lesson
   translators cannot do this: the glossary is finished before the lessons
   start.

**A pinned term is not necessarily a backtickable one.** The ```terms``` block
fixes how a word is TRANSLATED wherever it appears; the glossary decides
whether it gets a tooltip. These pins deliberately have **no** entry in
`translation/keywords/en/keywords.json`, so backticking them is a dead tooltip
and a failed build: `key`, `fee`, `network`, `supply`, `exchange`,
`governance`, `protocol`, `testnet` and `private keys`.
Follow the pin for the wording; add backticks only when the term resolves.

Two things Swahili does **not** have to worry about: **capitalisation is safe**
(the index lowercases both sides and Swahili has none of Turkish's `İ`
problem, so *Ufunguo wa siri* at the start of a sentence resolves fine), and
**possessives are separate words** (*mkoba wako*, not a clitic), so nothing
glues itself onto the end of a backticked noun the way Indonesian *-mu* does.

### `keyword_forms`: the recipe for the glossary wave

For every entry write:

- `keyword` = the citation form pinned below.
- `keyword_plural` = the noun-class plural where it differs (*mikoba*,
  *miamala*, *funguo*, *madaraja*, *wathibitishaji*, *vibali*, *masoko*,
  *mabwawa*, *michepuo*). Omit it for class 9/10 and class 14.
- `keyword_forms` = the locative (*mtandaoni*, *sokoni*), the verb infinitive
  and agent noun where a lesson plausibly uses them, the ETHGlossary `term` and
  its aliases when this guide overrode them, **and the English spelling of
  anything pinned to Swahili** (`daftari` -> "ledger", `soko` -> "exchange",
  `mkoba` -> "wallet"). For the relative/participial terms, all eleven class
  forms from the table above.

Be generous. Every form registered in wave 1 is a sentence the lesson agents in
wave 2 do not have to contort, and an unused form costs nothing.

## Length: Swahili runs long, and the estimator counts it honestly

Swahili comes out roughly **10 to 20% longer than English** in characters.
Verbs compress (one word carries subject, tense and object: *anaituma*), but
that gain is wiped out by the fact that **every English noun-noun compound
becomes a two- or three-word genitive phrase**: *blockspace* -> *nafasi ya
bloku*, *slippage tolerance* -> *kiwango cha utelezi*, *transaction throughput*
-> *kasi ya miamala*. `displayWidth` counts Latin script at 1 per character, so
the 22 estimated-line ceiling is measured accurately and it **will** bite.

**Plan for 20% and target 19 estimated lines, not 22.** Compress by cutting
Swahili filler, never by dropping information:

    kwa ajili ya kufanya muamala      ->  ili kutuma muamala
    ili kuweza kupata                 ->  ili kupata
    ina uwezo wa kufanya              ->  inaweza kufanya
    mchakato wa kubadilisha tokeni    ->  kubadilisha tokeni
    kwa sababu ya ukweli kwamba       ->  kwa sababu
    ni kitu ambacho kinasaidia        ->  kinasaidia
    katika kipindi cha wiki mbili     ->  ndani ya wiki mbili
    mkoba ambao unakuruhusu           ->  mkoba unaokuruhusu
    kwa njia ya                       ->  kwa

Two Swahili moves buy width for free:

- **Use the relative infix instead of *amba-***: *mkoba unaokuruhusu* is seven
  characters shorter than *mkoba ambao unakuruhusu*, and it is better prose.
- **Drop the redundant possessive.** *Fungua mkoba* beats *Fungua mkoba wako*
  wherever ownership is obvious. A *-ako* on every noun is the clearest tell of
  a machine translation.

Quiz options are capped at about **70 characters** and Swahili gets no
discount. Cut the option to the answer itself and move the reasoning into the
`> ℹ️` feedback line, which allows one or two short sentences (~150 characters,
because it renders as a toast over a 375px screen).

## Typography

**`content-lib.js` has no `sw` entry in `TYPOGRAPHY`, so nothing in the
pipeline will fix your spacing or punctuation. What you write ships.**

- **Numbers follow the English convention, so do not convert them.** Period as
  the decimal separator, comma as the thousands separator, exactly as in the
  English source: 0.05 ETH, 21,000,000 BTC, 1,234.56. Kenya and Tanzania both
  use this convention (an M-Pesa message reads *Ksh1,000.00*). Agents arriving
  from a European wave habitually flip these; do not.
- **Scale words are short-scale, same as English**: *milioni*, *bilioni*,
  *trilioni*. There is no factor-of-a-thousand trap here, unlike Polish.
- **Percent sign directly after the number, no space**: 51%, 3.5%. Spelled out,
  Swahili puts the word first: *asilimia 51* (which is why the pin is
  `shambulio la asilimia 51`).
- Currency stays as in the source: $100. Do not convert to shillings. If a
  local amount is ever needed the symbol precedes it: *Ksh 1,000*, *TSh 5,000*.
- **Quotation marks are the plain double ones "…"** with single '…' nested.
  Never guillemets, never low-high German quotes.
- **The apostrophe in the `ng'` digraph is the ASCII straight apostrophe
  U+0027** (*ng'ombe*, *kung'oa*), never the curly U+2019. A curly apostrophe in a
  glossary display form is a different byte string and will never match the
  markdown.
- **Never use the em dash (U+2014) or the en dash (U+2013).** Swahili has a
  better replacement than most languages: the copula **ni**.

      banned:  Blockchain <U+2014> daftari la pamoja la miamala.
      use:     Blockchain ni daftari la pamoja la miamala.
      use:     Blockchain ni rahisi: ni daftari la pamoja la miamala.
      use:     Blockchain (daftari la pamoja) inafanya kazi bila benki.
      use:     … yaani, kila muamala unaonekana kwa kila mtu.

  For ranges write *kutoka 2020 hadi 2024* or *2020-2024* with a plain hyphen.
- **Sentence case for every heading**, never Title Case: "Mkoba wa kripto ni
  nini?", not "Mkoba Wa Kripto Ni Nini?". No trailing period on a heading, no
  `**bold**` in a heading. Feedback lines under `> ℹ️` are full sentences and do
  take a period.
- Swahili capitalises proper nouns, days (*Jumatatu*), months (*Januari*) and
  language names (*Kiswahili*). It does **not** capitalise ordinary nouns.
  Glossary terms stay lowercase in running prose (*mkataba mahiri*, *ufunguo wa
  siri*, *mkoba wa maunzi*); only brands, networks and named designs keep their
  capitals (Bitcoin, Ethereum, Base, Lightning Network, Proof of Stake, Layer 2).
- Hyphens are part of the spelling of several pins and must be kept exactly:
  peer-to-peer, zero-knowledge, ERC-20, ERC-721, ERC-1155, ZK Rollup.

### Spelling and encoding

- **Swahili orthography is plain ASCII letters**: no diacritics, no accents, no
  special characters beyond the `ng'` apostrophe. NFC is therefore trivially
  satisfied, but state it and check it anyway, because a stray curly quote or a
  copied non-breaking space is invisible and fatal in a glossary key:

      node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');console.log(s===s.normalize('NFC')?'ok':'NOT NFC')" <file>

- **Never write Swahili in Arabic script.** The site is Latin-script Kiswahili
  sanifu.
- No zero-width characters, no soft hyphens (U+00AD), no non-breaking spaces
  (U+00A0) anywhere. Swahili typography does not need them, and one inside
  backticks or inside `keywords.json` silently kills a tooltip.
- Prefer copy-paste over retyping any pinned term. The pins are the spelling
  authority even where ETHGlossary spells a term differently.

### Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build
on any `**` or `_` that survives as literal text. Swahili has word spaces and
ASCII punctuation, so it is far safer than Japanese or Chinese, but the same
four patterns still break:

    breaks:  **Thamani:**muda unaookoa.     ->  **Thamani**: muda unaookoa.
    breaks:  Huu ni **mkoba.**Sasa…         ->  Huu ni **mkoba**. Sasa…
    breaks:  **"imani"**si lazima           ->  **"imani"** si lazima
    breaks:  Ada ni **0.05%**pungufu.       ->  Ada ni **0.05%** pungufu.

Leave a space after a closing `**`, keep punctuation outside the markers, bold
the link *text* rather than the whole link (`[**jina la somo**](url)`), and
never put `_` against a letter in either direction; use `*…*` instead.

## Interface strings

- **Keep an English app's button label in English and gloss it in Swahili on
  first use**, then reuse the English label alone: bofya "Connect Wallet"
  (unganisha mkoba). The learner is looking at an English interface; a
  translated label they cannot find on screen is worse than no translation.
- Same for wallet prompts and security screens: "Secret Recovery Phrase",
  "Approve", "Sign", "Swap", "Mint", "Revoke". Gloss once, then reuse.
- This is why `seed phrase`, `primary name`, `onramp` and `solo staking` are
  pinned to English: each is a label the reader must find in an app.
- Keep `yourname.eth` exactly as it is. It appears in the slide images, and a
  localised example would stop matching the picture beside it.

## Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin. For
Swahili it is unusually good on morphology (it ships noun-class plurals, agent
nouns and verb infinitives) and unusually fond of BAKITA-style coinages that no
East African crypto reader has met. Every override below is deliberate, with
the reason in one line:

- `blockchain = blockchain` (not *mnyororo wa vitalu*): the English word is
  what East African crypto writing uses, and a three-word phrase on 12 lessons
  would cost the length budget dearly. Gloss it once as *mnyororo wa bloku*.
- `block = bloku` (not *kitalu*): *kitalu* is a plot of land or a nursery bed;
  the pins file itself already drifted to *bloku* in four compounds
  (*kichunguzi cha bloku*, *tuzo ya bloku*), so *bloku* is the form to settle on.
- `cryptocurrency = sarafu ya kripto` (not *sarafu-fiche*): a hyphenated
  coinage a reader will not recognise, versus a phrase built from *kripto*,
  which ETHGlossary already pins for `crypto`.
- `staking = staking`, `stake = stake` (not *uwekaji dhamana* / *dhamana*):
  ETHGlossary maps both `stake` and `collateral` onto *dhamana*, which would
  make one word carry two different concepts on the same DeFi slide. English
  *staking* is also what East African staking content says. `collateral` keeps
  *dhamana* alone.
- `slashing = slashing`, `slashed = kufanyiwa slashing` (not *ukataji*):
  *ukataji* is any kind of cutting and teaches nothing.
- `onchain = onchain`, `offchain = offchain` (not *mnyororoni* / *nje ya
  mnyororo*): *mnyororoni* is a locative, which is exactly the form that kills
  a tooltip, and the English is invariable so it works as an adjective in every
  noun class (*data ya onchain*, *utawala wa onchain*).
- `sidechain = sidechain` (not *mnyororo wa kando*): keeping *mnyororo* for
  sidechain while `blockchain` stays English is the kind of inconsistency that
  confuses a beginner.
- `smart account = akaunti mahiri` (not *akaunti janja*): *janja* means cunning
  or sly, which is a bad connotation, and *mahiri* matches `smart contract`.
- `digital signature = saini ya kidijitali` (not *sahihi ya kidijitali*):
  *sahihi* also means "correct", and **Sahihi!** is this language's
  correct-answer feedback opener. Two meanings, one word, on the same lesson.
- `mint = kuzalisha` (not *kufua*): *kufua* is both "to forge metal" and "to
  wash clothes", so *kufua NFT* reads as laundry to a beginner.
- `delegate = mwakilishi`, `delegation = uwakilishi` (not *kaimisha* /
  *ukaimishaji*): *kaimu* is "acting" in the sense of an acting director, which
  is not what a governance delegate is. *Mwakilishi* (representative) is exact
  and universally understood.
- `finality = kutotenguka` (not *ukamilifu*): *ukamilifu* means completeness or
  perfection, not irreversibility. *Kutengua* is the ordinary verb for
  overturning a decision, so *kutotenguka* says precisely the right thing.
- `liquidation = uuzaji wa dhamana` (not *ufilisishaji*): *ufilisishaji* is
  bankruptcy proceedings; in a lending lesson the event is the sale of the
  collateral.
- `peer-to-peer = peer-to-peer` (not *rika-kwa-rika*): P2P trading is the
  dominant crypto on-ramp in East Africa and the reader has met the English on
  every exchange app.
- `security = usalama` (the pins file left it in English): Swahili has the
  ordinary word, and *sekuriti* would be wrong.
- `seed phrase = seed phrase` (not *kirai cha mbegu*): it is the label printed
  on the wallet screen while the reader writes the words down. `recovery
  phrase = maneno ya kurejesha` keeps the two English terms distinct, so one
  tooltip does not shadow the other.
- `slippage = utelezi wa bei` (not *tofauti ya utekelezaji*): three characters
  shorter than the ETHGlossary phrase and it names the thing rather than
  describing it. Gloss the English UI label once.
- `trustless = bila kuhitaji imani` (not *bila hitaji la uaminifu*): shorter,
  and both are invariable phrases, which is why they are preferred over a
  relative form.
- `ether = ether` (not *Etha*): a phonetic respelling of a currency name that
  every exchange writes in English.
- `blob = blob` (not *blobu*): a protocol object name with no settled Swahili
  spelling; Swahili is Latin script, so nothing is gained by respelling it.
- `zero-knowledge = zero-knowledge` (not *sifuri-maarifa*): kept Latin and
  invariable; *uthibitisho usiofichua* stays available as a `keyword_forms`
  alias.
- `optimistic rollup = Optimistic Rollup`, `zk rollup = ZK Rollup` (not
  *rollup ya optimistic*): proper names of two rollup families, capitalised,
  which also avoids agreement on a term that appears on six lessons.
- `consensus mechanism = mfumo wa mwafaka` (the pins file said *utaratibu wa
  makubaliano*, a different root from its own `consensus = mwafaka`): one root
  for the family, and *mfumo* is the standard word for a mechanism or system.
- `social engineering = udanganyifu wa kijamii` (not the calque *uhandisi wa
  kijamii*): "social deception" is what it is, and the lessons are written for
  a beginner.
- `block builder = mjenzi wa bloku` (the pins file said *mjenga kizuizi*, which
  is not a well-formed agent noun and introduced a third word for "block").

`x = x` pins a term to its English form. The block is ordered by how many of
the 19 lessons backtick each term, so the pins most likely to drift between
agents come first. **These beat ETHGlossary and they beat your own judgment.**

```terms
private key = ufunguo wa siri
private keys = funguo za siri
public key = ufunguo wa umma
key = ufunguo
blockchain = blockchain
blockchain technology = teknolojia ya blockchain
blockchain apps = programu za blockchain
blockchain architecture = muundo wa blockchain
blockchain trilemma = trilema ya blockchain
ethereum blockchain = blockchain ya Ethereum
chain = mnyororo
layer 1 = Layer 1
layer 2 = Layer 2
alternative layer 1 = Layer 1 mbadala
l1 = L1
l2 = L2
settlement layer = tabaka la ukamilishaji
smart contract = mkataba mahiri
smart account = akaunti mahiri
smart wallet = mkoba mahiri
cryptocurrency = sarafu ya kripto
cryptocurrencies = sarafu za kripto
cryptocurrency mining = uchimbaji wa kripto
crypto = kripto
coin = sarafu
money = pesa
digital assets = mali za kidijitali
decentralized = iliyogatuliwa
decentralization = ugatuzi
centralized = ya kati
centralization = mfumo wa kati
decentralized money = pesa iliyogatuliwa
decentralized finance = fedha zilizogatuliwa
decentralized services = huduma zilizogatuliwa
centralized services = huduma za kati
dapp = dApp
app = programu
app store = duka la programu
staking = staking
staking pool = bwawa la staking
staking providers = watoa huduma za staking
solo staking = solo staking
solo staker = solo staker
centralized exchange staking = staking kwenye soko la kati
stake = stake
staked = iliyo kwenye staking
staker = mfanya staking
stakers = wafanya staking
restaking = staking ya kurudia
liquid = yenye ukwasi
liquid staking token = tokeni ya staking yenye ukwasi
lsts = LST
slashing = slashing
slashed = kufanyiwa slashing
web3 = Web3
web2 = Web2
open internet = intaneti huria
block = bloku
block space = nafasi ya bloku
blockspace = nafasi ya bloku
block hash = heshi ya bloku
block reward = tuzo ya bloku
block explorer = kichunguzi cha bloku
block builder = mjenzi wa bloku
block proposer = mpendekezaji wa bloku
block producer = mtengenezaji wa bloku
wallet = mkoba
wallet app = programu ya mkoba
wallet provider = mtoa huduma za mkoba
crypto wallet = mkoba wa kripto
cryptocurrency wallet = mkoba wa sarafu za kripto
hot wallet = mkoba wa mtandaoni
cold wallet = mkoba wa nje ya mtandao
hardware wallet = mkoba wa maunzi
custodial wallet = mkoba wenye mdhamini
non-custodial wallet = mkoba usio na mdhamini
self-custody wallet = mkoba wa uhifadhi binafsi
self-custody = uhifadhi binafsi
self-custodial = wa uhifadhi binafsi
custodian = mdhamini
seed phrase = seed phrase
recovery phrase = maneno ya kurejesha
liquidity = ukwasi
liquidity pool = bwawa la ukwasi
liquidation = uuzaji wa dhamana
collateral = dhamana
vault = hifadhi
dex = DEX
cex = CEX
dex aggregator = kikusanyaji cha DEX
aggregator = kikusanyaji
meta-aggregator = meta-kikusanyaji
amm = AMM
lp = LP
tvl = TVL
mev = MEV
decentralized exchange = soko lililogatuliwa
centralized exchange = soko la kati
exchange = soko
market cap = thamani ya soko
order book = daftari la maagizo
validator = mthibitishaji
validator node = nodi ya mthibitishaji
validator nodes = nodi za wathibitishaji
validator client = programu ya mthibitishaji
node = nodi
node operator = mwendeshaji wa nodi
peer = mwenza
peer-to-peer = peer-to-peer
address = anwani
addresses = anwani
gas = gesi
gas fee = ada ya gesi
gasless transactions = miamala isiyo na gesi
fee = ada
network = mtandao
optimistic rollup = Optimistic Rollup
zk rollup = ZK Rollup
rollup = rollup
sidechain = sidechain
sharding = sharding
blob = blob
payment channel = njia ya malipo
lightning network = Lightning Network
scalability = uwezo wa kupanuka
interoperability = mwingiliano
composability = utangamano
fungibility = uwezo wa kubadilishana
onchain = onchain
offchain = offchain
onchain identity = utambulisho wa onchain
onchain governance = utawala wa onchain
network governance = utawala wa mtandao
governance = utawala
delegate = mwakilishi
delegation = uwakilishi
veto = veto
democracy = demokrasia
autonomy = kujitawala
dao = DAO
defi = DeFi
nft = NFT
permissionless = bila ruhusa
trustless = bila kuhitaji imani
censorship-resistant = sugu kwa udhibiti
asynchronous = isiyo sambamba
pseudonymous = kwa jina bandia
open source = chanzo huria
ledger = daftari
transaction = muamala
transaction hash = heshi ya muamala
transaction throughput = kasi ya miamala
transaction finality = kutotenguka kwa muamala
finality = kutotenguka
finality time = muda wa kutotenguka
settlement time = muda wa kukamilika
double-spend = kutumia mara mbili
token = tokeni
token allowance = kibali cha tokeni
allowance = kibali
token approval = idhini ya tokeni
token swap = badilishano la tokeni
token pair = jozi ya tokeni
token distribution = mgawanyo wa tokeni
intermediary token = tokeni ya kati
multi-token standard = kiwango cha tokeni nyingi
swap = badilishano
trade = biashara
trade route = njia ya badilishano
trade routing = uelekezaji wa badilishano
private transaction routing = uelekezaji wa siri wa miamala
slippage = utelezi wa bei
slippage tolerance = kiwango cha utelezi
price impact = athari ya bei
front-running = utangulizaji wa muamala
sandwich attack = shambulio la sandwichi
51% attack = shambulio la asilimia 51
intent = nia
solver = mtatuaji
batch auction = mnada wa pamoja
airdrop = mgao wa bure
otc = OTC
over the counter = over the counter
stablecoin = sarafu thabiti
stablecoin issuer = mtoaji wa sarafu thabiti
peg = fungamanisho
death spiral = mzunguko wa kifo
counterparty risk = hatari ya upande wa pili
yield farm = yield farm
memecoin = memecoin
mint = kuzalisha
hash = heshi
hashing function = kitendakazi cha heshi
mining = uchimbaji
miner = mchimbaji
consensus = mwafaka
consensus mechanism = mfumo wa mwafaka
consensus mechanisms = mifumo ya mwafaka
proof of work = Proof of Work
proof of stake = Proof of Stake
proof-of-stake = Proof of Stake
pos = PoS
attestation = uthibitisho
epoch = kipindi
fork = mchepuo
oracle = orakeli
protocol = itifaki
security = usalama
fraud = udanganyifu
fraud proof = ushahidi wa udanganyifu
validity proof = uthibitisho wa uhalali
zero-knowledge = zero-knowledge
phishing = phishing
social engineering = udanganyifu wa kijamii
password manager = kidhibiti cha nenosiri
two factor authentication = uthibitishaji wa hatua mbili
2 factor authentication = uthibitishaji wa hatua mbili
2fa = 2FA
red flag = ishara ya hatari
scam-token = tokeni ya ulaghai
fomo = FOMO
hodl = HODL
digital signature = saini ya kidijitali
cryptography = kriptografia
encryption = usimbaji fiche
supply = ugavi
max supply = ugavi wa juu kabisa
circulating supply = ugavi unaozunguka
scarcity = uhaba
scarce = adimu
inflation = mfumuko wa bei
halving = halving
gold standard = kiwango cha dhahabu
central bank = benki kuu
commercial bank = benki ya biashara
monetary policy = sera ya fedha
fiat = fiat
etf = ETF
spot etf = spot ETF
onramp = onramp
kyc = KYC
know-your-customer = Know Your Customer
tps = TPS
bridge = daraja
validating bridge = daraja linalothibitisha
ether = ether
eth = ETH
btc = BTC
gwei = gwei
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
ethereum virtual machine = Ethereum Virtual Machine
ethereum mainnet = Mtandao Mkuu wa Ethereum
mainnet = Mainnet
testnet = mtandao wa majaribio
satoshi nakamoto = Satoshi Nakamoto
intermediary = mpatanishi
intermediaries = wapatanishi
value-extraction = uchotaji wa thamani
value-extractive = unaochota thamani
value-creation = uundaji wa thamani
public = ya umma
public good = bidhaa ya umma
credible neutrality = kutoegemea kunakoaminika
neutrality = kutoegemea upande
equality of opportunity = usawa wa fursa
quadratic funding = ufadhili wa kipeo cha pili
allo protocol = Allo Protocol
retropgf = RetroPGF
poap = POAP
basenames = Basenames
primary name = primary name
standard record = rekodi ya kawaida
custom record = rekodi maalum
.eth = .eth
yourname.eth = yourname.eth
borrower = mkopaji
lender = mkopeshaji
earn = kupata
invest = kuwekeza
spend = kutumia
bet = kubeti
```

## Fixed section headings

**Every slide and section heading must be translated. A heading left in English
passes every automated check.** The structural verifier compares section
*counts*, never section *text*, so an untranslated heading is invisible to it:
one agent in an earlier wave shipped all 45 of its slide headings in English and
cleared the whole gate. Read your own output for stray English before you report
back.

The 19 lessons are split across five independent agents, and the headings below
recur across the 9 handbooks. **Use exactly the Swahili in this table. Do not
re-translate them per lesson, and do not improve on them.**

| English heading | Swahili | occurrences |
|---|---|---|
| `Introduction` | `Utangulizi` | 8 (`#` slides and `##` sections) |
| `Key Takeaways` | `Mambo muhimu` | 8 |
| `Frequently Asked Questions` | `Maswali yanayoulizwa mara kwa mara` | 4 |
| `Walkthrough` | `Hatua kwa hatua` | 3 |
| `Prerequisites` | `Mahitaji ya awali` | 3 |
| `FAQ` | `FAQ` | 3 |

- **`FAQ` and `Frequently Asked Questions` stay distinct**, exactly as in the
  English source. Swahili has no native acronym for it, and East African
  websites use the English `FAQ` unchanged, so the short/long pair survives
  translation at no cost. Collapsing both onto the 33-character long form would
  lengthen three headings for nothing.
- **A suffixed heading keeps the pinned form and appends its own suffix**,
  translated:

      ## Walkthrough: Using Revoke.cash   ->  ## Hatua kwa hatua: kutumia Revoke.cash
      # Introduction to Quadratic Funding ->  # Utangulizi wa ufadhili wa kipeo cha pili

  The Swahili colon takes no space before it and the word after it is
  lowercase.
- Keep the heading level (`#` vs `##` vs `###`) exactly as the source has it.
  Sentence case, no trailing period, no `**bold**`.
- **`Knowledge Check <n>` stays in ENGLISH, with its original number.** It is an
  identifier `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two
  checks.
- Swahili headings slugify cleanly to ASCII, so `/content` anchors are readable.
  Write real headings and do not pad them with English.

## Fixed quiz feedback openers

Almost every `> ℹ️` line opens with one of four English words, and 159 of them
are the same one. **Pin the opener; write the rest of the sentence freely.**
An earlier wave shipped two competing renderings of one opener and needed 24
feedback lines repaired centrally.

| English opener | Swahili |
|---|---|
| `Try again!` | `Jaribu tena!` |
| `Correct!` / `Correct.` | `Sahihi!` / `Sahihi.` |
| `Right!` | `Ndivyo hasa!` |
| `Incorrect` / `Incorrect.` | `Si sahihi.` |

*Jaribu tena!* is a bare second-person-singular imperative, which is the register
the whole course uses. Do not use *Hongera!* ("congratulations") for `Correct!`:
that is the badge-award register and it overpromises on a one-question answer.
Keep the opener and the sentence after it on the same line, and keep the whole
feedback to one or two short sentences.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | sw |
|---|---|
| `True` | **Kweli** |
| `False` | **Si kweli** |

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
   (its opener is `Верно!`), why Indonesian uses Tepat! rather than Benar!, and
   why Swahili pairs **Kweli / Si kweli** against the opener **Sahihi!** rather
   than the school-exam pair *Sahihi / Si sahihi*.
2. **Keep the `[x]` on the same option index as English.** Only the option TEXT
   changes here; users have answer numbers saved in localStorage.

*Uongo* ("a lie") is not used for `False`: it attributes deceit to a statement
about a mechanism. *Si kweli* is the neutral negation and reads correctly in
every question in the course.
