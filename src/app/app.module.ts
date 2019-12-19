import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { DetailPage } from '../pages/detail/detail';
import { BookingPage } from '../pages/booking/booking';
import { IonicStorageModule } from '@ionic/storage';


import { UserProvider } from '../providers/UserProvider';
import { BaseServiceProvider } from '../providers/BaseServiceProvider';
import { PitchProvider } from '../providers/PitchProvider';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    SearchPage,
    DetailPage,
    BookingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    SearchPage,
    DetailPage,
    BookingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpModule,
    UserProvider,
    BaseServiceProvider,
    PitchProvider
  ]
})
export class AppModule {}