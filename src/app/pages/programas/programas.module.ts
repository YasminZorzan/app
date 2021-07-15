import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramasPageRoutingModule } from './programas-routing.module';

import { ProgramasPage } from './programas.page';

import { CardProgramaModule } from 'src/app/components/card-programa/card-programa.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramasPageRoutingModule,
    CardProgramaModule
  ],
  declarations: [ProgramasPage]
})
export class ProgramasPageModule {}
