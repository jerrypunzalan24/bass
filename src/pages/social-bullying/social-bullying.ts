import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocialBullyingScenarioPage} from '../social-bullying-scenario/social-bullying-scenario';
/**
 * Generated class for the SocialBullyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-bullying',
  templateUrl: 'social-bullying.html',
})
export class SocialBullyingPage {
  accountId = 0
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.accountId = this.navParams.get("accountId")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialBullyingPage');
  }
  gotoScenario(){
    this.navCtrl.push(SocialBullyingScenarioPage,{
      accountId : this.accountId
    })
  }

}
