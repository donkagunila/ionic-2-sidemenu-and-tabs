import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksPage');
  }

  getNav() {    
    var navs = this.app.getRootNavs();
    if (navs && navs.length > 0) {
      return navs[0];
    }
    return this.app.getActiveNav();
  }

  openPage(){
    let nav = this.getNav();
    nav.push('thenextpage');
  }

}
