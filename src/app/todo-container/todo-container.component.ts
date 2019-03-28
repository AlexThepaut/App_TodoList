import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todoList: Todo[];

  handleCheckBoxChange(todo) {
    this.todoService.updateTodo(todo).then((listTodo)=>{
      this.todoList = listTodo;
    });
  }

  handleNewTodo(titleNewCard) {
    this.todoService.addCard(titleNewCard).then((listTodo)=>{
      this.todoList = listTodo;
    });
  }

  handleDeleteCard(name) {
    this.todoService.deleteCard(name).then((listTodo)=>{
      this.todoList = listTodo;
    });
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().then((listTodo)=>{
      this.todoList = listTodo;
    });
  }

}
