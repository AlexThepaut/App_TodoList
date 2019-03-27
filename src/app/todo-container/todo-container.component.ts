import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
