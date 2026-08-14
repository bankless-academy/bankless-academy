import { GetStaticPaths, GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import GlossaryPage from 'components/GlossaryPage'
import { LANGUAGES, LanguageCode } from 'constants/languages'

// One indexable URL per language, mirroring /lessons/<lang>/<slug>. A single
// page that swaps language client-side is invisible to search engines; this
// gives each translation its own crawlable address.
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: LANGUAGES.filter((l) => l.code !== 'en').map((l) => ({
    params: { lang: l.code },
  })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const lang = params?.lang as LanguageCode
  const language = LANGUAGES.find((l) => l.code === lang)
  const pageMeta: MetaData = {
    title: `Glossary (${language?.localName || lang})`,
  }
  return { props: { pageMeta, lang } }
}

export default function LocalizedGlossary({
  lang,
}: {
  lang: LanguageCode
}): JSX.Element {
  return <GlossaryPage lang={lang} />
}
