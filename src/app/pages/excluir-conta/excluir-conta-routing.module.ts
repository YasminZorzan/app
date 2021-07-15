import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExcluirContaPage } from './excluir-conta.page';

const routes: Routes = [
  {
    path: '',
    component: ExcluirContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcluirContaPageRoutingModule {}
