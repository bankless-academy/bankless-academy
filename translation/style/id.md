# Indonesian style guide (translate-content)

Register and address
- Address the reader with **"kamu"**, never "Anda". Bankless Academy is a peer
  teaching a peer; "Anda" is the register of a bank letter or a government
  form, which is exactly what these lessons teach the reader to leave behind.
  Imperatives stay bare: "buka aplikasi dompet", "klik", "simpan", "periksa".
- "kamu" is always lowercase. Never switch to "Anda" mid-lesson, not even in a
  warning or a legal-sounding line. If a sentence feels too blunt with "kamu",
  rewrite the sentence.
- **"kami" and "kita" are not interchangeable.** English "we" is ambiguous,
  Indonesian is not. When Bankless Academy speaks as the author, excluding the
  reader, it is "kami": "kami sarankan aplikasi Zerion". When the sentence
  describes something the reader and the lesson do together, it is "kita":
  "di pelajaran ini kita akan membahas cara kerja dompet". Writing "kami akan
  belajar bersama" tells the reader they are not included.
- Short, active sentences. Indonesian runs 15-25% longer than English (affixes
  plus "yang" clauses), so compress as you go: "adalah" rather than
  "merupakan", "bisa" rather than "dapat", "untuk" rather than "untuk dapat",
  and drop every "yang" the sentence survives without.
- Keep the active voice. Indonesian prose drifts into di- passives: write
  "kamu mengirim transaksi", not "transaksi dikirim olehmu".
