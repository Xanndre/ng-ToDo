import { CustomControl } from 'src/app/shared/custom-control/custom-control';
import { TodoCreateForm } from './todo-create-form';

export class TodoCreateControls {
  controls: CustomControl[];

  initializeControls(createForm: TodoCreateForm) {
    this.controls = [
      {
        formGroup: createForm.form,
        controlType: 'input',
        type: 'text',
        formControlName: 'title',
        placeholder: 'Tytuł'
      },
      {
        formGroup: createForm.form,
        controlType: 'textarea',
        type: 'text',
        formControlName: 'description',
        placeholder: 'Opis',
        rows: 5,
        class: 'mt-4'
      }

    ];
  }
}
