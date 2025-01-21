import { Injectable } from '@angular/core';
import { baseUrl } from 'BaseUrl';
import { GlobalService } from '../global/global.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public quo: any = [];

  constructor(private glo: GlobalService) { }

  // public quote_test = () => new Promise(async (resolve, reject) => {
  //   axios.get(baseUrl + '/api/ploy/quote_booking')
  //     .then((data) => {
  //       resolve(data.data);
  //     })
  //     .catch((error) => {
  //       alert('ผิด');
  //     });
  // })

  public async quote_booking() {
    await axios.get(baseUrl + '/api/ploy/quote_booking').then((response) => {
      this.quo = response.data;
    })
  }

  // public quotebook() {
  //   fetch(baseUrl + '/api/ploy/quote_booking', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.quo = data;
  //     })
  //     .catch((error) => {
  //       alert('ผิด');
  //     });
  // }
}
