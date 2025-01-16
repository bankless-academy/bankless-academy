import NextHead from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

import {
  PROJECT_NAME,
  DOMAIN_PROD,
  DOMAIN_URL_,
  DEFAULT_METADATA,
  FAVICON,
  UMAMI_PROD,
  APPLE_TOUCH_ICON,
  APPLE_TOUCH_STARTUP_IMAGE,
  IS_PROD,
} from 'constants/index'
import { useEffect } from 'react'
import { LessonType } from 'entities/lesson'
import LESSONS from 'constants/lessons'

export interface MetaData {
  title?: string
  description?: string
  image?: string
  isLesson?: boolean
  lesson?: LessonType
  canonical?: string
  noindex?: boolean
  nolayout?: boolean
  ssr?: boolean
  isDatadisk?: boolean
}

const umamiWebsiteId =
  typeof window !== 'undefined' &&
  window.location.hostname === DOMAIN_PROD &&
  UMAMI_PROD
    ? // prod
      UMAMI_PROD
    : // dev
      'e84c3a1e-0ab0-4502-b0fe-67d660765535'
const umamiDomain = 'https://stats.banklessacademy.com/stats.js'

const Head = ({ metadata }: { metadata: MetaData }): React.ReactElement => {
  const router = useRouter()
  const title = metadata?.title
    ? `${metadata.title} | ${PROJECT_NAME}`
    : PROJECT_NAME
  const description = metadata?.description || DEFAULT_METADATA.description
  const image = metadata?.image
    ? metadata?.image.startsWith('http')
      ? `${metadata?.image}`
      : `${DOMAIN_URL_}${metadata?.image}`
    : `${DOMAIN_URL_}${DEFAULT_METADATA.image}`
  const url = `${DOMAIN_URL_}${router.asPath}`

  useEffect(() => {
    /* Hotjar */
    if (
      typeof window !== 'undefined' &&
      window.location.hostname === 'app.banklessacademy.com'
    ) {
      import('react-hotjar').then((hotjarLib) => {
        hotjarLib.hotjar.initialize(2568813, 6)
      })
    }

    // Initialize Telegram Mini App
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      tg.ready()
      tg.expand()
    }
  }, [])

  const canonical = url?.split('?')[0]

  const lesson = metadata?.lesson

  // const isDatadisk = metadata?.isDatadisk

  const isLesson = metadata?.isLesson && lesson

  const isProfile =
    metadata?.image?.includes('api/og/social') &&
    !metadata?.image?.includes('&badge=')

  const isBadge =
    metadata?.image?.includes('api/og/social') &&
    metadata?.image?.includes('&badge=')

  const explorerAddress =
    isProfile || isBadge
      ? metadata?.image.split('address=')[1].split('&')[0]
      : null

  const badgeId = isBadge
    ? metadata?.image.split('badge=')[1].split('&')[0]
    : null

  const lessonSlug = badgeId
    ? LESSONS.find((lesson: LessonType) => lesson.badgeId === parseInt(badgeId))
        .slug
    : null

  return (
    <>
      <NextHead>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Open Graph / Facebook (needs to be < 300kb to work on WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <link
          rel="canonical"
          href={
            metadata?.canonical
              ? `${DOMAIN_URL_}${metadata.canonical}`
              : canonical?.endsWith('-datadisk')
              ? canonical?.replace('-datadisk', '')
              : canonical
          }
        />
        {/* Robot indexing: only index in production */}
        <meta
          name="robots"
          content={IS_PROD && !metadata?.noindex ? 'all' : 'noindex'}
        ></meta>
        {/* Twitter */}
        <meta property="twitter:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* shortcut icon */}
        <link
          rel="shortcut icon"
          sizes="200x200"
          type="image/png"
          href={FAVICON}
        />
        {/* Progressive Web App */}
        <link rel="apple-touch-icon" href={APPLE_TOUCH_ICON} />
        <link
          rel="apple-touch-startup-image"
          href={APPLE_TOUCH_STARTUP_IMAGE}
        />
        <meta name="apple-mobile-web-app-title" content={PROJECT_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/manifest.json"
        />
        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Bankless Academy lesson feed"
          href="/rss.xml"
        />
        {/* Telegram Mini App */}
        <Script
          src="https://telegram.org/js/telegram-web-app.js?56"
          strategy="beforeInteractive"
        />
        {/* Farcaster Frame */}
        {/* Farcaster Frame v2: home page */}
        {router.pathname === '/' && (
          <meta
            property="fc:frame"
            content={JSON.stringify({
              version: 'next',
              imageUrl: `${DOMAIN_URL_}/images/bankless_academy_v3_frame.jpg`,
              button: {
                title: 'Learn and claim your free lesson badge!',
                action: {
                  type: 'launch_frame',
                  name: 'Bankless Academy',
                  url: `${DOMAIN_URL_}?webapp=true`,
                  splashImageUrl: `${DOMAIN_URL_}/app-icon.png`,
                  splashBackgroundColor: '#000000',
                },
              },
            })}
          />
        )}
        {/* Farcaster Frame v2: lesson */}
        {isLesson && lesson && (
          <meta
            property="fc:frame"
            content={JSON.stringify({
              version: 'next',
              imageUrl: `${DOMAIN_URL_}/api/og/lesson-frame?image_path=${lesson.socialImageLink}`,
              button: {
                title: 'Learn and claim your free lesson badge!',
                action: {
                  type: 'launch_frame',
                  name: 'Bankless Academy',
                  url: `${DOMAIN_URL_}/lessons/${lesson.slug}?webapp=true`,
                  splashImageUrl: `${DOMAIN_URL_}/app-icon.png`,
                  splashBackgroundColor: '#000000',
                },
              },
            })}
          />
          // <>
          //   <meta property="fc:frame" content="vNext" />
          //   <meta
          //     property="fc:frame:image"
          //     content={
          //       isDatadisk
          //         ? // TODO: add back .gif for FC < 10MB + make dynamic
          //           `${DOMAIN_URL_}/images/${lesson.slug}/social-datadisk.jpg`
          //         : image
          //     }
          //   />
          //   <meta
          //     property="fc:frame:post_url"
          //     content={`${DOMAIN_URL_}/api/frame-og/redirect?lesson_slug=${
          //       lesson.slug
          //     }&platform=farcaster&provenance=${
          //       isDatadisk ? 'datadisk' : 'lesson'
          //     }`}
          //   />
          //   <meta name="fc:frame:button:1:action" content="post_redirect" />
          //   <meta
          //     property={`fc:frame:button:1`}
          //     content={
          //       isDatadisk
          //         ? `Mint a DataDisk, Support Free Education.`
          //         : `Learn and claim your free lesson badge now!`
          //     }
          //   />
          // </>
        )}
        {/* FC: article */}
        {lesson?.isArticle && (
          <>
            <meta property="fc:frame" content="vNext" />
            <meta
              property="fc:frame:image"
              content={`${DOMAIN_URL_}${lesson.socialImageLink}`}
            />
            <meta
              property="fc:frame:post_url"
              content={`${DOMAIN_URL_}/api/frame-og/redirect?lesson_slug=${lesson.slug}&platform=farcaster&provenance=handbook`}
            />
            <meta name="fc:frame:button:1:action" content="post_redirect" />
            <meta
              property={`fc:frame:button:1`}
              content={`Collect the guide, take it with you wherever you go.`}
            />
          </>
        )}
        {/* FC: profile */}
        {isProfile && (
          <>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content={metadata?.image} />
            <meta
              property="fc:frame:post_url"
              content={`${DOMAIN_URL_}/api/frame-og/redirect?referralAddress=${explorerAddress}&explorerAddress=${explorerAddress}&platform=farcaster&provenance=profile`}
            />
            <meta name="fc:frame:button:1:action" content="post_redirect" />
            <meta
              property={`fc:frame:button:1`}
              content={`Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`}
            />
          </>
        )}
        {/* FC: badge */}
        {isBadge && (
          <>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content={metadata?.image} />
            <meta
              property="fc:frame:post_url"
              content={`${DOMAIN_URL_}/api/frame-og/redirect?referralAddress=${explorerAddress}&lesson_slug=${lessonSlug}&platform=farcaster&provenance=badge`}
            />
            <meta name="fc:frame:button:1:action" content="post_redirect" />
            <meta
              property={`fc:frame:button:1`}
              content={`Learn and claim your free lesson badge now!`}
            />
          </>
        )}
        {/* Lens Portals */}
        {/* noscript */}
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </NextHead>
      {/* Umami */}
      <Script
        async
        defer
        data-website-id={umamiWebsiteId}
        src={umamiDomain}
      ></Script>
    </>
  )
}

export default Head
