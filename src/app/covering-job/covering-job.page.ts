import { Component, OnInit } from '@angular/core';
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

  constructor(
    private router: Router,
    private quotepreviewservice: QuotePreviewService
  ) {  }

  ngOnInit() {
    console.log(this.quotepreviewservice.mmcheck);
    this.generateItems();
  }

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }

  back_quotepreview(){
    this.router.navigate(['/tabs/quote-preview',this.quotepreviewservice.qId])
  }

  showMap(){
    this.map = !this.map;
  }

  showBid(){
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


}
