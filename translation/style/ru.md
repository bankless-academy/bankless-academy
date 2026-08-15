# Russian style guide (translate-content)

Russian is the second Slavic language in this repo (Ukrainian was first), and
the two are close enough to copy structure from and far enough apart to copy
nothing else. A dozen independent agents will write the glossary, the UI
namespaces and 19 lessons from this file. It is the only thing holding them to
one Russian. Read it end to end before writing a single slide.

Register and address

- Address the reader as **вы**, never ты. Two reasons, and the second is the
  decisive one. First, every product this reader already uses in Russian says
  вы: MetaMask, Binance Academy, Ledger, Trust Wallet, every bank app. ты to an
  adult stranger who is being taught how to protect money reads as presumptuous,
  not friendly. Second, **ты forces gendered verbs**: "ты узнал" is masculine and
  misgenders half the readers, while вы takes plural agreement and is
  gender-neutral in every tense ("вы узнали", "вы готовы"). The peer tone comes
  from the vocabulary, not from the pronoun.
- **Never capitalize Вы.** Capitalized Вы is the register of formal
  correspondence addressed to one named person. Our text is a course, so it is
  lowercase вы, ваш, вам everywhere, including headings and buttons.
- Imperatives take the вы form: **откройте, нажмите, сохраните, проверьте,
  запишите, скопируйте**. A negative instruction takes the imperfective:
  "никогда не **сообщайте** свою сид-фразу", not "не сообщите".
- **Buttons use the infinitive, prose uses the imperative.** This is a real
  Russian UI convention and the UI agents must follow it: a label is
  "Подключить кошелёк", "Начать урок", "Продолжить"; a sentence in a slide is
  "Нажмите «Connect Wallet»".
- **Drop ваш wherever ownership is obvious, and use свой when it is not.**
  Russian does not repeat the possessive the way English does. Write "Откройте
  кошелёк и проверьте баланс", not "Откройте ваш кошелёк и проверьте ваш
  баланс". A possessive on every noun is the clearest sign of machine
  translation. When the possessive is genuinely needed and the subject is the
  reader, it is свой: "Запишите свою сид-фразу".
- Keep the vocabulary everyday, not bureaucratic. Write "чтобы", not "для того
  чтобы"; "потому что", not "в связи с тем что"; "можно", not "имеется
  возможность"; "деньги", not "денежные средства". Bankless Academy is a peer
  teaching a peer, not a central bank circular.
- Prefer the active voice and avoid the passive in -ся chains: "сеть проверяет
  транзакцию", not "транзакция проверяется сетью".
- Short sentences. Split at the clause boundary rather than chaining "в связи с
  тем, что", "при условии, что", "несмотря на то, что".
- Impersonal constructions are warm and short in Russian: "можно отправить",
  "достаточно нажать", "нужно сохранить". Use them instead of "вы можете" on
  every line.
- Explorer, the site's word for its readers, is **Исследователь**: "Добро
  пожаловать, Исследователь!"
- Quiz feedback openers are fixed so all 19 lessons match: **"Верно! …"** for the
  correct option and **"Попробуйте ещё раз! …"** for a wrong one.

Latin or Cyrillic: the central decision

Every crypto term falls into exactly one of three buckets. Decide with this
test, in order, and never mix buckets for the same term across two lessons.

1. **Latin script, untouched.** Names, tickers and acronyms. Products, networks
   and companies: Bitcoin, Ethereum, Uniswap, Optimism, Base, MetaMask,
   Coinbase, Zerion, Lido, Rocket Pool, Velodrome, OpenSea, Etherscan,
   Revoke.cash, Gitcoin, Aave, Lightning Network, Allo Protocol. People: Satoshi
   Nakamoto. Tickers and units: ETH, BTC, USDC, OP, gwei, wei. Acronyms: API,
   DEX, CEX, AMM, LP, TVL, MEV, KYC, APR, APY, TPS, OTC, NFT, DAO, DeFi, Web3,
   Web2, L1, L2, EVM, EIP, ERC-20, ERC-721, ERC-1155, LST, 2FA, FOMO, HODL,
   RetroPGF, dApp. Domain-like strings: yourname.eth, .eth.
   **Do not write Биткоин, Эфириум, МетаМаск or Юнисвоп.** ETHGlossary marks
   those `transliterate` and its `ru.json` returns exactly those forms; the pins
   below override it. The lesson screenshots, the wallet UIs and the block
   explorers the reader will open all say Bitcoin and Ethereum, and a Cyrillic
   spelling in the text next to a Latin one in the image teaches the reader
   nothing.
