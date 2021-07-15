import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProgramaComponent } from './card-programa.component';


@NgModule({
  declarations: [CardProgramaComponent],
  exports: [CardProgramaComponent],
  imports: [
    CommonModule
  ]
})
export class CardProgramaModule { }
