import { useContext } from 'react'

import { ThemeContext } from '../components/ThemeContextProvider'

export const useThemeContext = () => useContext(ThemeContext)
