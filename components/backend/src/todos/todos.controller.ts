import { Body, Controller, Get, Patch, Post } from '@nestjs/common'

import { AddTodoDto } from './add-todo.dto'
import { TodoItem } from './todo-item.entity'
import { TodosService } from './todos.service'

@Controller('todos')
export class TodosController {
  constructor(private _todosService: TodosService) {}

  @Get()
  async getTodos() {
    return this._todosService.getTodos()
  }

  @Post()
  async addTodo(@Body() addTodoDto: AddTodoDto): Promise<TodoItem> {
    return this._todosService.addTodo(addTodoDto.description)
  }

  @Patch()
  async patchTodo(@Body() todoItem: TodoItem): Promise<void> {
    return this._todosService.updateTodo(todoItem)
  }
}