2. **Cyrillic transliteration.** A concept born in English that Russian crypto
   speakers say in Cyrillic anyway: блокчейн, токен, стейкинг, стейкер, майнинг,
   майнер, валидатор, роллап, хеш, газ, сайдчейн, шардинг, слэшинг, блоб, форк,
   стейблкоин, мемкоин, ончейн, офчейн, фишинг, фиат, кастодиан, солвер,
   сид-фраза, фронтраннинг, рестейкинг.
3. **A real Russian word.** The concept already exists in ordinary Russian
   finance, civics or speech, and the Russian word teaches better than the
   loanword: кошелёк, ключ, адрес, сеть, узел, блок, реестр, комиссия,
   транзакция, биржа, предложение, дефицитность, инфляция, залог, посредник,
   мост, хранилище, монета, доходность, безопасность, мошенничество,
   общественное благо, равенство возможностей.

**The tiebreaker between buckets 2 and 3 is what a Russian-speaking crypto
learner will actually meet, sanity-checked against rule 17 of CLAUDE.md (prefer
ELI5 over jargon).** That is why the pins say узел and not нода, обмен and not
своп, выпуск and not минт, while keeping майнинг rather than добыча and стейкинг
rather than размещение доли. Put the rejected form in `keyword_forms` so prose
that uses it still resolves to a tooltip.

**Never bolt a Russian case ending onto a Latin word.** Not "Ethereum'а", not
"Ethereum-е", not "в DeFi-е". A Latin run is indeclinable in our text, so give
it a Russian head noun to carry the case and the gender:

    wrong:   транзакция в Ethereum'е стоит дешевле
    right:   транзакция в сети Ethereum стоит дешевле
    right:   приложение MetaMask, биржа Uniswap, протоколы DeFi, рынок NFT

The same trick fixes agreement: "сеть Base запустилась" (feminine, from сеть),
"протокол Uniswap работает" (masculine, from протокол).

Terms to translate

- wallet -> кошелёк; crypto wallet -> криптокошелёк; wallet app -> приложение-кошелёк
- key -> ключ; private key -> приватный ключ; public key -> публичный ключ
- seed phrase -> сид-фраза; recovery phrase -> фраза восстановления
- address -> адрес
- fee -> комиссия; gas fee -> комиссия за газ
- network -> сеть
- node -> узел (нода is jargon, keep it in `keyword_forms` only)
- block -> блок; ledger -> реестр
- supply -> предложение; max supply -> максимальное предложение;
  circulating supply -> циркулирующее предложение
- yield -> доходность (a plain profit is прибыль)
- lending / borrowing -> кредитование / заимствование
- swap -> обмен (the verb is обменять; своп stays as an alias)
- self-custody -> самостоятельное хранение; custodian -> кастодиан
- decentralized -> децентрализованный; decentralization -> децентрализация
- permissionless -> без разрешений
- trustless -> не требующий доверия (it means "trust is not required", never
  "ненадёжный"; if a sentence could be read that way, rewrite it)
- governance -> управление
- mining -> майнинг; miner -> майнер
- liquidity -> ликвидность; liquidity pool -> пул ликвидности
- security -> безопасность. **Never ценная бумага.** Our `security` entry is
  about a blockchain resisting attacks, and the finance false friend would turn
  it into "a tradable financial instrument".

Cases and the glossary: the single most important rule here

Russian has six cases, three genders and two numbers, and adjectives agree with
their noun, so a glossary term almost never appears in the nominative in running
prose. The tooltip index is an **exact string match** after NFC and lowercasing
(`normalizeKeyword`). It strips nothing and folds nothing else, so every surface
form that appears inside backticks must be in the glossary, or the tooltip is
dead and `validate-content.js` fails the build.

