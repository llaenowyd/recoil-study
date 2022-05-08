import { atom } from 'recoil'

export const colorSchemeState = atom({
  key: 'colorScheme',
  default: 'light',
})

export const colorSchemeInheritSystemState = atom({
  key: 'colorSchemeInheritSystem',
  default: true,
})
