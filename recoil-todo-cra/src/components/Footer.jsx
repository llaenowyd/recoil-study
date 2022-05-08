import React from 'react'
import tw from 'twin.macro'

import { useThemeContext } from '../hooks/useThemeContext'

const ActionableImg = tw.img`cursor-pointer`
const Container = tw.div`w-full p-2 flex justify-center`
const FinePrint = tw.div`text-xs italic select-none cursor-pointer`
const FlexAnchor = tw.a`flex`

const Footer = () => {
  const theme = useThemeContext()

  return (
    <Container>
      <FlexAnchor href="https://recoiljs.org/">
        <ActionableImg
          src={`/recoil-${theme}.png`}
          alt="Recoil Icon"
          height={16}
          width={38}
        />
        <FinePrint>Powered by Recoil</FinePrint>
      </FlexAnchor>
    </Container>
  )
}

export default Footer
