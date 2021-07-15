import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoUsuarioPage } from './novo-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: NovoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovoUsuarioPageRoutingModule {}
