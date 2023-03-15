import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { DjpageComponent } from './pages/djpage/djpage.component';
import { MusicpageComponent } from './pages/musicpage/musicpage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { WeddingpageComponent } from './pages/weddingpage/weddingpage.component';
import { Singlepage1Component } from './pages/singlepage1/singlepage1.component';
import { Singlepage2Component } from './pages/singlepage2/singlepage2.component';
import { BookingComponent } from './pages/booking/booking.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    LoginpageComponent,
    ContactpageComponent,
    SignuppageComponent,
    AboutpageComponent,
    DjpageComponent,
    MusicpageComponent,
    SinglepageComponent,
    WeddingpageComponent,
    Singlepage1Component,
    Singlepage2Component,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
