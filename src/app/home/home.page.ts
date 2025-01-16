import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import Swiper from 'swiper';
import { baseUrl } from 'BaseUrl';

interface q {
  quote_id: string;
  sale: string;
  name: string;
  date_journey: string;
  time_journey: string;
  pick_up: string;
  destination: string;
  price: string;
  pix: string;
  progress_data: string;
  callback_date: null | string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentWidth: number = 0;
  currentHeight: number = 0;
  quo: q[] = [];
  qid: string = '';

  constructor(private platform: Platform, private router: Router) {
    this.quotebook();

    this.platform.ready().then(() => {
      const width = this.platform.width();
      if (width <= 576) {
        console.log('Small screen (xs)');
      } else if (width <= 768) {
        console.log('Medium screen (sm)');
      } else if (width <= 1024) {
        console.log('Large screen (md)');
      } else {
        console.log('Extra large screen (lg or xl)');
      }
    });
  }

  ngOnInit() {
  }

  Topreview(quoteId: string) {
    console.log(quoteId);

    const data = { q_id: quoteId };
    this.qid = quoteId;
    if (data) {
      this.router.navigate(['/tabs/quote-preview', quoteId]);
    }

  }

  quotebook() {


    fetch(baseUrl + '/api/ploy/quote_booking', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Key=====', data);
        this.quo = (data);
        // localStorage.setItem('keyLogin', data);
        // const keylogin = localStorage.getItem('keyLogin');
        // console.log('KeyLoginStorage==', keylogin);
        // this.router.navigate(['/tabs/home'])
      })
      .catch((error) => {
        alert('ผิด');
      });
  }


}




