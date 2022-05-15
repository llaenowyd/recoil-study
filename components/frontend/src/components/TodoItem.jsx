import React, { useCallback } from 'react'
import tw from 'twin.macro'
import { Button } from '@a110/rito'

import { useTodoListState } from '../hooks/useTodoListState'
import { patchTodo } from '../requests'

// tbd indicate completed / open
// tbd ux on completed toggle
// tbd display tags

const Container = tw.div`
  w-full
  p-2
  gap-2
  flex
  flex-col
  rounded
  bg-secondary
`

const IdLabel = tw.div`w-full text-2xs italic truncate text-secondary`
const Description = tw.div`w-full flex-1`
const RightRow = tw.div`flex justify-end`

const TodoItem = ({ item }) => {
  const { refreshTodoList } = useTodoListState()

  const isComplete = item?.is_complete

  const onPatchClick = useCallback(
    () =>
      patchTodo({ ...item, is_complete: !isComplete }).then(() => {
        refreshTodoList()
      }),
    [item]
  )

  return (
    <Container isComplete={isComplete}>
      <Description>{item.description}</Description>
      <IdLabel>{item.id}</IdLabel>
      <RightRow>
        <Button
          label={isComplete ? 'Re-Open' : 'Complete'}
          onClick={onPatchClick}
        />
      </RightRow>
    </Container>
  )
}

export default TodoItem
