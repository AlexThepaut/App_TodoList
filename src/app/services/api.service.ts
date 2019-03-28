import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/Todo';

const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODOS: string = 'todos';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private httpClient: HttpClient) { }

	getAllTodos() {
		return this.httpClient.get(`${API_BASE_URL}${API_TODOS}`);
	}

	getTodo(id: number) {
		return this.httpClient.get(`${API_BASE_URL}${API_TODOS}/${id}`);
	}

	createTodo(todo: Todo) {
		return this.httpClient.post(`${API_BASE_URL}${API_TODOS}`, todo);
	}

	toggleTodo(todo: Todo) {
		return this.httpClient.put(`${API_BASE_URL}${API_TODOS}/${todo.id}`, { ...todo, isDone: !todo.isDone });
	}

	deleteTodo(todo: Todo) {
		return this.httpClient.delete(`${API_BASE_URL}${API_TODOS}/${todo.id}`);
	}

}
