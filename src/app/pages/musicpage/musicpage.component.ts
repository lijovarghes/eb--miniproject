import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-musicpage',
  templateUrl: './musicpage.component.html',
  styleUrls: ['./musicpage.component.css']
})
export class MusicpageComponent {

  constructor(private router:Router,private hero:HeroService){}

  ebs=this.hero.giveData();

  gotohere (id: any){
   localStorage.setItem('id',id);
   this.router.navigate(['/single1']);

  }
}
