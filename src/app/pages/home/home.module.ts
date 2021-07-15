import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { CardAulaModule } from '../../components/card-aula/card-aula.module';
import { CardLiveModule } from '../../components/card-live/card-live.module';
import { CardProgramaModule } from '../../components/card-programa/card-programa.module';
import { CardProfessorModule } from '../../components/card-professor/card-professor.module';
import { CardAmigoModule } from '../../components/card-amigo/card-amigo.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CardAulaModule,
    CardLiveModule,
    CardProgramaModule,
    CardProfessorModule,
    CardAmigoModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
