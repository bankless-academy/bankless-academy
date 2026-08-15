# Polish style guide (translate-content)

Polish is the first heavily-inflecting Slavic language in this repo after
Ukrainian, and the first with a Latin script that inflects. There is no sibling
to copy from, so this file is the only thing holding a dozen independent
translators to one Polish. Read it end to end before writing a single slide.

The single biggest risk in Polish is **case**. A noun has seven forms and the
glossary index matches on exactly one of them. Read "Case and the glossary"
twice; everything else is craft, that section is correctness.

Register and address

- Address the reader as **ty** (second person singular): *otwórz, kliknij,
  zobaczysz, twój portfel*. Never *Pan/Pani*, never the plural *wy*, never the
  impersonal *należy / można / użytkownik powinien*.
- Why: *Pan/Pani* is the register of a bank letter and a tax office, which is
  precisely the institution Bankless Academy is teaching the reader to do
  without. The impersonal *należy* is instruction-manual Polish and puts a wall
  between the writer and the reader. Every product a Polish reader already uses
  to learn something (Duolingo, Revolut, Allegro's help pages, the Polish
  MetaMask and Ledger docs) says *ty*, and ETHGlossary's own Polish examples do
  too ("Użyj tego mostu, aby przenieść tokeny"). Bankless Academy is a peer
  teaching a peer.
- **Write ty/twój/ciebie in lowercase.** Capitalised *Ty/Twój* is correspondence
  convention (a letter to one named person) and reads as marketing mail on a
  web page. One exception: the vocative address to the reader as an Explorer,
  which is a name, see below.
- Imperatives are the bare second-person singular: **otwórz, kliknij, zapisz,
  sprawdź, pamiętaj, wybierz, przejdź**. Not *otwórzcie* (plural), not *proszę
  otworzyć* (form letter), not *otwieramy* (we-voice).
- **Use *swój*, not *twój*, when the owner is the subject of the sentence.**
  *Otwórz twój portfel* is wrong Polish; write **Otwórz swój portfel**, or
  better just **Otwórz portfel**. Polish drops the possessive wherever
  ownership is obvious, and a *twój* on every noun is the clearest tell of a
  machine translation. Keep it only where ownership is the point:
  "Ten klucz należy tylko do ciebie."
- **Avoid the second-person past tense: it marks the reader's gender.**
  *ukończyłeś* is male, *ukończyłaś* is female, and there is no neutral form.
  The same trap sits in predicate adjectives: *jesteś gotowy* / *jesteś gotowa*.

      avoid:  Ukończyłeś tę lekcję.          (male only)
      avoid:  Jesteś gotowy, aby zacząć.     (male only)
      use:    Lekcja ukończona.
      use:    To już wiesz.                  (present tense, no gender)
      use:    Wszystko gotowe.               (impersonal predicate)
      use:    Możesz zaczynać.               (present, no gender)
      use:    Udało się!                     (impersonal past)

  Present and future tense verbs carry no gender in Polish, so keep the
  teaching voice in the present. When a past event is unavoidable, nominalise
  it (*po ukończeniu lekcji*) or use the impersonal *-no/-to* form
  (*ukończono*).
- Short sentences. Polish tolerates long subordination and AI Polish abuses it:
  split at the clause boundary instead of chaining *który, ponieważ, dzięki
  czemu, w związku z czym* into one paragraph-long line.
- Explorer, the site's word for its readers, is **Odkrywca** (plural
  **Odkrywcy**), capitalised as a title. Do **not** use *Eksplorator*: that is
  the word this course already uses for a block explorer (*eksplorator
  bloków*), and the collision is confusing on exactly the slides where both
  appear. Direct address takes the **vocative** case, which is the one place
  Polish still uses it in everyday writing:

      Witaj, Odkrywco!
      Czy wiesz, Odkrywco, że da się to zrobić taniej?

Polish, English, or a Polish word: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and never move a term between buckets across two lessons.

1. **English, untouched.** Names, tickers, symbols and code identifiers.
   Product, network and company names: Bitcoin, Ethereum, Uniswap, Optimism,
   Base, MetaMask, Coinbase, Zerion, Velodrome, Rocket Pool, OpenSea,
   Etherscan, Revoke.cash, Lightning Network. People: Satoshi Nakamoto.
   Tickers and units: ETH, BTC, USDC, OP, gwei, wei. Acronyms: API, DEX, CEX,
   AMM, LP, TVL, MEV, KYC, TPS, APR, APY, NFT, DAO, DeFi, Web3, Web2, L1, L2,
   PoW, PoS, ERC-20, ERC-721, ERC-1155, EIP, EVM, OTC, 2FA, FOMO, HODL,
   RetroPGF. Domain-like strings: yourname.eth, .eth. Do not transliterate
   these: never *Bitcoina* spelled *Bitkojna*, never *Ethereum* as *Eterium*.
