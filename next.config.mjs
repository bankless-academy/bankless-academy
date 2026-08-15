import { withSentryConfig } from '@sentry/nextjs'

const nextConfig = {
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
