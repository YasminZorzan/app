import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAmigoComponent } from './card-amigo.component';

@NgModule({
  declarations: [CardAmigoComponent],
  exports: [CardAmigoComponent],
  imports: [
    CommonModule
  ]
})
export class CardAmigoModule { }
