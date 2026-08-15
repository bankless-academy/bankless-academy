/* eslint-disable no-console */
// Checks that the COMMITTED lessons.json / lessons.ts are up to date with the
// markdown sources: snapshots the committed artifacts, reruns build-content.js,
// and compares. Fails if someone edited translation/lesson/en/*.md (or
// lesson-meta.json) without running `yarn build-content` and committing the
// regenerated artifacts.
//
// The comparison is SEMANTIC, not byte-for-byte (normalization retained from
// the original Notion-parity golden test — see normalizeHtml/normalizeMd).
import fs from 'fs'
import os from 'os'
import path from 'path'
import { execSync } from 'child_process'

const BUILT_JSON = 'src/constants/lessons.json'
const BUILT_TS = 'src/constants/lessons.ts'

// snapshot committed artifacts, then rebuild in place
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'lessons-golden-'))
const GOLDEN_JSON = path.join(tmp, 'lessons-golden.json')
const GOLDEN_TS = path.join(tmp, 'lessons-golden.ts')
fs.copyFileSync(BUILT_JSON, GOLDEN_JSON)
fs.copyFileSync(BUILT_TS, GOLDEN_TS)
execSync('node build-content.js', { stdio: 'inherit' })

// ---------------------------------------------------------------------------
// loading
// ---------------------------------------------------------------------------

const loadTsArray = (path) => {
  const src = fs.readFileSync(path, 'utf8')
  const start = src.indexOf('const LESSONS: LessonType[] = ')
  const end = src.lastIndexOf('export default LESSONS')
  if (start === -1 || end === -1) throw new Error(`${path}: unexpected ts shape`)
  const literal = src
    .slice(start + 'const LESSONS: LessonType[] = '.length, end)
    .trim()
  return new Function(`return ${literal}`)()
}

// ---------------------------------------------------------------------------
// normalization
// ---------------------------------------------------------------------------

const INLINE_TAGS = 'em|strong|a|code|summary'

const normalizeHtml = (html) => {
  let s = html
  // unify attribute quoting: key="value" -> key='value'
  s = s.replace(/=["']([^"']*)["']/g, "='$1'")
  // drop no-op color spans (class has no CSS anywhere in the app)
  s = s.replace(/<span class='color-default'>/g, '').replace(/<\/span>/g, '')
  // canonicalize bold-italic nesting
  s = s.replace(/<strong><em>/g, '<em><strong>')
  s = s.replace(/<\/em><\/strong>/g, '</strong></em>')
  // empty emphasis produced by stray Notion annotations renders nothing
  s = s.replace(/<(strong|em)>\s*<\/\1>/g, ' ')
  // move whitespace trapped inside inline tag boundaries outside the tag
  //   "<em>change </em>in"  ->  "<em>change</em> in"
  //   "word <em> x</em>"    ->  "word <em>x</em>"
  const openRe = new RegExp(`(<(?:${INLINE_TAGS})(?:\\s[^>]*)?>)\\s+`, 'g')
  const closeRe = new RegExp(`\\s+(</(?:${INLINE_TAGS})>)`, 'g')
  for (let k = 0; k < 3; k++) {
    s = s.replace(openRe, ' $1')
    s = s.replace(closeRe, '$1 ')
  }
  // <br> hugging an inline boundary: "<strong><br>x" == "<br><strong>x"
  s = s.replace(new RegExp(`(<(?:${INLINE_TAGS})(?:\\s[^>]*)?>)<br>`, 'g'), '<br>$1')
  // trailing <br> before a block close carries no visible content
  s = s.replace(/<br>\s*(<\/p>|<\/li>|<\/div>)/g, '$1')
  // collapse whitespace runs
  s = s.replace(/\s+/g, ' ')
  // whitespace next to block-level tags is layout-irrelevant
  const BLOCK = '(?:/?(?:p|div|ul|ol|li|hr|details|iframe|img|blockquote|h[1-6])[^>]*)'
  s = s.replace(new RegExp(`\\s+(<${BLOCK}>)`, 'g'), '$1')
  s = s.replace(new RegExp(`(<${BLOCK}>)\\s+`, 'g'), '$1')
  return s.trim()
}

const normalizeMd = (md) =>
  md
    .replace(/[ \t]+$/gm, '') // trailing spaces on lines
    .replace(/\n{3,}/g, '\n\n') // collapsed blank-line runs
    .trim()

const normalizeText = (t) => t.replace(/\s+/g, ' ').trim()

