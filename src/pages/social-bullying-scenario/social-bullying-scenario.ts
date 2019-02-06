import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu'
/**
 * Generated class for the SocialBullyingScenarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social-bullying-scenario',
  templateUrl: 'social-bullying-scenario.html',
})
export class SocialBullyingScenarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ended = false; ended1 = false; ended2 = false
  correct = false; correct1 = false; correct2 = false
  wrong = false; wrong1 = false; wrong2 = false;
  
  videoSrc = "assets/videos/Social/Social 2/Intro_S2.mp4"
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialBullyingScenarioPage');
  }
  vidEnded(){
    console.log("Video has been ended")
    console.log(this.videoSrc == "assets/videos/Social/Social 1/Intro_S1.mp4")
    if(this.videoSrc=="assets/videos/Social/Social 2/Intro_S2.mp4"){
      this.ended = true
    }
    if(this.videoSrc == "assets/videos/Social/Social 1/Intro_S1.mp4"){
      this.ended1 = true
    }
  }
  goback(){
    if(this.videoSrc == "assets/videos/Social/Social 2/Option_S2_2.mp4"){
      this.videoSrc = "assets/videos/Social/Social 2/Intro_S2.mp4"
      this.wrong = false
    }
    if(this.videoSrc == "assets/videos/Social/Social 1/Option_S1_2.mp4"){
      this.videoSrc = "assets/videos/Social/Social 1/Intro_S1.mp4"
      this.wrong1 = false
    }
  }
  SceneOneCorrect(){
    this.videoSrc = "assets/videos/Social/Social 1/Option_S1_1.mp4"
    this.ended1 = false
    this.correct1 = true
  }
  SceneOneWrong(){
    this.videoSrc ="assets/videos/Social/Social 1/Option_S1_2.mp4"
    this.ended1 = false
    this.wrong1 = true
  }
  scenarioTwoStart(){
    this.correct = false
    this.videoSrc = "assets/videos/Social/Social 1/Intro_S1.mp4"
  }
  SceneTwoCorrect(){
    this.videoSrc = "assets/videos/Social/Social 2/Option_S2_1.mp4"
    this.ended = false
    this.correct = true
  }
  SceneTwoWrong(){
    this.videoSrc = "assets/videos/Social/Social 2/Option_S2_2.mp4"
    this.ended = false
    this.wrong = true
  }
  gohome(){
    this.navCtrl.setRoot(MenuPage)
  }

}
