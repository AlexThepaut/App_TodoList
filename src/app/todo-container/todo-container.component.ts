import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import * as todoJson from '../models/todo.json';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList:Todo[] = todoJson.map(
    t => new Todo(t.title, t.isDone)
  );

  handleCheckBoxChange(todo){
    let index = this.todoList.findIndex(t => t.title == todo.title);
    this.todoList[index] = todo;
  }

  handleNewTodo(titleNewCard){
    console.log("bien catch")
    this.todoList.push(new Todo(titleNewCard, false));
  }

  constructor() { }

  ngOnInit() {
  }

}
