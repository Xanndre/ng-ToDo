import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomErrorComponent } from './custom-error/custom-error.component';


@NgModule({
  declarations: [CustomControlComponent, CustomErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CustomControlComponent, CustomErrorComponent]
})
export class SharedModule { }
