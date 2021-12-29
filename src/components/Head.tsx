import NextHead from 'next/head'

import { PROJECT_NAME } from 'constants/'

export interface PageMetaProps {
  title: string | string
  description: string
  image: string
}

const Head = ({
  title = '',
  description = '',
  image = '',
}: PageMetaProps): React.ReactElement => {
  return (
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
}

export default Head
