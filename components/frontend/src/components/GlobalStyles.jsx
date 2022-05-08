import React from 'react'
import { createGlobalStyle } from 'styled-components'
import colors from 'tailwindcss/colors'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  .dark {
    --bg-primary: ${colors.slate[900]};
    --bg-secondary: ${colors.slate[800]};
    --bg-control: ${colors.blue[800]};
    --bg-control-disabled: ${colors.gray[500]};
    --bg-obscure: ${colors.slate[800]};
    --text-primary: ${colors.teal[100]};
    --text-secondary: ${colors.teal[500]};
    --text-control: ${colors.sky[100]};
    --text-control-disabled: ${colors.gray[300]};
    --color-shadow: #101010;
  }

  .light {
    --bg-primary: ${colors.slate[50]};
    --bg-secondary: ${colors.slate[200]};
    --bg-control: ${colors.blue[300]};
    --bg-control-disabled: ${colors.gray[300]};
    --bg-obscure: ${colors.blue[900]};
    --text-primary: ${colors.slate[800]};
    --text-secondary: ${colors.slate[500]};
    --text-control: ${colors.sky[800]};
    --text-control-disabled: ${colors.gray[500]};
    --color-shadow: ${colors.gray[400]};
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
