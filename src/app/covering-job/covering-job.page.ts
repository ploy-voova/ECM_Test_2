import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covering-job',
  templateUrl: './covering-job.page.html',
  styleUrls: ['./covering-job.page.scss'],
})
export class CoveringJobPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async canDismiss(data?: undefined, role?: string) {
    return role !== 'gesture';
  }

  toOrigin(){

  }

}
