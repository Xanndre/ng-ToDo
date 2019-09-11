import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

export class RegisterForm {
  form: FormGroup;

  buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]
      ],
      firstname: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastname: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() {
    return this.form.get('username') as FormArray;
  }

  get firstname() {
    return this.form.get('firstname') as FormArray;
  }

  get lastname() {
    return this.form.get('lastname') as FormArray;
  }

  get password() {
    return this.form.get('password') as FormArray;
  }

  get email() {
    return this.form.get('email') as FormArray;
  }
}
