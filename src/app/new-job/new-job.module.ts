import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewJobPageRoutingModule } from './new-job-routing.module';

import { NewJobPage } from './new-job.page';

import { ExploreHeaderComponentModule } from '../explore-header/explore-header.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedMapModule } from '../sharedMap/sharedMap.module';

@NgModule({
  declarations: [NewJobPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewJobPageRoutingModule,
    ExploreHeaderComponentModule,
    SharedMapModule
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewJobPageModule {}
