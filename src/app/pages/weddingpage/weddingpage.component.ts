import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-weddingpage',
  templateUrl: './weddingpage.component.html',
  styleUrls: ['./weddingpage.component.css']
})
export class WeddingpageComponent {
  constructor(private router:Router,private hero:HeroService){}

  ebs=this.hero.giveData();

  gotohere (id: any){
   localStorage.setItem('id',id);
   this.router.navigate(['/single2']);

  }
}
