// TEMPORARY (cold-start investigation): records when the module loader first
// reached this file. Safe ahead of ssrStorage — it has no imports of its own
// and touches nothing but process.uptime().
import { mark } from 'utils/bootTiming'
// MUST be first among modules with side effects: installs a server-side
// localStorage stub so components that read storage during render can be
// prerendered. See the file for why.
import 'utils/ssrStorage'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Global, css } from '@emotion/react'
import 'react-notion-x/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'mac-scrollbar/dist/mac-scrollbar.css'
import 'highlight.js/styles/vs.css'
import { GlobalScrollbar } from 'mac-scrollbar'
import { isMobile } from 'react-device-detect'
import { Container, Heading, Image } from '@chakra-ui/react'
import Router from 'next/router'
import * as Sentry from '@sentry/nextjs'
import { SENTRY_ENABLED } from 'constants/index'

import Head, { MetaData } from 'components/Head'
import AppGlobalStyles from 'components/AppGlobalStyles'
import LessonSeoBlock from 'components/LessonSeoBlock'
import SeoContentBlock from 'components/SeoContentBlock'
import Layout from 'layout/index'
import ThemeProvider from 'theme'
import { DEBUG } from 'utils/index'
import NonSSRWrapper from 'components/NonSSRWrapper'
// ssr:false is load-bearing: it is what keeps @walletconnect/@reown/@coinbase/
// viem out of the SERVER bundle. Importing Web3Providers statically silently
// re-adds ~15s of cold-start module evaluation to every dynamic route.
const Web3Providers = dynamic(
  () => import('components/providers/Web3Providers'),
  { ssr: false }
)
import 'utils/translation'
import { AppProvider } from 'contexts/AppContext'
import { t } from 'i18next'

// Runs after every import above has finished evaluating.
mark('_app-imports-done')

// Warm the web3 provider chunk (~840KB, the largest in the app) the moment
// the main bundle evaluates, so its fetch overlaps hydration instead of
// starting after it. next/dynamic would otherwise only request it on first
// client render, which is what made the nav/rail appear ~half a second after
// the server-rendered lesson content. The module system caches the in-flight
// promise, so the dynamic() above resolves from this same request.
if (typeof window !== 'undefined') {
  void import('components/providers/Web3Providers')
}

// Pages that need the app chrome (PageLayout: side rail on desktop, the
// bottom bar on mobile) attach it here instead of rendering it themselves.
// WHY: rendering <PageLayout> inside a page puts it under <Component>, so
// every navigation unmounts and rebuilds it — the mobile bottom bar's avatar
// <img> was destroyed and refetched on each tap, while Nav (mounted above
// <Component>) never flickered. Returned from getLayout the element is the
// SAME component type at the SAME position across routes, so React reconciles
// it and only `children` remounts. Never render PageLayout inside a page.
type GetLayout = (page: JSX.Element, pageProps: any) => JSX.Element

