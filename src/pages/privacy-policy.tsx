import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import { PRIVACY_POLICY_HTML } from 'constants/privacyPolicy'

// Content lives in constants/privacyPolicy.ts — see the note there for why
// this is a static page rather than the Notion route it used to be.

export const getStaticProps: GetStaticProps = async () => {
  const pageMeta: MetaData = {
    title: 'Privacy Policy',
    description:
      'How Bankless Academy collects, uses and deletes personal data, and how to request deletion.',
    // Rendered by _app's SeoContentBlock, OUTSIDE <Web3Providers>, so the text
    // is in the served HTML for crawlers and for anyone without JavaScript.
    seoTitle: 'Privacy Policy',
    seoHtml: PRIVACY_POLICY_HTML,
    lang: 'en',
  }
  return { props: { pageMeta } }
}

function PrivacyPolicy(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Box maxW="860px" m="auto" px={4} py={{ base: 8, md: 12 }}>
      <Box
        as="h1"
        fontSize={{ base: '2rem', md: '2.6rem' }}
        fontWeight="700"
        mb={6}
      >
        {t('Privacy Policy')}
      </Box>
      <Box
        sx={{
          h2: { fontSize: '1.3rem', fontWeight: 700, mt: 8, mb: 2 },
          p: { mb: 4, lineHeight: 1.7 },
          a: { color: '#b85ff1', textDecoration: 'underline' },
        }}
        dangerouslySetInnerHTML={{ __html: PRIVACY_POLICY_HTML }}
      />
    </Box>
  )
}

// PageLayout is attached here, not rendered inside the page - see _app.tsx.
PrivacyPolicy.getLayout = (page: JSX.Element): JSX.Element => (
  <Layout page="">{page}</Layout>
)

export default PrivacyPolicy