**`keyword` must be the nominative singular.** It is the citation form: it is
what `/glossary` prints as the term's heading, what the alphabetical sort uses,
and what `lang-tools merge` compares the style-guide pins against. Inflected
forms never go there.

    "wallet": {
      "keyword": "кошелёк",
      "keyword_plural": "кошельки",
      "keyword_forms": [
        "кошелька", "кошельку", "кошельком", "кошельке",
        "кошельков", "кошелькам", "кошельками", "кошельках",
        "кошелек", "кошелька", "кошельке"
      ],
      "definition": "…"
    }

Two things that example is showing:

1. **The stem changes, you cannot just append endings.** кошелёк loses its ё in
   every oblique form (кошелька, not кошелёка). The last three entries are the
   е-spelling safety net described under "ё" below.
2. **In a multi-word term every word inflects.** `приватный ключ` needs
   приватного ключа, приватному ключу, приватным ключом, приватном ключе,
   приватные ключи, приватных ключей, приватными ключами. Listing only the noun
   is useless, because the string in the lesson contains the adjective too.

**The recipe for glossary agents.** For every noun entry emit, in
`keyword_forms`: the genitive, dative, instrumental and prepositional singular,
the accusative singular when it differs from the nominative, and the genitive,
dative, instrumental and prepositional plural. The nominative plural goes in
`keyword_plural`. For an adjectival entry (децентрализованный, публичный,
одноранговый, ликвидный, дефицитный, асинхронный) emit at minimum the feminine,
neuter and plural nominative plus the masculine and plural genitive. Ten to
twelve forms per entry is normal for Russian and it is what makes the tooltips
work.

**The recipe for lesson agents: put the term where the nominative reads
naturally, and you need no extra form at all.** Three positions do this:

    subject:            `Приватный ключ` даёт полный доступ к деньгам.
    after "это":        `Сид-фраза` это резервная копия вашего кошелька.
    after "что такое":  Что такое `пул ликвидности`?

**Inanimate masculine nouns are free in the direct-object position too**, because
their accusative equals their nominative: кошелёк, ключ, токен, блок, адрес,
узел, хеш, мост, реестр, роллап, консенсус, газ.

    works with the bare form:  Откройте `кошелёк` и скопируйте `адрес`.
    needs a form:              Деньги хранятся в `кошельке`.   (prepositional)
    needs a form:              Подтвердите `транзакцию`.       (feminine accusative)

