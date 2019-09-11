import { Component, OnInit } from '@angular/core';
import { RegisterForm } from './register-form';
import { RegisterControls } from './register-controls';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/Login.service';
import { RegisterData } from 'src/app/models/RegisterData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  invalidRegistration: boolean;
  registerData: RegisterData;

  registerForm: RegisterForm = new RegisterForm();
  formControls: RegisterControls = new RegisterControls();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.registerForm.buildForm(this.formBuilder);
    this.formControls.initializeControls(this.registerForm);
  }

  register() {
    this.registerData = {
      username: this.registerForm.form.value.username,
      firstname: this.registerForm.form.value.firstname,
      lastname: this.registerForm.form.value.lastname,
      email: this.registerForm.form.value.email,
      password: this.registerForm.form.value.password
    };

    this.loginService.register(this.registerData).subscribe(
      () => {
        this.invalidRegistration = false;
        this.router.navigate(['/login']);
      },
      err => {
        this.invalidRegistration = true;
      }
    );
  }

}
