import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramaPage } from './programa.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramaPageRoutingModule {}
