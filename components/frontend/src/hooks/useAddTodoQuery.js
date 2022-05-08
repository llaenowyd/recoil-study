import { useCallback } from 'react'
import { useRecoilRefresher_UNSTABLE } from 'recoil'

import { todoListQuery } from '../recoil/todos'
import { addTodo } from '../requests'

export const useAddTodoQuery = () => {
  const refreshTodoListQuery = useRecoilRefresher_UNSTABLE(todoListQuery)

  const addTodoThenRefresh = useCallback(
    todo => {
      return addTodo(todo)
        .then(() => {
          refreshTodoListQuery()
        })
        .catch(err => {
          console.error(err)
        })
    },
    [refreshTodoListQuery]
  )

  return addTodoThenRefresh
}
