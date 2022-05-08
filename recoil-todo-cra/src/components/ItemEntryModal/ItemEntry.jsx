import React, { useEffect, useRef } from 'react'

import Entry from './Entry'
import HeadingText from './HeadingText'
import { Container, Line } from './styled'
import { useController } from './useController'

const ItemEntry = ({ hide }) => {
  const entryRef = useRef()
  useController(entryRef, hide)

  useEffect(() => {
    entryRef.current.focus()
  }, [])

  return (
    <Container>
      <HeadingText />
      <Line>
        <Entry ref={entryRef} />
      </Line>
    </Container>
  )
}

export default ItemEntry
