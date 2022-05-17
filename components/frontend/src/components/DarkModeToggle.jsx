import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { DarkModeToggle as RitoDarkModeToggle } from '@a110/rito'

import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../constants'
import { useColorScheme } from '../hooks/useColorScheme'
import {
  colorSchemeInheritSystemState,
  colorSchemeState,
} from '../recoil/settings'

const DarkModeToggle = () => {
  const actualColorScheme = useColorScheme()

  const [colorSchemeInheritSystem, setColorSchemeInheritSystem] =
    useRecoilState(colorSchemeInheritSystemState)
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState)

  const oneClickToggle = useCallback(() => {
    const targetColorScheme =
      DARK_COLOR_SCHEME === actualColorScheme
        ? LIGHT_COLOR_SCHEME
        : DARK_COLOR_SCHEME

    if (targetColorScheme !== colorScheme) {
      setColorScheme(targetColorScheme)
    }

    if (colorSchemeInheritSystem) {
      setColorSchemeInheritSystem(false)
    }
  }, [actualColorScheme, colorScheme, colorSchemeInheritSystem])

  return (
    <RitoDarkModeToggle
      colorScheme={actualColorScheme}
      setColorScheme={oneClickToggle}
      followDevice={colorSchemeInheritSystem}
      setFollowDevice={setColorSchemeInheritSystem}
    />
  )
}

export default DarkModeToggle
