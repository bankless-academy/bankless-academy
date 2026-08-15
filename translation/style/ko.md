# Korean style guide (translate-content)

Korean is the first agglutinative-with-no-word-spaces-around-particles language
in this repo. There is no sibling to copy from, so this file is the only thing
holding a dozen independent translators to one Korean. Read it end to end before
writing a single slide. The first section is not background: it is the one
mistake that breaks tooltips invisibly, and it is the mistake Korean invites.

## Particles: the rule that decides whether a tooltip lives or dies

Korean glues its particles (조사) straight onto the noun with no space:
은/는, 이/가, 을/를, 의, 에, 에서, 로/으로, 와/과, 도, 만. The glossary
`keyword` is the display form a lesson backticks and the runtime index matches
on, and the index does an **exact string match** after case folding. It does not
strip particles. It cannot.

So a pinned term, a glossary `keyword`, and every backticked span in a lesson
body must be the **bare noun with no particle attached**, and the particle must
be written **outside** the backticks:

    correct:  `블록체인`은 분산 원장이에요.
    dead:     `블록체인은` 분산 원장이에요.

    correct:  `개인 키`를 절대 공유하지 마세요.
    dead:     `개인 키를` 절대 공유하지 마세요.

    correct:  `지갑`에 자산을 보관해요.
    dead:     `지갑에` 자산을 보관해요.

    correct:  `검증자`가 다음 블록을 제안해요.
    dead:     `검증자가` 다음 블록을 제안해요.

**Nothing about the dead version looks wrong on screen.** The reader sees
블록체인은 either way, because markdown puts no space between a code span and
the character after it. The only difference is that the tooltip silently never
appears. This is exactly how ja and zh already write it (`暗号資産`と,
`中央銀行`は, `点对点`的), so the pattern is proven in this repo.

### ETHGlossary will hand you the wrong form

`translation/ethglossary/ko.json` has a `contexts.prose.term` field, and for
Korean it carries the particle. **417 of its 541 Korean entries (77%) differ
from the citation form this way, the highest of any language in the vendored
data.** A sample of what it will offer you:

| English | `term` (use this) | `contexts.prose.term` (never use this) |
|---|---|---|
| blockchain | 블록체인 | 블록체인**은** |
| private key | 개인 키 | 개인 키**를** |
| wallet | 지갑 | 지갑**을** |
| validator | 검증자 | 검증자**가** |
| liquidity | 유동성 | 유동성**을** |
| onchain | 온체인 | 온체인**에** |
| offchain | 오프체인 | 오프체인**에서** |
| collateral | 담보 | 담보**로** |
| epoch | 에포크 | 에포크**당** |
| delegate | 위임하다 | 위임**할** |

The last two are not even nouns. **When you consult ETHGlossary, read `term`,
or `contexts.heading.term` / `contexts.ui.term`, which are the bare citation
form. Never read `contexts.prose.term`.** The ```terms``` block at the end of
this file was already regenerated from the citation form, so the pins are safe;
the temptation comes from going back to the vendored file for a term the pins do
not cover.

### The same rule covers everything that glues on

- **하다 / 되다 / 하기**: `` `스테이킹`해요 ``, `` `스왑`했어요 ``,
  `` `민팅`하기 ``. Never `` `스테이킹하다` ``, never `` `위임하다` ``.
- **The plural marker 들**: outside, and usually just drop it.
  `` `노드`들 ``, better simply `` `노드` `` (Korean does not need a plural
  marker when the count is clear).
- **Nominalizers and modifiers in front**: they are separate words in Korean, so
  they naturally fall outside. Write 여러 `` `노드` `` and 각 `` `트랜잭션` ``,
  never `` `여러 노드` `` or `` `각 트랜잭션` ``.
- **Latin-script terms take Korean particles with no space either**:
  `` `ETH`를 ``, `` `Web3`는 ``, `` `DEX`에서 ``, `` `NFT`를 ``. Same rule, same
  trap: the particle goes outside the backticks.

### Choosing the right particle after a pinned term

Korean picks 은/는, 이/가, 을/를, 와/과, 로/으로 by whether the preceding
syllable ends in a consonant (받침). Since the particle sits immediately after
the pinned term, the pin's last syllable decides it:

    받침 있음 (consonant-final):  블록 → 블록**은**, 블록**이**, 블록**을**, 블록**으로**
    받침 없음 (vowel-final):      지갑? no. 노드 → 노드**는**, 노드**가**, 노드**를**, 노드**로**

For a Latin-script pin, choose by how the term is **read aloud in Korean**, not
by its spelling. The high-traffic ones:

