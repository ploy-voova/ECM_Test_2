import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuotePreviewService } from '../service/quote-preview/quote-preview.service';
import { InfiniteScrollCustomEvent, PopoverController } from '@ionic/angular';

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
  
  constructor(
    private router: Router,
    public quotepreviewservice: QuotePreviewService,
  ) { }

  ngOnInit() {
    this.generateItems();
  }


  @ViewChild('popover') popover!: HTMLIonPopoverElement;
  
  isOpen = false;
  isModalOpenOrign = false;
  isModalOpenAlong = false;
  isModalOpenDes = false;
  map_origin = false;

  showmap_Origin(){
    this.map_origin = true;
  }

  closed_MapOrigin(){
    this.map_origin = false;
  }

  onBackdropClick() {
    this.isOpen = !this.isOpen;
  }

  openPopover(event: Event) {
    this.popover.event = event;
    this.isOpen = !this.isOpen; 
  }

  openOrign() {
    this.isModalOpenOrign = true;
    this.isOpen = !this.isOpen; 
  }

  openAlong() {
    this.isModalOpenAlong = true;
    this.isOpen = !this.isOpen; 
  }

  openDes() {
    this.isModalOpenDes = true;
    this.isOpen = !this.isOpen; 
  }

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
    for (let i = 0; i < 10; i++) {
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
