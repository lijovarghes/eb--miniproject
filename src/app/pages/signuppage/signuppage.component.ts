import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {
email :string= '';
password:string='';
username:string='';

constructor(private auth: AuthService){}
ngOnInit(): void{

}
signup(){
  if(this.email==''){
    alert('please enter email')
    return;
  }
  if(this.password==''){
    alert('please enter password')
    return;
  }
  if(this.username==''){
    alert('please enter username')
    return;
  }
  this.auth.signup(this.email,this.password);
  this.email='';
  this.password='';
}
}
