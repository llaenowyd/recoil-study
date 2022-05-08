import { useCallback } from 'react'

import { useTodoListState } from './useTodoListState'
import { addTodo } from '../requests'

export const useAddTodoState = () => {
  const { addTodoState } = useTodoListState()

  const addTodoThenAddTodo = useCallback(
    todo => {
      return addTodo(todo)
        .then(response => response.json())
        .then(serverCreatedTodo => {
          addTodoState(serverCreatedTodo)
        })
        .catch(err => {
          console.error(err)
        })
    },
    [addTodoState]
  )

  return addTodoThenAddTodo
}
