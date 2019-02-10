import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PollPage} from '../poll/poll'
import {DatabaseProvider} from '../../providers/database/database';
import{LoginPage} from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-register',
   templateUrl: 'register.html',
 })
 export class RegisterPage {
   username =''
   password =''
   gender = 0
   error =''
   id = 0
   constructor(public navCtrl: NavController, public navParams: NavParams, private database: DatabaseProvider) {
     this.database.getDatabaseState().subscribe(()=>console.log("I'm in"))
   }
   updateUsername(value: string){
     if(this.username != '' && this.password != '')
       this.error =''
     this.username = value
   }
   updatePassword(value: string){
     if(this.username != '' && this.password != '')
       this.error = ''
     this.password = value
   }
   ionViewDidLoad() {
     console.log('ionViewDidLoad RegisterPage');
   }
   goback(){
     this.navCtrl.setRoot(LoginPage)
   }
   onSubmit(){
     if(this.username =='' || this.password ==''){
       this.error = 'Complete all inputs'
     }
     else{
       this.database.checkusername(this.username).then((data)=>{
         console.log(data)
         if(data == 0){
           this.navCtrl.setRoot(PollPage, {
             username : this.username,
             password: this.password,
             gender: this.gender,
           })  
         }
         else{
           this.error = "Account already exist."
         }
       }, err =>{
         this.error = JSON.stringify(err)
       })
     }
   }

 }
