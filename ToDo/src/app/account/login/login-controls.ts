import { CustomControl } from 'src/app/shared/custom-control/custom-control';
import { LoginForm } from './login-form';

export class LoginControls {
  controls: CustomControl[];

  initializeControls(loginForm: LoginForm) {
    this.controls = [
      {
        formGroup: loginForm.form,
        controlType: 'input',
        type: 'text',
        formControlName: 'username',
        placeholder: 'Nazwa użytkownika',
        class: 'mb-4'
      },
      {
        formGroup: loginForm.form,
        controlType: 'input',
        type: 'password',
        formControlName: 'password',
        placeholder: 'Hasło',
        class: 'mb-4'
      }

    ];
  }
}
