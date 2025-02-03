import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobPageRoutingModule } from './job-routing.module';

import { JobPage } from './job.page';

import { ExploreHeaderComponentModule } from '../explore-header/explore-header.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    JobPageRoutingModule,
    ExploreHeaderComponentModule,
  ],
  declarations: [JobPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JobPageModule {}
