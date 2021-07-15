import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaContaPage } from './nova-conta.page';

const routes: Routes = [
  {
    path: '',
    component: NovaContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaContaPageRoutingModule {}
