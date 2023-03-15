import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-singlepage1',
  templateUrl: './singlepage1.component.html',
  styleUrls: ['./singlepage1.component.css']
})
export class Singlepage1Component {
  constructor(private hero:HeroService){}
  single:any
  
  ngOnInit()
  {
    let id = Number(localStorage.getItem('id'))
    this.single = data.filter(e => e.id === id)
  
    console.log("name",this.single)
  }
}
