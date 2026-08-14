// Shared helpers for the content scripts (build/validate/translate).
// Kept in one place so the English gate and the translation gate can never
// drift apart on what counts as "too long for the slide".

// French typography puts a space before : ; ! ? and inside « ». It has to be a
// NO-BREAK space: with a normal one the browser is free to wrap there, which
// strands the punctuation alone at the start of the next line. Applied as a
// deterministic post-process rather than asked for in the prompt, because it is
// a mechanical rule and models forget it.
const NBSP = '\u00a0'
// plain space or narrow no-break space (anything that is not already an NBSP)
const SP = '[ \\u202f]'
const TYPOGRAPHY = {
  fr: (text) =>
    text
      // ...temps : -> ...temps<nbsp>:
      .replace(new RegExp(`${SP}+([;:?\u00bb])`, 'g'), `${NBSP}$1`)
      // same for !, but never touch a markdown image: `text ![](url)`
      .replace(new RegExp(`${SP}+!(?!\\[)`, 'g'), `${NBSP}!`)
      .replace(new RegExp(`\u00ab${SP}+`, 'g'), `\u00ab${NBSP}`),
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

// Estimated rendered lines for one slide section (heading line included).
// Image slides get a ~58-char text column, imageless ones ~116.
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
      lines += t === '---' || t === '~S~' ? 1.2 : Math.ceil(t.length / cpl)
    }
    lines += 0.6
  }
  return lines
}
