import React from 'react'
import tw from 'twin.macro'
import { DarkModeToggle } from '@a110/rito'

import NewItemButton from './NewItemButton'
import RefreshStateButton from './RefreshStateButton'

const Container = tw.div`
  flex
  p-2
  gap-2
  items-center
`
const RightCell = tw.div`ml-auto`

const Heading = () => (
  <Container>
    <NewItemButton />
    <RefreshStateButton />
    <RightCell>
      <DarkModeToggle />
    </RightCell>
  </Container>
)

export default Heading
