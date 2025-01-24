import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuotePreviewService } from '../service/quote-preview/quote-preview.service';

@Component({
  selector: 'app-covering-job',
  templateUrl: './covering-job.page.html',
  styleUrls: ['./covering-job.page.scss'],
})
export class CoveringJobPage implements OnInit {

  rate: number = 5.0;

  constructor(
    private router: Router,
    private quotepreviewservice: QuotePreviewService
  ) { }

  ngOnInit() {
  }

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }

  back_quotepreview(){
    this.router.navigate(['/tabs/quote-preview',this.quotepreviewservice.qId])
  }


}
