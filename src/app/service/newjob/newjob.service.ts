import { Injectable } from '@angular/core';
import axios from 'axios';
import { baseUrl } from 'BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class NewjobService {

  public vehicle: any;

  constructor() { }

  public async select_Vehicle(pax:any){
    return ( await (axios.post(baseUrl + '/api/ploy/option/car_type',{
        pax: pax,
    }))).data;

  }

  public async select_Luggage(pax:any,car_id:any){
    return ( await (axios.post(baseUrl + '/api/ploy/option/bag_type',{
      pax: pax,
      vehicle: car_id,
    }))).data;
  }

  public async select_Journey(){
    return ( await (axios.get(baseUrl + '/api/ploy/option/journey_type'))).data;
  }

}