| pin | read as | particle |
|---|---|---|
| ETH | 이더 | ETH**는**, ETH**를**, ETH**로** |
| BTC | 비티씨 | BTC**는**, BTC**를** |
| NFT | 엔에프티 | NFT**는**, NFT**를** |
| DEX | 덱스 | DEX**는**, DEX**를**, DEX**에서** |
| CEX | 씨이엑스 | CEX**는**, CEX**를** |
| DAO | 다오 | DAO**는**, DAO**를** |
| DeFi | 디파이 | DeFi**는**, DeFi**를** |
| Web3 | 웹쓰리 | Web3**는**, Web3**를** |
| L2 | 엘투 | L2**는**, L2**를**, L2**로** |
| P2P | 피투피 | P2P**는**, P2P**로** |
| ERC-20 | 이알씨 이십 | ERC-20**은**, ERC-20**을** |
| KYC | 케이와이씨 | KYC**는**, KYC**를** |

**Never write the "은(는)" hedge.** Parenthesized alternative particles are
form-letter Korean and read as a template nobody finished. Pick one. If a
sentence makes the choice genuinely awkward, reword it.

## Speech level: 해요체, everywhere, without exception

**Write 해요체.** Declaratives end in 해요 / 이에요 / 예요 / 돼요 / 있어요,
imperatives in 하세요 / 해 보세요, questions in 할까요? / 인가요?.

Why: Korean forces a choice between 해요체 and 합니다체, and both are 존댓말, so
this is a formality dial, not a respect dial. 합니다체 is the register of a bank
notice and a whitepaper; 해요체 is the register Korean consumer fintech and
edtech use to teach a beginner, which is exactly Bankless Academy's voice. It is
also **one syllable shorter per sentence** (해요 vs 합니다, 이에요 vs 입니다),
and every Hangul syllable costs two units against the slide ceiling.

    use:    `블록체인`은 모두가 함께 관리하는 장부예요.
    avoid:  `블록체인`은 모두가 함께 관리하는 장부입니다.   (합니다체)
    avoid:  `블록체인`은 모두가 함께 관리하는 장부이다.     (한다체, written/plain style)

Hold it everywhere: slide prose, quiz feedback, glossary definitions, UI
strings. **The one failure mode that matters is mixing.** A slide that opens in
해요체 and closes in 합니다체 is the single most visible sign of a machine
translation in Korean, and with a dozen agents it happens at the seams between
lessons, not inside them.

Two things carry no verb ending at all and so raise no register question:
**headings** and **quiz options**. Write both as bare noun phrases with no final
punctuation (`지갑이란 무엇일까요?` is fine as a heading because a heading may be
a question; `지갑의 종류` is fine; `지갑의 종류입니다.` is not).

Never use 한다체 (…이다, …한다) in body prose, and never 하십시오체 (…하십시오).

### Addressing the reader

**Do not use a second-person pronoun.** Korean drops it, and every candidate is
wrong for us: 당신 reads as translationese at best and confrontational at worst,
너 / 네 is the intimate form, 귀하 is a legal letter, and 그대 is poetry.

    use:    `지갑` 앱을 열고 잔액을 확인해 보세요.
    avoid:  당신의 `지갑` 앱을 열고 당신의 잔액을 확인해 보세요.

English repeats "your" on every noun; Korean does not. Drop the possessive
whenever ownership is obvious. Keep 자신의 or 내 only where ownership is the
actual point: "이 키는 `자신`만 알고 있어야 해요."

- Where a subject is unavoidable in an explanatory sentence, use **사용자**
  ("the user") in the third person.
- **여러분** ("everyone") is acceptable for direct address, but at most once or
  twice per lesson, in an intro or outro slide.
- Explorer, the site's word for its readers, is **탐험가**:
  "Bankless `탐험가` 여러분, 환영해요!". Do **not** transliterate it as
  익스플로러, which Korean readers parse as Internet Explorer.

### Quiz feedback openers, fixed

The English source opens feedback with "Correct!" or "Try again!". Use exactly
these, so 19 lessons do not invent 19 variants:

    > ℹ️ 정답이에요! …
    > ℹ️ 다시 시도해 보세요! …

## Hangul or Latin: the central decision

Korean crypto writing keeps a great deal of English, and ETHGlossary prefers
formally-correct coinages that native speakers avoid. Decide with this test, in
order, and never mix buckets for the same term across two lessons.

1. **Latin script, untouched.**
   - Tickers and units: ETH, BTC, USDC, OP, Gwei, wei.
   - Acronyms and initialisms, uppercase: API, DEX, CEX, AMM, LP, TVL, MEV,
     TPS, OTC, KYC, APR, APY, NFT, DAO, DeFi, Web3, Web2, L1, L2, EIP, EVM,
     ERC-20, ERC-721, ERC-1155, LSTs, 2FA, FOMO, HODL, RetroPGF, ZK.
   - dApp keeps its camel case.
   - **App, protocol, company and product names**: MetaMask, Uniswap, Coinbase,
     Optimism, Base, Zerion, Velodrome, Rocket Pool, Lido, OpenSea, Etherscan,
     Revoke.cash, Gitcoin, Aave, CoW Swap, Ledger, Bankless Academy. These stay
     Latin **because the reader has to find them on an English screen**, and
     because transliterating them is a drift generator (브릿지/브리지 in one
     term is bad enough; 벨로드롬/벨로드럼 across five lessons is worse).
   - Domain-like strings: yourname.eth, .eth.
   - Note: **Ledger** the hardware wallet brand is Latin; **원장** is the
     accounting ledger. They are different words in Korean, keep them apart.
