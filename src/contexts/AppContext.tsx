import React, { createContext, useContext, useState } from 'react'

interface AppContextType {
  hideNavBar: boolean
  setHideNavBar: (hide: boolean) => void
  // Add more app-wide states here as needed
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [hideNavBar, setHideNavBar] = useState(false)
  // Add more state declarations here as needed

  const value = {
    hideNavBar,
    setHideNavBar,
    // Add more states and setters here as needed
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
