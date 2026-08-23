// Generic server-rendered content surface for pages whose interactive view
// is client-rendered (glossary body, homepage/listing link blocks). Rendered
// by _app.tsx OUTSIDE <Web3Providers> — that boundary renders nothing on the
// server, but siblings do — and unmounts the moment the app mounts (the app
// then shows the same content interactively). Same pattern as the lesson
// pages' LessonSeoBlock.
//
// Purity contract: NOTHING here may read localStorage, matchMedia, wallet or
// router state — the server and hydration renders must be identical.
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'

import { MetaData } from 'components/Head'
import { isRtlLang, normalizeLangCode } from 'constants/languages'
import { isAppMounted, onAppMounted } from 'utils/appMounted'

const SeoProse = styled(Box)`
  color: #f0eeff;
  line-height: 1.7;
  overflow-wrap: break-word;
  min-width: 0;
  a {
    color: #b85ff1;
    text-decoration: underline;
    text-underline-position: under;
  }
  ul {
    margin: 1rem 0;
    margin-inline-start: 1.4rem;
  }
  li {
    margin: 0.5rem 0;
  }
  dt {
    font-weight: 700;
    margin-top: 1.4rem;
    scroll-margin-top: 1.5rem;
  }
  dd {
    margin: 0.3rem 0 0;
    opacity: 0.9;
  }
`

const SeoContentBlock = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  // Visible on the server and at hydration; gone as soon as the app paints
  // (and never shown on client-side navigations).
  const [show, setShow] = useState(() => !isAppMounted())
  useEffect(() => {
    if (!isAppMounted()) return onAppMounted(() => setShow(false))
    setShow(false)
  }, [])
  if (!show || !pageMeta?.seoHtml) return <></>

  const lang = normalizeLangCode(pageMeta?.lang)
  const dir = isRtlLang(lang) ? 'rtl' : 'ltr'

  return (
    <>
      {/* page ground pre-JS (body is pure black otherwise) */}
      <Box position="fixed" inset={0} bg="#161515" zIndex={-1} />
      <Box as="section" id="seo-content" color="#f0eeff" dir={dir} lang={lang}>
        <Box maxW="860px" m="auto" px={5} py={{ base: 10, md: 14 }}>
          {pageMeta.seoTitle && (
            <Box
              as="h1"
              fontSize={{ base: '2rem', md: '2.7rem' }}
              fontWeight="700"
              lineHeight="1.15"
              mb={6}
            >
              {pageMeta.seoTitle}
            </Box>
          )}
          <SeoProse dangerouslySetInnerHTML={{ __html: pageMeta.seoHtml }} />
        </Box>
      </Box>
    </>
  )
}

export default SeoContentBlock