2. **Hangul transliteration.** A concept born in English that Korean crypto
   readers universally read in Hangul: 블록체인, 토큰, 노드, 스테이킹, 롤업,
   스마트 컨트랙트, 스테이블코인, 사이드체인, 온체인, 오프체인, 브릿지,
   슬리피지, 블롭, 에포크, 샤딩, 밈코인, 볼트, 페그.
   Three network and person names belong here too, because Hangul is the only
   form Korean readers ever see them in: **비트코인, 이더리움, 이더,
   사토시 나카모토**. That is deliberate and it is the *only* exception to
   rule 1; every other proper noun stays Latin.
3. **A real Korean word.** The concept already exists in Korean finance, civics
   or everyday speech and the Korean word teaches better: 지갑 (wallet),
   원장 (ledger), 주소 (address), 수수료 (fee), 채굴 (mining), 검증자
   (validator), 합의 (consensus), 유동성 (liquidity), 담보 (collateral),
   청산 (liquidation), 반감기 (halving), 시가총액 (market cap),
   장외거래 (over the counter), 통화정책 (monetary policy), 금본위제 (gold
   standard), 중앙은행 (central bank), 확장성 (scalability), 보안 (security),
   공공재 (public good), 기회의 평등 (equality of opportunity).

**The tiebreaker between buckets 2 and 3 is what a Korean crypto reader actually
sees in print, not what is formally correct.** That is why the pins below say
거버넌스 and not 지배구조, 트랜잭션 and not 거래 (거래 is reserved for `trade`),
반감기 and not 하빙, 지분증명 and not 프루프 오브 스테이크.

## 띄어쓰기: pick one spacing per term, then never re-space it

Korean spacing is genuinely optional for many compounds, which makes it the
second-largest source of dead tooltips after particles. 스마트 컨트랙트 and
스마트컨트랙트 are both readable Korean and are **different strings**. The index
does not normalize whitespace.

The policy for this repo:

- **A compound built from two or more recognisable parts takes a space between
  the parts**: 스마트 컨트랙트, 유동성 풀, 스테이킹 풀, 블록 탐색기, 블록 보상,
  블록 해시, 하드웨어 지갑, 지갑 앱, 개인 키, 공개 키, 합의 메커니즘,
  옵티미스틱 롤업, 검증자 노드, 노드 운영자, 토큰 허용량, 중앙화 거래소,
  탈중앙화 거래소, 시드 구문, 복구 구문, 블록 공간, 결제 채널, 레이어 2.
- **A term that has fused into a single lexeme in real Korean writing takes no
  space**: 블록체인, 스테이블코인, 사이드체인, 온체인, 오프체인, 메인넷, 롤업,
  밈코인, 오픈소스, 가스비, 지분증명, 작업증명, 시가총액, 통화정책, 금본위제,
  장외거래, 중앙은행, 상업은행, 오더북, 법정화폐, 반감기.
- ETHGlossary is internally inconsistent here and must not be used as the
  authority: it ships `private key = 개인 키` (spaced) next to
  `public key = 공개키` (solid). The pins below fix that pair to **개인 키 /
  공개 키**, both spaced.
- **The ```terms``` block is the spelling authority.** Prefer copy-paste over
  retyping, and never "tidy up" a pinned term's spacing to match your instinct.
- Put the rejected spacing in `keyword_forms` (공개키, 개인키, 스마트컨트랙트,
  유동성풀) so prose that uses it still resolves to a tooltip.

A pinned Korean term also never takes a hyphen. Write 피어 투 피어, not
피어-투-피어. Hyphens survive only inside borrowed strings that carry them in
English: ERC-20, ZK-Rollup when written in Latin, MEV-Boost.

## Terms to translate

- wallet -> `지갑`; crypto wallet -> `암호화폐 지갑`; wallet app -> `지갑 앱`
- key -> `키`; private key -> `개인 키`; public key -> `공개 키`
- seed phrase -> `시드 구문`; recovery phrase -> `복구 구문`
- address -> `주소`
- fee -> 수수료; gas fee -> `가스비`
- network -> 네트워크
- node -> `노드`; node operator -> `노드 운영자`
- block -> `블록`
- ledger -> `원장` (the accounting ledger; the brand Ledger stays Latin)
- transaction -> `트랜잭션`; trade -> `거래`. **Keep these two apart.** Korean
  can render both as 거래, and if you do, the `trade` and `transaction` tooltips
  shadow each other in a lesson that teaches both.
