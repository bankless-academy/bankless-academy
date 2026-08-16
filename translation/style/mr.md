# Marathi style guide (translate-content)

Marathi is the third Indic-script language in this repo, after Hindi and
Bengali. It shares Devanagari with Hindi, and the registry comment in
`src/constants/languages.ts` says that means "nothing new mechanically".
**That is wrong, and this guide exists mostly because of it.** Marathi differs
from Hindi in three ways that each ship a silent bug:

1. Marathi postpositions **attach to the noun** (वॉलेटमध्ये, व्यवहाराचा). Hindi's
   are separate words (वॉलेट में, लेन-देन का). So a backticked term behaves like
   Bengali or Turkish here, not like Hindi.
2. Marathi ends a sentence with the **full stop `.`**, not the danda `।`. The
   vendored `translation/ethglossary/mr.json` proves it: 507 example sentences
   end in `.` and **zero** contain a danda.
3. Marathi writes the English "a" sound with **ॲ (U+0972)** and "o" with
   **ऑ (U+0911)**, letters Hindi does not use. Each has two other legal
   encodings that render identically, compare unequal, and **survive Unicode
   normalization**. `.normalize('NFC')` fixes Hindi's nukta problem. It does
   **not** fix any of Marathi's. See "Spelling and encoding traps".

About a dozen independent agents will translate the glossary, the four UI
namespaces and the 19 lessons from this document. It is the only thing holding
them to one Marathi. Read it end to end before writing a single slide.

## Variety and register

- Write **modern standard written Marathi (प्रमाण मराठी)**: the register of a
  well-written app or a news site (Google in Marathi, PhonePe, Loksatta or
  Maharashtra Times online). Bankless Academy is a peer teaching a peer.
- **Rule out the archaic and the heavily Sanskritised register.** An LLM drifts
  into it the moment a sentence gets formal, and one such verb makes the whole
  lesson read like a government circular or a 1940s textbook.

      avoid:  सदर व्यवहार पूर्ण करावयाचा असल्यास आपणांस शुल्क अदा करावे लागेल.
      use:    हा व्यवहार पूर्ण करण्यासाठी तुम्हाला शुल्क द्यावे लागते.

      avoid:  उपरोक्त बाबींच्या अनुषंगाने असे निदर्शनास येते की…
      use:    यावरून हे दिसते की…

  Specifically banned: the archaic verb morphology (करावयाचे, जाहले, होतसे,
  म्हणोनि, नव्हे काय), and the officialese lexicon (सदर, उपरोक्त, प्रस्तुत,
  विहित, अनुषंगाने, यास्तव, तद्नंतर, आपणांस).
- **Prefer the everyday word over the purist coinage.** Marathi has a
  language-purism tradition that invents native replacements for loanwords;
  none of them is what a reader says out loud.

  | use | not |
  |---|---|
  | फोन, मोबाइल | दूरध्वनी, भ्रमणध्वनी |
  | ईमेल | संगणकीय टपाल, विरोप |
  | वेबसाइट | संकेतस्थळ |
  | कोड | आज्ञावली |
  | डेटा | विदा |
  | ॲप | उपयोजन |

- Prefer **पण** over परंतु, **म्हणून** over यास्तव/किंबहुना, **वापरा** over
  उपयोग करावा, **पैसे** over द्रव्य or मुद्राव्यवस्था where पैसे will do.
- **Short sentences.** Marathi is verb-final, so a long English sentence becomes
  an unreadable Marathi one: the reader holds four clauses in memory before the
  verb arrives. Split at the clause boundary instead of chaining with
  "ज्यामुळे", "असल्याने", "हे लक्षात घेता", "याखेरीज".
