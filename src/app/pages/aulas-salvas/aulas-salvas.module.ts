import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AulasSalvasPageRoutingModule } from './aulas-salvas-routing.module';

import { AulasSalvasPage } from './aulas-salvas.page';
import { CardAulaModule } from 'src/app/components/card-aula/card-aula.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardAulaModule,
    AulasSalvasPageRoutingModule
  ],
  declarations: [AulasSalvasPage]
})
export class AulasSalvasPageModule {}
