# Tamil style guide (translate-content)

Tamil is the third Indic-script language in this repo, after Hindi and Bengali,
and the second agglutinative one after Korean and Turkish. It inherits problems
from both families: a Brahmic abugida whose vowel signs have more than one legal
encoding, and case suffixes that fuse into the noun and change its spelling.

**Tamil also has one problem no other language in this repo has had at this
scale: the vendored ETHGlossary is dominated by purist coinages that no
Tamil-speaking crypto user says or writes.** `gas` is given as எரிவாயு, which
means combustible fuel gas. `smart contract` is திறன் ஒப்பந்தம், where திறன்
means *skill*. `wallet` is பணப்பை, a physical coin purse. `hot wallet` is a
five-word gloss. Fixing that is the main reason this file exists, and it is why
the ```terms``` block at the end overrides ETHGlossary far more often than the
French or German guides ever needed to.

About eleven independent agents will translate the glossary, the UI and the 19
lessons from this document. It is the only thing holding them to one Tamil.
Read it end to end before writing a single slide. The **agglutination** section
is not background: it is the one mistake that breaks tooltips invisibly, and it
is the mistake Tamil invites on every second sentence.

## Variety and register

- Write **modern written Tamil** (எழுத்துத் தமிழ்): the register of a
  well-edited Tamil news site or a good app UI. Tamil is sharply diglossic, and
  both extremes are wrong here.
  - **Not literary or classical.** No அஃது, யாதெனில், ஆயின், எனவேதான் piled up,
    no மேற்கூறிய, no என்பதனை, no ஆகிய strings of participles. An LLM drifts
    into this the moment a sentence gets formal, and one classical form makes a
    slide read like a school textbook from 1970.
  - **Not spoken Tamil** (பேச்சுத் தமிழ்). No இருக்கு, பண்றது, ஆகும்னு, வேணும்,
    -ங்க endings (செய்யுங்க), no romanised Tamil at all. The written form is
    இருக்கிறது, செய்வது, ஆகும் என்று, வேண்டும், செய்யுங்கள்.
- Keep the vocabulary everyday, not officialese. Write "பயன்படுத்துங்கள்", not
  "உபயோகப்படுத்தப்பட வேண்டும்"; "அதனால்", not "ஆகவே எனவே"; "பணம்", not
  "நாணய அமைப்பு" where "பணம்" will do. Bankless Academy is a peer teaching a
  peer, not a bank circular.
- Short sentences. Tamil is verb-final, so a long English sentence becomes an
  unreadable Tamil one: the reader waits to the end of the clause to learn what
  happened. **Split at the clause boundary** instead of chaining with
  "என்பதன் காரணமாக", "இருப்பினும் கூட", "ஆனபோதிலும்".
- Prefer a finite verb over a chain of participles. Two sentences beat one
  sentence with three -ஆல் / -து / -ற்கு links.
