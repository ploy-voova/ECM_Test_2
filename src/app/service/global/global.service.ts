import { Injectable } from '@angular/core';
import { baseUrl } from 'BaseUrl';
import axios from 'axios';
import { HomeService } from '../home/home.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public data: any

  constructor(private home_ser: HomeService) {}

  public async quote_preview(type: string) {
    axios.get(baseUrl + '/lib/perform_function.php', {
      params: this.data
    }).then((res) => {
        if (type == 'list-quote') {
          let cleanData = res.data
            .replace(/^[^(]*\(/, '')
            .replace(/\)[^)][^;]*$/, '');
          let jsonData = JSON.parse(cleanData);
          console.log(jsonData['result']);
          this.home_ser.quo = jsonData['result'];
        }
      });
  }
}
