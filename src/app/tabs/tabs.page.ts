import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  currentPage: string = '';

  newjob: string = 'add-circle-outline';
  job: string = 'briefcase-outline';
  home: string = 'home';
  contacts: string = 'person-outline';
  more: string = 'apps-outline';
  
  // @ViewChild('iconH', { static: true }) iconH!: ElementRef;
  
  constructor(private menu: MenuController, private router: Router,private renderer: Renderer2) {


  }

  ngOnInit() {
    // if(this.home == 'home'){
    //   console.log('nn');
      
    //   // this.renderer.setStyle(this.iconH.nativeElement, 'color', 'blue');
    // }
  }


  openFirstMenu() {
    this.menu.open('first-menu');
  }

  To_home() {
    this.router.navigateByUrl('/tabs/home');
  }



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
