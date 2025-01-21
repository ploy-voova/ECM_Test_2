import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoveringJobPage } from './covering-job.page';

const routes: Routes = [
  {
    path: '',
    component: CoveringJobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoveringJobPageRoutingModule {}
