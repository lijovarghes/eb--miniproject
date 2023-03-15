import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { DjpageComponent } from './pages/djpage/djpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { MusicpageComponent } from './pages/musicpage/musicpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { Singlepage1Component } from './pages/singlepage1/singlepage1.component';
import { Singlepage2Component } from './pages/singlepage2/singlepage2.component';
import { WeddingpageComponent } from './pages/weddingpage/weddingpage.component';

const routes: Routes = [
  {
  path:'',component:HomepageComponent
},
{
  path:'login',component:LoginpageComponent
},
{
  path:'signup',component:SignuppageComponent
},
{
  path:'about',component:AboutpageComponent
},
{
  path:'contact',component:ContactpageComponent
},
{
  path:'dj',component:DjpageComponent
},
{
  path:'music',component:MusicpageComponent
},
{
  path:'wedding',component:WeddingpageComponent
},
{
  path:'single',component:SinglepageComponent
},
{
  path:'single1',component:Singlepage1Component
},
{
  path:'single2',component:Singlepage2Component
},  
{
  path:'booking',component:BookingComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
