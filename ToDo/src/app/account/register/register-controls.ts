import { CustomControl } from 'src/app/shared/custom-control/custom-control';
import { RegisterForm } from './register-form';

export class RegisterControls {
  controls: CustomControl[];

  initializeControls(registerForm: RegisterForm) {
    this.controls = [
      {
        formGroup: registerForm.form,
        controlType: 'input',
        type: 'text',
        formControlName: 'username',
        placeholder: 'Nazwa użytkownika'
      },
      {
        formGroup: registerForm.form,
        controlType: 'input',
        type: 'text',
        formControlName: 'firstname',
        placeholder: 'Imię',
        class: 'mt-4'
      },
      {
        formGroup: registerForm.form,
        controlType: 'input',
        type: 'text',
        formControlName: 'lastname',
        placeholder: 'Nazwisko',
        class: 'mt-4'
      },
      {
        formGroup: registerForm.form,
        controlType: 'input',
        type: 'email',
        formControlName: 'email',
        placeholder: 'Email',
        class: 'mt-4'
      },
      {
        formGroup: registerForm.form,
        controlType: 'input',
        type: 'password',
        formControlName: 'password',
        placeholder: 'Hasło',
        class: 'mt-4'
      }
    ];
  }
}
