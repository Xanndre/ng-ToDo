import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

export class TodoCreateForm {
  form: FormGroup;

  buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: [null, Validators.required],
      description: [null]
    });
  }
}
