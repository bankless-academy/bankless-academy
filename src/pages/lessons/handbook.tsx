import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import Layout from 'layout/Layout'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // No `seoHtml`: see the note in pages/index.tsx (removed 2026-08-29 —
  // the pre-mount link list was visible for ~1-7s and duplicated the sitemap).
  const lang = locale || 'en'
  const pageMeta: MetaData = {
    title: 'Handbook',
    lang,
  }
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return <LessonCards lessonType="HANDBOOK" />
}

// PageLayout is attached here, not rendered inside the page - see _app.tsx.
Lessons.getLayout = (page: JSX.Element): JSX.Element => (
  <Layout page="HANDBOOK">{page}</Layout>
)

export default Lessons
