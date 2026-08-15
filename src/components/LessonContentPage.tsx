// The page component shared by both content routes. Thin on purpose: the two
// route files differ only in how they derive (lang, slug).
import Script from 'next/script'
import React from 'react'

import { MetaData } from 'components/Head'
import LessonArticle from 'components/LessonArticle'
import RecordPreferredLanguage from 'components/RecordPreferredLanguage'
import { articleJsonLd } from 'utils/lessonContent'

const LessonContentPage = ({
  pageMeta,
}: {
  pageMeta: MetaData
}): React.ReactElement => {
  const lesson = pageMeta?.lesson
  const articleHtml = (pageMeta as any)?.articleHtml
  const lang = (pageMeta as any)?.lang || 'en'
  const headings = (pageMeta as any)?.headings || []
  const strings = (pageMeta as any)?.strings || {
    startLesson: 'Start Lesson',
    contents: 'Lesson Content',
  }
  if (!lesson || !articleHtml) return null

  const url = `https://app.banklessacademy.com${pageMeta.canonical}`

  return (
    <>
      <Script
        id="lesson-content-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd(lesson, url, lang),
        }}
      />
      <RecordPreferredLanguage lang={lang} />
      <LessonArticle
        lesson={lesson}
        articleHtml={articleHtml}
        headings={headings}
        lang={lang}
        strings={strings}
      />
    </>
  )
}

export default LessonContentPage
