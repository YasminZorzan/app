import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoPageRoutingModule } from './historico-routing.module';

import { HistoricoPage } from './historico.page';
import { CardAulaModule } from 'src/app/components/card-aula/card-aula.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardAulaModule,
    HistoricoPageRoutingModule
  ],
  declarations: [HistoricoPage]
})
export class HistoricoPageModule {}
