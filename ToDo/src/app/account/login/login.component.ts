import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login-form';
import { LoginControls } from './login-controls';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/Login.service';
import { LoginData } from 'src/app/models/LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  loginData: LoginData;

  loginForm: LoginForm = new LoginForm();
  formControls: LoginControls = new LoginControls();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm.buildForm(this.formBuilder);
    this.formControls.initializeControls(this.loginForm);
  }

  signIn() {
    this.loginData = {
      username: this.loginForm.form.value.username,
      password: this.loginForm.form.value.password
    };

    this.loginService.login(this.loginData).subscribe(
      response => {
        const res = response as any;
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('userId', res.id);
        localStorage.setItem('username', res.username);
        this.invalidLogin = false;
        this.router.navigate(['/todos']);
      },
      err => {
        this.invalidLogin = true;
      }
    );
  }

}
