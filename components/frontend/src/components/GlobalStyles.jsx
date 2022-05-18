import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    line-height: 1.1rem;
    ${tw`
      transition-all
      duration-200
      bg-primary
      text-primary
      font-sans
      antialiased
    `}
  }

  #root {
    ${tw`
      absolute
      inset-0
    `}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
