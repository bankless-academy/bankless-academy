import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'

const pageMeta: PageMetaProps = {
  title: 'About',
  description: '...',
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
