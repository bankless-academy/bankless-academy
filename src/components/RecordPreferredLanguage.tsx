import { useEffect } from 'react'

import { writePreferredLanguage } from 'constants/languages'

/**
 * Records the reader's language on a page that renders outside AppProvider.
 *
 * AppContext normally does this, but the lesson content pages take the
 * `nolayout` + `ssr` branch of _app.tsx to escape NonSSRWrapper, and that
 * branch mounts neither AppProvider nor the router-driven effect. Without
 * this, someone landing on /lessons/es/<slug>/content from a search result
 * keeps whatever language was stored before (English, for a first visit), so
 * the logo back to /lessons and every later page render in the wrong one.
 *
 * Mirrors AppContext's rule exactly: only an explicit language segment records
 * a preference. The English URL is the no-segment case, which renders English
 * without recording — otherwise a Spanish reader who opens one English page
 * would be switched to English permanently.
 *
 * Renders nothing, and touches localStorage only in an effect, so it adds no
 * markup to diff and cannot reintroduce a hydration mismatch.
 */
const RecordPreferredLanguage = ({ lang }: { lang: string }): null => {
  useEffect(() => {
    if (lang && lang !== 'en') writePreferredLanguage(lang)
  }, [lang])
  return null
}

export default RecordPreferredLanguage
