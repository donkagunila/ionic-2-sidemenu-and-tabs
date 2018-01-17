import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { TabsPage } from "../tabs/tabs";
import { SettingsPage } from "../settings/settings";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages : Array< { id : number, title : string , component: any} >

  rootPage:any = TabsPage; 

  constructor(public navCtrl: NavController) {
    this.pages = [
      { id : 1, title : 'Settings', component: 'SettingsPage' }
    ];
  }


  openPage(page) {
    this.navCtrl.push(page.component);
  }

}
