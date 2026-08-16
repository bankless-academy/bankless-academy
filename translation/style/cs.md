# Czech style guide (translate-content)

Czech is the third heavily-inflecting Slavic language in this repo, after
Ukrainian, Russian and Polish. Polish is the closest sibling (Latin script,
seven cases, the same tooltip trap), so this file follows its shape, but the
Czech answers are different in several places and none of them may be guessed
from Polish. A dozen independent agents will write the glossary, the four UI
namespaces and 19 lessons from this file. It is the only thing holding them to
one Czech. Read it end to end before writing a single slide.

The single biggest risk in Czech is **case**. A noun has seven forms, an
adjective agrees with it, and the glossary index matches on exactly one of
them. Read "Case and the glossary" twice; everything else is craft, that
section is correctness.

Register and address

- Address the reader as **ty** (tykání): *otevři, klikni, uvidíš, tvoje
  peněženka*. Never *Vy/vykání*, never the impersonal *je třeba / uživatel by
  měl*.
- Why: vykání is the register of a bank letter and a tax office, which is
  precisely the institution Bankless Academy is teaching the reader to do
  without. Every product a Czech reader already uses to learn something
  (Duolingo, Khanova škola, Czechitas, the Czech Revolut app) says *ty*, and
  the site's own voice, with its Explorer titles, badges and quests, is a peer
  teaching a peer. Tykání is also measurably shorter than vykání
  (*otevři* against *otevřete*), which matters against the line ceiling.
- **Write ty/tvůj/tobě in lowercase.** Capitalised *Ty/Tvůj* is correspondence
  convention (a letter to one named person) and reads as direct mail on a web
  page.
- Imperatives are the bare second-person singular: **otevři, klikni, ulož,
  zkontroluj, pamatuj, vyber, přejdi, zapiš si**. Not *otevřete* (vykání), not
  *prosím otevřete* (form letter), not *otevřeme* (we-voice).
- **Use *svůj*, not *tvůj*, when the owner is the subject of the sentence.**
  *Otevři tvoji peněženku* is wrong Czech; write **Otevři svoji peněženku**,
  or better just **Otevři peněženku**. Czech drops the possessive wherever
  ownership is obvious, and a *tvůj* on every noun is the clearest tell of a
  machine translation. Keep it only where ownership is the point: "Tenhle klíč
  patří jenom tobě."

**The gender trap: Czech marks the reader's gender, and vykání does not save
you.** This is the one place where copying Russian would be a mistake. Russian
escaped the trap by choosing вы, whose past tense is plural and genderless. In
Czech the l-participle stays **singular and gendered** under vykání too:
*udělal jste* to a man, *udělala jste* to a woman. So neither pronoun is safe,
and the fix has to come from the tense and the construction:

    avoid:  Dokončil jsi tuto lekci.        (male only)
    avoid:  Dokončila jsi tuto lekci.       (female only)
    avoid:  Jsi připraven začít.            (male only)
    avoid:  Naučil ses, jak to funguje.     (male only)
    avoid:  Chtěl bys to zkusit?            (male only, conditional)

    use:    Lekce dokončena.                (nominal, no verb)
    use:    Hotovo!                         (neuter predicate)
    use:    Teď to víš.                     (present tense)
    use:    Tuhle část máš za sebou.        (present, invariable phrase)
    use:    Můžeš začít.                    (present, no gender)
    use:    Chceš to zkusit?                (present instead of conditional)
    use:    Povedlo se!                     (impersonal neuter past)
    use:    Transakce byla odeslána.        (the THING has gender, not the reader)

  Present tense, future tense and imperatives carry no gender in Czech, so keep
  the teaching voice in the present. When a past event is unavoidable,
  nominalise it (*po dokončení lekce*) or make something other than the reader
  the subject (*Peněženka je připravená*). The same trap sits in predicate
  adjectives (*připraven / připravena*, *jistý / jistá*): replace them with an
  invariable phrase (*Vše je připravené*, *Máš jistotu*) or a neuter predicate.
- Never call the reader *uživatel* (masculine) or *uživatelka* (feminine) when
  you mean "you". Address directly with *ty*, which has no gender.
- Short sentences. Czech tolerates long subordination and machine Czech abuses
  it: split at the clause boundary instead of chaining *který, protože, díky
  čemuž, přičemž* into one paragraph-long line.
- Prefer the active voice: "síť ověřuje transakci", not "transakce je ověřena
  sítí".
- Keep the vocabulary everyday, not bureaucratic: *proto*, not *z tohoto
  důvodu*; *když*, not *v případě, že*; *mít*, not *disponovat*; *udělat*, not
  *realizovat*; *peníze*, not *peněžní prostředky*.
- Explorer, the site's word for its readers, is **Průzkumník** (plural
  **Průzkumníci**), capitalised as a title: *Profil průzkumníka*, *Skóre
  průzkumníka*. Direct address takes the **vocative**, which Czech uses in
  ordinary writing:

      Vítej, Průzkumníku!
      Věděl(a) jsi, Průzkumníku…   <- no: rewrite as "Víš, Průzkumníku, že…"

  Do **not** use *průzkumník* for a block explorer. That term is pinned as
  *prohlížeč bloků* precisely so the two never collide on the slides where both
  appear.

Czech, English, or a Czech word: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and never move a term between buckets across two lessons.

1. **English, untouched.** Names, tickers, symbols and code identifiers.
   Product, network and company names: Bitcoin, Ethereum, Uniswap, Optimism,
   Base, MetaMask, Coinbase, Zerion, Velodrome, Rocket Pool, OpenSea,
   Etherscan, Revoke.cash, Lightning Network. People: Satoshi Nakamoto.
   Tickers and units: ETH, BTC, USDC, OP, gwei, wei. Acronyms: API, DEX, CEX,
   AMM, LP, TVL, MEV, KYC, TPS, APR, APY, NFT, DAO, DeFi, Web3, Web2, L1, L2,
   PoW, PoS, ERC-20, ERC-721, ERC-1155, EIP, EVM, OTC, 2FA, FOMO, HODL,
   RetroPGF. Domain-like strings: yourname.eth, .eth. Never phonetically
   respell these: no *Bitkoin*, no *Ethereum* as *Etherium*, no *Metamask*.
2. **English borrowed into Czech prose**, because that is what Czech crypto
   speakers actually write and a Czech coinage would be a word the reader never
   meets anywhere else: blockchain, token, staking, staker, restaking, rollup,
   sidechain, stablecoin, memecoin, blob, sharding, slashing, hash, halving,
   phishing, fiat, gas, swap, solver, dApp, open source, onchain / offchain,
   zero-knowledge, front-running, vault, Layer 1 / Layer 2, Proof of Work /
   Proof of Stake. Once borrowed these are ordinary Czech nouns: they decline
   (*blockchainu, tokeny, stakingem*) and they take Czech gender.