- supply -> 공급량; max supply -> `최대 공급량`; circulating supply ->
  `유통 공급량`
- yield -> 수익률 (a plain return is 수익)
- lending / borrowing -> 대출 / 차입
- swap -> `스왑`
- mining -> `채굴`; miner -> `채굴자`
- staking -> `스테이킹`; stake (the amount at risk) -> `지분`
- governance -> 거버넌스
- liquidity -> `유동성`; liquidity pool -> `유동성 풀`
- decentralized -> `탈중앙화된`; decentralization -> `탈중앙화`. As a modifier
  in front of a noun, Korean drops 된: `탈중앙화 거래소`, `탈중앙화 금융`.
  When the English source backticks the bare adjective, write
  `` `탈중앙화된` `` and leave the noun outside.
- security -> `보안` (information security, which is what our entry means, not
  안보 and not 증권)
- encryption -> `암호화`; cryptocurrency -> `암호화폐`. These two are one
  syllable apart and are different concepts. Read what you wrote.

## Length: the tightest constraint in this wave

`displayWidth` in `content-lib.js` counts every Hangul syllable as **2 units**
and every ASCII character as 1, because Hangul renders at roughly double a Latin
character's width. The ceiling is 22 estimated lines, and the column width is
**58 units on a slide with an image (29 Hangul syllables per line)** and 116
units without one (58 syllables).

The instinct is that double width halves your budget. Measured against the
finished Japanese lessons, which the same estimator scores at **0.92x the
English source**, it does not: CJK scripts carry more meaning per glyph, and the
two effects mostly cancel. Korean should land in the same place.

What that actually means for you: **a compact, faithful Korean rendering fits.
A padded one does not, and it fails twice as fast as a padded French one.** In
French a wordy slide creeps 8% over; in Korean one flabby sentence costs double
what it would in Latin script. Compress from the first draft, not on the second
pass. The levers, in order of yield:

    …할 수 있는 것이에요        ->  …할 수 있어요          (5 syllables = 10 units)
    …하게 됩니다 / 되어집니다   ->  …돼요                  (double passive, always wrong)
    당신의 `지갑`               ->  `지갑`
    거래를 하는 곳              ->  거래소
    그리고 / 또한 / 즉 (opener) ->  delete
    …라고 말할 수 있습니다      ->  …예요

Do not compress by dropping information, and do not compress by deleting the
space inside a pinned term.

**Quiz options: ≤ ~70 display units, which is about 30 Hangul syllables.** Long
options overflow the answer box. Move the nuance into the `> ℹ️` feedback line,
which itself is one or two short sentences (~150 characters, and it renders as a
toast overlay on a 375px phone, so measure it there in your head).

## Emphasis markers: Korean's own failure mode

`validate-content.js` renders every line with markdown-it and fails the build on
any `**` or `_` that survives as literal text. CommonMark decides whether a
delimiter opens or closes from the characters flanking it, and **Korean is
exposed in a way no other language in this repo is: a particle follows the
closing `**` with no space, almost every time.**

Every row below was run through the real validator:

    breaks:  **가치:**시간을 절약해요.        ->  **가치**: 시간을 절약해요.
    breaks:  이것이 **지갑입니다.**다음 단계예요. ->  이것이 **지갑**입니다. 다음 단계예요.
    breaks:  **(개인 키)**를 비밀로 지키세요.  ->  (**개인 키**)를 비밀로 지키세요.
    breaks:  수수료는 **0.05%**보다 낮아요.    ->  수수료는 **0.05%가** 아니에요.
    breaks:  **“인출”**을 누르세요.            ->  “**인출**”을 누르세요.
    breaks:  **‘시드 구문’**을 적으세요.       ->  ‘**시드 구문**’을 적으세요.
    breaks:  항목 **1)**첫 번째                ->  항목 **1)** 첫 번째
    breaks:  블록_체인_이라는 말               ->  블록*체인*이라는 말

The single rule behind all of them: **the character immediately before a closing
`**` must be a letter or a digit, never punctuation** (`:` `.` `%` `!` `)` `”`
`’` or a backtick) when a Hangul particle follows with no space.

Two Korean-specific consequences:

1. **Never bold a backticked term that a particle follows.**
   `` **`개인 키`**를 `` breaks, because the closing `**` is preceded by a
   backtick. Write `` `개인 키`를 `` with no bold, or if the emphasis is
   essential, pull the particle inside: `` **`개인 키`를** `` (verified OK).
   Plain bold with a particle is fine, because Hangul is a letter:
   `**개인 키**를 저장하세요.` renders correctly.
