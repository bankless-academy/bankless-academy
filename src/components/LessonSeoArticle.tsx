// The full lesson text on /lessons/<slug>, server-rendered below the
// interactive app so the lesson URL itself carries the prose for crawlers.
//
// For PEOPLE the prose is collapsed by default inside a native <details>, so
// the page stays short — the section shows just the "Lesson Content" summary,
// a Start Lesson CTA and the language links. The content is still in the
// served DOM (Google gives collapsed/expandable content full weight under
// mobile-first indexing), and no JS is needed to expand it.
//
// Same contract as the rest of the SEO surface: NOTHING here may read
// localStorage, matchMedia, wallet or router state — it must render
// identically on server and client.
import { Box, Button, Link as ChakraLink } from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import React from 'react'

import { ArticleHeading } from 'utils/lessonContent'
import { LessonType } from 'entities/lesson'
import { LANGUAGES, writePreferredLanguage } from 'constants/languages'

// Typography for the rendered lesson markdown (inherited from the retired
// /content reading page, whose styles were tuned for exactly this HTML).
const Prose = styled(Box)`
  color: #f0eeff;
  line-height: 1.75;
  font-size: 1.05rem;
  /* Long unbreakable strings (addresses, hex keys, URLs) must wrap, not
     size the layout: measured at 375px, a 60-char hex token in PLAIN TEXT
     (not code) set the panel's content-size contribution to 681px and the
     shared grid track widened to match — clipping the LESSON HERO above, not
     the panel. 'anywhere' (unlike 'break-word') reduces min/max-content
     contributions, and it only breaks words that cannot fit a line, so
     normal prose is unaffected. */
  overflow-wrap: anywhere;
  min-width: 0;
  a,
  code {
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  pre {
    max-width: 100%;
    overflow-x: auto;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 3rem 0 0.9rem;
    line-height: 1.3;
    scroll-margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  h2:first-of-type {
    border-top: 0;
    padding-top: 0;
    margin-top: 1rem;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 1.8rem 0 0.6rem;
  }
  p {
    margin: 0.9rem 0;
  }
  ul,
  ol {
    margin: 0.9rem 0;
    margin-inline-start: 1.4rem;
  }
  li {
    margin: 0.4rem 0;
  }
  blockquote {
    border-inline-start: 3px solid #916ab8;
    padding-inline-start: 1rem;
    margin: 1rem 0;
    opacity: 0.9;
  }
  code {
    background: rgba(145, 106, 184, 0.22);
    padding: 0.1em 0.35em;
    border-radius: 4px;
    font-size: 0.95em;
    /* Latin terms embedded in RTL prose must stay one directional run. */
    unicode-bidi: isolate;
  }
  a {
    color: #b85ff1;
    text-decoration: underline;
    text-underline-position: under;
  }
  /* Images are authored at slide scale; cap them well below the column width
     so the reading view stays text-dense instead of a slideshow dump. */
  img {
    max-width: min(100%, 480px);
    height: auto;
    display: block;
    margin: 1.4rem 0;
    border-radius: 8px;
  }
  table {
    width: 100%;
    display: block;
    overflow-x: auto;
  }
  hr {
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 2rem 0;
  }
`

// menuBarWidth in layout/Layout.tsx, and the divider the app draws on its
// content area (marginInlineStart + borderInlineStart, 2px #3D3838). The
// desktop rail turns position:fixed after 80px of scroll and stays on screen
// down this whole section, so the article continues the exact same gutter AND
// divider line — the page reads as one continuous layout. 801px matches
// useSmallScreen. borderInlineStart/marginInlineStart pass through as real
// CSS logical properties (safe under RTL — see docs/rtl-audit.md).
const RAIL_GUTTER_QUERY = '@media (min-width: 801px)'
const RAIL_GUTTER = {
  marginInlineStart: '230px',
  borderInlineStart: '2px solid #3D3838',
}

