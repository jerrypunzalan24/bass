import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {DatabaseProvider} from '../../providers/database/database';
/**
 * Generated class for the PollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-poll',
   templateUrl: 'poll.html',
 })
 export class PollPage {
   username = ''
   password = ''
   gender = ''
   experience = 0
   bullying_type = ''
   constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {
     this.username = this.navParams.get("username")
     this.password = this.navParams.get("password")
     this.gender = this.navParams.get("gender")
     console.log(this.navParams.data)
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad PollPage');
   }
   onSubmit(){
     this.database.addAccount(this.username, this.password, this.gender, this.experience, this.bullying_type)
     .then(()=>{
       this.navCtrl.setRoot(MenuPage, {
         username: this.username,
         success: "Registered Success",
         experience: this.experience,
         imageId : this.gender,
         bullying_type: this.bullying_type
       })
     }, err =>{
       console.log("Error", err)
       return err;
     })

   }

 }
