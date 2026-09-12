/**
 * `?dev=<DEV_SECRET>` lets four API routes take their params from the query
 * string and skip signature verification (`mint-badge`, `validate-quest`,
 * `passport`, `ud`). Useful on previews, catastrophic in production — so it is
 * disabled there by the RUNTIME rather than by remembering to leave the env
 * var unset in the dashboard. `VERCEL_ENV`, not `NODE_ENV`, because the latter
 * is 'production' on preview deployments too.
 */
export const devSecret = (): string | undefined =>
  process.env.VERCEL_ENV === 'production' ? undefined : process.env.DEV_SECRET
