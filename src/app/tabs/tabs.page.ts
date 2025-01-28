import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  currentPage: string = '';

  constructor(private menu: MenuController, private router: Router) {

  }

  ngOnInit() {
    // this.checkCurrentPage();
  }


  openFirstMenu() {
    this.menu.open('first-menu');
  }

  To_home() {
    this.router.navigateByUrl('/tabs/home');
  }

  newjob: string = 'add-circle-outline';
  job: string = 'briefcase-outline';
  home: string = 'home';
  contacts: string = 'person-outline';
  more: string = 'apps-outline';

  changeIcon_Newjob(){
    this.newjob = 'add-circle';
    this.job = 'briefcase-outline'
    this.home = 'home-outline';
    this.contacts = 'person-outline';
    this.more = 'apps-outline';
  }

  changeIcon_Job(){
    this.newjob = 'add-circle-outline';
    this.job = 'briefcase';
    this.home = 'home-outline';
    this.contacts = 'person-outline';
    this.more = 'apps-outline';
  }

  changeIcon_Home(){
    this.newjob = 'add-circle-outline';
    this.job = 'briefcase-outline'
    this.home = 'home';
    this.contacts = 'person-outline';
    this.more = 'apps-outline';
  }

  changeIcon_Con(){
    this.newjob = 'add-circle-outline';
    this.job = 'briefcase-outline'
    this.home = 'home-outline';
    this.contacts = 'person';
    this.more = 'apps-outline';
  }

  changeIcon_More(){
    this.newjob = 'add-circle-outline';
    this.job = 'briefcase-outline'
    this.home = 'home-outline';
    this.contacts = 'person-outline';
    this.more = 'apps';
  }

  // checkCurrentPage() {
  //   this.router.events.subscribe(() => {
  //     this.currentPage = this.router.url; // URL ปัจจุบัน
  //     console.log('Current Page:', this.currentPage);
  //   });
  // }

}
