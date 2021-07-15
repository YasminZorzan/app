import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuPlanoPageRoutingModule } from './meu-plano-routing.module';

import { MeuPlanoPage } from './meu-plano.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuPlanoPageRoutingModule,
    FooterModule
  ],
  declarations: [MeuPlanoPage]
})
export class MeuPlanoPageModule {}
