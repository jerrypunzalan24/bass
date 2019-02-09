import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {MenuPage} from '../menu/menu';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController, @Inject(DOCUMENT) document) {
  }
  source1 = 'bully'
  source2 = 'bully'
  source3 = 'bully'
  source4 = 'bully'
  level = 0
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuInteractivesPage');
   this.startgame()


  }
  startgame(){
    if(this.level == 0){
    this.randomizeAnswers()
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
      this.level++;
      if(this.level == 10){
        const alert = this.alertController.create({
          title:"<b style ='color:green'>Congratulations</b>",
          message: "Congratulations for finishing this game!",
          buttons : ['OK']
        })
        alert.present()
        this.navCtrl.setRoot(MenuPage)
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
