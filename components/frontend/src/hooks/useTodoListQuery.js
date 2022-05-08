import { useRecoilValue } from 'recoil'

import { todoListQuery } from '../recoil/todos'

export const useTodoListQuery = () => useRecoilValue(todoListQuery)
