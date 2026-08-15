// /lessons/<slug>/content — the English reading view.
//
// A dedicated route rather than another branch of /lessons/[...slug].tsx: this
// page is server-rendered (nolayout + ssr) while the catch-all is entirely
// client-rendered, and keeping them in one file meant one getStaticProps
// serving two page types with two different rendering models.
//
// Next.js gives a named dynamic segment priority over the sibling catch-all,
// so this wins for the 2-segment shape and [...slug] keeps everything else.
import { GetStaticPaths, GetStaticProps } from 'next'

import LessonContentPage from 'components/LessonContentPage'

export const getStaticPaths: GetStaticPaths = async () => {
  const { englishContentPaths } = await import('utils/lessonContentPage')
  return { paths: englishContentPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getContentPageProps } = await import('utils/lessonContentPage')
  return getContentPageProps('en', params.slug as string)
}

export default LessonContentPage
