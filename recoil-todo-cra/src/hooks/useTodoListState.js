import { useEffect, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import { todoListState } from '../recoil/todos'
import { fetchTodos } from '../requests'

/**
 * useTodoListState
 *
 * @returns {{
 *   data?: Todo[],
 *   loading?: boolean,
 *   error?: string,
 *   addTodoItem: (todo: Todo) => void,
 *   refreshTodoList: (invalidate=false) => Promise<void>,
 * }}
 */

// tbd test
// test: add while reset
// test: two views one fetch
// tbd abstract, reusable, typing

// Subroutines

const createAddTodoItem = (todoList, setTodoList) => todoItem =>
  setTodoList({ ...todoList, data: [...todoList.data, todoItem] })

const createRefreshTodoList =
  (todoList, setTodoList) =>
  (invalidate = false) => {
    if (todoList.loading) {
      return
    }

    setTodoList(
      invalidate
        ? { ...todoList, data: null, loading: true, error: null }
        : { ...todoList, loading: true, error: null }
    )

    fetchTodos()
      .then(data => {
        setTodoList({ ...todoList, loading: false, data })
      })
      .catch(err => {
        setTodoList({
          ...todoList,
          loading: false,
          data: null,
          error: err.message,
        })
      })
  }

// useTodoListState

export const useTodoListState = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const [addTodoState, refreshTodoList] = useMemo(
    () => [
      createAddTodoItem(todoList, setTodoList),
      createRefreshTodoList(todoList, setTodoList),
    ],
    [todoList, setTodoList]
  )

  useEffect(() => {
    if (!todoList.data && !todoList.loading) {
      refreshTodoList()
    }
  }, [todoList, refreshTodoList])

  return {
    addTodoState,
    refreshTodoList,
    ...todoList,
  }
}
