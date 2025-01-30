import { Injectable } from '@angular/core';
import axios from 'axios';
import { baseUrl } from 'BaseUrl';

@Injectable({
  providedIn: 'root'
})
export class QuotePreviewService {

  public qId:any;

  public checkAll : boolean[] = [];
  public mmcheck : boolean[][] = [];

  public jm: any[][][] = [];



  constructor() { }

  // public async quote_Preview2(qId: any) {
  //   return (await (axios.get(baseUrl + '/api/testss/quote_review/'+ qId))).data;
  // }
  public async quote_Preview2(qId: any) {
    return (await (axios.get(baseUrl + '/api/super/quote_full/'+ qId))).data;
  }

  public quote_Preview = (qId: any) => new Promise(async (resolve, reject) => {
    await axios.get(baseUrl + '/api/testss/quote_review/'+ qId)
      .then((data) => {
        resolve(data.data);
      })
      .catch((error) => {
        alert('ผิด');
      });
  })


}
