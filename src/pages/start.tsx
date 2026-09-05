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
import { localePath, normalizeLangCode } from 'constants/languages'

const getServerSidePropsImpl: GetServerSideProps = async ({ query }) => {
  const { lesson, badge, referrer, r, lang, lng } = query

  // Legacy share links carried the language as `?lang=` (older ones `?lng=`,
  // some with pre-ISO codes such as `ua`). Since the locale-URL migration the
  // language IS the URL prefix and AppContext records it from there; nothing
  // read the parameter any more, so such links opened in English. Send the
  // visitor to /<lang>/start with the same query minus the legacy key.
  const requested =
    typeof lang === 'string' ? lang : typeof lng === 'string' ? lng : null
  if (requested !== null) {
    const rest = new URLSearchParams()
    for (const [key, value] of Object.entries(query)) {
      if (key === 'lang' || key === 'lng') continue
      for (const item of ([] as string[]).concat(value || []))
        rest.append(key, item)
    }
    const qs = rest.toString()
    return {
      redirect: {
        destination: `${localePath(normalizeLangCode(requested), '/start')}${
          qs ? `?${qs}` : ''
        }`,
        permanent: false,
      },
    }
  }

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
    openOnboardingModal()
  }, [openOnboardingModal])

  return <HomePage />
}

export default Start

export const getServerSideProps = withSsrTiming(
  '/start',
  getServerSidePropsImpl
)
