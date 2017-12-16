import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RelatarPage } from '../pages/relatar/relatar';
import { DetalharRelatoPage } from '../pages/detalhar-relato/detalhar-relato';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { RelatosService } from '../services/relatos.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RelatarPage,
    DetalharRelatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RelatarPage,
    DetalharRelatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    RelatosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
