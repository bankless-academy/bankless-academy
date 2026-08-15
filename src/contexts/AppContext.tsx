import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react'
import { useRouter } from 'next/router'
import i18next from 'i18next'

import {
  hasLangSegment,
  isLocalizablePath,
  parseLangFromPath,
  readPreferredLanguage,
  writePreferredLanguage,
} from 'constants/languages'
import { loadLanguage } from 'utils/translation'

export interface OnboardingModalOptions {
  newsletterOnly?: boolean
  forceOnboarding?: boolean
}

export interface AppContextType {
  hideNavBar: boolean
  setHideNavBar: (value: boolean) => void
  language: string
  setLanguage: (value: string) => void
  openLessons: string[]
  setOpenLessons: (value: string[]) => void
  // There is exactly ONE OnboardingModal in the app, rendered by `layout/index`
  // and driven from here. Never mount another one: two instances open at the
  // same time stack two overlays on top of each other.
  isOnboardingModalOpen: boolean
  onboardingModalOptions: OnboardingModalOptions
  openOnboardingModal: (options?: OnboardingModalOptions) => void
  closeOnboardingModal: () => void
  // Add more app-wide states here as needed
}

export const AppContext = createContext<AppContextType>({
  hideNavBar: false,
  setHideNavBar: () => {},
  language: 'en',
  setLanguage: () => {},
  openLessons: [],
  setOpenLessons: () => {},
  isOnboardingModalOpen: false,
  onboardingModalOptions: {},
  openOnboardingModal: () => {},
  closeOnboardingModal: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hideNavBar, setHideNavBar] = useState(false)
  const [language, setLanguage] = useState('en')
  const [openLessons, setOpenLessons] = useState<string[]>([])
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false)
  const [onboardingModalOptions, setOnboardingModalOptions] =
    useState<OnboardingModalOptions>({})
  const router = useRouter()

  const openOnboardingModal = useCallback(
    (options: OnboardingModalOptions = {}) => {
      setOnboardingModalOptions(options)
      setIsOnboardingModalOpen(true)
    },
    []
  )

  // keep the options while closing so the content doesn't flip mid-animation
  const closeOnboardingModal = useCallback(
    () => setIsOnboardingModalOpen(false),
    []
  )

  // Single source of truth for the active language. This used to be split
  // between here and LanguageSelector, which each re-applied their own answer
  // on every route change and fought: reading a French lesson then going to the
  // homepage snapped back to English, because the URL had set the language
  // without ever recording it as the reader's preference.
  //
  // Three cases, in order:
  //   /lessons/fr/x, /glossary/fr  explicit choice -> apply AND remember
  //   /lessons/x, /glossary        this page is English -> apply, remember
  //                                nothing (a French reader keeps their pref)
  //   anywhere else                no language in the URL -> apply the pref
  useEffect(() => {
    const path = router.asPath
    let next: string
    if (hasLangSegment(path)) {
      next = parseLangFromPath(path)
      writePreferredLanguage(next)
    } else if (isLocalizablePath(path)) {
      next = 'en'
    } else {
      next = readPreferredLanguage() || 'en'
    }

    setLanguage(next)
    // loadLanguage is idempotent and MUST NOT be gated on the language
    // differing: after a reload the detector has already set i18next.language
    // to the stored language, so that guard skipped the load entirely and left
    // the UI in English with the right language selected.
    void loadLanguage(next).then(() => {
      if (i18next.language !== next) i18next.changeLanguage(next)
    })
  }, [router.asPath])

  const value = {
    hideNavBar,
    setHideNavBar,
    language,
    setLanguage: (lang: string) => {
      setLanguage(lang)
      void loadLanguage(lang).then(() => i18next.changeLanguage(lang))
    },
    openLessons,
    setOpenLessons,
    isOnboardingModalOpen,
    onboardingModalOptions,
    openOnboardingModal,
    closeOnboardingModal,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
