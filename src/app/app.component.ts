import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    // this.initializeApp();
  }
  
  // initializeApp() {
  //   if (!this.platform.is('cordova') && !this.platform.is('capacitor')) {
  //     // บังคับให้แอปมองว่าเป็นมือถือ
  //     this.platform.setPlatform('mobile');
  //   }
  // }
}
