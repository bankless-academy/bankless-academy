// Server-rendered reading view of a lesson. Deliberately free of
// localStorage, matchMedia, wallet state and router singletons: this component
// renders identically on the server and the client, which is what lets the
// content page opt out of the app-wide NonSSRWrapper and actually reach a
// crawler. Anything added here that reads user state will reintroduce a
// hydration mismatch and silently undo that.
import { Box, Button, Image, Link as ChakraLink } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

import { LessonType } from 'entities/lesson'
import { LANGUAGES } from 'constants/languages'
import { ArticleHeading, contentAlternates } from 'utils/lessonContent'

const Prose = styled(Box)`
  color: #f0eeff;
  line-height: 1.75;
  font-size: 1.05rem;
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
  /* Images are authored at slide scale; cap them so a phone never scrolls
     sideways. The view this replaces hard-coded width: 1100px. */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.4rem auto;
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

const LessonArticle = ({
  lesson,
  articleHtml,
  headings,
  lang,
  strings,
}: {
  lesson: LessonType
  articleHtml: string
  headings: ArticleHeading[]
  lang: string
  strings: { startLesson: string; contents: string; deprecated?: string }
}): React.ReactElement => {
  const alternates = contentAlternates(lesson)
  // This page renders outside AppProvider, so <html dir> is never set for it
  // server-side. Carrying dir/lang on the outer Box is what a crawler (and the
  // pre-hydration paint) actually sees; Head.tsx repairs <html> after mount.
  // Registry lookup is static, so server and client agree (no hydration risk).
  const dir = LANGUAGES.find((l) => l.code === lang)?.dir || 'ltr'
  const lessonHref =
    lang === 'en' ? `/lessons/${lesson.slug}` : `/lessons/${lang}/${lesson.slug}`
  // The lessons index has no localized variant on purpose: isLocalizablePath()
  // excludes it, so it renders in the reader's stored preference. There is no
  // ?lang= param anywhere in the app.
  const homeHref = '/lessons'

  return (
    <Box bg="#1b1533" minH="100vh" color="#f0eeff" dir={dir} lang={lang}>
      <Box as="header" borderBottom="1px solid rgba(255,255,255,.1)" py={4}>
        <Box maxW="860px" m="auto" px={5}>
          <ChakraLink href={homeHref} display="inline-block">
            <Image
              src="/images/BanklessAcademy.svg"
              alt="Bankless Academy"
              h="28px"
            />
          </ChakraLink>
        </Box>
      </Box>

      <Box as="main" maxW="860px" m="auto" px={5} py={{ base: 8, md: 12 }}>
        <Box as="h1" fontSize={{ base: '2rem', md: '2.7rem' }} fontWeight="700" lineHeight="1.15" mb={4}>
          {lesson.name}
        </Box>
        {strings.deprecated && (
          <Box
            mb={6}
            p="12px 16px"
            borderRadius="8px"
            border="1px solid orange"
            background="rgba(255, 165, 0, 0.1)"
          >
            {strings.deprecated}
          </Box>
        )}
        {lesson.description && (
          <Box fontSize="1.15rem" opacity={0.85} mb={6}>
            {lesson.description}
          </Box>
        )}

        {/* Same variant and size as the footer CTA, so both are the 60px pill.
            `primaryBig` compensates for its 1px hover border with 23px padding,
            which lines up only at size="lg" (24px) — pairing a variant with the
            size it was calibrated for is what stops the button resizing on
            hover. Rendered as an anchor rather than a button inside a link:
            <a><button> is invalid HTML and gives two competing hover targets. */}
        <Button as="a" href={lessonHref} variant="primaryBig" size="lg">
          {strings.startLesson}
        </Button>

        {alternates.length > 1 && (
          <Box as="nav" mt={8} display="flex" flexWrap="wrap" gap={2}>
            {alternates.map((a) =>
              a.hreflang === lang ? (
                <Box
                  key={a.hreflang}
                  px={3}
                  py={1}
                  borderRadius="6px"
                  fontSize="0.85rem"
                  bg="#3f3154"
                  fontWeight="600"
                >
                  {a.label}
                </Box>
              ) : (
                <ChakraLink
                  key={a.hreflang}
                  href={a.href}
                  px={3}
                  py={1}
                  borderRadius="6px"
                  fontSize="0.85rem"
                  border="1px solid #3f3154"
                  _hover={{ textDecoration: 'none', bg: '#3f3154' }}
                >
                  {a.label}
                </ChakraLink>
              )
            )}
          </Box>
        )}

        {headings.length > 2 && (
          <Box
            as="nav"
            aria-label={strings.contents}
            mt={10}
            p={5}
            borderRadius="10px"
            bg="rgba(255,255,255,.04)"
            border="1px solid rgba(255,255,255,.08)"
          >
            <Box fontWeight="700" mb={3}>
              {strings.contents}
            </Box>
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

        <Prose mt={10} dangerouslySetInnerHTML={{ __html: articleHtml }} />

        <Box
          as="footer"
          mt={14}
          pt={8}
          borderTop="1px solid rgba(255,255,255,.15)"
          textAlign="center"
        >
          <Button as="a" href={lessonHref} variant="primaryBig" size="lg">
            {strings.startLesson}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default LessonArticle
