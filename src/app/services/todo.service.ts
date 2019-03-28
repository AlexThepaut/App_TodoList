import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import _ from 'lodash';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[];

  constructor(private apiService: ApiService) { }

  initialize() {
    this.apiService.getAllTodos()
      .subscribe((result: any) => {
        this.todoList = result.map(td => new Todo(td.id, td.title, td.isDone))
      }, () => {
        console.log('error');
      }, () => {
        //console.log('complete');
      });
  }

  add(title) {
    this.apiService.createTodo(new Todo(this.todoList.length + 1, title, false))
      .subscribe((result: any) => {
        this.todoList = [...this.todoList, result].sort((a, b) => a.id - b.id);
      }, () => {
        console.log('error');
      }, () => {
        //console.log('complete');
      });

  }

  toggle(todo) {
    this.apiService.toggleTodo(todo)
      .subscribe((result: any) => {
        this.todoList = [..._.without(this.todoList, todo), result].sort((a, b) => a.id - b.id)
      }, () => {
        console.log('error');
      }, () => {
        //console.log('complete');
      });
  }

  delete(todo) {
    this.apiService.deleteTodo(todo)
      .subscribe((result: any) => {
        this.todoList = _.without(this.todoList, todo);
      }, (e: any) => {
        console.log(e);
      }, () => {
        //console.log('complete');
      });
  }
}
