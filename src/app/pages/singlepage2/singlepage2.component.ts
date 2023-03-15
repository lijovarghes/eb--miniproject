import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-singlepage2',
  templateUrl: './singlepage2.component.html',
  styleUrls: ['./singlepage2.component.css']
})
export class Singlepage2Component {
  constructor(private hero:HeroService){}
  single:any
  
  ngOnInit()
  {
    let id = Number(localStorage.getItem('id'))
    this.single = data.filter(e => e.id === id)
  
    console.log("name",this.single)
  }
}
