import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../../constants'
import { useColorScheme } from '../../hooks/useColorScheme'
import { colorSchemeState } from '../../recoil/settings'

import ThemeContext from './context'

const ThemeContextProvider = ({ children }) => {
  const colorScheme = useColorScheme()
  const setColorSchemeState = useSetRecoilState(colorSchemeState)

  const [thisColorScheme, thatColorScheme] =
    DARK_COLOR_SCHEME === colorScheme
      ? [DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME]
      : [LIGHT_COLOR_SCHEME, DARK_COLOR_SCHEME]

  useEffect(() => {
    const root = window?.document?.documentElement

    if (!root) {
      return
    }

    root.classList.remove(thatColorScheme)
    root.classList.add(thisColorScheme)
    setColorSchemeState(colorScheme)
  }, [thisColorScheme, thatColorScheme])

  return (
    <ThemeContext.Provider value={thisColorScheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
export default ThemeContextProvider
