import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import Layout from 'components/Layout'

export const pageMeta: MetaData = {
  title: 'Level 1',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return (
    <Layout level="Level 1">
      <LessonCards level="Level 1" />
    </Layout>
  )
}

export default Lessons
