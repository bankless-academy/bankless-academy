// Signal for "the interactive app tree (Web3Providers > AppProvider > Layout)
// is on screen". Module state, so it survives client-side navigations.
//
// Used by the lesson pages' server-rendered hero (LessonSeoBlock): on a
// direct page load the hero fills the viewport until the app's JS arrives; on
// a client-side navigation the app is already mounted and the hero must never
// flash. AppProvider calls markAppMounted() from an effect.
const EVENT = 'ba:app-mounted'

let mounted = false

export const markAppMounted = (): void => {
  if (mounted) return
  mounted = true
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(EVENT))
}

export const isAppMounted = (): boolean => mounted

export const onAppMounted = (cb: () => void): (() => void) => {
  if (typeof window === 'undefined') return () => undefined
  window.addEventListener(EVENT, cb)
  return () => window.removeEventListener(EVENT, cb)
}
