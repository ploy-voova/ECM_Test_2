import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private logser: LoginService) { }

  ngOnInit() {
  }

  async login(){
    // const slogin = (await this.logser.login(this.username, this.password)).data;
    // if (slogin['status'] == 'Done') {
    //   this.router.navigate(['/tabs/home']);
    // } else {
    //   alert(slogin['status']);
    // };
    ////////////////////////////////////////////////////////
    this.router.navigate(['/tabs/home']);

  }
}
