import React from 'react'
import { RecoilRoot } from 'recoil'

import DesktopLayout from './components/DesktopLayout'
import GlobalStyles from './components/GlobalStyles'
import ThemeContextProvider from './components/ThemeContextProvider'

const App = () => (
  <RecoilRoot>
    <ThemeContextProvider>
      <GlobalStyles />
      <DesktopLayout />
    </ThemeContextProvider>
  </RecoilRoot>
)

export default App
