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
  // Keep the wallet stack out of the SERVERLESS FUNCTION UPLOAD.
  //
  // These packages are client-only: the web3 provider tree loads through
  // `dynamic(..., { ssr: false })` (see components/providers/Web3Providers)
  // and nothing evaluates them on the server — verified by the build going
  // from 12 "window is not defined" errors and 3 "[WebSocket] Initializing"
  // logs down to zero. But Next's file tracing still followed the static
  // imports in Nav/ConnectWalletButton and shipped them into every function,
  // leaving a 156MB bundle that took ~15s to initialise on a cold container
  // (measured: 16.5s on a new container vs 0.3s once warm).
  //
  // NOTE: @selfxyz/core is deliberately NOT excluded — the passport stamp
  // API routes use it server-side. Only the /qrcode package is client-only.
  outputFileTracingExcludes: {
    '*': [
      // Trailing `*` on each name: yarn installs some of these under hashed
      // directory names (e.g. @selfxyz/qrcode-974c4c1e26e08b8b), which a plain
      // `qrcode/**` glob silently fails to match.
      // Both forms are needed: the trace sometimes lists a bare DIRECTORY
      // entry, which a `/**` glob cannot match.
      'node_modules/@walletconnect*',
      'node_modules/@walletconnect*/**',
      'node_modules/@coinbase/wallet-sdk*',
      'node_modules/@coinbase/wallet-sdk*/**',
      'node_modules/@selfxyz/qrcode*',
      'node_modules/@selfxyz/qrcode*/**',
    ],
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
