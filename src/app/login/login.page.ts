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
    // }
    
    

    // axios.post('http://35.187.248.255:214/api/super/Login',{
    //   user:'win',
    //   password:'e10adc3949ba59abbe56e057f20f883e',
    //   skip:''
    // }).then((res) => {
    //   console.log(res);
    // })
    this.router.navigate(['/tabs/home'])
    // axios.get('http://35.187.248.255:214/lib/perform_function.php',{
    //   params: {
    //     d: 'adminlib',
    //     f: 'list-booking.php',
    //     callback: '',
    //     pagesize: '10',
    //     callbacks: '',
    //     date_start: '03/02/2025',
    //     date_end: '17/02/2025',
    //     date_booking_start: '',
    //     date_booking_end:'',
    //     grid_type: '3',
    //     privatedashboardfilter: '0',
    //     site_id: 'all',
    //     s_user: 'all',
    //     ops_person: 'all',
    //     status_re: 'all',
    //     payment: 'all',
    //     progress: 'all',
    //     priority: 'all',
    //     search: '',
    //     journey_type: 'all',
    //     qfilter: '0',
    //     private_hire: '1',
    //     contract: '1',
    //     non_inv_checkbox: '0',
    //     take: '10',
    //     skip: '0',
    //     page: '1',
    //     pageSize: '10',
    //     sort: [{field:"quote_id" , dir:"asc"}],
    //     _: '1738551746506'
    //   }
    // }).then((res) => {
    //   let cleanData = res.data.replace(/^[^(]*\(/, "").replace(/\)[^)]*$/, "");
    //   let jsonData = JSON.parse(cleanData);
    //   console.log(jsonData);
    // })
  }
  // login(){
  //   console.log(this.username);
    
  //   const requestBody = {
  //     username: this.username,
  //     password: this.password,
  //   };

  //   fetch('http://35.187.248.255:214/api/win/logins', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(requestBody),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('Key=====', data);
  //       localStorage.setItem('keyLogin', data);
  //       const keylogin = localStorage.getItem('keyLogin');
  //       console.log('KeyLoginStorage==', keylogin);
  //       this.router.navigate(['/tabs/home'])
  //     })
  //     .catch((error) => {
  //       alert('ผิด');
  //     });
  // }
}
