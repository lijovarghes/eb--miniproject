// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-loginpage',
//   templateUrl: './loginpage.component.html',
//   styleUrls: ['./loginpage.component.css']
// })
// export class LoginpageComponent {

// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
     styleUrls: ['./loginpage.component.css']
})
 export class LoginpageComponent implements OnInit {

   email : string  ='' ;
   password : string ='';

 constructor(private auth : AuthService) { }

 ngOnInit(): void {
 }

 Signinpage(){
   if(this.email == ''){
     alert('please enter email')
     return;
   }
   if(this.password == ''){
     alert('please enter password')
     return;
   }
  this.auth.Signinpage(this.email,this.password);
  this.email = '';
  this.password = '';
 }

 }