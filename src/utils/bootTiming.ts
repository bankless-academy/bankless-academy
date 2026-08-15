// TEMPORARY cold-start instrumentation. Remove once the ~15s is explained.
//
// The question this answers: an uncached dynamic route takes ~16.5s on a new
// container while getServerSideProps itself takes 1-425ms. Everything so far
// says the time is spent before our handler runs, but "before our handler" has
// three very different possible causes with three different fixes:
//
//   A. Lambda bootstrap  — downloading/extracting the 136MB function, starting
//                          Node. Fix: shrink the upload, or keep containers warm.
//   B. Next.js bootstrap — the framework's own server init before it touches
//                          our code. Fix: framework/config level, or nothing.
//   C. Our import graph  — evaluating _app's dependencies. Fix: more code
//                          splitting, which is what we have been guessing at.
//
// ES module imports are hoisted and evaluated before the importing module's
// body runs. So importing this file FIRST in a module records the moment the
// loader reached that module, and calling mark() in the body records the moment
// its whole dependency graph finished evaluating. The delta is C. Whatever time
// sits before the earliest mark is A + B.
const marks: { name: string; at: number }[] = []

export const mark = (name: string): void => {
  // process is undefined in the browser bundle; this is server-only telemetry
  if (typeof process === 'undefined' || !process.uptime) return
  if (marks.some((m) => m.name === name)) return
  marks.push({ name, at: Number(process.uptime().toFixed(3)) })
}

export const getMarks = (): string =>
  marks.map((m) => `${m.name}@${m.at}s`).join(' ')

// Evaluated the instant the loader first reaches this module.
mark('boot')