3. **A real Czech word**, because the concept already exists in Czech finance,
   computing or everyday speech and the Czech word teaches better: peněženka
   (wallet), klíč (key), adresa (address), účetní kniha (ledger), uzel (node),
   blok (block), síť (network), poplatek (fee), nabídka (supply), vzácnost
   (scarcity), inflace (inflation), těžba (mining), těžař (miner), likvidita
   (liquidity), burza (exchange), kniha objednávek (order book), zajištění
   (collateral), centrální banka, měnová politika, zlatý standard, konsenzus,
   decentralizace, bezpečnost, podvod (fraud), sociální inženýrství, správce
   hesel (password manager), rovnost příležitostí.

**The tiebreaker between buckets 2 and 3 is what a Czech crypto reader actually
sees in the wild, not what is formally correct.** That is why the pins below
say *slashing* and not *penalizace*, *sidechain* and not *postranní řetězec*,
*solver* and not *řešitel*, *fork* and not *rozvětvení*. Where the Czech word
wins instead (*těžba*, *těžař*, *účetní kniha*, *kniha objednávek*), the
English spelling is still worth keeping in `keyword_forms` so prose that uses
it resolves to a tooltip.

Grammatical gender of the loanwords

Gender is not decoration in Czech: it fixes the adjective, the past tense, the
pronoun and the numeral in the same clause. Two agents who disagree about
whether *blockchain* is masculine produce visibly broken Czech on adjacent
slides. Learn the high-traffic ones.

| term | gender | gen. sg. | loc. sg. | nom. pl. |
|---|---|---|---|---|
| blockchain | masc. inan. | blockchainu | blockchainu | blockchainy |
| token | masc. inan. | tokenu | tokenu | tokeny |
| klíč | masc. inan. | klíče | klíči | klíče |
| blok | masc. inan. | bloku | bloku | bloky |
| uzel | masc. inan. | uzlu | uzlu | uzly |
| most | masc. inan. | mostu | mostě | mosty |
| gas | masc. inan. | gasu | gasu | (none) |
| staking | masc. inan. | stakingu | stakingu | (none) |
| rollup | masc. inan. | rollupu | rollupu | rollupy |
| stablecoin | masc. inan. | stablecoinu | stablecoinu | stablecoiny |
| hash | masc. inan. | hashe | hashi | hashe |
| kontrakt | masc. inan. | kontraktu | kontraktu | kontrakty |
| konsenzus | masc. inan. | konsenzu | konsenzu | (none) |
| swap | masc. inan. | swapu | swapu | swapy |
| pool | masc. inan. | poolu | poolu | pooly |
| trezor, statek, podpis, poplatek, záměr | masc. inan. | -u / -e | -u / -e | -y / -e |
| **validátor** | masc. **anim.** | validátora | validátorovi | **validátoři** |
| těžař | masc. anim. | těžaře | těžaři | **těžaři** |
| staker | masc. anim. | stakera | stakerovi | **stakeři** |
| správce, prostředník, delegát, solver | masc. anim. | -e / -a | -i / -ovi | -i / -ové |
| peněženka | fem. | peněženky | **peněžence** | peněženky |
| adresa | fem. | adresy | adrese | adresy |
| transakce | fem. | transakce | transakci | transakce |
| síť | fem. | sítě | síti | sítě |
| burza | fem. | burzy | burze | burzy |
| účetní kniha | fem. | účetní knihy | **účetní knize** | účetní knihy |
| kryptoměna | fem. | kryptoměny | kryptoměně | kryptoměny |
| likvidita | fem. | likvidity | likviditě | (none) |
| seed fráze | fem. | seed fráze | seed frázi | seed fráze |
| mince | fem. | mince | minci | mince |
| odměna, atestace, epocha, vazba, finalita, vzácnost, bezpečnost | fem. | -y / -e / -i | -ě / -i | -y / -e / -i |
| krypto | neut. | krypta | kryptu | (none) |
| veto | neut. | veta | vetu | (none) |
| zajištění, šifrování, řízení, delegování, financování | neut. | -í | -í | -í |
| **Ethereum** | neut. (-um type) | **Etherea** | **Ethereu** | (none) |
| **peníze** | plural only | peněz | penězích | peníze |

**Masculine animate is a separate class and it changes the accusative.** An
animate noun takes the genitive form as its accusative: *vyber si validátora*,
*zeptej se těžaře*. An inanimate noun does not: *otevři blok*, *zkopíruj klíč*.
This matters for tooltips, see the next section but one.

**ETHGlossary marks `validator` inanimate. We do not.** Czech crypto writing
says *validátoři* and *vybrat validátora*, so the entry is animate here and its
accusative differs from its nominative.

**`peníze` has no singular.** Write *decentralizované peníze*, *peníze
fungují*, never *decentralizovaný peníz*.

Declining English names is correct Czech, unlike Russian

Czech naturalises Latin-script names and declines them without an apostrophe.
This is normal, expected and good: write *na Ethereu*, *z Etherea*, *v
Bitcoinu*, *v MetaMasku*, *na Uniswapu*. Never *Ethereum'u*, never
*Ethereum-u*: the apostrophe and the hyphen are not Czech.

    Ethereum -> Etherea, Ethereu, Ethereem     (neuter, like "muzeum")
    Bitcoin  -> Bitcoinu, Bitcoinem            (masc. inanimate)
    MetaMask -> MetaMasku, MetaMaskem
    Uniswap  -> Uniswapu, Uniswapem

Short or vowel-final names (Base, Coinbase, Lido, Optimism) read badly with an
ending. Give them a Czech head noun to carry the case instead, which is also
the trick that keeps a backticked term in the nominative:

    síť Base, na síti Base       burza Uniswap        aplikace MetaMask
    protokol Optimism            protokoly DeFi       trh s NFT

Case and the glossary: the trap that kills tooltips

**The glossary `keyword` is the string a lesson backticks, and the runtime
index matches it as an exact string after NFC and lowercasing. It MUST be the
nominative singular.** Every other case goes in `keyword_forms`.

This is a live trap in the vendored data, not a theoretical one. **248 of the
541 Czech ETHGlossary entries (46%) have a `contexts.prose` form that differs
from the citation form**, because the generator wrote each example sentence
first and lifted the word out of it:

    blockchain    term "blockchain"        prose "blockchainu"           (genitive)
    block         term "blok"              prose "bloku"                 (genitive)
    transaction   term "transakce"         prose "transakci"             (accusative)
    staking       term "staking"           prose "stakingu"              (genitive)
    hash          term "hash"              prose "hashem"                (instrumental)
    liquidity     term "likvidita"         prose "likviditu"             (accusative)
    miner         term "těžař"             prose "těžaři"                (plural)
    attestation   term "atestace"          prose "atestaci"              (accusative)
    sidechain     term "postranní řetězec" prose "postranním řetězci"    (locative)
    ethereum      term "Ethereum"          prose "Ethereu"               (locative)

