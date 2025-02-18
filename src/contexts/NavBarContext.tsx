import React, { createContext, useContext, useState } from 'react'

interface NavBarContextType {
  hideNavBar: boolean
  setHideNavBar: (hide: boolean) => void
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined)

export function NavBarProvider({ children }: { children: React.ReactNode }) {
  const [hideNavBar, setHideNavBar] = useState(false)

  return (
    <NavBarContext.Provider value={{ hideNavBar, setHideNavBar }}>
      {children}
    </NavBarContext.Provider>
  )
}

export function useNavBar() {
  const context = useContext(NavBarContext)
  if (context === undefined) {
    throw new Error('useNavBar must be used within a NavBarProvider')
  }
  return context
}
