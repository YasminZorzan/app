import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoPageRoutingModule } from './cartao-routing.module';

import { CartaoPage } from './cartao.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    CartaoPageRoutingModule
  ],
  declarations: [CartaoPage]
})
export class CartaoPageModule {}
