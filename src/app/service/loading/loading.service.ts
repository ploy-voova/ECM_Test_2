import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root', // ให้ Service นี้ถูกใช้งานได้ทั่วแอป
})
export class LoadingService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private loadingController: LoadingController) {}

  async show(message: string = 'Loading...') {
    if (!this.loading) {
      this.loading = await this.loadingController.create({
        message,
        spinner: 'crescent',
      });

      await this.loading.present();
    }
  }

  async hide() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
