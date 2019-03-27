import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  checkBoxChange: EventEmitter<Todo> = new EventEmitter<Todo>();

  chechCheckBoxChange(){
    this.todo.isDone = !this.todo.isDone;
    this.checkBoxChange.emit(this.todo);
  }

  lineThrough(){
    return this.todo.isDone;
  }

  constructor() { }

  ngOnInit() {
  }

}