2. **English borrowed into Polish prose**, because that is what Polish crypto
   speakers actually write, and a Polish coinage would be a word the reader
   never meets anywhere else: blockchain, token, staking, staker, restaking,
   rollup, sidechain, stablecoin, memecoin, blob, sharding, slashing, hash,
   halving, phishing, fiat, open source, on-chain / off-chain, zero-knowledge,
   solver, dApp, Layer 1 / Layer 2, Proof of Work / Proof of Stake, Optimistic
   Rollup / ZK Rollup. These are ordinary Polish nouns once borrowed: they
   decline (*blockchaina, tokeny, stakingu*) and they take Polish gender.
3. **A real Polish word**, because the concept already exists in Polish
   finance, computing or everyday speech and the Polish word teaches better:
   portfel (wallet), klucz (key), adres (address), rejestr (ledger), węzeł
   (node), blok (block), sieć (network), opłata (fee), podaż (supply),
   rzadkość (scarcity), inflacja (inflation), kopanie (mining), górnik (miner),
   płynność (liquidity), giełda (exchange), księga zleceń (order book),
   zabezpieczenie (collateral), bank centralny, polityka pieniężna, standard
   złota, konsensus, decentralizacja, bezpieczeństwo, oszustwo (fraud),
   inżynieria społeczna (social engineering), menedżer haseł (password
   manager), równość szans (equality of opportunity).

**The tiebreaker between buckets 2 and 3 is what a Polish crypto reader
actually sees in the wild, not what is formally correct.** That is why the pins
below say *slashing* and not *cięcie*, *sidechain* and not *łańcuch poboczny*,
*fork* and not *rozwidlenie*, *solver* and not *solwer*. Where the Polish word
wins instead (*kopanie*, *górnik*, *rejestr*, *księga zleceń*), the English is
still worth keeping in `keyword_forms` so prose that uses it resolves to a
tooltip.

Grammatical gender of the loanwords

Gender is not decoration in Polish: it fixes the adjective, the past tense, the
pronoun and the numeral in the same clause. Two translators who disagree about
whether *blockchain* is masculine produce visibly broken Polish on adjacent
slides. Learn the high-traffic ones.

| term | gender | gen. sg. | loc. sg. | nom. pl. |
|---|---|---|---|---|
| blockchain | masc. | blockchaina | blockchainie | blockchainy |
| token | masc. | tokena | tokenie | tokeny |
| portfel | masc. | portfela | portfelu | portfele |
| klucz | masc. | klucza | kluczu | klucze |
| blok | masc. | bloku | bloku | bloki |
| adres | masc. | adresu | adresie | adresy |
| węzeł | masc. | węzła | węźle | węzły |
| rejestr | masc. | rejestru | rejestrze | rejestry |
| most | masc. | mostu | moście | mosty |
| gaz | masc. | gazu | gazie | (none) |
| staking | masc. | stakingu | stakingu | (none) |
| rollup | masc. | rollupa | rollupie | rollupy |
| stablecoin | masc. | stablecoina | stablecoinie | stablecoiny |
| hash | masc. | hasha | hashu | hashe |
| kontrakt | masc. | kontraktu | kontrakcie | kontrakty |
| konsensus | masc. | konsensusu | konsensusie | (none) |
| walidator | masc. | walidatora | walidatorze | walidatory |
| skarbiec | masc. | skarbca | skarbcu | skarbce |
| staker | masc. pers. | stakera | stakerze | **stakerzy** |
| górnik | masc. pers. | górnika | górniku | **górnicy** |
| kryptowaluta | fem. | kryptowaluty | kryptowalucie | kryptowaluty |
| transakcja | fem. | transakcji | transakcji | transakcje |
| sieć | fem. | sieci | sieci | sieci |
| giełda | fem. | giełdy | giełdzie | giełdy |
| pula | fem. | puli | puli | pule |
| opłata | fem. | opłaty | opłacie | opłaty |
| fraza | fem. | frazy | frazie | frazy |
| moneta | fem. | monety | monecie | monety |
| płynność, podaż, rzadkość, skalowalność, finalność | fem. | -ści / -ży | -ści / -ży | rare |
| konto | neut. | konta | koncie | konta |
| weto | neut. | weta | wecie | (none) |
| dobro publiczne | neut. | dobra publicznego | dobru publicznym | dobra publiczne |
| bezpieczeństwo, zarządzanie, poświadczenie, szyfrowanie, zabezpieczenie | neut. | -a | -u | -a |

**Masculine personal plural is a separate class.** A noun for a *person*
(staker, górnik, delegat, powiernik, pośrednik) takes -i / -y / -owie in the
plural and drags the verb with it: *stakerzy zarobili*, not *stakery zarobiły*.
A noun for a *machine or a thing* (walidator, solver, eksplorator, rollup) takes
the non-personal plural: *walidatory przetwarzają*. Ethereum validators are
software, so **walidatory**; the people who run them are *operatorzy węzłów*.

**Indeclinable, always**: ETH, BTC, DAO, NFT, Web3, Web2, DeFi, gwei, KYC, TVL,
MEV, AMM, LP, TPS, OTC, PoW, PoS, HODL, FOMO, Layer 1, Layer 2. Write *w DAO*,
*z ETH*, *na Layer 2*, never *w DAO-u* or *na Layerze 2*.

