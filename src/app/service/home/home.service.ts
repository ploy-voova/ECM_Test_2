import { Injectable } from '@angular/core';
import { baseUrl } from 'BaseUrl';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public quo: any = [];
  public chB: boolean[] = [];

  constructor() { }

  public async quote_booking(e:number) {
    await axios.get(baseUrl + '/api/ploy/quote_booking/'+e).then((response) => {
      this.quo = response.data;
      this.chB = response.data.map(() => false);
    })
  }

}
