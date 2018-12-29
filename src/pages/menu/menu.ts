import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuBullyingPage} from '../menu-bullying/menu-bullying';
import {MenuPhysicalBullyingPage} from '../menu-physical-bullying/menu-physical-bullying';
import {MenuVerbalBullyingPage} from '../menu-verbal-bullying/menu-verbal-bullying';
import {MenuInteractivesPage} from '../menu-interactives/menu-interactives';
import {MenuAchievementsPage} from '../menu-achievements/menu-achievements';
import {LoginPage} from '../login/login';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  name = ''
  success =''
  imageId = 0
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data)
    this.name = this.navParams.get("name")
    if(this.navParams.get("success") !== undefined){
      this.name = this.navParams.get("username")
      this.success = this.navParams.get("success")
      this.imageId = this.navParams.get("imageId")
      setTimeout(() => {
        this.success = ''
      },5000)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  gotoBullying(){
    this.navCtrl.push(MenuBullyingPage)
  }
  gotoPhysicalBullying(){
    this.navCtrl.push(MenuPhysicalBullyingPage)
  }
  gotoVerbalBullying(){
    this.navCtrl.push(MenuVerbalBullyingPage)
  }
  gotoInteractives(){
    this.navCtrl.push(MenuInteractivesPage)
  }
  gotoAchievements(){
    this.navCtrl.push(MenuAchievementsPage)
  }
  logout(){
    this.navCtrl.setRoot(LoginPage, {success: "Logout success"})
  }
}
