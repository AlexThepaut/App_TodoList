import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = "";

  @Output()
  saveNewTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  nameChange(name) {
    this.title = name.target.value;
  }

  handleClick() {
    this.saveNewTodo.emit(this.title);
  }
}
