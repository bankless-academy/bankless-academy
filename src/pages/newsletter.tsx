import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import { useApp } from 'contexts/AppContext'

const pageMeta: MetaData = {
  title: 'Newsletter',
  description:
    'Sign up for our newsletter to be notified of new lessons and platform updates!',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Newsletter = (): JSX.Element => {
  const { openOnboardingModal } = useApp()

  useEffect(() => {
    openOnboardingModal({ newsletterOnly: true })
  }, [openOnboardingModal])

  return <HomePage />
}

export default Newsletter
