import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu'
/**
 * Generated class for the CyberBullyingScenarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cyber-bullying-scenario',
  templateUrl: 'cyber-bullying-scenario.html',
})
export class CyberBullyingScenarioPage {
    
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CyberBullyingScenarioPage');
  }
  videoSrc = "assets/videos/Cyber/Cyber 1/Intro_C1.mp4"
  ended = false; ended1 = false; ended2 = false
  correct = false; correct1 = false; correct2 = false
  wrong = false; wrong1 = false; wrong2 = false;

  vidEnded(){
    console.log("Video has been ended")
    console.log(this.videoSrc == "assets/videos/Cyber/Cyber 2/Intro_C2.mp4")
    if(this.videoSrc=="assets/videos/Cyber/Cyber 1/Intro_C1.mp4"){
      this.ended = true
    }
    if(this.videoSrc == "assets/videos/Cyber/Cyber 2/Intro_C2.mp4"){
      this.ended1 = true
    }
    if(this.videoSrc == "assets/videos/Cyber/Cyber 3/Intro_C3.mp4"){
      this.videoSrc = "assets/videos/Cyber/Cyber 3/Only_C3.mp4"
      this.ended2 = true
    }
  }
  goback(){
    if(this.videoSrc == "assets/videos/Cyber/Cyber 1/Option_C1_2.mp4"){
      this.videoSrc = "assets/videos/Cyber/Cyber 1/Intro_C1.mp4"
      this.wrong = false
    }
    if(this.videoSrc == "assets/videos/Cyber/Cyber 2/Option_C2_1.mp4"){
      this.videoSrc = "assets/videos/Cyber/Cyber 2/Intro_C2.mp4"
      this.wrong1 = false
    }
  }
  SceneOneCorrect(){
    this.videoSrc = "assets/videos/Cyber/Cyber 1/Option_C1_1.mp4"
    this.ended = false
    this.correct = true
  }
  SceneOneWrong(){
    this.videoSrc ="assets/videos/Cyber/Cyber 1/Option_C1_2.mp4"
    this.ended = false
    this.wrong = true
  }
  scenarioTwoStart(){
    this.correct = false
    this.videoSrc = "assets/videos/Cyber/Cyber 2/Intro_C2.mp4"
  }
  SceneTwoCorrect(){
    this.videoSrc = "assets/videos/Cyber/Cyber 2/Option_C2_2.mp4"
    this.ended1 = false
    this.correct1 = true
  }
  SceneTwoWrong(){
    this.videoSrc = "assets/videos/Cyber/Cyber 2/Option_C2_1.mp4"
    this.ended1 = false
    this.wrong1 = true
  }
  scenarioThreeStart(){
    this.correct1 = false
    this.videoSrc = "assets/videos/Cyber/Cyber 3/Intro_C3.mp4"
  }
  gohome(){
    this.navCtrl.setRoot(MenuPage)
  }
}
