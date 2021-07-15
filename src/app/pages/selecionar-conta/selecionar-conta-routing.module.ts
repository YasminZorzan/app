import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarContaPage } from './selecionar-conta.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarContaPageRoutingModule {}