- Standard Indonesian, not Jakarta slang: "tidak" not "nggak/gak", "seperti"
  not "kayak", "membuat" not "bikin", "sangat" not "banget". No sentence
  particles (sih, dong, kok, lho, deh) and no Jaksel code-switching ("which
  is", "literally"). "bisa" is standard and welcome.

Terms kept in English
- Product, network and brand names: Bitcoin, Ethereum, Uniswap, Optimism,
  Base, MetaMask, Coinbase, Zerion, Velodrome, Rocket Pool, OpenSea,
  Revoke.cash, Etherscan, Lightning Network, Allo Protocol.
- Tickers and units: ETH, BTC, USDC, OP, gwei, wei.
- Acronyms, uppercase and unchanged: API, DEX, CEX, AMM, KYC, TPS, APR/APY,
  TVL, LP, ERC-20, ERC-721, ERC-1155, EIP, NFT, DAO, DeFi, FOMO, PoW, PoS,
  OTC, RetroPGF.
- Crypto vocabulary Indonesian speakers genuinely type in English: blockchain,
  token, staking, stake, rollup, sidechain, hash, stablecoin, airdrop,
  memecoin, slippage, swap, mint, fork, phishing, onchain, offchain, blob,
  sharding, epoch, solver, intent, order book, open source, seed phrase,
  HODL.
- ETHGlossary marks a set of terms `keep_latin` / `always_latin` (API, APY,
  KZG, IPFS, gwei, wei, Solidity, Etherscan, KYC, UTXO, SNARK, STARK...);
  honour that.
- **Where the ```terms``` block below pins an Indonesian rendering, the pin
  wins**, even when the English word is also in circulation: smart contract ->
  kontrak pintar, bridge -> jembatan, ledger -> buku besar, allowance -> izin.
  Add the English spelling to `keyword_forms` so a sentence or a quiz option
  that still uses it resolves to a tooltip.

Terms to translate
- wallet -> dompet; crypto wallet -> dompet kripto; wallet app -> aplikasi
  dompet
- key -> kunci; private key -> kunci privat; public key -> kunci publik
- seed phrase -> seed phrase (kept in English: it is the label the wallet app
  puts on the reader's screen while they write the words down, and "frasa
  benih" is a calque nobody uses); recovery phrase -> frasa pemulihan
- address -> alamat
- fee -> biaya (never "ongkos", never the bare English "fee"); gas fee ->
  biaya gas; transaction fee -> biaya transaksi
- network -> jaringan
- node -> node (not "simpul"); node operator -> operator node; validator node
  -> node validator
- block -> blok; block space -> ruang blok
- ledger -> buku besar. Capital-L **Ledger** is a hardware wallet brand: never
  translate it and never lowercase it.
- supply -> pasokan; max supply -> pasokan maksimum; circulating supply ->
  pasokan beredar
- yield -> imbal hasil (the standard Indonesian finance term)
- lending -> meminjamkan (noun: pemberian pinjaman); borrowing -> meminjam
  (noun: peminjaman). ETHGlossary collapses both into "peminjaman", which is
  ambiguous: never let one word carry both directions on the same slide.
- swap -> swap (kept in English: every DEX button says Swap). "menukar" and
  "pertukaran" are fine in explanatory prose and belong in `keyword_forms`.
- self-custody -> penyimpanan mandiri; custodian -> kustodian; non-custodial
  wallet -> dompet non-kustodian
- decentralized -> terdesentralisasi; decentralization -> desentralisasi
- permissionless -> tanpa izin. Gloss it on first use ("tanpa izin, siapa pun
  bisa ikut"), because on its own "tanpa izin" can read as "unauthorized".
- trustless -> tanpa perlu percaya
- governance -> tata kelola; onchain governance -> tata kelola onchain
- mining -> penambangan; to mine -> menambang; miner -> penambang
- liquidity -> likuiditas; liquidity pool -> kolam likuiditas
- security (of a chain) -> keamanan, never "sekuritas", which means a tradable
  financial instrument
- exchange -> bursa: decentralized exchange -> bursa terdesentralisasi,
  centralized exchange -> bursa terpusat

Head-initial word order
Indonesian puts the head noun first and the modifier second, the reverse of
English. Every compound flips: smart contract -> kontrak pintar, validator
node -> node validator, gas fee -> biaya gas, liquidity pool -> kolam
likuiditas, block explorer -> penjelajah blok, hardware wallet -> dompet
perangkat keras, block reward -> imbalan blok. A term assembled in English
order ("pintar kontrak") is both wrong and a dead tooltip.

Affixation and clitics: the single most important rule here
Tooltip lookup is exact string matching on the lowercased display form, so the
lesson body must contain the glossary form character for character. Indonesian
breaks that constantly: meN-, ber-, di-, ter-, peN-, -kan, -an and the clitics
-mu / -nya all change the surface string, and the meN- prefix swallows the
first letter of the stem, so the stem is not even a substring any more:
tukar -> menukar, pinjam -> meminjam, simpan -> menyimpan, tambang ->
menambang, kirim -> mengirim.

Two rules, both mandatory:

1. **Backtick the bare form only. Keep affixes and clitics outside the
   backticks.**
   - write "`dompet` kamu", not "`dompetmu`"
   - write "kamu bisa melakukan `swap`", not "kamu bisa `men-swap`"
   - write "beberapa `token`", not "`token`-token"
   - write "isi `dompet` kamu", not "isi `dompetnya`"
2. **Every glossary entry carries its common affixed forms in
   `keyword_forms`**: the meN- verb, the di- passive, the peN- agent and the
   peN--an / -an nominal, wherever a lesson plausibly uses them. `swap` ->
   tukar, menukar, ditukar, pertukaran. `penambangan` -> tambang, menambang,
   ditambang, penambang. `delegasi` -> mendelegasikan, didelegasikan,
   pendelegasian. `desentralisasi` -> terdesentralisasi, desentral. Also add
   the English spelling of anything the pins translate: `kontrak pintar` ->
   "smart contract", `buku besar` -> "ledger", `jembatan` -> "bridge".

Number: Indonesian does not mark plural
Do not invent plural display forms. The English keys that exist as plurals
(`addresses`, `validator nodes`, `cryptocurrencies`, `intermediaries`) take the
**same** Indonesian form as their singular; set `keyword_plural` equal to
`keyword` or leave it out. Reduplication ("dompet-dompet") is emphatic, not a
default plural: write "banyak dompet", "beberapa `token`". `lang-tools merge`
reports these as display-form collisions; for Indonesian that is expected, not
a defect.

Loanword spelling
Use the KBBI-adapted spelling wherever Indonesian has absorbed the word:
kripto (not "crypto") in prose, kriptografi, enkripsi, transaksi, jaringan,
likuiditas, likuidasi, konsensus, desentralisasi, inflasi, validator,
protokol, digital, skalabilitas, agregator, atestasi, finalitas. Keep the
English spelling only for the crypto-native jargon listed above. Never blend
the two inside one word or one compound: "kriptocurrency", "blokchain" and
"dompet crypto" are all wrong; write "mata uang kripto", "blockchain",
"dompet kripto".

Prefixing an English loanword: prefer a light verb ("melakukan `staking`",
"melakukan `swap`", "mengirim `token`") over gluing an Indonesian affix onto an
English stem. When a prefix is unavoidable, PUEBI hyphenates it: "di-stake",
"men-download". Never the colloquial "nge-" ("nge-swap", "nge-stake").

Glossary overrides
ETHGlossary returns the prose context form, which for Indonesian is often the
affixed verb ("menukar", "mencetak", "mendelegasikan"): reduce it to the bare
form for `keyword` and move the affixed form into `keyword_forms`. `x = x`
pins a term to its English form. These pins beat ETHGlossary and beat your own
judgment.

```terms
private key = kunci privat
blockchain = blockchain
blockchain technology = teknologi blockchain
layer 1 = Layer 1
layer 2 = Layer 2
l1 = L1
l2 = L2
alternative layer 1 = Layer 1 alternatif
smart contract = kontrak pintar
cryptocurrency = mata uang kripto
cryptocurrencies = mata uang kripto
crypto = kripto
decentralized = terdesentralisasi
decentralization = desentralisasi
decentralized money = uang terdesentralisasi
dapp = dApp
staking = staking
staking pool = staking pool
solo staking = staking mandiri
centralized exchange staking = staking di bursa terpusat
stake = stake
slashing = slashing
slashed = terkena slashing
web3 = web3
web2 = web2
block = blok
block space = ruang blok
blockspace = ruang blok
block hash = hash blok
block reward = imbalan blok
block explorer = penjelajah blok
block producer = produsen blok
wallet = dompet
crypto wallet = dompet kripto
cryptocurrency wallet = dompet mata uang kripto
wallet app = aplikasi dompet
hot wallet = dompet panas
cold wallet = dompet dingin
hardware wallet = dompet perangkat keras
non-custodial wallet = dompet non-kustodian
self-custody wallet = dompet penyimpanan mandiri
self-custody = penyimpanan mandiri
self-custodial = penyimpanan mandiri
custodian = kustodian
liquidity = likuiditas
liquidity pool = kolam likuiditas
liquidation = likuidasi
liquid staking token = liquid staking token
dex = DEX
cex = CEX
dex aggregator = agregator DEX
meta-aggregator = meta-agregator
decentralized exchange = bursa terdesentralisasi
centralized exchange = bursa terpusat
centralized services = layanan terpusat
order book = order book
validator = validator
validator node = node validator
validator nodes = node validator
node = node
node operator = operator node
address = alamat
addresses = alamat
gas = gas
gas fee = biaya gas
rollup = rollup
optimistic rollup = Optimistic Rollup
zk rollup = ZK Rollup
sidechain = sidechain
onchain = onchain
offchain = offchain
seed phrase = seed phrase
recovery phrase = frasa pemulihan
dao = DAO
defi = DeFi
nft = NFT
token = token
token swap = swap token
token pair = pasangan token
token allowance = izin token
token approval = persetujuan token
token distribution = distribusi token
intermediary token = token perantara
allowance = izin
swap = swap
slippage = slippage
slippage tolerance = toleransi slippage
price impact = dampak harga
sandwich attack = serangan sandwich
trade route = rute perdagangan
private transaction routing = perutean transaksi privat
batch auction = lelang batch
intent = intent
solver = solver
blockchain apps = aplikasi blockchain
app = aplikasi
app store = app store
ledger = buku besar
public key = kunci publik
security = keamanan
public = publik
public good = barang publik
quadratic funding = pendanaan kuadratik
credible neutrality = netralitas kredibel
censorship-resistant = tahan sensor
veto = veto
delegate = delegasi
delegation = pendelegasian
onchain governance = tata kelola onchain
network governance = tata kelola jaringan
primary name = nama utama
onchain identity = identitas onchain
retropgf = RetroPGF
peer-to-peer = peer-to-peer
peer = rekan
intermediary = perantara
intermediaries = perantara
transaction = transaksi
transaction hash = hash transaksi
transaction throughput = throughput transaksi
transaction finality = finalitas transaksi
finality = finalitas
finality time = waktu finalitas
settlement time = waktu penyelesaian
asynchronous = asinkron
consensus = konsensus
consensus mechanism = mekanisme konsensus
attestation = atestasi
epoch = epoch
sharding = sharding
blob = blob
payment channel = kanal pembayaran
scalability = skalabilitas
blockchain trilemma = trilema blockchain
proof of work = Proof of Work
proof of stake = Proof of Stake
mining = penambangan
cryptocurrency mining = penambangan kripto
miner = penambang
51% attack = serangan 51%
tps = TPS
fraud proof = bukti kecurangan
validity proof = bukti validitas
zero-knowledge = Zero-Knowledge
ethereum virtual machine = Ethereum Virtual Machine
ethereum mainnet = Ethereum Mainnet
ethereum blockchain = blockchain Ethereum
bridge = jembatan
smart account = akun pintar
mint = mint
fork = fork
open source = open source
hash = hash
cryptography = kriptografi
encryption = enkripsi
digital signature = tanda tangan digital
stablecoin = stablecoin
collateral = agunan
coin = koin
money = uang
fiat = fiat
onramp = onramp
otc = OTC
over the counter = over the counter
know-your-customer = Know Your Customer
kyc = KYC
amm = AMM
lp = LP
tvl = TVL
yield farm = yield farm
trustless = tanpa perlu percaya
permissionless = tanpa izin
scarcity = kelangkaan
scarce = langka
inflation = inflasi
halving = halving
max supply = pasokan maksimum
circulating supply = pasokan beredar
monetary policy = kebijakan moneter
central bank = bank sentral
commercial bank = bank komersial
gold standard = standar emas
spot etf = ETF spot
lightning network = Lightning Network
satoshi nakamoto = Satoshi Nakamoto
ether = ether
eth = ETH
btc = BTC
gwei = gwei
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
password manager = pengelola kata sandi
social engineering = rekayasa sosial
phishing = phishing
fomo = FOMO
equality of opportunity = kesetaraan kesempatan
```

Typography
- Decimal comma, period as the thousands separator: 0,5 ETH; 21.000.000 BTC;
  1.234,56. Never the English "21,000,000".
- English "billion" is **miliar**, "trillion" is **triliun**. "Bilion" and
  "bilyun" are not Indonesian, and using "triliun" for a billion is off by a
  factor of a thousand.
- The percent sign goes directly after the number, with no space: 51%, 5,5%.
  Spelled out it takes a space: "51 persen".
- Rupiah amounts have no space after the symbol: Rp1.000.000. Dollar amounts
  stay as in the source: $100.
- Quotation marks are the plain double ones "..." with single '...' nested.
  Never guillemets, never low-high German quotes.
- **Never use em dashes** (U+2014, the long dash). Use a comma, a colon,
  parentheses, or "yaitu" / "yakni". Do not substitute an en dash either.
- "di" apart when it is the preposition of place ("di blockchain", "di dalam
  dompet", "di mana"), attached when it is the passive prefix ("ditambang",
  "dikirim", "disimpan"). Same for "ke": "ke bursa" but "ketua". This is the
  most common spelling error in Indonesian technical prose.
- Headings use title case: capitalize every word except conjunctions and short
  prepositions (di, ke, dari, dan, atau, untuk, pada, yang), unless it is the
  first word. "Cara Kerja Dompet Kripto", "Apa Itu Blockchain?".
- Glossary terms stay lowercase in running prose (kontrak pintar, kunci
  privat, dompet dingin). Only brands, networks and named designs keep their
  capitals (Bitcoin, Ethereum, Base, Lightning Network, Proof of Stake).
- Emphasis markers must be able to render: write `**Nilai**:` not
  `**Nilai:**`, bold the link text (`[**Ethereum**](url)`) rather than the
  whole link, and use `*x*` rather than `_x_` next to a letter.

Interface strings
- Keep an English app's button label in English and gloss it in Indonesian on
  first use: klik "Connect Wallet" (hubungkan dompet). The learner is looking
  at an English interface; a translated label they cannot find on screen is
  worse than no translation at all.
- Same for wallet prompts and security screens: "Secret Recovery Phrase",
  "Approve", "Sign", "Swap", "Revoke". Gloss once, then reuse the English
  label.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | id |
|---|---|
| `True` | **Benar** |
| `False` | **Salah** |

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
