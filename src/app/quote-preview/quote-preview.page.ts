import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { QuotePreviewService } from '../service/quote-preview/quote-preview.service';
import { NewjobService } from '../service/newjob/newjob.service';

@Component({
  selector: 'app-quote-preview',
  templateUrl: './quote-preview.page.html',
  styleUrls: ['./quote-preview.page.scss'],
})
export class QuotePreviewPage implements OnInit {
  q_id: string | null = '';
  journey: any;
  movement: any;
  movementsByJourney: any;
  key: any;
  date_j: any;
  time_j: any;

  date_c: any;
  time_c: any;
  time: any;

  dt_q: any;
  dt_c: any;
  dt_t: any;
  dt_p: any;
  dt_m: any;

  selectAll: boolean = false;

  iconNameCus: string = 'chevron-down-outline';
  iconNameTran: string = 'chevron-down-outline';
  iconNamePrice: string = 'chevron-down-outline';
  iconNameMisc: string = 'chevron-down-outline';
  iconNameItem: string = 'chevron-down-outline';

  isdropCus: boolean = false;
  isdropTran: boolean = false;
  isdropPrice: boolean = false;
  isdropMisc: boolean = false;
  isdropItem: boolean = false;
  isdropVehicles: boolean = false;
  isdropAs: boolean = false;
  isvisiblemap: boolean = false;

  select_pax: string = '';
  select_vehicle_: string = '';
  select_luggage_: string = '';
  select_journey_type_: string = '';

  pax: string = '';
  vehicle: any;
  luggage: any;
  journey_type: any;

  constructor(
    private router: ActivatedRoute,
    private popoverController: PopoverController,
    private alertController: AlertController,
    public quote_pre: QuotePreviewService,
    private router_: Router,
    private new_job: NewjobService
  ) {}

  async ngOnInit() {
    this.router.paramMap.subscribe((params) => {
      this.q_id = params.get('quoteId');
      this.quote_pre.qId = this.q_id;
    });
    this.journey_quote();
  }

  async journey_quote() {
    const res = await this.quote_pre.quote_Preview2(this.q_id);

    // this.quote_pre.checkAll = res.map(() => false);
    // this.quote_pre.mmcheck = res.map((res: any) => res['movement_quote'].map(() => false));
    // this.dt_q = res;
    // this.date_j = res[0]['movement_quote'][0]['date_start'];
    // this.time_j = res[0]['movement_quote'][0]['time_start'];

    this.dt_q = res['journey_quote'];
    this.date_j = res['journey_quote'][0]['movement_quote'][0]['date_start'];
    this.time_j = res['journey_quote'][0]['movement_quote'][0]['time_start'];
    this.quote_pre.checkAll = res['journey_quote'].map(() => false);
    this.quote_pre.mmcheck = res['journey_quote'].map((res: any) => res['movement_quote'].map(() => false));
    this.dt_c = res['Customer'];
    this.dt_t = res['Transport'];
    this.dt_p = res['Pricing'];
    this.dt_m = res['Misc'];
  }

  to_CoveringJob() {
    this.router_.navigate(['/tabs/covering-job']);
  }

  toggleCus() {
    this.iconNameCus =
      this.iconNameCus === 'chevron-down-outline'
        ? 'chevron-up-outline'
        : 'chevron-down-outline';
    this.isdropCus = !this.isdropCus;
  }

  toggleTran() {
    this.iconNameTran =
      this.iconNameTran === 'chevron-down-outline'
        ? 'chevron-up-outline'
        : 'chevron-down-outline';
    this.isdropTran = !this.isdropTran;
  }

  togglePrice() {
    this.iconNamePrice =
      this.iconNamePrice === 'chevron-down-outline'
        ? 'chevron-up-outline'
        : 'chevron-down-outline';
    this.isdropPrice = !this.isdropPrice;
  }

  toggleMisc() {
    this.iconNameMisc =
      this.iconNameMisc === 'chevron-down-outline'
        ? 'chevron-up-outline'
        : 'chevron-down-outline';
    this.isdropMisc = !this.isdropMisc;
  }

  toggleItem() {
    this.iconNameItem =
      this.iconNameItem === 'chevron-down-outline'
        ? 'chevron-up-outline'
        : 'chevron-down-outline';
    this.isdropItem = !this.isdropItem;
  }

  toggleVehicles() {
    this.isdropVehicles = !this.isdropVehicles;
  }

