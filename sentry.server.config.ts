// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'
import { SENTRY_ENABLED } from './src/constants'

if (SENTRY_ENABLED) {
  Sentry.init({
    dsn: 'https://9e94bb5ad28d4a0ba170165b81644993@o1430714.ingest.us.sentry.io/6781781',

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  })
}
