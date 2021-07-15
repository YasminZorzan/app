import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarPageRoutingModule } from './buscar-routing.module';

import { BuscarPage } from './buscar.page';
import { CardAulaModule } from 'src/app/components/card-aula/card-aula.module';
import { ModalAgendarModule } from 'src/app/components/modal-agendar/modal-agendar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CardLiveModule } from 'src/app/components/card-live/card-live.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    CardAulaModule,
    ModalAgendarModule,
    FooterModule,
    CardLiveModule
  ],
  declarations: [BuscarPage]
})
export class BuscarPageModule {}
