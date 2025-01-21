import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotePreviewPageRoutingModule } from './quote-preview-routing.module';

import { QuotePreviewPage } from './quote-preview.page';

import { ExploreHeaderComponentModule } from '../explore-header/explore-header.module';
import { SharedMapModule } from '../sharedMap/sharedMap.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuotePreviewPageRoutingModule,
    ExploreHeaderComponentModule,
    SharedMapModule
  ],
  declarations: [QuotePreviewPage]
})
export class QuotePreviewPageModule {}