2. **When a bolded run ends in punctuation, pull the particle inside the bold.**
   `**51%가**`, `**“인출”을**`, `**0.05%의**` all render. So does a following
   space: `**중요!** 꼭 읽으세요.`

Other rules, unchanged from the repo standard: keep the colon outside
(`**가치**:`, never `**가치:**`), bold the link *text* rather than the whole link
(`[**레슨 이름**](url)`), and **never use `_…_` against a Hangul syllable** since
`_` cannot open or close intraword. Use `*…*`.

## Numbers: Latin digits, Korean scale words

- **Latin digits only.** Never 일, 이, 삼 for quantities, and never full-width
  digits.
- **Convert to the Korean scale words 만 / 억 / 조.** This is not optional
  style: 밀리언 and 빌리언 do not exist in Korean prose, and a Korean reader
  parses 2,100만 instantly and "21 million" not at all. The conversion is fixed,
  so use this table and do not do the arithmetic in your head:

      1 million   = 100만          10 million  = 1,000만
      21 million  = 2,100만        100 million = 1억
      1 billion   = 10억           1 trillion  = 1조

- **The exception is a figure that also appears in the slide's `![](…)` image**,
  or inside code, an address, a hash, a URL, or a value the reader must type
  into an English interface. Those keep the source's exact form, so text and
  image agree.
- **International comma grouping, matching the source**: 21,000,000 and 120,000.
- Decimal point is a period: 0.0002 ETH, 0.05%.
- **Percent sign directly after the number, no space**: 51%. Not 51 %.
- Currency passes through as in the source: $100. Do not convert to won.
- Years and dates take Korean counters: 2025년, 2025년 1월 3일, 2009년에.
- Counters: use 개 for generic countable things (`토큰` 3개), 명 for people,
  건 for transactions where it reads naturally. Do not stack a counter onto a
  backticked term inside the backticks.

## Typography

- **Sentences end with the ASCII period `.`** followed by one space. Korean uses
  halfwidth punctuation, **not** the full-width forms ja and zh use. Never write
  `。` `、` `：` `（` `）` `！` `？` in Korean text. This matters beyond
  aesthetics: full-width punctuation inside emphasis markers is what broke 87
  lines in the ja/zh wave, and Korean has no reason to go near it.
- Comma is `,`, colon is `:`, and both take no space before and one space after.
- **Quotation marks are “ ” with ‘ ’ nested.** Korean horizontal writing uses
  curly quotes; 「」 and 『』 are Japanese-style or vertical-writing forms and
  read as dated in Korean. Do not use « ».
- **Never use the em dash U+2014.** Use a comma, a colon, parentheses, or a
  second sentence. Do not substitute the en dash U+2013 or the wave dash 〜
  either. For a range, write 2020년부터 2024년까지.
- A Latin run inside Korean text takes a space on both sides
  ("Ethereum Mainnet 위에서 실행돼요"), **except** before a particle, which
  attaches with no space ("ETH를", "Web3는", "MetaMask에서"). There is no
  Turkish-style apostrophe before the particle: write ETH를, not ETH'를.
- No `applyTypography` entry exists for `ko` in `content-lib.js`, so nothing
  will fix your spacing after the fact. What you write ships.
- **Write NFC.** Precomposed 한 (U+D55C) and decomposed ᄒ + ᅡ + ᆫ render
  identically and are different strings; macOS filenames and some clipboard
  paths hand you the decomposed form. `normalizeKeyword` does normalize, so a
  tooltip survives it, but the length estimate and every raw diff do not. Check
  a file you touch with:

      node -e "const s=require('fs').readFileSync(process.argv[1],'utf8');console.log(s===s.normalize('NFC')?'ok':'NFD HANGUL')" <file>

- No ZWJ / ZWNJ (U+200D / U+200C), and no half-width Hangul jamo (U+FFA0
  block). Both are invisible and both break exact matching.

## Interface strings

Keep an English app's button label in English and gloss it in Korean on first
use, then use the English label alone afterwards:

    “Connect Wallet”(지갑 연결)을 눌러 주세요.

Do not translate a label the reader has to find on screen. If the interface says
`Approve`, the lesson says Approve, whatever the ```terms``` block pins for the
concept. `primary name` is pinned to **Primary Name** for exactly this reason:
it is a label in the ENS app, not a Korean word.

## Headings and `/content` anchors

Korean headings slugify to nothing in the `/content` anchor generator
(`headingId` in `src/utils/lessonContent.ts` keeps `\p{L}`, so Hangul survives
folding but then fails the ASCII test), so those pages fall back to `section-N`
anchors. **This is expected and matches ja and zh. It is not a bug, and you must
not add Latin text to a heading to work around it.**

