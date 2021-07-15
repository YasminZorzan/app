import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacoesPageRoutingModule } from './notificacoes-routing.module';

import { NotificacoesPage } from './notificacoes.page';
import { FooterModule } from 'src/app/components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    NotificacoesPageRoutingModule
  ],
  declarations: [NotificacoesPage]
})
export class NotificacoesPageModule {}
