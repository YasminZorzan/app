import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAgendarComponent } from './modal-agendar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ModalAgendarComponent],
  exports: [ModalAgendarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ModalAgendarModule { }