Headings are noun phrases or questions, sentence case, no final period:
`지갑이란 무엇일까요?`, `블록체인이 작동하는 방식`. Korean has no title case, so
do not capitalize Latin words inside a heading beyond their own convention.

Keep every `Knowledge Check <n>` heading in English and numbered as in the
source. The compiler reads it as an identifier and the frontend renders its own
translated label.

## Fixed section headings

The 19 lessons are split across five independent agents, and the structural
verifier compares section **count**, never section **text**. Two agents will
render `## Key Takeaways` two different ways and every check will still pass:
the last wave produced five such divergences in Indonesian and three in Hindi,
all repaired by hand afterwards. Worse, a heading is the one thing an agent can
leave entirely in English while every check still passes. One Vietnamese agent
shipped 45 untranslated slide headings and nothing caught it.

So, three rules:

1. **Every slide and section heading must be translated.** A heading left in
   English is a defect the build cannot see, so it is on you.
2. **The headings below are pinned. Do not re-translate them per lesson.** Copy
   the Korean exactly, including its spacing, and keep the `#` / `##` level the
   English source uses.
3. **`# Knowledge Check <n>` is the single exception and stays in English**,
   numbered sequentially as in the source. The compiler reads it as an
   identifier and the frontend renders its own translated label. Do not
   translate it, do not renumber it, do not add a period.

| English heading | Korean | recurs in |
|---|---|---|
| `## Key Takeaways` | `## 핵심 요약` | 8 lessons |
| `## Frequently Asked Questions` | `## 자주 묻는 질문` | 4 lessons |
| `## FAQ` | `## FAQ` | 3 lessons |
| `## Walkthrough` | `## 따라 하기` | 3 lessons |
| `## Prerequisites` | `## 사전 준비` | 3 lessons |
| `# Introduction` / `## Introduction` | `# 들어가며` / `## 들어가며` | 8 slides, both levels |

**`FAQ` and `Frequently Asked Questions` stay distinct, and `FAQ` stays in
Latin.** The English source uses a long form and a short form deliberately;
collapsing both into 자주 묻는 질문 throws that away and spends 14 display units
where 3 will do. FAQ is an uppercase acronym, so bucket 1 of the script rule
already keeps it Latin, and Korean sites print FAQ untranslated constantly. A
particle attaches to it with no space, chosen by the reading 에프에이큐:
FAQ**를**, FAQ**는**.

Spacing notes, since these are exactly where two agents drift: **따라 하기** is
spaced, never 따라하기. **핵심 요약**, **자주 묻는 질문** and **사전 준비** are
spaced as written. None of the six takes a final period, and Korean has no title
case, so none takes capitalization beyond what Latin words carry themselves.

## Glossary overrides

ETHGlossary is the fallback for anything the block below does not pin, but it
has three failure modes in Korean, all confirmed in the vendored file:

- **It returns particle-bearing prose forms** (see the first section). 77% of
  its entries.
- **It gives verbs where a glossary needs a noun**: `delegate = 위임하다`,
  and its prose form 위임할 is a conjugated modifier. A pin is always the bare
  citation form.
- **It is internally inconsistent, and some coinages are wrong or unusable.**
  Overridden here, with the reason:

| English | ETHGlossary | pinned | why |
|---|---|---|---|
| stake | 스테이크 | **지분** | 스테이크 is *steak* in Korean; 지분 is the standard finance word, and it is what makes 지분증명 (Proof of Stake) coherent |
| trustless | 무신뢰 | **트러스트리스** | 무신뢰 reads as *distrust*, the opposite of "no trust required", the same trap Hindi hit with विश्वासहीन |
| permissionless | 무허가성 | **퍼미션리스** | 무허가 in ordinary Korean means *unlicensed / illegal* (무허가 건물); 무허가성 is an unused nominalization |
| hot wallet | 핫 월렛 | **핫 지갑** | ETHGlossary says 지갑 for `wallet` but 월렛 in every compound; one family, and 지갑 is the higher-traffic pin |
| cold wallet | 콜드 월렛 | **콜드 지갑** | same |
| hardware wallet | 하드웨어 월렛 | **하드웨어 지갑** | same, and 하드웨어 지갑 is the commoner form in Korean writing |
| public key | 공개키 | **공개 키** | ETHGlossary spaces `private key` (개인 키, x17) and solids this one; spaced wins |
| web2 | 웹2 | **Web2** | its own `web3` entry is `always_latin` Web3; 웹2 next to Web3 is incoherent |
| mint | 발행 | **민팅** | 발행 is generic *issuance*; Korean NFT writing says 민팅 universally, and the badge flow is an NFT mint |
| peer-to-peer | 피어 투 피어 | **P2P** | P2P is what Korean prints, and it costs 3 units instead of 14 |
| delegate | 위임하다 | **위임** | a keyword must be a bare noun, not an infinitive |
| slashed | (none) | **슬래싱** | resolves to the same tooltip as `slashing`, which is correct |
| ledger | (none) | **원장** | the accounting term; keep the brand Ledger in Latin |