Case and the glossary: the trap that kills tooltips

**The glossary `keyword` is the string a lesson backticks, and the runtime index
matches it as an exact string after lowercasing. It MUST be the nominative
singular.** Every other case goes in `keyword_forms`.

This is a live trap in the vendored data, not a theoretical one. **266 of the
541 Polish ETHGlossary entries (49%) have a `contexts.prose` form that differs
from the citation form**, because the generator wrote each example sentence
first and lifted the word out of it:

    bridge       term "most"            prose "mostu"            (genitive)
    wallet       term "portfel"         prose "portfela"         (genitive)
    private key  term "klucz prywatny"  prose "klucza prywatnego"(genitive)
    staking      term "staking"         prose "stakingiem"       (instrumental)
    gas          term "gaz"             prose "gazu"             (genitive)
    transaction  term "transakcja"      prose "transakcję"       (accusative)
    blockchain   term "blockchain"      prose "blockchainie"     (locative)

**Never copy `contexts.prose` into `keyword`.** Take `term`, or better, take the
pin from the ```terms``` block below.

The same rule binds the lesson translators, from the other side. A backticked
term that is not in the nominative resolves to nothing, `validate-content.js`
fails the build on it, and in production it would be a dead tooltip:

    dead:   Nigdy nikomu nie pokazuj `klucza prywatnego`.
    dead:   Wszystko zapisuje się w `rejestrze`.
    dead:   Zacznij od `pobrania portfela`.

Three ways out, in order of preference:

1. **Recast so the term stands in the nominative**, usually as the subject or
   as a nominal predicate:

       live:   `Klucz prywatny` to jedyny dowód własności. Nie pokazuj go nikomu.
       live:   `Rejestr` zapisuje każdą transakcję.
       live:   `Portfel` to pierwsza rzecz, którą pobierzesz.

2. **Do not backtick that mention.** The verifier does not count backticks, and
   the validator only complains about backticked terms that fail to resolve, so
   leaving one mention plain costs nothing. Backtick the term once, where it is
   introduced and where the nominative is natural, and let the other mentions
   inflect freely:

       live:   `Klucz prywatny` kontroluje środki. Nigdy nikomu nie pokazuj
               klucza prywatnego.

3. **Register the form** in `keyword_forms` (glossary wave only, see below).
   Lesson translators cannot do this: the glossary is finished before the
   lessons start.

Two things Polish does **not** have to worry about, unlike other languages
here: capitalisation is safe (the index lowercases both sides, and Polish
lowercasing has none of Turkish's `İ` problem, so `Klucz prywatny` at the start
of a sentence resolves fine), and prepositions are separate words, so keeping
them outside the backticks is easy. What is not easy is that Polish
prepositions **govern a case**: *w rejestrze*, *do portfela*, *z blockchainem*.
A preposition in front of a backticked term is almost always a signal that the
term inside it is no longer nominative. Check it every time.

`keyword_forms`: the recipe for the glossary wave

Polish morphology is not derivable by the runtime, so the glossary carries it.
For every noun entry write:

- `keyword` = nominative singular (the display form lessons will backtick)
- `keyword_plural` = nominative plural (Polish plurals are irregular often
  enough that this must be written, not guessed: *klucz -> klucze*,
  *transakcja -> transakcje*, *górnik -> górnicy*, *sieć -> sieci*)
- `keyword_forms` = the oblique forms that actually appear in prose, plus the
  English spelling when the pin is Polish. In practice that is:
  **genitive singular** (by far the most common: after a negation, after most
  quantifiers, after *do / od / bez / dla*), **locative singular** (after
  *w / na / o / po*), **instrumental singular** (after *z*), **accusative
  singular when it differs** (feminine -ę, masculine animate), and
  **genitive plural**.

      "private key": {
        "keyword": "klucz prywatny",
        "keyword_plural": "klucze prywatne",
        "keyword_forms": ["klucza prywatnego", "kluczu prywatnym",
                          "kluczem prywatnym", "kluczy prywatnych",
                          "private key"]
      }

  Note that in an adjective + noun term **both words inflect**, and the
  adjective follows the noun in Polish crypto usage (*klucz prywatny*, not
  *prywatny klucz*). Keep that order everywhere.

Be generous here. Every form registered in wave 1 is a sentence the lesson
translators in wave 2 do not have to contort, and an unused form costs nothing.

Adjectives are keywords too, and they agree

Several glossary entries are adjectives: `decentralized`, `permissionless`,
`trustless`, `public`, `scarce`, `liquid`, `asynchronous`,
`censorship-resistant`, `self-custodial`. A Polish adjective agrees with its
noun in gender, number and case, so the citation form (masculine nominative
singular) is only one of many. Give each of these four forms at minimum:

    keyword:        zdecentralizowany        (masc. sg., "zdecentralizowany rejestr")
    keyword_forms:  zdecentralizowana        (fem. sg., "zdecentralizowana giełda")
                    zdecentralizowane        (neut. sg. and non-personal pl.)
                    zdecentralizowani        (masc. personal pl., rare here)

