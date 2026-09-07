import { GetStaticProps } from 'next'
import i18next from 'i18next'

import { MetaData } from 'components/Head'
import 'utils/translation'
import { loadLanguage } from 'utils/translation'
import Layout from 'layout/Layout'
import LessonCards from 'components/LessonCards'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  // No `seoHtml`: see the note in pages/index.tsx (removed 2026-08-29 —
  // the pre-mount link list was visible for ~1-7s and duplicated the sitemap).
  const lang = locale || 'en'
  // Localized <title> in the served HTML, like the glossary page: the server
  // only has English loaded, so load the language before asking for the key.
  await loadLanguage(lang)
  const pageMeta: MetaData = {
    title: i18next.getFixedT(lang, 'common')('Lessons'),
    lang,
  }
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return (
    <>
      <LessonCards level="Essentials" />
      <LessonCards level="Level 1" />
    </>
  )
}

// PageLayout is attached here, not rendered inside the page - see _app.tsx.
Lessons.getLayout = (page: JSX.Element): JSX.Element => (
  <Layout page="LESSON">{page}</Layout>
)

export default Lessons
