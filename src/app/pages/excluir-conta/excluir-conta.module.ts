import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExcluirContaPageRoutingModule } from './excluir-conta-routing.module';

import { ExcluirContaPage } from './excluir-conta.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExcluirContaPageRoutingModule,
    FooterModule
  ],
  declarations: [ExcluirContaPage]
})
export class ExcluirContaPageModule {}