and prefer, in the lesson prose, a noun the adjective can agree with in the
masculine nominative, or simply drop the backticks on the agreeing mention.
`permissionless` and `trustless` are pinned as participial phrases
(*niewymagający pozwoleń*, *niewymagający zaufania*) whose second word is
already invariable, so only the first word changes: *sieć niewymagająca
pozwoleń*, *systemy niewymagające zaufania*.

Acronyms: decline with a hyphen, or avoid declining

Polish declines borrowed acronyms with a hyphen before the ending: *DEX-a,
DEX-y, na DEX-ie, NFT-y, dApp-a*. That is correct Polish and completely
unreadable as a glossary display form. So:

- **Keep the backticked form bare and nominative**: `DEX`, `NFT`, `dApp`, `LP`,
  `AMM`, `TVL`.
- **Recast rather than decline**: *na giełdzie DEX* beats *na DEX-ie*;
  *dwa tokeny NFT* beats *dwa NFT-y*; *aplikacje dApp* beats *dAppy*.
- Where a plural is unavoidable, the hyphen form is right and belongs in
  `keyword_plural`: `dex` -> plural *DEX-y*, `nft` -> plural *NFT*
  (indeclinable, the numeral carries the count), `lsts` -> *LST-y*,
  `dapp` -> *dAppy* (this one is conventionally written without the hyphen).
- Never lowercase an acronym to make it decline, and never write *defi* or
  *nft* in running text: DeFi and NFT keep their casing.

Length: Polish runs long, and the estimator counts it honestly

Polish comes out roughly **15 to 20% longer than English** in characters. It
drops articles, which helps, but the words themselves are longer and every
compound English noun becomes a two-word phrase with an inflected tail
(*blockspace* -> *przestrzeń blokowa*, *slippage tolerance* -> *tolerancja
poślizgu*). `displayWidth` counts Latin script at 1 per character, so the 22
estimated-line ceiling is measured accurately and it **will** bite.

**Target 19 estimated lines, not 22.** Compress by cutting Polish filler, never
by dropping information:

    w celu wykonania transakcji     ->  aby wysłać transakcję
    dokonać wymiany tokenów         ->  wymienić tokeny
    jest to rozwiązanie, które ...  ->  to rozwiązanie ...
    posiadać / dysponować           ->  mieć
    w przypadku, gdy                ->  gdy
    zostać poddanym weryfikacji     ->  zostać zweryfikowanym
    ma możliwość zrobienia          ->  może zrobić

Two Polish moves buy a lot of width for free: **drop the copula with *to***
("Blockchain to wspólny rejestr", not "Blockchain jest wspólnym rejestrem"),
and **drop the possessive** (*Otwórz portfel*, not *Otwórz swój portfel*).

Quiz options are capped at about **70 characters** and Polish gets no discount.
An option that starts *Ponieważ transakcje w sieci są weryfikowane przez...* is
already over. Cut the option to the answer itself and move the reasoning into
the `> ℹ️` feedback line, which allows one or two short sentences (~150
characters, because it renders as a toast over a 375px screen).

Numbers: one false friend that ships as a factual error

- **English "billion" is Polish "miliard", NOT "bilion".** Polish *bilion* is
  10^12, which is English *trillion*. Translating "billion" as "bilion"
  multiplies the figure by a thousand, and no verifier in this repo can catch
  it. English *trillion* is Polish *bilion*. English *million* is *milion*.
  When in doubt, write the digits.
- **Decimal comma**: 0,05 ETH, 3,5%, 1,5 mln.
- **Thousands are grouped with a non-breaking space, never a comma**:
  21 000 000 BTC, 120 000 transakcji. The English source writes 21,000,000, and
  a Polish reader parses that comma as a decimal point, so it must be
  converted. `1.000.000` (dots) is not Polish either.
- **Exception: anything the reader types into an English interface, or that
  lives in code, an address, a hash or a URL, is copied verbatim.**
  "wpisz 0.05 w polu Amount" keeps the period.
- **Percent sign directly after the number, no space**: 51%, 3,5%. This is the
  opposite of the French rule in this repo.
- Currency stays as in the source: $100, 100 USD. Do not convert to złoty. If a
  Polish amount is ever needed, it is *100 zł* with the symbol after the number.
- Years and dates: *w 2025 roku*, *w 2025 r.*, *3 stycznia 2025*. Months and
  nationalities are lowercase in Polish: *styczeń*, *polski*, *amerykański*.
- Ordinals take a period: *2. warstwa*, but prefer spelling it out.

Typography

- **Quotation marks are „ … "** (U+201E opening, U+201D closing), not " " and
  not « ». Nested quotes use » … « (U+00BB then U+00AB, pointing inwards).
- **No space before : ; ! ?**, one space after. This is the opposite of the
  French rule, and `applyTypography` in `content-lib.js` has **no `pl` entry**,
  so nothing in the pipeline will fix your spacing. What you write ships.
