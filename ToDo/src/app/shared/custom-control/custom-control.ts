import { FormGroup } from '@angular/forms';

export class CustomControl {
  formGroup: FormGroup;
  controlType: string;
  type?: string;
  formControlName: string;
  placeholder?: string;
  readonly?: boolean;
  rows?: number;
  label?: string;
  class?: string;
}
