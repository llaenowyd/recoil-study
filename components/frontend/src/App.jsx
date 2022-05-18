import React from 'react'
import { RecoilRoot } from 'recoil'

import ColorSchemeProvider from './components/ColorSchemeProvider'
import DesktopLayout from './components/DesktopLayout'
import GlobalStyles from './components/GlobalStyles'

const App = () => (
  <RecoilRoot>
    <ColorSchemeProvider>
      <GlobalStyles />
      <DesktopLayout />
    </ColorSchemeProvider>
  </RecoilRoot>
)

export default App
