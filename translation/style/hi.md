# Hindi style guide (translate-content)

Hindi is the first Indic-script language in this repo. There is no sibling to
copy from, so this file is the only thing holding a dozen independent
translators to one Hindi. Read it end to end before writing a single slide.

Register and address

- Address the reader as **आप**, never तुम and never तू. In Hindi the pronoun is
  not the formality dial: तुम to an adult stranger reads as presumptuous or
  condescending, not friendly, and every product an Indian reader already uses
  (Google, WhatsApp, PhonePe, MetaMask Hindi) says आप. The peer tone comes from
  the *vocabulary*, not the pronoun.
- Keep the vocabulary everyday, not Sanskritized officialese. Write "इस्तेमाल
  करें", not "प्रयोग किया जाना चाहिए"; "इसलिए", not "अतः"; "पैसा", not "मुद्रा
  प्रणाली" where "पैसा" will do. Bankless Academy is a peer teaching a peer,
  not a bank circular and not an NCERT textbook.
- Imperatives take the आप subjunctive: **करें, देखें, रखें, जाँचें, क्लिक
  करें**. कीजिए is warmer but stiffer, use it rarely. करो / करना is तुम, never
  use it.
- **आप always takes plural agreement**: आप हैं, आप करें, आप जानते हैं. "आप है"
  and "आप जानता है" are wrong, and are the most common careless errors in
  written Hindi.
- **Drop आप wherever the verb already carries it.** Hindi is a pro-drop
  language, and repeating आप in every sentence is the clearest sign of machine
  translation, exactly as あなた is in Japanese. Write "अपना वॉलेट खोलें", not
  "आप अपना वॉलेट खोलें". Keep आप only where ownership or contrast matters:
  "यह कुंजी सिर्फ़ आपकी है।"
- **Avoid verb forms that agree with the reader's gender.** आप takes masculine
  plural by default, which misgenders half the readers.

      avoid:  आप यह सीख चुके हैं।        (चुके is masculine)
      avoid:  अब आप तैयार हो गए हैं।     (गए is masculine)
      use:    अब आपको पता है कि…          (no subject agreement)
      use:    आपने यह पूरा कर लिया।       (ने construction agrees with the object)
      use:    अब आप तैयार हैं।            (हैं is gender-neutral)

- Short sentences. Hindi is verb-final like Turkish, so a long English sentence
  becomes an unreadable Hindi one. Split at the clause boundary instead of
  chaining with "जिसके कारण", "के फलस्वरूप", "होने के बावजूद".
