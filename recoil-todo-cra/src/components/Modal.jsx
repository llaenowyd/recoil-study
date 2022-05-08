import React from 'react'
import tw from 'twin.macro'

const Overlay = tw.div`
  absolute
  top-0
  right-0
  bottom-0
  left-0
  bg-obscure
  opacity-70
  backdrop-blur-sm
  flex
  justify-center
  items-center
  z-10
`
const Content = tw.div`
  flex
  justify-center
  items-center
  w-4/5
`

const Modal = ({ children, visible, hide }) =>
  !visible ? null : (
    <Overlay onClick={hide}>
      <Content
        onClick={ev => {
          ev.stopPropagation()
        }}
      >
        {children}
      </Content>
    </Overlay>
  )

export default Modal
