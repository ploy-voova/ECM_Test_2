import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignDiverPage } from './assign-diver.page';

const routes: Routes = [
  {
    path: '',
    component: AssignDiverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignDiverPageRoutingModule {}
