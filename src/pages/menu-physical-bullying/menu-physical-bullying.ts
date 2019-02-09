import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PhysicalBullyingScenarioPage} from '../physical-bullying-scenario/physical-bullying-scenario';
/**
 * Generated class for the MenuPhysicalBullyingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-physical-bullying',
  templateUrl: 'menu-physical-bullying.html',
})
export class MenuPhysicalBullyingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPhysicalBullyingPage');
  }
  gotoScenario(){
    this.navCtrl.push(PhysicalBullyingScenarioPage)
  }

}
