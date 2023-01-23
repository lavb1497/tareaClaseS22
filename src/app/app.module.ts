import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp } from '@angular/fire/app'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Enviroment } from './enviroments/enviroment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

var config = {
  apiKey: Enviroment.firebase.apiKey,
  authDomain: Enviroment.firebase.authDomain,
  projectId: Enviroment.firebase.projectId,
  storageBucket: Enviroment.firebase.projectId,
  messagingSenderId: Enviroment.firebase.messagingSenderId,
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    provideFirebaseApp(() => initializeApp(Enviroment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
