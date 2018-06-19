import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the BuyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-list',
  templateUrl: 'buy-list.html',
})
export class BuyListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
    const personRef = db.database.ref(`/realestate/`);
    personRef.on('value', personSnapshot => {
      console.log("from DB2:"+ JSON.stringify(personSnapshot.val(),null,2));
    });
    console.log("from DB:"+ JSON.stringify(this.db.list('/realestate').snapshotChanges(), null, 2));
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyListPage');
  
  }

}
