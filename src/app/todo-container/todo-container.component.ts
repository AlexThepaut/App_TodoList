import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import * as todoJson from '../models/todo.json';
import _ from 'lodash';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList: Todo[] = todoJson.map(
    t => new Todo(t.id, t.title, t.isDone)
  );

  handleCheckBoxChange(todo) {
    let oldTodo = this.todoList.find(t => t.title == todo.title);
    let withoutList = _.without(this.todoList, oldTodo);
    this.todoList = [...withoutList, {...oldTodo, isDone: !oldTodo.isDone}]
      .sort((a, b) => a.id - b.id);
  }

  handleNewTodo(titleNewCard) {
    this.todoList = [...this.todoList, new Todo(this.todoList.length+1, titleNewCard, false)];
  }

  handleDeleteCard(name) {
    let oldTodo = this.todoList.find(t => t.title == name);
    let withoutList = _.without(this.todoList, oldTodo);
    this.todoList = withoutList;
  }

  constructor() { }

  ngOnInit() {
  }

}