- **Non-breaking space (U+00A0) after every one-letter word.** Polish
  typography does not leave *w, z, i, o, a, u, e* stranded at the end of a
  line, and slides are narrow enough that it happens constantly. The character
  is invisible in an editor, so it is written below as `<NBSP>`:

      w<NBSP>portfelu     z<NBSP>tokenem     i<NBSP>wtedy
      o<NBSP>tym          a<NBSP>nawet       u<NBSP>siebie

  **Never put a non-breaking space inside backticks, inside a link URL or link
  text, inside a heading, or anywhere in `keywords.json`.** It is invisible and
  it is a different character from a normal space, so a term whose display form
  contains one will never match the term in the markdown. Glossary display
  forms use ordinary spaces only. To check a file you touched:

      node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');const m=s.match(/\`[^\`\n]*\u00a0[^\`\n]*\`/g);console.log(m?'NBSP INSIDE BACKTICKS: '+m.join(' | '):'ok')" <file>

- **Never use the em dash (U+2014) or the en dash (U+2013).** The repo bans em
  dashes everywhere, and the Polish *myślnik* is conventionally an en dash,
  which is banned too. Polish has a better replacement than most languages: the
  copula **to**.

      banned:  Blockchain <U+2014> wspólny rejestr transakcji.
      use:     Blockchain to wspólny rejestr transakcji.
      use:     Blockchain jest prosty: to wspólny rejestr transakcji.
      use:     Blockchain (wspólny rejestr transakcji) działa bez banku.

  For ranges write *od 2020 do 2024* or *2020-2024* with a plain hyphen.
- **Commas before subordinate clauses are obligatory in Polish**, and this is
  the single most common grammatical error in machine-written Polish. Always a
  comma before *że, który/która/które, aby, żeby, jeśli, gdy, ponieważ, bo,
  czy* when it introduces a clause: "Pamiętaj, że klucz prywatny to jedyny
  dowód własności." No comma before *i / oraz / lub* joining two simple items.
- **Sentence case, never Title Case.** Polish capitalises the first word and
  proper nouns only: "Czym jest portfel kryptowalutowy?", not "Czym Jest
  Portfel Kryptowalutowy?". ETHGlossary's `heading`, `tag` and `ui` contexts
  return capitalised forms; ignore them and take `term`, lowercased.
- Hyphens are part of the spelling of several pins and must be kept exactly:
  peer-to-peer, on-chain, off-chain, zero-knowledge, ERC-20, ERC-721, ERC-1155,
  atak 51%.
- No headings end with a period. Feedback lines under `> ℹ️` are full
  sentences and do take one.

Spelling and encoding

- **Diacritics are letters, not decoration: ą ć ę ł ń ó ś ź ż.** Stripping them
  produces a different word or no word (*los* / *łoś*, *sad* / *sąd*, *zrodlo*
  / *źródło*, *robie* / *robię*). Unaccented Polish is not acceptable output,
  not in prose, not in headings, not in quiz options, not in link text.
  Uppercase keeps them too: *ŁAŃCUCH*, not *LANCUCH*.
- **Write NFC.** Seven of the nine Polish diacritics decompose (ą = a +
  U+0328, ć = c + U+0301, and so on) and the decomposed form renders
  pixel-identically while being a different byte string. `normalizeKeyword`
  now NFC-folds both sides of a tooltip lookup, so a decomposed term is not
  instantly fatal, but **nothing else in the pipeline normalises**: JSON keys,
  `keyword_forms` de-duplication, `localeCompare` sorting on the glossary page,
  git diffs and every grep you or a reviewer will run compare raw bytes. Ł and
  ł have no decomposition at all, so they are never the culprit; the ogonek and
  acute letters are. Check anything you write:

      node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');console.log(s===s.normalize('NFC')?'ok':'NOT NFC')" <file>

