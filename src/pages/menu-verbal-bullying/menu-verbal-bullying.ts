import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {VerbalBullyingScenarioPage} from '../verbal-bullying-scenario/verbal-bullying-scenario'
/**
 * Generated class for the MenuVerbalBullyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-verbal-bullying',
  templateUrl: 'menu-verbal-bullying.html',
})
export class MenuVerbalBullyingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuVerbalBullyingPage');
  }
  gotoScenario(){
    this.navCtrl.setRoot(VerbalBullyingScenarioPage)
  }

}
