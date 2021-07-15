import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartoesPage } from './cartoes.page';

const routes: Routes = [
  {
    path: '',
    component: CartoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartoesPageRoutingModule {}
