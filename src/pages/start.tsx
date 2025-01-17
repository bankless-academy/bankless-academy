import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import OnboardingModal from 'components/OnboardingModal'

const pageMeta: MetaData = {
  title: 'Start Learning',
  description: 'Your crypto journey starts here.',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Start = (): JSX.Element => {
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
        forceOnboarding={true}
      />
      <HomePage />
    </>
  )
}

export default Start
