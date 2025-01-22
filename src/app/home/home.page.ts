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
  isChecked : boolean | null = null;
  c: boolean = false;

  constructor(private platform: Platform, private router: Router,public home_ser: HomeService) {}

  async ngOnInit() {
    this.home_ser.quote_booking();
  }
  Topreview(quoteId: string) {
    console.log(quoteId);

    const data = { q_id: quoteId };
    this.qid = quoteId;
    if (data) {
      this.router.navigate(['/tabs/quote-preview', quoteId]);
    }

  }

  onCheckboxChange(event: any, index: any) {
    let ch : boolean = true;
    if (event.detail.checked == false) {
      this.isChecked = null
    }
    this.home_ser.chB[index] = event.detail.checked;
    this.home_ser.chB.map((res)=>{
      if (res == false) {
        ch = false;
      }
    });
    if(ch){
      this.isChecked = true;
    }
  }

  toggleSelectAll(e: any) {
    if(e.detail.value == true){
      this.home_ser.chB = this.home_ser.chB.map(() => true);
    } else {
      this.home_ser.chB = this.home_ser.chB.map(() => false);
    }
  }




}




