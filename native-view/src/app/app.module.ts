import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SingleViewPage } from '../pages/single-view/single-view';
import { NewViewPage } from '../pages/new-view/new-view';
import { SetCoordinatesPage } from '../pages/set-coordinates/set-coordinates';
import { NatureViewService } from "../services/natureView.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SingleViewPage,
    NewViewPage,
    SetCoordinatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SingleViewPage,
    NewViewPage,
    SetCoordinatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     NatureViewService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
