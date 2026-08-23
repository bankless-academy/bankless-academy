import { Html, Head, Main, NextScript } from 'next/document'
import type { DocumentProps } from 'next/document'

import { isRtlLang } from 'constants/languages'

// Routing is Next i18n locale-based, so the server knows the language here:
// Next sets <html lang> itself from the locale, and `dir` is derived from the
// registry. applyDocumentLanguage (constants/languages) remains the CLIENT
// authority and keeps both attributes in sync on soft navigations, which a
// static document attribute cannot cover.
export default function Document(props: DocumentProps): JSX.Element {
  const locale = props.__NEXT_DATA__?.locale || 'en'
  return (
    <Html lang={locale} dir={isRtlLang(locale) ? 'rtl' : 'ltr'}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
