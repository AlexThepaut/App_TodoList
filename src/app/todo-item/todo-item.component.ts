import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(private serviceTodo:TodoService) { }

  checkBoxChange(){
    this.serviceTodo.toggle(this.todo);
  }

  lineThrough(){
    return this.todo.isDone;
  }
  
  closeCard(){
    this.serviceTodo.delete(this.todo);
  }

  ngOnInit() {
  }

}
