import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
/**
 * Generated class for the VerbalBullyingScenarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verbal-bullying-scenario',
  templateUrl: 'verbal-bullying-scenario.html',
})
export class VerbalBullyingScenarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerbalBullyingScenarioPage');
  }
  videoSrc = "assets/videos/Verbal/Verbal 1/Intro_V1.mp4"
  ended = false; ended1 = false; ended2 = false
  correct = false; correct1 = false; correct2 = false
  wrong = false; wrong1 = false;wrong11 = false; wrongg = false; wrong2 = false;

  vidEnded(){
    console.log("Video has been ended")
    console.log(this.videoSrc == "assets/videos/Verbal/Verbal 2/Intro_V2.mp4")
    if(this.videoSrc=="assets/videos/Verbal/Verbal 1/Intro_V1.mp4"){
      this.ended = true
    }
    if(this.videoSrc == "assets/videos/Verbal/Verbal 2/Intro_V2.mp4"){
      this.ended1 = true
    }
    if(this.videoSrc == "assets/videos/Verbal/Verbal 3/Intro_V3.mp4"){
      this.ended2 = true
    }
  }
  goback(){
    if(this.videoSrc == "assets/videos/Verbal/Verbal 1/Option_V1_1.mp4" || this.videoSrc == "assets/videos/Verbal/Verbal 1/Option_V1_3.mp4"){
      this.videoSrc = "assets/videos/Verbal/Verbal 1/Intro_V1.mp4"
      this.wrong = false
      this.wrongg = false
    }
    if(this.videoSrc == "assets/videos/Verbal/Verbal 2/Option_V2_2.mp4" || this.videoSrc == "assets/videos/Verbal/Verbal 2/Option_V2_1.mp4"){
      this.videoSrc = "assets/videos/Verbal/Verbal 2/Intro_V2.mp4"
      this.wrong1 = false
      this.wrong11 = false
    }
    if(this.videoSrc == "assets/videos/Verbal/Verbal 3/Option_V3_2.mp4"){
      this.videoSrc = "assets/videos/Verbal/Verbal 3/Intro_V3.mp4"
      this.wrong2 = false
    }
  }
  SceneOneCorrect(){
    this.videoSrc = "assets/videos/Verbal/Verbal 1/Option_V1_2.mp4"
    this.ended = false
    this.correct = true
  }
  SceneOneWrong(){
    this.videoSrc ="assets/videos/Verbal/Verbal 1/Option_V1_3.mp4"
    this.ended = false
    this.wrong = true
  }
  SceneOneWrong1(){
    this.videoSrc = "assets/videos/Verbal/Verbal 1/Option_V1_1.mp4"
    this.ended = false
    this.wrongg = true
  }
  scenarioTwoStart(){
    this.correct = false
    this.videoSrc = "assets/videos/Verbal/Verbal 2/Intro_V2.mp4"
  }
  SceneTwoCorrect(){
    this.videoSrc = "assets/videos/Verbal/Verbal 2/Option_V2_3.mp4"
    this.ended1 = false
    this.correct1 = true
  }
  SceneTwoWrong1(){
    this.videoSrc = "assets/videos/Verbal/Verbal 2/Option_V2_2.mp4"
    this.ended1 = false
    this.wrong11 = true
  }
  SceneTwoWrong(){
    this.videoSrc = "assets/videos/Verbal/Verbal 2/Option_V2_1.mp4"
    this.ended1 = false
    this.wrong1 = true
  }
  scenarioThreeStart(){
    this.correct1 = false
    this.videoSrc = "assets/videos/Verbal/Verbal 3/Intro_V3.mp4"
  }
  ScenarioThreeCorrect(){
    this.videoSrc = "assets/videos/Verbal/Verbal 3/Option_V3_1.mp4"
    this.correct2 = true
    this.ended2 = false
  }
  ScenarioThreeWrong(){
    this.videoSrc = "assets/videos/Verbal/Verbal 3/Option_V3_2.mp4"
    this.wrong2 = true
    this.ended2 = false
  }
  gohome(){
    this.navCtrl.setRoot(MenuPage)
  }

}
