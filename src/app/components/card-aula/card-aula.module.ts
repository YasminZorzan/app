import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAulaComponent } from './card-aula.component';

@NgModule({
  declarations: [CardAulaComponent],
  exports: [CardAulaComponent],
  imports: [
    CommonModule
  ]
})
export class CardAulaModule { }
