import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import i18next from 'i18next'

interface AppContextType {
  hideNavBar: boolean
  setHideNavBar: (hide: boolean) => void
  language: string
  setLanguage: (lang: string) => void
  // Add more app-wide states here as needed
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hideNavBar, setHideNavBar] = useState(false)
  const [language, setLanguage] = useState('en')
  const router = useRouter()

  useEffect(() => {
    // Set initial language based on URL
    const pathSegments = router.asPath.split('/')
    const langFromUrl = pathSegments[1]?.length === 2 ? pathSegments[1] : 'en'
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
