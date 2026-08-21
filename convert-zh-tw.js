/* eslint-disable no-console */
// Derive Traditional Chinese (zh-tw) from the finished Simplified Chinese (zh).
//
// zh-tw is a CONVERSION, not a translation wave: OpenCC cn->twp (Traditional
// with Taiwan phrase vocabulary: 网络->網路, 软件->軟體, 服务器->伺服器 …)
// plus the override table below for what twp gets wrong for Taiwan crypto
// usage. Because the same pipeline runs over lesson bodies, the glossary and
// the UI namespaces, backticked terms always match their glossary keyword and
// structural parity with zh (unit counts, [x] positions, images, links) is
// free.
//
// zh is the source of truth: whenever a zh lesson or namespace changes, re-run
//   node convert-zh-tw.js
// and commit the regenerated zh-tw files with it. Never hand-edit zh-tw.
//
// The override table is corpus-adjudicated against the vendored ETHGlossary
// zh-tw citation forms (translation/ethglossary/zh-tw.json) and a full scan of
// every 數字/通過/訪問/質量 occurrence. The PROTECT list pins the handful of
// phrases where the mainland form is the correct reading (數字 as "digits",
// 通過 as "pass/approve"): NEW zh prose that uses one of those senses in a
// phrase not listed here would be silently converted to the wrong word, so the
// script prints the protected-phrase hit counts — if a count drops to zero or
// prose around 數字/通過 changes meaning, re-review the lists.
import fs from 'fs'
import path from 'path'
import * as OpenCC from 'opencc-js'

const convert = OpenCC.Converter({ from: 'cn', to: 'twp' })

// Phrases (in the POST-conversion Traditional text) that the overrides below
// must not touch: number-sense 數字 and pass/approve-sense 通過.
const PROTECT = [
  '數字和字母', // "digits and letters" (seed phrase / address material)
  '字母和數字',
  '一次性數字', // nonce
  '通過後', // "once approved, …"
  '欺詐通過', // "let fraud pass"
  '一段通過', // "that segment passes"
  '已通過驗證', // "has passed verification"
]

// Applied in order, longest/most-specific first.
const OVERRIDES = [
  ['你可以訪問 <', '你可以前往 <'], // visiting a URL, not accessing data
  // ETHGlossary zh-tw citation forms for the smart-* family (twp says 智慧X,
  // which ETHGlossary carries only as an alias).
  ['智慧合約', '智能合約'],
  ['智慧錢包', '智能錢包'],
  ['智慧賬戶', '智能帳戶'],
  ['數字簽名', '數位簽章'], // TW standard term, not 數位簽名
  ['數字', '數位'], // digital-sense (number-sense is in PROTECT)
  ['通過', '透過'], // instrumental "by means of" (pass-sense is in PROTECT)
  ['提議者', '提案者'], // block proposer — ETHGlossary 區塊提案者
  ['對等方', '對等節點'], // peer — ETHGlossary
  ['質量', '品質'], // quality (質量 is physics "mass" in TW)
  ['打印', '列印'],
  ['訪問', '存取'],
  ['賬', '帳'], // TW always writes 帳戶/帳本/記帳
]

const PUA = (i) => String.fromCharCode(0xe000 + i)
const protectHits = new Array(PROTECT.length).fill(0)

const tw = (s) => {
  let t = convert(s)
  PROTECT.forEach((p, i) => {
    protectHits[i] += t.split(p).length - 1
    t = t.split(p).join(PUA(i))
  })
  for (const [from, to] of OVERRIDES) t = t.split(from).join(to)
  PROTECT.forEach((p, i) => {
    t = t.split(PUA(i)).join(p)
  })
  return t
}

const twDeep = (v) => {
  if (typeof v === 'string') return tw(v)
  if (Array.isArray(v)) return v.map(twDeep)
  if (v && typeof v === 'object')
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, twDeep(x)]))
  return v
}

const writeJson = (file, obj) => {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, `${JSON.stringify(obj, null, 2)}\n`)
}

// 1. Lessons — whole-file conversion (URLs, markdown syntax and the ASCII
// banner are untouched by OpenCC), then pin the LANGUAGE frontmatter to the
// registry endonym instead of a converted 簡體中文.
const LESSON_SRC = 'translation/lesson/zh'
const LESSON_OUT = 'translation/lesson/zh-tw'
fs.mkdirSync(LESSON_OUT, { recursive: true })
let lessons = 0
for (const f of fs.readdirSync(LESSON_SRC)) {
  if (!f.endsWith('.md')) continue
  const out = tw(fs.readFileSync(path.join(LESSON_SRC, f), 'utf8')).replace(
    /^LANGUAGE: .*$/m,
    'LANGUAGE: 繁體中文'
  )
  fs.writeFileSync(path.join(LESSON_OUT, f), out)
  lessons++
}

// 2. Glossary — keys are the English terms and stay verbatim; only the
// translated values convert.
const glossary = JSON.parse(
  fs.readFileSync('translation/keywords/zh/keywords.json', 'utf8')
)
writeJson(
  'translation/keywords/zh-tw/keywords.json',
  Object.fromEntries(
    Object.entries(glossary).map(([en, e]) => [en, twDeep(e)])
  )
)

// 3. UI namespaces — keys are English strings and stay verbatim.
const NAMESPACES = ['common', 'quests', 'homepage', 'lesson']
for (const ns of NAMESPACES) {
  const src = JSON.parse(
    fs.readFileSync(`translation/website/zh/${ns}.json`, 'utf8')
  )
  writeJson(
    `translation/website/zh-tw/${ns}.json`,
    Object.fromEntries(Object.entries(src).map(([k, v]) => [k, twDeep(v)]))
  )
}

console.log(
  `zh-tw: ${lessons} lessons, ${Object.keys(glossary).length} glossary entries, ` +
    `${NAMESPACES.length} namespaces. Protected-phrase hits: ` +
    PROTECT.map((p, i) => `${p}=${protectHits[i]}`).join(' ')
)
