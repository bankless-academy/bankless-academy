import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import GlossaryPage from 'components/GlossaryPage'

export const pageMeta: MetaData = {
  title: 'Glossary',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

export default function Glossary(): JSX.Element {
  return <GlossaryPage />
}
