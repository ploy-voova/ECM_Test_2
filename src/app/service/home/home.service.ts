import { Injectable } from '@angular/core';
import { baseUrl } from 'BaseUrl';
import { GlobalService } from '../global/global.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public quo: any = [];
  public chB: boolean[] = [];

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

  public async quote_booking(e:number) {
    await axios.get(baseUrl + '/api/ploy/quote_booking/'+e).then((response) => {
      this.quo = response.data;
      this.chB = response.data.map(() => false);
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
