import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertController : AlertController) {
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
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene2score"){
      const alert = this.alertController.create({
        title: "Physical Bullying Mastery",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene2complete"){
        const alert = this.alertController.create({
        title: "Physical Bullying Mastered",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
    
    if(achievementType === "scene3score"){
      const alert = this.alertController.create({
        title: "Social Bullying Mastery",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene3complete"){
        const alert = this.alertController.create({
        title: "Social Bullying Mastered",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
    
    if(achievementType === "scene4score"){
      const alert = this.alertController.create({
        title: "Verbal Bullying Mastery",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get atleast 1 score in this scenario and you'll earn this medal. The color will change depending on the score you got"),
        buttons: ["OK"]
      })
      alert.present()
    }
    if(achievementType === "scene4complete"){
        const alert = this.alertController.create({
        title: "Verbal Bullying Mastered",
        message: (this.scenario1Score == 0 ? "<b>Not complete</b>" : "<b style ='color:green'>Complete</b>").concat("<br/><br/>Get a perfect score in this scenario and you'll earn this trophy. "),
        buttons: ["OK"]
      })
      alert.present()
    }
  }

}
