import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {MenuBullyingPage} from '../menu-bullying/menu-bullying';
import {MenuPhysicalBullyingPage} from '../menu-physical-bullying/menu-physical-bullying';
import {MenuVerbalBullyingPage} from '../menu-verbal-bullying/menu-verbal-bullying';
import {MenuInteractivesPage} from '../menu-interactives/menu-interactives';
import {MenuAchievementsPage} from '../menu-achievements/menu-achievements';
import {SocialBullyingPage} from '../social-bullying/social-bullying';
import {LoginPage} from '../login/login';
import {DatabaseProvider} from '../../providers/database/database';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  name = "Anon"
  success =''
  imageId = 0
  accountId = 0
  constructor(public navCtrl: NavController, public navParams: NavParams, private database : DatabaseProvider, public storage : Storage, public alertController : AlertController) {
    this.database.getDatabaseState().subscribe(()=>console.log("*Hacker voice*: I'm in"))
    this.database.executeQuery("SELECT * FROM accounts").then((data)=>{
      console.log(data)
    },err =>{
      console.log("ERROR ", err)
      return err
    })
    console.log(this.navParams.data)
    this.name = this.navParams.get("name") || "Anon"
    if(this.navParams.get("accountId") !== undefined){
      this.accountId = this.navParams.get("accountId")
    }
    //Check all achievements
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
            this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name ='scenario1master' AND account_id =${this.accountId}`).then((data)=>{
              if(data.rows.length == 0){
                // Add mastered
                this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId},'scenario1master',1)`).then((data)=>{
                  console.log("Scenario 1 mastered added success")
                  const alert = this.alertController.create({
                    title:"You received an achievement",
                    message: "Cyber bullying mastered",
                    buttons : ['OK']
                  })
                  alert.present()
                }, err =>{
                  console.log("Error ", err)
                  return err
                })
              }
            }, err =>{
              console.log("Error ", err)
              return err
            })
          }
          // Add mastery
          var userscore = data.rows.item(0).score
          this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name = 'scenario1score${userscore}' AND account_id = ${this.accountId}`).then((data)=>{
            if(data.rows.length == 0){
              this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId}, 'scenario1score${userscore}', 1)`).then((data)=>{
                console.log(`Scenario 1 mastery level ${userscore} added success`)
                const alert = this.alertController.create({
                  title : "You received an achievement",
                  message : `Cyber bullying mastery ${userscore}`,
                  buttons : ["OK"]
                })
                alert.present()
              }, err =>{
                console.log("Error ", err)
                return err
              })
            }
          }, err =>{
            console.log("Error ", err)
            return err
          })
        }
      }
      this.database.executeQuery(`SELECT * FROM progress WHERE scenario ='scenario2' AND account_id = ${this.accountId}`).then((data)=>{
          if(data.rows.length > 0){
            if(data.rows.item(0).score > 0){
              if(data.rows.item(0).score == 3){
                this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name ='scenario2master' AND account_id =${this.accountId}`).then((data)=>{
                  if(data.rows.length == 0){
                    // Add mastered
                    this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId},'scenario2master',1)`).then((data)=>{
                      console.log("Scenario 1 mastered added success")
                      const alert = this.alertController.create({
                        title:"You received an achievement",
                        message: "Physical bullying mastered",
                        buttons : ['OK']
                      })
                      alert.present()
                    }, err =>{
                      console.log("Error ", err)
                      return err
                    })
                  }
                }, err =>{
                  console.log("Error ", err)
                  return err
                })
              }
                        // Add mastery
          var userscore = data.rows.item(0).score
          this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name = 'scenario2score${userscore}' AND account_id = ${this.accountId}`).then((data)=>{
            if(data.rows.length == 0){
              this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId}, 'scenario2score${userscore}', 1)`).then((data)=>{
                console.log(`Scenario 1 mastery level ${userscore} added success`)
                const alert = this.alertController.create({
                  title : "You received an achievement",
                  message : `Physical bullying mastery ${userscore}`,
                  buttons : ["OK"]
                })
                alert.present()
              }, err =>{
                console.log("Error ", err)
                return err
              })
            }
          }, err =>{
            console.log("Error ", err)
            return err
          })
            }
          }
          this.database.executeQuery(`SELECT * FROM progress WHERE scenario = 'scenario3' AND account_id = ${this.accountId}`).then((data) =>{
              if(data.rows.length > 0){
                if(data.rows.item(0).score > 0){
                  if(data.rows.item(0).score == 2){
                    this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name ='scenario3master' AND account_id =${this.accountId}`).then((data)=>{
                      if(data.rows.length == 0){
                        // Add mastered
                        this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId},'scenario3master',1)`).then((data)=>{
                          console.log("Scenario 1 mastered added success")
                          const alert = this.alertController.create({
                            title:"You received an achievement",
                            message: "Social bullying mastered",
                            buttons : ['OK']
                          })
                          alert.present()
                        }, err =>{
                          console.log("Error ", err)
                          return err
                        })
                      }
                    }, err =>{
                      console.log("Error ", err)
                      return err
                    })
                  }
                            // Add mastery
          var userscore = data.rows.item(0).score
          this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name = 'scenario3score${userscore}' AND account_id = ${this.accountId}`).then((data)=>{
            if(data.rows.length == 0){
              this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId}, 'scenario3score${userscore}', 1)`).then((data)=>{
                console.log(`Scenario 3 mastery level ${userscore} added success`)
                const alert = this.alertController.create({
                  title : "You received an achievement",
                  message : `Social bullying mastery ${userscore}`,
                  buttons : ["OK"]
                })
                alert.present()
              }, err =>{
                console.log("Error ", err)
                return err
              })
            }
          }, err =>{
            console.log("Error ", err)
            return err
          })
                }
              }
              this.database.executeQuery(`SELECT * FROM progress WHERE scenario ='scenario4' AND account_id = ${this.accountId}`).then((data)=>{
                  if(data.rows.length > 0){
                    if(data.rows.item(0).score > 0){
                      if(data.rows.item(0).score == 3){
                        this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name ='scenario4master' AND account_id =${this.accountId}`).then((data)=>{
                          if(data.rows.length == 0){
                            // Add mastered
                            this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId},'scenario4master',1)`).then((data)=>{
                              console.log("Scenario 4 mastered added success")
                              const alert = this.alertController.create({
                                title:"You received an achievement",
                                message: "Verbal bullying mastered",
                                buttons : ['OK']
                              })
                              alert.present()
                            }, err =>{
                              console.log("Error ", err)
                              return err
                            })
                          }
                        }, err =>{
                          console.log("Error ", err)
                          return err
                        })
                      }
                                // Add mastery
          var userscore = data.rows.item(0).score
          this.database.executeQuery(`SELECT * FROM achievements WHERE achievement_name = 'scenario4score${userscore}' AND account_id = ${this.accountId}`).then((data)=>{
            if(data.rows.length == 0){
              this.database.executeQuery(`INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(${this.accountId}, 'scenario4score${userscore}', 1)`).then((data)=>{
                console.log(`Scenario 4 mastery level ${userscore} added success`)
                const alert = this.alertController.create({
                  title : "You received an achievement",
                  message : `Verbal bullying mastery ${userscore}`,
                  buttons : ["OK"]
                })
                alert.present()
              }, err =>{
                console.log("Error ", err)
                return err
              })
            }
          }, err =>{
            console.log("Error ", err)
            return err
          })
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
    //End check all achievements
    this.database.executeQuery(`SELECT * FROM accounts WHERE account_id = ${this.accountId}`).then((data)=>{
      if(data.rows.length > 0){
        this.name = data.rows.item(0).name
        this.imageId = data.rows.item(0).gender
      }
    }, err => {
      console.log("Error", err)
      return err
    })
    if(this.navParams.get("success") !== undefined){
      this.name = this.navParams.get("username")
      this.success = this.navParams.get("success")
      this.imageId = this.navParams.get("imageId")
      this.database.executeQuery(`SELECT * FROM accounts WHERE name ='${this.name}'`).then((data)=>{
        if(data.rows.length > 0){
          this.accountId = data.rows.item(0).account_id
          console.log(`Account ID : ${this.accountId}`)
          this.storage.set('accountId', this.accountId)
        }
      },err =>{
        console.log("Error ",err )
        return err
      })
      setTimeout(() => {
        this.success = ''
      },5000)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  
  }
  gotoBullying(){
    this.navCtrl.push(MenuBullyingPage,{
      accountId : this.accountId
    })
  }
  gotoPhysicalBullying(){
    this.navCtrl.push(MenuPhysicalBullyingPage,{
      accountId : this.accountId
    })
  }
  gotoVerbalBullying(){
    this.navCtrl.push(MenuVerbalBullyingPage,{
      accountId : this.accountId
    })
  }
  gotoInteractives(){
    this.navCtrl.push(MenuInteractivesPage,{
      accountId : this.accountId
    })
  }
  gotoAchievements(){
    this.navCtrl.push(MenuAchievementsPage,{
      accountId : this.accountId
    })
  }
  gotoSocialBullying(){
    this.navCtrl.push(SocialBullyingPage,{
      accountId : this.accountId
    })
  }
  logout(){
    this.navCtrl.setRoot(LoginPage, {success: "Logout success"})
  }
}
