import { GetStaticProps } from 'next'

import { PageMetaProps } from 'components/HeadMetadata'

const pageMeta: PageMetaProps = {
  title: 'About',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const About = (): JSX.Element => {
  return (
    <>
      <h1>About page</h1>
    </>
  )
}

export default About
