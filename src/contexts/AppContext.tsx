import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react'
import { useRouter } from 'next/router'
import i18next from 'i18next'

import { isLocalizablePath, parseLangFromPath } from 'constants/languages'

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

  useEffect(() => {
    // On a route whose URL carries the language (lesson, glossary) the URL
    // wins, INCLUDING when it resolves to English. This used to be one-way —
    // only non-English URLs applied — so going back from /lessons/fr/x to
    // /lessons/x left French chrome wrapped around English lesson prose.
    // Anywhere else there is no language in the URL, so the reader's stored
    // preference is left alone.
    if (!isLocalizablePath(router.asPath)) return
    const langFromUrl = parseLangFromPath(router.asPath)
    setLanguage(langFromUrl)
    i18next.changeLanguage(langFromUrl)
  }, [router.asPath])

  const value = {
    hideNavBar,
    setHideNavBar,
    language,
    setLanguage: (lang: string) => {
      setLanguage(lang)
      i18next.changeLanguage(lang)
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
