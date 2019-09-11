import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private client: HttpClient) { }

  getUserTodos(username: string): Observable<Todo[]> {
    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      })
    };
    return this.client.get(`https://localhost:44354/api/Todo/user/${username}`, options)
      .pipe(map((res: Todo[]) => {
        return res;
      }));
  }

  deleteTodo(id: number) {
    const options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      })
    };
    return this.client.delete(
      `https://localhost:44354/api/Todo/${id}`, options
    ).pipe();
  }

}
