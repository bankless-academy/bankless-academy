import NextHead from 'next/head'

import { PROJECT_NAME, DEFAULT_METADATA } from 'constants/'

export interface PageMetaProps {
  title?: string
  description?: string
  image?: string
}

const HeadMetadata = ({
  title = '',
  description = DEFAULT_METADATA.description,
  image = DEFAULT_METADATA.image,
}: PageMetaProps): React.ReactElement => (
  <NextHead>
    <title>{title ? `${title} | ${PROJECT_NAME}` : PROJECT_NAME}</title>
    <meta name="description" content={description} />
    <meta name="image" content={image} />
    <link
      rel="shortcut icon"
      sizes="180x180"
      type="image/png"
      href="/favicon.png"
    />
  </NextHead>
)

export default HeadMetadata