- Explorer (the site's word for its readers) -> **एक्सप्लोरर**.

Devanagari, transliteration, or Latin: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and never mix buckets for the same term across two lessons.

1. **Latin script, untouched.** Anything that is a name, a symbol or a code
   identifier. Product, network and company names: Bitcoin, Ethereum, Uniswap,
   Optimism, Base, MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea,
   Revoke.cash, Lightning Network. People: Satoshi Nakamoto. Tickers and units:
   ETH, BTC, USDC, OP, Gwei, wei. Acronyms: API, DEX, CEX, AMM, LP, TVL, KYC,
   APR, APY, MEV, NFT, DAO, DeFi, Web3, Web2, L2, PoW, PoS, ERC-20, ERC-721,
   ERC-1155, EIP, 2FA, FOMO, HODL, LSTs. Domain-like strings: yourname.eth.
   Do **not** write इथेरियम, बिटकॉइन or सतोशी. ETHGlossary returns
   `ethereum mainnet = इथेरियम मेननेट`; the pin below overrides it to
   `Ethereum मेननेट`.
2. **Devanagari transliteration.** A concept that was born in English and has
   no ordinary Hindi word, or has one that no Hindi-speaking crypto user
   actually says: वॉलेट, ब्लॉक, टोकन, नोड, स्टेकिंग, माइनिंग, रोलअप, हैश, गैस,
   स्वैप, ब्रिज, स्लिपेज, स्टेबलकॉइन, ऑनचेन, गवर्नेंस, ट्रस्टलेस, वैलिडेटर,
   सीड फ़्रेज़.
3. **A real Hindi word.** The concept already exists in ordinary Hindi
   finance, civics or everyday speech, and the Hindi word teaches better than
   the loanword: बहीखाता (ledger), शुल्क (fee), आपूर्ति (supply), दुर्लभता
   (scarcity), मुद्रास्फीति (inflation), निजी कुंजी / सार्वजनिक कुंजी
   (private / public key), विकेंद्रीकृत (decentralized), लेन-देन (transaction),
   पता (address), तरलता (liquidity), केंद्रीय बैंक, मौद्रिक नीति, स्वर्ण मानक,
   उधार देना / उधार लेना, सुरक्षा, दुर्लभ, अवसर की समानता.

**The tiebreaker between buckets 2 and 3 is what a Hindi-speaking crypto user
says out loud, not what is formally correct.** That is why the pins below use
गवर्नेंस and not शासन, ब्रिज and not सेतु, माइनिंग and not खनन. Put the
rejected form in `keyword_forms` so prose that uses it still resolves to a
tooltip.

**Never mix scripts inside one word.** Write "Layer 2 समाधान", never
"Layer 2समाधान" and never "लेयर 2". A Latin run always has a space on both
sides, and a Hindi postposition after it is a separate word: "Ethereum पर",
"ETH को", "Base से". There is no Turkish-style apostrophe and no possessive
`'s`: write "Ethereum का नेटवर्क".

Terms to translate

- wallet -> वॉलेट; crypto wallet -> क्रिप्टो वॉलेट
- key -> कुंजी; private key -> निजी कुंजी; public key -> सार्वजनिक कुंजी
- seed phrase -> सीड फ़्रेज़; recovery phrase -> रिकवरी फ़्रेज़
- address -> पता
- fee -> शुल्क; gas fee -> गैस शुल्क
- network -> नेटवर्क
- node -> नोड
- block -> ब्लॉक
- ledger -> बहीखाता
- supply -> आपूर्ति; max supply -> अधिकतम आपूर्ति; circulating supply -> प्रचलित आपूर्ति
- yield -> यील्ड (a plain return is रिटर्न)
- lending / borrowing -> उधार देना / उधार लेना
- swap -> स्वैप (verb: स्वैप करना)
- self-custody -> सेल्फ-कस्टडी
- decentralized -> विकेंद्रीकृत; decentralization -> विकेंद्रीकरण
- permissionless -> अनुमति-रहित
- trustless -> ट्रस्टलेस
- governance -> गवर्नेंस
- mining -> माइनिंग; miner -> माइनर
- liquidity -> तरलता; liquidity pool -> तरलता पूल

Postpositions and the oblique case: what `keyword_forms` must cover

Hindi postpositions (का, के, की, को, में, से, पर, तक) are **separate words**,
so a backticked term stays intact and the tooltip resolves on the bare form.
In this respect Hindi behaves like Japanese, not like Turkish. Keep the
postposition **outside** the backticks, always:

    correct:  `वॉलेट` में आपकी `निजी कुंजी` रहती है।
    dead:     `वॉलेट में` आपकी `निजी कुंजी` रहती है।

The keyword index is an **exact string match** after case folding. It does not
strip anything, so any change to the noun's own surface form is a dead tooltip
unless that form is in `keyword_forms`. Hindi changes the noun in three places.
Classify every glossary noun into one of these and add the forms listed:

1. **Latin loans ending in a consonant** (वॉलेट, टोकन, ब्लॉक, नोड, नेटवर्क,
   हैश, रोलअप, स्वैप, पूल, एक्सचेंज). Invariable in the singular, including
   before a postposition. Nominative plural is identical, but the **oblique
   plural adds -ों** and the borrowed English "-s" plural also circulates.
   `keyword_forms`: वॉलेटों, वॉलेट्स · ब्लॉकों, ब्लॉक्स · टोकनों, टोकन्स.
2. **Masculine nouns ending in -आ** (पता, बहीखाता, हमला, खाता). Oblique
   singular *and* nominative plural are -ए; oblique plural is -ओं. This is the
   trap that bites hardest, because "`पता` में" is wrong Hindi: it must be
   "`पते` में".
   `keyword_forms`: पते, पतों · बहीखाते, बहीखातों · हमले, हमलों.
3. **Feminine nouns ending in -ी** (कुंजी). Singular invariable, plural -इयाँ,
   oblique plural -इयों.
   `keyword_forms`: कुंजियाँ, कुंजियों · निजी कुंजियाँ, निजी कुंजियों.

Feminine abstract nouns in -ता / -ति (तरलता, आपूर्ति, दुर्लभता, मुद्रास्फीति,
सर्वसम्मति, सुरक्षा) and adjectives ending in -त or in a Latin loan
(विकेंद्रीकृत, अनुमति-रहित, ट्रस्टलेस, दुर्लभ) do **not** inflect. They need no
extra forms.

**Prefer the singular inside backticks.** "`ब्लॉक` में" is better prose than
"`ब्लॉकों` में" and needs no extra form. Reach for the oblique plural only when
the sentence genuinely requires it.

So: yes, `keyword_forms` is needed for Hindi, but far less than for Turkish
(two or three forms per noun, not a full case paradigm) and far more than for
Japanese (which needs none).

Gender agreement around a pinned term

The pinned term's gender fixes का/की/के, होता है / होती है, and any -आ
adjective in the same clause. Getting it wrong is not a build failure, it is
just visibly bad Hindi, so learn the genders of the high-traffic pins:

- **masculine**: वॉलेट, ब्लॉक, टोकन, नोड, नेटवर्क, पता, लेन-देन, बहीखाता,
  शुल्क, हैश, ब्रिज, रोलअप, स्वैप, स्टेबलकॉइन, पूल, एक्सचेंज, बैंक
- **feminine**: कुंजी, तरलता, आपूर्ति, दुर्लभता, मुद्रास्फीति, सर्वसम्मति,
  नीति, सीमा, सुरक्षा, वस्तु, **गैस**

      `वॉलेट` खो गया।            `निजी कुंजी` खो गई।
      `वॉलेट` का पता             `निजी कुंजी` की सुरक्षा
      `गैस` महँगी है।            `गैस शुल्क` महँगा है।   (शुल्क is masculine)

One pin is deliberately an -आ adjective and does inflect:
`self-custodial = सेल्फ-कस्टडी वाला`, feminine सेल्फ-कस्टडी वाली, oblique /
plural सेल्फ-कस्टडी वाले. All three go in `keyword_forms`.

Spelling and encoding: two ways to ship an invisible bug

1. **Nuktas must be base letter + U+093C, never the precomposed codepoints
   U+0958 to U+095F.** क़ can be written as U+0958, or as U+0915 + U+093C; ज़ as
   U+095B or U+091C + U+093C; फ़ as U+095E or U+092B + U+093C. Each pair renders
   pixel-for-pixel identically and compares as unequal, and nothing in the
   pipeline normalizes them, so a precomposed nukta in a lesson body is a
   silently dead tooltip. This is
   already live in the vendored data: `translation/ethglossary/hi.json` writes
   the `seed phrase` alias "सीड फ़्रेज़" with precomposed U+095E and U+095B while
   the other 540 entries use base + U+093C. Check any file you touch with

       node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');console.log(s===s.normalize('NFC')?'ok':'PRECOMPOSED NUKTA')" <file>

   NFC decomposes U+0958 to U+095F back to base + nukta, so `.normalize('NFC')`
   is also the fix.
2. **Nasals: prefer the anusvara ं over the half-consonant conjunct wherever
   both spellings are current.** विकेंद्रीकृत, not विकेन्द्रीकृत. केंद्रीय, not
   केन्द्रीय. अंतर, तंत्र, संकेत, कंपोज़ेबिलिटी. Both forms are correct Hindi
   and look almost identical, and no normalization unifies them, so one
   translator writing विकेन्द्रीकृत kills every tooltip on that slide. Two
   exceptions, visible in the pins below: a **geminate** nasal keeps the
   conjunct (सर्व**सम्म**ति), and a loanword whose conventional spelling uses
   the conjunct keeps it (स्मार्ट कॉ**न्ट्रै**क्ट, ए**न्क्रि**प्शन). When in
   doubt, the spelling in the ```terms``` block wins.
   Chandrabindu ँ stays where it belongs on a nasalized vowel (कुंजियाँ,
   महँगाई, जाँच).
3. **Do not add or remove nuktas of your own.** Use exactly the spelling in the
   ```terms``` block or in `translation/keywords/hi/keywords.json`, and prefer
   copy-paste over retyping. The pins are the spelling authority even where
   ETHGlossary spells a term differently.
4. No ZWJ / ZWNJ (U+200D / U+200C) anywhere. They are invisible and they break
   exact matching.

Length: the estimator is honest horizontally, not vertically

Measured against the English source, Hindi comes out at roughly the **same
codepoint count** (0.98 to 1.08 in samples) but only about **70% as many
grapheme clusters**, because matras and viramas are separate codepoints that
carry no width of their own. `displayWidth` in `content-lib.js` counts
Devanagari at 1 per codepoint, which lands close to the true rendered width.
So the 22-line ceiling is roughly honest horizontally.

What the estimator cannot see is **vertical**: Devanagari stacks marks above
and below the shirorekha, so a Hindi line is physically taller than a Latin one
inside the fixed 533px slide. **Target 18 estimated lines, not 22.** Treat 22
as the point at which the build fails, not as the budget.

Quiz options are capped at about 70 characters and Hindi does not get a
discount, since the codepoint count matches English. Move any nuance into the
`> ℹ️` feedback line.

Emphasis: punctuation must sit OUTSIDE the markers

`validate-content.js` renders every line with markdown-it and fails the build
on any `**` or `_` that survives as literal text. Hindi has word spaces, so it
is safer than Japanese here, but five patterns still break. Every row below was
run through the real validator:

    breaks:  **मूल्य:**समय की बचत होती है।     ->  **मूल्य**: समय की बचत होती है।
    breaks:  यह **वॉलेट।**अगली बात है।          ->  यह **वॉलेट**। अगली बात है।
    breaks:  **(निजी कुंजी)**को गुप्त रखें।      ->  (**निजी कुंजी**) को गुप्त रखें।
    breaks:  शुल्क **0.05%**से कम है।            ->  शुल्क **0.05%** से कम है।
    breaks:  ब्लॉक_चेन_ शब्द                     ->  ब्लॉक*चेन* शब्द

Rules: never let a `**` close on punctuation with a letter jammed against it
(a space after the closing marker is enough, and Hindi has spaces, so this is
easy); keep the danda outside the bold (`**वॉलेट**।`); and **never use `_…_`
against a Devanagari letter**, because `_` cannot open or close intraword.
Use `*…*`. Bolding a whole link works in Hindi, but keep the repo convention
and bold the link text: `[**पाठ का नाम**](url)`.

Numbers: Latin digits, international scale, always

- **Latin digits only.** Never Devanagari digits (०१२३४५६७८९). Every Indian
  keyboard, exchange UI, block explorer and price chart the reader will ever
  see uses Latin digits, and the lesson images are in Latin digits too.
- **International scale words, transliterated: मिलियन, बिलियन, ट्रिलियन. Do NOT
  convert to लाख or करोड़.** Three reasons, in order of weight: the figures in
  these lessons are canonical and the reader will meet them written the same way
  everywhere ("21 मिलियन BTC", not "2.1 करोड़ BTC"); converting requires
  arithmetic that no verifier in this repo can check, so a slip ships as fact;
  and the slide text would stop matching the number printed in its `![](…)`
  image.
- **International comma grouping**, matching the English source: 21,000,000 and
  120,000. Not the Indian 2,10,00,000.
- Decimal point is a period: 0.0002 ETH, 0.05%.
- Percent sign directly after the number, no space: **51%**. Spell it out only
  when the sentence needs a word: "51 प्रतिशत".
- Currency and years pass through as in English: $100, 2009, 2025.

Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin, but it
has two failure modes in Hindi, both confirmed in the vendored file:

- **It returns oblique or plural prose forms.** `contexts.prose` gives
  `public good = सार्वजनिक वस्तुओं`, `sandwich attack = सैंडविच हमले`,
  `smart account = स्मार्ट खाते`. A pin must always be the bare nominative
  singular: सार्वजनिक वस्तु, सैंडविच हमला, स्मार्ट अकाउंट. Inflections belong
  in `keyword_forms`, never in `keyword`.
- **It prefers Sanskritized coinages no one says**, and one of them is actively
  wrong: `trustless = विश्वासहीन` means *untrustworthy*, the opposite of the
  concept. Also overridden here: शासन -> गवर्नेंस, सेतु -> ब्रिज, स्मार्ट अनुबंध
  -> स्मार्ट कॉन्ट्रैक्ट, सत्यापक -> वैलिडेटर, खनन/खनिक -> माइनिंग/माइनर,
  बीज वाक्यांश -> सीड फ़्रेज़, अनुप्रमाणन -> अटेस्टेशन, इथेरियम मेननेट ->
  Ethereum मेननेट, वेब2 -> Web2, अंतर-संचालनीयता -> इंटरऑपरेबिलिटी.

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick the term.

```terms
private key = निजी कुंजी
private keys = निजी कुंजियाँ
public key = सार्वजनिक कुंजी
blockchain = ब्लॉकचेन
blockchains = ब्लॉकचेन
blockchain technology = ब्लॉकचेन तकनीक
blockchain apps = ब्लॉकचेन ऐप
blockchain trilemma = ब्लॉकचेन ट्रिलेमा
ethereum blockchain = Ethereum ब्लॉकचेन
ethereum mainnet = Ethereum मेननेट
layer 1 = Layer 1
layer 2 = Layer 2
l2 = L2
smart contract = स्मार्ट कॉन्ट्रैक्ट
smart contracts = स्मार्ट कॉन्ट्रैक्ट
smart account = स्मार्ट अकाउंट
smart wallet = स्मार्ट वॉलेट
cryptocurrency = क्रिप्टोकरेंसी
cryptocurrencies = क्रिप्टोकरेंसी
cryptocurrency mining = क्रिप्टोकरेंसी माइनिंग
crypto = क्रिप्टो
decentralized = विकेंद्रीकृत
decentralization = विकेंद्रीकरण
decentralized money = विकेंद्रीकृत पैसा
decentralized finance = विकेंद्रीकृत वित्त
dapp = dApp
staking = स्टेकिंग
staking pool = स्टेकिंग पूल
staking providers = स्टेकिंग प्रोवाइडर
solo staking = सोलो स्टेकिंग
solo staker = सोलो स्टेकर
stake = स्टेक
staker = स्टेकर
restaking = रीस्टेकिंग
liquid = लिक्विड
liquid staking token = लिक्विड स्टेकिंग टोकन
lsts = LSTs
centralized exchange staking = केंद्रीकृत एक्सचेंज स्टेकिंग
web3 = Web3
web2 = Web2
block = ब्लॉक
block hash = ब्लॉक हैश
block explorer = ब्लॉक एक्सप्लोरर
block reward = ब्लॉक इनाम
block builder = ब्लॉक बिल्डर
block proposer = ब्लॉक प्रपोज़र
blockspace = ब्लॉकस्पेस
block space = ब्लॉकस्पेस
wallet = वॉलेट
wallets = वॉलेट
wallet app = वॉलेट ऐप
crypto wallet = क्रिप्टो वॉलेट
cryptocurrency wallet = क्रिप्टोकरेंसी वॉलेट
hot wallet = हॉट वॉलेट
cold wallet = कोल्ड वॉलेट
hardware wallet = हार्डवेयर वॉलेट
custodial wallet = कस्टोडियल वॉलेट
non-custodial wallet = नॉन-कस्टोडियल वॉलेट
self-custody = सेल्फ-कस्टडी
self-custody wallet = सेल्फ-कस्टडी वॉलेट
self-custodial = सेल्फ-कस्टडी वाला
custodian = कस्टोडियन
seed phrase = सीड फ़्रेज़
recovery phrase = रिकवरी फ़्रेज़
liquidity = तरलता
liquidity pool = तरलता पूल
dex = DEX
cex = CEX
dex aggregator = DEX एग्रीगेटर
amm = AMM
lp = LP
tvl = TVL
mev = MEV
decentralized exchange = विकेंद्रीकृत एक्सचेंज
centralized exchange = केंद्रीकृत एक्सचेंज
centralized services = केंद्रीकृत सेवाएँ
order book = ऑर्डर बुक
market cap = मार्केट कैप
validator = वैलिडेटर
validators = वैलिडेटर
validator node = वैलिडेटर नोड
validator nodes = वैलिडेटर नोड
validator client = वैलिडेटर क्लाइंट
node = नोड
node operator = नोड ऑपरेटर
address = पता
addresses = पते
gas = गैस
gas fee = गैस शुल्क
gas fees = गैस शुल्क
optimistic rollup = ऑप्टिमिस्टिक रोलअप
zk rollup = ZK रोलअप
rollup = रोलअप
sidechain = साइडचेन
sharding = शार्डिंग
payment channel = पेमेंट चैनल
lightning network = Lightning Network
blob = ब्लॉब
onchain = ऑनचेन
offchain = ऑफचेन
onchain governance = ऑनचेन गवर्नेंस
network governance = नेटवर्क गवर्नेंस
governance = गवर्नेंस
delegate = प्रतिनिधि
veto = वीटो
dao = DAO
defi = DeFi
nft = NFT
peer-to-peer = पीयर-टू-पीयर
permissionless = अनुमति-रहित
trustless = ट्रस्टलेस
ledger = बहीखाता
transaction = लेन-देन
transactions = लेन-देन
transaction hash = लेन-देन हैश
transaction throughput = लेन-देन थ्रूपुट
token = टोकन
tokens = टोकन
token allowance = टोकन व्यय सीमा
allowance = व्यय सीमा
token swap = टोकन स्वैप
token pair = टोकन पेयर
trade = ट्रेड
trade route = ट्रेड रूट
swap = स्वैप
slippage = स्लिपेज
slippage tolerance = स्लिपेज टॉलरेंस
price impact = मूल्य प्रभाव
front-running = फ्रंट-रनिंग
sandwich attack = सैंडविच हमला
stablecoin = स्टेबलकॉइन
stablecoin issuer = स्टेबलकॉइन जारीकर्ता
peg = पेग
vault = वॉल्ट
death spiral = डेथ स्पाइरल
counterparty risk = काउंटरपार्टी जोखिम
memecoin = मीमकॉइन
mint = मिंट
hash = हैश
mining = माइनिंग
miner = माइनर
miners = माइनर
consensus = सर्वसम्मति
consensus mechanism = सर्वसम्मति तंत्र
proof of work = प्रूफ ऑफ वर्क
proof of stake = प्रूफ ऑफ स्टेक
proof-of-stake = प्रूफ ऑफ स्टेक
slashing = स्लैशिंग
slashed = स्लैश
attestation = अटेस्टेशन
scalability = स्केलेबिलिटी
interoperability = इंटरऑपरेबिलिटी
composability = कंपोज़ेबिलिटी
fungibility = फंजिबिलिटी
credible neutrality = विश्वसनीय तटस्थता
public good = सार्वजनिक वस्तु
public = सार्वजनिक
equality of opportunity = अवसर की समानता
security = सुरक्षा
fraud = धोखाधड़ी
phishing = फिशिंग
social engineering = सोशल इंजीनियरिंग
password manager = पासवर्ड मैनेजर
two factor authentication = टू-फैक्टर ऑथेंटिकेशन
2fa = 2FA
red flag = रेड फ्लैग
scam-token = स्कैम टोकन
fomo = FOMO
hodl = HODL
digital signature = डिजिटल हस्ताक्षर
cryptography = क्रिप्टोग्राफी
encryption = एन्क्रिप्शन
supply = आपूर्ति
max supply = अधिकतम आपूर्ति
circulating supply = प्रचलित आपूर्ति
scarcity = दुर्लभता
scarce = दुर्लभ
inflation = मुद्रास्फीति
halving = हाल्विंग
gold standard = स्वर्ण मानक
central bank = केंद्रीय बैंक
commercial bank = वाणिज्यिक बैंक
monetary policy = मौद्रिक नीति
spot etf = स्पॉट ETF
onramp = ऑनरैंप
ether = ईथर
eth = ETH
btc = BTC
gwei = Gwei
kyc = KYC
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
satoshi nakamoto = Satoshi Nakamoto
primary name = प्राइमरी नेम
standard record = स्टैंडर्ड रिकॉर्ड
custom record = कस्टम रिकॉर्ड
yourname.eth = yourname.eth
```

Typography

- **End declarative sentences with the danda ।**, not a full stop, even when
  the last word is Latin script: "यह Ethereum पर चलता है।" No space before the
  danda, one space after it.
- Questions take `?` and exclamations take `!`. Never combine them with a
  danda: "यह कैसे काम करता है?" not "…करता है।?"
- **No danda on a heading**, on a short list fragment, or on a quiz option.
  Feedback lines under `> ℹ️` are full sentences, so they do take a danda.
- The comma is the Latin `,`, and the colon is the Latin `:`. Hindi has no
  full-width punctuation, unlike ja and zh. The period is still used inside
  decimals and abbreviations (0.05, U.S.). Do not use the Devanagari
  abbreviation sign ॰.
- Quotation marks are “ ” with ‘ ’ nested.
- **Never use the em dash character U+2014.** Use a comma, a colon,
  parentheses, or a second sentence. Do not use an en dash (U+2013) for ranges
  either: write "2020 से 2024".
- Hyphens are part of the spelling of several pins and must be kept exactly:
  लेन-देन, पीयर-टू-पीयर, अनुमति-रहित, सेल्फ-कस्टडी, फ्रंट-रनिंग, टू-फैक्टर.
- One space between a Latin run and the Hindi around it, on both sides.

Interface strings

Keep an English app's button label in English and gloss it in Hindi on first
use, then use the English label alone afterwards:
“Connect Wallet” (वॉलेट कनेक्ट करें) पर क्लिक करें।

Headings and `/content` anchors

Hindi headings slugify to nothing in the `/content` anchor generator, so those
pages fall back to `section-N` anchors. This is expected and matches ja and zh.
Do not add Latin text to a heading to work around it.
