import { Component, HostListener, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuotePreviewService } from '../service/quote-preview/quote-preview.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-covering-job',
  templateUrl: './covering-job.page.html',
  styleUrls: ['./covering-job.page.scss'],
})
export class CoveringJobPage implements OnInit {

  rate: number = 5.0;
  map: boolean = false;
  items: string[] = [];
  bidding: boolean = true;
  // iconName: string = 'chevron-down-outline';


  constructor(
    private router: Router,
    public quotepreviewservice: QuotePreviewService
  ) { }

  ngOnInit() {
    this.generateItems();
  }

  isOpen = false;
  isModalOpenOrign = false;
  isModalOpenAlong = false;
  isModalOpenDes = false;
  event:any;

  openPopover(event: Event) {
    this.event = event; // เก็บตำแหน่งการคลิก
    this.isOpen = true; // สลับสถานะ Popover
  }

  openOrign() {
    this.isModalOpenOrign = true;
    this.isOpen = false; // ปิด popover หลังจากเลือก
  }

  openAlong() {
    this.isModalOpenAlong = true;
    this.isOpen = false; // ปิด popover หลังจากเลือก
  }

  openDes() {
    this.isModalOpenDes = true;
    this.isOpen = false; // ปิด popover หลังจากเลือก
  }

  // // ปิด popover เมื่อกด backdrop และเปลี่ยนไอคอน
  // onPopoverDismiss() {
  //   this.isOpen = false;
  // }

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }

  back_quotepreview() {
    this.router.navigate(['/tabs/quote-preview', this.quotepreviewservice.qId])
  }

  showMap() {
    this.map = !this.map;
  }

  showBid() {
    this.bidding = !this.bidding;
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 15; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }

  checkBut() {
    console.log(this.quotepreviewservice.mmcheck);
  }

  // @HostListener('document:click', ['$event'])
  // onClickOutside(event: Event) {
  //   const accordion = document.querySelector('ion-accordion');
  //   if (accordion && !accordion.contains(event.target as Node)) {
  //     (accordion as any).toggleAccordion(); // ปิด accordion
  //   }
  // }


}
