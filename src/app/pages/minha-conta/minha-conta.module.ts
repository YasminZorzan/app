import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaContaPageRoutingModule } from './minha-conta-routing.module';

import { MinhaContaPage } from './minha-conta.page';

import { FooterModule } from '../../components/footer/footer.module';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    MinhaContaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MinhaContaPage],
  providers: [FormBuilder, Camera]
})
export class MinhaContaPageModule {}
