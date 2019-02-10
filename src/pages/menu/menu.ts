import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuBullyingPage} from '../menu-bullying/menu-bullying';
import {MenuPhysicalBullyingPage} from '../menu-physical-bullying/menu-physical-bullying';
import {MenuVerbalBullyingPage} from '../menu-verbal-bullying/menu-verbal-bullying';
import {MenuInteractivesPage} from '../menu-interactives/menu-interactives';
import {MenuAchievementsPage} from '../menu-achievements/menu-achievements';
import {SocialBullyingPage} from '../social-bullying/social-bullying';
import {LoginPage} from '../login/login';
import {DatabaseProvider} from '../../providers/database/database';
import {Storage} from '@ionic/storage';

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
  name = "Anon"
  success =''
  imageId = 0
  accountId = 0
  constructor(public navCtrl: NavController, public navParams: NavParams, private database : DatabaseProvider, public storage : Storage) {
    this.database.getDatabaseState().subscribe(()=>console.log("*Hacker voice*: I'm in"))
    this.database.executeQuery("SELECT * FROM accounts").then((data)=>{
      console.log(data)
    },err =>{
      console.log("ERROR ", err)
      return err
    })
    console.log(this.navParams.data)
    this.name = this.navParams.get("name") || "Anon"
    if(this.navParams.get("accountId") !== undefined){
      this.accountId = this.navParams.get("accountId")
    }
    if(this.navParams.get("success") !== undefined){
      this.name = this.navParams.get("username")
      this.success = this.navParams.get("success")
      this.imageId = this.navParams.get("imageId")
      this.database.executeQuery(`SELECT * FROM accounts WHERE name ='${this.name}'`).then((data)=>{
        if(data.rows.length > 0){
          this.accountId = data.rows.item(0).account_id
          console.log(`Account ID : ${this.accountId}`)
          this.storage.set('accountId', this.accountId)
        }
      },err =>{
        console.log("Error ",err )
        return err
      })
      setTimeout(() => {
        this.success = ''
      },5000)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  
  }
  gotoBullying(){
    this.navCtrl.push(MenuBullyingPage,{
      accountId : this.accountId
    })
  }
  gotoPhysicalBullying(){
    this.navCtrl.push(MenuPhysicalBullyingPage,{
      accountId : this.accountId
    })
  }
  gotoVerbalBullying(){
    this.navCtrl.push(MenuVerbalBullyingPage,{
      accountId : this.accountId
    })
  }
  gotoInteractives(){
    this.navCtrl.push(MenuInteractivesPage,{
      accountId : this.accountId
    })
  }
  gotoAchievements(){
    this.navCtrl.push(MenuAchievementsPage,{
      accountId : this.accountId
    })
  }
  gotoSocialBullying(){
    this.navCtrl.push(SocialBullyingPage,{
      accountId : this.accountId
    })
  }
  logout(){
    this.navCtrl.setRoot(LoginPage, {success: "Logout success"})
  }
}
