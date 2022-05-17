import { atom } from 'recoil'

export const colorSchemeState = atom({
  key: 'colorScheme',
  default: 'light',
})

export const followDeviceColorSchemeState = atom({
  key: 'followDeviceColorScheme',
  default: true,
})