const App = ({
  Component,
  pageProps,
}: AppProps<{
  pageMeta: MetaData
  isNotion: boolean
}>): JSX.Element => {
  const getLayout: GetLayout =
    (Component as unknown as { getLayout?: GetLayout }).getLayout ??
    ((page) => page)
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false)

  // ALL hooks must sit above the conditional returns below. This component
  // renders SEVERAL page types (maintenance, nolayout, default): a hook
  // declared after one of those returns gives that branch a shorter hook list,
  // so any client-side navigation that switches branches crashes React with
  // "Rendered more/fewer hooks than during the previous render".
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      if (url?.startsWith('/explorer/')) setIsLoadingProfile(true)
    })
    Router.events.on('routeChangeComplete', () => {
      setIsLoadingProfile(false)
    })

    Router.events.on('routeChangeError', () => {
      setIsLoadingProfile(false)
    })
  }, [Router])

  useEffect(() => {
    // Check if running as Telegram Mini App
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      setIsTelegramWebApp(true)
      const tg = window.Telegram.WebApp

      // Apply Telegram theme colors
      if (tg.themeParams) {
        document.documentElement.style.setProperty(
          '--tg-theme-bg-color',
          tg.themeParams.bg_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-text-color',
          tg.themeParams.text_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-hint-color',
          tg.themeParams.hint_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-link-color',
          tg.themeParams.link_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-button-color',
          tg.themeParams.button_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-button-text-color',
          tg.themeParams.button_text_color
        )
        document.documentElement.style.setProperty(
          '--tg-theme-secondary-bg-color',
          tg.themeParams.secondary_bg_color
        )
      }
    }
  }, [])

  if (
    (process.env.NEXT_PUBLIC_MAINTENANCE &&
      process.env.NEXT_PUBLIC_MAINTENANCE !== DEBUG) ||
    pageProps.pageMeta?.title === 'Maintenance'
  ) {
    return SENTRY_ENABLED ? (
      <Sentry.ErrorBoundary>
        {t('Maintenance in progress ...')}
      </Sentry.ErrorBoundary>
    ) : (
      <div>{t('Maintenance in progress ...')}</div>
    )
  }
  if (pageProps.pageMeta?.nolayout) {
    const content = (
      <>
        <Head metadata={pageProps.pageMeta} />
        <ThemeProvider>
          <Global styles={css``} />
          {pageProps.pageMeta?.ssr ? (
            <Component {...pageProps} />
          ) : (
            <NonSSRWrapper>
              <Component {...pageProps} />
            </NonSSRWrapper>
          )}
        </ThemeProvider>
      </>
    )
    return SENTRY_ENABLED ? (
      <Sentry.ErrorBoundary>{content}</Sentry.ErrorBoundary>
    ) : (
      content
    )
  }

  const appContent = (
    <>
      <Head metadata={pageProps.pageMeta} />
      <ThemeProvider>
        {/* Outside Web3Providers on purpose: pure CSS, and the first paint of
            a lesson page (whose article below is server-rendered) needs the
            fonts and body background before the app's JS arrives. */}
        <AppGlobalStyles />
        <NonSSRWrapper>
          {!isMobile && !isTelegramWebApp && <GlobalScrollbar skin="dark" />}
        </NonSSRWrapper>
        {/* The interactive app is client-only, deliberately. Server-rendering
            this tree is mechanically close — the router-singleton,
            localStorage, document and window accesses that blocked it are all
            fixed — but the UI is a function of localStorage in too many places
            to hydrate cleanly: the lesson card renders "15 minutes" on the
            server and "Done" on the client, and so on for badges, resume
            position and wallet state. What MUST reach a crawler therefore
            lives OUTSIDE <Web3Providers>: the lesson pages' hero + article
            (LessonSeoBlock below) — that is how /lessons/<slug> serves its
            full text while the app tree stays client-rendered and client-side
            navigation never remounts the providers. See CLAUDE.md. */}
        <Web3Providers>
          <AppProvider>
            <Layout isLesson={pageProps.pageMeta?.isLesson || false}>
              {/* getLayout wraps the loading state too, so tapping
                        Profile keeps the chrome mounted instead of tearing it
                        down and rebuilding it once the profile resolves. */}
              {getLayout(
                isLoadingProfile ? (
                  <Container maxW="container.xl">
                    <Heading as="h2" size="xl" m="8" textAlign="center">
                      {t('Loading Explorer Profile')}
                    </Heading>
                    <Image
                      margin="auto"
                      paddingTop="200px"
                      width="250px"
                      src="/loading_purple.svg"
                    />
                  </Container>
                ) : (
                  <Component {...pageProps} />
                ),
                pageProps
              )}
            </Layout>
          </AppProvider>
        </Web3Providers>
        {/* Server-rendered SEO surfaces. Lessons: hero + full article
            (LessonSeoBlock). Glossary/homepage/listings: their crawlable
            content (SeoContentBlock). Both unmount when the app arrives. */}
        {pageProps.pageMeta?.articleHtml && (
          <LessonSeoBlock pageMeta={pageProps.pageMeta} />
        )}
        {pageProps.pageMeta?.seoHtml && (
          <SeoContentBlock pageMeta={pageProps.pageMeta} />
        )}
      </ThemeProvider>
    </>
  )

  return SENTRY_ENABLED ? (
    <Sentry.ErrorBoundary>{appContent}</Sentry.ErrorBoundary>
  ) : (
    appContent
  )
}

export default App
