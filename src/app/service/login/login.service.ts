import { Injectable } from '@angular/core';
import axios from 'axios';
import { baseUrl } from 'BaseUrl';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public async login(user: string ,pass: string){
    return await axios.post(baseUrl+'/api/super/Login',{
      user:user,
      password: Md5.hashStr(pass),
      skip:''
    })
  }
}
