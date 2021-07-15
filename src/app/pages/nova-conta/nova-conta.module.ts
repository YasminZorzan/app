import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaContaPageRoutingModule } from './nova-conta-routing.module';

import { NovaContaPage } from './nova-conta.page';
import { ErrorHandlingComponent } from 'src/app/components/error-handling/error-handling.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaContaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [NovaContaPage, ErrorHandlingComponent]
})
export class NovaContaPageModule {}
