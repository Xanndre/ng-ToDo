import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/Todo.service';
import { TodoCreateForm } from './todo-create-form';
import { TodoCreateControls } from './todo-create-controls';
import { FormBuilder } from '@angular/forms';
import { TodoCreated } from 'src/app/models/TodoCreated';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  isTodosLoaded: boolean;
  createdTodo: TodoCreated;

  createForm: TodoCreateForm = new TodoCreateForm();
  formControls: TodoCreateControls = new TodoCreateControls();

  constructor(private todoService: TodoService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
    this.createForm.buildForm(this.formBuilder);
    this.formControls.initializeControls(this.createForm);
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

  createTodo() {
    this.createdTodo = {
      title: this.createForm.form.value.title,
      description: this.createForm.form.value.description,
      userId: localStorage.getItem('userId')
    };
    this.todoService.createTodo(this.createdTodo).subscribe(() => {
      this.getUserTodos();
      this.createForm.form.reset();
    });
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  toggleModal() {
    this.createTodo();
    this.modalService.dismissAll();
  }

}
