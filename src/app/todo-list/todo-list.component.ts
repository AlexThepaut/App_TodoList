import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  @Input()
  todoList: Todo[];

  handleCheckBoxChange(todo){
    console.log(todo);
  }

  constructor() { }

  ngOnInit() {
  }

}
