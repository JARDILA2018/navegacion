import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Component } from '@angular/core';

import {
  PrincipalPage,
  AjustesPage,
  Ajustes2Page,
  Pagina2Page,
  Pagina3Page,
  ModalPage,
  TabsPage
} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    Pagina2Page,
    Pagina3Page,
    ModalPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    AjustesPage,
    Ajustes2Page,
    Pagina2Page,
    Pagina3Page,
    ModalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
