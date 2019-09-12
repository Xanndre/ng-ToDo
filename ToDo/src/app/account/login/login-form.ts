import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

export class LoginForm {
  form: FormGroup;

  buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get username() {
    return this.form.get('username') as FormArray;
  }

  get password() {
    return this.form.get('password') as FormArray;
  }
}
