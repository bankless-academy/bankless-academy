/* eslint-disable no-console */
// One-time extractor: splits src/constants/lessons.json into
//   - src/constants/lesson-meta.json  (everything except slide/article content)
//   - src/constants/quiz-answers.json (right answer per quiz id, kept out of the md files)
// After this runs, translation/lesson/en/*.md + these two files become the
// source of truth, and lessons.json is compiled by build-content.js.
import fs from 'fs'

const lessons = JSON.parse(fs.readFileSync('src/constants/lessons.json', 'utf8'))

const meta = {}

for (const lesson of lessons) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { slides, articleContent, ...rest } = lesson

  const entry = { ...rest }
  if (slides) {
    // Per-slide skeleton: pins slide type, notionId and display title so the
    // compiler can rebuild slides in order from the md sections. QUEST slides
    // have no md section and are rebuilt from `quest` + `englishName`.
    entry.slideMeta = slides.map((s) => ({
      type: s.type,
      ...(s.notionId ? { notionId: s.notionId } : {}),
      ...(s.type === 'QUIZ' || s.type === 'POLL' ? { title: s.title } : {}),
    }))
  }
  meta[lesson.slug] = entry
}

fs.writeFileSync('src/constants/lesson-meta.json', JSON.stringify(meta, null, 2) + '\n')
console.log(`lesson-meta.json: ${Object.keys(meta).length} lessons`)
