// Server-side stub for localStorage / sessionStorage.
//
// The app reads localStorage during render in ~116 places (progress flags,
// resume position, badge state, onboarding). That is fine in a browser and
// throws "localStorage is not defined" on the server, which is why the entire
// app used to be wrapped in `dynamic(..., { ssr: false })` and every page
// served an empty <div id="__next">. Guarding all 116 call sites individually
// is a large refactor; a stub gives the same result in ten lines.
//
// It deliberately does NOT persist:
//   - a prerender has no user, so "no stored state" is the correct answer, and
//     it is what the client also sees on a first visit;
//   - a Map here would be process-global and would leak one visitor's state
//     into another visitor's server render.
//
// Writes during render are swallowed. The client re-reads real values on
// hydration, so the only visible effect is that the server-rendered HTML shows
// the logged-out / no-progress state, which is strictly better than today's
// blank page.
//
// Import this FIRST in _app.tsx, before any component module is evaluated.
const noopStorage: Storage = {
  length: 0,
  clear: () => undefined,
  getItem: () => null,
  key: () => null,
  removeItem: () => undefined,
  setItem: () => undefined,
}

if (typeof window === 'undefined') {
  const g = globalThis as unknown as {
    localStorage?: Storage
    sessionStorage?: Storage
  }
  if (!g.localStorage) g.localStorage = noopStorage
  if (!g.sessionStorage) g.sessionStorage = noopStorage
}

export default noopStorage
