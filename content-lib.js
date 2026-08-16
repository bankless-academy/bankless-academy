// Shared helpers for the content scripts (build/validate/translate).
// Kept in one place so the English gate and the translation gate can never
// drift apart on what counts as "too long for the slide".
import MarkdownIt from 'markdown-it'

// Same options build-content.js compiles slides with, so findBrokenEmphasis
// judges emphasis exactly as the shipped renderer does.
const md = new MarkdownIt({ html: true })

// French typography puts a space before : ; ! ? and inside « ». It has to be a
// NO-BREAK space: with a normal one the browser is free to wrap there, which
// strands the punctuation alone at the start of the next line. Applied as a
// deterministic post-process rather than asked for in the prompt, because it is
// a mechanical rule and models forget it.
const NBSP = '\u00a0'
// plain space or narrow no-break space (anything that is not already an NBSP)
const SP = '[ \\u202f]'
// Spans a typography rule must never touch: code spans (a backticked glossary
// term is matched against the keyword index verbatim, so an NBSP inside one is
// a dead tooltip), images, links, autolinks and bare URLs (an NBSP in a URL
// breaks it). Kept as one capturing group so `split` interleaves plain and
// protected parts.
const PROTECTED_SPAN =
  /(`[^`\n]*`|!?\[[^\]\n]*\]\([^)\n]*\)|<https?:\/\/[^>\n]*>|https?:\/\/\S+)/g

// Apply a substitution to the prose of each line only: fenced code blocks and
// headings keep plain spaces, and protected spans pass through untouched.
const perLine = (text, fix) => {
  let inFence = false
  return text
    .split('\n')
    .map((line) => {
      if (/^\s*```/.test(line)) {
        inFence = !inFence
        return line
      }
      if (inFence || /^\s*#{1,6} /.test(line)) return line
      return line
        .split(PROTECTED_SPAN)
        .map((part, i) => (i % 2 ? part : fix(part)))
        .join('')
    })
    .join('\n')
}

