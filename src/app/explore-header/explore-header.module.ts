import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreHeaderComponent } from './explore-header.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreHeaderComponent],
  exports: [ExploreHeaderComponent]
})
export class ExploreHeaderComponentModule {}
