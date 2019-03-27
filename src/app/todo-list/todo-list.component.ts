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

  handleCheckBoxChange(todo){
    this.checkBoxChange.emit(todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
