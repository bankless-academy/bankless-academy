# Telugu style guide (translate-content)

Telugu joins Hindi and Bengali as an Indic-script language in this repo, and is
the first Dravidian one. Some of the reasoning below is the reasoning
`translation/style/hi.md` and `translation/style/bn.md` already reach, for the
same reasons: a Brahmic abugida, more than one legal encoding for the same
rendered word, Latin brand names inside a non-Latin sentence.

**Three things make Telugu harder than either of them**, and each ships a bug
that renders acceptably and compares unequal:

1. Telugu **agglutinates**. Case endings attach directly to the noun with no
   space, and for one whole noun class the stem changes before them. A
   backticked term is matched **verbatim**, so an inflected term inside
   backticks is a dead tooltip that looks perfectly fine on screen.
2. Telugu loanword spellings carry a **ZWNJ (U+200C)** inside the word.
   బ్లాక్‌చైన్ contains one. A version written without it is a different string.
3. The vowel sign **ై (U+0C48) has a canonical decomposition**, so it has two
   encodings that render identically.

About a dozen independent agents will translate the glossary, the UI and the 19
lessons from this document. It is the only thing holding them to one Telugu.
Read it end to end before writing a single slide.

## Variety and register

- Write **శిష్ట వ్యావహారికం**: modern standard *written* Telugu, the register of
  a well-edited news site (Eenadu, Sakshi, BBC తెలుగు) or a good app UI. It is
  neither the archaic literary register nor transcribed speech.
- **Rule out గ్రాంథికం explicitly.** An LLM drifts into it the moment a sentence
  turns formal, and one archaic verb makes the whole slide read like a 1950s
  school textbook. Never write:

      avoid:  ఉన్నది, కలదు, గలదు, అయ్యెను, చేసెను, వచ్చెను, ఇచ్చెను
      use:    ఉంది, ఉంది, ఉంది, అయింది, చేసింది, వచ్చింది, ఇచ్చింది

      avoid:  చేయును, చేయుచున్నది, చేయబడును, పొందవచ్చును
      use:    చేస్తుంది, చేస్తోంది, చేస్తారు, పొందవచ్చు

      avoid:  ఇట్టి, అట్టి, ఎట్టి, యథా, అథవా, తత్
      use:    ఇలాంటి, అలాంటి, ఎలాంటి, ఉదాహరణకు, లేదా, ఆ

      avoid:  నెట్‌వర్క్ యందు, భద్రత కొరకు, దాని మూలమున
      use:    నెట్‌వర్క్‌లో,  భద్రత కోసం,   దాని వల్ల

- **The single most visible గ్రాంథికం tell is the -ము ending. Always write -ం.**
  ధనం not ధనము, కారణం not కారణము, విషయం not విషయము, ప్రయోజనం not ప్రయోజనము,
  సంతకం not సంతకము. There is no exception in these lessons.
- **Do not go the other way into transcribed speech either.** వస్తన్నారు,
  చేస్తన్నడు, ఏంటంటే, ఇయ్యి belong in dialogue, not in a lesson slide. The
  written standard is చేస్తున్నారు, అంటే, ఇవ్వు.
- **Stay neutral between Telangana and Andhra/Rayalaseema.** Prefer the forms
  that print uses on both sides. Avoid the Telangana finite ending -రు for
  -్నారు (చేస్తున్నరు -> **చేస్తున్నారు**), avoid ఏం/ఏంది for ఏమిటి, and avoid
  Rayalaseema-marked vocabulary. Where a Sanskrit word and an everyday word
  both exist, take the everyday one.
- Keep vocabulary everyday, not officialese. Write "వాడండి", not "వినియోగించడం
  జరుగుతుంది"; "అందుకే", not "కావున"; "డబ్బు", not "ద్రవ్య వ్యవస్థ" where
  "డబ్బు" will do. Bankless Academy is a peer teaching a peer, not a government
  circular.
- **Avoid the passive.** Telugu -బడు passives (చేయబడుతుంది, ఇవ్వబడింది,
  నమోదు చేయబడుతుంది) are a translationese signature and they are longer.
  Write the active: చేస్తుంది, ఇచ్చింది, నమోదు అవుతుంది.
- Short sentences. Telugu is verb-final, so a long English sentence becomes an
  unreadable Telugu one. Split at the clause boundary instead of chaining with
  "అందువల్ల", "అయినప్పటికీ", "అనే విషయాన్ని దృష్టిలో ఉంచుకుని".
