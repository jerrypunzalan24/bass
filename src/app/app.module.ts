import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {MenuPage} from '../pages/menu/menu';
import {MenuAchievementsPage} from '../pages/menu-achievements/menu-achievements';
import {MenuBullyingPage} from '../pages/menu-bullying/menu-bullying';
import {MenuPhysicalBullyingPage} from '../pages/menu-physical-bullying/menu-physical-bullying';
import {MenuVerbalBullyingPage} from '../pages/menu-verbal-bullying/menu-verbal-bullying';
import {MenuInteractivesPage} from '../pages/menu-interactives/menu-interactives';
import {CyberBullyingScenarioPage} from '../pages/cyber-bullying-scenario/cyber-bullying-scenario';
import {PhysicalBullyingScenarioPage} from '../pages/physical-bullying-scenario/physical-bullying-scenario';
import {VerbalBullyingScenarioPage} from '../pages/verbal-bullying-scenario/verbal-bullying-scenario';
import {SocialBullyingScenarioPage} from '../pages/social-bullying-scenario/social-bullying-scenario';
import {SocialBullyingPage} from '../pages/social-bullying/social-bullying';
import {PollPage} from '../pages/poll/poll';

import { DatabaseProvider } from '../providers/database/database';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
 
 
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite'
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    MenuAchievementsPage,
    MenuBullyingPage,
    MenuPhysicalBullyingPage,
    MenuVerbalBullyingPage,
    MenuInteractivesPage,
    PollPage,
    SocialBullyingPage,
    SocialBullyingScenarioPage,
    VerbalBullyingScenarioPage,
    CyberBullyingScenarioPage,
    PhysicalBullyingScenarioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    MenuPage,
    MenuAchievementsPage,
    MenuBullyingPage,
    MenuPhysicalBullyingPage,
    MenuVerbalBullyingPage,
    MenuInteractivesPage,
    PollPage,
    SocialBullyingPage,
    SocialBullyingScenarioPage,
    VerbalBullyingScenarioPage,
    CyberBullyingScenarioPage,
    PhysicalBullyingScenarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    SQLitePorter,
    SQLite
  ]
})
export class AppModule {}
