import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MenuPage} from '../menu/menu';
import {DatabaseProvider} from '../../providers/database/database';
/**
 * Generated class for the MenuInteractivesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-interactives',
  templateUrl: 'menu-interactives.html',
})
export class MenuInteractivesPage {
accountId = 0
source1 = 'bully'
source2 = 'bully'
source3 = 'bully'
source4 = 'bully'
level = 0
score = 0
alphabets ='abcdefghijklmnopqrstuvwxyz'
answers = [
  "bully",
  "crying",
  "friends",
  "greedy",
  "lonely",
  "playing",
  "shout",
  "study",
  "taunt",
  "tease",
]
yourAnswer = ''
answerboxes = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController, @Inject(DOCUMENT) document, private database : DatabaseProvider) {
    this.database.getDatabaseState().subscribe(()=>console.log("Success"))
    this.accountId = this.navParams.get("accountId")
    // retrieve score, level, and answerbanks to prevent from shuffling
    this.database.executeQuery(`SELECT * FROM fourpics WHERE account_id = ${this.accountId}`).then((data)=>{
      if(data.rows.length > 0){
        this.level = data.rows.item(0).level
        this.score = data.rows.item(0).score
        if(data.rows.item(0).answerbank.trim().length > 0){
        this.answers = data.rows.item(0).answerbank.split(" ")
        }
        console.log("Level, score, and answerbank loaded successfully")
        console.log(`Level : ${this.level} Score : ${this.score}\nAnswerbank : ${this.answers}`)

      }
      if(this.level == 0){
        this.randomizeAnswers()
        let answerbankStr = this.answers.join(" ")
        this.database.executeQuery(`INSERT INTO fourpics(account_id, level, score, answerbank) VALUES(${this.accountId}, ${this.level},${this.score}, '${answerbankStr}')`).then((data)=>{
          console.log("Data saved")
        }, err =>{
          console.log("Error ", err )
          return err
        })
        }
        console.log(this.answers)
        this.source1 = this.answers[this.level]
        this.source2 = this.answers[this.level]
        this.source3 = this.answers[this.level]
        this.source4 = this.answers[this.level]
        this.answerboxes = this.answers[this.level].split("")
        var length = this.answerboxes.length;
        for(var x = 0; x < 12 - length; x++){
          this.answerboxes.push(this.alphabets[Math.floor(Math.random() * this.alphabets.length) ])
        }
        this.randomizeAnswerBoxes()
        console.log(this.answerboxes)
    }, err =>{
      console.log("Error ", err)
      return err
    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuInteractivesPage');
  }
  // refresh
  startgame(){
    console.log(this.answers)
    this.source1 = this.answers[this.level]
    this.source2 = this.answers[this.level]
    this.source3 = this.answers[this.level]
    this.source4 = this.answers[this.level]
    this.answerboxes = this.answers[this.level].split("")
    var length = this.answerboxes.length;
    for(var x = 0; x < 12 - length; x++){
      this.answerboxes.push(this.alphabets[Math.floor(Math.random() * this.alphabets.length) ])
    }
    this.randomizeAnswerBoxes()
    console.log(this.answerboxes)
  }
  randomizeAnswers(){
   for (var x = 0; x < this.answers.length; x++){
    var y = Math.floor(Math.random() * (x+1)) % this.answers.length
    var temp = this.answers[x]
    this.answers[x] = this.answers[y]
    this.answers[y] = temp
   }
  }
  onKey(event: any){
   this.yourAnswer = event.target.value 
   console.log(this.yourAnswer)
  }
  randomizeAnswerBoxes(){
    for (var x = 0; x < this.answerboxes.length; x++){
      var y = Math.floor(Math.random() * (x+1)) % this.answerboxes.length
      var temp = this.answerboxes[x]
      this.answerboxes[x] = this.answerboxes[y]
      this.answerboxes[y] = temp
   }
  }
  submitAnswer(){
    console.log(this.level)
    if(this.yourAnswer.toLowerCase() == this.answers[this.level]){
      this.database.executeQuery(`UPDATE fourpics SET level = level + 1, score = score + 1 WHERE account_id = ${this.accountId}`).then((data)=>{
        console.log("Progress saved!")
        this.database.executeQuery(`SELECT * FROM fourpics WHERE account_id = ${this.accountId}`).then((data)=>{
          if(data.rows.length > 0){
            this.level = data.rows.item(0).level
            if(data.rows.item(0).level == 10){
              this.database.executeQuery(`UPDATE fourpics SET level = 0, answerbank = '' WHERE account_id = ${this.accountId}`).then((data)=>{
                const alert = this.alertController.create({
                  title:"<b style ='color:green'>Congratulations</b>",
                  message: "Congratulations for finishing this game!",
                  buttons : ['OK']
                })
                alert.present()
                this.navCtrl.setRoot(MenuPage, {
                  accountId : this.accountId
                })
              },err =>{
                console.log("Error ", err)
                return err
              })
            }
            else{
            const alert = this.alertController.create({
              title:"<b style ='color:green'>Correct!</b>",
              message: "You will now proceed to the next stage!",
              buttons: ['OK']
            })
            alert.present()
            var inputvalue = (<HTMLInputElement> document.getElementById('userInput'))
            inputvalue.value =''
            this.startgame()
          }
          }
        },err =>{
          console.log("Error ", err)
          return err
        })
      },err =>{
        console.log("Error", err)
        return err
      })
    }
    else{
      const alert = this.alertController.create({
        title: "<b style ='color:red'>Wrong!</b>",
        message :"Try again!",
        buttons : ['OK']
      })
      alert.present()
    }
  }

}