**Never copy `contexts.prose` into `keyword`.** Take `term`, or better, take
the pin from the ```terms``` block below.

The same rule binds the lesson agents, from the other side. A backticked term
that is not in the nominative resolves to nothing, `validate-content.js` fails
the build on it, and in production it would be a dead tooltip:

    dead:   Peníze máš v `peněžence`.                 (locative)
    dead:   Všechno se zapisuje do `účetní knihy`.    (genitive)
    dead:   Podepiš `transakci`.                      (accusative, feminine)
    dead:   Začni stažením `peněženky`.               (genitive)
    dead:   `Veřejné` blockchainy vidí každý.         (adjective agreeing in the plural)

Three ways out, in order of preference:

1. **Recast so the term stands in the nominative**, usually as the subject or
   after the copula *je*:

       live:   `Peněženka` je první věc, kterou si stáhneš.
       live:   `Účetní kniha` zaznamená každou transakci.
       live:   `Transakce` se zapíše do bloku.
       live:   Co je `pool likvidity`?

   **Masculine inanimate nouns are free in the direct-object position too**,
   because their accusative equals their nominative. That covers most of the
   high-traffic vocabulary: klíč, blok, token, uzel, blockchain, hash, most,
   rollup, gas, swap, kontrakt, konsenzus, poplatek, trezor.

       live:   Nikdy nikomu neukazuj `soukromý klíč`.
       live:   Otevři `blok` v prohlížeči bloků.
       live:   Zkopíruj `hash transakce`.

2. **Do not backtick that mention.** The verifier does not count backticks, and
   the validator only complains about backticked terms that fail to resolve, so
   leaving one mention plain costs nothing. Backtick the term once, where it is
   introduced and where the nominative is natural, and let the other mentions
   inflect freely:

       live:   `Peněženka` drží tvoje klíče. Bez peněženky se k penězům
               nedostaneš.

3. **Register the form** in `keyword_forms` (glossary wave only, see below).
   Lesson agents cannot do this: the glossary is finished before the lessons
   start.

Two things Czech does **not** have to worry about: capitalisation is safe (the
index lowercases both sides, and Czech lowercasing has none of Turkish's `İ`
problem, so `Soukromý klíč` at the start of a sentence resolves fine), and
prepositions are separate words, so keeping them outside the backticks is easy.
What is not easy is that Czech prepositions **govern a case**: *v peněžence*,
*do bloku*, *s klíčem*, *na síti*. A preposition in front of a backticked term
is almost always a signal that the term inside it is no longer nominative.
Check it every time.

`keyword_forms`: the recipe for the glossary wave

Czech morphology is not derivable by the runtime, so the glossary carries it.
For every noun entry write:

- `keyword` = nominative singular (the display form lessons will backtick)
- `keyword_plural` = nominative plural. Czech plurals are irregular often
  enough that this must be written, not guessed: *klíč -> klíče*, *transakce ->
  transakce*, *těžař -> těžaři*, *síť -> sítě*, *peněženka -> peněženky*.
- `keyword_forms` = the oblique forms that actually appear in prose, plus the
  English spelling when the pin is Czech, plus any circulating synonym the pin
  rejected. In practice that is: **genitive singular** (after *do / od / bez /
  z / u*, after a negation, after most quantifiers), **dative singular** (after
  *k*), **accusative singular when it differs** (feminine -u/-i, masculine
  animate), **locative singular** (after *v / na / o / po*, and it is the form
  Czech mutates most), **instrumental singular** (after *s*), and the
  **genitive, locative and instrumental plural**.

      "private key": {
        "keyword": "soukromý klíč",
        "keyword_plural": "soukromé klíče",
        "keyword_forms": ["soukromého klíče", "soukromému klíči",
                          "soukromém klíči", "soukromým klíčem",
                          "soukromých klíčů", "soukromými klíči",
                          "privátní klíč", "privátního klíče",
                          "private key"]
      }

Three things that example is showing:

1. **In a multi-word term every word inflects.** Listing only the noun is
   useless, because the string in the lesson contains the adjective too.
2. **The adjective comes BEFORE the noun in Czech.** *soukromý klíč*, *veřejný
   statek*, *chytrý kontrakt*. Do not copy the Polish order (*klucz prywatny*);
   Czech puts the adjective first, and a postposed adjective reads as a
   taxonomic label.
3. **You cannot just append endings, the stem mutates.** This is where hand
   written forms go wrong:

       peněženka  -> peněžence   (dat./loc. sg., k -> c)
                  -> peněženek   (gen. pl., inserted -e-)
       kniha      -> knize       (dat./loc. sg., h -> z)
       burza      -> burze       (dat./loc. sg., z -> z, but a -> e)
       uzel       -> uzlu        (the -e- drops out)
       síť        -> síti, sítí  (soft feminine)
       matka      -> matce       (the same k -> c rule, for any -ka noun)

Be generous here. Every form registered in wave 1 is a sentence the lesson
agents in wave 2 do not have to contort, and an unused form costs nothing.

Adjectives are keywords too, and they agree

Several glossary entries are adjectives: `decentralized`, `centralized`,
`permissionless`, `trustless`, `public`, `scarce`, `liquid`, `asynchronous`,
`censorship-resistant`, `self-custodial`, `slashed`, `staked`. A Czech
adjective agrees with its noun in gender, number and case, so the citation form
(masculine nominative singular) is only one of many. The English lessons
backtick these in front of a plural noun more often than not (`public`
blockchains, `decentralized` exchanges), so the agreeing forms are not
optional.

Give each **hard** adjective at least these five:

    keyword:        veřejný      (masc. sg.:  veřejný blockchain)
    keyword_forms:  veřejná      (fem. sg.:   veřejná burza)
                    veřejné      (neut. sg. AND masc. inanimate pl.: veřejné blockchainy)
                    veřejní      (masc. animate pl.: veřejní validátoři)
                    veřejných    (gen. pl.)

**Soft adjectives are much cheaper**, because one form covers the whole
nominative: *asynchronní*, *nevyžadující*, *validující*. `permissionless` and
`trustless` are pinned as participial phrases (*nevyžadující povolení*,
*nevyžadující důvěru*) whose second word never changes and whose first word is
soft, so *síť nevyžadující povolení* and *systémy nevyžadující důvěru* are both
already the citation form. That is why those pins were chosen.