- No zero-width characters, no soft hyphens (U+00AD), no typewriter apostrophe
  where a Polish word needs none. The apostrophe appears only in declined
  English loans (*stake'a*), and the ```terms``` block is written to avoid
  needing it.
- Prefer copy-paste over retyping any pinned term. The pins are the spelling
  authority even where ETHGlossary spells a term differently.

Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build
on any `**` or `_` that survives as literal text. Polish has word spaces and
ASCII punctuation, so it is far safer than Japanese or Chinese, but four
patterns still break. Every row below was run through the real validator:

    breaks:  **Wartość:**czas oszczędzony.   ->  **Wartość**: czas oszczędzony.
    breaks:  To jest **portfel.**Następny…   ->  To jest **portfel**. Następny…
    breaks:  **„zaufanie"**nie jest potrzebne ->  **„zaufanie”** nie jest potrzebne
    breaks:  Opłata to **0,05%**mniej.       ->  Opłata to **0,05%** mniej.
    breaks:  _**tri**_lemat                  ->  ***tri**lemat*

The rule that covers all of them: **leave a space after a closing `**`**, and
keep the punctuation outside the markers. Bold the link *text* rather than the
whole link: `[**nazwa lekcji**](url)`. Never put `_` against a letter, in
either direction, because `_` cannot open or close intraword; use `*…*`
instead. Polish quotation marks count as punctuation for CommonMark's flanking
rules, so `**„…"**` followed immediately by a letter is the pattern most likely
to bite here.

Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin, and for
Polish it is unusually good on morphology (it ships gender, plurals and case
forms) and unusually shaky on register. Three failure modes, all confirmed in
the vendored file:

- **It returns inflected prose forms** (see "Case and the glossary" above).
  49% of entries. This is the one that silently kills tooltips.
- **It prefers formally-correct coinages Polish crypto readers do not use**:
  *cięcie* for slashing, *łańcuch poboczny* for sidechain, *solwer* for solver,
  *rozwidlenie* for fork, *pozałańcuchowy* for offchain, *wiedza zerowa* for
  zero-knowledge.
- **One entry is actively misleading**: `finality = ostateczność`. In everyday
  Polish *ostateczność* means "a last resort" (*w ostateczności*), not
  irreversibility. The blockchain term is **finalność**, which ETHGlossary
  itself lists as an alias.

Overridden below, with the reason in one line each:

- `slashing = slashing` (not *cięcie*): what Polish staking writing says; the
  pinned Polish adjective for the participle is *ukarany slashingiem*.
- `sidechain = sidechain` (not *łańcuch poboczny*): the English is the term in
  circulation, and the Polish calque collides with *łańcuch* used for the chain
  itself.
- `solver = solver` (not *solwer*): the Polonised spelling is not written by
  anyone.
- `fork = fork` (not *rozwidlenie*): *hard fork* / *soft fork* are the forms a
  Polish reader will meet next.
- `offchain = off-chain`, `onchain = on-chain` (not *pozałańcuchowy*): the
  hyphenated English is the settled Polish spelling and, being invariable, it
  works as an adjective in every gender (*dane on-chain*, *tożsamość on-chain*).
- `zero-knowledge = zero-knowledge` (not *wiedza zerowa*): kept Latin and
  invariable; *dowód z wiedzą zerową* stays available as a `keyword_forms`
  alias.
- `finality = finalność` (not *ostateczność*): see above, the ETHGlossary term
  means "last resort" to a Polish reader.
- `seed phrase = fraza seed` (ETHGlossary maps both seed phrase and recovery
  phrase to *fraza odzyskiwania*): the two English terms need two distinct
  display forms or one tooltip shadows the other. `recovery phrase` keeps
  *fraza odzyskiwania*, which is also what the Polish MetaMask UI says.
- `mint = mintować` (not *wybijać*): *wybijać* is minting metal coins; Polish
  NFT writing says *mintować / zmintować*.
- `veto = weto`: the pins file had no suggestion and would have left the
  English; Polish has an ordinary word for it.
- `optimistic rollup = Optimistic Rollup`, `zk rollup = ZK Rollup` (not
  *optymistyczny rollup*): these are the proper names of two rollup families,
  written capitalised in Polish crypto writing, and keeping them Latin avoids
  adjective agreement on a term that appears on six lessons' slides.
- `epoch = epoka` is kept from ETHGlossary, but note it is a normal Polish
  word: introduce it once as *epoka (epoch)* so the reader connects it to the
  English UI.

`x = x` pins a term to its English form. Ordered by how many of the 19 lessons
backtick each term, so the pins most likely to drift between translators come
first.

```terms
private key = klucz prywatny
private keys = klucze prywatne
public key = klucz publiczny
blockchain = blockchain
blockchain technology = technologia blockchain
blockchain apps = aplikacje blockchain
blockchain trilemma = trylemat blockchaina
ethereum blockchain = blockchain Ethereum
ethereum mainnet = sieć główna Ethereum
mainnet = Mainnet
layer 1 = Layer 1
layer 2 = Layer 2
alternative layer 1 = alternatywny Layer 1
l1 = L1
l2 = L2
smart contract = inteligentny kontrakt
smart account = inteligentne konto
smart wallet = inteligentny portfel
cryptocurrency = kryptowaluta
cryptocurrencies = kryptowaluty
cryptocurrency mining = kopanie kryptowalut
crypto = krypto
coin = moneta
decentralized = zdecentralizowany
decentralization = decentralizacja
centralized = scentralizowany
centralization = centralizacja
decentralized money = zdecentralizowany pieniądz
decentralized finance = zdecentralizowane finanse
dapp = dApp
staking = staking
staking pool = pula stakingowa
staking providers = dostawcy stakingu
solo staking = staking solo
solo staker = solo staker
stake = stawka
staker = staker
stakers = stakerzy
restaking = restaking
liquid = płynny
liquid staking token = token płynnego stakingu
lsts = LST-y
centralized exchange staking = staking na scentralizowanej giełdzie
web3 = Web3
web2 = Web2
block = blok
block hash = hash bloku
block explorer = eksplorator bloków
block reward = nagroda za blok
block builder = budowniczy bloków
block proposer = proponujący blok
block producer = producent bloków
blockspace = przestrzeń blokowa
block space = przestrzeń blokowa
wallet = portfel
wallet app = aplikacja portfela
wallet provider = dostawca portfela
crypto wallet = portfel kryptowalutowy
cryptocurrency wallet = portfel na kryptowaluty
hot wallet = gorący portfel
cold wallet = zimny portfel
hardware wallet = portfel sprzętowy
custodial wallet = portfel powierniczy
non-custodial wallet = portfel niepowierniczy
custodian = powiernik
self-custody = samodzielne przechowywanie
self-custody wallet = portfel samodzielnego przechowywania
self-custodial = samodzielnie przechowywany
seed phrase = fraza seed
recovery phrase = fraza odzyskiwania
liquidity = płynność
liquidity pool = pula płynności
dex = DEX
cex = CEX
dex aggregator = agregator DEX
meta-aggregator = meta-agregator
amm = AMM
lp = LP
tvl = TVL
mev = MEV
decentralized exchange = zdecentralizowana giełda
centralized exchange = scentralizowana giełda
centralized services = scentralizowane usługi
order book = księga zleceń
market cap = kapitalizacja rynkowa
validator = walidator
validator node = węzeł walidatora
validator nodes = węzły walidatorów
validator client = klient walidatora
node = węzeł
node operator = operator węzła
peer = węzeł równorzędny
peer-to-peer = peer-to-peer
address = adres
addresses = adresy
gas = gaz
gas fee = opłata za gaz
fee = opłata
network = sieć
chain = łańcuch
optimistic rollup = Optimistic Rollup
zk rollup = ZK Rollup
rollup = rollup
sidechain = sidechain
sharding = sharding
payment channel = kanał płatności
lightning network = Lightning Network
blob = blob
onchain = on-chain
offchain = off-chain
onchain identity = tożsamość on-chain
onchain governance = zarządzanie on-chain
network governance = zarządzanie siecią
governance = zarządzanie
delegate = delegat
delegation = delegowanie
veto = weto
dao = DAO
defi = DeFi
nft = NFT
permissionless = niewymagający pozwoleń
trustless = niewymagający zaufania
censorship-resistant = odporny na cenzurę
asynchronous = asynchroniczny
open source = open source
ledger = rejestr
transaction = transakcja
transaction hash = hash transakcji
transaction throughput = przepustowość transakcji
transaction finality = finalność transakcji
finality = finalność
finality time = czas do finalności
settlement time = czas rozliczenia
token = token
tokens = tokeny
token allowance = limit wydatków tokena
allowance = limit wydatków
token approval = zatwierdzenie tokena
token swap = wymiana tokenów
token pair = para tokenów
token distribution = dystrybucja tokenów
intermediary token = token pośredni
swap = wymiana
trade route = trasa wymiany
private transaction routing = prywatny routing transakcji
slippage = poślizg cenowy
slippage tolerance = tolerancja poślizgu
price impact = wpływ na cenę
front-running = wyprzedzanie transakcji
sandwich attack = atak kanapkowy
51% attack = atak 51%
intent = intencja
solver = solver
batch auction = aukcja zbiorcza
otc = OTC
over the counter = obrót pozagiełdowy
stablecoin = stablecoin
stablecoin issuer = emitent stablecoina
peg = parytet
vault = skarbiec
death spiral = spirala śmierci
counterparty risk = ryzyko kontrahenta
collateral = zabezpieczenie
liquidation = likwidacja
yield farm = yield farm
memecoin = memecoin
mint = mintować
hash = hash
hashing function = funkcja skrótu
mining = kopanie
miner = górnik
consensus = konsensus
consensus mechanism = mechanizm konsensusu
consensus mechanisms = mechanizmy konsensusu
proof of work = Proof of Work
proof of stake = Proof of Stake
proof-of-stake = Proof of Stake
pos = PoS
slashing = slashing
slashed = ukarany slashingiem
attestation = poświadczenie
epoch = epoka
fork = fork
scalability = skalowalność
interoperability = interoperacyjność
composability = kompozycyjność
fungibility = wymienialność
credible neutrality = wiarygodna neutralność
public good = dobro publiczne
public = publiczny
equality of opportunity = równość szans
quadratic funding = finansowanie kwadratowe
allo protocol = Allo Protocol
retropgf = RetroPGF
security = bezpieczeństwo
fraud = oszustwo
fraud proof = dowód oszustwa
validity proof = dowód ważności
zero-knowledge = zero-knowledge
phishing = phishing
social engineering = inżynieria społeczna
password manager = menedżer haseł
two factor authentication = uwierzytelnianie dwuskładnikowe
2 factor authentication = uwierzytelnianie dwuskładnikowe
2fa = 2FA
red flag = sygnał ostrzegawczy
scam-token = fałszywy token
fomo = FOMO
hodl = HODL
digital signature = podpis cyfrowy
cryptography = kryptografia
encryption = szyfrowanie
supply = podaż
max supply = maksymalna podaż
circulating supply = podaż w obiegu
scarcity = rzadkość
scarce = rzadki
inflation = inflacja
halving = halving
gold standard = standard złota
central bank = bank centralny
commercial bank = bank komercyjny
monetary policy = polityka pieniężna
fiat = fiat
etf = ETF
spot etf = ETF spot
onramp = onramp
kyc = KYC
know-your-customer = poznaj swojego klienta
tps = TPS
bridge = most
ether = ether
eth = ETH
btc = BTC
gwei = gwei
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
multi-token standard = standard wielotokenowy
ethereum virtual machine = Wirtualna Maszyna Ethereum
satoshi nakamoto = Satoshi Nakamoto
intermediary = pośrednik
intermediaries = pośrednicy
value-extraction = przechwytywanie wartości
value-extractive = nastawiony na przechwytywanie wartości
value-creation = tworzenie wartości
app = aplikacja
app store = sklep z aplikacjami
primary name = primary name
standard record = rekord standardowy
custom record = rekord niestandardowy
.eth = .eth
yourname.eth = yourname.eth
```

Interface strings

- Keep an English app's button label in English and gloss it in Polish on first
  use, then use the English label alone afterwards:
  kliknij „Connect Wallet" (połącz portfel).
- **Do not translate a label the reader has to find on screen.** If the
  interface says *Approve*, the lesson says *Approve*, not *Zatwierdź*, no
  matter what the ```terms``` block pins for the concept. `primary name` is
  pinned to English for exactly this reason: it is a labelled setting in the
  ENS app.
- Keep `yourname.eth` as it is. It appears in the slide images, and a localised
  example would stop matching the picture next to it.

Fixed section headings

**Every slide and section heading must be translated. A heading left in English
passes every automated check.** The structural verifier compares section
*counts*, never section *text*, so an untranslated heading is invisible to it:
one agent in an earlier wave shipped all 45 of its slide headings in English and
cleared the whole gate. Read your own output for stray English before you
report back.

The 19 lessons are split across 5 independent agents, and the headings below
recur across the 9 handbooks. **Use exactly the Polish in this table. Do not
re-translate them per lesson, and do not improve on them.** Two agents each
picking a defensible synonym is what produced 5 divergent headings in one
Indonesian wave and 3 in Hindi, all repaired centrally afterwards.

| English heading | Polish | occurrences |
|---|---|---|
| `Introduction` | `Wprowadzenie` | 8 (`#` slides and `##` sections) |
| `Key Takeaways` | `Najważniejsze wnioski` | 8 |
| `Frequently Asked Questions` | `Najczęściej zadawane pytania` | 4 |
| `Walkthrough` | `Krok po kroku` | 3 |
| `Prerequisites` | `Wymagania wstępne` | 3 |
| `FAQ` | `FAQ` | 3 |

- **`FAQ` and `Frequently Asked Questions` stay distinct**, exactly as in the
  English source. Polish uses the English abbreviation *FAQ* natively and
  indeclinably, so the short/long pair survives translation at no cost;
  collapsing both onto the long Polish phrase would lengthen three headings for
  nothing.
- **A suffixed heading keeps the pinned form and appends its own suffix**,
  translated:

      ## Walkthrough: Using Revoke.cash   ->  ## Krok po kroku: korzystanie z Revoke.cash
      # Introduction to Quadratic Funding ->  # Wprowadzenie do finansowania kwadratowego

  Note the Polish colon takes no space before it and the word after it is
  lowercase.
- Keep the heading level (`#` vs `##` vs `###`) exactly as the source has it.
  Sentence case, no trailing period, no `**bold**`.
- **`Knowledge Check <n>` stays in English, with its original number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two
  checks.

Fixed quiz feedback openers

Almost every `> ℹ️` line opens with one of four English words, and 155 of them
are the same one. **Pin the opener; write the rest of the sentence freely.**
An earlier wave shipped two competing renderings of one opener and needed 24
feedback lines repaired centrally.

| English opener | Polish |
|---|---|
| `Correct!` | `Dobrze!` |
| `Try again!` | `Spróbuj jeszcze raz!` |
| `Right!` | `Zgadza się!` |
| `Incorrect` / `Incorrect.` | `Niepoprawnie.` |

*Dobrze!* and *Spróbuj jeszcze raz!* carry the warm second-person register of
the rest of the course; *Poprawnie!* and *Spróbuj ponownie!* are the
interface-message versions of the same words and read colder, so do not use
them. Keep the opener and the sentence after it on the same line, and keep the
whole feedback to one or two short sentences.

Headings and `/content` anchors

Polish headings slugify cleanly: `headingId` maps ł to l explicitly and strips
the remaining diacritics through NFD, so "Czym jest portfel kryptowalutowy?"
becomes `czym-jest-portfel-kryptowalutowy`. Unlike Japanese and Chinese, Polish
content pages get readable anchors, so write real headings and do not pad them
with English. Keep every `Knowledge Check <n>` heading in English and numbered
as in the source: it is an identifier the compiler reads, and the frontend
renders its own translated label.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | pl |
|---|---|
| `True` | **Prawda** |
| `False` | **Fałsz** |

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
