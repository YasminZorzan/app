import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarNovaSenhaPageRoutingModule } from './cadastrar-nova-senha-routing.module';

import { CadastrarNovaSenhaPage } from './cadastrar-nova-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarNovaSenhaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CadastrarNovaSenhaPage]
})
export class CadastrarNovaSenhaPageModule {}
