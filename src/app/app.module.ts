import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from "../pages/contact/contact";
import { BillPage } from "../pages/bill/bill";
import { CardPage } from "../pages/card/card";
import { AddContactPage } from "../pages/add-contact/add-contact";

import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    BillPage,
 CardPage,
 AddContactPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    BillPage,
    CardPage,
    AddContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
