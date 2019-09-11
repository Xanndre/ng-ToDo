import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

export class TodoCreateForm {
  form: FormGroup;

  buildForm(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  get title() {
    return this.form.get('title') as FormArray;
  }

  get description() {
    return this.form.get('description') as FormArray;
  }
}
