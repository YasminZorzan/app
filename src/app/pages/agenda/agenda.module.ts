import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgendaPageRoutingModule } from './agenda-routing.module';
import { AgendaPage } from './agenda.page';

import { NgCalendarModule  } from 'ionic2-calendar';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPageRoutingModule,
    FooterModule,
    NgCalendarModule
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
