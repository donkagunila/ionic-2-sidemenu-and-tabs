import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { BooksPage }  from "../books/books";
import { VideosPage } from "../videos/videos";
import { ChatPage } from "../chat/chat";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tab1Root = BooksPage;
    this.tab2Root = VideosPage;
    this.tab3Root = ChatPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
