import { useRecoilState } from 'recoil'
import {
  useColorScheme as useRitoColorScheme,
  useColorSchemeMediaQuery,
} from '@a110/rito'

import {
  followDeviceColorSchemeState,
  colorSchemeState,
} from '../recoil/settings'

export const useColorScheme = () => {
  const deviceColorScheme = useColorSchemeMediaQuery()
  const [followDeviceColorScheme, setFollowDeviceColorScheme] = useRecoilState(
    followDeviceColorSchemeState
  )
  const [appColorScheme, setAppColorScheme] = useRecoilState(colorSchemeState)

  return useRitoColorScheme({
    deviceColorScheme,
    appColorScheme,
    setAppColorScheme,
    followDeviceColorScheme,
    setFollowDeviceColorScheme,
  })
}
