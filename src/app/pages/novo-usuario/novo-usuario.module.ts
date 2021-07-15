import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovoUsuarioPageRoutingModule } from './novo-usuario-routing.module';

import { NovoUsuarioPage } from './novo-usuario.page';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ErrorHandlingComponent } from 'src/app/components/error-handling/error-handling.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NovoUsuarioPageRoutingModule,
    FooterModule
  ],
  declarations: [NovoUsuarioPage, ErrorHandlingComponent]
})
export class NovoUsuarioPageModule {}
