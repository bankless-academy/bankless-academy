import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import Layout from 'layout/Layout'
import Glossary from 'components/Glossary'
import { KEYWORDS } from 'constants/index'

export const pageMeta: MetaData = {
  title: 'Glossary',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

function GlossaryPage(): JSX.Element {
  const terms = Object.keys(KEYWORDS)
    .map((k) => {
      return {
        id: k,
        name: KEYWORDS[k]['keyword'],
        definition: KEYWORDS[k]['definition'],
        glossary: KEYWORDS[k]['glossary'],
      }
    })
    .filter((k) => k.glossary)

  return (
    <Layout page="GLOSSARY">
      <Glossary terms={terms} />
    </Layout>
  )
}

export default GlossaryPage
