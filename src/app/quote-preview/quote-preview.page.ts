import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { QuotePreviewService } from '../service/quote-preview/quote-preview.service';
import { NewjobService } from '../service/newjob/newjob.service';
import { LoadingService } from '../service/loading/loading.service';

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

  t_row: number[][] = [];

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

  select_pax: any[][] = [];
  select_vehicle_: any[][] = [];
  select_luggage_: any[][] = [];
  select_journey_type_: any[][] = [];

  select_pax_tran: string = '';
  select_vehicle_tran: string = '';
  select_luggage_tran: string = '';
  select_journey_type_tran: string = '';

  pax: string = '';
  vehicle: any;
  luggage: any;
  journey_type: any;

  pax_tran: string = '';
  vehicle_tran: any;
  luggage_tran: any;
  journey_type_tran: any;

  checkfabButton: boolean = true ;

  constructor(
    private router: ActivatedRoute,
    private popoverController: PopoverController,
    private alertController: AlertController,
    public quote_pre: QuotePreviewService,
    private router_: Router,
    private new_job: NewjobService,
    private loadingService: LoadingService
  ) {}

  async ngOnInit() {
    await this.loadingService.show();
    this.router.paramMap.subscribe((params) => {
      this.q_id = params.get('quoteId');
      this.quote_pre.qId = this.q_id;
    });
    this.journey_quote();
  }

  toggleFabButton(){
    this.checkfabButton = !this.checkfabButton;
    console.log("but"+this.checkfabButton);   
  }

  // async ionViewDidEnter() {
  
  // }

  async journey_quote() {
    const res = await this.quote_pre.quote_Preview2(this.q_id);
    // console.log(res);

    // let i = 0;
    res['journey_quote'].map((r:any,i:number) => {
      this.select_pax[i] = [];
      this.select_vehicle_[i] = [];
      this.select_luggage_[i] = [];
      this.select_journey_type_[i] = [];
      i = i + 1;
    });

    this.vehicle_tran = await this.new_job.select_Vehicle(res['Transport']['pax'],this.q_id);
    this.luggage_tran = await this.new_job.select_Luggage(res['Transport']['pax'],res['Transport']['car_id']);
    this.journey_type_tran = await this.new_job.select_Journey();
    
    this.vehicle_tran = this.vehicle_tran[0];
    this.luggage_tran = this.luggage_tran[0];
    
    // this.journey_type_tran = this.journey_type_tran[0];

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

    setTimeout(async () => {
      for (let i = 0; i < this.dt_q.length; i++) {
        this.t_row[i] = [];

        const $data = res['journey_quote'][i]['movement_quote'];
  
        for (let j = 0; j < $data.length; j++) {
          const targetRow = document.querySelector(`#row_start_${i}_${j}`) as HTMLElement;
  
          if (targetRow) {
            const targetHeight = targetRow.offsetHeight;
            this.t_row[i][j] = targetHeight;
          } else {
            this.t_row[i][j] = 0;
          }
        }
      }
      await this.loadingService.hide();
    }, 1000);
  }

  to_CoveringJob() {
    this.quote_pre.jm = [];
    let u = 0;
    this.quote_pre.mmcheck.map((res: any[],i: number) => {
      if (res.includes(true)) {
        this.quote_pre.jm[u] = [];
        this.quote_pre.jm[u][0] = [];
        this.quote_pre.jm[u][0].push(i+1);
        res.map((res2: any, j: number) => {
          if (res2 == true) {
            if (!this.quote_pre.jm[u][1]) {
              this.quote_pre.jm[u][1] = [];
            }
            this.quote_pre.jm[u][1].push(j+1);
          }
        })
        u = u + 1;
      }
    })
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

  // segmentChanged(event: any) {
  //   const selectedValue = event.detail.value;
  //   document.querySelectorAll('ion-segment-button').forEach((button) => {
  //     button.classList.toggle(
  //       'selected',
  //       button.getAttribute('value') === selectedValue
  //     );
  //   });
  // }

  paxChange(e: CustomEvent, i: number, j: number) {
    this.pax = e.detail.value;
    this.select_pax[i][j] = this.pax;
    this.select_vehicle_[i][j] = 'selectvehicle';
    this.select_luggage_[i][j] = 'selectluggage';
  }

  vehicleChange(e: CustomEvent, i: number, j: number) {
    this.select_vehicle_[i][j] = e.detail.value;
    this.select_luggage_[i][j] = 'selectluggage';
  }

  async vehicleChange_fo(pax: number) {
    const veh = await this.new_job.select_Vehicle(pax,this.q_id);
    this.vehicle = veh;
    this.vehicle = this.vehicle[0];
  }

  luggageChange(e: CustomEvent, i: number, j: number) {
    this.select_luggage_[i][j] = e.detail.value;
  }

  async luggageChange_fo(pax: number,vehicle: number){
    const lug = await this.new_job.select_Luggage(pax, vehicle);
    this.luggage = lug;
    this.luggage = this.luggage[0];
  }

  select_journey(e: CustomEvent, i: number, j: number){
    this.select_journey_type_[i][j] = e.detail.value;
  }

  async select_journeyT(){
    this.journey_type = await this.new_job.select_Journey();
  }

  async paxTran(e: CustomEvent) {
    this.pax_tran = e.detail.value;
    this.select_pax_tran = this.pax_tran;
    this.select_vehicle_tran = 'selectvehicle';
    this.select_luggage_tran = 'selectluggage';
    this.vehicle_tran = await this.new_job.select_Vehicle(e.detail.value,this.q_id);
    this.vehicle_tran = this.vehicle_tran[0];
  }

  async vehicleTran(e: CustomEvent) {
    this.select_vehicle_tran = e.detail.value;
    this.select_luggage_tran = 'selectluggage';
    this.luggage_tran = await this.new_job.select_Luggage(this.select_pax_tran,e.detail.value);
    this.luggage_tran = this.luggage_tran[0];
  }

  luggageTran(e: CustomEvent) {
    this.select_luggage_tran = e.detail.value;
  }
  journey_type_Tran(e: CustomEvent){
    this.select_journey_type_tran = e.detail.value;
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

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    document.querySelectorAll('ion-segment-button').forEach((btn) => {
      if (btn.getAttribute('value') === selectedValue) {
        btn.style.setProperty('--background', '#42a5f5');
        btn.style.setProperty('--color', 'white');
      } else {
        btn.style.setProperty('--background', '#bdbdbd');
        btn.style.setProperty('--color', 'black');
      }
    });
  }
  
  

}
