import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const value = useMemo(() => ({
    language,
    theme,
    toggleLanguage: () => setLanguage(value => value === 'en' ? 'ar' : 'en'),
    toggleTheme: () => setTheme(value => value === 'dark' ? 'light' : 'dark'),
    t: (en, ar) => language === 'ar' ? ar : en,
  }), [language, theme])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used inside AppProvider')
  return context
}
