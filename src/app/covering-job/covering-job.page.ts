import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covering-job',
  templateUrl: './covering-job.page.html',
  styleUrls: ['./covering-job.page.scss'],
})
export class CoveringJobPage implements OnInit {

  rate: number = 5.0;
  constructor() { }

  ngOnInit() {
  }

  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }


  toOrigin(){

  }

}
