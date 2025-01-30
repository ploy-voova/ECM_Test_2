import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, IonThumbnail, PopoverController } from '@ionic/angular';
import { baseUrl } from 'BaseUrl';
import { NewjobService } from '../service/newjob/newjob.service';

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

  iconNameCus: string = 'chevron-down-outline';
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
  isvisiblemap: boolean = false;


  isdropNote_des1: boolean = false;
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
  external_reference: string = '';
  name: string = '';
  referrer_code: string = '';
  phone: number | undefined;
  passenger_email: string = '';
  passenger_name: string = '';
  passenger_namber: number | undefined;
  address1: string = '';
  address2: string = '';
  note1: string = '';
  note2: string = '';

  /// select value ///
  select_pax: string = "selectpax";
  select_vehicle_: string = "selectvehicle";
  select_luggage_: string = "selectluggage";
  // journey
  select_pax_jouney: string = "selectpax";
  select_vehicle_journey: string = "selectvehicle";
  select_luggage_journey: string = "selectluggage";


  name_address:any;
  isModalOpen = false;
  temp_addess:any;

  constructor(private popoverController: PopoverController,
    public newjob_ser: NewjobService,) {
  }

  ngOnInit() {
    this.select_journeyT()
  }



  // journeyType() {

  //   fetch(baseUrl + '/api/ploy/option/journey_type', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.journey_Type = (data);
  //     })
  //     .catch((error) => {
  //       alert('ผิด');
  //     });
  // }

  // Select_Vehicle() {
  //   const requestBody = {
  //     pax: this.pax,
  //   };

  //   fetch('http://35.187.248.255:214/api/ploy/option/car_type', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.vehicle = (data);
  //       this.vehicle = this.vehicle[0];
  //       console.log(this.vehicle);

  //     });
  // }

  // select_Luggage() {
  //   const requestBody = {
  //     pax: this.pax,
  //     vehicle: this.car_id
  //   };

  //   fetch('http://35.187.248.255:214/api/ploy/option/bag_type', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.luggage = (data);
  //       this.luggage = this.luggage[0];

  //     });
  // }


  // seclect pax //
  private previousPax: any = null;
  paxChange(event: CustomEvent) {
    this.pax = event.detail.value;
    this.select_pax = this.pax;
    this.select_pax_jouney = this.pax;
    this.vehicle_1();
    if (this.pax !== this.previousPax) {
      this.select_vehicle_ = "selectvehicle"
      this.select_luggage_ = "selectluggage"
      this.select_vehicle_journey = "selectvehicle"
      this.select_luggage_journey = "selectluggage"
    }

    this.previousPax = this.pax;
  }

  private previousPax_j: any = null;
  paxChange_journey(event: CustomEvent) {
    this.pax = event.detail.value;
    this.select_pax_jouney = this.pax;
    this.vehicle_1();
    if (this.pax !== this.previousPax_j) {
      this.select_vehicle_journey = "selectvehicle"
      this.select_luggage_journey = "selectluggage"
    }

    this.previousPax_j = this.pax;
  }


  // select vehicle //
  async vehicle_1() {
    const veh = await this.newjob_ser.select_Vehicle(this.pax,0);
    this.vehicle = veh;
    this.vehicle = this.vehicle[0];
  }

  private previousVehicle: any = null;
  vehicleChange(event: CustomEvent) {
    this.car_id = event.detail.value;
    this.select_vehicle_ = this.car_id;
    this.select_vehicle_journey = this.select_vehicle_;
    this.luggage_1();
    if(this.car_id !== this.previousVehicle){
      this.select_luggage_ = "selectluggage";
      this.select_luggage_journey = "selectluggage";
    }

    this.previousVehicle = this.car_id;
  }

  private previousVehicle_j: any = null;
  vehicleChange_journey(event: CustomEvent) {
    this.car_id = event.detail.value;
    this.select_vehicle_journey = this.car_id;
    this.luggage_1();
    if(this.car_id !== this.previousVehicle_j){
      this.select_luggage_journey = "selectluggage"
    }

    this.previousVehicle_j = this.car_id
  }


  // select luggage //
  async luggage_1() {
    const lug = await this.newjob_ser.select_Luggage(this.pax, this.car_id)
    this.luggage = lug;
    this.luggage = this.luggage[0];
  }

  luggageChange(event: CustomEvent) {
    this.select_luggage_ = event.detail.value;
    this.select_luggage_journey = this.select_luggage_
    this.luggage_1();
  }
  luggageChange_journey(event: CustomEvent) {
    this.select_luggage_journey = event.detail.value;
    this.luggage_1();
  }

  // select journeyType //
  async select_journeyT(){
    const journey_t = await this.newjob_ser.select_Journey();
    this.journey_Type = journey_t;
    // console.log(this.journey_Type);
    
  }



  // check dropdow row //
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
    this.isdropNote_des1 = true;
  }

  toggleNote_des1() {
    this.isdropNote_des1 = false;
    this.note1 = '';
  }

  toggleNote_col2() {
    this.isdropNote_des2 = true;
  }

  toggleNote_des2() {
    this.isdropNote_des2 = false;
    this.note2 = '';
  }

  togglemap() {
    this.isvisiblemap = !this.isvisiblemap
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

  }

  onTimeChange_Ac(event: any) {
    this.time_a = event.detail.value

  }

  close_des() {
    this.closePopover();
    this.time_des = this.formatTime(this.time_d);
  }

  close_Ac() {
    this.closePopover();
    this.timeAc = this.formatTime(this.time_a);
  }

  close() {
    this.closePopover();
    this.time_c = this.formatTime(this.time);
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

  apply_address(){
    this.address1 = this.newjob_ser.name_address;
    this.newjob_ser.name_address = '';
  }

  apply_address2(){
    this.address2 = this.newjob_ser.name_address;
    this.newjob_ser.name_address = '';
  }


}
