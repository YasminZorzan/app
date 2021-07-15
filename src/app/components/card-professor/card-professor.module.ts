import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProfessorComponent } from './card-professor.component';


@NgModule({
  declarations: [CardProfessorComponent],
  exports: [CardProfessorComponent],
  imports: [
    CommonModule
  ]
})
export class CardProfessorModule { }
