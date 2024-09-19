import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import OnboardingModal from 'components/OnboardingModal'

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
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false)

  useEffect(() => {
    setIsOnboardingModalOpen(true)
  }, [])

  return (
    <>
      <OnboardingModal
        isOpen={isOnboardingModalOpen}
        onClose={() => {
          setIsOnboardingModalOpen(false)
        }}
        newsletterOnly={true}
      />
      <HomePage />
    </>
  )
}

export default Newsletter
