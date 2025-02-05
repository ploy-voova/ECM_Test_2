import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home/home.service';
import { InfiniteScrollCustomEvent, IonModal } from '@ionic/angular';
import { GlobalService } from '../service/global/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  limit: number = 10;
  qid: any;
  currentSlideIndex: number = 0;

  isChecked : boolean = false;

  constructor(private router: Router, public home_ser: HomeService, private glo: GlobalService) {
    this.one();
  }

  one(){
    this.glo.data = {
      d: 'adminlib',
      f: 'list-booking.php',
      callback: '',
      pagesize: '10',
      callbacks: '',
      date_start: '04/02/2025',
      date_end: '18/02/2025',
      date_booking_start: '',
      date_booking_end: '',
      grid_type: '3',
      privatedashboardfilter: '0',
      site_id: 'all',
      s_user: 'all',
      ops_person: 'all',
      status_re: 'B',
      payment: 'all',
      progress: 'all',
      priority: 'all',
      search: '',
      journey_type: 'all',
      qfilter: '0',
      private_hire: '1',
      contract: '1',
      non_inv_checkbox: '0',
      take: '10',
      skip: '0',
      page: '1',
      pageSize: '10',
      sort: [{ field: 'quote_id', dir: 'asc' }],
    }
    this.glo.quote_preview('list-quote');
    // this.home_ser.quote_booking(this.limit,this.isChecked);
  }

  ngOnInit() {  
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

  testch=true

  isIconSpeed = false;
  isIconBus = false;
  isIconPerson = false;
  isIconSetting = false;

  toggleSpeedIcon() {
    this.isIconSpeed = !this.isIconSpeed;
    this.isIconBus = false;
    this.isIconPerson = false;
    this.isIconSetting = false;
  }

  toggleBusIcon() {
    this.isIconBus = !this.isIconBus;
    this.isIconSpeed = false;
    this.isIconPerson = false;
    this.isIconSetting = false; // สลับค่า true/false
  }

  togglePersonIcon() {
    this.isIconPerson = !this.isIconPerson;
    this.isIconSpeed = false;
    this.isIconBus = false;
    this.isIconSetting = false; // สลับค่า true/false
  }

  toggleSettingIcon() {
    this.isIconSetting = !this.isIconSetting;
    this.isIconSpeed = false;
    this.isIconBus = false;
    this.isIconPerson = false; // สลับค่า true/false
  }

  setIconTob(){
    this.iconshow = false;
    this.isIconSpeed = false;
    this.isIconBus = false;
    this.isIconPerson = false;
    this.isIconSetting = false;

  }

  @ViewChild('modalAlert', { static: false }) modalAlert!: IonModal;
  close(){
    console.log('passs');
    
    this.modalAlert.dismiss();
  }

  iconshow = false;

  toggleSvg(){
    this.iconshow = !this.iconshow;
  }

  public formatDate(inputDate:string): string {
    const months: Record<string, string> = {
        "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04",
        "May": "05", "Jun": "06", "Jul": "07", "Aug": "08",
        "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"
    };

    const parts: string[] = inputDate.split(" ");
    const day: string = parts[1].replace(/\D/g, '');
    const month: string = months[parts[2]] || "00";
    const year: string = parts[3];

    return `${day.padStart(2, '0')}/${month}/${year}`;
  }

  public formatTime(time: string): string {
    let [hour, minute]: number[] = time.split(":").map(Number);
    let period: string = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${String(hour).padStart(2, '0')}.${minute} ${period}`;
  }
}




