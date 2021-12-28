import { GetStaticProps } from 'next'

import { PageMetaProps } from 'components/Head'

const pageMeta: PageMetaProps = {
  title: 'About',
  description: '...',
  image: '...',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <>
      <h1>About page</h1>
    </>
  )
}

export default Page
