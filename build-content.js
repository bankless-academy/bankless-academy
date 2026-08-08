/* eslint-disable no-console */
// Lesson content compiler: rebuilds the app payload from the translatable
// markdown sources + lesson metadata.
//
//   inputs:  translation/lesson/en/<slug>.md   (canonical lesson content)
//            src/constants/lesson-meta.json    (all non-content lesson fields
//                                               + per-slide skeleton `slideMeta`)
//   outputs: src/constants/lessons.json        (app payload, JSON)
//            src/constants/lessons.ts          (same payload as a typed TS module)
//
// Usage: node build-content.js
import fs from 'fs'
import stringifyObject from 'stringify-object'

const META_FILE = 'src/constants/lesson-meta.json'
const MD_DIR = 'translation/lesson/en'
const OUT_JSON = 'src/constants/lessons.json'
const OUT_TS = 'src/constants/lessons.ts'

const IMAGE_HOST = 'https://app.banklessacademy.com'

// ---------------------------------------------------------------------------
// markdown helpers
// ---------------------------------------------------------------------------

// Strip frontmatter + ASCII-art banner + the `---` separator that follows it,
// returning the lesson body.
const extractBody = (md) => {
  let src = md.replace(/\r\n/g, '\n')
  // frontmatter
  if (src.startsWith('---\n')) {
    const end = src.indexOf('\n---\n', 4)
    if (end === -1) throw new Error('unterminated frontmatter')
    src = src.slice(end + 5)
  }
  // fenced ASCII banner
  const fenceOpen = src.indexOf('```')
  if (fenceOpen !== -1) {
    const fenceClose = src.indexOf('```', fenceOpen + 3)
    if (fenceClose === -1) throw new Error('unterminated code fence')
    src = src.slice(fenceClose + 3)
  }
  // separator after the banner
  const sep = src.match(/^\s*\n---[ \t]*\n/)
  if (sep) src = src.slice(sep[0].length)
  else src = src.replace(/^\s*\n/, '')
  return src
}

