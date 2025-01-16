import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController,Platform, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private menu: MenuController,private router: Router) {
    
   }

  ngOnInit() {
    
  }

  
  openFirstMenu() {
    this.menu.open('first-menu');
  }

  To_home(){
    this.router.navigateByUrl('/tabs/home');
  }


}
