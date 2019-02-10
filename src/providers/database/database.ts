import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
 
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
 
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'developers.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }
 
  fillDatabase() {
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }
  checkAccount(name, password){
    return this.database.executeSql(`SELECT * FROM accounts WHERE name = '${name}' AND password ='${password}'`,[])
    .then(data=>{
      return data.rows.length;
    }, err =>{
      console.log('Error: Check account', err)
      return err;
    })
  }
  checkusername(name){
    return this.database.executeSql(`SELECT * FROM accounts WHERE name ='${name}'`, [])
    .then(data =>{
      return data.rows.length;
    }, err =>{
      console.log('Error: Check username', err)
      return err;
    })
  }
  addAccount(name, password, gender, experience, bullying_type) {
    let data = [name, password, gender, experience, bullying_type]
    return this.database.executeSql("INSERT INTO accounts (name, password, gender, experienced, bullying_type) VALUES (?, ?, ?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAccountId(name){
    return this.database.executeSql(`SELECT * FROM accounts WHERE name = '${name}'`, []).then((data)=>{
      let account_id = 0
      if(data.rows.length > 0){
        account_id = data.rows.item(0).account_id
      }
      return account_id
    }, err => {
      console.log("Error", err)
      return [];
    })
  }
  getAllAccounts() {
    return this.database.executeSql("SELECT * FROM accounts", []).then((data) => {
      let developers = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          developers.push({ name: data.rows.item(i).name, password: data.rows.item(i).password});
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
  // get achievements
  addAchievement(id, name, complete){
    let achievement = [id, name, complete]
    return this.database.executeSql("INSERT INTO achievements(account_id, achievement_name, achievement_complete) VALUES(?,?,?)",achievement).then((data)=>{
      return data;
    },err =>{
      console.log("ERROR",err)
      return err;
    })
  }

  checkAchievement(account_id, name){
    return this.database.executeSql(`SELECT * FROM achievements WHERE account_id = ${account_id}, name = ${name}`,[]).then((data)=>{
      return data.rows.length;
    },err => {
      console.log("ERROR ", err)
      return err;
    })
  }

  getCurrentAchievements(account_id){
    return this.database.executeSql(`SELECT * FROM achievements WHERE account_id = ${account_id}`,[]).then((data)=>{
      return data;
    }, err =>{
      console.log("ERROR", err)
      return err;
    })
  }

  executeQuery(str){
    return this.database.executeSql(str,[]).then((data)=>{
      return data;
    },err =>{
      console.log("ERROR ", err)
      return err;
    })
  }
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 
}