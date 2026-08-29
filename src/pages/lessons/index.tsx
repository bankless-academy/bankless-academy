import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import LessonCards from 'components/LessonCards'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // No `seoHtml`: see the note in pages/index.tsx (removed 2026-08-29 —
  // the pre-mount link list was visible for ~1-7s and duplicated the sitemap).
  const lang = locale || 'en'
  const pageMeta: MetaData = {
    title: 'Lessons',
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
