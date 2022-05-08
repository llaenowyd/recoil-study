import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 as uuidv4 } from 'uuid'

import { TodoItem } from './todo-item.entity'
import * as rawData from './todos.json'

@Injectable()
export class TodosService {
  private _todoList: TodoItem[]

  constructor() {
    this._todoList = [...rawData.items]
  }

  getTodos = async (): Promise<TodoItem[]> => {
    return Promise.resolve(this._todoList)
  }

  addTodo = async (description: string): Promise<TodoItem> => {
    const newItem = {
      id: uuidv4(),
      description,
      created_at: new Date().toISOString(),
      tags: [],
      is_complete: false,
    }

    this._todoList.push(newItem)

    return newItem
  }

  updateTodo = async (todoItem: TodoItem): Promise<void> => {
    const { id } = todoItem

    const offset = this._todoList.findIndex(({ id: thatId }) => id === thatId)

    if (offset < 0) {
      return Promise.reject(new NotFoundException(`Unknown item '${id}'`))
    }

    this._todoList[offset] = todoItem

    return Promise.resolve()
  }
}
