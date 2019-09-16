import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { hasNumber, hasUpper, hasLower, hasSpecial } from 'src/app/validators/PasswordValidator';

export class RegisterForm {
  form: FormGroup;

  buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]
      ],
      firstname: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      lastname: [null, [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          hasNumber,
          hasUpper,
          hasLower,
          hasSpecial
        ]
      ]
    });
  }

}
