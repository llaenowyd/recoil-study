import React from 'react'

import { HeadingsContainer, Subheading, Heading } from './styled'

const HeadingText = () => (
  <HeadingsContainer>
    <Heading>Describe New To-Do Item</Heading>
    <Subheading>(press Enter to save or Esc to cancel)</Subheading>
  </HeadingsContainer>
)

export default HeadingText
