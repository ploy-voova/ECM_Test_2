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

  public async quote_booking(e:number,c:boolean) {
    await axios.get(baseUrl + '/api/ploy/quote_booking/'+e).then((response) => {
      this.quo = response.data;

      console.log(c);
      
      console.log(this.chB.length);
      

      if (this.chB.length === 0) {
        this.chB = response.data.map(() => c);
      } else {
        if (c) {
          this.chB = response.data.map(() => c);
        } else {
          for (let index = this.chB.length; index < response.data.length; index++){
            this.chB[index] = c;
          }
        }
      }

      
    })
  }

}
