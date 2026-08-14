// Rules for the onboarding popup that Nav schedules on page load.
// Kept as a pure function so the decision can be reasoned about (and tested)
// without a React tree.

export const ONBOARDING_POPUP_DELAY = 10000
export const ONBOARDING_MAX_RETRY = 3

const THREE_DAYS = 60 * 60 * 24 * 3 * 1000

// Pages that open the onboarding modal themselves on mount. Nav must not
// schedule a second popup on top of them.
export const NO_AUTO_ONBOARDING_PATHS = ['/mobile', '/start', '/newsletter']

export type ShouldAutoOpenOnboardingArgs = {
  pathname: string
  // `onboarding` localStorage: '' = never seen, 'done' = completed,
  // anything else = timestamp of the last popup
  onboarding: string
  onboardingRetry: number
  embed?: string
  alreadyShownThisSession: boolean
  now?: number
}

export const shouldAutoOpenOnboarding = ({
  pathname,
  onboarding,
  onboardingRetry,
  embed,
  alreadyShownThisSession,
  now = Date.now(),
}: ShouldAutoOpenOnboardingArgs): boolean => {
  if (alreadyShownThisSession) return false
  if (NO_AUTO_ONBOARDING_PATHS.includes(pathname)) return false
  if (embed) return false
  if (onboardingRetry >= ONBOARDING_MAX_RETRY) return false
  if (onboarding === '') return true
  if (onboarding === 'done') return false
  // onboarding started but not finished: show it again after 3 days
  return now - Number(onboarding) > THREE_DAYS
}
