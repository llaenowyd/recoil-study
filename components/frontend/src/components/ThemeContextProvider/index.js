import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../../constants'
import { useColorScheme } from '../../hooks/useColorScheme'
import { colorSchemeState } from '../../recoil/settings'

import ThemeContext from './context'

const ThemeContextProvider = ({ children }) => {
  const { colorScheme } = useColorScheme()
  const [appColorScheme, setAppColorScheme] = useRecoilState(colorSchemeState)

  const [thisColorScheme, thatColorScheme] =
    DARK_COLOR_SCHEME === colorScheme
      ? [DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME]
      : [LIGHT_COLOR_SCHEME, DARK_COLOR_SCHEME]

  useEffect(() => {
    const root = window?.document?.documentElement

    if (root) {
      root.classList.remove(thatColorScheme)
      root.classList.add(thisColorScheme)
    }

    if (appColorScheme !== thisColorScheme) {
      setAppColorScheme(thisColorScheme)
    }
  }, [thisColorScheme, thatColorScheme, appColorScheme, setAppColorScheme])

  return (
    <ThemeContext.Provider value={thisColorScheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
export default ThemeContextProvider
