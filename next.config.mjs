import { withSentryConfig } from '@sentry/nextjs'

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
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
