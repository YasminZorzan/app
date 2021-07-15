import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarSenhaPageRoutingModule } from './alterar-senha-routing.module';

import { AlterarSenhaPage } from './alterar-senha.page';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ErrorHandlingComponent } from 'src/app/components/error-handling/error-handling.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarSenhaPageRoutingModule,
    FooterModule,
    ReactiveFormsModule
  ],
  declarations: [AlterarSenhaPage, ErrorHandlingComponent],
  providers: [
    FormBuilder
  ]
})
export class AlterarSenhaPageModule {}
