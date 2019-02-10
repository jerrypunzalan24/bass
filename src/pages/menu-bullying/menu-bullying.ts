import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CyberBullyingScenarioPage} from '../cyber-bullying-scenario/cyber-bullying-scenario'
/**
 * Generated class for the MenuBullyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-bullying',
  templateUrl: 'menu-bullying.html',
})
export class MenuBullyingPage {
  accountId = 0
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accountId = this.navParams.get("accountId")
    console.log(`Account ID : ${this.accountId}`)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuBullyingPage');
  }
  goback(){
    this.navCtrl.pop();
  }
  gotoScenario(){
    this.navCtrl.push(CyberBullyingScenarioPage, {
      accountId : this.accountId
    })
  }
}
