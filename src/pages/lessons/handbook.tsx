import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import Layout from 'layout/Layout'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // Crawlable link list (the interactive cards are client-rendered) — served
  // via _app's SeoContentBlock, unmounted when the app arrives.
  const { lessonListSeoHtml, uiString } = await import('utils/seoContent')
  const lang = locale || 'en'
  const pageMeta: MetaData = {
    title: 'Handbook',
    seoTitle: uiString(lang, 'common', 'Handbook'),
    seoHtml: lessonListSeoHtml(lang, 'handbooks'),
    lang,
  }
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return (
    <Layout page="HANDBOOK">
      <LessonCards lessonType="HANDBOOK" />
    </Layout>
  )
}

export default Lessons
