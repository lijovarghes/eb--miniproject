import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

import { Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  email : string  ='' ;
  name : string  ='' ;
  phone : string  ='' ;
  time : string  ='' ;
  event : string  ='' ;
  street : string  ='' ;
 constructor(private router:Router,private firestore:Firestore){}
//  submit(){
//   alert('Booking successfull')
//    this.router.navigateByUrl('')
//  }

 addData(f:any)
 {
  if(this.name == ''){
    alert('please enter name')
    return;
  }
  if(this.email == ''){
    alert('please enter email ')
    return;
  }
  if(this.phone == ''){
    alert('please enter phone no')
    return;
  }
  if(this.time == ''){
    alert('please enter time')
    return;
  }
  if(this.event == ''){
    alert('please enter event ')
    return;
  }
  if(this.street == ''){
    alert('please enter street')
    return;
  }
  const collectionInstance =collection(this.firestore,'usersbooking');
  addDoc(collectionInstance,f.value).then(() =>{
    console.log('data saved successfully')
    alert('booking successful');
      this.router.navigate(['']);
  })
  .catch((err)=>{
 console.log(err);
  })
}
 
}
