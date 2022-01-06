import NextHead from 'next/head'
import { useRouter } from 'next/router'
import { hotjar } from 'react-hotjar'

import { PROJECT_NAME, DOMAIN, DEFAULT_METADATA } from 'constants/'

export interface MetaData {
  title?: string
  description?: string
  image?: string
}

const VERCEL_ENV = process.env.VERCEL_ENV
const UMAMI = process.env.UMAMI

const umamiWebsiteId =
  VERCEL_ENV === 'production' && UMAMI
    ? UMAMI
    : 'e84c3a1e-0ab0-4502-b0fe-67d660765535'
const umamiDomain = 'https://umami.bankless.community/umami.js'

const Head = ({ metadata }: { metadata: MetaData }): React.ReactElement => {
  const router = useRouter()
  const title = metadata?.title
    ? `${metadata.title} | ${PROJECT_NAME}`
    : PROJECT_NAME
  const description = metadata?.description || DEFAULT_METADATA.description
  const image = metadata?.image || DEFAULT_METADATA.image
  const url = `${DOMAIN}${router.asPath}`
  return (
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
      {/* Umami */}
      <script async defer data-website-id={umamiWebsiteId} src={umamiDomain} />
      {/* Hotjar */}
      {typeof window !== 'undefined' &&
      window.location.hostname === 'app.banklessacademy.com'
        ? hotjar.initialize(2568813, 6)
        : null}
      {/* shortcut icon */}
      <link
        rel="shortcut icon"
        sizes="180x180"
        type="image/png"
        href="/favicon.png"
      />
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </NextHead>
  )
}

export default Head
