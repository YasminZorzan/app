import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarNovaSenhaPage } from './cadastrar-nova-senha.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarNovaSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarNovaSenhaPageRoutingModule {}
