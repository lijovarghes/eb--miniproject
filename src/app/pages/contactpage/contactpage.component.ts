import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent {
  email : string  ='' ;
  name : string  ='' ;
  phone : string  ='' ;
  constructor(private router:Router,private firestore:Firestore){}
  
  addData(f:any)
  {
    if(this.email == ''){
      alert('please enter email')
      return;
    }
    if(this.phone == ''){
      alert('please enter phone no')
      return;
    }
    if(this.name == ''){
      alert('please enter name')
      return;
    }
    const collectionInstance =collection(this.firestore,'userscontact');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('data saved successfully')
      alert('send successful');
      this.router.navigate(['']);
    })
    .catch((err)=>{
   console.log(err);
    })
  }
}