`x = x` pins a term to its Latin form. Ordered by how many of the 19 lessons
backtick each term. **These beat ETHGlossary and they beat your own judgment.**

Some English keys deliberately share one Korean display form, because Korean
does not distinguish them: `crypto` / `cryptocurrency`, `crypto wallet` /
`cryptocurrency wallet`, `address` / `addresses`, `intermediary` /
`intermediaries`, `validator node` / `validator nodes`, `blockspace` /
`block space`, `self-custody` / `self-custodial`, `delegate` / `delegation`,
`slashing` / `slashed`, `proof of stake` / `proof-of-stake`. `lang-tools merge`
will report these as display-form collisions. They are expected and harmless.

```terms
private key = 개인 키
blockchain = 블록체인
layer 1 = 레이어 1
layer 2 = 레이어 2
smart contract = 스마트 컨트랙트
cryptocurrency = 암호화폐
decentralized = 탈중앙화된
dapp = dApp
staking pool = 스테이킹 풀
web3 = Web3
block = 블록
crypto wallet = 암호화폐 지갑
liquidity pool = 유동성 풀
dex = DEX
liquidity = 유동성
validator node = 검증자 노드
decentralization = 탈중앙화
address = 주소
gas = 가스
optimistic rollup = 옵티미스틱 롤업
seed phrase = 시드 구문
dao = DAO
peer-to-peer = P2P
defi = DeFi
wallet = 지갑
node operator = 노드 운영자
blockchain apps = 블록체인 앱
hot wallet = 핫 지갑
ledger = 원장
public key = 공개 키
cex = CEX
token allowance = 토큰 허용량
price impact = 가격 영향
decentralized exchange = 탈중앙화 거래소
onchain = 온체인
validator nodes = 검증자 노드
centralized exchange = 중앙화 거래소
sidechain = 사이드체인
permissionless = 퍼미션리스
security = 보안
zk rollup = ZK 롤업
veto = 거부권
erc-20 = ERC-20
erc-721 = ERC-721
web2 = Web2
custodian = 커스터디언
btc = BTC
self-custody = 셀프 커스터디
cryptocurrency wallet = 암호화폐 지갑
block hash = 블록 해시
hash = 해시
wallet app = 지갑 앱
trade = 거래
trade route = 거래 경로
ether = 이더
eth = ETH
stake = 지분
validator = 검증자
non-custodial wallet = 논커스터디 지갑
staking = 스테이킹
blockspace = 블록 공간
blockchain trilemma = 블록체인 트릴레마
scalability = 확장성
bridge = 브릿지
nft = NFT
public good = 공공재
token = 토큰
liquid staking token = 리퀴드 스테이킹 토큰
credible neutrality = 신뢰할 수 있는 중립성
recovery phrase = 복구 구문
self-custody wallet = 셀프 커스터디 지갑
hardware wallet = 하드웨어 지갑
satoshi nakamoto = 사토시 나카모토
scarcity = 희소성
central bank = 중앙은행
monetary policy = 통화정책
max supply = 최대 공급량
circulating supply = 유통 공급량
lightning network = 라이트닝 네트워크
miner = 채굴자
block explorer = 블록 탐색기
transaction = 트랜잭션
public = 공개
node = 노드
mainnet = 메인넷
token swap = 토큰 스왑
token pair = 토큰 페어
sandwich attack = 샌드위치 공격
gwei = Gwei
slippage tolerance = 슬리피지 허용치
centralized services = 중앙화 서비스
ethereum blockchain = 이더리움 블록체인
crypto = 암호화폐
onramp = 온램프
ethereum mainnet = 이더리움 메인넷
stablecoin = 스테이블코인
consensus = 합의
block reward = 블록 보상
slashing = 슬래싱
proof of stake = 지분증명
transaction throughput = 트랜잭션 처리량
block space = 블록 공간
sharding = 샤딩
rollup = 롤업
payment channel = 결제 채널
blob = 블롭
offchain = 오프체인
smart account = 스마트 계정
onchain governance = 온체인 거버넌스
l2 = L2
delegate = 위임
erc-1155 = ERC-1155
primary name = Primary Name
consensus mechanism = 합의 메커니즘
mint = 민팅
solo staking = 솔로 스테이킹
centralized exchange staking = 중앙화 거래소 스테이킹
slashed = 슬래싱
attestation = 증명
cold wallet = 콜드 지갑
password manager = 비밀번호 관리자
social engineering = 사회공학
phishing = 피싱
fomo = FOMO
allowance = 허용량
inflation = 인플레이션
gold standard = 금본위제
commercial bank = 상업은행
blockchain technology = 블록체인 기술
scarce = 희소한
self-custodial = 셀프 커스터디
cryptocurrency mining = 암호화폐 채굴
halving = 반감기
spot etf = 현물 ETF
decentralized money = 탈중앙화 화폐
equality of opportunity = 기회의 평등
addresses = 주소
digital signature = 디지털 서명
transaction hash = 트랜잭션 해시
cryptography = 암호학
encryption = 암호화
order book = 오더북
amm = AMM
lp = LP
slippage = 슬리피지
kyc = KYC
tvl = TVL
network governance = 네트워크 거버넌스
dex aggregator = DEX 애그리게이터
swap = 스왑
intermediary token = 중간 토큰
meta-aggregator = 메타 애그리게이터
private transaction routing = 프라이빗 트랜잭션 라우팅
otc = OTC
over the counter = 장외거래
intent = 인텐트
solver = 솔버
batch auction = 일괄 경매
app = 앱
app store = 앱 스토어
fiat = 법정화폐
intermediaries = 중개자
intermediary = 중개자
value-extractive = 가치 추출적
value-extraction = 가치 추출
value-creation = 가치 창출
peer = 피어
know-your-customer = 고객 신원 확인
coin = 코인
yield farm = 이자 농사
allo protocol = Allo Protocol
quadratic funding = 쿼드래틱 펀딩
collateral = 담보
liquidation = 청산
proof of work = 작업증명
51% attack = 51% 공격
tps = TPS
finality = 완결성
epoch = 에포크
censorship-resistant = 검열 저항성
finality time = 완결 시간
alternative layer 1 = 대안 레이어 1
l1 = L1
fraud proof = 사기 증명
validity proof = 유효성 증명
settlement time = 정산 시간
transaction finality = 트랜잭션 완결성
ethereum virtual machine = 이더리움 가상 머신
zero-knowledge = 영지식
token approval = 토큰 승인
delegation = 위임
asynchronous = 비동기
retropgf = RetroPGF
block producer = 블록 생성자
token distribution = 토큰 분배
fork = 포크
open source = 오픈소스
trustless = 트러스트리스
onchain identity = 온체인 신원
.eth = .eth
yourname.eth = yourname.eth
front-running = 프론트러닝
standard record = 표준 레코드
gas fee = 가스비
custom record = 커스텀 레코드
validator client = 검증자 클라이언트
solo staker = 솔로 스테이커
mining = 채굴
staker = 스테이커
fraud = 사기
proof-of-stake = 지분증명
block builder = 블록 빌더
block proposer = 블록 제안자
staking providers = 스테이킹 제공업체
lsts = LSTs
liquid = 유동적
restaking = 리스테이킹
decentralized finance = 탈중앙화 금융
mev = MEV
fungibility = 대체 가능성
interoperability = 상호운용성
composability = 조합성
memecoin = 밈코인
multi-token standard = 멀티 토큰 표준
vault = 볼트
peg = 페그
stablecoin issuer = 스테이블코인 발행사
counterparty risk = 거래상대방 위험
death spiral = 데스 스파이럴
market cap = 시가총액
smart wallet = 스마트 지갑
custodial wallet = 커스터디 지갑
two factor authentication = 2단계 인증
red flag = 위험 신호
scam-token = 스캠 토큰
hodl = HODL
2fa = 2FA
```

