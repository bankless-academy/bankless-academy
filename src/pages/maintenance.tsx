import React from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import { t } from 'i18next'

const pageMeta: MetaData = {
  title: 'Maintenance',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Maintenance = (): JSX.Element => {
  return <>{t('Maintenance in progress ...')}</>
}

export default Maintenance
