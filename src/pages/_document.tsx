import { Html, Head, Main, NextScript } from 'next/document'

// Static defaults only. Routing is path-segment based (not Next i18n), so the
// server cannot know the reader's language here; the real lang/dir are applied
// per page: client-side by applyDocumentLanguage (constants/languages) via
// AppContext and Head, and on the server-rendered /content pages as attributes
// on LessonArticle's outer Box, which is what a crawler actually sees.
export default function Document(): JSX.Element {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
