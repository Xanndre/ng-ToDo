import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterData } from '../models/RegisterData';
import { LoginData } from '../models/LoginData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private jwtHelper: JwtHelperService,
    private client: HttpClient
  ) { }

  isUserAuthenticated() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  register(register: RegisterData) {
    return this.client.post(
      'https://localhost:44354/api/Account/Register',
      register,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

  login(login: LoginData) {
    return this.client.post(
      'https://localhost:44354/api/Account/Login',
      login,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

}
