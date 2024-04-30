import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import Layout from 'components/Layout'

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
    <Layout lessonType="HANDBOOK">
      <LessonCards lessonType="HANDBOOK" />
    </Layout>
  )
}

export default Lessons
