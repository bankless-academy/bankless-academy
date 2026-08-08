import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import i18next from 'i18next'

import { parseLangFromPath } from 'constants/languages'

export interface AppContextType {
  hideNavBar: boolean
  setHideNavBar: (value: boolean) => void
  language: string
  setLanguage: (value: string) => void
  openLessons: string[]
  setOpenLessons: (value: string[]) => void
  // Add more app-wide states here as needed
}

export const AppContext = createContext<AppContextType>({
  hideNavBar: false,
  setHideNavBar: () => {},
  language: 'en',
  setLanguage: () => {},
  openLessons: [],
  setOpenLessons: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hideNavBar, setHideNavBar] = useState(false)
  const [language, setLanguage] = useState('en')
  const [openLessons, setOpenLessons] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    // Set language from translated lesson URLs (/lessons/<lang>/<slug>);
    // leave the user's selected language untouched everywhere else.
    const langFromUrl = parseLangFromPath(router.asPath)
    if (langFromUrl !== 'en') {
      setLanguage(langFromUrl)
      i18next.changeLanguage(langFromUrl)
    }
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
