import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';
/**
 * Generated class for the MenuAchievementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-achievements',
  templateUrl: 'menu-achievements.html',
})
export class MenuAchievementsPage {
  scenario1Score = 0
  scenario2Score = 0
  scenario3Score = 0
  scenario4Score = 0

  scenario1Complete = 0
  scenario2Complete = 0
  scenario3Complete = 0
  scenario4Complete = 0

  accountId = 0
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController, private database : DatabaseProvider) {
    this.accountId = this.navParams.get("accountId")
    console.log(`Account ID : ${this.accountId}`)
    console.log("Checking all your achievements")
    this.database.executeQuery(`SELECT * FROM progress WHERE account_id = ${this.accountId}`).then((data)=>{
      if(data.rows.length > 0){
        console.log(data)
      }
    },err =>{
      console.log("Error", err)
      return err
    })
    this.database.executeQuery(`SELECT * FROM progress WHERE scenario = 'scenario1' AND account_id = ${this.accountId}`).then((data)=>{
      if(data.rows.length > 0){
        if(data.rows.item(0).score > 0){
          if(data.rows.item(0).score == 3){
            this.scenario1Complete = 1
          }
          this.scenario1Score = data.rows.item(0).score
        }
      }
      this.database.executeQuery(`SELECT * FROM progress WHERE scenario ='scenario2' AND account_id = ${this.accountId}`).then((data)=>{
          if(data.rows.length > 0){
            if(data.rows.item(0).score > 0){
              if(data.rows.item(0).score == 3){
                this.scenario2Complete = 1
              }
              this.scenario2Score = data.rows.item(0).score
            }
          }
          this.database.executeQuery(`SELECT * FROM progress WHERE scenario = 'scenario3' AND account_id = ${this.accountId}`).then((data) =>{
              if(data.rows.length > 0){
                if(data.rows.item(0).score > 0){
                  if(data.rows.item(0).score == 2){
                    this.scenario3Complete = 1
                  }
                  this.scenario3Score = data.rows.item(0).score
                }
              }
              this.database.executeQuery(`SELECT * FROM progress WHERE scenario ='scenario4' AND account_id = ${this.accountId}`).then((data)=>{
                  if(data.rows.length > 0){
                    if(data.rows.item(0).score > 0){
                      if(data.rows.item(0).score == 3){
                        this.scenario4Complete = 1
                      }
                      this.scenario4Score = data.rows.item(0).score
                    }
                  }
                },err => {
                  console.log("Error ",err)
                  return err
                })
            }, err => {
              console.log("Error ", err)
              return err
            })
        }, err =>{
          console.log("Error ", err)
        })
    },err =>{
      console.log("Error ", err)
      return err
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuAchievementsPage');
  }

  showAchievement(achievementType){
    console.log(achievementType === "scene1score")
    if(achievementType === "scene1score"){
      const alert = this.alertController.create({
        title: "Cyber Bullying Mastery",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene1complete"){
        const alert = this.alertController.create({
        title: "Cyber Bullying Mastered",
        message: (this.scenario1Complete == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene2score"){
      const alert = this.alertController.create({
        title: "Physical Bullying Mastery",
        message: (this.scenario2Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene2complete"){
        const alert = this.alertController.create({
        title: "Physical Bullying Mastered",
        message: (this.scenario2Complete == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
    
    if(achievementType === "scene3score"){
      const alert = this.alertController.create({
        title: "Social Bullying Mastery",
        message: (this.scenario3Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene3complete"){
        const alert = this.alertController.create({
        title: "Social Bullying Mastered",
        message: (this.scenario3Complete == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
    
    if(achievementType === "scene4score"){
      const alert = this.alertController.create({
        title: "Verbal Bullying Mastery",
        message: (this.scenario4Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene4complete"){
        const alert = this.alertController.create({
        title: "Verbal Bullying Mastered",
        message: (this.scenario4Complete == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
  }

}
