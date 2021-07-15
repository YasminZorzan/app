import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarSenhaPageRoutingModule } from './recuperar-senha-routing.module';

import { RecuperarSenhaPage } from './recuperar-senha.page';
import { ErrorHandlingComponent } from 'src/app/components/error-handling/error-handling.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarSenhaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RecuperarSenhaPage, ErrorHandlingComponent]
})
export class RecuperarSenhaPageModule { }
