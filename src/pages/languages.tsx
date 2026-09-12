import { Box, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import NextLink from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import { LANGUAGES, writePreferredLanguage } from 'constants/languages'

// Why this page exists: nothing on the site linked to the 28 locale roots.
// `LanguageSelector` is a Chakra Popover, so its links do not exist in the DOM
// until a reader clicks it — measured consequence (URL Inspection, 2026-09-07):
// 10 of the localized shells (/de, /es, /ru, /it, /ko...) had NEVER been
// crawled, with the sitemap as their only discovery path. This gives every
// locale root a real inbound link from static HTML.
//
// The list is derived from the registry, so a new language appears here the
// moment it is registered. Never hand-maintain a copy.

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const getStaticProps: GetStaticProps = async () => {
  // The interactive tree is client-only (see "Hybrid lesson pages" in
  // CLAUDE.md), so the crawlable copy is built here and rendered by _app's
  // SeoContentBlock, OUTSIDE <Web3Providers>. That block is what a crawler
  // sees; it unmounts as soon as the app paints.
  const items = LANGUAGES.map(
    (l) =>
      `<li><a href="${l.code === 'en' ? '/' : `/${l.code}`}" hreflang="${
        l.code
      }"><strong lang="${l.code}" dir="${l.dir}">${esc(
        l.localName
      )}</strong> <span>${esc(l.name)}</span></a></li>`
  ).join('')

  const pageMeta: MetaData = {
    title: 'Languages',
    description: `Bankless Academy in ${LANGUAGES.length} languages. Every lesson, the full glossary and the entire interface, translated.`,
    seoTitle: `Bankless Academy in ${LANGUAGES.length} languages`,
    seoHtml: `<p>Every lesson, the full glossary and the entire interface, in ${LANGUAGES.length} languages.</p><ul>${items}</ul>`,
    lang: 'en',
  }
  return { props: { pageMeta } }
}

function Languages(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Box maxW="860px" m="auto" px={4} py={{ base: 8, md: 12 }}>
      <Box as="h1" fontSize={{ base: '2rem', md: '2.6rem' }} fontWeight="700" mb={3}>
        {t('Bankless Academy in {{count}} languages', {
          count: LANGUAGES.length,
        })}
      </Box>
      <Box opacity={0.8} mb={8}>
        {t('Every lesson, the full glossary and the entire interface.')}
      </Box>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={3}>
        {LANGUAGES.map((l) => (
          <NextLink
            key={l.code}
            // href stays un-prefixed; `locale` adds the prefix. A pre-prefixed
            // href would get the ACTIVE locale prepended on top of it.
            href="/"
            locale={l.code}
            passHref
            legacyBehavior
          >
            <ChakraLink
              // Record the choice before navigating, or AppContext's
              // stored-preference auto-replace bounces the reader straight
              // back — same rule as the nav selector and the lesson chips.
              onClick={() => writePreferredLanguage(l.code)}
              border="1px solid #ffffff28"
              borderRadius="8px"
              px={4}
              py={3}
              _hover={{ background: '#ffffff12', textDecoration: 'none' }}
            >
              <Box as="span" display="block" fontWeight="600" lang={l.code} dir={l.dir}>
                {l.localName}
              </Box>
              <Box as="span" display="block" fontSize="sm" opacity={0.6}>
                {l.name}
              </Box>
            </ChakraLink>
          </NextLink>
        ))}
      </SimpleGrid>
    </Box>
  )
}

// PageLayout is attached here, not rendered inside the page - see _app.tsx.
Languages.getLayout = (page: JSX.Element): JSX.Element => (
  <Layout page="">{page}</Layout>
)

export default Languages
