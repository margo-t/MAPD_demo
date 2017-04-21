import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Feedback } from '../pages/feedback/feedback';
import { TabsPage } from '../pages/tabs/tabs';
import { EditPageDescription } from '../pages/edit-page-description/edit-page-description';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from '../providers/firebase-service';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDkRwUWMwyCAU460rT6cYaIlcy_2RT4OO4",
    authDomain: "randomnumbers-dbe2b.firebaseapp.com",
    databaseURL: "https://randomnumbers-dbe2b.firebaseio.com",
    projectId: "randomnumbers-dbe2b",
    storageBucket: "randomnumbers-dbe2b.appspot.com",
    messagingSenderId: "681852866446"
};

/*
const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};*/


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Feedback,
    TabsPage,
    EditPageDescription
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    Feedback,
    TabsPage,
    EditPageDescription
  ],
  providers: [
    FirebaseService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