- Explorer (the site's word for its readers) -> **एक्सप्लोरर**. It is a Latin
  loan, invariable, and grammatically neuter, which is also why it is safe:
  it never asserts the reader's gender. Do not translate it as शोधक or संशोधक.

## Address: तुम्ही, always

Marathi has **तू** (intimate singular), **तुम्ही** (polite / plural) and
**आपण**. Use **तुम्ही**. Never तू. And do **not** use आपण as a second-person
pronoun.

- तू to an adult stranger reads as talking down, not as friendliness. Every
  product a Marathi reader already uses says तुम्ही. The peer tone comes from
  the *vocabulary*, not from the pronoun.
- **आपण is ambiguous and must be avoided**: it is both the honorific "you" and
  the inclusive "we". "आपण हे पाहू" reads as "let us look at this", not as "you
  will look at this". A lesson that mixes both senses is genuinely confusing.
  Use तुम्ही for the reader; if you want the inclusive "let us", write it as a
  first-person plural verb (पाहूया) and keep it rare.

Forms every agent must use:

| | correct (तुम्ही) | wrong |
|---|---|---|
| imperative | करा, पाहा, ठेवा, तपासा, निवडा, क्लिक करा, लिहून ठेवा | कर, बघ, ठेव, तपास, निवड (these are तू) |
| present | तुम्ही करता, तुम्ही पाहता, तुम्ही वापरता | तुम्ही करतो, तुम्ही करतोस |
| copula | तुम्ही आहात | तुम्ही आहे, तुम्ही आहेस |
| future | तुम्ही पाहाल, तुम्ही शिकाल | तुम्ही पाहशील |
| dative | तुम्हाला | तुला |
| possessive | तुमचा / तुमची / तुमचे | तुझा / तुझी / तुझे |

- **Do not use the obligative -आवे form as the default instruction voice.**
  "वॉलेट उघडावे", "की जपून ठेवावी" is manual-speak. Write the plain imperative:
  "वॉलेट उघडा", "की जपून ठेवा". Reserve -आवे for genuine advice
  ("शक्यतो हार्डवेअर वॉलेट वापरावे" is acceptable once in a while).
- **Drop तुम्ही wherever the verb already carries it.** Marathi is pro-drop, and
  repeating तुम्ही in every sentence is the clearest signature of machine
  translation. Write "तुमचे वॉलेट उघडा", not "तुम्ही तुमचे वॉलेट उघडा". Keep
  तुम्ही only where ownership or contrast matters: "ही की फक्त तुमची आहे."

### Gender: the single biggest risk in Marathi

Marathi has **three genders** (पुल्लिंगी, स्त्रीलिंगी, नपुंसकलिंगी) and verbs,
adjectives, possessives and demonstratives all agree. Bengali has none of this
and Hindi has two genders. **Marathi is the hardest of the three**, and a
careless sentence about the reader asserts the reader's gender.

**Rule 1: stay in tenses that do not agree.** Present and future tense with
तुम्ही carry no gender. Past tense does.

    avoid:  आता तुम्ही तयार झालात.      (झालात is masculine; feminine is झाल्यात)
    avoid:  तुम्ही हे शिकून घेतलात.       (same problem)
    use:    आता तुम्ही तयार आहात.        (आहात has no gender)
    use:    आता तुम्हाला हे माहीत आहे.    (dative subject, nothing agrees)
    use:    तुम्ही हा धडा पूर्ण केला.       (केला agrees with धडा, not with you)

The last one is the useful trick: in a transitive past tense Marathi agrees with
the **object**, so "तुम्ही हा धडा पूर्ण केला" (धडा masculine), "तुम्ही ही
पायरी पूर्ण केली" (पायरी feminine), "तुम्ही हे वॉलेट तयार केले" (वॉलेट neuter)
are all safe. The gender comes from the thing, never from the reader.

**Rule 2: prefer gender-free agent nouns.** Marathi's -क / -िका and -कर्ता /
-कर्ती pairs are masculine/feminine pairs, so the -क form is not neutral.

    avoid:  लेखक / लेखिका, संपादक / संपादिका, वापरकर्ता / वापरकर्ती
    use:    वापरकर्ते (generic plural, what Marathi UIs use)
    use:    गुंतवणूकदार, खातेधारक, कीधारक      (-दार / -धारक are gender-free)
    use:    सहभागी, एक्सप्लोरर                  (invariable)

Where no neutral noun fits, **address the reader as तुम्ही instead of naming a
role at all**. "एक नवीन वापरकर्ता म्हणून तुम्ही…" becomes "तुम्ही नवीन असाल तर…".

**Rule 3: know the gender of the pinned loanwords, or two agents will disagree.**
The gender fixes हा/ही/हे, -चा/-ची/-चे, and any -आ adjective in the clause.
Nothing in the pipeline checks it; it is just visibly wrong Marathi, and
वॉलेट आहे vs वॉलेट आहेत across two lessons is exactly what this table prevents.

| gender | terms |
|---|---|
| **neuter** (हे, -चे) | वॉलेट, टोकन, नेटवर्क, रोलअप, स्टेकिंग, स्लिपेज, एक्सचेंज, तारण, एकमत, शुल्क, धोरण, बक्षीस, पर्व, अंतिमत्व, तंत्रज्ञान, एक्सप्लोरर |
| **masculine** (हा, -चा) | ब्लॉक, नोड, हॅश, गॅस, पत्ता, व्यवहार, पुरवठा, पैसा, ब्रिज, पूल, इथर, पेग, फोर्क, मायनर, सॉल्व्हर, प्रतिनिधी, मध्यस्थ, लिलाव, स्मार्ट कॉन्ट्रॅक्ट, कॉइन |
| **feminine** (ही, -ची) | ब्लॉकचेन, की, क्रिप्टोकरन्सी, तरलता, बँक, ओळख, सुरक्षा, फसवणूक, जोखीम, वस्तू, स्वाक्षरी, खतावणी, चलनवाढ, दुर्मिळता, मर्यादा, जोडी, निवड |

    हे `वॉलेट` तुमचे आहे.            ही `खाजगी की` तुमची आहे.
    `वॉलेट`चा पत्ता                  `खाजगी की`ची सुरक्षा
    हा `ब्लॉक` नवीन आहे.             ही `ब्लॉकचेन` सार्वजनिक आहे.

`ब्लॉकचेन` is feminine because चेन and साखळी are feminine in Marathi. This is
the one that will feel wrong to an agent reasoning from Hindi. Follow the table.

## Devanagari, transliteration, or Latin: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and **never mix buckets for the same term across two lessons**.

1. **Latin script, untouched.** Anything that is a name, a symbol or a code
   identifier. Products, networks and companies: Bitcoin, Ethereum, Uniswap,
   Optimism, Base, MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea,
   Revoke.cash, Lightning Network, Allo Protocol. People: Satoshi Nakamoto.
   Tickers and units: ETH, BTC, USDC, OP, Gwei, wei. Acronyms: API, DEX, CEX,
   AMM, LP, TVL, KYC, APR, APY, MEV, NFT, DAO, DeFi, Web3, Web2, L1, L2, TPS,
   PoW, PoS, ERC-20, ERC-721, ERC-1155, EIP, 2FA, FOMO, HODL, LSTs, OTC,
   RetroPGF. Domain-like strings: `.eth`, yourname.eth.
   Do **not** write बिटकॉइन, इथरियम, मेटामास्क, युनिस्वॅप or सातोशी नाकामोटो,
   even though `translation/ethglossary/mr.json` returns इथरियम. The pins
   below override it. A transliterated brand cannot be searched for, cannot be
   typed into a wallet, and does not match what the reader sees on screen.
2. **Devanagari transliteration.** A concept born in English that has no
   ordinary Marathi word, or has one that no Marathi-speaking crypto user says:
   ब्लॉकचेन, वॉलेट, ब्लॉक, टोकन, नोड, स्टेकिंग, मायनिंग, रोलअप, हॅश, गॅस,
   स्वॅप, ब्रिज, स्लिपेज, स्टेबलकॉइन, ऑनचेन, गव्हर्नन्स, ट्रस्टलेस,
   व्हॅलिडेटर, सीड फ्रेज, क्रिप्टोकरन्सी, स्मार्ट कॉन्ट्रॅक्ट.
3. **A real Marathi word.** The concept already exists in ordinary Marathi
   finance, civics or everyday speech, and the Marathi word teaches better than
   the loan: खतावणी (ledger), शुल्क (fee), पुरवठा (supply), दुर्मिळता
   (scarcity), चलनवाढ (inflation), व्यवहार (transaction), पत्ता (address),
   तरलता (liquidity), तारण (collateral), विकेंद्रित (decentralized),
   मध्यवर्ती बँक, चलनविषयक धोरण, सुवर्ण मानक, सुरक्षा, फसवणूक, संधीची समानता,
   खाजगी की, सार्वजनिक की, प्रतिनिधी (delegate), हल्ला (attack), बक्षीस (reward).

**The tiebreaker between buckets 2 and 3 is what a Marathi-speaking crypto user
says out loud, not what is formally correct.** That is why the pins use
गव्हर्नन्स and not प्रशासन, ब्रिज and not सेतू, व्हॅलिडेटर and not प्रमाणक,
मायनिंग and not खनन, अटेस्टेशन and not साक्षांकन. Put the rejected form in
`keyword_forms` so prose that uses it still resolves to a tooltip.

**Never mix scripts inside one word.** A Latin run has a space on both sides:
"Layer 2 उपाय", never "Layer 2उपाय" and never "लेयर 2". The one exception is a
Marathi case ending on a Latin stem, which takes a **hyphen**: see the next
section.

## Case endings and the backtick boundary

**This is the section Hindi does not have, and the one that will cost the most
rework if it is ignored.**

Marathi postpositions (शब्दयोगी अव्यये: -चा, -ला, -त, -मध्ये, -वर, -ने, -हून,
-साठी) are **suffixes written solid onto the noun**, not separate words:

    Marathi:  वॉलेटमध्ये, ब्लॉकचेनवर, व्यवहाराचा, पत्त्याला, टोकनचे
    Hindi:    वॉलेट में, ब्लॉकचेन पर, लेन-देन का, पते को, टोकन के

The keyword index is an **exact string match** after NFC + case folding
(`normalizeKeyword` in `content-lib.js`). It strips nothing. So an inflected
form inside backticks is a dead tooltip:

    dead:     `वॉलेटमध्ये` तुमची की असते.
    dead:     `व्यवहाराचा` वेग वाढतो.
    correct:  तुमची की `वॉलेट`मध्ये असते.
    correct:  `वॉलेट` तुमची की सांभाळते.

**The case marker always goes OUTSIDE the backticks.** Never inside. There is
no exception.

### Two kinds of stem, and only one of them can take a suffix outside backticks

Marathi puts a noun into its **सामान्यरूप (oblique form)** before a suffix, and
whether the stem changes depends on the word:

| stem type | examples | before a suffix | can you write `` `term` ``+suffix? |
|---|---|---|---|
| English loan, consonant-final | वॉलेट, ब्लॉक, टोकन, नोड, नेटवर्क, हॅश, रोलअप, पूल, गॅस | **unchanged**: वॉलेटमध्ये, ब्लॉकचा, टोकनचे | **yes** |
| native / tatsama | व्यवहार, शुल्क, बक्षीस, धोरण | **changes**: व्यवहारात, शुल्काचा, बक्षिसे | **no** |
| masculine -आ | पत्ता, पुरवठा, पैसा | **changes**: पत्त्यावर, पुरवठ्याचा, पैशाचा | **no** |
| feminine -ऊ / consonant | वस्तू, ओळख, फसवणूक, जोखीम | **changes**: वस्तूंचा, ओळखीचा, फसवणुकीचा, जोखमीचा | **no** |

`` `वॉलेट`मध्ये `` is legal Marathi and a live tooltip, because the stem does not
change. `` `व्यवहार`ात `` is a **broken word**: the correct form is व्यवहारात,
and putting व्यवहारात inside the backticks kills the tooltip.

Oblique stems for the native pins, so nobody has to guess:

    व्यवहार -> व्यवहारा-      पत्ता  -> पत्त्या-      पुरवठा -> पुरवठ्या-
    शुल्क   -> शुल्का-        पैसा   -> पैशा-         बक्षीस -> बक्षिसा-
    धोरण   -> धोरणा-         लिलाव  -> लिलावा-      मध्यस्थ -> मध्यस्था-
    फसवणूक -> फसवणुकी-       जोखीम  -> जोखमी-       ओळख   -> ओळखी-
    बँक    -> बँके-           सुरक्षा -> सुरक्षे-       तरलता  -> तरलते-
    खतावणी -> खतावणी-        चलनवाढ -> चलनवाढी-     वस्तू   -> वस्तू-

### The four legal fixes, in order of preference

1. **Rephrase so the term stands bare.** This is free and it is the house style:
   the finished Bengali and Turkish lessons in this repo, both suffixing
   languages, attach a suffix after a closing backtick **zero times** across a
   whole lesson. Make the term the subject, or move it behind a verb.
2. **Attach the suffix outside the backticks**, but only for an invariable
   English loan stem: `` `वॉलेट`मध्ये ``, `` `ब्लॉक`चा ``, `` `टोकन`चे ``.
   Verified: markdown-it parses this as a code span followed by text, so it
   renders and it matches. Use it sparingly; the tooltip underline visibly
   stops mid-word.
3. **Drop the backticks on that mention.** Backticks are not required anywhere.
   `translate-content.js`'s verifier checks images, links, quiz option count,
   `[x]` position, `> ℹ️` count, `<details>` and heading level, and **never
   counts backticks**. A term that appears five times only needs one tooltip:
   write the other four inflected and unmarked.
4. **Add the form to `keyword_forms`** in `translation/keywords/mr/keywords.json`.
   Do this for the forms that genuinely recur across lessons, not for a whole
   paradigm. The forms worth adding are nominal, not case-marked: plurals
   (वॉलेट्स, ब्लॉक्स, टोकन्स, पत्ते, व्यवहार) and the rejected synonym you
   overrode ETHGlossary with (सेतू under `bridge`, प्रमाणक under `validator`,
   खनन under `mining`, साक्षांकन under `attestation`).

### Latin stems take a hyphen

A Marathi suffix on a Latin word takes a **hyphen**, which keeps the Latin run
intact so it can still be searched and copied:

    Ethereum-वर, ETH-चे, Base-वर, DEX-मध्ये, DAO-ने, Bitcoin-ला

Never "Ethereumवर" and never "Ethereum वर". This is the same convention Marathi
newspapers use for abbreviations (RBI-ने, BJP-चे).

**Better still, rephrase so no suffix is needed.** Marathi lets a Latin name be
a bare subject with a demonstrative and a copula: "Bitcoin हे नवीन प्रकारचे
पैसे आहेत", "Ethereum ही एक ब्लॉकचेन आहे". Prefer that.

## The glossary keyword rule

`translation/keywords/mr/keywords.json` is keyed by the **English** term. The
`keyword` value is the display form a lesson backticks and the runtime index
matches on, so:

- **`keyword` must be the citation form**: the bare, uninflected, nominative
  singular, exactly as it appears in the ```terms``` block below. Never
  oblique, never with -मध्ये / -चा / -ला attached, never plural.
- **Inflected and plural forms go in `keyword_forms`**, plurals in
  `keyword_plural`.
- **ETHGlossary's `contexts.prose` field is not the citation form for Marathi.**
  It routinely returns an inflected form. Confirmed in the vendored file:
  `block` -> ब्लॉकमध्ये, `node` -> नोडद्वारे, `contract` -> कॉन्ट्रॅक्टमध्ये,
  `validator` -> प्रमाणकाने, `governance` -> प्रशासनात, `vault` -> तिजोरीत,
  `fork` -> फोर्कमुळे, `stablecoin` -> स्टेबलकॉइनचे, `token` -> टोकन्स,
  `miner` -> मायनर्स. Pin the bare noun; those forms belong in `keyword_forms`.
  This is the same defect that made `lang-tools pins` seed the wrong form for
  Korean, and it hits Marathi at roughly the same rate.
- **A pinned term is not automatically a backtickable one.** The ```terms```
  block fixes how a word is *translated* wherever it appears; the glossary
  decides whether it gets a tooltip. These pins have **no English glossary
  entry**, so backticking them is a dead tooltip and a build failure:

      governance · network · fee · supply · yield · lending · borrowing
      exchange · pool · custody · explorer

  Follow the pin for the wording, and add backticks only after checking
  `translation/keywords/en/keywords.json`.

## Spelling and encoding traps

Everything in this section renders identically to its wrong twin and compares
unequal. There is nothing to see in a screenshot and nothing in a diff.

### 1. NFC does not save you here

This is the crucial difference from Hindi. In Hindi the encoding trap is the
nukta, and NFC **is** the fix: U+0958 to U+095F decompose to base + U+093C.
Marathi's three traps are **not** Unicode composition exclusions, so NFC leaves
them exactly as they are. Verified:

    ॲ  U+0972              vs  अ+ॅ  U+0905 U+0945          NFC-equal: false
    ॲ  U+0972              vs  अ+ZWJ+ॅ U+0905 U+200D U+0945 NFC-equal: false
    ऑ  U+0911              vs  अ+ॉ  U+0905 U+0949          NFC-equal: false
    ऱ् U+0931 U+094D       vs  र्+ZWJ U+0930 U+094D U+200D  NFC-equal: false

`normalizeKeyword` NFC-normalizes both sides of every keyword comparison, and it
will not merge any of these. Run the check below on every file you write.

### 2. ॲ is U+0972. Always. Never अ + ॅ.

Marathi uses **ॲ (U+0972, DEVANAGARI LETTER CANDRA A)** for the English "a" in
app, address, asset, abstraction. Two other encodings exist and are both
forbidden here: `अ` + `ॅ` (U+0905 U+0945), and `अ` + ZWJ + `ॅ`.

This is already live in the vendored data. `translation/ethglossary/mr.json`
spells **the same word two ways**:

    ॲप         U+0972 U+092A                    (40 occurrences of ॲ in the file)
    अॅपमध्ये    U+0905 U+0945 U+092A …           (3 occurrences)
    अ‍ॅबस्ट्रॅक्शन  U+0905 U+200D U+0945 …          (2 occurrences, with a ZWJ)

Copy-paste from that file and you have shipped a term that will not match your
own glossary. Words this affects in these lessons: **ॲप, ॲप स्टोअर, ॲप्स,
ॲड्रेस, ॲग्रिगेटर, ॲसेट, ॲसिंक्रोनस**.

### 3. ऑ is U+0911. Always. Never अ + ॉ.

Same rule for the English "o": **ऑ (U+0911, DEVANAGARI LETTER CANDRA O)** in
ऑनचेन, ऑफचेन, ऑप्टिमिस्टिक, ऑर्डर, ऑथेंटिकेशन, ऑनरॅम्प, ऑपरेटर, ऑफ.
The vendored file gets this one right (132 occurrences, all U+0911); keep it
that way.

Note that the **matra** `ॅ` (U+0945) and `ॉ` (U+0949) on a *consonant* are
correct and required: गॅस, हॅश, कॉन्ट्रॅक्ट, व्हॅलिडेटर, स्लॅशिंग, कॉइन,
ब्लॉक, ऑप्शन. The rule is only about the standalone vowel: it must be the
single codepoint ॲ / ऑ, not अ plus a matra.

### 4. The eyelash ra is ऱ् (U+0931 + U+094D). Never र + ् + ZWJ.

Marathi's eyelash ra (as opposed to the reph र्) has two encodings that render
identically:

    correct:  ऱ्  =  ऱ (U+0931 RRA) + ् (U+094D)
    banned:   र्‍  =  र (U+0930) + ् (U+094D) + ZWJ (U+200D)

**This is not a rare edge case in Marathi lesson prose.** The oblique forms of
दुसरा and तिसरा are दुसऱ्या and तिसऱ्या, and "तिसऱ्या पक्षाकडे" (a third party)
appears in almost every DeFi and wallet lesson. Also वाऱ्या-, पायऱ्या (steps),
सुऱ्या. Get the encoding wrong once and every tooltip on that line is fine but
the word itself will never match anything you search for later.

### 5. No ZWJ, no ZWNJ, anywhere

U+200D and U+200C are invisible, are not removed by NFC, are not removed by
`normalizeKeyword`, and are permanent silent mismatches. Both of the traps
above have a ZWJ-based spelling; neither is allowed. **Zero U+200C and zero
U+200D in any Marathi file we write**: lesson md, keywords.json, website JSON.

### 6. Check every file before you hand it in

The patterns use `\u` escapes on purpose. Most of what this check looks for is
invisible, and a range written with the literal characters comes back from a
round trip through an editor as base letter + nukta, which JavaScript then
rejects as "Range out of order" if you are lucky and silently matches the wrong
thing if you are not. Copy the escapes, do not retype the letters.

    node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');const bad=[];
      if (s !== s.normalize('NFC')) bad.push('NOT NFC');
      if (/[\u200C\u200D]/.test(s)) bad.push('ZWJ/ZWNJ');
      if (/\u0905[\u0945\u0949]/.test(s)) bad.push('a+matra: write \u0972 / \u0911');
      if (/\u0930\u094D\u200D/.test(s)) bad.push('ZWJ eyelash ra: write \u0931\u094D');
      if (/[\u0966-\u096F]/.test(s)) bad.push('DEVANAGARI DIGITS');
      if (/[\u0958-\u095F]/.test(s)) bad.push('PRECOMPOSED NUKTA');
      if (/\u2014/.test(s)) bad.push('EM DASH');
      console.log(bad.length ? bad.join(', ') : 'ok')" <file>

### 7. One spelling per term, and the pins are the authority

Where two spellings are both current Marathi, **the ```terms``` block wins**,
and the loser goes in `keyword_forms` so prose written the other way still
resolves to a tooltip. Settled here:

| use | not | note |
|---|---|---|
| साइडचेन, ऑनलाइन, ऑफलाइन | साईडचेन, ऑनलाईन | short इ before a consonant, matching ETHGlossary's ऑनलाइन |
| इथर | ईथर | one spelling; the vendored file uses both |
| व्हॅलिडेटर | वॅलिडेटर, प्रमाणक | व्ह for English "v" |
| गव्हर्नन्स | गवर्नन्स, प्रशासन | |
| क्रिप्टोकरन्सी | क्रिप्टोकरेंसी | करन्सी, not करेंसी: that is the Hindi form |
| खाजगी | खासगी | both are current Marathi; pick one, and it is खाजगी |
| महत्त्वाचे | महत्वाचे | the geminate त्त् is standard |
| अनुस्वार ं | conjunct न्/म् | विकेंद्रित not विकेन्द्रित, केंद्र not केन्द्र, तंत्रज्ञान not तन्त्रज्ञान |

Two exceptions to the anusvara preference, both visible in the pins: a
**geminate** nasal keeps the conjunct (एन्क्रिप्शन, कॉन्ट्रॅक्ट), and a
loanword whose conventional spelling uses the conjunct keeps it
(स्टँडर्ड, ट्रस्टलेस). Chandrabindu ँ stays where it belongs on a nasalized
vowel (सँडविच).

**Prefer copy-paste over retyping for every pinned term.** The pins are the
spelling authority even where ETHGlossary spells a term differently.

## Length: the estimator is honest horizontally, generous vertically

`displayWidth` in `content-lib.js` counts Devanagari at 1 unit per non-combining
codepoint. Devanagari is not in the `WIDE` regex (that covers only CJK, kana,
Hangul and fullwidth forms), and every matra, virama and anusvara is a `\p{M}`
that contributes zero. Measured over all 19 lessons, Hindi against its English
source, and Marathi behaves the same way:

| | hi vs en |
|---|---|
| `displayWidth` | **0.736x** |
| raw codepoints | 0.925x |
| grapheme clusters | 0.716x |

So the 22-line ceiling behaves like a Latin language's. What the estimator
cannot see is **vertical**: Devanagari stacks matras above and below the
shirorekha and conjuncts add a storey below the line, so a Marathi line is
physically taller than a Latin one inside the fixed 533px slide. The verifier
will wave through slides the reader still has to scroll.

**Target 18 estimated lines, not 22.** Treat 22 as the point at which the build
fails, not as the budget. The gate only fires when the translation is both over
22 **and** longer than English, so a bloated slide whose English source was
already long can slip through. Judge it yourself.

**Quiz options: keep raw `.length` at or under 70**, the same number as English,
since Marathi codepoint count tracks English closely. Move any nuance into the
`> ℹ️` feedback line.

Compression that works in Marathi, in order of how much it buys:

1. Drop तुम्ही / तुमचा. The verb already carries it.
2. Drop the -णे आवश्यक आहे and -णे शक्य आहे periphrasis: लागते, शकते.
3. Cut a ज्यामुळे / असल्याने relative clause into a second sentence.
4. Prefer the loan when it is shorter and equally clear: DEX over
   विकेंद्रित एक्सचेंज on a crowded slide, once the full form has appeared once.
5. Cut "-च्या माध्यमातून", "-च्या बाबतीत", "करण्याकरिता" where a plain verb does it.
6. Drop "एक" where English had no article and Marathi does not need one.

## Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build on
any `**` or `_` that survives as literal text. Marathi has word spaces, so it is
safer than Japanese, but five patterns still break. **Every row below was run
through `findBrokenEmphasis` from `content-lib.js`, both columns:**

    breaks:  **मूल्य:**वेळ वाचतो.              ->  **मूल्य**: वेळ वाचतो.
    breaks:  हे **वॉलेट.**पुढची पायरी.          ->  हे **वॉलेट**. पुढची पायरी.
    breaks:  **(खाजगी की)**गुप्त ठेवा.          ->  (**खाजगी की**) गुप्त ठेवा.
    breaks:  शुल्क **0.05%**पेक्षा कमी आहे.      ->  शुल्क **0.05%** पेक्षा कमी आहे.
    breaks:  **महत्त्वाचे!**कोणालाही सांगू नका.   ->  **महत्त्वाचे**! कोणालाही सांगू नका.
    breaks:  ब्लॉक_चेन_ हा शब्द नवीन आहे.       ->  ब्लॉक*चेन* हा शब्द नवीन आहे.

Rules:

- Never let a closing `**` sit on punctuation with a Marathi letter jammed
  against it. **A space after the closing marker is enough**, and Marathi has
  spaces, so this is easy. Keeping the punctuation outside (`**प्रश्न**:`)
  passes in every case, so just do that.
- **Watch the suffix.** Marathi's habit of attaching -पेक्षा, -मध्ये, -चा
  directly to the preceding word is exactly what creates the
  `**0.05%**पेक्षा` failure, and it has no Hindi equivalent (Hindi's से is a
  separate word). Put a space after the closing `**`, or move the bold.
- **Never use `_…_` against a Devanagari letter.** `_` cannot open or close
  intraword and Devanagari letters count as word characters. Use `*…*`.
- Bold the link *text*, not the whole link:
  `[**Ethereum**](https://ethereum.org)`. Verified to pass.

Verify a finished body file yourself:

    node --input-type=module -e "import fs from 'fs';
      const {findBrokenEmphasis}=await import('./content-lib.js');
      console.log(findBrokenEmphasis(fs.readFileSync(process.argv[1],'utf8')))" <file>

## Numbers: Latin digits, international scale, always

- **Latin digits only. Never Devanagari digits ०१२३४५६७८९.** Every wallet,
  exchange, block explorer and price chart the reader will ever open uses Latin
  digits, and the lesson `![](…)` images are in Latin digits too.
  `translation/ethglossary/mr.json` has **108 Devanagari digits** in it,
  including `लेयर २`, `स्तर २ (l2)`, `वेब३`, `५१% हल्ला`, `३२ ईथर` and
  `१२ सेकंद`. Every one of those is overridden by the pins below:
  **Layer 2**, **L2**, **Web3**, **51% हल्ला**, **32 ETH**, **12 सेकंद**.
- **International scale words, transliterated: मिलियन, बिलियन, ट्रिलियन. Do NOT
  convert to लाख or कोटी.** Marathi uses लाख and कोटी constantly, so this is a
  live risk. Three reasons, in order of weight: the figures in these lessons are
  canonical and the reader will meet them written the same way everywhere
  ("21 मिलियन BTC", not "2.1 कोटी BTC"); converting requires arithmetic that no
  verifier in this repo can check, so a slip ships as a fact; and the slide text
  would stop matching the number printed in its image.
- **International comma grouping**, matching the English source: 21,000,000 and
  120,000. Not the South Asian 2,10,00,000.
- Decimal point is a period: 0.0002 ETH, 0.05%.
- Percent sign directly after the number, no space: **51%**. Spell it out only
  when the sentence needs a word: "51 टक्के".
- Currency and years pass through as in English: $100, 2009, 2025.

## Typography

- **End a declarative sentence with the full stop `.`, not the danda `।`.**
  This is the sharpest divergence from Hindi and Bengali in this guide, and it
  is not a judgment call: standard modern Marathi orthography uses the
  पूर्णविराम `.`, and the vendored `mr.json` contains 507 example sentences
  ending in `.` and **zero** dandas. Do not copy Hindi punctuation habits.
  "हे Ethereum-वर चालते." No space before the stop, one space after.
- Questions take `?` and exclamations take `!`.
- **No full stop on a heading**, on a short list fragment, or on a quiz option.
  Feedback lines under `> ℹ️` are full sentences and do take one.
- Comma is the Latin `,`, colon the Latin `:`. Marathi has no full-width
  punctuation, unlike ja and zh. Do not use the Devanagari abbreviation sign ॰.
- Quotation marks are “ ” with ‘ ’ nested.
- **Never use the em dash U+2014.** Use a comma, a colon, parentheses, or a
  second sentence. No en dash for ranges either: write "2020 ते 2024".
- Hyphens are part of the spelling of several pins and must be kept exactly:
  पीअर-टू-पीअर, सेल्फ-कस्टडी, नॉन-कस्टोडियल, फ्रंट-रनिंग, टू-फॅक्टर,
  झिरो-नॉलेज, मेटा-ॲग्रिगेटर, सेन्सॉरशिप-प्रतिरोधक, मल्टी-टोकन.
- One space between a Latin run and the Marathi around it, except for a case
  ending, which takes a hyphen and no space: Ethereum-वर.
- **No automatic typography pass runs for `mr`.** `TYPOGRAPHY` in
  `content-lib.js` has entries only for fr, cs and pl, so `build-translation.sh`
  will not fix anything for you. Everything above is on the writer.

## Interface strings

Keep an English app's button label in English and gloss it in Marathi on first
use, then use the English label alone afterwards:

    “Connect Wallet” (वॉलेट जोडा) या बटणावर क्लिक करा.

The label is what the reader sees on screen; translating it away means they
cannot find the button.

## Headings and `/content` anchors

Marathi headings slugify to nothing in the `/content` anchor generator, so those
pages fall back to `section-N` anchors. `headingId` in
`src/utils/lessonContent.ts` requires the slug to match `/^[a-z0-9-]+$/` after
NFD and mark-stripping, and Devanagari letters never survive that. **This is
expected and matches hi, bn, ja and zh. Do not add Latin text to a heading to
work around it.**

## Fixed section headings

These recur across lessons that different agents will handle. **Use exactly the
Marathi in this table. Do not re-translate them per lesson, and do not improve
on them.** Two agents each picking a defensible synonym is what shipped three
different renderings of `Key Takeaways` in German and four of `Try again!` in
Japanese, all repaired centrally afterwards. Counts are over the 19 active
lessons.

| English heading | Marathi | occurrences |
|---|---|---|
| `Key Takeaways` | `महत्त्वाचे मुद्दे` | 7 |
| `Introduction` | `प्रस्तावना` | 6 |
| `Walkthrough` | `टप्प्याटप्प्याने` | 3 |
| `FAQ` | `नेहमीचे प्रश्न` | 3 |
| `Frequently Asked Questions` | `वारंवार विचारले जाणारे प्रश्न` | 3 |
| `Prerequisites` | `पूर्वतयारी` | 2 |
| `Choosing a DEX` | `DEX-ची निवड` | 2 |

- **`FAQ` and `Frequently Asked Questions` stay distinct**, exactly as in the
  English source, which uses a short heading in three lessons and a long one in
  three others. They never co-occur in one file, but they must not collapse to
  one Marathi string across the corpus. `FAQ` is translated rather than left in
  Latin: it is a reader-facing heading with a settled Marathi equivalent, and a
  lone Latin heading in the middle of a Marathi page reads as unfinished work.
- **A suffixed heading keeps the pinned form and translates only what follows
  the colon.** `## Walkthrough: Using Revoke.cash` becomes
  `## टप्प्याटप्प्याने: Revoke.cash वापरणे`.
- **Keep the heading level exactly as the source has it** (`#` vs `##` vs
  `###`). `Key Takeaways`, `FAQ`, `Frequently Asked Questions`, `Walkthrough`
  and `Prerequisites` are all `##`; `Introduction` is `#` in five lessons and
  `##` in one; `Choosing a DEX` is `#` in one and `##` in the other. Copy what
  the English file has. No trailing full stop, no `**bold**`.
- `DEX-ची निवड` is a noun phrase on purpose: a verb form (`DEX कसा निवडावा`)
  would force an agreement decision on DEX's gender that two agents would settle
  differently.
- **`Knowledge Check <n>` stays in English, with its original number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two.
- **Every other slide heading must be translated.** In an earlier wave one agent
  left all 45 of its slide headings in English and every automated check passed:
  the structural verifier compares the heading *level*, never the text. There is
  now a ratio-based warning in `validate-content.js`, but it is a warning.

## Fixed quiz-feedback openers

Almost every `> ℹ️` line opens with one of a handful of English interjections.
**Pin the opener; write the rest of the sentence freely.** Counts are over the
19 active lessons.

| English opener | Marathi | occurrences |
|---|---|---|
| `Try again!` | **पुन्हा प्रयत्न करा!** | 148 |
| `Correct!` | **बरोबर!** | 67 |
| `Incorrect,` / `Incorrect.` | **चुकीचे,** / **चुकीचे.** | 4 |
| `Right!` | **अगदी बरोबर!** | 3 |
| `True,` (opening a feedback sentence) | **खरे आहे,** | 3 |
| `Correct.` | **बरोबर.** | 1 |

- Keep the punctuation the English used, and keep the opener as its own clause
  followed by one short explanatory sentence.
- `Try again!` is the imperative in the तुम्ही form (करा), matching the address
  rule. `पुन्हा प्रयत्न कर!` is तू and is wrong.
- Keep the whole feedback to one or two short sentences. It renders as a toast
  overlay, which gets intrusive on mobile, and Marathi runs longer than English
  once suffixes are attached.

## Fixed True/False option labels

Twelve Knowledge Checks are True/False questions whose two options are the bare
words `True` and `False`. Render them as exactly:

| English option | mr |
|---|---|
| `True` | **खरे** |
| `False` | **खोटे** |

खरे / खोटे is everyday Marathi and is one of the pairs Marathi school exams use
("खरे की खोटे"). The neuter singular form is correct here because the implied
subject is विधान (statement), which is neuter, so the label never agrees with
the reader.

**Do not re-translate these per lesson.** The 19 lessons are split across
independent agents, so an unpinned two-word string drifts: before this section
existed, German shipped both *Wahr* and *Richtig*, Hindi both गलत and ग़लत (a
nukta apart, visually near-identical), Chinese both 正确 and 对, and Russian
three different pairs across five agents. None of it was visible to the
structural verifier, which checks that the option COUNT and the `[x]` index
match English and never looks at the option text.

Two constraints on the choice, both already satisfied above:

1. **The label must not collide with a quiz-feedback opener.** The
   correct-answer opener here is **बरोबर!**, so the True label must not also be
   बरोबर, or the toast would read as an echo of the option the learner just
   clicked rather than as a verdict. This is exactly why the obvious Marathi
   exam pair **बरोबर / चूक is rejected**, why Russian uses Правда/Неправда and
   not Верно/Неверно (its opener is `Верно!`), and why Indonesian uses Tepat!
   as its opener rather than Benar!, which is its "True" option. It is also why
   `False` is खोटे and not चुकीचे, which is already the `Incorrect` opener.
2. **Keep the `[x]` on the same option index as English.** Only the option TEXT
   changes; users have answer numbers saved in localStorage.

## Glossary overrides

ETHGlossary (`translation/ethglossary/mr.json`) is the fallback for anything the
block below does not pin, but it has five failure modes in Marathi, all
confirmed in the vendored file:

- **It uses Devanagari digits** (108 of them) and **transliterates brand names**
  (`ethereum mainnet = इथरियम मेननेट`). Both overridden.
- **It returns inflected prose forms**, covered under "The glossary keyword
  rule" above.
- **It prefers Sanskritised coinages no one says**, and two of them are actively
  misleading. `governance = प्रशासन` means government *administration*, not DAO
  governance. `trustless = विश्वासरहित` reads as *faithless / untrustworthy*,
  which is the opposite of the concept, exactly as Hindi's विश्वासहीन did.
  Also overridden here: सेतू -> ब्रिज, प्रमाणक -> व्हॅलिडेटर, खनन -> मायनिंग,
  साक्षांकन -> अटेस्टेशन, गूढलेखन -> क्रिप्टोग्राफी, कूटलेखन -> एन्क्रिप्शन,
  आंतरकार्यक्षमता -> इंटरऑपरेबिलिटी, संयोज्यता -> कंपोझेबिलिटी,
  वर्गीय निधीपुरवठा -> क्वाड्रॅटिक फंडिंग, रोखीकरण -> लिक्विडेशन,
  तिजोरी -> व्हॉल्ट, पर्व -> इपॉक, उद्देश -> इंटेंट, अधिकारप्रदान -> डेलिगेशन,
  अदलाबदल -> स्वॅप, स्मार्ट खाते -> स्मार्ट अकाउंट,
  ब्लॉक निर्माता -> ब्लॉक बिल्डर, ब्लॉक प्रस्तावक -> ब्लॉक प्रपोजर.
- **It calques two terms the reader will meet in English on their own wallet
  screen.** `seed phrase = बीज वाक्य` and `self-custody = स्व-ताबा` are
  literal translations nobody uses, and the wallet UI in front of the reader
  says "Seed Phrase". Overridden to **सीड फ्रेज** and **सेल्फ-कस्टडी**,
  following the same call Hindi made. ETHGlossary itself lists सीड फ्रेज as an
  alias.
- **It contradicts itself across related entries.** Three pairs, all fixed here:
  `onchain = ऑनचेन` but `offchain = साखळीबाह्य` (fixed: **ऑफचेन**);
  `consensus = एकमत` but `consensus mechanism = सहमती यंत्रणा` (fixed:
  **एकमत यंत्रणा**); `miner = मायनर` but `mining = खनन` (fixed: **मायनिंग**).
  `liquidity = तरलता` and `liquidity pool = तरलता पूल` already agree; keep them
  that way.

Two more consistency decisions that the seed data left open:

- **विकेंद्रित / केंद्रित** for the adjectives and **विकेंद्रीकरण /
  केंद्रीकरण** for the nouns. Do not mix -इत and -ईकृत in one pair.
- **The -ility terms are all transliterated**: स्केलेबिलिटी, इंटरऑपरेबिलिटी,
  कंपोझेबिलिटी, फंजिबिलिटी. They are crypto terms of art with no settled
  Marathi, and a half-native, half-loan set would look like four different
  translators.

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick the term.

```terms
private key = खाजगी की
private keys = खाजगी की
public key = सार्वजनिक की
blockchain = ब्लॉकचेन
blockchains = ब्लॉकचेन
blockchain technology = ब्लॉकचेन तंत्रज्ञान
blockchain apps = ब्लॉकचेन ॲप्स
blockchain trilemma = ब्लॉकचेन ट्रायलेमा
ethereum blockchain = Ethereum ब्लॉकचेन
ethereum mainnet = Ethereum मेननेट
layer 1 = Layer 1
layer 2 = Layer 2
alternative layer 1 = पर्यायी Layer 1
l1 = L1
l2 = L2
smart contract = स्मार्ट कॉन्ट्रॅक्ट
smart contracts = स्मार्ट कॉन्ट्रॅक्ट
smart account = स्मार्ट अकाउंट
smart wallet = स्मार्ट वॉलेट
cryptocurrency = क्रिप्टोकरन्सी
cryptocurrencies = क्रिप्टोकरन्सी
cryptocurrency mining = क्रिप्टोकरन्सी मायनिंग
cryptocurrency wallet = क्रिप्टोकरन्सी वॉलेट
crypto = क्रिप्टो
crypto wallet = क्रिप्टो वॉलेट
decentralized = विकेंद्रित
centralized = केंद्रित
decentralization = विकेंद्रीकरण
decentralized money = विकेंद्रित पैसा
decentralized finance = विकेंद्रित वित्त
decentralized exchange = विकेंद्रित एक्सचेंज
centralized exchange = केंद्रित एक्सचेंज
centralized services = केंद्रित सेवा
centralized exchange staking = केंद्रित एक्सचेंज स्टेकिंग
dapp = dApp
staking = स्टेकिंग
staking pool = स्टेकिंग पूल
staking providers = स्टेकिंग प्रोव्हायडर
solo staking = सोलो स्टेकिंग
solo staker = सोलो स्टेकर
stake = स्टेक
staker = स्टेकर
restaking = रिस्टेकिंग
liquid = लिक्विड
liquid staking token = लिक्विड स्टेकिंग टोकन
lsts = LSTs
web3 = Web3
web2 = Web2
block = ब्लॉक
block hash = ब्लॉक हॅश
block explorer = ब्लॉक एक्सप्लोरर
block reward = ब्लॉक बक्षीस
block builder = ब्लॉक बिल्डर
block proposer = ब्लॉक प्रपोजर
block producer = ब्लॉक प्रोड्युसर
blockspace = ब्लॉकस्पेस
block space = ब्लॉकस्पेस
wallet = वॉलेट
wallets = वॉलेट
wallet app = वॉलेट ॲप
hot wallet = हॉट वॉलेट
cold wallet = कोल्ड वॉलेट
hardware wallet = हार्डवेअर वॉलेट
custodial wallet = कस्टोडियल वॉलेट
non-custodial wallet = नॉन-कस्टोडियल वॉलेट
self-custody = सेल्फ-कस्टडी
self-custody wallet = सेल्फ-कस्टडी वॉलेट
self-custodial = सेल्फ-कस्टडी असलेला
custodian = कस्टोडियन
custody = कस्टडी
seed phrase = सीड फ्रेज
recovery phrase = रिकव्हरी फ्रेज
liquidity = तरलता
liquidity pool = तरलता पूल
pool = पूल
dex = DEX
cex = CEX
dex aggregator = DEX ॲग्रिगेटर
meta-aggregator = मेटा-ॲग्रिगेटर
amm = AMM
lp = LP
tvl = TVL
mev = MEV
otc = OTC
over the counter = ओव्हर द काउंटर
exchange = एक्सचेंज
order book = ऑर्डर बुक
market cap = मार्केट कॅप
batch auction = बॅच लिलाव
validator = व्हॅलिडेटर
validators = व्हॅलिडेटर
validator node = व्हॅलिडेटर नोड
validator nodes = व्हॅलिडेटर नोड
validator client = व्हॅलिडेटर क्लायंट
node = नोड
node operator = नोड ऑपरेटर
address = पत्ता
addresses = पत्ते
gas = गॅस
gas fee = गॅस शुल्क
gas fees = गॅस शुल्क
fee = शुल्क
network = नेटवर्क
optimistic rollup = ऑप्टिमिस्टिक रोलअप
zk rollup = ZK रोलअप
rollup = रोलअप
sidechain = साइडचेन
sharding = शार्डिंग
payment channel = पेमेंट चॅनेल
lightning network = Lightning Network
blob = ब्लॉब
bridge = ब्रिज
onchain = ऑनचेन
offchain = ऑफचेन
onchain governance = ऑनचेन गव्हर्नन्स
network governance = नेटवर्क गव्हर्नन्स
governance = गव्हर्नन्स
delegate = प्रतिनिधी
delegation = डेलिगेशन
veto = व्हेटो
dao = DAO
defi = DeFi
nft = NFT
peer-to-peer = पीअर-टू-पीअर
peer = पीअर
permissionless = परवानगीमुक्त
trustless = ट्रस्टलेस
censorship-resistant = सेन्सॉरशिप-प्रतिरोधक
ledger = खतावणी
transaction = व्यवहार
transactions = व्यवहार
transaction hash = व्यवहार हॅश
transaction throughput = व्यवहार थ्रूपुट
transaction finality = व्यवहाराचे अंतिमत्व
finality = अंतिमत्व
finality time = अंतिमत्वाचा वेळ
settlement time = सेटलमेंटचा वेळ
epoch = इपॉक
token = टोकन
tokens = टोकन
token allowance = टोकन खर्च मर्यादा
allowance = खर्च मर्यादा
token approval = टोकन मंजुरी
token swap = टोकन स्वॅप
token pair = टोकन जोडी
token distribution = टोकन वितरण
intermediary token = मध्यवर्ती टोकन
multi-token standard = मल्टी-टोकन स्टँडर्ड
coin = कॉइन
trade = ट्रेड
trade route = ट्रेड रूट
swap = स्वॅप
slippage = स्लिपेज
slippage tolerance = स्लिपेज टॉलरन्स
price impact = किंमत प्रभाव
front-running = फ्रंट-रनिंग
sandwich attack = सँडविच हल्ला
private transaction routing = खाजगी व्यवहार राउटिंग
intent = इंटेंट
solver = सॉल्व्हर
stablecoin = स्टेबलकॉइन
stablecoin issuer = स्टेबलकॉइन जारीकर्ता
peg = पेग
vault = व्हॉल्ट
death spiral = डेथ स्पायरल
counterparty risk = काउंटरपार्टी जोखीम
memecoin = मीमकॉइन
mint = मिंट
collateral = तारण
liquidation = लिक्विडेशन
yield = यील्ड
yield farm = यील्ड फार्म
lending = कर्ज देणे
borrowing = कर्ज घेणे
hash = हॅश
mining = मायनिंग
miner = मायनर
miners = मायनर
consensus = एकमत
consensus mechanism = एकमत यंत्रणा
proof of work = प्रूफ ऑफ वर्क
proof of stake = प्रूफ ऑफ स्टेक
proof-of-stake = प्रूफ ऑफ स्टेक
slashing = स्लॅशिंग
slashed = स्लॅश
attestation = अटेस्टेशन
51% attack = 51% हल्ला
tps = TPS
fraud proof = फसवणुकीचा पुरावा
validity proof = वैधतेचा पुरावा
zero-knowledge = झिरो-नॉलेज
ethereum virtual machine = Ethereum Virtual Machine (EVM)
asynchronous = ॲसिंक्रोनस
scalability = स्केलेबिलिटी
interoperability = इंटरऑपरेबिलिटी
composability = कंपोझेबिलिटी
fungibility = फंजिबिलिटी
credible neutrality = विश्वासार्ह तटस्थता
public good = सार्वजनिक वस्तू
public = सार्वजनिक
equality of opportunity = संधीची समानता
quadratic funding = क्वाड्रॅटिक फंडिंग
allo protocol = Allo Protocol
retropgf = RetroPGF
open source = ओपन सोर्स
fork = फोर्क
security = सुरक्षा
fraud = फसवणूक
phishing = फिशिंग
social engineering = सोशल इंजिनिअरिंग
password manager = पासवर्ड मॅनेजर
two factor authentication = टू-फॅक्टर ऑथेंटिकेशन
2fa = 2FA
red flag = रेड फ्लॅग
scam-token = स्कॅम टोकन
fomo = FOMO
hodl = HODL
digital signature = डिजिटल स्वाक्षरी
cryptography = क्रिप्टोग्राफी
encryption = एन्क्रिप्शन
kyc = KYC
know-your-customer = नो युवर कस्टमर
supply = पुरवठा
max supply = कमाल पुरवठा
circulating supply = चलनातील पुरवठा
scarcity = दुर्मिळता
scarce = दुर्मिळ
inflation = चलनवाढ
halving = हाल्विंग
gold standard = सुवर्ण मानक
central bank = मध्यवर्ती बँक
commercial bank = व्यापारी बँक
monetary policy = चलनविषयक धोरण
fiat = फियाट
spot etf = स्पॉट ETF
onramp = ऑनरॅम्प
app = ॲप
app store = ॲप स्टोअर
intermediary = मध्यस्थ
intermediaries = मध्यस्थ
value-extractive = मूल्य शोषणारे
value-extraction = मूल्य शोषण
value-creation = मूल्य निर्मिती
onchain identity = ऑनचेन ओळख
primary name = प्राइमरी नेम
standard record = स्टँडर्ड रेकॉर्ड
custom record = कस्टम रेकॉर्ड
.eth = .eth
yourname.eth = yourname.eth
ether = इथर
eth = ETH
btc = BTC
gwei = Gwei
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
satoshi nakamoto = Satoshi Nakamoto
```
