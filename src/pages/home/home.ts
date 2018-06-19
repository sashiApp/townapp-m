import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyListPage } from '../buy-list/buy-list';
import { NewsPage } from '../news/news';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  openPage(){
    console.log("open page called.");
  }

  addItem(){
    console.log("add item called.");
  }

  navigateTo(page)
  {
    console.log("navigate to:"+page);
     this.navCtrl.push(page);
  }

}
