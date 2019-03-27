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
  checkBoxChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  chechCheckBoxChange(){
    this.checkBoxChange.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
