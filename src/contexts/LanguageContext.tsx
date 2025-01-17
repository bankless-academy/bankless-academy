import React, { createContext, useContext, useState, useEffect } from 'react'

type LanguageContextType = {
  currentLanguage: string
  refreshLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  refreshLanguage: () => {},
})

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [refreshCounter, setRefreshCounter] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentLanguage(localStorage.getItem('i18nextLng') || 'en')
    }
  }, [refreshCounter])

  const refreshLanguage = () => {
    setRefreshCounter((prev) => prev + 1)
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, refreshLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
