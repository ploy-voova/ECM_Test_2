import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HomeService } from '../service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentWidth: number = 0;
  currentHeight: number = 0;
  qid: any;
  quo: any = [];

  //checkbox//
  isdrop: boolean[] = [];
  c: boolean = false;

  constructor(private platform: Platform, private router: Router,public home_ser: HomeService) {}

  async ngOnInit() {
    this.home_ser.quote_booking();
    console.log(this.isdrop);
  }
  Topreview(quoteId: string) {
    console.log(quoteId);

    const data = { q_id: quoteId };
    this.qid = quoteId;
    if (data) {
      this.router.navigate(['/tabs/quote-preview', quoteId]);
    }

  }

  toggleSelectAll(event: any) {
    const isChecked = event.detail.checked;
    console.log(isChecked);
  }




}




