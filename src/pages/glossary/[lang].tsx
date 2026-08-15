import { GetStaticPaths, GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import GlossaryPage from 'components/GlossaryPage'
import { LANGUAGES, LanguageCode } from 'constants/languages'
import i18next from 'i18next'
import 'utils/translation'
import { loadLanguage } from 'utils/translation'

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
  // The page title is what shows in the tab and in a search result, so use the
  // word in that language ("Glossaire") rather than the English one with the
  // language bolted on. The local name is kept as a suffix only when the term
  // has not been translated yet, so the URLs stay distinguishable.
  // Resources are lazy now, and the server only ever loads English — so
  // getFixedT(lang) returned the raw key and every localized glossary page
  // fell back to "Glossary (Français)" with an English description. Load the
  // language's namespaces before asking for the string.
  await loadLanguage(lang)
  const translatedTitle = i18next.getFixedT(lang, 'common')('Glossary')
  const pageMeta: MetaData = {
    title:
      translatedTitle && translatedTitle !== 'Glossary'
        ? translatedTitle
        : `Glossary (${language?.localName || lang})`,
    // NOTE: description still falls back to the English default. Translating
    // it needs a new key in all 10 locales, which is a content task rather
    // than a code one — validate-i18n rejects a t() call with no en key.
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
