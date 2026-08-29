import { withSentryConfig } from '@sentry/nextjs'
import fs from 'fs'

// Single source of truth for languages is src/constants/languages.ts (TS, so
// not importable here). Parse the codes the same way translate-content.js
// does. Build-time only; throws loudly if the registry shape changes.
const registrySrc = fs.readFileSync('src/constants/languages.ts', 'utf8')
const LOCALES = [...registrySrc.matchAll(/code: '([a-z-]+)'/g)].map((m) => m[1])
if (LOCALES.length < 20 || !LOCALES.includes('en'))
  throw new Error('failed to parse language registry for i18n locales')
const NON_EN = LOCALES.filter((l) => l !== 'en')
const LANG_GROUP = `:lang(${NON_EN.join('|')})`

const nextConfig = {
  // Locale-prefixed URLs: /fr/lessons/<slug>, /fr/glossary, /fr/... for every
  // page. English is the defaultLocale and stays UN-prefixed — the root URLs
  // carry all the accumulated search equity and must never move.
  // localeDetection stays off: Accept-Language auto-redirects hide the other
  // language versions from crawlers, and the onboarding modal owns the
  // language-suggestion UX.
  i18n: {
    locales: LOCALES,
    defaultLocale: 'en',
    localeDetection: false,
  },
  // The complete 301 table (ported from vercel.json so it lives next to the
  // i18n config that defines the URL scheme).
  //
  // NONE of these use `locale: false`. Measured on Next 16.1.7: with i18n
  // enabled, a `locale: false` redirect NEVER matches a default-locale
  // (un-prefixed) request path, and every legacy URL below is un-prefixed —
  // the whole table silently stopped matching. With automatic locale handling
  // the source also matches under any locale prefix and the destination is
  // auto-prefixed with the detected locale (empty for 'en'), which is exactly
  // right here. Each rule targets its FINAL destination so real legacy URLs
  // never chain.
  // Long-lived caching for lesson artwork.
  //
  // vercel.json has carried `/images/(.*)/(.*)` -> `max-age=31536000,
  // immutable` for a long time and it has NEVER been applied: measured
  // 2026-08-29, images still serve Next's default `max-age=0,
  // must-revalidate`, so every visitor revalidates every image on every page
  // load (13 round trips on a lesson page). A vercel.json header cannot
  // override a Cache-Control the framework already sets — only sources that
  // set no cache header of their own (e.g. the exact-path /api/og/rewards
  // rule) take effect there. Setting it here instead puts it in the layer that
  // owns the response.
  //
  // NOT `immutable`, deliberately: the `-cb12b11e` suffix looks like a content
  // hash but is `crc32(imageLink)` from import-content.js — a hash of the
  // SOURCE URL. A changed image behind an unchanged source URL keeps its
  // filename, so `immutable` would pin the stale version in every visitor's
  // browser for a year with no way to bust it. A day of freshness plus
  // stale-while-revalidate gets almost all the benefit and stays correctable.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=2592000',
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // NOTE: /en/* (the default locale under its prefix) is reachable as a
      // duplicate of every un-prefixed page. It CANNOT be redirected from
      // here: a `locale: false` source is matched against the locale-
      // NORMALIZED path, so `/en/:path*` also matches every un-prefixed
      // English request and self-redirects the whole site (measured on
      // 16.1.7). The cleanup lives in vercel.json instead — platform
      // redirects run before Next and match the literal path. Locally /en/*
      // serves 200 with a canonical pointing at the un-prefixed URL.
      // Legacy pre-ISO language codes straight to the final shape
      ...Object.entries({ br: 'pt-br', cn: 'zh', jp: 'ja', ua: 'uk' }).map(
        ([legacy, code]) => ({
          source: `/lessons/${legacy}/:path*`,
          destination: `/${code}/lessons/:path*`,
          permanent: true,
        })
      ),
      // Renamed lesson slugs. The bare rule also covers /<locale>/lessons/<old>
      // via automatic locale handling; the explicit old localized shape
      // (/lessons/fr/<old>) needs its own rule to resolve in one hop.
      ...[
        ['how-to-fund-a-wallet-on-layer-2', 'funding-a-wallet-on-layer-2'],
        ['the-stablecoin-guide', 'understanding-stablecoins'],
        [
          'how-to-swap-on-a-decentralized-exchange',
          'swapping-on-a-decentralized-exchange',
        ],
      ].flatMap(([from, to]) => [
        {
          source: `/lessons/${from}`,
          destination: `/lessons/${to}`,
          permanent: true,
        },
        {
          source: `/lessons/${LANG_GROUP}/${from}`,
          destination: `/:lang/lessons/${to}`,
          permanent: true,
        },
      ]),
      {
        source: '/lessons/:slug(conceptos-.*)',
        destination: '/es/lessons/blockchain-basics',
        permanent: true,
      },
      // The URL migration itself: /lessons/<lang>/... -> /<lang>/lessons/...
      // Old content-mirror URLs collapse straight onto the lesson URL (the
      // mirror pages are retired; the lesson page serves the full text).
      {
        source: `/lessons/${LANG_GROUP}/:slug/content`,
        destination: '/:lang/lessons/:slug',
        permanent: true,
      },
      // The mirrors' own (current) URL shape: automatic locale handling makes
      // this one rule cover /lessons/x/content AND /<lang>/lessons/x/content.
      {
        source: '/lessons/:slug/content',
        destination: '/lessons/:slug',
        permanent: true,
      },
      {
        source: `/lessons/${LANG_GROUP}/:slug`,
        destination: '/:lang/lessons/:slug',
        permanent: true,
      },
      {
        source: `/glossary/${LANG_GROUP}`,
        destination: '/:lang/glossary',
        permanent: true,
      },
      // Non-localized pages: personal dashboards and English-only Notion
      // content never carry a locale prefix (InternalLink pins locale "en";
      // these catch direct entries). `locale: false` is CORRECT here, unlike
      // above: the source carries an explicit non-default locale prefix, and
      // an un-prefixed request normalizes to /en/... which the group never
      // matches — so no self-redirects.
      ...['explorer', 'notion'].map((base) => ({
        source: `/${LANG_GROUP}/${base}/:path*`,
        destination: `/${base}/:path*`,
        permanent: true,
        locale: false,
      })),
      {
        source: `/${LANG_GROUP}/:page(faq|about|disclaimer|privacy-policy|terms-of-service)`,
        destination: '/:page',
        permanent: true,
        locale: false,
      },
    ]
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Empty turbopack config to acknowledge Turbopack (Next.js 16+)
  turbopack: {},
  // Webpack configuration (fallback for --webpack flag)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  transpilePackages: ['ethereum-identity-kit'],
  // Missing lesson/social images fall back to the generator.
  //
  // `fallback` rewrites are evaluated ONLY after the filesystem and all dynamic
  // routes have missed, so an image that exists is served straight from the CDN
  // with zero extra work. This replaces a middleware block that fetched the
  // image URL itself on every request just to detect a 404 — an extra round
  // trip and a middleware invocation on the site's hottest static assets.
  async rewrites() {
    return {
      // Moved here from vercel.json (2026-08-23): with Next i18n enabled, the
      // PLATFORM matches vercel.json rewrites against the locale-NORMALIZED
      // path, so an un-prefixed source like /sitemap.xml never matches again
      // — every one of these 404'd in production while working locally.
      // next.config rewrites apply automatic locale handling and match
      // correctly. vercel.json keeps only headers and crons.
      afterFiles: [
        { source: '/llms.txt', destination: '/api/agent' },
        { source: '/agent.txt', destination: '/api/agent' },
        { source: '/sitemap.xml', destination: '/api/sitemap' },
        { source: '/rss.xml', destination: '/api/rss' },
        { source: '/faq', destination: '/notion/faq' },
        { source: '/about', destination: '/notion/about' },
        { source: '/disclaimer', destination: '/notion/disclaimer' },
        { source: '/privacy-policy', destination: '/notion/privacy-policy' },
        {
          source: '/terms-of-service',
          destination: '/notion/terms-of-service',
        },
        {
          source: '/mp/lib.min.js',
          destination: 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js',
        },
        {
          source: '/mp/lib.js',
          destination: 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.js',
        },
        { source: '/mp/decide', destination: 'https://decide.mixpanel.com/decide' },
        { source: '/mp/:slug', destination: 'https://api-eu.mixpanel.com/:slug' },
        { source: '/lesson/images/:slug', destination: '/images/:slug' },
      ],
      fallback: [
        {
          source: '/images/:slug/social-:file',
          destination: '/api/lesson-image?slug=:slug&type=social',
        },
        {
          source: '/images/:slug/lesson-:file',
          destination: '/api/lesson-image?slug=:slug&type=lesson',
        },
      ],
    }
  },
}

const SENTRY_ENABLED = process.env.NEXT_PUBLIC_SENTRY_ENABLED === 'true' || false

const sentryConfig = {
  org: 'bankless-academy',
  project: 'nextjs',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  tunnelRoute: '/sl',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: false,
}

export default SENTRY_ENABLED ? withSentryConfig(nextConfig, sentryConfig) : nextConfig
