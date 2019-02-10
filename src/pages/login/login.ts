import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {DatabaseProvider} from '../../providers/database/database'
import {MenuPage} from '../menu/menu';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-login',
   templateUrl: 'login.html',
 })
 export class LoginPage {
   error = ''
   username =''
   password =''
   accounts = []
   success = ''
   public data: FormGroup
   constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private database: DatabaseProvider) {
     this.success = this.navParams.get("success") || '';
     this.data = this.formBuilder.group({
       username: ['', Validators.required],
       password: ['', Validators.required]
     })
     this.database.getDatabaseState().subscribe(rdy=>{
       if(rdy){
         this.loadAccountsData();
       }
     })
     console.log(this.accounts)
   }
   loadAccountsData(){
     this.database.getAllAccounts().then(data=>{
       this.accounts = data
     })

   }
   ionViewDidLoad() {
     console.log('ionViewDidLoad LoginPage');
   }
   onSubmit(){
     this.username = this.data.value.username
     this.password = this.data.value.password
     if(this.username != '' && this.password != ''){
       this.database.checkAccount(this.username, this.password).then(data=>{
         console.log(data)
         if(data != 0){
           this.database.executeQuery(`SELECT * FROM accounts WHERE username = '${this.username}'`).then((data)=>{
            if(data.rows.length > 0){
              this.navCtrl.setRoot(MenuPage, {
                name : this.username,
                accountId : data.rows.item(0).account_id
              })
            }
           },err =>{
             console.log("Error ", err)
             return err
           })
         }
         else{
           this.error = "Incorrect username and password"
         }
       }, err => {
         this.error = JSON.stringify(err);
         return err;
       })
     }
     if(this.username == '' || this.password == ''){
       this.error = 'Please input the following:'
       if(this.username == ''){
         this.error += "<br/>Username"
       }
       if(this.password == ''){
         this.error += "<br/>Password"
       }
     }
     else{
       this.error = "Username or password is incorrect"
     }
   }
   gotoRegister(){
     this.navCtrl.setRoot(RegisterPage)
   }
 }
