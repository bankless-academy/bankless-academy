import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import Layout from 'layout/Layout'

export const pageMeta: MetaData = {
  title: 'Handbook',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return (
    <Layout page="HANDBOOK">
      <LessonCards lessonType="HANDBOOK" />
    </Layout>
  )
}

export default Lessons
