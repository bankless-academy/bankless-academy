// Build-time article data for the hybrid lesson pages. Server-only (reads
// from disk); imported exclusively from getStaticProps so Next drops it from
// the client bundle.
import fs from 'fs'

import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { buildArticle } from 'utils/lessonContent'

const mdPath = (lang: string, slug: string) =>
  `translation/lesson/${lang}/${slug}.md`

/**
 * The content page renders outside AppProvider and the i18next React context,
 * so UI strings are resolved from the translation files at build time instead.
 * Reuses existing keys: adding new ones would mean nine new translations for
 * two labels. English has no common.json by design and falls through to the key.
 */
const uiString = (lang: string, key: string): string => {
  if (lang === 'en') return key
  const p = `translation/website/${lang}/common.json`
  if (!fs.existsSync(p)) return key
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'))[key] || key
  } catch {
    return key
  }
}

const frontmatterValue = (md: string, key: string): string | undefined =>
  md.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1]?.trim()

export const lessonBySlug = (slug: string): LessonType | undefined =>
  LESSONS.find((l: LessonType) => l.slug === slug)

/**
 * The lesson's article rendering (quiz-stripped HTML + heading anchors +
 * localized labels) for a given language. Shared by the /content reading page
 * and the hybrid lesson page, which embeds the same article below the
 * interactive island so the lesson URL itself carries the prose.
 * Returns null when the md is missing or unusable — callers decide whether
 * that is fatal (content page) or means "no article section" (lesson page).
 */
export const buildLessonArticleProps = (lang: string, slug: string) => {
  const lesson = lessonBySlug(slug)
  if (!lesson) return null
  const isRegistered =
    lang === 'en' || (lesson.languages || []).includes(lang as any)
  const usedLang =
    isRegistered && fs.existsSync(mdPath(lang, slug)) ? lang : 'en'
  const path = mdPath(usedLang, slug)
  if (!fs.existsSync(path)) return null
  const raw = fs.readFileSync(path, 'utf8')
  const { html: articleHtml, headings } = buildArticle(
    raw,
    uiString(usedLang, 'Knowledge Check')
  )
  if (!articleHtml) return null
  return {
    raw,
    articleHtml,
    headings,
    usedLang,
    name: frontmatterValue(raw, 'TITLE') || lesson.name,
    description:
      frontmatterValue(raw, 'DESCRIPTION') || lesson.description || '',
    contentsLabel: uiString(usedLang, 'Lesson Content:').replace(
      /[\s:\uFF1A]+$/,
      ''
    ),
    startLessonLabel: uiString(usedLang, 'Start Lesson'),
  }
}

