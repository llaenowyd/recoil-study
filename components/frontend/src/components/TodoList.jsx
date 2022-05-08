import React from 'react'
import tw from 'twin.macro'

import { useTodoListState } from '../hooks/useTodoListState'
import ErrorMessage from './ErrorMessage'
import LoadingSpinner from './LoadingSpinner'

import TodoItem from './TodoItem'

const FluidGrid = tw.div`grid grid-cols-12 gap-2 p-2`
const Cell = tw.div`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4`

const TodoList = () => {
  // Alternative approach - async query selector:
  // const todoList = useTodoListQuery()

  const { data: todoList, loading, error } = useTodoListState()

  return loading ? (
    <LoadingSpinner />
  ) : error ? (
    <ErrorMessage message={error} />
  ) : (
    <FluidGrid>
      {todoList?.map(item => (
        <Cell key={item.id}>
          <TodoItem item={item} />
        </Cell>
      ))}
    </FluidGrid>
  )
}

export default TodoList
