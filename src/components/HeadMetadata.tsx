import NextHead from 'next/head'
import { useRouter } from 'next/router'

import { PROJECT_NAME, DEFAULT_METADATA } from 'constants/'

const domain = process.env.VERCEL_URL || ''

export interface PageMetaProps {
  title?: string
  description?: string
  image?: string
}

const HeadMetadata = ({
  title = '',
  description = DEFAULT_METADATA.description,
  image = DEFAULT_METADATA.image,
}: PageMetaProps): React.ReactElement => {
  const router = useRouter()
  const metaUrl = `${domain}${router.asPath}`
  const metaTitle = title ? `${title} | ${PROJECT_NAME}` : PROJECT_NAME
  return (
    <NextHead>
      <title>{metaTitle}</title>
      <meta name="description" content={description} />
      {/* Open Graph / Facebook (needs to be < 300kb to work on WhatsApp) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      {/* Twitter */}
      <meta property="twitter:url" content={metaUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link
        rel="shortcut icon"
        sizes="180x180"
        type="image/png"
        href="/favicon.png"
      />
    </NextHead>
  )
}

export default HeadMetadata
