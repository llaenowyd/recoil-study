import { useRecoilValue } from 'recoil'

import { ANY_COLOR_SCHEME } from '../constants'
import {
  colorSchemeInheritSystemState,
  colorSchemeState,
} from '../recoil/settings'

import { useColorSchemeMediaQuery } from './useColorSchemeMediaQuery'

export const useColorScheme = () => {
  const mediaQueryColorScheme = useColorSchemeMediaQuery()
  const colorSchemeInheritSystem = useRecoilValue(colorSchemeInheritSystemState)
  const colorScheme = useRecoilValue(colorSchemeState)

  return colorSchemeInheritSystem && ANY_COLOR_SCHEME !== mediaQueryColorScheme
    ? mediaQueryColorScheme
    : colorScheme
}
