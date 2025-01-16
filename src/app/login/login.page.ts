import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/tabs/home'])
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
