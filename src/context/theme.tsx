import { createContext, useState, useEffect } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import { KEY_THEME, KEY_THEME_DARK, KEY_THEME_LIGHT } from '@/config'

type TThemeValue = typeof KEY_THEME_DARK | typeof KEY_THEME_LIGHT
type TThemeContext = {
  theme?: TThemeValue
  setTheme?: Dispatch<SetStateAction<TThemeValue>>
}

function getInitialTheme(): TThemeValue {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(KEY_THEME)
    if (typeof storedPrefs === 'string') {
      return storedPrefs as TThemeValue
    }

    const userMedia = window.matchMedia(
      `(prefers-color-scheme: ${KEY_THEME_DARK})`
    )
    if (userMedia.matches) {
      return KEY_THEME_DARK
    }
  }

  return KEY_THEME_LIGHT
}

export const ThemeContext = createContext<TThemeContext>({})

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState<TThemeValue>(getInitialTheme())

  const rawSetTheme = (rawTheme: TThemeValue) => {
    const root = window.document.documentElement
    const isDark = rawTheme === KEY_THEME_DARK

    root.classList.remove(isDark ? KEY_THEME_LIGHT : KEY_THEME_DARK)
    root.classList.add(rawTheme)

    localStorage.setItem(KEY_THEME, rawTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