`self-custodial` is pinned as the prepositional phrase **ve vlastní správě**,
which is fully invariable in every gender and number. Prefer that shape
wherever it exists.

In the lesson prose, prefer a noun the adjective can agree with in the
masculine nominative singular, or simply drop the backticks on the agreeing
mention.

Acronyms: keep them bare

Czech attaches endings to acronyms directly, with no hyphen: *na DEXu*, *v
DAO*, *dva NFT*. The hyphenated Polish style (*DEX-a*) is wrong here. But an
inflected acronym is still unreadable as a glossary display form, so:

- **Keep the backticked form bare and nominative**: `DEX`, `NFT`, `dApp`, `LP`,
  `AMM`, `TVL`, `DAO`, `DeFi`.
- **Recast rather than decline**: *na burze DEX* beats *na DEXu*; *dva tokeny
  NFT* beats *dvě NFTčka*; *protokoly DeFi* beats *v DeFi světě*.
- **Do not invent a plural.** ETH, BTC, DAO, NFT, Web3, Web2, DeFi, gwei, KYC,
  TVL, MEV, AMM, LP, TPS, OTC, PoW, PoS, HODL, FOMO, Layer 1, Layer 2 are
  indeclinable in our text. Write *v DAO*, *s ETH*, *na Layer 2*.
- Never lowercase an acronym to make it fit, and never write *defi* or *nft* in
  running text: DeFi and NFT keep their casing.

Length: Czech runs about 10% longer than English

Czech drops articles, which helps, but the words themselves are longer and
every compound English noun becomes a two-word phrase with an inflected tail
(*blockspace* -> *blokový prostor*, *slippage tolerance* -> *tolerance
skluzu*). `displayWidth` counts Latin script at 1 per character, so the 22
estimated-line ceiling is measured accurately and it **will** bite.

**Target 19 estimated lines, not 22.** Compress by cutting Czech filler, never
by dropping information:

    za účelem provedení transakce   ->  pro odeslání transakce
    provádí ověření transakcí       ->  ověřuje transakce
    v případě, že                   ->  když
    z toho důvodu, že               ->  protože
    má možnost odeslat              ->  může odeslat
    disponovat / realizovat         ->  mít / udělat
    je to řešení, které…            ->  toto řešení…
    v rámci sítě Ethereum           ->  na Ethereu

Two Czech moves buy width for free: **drop the subject pronoun** (*Můžeš
poslat*, not *Ty můžeš poslat*) and **drop the possessive** (*Otevři
peněženku*, not *Otevři svoji peněženku*).

Quiz options are capped at about **70 characters** and Czech gets no discount:
*decentralizovaný* alone is 16. An option that starts *Protože transakce v síti
ověřují validátoři, kteří…* is already over. Cut the option to the answer
itself and move the reasoning into the `> ℹ️` feedback line, which allows one
or two short sentences (~150 characters, because it renders as a toast over a
375px screen).

Numbers: one false friend that ships as a factual error

- **English "billion" is Czech "miliarda", NOT "bilion".** Czech *bilion* is
  10^12, which is English *trillion*. Translating "billion" as "bilion"
  multiplies the figure by a thousand, and no verifier in this repo can catch
  it. English *trillion* is Czech *bilion*. English *million* is *milion* (one
  l). When in doubt, write the digits.
- **Decimal comma**: 0,05 ETH; 3,5 %; 1,5 mil.
- **Thousands are grouped with a non-breaking space, never a comma**:
  21 000 000 BTC, 120 000 transakcí. The English source writes 21,000,000, and
  a Czech reader parses that comma as a decimal point, so it must be converted.
- **Exception: anything the reader types into an English interface, or that
  lives in code, an address, a hash or a URL, is copied verbatim.**
  "zadej 0.05 do pole Amount" keeps the period.
- **The percent sign follows the Czech rule, which is not the Polish one.**
  A space (non-breaking) when the number is a noun: *51 % uzlů*, *poplatek
  0,3 %*. No space when the number forms an adjective: *51% útok*, *3% poplatek*
  (read *padesátiprocentní*, *tříprocentní*). The pinned term `51% attack` is
  the adjectival case, so it is **51% útok** with no space.
- Currency stays as in the source: $100, 100 USD. Do not convert to koruny.
- Years and dates: *v roce 2025*, *3. ledna 2025*. Months and adjectives of
  nationality are lowercase in Czech: *leden*, *český*, *americký*.
- Ordinals take a period and a non-breaking space after it: *2. vrstva*,
  *3. ledna*. Prefer spelling small ordinals out where it reads better.
- Ranges take words or a plain hyphen, never a dash: *od roku 2020 do roku
  2024*, *2020-2024*.

Typography

- **Quotation marks are „ … “** with the opening mark U+201E (low, "99" shape)
  and the closing mark U+201C (raised, "66" shape). Not " ", not « ». Nested
  quotes use the single pair ‚ … ' (U+201A then U+2018).
- **No space before : ; ! ?**, one space after. This is the opposite of the
  French rule, and `applyTypography` in `content-lib.js` has **no `cs` entry**,
  so nothing in the pipeline will fix your spacing. What you write ships.
- **Non-breaking space (U+00A0) after every one-letter word.** Czech typography
  does not leave *k, s, v, z, o, u, a, i* stranded at the end of a line, and
  slides are narrow enough that it happens constantly. The same applies between
  a number and its unit (*5 ETH*, *21 000 000 BTC*) and after an ordinal's
  period (*3. ledna*). The character is invisible in an editor, so it is
  written below as `<NBSP>`:

      v<NBSP>peněžence     s<NBSP>tokenem      k<NBSP>účtu
      z<NBSP>bloku         o<NBSP>tom          u<NBSP>burzy
      a<NBSP>proto         i<NBSP>když         5<NBSP>ETH

  **Never put a non-breaking space inside backticks, inside a link URL or link
  text, inside a heading, or anywhere in `keywords.json`.** It is invisible and
  it is a different character from a normal space, so a term whose display form
  contains one will never match the term in the markdown. Glossary display
  forms use ordinary spaces only. To check a file you touched:

      node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');const m=s.match(/\`[^\`\n]*\u00a0[^\`\n]*\`/g);console.log(m?'NBSP INSIDE BACKTICKS: '+m.join(' | '):'ok')" <file>

- **Never use the em dash (U+2014) or the en dash (U+2013).** The repo bans em
  dashes everywhere, and the Czech *pomlčka* is conventionally an en dash,
  which is banned too. Czech pays less for this than Russian or Polish, because
  Czech requires the copula *je* anyway:

      banned:  Blockchain <U+2014> sdílená účetní kniha.
      use:     Blockchain je sdílená účetní kniha.
      use:     Blockchain je jednoduchý: je to sdílená účetní kniha.
      use:     Blockchain (sdílená účetní kniha) funguje bez banky.

  For a parenthetical aside use commas or parentheses. For ranges see Numbers
  above. Markdown list bullets written as `-` are syntax, not punctuation, and
  are fine.
