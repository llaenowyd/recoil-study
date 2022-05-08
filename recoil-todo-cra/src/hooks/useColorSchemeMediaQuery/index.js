// cf https://blog.bitsrc.io/how-to-sync-your-react-app-with-the-system-color-scheme-78c0ad00074b

import { useCallback, useEffect, useRef, useState } from 'react'

import { getCurrentColorScheme } from './util'

export const useColorSchemeMediaQuery = () => {
  const isMounted = useRef()
  const colorScheme = useRef()

  const [scheme, setColorScheme] = useState(() => {
    const { scheme } = (colorScheme.current = getCurrentColorScheme())
    return scheme
  })

  const schemeChangeHandler = useCallback(evt => {
    if (!evt.matches) {
      colorScheme.current.query.removeEventListener(
        'change',
        schemeChangeHandler
      )

      const { query, scheme } = (colorScheme.current = getCurrentColorScheme())

      if (isMounted.current) {
        setColorScheme(scheme)
      }

      query.addEventListener('change', schemeChangeHandler)
    }
  }, [])

  useEffect(() => {
    const { query } = (colorScheme.current = getCurrentColorScheme())

    query.addEventListener('change', schemeChangeHandler)

    isMounted.current = true

    return () => {
      const { query } = colorScheme.current
      query.removeEventListener('change', schemeChangeHandler)
      isMounted.current = false
    }
  }, [schemeChangeHandler])

  return scheme
}
