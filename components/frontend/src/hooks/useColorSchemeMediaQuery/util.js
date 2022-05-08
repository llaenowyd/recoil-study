// cf https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b

import {
  ANY_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
} from '../../constants'

const makeMakeMatchMedia = colorScheme => () =>
  matchMedia(`(prefers-color-scheme: ${colorScheme})`)

const mediaQueryMakers = [
  LIGHT_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  ANY_COLOR_SCHEME,
].map(mode => [mode, makeMakeMatchMedia(mode)])

export const getCurrentColorScheme = (() => {
  const mediaQueries = mediaQueryMakers.map(([mode, makeQuery]) => [
    mode,
    makeQuery(),
  ])

  return () => {
    for (let [scheme, query] of mediaQueries) {
      if (query.matches) {
        return { query, scheme }
      }
    }

    throw new Error('assert unreachable')
  }
})()