- **Commas before subordinate clauses are obligatory in Czech**, and this is
  the single most common grammatical error in machine-written Czech. Always a
  comma before *že, který/která/které, aby, když, pokud, protože, jestli*
  when it introduces a clause: "Pamatuj, že soukromý klíč je jediný důkaz
  vlastnictví." No comma before *a / nebo / i* joining two simple items.
- **Sentence case, never Title Case.** Czech capitalises the first word and
  proper nouns only: "Co je kryptoměnová peněženka?", not "Co Je Kryptoměnová
  Peněženka?". ETHGlossary's `heading`, `tag` and `ui` contexts return
  capitalised forms (*Atestace*, *Most*, *Přemostit*); ignore them and take
  `term`.
- Hyphens are part of the spelling of several pins and must be kept exactly:
  peer-to-peer, zero-knowledge, front-running, ERC-20, ERC-721, ERC-1155,
  meta-agregátor, 51% útok. Others are deliberately written solid:
  kryptoměna, kryptopeněženka, stablecoin, memecoin, onchain, offchain.
- No headings end with a period. Feedback lines under `> ℹ️` are full sentences
  and do take one.

Spelling and encoding

- **Diacritics are letters, not decoration: á č ď é ě í ň ó ř š ť ú ů ý ž.**
  Stripping them produces a different word or no word (*byt* / *být*, *dal* /
  *dál*, *pero* / *péro*, *sit* / *síť*, *penezenka* is not a word at all).
  Unaccented Czech is not acceptable output, not in prose, not in headings, not
  in quiz options, not in link text. Uppercase keeps them: *ÚČETNÍ KNIHA*, not
  *UCETNI KNIHA*.
- **ú against ů.** *ú* opens a word or a stem (*úvod*, *účet*, *úložiště*), *ů*
  sits inside or at the end (*důvěra*, *dům*, *půjčka*, *domů*). Getting this
  wrong is the most visible Czech spelling error there is.
- **Write NFC.** Every one of the fifteen Czech accented letters decomposes
  (á = a + U+0301, č = c + U+030C, ů = u + U+030A, and so on) and the
  decomposed form renders pixel-identically while being a different byte
  string. `normalizeKeyword` NFC-folds both sides of a tooltip lookup, so a
  decomposed term is not instantly fatal, but **nothing else in the pipeline
  normalises**: JSON keys, `keyword_forms` de-duplication, `localeCompare`
  sorting on the glossary page, git diffs and every grep you or a reviewer will
  run compare raw bytes. Check anything you write:

      node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');console.log(s===s.normalize('NFC')?'ok':'NOT NFC')" <file>