- Explorer (the site's word for its readers) -> **ఎక్స్‌ప్లోరర్**.

## Address: మీరు, always

Telugu has two second-person pronouns: **నువ్వు** (familiar singular) and
**మీరు** (polite / plural). **Use మీరు. Never నువ్వు, never నీవు.**

The pronoun is not the warmth dial. నువ్వు to an adult stranger reads as talking
down, not as friendliness, and every product a Telugu reader already uses
(Google in తెలుగు, WhatsApp, PhonePe, Paytm) says మీరు. The peer tone comes from
the *vocabulary*, not the pronoun. **మీరు also buys gender neutrality for free**
(see below), which నువ్వు does not.

- **Imperatives take the -ండి ending**: చేయండి, చూడండి, ఉంచండి, తెరవండి,
  పంపండి, ఎంచుకోండి, రాసుకోండి, క్లిక్ చేయండి, తనిఖీ చేయండి, గుర్తుంచుకోండి.
  Negative imperative: చేయవద్దు, ఇవ్వవద్దు, చూపించవద్దు.
- **Wrong**: చెయ్యి, చూడు, ఉంచు, పంపు (those are నువ్వు forms) and
  చేయుము, చూడుము (those are గ్రాంథికం).
- **Finite verbs with మీరు take the -రు ending**: మీరు చేస్తారు, మీరు చూశారు,
  మీరు ఉన్నారు, మీరు తెలుసుకుంటారు, మీరు పంపగలరు. "మీరు చేస్తాడు" and
  "మీరు చేస్తావు" are wrong.
- Possessive is **మీ**: మీ వాలెట్, మీ `ప్రైవేట్ కీ`, మీ డబ్బు. Reflexive is
  **మీ సొంత** / **మీరే**: "మీ సొంత కీలు", "మీరే నియంత్రిస్తారు".
- **Drop మీరు wherever the verb already carries it.** Telugu is pro-drop, and
  repeating మీరు in every sentence is the clearest signature of machine
  translation. Write "మీ వాలెట్ తెరవండి", not "మీరు మీ వాలెట్ తెరవండి". Keep
  మీరు only where ownership or contrast matters: "ఈ కీ మీది మాత్రమే."

### Gender: the verb agrees, so plan for it

Telugu inanimate nouns have no grammatical gender, so the Hindi का/की/के problem
and the German der/die/das problem simply do not exist. Adjectives never agree.
**The verb does**, in the third person, through the మహత్ / అమహత్ split:

| subject | ending | example |
|---|---|---|
| human, masculine, singular | **-డు** | వినియోగదారుడు చేస్తా**డు** |
| human, feminine, singular | **-ది** | వినియోగదారురాలు చేస్తు**ంది** |
| human, plural (and honorific singular) | **-రు** | వినియోగదారులు చేస్తా**రు** |
| non-human (any number) | **-ది / -ాయి** | నెట్‌వర్క్ చేస్తు**ంది** |

So a generic third-person human subject forces you to pick a gender for a reader
who has none. **Four strategies, in order of preference:**

1. **Address the reader directly with మీరు.** -రు agreement is gender-free.
   Most slides can do this and should.
2. **Use the human plural** for a generic actor: వినియోగదారులు, పెట్టుబడిదారులు,
   మైనర్లు. -రు agreement again, and తమ instead of తన.
3. **Prefer gender-free agent nouns.** The **-దారు** family
   (వినియోగదారు, ఖాతాదారు, జారీదారు, పెట్టుబడిదారు), the **-వారు** participle
   (స్టేక్ చేసేవారు, నిర్వహించేవారు), and the **-్త** agent nouns
   (ధృవీకర్త, పరిష్కర్త) are all common-gender.
4. **Use the Latin loan.** మైనర్, వాలిడేటర్, స్టేకర్, డెవలపర్, బిల్డర్ carry no
   Telugu gender morphology at all. This is a real, practical argument for the
   transliteration-first policy below, not just a stylistic one.

**Never use a -ుడు / -ురాలు pair.** That is exactly what ETHGlossary offers for
two of our terms, and both are overridden in the pins below:

      avoid:  బ్లాక్ ప్రతిపాదకుడు      (ETHGlossary's `block proposer`)
      avoid:  ధృవీకరించేవాడు          (ETHGlossary's `attestation` agent form)
      use:    `బ్లాక్ ప్రపోజర్`, `అటెస్టేషన్`

Worked examples:

      avoid:  ఒక వినియోగదారుడు తన `ప్రైవేట్ కీ`ని పోగొట్టుకుంటే, డబ్బు పోతుంది.
      use:    ఒక వినియోగదారు తమ `ప్రైవేట్ కీ` పోగొట్టుకుంటే, డబ్బు పోతుంది.
      use:    మీ `ప్రైవేట్ కీ` పోగొట్టుకుంటే, డబ్బు తిరిగి రాదు.

      avoid:  బ్లాక్ ప్రతిపాదకుడు కొత్త బ్లాక్‌ను ప్రతిపాదిస్తాడు.
      use:    `బ్లాక్ ప్రపోజర్` కొత్త బ్లాక్‌ను ప్రతిపాదిస్తారు.      (human role, -రు)
      use:    `వాలిడేటర్` ప్రతి లావాదేవీని తనిఖీ చేస్తుంది.           (software role, -ది)

For a role that is software, the అమహత్ **-ది** ending is correct and gender-free.
For a role that is a person, use the honorific plural **-రు**. Never -డు.

Third-person pronouns: prefer **వారు / వారి / తమ** over అతను / ఆమె / తన.

## Telugu script, transliteration, or Latin: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and never mix buckets for the same term across two lessons.

1. **Latin script, untouched.** Anything that is a name, a symbol or a code
   identifier. Products, networks and companies: Bitcoin, Ethereum, Uniswap,
   Optimism, Base, MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea,
   Revoke.cash, Ledger, Lightning Network, Allo Protocol. People: Satoshi
   Nakamoto. Tickers and units: ETH, BTC, USDC, OP, Gwei, wei. Acronyms: API,
   DEX, CEX, AMM, LP, TVL, KYC, APR, APY, MEV, NFT, DAO, DeFi, Web3, Web2, L1,
   L2, PoW, PoS, TPS, ERC-20, ERC-721, ERC-1155, EIP, 2FA, FOMO, HODL, LSTs,
   RetroPGF. Domain-like strings: yourname.eth, .eth.
   Do **not** write బిట్‌కాయిన్, ఎథీరియం, మెటామాస్క్ or కాయిన్‌బేస్, even though
   `translation/ethglossary/te.json` returns exactly those. The pins below
   override every one of them.
2. **Telugu-script transliteration.** A concept born in English that has no
   ordinary Telugu word, or has one that no Telugu-speaking crypto user says:
   బ్లాక్‌చైన్, వాలెట్, టోకెన్, నోడ్, బ్లాక్, స్టేకింగ్, మైనింగ్, రోలప్, హాష్,
   గ్యాస్, స్వాప్, స్టేబుల్‌కాయిన్, స్లిప్పేజ్, ఆన్‌చైన్, గవర్నెన్స్,
   ట్రస్ట్‌లెస్, వాలిడేటర్, సీడ్ ఫ్రేజ్, స్మార్ట్ కాంట్రాక్ట్, క్రిప్టోకరెన్సీ,
   సెల్ఫ్-కస్టడీ.
3. **A real Telugu word.** The concept already exists in ordinary Telugu
   finance, civics or everyday speech, and the Telugu word teaches better than
   the loan: చిరునామా (address), లావాదేవీ (transaction), ఖాతా (account),
   ఫీజు (fee), సరఫరా (supply), కొరత (scarcity), ద్రవ్యోల్బణం (inflation),
   వికేంద్రీకృత (decentralized), తాకట్టు (collateral), భద్రత (security),
   మోసం (fraud), నాణెం (coin), రుజువు (proof), ప్రతినిధి (delegate),
   మధ్యవర్తి (intermediary), కేంద్ర బ్యాంకు, ద్రవ్య విధానం, ఖాతా పుస్తకం
   (ledger), అవకాశాల సమానత్వం (equality of opportunity).

**The policy is transliteration-first for established crypto vocabulary.** Where
buckets 2 and 3 both look defensible, the tiebreaker is **what a Telugu-speaking
crypto user says out loud, not what is formally correct.** That is why the pins
use గవర్నెన్స్ and not పరిపాలన, సీడ్ ఫ్రేజ్ and not బీజ పదబంధం, లిక్విడిటీ and
not ద్రవ్యత, మింట్ and not ముద్రించు. Put the rejected form in `keyword_forms`
so prose that uses it still resolves to a tooltip.

**Never mix scripts inside one word.** A Latin run has a space on both sides:
"Layer 2 పరిష్కారం", never "Layer 2పరిష్కారం" and never "లేయర్ 2". The one
exception is a Telugu case ending on a Latin stem, which takes a **hyphen**:
see the next section.

## Agglutination, case suffixes and the backtick boundary

**This is the single most likely source of silent breakage in Telugu.** Read it
twice.

Hindi postpositions (का, में, से) are separate words, so a Hindi noun inside
backticks stays intact. **Telugu విభక్తి endings attach directly to the noun
with no space**, so the surface form changes and the tooltip dies:

    dead:     `బ్లాక్‌చైన్‌లో` ప్రతి లావాదేవీ నమోదవుతుంది.     (locative -లో fused)
    dead:     `వాలెట్‌ను` తెరవండి.                            (accusative -ను fused)
    dead:     `ప్రైవేట్ కీని` ఎవరికీ చూపించవద్దు.              (accusative -ని fused)
    dead:     `టోకెన్‌లు` పంపడం సులభం.                        (plural -లు fused)
    dead:     `ఏకాభిప్రాయాన్ని` ఎలా చేరుకుంటారు?              (stem change AND suffix)

The keyword index is an **exact string match** after NFC + case folding
(`normalizeKeyword` in `content-lib.js`). It strips nothing: not a suffix, not
a ZWNJ. Nothing in the pipeline can see the failure, because
`translate-content.js`'s verifier checks images, links, quiz option count, the
`[x]` index, `> ℹ️` counts, `<details>` and heading level, and **never counts or
reads backticks**. `validate-content.js` catches it later as a dead tooltip, one
verify cycle wasted.

### The four legal fixes, in order of preference

1. **Rephrase so the term stands bare.** This is free, and it is what most
   slides should do.

       instead of: `బ్లాక్‌చైన్‌లో` ప్రతి లావాదేవీ నమోదవుతుంది.
       write:      ప్రతి లావాదేవీని `బ్లాక్‌చైన్` నమోదు చేస్తుంది.

       instead of: `వాలెట్‌ను` తెరవండి.
       write:      మీ `వాలెట్` తెరవండి.

2. **Put the suffix outside the backticks**, but only when the stem does not
   change:

       correct:  ప్రతి లావాదేవీ `బ్లాక్‌చైన్`లో నమోదవుతుంది.
       correct:  మీ `వాలెట్`ను తెరవండి.
       correct:  `టోకెన్`లు పంపడం సులభం.

   The code span and the suffix land in different HTML elements, so they render
   as if a ZWNJ sat between them (వాలెట్‌ను), which is the spelling Telugu print
   uses for loanwords anyway. Only the code-span text is matched, so the tooltip
   resolves.

3. **Drop the backticks on that mention.** Backticks are not required anywhere.
   If a term reads best inflected in that sentence, write it inflected with no
   backticks and backtick a bare mention elsewhere in the lesson. A term that
   appears five times only needs one tooltip.

4. **Add the inflected form to `keyword_forms`** in
   `translation/keywords/te/keywords.json`. Do this for forms that genuinely
   recur, not for the whole paradigm.

### Which stems change, and which do not

**Latin-loan stems ending in a virama do NOT change.** వాలెట్, టోకెన్, బ్లాక్,
నోడ్, రోలప్, హాష్, గ్యాస్, స్టేక్, పూల్ take the suffix cleanly, so fix 2 always
works on them:

| ending | function | on వాలెట్ | on టోకెన్ |
|---|---|---|---|
| -ను / -ని | accusative | వాలెట్‌ను | టోకెన్‌ను |
| -కు / -కి | dative | వాలెట్‌కు | టోకెన్‌కు |
| -లో | locative | వాలెట్‌లో | టోకెన్‌లో |
| -తో | instrumental / comitative | వాలెట్‌తో | టోకెన్‌తో |
| -లు | plural | వాలెట్‌లు | టోకెన్‌లు |
| -లను / -లకు / -లలో | oblique plural | వాలెట్‌లను | టోకెన్‌లకు |

Ablative and genitive are separate words: **వాలెట్ నుంచి**, and for the genitive
prefer plain juxtaposition (**వాలెట్ చిరునామా**) over **వాలెట్ యొక్క చిరునామా**.
యొక్క is the loudest machine-translation tell in Telugu and it costs four
clusters. Cut it.

**Native nouns ending in a vowel also do not change**: లావాదేవీ -> లావాదేవీని,
లావాదేవీకి · చిరునామా -> చిరునామాను, చిరునామాకు · తాకట్టు -> తాకట్టును,
తాకట్టుగా · కీ -> కీని, కీకి · ధర -> ధరను.

**Neuter nouns ending in -ం DO change**, in the accusative and dative: the -ం
becomes -ా- before the ending. This is the Telugu equivalent of Hindi's
पता -> पते trap, and fix 2 cannot be used on them.

| citation | accusative | dative | locative (no change) |
|---|---|---|---|
| ఏకాభిప్రాయం | ఏకాభిప్రాయాన్ని | ఏకాభిప్రాయానికి | ఏకాభిప్రాయంలో |
| డిజిటల్ సంతకం | సంతకాన్ని | సంతకానికి | సంతకంలో |
| ధర ప్రభావం | ప్రభావాన్ని | ప్రభావానికి | ప్రభావంలో |
| ప్రజా ప్రయోజనం | ప్రయోజనాన్ని | ప్రయోజనానికి | ప్రయోజనంలో |
| టోకెన్ ఆమోదం | ఆమోదాన్ని | ఆమోదానికి | ఆమోదంలో |
| నాణెం | నాణేన్ని | నాణేనికి | నాణెంలో |
| ద్రవ్యోల్బణం | ద్రవ్యోల్బణాన్ని | ద్రవ్యోల్బణానికి | ద్రవ్యోల్బణంలో |

For these seven, **rephrase (fix 1), backtick the bare form, or drop the
backticks (fix 3)**. Never split them.

### Latin stems take a hyphen

A Telugu ending on a Latin word takes a **hyphen**, which keeps the Latin run
intact and copy-pasteable: **Ethereum-లో, ETH-ను, ETH-కు, Base-లో, DEX-లు,
Bitcoin-ను**. Never Ethereumలో (the ticker stops being selectable as one token)
and never "Ethereum లో" (a bare suffix is not a word). This mirrors the
convention `translation/style/bn.md` already sets for Bengali.

When the Latin term is backticked, the hyphen and ending sit outside:
`ETH`-ను, `DEX`-లు.

## The glossary keyword rule

`translation/keywords/te/keywords.json` is keyed by the **English** term. The
`keyword` value is the display form a lesson backticks and the runtime index
matches on, so:

- **`keyword` must be the citation form**: the bare, uninflected noun, exactly
  as it appears in the ```terms``` block below. Never an accusative, never a
  dative, never with -లు or -లో attached.
- **Inflected forms go in `keyword_forms`**, plural forms in `keyword_plural`.
  For a high-traffic noun, three to six forms is right: -ను, -కు, -లో, -తో,
  -లు, -లను.
- **ETHGlossary's `contexts.prose` field is NOT the citation form for Telugu.**
  It routinely returns an agglutinated form: `attestation` -> ధృవీకరణను,
  `private key` -> ప్రైవేట్ కీని, `bridge` -> వారధిని, `collateral` -> తాకట్టుగా,
  `delegate` -> ప్రతినిధికి, `mainnet` -> మెయిన్‌నెట్‌లో, `crypto` -> క్రిప్టోలో,
  `liquidation` -> లిక్విడేషన్‌కు, `validator` -> ధృవీకర్తగా, `signature` ->
  సంతకాన్ని. **140 of the 541 vendored entries (26%) differ between `term` and
  `contexts.prose.term`, and the difference is always a case suffix.** Pin the
  bare noun; those forms belong in `keyword_forms`.
- **For an English plural key, pin the same Telugu citation (singular) form as
  the singular key**, and record the Telugu plural in `keyword_plural`. That is
  why `wallets = వాలెట్` and `blockchains = బ్లాక్‌చైన్` below. Both the bare and
  the plural display forms then resolve.
- **A pinned term is not automatically a backtickable one.** The ```terms```
  block fixes how a word is *translated* wherever it appears; the glossary
  decides whether it gets a tooltip. In this repo **`network`, `fee`, `supply`,
  `governance` and `yield` have no English glossary entry**, so backticking any
  of them is a dead tooltip and a build failure. They are pinned at the end of
  the block, marked, for prose consistency only. Every other pin in the block
  does have an entry. Check `translation/keywords/en/keywords.json` before
  adding backticks to anything not in the block.

## Spelling and encoding: four ways to ship an invisible bug

Everything in this section renders identically, or near-identically, to its
wrong twin and compares unequal. There is nothing to see in a screenshot.

### 1. The ZWNJ is part of the spelling

**Telugu loanword compounds carry U+200C (ZERO WIDTH NON-JOINER) inside the
word**, and `బ్లాక్‌చైన్` is one of them: బ్ల + ా + క్ + **ZWNJ** + చ + ై + న్.

The ZWNJ stops the renderer forming a conjunct across the compound seam. Without
it, క్ + చ stacks చ underneath క, so "బ్లాక్చైన్" comes out as బ్లా-క్చై-న్: a
different, wrong-looking syllable break that is easy to miss at slide font size
and **always a different string**. `normalizeKeyword` does not remove it and NFC
does not remove it, so it is a permanent silent mismatch.

**In Telugu text a ZWNJ only ever appears immediately after a virama ్ (U+0C4D).
Verified: all 1,177 ZWNJs in the Telugu strings of `translation/ethglossary/te.json`
sit there.** A ZWNJ anywhere else is a bug.

The pinned spellings that contain one, and must be **copied, never retyped**:

    బ్లాక్‌చైన్   నెట్‌వర్క్   ఆన్‌చైన్   ఆఫ్‌చైన్   సైడ్‌చెయిన్   మెయిన్‌నెట్
    స్టేబుల్‌కాయిన్   హార్డ్‌వేర్   బ్లాక్‌స్పేస్   ఎక్స్‌ఛేంజ్   ఎక్స్‌ప్లోరర్
    పాస్‌వర్డ్   శాండ్‌విచ్   ఎన్‌క్రిప్షన్   ట్రస్ట్‌లెస్   మీమ్‌కాయిన్
    కౌంటర్‌పార్టీ   సెన్సార్‌షిప్   సెటిల్‌మెంట్   బ్లాక్‌చైన్‌లో (inflected)

**ETHGlossary contradicts itself on exactly this**, which is why the pins exist:

    block explorer          బ్లాక్ ఎక్స్‌ప్లోరర్     ఎక్స్ + ZWNJ + ప్లోరర్
    decentralized exchange  వికేంద్రీకృత ఎక్స్ఛేంజ్   ఎక్స్ + no ZWNJ + ఛేంజ్

Same prefix, two spellings, one file. **The block below wins: ఎక్స్‌ఛేంజ్ and
ఎక్స్‌ప్లోరర్, both with the ZWNJ.**

For **inflected forms** (prose, and anything you put in `keyword_forms`): a
Telugu suffix on a virama-final loan stem also takes a ZWNJ, matching the
vendored data and Telugu print: వాలెట్‌ను, టోకెన్‌లు, బ్లాక్‌చైన్‌లో,
రోలప్‌లు. Whatever bytes you write in prose must be the bytes in
`keyword_forms`. **Native stems ending in a vowel take no ZWNJ**: లావాదేవీని,
చిరునామాకు.

**Never use ZWJ (U+200D) anywhere.** Telugu has no use for it here, and it is a
different invisible character with the opposite effect.

### 2. NFC only, and ై is the trap

**ై (U+0C48, TELUGU VOWEL SIGN AI) has a canonical decomposition to
ె (U+0C46) + ౕ (U+0C56).** The two render pixel-identically and compare unequal.
NFC recomposes them, so `.normalize('NFC')` is both the test and the fix. It is
the **only** character in the Telugu block with a canonical decomposition, and
it is in some of our highest-traffic terms: బ్లాక్‌**చై**న్, ఆన్‌**చై**న్,
సైడ్‌**చె**యిన్, **సై**డ్‌చెయిన్, ప్రై**వే**ట్ (no), **మై**నర్, **మై**నింగ్.

`translation/ethglossary/te.json` is NFC-clean, so copy-paste from it is safe.
Your own IME may not be. Check any file you touch:

    node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');
      const bad=[];
      if (s!==s.normalize('NFC')) bad.push('NOT NFC');
      if (/\u200D/.test(s)) bad.push('ZWJ');
      if (/[^\u0C4D]\u200C/.test(s)) bad.push('ZWNJ NOT AFTER VIRAMA');
      if (/[\u0C66-\u0C6F]/.test(s)) bad.push('TELUGU DIGITS');
      if (/\u2014/.test(s)) bad.push('EM DASH');
      if (/[\u0C31\u0C58\u0C59\u0C00]/.test(s)) bad.push('ARCHAIC LETTER');
      console.log(bad.length?bad.join(', '):'ok')" <file>

Every character it looks for is written as a `\u` escape, so the check is safe
to copy and paste. U+0C4D is the virama, U+200C the ZWNJ, U+0C31 the archaic ra,
U+0C58 / U+0C59 the archaic ts / dz letters, and U+0C00 the arasunna.

Run it on **every lesson body, every `keywords.json` and every
`website/te/*.json` you write**, and expect `ok`. Run it on *this* file and it
reports `TELUGU DIGITS, ARCHAIC LETTER`, because the sections below have to
print the characters they forbid. That is the only file where a hit is expected.

`normalizeKeyword` NFC-normalizes both sides, so the runtime index survives an
NFD term. **`lang-tools merge` does not**: its style-pin check compares with a
bare `.toLowerCase()`, so a decomposed pin against a composed glossary entry is
reported as `style guide pins "X" but entry reads "X"` with two identical-looking
strings. Do not spend an hour on that message. Run the check above first.

### 3. అనుస్వారం ం, not the conjunct nasal

A nasal before a stop is written with the **anusvara ం (U+0C02)** in modern
standard Telugu, not with the conjunct: **కాంట్రాక్ట్** not కాన్ట్రాక్ట్,
**ఏకాభిప్రాయం** not ఏకాభిప్రాయమ్, **సంతకం**, **అంశం**, **పంపండి**,
**వికేంద్రీకరణ**, **ఫండింగ్**, **ఎక్స్‌ఛేంజ్**. Both spellings are legal Telugu
and look nearly the same, and nothing normalizes them, so one agent writing
కాన్ట్రాక్ట్ kills every tooltip on that slide.

Two things that are **not** this rule and keep their conjunct: a geminate
(ఉన్న, అన్ని, ఒప్పు, మళ్లీ) and a nasal before another nasal.

Also drop the archaic **arasunna ఀ (U+0C00)** entirely. We never need it.

### 4. Confusable and archaic letters

These are one keystroke apart, Telugu pronounces several of the pairs
identically in casual speech, and a single one of them is a dead tooltip:

- **Aspirated vs unaspirated**: క/ఖ, గ/ఘ, చ/ఛ, జ/ఝ, ట/ఠ, డ/ఢ, త/థ, ద/ధ, ప/ఫ,
  బ/భ. Live in our terms: ఎ**థీ**రియం, **ధ**ృవీకరణ, **భ**ద్రత, **ఛా**నల్,
  **ఫీ**జు, ఆ**ధా**రిత.
- **న vs ణ**, **ల vs ళ**, **స vs శ vs ష**: ప్రయో**జ**నం, **శా**ండ్‌విచ్,
  హా**ష్**, మ**ళ్లీ**.
- **Short vs long vowels** are meaning-bearing: ఇ/ఈ, ఉ/ఊ, ఎ/ఏ, ఒ/ఓ.
  **ఈ**థర్, **ఏ**కాభిప్రాయం, **ఓ**పెన్ సోర్స్.
- **ఱ (U+0C31) is archaic. Never write it; use ర.** Same for **ౘ (U+0C58)** and
  **ౙ (U+0C59)**; use చ and జ.

**Prefer copy-paste over retyping for every pinned term**, from this file or
from `translation/keywords/te/keywords.json`. The pins are the spelling
authority even where ETHGlossary spells a term differently.

## Length: the estimator under-measures Telugu, so aim lower

`displayWidth` in `content-lib.js` treats **Telugu as single-width** (the `WIDE`
regex covers only CJK, kana, Hangul and fullwidth forms) and **skips every
`\p{M}` codepoint**. Telugu matras, the virama and the anusvara are all
combining marks, so the estimator counts roughly one unit per **rendered
cluster**. That is the right thing to count, but it means a Telugu slide
measures well below its English source:

| | measured |
|---|---|
| 541 vendored terms vs their English keys | codepoints **1.08x**, `displayWidth` **0.67x** |
| Sample slide sentence, te vs en | `displayWidth` **0.65x** (37 vs 57) |
| Whole lesson files, closest analogues (hi/en and bn/en, 19 lessons each) | `displayWidth` **0.74x** and **0.73x** |

So a 21-line English slide comes back as a 14-16 line Telugu one and the
verifier waves through slides the reader still has to scroll: a Telugu cluster
is at least as wide as a Latin character and **taller**, because matras stack
above and below the line and conjuncts add another storey inside the fixed
533px slide.

**Target 18 estimated lines, not 22.** Treat 22 as the point at which the build
fails, not as the budget. The gate only fires when the translation is both over
22 **and** longer than English, so a bloated slide whose English source was
already long can slip through; judge it yourself.

**Quiz options: keep raw `.length` at or under 70**, the same number as English.
Telugu codepoint count tracks English closely (1.08x), so the English budget
transfers directly. Move nuance into the `> ℹ️` feedback line.

Compression that works in Telugu, in order of how much it buys:

1. **Cut యొక్క.** "వాలెట్ యొక్క చిరునామా" -> "వాలెట్ చిరునామా".
2. **Cut అనేది.** "బ్లాక్‌చైన్ అనేది ఒక భాగస్వామ్య రికార్డు" -> "బ్లాక్‌చైన్ ఒక
   భాగస్వామ్య రికార్డు".
3. **Drop మీరు.** The verb already carries it.
4. **Kill -బడు passives.** చేయబడుతుంది -> చేస్తుంది; నమోదు చేయబడుతుంది ->
   నమోదవుతుంది.
5. **Prefer the short transliteration over the long descriptive gloss.**
   లిక్విడిటీ (5 clusters) over ద్రవ్యత plus a gloss; DEX over
   వికేంద్రీకృత ఎక్స్‌ఛేంజ్ once the full form has appeared once.
6. Cut "-అనే విషయం", "-చేయడం ద్వారా", "-కోసం ఉపయోగపడుతుంది" where a plain verb
   does the job.
7. Drop "ఒక" where English had no article and Telugu does not need one.

## Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build on
any `**` or `_` that survives as literal text. Telugu has word spaces, so it is
safer than Japanese, but the same patterns break. **Every row below was run
through `findBrokenEmphasis` from `content-lib.js`**, both columns:

    breaks:  **విలువ:**సమయం ఆదా అవుతుంది.          ->  **విలువ**: సమయం ఆదా అవుతుంది.
    breaks:  ఇది **వాలెట్.**తదుపరి దశ.              ->  ఇది **వాలెట్**. తదుపరి దశ.
    breaks:  **(ప్రైవేట్ కీ)**రహస్యంగా ఉంచండి.       ->  (**ప్రైవేట్ కీ**) రహస్యంగా ఉంచండి.
    breaks:  ఫీజు **0.05%**కంటే తక్కువ.             ->  ఫీజు **0.05%** కంటే తక్కువ.
    breaks:  **ముఖ్యం!**ఎవరికీ చెప్పకండి.            ->  **ముఖ్యం**! ఎవరికీ చెప్పకండి.
    breaks:  బ్లాక్_చైన్_ అనే పదం కొత్తది.           ->  బ్లాక్*చైన్* అనే పదం కొత్తది.

Rules:

- Never let a closing `**` sit on punctuation with a Telugu letter jammed
  against it. **A space after the closing marker is enough**, and Telugu has
  spaces, so this is easy: `**ప్రశ్న:** జవాబు ఏమిటి?` passes and
  `**ప్రశ్న:**జవాబు` does not. Keeping the punctuation outside
  (`**ప్రశ్న**:`) passes in every case, so just do that.
- Keep the full stop outside the bold: `**వాలెట్**.`
- A closing `**` directly against a Telugu **letter** is fine
  (`**వాలెట్‌ను**తెరవండి.` renders), but write the space anyway. It is one
  habit, not two.
- **Never use `_…_` against a Telugu letter.** `_` cannot open or close
  intraword and Telugu letters count as word characters. Use `*…*`.
- Bold the link *text*, not the whole link: `[**Ethereum**](https://ethereum.org)`.

Verify a finished body file yourself:

    node --input-type=module -e "const {findBrokenEmphasis}=await import('./content-lib.js');
      console.log(findBrokenEmphasis(require('fs').readFileSync(process.argv[1],'utf8')))" <file>

## Numbers: Latin digits, international scale, always

- **Latin digits only. Never Telugu digits ౦౧౨౩౪౫౬౭౮౯.** Every wallet,
  exchange, block explorer and price chart the reader will ever open uses Latin
  digits, and the lesson `![](…)` images are in Latin digits too.
  `translation/ethglossary/te.json` is already clean on this (0 Telugu digits);
  keep it that way.
- **International scale words, transliterated: మిలియన్, బిలియన్, ట్రిలియన్. Do
  NOT convert to లక్ష or కోటి.** Telugu uses లక్ష and కోటి constantly, so this
  is a live risk, and there are three reasons in order of weight: the figures in
  these lessons are canonical and the reader will meet them written the same way
  everywhere ("21 మిలియన్ BTC", not "2.1 కోటి BTC"); converting requires
  arithmetic that no verifier in this repo can check, so a slip ships as a fact;
  and the slide text would stop matching the number printed in its image.
- **International comma grouping**, matching the English source: 21,000,000 and
  120,000. Not the South Asian 2,10,00,000.
- Decimal point is a period: 0.0002 ETH, 0.05%.
- Percent sign directly after the number, no space: **51%**. Spell it out only
  when the sentence needs a word: "51 శాతం".
- Currency and years pass through as in English: $100, 2009, 2025.
- Ordinals: 1వ, 2వ, 3వ (not 1st/2nd, not ఒకటవ).

## Typography

- **End declarative sentences with the Latin full stop `.`** Modern Telugu print
  does not use the danda ।, unlike Hindi and Bengali. Do not import it from
  those guides. No space before, one space after: "ఇది Ethereum-లో పనిచేస్తుంది."
- Questions take `?`, exclamations take `!`.
- **No full stop on a heading**, on a short list fragment, or on a quiz option.
  Feedback lines under `> ℹ️` are full sentences and do take one.
- Comma is the Latin `,`, colon the Latin `:`. Telugu has no full-width
  punctuation, unlike ja and zh.
- Quotation marks are “ ” with ‘ ’ nested.
- **Never use the em dash U+2014.** Use a comma, a colon, parentheses, or a
  second sentence. No en dash for ranges either: write "2020 నుంచి 2024".
- Hyphens are part of the spelling of several pins and must be kept exactly:
  పీర్-టు-పీర్, సెల్ఫ్-కస్టడీ, నాన్-కస్టోడియల్, ఫ్రంట్-రన్నింగ్,
  టూ-ఫ్యాక్టర్, జీరో-నాలెడ్జ్, ఆన్-ర్యాంప్, మెటా-అగ్రిగేటర్,
  సెన్సార్‌షిప్-నిరోధక, మల్టీ-టోకెన్.
- One space between a Latin run and the Telugu around it, except for a case
  ending, which takes a hyphen and no space: Ethereum-లో.
- **`content-lib.js` has no `TYPOGRAPHY` entry for `te`**, so
  `build-translation.sh` applies nothing automatically. Everything in this
  section is on you.

## Interface strings

Keep an English app's button label in English and gloss it in Telugu on first
use, then use the English label alone afterwards:

    “Connect Wallet” (వాలెట్ కనెక్ట్ చేయడం) బటన్‌పై క్లిక్ చేయండి.

## Headings and `/content` anchors

Telugu headings slugify to nothing in the `/content` anchor generator, so those
pages fall back to `section-N` anchors. `headingId` in
`src/utils/lessonContent.ts` requires the slug to match `/^[a-z0-9-]+$/` after
NFD and mark-stripping, and Telugu letters never survive that. **This is
expected and matches ja, zh, hi and bn. Do not add Latin text to a heading to
work around it.**

## Fixed section headings

These recur across the 19 published lessons. **Translate them once, exactly as
below, and do not re-translate them per lesson.** Five independent agents
produce five different renderings of "Key Takeaways" otherwise, and nothing in
the pipeline looks at heading text: `verify` compares the heading *level*
(`#` vs `##`), never the words. A post-hoc sweep found 5 heading divergences in
Indonesian and 3 in Hindi before these tables existed.

| English heading | occurrences | te |
|---|---|---|
| `Key Takeaways` | 7 | **ముఖ్యాంశాలు** |
| `Introduction` | 6 | **పరిచయం** |
| `Walkthrough` | 3 | **దశలవారీ గైడ్** |
| `FAQ` | 3 | **సాధారణ ప్రశ్నలు** |
| `Frequently Asked Questions` | 3 | **తరచుగా అడిగే ప్రశ్నలు** |
| `Prerequisites` | 2 | **ముందస్తు అవసరాలు** |
| `Choosing a DEX` | 2 | **DEX ఎలా ఎంచుకోవాలి** |
| `Knowledge Check <n>` | 90 | **unchanged: English, same number** |

- **`FAQ` and `Frequently Asked Questions` stay distinct** where both appear,
  exactly as in the English source. English uses a short form and a long form;
  so does Telugu.
- Both FAQ headings are **translated**, not kept in Latin. A lone Latin heading
  in the middle of a Telugu page reads as unfinished work. The cost is that its
  `/content` anchor becomes `section-N` instead of `faq`, which is the same
  trade every other Telugu heading already makes.
- **A suffixed heading keeps the pinned rendering and translates only what
  follows the colon.** `## Walkthrough: Using Revoke.cash` becomes
  `## దశలవారీ గైడ్: Revoke.cash వాడకం`. There is exactly one of these
  (`managing-token-allowances`).
- **Keep the heading level exactly as the source has it** (`#` vs `##` vs
  `###`). `Introduction` appears as `#` five times and `##` once; `Choosing a
  DEX` as `#` once and `##` once. Copy the source, do not normalize.
- No trailing full stop on a heading, no `**bold**`.
- **`Knowledge Check <n>` stays in English, with its original number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label. Never translate it, never renumber it, never merge two.
- **Every other slide heading must be translated.** In an earlier wave one agent
  left all 45 of its slide headings in English and every automated check passed.
  `validate-content.js` now warns when more than half a file's headings are
  byte-identical to English, but that is a backstop, not permission.

## Fixed quiz-feedback openers

Almost every `> ℹ️` line opens with one of a handful of English interjections.
**Pin the opener; write the rest of the sentence freely.** Japanese shipped
`Try again!` in **four** forms before this section existed, and only the
plurality form was in the register its own style guide mandated.

| English opener | lessons / occurrences | te |
|---|---|---|
| `Try again!` | 10 lessons, 148 | **మళ్లీ ప్రయత్నించండి!** |
| `Correct!` | 11 lessons, 67 | **సరైనదే!** |
| `Correct.` | 1 | **సరైనదే.** |
| `Right!` | 3 | **అవును!** |
| `Incorrect,` / `Incorrect.` | 4 | **సరికాదు,** / **సరికాదు.** |
| `True,` (opening a feedback sentence) | 3 | **నిజమే,** |

- **Spell it మళ్లీ, not మళ్ళీ.** Both spellings circulate in real Telugu
  (ళ్ల vs ళ్ళ) and they look nearly identical. The newspaper spelling is మళ్లీ
  and this string appears 148 times, so an unpinned choice guarantees two
  spellings in one language.
- Keep the punctuation the English used, and keep the opener as its own clause
  followed by **one short explanatory sentence**. The whole feedback line
  renders as a toast overlay, which gets intrusive on mobile: two sentences or
  about 150 characters is the ceiling.
- Keep the opener and the rest of the sentence on the same line.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the bare
words `True` and `False` (12 of each, across `ethereum-basics`, `web3-security`,
`layer-1-blockchains`, `layer-2-blockchains`, `decentralized-exchanges`,
`staking-on-ethereum` and `dex-aggregators`). Render them as exactly:

| English option | te |
|---|---|
| `True` | **ఒప్పు** |
| `False` | **తప్పు** |

ఒప్పు / తప్పు is the matched pair Telugu school exams use ("ఒప్పా? తప్పా?"), so
it reads as a labelled choice rather than as a comment, and it is two clusters
shorter than నిజం / అబద్ధం, which additionally overstates the case (those mean
*truth* and *a lie*).

**Do not re-translate these per lesson.** The 19 lessons are split across five
independent agents, so an unpinned two-word string drifts: before this section
existed, German shipped both *Wahr* and *Richtig*, Hindi both गलत and ग़लत (a
nukta apart, visually near-identical), Chinese both 正确 and 对, Ukrainian a
stray Так/Ні pair, and Russian three different pairs across five agents. None of
it was visible to the structural verifier, which checks that the option COUNT
and the `[x]` index match English and never looks at the option text.

Two hard constraints on the choice, both already satisfied above:

1. **The label must not collide with the `Correct!` opener.** Here the opener is
   **సరైనదే!** and the True label is **ఒప్పు**: different words. Had "True"
   also been సరైనది, the toast would read as an echo of the option the learner
   just clicked rather than as a verdict. This is why Russian uses
   Правда/Неправда and not Верно/Неверно (its opener is `Верно!`), and why
   Indonesian uses Tepat! as its opener rather than Benar!, which is its "True"
   option. It is also why **సరైనది / తప్పు** is rejected as the pair here.
   తప్పు is safe: the `Incorrect` opener is **సరికాదు**, not తప్పు.
2. **Keep the `[x]` on the same option index as English.** Only the option TEXT
   changes; users have answer numbers saved in localStorage.

## Glossary overrides

ETHGlossary (`translation/ethglossary/te.json`) is the fallback for anything the
block below does not pin, and its Telugu is good enough to be genuinely useful.
But it mixes solid transliterations with purist calques and gives you no way to
tell which is which, and it has five failure modes, all confirmed in the
vendored file:

- **It transliterates brand names**: `bitcoin = బిట్‌కాయిన్`,
  `ethereum mainnet = ఎథీరియం మెయిన్‌నెట్`. All overridden to Latin. Telugu tech
  writing keeps product names in Latin, and a transliterated one cannot be
  searched or typed into a wallet. (It also cannot decide *how* to
  transliterate: ఎథీరియం 77 times, ఇథీరియం 39, ఈథీరియం 6, in one file.)
- **It expands acronyms into Sanskritized coinages**: `dao = వికేంద్రీకృత
  స్వయంప్రతిపత్త సంస్థ (DAO)`, `mev = గరిష్ట వెలికితీత విలువ (MEV)`. All
  overridden to the bare Latin acronym.
- **It returns agglutinated prose forms** (26% of entries, see above).
- **It mixes scripts inside one token**: `web2 = వెబ్2`. **`Web2` and `Web3`
  stay fully Latin.**
- **It offers gendered agent nouns**: `block proposer = బ్లాక్ ప్రతిపాదకుడు`,
  and `attestation`'s agent form ధృవీకరించేవాడు. Both are masculine.

The specific overrides, with the reason each one exists:

| term | ETHGlossary | pinned | why |
|---|---|---|---|
| `liquidity` | ద్రవ్యత | **లిక్విడిటీ** | ద్రవ్యత is physical liquidness. It also sat next to `liquidity pool = లిక్విడిటీ పూల్`, i.e. **two renderings of one concept in the seed data**. Reconciled to the transliteration, which the compound already used. |
| `optimistic rollup` | ఆశావాద రోలప్ | **ఆప్టిమిస్టిక్ రోలప్** | ఆశావాద is *optimistic* as a personal disposition (a hopeful person). The rollup is not hopeful; it assumes validity by default. Uses ETHGlossary's own alias. |
| `web2` | వెబ్2 | **Web2** | script-mixing inside one token; Web3 is already Latin in the same file |
| `seed phrase` | బీజ పదబంధం | **సీడ్ ఫ్రేజ్** | a calque no wallet screen shows. Hindi settled `सीड फ़्रेज़` for the same reason. ETHGlossary's own alias. |
| `self-custody` | స్వయం సంరక్షణ | **సెల్ఫ్-కస్టడీ** | స్వయం సంరక్షణ reads as *self-preservation / looking after yourself*, not custody of assets. ETHGlossary itself writes `non-custodial = కస్టడీ రహిత`, so కస్టడీ is already in the data. Hindi settled `सेल्फ-कस्टडी`. |
| `trustless` | విశ్వాస రహిత | **ట్రస్ట్‌లెస్** | విశ్వాస రహిత reads as *untrustworthy* in ordinary Telugu, the opposite of the concept. Exactly the trap Hindi hit with विश्वासहीन. |
| `governance` | పరిపాలన | **గవర్నెన్స్** | పరిపాలన is *administration / rule by a government*. ETHGlossary's own `governance token` entry already carries గవర్నెన్స్ as an alias. |
| `mint` | ముద్రించు | **మింట్** | ముద్రించు means *to print*, which is precisely what the lessons contrast minting **with** (a central bank printing money). |
| `allowance` | అనుమతి మొత్తం | **ఖర్చు పరిమితి** | in everyday Telugu an అలవెన్స్ is a monthly stipend. The concept here is a spending limit, so name it one. |
| `block reward` | బ్లాక్ బహుమతి | **బ్లాక్ రివార్డ్** | బహుమతి is a *prize*, not payment for work |
| `block proposer` | బ్లాక్ ప్రతిపాదకుడు | **బ్లాక్ ప్రపోజర్** | -ుడు is masculine; the loan has no gender |
| `block builder` | బ్లాక్ నిర్మాత | **బ్లాక్ బిల్డర్** | matches `block proposer` and `block producer` |
| `validator` | ధృవీకర్త | **వాలిడేటర్** | transliteration-first, and ETHGlossary itself writes వాలిడేటర్ 30 times in its own example sentences vs వ్యాలిడేటర్ 12. One spelling: **వాలిడేటర్**. |
| `attestation` | ధృవీకరణ | **అటెస్టేషన్** | keeps it distinct from ధృవీకరణ used loosely for "verification", and its agent form is gendered |
| `finality` | నిశ్చయత్వం | **ఫైనాలిటీ** | heavy Sanskrit for a term every staking dashboard shows in English |
| `cryptography` | గూఢలిపి శాస్త్రం | **క్రిప్టోగ్రఫీ** | Sanskritized coinage, 6 clusters longer |
| `zero-knowledge` | శూన్య-జ్ఞాన | **జీరో-నాలెడ్జ్** | calque; ETHGlossary's own alias |
| `front-running` | ముందుగా అమలు చేయడం | **ఫ్రంట్-రన్నింగ్** | that is a description, not a term |
| `intent` / `solver` | ఉద్దేశ్యం / పరిష్కర్త | **ఇంటెంట్** / **సాల్వర్** | both are protocol-role names in `dex-aggregators`; the Telugu words are generic |
| `swap` | మార్పిడి | **స్వాప్** | every DEX button says Swap |
| `delegation` | ప్రాతినిధ్యం అప్పగింత | **డెలిగేషన్** | 9 clusters for one concept; `delegate = ప్రతినిధి` stays native |
| `bridge` | వారధి | **బ్రిడ్జ్** | వారధి is a poetic causeway; Telugu crypto writing says బ్రిడ్జ్ |
| `vault` | ఖజానా | **వాల్ట్** | ఖజానా is a government treasury |
| `fee` | రుసుము *and* ఫీజు | **ఫీజు** | ETHGlossary uses both (`gas fee = గ్యాస్ ఫీజు`, `transaction fee = లావాదేవీ రుసుము`). రుసుము is officialese. One word: ఫీజు. |
| `ledger` | *(missing)* | **ఖాతా పుస్తకం** | **not** లెడ్జర్: `Ledger` is a hardware-wallet brand that appears in the security lessons, and a transliterated common noun would collide with it |
| `exchange` | ఎక్స్ఛేంజ్ *and* ఎక్స్‌ప్లోరర్ | **ఎక్స్‌ఛేంజ్** | one ZWNJ convention, see above |
| `interoperability` / `composability` | పరస్పర అనుసంధానత / కూర్పు సామర్థ్యం | **ఇంటరాపరబిలిటీ** / **కంపోజబిలిటీ** | coinages; matches hi and bn |

**Kept native against the transliteration default**, because these are genuinely
what Telugu speakers say and they teach better: చిరునామా (address),
లావాదేవీ (transaction), ఖాతా (account), ఫీజు (fee), సరఫరా (supply),
కొరత (scarcity), ద్రవ్యోల్బణం (inflation), వికేంద్రీకృత / వికేంద్రీకరణ,
తాకట్టు (collateral), భద్రత (security), మోసం (fraud), నాణెం (coin),
రుజువు (proof), ప్రతినిధి (delegate), మధ్యవర్తి (intermediary),
ఏకాభిప్రాయం (consensus), అనుమతి రహిత (permissionless),
ప్రజా ప్రయోజనం (public good), కేంద్ర బ్యాంకు, ద్రవ్య విధానం,
అవకాశాల సమానత్వం. Put the transliteration you rejected in `keyword_forms`
(కన్సెన్సస్, పర్మిషన్‌లెస్, ట్రాన్సాక్షన్, అడ్రస్) so prose written the other
way still resolves to a tooltip.

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick the term.

```terms
private key = ప్రైవేట్ కీ
private keys = ప్రైవేట్ కీ
public key = పబ్లిక్ కీ
blockchain = బ్లాక్‌చైన్
blockchains = బ్లాక్‌చైన్
blockchain technology = బ్లాక్‌చైన్ టెక్నాలజీ
blockchain apps = బ్లాక్‌చైన్ యాప్
blockchain trilemma = బ్లాక్‌చైన్ ట్రైలెమా
ethereum blockchain = Ethereum బ్లాక్‌చైన్
ethereum mainnet = Ethereum మెయిన్‌నెట్
layer 1 = Layer 1
layer 2 = Layer 2
l1 = L1
l2 = L2
alternative layer 1 = ప్రత్యామ్నాయ Layer 1
smart contract = స్మార్ట్ కాంట్రాక్ట్
smart contracts = స్మార్ట్ కాంట్రాక్ట్
smart account = స్మార్ట్ ఖాతా
smart wallet = స్మార్ట్ వాలెట్
cryptocurrency = క్రిప్టోకరెన్సీ
cryptocurrencies = క్రిప్టోకరెన్సీ
cryptocurrency mining = క్రిప్టోకరెన్సీ మైనింగ్
cryptocurrency wallet = క్రిప్టోకరెన్సీ వాలెట్
crypto = క్రిప్టో
crypto wallet = క్రిప్టో వాలెట్
decentralized = వికేంద్రీకృత
decentralization = వికేంద్రీకరణ
decentralized money = వికేంద్రీకృత డబ్బు
decentralized finance = వికేంద్రీకృత ఫైనాన్స్
decentralized exchange = వికేంద్రీకృత ఎక్స్‌ఛేంజ్
centralized exchange = కేంద్రీకృత ఎక్స్‌ఛేంజ్
centralized services = కేంద్రీకృత సేవలు
centralized exchange staking = కేంద్రీకృత ఎక్స్‌ఛేంజ్ స్టేకింగ్
dapp = dApp
staking = స్టేకింగ్
staking pool = స్టేకింగ్ పూల్
staking providers = స్టేకింగ్ ప్రొవైడర్
solo staking = సోలో స్టేకింగ్
solo staker = సోలో స్టేకర్
stake = స్టేక్
staker = స్టేకర్
restaking = రీస్టేకింగ్
liquid = లిక్విడ్
liquid staking token = లిక్విడ్ స్టేకింగ్ టోకెన్
lsts = LSTs
web3 = Web3
web2 = Web2
block = బ్లాక్
block hash = బ్లాక్ హాష్
block explorer = బ్లాక్ ఎక్స్‌ప్లోరర్
block reward = బ్లాక్ రివార్డ్
block builder = బ్లాక్ బిల్డర్
block proposer = బ్లాక్ ప్రపోజర్
block producer = బ్లాక్ ప్రొడ్యూసర్
blockspace = బ్లాక్‌స్పేస్
block space = బ్లాక్‌స్పేస్
liquidity = లిక్విడిటీ
liquidity pool = లిక్విడిటీ పూల్
dex = DEX
cex = CEX
dex aggregator = DEX అగ్రిగేటర్
meta-aggregator = మెటా-అగ్రిగేటర్
amm = AMM
lp = LP
tvl = TVL
mev = MEV
order book = ఆర్డర్ బుక్
market cap = మార్కెట్ క్యాప్
validator = వాలిడేటర్
validators = వాలిడేటర్
validator node = వాలిడేటర్ నోడ్
validator nodes = వాలిడేటర్ నోడ్
validator client = వాలిడేటర్ క్లయింట్
node = నోడ్
node operator = నోడ్ ఆపరేటర్
address = చిరునామా
addresses = చిరునామా
gas = గ్యాస్
gas fee = గ్యాస్ ఫీజు
gas fees = గ్యాస్ ఫీజు
optimistic rollup = ఆప్టిమిస్టిక్ రోలప్
zk rollup = ZK రోలప్
rollup = రోలప్
sidechain = సైడ్‌చెయిన్
sharding = షార్డింగ్
payment channel = పేమెంట్ ఛానల్
lightning network = Lightning Network
blob = బ్లాబ్
seed phrase = సీడ్ ఫ్రేజ్
recovery phrase = రికవరీ ఫ్రేజ్
dao = DAO
defi = DeFi
nft = NFT
peer-to-peer = పీర్-టు-పీర్
peer = పీర్
wallet = వాలెట్
wallets = వాలెట్
wallet app = వాలెట్ యాప్
hot wallet = హాట్ వాలెట్
cold wallet = కోల్డ్ వాలెట్
hardware wallet = హార్డ్‌వేర్ వాలెట్
custodial wallet = కస్టోడియల్ వాలెట్
non-custodial wallet = నాన్-కస్టోడియల్ వాలెట్
self-custody = సెల్ఫ్-కస్టడీ
self-custody wallet = సెల్ఫ్-కస్టడీ వాలెట్
self-custodial = సెల్ఫ్-కస్టడీ ఆధారిత
custodian = కస్టోడియన్
ledger = ఖాతా పుస్తకం
token allowance = టోకెన్ ఖర్చు పరిమితి
allowance = ఖర్చు పరిమితి
token approval = టోకెన్ ఆమోదం
price impact = ధర ప్రభావం
slippage = స్లిప్పేజ్
slippage tolerance = స్లిప్పేజ్ టాలరెన్స్
front-running = ఫ్రంట్-రన్నింగ్
sandwich attack = శాండ్‌విచ్ దాడి
onchain = ఆన్‌చైన్
offchain = ఆఫ్‌చైన్
onchain governance = ఆన్‌చైన్ గవర్నెన్స్
network governance = నెట్‌వర్క్ గవర్నెన్స్
delegate = ప్రతినిధి
delegation = డెలిగేషన్
veto = వీటో
permissionless = అనుమతి రహిత
trustless = ట్రస్ట్‌లెస్
security = భద్రత
scalability = స్కేలబిలిటీ
interoperability = ఇంటరాపరబిలిటీ
composability = కంపోజబిలిటీ
fungibility = ఫంజిబిలిటీ
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
multi-token standard = మల్టీ-టోకెన్ స్టాండర్డ్
btc = BTC
eth = ETH
ether = ఈథర్
gwei = Gwei
transaction = లావాదేవీ
transactions = లావాదేవీ
transaction hash = లావాదేవీ హాష్
transaction throughput = లావాదేవీ త్రూపుట్
transaction finality = లావాదేవీ ఫైనాలిటీ
token = టోకెన్
tokens = టోకెన్
token swap = టోకెన్ స్వాప్
token pair = టోకెన్ పెయిర్
token distribution = టోకెన్ పంపిణీ
intermediary token = మధ్యవర్తి టోకెన్
coin = నాణెం
bridge = బ్రిడ్జ్
public good = ప్రజా ప్రయోజనం
public = పబ్లిక్
credible neutrality = విశ్వసనీయ తటస్థత
equality of opportunity = అవకాశాల సమానత్వం
satoshi nakamoto = Satoshi Nakamoto
scarcity = కొరత
scarce = అరుదైన
max supply = గరిష్ఠ సరఫరా
circulating supply = చలామణి సరఫరా
inflation = ద్రవ్యోల్బణం
halving = హాల్వింగ్
gold standard = బంగారు ప్రమాణం
central bank = కేంద్ర బ్యాంకు
commercial bank = వాణిజ్య బ్యాంకు
monetary policy = ద్రవ్య విధానం
fiat = ఫియట్
spot etf = స్పాట్ ETF
onramp = ఆన్-ర్యాంప్
mining = మైనింగ్
miner = మైనర్
miners = మైనర్
hash = హాష్
consensus = ఏకాభిప్రాయం
consensus mechanism = ఏకాభిప్రాయ యంత్రాంగం
proof of work = ప్రూఫ్ ఆఫ్ వర్క్
proof of stake = ప్రూఫ్ ఆఫ్ స్టేక్
proof-of-stake = ప్రూఫ్ ఆఫ్ స్టేక్
slashing = స్లాషింగ్
slashed = స్లాష్
attestation = అటెస్టేషన్
epoch = ఎపోక్
finality = ఫైనాలిటీ
finality time = ఫైనాలిటీ సమయం
settlement time = సెటిల్‌మెంట్ సమయం
51% attack = 51% దాడి
tps = TPS
censorship-resistant = సెన్సార్‌షిప్-నిరోధక
fraud proof = మోసపు రుజువు
validity proof = చెల్లుబాటు రుజువు
zero-knowledge = జీరో-నాలెడ్జ్
ethereum virtual machine = Ethereum Virtual Machine (EVM)
asynchronous = ఎసింక్రనస్
stablecoin = స్టేబుల్‌కాయిన్
stablecoin issuer = స్టేబుల్‌కాయిన్ జారీదారు
peg = పెగ్
vault = వాల్ట్
death spiral = డెత్ స్పైరల్
counterparty risk = కౌంటర్‌పార్టీ రిస్క్
memecoin = మీమ్‌కాయిన్
mint = మింట్
password manager = పాస్‌వర్డ్ మేనేజర్
social engineering = సోషల్ ఇంజినీరింగ్
phishing = ఫిషింగ్
fomo = FOMO
hodl = HODL
two factor authentication = టూ-ఫ్యాక్టర్ అథెంటికేషన్
2fa = 2FA
red flag = రెడ్ ఫ్లాగ్
scam-token = స్కామ్ టోకెన్
fraud = మోసం
kyc = KYC
know-your-customer = నో యువర్ కస్టమర్
digital signature = డిజిటల్ సంతకం
cryptography = క్రిప్టోగ్రఫీ
encryption = ఎన్‌క్రిప్షన్
swap = స్వాప్
trade = ట్రేడ్
trade route = ట్రేడ్ రూట్
intent = ఇంటెంట్
solver = సాల్వర్
batch auction = బ్యాచ్ వేలం
otc = OTC
over the counter = ఓవర్ ద కౌంటర్
private transaction routing = ప్రైవేట్ లావాదేవీ రూటింగ్
app = యాప్
app store = యాప్ స్టోర్
intermediary = మధ్యవర్తి
intermediaries = మధ్యవర్తి
value-extractive = విలువ వెలికితీసే
value-extraction = విలువ వెలికితీత
value-creation = విలువ సృష్టి
yield farm = యీల్డ్ ఫార్మ్
collateral = తాకట్టు
liquidation = లిక్విడేషన్
quadratic funding = క్వాడ్రాటిక్ ఫండింగ్
allo protocol = Allo Protocol
retropgf = RetroPGF
fork = ఫోర్క్
open source = ఓపెన్ సోర్స్
onchain identity = ఆన్‌చైన్ గుర్తింపు
primary name = ప్రైమరీ నేమ్
standard record = స్టాండర్డ్ రికార్డ్
custom record = కస్టమ్ రికార్డ్
.eth = .eth
yourname.eth = yourname.eth
network = నెట్‌వర్క్
fee = ఫీజు
supply = సరఫరా
governance = గవర్నెన్స్
yield = యీల్డ్
```

**The last five pins have no English glossary entry. Follow them for wording,
never put them in backticks.** `network`, `fee`, `supply`, `governance` and
`yield` are prose-consistency pins only; the ru and vi waves each lost a verify
cycle to `yield`, whose only glossary key is `yield farm`. Everything above them
in the block does have an entry and is safe to backtick.
