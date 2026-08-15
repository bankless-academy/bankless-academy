# Turkish style guide (translate-content)

Register and address
- Address the reader with **"sen"**, not "siz". Bankless Academy is a peer
  teaching a peer. Imperatives are the sen form: "cüzdanını bağla", "tıkla",
  "sakla", "kontrol et".
- Short sentences. Turkish is verb-final, so a long English sentence becomes an
  unreadable Turkish one: split it rather than chain with "-dığı için",
  "-mekle birlikte", "-e rağmen".
- Prefer plain Turkish over Ottoman-register formality: "kullan" not "istifade
  et", "yüzden" not "sebebiyle".

Terms kept in English
- Product and network names: Bitcoin, Ethereum, Uniswap, Optimism, Base,
  MetaMask, Coinbase, Velodrome, Rocket Pool, OpenSea, Revoke.cash.
- Tickers and units: ETH, BTC, USDC, OP, gwei, wei.
- Established crypto vocabulary used as-is in Turkish: token, staking, DeFi,
  NFT, DAO, rollup, hash, stablecoin, HODL, airdrop, memecoin, slippage.
- **Where the ```terms``` block below pins a Turkish rendering, the pin wins**,
  even if the English word is also in circulation: blockchain -> blokzincir,
  smart contract -> akıllı sözleşme, bridge -> köprü. An earlier version of
  this section listed those three as "kept in English" while the pins
  translated them, which is contradictory; the pins are authoritative. Add the
  English spelling to `keyword_forms` so prose using it still resolves.
- Acronyms: API, DEX, CEX, AMM, KYC, TPS, APR/APY, TVL, LP, ERC-20, EIP.

Terms to translate
- wallet -> cüzdan
- key (private/public) -> anahtar (özel/genel)
- seed phrase -> kurtarma ifadesi (also "seed ifadesi")
- address -> adres
- fee -> ücret; gas fee -> gas ücreti
- network -> ağ
- node -> düğüm
- block -> blok
- ledger -> defter
- supply -> arz; circulating supply -> dolaşımdaki arz
- yield -> getiri
- lending / borrowing -> borç verme / borç alma
- swap -> takas (verb: takas etmek)
- self-custody -> kendi saklaman / öz saklama
- decentralized -> merkeziyetsiz; decentralization -> merkeziyetsizlik
- permissionless -> izinsiz
- trustless -> güven gerektirmeyen
- governance -> yönetişim
- mining -> madencilik; miner -> madenci
- liquidity -> likidite; liquidity pool -> likidite havuzu

Suffixes — the single most important rule here
Turkish is agglutinative: a glossary term almost never appears in its bare
form. `cüzdan` shows up as cüzdanı, cüzdanın, cüzdana, cüzdanda, cüzdanlar,
cüzdanları… and vowel harmony changes the suffix vowel (blok**ta** but
cüzdan**da**, ağ**a** but blok**a**).

**Every glossary entry must carry its common suffixed forms in
`keyword_forms`** — at minimum accusative (-ı/-i/-u/-ü), dative (-a/-e),
locative (-da/-de/-ta/-te), genitive (-ın/-in/-un/-ün) and the plural
(-lar/-ler), for both singular and plural stems where the lesson prose uses
them. Without this, nearly every backticked term in a Turkish lesson is a dead
tooltip, and `validate-content.js` will fail the build. This matters far more
in Turkish than the gender agreement did in the Romance languages.

Glossary overrides
ETHGlossary returns inflected prose forms ("özel anahtarınızı", "blokzincire");
always reduce to the bare nominative stem for `keyword`, and put the inflections
in `keyword_forms`. `x = x` pins a term to its English form.

```terms
private key = özel anahtar
private keys = özel anahtarlar
public key = genel anahtar
bridge = köprü
blockchain = blokzincir
blockchains = blokzincirler
blockchain technology = blokzincir teknolojisi
layer 1 = Layer 1
layer 2 = Layer 2
smart contract = akıllı sözleşme
smart contracts = akıllı sözleşmeler
cryptocurrency = kripto para
cryptocurrencies = kripto paralar
decentralized = merkeziyetsiz
decentralization = merkeziyetsizlik
dapp = dApp
staking pool = staking havuzu
staking = staking
web3 = web3
web2 = web2
block = blok
crypto wallet = kripto cüzdan
wallet = cüzdan
wallets = cüzdanlar
liquidity = likidite
liquidity pool = likidite havuzu
dex = DEX
cex = CEX
validator node = doğrulayıcı düğüm
node operator = düğüm operatörü
address = adres
addresses = adresler
gas = gas
gas fee = gas ücreti
optimistic rollup = iyimser rollup
zk rollup = ZK rollup
rollup = rollup
seed phrase = kurtarma ifadesi
recovery phrase = kurtarma ifadesi
dao = DAO
peer-to-peer = eşler arası
defi = DeFi
hot wallet = sıcak cüzdan
cold wallet = soğuk cüzdan
ledger = defter
price impact = fiyat etkisi
decentralized exchange = merkeziyetsiz borsa
centralized exchange = merkezi borsa
onchain = zincir üstü
sidechain = yan zincir
permissionless = izinsiz
trustless = güven gerektirmeyen
token = token
tokens = tokenlar
token allowance = token izni
stablecoin = stablecoin
mining = madencilik
miners = madenciler
self-custody = öz saklama
hash = hash
nft = NFT
slippage = slippage
governance = yönetişim
monetary policy = para politikası
central bank = merkez bankası
gold standard = altın standardı
max supply = maksimum arz
circulating supply = dolaşımdaki arz
scarcity = kıtlık
inflation = enflasyon
halving = halving
```

Typography
- Turkish quotes are “ ”. Never use em dashes (—).
- Decimal comma and period thousands separator: 0,0002 ETH, 120.000. The
  percent sign goes **before** the number in Turkish: %51, not 51 %.
- The dotted/dotless i distinction is meaningful: İstanbul, ışık, için. Never
  substitute i for ı.
- An apostrophe separates a suffix from a proper noun: Ethereum'da,
  Bitcoin'in, Base'e.

Interface strings
- Keep an English app's button label in English and gloss it in Turkish on
  first use: “Connect Wallet” (Cüzdanı Bağla) düğmesine tıkla.
