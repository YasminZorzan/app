import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AulasSalvasPage } from './aulas-salvas.page';

const routes: Routes = [
  {
    path: '',
    component: AulasSalvasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AulasSalvasPageRoutingModule {}