  toggleAs() {
    this.isdropAs = !this.isdropAs;
  }

  togglemap() {
    this.isvisiblemap = !this.isvisiblemap;
  }

  isdrop: boolean[][] = [];
  currentOpen: { journeyIndex: number; mmIndex: number } | null = null; // เก็บตำแหน่งของอันที่เปิดอยู่

  async toggleDrop(journeyIndex: number, mmIndex: number) {
    if (
      this.currentOpen &&
      (this.currentOpen.journeyIndex !== journeyIndex ||
        this.currentOpen.mmIndex !== mmIndex)
    ) {
      const alert = await this.alertController.create({
        header: 'Destination has not been set.',
        message: 'Please drag the locate pointer to the requied destination.',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('OK clicked');
            },
          },
        ],
      });

      await alert.present();
      return; // ไม่ให้ทำการเปิดรายการใหม่
    }

    if (!this.isdrop[journeyIndex]) {
      this.isdrop[journeyIndex] = [];
    }

    this.isdrop[journeyIndex][mmIndex] = !this.isdrop[journeyIndex][mmIndex];

    // อัพเดต currentOpen ตามสถานะการเปิด/ปิด
    if (this.isdrop[journeyIndex][mmIndex]) {
      this.currentOpen = { journeyIndex, mmIndex };
    } else {
      this.currentOpen = null;
    }
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    document.querySelectorAll('ion-segment-button').forEach((button) => {
      button.classList.toggle(
        'selected',
        button.getAttribute('value') === selectedValue
      );
    });
  }

  paxChange(e: CustomEvent) {
    this.pax = e.detail.value;
    this.select_pax = this.pax;
    this.select_vehicle_ = 'selectvehicle';
    this.select_luggage_ = 'selectluggage';
  }

  vehicleChange(e: CustomEvent) {
    this.select_vehicle_ = e.detail.value;
    this.select_luggage_ = 'selectluggage';
  }

  async vehicleChange_fo(pax: number) {
    const veh = await this.new_job.select_Vehicle(pax);
    this.vehicle = veh;
    this.vehicle = this.vehicle[0];
  }

  luggageChange(e: CustomEvent) {
    this.select_luggage_ = e.detail.value;
  }

  async luggageChange_fo(pax: number,vehicle: number){
    const lug = await this.new_job.select_Luggage(pax, vehicle);
    this.luggage = lug;
    this.luggage = this.luggage[0];
  }

  async select_journeyT(){
    this.journey_type = await this.new_job.select_Journey();
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
    this.closePopover();
  }

  // ฟังก์ชันเรียกเมื่อเลือกเวลา
  onTimeChange(event: any) {
    this.time = event.detail.value;
    // console.log(this.time);
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

  oncselectAll(e: any) {
    this.selectAll = e.detail.checked;

    this.quote_pre.checkAll = this.quote_pre.checkAll.map(
      () => e.detail.checked
    );
    this.quote_pre.mmcheck = this.quote_pre.mmcheck.map((res: any) =>
      res.map(() => e.detail.checked)
    );
  }

  onccheckAll(e: any, i: number) {
    let se: boolean = true;
    this.quote_pre.checkAll[i] = e.detail.checked;
    this.quote_pre.mmcheck[i] = this.quote_pre.mmcheck[i].map(
      () => e.detail.checked
    );

    this.quote_pre.checkAll.map((res) => {
      if (res == false) {
        se = false;
        this.selectAll = false;
      }

      if (se) {
        this.selectAll = se;
      }
    });
  }

  onccheck(e: any, i: number, j: number) {
    let se: boolean = true;
    let ch: boolean = true;
    this.quote_pre.mmcheck[i][j] = e.detail.checked;
    this.quote_pre.mmcheck[i].map((res) => {
      if (res == false) {
        se = false;
        ch = false;
        this.quote_pre.checkAll[i] = false;
        this.selectAll = false;
      }

      if (ch) {
        this.quote_pre.checkAll[i] = ch;
        this.quote_pre.checkAll.map((res2) => {
          if (res2 == false) {
            se = false;
            this.selectAll = false;
          }

          if (se) {
            this.selectAll = se;
          }
        });
      }
    });
    // console.log(this.quote_pre.mmcheck);

    this.quote_pre.mmcheck[i].map((res3, index) => {
      if (res3 == true) {
        console.log(
          'journey: ' + (i + 1) + ' movement: ' + (index + 1) + ' = ' + res3
        );
      }
    });
  }
}
