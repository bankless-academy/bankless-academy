import React, { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import OnboardingModal from 'components/OnboardingModal'
import { DOMAIN_URL_, LESSONS } from 'constants/index'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { lesson, badge, referral, r } = query

  const pageMeta: MetaData = {
    title: 'Start Learning',
    description: 'Your crypto journey starts here.',
    canonical: '/',
  }

  if (lesson) {
    const currentLesson = LESSONS.find((l) => l.slug === lesson)
    // TODO: add support for lang?
    pageMeta.title = currentLesson?.name
    pageMeta.description = currentLesson?.description
    pageMeta.image = currentLesson?.socialImageLink
  } else if (badge) {
    pageMeta.title = 'New Badge Unlocked'
    pageMeta.image = `${DOMAIN_URL_}/api/og/social?badge=${badge}&address=${referral}`
  } else if (referral) {
    pageMeta.title = 'Check out my Explorer Profile'
    pageMeta.image = `${DOMAIN_URL_}/api/og/social?address=${referral}${
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
