import { GetStaticProps } from 'next'
import { useTranslation } from 'react-i18next'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import Glossary from 'components/Glossary'
import { KEYWORDS } from 'constants/index'

export const pageMeta: MetaData = {
  title: 'Glossary',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

function GlossaryPage(): JSX.Element {
  // The page walks the English keyword list, because that is what carries the
  // `glossary` flag, and asks i18next for a translation of each entry. Same
  // lookup shape as the lesson tooltips in Lesson.tsx: i18next echoes the key
  // back when there is no translation, so a returned value still ending in
  // `.definition` / `.keyword` means "untranslated" and we fall back to English.
  //
  // NOTE: this only reaches entries in translation/keywords/<lang>/keywords.json
  // that are keyed by the ENGLISH term. Roughly half of each translated file is
  // keyed by the translated term instead (needed by the lesson tooltips, which
  // look up whatever sits between the backticks in the translated markdown).
  // Until that keying is unified, the localized glossary is partial by
  // construction — see docs/pre-translation-audit.md.
  const { t } = useTranslation('keywords')
  const translated = (key: string, field: 'keyword' | 'definition') => {
    const value = t(`${key}.${field}`)
    return value.endsWith(`.${field}`) ? KEYWORDS[key][field] : value
  }

  const terms = Object.keys(KEYWORDS)
    .filter((k) => KEYWORDS[k]['glossary'])
    .map((k) => ({
      id: k,
      name: translated(k, 'keyword'),
      definition: translated(k, 'definition'),
    }))

  return (
    <Layout page="GLOSSARY">
      <Glossary terms={terms} />
    </Layout>
  )
}

export default GlossaryPage
