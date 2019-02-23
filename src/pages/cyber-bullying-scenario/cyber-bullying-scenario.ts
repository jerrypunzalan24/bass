import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu';
import {DatabaseProvider} from '../../providers/database/database';
import { Storage } from '@ionic/storage'
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
    
  accountId = 0
  level = 0
  firstTime = true
  tempScore = 0
  userScore = 0
  videoSrc = "assets/videos/Cyber/Cyber 1/Intro_C1.mp4"
  ended = false; ended1 = false; ended2 = false
  correct = false; correct1 = false; correct2 = false
  wrong = false; wrong1 = false; wrong2 = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private database : DatabaseProvider, public storage : Storage) {
    this.database.getDatabaseState().subscribe(()=>console.log("Success"))
    this.accountId = this.navParams.get("accountId")
    // check all scenario data
    this.database.executeQuery("SELECT * FROM progress WHERE scenario = 'scenario1'").then((data)=>{
      if(data.rows.length > 0){
      console.log(data.rows)
      }
    },err =>{
      console.log("Error", err)
      return err
    })
    // retrieve level, currentscore and target score
    this.database.executeQuery(`SELECT * FROM progress WHERE scenario = 'scenario1' AND account_id = ${this.accountId}`).then((data)=>{
      if(data.rows.length > 0){
        this.level = data.rows.item(0).level
        this.tempScore = data.rows.item(0).temp_score
        this.userScore = data.rows.item(0).score
        console.log("Score and level updated successully")
        console.log(`Level : ${this.level} Current Score : ${this.userScore}, Score : ${this.tempScore}`)
        if(this.level == 2){
          this.videoSrc = "assets/videos/Cyber/Cyber 2/Intro_C2.mp4"
        }
        if(this.level == 3){
          this.videoSrc = "assets/videos/Cyber/Cyber 3/Intro_C3.mp4"
        }
      }
      else{
        this.database.executeQuery(`INSERT INTO progress(account_id, scenario,score,temp_score,level) VALUES(${this.accountId}, 'scenario1', 0, 0, 1)`).then((data)=>{
          console.log("Added scenario 1 in this account")
        },err =>{
          console.log("Error ", err)
          return err;
        })
      }
    }, err => {
      console.log("Error", err)
      return err
    })
  }
  ionViewDidLoad() {
    console.log(`Account ID: ${this.accountId}`)
    console.log('ionViewDidLoad CyberBullyingScenarioPage');

  }
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
      //get temp score again
      this.database.executeQuery(`UPDATE progress SET level = 0, temp_score = temp_score + 1 WHERE account_id = ${this.accountId} AND scenario ='scenario1'`).then((data)=>{
        this.database.executeQuery(`SELECT * FROM progress WHERE account_id = ${this.accountId} AND scenario = 'scenario1'`).then((data)=>{
          if(data.rows.length > 0){
            this.tempScore = data.rows.item(0).temp_score
            if(this.tempScore > this.userScore){
              this.database.executeQuery(`UPDATE progress SET level = 0, score = ${this.tempScore}, temp_score = 0 WHERE account_id = ${this.accountId} AND scenario ='scenario1'`).then((data)=>{
                console.log("Progress updated!")  
              }, err =>{
                console.log("Error", err)
                return err
              })
            }
          }
        })
      }, err =>{
        console.log("Error ", err )
        return err
      })
      this.ended2 = true
    }
    this.videoSrc = ''
  }
  SceneOneCorrect(){
    this.videoSrc = "assets/videos/Cyber/Cyber 1/Option_C1_1.mp4"
    this.ended = false
    this.correct = true
      this.database.executeQuery(`UPDATE progress SET level = 2, temp_score = temp_score + 1 WHERE account_id = ${this.accountId} AND scenario = 'scenario1'`).then((data)=>{
        console.log("Progress updated!")
      }, err =>{
        console.log("Error ", err )
        return err
      })
    
  }
  SceneOneWrong(){
    this.videoSrc ="assets/videos/Cyber/Cyber 1/Option_C1_2.mp4"
    this.ended = false
    this.wrong = true
    this.database.executeQuery(`UPDATE progress SET level = 2 WHERE account_id = ${this.accountId} AND scenario = 'scenario1'`).then((data)=>{
      console.log("Progress updated!")
    }, err =>{
      console.log("Error ", err )
      return err
    })
  }
  scenarioTwoStart(){
    this.correct = false
    this.wrong = false
    this.videoSrc = "assets/videos/Cyber/Cyber 2/Intro_C2.mp4"
  }
  SceneTwoCorrect(){
    this.videoSrc = "assets/videos/Cyber/Cyber 2/Option_C2_2.mp4"
    this.ended1 = false
    this.correct1 = true
    this.database.executeQuery(`UPDATE progress SET level = 3, temp_score = temp_score + 1 WHERE account_id = ${this.accountId} AND scenario ='scenario1'`).then((data)=>{
      console.log("Progress updated!")
    }, err =>{
      console.log("Error ", err )
      return err
    })
    
  }
  SceneTwoWrong(){
    this.videoSrc = "assets/videos/Cyber/Cyber 2/Option_C2_1.mp4"
    this.ended1 = false
    this.wrong1 = true
    this.database.executeQuery(`UPDATE progress SET level = 3 WHERE account_id = ${this.accountId} AND scenario ='scenario1'`).then((data)=>{
      console.log("Progress updated!")
    }, err =>{
      console.log("Error ", err )
      return err
    })
  }
  scenarioThreeStart(){
    this.correct1 = false
    this.wrong1 = false
    this.videoSrc = "assets/videos/Cyber/Cyber 3/Intro_C3.mp4"
  }
  gohome(){
    this.navCtrl.setRoot(MenuPage, {accountId : this.accountId})
  }
}
