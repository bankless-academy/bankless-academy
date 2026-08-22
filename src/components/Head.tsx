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
import { t } from 'i18next'
import { LANGUAGE_CODES, applyDocumentLanguage } from 'constants/languages'

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
  /** Server-rendered article HTML for the /content pages. */
  articleHtml?: string
  /** Language actually rendered (the /content pages fall back to English). */
  lang?: string
  /** Section anchors for the /content contents nav. */
  headings?: { id: string; text: string }[]
  /** Build-time UI strings for the /content pages (rendered outside i18next). */
  strings?: { [key: string]: string }
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

  // hreflang alternates. Each localized URL renders exactly one language, so
  // without these Google reads /lessons/x and /lessons/fr/x as near-duplicates
  // instead of alternates. x-default points at the English URL, which is also
  // where a reader with no matching language should land.
  const alternateSlug = metadata?.lesson?.slug
  const lessonLanguages = metadata?.lesson?.languages || []
  // A /content page's alternates must point at other /content pages. Pointing
  // them at /lessons/<lang>/<slug> annotated a different page type, which does
  // not reciprocate, and hreflang requires both ends to agree — so the whole
  // cluster was discarded and the two page types looked like duplicates.
  const contentSuffix = router.asPath.split(/[?#]/)[0].endsWith('/content')
    ? '/content'
    : ''
  const isGlossary = router.asPath.split(/[?#]/)[0].startsWith('/glossary')
  const alternates: { hreflang: string; href: string }[] = alternateSlug
    ? [
        {
          hreflang: 'x-default',
          href: `${DOMAIN_URL_}/lessons/${alternateSlug}${contentSuffix}`,
        },
        {
          hreflang: 'en',
          href: `${DOMAIN_URL_}/lessons/${alternateSlug}${contentSuffix}`,
        },
        ...lessonLanguages.map((l) => ({
          hreflang: l,
          href: `${DOMAIN_URL_}/lessons/${l}/${alternateSlug}${contentSuffix}`,
        })),
      ]
    : isGlossary
    ? [
        { hreflang: 'x-default', href: `${DOMAIN_URL_}/glossary` },
        { hreflang: 'en', href: `${DOMAIN_URL_}/glossary` },
        ...LANGUAGE_CODES.filter((l) => l !== 'en').map((l) => ({
          hreflang: l,
          href: `${DOMAIN_URL_}/glossary/${l}`,
        })),
      ]
    : []
  const image = metadata?.image
    ? metadata?.image.startsWith('http')
      ? `${metadata?.image}`
      : `${DOMAIN_URL_}${metadata?.image}`
    : `${DOMAIN_URL_}${DEFAULT_METADATA.image}`
  const url = `${DOMAIN_URL_}${router.asPath}`

  useEffect(() => {
    const isEmbedded = typeof window !== 'undefined' && window !== window.parent
    /* Hotjar */
    if (
      typeof window !== 'undefined' &&
      window.location.hostname === 'app.banklessacademy.com' &&
      !isEmbedded
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

  // The nolayout /content pages mount no AppProvider, so nothing else corrects
  // <html lang>/<dir> from _document's static default there. metadata.lang is
  // only set by those pages; everywhere else this is a no-op and AppContext
  // stays the authority.
  useEffect(() => {
    if (metadata?.lang) applyDocumentLanguage(metadata.lang)
  }, [metadata?.lang])

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

  const isStart = router.asPath?.startsWith('/start')

  type MiniAppContentType = {
    version: string
    imageUrl?: string
    button: {
      title: string
      action: {
        type: string
        name: string
        url?: string
        splashImageUrl: string
        splashBackgroundColor: string
      }
    }
  }

  let miniAppContent: MiniAppContentType | null = {
    version: 'next',
    button: {
      title: 'Learn & claim your free badge!',
      action: {
        type: 'launch_frame',
        name: PROJECT_NAME,
        splashImageUrl: `${DOMAIN_URL_}/app-icon.png`,
        splashBackgroundColor: '#000000',
      },
    },
  }

  if (router.pathname === '/') {
    // Home page
    miniAppContent.imageUrl = `${DOMAIN_URL_}/images/bankless_academy_v3_frame.jpg`
    miniAppContent.button.action.url = `${DOMAIN_URL_}?webapp=true`
  } else if (isLesson && lesson) {
    // Lesson page
    miniAppContent.imageUrl = `${DOMAIN_URL_}/api/og/mini-app?image=${encodeURIComponent(
      `${DOMAIN_URL_}${lesson.socialImageLink}`
    )}`
    miniAppContent.button.action.url = `${DOMAIN_URL_}/lessons/${lesson.slug}?webapp=true`
  } else if (isStart) {
    // Start page
    miniAppContent.imageUrl = `${DOMAIN_URL_}/api/og/mini-app?image=${encodeURIComponent(
      metadata.image
    )}`
    miniAppContent.button.action.url = `${url}&webapp=true`
  } else {
    miniAppContent = null
  }

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
        {alternates.map((a) => (
          <link
            key={a.hreflang}
            rel="alternate"
            hrefLang={a.hreflang}
            href={a.href}
          />
        ))}
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
        {/* Farcaster Frame v2 (mini-app) */}
        {miniAppContent && (
          <meta property="fc:frame" content={JSON.stringify(miniAppContent)} />
        )}
        {
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
        }
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
        {/* Base Build */}
        <meta name="base:app_id" content="698f0e007ca07f5750bbd81e" />
        {/* noscript */}
        <noscript>
          {t('You need to enable JavaScript to run this app.')}
        </noscript>
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
