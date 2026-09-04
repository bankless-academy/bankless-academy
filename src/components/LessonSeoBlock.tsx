// The server-rendered SEO surface of a lesson page: a hero carrying the <h1>
// and the full quiz-stripped article (the JSON-LD lives in <Head>, like every
// other page's). Rendered by _app.tsx's
// DEFAULT branch as a SIBLING of <Web3Providers> — that dynamic({ssr:false})
// boundary renders nothing on the server, so anything that must reach a
// crawler has to live outside it. The interactive app renders above this
// block once its JS arrives; the hero hides at that moment (and never shows
// on client-side navigations, where the app is already mounted).
//
// Same contract as LessonHero/LessonSeoArticle: NOTHING here may read
// localStorage, matchMedia, wallet or router state during render — the
// server and hydration renders must be identical.
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import { MetaData } from 'components/Head'
import LessonHero from 'components/LessonHero'
import LessonSeoArticle from 'components/LessonSeoArticle'
import { isRtlLang, normalizeLangCode } from 'constants/languages'
import { isAppMounted, onAppMounted } from 'utils/appMounted'

const LessonSeoBlock = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  // Server + hydration render: app not mounted -> hero visible (matches the
  // served HTML). Client-side navigation: app already mounted -> no hero.
  const [showHero, setShowHero] = useState(() => !isAppMounted())
  useEffect(() => {
    if (!isAppMounted()) return onAppMounted(() => setShowHero(false))
    setShowHero(false)
  }, [])

  const lang = normalizeLangCode(pageMeta?.lang)
  const dir = isRtlLang(lang) ? 'rtl' : 'ltr'

  return (
    <>
      {/* Page ground. The article section is deliberately transparent so the
          app region's spotlight glow (box-shadow on StyledBackground) can
          bleed past its box and fade naturally — an opaque section bg clipped
          it in a hard line. But behind transparent content sits the BODY,
          which is pure black (--tg-theme-bg-color), not the app's #161515.
          This fixed backdrop at z-index -1 paints below all in-flow content
          AND below their box-shadows, giving the whole page one consistent
          base the glow can dissolve into. */}
      <Box position="fixed" inset={0} bg="#161515" zIndex={-1} />
      {showHero && <LessonHero lesson={pageMeta.lesson} />}
      {/* The SEO copy of the article: the crawler surface and the readable
          page for direct loads before JS. It unmounts when the app arrives
          (same gate as the hero) — the app then owns the content: handbooks
          display this exact text as their page, and interactive lessons
          render the collapsed reading panel INSIDE the app layout (see
          lessons/[slug].tsx), where the lesson-background effect encloses it.
          Handbooks render this copy expanded — it IS the page pre-JS. */}
      {pageMeta.articleHtml && showHero && (
        <LessonSeoArticle
          articleHtml={pageMeta.articleHtml}
          headings={pageMeta.headings || []}
          lang={lang}
          dir={dir}
          contentsLabel={pageMeta.strings?.contents || ''}
          startLessonLabel={pageMeta.strings?.startLesson || 'Start Lesson'}
          updatedLabel={pageMeta.strings?.updated}
          lastmod={pageMeta.lastmod || undefined}
          lastmodText={pageMeta.strings?.updatedDate}
          lesson={pageMeta.lesson}
          alwaysExpanded={!!pageMeta.lesson?.isArticle}
        />
      )}
    </>
  )
}

export default LessonSeoBlock
