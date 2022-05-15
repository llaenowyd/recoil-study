import React, { useCallback, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Lock, Moon, Sun, Unlock } from 'lucide-react'
import colors from 'tailwindcss/colors'
import tw from 'twin.macro'
import { SlideIn } from '@a110/rito'

import { DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '../constants'
import { useColorScheme } from '../hooks/useColorScheme'
import {
  colorSchemeInheritSystemState,
  colorSchemeState,
} from '../recoil/settings'

const Container = tw.div`
  flex
  p-2
  gap-2
  select-none
  justify-end
  border-2
  border-transparent
  hover:border-text-primary
  rounded-xl
`

const DarkModeToggle = () => {
  const [isHovered, setIsHovered] = useState(false)
  const actualColorScheme = useColorScheme()

  const [onMouseEnter, onMouseLeave] = useMemo(
    () => [
      () => {
        setIsHovered(true)
      },
      () => {
        setIsHovered(false)
      },
    ],
    [setIsHovered]
  )

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

  // tbd recoil toggle
  const toggleColorSchemeInheritSystem = useCallback(
    () => setColorSchemeInheritSystem(!colorSchemeInheritSystem),
    [colorSchemeInheritSystem, setColorSchemeInheritSystem]
  )

  const LockIcon = colorSchemeInheritSystem ? Lock : Unlock
  const ColorSchemeIcon = DARK_COLOR_SCHEME === actualColorScheme ? Moon : Sun

  return (
    <Container onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <SlideIn hidden={!isHovered}>
        <LockIcon
          style={{ cursor: 'pointer' }}
          color={colors['text-primary']}
          onClick={toggleColorSchemeInheritSystem}
        />
      </SlideIn>
      <ColorSchemeIcon
        style={{ cursor: 'pointer' }}
        color={colors['text-primary']}
        onClick={oneClickToggle}
      />
    </Container>
  )
}

export default DarkModeToggle
