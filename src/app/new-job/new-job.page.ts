import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, PopoverController } from '@ionic/angular';
import { baseUrl } from 'BaseUrl';

interface j {
  jt_id: string; // รหัสของฟีเจอร์หรือบริการ
  name: string;  // ชื่อของฟีเจอร์หรือบริการ
  color: string; // สี (ในรูปแบบ Hex เช่น #FFFFFF)
  priority: number; // ลำดับความสำคัญ (ตัวเลข)
}

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.page.html',
  styleUrls: ['./new-job.page.scss'],
})
export class NewJobPage implements OnInit {

  @ViewChild('cor2', { static: false }) select2!: IonSelect;

  onFirstSelectChange() {
    this.select2.interface = 'popover';
    this.select2.open();
  }

  date_c: any;
  time_c: any;
  time: any;

  date_des: any;
  time_des: any;
  time_d: any;

  timeAc: any;
  time_a: any;

  iconNameCus: string = 'chevron-down-outline'; // ไอคอนเริ่มต้น
  iconNameTran: string = 'chevron-down-outline';
  iconNamePrice: string = 'chevron-down-outline';
  iconNameMisc: string = 'chevron-down-outline';
  iconNameItem: string = 'chevron-down-outline';
  iconNameKyc: string = 'chevron-down-outline';
  iconNameStart: string = 'chevron-down-outline';
  iconNameFilght: string = 'chevron-down-outline';


  isRowvisibleCus: boolean = false;
  isRowvisibleTran: boolean = false;
  isRowvisiblePricing: boolean = false;
  isRowvisibleMisc: boolean = false;
  isRowvisibleItem: boolean = false;
  isRowvisibleKyc: boolean = false;
  isRowvisibleStart: boolean = false;
  isRowvisibleFilght: boolean = false;

  isdropNote_col1: boolean = false;
  isdropNote_des1: boolean = false;
  isdropNote_col2: boolean = false;
  isdropNote_des2: boolean = false;

  isdropVehicles: boolean = false;
  isdropAs: boolean = false;

  journey_Type: any;
  pax: any;
  car_id: any;
  vehicle: any;
  luggage: any;


  /// inputvalue //////
  company: string = '';
  email: string = '';



  constructor(private popoverController: PopoverController) {
    this.journeyType();
  }

  ngOnInit() {
  }

  journeyType() {

    fetch(baseUrl + '/api/ploy/option/journey_type', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Key=====', data);
        this.journey_Type = (data);
        console.log(this.journey_Type);

        // localStorage.setItem('keyLogin', data);
        // const keylogin = localStorage.getItem('keyLogin');
        // console.log('KeyLoginStorage==', keylogin);
        // this.router.navigate(['/tabs/home'])
      })
      .catch((error) => {
        alert('ผิด');
      });
  }

  Select_Vehicle() {
    const requestBody = {
      pax: this.pax,
    };

    fetch('http://35.187.248.255:214/api/ploy/option/car_type', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        this.vehicle = (data);
        this.vehicle = this.vehicle[0];
        console.log(this.vehicle);

      });
  }

  select_Luggage(){
    const requestBody = {
      pax: this.pax,
      vehicle: this.car_id
    };

    fetch('http://35.187.248.255:214/api/ploy/option/bag_type', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        this.luggage = (data);
        this.luggage = this.luggage[0];
        console.log(this.luggage);

      });
  }

  paxChange(event: CustomEvent) {
    console.log('ionChange fired with value: ' + event.detail.value);
    this.pax = event.detail.value;
    // console.log(this.pax);
    this.Select_Vehicle();
  }

  vehicleChange(event: CustomEvent) {
    console.log('vehicle value: ' + event.detail.value);
    this.car_id = event.detail.value;
    // console.log(this.car_id);
    this.select_Luggage();
  }


  customOptions = {
    header: 'Select an Option',
    icon: 'star', // เปลี่ยนไอคอนเป็น 'star'
  };

  toggleRowCus() {
    this.iconNameCus = this.iconNameCus === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleCus = !this.isRowvisibleCus;
  }

  toggleRowTran() {
    this.iconNameTran = this.iconNameTran === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleTran = !this.isRowvisibleTran;
  }

  toggleRowPricing() {
    this.iconNamePrice = this.iconNamePrice === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisiblePricing = !this.isRowvisiblePricing;
  }

  toggleRowItem() {
    this.iconNameItem = this.iconNameItem === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleItem = !this.isRowvisibleItem;
  }

  toggleRowMisc() {
    this.iconNameMisc = this.iconNameMisc === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleMisc = !this.isRowvisibleMisc;
  }

  toggleRowKyc() {
    this.iconNameKyc = this.iconNameKyc === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleKyc = !this.isRowvisibleKyc;
  }

  toggleRowStart() {
    this.iconNameStart = this.iconNameStart === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleStart = !this.isRowvisibleStart;
  }

  toggleRowFilght() {
    this.iconNameFilght = this.iconNameFilght === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleFilght = !this.isRowvisibleFilght;
  }

  toggleVehicles() {
    this.isdropVehicles = !this.isdropVehicles;
  }

  toggleAs() {
    this.isdropAs = !this.isdropAs;
  }

  toggleNote_col1() {
    this.isdropNote_col1 = !this.isdropNote_col1;
  }

  toggleNote_des1() {
    this.isdropNote_des1 = !this.isdropNote_des1;
  }

  toggleNote_col2() {
    this.isdropNote_col2 = !this.isdropNote_col2;
  }

  toggleNote_des2() {
    this.isdropNote_des2 = !this.isdropNote_des2;
  }

  // ฟังก์ชันปิด Popover
  async closePopover() {
    const popover = await this.popoverController.getTop();
    if (popover) {
      await popover.dismiss();
    }
  }

  // ฟังก์ชันเรียกเมื่อเลือกวันที่
  onDateChange(event: any) {
    this.date_c = this.formatDate(event.detail.value);
    this.closePopover()
  }

  onDateChange_Des(event: any) {
    this.date_des = this.formatDate(event.detail.value);
    this.closePopover()
  }

  onTimeChange(event: any) {
    this.time = event.detail.value
    console.log(this.time);
  }

  onTimeChange_Des(event: any) {
    this.time_d = event.detail.value
    // console.log(this.time);
  }

  onTimeChange_Ac(event: any) {
    this.time_a = event.detail.value
    // console.log(this.time);
  }

  close_des() {
    this.closePopover();
    this.time_des = this.formatTime(this.time_d);
    // console.log(this.time_c);
  }

  close_Ac() {
    this.closePopover();
    this.timeAc = this.formatTime(this.time_a);
    // console.log(this.time_c);
  }

  close() {
    this.closePopover();
    this.time_c = this.formatTime(this.time);
    // console.log(this.time_c);
  }

  formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  formatTime(isoString: string): string {
    const date = new Date(isoString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    document.querySelectorAll('ion-segment-button').forEach((button) => {
      button.classList.toggle('selected', button.getAttribute('value') === selectedValue);
    });
  }





}