// quiz questions may carry no-op color spans in the golden payload
const normalizeQuestion = (t) =>
  normalizeText(
    t.replace(/<span class=['"]color-default['"]>/g, '').replace(/<\/span>/g, '')
  )

// ---------------------------------------------------------------------------
// diffing
// ---------------------------------------------------------------------------

let failures = 0
const report = (where, msg) => {
  failures++
  console.log(`  FAIL ${where}\n       ${msg}`)
}

const excerpt = (a, b) => {
  a = String(a)
  b = String(b)
  let i = 0
  while (i < a.length && i < b.length && a[i] === b[i]) i++
  const from = Math.max(0, i - 60)
  return (
    `golden  …${JSON.stringify(a.slice(from, i + 120))}\n       ` +
    `built   …${JSON.stringify(b.slice(from, i + 120))}`
  )
}

const cmpValue = (where, golden, built, normalizer = (s) => s) => {
  if (typeof golden === 'string' && typeof built === 'string') {
    const g = normalizer(golden)
    const b = normalizer(built)
    if (g !== b) report(where, excerpt(g, b))
    return
  }
  if (JSON.stringify(golden) !== JSON.stringify(built)) {
    report(where, excerpt(JSON.stringify(golden), JSON.stringify(built)))
  }
}

const cmpQuiz = (where, g, b) => {
  const keysG = Object.keys(g).sort().join(',')
  const keysB = Object.keys(b).sort().join(',')
  if (keysG !== keysB) {
    report(where, `quiz keys differ: golden [${keysG}] built [${keysB}]`)
    return
  }
  cmpValue(`${where} question`, g.question, b.question, normalizeQuestion)
  if ('rightAnswerNumber' in g)
    cmpValue(`${where} rightAnswerNumber`, g.rightAnswerNumber, b.rightAnswerNumber)
  cmpValue(`${where} id`, g.id, b.id)
  if (g.answers.length !== b.answers.length) {
    report(where, `answers count golden ${g.answers.length} built ${b.answers.length}`)
    return
  }
  g.answers.forEach((ans, i) =>
    cmpValue(`${where} answer ${i + 1}`, ans, b.answers[i], normalizeText)
  )
  if (g.feedback || b.feedback) {
    if (!g.feedback || !b.feedback || g.feedback.length !== b.feedback.length) {
      report(
        `${where} feedback`,
        `length golden ${g.feedback?.length} built ${b.feedback?.length}`
      )
    } else {
      // the golden payload is inconsistent about a leading `ℹ️ ` marker in
      // feedback (present in 3 lessons, absent in 4); the md standardizes on
      // the marker and the compiler strips it, so ignore it when comparing
      const normFeedback = (t) => normalizeText(t.replace(/^ℹ️\s*/, ''))
      g.feedback.forEach((f, i) =>
        cmpValue(`${where} feedback ${i + 1}`, f, b.feedback[i], normFeedback)
      )
    }
  }
}

const cmpSlide = (where, g, b) => {
  if (g.type !== b.type) {
    report(where, `type golden ${g.type} built ${b.type}`)
    return
  }
  for (const k of ['notionId', 'title', 'component']) {
    if (k in g || k in b) cmpValue(`${where} ${k}`, g[k], b[k], normalizeText)
  }
  if ('content' in g || 'content' in b) {
    if (typeof g.content !== 'string' || typeof b.content !== 'string') {
      report(`${where} content`, `golden ${typeof g.content} built ${typeof b.content}`)
    } else {
      cmpValue(`${where} content`, g.content, b.content, normalizeHtml)
    }
  }
  if ('quiz' in g || 'quiz' in b) {
    if (!g.quiz || !b.quiz) report(`${where} quiz`, `missing on one side`)
    else cmpQuiz(`${where} quiz`, g.quiz, b.quiz)
  }
}

const cmpLesson = (g, b) => {
  const slug = g.slug
  const keysG = Object.keys(g)
  const keysB = Object.keys(b)
  for (const k of keysG.filter((k) => !keysB.includes(k)))
    report(`${slug}`, `missing field in built output: ${k}`)
  for (const k of keysB.filter((k) => !keysG.includes(k)))
    report(`${slug}`, `extra field in built output: ${k}`)

  for (const k of keysG) {
    if (!(k in b)) continue
    if (k === 'slides') continue
    if (k === 'articleContent') {
      cmpValue(`${slug} articleContent`, g[k], b[k], normalizeMd)
      continue
    }
    cmpValue(`${slug} ${k}`, g[k], b[k], (s) => s)
  }

  if (g.slides) {
    if (!b.slides) return
    if (g.slides.length !== b.slides.length) {
      report(slug, `slide count golden ${g.slides.length} built ${b.slides.length}`)
      return
    }
    g.slides.forEach((gs, i) =>
      cmpSlide(`${slug} slide ${i + 1} "${gs.title}"`, gs, b.slides[i])
    )
  }
}

const cmpAll = (label, golden, built) => {
  console.log(`\n=== ${label} ===`)
  if (golden.length !== built.length) {
    report(label, `lesson count golden ${golden.length} built ${built.length}`)
    return
  }
  const order = golden.map((l) => l.slug).join()
  const orderB = built.map((l) => l.slug).join()
  if (order !== orderB) {
    report(label, `lesson order differs:\n  golden ${order}\n  built  ${orderB}`)
    return
  }
  let ok = 0
  for (let i = 0; i < golden.length; i++) {
    const before = failures
    console.log(`- ${golden[i].slug}`)
    cmpLesson(golden[i], built[i])
    if (failures === before) ok++
  }
  console.log(`${ok}/${golden.length} lessons semantically identical`)
}

// ---------------------------------------------------------------------------

cmpAll(
  'lessons.json',
  JSON.parse(fs.readFileSync(GOLDEN_JSON, 'utf8')),
  JSON.parse(fs.readFileSync(BUILT_JSON, 'utf8'))
)
cmpAll('lessons.ts', loadTsArray(GOLDEN_TS), loadTsArray(BUILT_TS))

if (failures) {
  console.log(
    `\n${failures} difference(s) found — committed lessons.json/lessons.ts are` +
      ` out of date. Run \`yarn build-content\` and commit the result.`
  )
  process.exit(1)
} else {
  console.log('\nCommitted lesson artifacts are up to date with the md sources.')
}
