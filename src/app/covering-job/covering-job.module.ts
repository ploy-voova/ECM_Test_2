import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoveringJobPageRoutingModule } from './covering-job-routing.module';

import { CoveringJobPage } from './covering-job.page';

import { ExploreHeaderComponentModule } from '../explore-header/explore-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoveringJobPageRoutingModule,
    ExploreHeaderComponentModule
  ],
  declarations: [CoveringJobPage]
})
export class CoveringJobPageModule {}
