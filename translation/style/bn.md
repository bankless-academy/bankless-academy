# Bengali style guide (translate-content)

Bengali is the second Indic-script language in this repo, after Hindi. Much of
the reasoning below is the same reasoning `translation/style/hi.md` reaches, for
the same reasons: a Brahmic abugida, conjuncts that have more than one legal
encoding, Latin brand names inside a non-Latin sentence. **Bengali also has
three traps Hindi does not**, and each one ships a bug that renders perfectly
and compares unequal. Read this file end to end before writing a single slide.

A dozen independent agents will translate the glossary, the UI and the 19
lessons from this document. It is the only thing holding them to one Bengali.

## Variety and register

- Write **modern standard চলিত Bengali**, the register of a news site or a
  well-written app. **Never সাধু**: no করিয়াছেন, হইয়াছে, তাহার, ইহা. An LLM
  drifts into সাধু the moment a sentence gets formal, and a single সাধু verb in
  a slide makes the whole lesson read like a 1950s textbook.
- Stay **neutral between Dhaka and Kolkata**. Prefer words both sides use daily.
  Where the two diverge, take the form that is unmarked in both: **ব্যাংক** (not
  ব্যাঙ্ক), **লেনদেন**, **নিরাপত্তা**, **টাকা** only when it means cash in
  general. Avoid heavy Perso-Arabic register (হেফাজত, দরুন, মোতাবেক) and heavy
  Sanskritized register (তদুপরি, অতএব, পরিলক্ষিত হয়) alike.
- Fix the two clitics that vary freely, so they do not drift between agents:
  **-গুলো** (never -গুলি), **-টি** for things (never -টা in lesson prose),
  **-জন** for people, and **এটি / সেটি** (never এটা / সেটা).
- Keep vocabulary everyday, not officialese. Write "ব্যবহার করুন", not "প্রয়োগ
  করা আবশ্যক"; "তাই", not "অতএব"; "টাকা", not "মুদ্রাব্যবস্থা" where "টাকা"
  will do. Bankless Academy is a peer teaching a peer.
- Short sentences. Bengali is verb-final, so a long English sentence becomes an
  unreadable Bengali one. Split at the clause boundary instead of chaining with
  "যার ফলে", "যদিও", "হওয়া সত্ত্বেও".