**Animate masculine nouns are not free**: валидатор, майнер, делегат, посредник,
кастодиан, стейкер, солвер take the genitive in the accusative ("выберите
`валидатора`"), so that form must be in the glossary.

Two more rules that keep the index honest:

- **Prepositions and quantifiers stay outside the backticks.** Write "в
  `кошельке`", never "`в кошельке`"; "два `кошелька`", never "`два кошелька`".
  The preposition is not part of the term, and the number still forces the
  genitive on the noun, so that form is needed either way.
- **Never split a term across backticks** and never backtick a phrase that has
  picked up an extra adjective: "`пул ликвидности`" resolves,
  "`большой пул ликвидности`" does not.

Grammatical gender of the loanwords

The gender fixes the adjective, the past tense and the pronoun in the same
clause. Getting it wrong is not a build failure, it is just visibly bad Russian
that differs from slide to slide, so learn the high-traffic ones:

- **masculine**: блокчейн, токен, кошелёк, смарт-контракт, узел, блок, адрес,
  ключ, хеш, газ, стейкинг, майнинг, майнер, валидатор, роллап, мост, пул,
  реестр, консенсус, стейблкоин, сайдчейн, шардинг, слэшинг, блоб, форк, своп,
  фиат, залог, посредник, кастодиан, делегат, солвер, стейк, эфир, банк, счёт,
  мемкоин, скам-токен, фишинг, рестейкинг
- **feminine**: транзакция, сеть, комиссия, биржа, ликвидность, криптовалюта,
  безопасность, сид-фраза, подпись, атака, эпоха, аттестация, привязка, монета,
  запись, книга, инфляция, дефицитность, масштабируемость, взаимозаменяемость,
  композируемость, интероперабельность, финальность, ликвидация, децентрализация
- **neuter**: хранилище, разрешение, шифрование, управление, проскальзывание,
  намерение, доказательство, вознаграждение, предложение, благо, равенство,
  приложение, распределение, делегирование, извлечение, создание, финансирование
- **plural only**: деньги, финансы, средства ("децентрализованные деньги",
  "деньги работают", never "децентрализованное деньги")

      `блокчейн` записал транзакцию.        `транзакция` записана в блоке.
      надёжный `кошелёк`                     децентрализованная `биржа`
      это `хранилище` работает               эти `деньги` не принадлежат банку

For a Latin acronym, do not guess the gender: give it a Russian head noun
("протоколы DeFi выросли", "рынок NFT", "сообщество DAO") instead of writing
"DeFi вырос".

ё, spelling and encoding: three ways to ship an invisible bug

1. **Write ё where the word has ё.** кошелёк, платёжный, расчёты, объём, счёт,
   всё, её, даёт, найдёт. Both spellings are legal Russian and nothing in the
   pipeline folds ё to е, so one agent writing "кошелек" inside backticks kills
   the tooltip on that slide. ё is also the more readable choice for beginners
   (всё against все). **ETHGlossary's `ru.json` writes "кошелек" without the ё**,
   so do not copy its spelling. As a safety net, every glossary entry whose form
   contains ё must ALSO carry the plain-е spelling of each form in
   `keyword_forms`: кошелек, кошелька, платежный, расчетов. Both spellings then
   resolve and no wave can break on this.
2. **NFC, always.** й is U+0439 and ё is U+0451 as single code points in NFC; in
   NFD they decompose to и + U+0306 and е + U+0308, render pixel-identically and
   never compare equal. Since almost every Russian sentence contains й, an NFD
   file silently kills every tooltip in it. Check any file you touch with

       node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');console.log(s===s.normalize('NFC')?'ok':'NOT NFC')" <file>

   and fix with `.normalize('NFC')`.
3. **No Latin lookalikes in Cyrillic words.** Latin a, c, e, o, p, x, y, A, B, C,
   E, H, K, M, O, P, T, X are visually identical to Cyrillic letters and compare
   as different characters. Copy the pinned spelling from this file rather than
   retyping it, and never let a spell-corrector "fix" а to a.

Length: Russian runs 10 to 15% longer than English

`displayWidth` counts Cyrillic at one unit per character, so the 22-line ceiling
is honest for Russian. It is also the point where the build fails, not the
budget: **target 19 estimated lines on a LEARN slide**, because the estimate is
approximate and mobile binds first.

Compress by cutting filler, never by dropping information:

    является / представляет собой   -> drop it, or use a real verb
    осуществляет проверку           -> проверяет
    для того чтобы                  -> чтобы
    в том случае, если              -> если
    в связи с тем, что              -> потому что
    большое количество              -> много
    вы можете отправить             -> можно отправить
    процесс проверки подлинности транзакций сети -> сеть проверяет транзакции

Chains of genitives are the main way a Russian slide doubles in length. Break
them with a verb.

**Quiz options are capped at about 70 characters and Russian gets no discount**:
"децентрализованный" alone is 18. Shorten the option and move the nuance into
the `> ℹ️` feedback line, which is one or two short sentences (~150 characters).

Emphasis markers

`validate-content.js` renders every line with markdown-it and fails the build on
any `**` or `_` that survives as literal text. Russian has word spaces and ASCII
punctuation, so it is far safer than CJK, but the Ukrainian wave still broke on
`_…_` next to Cyrillic. Every row below was run through the real validator:

    breaks:  **Ценность:**время                ->  **Ценность**: время
    breaks:  это **кошелёк.**Дальше…           ->  это **кошелёк**. Дальше…
    breaks:  **(приватный ключ)**нужно скрыть  ->  (**приватный ключ**) нужно скрыть
    breaks:  комиссия **0,05%**от суммы        ->  комиссия **0,05%** от суммы
    breaks:  блок_чейн_                        ->  блок*чейн*

Rules: never let a `**` close on punctuation with a letter jammed against it,
keep the period or colon outside the bold, and **never use `_…_` against a
Cyrillic letter** (`_` cannot open or close intraword). Use `*…*`. Bold the link
text, not the whole link: `[**название урока**](url)`.

Numbers

- **Latin digits, and a non-breaking space as the thousands separator**:
  21 000 000 BTC, 120 000 транзакций. Never "21,000,000": in Russian the comma
  is the decimal separator, so the English grouping reads as a decimal. A plain
  space lets the number wrap across two lines, which is why it must be U+00A0.
- **Decimal comma**: 0,05 ETH, 3,5%. The one exception is a literal value the
  reader must type into an English interface, or anything inside code, an
  address, a hash or a URL: those keep the English source exactly
  ("введите 0.05 в поле Amount").
- **Percent directly after the number, no space**: 51%, 3,5%. The typographic
  norm wants a space; we do not use it, because these figures also appear in the
  slide images in the English form and the two must match.
- Currency stays as in the source: $100, 100 долларов. Never convert to rubles.
- Years and dates: "в 2025 году", "3 января 2025 года". Ranges take words, not a
  dash: "с 2020 по 2024 год", "от 10 до 15%".
- Millions and billions are words: миллион, миллиард, триллион. Do not invent
  abbreviations (млн, млрд) in slide prose.

Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin, but its
`ru.json` has four failure modes, all confirmed in the vendored file:

- **It returns inflected prose forms.** `contexts.prose` gives
  `attestation = аттестацию`, `blockchain = блокчейне`, `token = токены`,
  `miner = майнеры`. A pin and a `keyword` are always the bare nominative
  singular; inflections belong in `keyword_forms`.
- **Its `term` and `heading` fields are capitalized** (Блокчейн, Кошелек, Адрес,
  Газ, Роллап, Веб2). Russian does not use title case. Everything in the block
  below is lowercase unless it is a proper noun or an acronym.
- **It transliterates brand names** (Биткоин, Эфириум, МетаМаск, Юнисвоп). We
  keep those in Latin, see bucket 1.
- **It drops ё** (кошелек). We write it, see above.

Explicit overrides, with the reason: `public key` открытый ключ -> публичный ключ
(pairs with приватный ключ, which is what Russian crypto writing uses);
`permissionless` общедоступный -> без разрешений (общедоступный means "publicly
available" and loses the "no gatekeeper" meaning, and the prepositional phrase
does not inflect, which kills a whole class of dead tooltips); `mint` чеканить ->
выпуск (a `keyword` must be a nominal citation form, and чеканить is what you do
to metal coins); `swap` своп -> обмен (plain Russian, and it keeps
`token swap` = обмен токенов consistent); `peer` пир -> равный участник (ELI5);
`web2` Веб2 -> Web2; `node` keeps узел with нода demoted to `keyword_forms`;
`hash` is хеш, not хэш.

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick each term, so the pins most likely to drift between agents come first.

```terms
private key = приватный ключ
private keys = приватные ключи
public key = публичный ключ
blockchain = блокчейн
blockchains = блокчейны
blockchain technology = блокчейн-технология
blockchain apps = блокчейн-приложения
blockchain trilemma = трилемма блокчейна
ethereum blockchain = блокчейн Ethereum
ethereum mainnet = основная сеть Ethereum
layer 1 = Layer 1
layer 2 = Layer 2
l1 = L1
l2 = L2
alternative layer 1 = альтернативный Layer 1
smart contract = смарт-контракт
smart contracts = смарт-контракты
smart account = смарт-аккаунт
smart wallet = смарт-кошелёк
cryptocurrency = криптовалюта
cryptocurrencies = криптовалюты
cryptocurrency mining = майнинг криптовалюты
crypto = криптовалюта
coin = монета
decentralized = децентрализованный
decentralization = децентрализация
decentralized money = децентрализованные деньги
decentralized finance = децентрализованные финансы
dapp = dApp
staking = стейкинг
staking pool = стейкинг-пул
staking providers = провайдеры стейкинга
solo staking = соло-стейкинг
solo staker = соло-стейкер
stake = стейк
staker = стейкер
restaking = рестейкинг
liquid = ликвидный
liquid staking token = токен ликвидного стейкинга
lsts = LST
centralized exchange staking = стейкинг на централизованной бирже
web3 = Web3
web2 = Web2
block = блок
block hash = хеш блока
block explorer = обозреватель блоков
block reward = вознаграждение за блок
block builder = сборщик блоков
block proposer = предлагающий блок
block producer = создатель блоков
blockspace = пространство блока
block space = пространство блока
wallet = кошелёк
wallets = кошельки
wallet app = приложение-кошелёк
crypto wallet = криптокошелёк
cryptocurrency wallet = кошелёк для криптовалюты
hot wallet = горячий кошелёк
cold wallet = холодный кошелёк
hardware wallet = аппаратный кошелёк
custodial wallet = кастодиальный кошелёк
non-custodial wallet = некастодиальный кошелёк
self-custody = самостоятельное хранение
self-custody wallet = кошелёк самостоятельного хранения
self-custodial = с самостоятельным хранением
custodian = кастодиан
seed phrase = сид-фраза
recovery phrase = фраза восстановления
liquidity = ликвидность
liquidity pool = пул ликвидности
dex = DEX
cex = CEX
dex aggregator = DEX-агрегатор
meta-aggregator = мета-агрегатор
amm = AMM
lp = LP
tvl = TVL
mev = MEV
decentralized exchange = децентрализованная биржа
centralized exchange = централизованная биржа
centralized services = централизованные сервисы
order book = книга ордеров
market cap = рыночная капитализация
validator = валидатор
validators = валидаторы
validator node = узел-валидатор
validator nodes = узлы-валидаторы
validator client = клиент валидатора
node = узел
nodes = узлы
node operator = оператор узла
address = адрес
addresses = адреса
gas = газ
gas fee = комиссия за газ
optimistic rollup = оптимистичный роллап
zk rollup = ZK-роллап
rollup = роллап
sidechain = сайдчейн
sharding = шардинг
payment channel = платёжный канал
lightning network = Lightning Network
blob = блоб
onchain = ончейн
offchain = офчейн
onchain governance = ончейн-управление
network governance = управление сетью
governance = управление
onchain identity = ончейн-идентичность
delegate = делегат
delegation = делегирование
veto = вето
dao = DAO
defi = DeFi
nft = NFT
peer-to-peer = одноранговый
peer = равный участник
permissionless = без разрешений
trustless = не требующий доверия
ledger = реестр
transaction = транзакция
transactions = транзакции
transaction hash = хеш транзакции
transaction throughput = пропускная способность
transaction fee = комиссия за транзакцию
token = токен
tokens = токены
token allowance = разрешение на токены
token approval = одобрение токена
allowance = разрешение
token swap = обмен токенов
token pair = пара токенов
token distribution = распределение токенов
intermediary token = промежуточный токен
multi-token standard = мультитокенный стандарт
trade = сделка
trade route = маршрут обмена
swap = обмен
slippage = проскальзывание
slippage tolerance = допустимое проскальзывание
price impact = влияние на цену
front-running = фронтраннинг
sandwich attack = сэндвич-атака
51% attack = атака 51%
private transaction routing = приватная маршрутизация транзакций
batch auction = пакетный аукцион
intent = намерение
solver = солвер
otc = OTC
over the counter = внебиржевая сделка
stablecoin = стейблкоин
stablecoin issuer = эмитент стейблкоина
peg = привязка
vault = хранилище
death spiral = спираль смерти
counterparty risk = риск контрагента
memecoin = мемкоин
mint = выпуск
hash = хеш
mining = майнинг
miner = майнер
miners = майнеры
consensus = консенсус
consensus mechanism = механизм консенсуса
proof of work = доказательство работы
proof of stake = доказательство доли
proof-of-stake = доказательство доли
slashing = слэшинг
slashed = оштрафован
attestation = аттестация
epoch = эпоха
finality = финальность
finality time = время финальности
transaction finality = финальность транзакции
settlement time = время расчётов
fraud proof = доказательство мошенничества
validity proof = доказательство достоверности
zero-knowledge = нулевое разглашение
censorship-resistant = устойчивый к цензуре
scalability = масштабируемость
interoperability = интероперабельность
composability = композируемость
fungibility = взаимозаменяемость
tps = TPS
fork = форк
open source = открытый исходный код
asynchronous = асинхронный
ethereum virtual machine = виртуальная машина Ethereum
bridge = мост
public good = общественное благо
public = публичный
credible neutrality = достоверная нейтральность
equality of opportunity = равенство возможностей
quadratic funding = квадратичное финансирование
allo protocol = Allo Protocol
retropgf = RetroPGF
security = безопасность
fraud = мошенничество
phishing = фишинг
social engineering = социальная инженерия
password manager = менеджер паролей
two factor authentication = двухфакторная аутентификация
2fa = 2FA
red flag = тревожный сигнал
scam-token = скам-токен
fomo = FOMO
hodl = HODL
digital signature = цифровая подпись
cryptography = криптография
encryption = шифрование
supply = предложение
max supply = максимальное предложение
circulating supply = циркулирующее предложение
scarcity = дефицитность
scarce = дефицитный
inflation = инфляция
halving = халвинг
gold standard = золотой стандарт
central bank = центральный банк
commercial bank = коммерческий банк
monetary policy = монетарная политика
fiat = фиат
spot etf = спотовый ETF
onramp = фиатный шлюз
know-your-customer = знай своего клиента
kyc = KYC
collateral = залог
liquidation = ликвидация
yield = доходность
yield farm = фарминг доходности
lending = кредитование
borrowing = заимствование
intermediary = посредник
intermediaries = посредники
value-extraction = извлечение стоимости
value-extractive = извлекающий стоимость
value-creation = создание стоимости
app = приложение
app store = магазин приложений
network = сеть
fee = комиссия
ether = эфир
eth = ETH
btc = BTC
gwei = gwei
erc-20 = ERC-20
erc-721 = ERC-721
erc-1155 = ERC-1155
satoshi nakamoto = Satoshi Nakamoto
primary name = основное имя
standard record = стандартная запись
custom record = пользовательская запись
.eth = .eth
yourname.eth = yourname.eth
```

Aliases the pins imply, and the collisions to expect

- Every pin that replaced a circulating alternative keeps that alternative in
  `keyword_forms`, so prose written with it still resolves: нода under узел,
  своп / свопнуть / обменять under обмен, минт / минтить / чеканить under
  выпуск, открытый ключ under публичный ключ, закрытый ключ under приватный
  ключ, хэш under хеш, интент under намерение, пир under равный участник,
  оборотное предложение under циркулирующее предложение, стакан / ордербук under
  книга ордеров, онрамп under фиатный шлюз, общедоступный / не требующий
  разрешения under без разрешений, Proof-of-Work / PoW and Proof-of-Stake / PoS
  under their Russian pins, and the plain-е spelling of every ё form.
- `lang-tools merge` reports display-form collisions. Three are expected and
  harmless here, because the English keys are genuine duplicates: `crypto` and
  `cryptocurrency` (both криптовалюта, with крипта and крипто as aliases on
  `crypto`), `blockspace` and `block space`, `proof of stake` and
  `proof-of-stake`. Anything else in that report is two agents disagreeing and
  must be reconciled before the lessons start.
- Watch two pairs that must NOT collapse into one word: `delegate` (делегат, the
  person) against `delegation` (делегирование, the act), and `value-extraction`
  (извлечение стоимости) against `value-extractive` (извлекающий стоимость).
  Their English definitions are near-identical, which is exactly how two halves
  end up shipping one Russian word for both.
- `supply` is предложение, and a governance proposal is also предложение. When
  both senses can appear on one slide, write "предложение токенов" and
  "предложение по управлению".
- If the English entry has a `keyword_plural`, the Russian entry must have one
  too: `merge` fails on a plural-presence mismatch.

Typography

- **Quotation marks are «ёлочки»**, with „лапки“ nested inside them: «нажмите
  „Connect Wallet“ внизу». Do not use straight ASCII quotes or English curly
  quotes in prose.
- **Never use the em dash U+2014, and never the en dash U+2013.** This is a
  repo-wide rule and it costs Russian more than any other language, because the
  dash is the normal way to write a zero-copula sentence. The construction to
  avoid is "Bitcoin <U+2014> это цифровые деньги." (the character is written out
  here so that this file itself stays free of it). Four replacements, in order
  of preference:

      "Bitcoin работает как цифровые деньги."
      "Что такое Bitcoin? Это цифровые деньги…"
      "Bitcoin: цифровые деньги без банка"     (heading)
      "Bitcoin это цифровые деньги."           (last resort)

  For a parenthetical aside use commas or parentheses, and for a range use words
  ("с 2020 по 2024 год"). Markdown list bullets written as `-` are syntax, not
  punctuation, and are fine. `lang-tools merge` hard-fails on any glossary entry
  containing an em dash.
- **Sentence case everywhere, no title case.** "Что такое кошелёк?", not "Что
  Такое Кошелёк?". ETHGlossary's `heading` and `ui` contexts return capitalized
  forms; ignore them and take the lowercase prose form.
- Hyphens are part of the spelling of many pins and must be kept exactly:
  смарт-контракт, сид-фраза, стейкинг-пул, блокчейн-технология, узел-валидатор,
  ончейн-управление, ZK-роллап, DEX-агрегатор, сэндвич-атака, соло-стейкинг,
  скам-токен, смарт-кошелёк. Others are deliberately written solid:
  криптовалюта, криптокошелёк, стейблкоин, мемкоин, ончейн, офчейн.
- No apostrophes in Russian words, and none between a Latin name and a Russian
  ending (see the rule above).
- Write abbreviations out: "то есть", not "т.е."; "например", not "напр.".
- A colon before an enumeration is normal Russian and is the preferred
  replacement for a dash.

Interface strings

- Keep an English app's button label in English and gloss it in Russian on first
  use, then use the English label alone: нажмите «Connect Wallet» (подключить
  кошелёк).
- Do not translate a label the reader has to find on screen. If the interface
  says Approve, the lesson says Approve, whatever the ```terms``` block pins for
  the concept.
- For the UI namespaces: `validate-i18n.js` warns when a short English label
  grows by more than 60% in translation, because those strings live in
  fixed-width furniture (the 230px sidebar rail is what caught French).
  "Connect Wallet" -> "Подключить кошелёк" is fine; anything longer needs a
  shorter verb. Placeholders like `{{name}}` and any HTML tags must survive
  unchanged, and a key ending in `:` keeps its colon.

Fixed section headings

Several headings recur across the handbooks, and the 19 lessons are split across
five independent agents, so any heading that appears twice WILL come back in two
different Russian versions unless it is pinned here. **The structural verifier
cannot catch this: it compares the section COUNT, never the section TEXT.** The
previous wave shipped five such divergences in Indonesian and three in Hindi,
all repaired by hand afterwards.

**These are not to be re-translated per lesson.** Copy the string from the right
column exactly, whichever lesson you are working on.

| English heading | Russian | recurs |
|---|---|---|
| `# Introduction` / `## Introduction` | `Введение` | 8 |
| `## Key Takeaways` | `Главное` | 8 |
| `## Frequently Asked Questions` | `Частые вопросы` | 4 |
| `## FAQ` | `Частые вопросы` | 3 |
| `## Walkthrough` | `Пошаговая инструкция` | 3 |
| `## Prerequisites` | `Что понадобится` | 3 |
| `# Knowledge Check <n>` | keep the English, numbered | 90 |

- **`FAQ` and `Frequently Asked Questions` get the SAME Russian, deliberately.**
  They name the identical section under a long and a short English name, Russian
  has one idiomatic short form, and a reader who meets «FAQ» in one handbook and
  «Частые вопросы» in another would reasonably think they are two different
  sections. Do not leave `FAQ` in Latin.
- **`Knowledge Check <n>` stays in English and keeps its number.** It is an
  identifier that `build-content.js` reads, and the frontend renders its own
  translated label, so translating it in the md breaks the compiler while
  changing nothing the reader sees.
- Keep the pinned string when the English heading carries a suffix, and append
  the suffix unchanged: `## Walkthrough: Using Revoke.cash` becomes
  `## Пошаговая инструкция: Revoke.cash`.
- Headings are sentence case, take no trailing period, and stay short: they are
  rendered as headings, not sentences.

Headings and `/content` anchors

Cyrillic headings slugify to nothing in the anchor generator (`headingId` in
`src/utils/lessonContent.ts` requires `^[a-z0-9-]+$` after folding), so the
localized content pages fall back to `section-N` anchors, exactly as ja, zh and
uk do. This is expected. Do not add Latin text to a heading to work around it.

Before you hand a file back

1. Same number of `#`/`##` sections, images, links, quiz options and `> ℹ️`
   feedback lines as the English source, with `- [x]` on the same option index.
2. Every heading `Knowledge Check <n>` left in English.
3. Every backticked term resolves through the Russian glossary in the exact form
   you wrote it. This is a hard build failure, not a warning.
4. No em dash, no en dash, no `_…_` against Cyrillic, no punctuation trapped
   inside `**`.
5. NFC, ё written, no Latin lookalikes inside Cyrillic words.
6. Slides under 19 estimated lines, quiz options under ~70 characters.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | ru |
|---|---|
| `True` | **Правда** |
| `False` | **Неправда** |

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