const LessonSeoArticle = ({
  articleHtml,
  headings,
  lang,
  dir,
  contentsLabel,
  startLessonLabel,
  lesson,
  alwaysExpanded,
  inApp,
}: {
  articleHtml: string
  headings: ArticleHeading[]
  lang: string
  dir: 'ltr' | 'rtl'
  contentsLabel: string
  startLessonLabel: string
  lesson?: LessonType
  /** Handbooks: the article IS the page content, shown only until the
   * interactive app mounts — render it open, with no collapse affordance. */
  alwaysExpanded?: boolean
  /** Rendered inside the app's PageLayout (lessons/[slug].tsx): the layout
   * already provides the rail gutter/divider and the mobile bottom-bar
   * clearance, so the standalone wrappers are skipped. */
  inApp?: boolean
}): React.ReactElement => {
  // Visible, crawlable links between the language versions of this lesson
  // (the hreflang cluster in <head> annotates; these let readers and crawlers
  // actually navigate). next/link, not plain anchors: it server-renders as a
  // normal locale-prefixed <a> (crawlable) but upgrades clicks to a smooth
  // client-side locale switch, same as the nav's LanguageSelector. The Next
  // router context is app-wide, so this works outside AppProvider.
  const languageLinks =
    lesson?.slug && (lesson.languages || []).length > 0
      ? ['en', ...(lesson.languages || []).filter((l) => l !== 'en')].map(
          (l) => ({
            code: l,
            label: LANGUAGES.find((x) => x.code === l)?.localName || l,
          })
        )
      : []

  return (
    // Deliberately NO opaque background: an opaque bg here paints OVER the
    // app region's 80px spotlight glow (a later sibling's background covers
    // an earlier sibling's box-shadow) and clipped it in a hard horizontal
    // line. Transparent lets the glow bleed and fade naturally into the page.
    <Box
      as="section"
      id="article"
      color="#f0eeff"
      dir={dir}
      lang={lang}
      // grid-item shrink permission + hard backstop against width blowout.
      // contain:inline-size is the structural guarantee: the section's size
      // becomes independent of its contents, so nothing inside can EVER
      // widen the shared grid track (which is what clipped the lesson hero
      // above the panel on mobile).
      minW={0}
      maxW="100%"
      overflowX="hidden"
      sx={{ contain: 'inline-size' }}
    >
      {/* Standalone (pre-app) copy: continue the rail gutter/divider and
          clear the fixed 81px mobile action bar with base pb. In-app the
          PageLayout provides both, so neither wrapper concern applies. */}
      <Box sx={inApp ? undefined : { [RAIL_GUTTER_QUERY]: RAIL_GUTTER }}>
        <Box
          maxW="860px"
          m={inApp ? '0 auto' : 'auto'}
          px={5}
          pt={inApp ? { base: 6, md: 8 } : { base: 10, md: 12 }}
          pb={inApp ? { base: 6, md: 10 } : { base: '120px', md: 14 }}
        >
          <Box
            as={alwaysExpanded ? 'div' : 'details'}
            borderRadius="14px"
            border="1px solid rgba(255,255,255,.1)"
            // subtle brand-purple sheen so the card reads as part of the app,
            // not a bare line on a void
            background="linear-gradient(135deg, rgba(129,92,181,.14) 0%, rgba(63,49,84,.10) 45%, rgba(255,255,255,.02) 100%)"
            overflow="hidden"
            sx={{
              // custom chevron: rotates to point down when open. !important
              // beats the RTL base-rotation rule below.
              '&[open] .seo-chevron': {
                transform: 'rotate(90deg) !important',
              },
            }}
          >
            <Box
              as={alwaysExpanded ? 'div' : 'summary'}
              cursor={alwaysExpanded ? 'default' : 'pointer'}
              display="flex"
              alignItems="center"
              gap={3}
              px={{ base: 5, md: 7 }}
              py={{ base: 4, md: 5 }}
              fontSize={{ base: '1.25rem', md: '1.5rem' }}
              fontWeight="700"
              lineHeight="1.3"
              sx={{
                // the native marker is tiny and inconsistent (invisible on
                // some mobile browsers) — replaced by the chevron below
                listStyle: 'none',
                '&::-webkit-details-marker': { display: 'none' },
                ...(alwaysExpanded
                  ? {}
                  : { '&:hover': { background: 'rgba(255,255,255,.05)' } }),
              }}
            >
              {!alwaysExpanded && (
                <Box
                  as="span"
                  className="seo-chevron"
                  fontSize="1rem"
                  transition="transform .15s ease"
                  sx={{
                    transform: 'rotate(0deg)',
                    // collapsed points inline-forward: right in LTR, left in RTL
                    '[dir="rtl"] &': { transform: 'rotate(180deg)' },
                  }}
                >
                  ▶
                </Box>
              )}
              {contentsLabel}
            </Box>
            <Box px={{ base: 5, md: 7 }} pb={{ base: 6, md: 8 }}>
            {/* "read this in another language" — most useful right where a
                reader decides to read; crawlable either way */}
            {languageLinks.length > 1 && (
              <Box mt={6} display="flex" flexWrap="wrap" gap={2}>
                {languageLinks.map((l) =>
                  l.code === lang ? (
                    <Box
                      key={l.code}
                      px={3}
                      py={1}
                      borderRadius="6px"
                      fontSize="0.85rem"
                      bg="#3f3154"
                      fontWeight="600"
                    >
                      {l.label}
                    </Box>
                  ) : (
                    // href stays un-prefixed; the locale prop adds the prefix
                    // (a pre-prefixed href would get the current locale
                    // prepended again)
                    <NextLink
                      key={l.code}
                      href={`/lessons/${lesson.slug}`}
                      locale={l.code}
                      passHref
                      legacyBehavior
                    >
                      <ChakraLink
                        px={3}
                        py={1}
                        borderRadius="6px"
                        fontSize="0.85rem"
                        border="1px solid #3f3154"
                        _hover={{ textDecoration: 'none', bg: '#3f3154' }}
                        // Clicking a chip is a deliberate language choice, so
                        // record it BEFORE navigating — like the nav selector
                        // does. Without this, picking English navigated to the
                        // en URL and AppContext instantly bounced back to the
                        // stored preference (the auto-replace doing its job).
                        onClick={() => writePreferredLanguage(l.code)}
                      >
                        {l.label}
                      </ChakraLink>
                    </NextLink>
                  )
                )}
              </Box>
            )}
            {headings.length > 2 && (
              <Box
                as="nav"
                aria-label={contentsLabel}
                mt={6}
                p={5}
                borderRadius="10px"
                bg="rgba(255,255,255,.04)"
              >
                <Box as="ol" ps={5} sx={{ li: { margin: '.3rem 0' } }}>
                  {headings.map((h) => (
                    <li key={h.id}>
                      <ChakraLink href={`#${h.id}`} color="#b85ff1">
                        {h.text}
                      </ChakraLink>
                    </li>
                  ))}
                </Box>
              </Box>
            )}
              <Prose
                mt={6}
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />
              {/* CTA for readers who reached the end of the text — the one
                  place a Start Lesson button earns its keep here */}
              <Box mt={10} textAlign="center">
                <Button as="a" href="#" variant="primaryBig" size="lg">
                  {startLessonLabel}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LessonSeoArticle
