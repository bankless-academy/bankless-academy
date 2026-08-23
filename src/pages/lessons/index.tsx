import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import LessonCards from 'components/LessonCards'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Crawlable link list (the interactive cards are client-rendered) — served
  // via _app's SeoContentBlock, unmounted when the app arrives.
  const { lessonListSeoHtml, uiString } = await import('utils/seoContent')
  const lang = locale || 'en'
  const pageMeta: MetaData = {
    title: 'Lessons',
    seoTitle: uiString(lang, 'common', 'Lessons'),
    seoHtml: lessonListSeoHtml(lang, 'lessons'),
    lang,
  }
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return (
    <Layout page="LESSON">
      <>
        <LessonCards level="Essentials" />
        <LessonCards level="Level 1" />
      </>
    </Layout>
  )
}

export default Lessons
