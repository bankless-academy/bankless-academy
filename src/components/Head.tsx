import NextHead from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { hotjar } from 'react-hotjar'

import {
  PROJECT_NAME,
  DOMAIN_PROD,
  DOMAIN_URL,
  DEFAULT_METADATA,
  FAVICON,
  UMAMI_PROD,
} from 'constants/index'

export interface MetaData {
  title?: string
  description?: string
  image?: string
  isLesson?: boolean
}

const umamiWebsiteId =
  typeof window !== 'undefined' &&
  window.location.hostname === DOMAIN_PROD &&
  UMAMI_PROD
    ? // prod
      UMAMI_PROD
    : // dev
      'e84c3a1e-0ab0-4502-b0fe-67d660765535'
const umamiDomain = 'https://stats.banklessacademy.com/stats.js'

const Head = ({ metadata }: { metadata: MetaData }): React.ReactElement => {
  const router = useRouter()
  const title = metadata?.title
    ? `${metadata.title} | ${PROJECT_NAME}`
    : PROJECT_NAME
  const description = metadata?.description || DEFAULT_METADATA.description
  const image = metadata?.image
    ? `${DOMAIN_URL}${metadata?.image}`
    : DEFAULT_METADATA.image
  const url = `${DOMAIN_URL}${router.asPath}`
  return (
    <>
      <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph / Facebook (needs to be < 300kb to work on WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        {/* Twitter */}
        <meta property="twitter:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* shortcut icon */}
        <link
          rel="shortcut icon"
          sizes="200x200"
          type="image/png"
          href={FAVICON}
        />
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </NextHead>
      {/* Hotjar */}
      {typeof window !== 'undefined' &&
      window.location.hostname === 'app.banklessacademy.com'
        ? hotjar.initialize(2568813, 6)
        : null}
      {/* Umami */}
      <Script
        async
        defer
        data-website-id={umamiWebsiteId}
        src={umamiDomain}
      ></Script>
    </>
  )
}

export default Head