- Explorer (the site's word for its readers) -> **எக்ஸ்ப்ளோரர்**.

## Address: நீங்கள், always

Tamil has two second-person pronouns: நீ (singular, intimate or to a child) and
நீங்கள் (polite, and also the plural). **Use நீங்கள். Never நீ.**

The pronoun is not the warmth dial. நீ to an adult stranger is talking down, not
friendliness, and every product a Tamil reader already uses (Google in Tamil,
WhatsApp in Tamil, Paytm, the banking apps) says நீங்கள். The peer tone comes
from the *vocabulary*, not the pronoun.

- **Imperatives take the -உங்கள் form**: செய்யுங்கள், பாருங்கள், வையுங்கள்,
  படியுங்கள், சரிபாருங்கள், கிளிக் செய்யுங்கள், தேர்ந்தெடுங்கள், திறங்கள்,
  சேமியுங்கள், அனுப்புங்கள். செய், பார், வை are நீ forms. Never use them.
- **Do not use the -வும் form** (செய்யவும், தேர்ந்தெடுக்கவும்) even though Tamil
  software manuals use it constantly. It is a different register, it is the one
  place agents will silently diverge from each other, and mixing the two inside
  one lesson is visible. One form, everywhere: **-உங்கள்**.
- **Finite verbs take the -ஈர்கள் ending**: நீங்கள் அறிவீர்கள், நீங்கள்
  பார்ப்பீர்கள், நீங்கள் வைத்திருக்கிறீர்கள், நீங்கள் அனுப்பலாம். "நீங்கள்
  செய்கிறாய்" and "நீங்கள் செய்கிறான்" are wrong.
- **Drop நீங்கள் wherever the verb already carries it.** Tamil is pro-drop, and
  repeating நீங்கள் in every sentence is the clearest signature of machine
  translation. Write "உங்கள் `வாலெட்`டைத் திறங்கள்", not "நீங்கள் உங்கள்
  வாலெட்டைத் திறங்கள்". Keep நீங்கள் only where contrast matters: "இந்த விசை
  உங்களுக்கு மட்டுமே சொந்தம்."
- Keep **உங்கள்** (your) where ownership is the point, and drop it where English
  used "the": "உங்கள் `தனிப்பட்ட விசை`" but "`பிளாக்` உருவாகிறது".

### Gender: Tamil verbs agree, so plan around it

**Tamil has no grammatical gender on inanimate nouns**, so the German/Hindi
problem of a term's gender infecting its adjectives does not exist here. Gender
enters through two other doors, and both are avoidable.

**1. Third-person verb agreement.** Tamil verbs agree with the subject:
அவன் வந்தான் (m) / அவள் வந்தாள் (f) / அவர் வந்தார் (epicene, honorific) /
அது வந்தது (neuter). Naming any real person forces the choice.

    avoid:  சடோஷி நாகமோட்டோ ஒரு புதிய பணத்தை உருவாக்க விரும்பினான்.
    use:    `Satoshi Nakamoto` ஒரு புதிய பணத்தை உருவாக்க விரும்பினார்.

**Always use அவர் / -ஆர் for a named individual**, whatever the English source
says. The English lessons deliberately write "They wanted to create…" about
Satoshi; அவர் is the exact Tamil equivalent and is also the polite form, so
nothing is lost.

**2. Agent nouns.** Tamil has gendered -அன் / -அள் pairs and gender-free
-அர் / -ஆளர் / -பவர் / -நர் / -தாரர் forms. The gender-free set covers every
role these lessons need:

    avoid:  பயனாளன், முதலீட்டாளன், படைப்பாளன், கற்பவன், வாடிக்கையாளன்
    use:    பயனர், முதலீட்டாளர், படைப்பாளர், கற்பவர், வாடிக்கையாளர்
    use:    பங்கேற்பாளர், வழங்குநர், உரிமையாளர், ஆய்வாளர், பங்குதாரர்

The -அர் ending is the honorific-plural pressed into service as an epicene
singular, which is exactly how modern written Tamil handles this. Every pinned
agent noun below (ஸ்டேபிள்காயின் **வழங்குநர்**, ஸ்டேக்கிங் **வழங்குநர்கள்**,
இடைத்தரகர்) already uses it.

When no neutral noun fits, **address the reader directly with நீங்கள்** instead
of naming a role at all. That is free and it is usually better prose.

## Tamil script, transliteration, or Latin: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and **never mix buckets for the same term across two lessons.**

1. **Latin script, untouched.** Anything that is a name, a symbol or a code
   identifier. Products, networks and companies: Bitcoin, Ethereum, MetaMask,
   Uniswap, Optimism, Base, Coinbase, Velodrome, Rocket Pool, OpenSea,
   Revoke.cash, Lightning Network, Allo Protocol. People: Satoshi Nakamoto.
   Tickers and units: ETH, BTC, USDC, OP, Gwei, wei. Acronyms: API, DEX, CEX,
   AMM, LP, TVL, KYC, APR, APY, MEV, NFT, DAO, DeFi, Web3, Web2, L1, L2, PoW,
   PoS, TPS, ERC-20, ERC-721, ERC-1155, EIP, 2FA, FOMO, HODL, LSTs, RetroPGF,
   dApp. Domain-like strings: yourname.eth, .eth.

   Do **not** write பிட்காயின், எத்திரியம், மெட்டாமேஸ்க், யூனிஸ்வாப்,
   காயின்பேஸ், ஆப்டிமிசம் or வெப்2, even though `translation/ethglossary/ta.json`
   returns exactly those. The pins below override every one of them. A
   transliterated product name cannot be searched for, cannot be typed into a
   wallet, and is not what any Tamil crypto writer uses.

2. **Tamil-script transliteration.** A concept born in English that has no
   ordinary Tamil word, or has one that no Tamil-speaking crypto user says:
   பிளாக்செயின், வாலெட், பிளாக், டோக்கன், நோடு, ஸ்டேக்கிங், மைனிங், ரோலப்,
   ஹாஷ், கேஸ், ஸ்வாப், பிரிட்ஜ், ஸ்லிப்பேஜ், ஸ்டேபிள்காயின், ஆன்செயின்,
   கவர்னன்ஸ், கன்சென்சஸ், வேலிடேட்டர், சீட் ஃபிரேஸ், கிரிப்டோ,
   செல்ஃப்-கஸ்டடி, ஸ்கேலபிலிட்டி.

   **This is the default for crypto vocabulary.** Tamil ETHGlossary reaches for
   a coined native word far more often than the French, German or Hindi files
   do, and the results are unusable: தொகுதிச்சங்கிலி (blockchain),
   திறன் ஒப்பந்தம் (smart contract), நீர்மைத்தன்மை (liquidity),
   இணையத்தொடர்புள்ள பணப்பை (hot wallet). When in doubt between a coinage and a
   transliteration, take the transliteration.

3. **A real Tamil word.** The concept already exists in ordinary Tamil finance,
   civics or everyday speech, and the Tamil word teaches better than the loan:
   முகவரி (address), கட்டணம் (fee), பரிவர்த்தனை (transaction), பதிவேடு
   (ledger), பணப்புழக்கம் (liquidity), பணவீக்கம் (inflation), பற்றாக்குறை
   (scarcity), வழங்கல் (supply), மத்திய வங்கி (central bank), பணவியல் கொள்கை
   (monetary policy), தங்கத் தரநிலை (gold standard), பிணையம் (collateral),
   பெட்டகம் (vault), பாதுகாப்பு (security), மோசடி (fraud), பரவலாக்கம்
   (decentralization), பிரதிநிதி (delegate), வாய்ப்புச் சமத்துவம் (equality of
   opportunity), வெகுமதி (reward), ஏலம் (auction), கையொப்பம் (signature),
   அடையாளம் (identity), தணிக்கை (censorship), இடைத்தரகர் (intermediary).

**The tiebreaker between buckets 2 and 3 is what a Tamil-speaking crypto user
says out loud, not what is formally correct.** That is why the pins use
பிரிட்ஜ் and not பாலம், மைனர் and not சுரங்கர், ஃபோர்க் and not கவை, டோக்கன்
and not வில்லை. Put the rejected form in `keyword_forms` so prose that uses it
still resolves to a tooltip.

**Never mix scripts inside one word.** A Latin run has a space on both sides:
"Layer 2 தீர்வு", never "Layer 2தீர்வு" and never "லேயர் 2". The one exception
is a Tamil case suffix on a Latin stem, which takes a **hyphen**: Ethereum-இல்,
ETH-ஐ, DEX-கள். See below.

## Agglutination, case suffixes and the backtick boundary

This is the section that decides whether Tamil tooltips work at all.

Tamil glues its case suffixes straight onto the noun with no space, and **sandhi
changes the spelling at the join**: a hard consonant doubles, a final ம் becomes
த்து, a final உ drops. The glossary `keyword` is the display form a lesson
backticks, and the runtime index does an **exact string match** after NFC and
case folding. It does not strip suffixes. It cannot.

    dead:     `வாலெட்டில்` உங்கள் விசை இருக்கிறது.
    dead:     `பிளாக்செயினில்` பரிவர்த்தனைகள் பதிவாகின்றன.
    dead:     `பரவலாக்கத்தை` இதுதான் சாத்தியமாக்குகிறது.

Nothing about any of those looks wrong on screen. The reader sees the same
Tamil word either way. The only difference is that the tooltip silently never
appears, and `validate-content.js` fails the build on a backticked term that
resolves to nothing.

### The prefix test

**Write the inflected word out. If the pinned form survives as a literal prefix
of it, close the backtick after the pinned form and let the rest follow outside.
If the stem's last letter changed, you cannot split, and you must rephrase.**

That is the whole rule, and it is mechanical enough to check:

    node -e "const pin='பிளாக்செயின்', word='பிளாக்செயினில்';
      console.log(word.normalize('NFC').startsWith(pin.normalize('NFC')))"

Splits that pass the test, and are correct Tamil:

| write | renders as | why it works |
|---|---|---|
| `` `வாலெட்`டில் `` | வாலெட்டில் | the locative doubles ட, so the suffix starts with a consonant |
| `` `வாலெட்`டை `` | வாலெட்டை | accusative, same doubling |
| `` `வாலெட்`டுக்கு `` | வாலெட்டுக்கு | dative |
| `` `வாலெட்`டின் `` | வாலெட்டின் | genitive |
| `` `வாலெட்`டுகள் `` | வாலெட்டுகள் | plural |
| `` `பிளாக்`கில் `` | பிளாக்கில் | ditto for a க்-final stem |
| `` `முகவரி`யை `` | முகவரியை | vowel-final stem takes a ய் glide, stem untouched |
| `` `பரிவர்த்தனை`யில் `` | பரிவர்த்தனையில் | ditto |
| `` `டோக்கன்`கள் `` | டோக்கன்கள் | the plural -கள் starts with a consonant |
| `` `பிளாக்செயின்`கள் `` | பிளாக்செயின்கள் | ditto |

Splits that **fail** the test. There is no legal place to put the closing
backtick, so these must be rephrased:

| you want | surface form | what changed |
|---|---|---|
| blockchain + locative | பிளாக்செயி**னில்** | ன் was absorbed into னி |
| token + accusative | டோக்க**னை** | ன் absorbed |
| node + locative | நோ**ட்டில்** | the final உ dropped and ட doubled |
| decentralization + accusative | பரவலாக்க**த்தை** | ம் became த்து |
| liquidity + genitive | பணப்புழக்க**த்தின்** | ம் became த்து |
| validator + dative | வேலிடேட்ட**ருக்கு** | ர் absorbed into ரு |

So: **stems ending in ன் ண் ம் ர் ல் ள், and stems ending in a bare உ, cannot
carry a vowel-initial suffix outside the backticks.** Stems ending in a hard
consonant (க் ச் ட் த் ப் ற்) and stems ending in a vowel sign can.

### Fixes, in order of preference

1. **Split, when the prefix test passes.** It is free and it keeps the Tamil
   natural. This is the same technique ko, ja and zh already use in this repo
   (`` `지갑`에 ``, `` `暗号資産`と ``), so the pattern is proven.
2. **Rephrase so the term stands in the bare nominative.** Tamil gives you more
   bare-noun slots than English does, and they are all idiomatic:
   - **Subject**: `` `வேலிடேட்டர்` புதிய பிளாக்கை முன்மொழிகிறார். ``
   - **Definition with என்பது**: `` `பிளாக்செயின்` என்பது ஒரு பகிரப்பட்ட
     பதிவேடு. `` This is the single most useful pattern in the guide: it turns
     any "X is a Y" slide sentence into a bare-nominative sentence.
   - **Predicate nominal**: `` இது ஒரு `ஸ்மார்ட் ஒப்பந்தம்`. ``
   - **Before a postposition word**, which is a separate word in Tamil:
     `` `வாலெட்` மூலம் ``, `` `பிளாக்செயின்` வழியாக ``, `` `டோக்கன்`
     இல்லாமல் ``, `` `கேஸ் கட்டணம்` போன்ற ``, `` `நோடு` என்ற ``.
   - **Bare accusative.** Tamil lets an inanimate object go unmarked:
     `` `டோக்கன்` அனுப்புங்கள் `` is correct written Tamil and needs no -ஐ. Use
     this constantly; it is shorter *and* it keeps the term bare.
   - **Compound head**: `` `வாலெட்` ஆப் ``, `` `பிளாக்` ஹாஷ் ``.
   - **After a numeral**: `` இரண்டு `நோடு` ``.
   - **Drop the plural marker.** Tamil does not need -கள் when the count is
     already clear: `` பல `வேலிடேட்டர்` `` reads fine.
3. **Move the backticks off that mention.** Backticks are required nowhere.
   `translate-content.js`'s verifier checks images, links, quiz option count,
   `[x]` position, `> ℹ️` count, `<details>` and heading level, and **never
   counts backticks**. If a sentence genuinely reads best with a fused suffix,
   write it fused with no backticks and backtick a bare mention elsewhere in the
   lesson. **A term that appears five times only needs one tooltip.**
4. **Add the inflected form to `keyword_forms`** in
   `translation/keywords/ta/keywords.json`. Do this for the handful of forms
   that genuinely recur, not the whole paradigm.

### The paradigm worth knowing

Three stem classes cover almost every pinned noun:

| case | suffix | வாலெட் (hard consonant) | முகவரி (vowel) | பரவலாக்கம் (-ம்) |
|---|---|---|---|---|
| nominative | | வாலெட் | முகவரி | பரவலாக்கம் |
| accusative | -ஐ | வாலெட்**டை** | முகவரி**யை** | பரவலாக்க**த்தை** |
| dative | -உக்கு | வாலெட்**டுக்கு** | முகவரி**க்கு** | பரவலாக்க**த்துக்கு** |
| genitive | -இன் | வாலெட்**டின்** | முகவரி**யின்** | பரவலாக்க**த்தின்** |
| instrumental | -ஆல் | வாலெட்**டால்** | முகவரி**யால்** | பரவலாக்க**த்தால்** |
| locative | -இல் | வாலெட்**டில்** | முகவரி**யில்** | பரவலாக்க**த்தில்** |
| ablative | -இலிருந்து | வாலெட்**டிலிருந்து** | முகவரி**யிலிருந்து** | பரவலாக்க**த்திலிருந்து** |
| plural | -கள் | வாலெட்**டுகள்** | முகவரி**கள்** | பரவலாக்க**ங்கள்** |
| **splittable?** | | **yes** | **yes** | **no** |

### Latin stems take a hyphen

A Latin-script term keeps its spelling and the suffix hangs off a hyphen. This
is the standard Tamil convention and it keeps the Latin run intact, so the term
still matches:

    Ethereum-இல்    ETH-ஐ    Base-இல்    DEX-கள்    Bitcoin-ஐ    L2-இல்
    `ETH`-ஐ அனுப்புங்கள்.

Never Ethereumஇல், and never "Ethereum இல்" with a space.

### Two things that look fine and are not

- **Never put the suffix inside the backticks.** `` `வாலெட்டில்` `` is a dead
  tooltip; `` `வாலெட்`டில் `` is a live one. They render identically.
- **Never bold a backticked term that a suffix follows.**
  `` **`வாலெட்`**டில் `` **fails the build**: the closing `**` sits after a
  backtick and before a Tamil letter, so CommonMark cannot close it and a
  literal `**` ships to the reader. (Verified with `findBrokenEmphasis`.)
  `` `வாலெட்`டில் `` with no bold is fine, and `` **வாலெட்**டில் `` with no
  backticks is fine. It is only the combination that breaks.

## The glossary keyword rule

`translation/keywords/ta/keywords.json` is keyed by the **English** term. The
`keyword` value is the display form a lesson backticks and the runtime index
matches on, so:

- **`keyword` must be the citation form**: the bare, uninflected noun, exactly
  as it appears in the ```terms``` block below. Never an accusative, never a
  locative, never with -கள் attached.
- **Inflected forms go in `keyword_forms`**, plural forms in `keyword_plural`.
- **ETHGlossary's `contexts.prose` field is not the citation form for Tamil.**
  **302 of its 541 Tamil entries (56%) differ from the citation form**, because
  the prose field carries a case suffix. What it will hand you:

  | English | `term` (citation, use this) | `contexts.prose.term` (never use) |
  |---|---|---|
  | blockchain | தொகுதிச்சங்கிலி | தொகுதிச்சங்கிலி**யில்** |
  | wallet | பணப்பை | பணப்பை**யை** |
  | address | முகவரி | முகவரி**யை** |
  | transaction | பரிவர்த்தனை | பரிவர்த்தனை**யை** |
  | private key | தனிப்பட்ட திறவுகோல் | தனிப்பட்ட திறவுகோ**லை** |
  | liquidity | நீர்மைத்தன்மை | நீர்மைத்தன்மை**யை** |
  | vault | பெட்டகம் | பெட்டக**த்தில்** |
  | mint | அச்சிடு | அச்சிட**லாம்** |
  | liquidation | கலைப்பு | **கலைக்கப்படுகிறது** |

  The last two are not even nouns. **Read `term`, or `contexts.heading.term` /
  `contexts.ui.term`, which are the bare citation form. Never read
  `contexts.prose.term`.** The pins below were already reviewed against the
  citation form, so they are safe; the temptation comes from going back to the
  vendored file for something the pins do not cover.
- **A pinned term is not automatically a backtickable one.** The ```terms```
  block fixes how a word is *translated* wherever it appears; the glossary
  decides whether it gets a tooltip. `network`, `fee`, `supply`, `governance`
  and `yield` are pinned for prose consistency and have **no English glossary
  entry**, so backticking them is a dead tooltip and a build failure. Check
  `translation/keywords/en/keywords.json` before adding backticks. Every one of
  the 233 terms the English lessons actually backtick does have an entry.

## Spelling and encoding: four ways to ship an invisible bug

Everything in this section renders identically to its wrong twin and compares
unequal. There is nothing to see in a screenshot and nothing in a diff.

### 1. NFC only

Three Tamil vowel signs have **two legal encodings** and are canonical
decompositions, so they are pixel-identical and compare unequal:

    ொ  U+0BCA  =  ெ U+0BC6 + ா U+0BBE
    ோ  U+0BCB  =  ே U+0BC7 + ா U+0BBE
    ௌ  U+0BCC  =  ெ U+0BC6 + ௗ U+0BD7

`.normalize('NFC')` composes them, so it is both the test and the fix. This
matters for words you will type constantly: ரோலப், கோல்ட், நோடு, ஃபோர்க்,
ஸ்டோர், சோலோ, சோஷியல், ஓபன், நோக்கம், டோக்கன், மோசடி. Some Tamil input methods
and some copy-paste sources emit the decomposed form.

The vendored `translation/ethglossary/ta.json` is NFC-clean, unlike the Bengali
file, so the risk here is what **you** type, not what you copy from it.

`normalizeKeyword` in `content-lib.js` NFC-normalizes both sides, so the tooltip
index survives a decomposed form. **`lang-tools merge` does not**: its style-pin
check compares with a bare `.toLowerCase()`, so a decomposed pin against a
composed glossary entry is reported as `style guide pins "X" but entry reads
"X"` with two identical-looking strings. Do not spend an hour on that message.
Check first:

    node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');
      const bad=[];
      if (s!==s.normalize('NFC')) bad.push('NOT NFC');
      if (/[\u200C\u200D]/.test(s)) bad.push('ZWJ/ZWNJ');
      if (/[௦-௲]/.test(s)) bad.push('TAMIL DIGITS/NUMERALS');
      if (/\u2014/.test(s)) bad.push('EM DASH');
      console.log(bad.length?bad.join(', '):'ok')" <file>

### 2. No ZWJ, no ZWNJ, ever

U+200D (ZWJ) and U+200C (ZWNJ) are invisible, neither is removed by NFC, and
neither is removed by `normalizeKeyword`. Both are permanent silent mismatches.
Tamil does not need either: the script is linear, it has no stacked conjuncts,
and every cluster in this guide is expressible as consonant + புள்ளி ் +
consonant. The vendored Tamil file contains **zero** of them; keep it that way
in every file we write, including `keywords.json` and the website JSON.

If one turns up in your draft, delete it and re-check that the word still
renders the same.

### 3. Grantha letters are required, not optional

Tamil has five borrowed Grantha letters that exist precisely to write loanwords:
**ஜ ஷ ஸ ஹ** and the ligature **க்ஷ** (plus ஶ, used almost only in ஶ்ரீ). You
will need them on nearly every transliterated pin.

    ஸ்  ஸ்டேக்கிங், ஸ்வாப், ஸ்மார்ட், ஸ்லிப்பேஜ், கன்சென்சஸ், கேஸ்
    ஷ்  ஷார்டிங், ஸ்லாஷிங், ஃபிஷிங், அட்டெஸ்டேஷன், என்க்ரிப்ஷன்
    ஜ்  பிரிட்ஜ், ஃபன்ஜிபிலிட்டி, ஸ்லிப்பேஜ், மேனேஜர்
    ஹ்  ஹாஷ், ஹாட், ஹார்ட்வேர், ஹால்விங்

**Do not "purify" them.** A purist Tamil that avoids Grantha writes சுவாப் for
swap and இஸ்டேக்கிங் for staking. That is a different orthographic tradition,
it is not what Tamil tech writing uses, and half a wave of agents doing it while
the other half does not is exactly the drift this file exists to stop.

The **ஆய்தம் ஃ** plus ப writes /f/: **ஃப**. Use it in ஃபிஷிங், ஃபியட்,
ஃபோர்க், ஃபிரண்ட்-ரன்னிங், ஆஃப்செயின், செல்ஃப்-கஸ்டடி, ஃபன்ஜிபிலிட்டி,
புரூஃப் ஆஃப் ஸ்டேக். Never plain ப for an English f.

### 4. One spelling per term, pinned

Tamil transliteration of English has real variation, and no gate can see two
agents spelling one word two ways. The rules below produce the pins; where a pin
appears to break one of them, **the pin still wins**.

- **Initial /s/ + consonant keeps ஸ் with no added vowel**: ஸ்டேக், ஸ்மார்ட்,
  ஸ்வாப், ஸ்பாட், ஸ்லிப்பேஜ், ஸ்கேம், ஸ்டேபிள்காயின், ஸ்கேலபிலிட்டி.
  Not இஸ்டேக், not சுவாப்.
- **Initial stop + l/r takes an epenthetic vowel**: பிளாக், கிரிப்டோ,
  பிரிட்ஜ், புரூஃப், டிரேட், டிரைலெம்மா, பிரைமரி, புரொபோசர், ஃபிரண்ட்.
  Not ப்ளாக், not க்ரிப்டோ, not ப்ரூஃப்.
- **A voiceless stop between vowels must be doubled**, because a single
  க ச ட த ப between vowels is read as /g dʒ ḍ ð b/: டோக்கன் (not டோகன்),
  ஸ்டேக்கிங், ரிக்கவரி, வேலிடேட்டர், ஸ்லிப்பேஜ், அக்கவுண்ட், வீட்டோ.
- **A final voiced stop takes -உ, a final voiceless stop does not**:
  நோடு (node), ரெக்கார்டு (record), but வாலெட் (wallet), பிளாக் (block),
  ரோலப் (rollup).
- English /v/ and /w/ are both **வ**: வாலெட், Web -> வெப் (though `Web3` and
  `Web2` stay Latin).

Where two spellings are both defensible, the block below wins and the loser goes
into `keyword_forms` so prose written the other way still resolves:

| use | not | note |
|---|---|---|
| வாலெட் | வாலட், வாலட்டு | ETHGlossary's alias is வாலட் |
| பிளாக்செயின் | ப்ளாக்செயின், பிளாக்செய்ன் | one word, no space |
| கிரிப்டோ | க்ரிப்டோ, கிரிப்ட்டோ | |
| ஸ்டேக்கிங் | ஸ்டேகிங், இஸ்டேக்கிங் | doubled க்க |
| வேலிடேட்டர் | வாலிடேட்டர், வேலிடேட்டார் | |
| கன்சென்சஸ் | கான்சென்சஸ், கன்செண்சஸ் | ன், not ண் |
| கேஸ் | காஸ், கியாஸ் | |
| புரூஃப் | ப்ரூஃப், புரூப் | keep the ஃப |

### Confusable letters

These pairs are one keystroke apart, Tamil pronounces several of them
identically in most positions, and a single one of them is a dead tooltip.
**Copy the pins, do not retype them.**

- **ன vs ண vs ந** the biggest one. டோக்**ன்**, பிளாக்செயி**ன்**, கன்செ**ன்**சஸ்
  all take ன. மி**ண்**ட், சா**ண்**ட்விச், அக்கவு**ண்**ட், பேமெ**ண்**ட் take ண.
- **ர vs ற**, **ல vs ள vs ழ** near-identical in speech for many readers.
  வேலிடேட்டர், பணப்புழக்கம் (ழ), வழங்கல் (ழ), பாதுகாப்பு.
- **Vowel length**: அ/ஆ, இ/ஈ, உ/ஊ, எ/ஏ, ஒ/ஓ. ஸ்டேக் not ஸ்டெக்; ஈதர் not இதர்;
  நோடு not நொடு; மைனர் not மயினர். Length is invisible to the ear in a loanword
  and fatal to an exact match.
- **The புள்ளி ்** present or absent. வாலெட் ends with ட் (with புள்ளி), not ட.
- **ஸ vs ச** ஸ்வாப் and ஸ்டேக் take ஸ; சாண்ட்விச், சேனல், சோலோ take ச.

## Length: the estimator under-measures Tamil badly

`displayWidth` in `content-lib.js` is what gates a slide at
`MAX_SLIDE_LINES = 22`. Its `WIDE` regex covers CJK, kana, Hangul and fullwidth
forms only, so Tamil counts 1 per codepoint. But it also **skips every `\p{M}`
codepoint**, and Tamil vowel signs (ா ி ீ ு ூ ெ ே ை ொ ோ ௌ) and the புள்ளி are
all combining marks. Measured on the 507 Tamil example sentences in the vendored
glossary:

| | measured |
|---|---|
| Tamil codepoints that are combining marks, so dropped by the estimator | **36.0%** |
| Tamil term vs its English key, 541 vendored terms, codepoints | **1.22x** |
| Tamil term vs its English key, `displayWidth` | **0.76x** |
| Tamil term vs its English key, rendered grapheme clusters | **0.76x** |

So `displayWidth` measures rendered clusters, which is the right thing to count,
but a Tamil cluster is **at least as wide as a Latin character and often
wider**: consonant + ௌ, consonant + ா, and any புள்ளி cluster all take more
horizontal room than one Latin letter. The estimator therefore reports about
three quarters of the true width, and waves through slides the reader still has
to scroll.

**Target 18 estimated lines, not 22.** Treat 22 as the point at which the build
fails, not as the budget. The gate only fires when the translation is both over
22 **and** longer than English, so a bloated slide whose English source was
already long can slip through entirely; judge it yourself.

**Quiz options: keep raw `.length` at or under 70**, the same number as English.
Nothing in the repo enforces this, so it is on you. Tamil runs 1.22x English in
codepoints, so an option that reads short can still overflow the answer box:
count it. In rendered clusters, 70 codepoints is about 45. Move any nuance into
the `> ℹ️` feedback line.

Compression that works in Tamil, in order of how much it buys:

1. **Drop the pronoun.** நீங்கள் and அது are already in the verb.
2. **Drop the copula.** Tamil equational sentences need no verb at all:
   "`பிளாக்செயின்` ஒரு பகிரப்பட்ட பதிவேடு." is a complete sentence.
3. **Use -லாம் instead of முடியும் periphrasis**: அனுப்பலாம், not
   அனுப்ப முடியும். Saves two clusters every time.
4. **Cut -ஆக இருக்கிறது** to -ஆகும், or to nothing.
5. **Use the bare accusative** on inanimates. Shorter, and it keeps the term
   bare for the tooltip. Two wins for one edit.
6. **Cut relative clauses in -ற/-ந்த into a second sentence** rather than
   stacking them before the noun.
7. **Prefer the short pinned loan over the descriptive gloss**: ஹாட் வாலெட்,
   not இணையத்தொடர்புள்ள பணப்பை; DEX, not பரவலாக்கப்பட்ட எக்ஸ்சேஞ்ச், once the
   full form has appeared once.
8. **Drop ஒரு** where English had no article.
9. **Drop -கள்** where the count is already clear.

## Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build on
any `**` or `_` that survives as literal text. Tamil has word spaces, so it is
safer than Japanese, but the suffixes glue on and that reintroduces exactly the
CJK failure. **Every row below was run through `findBrokenEmphasis` from
`content-lib.js`, both columns.**

    breaks:  **மதிப்பு:**நேரம் மிச்சம்.          ->  **மதிப்பு**: நேரம் மிச்சம்.
    breaks:  இது **வாலெட்.**அடுத்த படி.          ->  இது **வாலெட்**. அடுத்த படி.
    breaks:  **(தனிப்பட்ட விசை)**ரகசியமாக வையுங்கள். ->  (**தனிப்பட்ட விசை**) ரகசியமாக வையுங்கள்.
    breaks:  கட்டணம் **0.05%**க்கும் குறைவு.      ->  கட்டணம் **0.05%** க்கும் குறைவு.
    breaks:  **முக்கியம்!**யாரிடமும் சொல்லாதீர்கள். ->  **முக்கியம்**! யாரிடமும் சொல்லாதீர்கள்.
    breaks:  **`வாலெட்`**டில் விசை இருக்கிறது.     ->  `வாலெட்`டில் விசை இருக்கிறது.
    breaks:  பிளாக்_செயின்_ என்ற சொல்.            ->  பிளாக்*செயின்* என்ற சொல்.
    breaks:  _வாலெட்_டில் விசை இருக்கிறது.        ->  *வாலெட்*டில் விசை இருக்கிறது.

Rules:

- Never let a closing `**` sit on punctuation with a Tamil letter jammed against
  it. **A space after the closing marker is enough**, and Tamil has spaces, so
  this is easy. Keeping the punctuation outside (`**கேள்வி**:`) passes in every
  case, so just do that.
- Keep the full stop outside the bold: `**வாலெட்**.`
- **Never use `_…_` where either marker touches a Tamil letter.** `_` cannot
  open or close intraword and Tamil letters count as word characters. Use
  `*…*`, which has no intraword restriction: `*வாலெட்*டில்` is fine.
- **Never bold a backticked term that a Tamil suffix follows** (see the
  agglutination section). `` **`வாலெட்`**டில் `` breaks;
  `` `வாலெட்`டில் `` and `` **வாலெட்**டில் `` both pass.
- Bold the link *text*, not the whole link:
  `[**Ethereum**](https://ethereum.org)`.

Verify a finished body file yourself:

    node --input-type=module -e "const {findBrokenEmphasis}=await import('./content-lib.js');
      console.log(findBrokenEmphasis(require('fs').readFileSync(process.argv[1],'utf8')))" <file>

## Numbers: Latin digits, international scale, always

- **Latin digits only. Never Tamil digits ௦௧௨௩௪௫௬௭௮௯**, and never the Tamil
  numeral signs ௰ ௱ ௲. They are archaic, no Tamil reader uses them for prices or
  block counts, every wallet and block explorer the reader will open uses Latin
  digits, and the lesson `![](…)` images are in Latin digits too.
- **International scale words, transliterated: மில்லியன், பில்லியன்,
  ட்ரில்லியன். Do NOT convert to லட்சம் or கோடி.** Tamil uses லட்சம் and கோடி
  constantly, so this is a live risk, and there are three reasons in order of
  weight: the figures in these lessons are canonical and the reader will meet
  them written the same way everywhere ("21 மில்லியன் BTC", not "2.1 கோடி BTC");
  converting requires arithmetic that no verifier in this repo can check, so a
  slip ships as a fact; and the slide text would stop matching the number
  printed in its image.
- **International comma grouping**, matching the English source: 21,000,000 and
  120,000. Not the South Asian 2,10,00,000.
- Decimal point is a period: 0.0002 ETH, 0.05%.
- Percent sign directly after the number, no space: **51%**. Spell it out only
  when the sentence needs a word: "51 சதவீதம்".
- Currency and years pass through as in English: $100, 2009, 2025.

## Typography

- **End declarative sentences with a full stop `.`** Tamil uses ordinary Latin
  punctuation. **There is no danda.** Do not carry `।` over from the Hindi or
  Bengali guides: "இது Ethereum-இல் இயங்குகிறது." No space before, one after.
- Questions take `?`, exclamations take `!`.
- **No full stop on a heading**, on a short list fragment, or on a quiz option.
  Feedback lines under `> ℹ️` are full sentences and do take one.
- Comma is `,`, colon is `:`, semicolon is `;`. Tamil has no full-width
  punctuation, unlike ja and zh.
- Quotation marks are “ ” with ‘ ’ nested.
- **Never use the em dash U+2014.** Use a comma, a colon, parentheses, or a
  second sentence. No en dash for ranges either: write "2020 முதல் 2024 வரை".
- Hyphens are part of the spelling of several pins and must be kept exactly:
  பியர்-டு-பியர், செல்ஃப்-கஸ்டடி, நான்-கஸ்டோடியல், ஃபிரண்ட்-ரன்னிங்,
  டூ-ஃபாக்டர், ஜீரோ-நாலெட்ஜ், தணிக்கை-எதிர்ப்பு, மெட்டா-அக்ரிகேட்டர்,
  மல்டி-டோக்கன்.
- One space between a Latin run and the Tamil around it, **except** a case
  suffix on a Latin stem, which takes a hyphen and no space: Ethereum-இல்.
- No `build-translation.sh` typography transform exists for Tamil (unlike fr,
  cs and pl), so nothing will clean up after you. What you write ships.

## Interface strings

Keep an English app's button label in English and gloss it in Tamil on first
use, then use the English label alone afterwards:

    “Connect Wallet” (`வாலெட்`டை இணைக்க) பொத்தானைக் கிளிக் செய்யுங்கள்.

Same for “Swap”, “Approve”, “Confirm”, “Sign”. The reader is looking at an
English UI while reading the slide; translating the label makes the step
impossible to follow.

## Headings and `/content` anchors

Tamil headings slugify to nothing in the `/content` anchor generator, so those
pages fall back to `section-N` anchors. `headingId` in
`src/utils/lessonContent.ts` requires the slug to match `/^[a-z0-9-]+$/` after
NFD and mark-stripping, and Tamil letters never survive that. **This is expected
and matches ja, zh, hi and bn. Do not add Latin text to a heading to work around
it.**

## Fixed section headings

The 19 lessons are split across independent agents, and these headings recur
across many of them. **Use exactly the Tamil in this table. Do not re-translate
them per lesson, and do not improve on them.** Two agents each picking a
defensible synonym is what shipped three renderings of `Key Takeaways` in German
and four of `Try again!` in Japanese, all repaired centrally afterwards. Nothing
in the pipeline compares heading text.

| English heading | Tamil | occurrences |
|---|---|---|
| `Key Takeaways` | `முக்கியக் குறிப்புகள்` | 7 |
| `Introduction` | `அறிமுகம்` | 6 |
| `Walkthrough` | `படிப்படியான வழிகாட்டி` | 3 |
| `FAQ` | `பொதுவான கேள்விகள்` | 3 |
| `Frequently Asked Questions` | `அடிக்கடி கேட்கப்படும் கேள்விகள்` | 3 |
| `Prerequisites` | `முன் தேவைகள்` | 2 |
| `Choosing a DEX` | `DEX தேர்ந்தெடுத்தல்` | 2 |
| `Knowledge Check <n>` | **unchanged: English, same number** | ~90 |

- **`FAQ` and `Frequently Asked Questions` stay distinct** where both appear,
  exactly as in the English source. `FAQ` is translated rather than left in
  Latin: it is a reader-facing heading with a settled Tamil equivalent, and a
  lone Latin heading in the middle of a Tamil page reads as unfinished work. The
  cost is that its `/content` anchor becomes `section-N`, which is the same
  trade every other Tamil heading already makes.
- **A suffixed heading keeps the pinned rendering and translates only what
  follows the colon**: `## Walkthrough: Using Revoke.cash` becomes
  `## படிப்படியான வழிகாட்டி: Revoke.cash பயன்படுத்துதல்`.
- **Keep the heading level exactly as the source has it** (`#` vs `##` vs
  `###`). No trailing full stop, no `**bold**`.
- **`Knowledge Check <n>` stays in English, with its original number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two.
- **Every other slide heading must be translated.** In an earlier wave one agent
  left all 45 of its slide headings in English and every automated check passed:
  the structural verifier compares the heading *level*, never the text.
  `validate-content.js` now warns per file when more than half the non-Knowledge
  Check headings are identical to English.

## Fixed quiz-feedback openers

Almost every `> ℹ️` line opens with one of a handful of English interjections.
**Pin the opener; write the rest of the sentence freely.**

| English opener | occurrences | Tamil |
|---|---|---|
| `Try again!` | 10 lessons | **மீண்டும் முயற்சியுங்கள்!** |
| `Correct!` | 11 lessons | **சரியானது!** |
| `Correct.` | 2 | **சரியானது.** |
| `Right!` | 6 | **சரிதான்!** |
| `Incorrect,` / `Incorrect.` | 4 | **தவறு,** / **தவறு.** |
| `True,` (opening a feedback sentence) | 3 | **உண்மைதான்,** |

Keep the punctuation the English used, keep the opener as its own clause
followed by one short explanatory sentence, and keep the whole feedback to one
or two short sentences: it renders as a toast overlay, which gets intrusive on
mobile.

`சரி!` on its own is deliberately **not** used for `Correct!`: alone it reads as
"OK", not as a verdict, and it is one letter from the `True` option label.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the bare
words `True` and `False` (13 of each across the lessons). Render them as exactly:

| English option | Tamil |
|---|---|
| `True` | **உண்மை** |
| `False` | **பொய்** |

உண்மை / பொய் is the pair Tamil uses for the truth value of a statement
("பின்வரும் கூற்று உண்மையா பொய்யா?"), so it reads as a labelled choice rather
than as a comment on the learner.

**Do not re-translate these per lesson.** The 19 lessons are split across five
independent agents, so an unpinned two-word string drifts: before this section
existed, German shipped both *Wahr* and *Richtig*, Hindi both गलत and ग़लत (a
nukta apart, visually near-identical), Chinese both 正确 and 对, and Russian
three different pairs across five agents. None of it was visible to the
structural verifier, which checks that the option COUNT and the `[x]` index
match English and never looks at the option text.

Two constraints on the choice, both binding here:

1. **The label must not collide with a quiz-feedback opener.** The correct
   opener is **சரியானது!** and the incorrect opener is **தவறு**. That is
   exactly why the obvious school-exam pair **சரி / தவறு is rejected**: தவறு is
   already the `Incorrect` opener, so a learner clicking "தவறு" would get a
   toast opening with the same word, which reads as an echo of the option rather
   than as a verdict. உண்மை / பொய் collides with neither. (This is the same
   reason Russian uses Правда/Неправда and not Верно/Неверно, and why Indonesian
   uses Tepat! as its opener rather than Benar!.)
2. **Keep the `[x]` on the same option index as English.** Only the option TEXT
   changes; users have answer numbers saved in localStorage.

## Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin, but for
Tamil it has four failure modes, all confirmed in the vendored file.

**1. Coinages that are simply wrong for the crypto sense.**

| English | ETHGlossary Tamil | what it actually means | pinned instead |
|---|---|---|---|
| gas | எரிவாயு | combustible fuel gas | **கேஸ்** |
| smart contract | திறன் ஒப்பந்தம் | *skill* contract | **ஸ்மார்ட் ஒப்பந்தம்** |
| liquidity | நீர்மைத்தன்மை | physical liquidness | **பணப்புழக்கம்** |
| private key | தனிப்பட்ட திறவுகோல் | a physical door key | **தனிப்பட்ட விசை** |
| wallet | பணப்பை | a physical coin purse | **வாலெட்** |
| mint | அச்சிடு | to print | **மிண்ட்** |
| fork | கவை | a tree branch, or cutlery | **ஃபோர்க்** |
| miner | சுரங்கர் | someone who digs ore | **மைனர்** |
| epoch | சகாப்தம் | a historical era | **எபாக்** |
| slashing | வெட்டுதல் | cutting | **ஸ்லாஷிங்** |
| token | வில்லை | a small physical disc | **டோக்கன்** |

**2. Terms that are ambiguous or actively misleading in prose.**

- `block = தொகுதி` is also the everyday word for an electoral *constituency* and
  for a generic "unit". Pinned to **பிளாக்**.
- `permissionless = அனுமதியற்ற` reads as *unauthorized*, the opposite of the
  concept. Pinned to **அனுமதி தேவையில்லாத** (its own alias), the same fix Hindi
  needed for `trustless = विश्वासहीन`.
- **`collateral` and `network` are both பிணையம்** in the vendored file. Two
  different glossary entries sharing one display form means one term's tooltip
  shows the other's definition, exactly the German *Sicherheit* collision.
  `collateral` keeps **பிணையம்**; `network` is pinned to **நெட்வொர்க்**.
- `public key = பொது விசை` but `private key = தனிப்பட்ட திறவுகோல்`: the file
  builds the pair on two different nouns, so the private/public contrast the
  slides depend on disappears. Both pinned on **விசை**, which is the standard
  Tamil computing word for a key (விசைப்பலகை = keyboard) and therefore carries
  the right metaphor.

**3. Descriptive glosses too long for a slide.**

`hot wallet = இணையத்தொடர்புள்ள பணப்பை` and
`cold wallet = இணையத்தொடர்பற்ற பணப்பை` are five-word definitions standing in
for two-word terms, and they appear on crowded slides (hot wallet in 5 lessons).
Pinned to **ஹாட் வாலெட்** and **கோல்ட் வாலெட்**, which also keeps them parallel
with ஹார்ட்வேர் வாலெட் and ஸ்மார்ட் வாலெட்.

**4. Transliterated brand names and Tamil digits.** `bitcoin = பிட்காயின்`,
`ethereum = எத்திரியம்`, `metamask = மெட்டாமேஸ்க்`, `uniswap = யூனிஸ்வாப்`,
`coinbase = காயின்பேஸ்`, `optimism = ஆப்டிமிசம்`, `web2 = வெப்2`. All
overridden to Latin, per bucket 1.

Overrides where the Tamil word is not wrong, only wrong for this audience:
பாலம் -> பிரிட்ஜ், ஒருமித்த கருத்து -> கன்சென்சஸ், சான்றளிப்பு ->
அட்டெஸ்டேஷன், சுய-பாதுகாப்பு -> செல்ஃப்-கஸ்டடி, சரிபார்ப்பான் -> வேலிடேட்டர்,
கணு -> நோடு, விதைச் சொற்றொடர் -> சீட் ஃபிரேஸ், சக-முனைய -> பியர்-டு-பியர்,
சங்கிலிசார் -> ஆன்செயின், புறச்சங்கிலி -> ஆஃப்செயின், பக்கச்சங்கிலி ->
சைட்செயின், தரவுத் திரளை -> பிளாப், ஆளுகை -> கவர்னன்ஸ், பூஜ்ய-அறிவு ->
ஜீரோ-நாலெட்ஜ், விலை நழுவல் -> ஸ்லிப்பேஜ், அனுமதித்தொகை -> செலவு வரம்பு,
இருபடி நிதியளிப்பு -> குவாட்ரடிக் ஃபண்டிங், பரிமாற்றம் -> ஸ்வாப்,
மறைக்குறியீட்டு நாணயம் -> கிரிப்டோகரன்சி, மதிப்புப் பிணைப்பு -> பெக்,
கலைப்பு -> லிக்விடேஷன், தீர்ப்பான் -> சால்வர்.

Kept from ETHGlossary because the Tamil word is genuinely the word Tamil
speakers use: முகவரி (address), பரிவர்த்தனை (transaction), பரவலாக்கம் /
பரவலாக்கப்பட்ட (decentralization / decentralized), பிரதிநிதி (delegate),
பிணையம் (collateral), பெட்டகம் (vault), இறுதிநிலை (finality), நோக்கம்
(intent), பொது நன்மை (public good), டிஜிட்டல் கையொப்பம் (digital signature),
விலைத் தாக்கம் (price impact), சாண்ட்விச் தாக்குதல் (sandwich attack),
ஸ்டேபிள்காயின், ஹாஷ், ரோலப், கிரிப்டோ, ஈதர்.

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick the term. **These beat ETHGlossary and they beat your own judgment.**

```terms
private key = தனிப்பட்ட விசை
private keys = தனிப்பட்ட விசைகள்
public key = பொது விசை
blockchain = பிளாக்செயின்
blockchains = பிளாக்செயின்கள்
blockchain technology = பிளாக்செயின் தொழில்நுட்பம்
blockchain apps = பிளாக்செயின் ஆப்கள்
blockchain trilemma = பிளாக்செயின் டிரைலெம்மா
ethereum blockchain = Ethereum பிளாக்செயின்
ethereum mainnet = Ethereum மெயின்நெட்
layer 1 = Layer 1
layer 2 = Layer 2
l1 = L1
l2 = L2
alternative layer 1 = மாற்று Layer 1
smart contract = ஸ்மார்ட் ஒப்பந்தம்
smart contracts = ஸ்மார்ட் ஒப்பந்தங்கள்
smart account = ஸ்மார்ட் அக்கவுண்ட்
smart wallet = ஸ்மார்ட் வாலெட்
cryptocurrency = கிரிப்டோகரன்சி
cryptocurrencies = கிரிப்டோகரன்சிகள்
cryptocurrency mining = கிரிப்டோகரன்சி மைனிங்
cryptocurrency wallet = கிரிப்டோகரன்சி வாலெட்
crypto = கிரிப்டோ
crypto wallet = கிரிப்டோ வாலெட்
decentralized = பரவலாக்கப்பட்ட
decentralization = பரவலாக்கம்
decentralized money = பரவலாக்கப்பட்ட பணம்
decentralized finance = பரவலாக்கப்பட்ட நிதி
decentralized exchange = பரவலாக்கப்பட்ட எக்ஸ்சேஞ்ச்
centralized exchange = மையப்படுத்தப்பட்ட எக்ஸ்சேஞ்ச்
centralized services = மையப்படுத்தப்பட்ட சேவைகள்
centralized exchange staking = மையப்படுத்தப்பட்ட எக்ஸ்சேஞ்ச் ஸ்டேக்கிங்
dapp = dApp
staking = ஸ்டேக்கிங்
staking pool = ஸ்டேக்கிங் பூல்
staking providers = ஸ்டேக்கிங் வழங்குநர்கள்
solo staking = சோலோ ஸ்டேக்கிங்
solo staker = சோலோ ஸ்டேக்கர்
stake = ஸ்டேக்
staker = ஸ்டேக்கர்
restaking = ரீஸ்டேக்கிங்
liquid = லிக்விட்
liquid staking token = லிக்விட் ஸ்டேக்கிங் டோக்கன்
lsts = LSTs
web3 = Web3
web2 = Web2
block = பிளாக்
block hash = பிளாக் ஹாஷ்
block explorer = பிளாக் எக்ஸ்ப்ளோரர்
block reward = பிளாக் வெகுமதி
block builder = பிளாக் பில்டர்
block proposer = பிளாக் புரொபோசர்
block producer = பிளாக் புரொடியூசர்
blockspace = பிளாக்ஸ்பேஸ்
block space = பிளாக்ஸ்பேஸ்
liquidity = பணப்புழக்கம்
liquidity pool = பணப்புழக்கப் பூல்
dex = DEX
cex = CEX
dex aggregator = DEX அக்ரிகேட்டர்
meta-aggregator = மெட்டா-அக்ரிகேட்டர்
amm = AMM
lp = LP
tvl = TVL
mev = MEV
order book = ஆர்டர் புக்
market cap = மார்க்கெட் கேப்
validator = வேலிடேட்டர்
validators = வேலிடேட்டர்கள்
validator node = வேலிடேட்டர் நோடு
validator nodes = வேலிடேட்டர் நோடுகள்
validator client = வேலிடேட்டர் கிளையன்ட்
node = நோடு
node operator = நோடு ஆபரேட்டர்
address = முகவரி
addresses = முகவரிகள்
gas = கேஸ்
gas fee = கேஸ் கட்டணம்
gas fees = கேஸ் கட்டணம்
optimistic rollup = ஆப்டிமிஸ்டிக் ரோலப்
zk rollup = ZK ரோலப்
rollup = ரோலப்
sidechain = சைட்செயின்
sharding = ஷார்டிங்
payment channel = பேமெண்ட் சேனல்
lightning network = Lightning Network
blob = பிளாப்
seed phrase = சீட் ஃபிரேஸ்
recovery phrase = ரிக்கவரி ஃபிரேஸ்
dao = DAO
defi = DeFi
nft = NFT
peer-to-peer = பியர்-டு-பியர்
peer = பியர்
wallet = வாலெட்
wallets = வாலெட்டுகள்
wallet app = வாலெட் ஆப்
hot wallet = ஹாட் வாலெட்
cold wallet = கோல்ட் வாலெட்
hardware wallet = ஹார்ட்வேர் வாலெட்
custodial wallet = கஸ்டோடியல் வாலெட்
non-custodial wallet = நான்-கஸ்டோடியல் வாலெட்
self-custody = செல்ஃப்-கஸ்டடி
self-custody wallet = செல்ஃப்-கஸ்டடி வாலெட்
self-custodial = செல்ஃப்-கஸ்டடி சார்ந்த
custodian = கஸ்டோடியன்
ledger = பதிவேடு
token allowance = டோக்கன் செலவு வரம்பு
allowance = செலவு வரம்பு
token approval = டோக்கன் அனுமதி
price impact = விலைத் தாக்கம்
slippage = ஸ்லிப்பேஜ்
slippage tolerance = ஸ்லிப்பேஜ் டாலரன்ஸ்
front-running = ஃபிரண்ட்-ரன்னிங்
sandwich attack = சாண்ட்விச் தாக்குதல்
onchain = ஆன்செயின்
offchain = ஆஃப்செயின்
onchain governance = ஆன்செயின் கவர்னன்ஸ்
network governance = நெட்வொர்க் கவர்னன்ஸ்
governance = கவர்னன்ஸ்
delegate = பிரதிநிதி
delegation = பிரதிநிதித்துவம்
veto = வீட்டோ
permissionless = அனுமதி தேவையில்லாத
trustless = நம்பிக்கை தேவையில்லாத
security = பாதுகாப்பு
scalability = ஸ்கேலபிலிட்டி
interoperability = இன்டரோபரபிலிட்டி
composability = கம்போசபிலிட்டி
fungibility = ஃபன்ஜிபிலிட்டி
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
multi-token standard = மல்டி-டோக்கன் ஸ்டாண்டர்ட்
btc = BTC
eth = ETH
ether = ஈதர்
gwei = Gwei
wei = wei
transaction = பரிவர்த்தனை
transactions = பரிவர்த்தனைகள்
transaction hash = பரிவர்த்தனை ஹாஷ்
transaction throughput = பரிவர்த்தனை த்ரூபுட்
transaction finality = பரிவர்த்தனை இறுதிநிலை
token = டோக்கன்
tokens = டோக்கன்கள்
token swap = டோக்கன் ஸ்வாப்
token pair = டோக்கன் ஜோடி
token distribution = டோக்கன் விநியோகம்
intermediary token = இடைநிலை டோக்கன்
coin = காயின்
bridge = பிரிட்ஜ்
public good = பொது நன்மை
public = பொது
credible neutrality = நம்பகமான நடுநிலை
equality of opportunity = வாய்ப்புச் சமத்துவம்
satoshi nakamoto = Satoshi Nakamoto
scarcity = பற்றாக்குறை
scarce = அரிதான
supply = வழங்கல்
max supply = அதிகபட்ச வழங்கல்
circulating supply = புழக்க வழங்கல்
inflation = பணவீக்கம்
halving = ஹால்விங்
gold standard = தங்கத் தரநிலை
central bank = மத்திய வங்கி
commercial bank = வணிக வங்கி
monetary policy = பணவியல் கொள்கை
fiat = ஃபியட்
spot etf = ஸ்பாட் ETF
onramp = ஆன்ராம்ப்
mining = மைனிங்
miner = மைனர்
miners = மைனர்கள்
hash = ஹாஷ்
consensus = கன்சென்சஸ்
consensus mechanism = கன்சென்சஸ் வழிமுறை
proof of work = புரூஃப் ஆஃப் வொர்க்
proof of stake = புரூஃப் ஆஃப் ஸ்டேக்
proof-of-stake = புரூஃப் ஆஃப் ஸ்டேக்
slashing = ஸ்லாஷிங்
slashed = ஸ்லாஷ்
attestation = அட்டெஸ்டேஷன்
epoch = எபாக்
finality = இறுதிநிலை
finality time = இறுதிநிலை நேரம்
settlement time = தீர்வு நேரம்
51% attack = 51% தாக்குதல்
tps = TPS
censorship-resistant = தணிக்கை-எதிர்ப்பு
fraud proof = மோசடி சான்று
validity proof = செல்லுபடி சான்று
zero-knowledge = ஜீரோ-நாலெட்ஜ்
ethereum virtual machine = Ethereum Virtual Machine (EVM)
asynchronous = அசின்க்ரோனஸ்
stablecoin = ஸ்டேபிள்காயின்
stablecoin issuer = ஸ்டேபிள்காயின் வழங்குநர்
peg = பெக்
vault = பெட்டகம்
death spiral = டெத் ஸ்பைரல்
counterparty risk = கவுன்டர்பார்ட்டி ரிஸ்க்
memecoin = மீம்காயின்
mint = மிண்ட்
password manager = பாஸ்வேர்ட் மேனேஜர்
social engineering = சோஷியல் இன்ஜினியரிங்
phishing = ஃபிஷிங்
fomo = FOMO
hodl = HODL
two factor authentication = டூ-ஃபாக்டர் அத்தென்டிகேஷன்
2fa = 2FA
red flag = ரெட் ஃபிளாக்
scam-token = ஸ்கேம் டோக்கன்
fraud = மோசடி
kyc = KYC
know-your-customer = நோ யுவர் கஸ்டமர்
digital signature = டிஜிட்டல் கையொப்பம்
cryptography = கிரிப்டோகிராஃபி
encryption = என்க்ரிப்ஷன்
swap = ஸ்வாப்
trade = டிரேட்
trade route = டிரேட் பாதை
intent = நோக்கம்
solver = சால்வர்
batch auction = பேட்ச் ஏலம்
otc = OTC
over the counter = ஓவர் தி கவுன்டர்
private transaction routing = தனிப்பட்ட பரிவர்த்தனை ரூட்டிங்
app = ஆப்
app store = ஆப் ஸ்டோர்
intermediary = இடைத்தரகர்
intermediaries = இடைத்தரகர்கள்
value-extractive = மதிப்பு உறிஞ்சும்
value-extraction = மதிப்பு உறிஞ்சல்
value-creation = மதிப்பு உருவாக்கம்
yield = ஈல்ட்
yield farm = ஈல்ட் ஃபார்ம்
collateral = பிணையம்
liquidation = லிக்விடேஷன்
quadratic funding = குவாட்ரடிக் ஃபண்டிங்
allo protocol = Allo Protocol
retropgf = RetroPGF
fork = ஃபோர்க்
open source = ஓபன் சோர்ஸ்
onchain identity = ஆன்செயின் அடையாளம்
primary name = பிரைமரி நேம்
standard record = ஸ்டாண்டர்ட் ரெக்கார்டு
custom record = கஸ்டம் ரெக்கார்டு
.eth = .eth
yourname.eth = yourname.eth
network = நெட்வொர்க்
fee = கட்டணம்
```
