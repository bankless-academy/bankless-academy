// Temporary SSR instrumentation for the ~17s dynamic-route investigation.
//
// Black-box timing from outside could not separate three candidates:
//   1. serverless COLD START (bundle download + Node boot + module init)
//   2. time inside getServerSideProps (data fetching)
//   3. time in the React render itself
//
// This distinguishes all three. The decisive field is `up` (process.uptime at
// request time): a value close to the request duration means the container was
// just created and you are paying cold start, which no amount of page-level
// optimisation will fix. A large `up` with a large `gssp` means the fetch is
// the problem. A large `up` with a small `gssp` points at render or middleware.
//
// Remove this once the cause is identified — it logs on every dynamic render.
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'

// Captured when this module is first evaluated, i.e. during cold start.
const MODULE_LOAD_UPTIME = process.uptime()

/**
 * Wraps a getServerSideProps so each request logs one greppable line:
 *
 *   [SSR-TIMING] route=/explorer/[address] up=0.9s cold=YES modLoad=0.7s gssp=12ms region=iad1
 *
 * `cold=YES` means this request created the container. If the slow requests are
 * all cold=YES, the fix is bundle size / keeping functions warm, not the page.
 */
export const withSsrTiming = (
  route: string,
  handler: GetServerSideProps
): GetServerSideProps => {
  return async (ctx: GetServerSidePropsContext) => {
    const started = Date.now()
    const uptimeAtRequest = process.uptime()
    // Within ~2s of boot the container is almost certainly serving its first
    // request; Node uptime starts at process spawn, before module evaluation.
    const isCold = uptimeAtRequest - MODULE_LOAD_UPTIME < 2

    let result
    try {
      result = await handler(ctx)
    } finally {
      const gssp = Date.now() - started
      // eslint-disable-next-line no-console
      console.log(
        `[SSR-TIMING] route=${route} up=${uptimeAtRequest.toFixed(
          1
        )}s cold=${isCold ? 'YES' : 'no'} modLoad=${MODULE_LOAD_UPTIME.toFixed(
          1
        )}s gssp=${gssp}ms region=${process.env.VERCEL_REGION || 'local'}`
      )
      // Also expose it to the browser, so it can be read from devtools
      // (Network -> Timing) without needing Vercel log access.
      try {
        ctx.res?.setHeader(
          'Server-Timing',
          `gssp;dur=${gssp}, uptime;dur=${Math.round(
            uptimeAtRequest * 1000
          )}, cold;desc=${isCold ? '1' : '0'}`
        )
      } catch {
        // headers already sent (redirect/stream) — timing still went to the log
      }
    }
    return result
  }
}
