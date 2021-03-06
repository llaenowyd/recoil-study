import React from 'react'
import tw from 'twin.macro'

import Footer from './Footer'
import Heading from './Heading'
import ItemEntryModal from './ItemEntryModal'
import TodoList from './TodoList'

const Container = tw.div`h-full flex justify-center`
const Main = tw.div`h-full flex flex-col flex-1 max-w-3xl`
const Content = tw.div`flex-1`

const DesktopLayout = () => {
  return (
    <Container>
      <Main>
        <Heading />
        <Content>
          <TodoList />
        </Content>
        <Footer />
      </Main>
      <ItemEntryModal />
    </Container>
  )
}

export default DesktopLayout
