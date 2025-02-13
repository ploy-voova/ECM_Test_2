import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform, AlertController, IonThumbnail } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  currentPage: string = '';

  // newjob: string = 'add-circle-outline';
  // job: string = 'briefcase-outline';
  // home: string = 'home';
  // contacts: string = 'person-outline';
  // more: string = 'apps-outline';
  
  // @ViewChild('iconH', { static: true }) iconH!: ElementRef;
  
  constructor(private menuCtrl: MenuController, private router: Router,private renderer: Renderer2) {


  }

  ngOnInit() {
    this.checkMenuStatus()
    // if(this.home == 'home'){
    //   console.log('nn');
      
    //   // this.renderer.setStyle(this.iconH.nativeElement, 'color', 'blue');
    // }
    
  }

  activeTab: string = 'home';
  menuIcon: string = 'apps-outline'; 
  checkMenuStatus() {
    this.menuCtrl.isOpen().then(isOpen => {
      if (isOpen) {
        console.log('Menu is open');
      } else {
        console.log('Menu is closed');
      }
    });
  }

  // close(){
  //   console.log('kkk');
    
  //   this.menuCtrl.close('firstMenu');
  // }

  async toggleMenu() {
    const isOpen = await this.menuCtrl.isOpen('firstMenu');

    console.log(isOpen);
    

    if (isOpen) {
      console.log('pass');
      
      this.menuCtrl.close('firstMenu');
      this.menuIcon = 'apps-outline'; // ปิดเมนู → ใช้ไอคอน outline
    } else {
      console.log('oooo');
      

      this.menuCtrl.open('firstMenu');
      this.menuIcon = 'apps'; // เปิดเมนู → ใช้ไอคอน filled
    }
  }

  setActiveTab(event: any) {
    this.activeTab = event.tab;
    // console.log("Active Tab:", this.activeTab);
  }

  getIcon(tabName: string) {
    const icons: { [key: string]: { outline: string; filled: string } } = {
      'new-job': { outline: 'add-circle-outline', filled: 'add-circle' },
      'job': { outline: 'briefcase-outline', filled: 'briefcase' },
      'home': { outline: 'home-outline', filled: 'home' },
      'contacts' : { outline: 'person-outline', filled: 'person'},
      'more' : { outline: 'apps-outline', filled: 'apps-outline'}
    };

    return this.activeTab === tabName ? icons[tabName].filled : icons[tabName].outline;
  }

  To_home() {
    this.router.navigateByUrl('/tabs/home');
  }



  // changeIcon_Newjob(){
  //   this.newjob = 'add-circle';
  //   this.job = 'briefcase-outline'
  //   this.home = 'home-outline';
  //   this.contacts = 'person-outline';
  //   this.more = 'apps-outline';
  // }

  // changeIcon_Job(){
  //   this.newjob = 'add-circle-outline';
  //   this.job = 'briefcase';
  //   this.home = 'home-outline';
  //   this.contacts = 'person-outline';
  //   this.more = 'apps-outline';
  // }

  // changeIcon_Home(){
  //   this.newjob = 'add-circle-outline';
  //   this.job = 'briefcase-outline'
  //   this.home = 'home';
  //   this.contacts = 'person-outline';
  //   this.more = 'apps-outline';
  // }

  // changeIcon_Con(){
  //   this.newjob = 'add-circle-outline';
  //   this.job = 'briefcase-outline'
  //   this.home = 'home-outline';
  //   this.contacts = 'person';
  //   this.more = 'apps-outline';
  // }

  // changeIcon_More(){
  //   this.newjob = 'add-circle-outline';
  //   this.job = 'briefcase-outline'
  //   this.home = 'home-outline';
  //   this.contacts = 'person-outline';
  //   this.more = 'apps';
  // }

  // checkCurrentPage() {
  //   this.router.events.subscribe(() => {
  //     this.currentPage = this.router.url; // URL ปัจจุบัน
  //     console.log('Current Page:', this.currentPage);
  //   });
  // }

}
