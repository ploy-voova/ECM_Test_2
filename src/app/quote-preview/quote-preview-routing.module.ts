import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotePreviewPage } from './quote-preview.page';

const routes: Routes = [
  {
    path: '',
    component: QuotePreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotePreviewPageRoutingModule {}
