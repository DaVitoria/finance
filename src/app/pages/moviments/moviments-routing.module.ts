import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovimentsPage } from './moviments.page';

const routes: Routes = [
  {
    path: '',
    component: MovimentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovimentsPageRoutingModule {}
