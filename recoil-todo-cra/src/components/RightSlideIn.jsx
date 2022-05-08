import React from 'react'
import { Transition } from 'react-transition-group'
import { styled } from 'twin.macro'

const Animated = styled.div`
  transform: ${({ state }) =>
    'exit' === state.substring(0, 4)
      ? 'translateX(100%) scaleX(0)'
      : 'translateX(0) scaleX(1)'};
  transition: ${({ state }) =>
    'entering' === state
      ? 'transform 250ms ease-in'
      : 'exiting' === state
      ? 'transform 250ms ease-out'
      : null};
`

const RightSlideIn = ({ children, hidden }) => (
  <Transition in={!hidden} timeout={250}>
    {state => <Animated state={state}>{children}</Animated>}
  </Transition>
)

export default RightSlideIn
