import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RatingComponent],
  exports: [RatingComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class RatingModule { }
