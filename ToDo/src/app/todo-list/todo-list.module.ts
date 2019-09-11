import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthGuardService } from '../guards/AuthGuard.service';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthGuardService]
  }
];


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [TodoListComponent]
})
export class TodoListModule { }
