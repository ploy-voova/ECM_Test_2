import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssignDiverPageRoutingModule } from './assign-diver-routing.module';

import { AssignDiverPage } from './assign-diver.page';
import { SharedMapModule } from '../sharedMap/sharedMap.module';
import { ExploreHeaderComponentModule } from '../explore-header/explore-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignDiverPageRoutingModule,
    SharedMapModule,
    ExploreHeaderComponentModule
  ],
  declarations: [AssignDiverPage]
})
export class AssignDiverPageModule {}
