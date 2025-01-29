import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  limit: number = 10;
  qid: any;
  quo: any = [];
  currentSlideIndex: number = 0;

  isChecked : boolean = false;

  constructor(private router: Router,public home_ser: HomeService) {
    this.home_ser.quote_booking(this.limit,this.isChecked);
  }

  async ngOnInit() {    
    const swiper = document.querySelector('swiper-container')?.swiper;
    swiper?.pagination
    if (swiper) {
      swiper.on('slideChange', () => {
        console.log('Slide changed to:', swiper.activeIndex+1);
        if (this.limit - swiper.activeIndex == 1) {
          this.limit = this.limit + 10;
          this.home_ser.quote_booking(this.limit,this.isChecked);
        }
      });
    }
  }
  Topreview(quoteId: string) {
    console.log(quoteId);

    const data = { q_id: quoteId };
    this.qid = quoteId;
    if (data) {
      this.router.navigate(['/tabs/quote-preview', quoteId]);
    }

  }

  onCheckboxChange(e: any, index: any) {
    let ch : boolean = true;
    if (e.detail.checked == false) {
      this.isChecked = false;
    }
    this.home_ser.chB[index] = e.detail.checked;
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
    this.isChecked = e.detail.checked;
    this.home_ser.chB = this.home_ser.chB.map(() => e.detail.checked);
  }

  to_Assign(){
    this.router.navigate(['/tabs/assign-diver']);
  }

  

}




