import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorPageRoutingModule } from './professor-routing.module';

import { ProfessorPage } from './professor.page';
import { CardAulaModule } from 'src/app/components/card-aula/card-aula.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardAulaModule,
    ProfessorPageRoutingModule
  ],
  declarations: [ProfessorPage]
})
export class ProfessorPageModule {}
