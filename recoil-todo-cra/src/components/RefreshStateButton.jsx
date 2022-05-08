import React from 'react'

import { useTodoListState } from '../hooks/useTodoListState'

import Button from './Button'

// This shows how to manually use an async function to set the
// value of an atom, along with loading and error states,
// encapsulated in the hook.

const RefreshStateButton = ({ disabled }) => {
  const { refreshTodoList } = useTodoListState()

  return (
    <Button label="Refresh" onClick={refreshTodoList} disabled={disabled} />
  )
}

export default RefreshStateButton
