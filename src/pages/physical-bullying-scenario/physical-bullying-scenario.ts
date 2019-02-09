import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
/**
 * Generated class for the PhysicalBullyingScenarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-physical-bullying-scenario',
  templateUrl: 'physical-bullying-scenario.html',
})
export class PhysicalBullyingScenarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhysicalBullyingScenarioPage');
  }
  ended = false; ended1 = false; ended2 = false
  correct = false; correct1 = false; correct2 = false
  wrong = false; wrong1 = false; wrong2 = false;
  
  videoSrc = "assets/videos/Physical/PHYSICAL 1/Intro_P1.mp4"
 
  vidEnded(){
    console.log("Video has been ended")
    console.log(this.videoSrc == "assets/videos/Physical/Physical 2/Intro_P2.mp4")
    if(this.videoSrc=="assets/videos/Physical/PHYSICAL 1/Intro_P1.mp4"){
      this.ended = true
    }
    if(this.videoSrc == "assets/videos/Physical/Physical 2/Intro_P2.mp4"){
      this.ended1 = true
    }
    if(this.videoSrc == "assets/videos/Physical/Physical 3/Intro_P3.mp4"){
      this.ended2 = true
    }
  }
  goback(){
    console.log("Go back pressed")
    if(this.videoSrc == "assets/videos/Physical/PHYSICAL 1/Option_P1_1.mp4"){
      this.videoSrc = "assets/videos/Physical/PHYSICAL 1/Intro_P1.mp4"
      this.wrong = false
    }
    if(this.videoSrc == "assets/videos/Physical/Physical 2/Option_P2_1.mp4"){
      this.videoSrc = "assets/videos/Physical/Physical 2/Intro_P2.mp4"
      this.wrong1 = false
    }
    if(this.videoSrc == "assets/videos/Physical/Physical 3/Option_P3_1.mp4"){
      this.videoSrc = "assets/videos/Physical/Physical 3/Intro_P3.mp4"
      this.wrong2 = false
    }
  }
  SceneOneCorrect(){
    this.videoSrc = "assets/videos/Physical/PHYSICAL 1/Option_P1_2.mp4"
    this.ended = false
    this.correct = true
  }
  SceneOneWrong(){
    this.videoSrc ="assets/videos/Physical/PHYSICAL 1/Option_P1_1.mp4"
    this.ended = false
    this.wrong = true
  }
  scenarioTwoStart(){
    this.correct = false
    this.wrong = false
    this.videoSrc = "assets/videos/Physical/Physical 2/Intro_P2.mp4"
  }
  SceneTwoCorrect(){
    this.videoSrc = "assets/videos/Physical/Physical 2/Option_P2_2.mp4"
    this.ended1 = false
    this.correct1 = true
  }
  SceneTwoWrong(){
    this.videoSrc = "assets/videos/Physical/Physical 2/Option_P2_1.mp4"
    this.ended1 = false
    this.wrong1 = true
  }
  scenarioThreeStart(){
    this.correct1 = false
    this.wrong1 = false
    this.videoSrc = "assets/videos/Physical/Physical 3/Intro_P3.mp4"
  }
  SceneThreeCorrect(){
    this.videoSrc = "assets/videos/Physical/Physical 3/Option_P3_2.mp4"
    this.correct2 = true
    this.ended2 = false
  }
  SceneThreeWrong(){
    this.videoSrc = "assets/videos/Physical/Physical 3/Option_P3_1.mp4"
    this.wrong2 = true
    this.ended2 = false
  }

  gohome(){
    this.navCtrl.setRoot(MenuPage)
  }

}
