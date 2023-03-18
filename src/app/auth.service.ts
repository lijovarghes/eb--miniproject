 import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
  // import { AngularFireStore } from '@angular/fire/firestore
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { collection } from '@firebase/firestore';
// import { Firestore,doc,addDoc,setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private fireauth : AngularFireAuth,private router : Router  ) { }
   
//  private firestore: AngularFirestore

  // login method

  Signinpage (email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      alert('Signin successful');
        this.router.navigate(['']);
    }, err => {
      alert('something went wrong');
      this.router.navigate(['/Signinpage']);
    })
  }

  // register or signup

  signup(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Signup successful');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);
      this.router.navigate(['/Signup']);
    } )
  }
  //booking
  // booking1(booking:any)
  // {
  //   const bookingCollection=collection(this.fires,'booking');
        
  // }

logout(){
  this.fireauth.signOut().then( () => {
    localStorage.removeItem('token');
    // alert('logout successful');
    this.router.navigate(['']);
  }, err => {
    alert(err.message);
  })
}}