## What to put in `keyword_forms`

Korean nouns do not inflect, so `keyword_forms` is **not** needed for grammar
the way it is in Turkish, Ukrainian or Hindi. Never put a particle-bearing form
in it: `블록체인은` is not an inflection, it is a string the lesson must never
produce in the first place.

Use it for exactly four things:

1. **The rejected spacing**: 공개키, 개인키, 스마트컨트랙트, 유동성풀,
   피어투피어.
2. **The rejected variant spelling of a loanword**: 브리지 (under 브릿지),
   월렛 compounds (핫 월렛, 콜드 월렛, 하드웨어 월렛), 밸리데이터 (under
   검증자), 마이닝 (under 채굴), 컨센서스 (under 합의).
3. **The native-word alternative to a loan pin, or vice versa**: 무허가 and
   허가 불필요 under 퍼미션리스, 무신뢰 and 신뢰 최소화 under 트러스트리스,
   발행 and 민트 under 민팅, 자기 수탁 and 수탁 기관 under the 커스터디 family,
   지분증명's alias 프루프 오브 스테이크, 시드 단어 under 시드 구문.
4. **The English spelling**, where a Korean reader might see it backticked in a
   quotation or a UI walkthrough.

Every form you add must be a bare noun a lesson could plausibly backtick. If it
would never appear inside backticks, it does not belong there.

## Fixed True/False option labels

Several Knowledge Checks are True/False questions whose two options are the
bare words `True` and `False`. Render them as exactly:

| English option | ko |
|---|---|
| `True` | **참** |
| `False` | **거짓** |

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
