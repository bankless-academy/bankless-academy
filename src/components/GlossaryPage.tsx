import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/Layout'
import Glossary from 'components/Glossary'
import { KEYWORDS } from 'constants/index'
import { LanguageCode, applyDocumentLanguage } from 'constants/languages'

// Shared body for both glossary routes: `/glossary` (English) and
// `/glossary/<lang>` (localized, so each language is its own indexable URL
// rather than one page that changes client-side).
const GlossaryPage = ({
  lang,
}: {
  lang?: LanguageCode
}): React.ReactElement => {
  const { t, i18n } = useTranslation('keywords')

  // A localized URL is the source of truth for the language on this page, the
  // same way /lessons/<lang>/<slug> is for lessons.
  useEffect(() => {
    if (lang && i18n.language !== lang) i18n.changeLanguage(lang)
    if (lang) applyDocumentLanguage(lang)
  }, [lang, i18n])

  // The page walks the English keyword list, because that is what carries the
  // `glossary` flag, and asks i18next for a translation of each entry. i18next
  // echoes the key back when there is no translation, so a value still ending
  // in `.definition` / `.keyword` means "untranslated" and falls back to
  // English. Translated keyword files are keyed by the English term, so every
  // entry resolves for a language that has been generated; languages awaiting
  // their wave ship an empty file and fall back one term at a time.
  const translated = (key: string, field: 'keyword' | 'definition') => {
    const value = t(`${key}.${field}`)
    return value.endsWith(`.${field}`) ? KEYWORDS[key][field] : value
  }

  // Sorted by the DISPLAYED name in the active locale, not by the English key:
  // the list is keyed by English term, so without this the French glossary
  // would read in English alphabetical order. localeCompare also puts accented
  // letters where a French reader expects them (Échange next to Echo, not
  // after Z).
  const terms = Object.keys(KEYWORDS)
    .filter((k) => KEYWORDS[k]['glossary'])
    .map((k) => ({
      id: k,
      name: translated(k, 'keyword'),
      definition: translated(k, 'definition'),
    }))
    .sort((a, b) =>
      a.name.localeCompare(b.name, lang || i18n.language, {
        sensitivity: 'base',
      })
    )

  return (
    <Layout page="GLOSSARY">
      <Glossary terms={terms} />
    </Layout>
  )
}

export default GlossaryPage
