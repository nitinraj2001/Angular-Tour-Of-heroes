import { ActivatedRoute } from '@angular/router';
import { HeroService } from './../hero.service';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero?:Hero;

  constructor(private heroService: HeroService, private route : ActivatedRoute,private location: Location) { }

  ngOnInit(): void {
     this.getHero();
  }

  getHero(){

    const id : number=+this.route.snapshot.paramMap.get('id');

    console.log(`extracted id is ${id}`);
     
    this.heroService.getHero(id).subscribe(data=>this.hero=data);

    console.log(this.hero);

  }

  goBack(): void{
    this.location.back();
  }

  save(){
    if(this.hero){
      this.heroService.updateHero(this.hero).subscribe(()=>this.goBack());
    }
  }

}