// Inline markdown -> HTML (Notion idioms). No entity escaping: the historical
// payload keeps raw UTF-8 / ampersands.
const renderInline = (text) => {
  const tokens = []
  const stash = (html) => {
    tokens.push(html)
    return `\uE000${tokens.length - 1}\uE001`
  }

  let s = text
  // inline code first: its content is verbatim
  s = s.replace(/`([^`]+)`/g, (_, code) => stash(`<code>${code}</code>`))
  // links (label may carry nested formatting, resolved after unstashing)
  s = s.replace(
    /\[([^\]]*)\]\(([^)\s]+)\)/g,
    (_, label, url) => stash(`<a href='${url}'>${renderEmphasis(label)}</a>`)
  )
  s = renderEmphasis(s)
  // soft line breaks inside a paragraph
  s = s.replace(/\n/g, '<br>')
  // unstash
  s = s.replace(/\uE000(\d+)\uE001/g, (_, i) => tokens[i])
  return s
}

// bold / italic / bold+italic. Underscore italics need care: content may
// itself contain underscores (`_0x_________`), so the closing delimiter is
// the last `_` of an underscore run that sits on a right word boundary.
const renderEmphasis = (s) => {
  // bold+italic combos
  s = s.replace(/_\*\*(.+?)\*\*_/g, '<em><strong>$1</strong></em>')
  s = s.replace(/\*\*_(.+?)_\*\*/g, '<strong><em>$1</em></strong>')
  // bold
  s = s.replace(/\*\*([^*]+(?:\*(?!\*)[^*]*)*)\*\*/g, '<strong>$1</strong>')
  // italic (underscore, Notion style)
  s = replaceUnderscoreItalic(s)
  // italic (asterisk)
  s = s.replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s.,;:!?)]|$)/g, '$1<em>$2</em>')
  return s
}

const replaceUnderscoreItalic = (s) => {
  let out = ''
  let i = 0
  while (i < s.length) {
    const ch = s[i]
    if (ch !== '_') {
      out += ch
      i++
      continue
    }
    // candidate opener: `_` not followed by whitespace, and not part of a
    // literal underscore run (`______` blanks stay literal)
    if (/\s/.test(s[i + 1] || ' ') || s[i + 1] === '_') {
      out += ch
      i++
      continue
    }
    // find closer: an `_` whose next char is not a word char / underscore,
    // and which is not directly preceded by whitespace
    let j = i + 1
    let close = -1
    while (j < s.length) {
      if (s[j] === '_' && !/[\w_]/.test(s[j + 1] || ' ') && !/\s/.test(s[j - 1])) {
        close = j
        break
      }
      j++
    }
    if (close === -1 || close === i + 1) {
      out += ch
      i++
      continue
    }
    out += `<em>${s.slice(i + 1, close)}</em>`
    i = close + 1
  }
  return out
}

// plain-text version of a line (quiz answers/questions carry no markup)
const plainText = (text) =>
  renderInline(text)
    .replace(/<[^>]+>/g, '')
    .trim()

// ---------------------------------------------------------------------------
// LEARN slide rendering
// ---------------------------------------------------------------------------

const IMG_RE = /^!\[[^\]]*\]\(([^)\s]+)\)\s*$/
const EMBED_RE = /^\[embed\]\(([^)\s]+)\)\s*$/

const relativizeImage = (url) =>
  url.startsWith(`${IMAGE_HOST}/images/`) ? url.slice(IMAGE_HOST.length) : url

// Split a section body into blocks: paragraphs, lists, hr, images, embeds,
// raw <details> blocks.
const splitBlocks = (body) => {
  const lines = body.split('\n')
  const blocks = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim() === '') {
      i++
      continue
    }
    if (line.trim() === '---') {
      blocks.push({ type: 'hr' })
      i++
      continue
    }
    if (IMG_RE.test(line)) {
      blocks.push({ type: 'img', url: relativizeImage(line.match(IMG_RE)[1]) })
      i++
      continue
    }
    if (EMBED_RE.test(line)) {
      blocks.push({ type: 'embed', url: line.match(EMBED_RE)[1] })
      i++
      continue
    }
    if (line.trim().startsWith('<details')) {
      // consume until </details>
      const buf = []
      while (i < lines.length) {
        buf.push(lines[i])
        if (lines[i].includes('</details>')) {
          i++
          break
        }
        i++
      }
      blocks.push({ type: 'details', raw: buf.join('\n') })
      continue
    }
    if (/^[-*] /.test(line)) {
      const items = []
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        items.push(lines[i].replace(/^[-*] /, ''))
        i++
      }
      blocks.push({ type: 'ul', items })
      continue
    }
    if (/^\d+\. /.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''))
        i++
      }
      blocks.push({ type: 'ol', items })
      continue
    }
    // paragraph: consume consecutive non-blank, non-special lines
    const buf = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      lines[i].trim() !== '---' &&
      !IMG_RE.test(lines[i]) &&
      !EMBED_RE.test(lines[i]) &&
      !/^[-*] /.test(lines[i]) &&
      !/^\d+\. /.test(lines[i]) &&
      !lines[i].trim().startsWith('<details')
    ) {
      buf.push(lines[i])
      i++
    }
    blocks.push({ type: 'p', text: buf.join('\n') })
  }
  return blocks
}

const renderDetails = (raw) => {
  // <details>\n  <summary>...</summary>\n\nbody...\n\n</details> (repeatable)
  const m = raw.match(/<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/)
  if (!m) throw new Error(`malformed <details> block: ${raw.slice(0, 80)}`)
  const summary = m[1].trim()
  const body = m[2]
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => renderInline(p))
    .join('')
  return `<details><summary>${summary}</summary>${body}</details>`
}

const renderBlock = (b) => {
  switch (b.type) {
    case 'p':
      return `<p>${renderInline(b.text)}</p>`
    case 'ul':
      return `<ul>${b.items.map((it) => `<li>${renderInline(it)}</li>`).join('')}</ul>`
    case 'ol':
      return `<ol>${b.items.map((it) => `<li>${renderInline(it)}</li>`).join('')}</ol>`
    case 'hr':
      return '<hr>'
    case 'details':
      return renderDetails(b.raw)
    default:
      throw new Error(`unexpected block type ${b.type}`)
  }
}

const renderEmbed = (url) =>
  url.includes('banklessacademy.com/animation/')
    ? `<iframe allowfullscreen class='animation' src='${url}'></iframe>`
    : `<iframe allowfullscreen src='${url}'></iframe>`

const renderLearnContent = (body, ctx) => {
  const blocks = splitBlocks(body)

  const mediaIdx = blocks
    .map((b, idx) => (b.type === 'img' || b.type === 'embed' ? idx : -1))
    .filter((idx) => idx !== -1)

  // no media: single bloc1
  if (mediaIdx.length === 0) {
    return `<div class="bloc1">${blocks.map(renderBlock).join('')}</div>`
  }

  // media strictly at the end -> bloc1 + bloc2
  const firstMedia = mediaIdx[0]
  const allTrailing = mediaIdx.every((idx, k) => idx === firstMedia + k)
  const trailingToEnd = mediaIdx[mediaIdx.length - 1] === blocks.length - 1
  if (allTrailing && trailingToEnd && firstMedia > 0) {
    const bloc1 = blocks.slice(0, firstMedia).map(renderBlock).join('')
    const bloc2 = blocks
      .slice(firstMedia)
      .map((b) => (b.type === 'img' ? `<img src='${b.url}'>` : renderEmbed(b.url)))
      .join('')
    return `<div class="bloc1">${bloc1}</div><div class="bloc2">${bloc2}</div>`
  }

  // interleaved media -> repeated bloc-ab (image left, following text right)
  if (firstMedia !== 0) {
    throw new Error(
      `${ctx}: interleaved media with leading text is not supported`
    )
  }
  let html = ''
  for (let k = 0; k < mediaIdx.length; k++) {
    const start = mediaIdx[k]
    const end = k + 1 < mediaIdx.length ? mediaIdx[k + 1] : blocks.length
    const media = blocks[start]
    const a = media.type === 'img' ? `<img src='${media.url}'>` : renderEmbed(media.url)
    const bcontent = blocks.slice(start + 1, end).map(renderBlock).join('')
    html += `<div class="bloc-ab"><div class="bloc-a">${a}</div><div class="bloc-b">${bcontent}</div></div>`
  }
  return html
}

// ---------------------------------------------------------------------------
// QUIZ / POLL parsing
// ---------------------------------------------------------------------------

const parseQuizSection = (body, ctx) => {
  const lines = body.split('\n')
  const questionLines = []
  const answers = []
  const feedbacks = []
  let rightAnswerNumber
  let inQuestion = true
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()
    const optMatch = trimmed.match(/^- \[([ xX])\] (.*)$/)
    if (optMatch) {
      inQuestion = false
      answers.push(plainText(optMatch[2]))
      feedbacks.push(undefined)
      if (optMatch[1].toLowerCase() === 'x') {
        if (rightAnswerNumber !== undefined)
          throw new Error(`${ctx}: multiple [x] options`)
        rightAnswerNumber = answers.length
      }
      continue
    }
    // per-option feedback blockquote (`> ℹ️ ...`) attaches to the last option
    if (trimmed.startsWith('>')) {
      if (!answers.length)
        throw new Error(`${ctx}: feedback blockquote before any option`)
      const text = trimmed.replace(/^>\s*/, '').replace(/^ℹ️\s*/, '').trim()
      if (!text) continue
      const last = answers.length - 1
      feedbacks[last] = feedbacks[last] ? `${feedbacks[last]} ${text}` : text
      continue
    }
    if (trimmed === '') {
      if (questionLines.length) inQuestion = false
      continue
    }
    if (inQuestion) questionLines.push(trimmed)
    else throw new Error(`${ctx}: unexpected content in quiz section: "${trimmed}"`)
  }
  if (!questionLines.length) throw new Error(`${ctx}: quiz has no question`)
  if (answers.length < 2) throw new Error(`${ctx}: quiz has ${answers.length} options`)
  const nFeedback = feedbacks.filter((f) => f !== undefined).length
  if (nFeedback && nFeedback !== answers.length)
    throw new Error(
      `${ctx}: ${nFeedback}/${answers.length} options have feedback — must be all or none`
    )
  // question keeps line breaks (<br>) but no other markup
  const question = questionLines.map((l) => plainText(l)).join('<br>')
  return {
    question,
    rightAnswerNumber,
    answers,
    feedback: nFeedback ? feedbacks : undefined,
  }
}

// ---------------------------------------------------------------------------
// lesson assembly
// ---------------------------------------------------------------------------

const splitSections = (body) => {
  const lines = body.split('\n')
  const sections = []
  let current = null
  for (const line of lines) {
    const h = line.match(/^# (.*)$/)
    if (h) {
      if (current) sections.push(current)
      current = { title: h[1].trim(), lines: [] }
      continue
    }
    if (current) current.lines.push(line)
    // content before the first heading (post-banner separators) is dropped
  }
  if (current) sections.push(current)
  return sections.map((s) => ({ title: s.title, body: s.lines.join('\n').trim() }))
}

const buildLesson = (slug, meta) => {
  const md = fs.readFileSync(`${MD_DIR}/${slug}.md`, 'utf8')
  const body = extractBody(md)
  const { slideMeta, ...fields } = meta

  if (!slideMeta) {
    // HANDBOOK: articleContent is the markdown body itself (images relativized)
    const articleContent = body
      .replaceAll(`${IMAGE_HOST}/images/`, '/images/')
      .replace(/\s+$/, '')
    // restore original key position: articleContent sits right after `slug`
    const lesson = {}
    for (const [k, v] of Object.entries(fields)) {
      lesson[k] = v
      if (k === 'slug') lesson.articleContent = articleContent
    }
    return lesson
  }

  const sections = splitSections(body)
  const contentMeta = slideMeta.filter((s) => s.type !== 'QUEST')
  if (sections.length !== contentMeta.length) {
    throw new Error(
      `${slug}: ${sections.length} md sections but ${contentMeta.length} ` +
        `non-QUEST slides in slideMeta`
    )
  }

  let quizCounter = 0
  const slides = []
  for (const sm of slideMeta) {
    if (sm.type === 'QUEST') {
      if (!fields.quest) throw new Error(`${slug}: QUEST slide but no quest field`)
      slides.push({
        type: 'QUEST',
        title: `${fields.englishName} Quest`,
        component: fields.quest,
      })
      continue
    }
    const section = sections[slides.filter((s) => s.type !== 'QUEST').length]
    const ctx = `${slug} / ${section.title}`
    if (sm.type === 'LEARN') {
      slides.push({
        type: 'LEARN',
        notionId: sm.notionId,
        title: section.title,
        content: renderLearnContent(section.body, ctx),
      })
    } else if (sm.type === 'QUIZ' || sm.type === 'POLL') {
      quizCounter++
      const { question, rightAnswerNumber, answers, feedback } =
        parseQuizSection(section.body, ctx)
      if (sm.type === 'QUIZ' && rightAnswerNumber === undefined)
        throw new Error(`${ctx}: QUIZ slide has no [x] option`)
      if (sm.type === 'POLL' && rightAnswerNumber !== undefined)
        throw new Error(`${ctx}: POLL slide has an [x] option`)
      const quiz = { question }
      if (sm.type === 'QUIZ') quiz.rightAnswerNumber = rightAnswerNumber
      quiz.answers = answers
      if (feedback) quiz.feedback = feedback
      quiz.id = `${slug}-${quizCounter}`
      slides.push({ type: sm.type, notionId: sm.notionId, title: sm.title, quiz })
    } else {
      throw new Error(`${slug}: unknown slide type ${sm.type}`)
    }
  }

  return { ...fields, slides }
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

const main = () => {
  const metaAll = JSON.parse(fs.readFileSync(META_FILE, 'utf8'))
  const lessons = Object.entries(metaAll).map(([slug, meta]) =>
    buildLesson(slug, meta)
  )

  fs.writeFileSync(OUT_JSON, JSON.stringify(lessons, null, 2))

  const tsContent = `/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = ${stringifyObject(lessons, {
    indent: '  ',
    singleQuotes: true,
  })}

export default LESSONS
`
  fs.writeFileSync(OUT_TS, tsContent)

  const nSlides = lessons.reduce((a, l) => a + (l.slides?.length || 0), 0)
  const nArticles = lessons.filter((l) => l.isArticle).length
  console.log(
    `compiled ${lessons.length} lessons (${nArticles} handbooks, ${nSlides} slides) -> ${OUT_JSON} + ${OUT_TS}`
  )
}

main()
