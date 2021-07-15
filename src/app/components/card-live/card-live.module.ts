import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLiveComponent } from './card-live.component';


@NgModule({
  declarations: [CardLiveComponent],
  exports: [CardLiveComponent],
  imports: [
    CommonModule,
    
  ]
})
export class CardLiveModule { }
