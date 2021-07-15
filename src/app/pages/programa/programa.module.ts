import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramaPageRoutingModule } from './programa-routing.module';

import { ProgramaPage } from './programa.page';
import { CardAulaModule } from 'src/app/components/card-aula/card-aula.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramaPageRoutingModule,
    CardAulaModule
  ],
  declarations: [ProgramaPage]
})
export class ProgramaPageModule {}
