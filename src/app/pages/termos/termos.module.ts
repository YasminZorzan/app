import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermosPageRoutingModule } from './termos-routing.module';

import { TermosPage } from './termos.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    TermosPageRoutingModule
  ],
  declarations: [TermosPage]
})
export class TermosPageModule {}