- Explorer (the site's word for its readers) -> **এক্সপ্লোরার**.

## Address: আপনি, always

Bengali has three second-person pronouns: তুই (intimate), তুমি (familiar), আপনি
(polite). **Use আপনি. Never তুমি, never তুই.**

The pronoun is not the warmth dial. তুমি to an adult stranger reads as talking
down, not as friendliness, and every product a Bengali reader already uses
(Google in Bangla, Facebook in Bangla, bKash, Nagad, Grameenphone) says আপনি.
The peer tone comes from the *vocabulary*, not the pronoun.

- Imperatives take the আপনি form: **করুন, দেখুন, রাখুন, যাচাই করুন, ক্লিক করুন,
  বেছে নিন, লিখে রাখুন**. করো / কর is তুমি / তুই. Never use them.
- Finite verbs take the honorific **-েন**: আপনি জানেন, আপনি পারেন, আপনি করেছেন,
  আপনি দেখবেন. "আপনি জানে" and "আপনি করো" are wrong.
- **Drop আপনি wherever the verb already carries it.** Bengali is pro-drop, and
  repeating আপনি in every sentence is the clearest signature of machine
  translation. Write "আপনার ওয়ালেট খুলুন", not "আপনি আপনার ওয়ালেট খুলুন". Keep
  আপনি only where ownership or contrast matters: "এই কী শুধু আপনার।"

### Gender: Bengali verbs are safe, Bengali nouns are not

**Bengali has no grammatical gender.** Verbs, adjectives and inanimate nouns
never agree for gender, so the whole class of Hindi/Polish/Russian errors
(चुके, गए, был/была) simply does not exist here, and neither does Hindi's
का/की/के problem. Third-person pronouns are gender-free too: তিনি, তাঁর, সে,
তার, তারা.

Gender leaks in through **agent nouns** instead. The Sanskritic **-ক / -িকা**
pairs are the trap, because the -ক form is the masculine of a pair, not a
neutral:

    avoid:  প্রিয় পাঠক          (পাঠক pairs with পাঠিকা)
    avoid:  একজন নতুন শিক্ষক     (pairs with শিক্ষিকা)
    avoid:  লেখক, নায়ক, ছাত্র    (লেখিকা, নায়িকা, ছাত্রী)
    use:    ব্যবহারকারী, বিনিয়োগকারী, অংশগ্রহণকারী, শিক্ষার্থী, নির্মাতা
    use:    এক্সপ্লোরার, একজন নতুন ব্যবহারকারী

The **-কারী**, **-অর্থী**, **-বিদ** and **-তা** patterns are gender-free and
cover every role these lessons need. When no neutral noun fits, address the
reader directly with আপনি instead of naming a role at all.

## Bengali script, transliteration, or Latin: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and never mix buckets for the same term across two lessons.

1. **Latin script, untouched.** Anything that is a name, a symbol or a code
   identifier. Products, networks and companies: Bitcoin, Ethereum, Uniswap,
   Optimism, Base, MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea,
   Revoke.cash, Lightning Network, Allo Protocol. People: Satoshi Nakamoto.
   Tickers and units: ETH, BTC, USDC, OP, Gwei, wei. Acronyms: API, DEX, CEX,
   AMM, LP, TVL, KYC, APR, APY, MEV, NFT, DAO, DeFi, Web3, Web2, L1, L2, PoW,
   PoS, TPS, ERC-20, ERC-721, ERC-1155, EIP, 2FA, FOMO, HODL, LSTs, RetroPGF.
   Domain-like strings: yourname.eth, .eth.
   Do **not** write বিটকয়েন, ইথেরিয়াম, মেটামাস্ক, ইউনিসোয়াপ, কয়েনবেস or
   অপটিমিজম, even though `translation/ethglossary/bn.json` returns exactly
   those. The pins below override every one of them.
2. **Bengali transliteration.** A concept born in English that has no ordinary
   Bengali word, or has one that no Bengali-speaking crypto user says: ওয়ালেট,
   ব্লক, টোকেন, নোড, স্টেকিং, মাইনিং, রোলআপ, হ্যাশ, গ্যাস, সোয়াপ, ব্রিজ,
   স্লিপেজ, স্টেবলকয়েন, অনচেইন, গভর্ন্যান্স, ট্রাস্টলেস, ভ্যালিডেটর, সিড ফ্রেজ,
   ব্লকচেইন, ক্রিপ্টো, কনসেনসাস.
3. **A real Bengali word.** The concept already exists in ordinary Bengali
   finance, civics or everyday speech, and the Bengali word teaches better than
   the loan: খতিয়ান (ledger), ফি (fee), সরবরাহ (supply), দুষ্প্রাপ্যতা
   (scarcity), মুদ্রাস্ফীতি (inflation), লেনদেন (transaction), ঠিকানা
   (address), তারল্য (liquidity), জামানত (collateral), বিকেন্দ্রীকৃত
   (decentralized), কেন্দ্রীয় ব্যাংক, মুদ্রানীতি, স্বর্ণমান, নিরাপত্তা,
   জালিয়াতি, সুযোগের সমতা, প্রতিনিধি (delegate).

**The tiebreaker between buckets 2 and 3 is what a Bengali-speaking crypto user
says out loud, not what is formally correct.** That is why the pins use ব্রিজ
and not সেতু, কনসেনসাস and not ঐক্যমত, অ্যাটেস্টেশন and not সত্যায়ন. Put the
rejected form in `keyword_forms` so prose that uses it still resolves to a
tooltip.

**Never mix scripts inside one word.** A Latin run has a space on both sides:
"Layer 2 সমাধান", never "Layer 2সমাধান" and never "লেয়ার 2". The one exception
is a Bengali case ending on a Latin word, which takes a **hyphen**: see below.

## Case endings: Bengali suffixes, so it behaves like Turkish, not like Hindi

This is the single biggest structural difference from the Hindi guide. Hindi
postpositions (का, में, से) are **separate words**, so a Hindi noun inside
backticks stays intact. **Bengali বিভক্তি attach directly to the noun with no
space**, so the surface form changes and the tooltip dies:

    dead:     `ব্লকচেইনে` লেনদেন জমা হয়।         (locative -এ fused to the noun)
    dead:     `ওয়ালেটের` ভেতরে কী থাকে?           (genitive -এর fused)
    correct:  একটি `ব্লকচেইন` সব লেনদেন জমা রাখে।   (bare form, always the goal)
    correct:  `ওয়ালেট` আপনার কী রাখে।             (bare form, rephrased around it)

A **Latin** stem is the one case where the ending can be attached and the term
still matches, because the hyphen keeps the stem intact: `Ethereum`-এ. That does
not help a Bengali-script stem, where the ending fuses directly.

The keyword index is an **exact string match** after NFC + case folding. It
strips nothing. You have exactly three legal fixes, in order of preference:

1. **Rephrase so the term stands bare.** "`ব্লকচেইন` সব লেনদেন জমা রাখে" instead
   of "`ব্লকচেইনে` সব লেনদেন জমা হয়". This is free and it is what most slides
   should do.
2. **Move the backticks off that mention.** Backticks are not required
   anywhere: `translate-content.js`'s `verify` checks images, links, quiz option
   count, `[x]` position, `> ℹ️` count, `<details>` and heading level, and
   **never counts backticks**. If a term reads best inflected in that sentence,
   write it inflected without backticks and backtick a bare mention elsewhere in
   the lesson. A term that appears five times only needs one tooltip.
3. **Add the inflected form to `keyword_forms`** in
   `translation/keywords/bn/keywords.json`. Do this for the forms that genuinely
   recur, not the whole paradigm.

The endings worth putting in `keyword_forms` for a high-traffic noun:

| ending | function | example on ওয়ালেট |
|---|---|---|
| -এর / -র | genitive | ওয়ালেটের |
| -এ / -তে / -য় | locative | ওয়ালেটে |
| -কে | objective | ভ্যালিডেটরকে |
| -টি | definite (things) | ব্লকটি |
| -গুলো | plural | ওয়ালেটগুলো |
| -গুলোর | plural genitive | ওয়ালেটগুলোর |

Classifiers follow animacy: **-টি for things** (একটি ব্লক, একটি ভ্যালিডেটর
নোড), **-জন for people** (একজন ব্যবহারকারী). Never একজন ব্লক.

**Latin stems take a hyphen before the ending**, which is the standard Bengali
convention and keeps the Latin run intact: **Ethereum-এ, ETH-এর, Base-এ,
DEX-গুলো, Bitcoin-কে**. Never Ethereumএ and never Ethereum এ.

## The glossary keyword rule

`translation/keywords/bn/keywords.json` is keyed by the **English** term. The
`keyword` value is the display form a lesson backticks and the runtime index
matches on, so:

- **`keyword` must be the citation form**: the bare, uninflected noun, exactly
  as it appears in the ```terms``` block below. Never a locative, never a
  genitive, never with -টি or -গুলো attached.
- **Inflected forms go in `keyword_forms`**, plural forms in `keyword_plural`.
- ETHGlossary's `contexts.prose` field is **not** the citation form for Bengali.
  It routinely returns an inflected form: `wallet` -> ওয়ালেটটি, `transaction` ->
  ট্রানজ্যাকশনটি, `blockchain` -> ব্লকচেইনে, `bridge` -> সেতুর, `network` ->
  নেটওয়ার্কে, `seed phrase` -> সিড ফ্রেজটি. Pin the bare noun; those forms belong
  in `keyword_forms`.
- **A pinned term is not automatically a backtickable one.** The ```terms```
  block fixes how a word is *translated* wherever it appears; the glossary
  decides whether it gets a tooltip. `network`, `fee` and `supply` are pinned
  for prose consistency and have **no** English glossary entry, so backticking
  them is a dead tooltip and a build failure. Check the English keywords file
  before adding backticks.

## Spelling and encoding: four ways to ship an invisible bug

Everything in this section renders identically to its wrong twin and compares
unequal. There is nothing to see in a screenshot and nothing in a diff.

### 1. NFC only

Bengali য়, ড় and ঢ় each have **two encodings**: a single precomposed codepoint
(U+09DF, U+09DC, U+09DD) or base letter + nukta ় (U+09BC). They are
pixel-identical. NFC canonicalizes the precomposed ones **to** base + nukta,
because all three are Unicode composition exclusions, so `.normalize('NFC')` is
both the test and the fix.

This is already live in the vendored data: `translation/ethglossary/bn.json` is
**not NFC**. 63 distinct word forms across 68 entries use the precomposed
codepoints while the rest of the file uses base + nukta, including the ones you
are most likely to copy: **ইথেরিয়াম**, **নেটওয়ার্ক**, **পিয়ার-টু-পিয়ার**,
**প্রয়োজন**, **হয়**. Copy-paste from that file and you have shipped a term that
will not match your own glossary.

`normalizeKeyword` in `content-lib.js` NFC-normalizes both sides, so the tooltip
index survives it. **`lang-tools merge` does not**: its style-pin check compares
with a bare `.toLowerCase()`, so a decomposed pin against a precomposed glossary
entry is reported as `style guide pins "X" but entry reads "X"` with two
identical-looking strings. Do not spend an hour on that message. Check first:

    node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');
      const bad=[];
      if (s!==s.normalize('NFC')) bad.push('NOT NFC');
      if (/[\u200C\u200D]/.test(s)) bad.push('ZWJ/ZWNJ');
      if (/[\u09E6-\u09EF]/.test(s)) bad.push('BENGALI DIGITS');
      if (/\u2014/.test(s)) bad.push('EM DASH');
      console.log(bad.length?bad.join(', '):'ok')" <file>

### 2. No ZWJ, no ZWNJ, ever

U+200D (ZWJ) and U+200C (ZWNJ) are invisible, and in Bengali they **materially
change how a conjunct renders**: after a হসন্ত ্ (U+09CD), ZWJ requests the
ligature or ফলা form and ZWNJ forbids the conjunct and forces a visible হসন্ত.
Neither is removed by NFC and neither is removed by `normalizeKeyword`, so both
are permanent silent mismatches.

The vendored file demonstrates the failure mode by contradicting itself. The
same intended sequence (র + ্ + য, the one English "ra + ya" words need)
is written **two different ways in one file**:

    on-ramp        অন-র‌্যাম্প    র U+09B0 · ZWNJ U+200C · ্ U+09CD · য U+09AF
    wrapped token  র‍্যাপড টোকেন   র U+09B0 · ZWJ  U+200D · ্ U+09CD · য U+09AF

Two invisible characters with opposite meanings, aiming at the same glyph.

**Policy: no U+200C and no U+200D anywhere in any Bengali file we write** -
lesson md, keywords.json, website JSON. The only two joiners in this guide are
the demonstration strings in the table above. A backticked term's bytes
must equal the glossary `keyword`'s bytes after NFC, and joiners break that.

The practical consequence: **avoid any word form that needs a joiner in it**,
which in practice means the র + ্ + য sequence above. That is why `onramp` is
pinned to **অন-রাম্প** and not to the joined spelling. If a joiner turns up in
your draft, respell the word; do not just delete the joiner, because the
remaining sequence renders as রেফ over য, which is a different thing.

### 3. One spelling per term, pinned

Conjuncts are just হসন্ত sequences, and their order is meaning-bearing:

- **রেফ**: র + ্ + C, as in নেটওয়া**র্ক**, স্মা**র্ট**, গভ**র্ন্যা**ন্স. The র
  comes first and rides above the consonant that follows.
- **র-ফলা**: C + ্ + র, as in **প্র**াইভেট, **ক্রি**প্টো, **গ্র**াহক.
- **য-ফলা**: C + ্ + য, as in **ব্য**বহার, গভ**র্ন্যা**ন্স, ট্রান**জ্যা**কশন.
  The ফলা is always য (U+09AF), never য় (U+09AF + U+09BC).

Getting the order wrong is visible (র্ক and ক্র look nothing alike). What is
**not** visible is a term spelled two acceptable ways by two agents, and nothing
in the pipeline can see that. Real examples already in the vendored data:

- `transaction` is ট্রান**জ্যা**কশন in its own entry and ট্রান**জে**কশন in the
  example sentence under `eth`.
- `decentralized` is বিকেন্দ্রী**কৃত** in its own entry and বিকেন্দ্রী**ভূত**
  under `decentralized exchange` and `decentralized finance`.
- `consensus` is ঐক্যমত, but `consensus mechanism` is কনসেনসাস মেকানিজম.

All three are settled by the ```terms``` block. Where two spellings are both
current Bengali, **the block wins**, and the loser goes in `keyword_forms` so
prose written the other way still resolves:

| use | not | note |
|---|---|---|
| বিকেন্দ্রীকৃত / কেন্দ্রীকৃত | বিকেন্দ্রীভূত / কেন্দ্রীভূত | one pair, both directions |
| লেনদেন | ট্রানজ্যাকশন, ট্রানজেকশন | shorter and universal in banking |
| কনসেনসাস | ঐক্যমত, ঐকমত্য | ঐক্যমত is itself two spellings |
| ব্যাংক | ব্যাঙ্ক | ং, not ঙ্গ |
| এক্সচেঞ্জ | এক্সচেন্জ, এক্সচেইঞ্জ | |
| অব (= "of") | অফ (= "off") | প্রুফ **অব** ওয়ার্ক vs **অফ**চেইন |
| ফ্রেজ | ফ্রেইজ | সিড ফ্রেজ, রিকভারি ফ্রেজ |
| কী (long ী) | কি, কি় | প্রাইভেট কী, as in কী-বোর্ড |

Prefer the anusvara **ং** (U+0982) over ঙ্গ wherever both are current: ব্যাংক,
লিংক, স্টেকিং, রাউটিং. Keep chandrabindu ঁ where it belongs: ঝুঁকি, বাঁচে, দাঁড়ি.

### 4. Confusable letters

These pairs are one keystroke apart and are the most common Bengali typos.
A single one of them is a dead tooltip:

- **য (jô) vs য় (ôntôsthô ô)** - the big one. হ**য়** (happens) vs হ**য** (not a
  word). য় is য + ় and only ever appears at the end of a syllable; the ফলা
  inside a conjunct is always plain য.
- **ব vs ভ** - **ব**্লক vs ভ; ভ্যালিডেটর starts with ভ, ব্লকচেইন with ব.
- **ও vs এ vs অ** at word start: **ও**য়ালেট, **এ**ক্সচেঞ্জ, **অ**নচেইন.
  ওয়ালেট is ও + য় + া, not ওয়া as one unit and not অয়ালেট.
- **র vs ড় vs ঢ়** - all three take a nukta-shaped mark or none; ড় is ড + ়.
- **ন vs ণ**, **স vs শ vs ষ**, **জ vs য**, **ই vs ঈ**, **উ vs ঊ** - Bengali
  pronounces each pair identically, so nothing in your ear catches the error.
  Copy the pins, do not retype them.

**Prefer copy-paste over retyping for every pinned term**, from this file or
from `translation/keywords/bn/keywords.json`. The pins are the spelling
authority even where ETHGlossary spells a term differently.

## Length: honest horizontally, generous by accident

`displayWidth` in `content-lib.js` treats **Bengali as single-width**. Verified:
the `WIDE` regex covers only CJK ideographs, kana, Hangul and fullwidth forms
(U+1100-U+115F, U+2E80-U+9FFF, U+AC00-U+D7A3, U+FF00-U+FF60 and friends).
U+0980-U+09FF is not in it, so ten Bengali consonants measure 10, exactly like
ten Latin letters, while ten CJK ideographs measure 20. **The 22-line ceiling
therefore behaves like a Latin language's, not like Japanese's.**

There is a second effect: `displayWidth` skips every `\p{M}` codepoint, and
Bengali matras, হসন্ত and nukta are all combining marks. So the estimator counts
roughly one unit per **rendered cluster**, which is the right thing to count,
but it means a Bengali slide measures well below its English source:

| | measured |
|---|---|
| Bengali term vs its English key, 474 vendored terms | codepoints **1.03x**, `displayWidth` **0.67x** |
| Sample slide sentences, Bengali vs English source | `displayWidth` **0.66x**, grapheme clusters **0.63x** |
| Whole lesson files, the closest analogue (hi vs en, 19 lessons) | `displayWidth` **0.74x** |

So a 21-line English slide comes back as a 14-16 line Bengali one, and the
verifier waves through slides the reader still has to scroll: a Bengali cluster
is at least as wide as a Latin character and **taller**, because matras stack
above and below the line and রেফ, য-ফলা and র-ফলা add another storey inside the
fixed 533px slide.

**Target 18 estimated lines, not 22.** Treat 22 as the point at which the build
fails, not as the budget. Note the gate only fires when the translation is both
over 22 **and** longer than English, so a bloated slide whose English source was
already long can slip through; judge it yourself.

**Quiz options: keep raw `.length` at or under 70**, the same number as English.
Bengali codepoint count tracks English almost exactly (1.03x), so the English
budget transfers directly. In rendered clusters that is about 45. Move any
nuance into the `> ℹ️` feedback line.

Compression that works in Bengali, in order of how much it buys:

1. Drop the pronoun. আপনি is already in the verb.
2. Drop হয়ে থাকে / করে থাকে periphrasis: হয়, করে.
3. Cut যেটি / যেটা relative clauses into a second sentence.
4. Prefer the loan when it is shorter and equally clear: DEX over বিকেন্দ্রীকৃত
   এক্সচেঞ্জ on a crowded slide, once the full form has appeared once.
5. Cut "এর মাধ্যমে", "-এর ক্ষেত্রে", "করার জন্য" where a simple verb does it.
6. Drop "একটি" where English had no article and Bengali does not need one.

## Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build on
any `**` or `_` that survives as literal text. Bengali has word spaces, so it is
safer than Japanese, but the দাঁড়ি । behaves exactly like the CJK punctuation
that broke 87 lines in the ja/zh wave. **Every row below was run through
`findBrokenEmphasis` from `content-lib.js`**, both columns:

    breaks:  **মূল্য:**সময় বাঁচে।              ->  **মূল্য**: সময় বাঁচে।
    breaks:  এটি **ওয়ালেট।**পরের ধাপ।          ->  এটি **ওয়ালেট**। পরের ধাপ।
    breaks:  **(প্রাইভেট কী)**গোপন রাখুন।       ->  (**প্রাইভেট কী**) গোপন রাখুন।
    breaks:  ফি **0.05%**এর কম।                ->  ফি **0.05%** এর কম।
    breaks:  **গুরুত্বপূর্ণ!**কাউকে দেবেন না।     ->  **গুরুত্বপূর্ণ**! কাউকে দেবেন না।
    breaks:  ব্লক_চেইন_ শব্দটি নতুন।            ->  ব্লক*চেইন* শব্দটি নতুন।

Rules:

- Never let a closing `**` sit on punctuation with a Bengali letter jammed
  against it. **A space after the closing marker is enough**, and Bengali has
  spaces, so this is easy: `**প্রশ্ন:** উত্তর কী?` passes, `**প্রশ্ন:**উত্তর`
  does not. Keeping the punctuation outside (`**প্রশ্ন**:`) passes in every
  case, so just do that.
- Keep the দাঁড়ি outside the bold: `**ওয়ালেট**।`
- **Never use `_…_` against a Bengali letter.** `_` cannot open or close
  intraword and Bengali letters count as word characters. Use `*…*`.
- Bold the link *text*, not the whole link: `[**Ethereum**](https://ethereum.org)`.

Verify a finished body file yourself:

    node --input-type=module -e "const {findBrokenEmphasis}=await import('./content-lib.js');
      console.log(findBrokenEmphasis(require('fs').readFileSync(process.argv[1],'utf8')))" <file>

## Numbers: Latin digits, international scale, always

- **Latin digits only. Never Bengali digits ০১২৩৪৫৬৭৮৯.** Every wallet,
  exchange, block explorer and price chart the reader will ever open uses Latin
  digits, and the lesson `![](…)` images are in Latin digits too. ETHGlossary's
  Bengali file has 162 Bengali digits in it, including `51% attack = ৫১%
  আক্রমণ`; the pin below overrides it to **51% আক্রমণ**. Same for `web2`, which
  ETHGlossary gives as ওয়েব২ and the pins fix to **Web2**.
- **International scale words, transliterated: মিলিয়ন, বিলিয়ন, ট্রিলিয়ন. Do NOT
  convert to লাখ or কোটি.** Bengali uses লাখ and কোটি constantly, so this is a
  live risk, and there are three reasons in order of weight: the figures in
  these lessons are canonical and the reader will meet them written the same way
  everywhere ("21 মিলিয়ন BTC", not "2.1 কোটি BTC"); converting requires
  arithmetic that no verifier in this repo can check, so a slip ships as a fact;
  and the slide text would stop matching the number printed in its image.
- **International comma grouping**, matching the English source: 21,000,000 and
  120,000. Not the South Asian 2,10,00,000.
- Decimal point is a period: 0.0002 ETH, 0.05%.
- Percent sign directly after the number, no space: **51%**. Spell it out only
  when the sentence needs a word: "51 শতাংশ".
- Currency and years pass through as in English: $100, 2009, 2025.

## Typography

- **End declarative sentences with the দাঁড়ি ।** (U+0964), not a full stop, even
  when the last word is Latin: "এটি Ethereum-এ চলে।" No space before, one space
  after.
- Questions take `?`, exclamations take `!`. Never combine either with a দাঁড়ি.
- **No দাঁড়ি on a heading**, on a short list fragment, or on a quiz option.
  Feedback lines under `> ℹ️` are full sentences and do take one.
- Comma is the Latin `,`, colon the Latin `:`. Bengali has no full-width
  punctuation, unlike ja and zh. The period still appears inside decimals and
  abbreviations.
- Quotation marks are “ ” with ‘ ’ nested.
- **Never use the em dash U+2014.** Use a comma, a colon, parentheses, or a
  second sentence. No en dash for ranges either: write "2020 থেকে 2024".
- Hyphens are part of the spelling of several pins and must be kept exactly:
  পিয়ার-টু-পিয়ার, সেলফ-কাস্টডি, নন-কাস্টোডিয়াল, ফ্রন্ট-রানিং, টু-ফ্যাক্টর,
  জিরো-নলেজ, অন-রাম্প, মেটা-অ্যাগ্রিগেটর, সেন্সরশিপ-প্রতিরোধী.
- One space between a Latin run and the Bengali around it, except for a case
  ending, which takes a hyphen and no space: Ethereum-এ.

## Interface strings

Keep an English app's button label in English and gloss it in Bengali on first
use, then use the English label alone afterwards:

    “Connect Wallet” (ওয়ালেট যুক্ত করুন) বোতামে ক্লিক করুন।

## Headings and `/content` anchors

Bengali headings slugify to nothing in the `/content` anchor generator, so those
pages fall back to `section-N` anchors. `headingId` in
`src/utils/lessonContent.ts` requires the slug to match `/^[a-z0-9-]+$/` after
NFD and mark-stripping, and Bengali letters never survive that. **This is
expected and matches ja, zh and hi. Do not add Latin text to a heading to work
around it.**

## Fixed section headings

These recur across the 9 handbooks. **Translate them once, exactly as below, and
do not re-translate them per lesson.** Five independent agents produce five
different renderings of "Key Takeaways" otherwise, and nothing in the pipeline
looks at heading text.

| English heading | occurrences | bn |
|---|---|---|
| `# Introduction` | 6 | `# ভূমিকা` |
| `## Introduction` | 2 | `## ভূমিকা` |
| `## Key Takeaways` | 8 | `## মূল বিষয়গুলো` |
| `## Frequently Asked Questions` | 4 | `## প্রায়শই জিজ্ঞাসিত প্রশ্ন` |
| `## FAQ` | 3 | `## সাধারণ প্রশ্ন` |
| `## Walkthrough` | 3 | `## ধাপে ধাপে` |
| `## Prerequisites` | 3 | `## পূর্বশর্ত` |
| `Knowledge Check <n>` | ~90 | **unchanged: English, same number** |

`FAQ` is **translated**, not kept in Latin. It is a reader-facing heading with a
settled Bengali equivalent, and a lone Latin heading in the middle of a Bengali
page reads as unfinished work. The two FAQ headings stay distinguishable because
English already uses two (`FAQ` short, `Frequently Asked Questions` long). The
cost is that its `/content` anchor becomes `section-N` instead of `faq`, which
is the same trade every other Bengali heading already makes.

`Knowledge Check <n>` is the **only** heading that stays English: the compiler
reads it as an identifier and the frontend renders its own translated label.

**Every other slide heading must be translated.** In an earlier wave one agent
left all 45 of its slide headings in English and every automated check passed:
`verify` compares the heading *level* (`#` vs `##`), never the text.

## Fixed quiz-feedback openers

| English opener | occurrences | bn |
|---|---|---|
| `Try again!` | 159 | **আবার চেষ্টা করুন!** |
| `Correct!` | 74 | **সঠিক!** |
| `Correct.` | 2 | **সঠিক।** |
| `Right!` | 6 | **ঠিক বলেছেন!** |
| `Incorrect,` / `Incorrect.` | 4 | **ভুল,** / **ভুল।** |
| `True,` (opening a feedback sentence) | 3 | **সত্য,** |

Keep the punctuation the English used, and keep the opener as its own clause
followed by one short explanatory sentence.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the bare
words `True` and `False` (13 of each across the lessons). Render them as exactly:

| English option | bn |
|---|---|
| `True` | **সত্য** |
| `False` | **মিথ্যা** |

সত্য / মিথ্যা is the pair Bengali school exams use ("সত্য না মিথ্যা নির্ণয়
করুন"), so it reads as a labelled choice rather than as a comment.

**Do not re-translate these per lesson.** The 19 lessons are split across five
independent agents, so an unpinned two-word string drifts: before this section
existed, German shipped both *Wahr* and *Richtig*, Hindi both गलत and ग़लत (a
nukta apart, visually near-identical), Chinese both 正确 and 对, and Russian
three different pairs across five agents. None of it was visible to the
structural verifier, which checks that the option COUNT and the `[x]` index
match English and never looks at the option text.

Two constraints on the choice, both already satisfied above:

1. **The label must not collide with a quiz-feedback opener.** The correct-answer
   opener here is **সঠিক!**, and the True label is **সত্য**, so they are
   different words. Had "True" also been সঠিক, the toast would read as an echo
   of the option the learner just clicked rather than as a verdict. This is why
   Russian uses Правда/Неправда and not Верно/Неверно (its opener is `Верно!`),
   and why Indonesian uses Tepat! as its opener rather than Benar!, which is its
   "True" option. It is also why **ঠিক / ভুল** is rejected here: ভুল is already
   the `Incorrect` opener.
2. **Keep the `[x]` on the same option index as English.** Only the option TEXT
   changes; users have answer numbers saved in localStorage.

## Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin, but it
has three failure modes in Bengali, all confirmed in the vendored file:

- **It transliterates brand names.** `bitcoin = বিটকয়েন`, `ethereum = ইথেরিয়াম`,
  `metamask = মেটামাস্ক`, `uniswap = ইউনিসোয়াপ`, `coinbase = কয়েনবেস`,
  `optimism = অপটিমিজম`. All overridden to Latin. Bengali crypto writing keeps
  product names in Latin, and a transliterated one cannot be searched or typed
  into a wallet.
- **It expands acronyms into Sanskritized coinages**: `amm = স্বয়ংক্রিয় বাজার
  নির্ধারক (এএমএম)`, `mev = সর্বাধিক নিষ্কাশনযোগ্য মান (MEV)`, `tvl = মোট আবদ্ধ
  মূল্য (টিভিএল)`, `nft = নন-ফাঞ্জিবল টোকেন (NFT)`, `defi = বিকেন্দ্রীভূত
  অর্থব্যবস্থা (DeFi)`. All overridden to the bare Latin acronym. Doubly bad
  because it then re-transliterates the acronym itself (এএমএম, টিভিএল).
- **It returns inflected prose forms and Bengali digits**, both covered above.

Overrides where the Bengali word is not wrong, only wrong for this audience:
সেতু -> ব্রিজ, ঐক্যমত -> কনসেনসাস, সত্যায়ন -> অ্যাটেস্টেশন, স্ব-হেফাজত ->
সেলফ-কাস্টডি, জনকল্যাণ -> পাবলিক গুড, আন্তঃকার্যক্ষমতা -> ইন্টারঅপারেবিলিটি,
সংযোজনযোগ্যতা -> কম্পোজেবিলিটি, উদ্দেশ্য -> ইনটেন্ট, সমাধানকারী -> সলভার,
অর্পণ -> ডেলিগেশন, দ্বিঘাত অর্থায়ন -> কোয়াড্রেটিক ফান্ডিং, অ্যালাউন্স ->
খরচের সীমা, ট্রানজ্যাকশন -> লেনদেন, ব্লক নির্মাতা -> ব্লক বিল্ডার, ব্লক
প্রস্তাবক -> ব্লক প্রপোজার, প্রুফ-অফ-ওয়ার্ক -> প্রুফ অব ওয়ার্ক.

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick the term.

```terms
private key = প্রাইভেট কী
private keys = প্রাইভেট কী
public key = পাবলিক কী
blockchain = ব্লকচেইন
blockchains = ব্লকচেইন
blockchain technology = ব্লকচেইন প্রযুক্তি
blockchain apps = ব্লকচেইন অ্যাপ
blockchain trilemma = ব্লকচেইন ট্রাইলেমা
ethereum blockchain = Ethereum ব্লকচেইন
ethereum mainnet = Ethereum মেইননেট
layer 1 = Layer 1
layer 2 = Layer 2
l1 = L1
l2 = L2
alternative layer 1 = বিকল্প Layer 1
smart contract = স্মার্ট কন্ট্রাক্ট
smart contracts = স্মার্ট কন্ট্রাক্ট
smart account = স্মার্ট অ্যাকাউন্ট
smart wallet = স্মার্ট ওয়ালেট
cryptocurrency = ক্রিপ্টোকারেন্সি
cryptocurrencies = ক্রিপ্টোকারেন্সি
cryptocurrency mining = ক্রিপ্টোকারেন্সি মাইনিং
cryptocurrency wallet = ক্রিপ্টোকারেন্সি ওয়ালেট
crypto = ক্রিপ্টো
crypto wallet = ক্রিপ্টো ওয়ালেট
decentralized = বিকেন্দ্রীকৃত
decentralization = বিকেন্দ্রীকরণ
decentralized money = বিকেন্দ্রীকৃত মুদ্রা
decentralized finance = বিকেন্দ্রীকৃত অর্থব্যবস্থা
decentralized exchange = বিকেন্দ্রীকৃত এক্সচেঞ্জ
centralized exchange = কেন্দ্রীকৃত এক্সচেঞ্জ
centralized services = কেন্দ্রীকৃত সেবা
centralized exchange staking = কেন্দ্রীকৃত এক্সচেঞ্জ স্টেকিং
dapp = dApp
staking = স্টেকিং
staking pool = স্টেকিং পুল
staking providers = স্টেকিং প্রোভাইডার
solo staking = সোলো স্টেকিং
solo staker = সোলো স্টেকার
stake = স্টেক
staker = স্টেকার
restaking = রিস্টেকিং
liquid = লিকুইড
liquid staking token = লিকুইড স্টেকিং টোকেন
lsts = LSTs
web3 = Web3
web2 = Web2
block = ব্লক
block hash = ব্লক হ্যাশ
block explorer = ব্লক এক্সপ্লোরার
block reward = ব্লক পুরস্কার
block builder = ব্লক বিল্ডার
block proposer = ব্লক প্রপোজার
block producer = ব্লক প্রডিউসার
blockspace = ব্লকস্পেস
block space = ব্লকস্পেস
liquidity = তারল্য
liquidity pool = তারল্য পুল
dex = DEX
cex = CEX
dex aggregator = DEX অ্যাগ্রিগেটর
meta-aggregator = মেটা-অ্যাগ্রিগেটর
amm = AMM
lp = LP
tvl = TVL
mev = MEV
order book = অর্ডার বুক
market cap = মার্কেট ক্যাপ
validator = ভ্যালিডেটর
validators = ভ্যালিডেটর
validator node = ভ্যালিডেটর নোড
validator nodes = ভ্যালিডেটর নোড
validator client = ভ্যালিডেটর ক্লায়েন্ট
node = নোড
node operator = নোড অপারেটর
address = ঠিকানা
addresses = ঠিকানা
gas = গ্যাস
gas fee = গ্যাস ফি
gas fees = গ্যাস ফি
optimistic rollup = অপটিমিস্টিক রোলআপ
zk rollup = ZK রোলআপ
rollup = রোলআপ
sidechain = সাইডচেইন
sharding = শার্ডিং
payment channel = পেমেন্ট চ্যানেল
lightning network = Lightning Network
blob = ব্লব
seed phrase = সিড ফ্রেজ
recovery phrase = রিকভারি ফ্রেজ
dao = DAO
defi = DeFi
nft = NFT
peer-to-peer = পিয়ার-টু-পিয়ার
peer = পিয়ার
wallet = ওয়ালেট
wallets = ওয়ালেট
wallet app = ওয়ালেট অ্যাপ
hot wallet = হট ওয়ালেট
cold wallet = কোল্ড ওয়ালেট
hardware wallet = হার্ডওয়্যার ওয়ালেট
custodial wallet = কাস্টোডিয়াল ওয়ালেট
non-custodial wallet = নন-কাস্টোডিয়াল ওয়ালেট
self-custody = সেলফ-কাস্টডি
self-custody wallet = সেলফ-কাস্টডি ওয়ালেট
self-custodial = সেলফ-কাস্টডি ভিত্তিক
custodian = কাস্টোডিয়ান
ledger = খতিয়ান
token allowance = টোকেন খরচের সীমা
allowance = খরচের সীমা
token approval = টোকেন অনুমোদন
price impact = মূল্য প্রভাব
slippage = স্লিপেজ
slippage tolerance = স্লিপেজ টলারেন্স
front-running = ফ্রন্ট-রানিং
sandwich attack = স্যান্ডউইচ আক্রমণ
onchain = অনচেইন
offchain = অফচেইন
onchain governance = অনচেইন গভর্ন্যান্স
network governance = নেটওয়ার্ক গভর্ন্যান্স
governance = গভর্ন্যান্স
delegate = প্রতিনিধি
delegation = ডেলিগেশন
veto = ভেটো
permissionless = পারমিশনলেস
trustless = ট্রাস্টলেস
security = নিরাপত্তা
scalability = স্কেলেবিলিটি
interoperability = ইন্টারঅপারেবিলিটি
composability = কম্পোজেবিলিটি
fungibility = ফাঞ্জিবিলিটি
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
multi-token standard = মাল্টি-টোকেন স্ট্যান্ডার্ড
btc = BTC
eth = ETH
ether = ইথার
gwei = Gwei
transaction = লেনদেন
transactions = লেনদেন
transaction hash = লেনদেন হ্যাশ
transaction throughput = লেনদেন থ্রুপুট
transaction finality = লেনদেনের চূড়ান্ততা
token = টোকেন
tokens = টোকেন
token swap = টোকেন সোয়াপ
token pair = টোকেন পেয়ার
token distribution = টোকেন বিতরণ
intermediary token = মধ্যবর্তী টোকেন
coin = কয়েন
bridge = ব্রিজ
public good = পাবলিক গুড
public = সর্বজনীন
credible neutrality = বিশ্বাসযোগ্য নিরপেক্ষতা
equality of opportunity = সুযোগের সমতা
satoshi nakamoto = Satoshi Nakamoto
scarcity = দুষ্প্রাপ্যতা
scarce = দুষ্প্রাপ্য
supply = সরবরাহ
max supply = সর্বোচ্চ সরবরাহ
circulating supply = প্রচলিত সরবরাহ
inflation = মুদ্রাস্ফীতি
halving = হাভিং
gold standard = স্বর্ণমান
central bank = কেন্দ্রীয় ব্যাংক
commercial bank = বাণিজ্যিক ব্যাংক
monetary policy = মুদ্রানীতি
fiat = ফিয়াট
spot etf = স্পট ETF
onramp = অন-রাম্প
mining = মাইনিং
miner = মাইনার
miners = মাইনার
hash = হ্যাশ
consensus = কনসেনসাস
consensus mechanism = কনসেনসাস মেকানিজম
proof of work = প্রুফ অব ওয়ার্ক
proof of stake = প্রুফ অব স্টেক
proof-of-stake = প্রুফ অব স্টেক
slashing = স্ল্যাশিং
slashed = স্ল্যাশ
attestation = অ্যাটেস্টেশন
epoch = ইপক
finality = চূড়ান্ততা
finality time = চূড়ান্ততার সময়
settlement time = নিষ্পত্তির সময়
51% attack = 51% আক্রমণ
tps = TPS
censorship-resistant = সেন্সরশিপ-প্রতিরোধী
fraud proof = জালিয়াতির প্রমাণ
validity proof = বৈধতার প্রমাণ
zero-knowledge = জিরো-নলেজ
ethereum virtual machine = Ethereum Virtual Machine (EVM)
asynchronous = অ্যাসিনক্রোনাস
stablecoin = স্টেবলকয়েন
stablecoin issuer = স্টেবলকয়েন ইস্যুকারী
peg = পেগ
vault = ভল্ট
death spiral = ডেথ স্পাইরাল
counterparty risk = কাউন্টারপার্টি ঝুঁকি
memecoin = মিমকয়েন
mint = মিন্ট
password manager = পাসওয়ার্ড ম্যানেজার
social engineering = সোশ্যাল ইঞ্জিনিয়ারিং
phishing = ফিশিং
fomo = FOMO
hodl = HODL
two factor authentication = টু-ফ্যাক্টর অথেনটিকেশন
2fa = 2FA
red flag = রেড ফ্ল্যাগ
scam-token = স্ক্যাম টোকেন
fraud = জালিয়াতি
kyc = KYC
know-your-customer = নো ইওর কাস্টমার
digital signature = ডিজিটাল স্বাক্ষর
cryptography = ক্রিপ্টোগ্রাফি
encryption = এনক্রিপশন
swap = সোয়াপ
trade = ট্রেড
trade route = ট্রেড রুট
intent = ইনটেন্ট
solver = সলভার
batch auction = ব্যাচ নিলাম
otc = OTC
over the counter = ওভার দ্য কাউন্টার
private transaction routing = প্রাইভেট লেনদেন রাউটিং
app = অ্যাপ
app store = অ্যাপ স্টোর
intermediary = মধ্যস্থতাকারী
intermediaries = মধ্যস্থতাকারী
value-extractive = মূল্য-নিষ্কাশনকারী
value-extraction = মূল্য নিষ্কাশন
value-creation = মূল্য সৃষ্টি
yield farm = ইল্ড ফার্ম
collateral = জামানত
liquidation = লিকুইডেশন
quadratic funding = কোয়াড্রেটিক ফান্ডিং
allo protocol = Allo Protocol
retropgf = RetroPGF
fork = ফর্ক
open source = ওপেন সোর্স
onchain identity = অনচেইন পরিচয়
primary name = প্রাইমারি নেম
standard record = স্ট্যান্ডার্ড রেকর্ড
custom record = কাস্টম রেকর্ড
.eth = .eth
yourname.eth = yourname.eth
network = নেটওয়ার্ক
fee = ফি
```
