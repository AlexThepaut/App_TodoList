import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: Todo[];

  @Output()
  checkBoxChange: EventEmitter<Todo> = new EventEmitter<Todo>();

  @Output()
  deleteCard: EventEmitter<string> = new EventEmitter<string>();

  handleCheckBoxChange(todo) {
    this.checkBoxChange.emit(todo);
  }

  handleCloseEvent(event) {
    this.deleteCard.emit(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
