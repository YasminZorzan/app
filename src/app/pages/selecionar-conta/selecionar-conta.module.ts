import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarContaPageRoutingModule } from './selecionar-conta-routing.module';

import { SelecionarContaPage } from './selecionar-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarContaPageRoutingModule
  ],
  declarations: [SelecionarContaPage]
})
export class SelecionarContaPageModule {}
