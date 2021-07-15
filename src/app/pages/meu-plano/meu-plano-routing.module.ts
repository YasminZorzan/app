import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuPlanoPage } from './meu-plano.page';

const routes: Routes = [
  {
    path: '',
    component: MeuPlanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuPlanoPageRoutingModule {}
