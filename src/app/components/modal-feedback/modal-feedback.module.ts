import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFeedbackComponent } from './modal-feedback.component';
import { RouterModule } from '@angular/router';
import { RatingModule } from '../rating/rating.module';


@NgModule({
  declarations: [ModalFeedbackComponent],
  exports: [ModalFeedbackComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule
  ]
})
export class ModalFeedback { }
