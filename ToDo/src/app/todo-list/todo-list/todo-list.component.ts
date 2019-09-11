import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/Todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  isTodosLoaded: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getUserTodos();
  }

  getUserTodos() {
    const username = localStorage.getItem('username');
    this.todoService.getUserTodos(username).subscribe(response => {
      this.todos = response;
      console.log(this.todos);
      this.isTodosLoaded = true;
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getUserTodos();
    });
  }

}
