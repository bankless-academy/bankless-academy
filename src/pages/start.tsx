import { withSsrTiming } from 'utils/ssrTiming'
import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'

import { MetaData } from 'components/Head'
import HomePage from 'pages/index'
import { useApp } from 'contexts/AppContext'
import {
  DOMAIN_URL_,
  LESSONS,
  MINI_APP_TITLE,
  MINI_APP_DESCRIPTION,
} from 'constants/index'

const getServerSidePropsImpl: GetServerSideProps = async ({ query }) => {
  const { lesson, badge, referrer, r } = query

  const pageMeta: MetaData = {
    title: MINI_APP_TITLE,
    description: MINI_APP_DESCRIPTION,
    canonical: '/',
  }

  if (lesson) {
    const currentLesson = LESSONS.find((l) => l.slug === lesson)
    // TODO: add support for lang?
    pageMeta.image = currentLesson?.socialImageLink
    if (currentLesson) {
      pageMeta.isLesson = true
      pageMeta.lesson = currentLesson
    }
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
  const { openOnboardingModal } = useApp()

  useEffect(() => {
    openOnboardingModal({ forceOnboarding: true })
  }, [openOnboardingModal])

  return <HomePage />
}

export default Start

export const getServerSideProps = withSsrTiming(
  '/start',
  getServerSidePropsImpl
)