const TYPOGRAPHY = {
  fr: (text) =>
    text
      // ...temps : -> ...temps<nbsp>:
      .replace(new RegExp(`${SP}+([;:?\u00bb])`, 'g'), `${NBSP}$1`)
      // same for !, but never touch a markdown image: `text ![](url)`
      .replace(new RegExp(`${SP}+!(?!\\[)`, 'g'), `${NBSP}!`)
      .replace(new RegExp(`\u00ab${SP}+`, 'g'), `\u00ab${NBSP}`),

  // Czech and Polish typography forbids leaving a one-letter word at the end of
  // a line. Both waves shipped correct files, but only because each agent was
  // told to run a scratch script by hand \u2014 which is not a rule, it is a habit
  // that the next wave forgets. Encoding it here means `build-translation.sh`
  // applies it at assembly for every future lesson.
  //
  // The replace loops because the pattern consumes the separator before the
  // one-letter word, so "w z sieci" needs a second pass to reach "z".
  cs: (text) =>
    perLine(text, (s) => {
      let prev
      let out = s
      do {
        prev = out
        out = out
          // one-letter Czech words: k s v z o u a i (+ capitals)
          .replace(/(^|[\s(\u201e\u201c\u201a'*_>-])([kKsSvVzZoOuUaAiI]) (?=\S)/g, `$1$2${NBSP}`)
      } while (out !== prev)
      return (
        out
          // thousands groups: 21 000 000
          .replace(/(\d) (?=\d{3}(\D|$))/g, `$1${NBSP}`)
          // number + unit / currency / percent
          .replace(
            /(\d) (?=(%|ETH|BTC|OP|USDC|USDT|USD|mil\.|mld\.|miliard|milion|bilion|sekund|vte\u0159in|minut|hodin|bod|dolar))/g,
            `$1${NBSP}`
          )
      )
    }),

  pl: (text) =>
    perLine(text, (s) => {
      let prev
      let out = s
      do {
        prev = out
        out = out.replace(/(^|[\s(\u201e\u00bb"'*])([aeiouwzAEIOUWZ]) (?=\S)/g, `$1$2${NBSP}`)
      } while (out !== prev)
      return out
    }),
}

// Normalize punctuation spacing for a language; a no-op for languages with no
// rule defined.
export const applyTypography = (text, lang) =>
  text && TYPOGRAPHY[lang] ? TYPOGRAPHY[lang](text) : text

// True when `text` already satisfies the language's typography rules.
export const hasCleanTypography = (text, lang) =>
  applyTypography(text, lang) === text

// A LEARN slide is rendered at a fixed height. Past this many estimated
// rendered lines the text runs under the Close button on desktop, and mobile
// binds sooner. Calibrated against a known-overflowing slide (~26 est. lines).
export const MAX_SLIDE_LINES = 22

// Rendered width of a string in half-width units. CJK ideographs, kana, hangul
// and fullwidth forms occupy roughly two Latin character widths, so counting
// raw `.length` under-measures a Japanese or Chinese slide by about half and
// waves it through the ceiling while it actually overflows. Everything else,
// including Cyrillic and Turkish, is close enough to 1.
const WIDE =
  /[\u1100-\u115F\u2E80-\u303E\u3041-\u33FF\u3400-\u4DBF\u4E00-\u9FFF\uA000-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFE30-\uFE6F\uFF00-\uFF60\uFFE0-\uFFE6]/
export const displayWidth = (str) => {
  let w = 0
  // NFC first: a decomposed "ó" is two code points but one rendered glyph, so
  // counting raw code points inflated Vietnamese by ~36% and failed slides
  // that actually fit. Any combining mark still left contributes zero.
  for (const ch of str.normalize('NFC')) {
    if (/\p{M}/u.test(ch)) continue
    w += WIDE.test(ch) ? 2 : 1
  }
  return w
}

// Emphasis markers that CommonMark will NOT resolve, which ship to the reader
// as literal ** or _ in the slide.
//
// CommonMark's flanking rules are defined in terms of Unicode punctuation and
// whitespace, and CJK has neither word spaces nor ASCII punctuation, so two
// constructs that are fine in English silently break in ja/zh:
//
//   `**価値：**時間`  the closing ** is preceded by punctuation (：) and
//                     followed by a letter (時), so it is not right-flanking
//                     and cannot close. Fix: move the colon out, `**価値**：時間`.
//   `の_増減_を`      `_` may not open or close intraword, and CJK ideographs
//                     count as word characters. Fix: use `*増減*` (asterisks
//                     have no intraword restriction).
//
// There are more failure modes than those two (an opener followed by
// punctuation, a stray space inside the delimiters, a closer after `)` from a
// link), and the flanking rules are far too subtle to approximate with a
// regex — a hand-rolled version of this check missed 10 real cases and
// invented 9 more. So we ask the renderer: markdown-it is the parser
// build-content.js compiles slides with, and any ** or _emphasis_ still
// present as literal text in its output is a marker that will not render.
//
// Returns one finding per offending line: { line, text, kind }.
export const findBrokenEmphasis = (text) => {
  const out = []
  const lines = text.split('\n')
  let inFence = false
  lines.forEach((line, i) => {
    if (/^\s*```/.test(line)) {
      inFence = !inFence
      return
    }
    if (inFence || !line.trim()) return
    // `***` on its own is a thematic break, not emphasis
    if (/^\s*\*{3,}\s*$/.test(line)) return
    // Code spans keep their contents verbatim, so ** inside one is intentional.
    const html = md
      .render(line)
      .replace(/<code>[\s\S]*?<\/code>/g, '')
      .replace(/<pre>[\s\S]*?<\/pre>/g, '')
    if (html.includes('**')) {
      out.push({ line: i + 1, text: line.trim(), kind: 'bold-marker-not-rendered' })
      return
    }
    // A `_` left sitting against an emphasis tag is the signature of a half-
    // resolved nested span: `block_**chain**_` renders as
    // `block_<strong>chain</strong>_` in EVERY script, English included, so
    // this must not be gated on the flanking letter being non-ASCII.
    const hugsTag = /_<(strong|em)>|<\/(strong|em)>_/.test(html)
    // Bare `_x_` that survived. Two kinds of underscore are deliberate and
    // must not be flagged: ones the author escaped (`\_0x\_\_\_`), and runs of
    // 2+ used as a fill-in-the-blank rule ("your address is like your _____").
    // Escapes are dropped from the source before re-rendering rather than
    // guessed at in the output, where a literal `_` looks identical either way.
    const bare = md
      .render(line.replace(/\\_/g, ''))
      .replace(/<code>[\s\S]*?<\/code>/g, '')
      .replace(/_{2,}/g, '')
    const barePair =
      /(^|[^\p{L}\p{N}\\])_[^_\s][^_]*_([^\p{L}\p{N}]|$)/u.test(bare) ||
      /[^\p{ASCII}]_[^_\s][^_]*_|_[^_\s][^_]*_[^\p{ASCII}]/u.test(bare)
    if (hugsTag || barePair)
      out.push({ line: i + 1, text: line.trim(), kind: 'underscore-emphasis-not-rendered' })
  })
  return out
}

// Estimated rendered lines for one slide section (heading line included).
// Image slides get a ~58-column text column, imageless ones ~116, measured in
// half-width units (see displayWidth).
// <details> blocks render collapsed, so only their <summary> counts.
export const estimateSlideLines = (section) => {
  const [title] = section.split('\n')
  let text = section.replace(title, '')
  const hasImage = /!\[\]\([^)]*\)/.test(text)
  const cpl = hasImage ? 58 : 116
  text = text
    .replace(/<details>[\s\S]*?<\/details>/g, (m) =>
      (m.match(/<summary>/g) || []).map(() => '~S~').join('\n\n')
    )
    .replace(/!\[\]\([^)]*\)/g, '')
    .trim()
  let lines = 0
  for (const block of text.split(/\n\s*\n/).filter(Boolean)) {
    for (const ln of block.split('\n')) {
      const t = ln.trim()
      if (!t) continue
      lines += t === '---' || t === '~S~' ? 1.2 : Math.ceil(displayWidth(t) / cpl)
    }
    lines += 0.6
  }
  return lines
}

// Parse a style guide's ```terms``` block into [english, translation] pairs.
//
// One implementation for all three callers (validate-content, translate-content,
// lang-tools) because they used to disagree: `lang-tools merge` stripped inline
// comments and the other two did not. `lang-tools pins` emits its ranking as a
// trailing comment —
//
//     private key = निजी कुंजी   # x17
//
// — and that output is meant to be pasted straight into the guide, so the two
// unstripped parsers would pin the literal value "निजी कुंजी   # x17", which no
// glossary entry can ever match. The merge tool would enforce one value while
// the validator compared against another: drift between the tools that exist
// to prevent drift.
//
// Comments are cut at a whitespace-preceded `#` rather than the first `#`
// anywhere, so a term that legitimately contains one survives.
export const parseStylePins = (text) => {
  const out = []
  for (const block of text.matchAll(/```terms\n([\s\S]*?)```/g)) {
    for (const raw of block[1].split('\n')) {
      const line = raw.replace(/\s+#.*$/, '').trim()
      if (!line || line.startsWith('#')) continue
      const i = line.indexOf('=')
      if (i === -1) continue
      const english = line.slice(0, i).trim()
      const translation = line.slice(i + 1).trim()
      if (english && translation) out.push([english, translation])
    }
  }
  return out
}

// Mirror of `normalizeKeyword` in src/constants/languages.ts — see the comment
// there. Duplicated rather than imported because the content scripts are plain
// Node ESM and cannot pull in the app's TypeScript. Keep the two in sync: if
// they disagree, the validator passes content whose tooltips die at runtime.
// Unicode normalization matters as much as case folding. Vietnamese "ví tiền
// mã hóa" is 14 code points in NFC and 19 in NFD; the two render identically
// and never compare equal, so an NFD backticked term is a dead tooltip against
// an NFC glossary key with nothing visible to debug. NFC first, then fold.
export const normalizeKeyword = (s) =>
  s.normalize('NFC').toLowerCase().replace(/̇/g, '')
