import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import * as todoJson from '../models/todo.json';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = todoJson.map(
    t => new Todo(t.id, t.title, t.isDone)
  );

  getTodos():Promise<Array<Todo>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todoList)
      }, 100);
    });
  }

  updateTodo(todoToChange):Promise<Array<Todo>> {
    let oldTodo = this.todoList.find(t => t.title == todoToChange.title);
    let withoutList = _.without(this.todoList, oldTodo);
    this.todoList = [...withoutList, { ...oldTodo, isDone: !oldTodo.isDone }]
      .sort((a, b) => a.id - b.id);
    return this.getTodos();
  }

  addCard(titleNewCard):Promise<Array<Todo>> {
    this.todoList = [...this.todoList, new Todo(this.todoList.length + 1, titleNewCard, false)];
    return this.getTodos();
  }

  deleteCard(titleCardToDelete):Promise<Array<Todo>> {
    let oldTodo = this.todoList.find(t => t.title == titleCardToDelete);
    let withoutList = _.without(this.todoList, oldTodo);
    this.todoList = withoutList;
    return this.getTodos();
  }

  constructor() { }
}
