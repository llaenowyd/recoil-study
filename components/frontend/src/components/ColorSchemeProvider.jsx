import {
  ColorSchemeProvider as RitoColorSchemeProvider,
  DeviceColorSchemeProvider,
} from '@a110/rito'
import { useRecoilState } from 'recoil'

import {
  colorSchemeState,
  followDeviceColorSchemeState,
} from '../recoil/settings'

import '@a110/rito/default-palettes.css'

const ColorSchemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useRecoilState(colorSchemeState)
  const [followDevice, setFollowDevice] = useRecoilState(
    followDeviceColorSchemeState
  )

  return (
    <DeviceColorSchemeProvider>
      <RitoColorSchemeProvider
        appColorSchemeState={{
          colorScheme,
          setColorScheme,
          followDevice,
          setFollowDevice,
        }}
      >
        {children}
      </RitoColorSchemeProvider>
    </DeviceColorSchemeProvider>
  )
}

export default ColorSchemeProvider
