import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class LoginForm {
  form: FormGroup;

  buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}


