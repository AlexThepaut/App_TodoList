import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-item-checkbox',
  templateUrl: './todo-item-checkbox.component.html',
  styleUrls: ['./todo-item-checkbox.component.css']
})
export class TodoItemCheckboxComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  checkBoxChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  chechCheckBoxChange(){
    this.checkBoxChange.emit(this.todo.isDone);
  }

  constructor() { }

  ngOnInit() {
  }

}
