import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import OnboardingModal from 'components/OnboardingModal'
import { DOMAIN_URL_, LESSONS } from 'constants/index'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { lesson, badge, referrer, r } = query

  const pageMeta: MetaData = {
    title: 'Start Learning',
    description: 'Your crypto journey starts here.',
    canonical: '/',
  }

  if (lesson) {
    const currentLesson = LESSONS.find((l) => l.slug === lesson)
    // TODO: add support for lang?
    pageMeta.image = currentLesson?.socialImageLink
  } else if (badge) {
    pageMeta.image = `${DOMAIN_URL_}/api/og/social?badge=${badge}&address=${referrer}`
  } else if (referrer) {
    pageMeta.image = `${DOMAIN_URL_}/api/og/social?address=${referrer}${
      r ? `&r=${r}` : ''
    }`
  }

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
