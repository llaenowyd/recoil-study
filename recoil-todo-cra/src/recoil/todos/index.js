import { atom, selector } from 'recoil'

import { fetchTodos } from '../../requests'

export const todoListState = atom({
  key: 'TodoList',
  default: {},
})

export const todoListQuery = selector({
  key: 'FetchedTodoList',
  get: fetchTodos,
})
