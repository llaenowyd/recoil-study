import React from 'react'
import { useRecoilState } from 'recoil'
import { DarkModeToggle as RitoDarkModeToggle } from '@a110/rito'

import { useColorScheme } from '../hooks/useColorScheme'
import { followDeviceColorSchemeState } from '../recoil/settings'

const DarkModeToggle = () => {
  const { colorScheme, setColorScheme } = useColorScheme()
  const [followDeviceColorScheme, setFollowDeviceColorScheme] = useRecoilState(
    followDeviceColorSchemeState
  )

  return (
    <RitoDarkModeToggle
      colorScheme={colorScheme}
      setColorScheme={setColorScheme}
      followDevice={followDeviceColorScheme}
      setFollowDevice={setFollowDeviceColorScheme}
    />
  )
}

export default DarkModeToggle
