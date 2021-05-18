import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero[]=[];


  

  
  constructor(private heroservice:HeroService,private messageService: MessageService) { }

  ngOnInit(): void {
     this.getHeros();
  }

  getHeros(){
    this.heroservice.getHeros().subscribe(data=>this.hero=data);
  }

  delete(hero: Hero): void {
    this.hero = this.hero.filter(temphero => temphero!== hero);
    this.heroservice.deleteHero(hero.id).subscribe();
  }

}