- No zero-width characters, no soft hyphens (U+00AD), no straight apostrophe
  where Czech needs none. Czech words take no apostrophe at all, and neither do
  declined English names (*MetaMasku*, not *MetaMask'u*).
- Prefer copy-paste over retyping any pinned term. The pins are the spelling
  authority even where ETHGlossary spells a term differently.

Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build
on any `**` or `_` that survives as literal text. Czech has word spaces and
mostly ASCII punctuation, so it is far safer than Japanese or Chinese, but five
patterns still break. Every row below was run through the real validator:

    breaks:  **Hodnota:**čas, který ušetříš.  ->  **Hodnota**: čas, který ušetříš.
    breaks:  Je to **peněženka.**Další krok…  ->  Je to **peněženka**. Další krok…
    breaks:  **„důvěra“**není potřeba.        ->  **„důvěra“** není potřeba.
    breaks:  Poplatek je **0,05 %**nižší.     ->  Poplatek je **0,05 %** nižší.
    breaks:  _**tri**_lema sítě               ->  ***tri**lema* sítě
    breaks:  peně_ženka_                      ->  peně*ženka*

The rule that covers all of them: **leave a space after a closing `**`**, and
keep the punctuation outside the markers. Bold the link *text* rather than the
whole link: `[**název lekce**](url)`. Never put `_` against a letter, in either
direction, because `_` cannot open or close intraword; use `*…*` instead. Czech
quotation marks count as punctuation for CommonMark's flanking rules, so
`**„…“**` followed immediately by a letter is the pattern most likely to bite
here.

Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin. For
Czech it is unusually rich on morphology (gender, animacy, plurals, aliases)
and unusually shaky on register and on internal consistency. Four failure
modes, all confirmed in the vendored file:

- **It returns inflected prose forms.** 46% of entries. This is the one that
  silently kills tooltips. See "Case and the glossary" above.
- **It prefers formally-correct coinages Czech crypto readers do not use**:
  *postranní řetězec* for sidechain, *penalizace* for slashing, *řešitel* for
  solver, *rozvětvení* for fork, *s nulovým vědomím* for zero-knowledge,
  *předbíhání* for front-running.
- **It contradicts itself across related entries**: `gas` is *gas* but
  `gas fee` is *poplatek za plyn*, which reads as a bill for natural gas.
- **Two of its plain-Czech choices collide with hardware wallet brands** the
  lessons name on the same slides: *trezor* for `vault` (Trezor is a Czech
  hardware wallet, made in Prague) and *ledger* as a bare loan (Ledger is the
  other one). Both are overridden below.

Overridden below, with the reason in one line each:

- `sidechain = sidechain` (not *postranní řetězec*): the English is the term in
  circulation, and the calque collides with *řetězec* used for the chain itself.
- `slashing = slashing` (not *penalizace*): what Czech staking writing says;
  *penalizace* stays as an alias and `slashed` is pinned to the adjective
  *penalizovaný*, which is the form Czech prose actually needs.
- `solver = solver` (not *řešitel*): *řešitel* in Czech is a grant applicant or
  someone doing a crossword, not a market maker executing an intent.
- `fork = fork` (not *rozvětvení*): *hard fork* / *soft fork* are the forms a
  Czech reader will meet next.
- `zero-knowledge = zero-knowledge` (not *s nulovým vědomím*): the ETHGlossary
  phrase reads as "with zero consciousness". Kept Latin and invariable, so it
  works as an adjective in every gender (*zero-knowledge důkaz*, *zero-knowledge
  technologie*); *nulová znalost* stays available as a `keyword_forms` alias.
- `front-running = front-running` (not *předbíhání*): *předbíhání* on its own
  means queue-jumping; the English term is what Czech DEX writing uses.
- `gas fee = poplatek za gas` (not *poplatek za plyn*): ETHGlossary pins `gas`
  itself to *gas*, so *plyn* on the very next entry teaches the reader that
  Ethereum charges for natural gas.
- `vault = vault` (not *trezor*): **Trezor is a Czech hardware wallet brand**,
  and `vault` appears in the token-standards lesson next to wallet vocabulary.
  Using *trezor* for an ERC-4626 vault would make a beginner read a product
  name. *trezor* and *úložiště* stay as aliases.
- `ledger = účetní kniha` (not the bare loan *ledger*): same collision, the
  other brand. *účetní kniha* is also the standard Czech term for a ledger and
  teaches the concept directly; *ledger* and *registr* stay as aliases.
- `consensus = konsenzus` (not *konsensus*): both spellings are legal, but
  *konsenzus* is the form the Internetová jazyková příručka and Czech
  Wikipedia lead with and the one Czech readers see. Pinned because a spelling
  variant is exactly what drifts across twelve agents.
- `liquidity pool = pool likvidity` (not *fond likvidity*): *fond* reads as a
  managed investment fund, and *pool* keeps it consistent with the pinned
  *stakingový pool*.
- `mint = mintovat` (not *razit*): *razit* is striking metal coins; Czech NFT
  writing says *mintovat / zmintovat*.
- `peg = cenová vazba` (not the bare *vazba*): *vazba* alone means a binding, a
  bond, or pre-trial detention.
- `gwei = gwei` (not *Gwei*): ethereum.org and every wallet UI write it
  lowercase.
- `solo staking = solo staking`, `solo staker = solo staker` (not *sólo
  staking*): these name Ethereum's own product category, and the half-Czech
  spelling would be the only place in the guide where an English compound takes
  a Czech accent.
- `validator` keeps ETHGlossary's *validátor* but is treated as **masculine
  animate** (nom. pl. *validátoři*, acc. sg. *validátora*), against
  ETHGlossary's `inanimate`: animacy changes the accusative, which is exactly
  where a dead tooltip appears.
- `finality = finalita` is kept from ETHGlossary, over its own aliases
  *konečnost* and *nevratnost*, because Czech crypto writing uses *finalita*
  and the aliases are ordinary words that would shadow other entries.
- `governance = řízení` (ETHGlossary says *správa*): *správa* is already spoken
  for by `self-custody = vlastní správa` and `custodian = správce`, and three
  senses of one root on one slide is unreadable. Note that bare `governance` is
  a prose pin only, it has no glossary key.

Pins that are NOT backtickable

The ```terms``` block fixes how a word is TRANSLATED wherever it appears; the
glossary decides whether it gets a tooltip. Seven pins exist for prose
consistency only and have **no entry in `translation/keywords/en/keywords.json`**,
so backticking them is a guaranteed dead tooltip and a build failure:
**`governance`, `fee`, `network`, `supply`, `key`, `exchange`, `yield`.**
Follow the pin for the wording, but leave the backticks off. The ru and vi
waves each lost a verify cycle to `yield`, whose only glossary key is
`yield farm`.

A plural pin is a different case and is safe: `blockchains`, `tokens`,
`transactions`, `private keys`, `smart contracts` and `validators` are not keys
either, but the index resolves a plural display form through the singular
entry's `keyword_plural`, so *blockchainy* and *tokeny* get their tooltip. That
only works if the glossary agents actually wrote `keyword_plural`. When in
doubt, grep the English keywords file before you add backticks.

`x = x` pins a term to its English form. Ordered by how many of the 19 lessons
backtick each term, so the pins most likely to drift between agents come first.

```terms
private key = soukromý klíč
private keys = soukromé klíče
public key = veřejný klíč
blockchain = blockchain
blockchains = blockchainy
blockchain technology = blockchainová technologie
blockchain apps = blockchainové aplikace
blockchain architecture = architektura blockchainu
blockchain trilemma = blockchainové trilema
ethereum blockchain = blockchain Etherea
ethereum mainnet = Ethereum Mainnet
mainnet = Mainnet
layer 1 = Layer 1
layer 2 = Layer 2
alternative layer 1 = alternativní Layer 1
l1 = L1
l2 = L2
smart contract = chytrý kontrakt
smart contracts = chytré kontrakty
smart account = chytrý účet
smart wallet = chytrá peněženka
cryptocurrency = kryptoměna
cryptocurrencies = kryptoměny
cryptocurrency mining = těžba kryptoměn
crypto = krypto
coin = mince
money = peníze
decentralized = decentralizovaný
decentralization = decentralizace
centralized = centralizovaný
centralization = centralizace
decentralized money = decentralizované peníze
decentralized finance = decentralizované finance
decentralized services = decentralizované služby
dapp = dApp
staking = staking
staking pool = stakingový pool
staking providers = poskytovatelé stakingu
solo staking = solo staking
solo staker = solo staker
stake = stake
staked = stakovaný
staker = staker
stakers = stakeři
restaking = restaking
liquid = likvidní
liquid staking token = token likvidního stakingu
lsts = LST
centralized exchange staking = staking na centralizované burze
web3 = Web3
web2 = Web2
block = blok
block hash = hash bloku
block explorer = prohlížeč bloků
block reward = odměna za blok
block builder = tvůrce bloků
block proposer = navrhovatel bloku
block producer = producent bloků
blockspace = blokový prostor
block space = blokový prostor
wallet = peněženka
wallet app = aplikace peněženky
wallet provider = poskytovatel peněženky
crypto wallet = kryptopeněženka
cryptocurrency wallet = kryptoměnová peněženka
hot wallet = horká peněženka
cold wallet = studená peněženka
hardware wallet = hardwarová peněženka
custodial wallet = kustodiální peněženka
non-custodial wallet = nekustodiální peněženka
custodian = správce
self-custody = vlastní správa
self-custody wallet = peněženka ve vlastní správě
self-custodial = ve vlastní správě
seed phrase = seed fráze
recovery phrase = obnovovací fráze
liquidity = likvidita
liquidity pool = pool likvidity
dex = DEX
cex = CEX
dex aggregator = DEX agregátor
aggregator = agregátor
meta-aggregator = meta-agregátor
amm = AMM
lp = LP
tvl = TVL
mev = MEV
decentralized exchange = decentralizovaná burza
centralized exchange = centralizovaná burza
centralized services = centralizované služby
order book = kniha objednávek
market cap = tržní kapitalizace
validator = validátor
validators = validátoři
validator node = validátorský uzel
validator nodes = validátorské uzly
validator client = klient validátora
node = uzel
node operator = provozovatel uzlu
peer = peer
peer-to-peer = peer-to-peer
address = adresa
addresses = adresy
gas = gas
gas fee = poplatek za gas
fee = poplatek
network = síť
chain = řetězec
settlement layer = zúčtovací vrstva
optimistic rollup = optimistický rollup
zk rollup = ZK rollup
rollup = rollup
sidechain = sidechain
sharding = sharding
payment channel = platební kanál
lightning network = Lightning Network
blob = blob
bridge = most
validating bridge = validující most
onchain = onchain
offchain = offchain
onchain identity = onchain identita
onchain governance = onchain řízení
network governance = řízení sítě
governance = řízení
delegate = delegovat
delegation = delegace
veto = veto
dao = DAO
defi = DeFi
nft = NFT
permissionless = nevyžadující povolení
trustless = nevyžadující důvěru
censorship-resistant = odolný vůči cenzuře
asynchronous = asynchronní
open source = open source
public = veřejný
ledger = účetní kniha
transaction = transakce
transactions = transakce
transaction hash = hash transakce
transaction throughput = propustnost transakcí
transaction finality = finalita transakce
finality = finalita
finality time = doba do finality
settlement time = doba vypořádání
token = token
tokens = tokeny
token allowance = povolený limit tokenu
allowance = povolený limit
token approval = schválení tokenu
token swap = swap tokenů
token pair = pár tokenů
token distribution = distribuce tokenů
intermediary token = zprostředkující token
multi-token standard = multitokenový standard
swap = swap
trade = obchod
trade route = obchodní trasa
trade routing = směrování obchodů
private transaction routing = soukromé směrování transakcí
batch auction = dávková aukce
intent = záměr
solver = solver
otc = OTC
over the counter = mimoburzovní obchod
slippage = cenový skluz
slippage tolerance = tolerance skluzu
price impact = cenový dopad
front-running = front-running
sandwich attack = sendvičový útok
51% attack = 51% útok
stablecoin = stablecoin
stablecoin issuer = vydavatel stablecoinu
peg = cenová vazba
vault = vault
death spiral = spirála smrti
counterparty risk = riziko protistrany
collateral = zajištění
liquidation = likvidace
yield farm = yield farm
memecoin = memecoin
oracle = oracle
mint = mintovat
hash = hash
hashing function = hashovací funkce
mining = těžba
miner = těžař
consensus = konsenzus
consensus mechanism = mechanismus konsenzu
consensus mechanisms = mechanismy konsenzu
proof of work = Proof of Work
proof of stake = Proof of Stake
proof-of-stake = Proof of Stake
pos = PoS
slashing = slashing
slashed = penalizovaný
attestation = atestace
epoch = epocha
fork = fork
scalability = škálovatelnost
interoperability = interoperabilita
composability = skládatelnost
fungibility = zaměnitelnost
credible neutrality = důvěryhodná neutralita
neutrality = neutralita
public good = veřejný statek
equality of opportunity = rovnost příležitostí
quadratic funding = kvadratické financování
allo protocol = Allo Protocol
retropgf = RetroPGF
democracy = demokracie
autonomy = autonomie
open internet = otevřený internet
security = bezpečnost
fraud = podvod
fraud proof = důkaz o podvodu
validity proof = důkaz platnosti
zero-knowledge = zero-knowledge
phishing = phishing
social engineering = sociální inženýrství
password manager = správce hesel
two factor authentication = dvoufaktorové ověření
2 factor authentication = dvoufaktorové ověření
2fa = 2FA
red flag = varovný signál
scam-token = podvodný token
fomo = FOMO
hodl = HODL
digital signature = digitální podpis
cryptography = kryptografie
encryption = šifrování
supply = nabídka
max supply = maximální nabídka
circulating supply = nabídka v oběhu
scarcity = vzácnost
scarce = vzácný
inflation = inflace
halving = halving
gold standard = zlatý standard
central bank = centrální banka
commercial bank = komerční banka
monetary policy = měnová politika
fiat = fiat
etf = ETF
spot etf = spotový ETF
onramp = fiat brána
kyc = KYC
know-your-customer = poznej svého klienta
tps = TPS
ether = ether
eth = ETH
btc = BTC
gwei = gwei
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
ethereum virtual machine = Ethereum Virtual Machine
satoshi nakamoto = Satoshi Nakamoto
intermediary = prostředník
intermediaries = prostředníci
value-extraction = odčerpávání hodnoty
value-extractive = odčerpávající hodnotu
value-creation = tvorba hodnoty
app = aplikace
app store = obchod s aplikacemi
digital assets = digitální aktiva
gasless transactions = transakce bez gasu
double-spend = dvojí utracení
pseudonymous = pseudonymní
borrower = dlužník
lender = věřitel
airdrop = airdrop
poap = POAP
basenames = Basenames
primary name = primary name
standard record = standardní záznam
custom record = vlastní záznam
.eth = .eth
yourname.eth = yourname.eth
```

Aliases the pins imply, and the collisions to expect

- Every pin that replaced a circulating alternative keeps that alternative in
  `keyword_forms`, so prose written with it still resolves: *privátní klíč*
  under soukromý klíč, *penalizace* under slashing, *fond likvidity* under pool
  likvidity, *trezor* and *úložiště* under vault, *ledger* and *registr* under
  účetní kniha, *konsensus* under konsenzus, *razit* and *mintnout* under
  mintovat, *nulová znalost* under zero-knowledge, *postranní řetězec* under
  sidechain, *řešitel* under solver, *inteligentní smlouva* and *smart
  kontrakt* under chytrý kontrakt, *krypto peněženka* under kryptopeněženka,
  *nod* and *node* under uzel, *kolaterál* and *zástava* under zajištění,
  *plyn* under gas, and the plain English spelling of every Czech pin.
- `lang-tools merge` reports display-form collisions. A handful are expected
  and harmless, because the English keys are genuine duplicates or a
  singular/plural pair: `blockspace` and `block space` (both *blokový
  prostor*), `proof of stake` and `proof-of-stake`, `centralized services` and
  `decentralized services` are distinct so check that one, `address` and
  `addresses`, `intermediary` and `intermediaries`, `staker` and `stakers`,
  `consensus mechanism` and `consensus mechanisms`, `validator node` and
  `validator nodes`, `two factor authentication` and `2 factor
  authentication`, `delegate` and `delegation` are distinct so check that one
  too. Anything else in that report is two agents disagreeing and must be
  reconciled before the lessons start.
- **Do not register *peněženka ve vlastní správě* as an alias on
  `non-custodial wallet`.** It is the pinned display form of `self-custody
  wallet`, and registering it twice makes one tooltip shadow the other.
- Watch three pairs that must NOT collapse into one Czech word: `custodian`
  (*správce*, the third party) against `password manager` (*správce hesel*, a
  tool) against `self-custody` (*vlastní správa*, the practice); `delegate`
  (*delegovat*, the act, used as a verb in the lessons) against `delegation`
  (*delegace*); and `security` (*bezpečnost*) against any temptation to write
  *cenný papír*, which is the finance false friend and would turn "the security
  of the network" into "the network's tradable share".
- If the English entry has a `keyword_plural`, the Czech entry must have one
  too: `merge` fails on a plural-presence mismatch.

Interface strings

- Keep an English app's button label in English and gloss it in Czech on first
  use, then use the English label alone afterwards: klikni na „Connect Wallet“
  (připojit peněženku).
- **Do not translate a label the reader has to find on screen.** If the
  interface says *Approve*, the lesson says *Approve*, not *Schválit*, no
  matter what the ```terms``` block pins for the concept. `primary name` is
  pinned to English for exactly this reason: it is a labelled setting in the
  ENS app. The same holds for the DEX field labelled *Slippage*, even though
  the concept is pinned as *cenový skluz*.
- Keep `yourname.eth` as it is. It appears in the slide images, and a localised
  example would stop matching the picture next to it.
- For the UI namespaces: `validate-i18n.js` warns when a short English label
  grows by more than 60% in translation, because those strings live in
  fixed-width furniture (the 230px sidebar rail is what caught French).
  "Connect Wallet" -> "Připojit peněženku" is fine; anything longer needs a
  shorter verb. **UI buttons take the infinitive** (*Připojit peněženku*,
  *Začít lekci*, *Pokračovat*), while prose takes the tykání imperative
  (*Klikni na „Connect Wallet“*). Placeholders like `{{name}}` and any HTML
  tags must survive unchanged, and a key ending in `:` keeps its colon.

Fixed section headings

**Every slide and section heading must be translated. A heading left in English
passes every automated check.** The structural verifier compares section
*counts*, never section *text*, so an untranslated heading is invisible to it:
one agent in an earlier wave shipped all 45 of its slide headings in English
and cleared the whole gate. Read your own output for stray English before you
report back.

The 19 lessons are split across 5 independent agents, and the headings below
recur across the 9 handbooks. **Use exactly the Czech in this table. Do not
re-translate them per lesson, and do not improve on them.** Two agents each
picking a defensible synonym is what produced 5 divergent headings in one
Indonesian wave and 3 in Hindi, all repaired centrally afterwards.

| English heading | Czech | occurrences |
|---|---|---|
| `Introduction` | `Úvod` | 8 (6 as `#`, 2 as `##`) |
| `Key Takeaways` | `Klíčové poznatky` | 8 |
| `Frequently Asked Questions` | `Často kladené otázky` | 4 |
| `Walkthrough` | `Krok za krokem` | 3 |
| `Prerequisites` | `Co budeš potřebovat` | 3 |
| `FAQ` | `FAQ` | 3 |

- **`FAQ` and `Frequently Asked Questions` stay distinct**, exactly as in the
  English source. Czech uses the English abbreviation *FAQ* natively and
  indeclinably (it is what Czech websites put on their help pages), so the
  short/long pair survives translation at no cost; collapsing both onto the
  long Czech phrase would lengthen three headings for nothing.
- `Prerequisites` is deliberately not the dictionary *Předpoklady*: the tykání
  register is the site's voice, and *Co budeš potřebovat* is future tense, so
  it carries no gender.
- **A suffixed heading keeps the pinned form and appends its own suffix**,
  translated:

      ## Walkthrough: Using Revoke.cash   ->  ## Krok za krokem: použití Revoke.cash
      # Introduction to Quadratic Funding ->  # Úvod do kvadratického financování

  The Czech colon takes no space before it and the word after it is lowercase.
- Keep the heading level (`#` vs `##` vs `###`) exactly as the source has it.
  Sentence case, no trailing period, no `**bold**`.
- **`Knowledge Check <n>` stays in English, with its original number.** It is
  an identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two
  checks.

Fixed quiz feedback openers

Almost every `> ℹ️` line opens with one of four English words, and 155 of them
are the same one. **Pin the opener; write the rest of the sentence freely.** An
earlier wave shipped two competing renderings of one opener and needed 24
feedback lines repaired centrally.

| English opener | Czech | count in the source |
|---|---|---|
| `Try again!` | `Zkus to znovu!` | 155 |
| `Correct!` | `Správně!` | 74 |
| `Right!` | `Přesně tak!` | 6 |
| `Try again.` | `Zkus to znovu.` | 4 |
| `Incorrect,` / `Incorrect.` | `Špatně,` / `Špatně.` | 4 |
| `Correct.` | `Správně.` | 2 |

*Zkus to znovu!* and *Správně!* carry the warm tykání register of the rest of
the course. Do not use *Zkuste to znovu!* (vykání), *Nesprávně!* (interface
message), or *Bohužel ne!* (a fifth variant that will not match the other
agents). Keep the opener and the sentence after it on the same line, and keep
the whole feedback to one or two short sentences.

Headings and `/content` anchors

Czech headings slugify cleanly: `headingId` runs NFD and strips the combining
marks, and every Czech accented letter decomposes, so "Co je kryptoměnová
peněženka?" becomes `co-je-kryptomenova-penezenka` and "Často kladené otázky"
becomes `casto-kladene-otazky`. Unlike Japanese and Chinese, Czech content
pages get readable anchors, so write real headings and do not pad them with
English.

One thing to know but not to act on: Czech collation treats *ch* as a single
letter that sorts after *h*, so the `/glossary` page's `localeCompare` ordering
will put *chytrý kontrakt* after *hash*. That is correct Czech and needs no
workaround.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | cs |
|---|---|
| `True` | **Pravda** |
| `False` | **Nepravda** |

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
   a verdict. This is why Czech uses **Pravda / Nepravda** and not *Správně /
   Nesprávně*: the correct-answer opener is `Správně!`, and *Správně* as an
   option label would make the feedback read as a repeat of the answer. Russian
   hit exactly this with Верно, and Indonesian with Benar.
2. **Keep the `[x]` on the same option index as English.** Only the option TEXT
   changes here; users have answer numbers saved in localStorage.

Before you hand a file back

1. Same number of `#`/`##` sections, images, links, quiz options and `> ℹ️`
   feedback lines as the English source, with `- [x]` on the same option index.
2. Every heading `Knowledge Check <n>` left in English, and **every other
   heading translated**.
3. Every backticked term resolves through the Czech glossary in the exact form
   you wrote it, in the nominative singular. This is a hard build failure, not
   a warning.
4. No second-person past tense, no gendered predicate adjective, no *vy*.
5. No em dash, no en dash, no `_…_` against a letter, no punctuation trapped
   inside `**`.
6. NFC, all diacritics written, *ú* and *ů* the right way round.
7. Slides under 19 estimated lines, quiz options under ~70 characters.
