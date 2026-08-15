// /lessons/<lang>/<slug>/content — the localized reading view.
//
// NOTE ON THE PARAM NAMES: here `slug` is the LANGUAGE and `lessonSlug` is the
// lesson. Next.js requires the same name for a given dynamic position across
// sibling routes, and position 1 is already `[slug]` (the lesson) in the
// 2-segment English route, so it cannot be called `[lang]` here. The mismatch
// is a router constraint, not intent — everything downstream takes (lang, slug)
// in the right order.
import { GetStaticPaths, GetStaticProps } from 'next'

import LessonContentPage from 'components/LessonContentPage'

export const getStaticPaths: GetStaticPaths = async () => {
  const { localizedContentPaths } = await import('utils/lessonContentPage')
  return {
    paths: localizedContentPaths().map(({ params }) => ({
      params: { slug: params.lang, lessonSlug: params.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getContentPageProps } = await import('utils/lessonContentPage')
  return getContentPageProps(params.slug as string, params.lessonSlug as string)
}

export default LessonContentPage
