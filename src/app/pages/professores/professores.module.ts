import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessoresPageRoutingModule } from './professores-routing.module';

import { ProfessoresPage } from './professores.page';
import { CardProfessorModule } from 'src/app/components/card-professor/card-professor.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardProfessorModule,
    ProfessoresPageRoutingModule
  ],
  declarations: [ProfessoresPage]
})
export class ProfessoresPageModule {}
