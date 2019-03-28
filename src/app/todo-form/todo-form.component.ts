import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = "";

  @Output()
  saveNewTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor(private serviceTodo: TodoService) { }

  ngOnInit() {
  }

  nameChange(name) {
    this.title = name.target.value;
  }

  handleClick() {
    this.serviceTodo.add(this.title);
  }
}
