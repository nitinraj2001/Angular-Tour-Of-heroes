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

  selectedHero?: Hero;

  

  
  constructor(private heroservice:HeroService,private messageService: MessageService) { }

  ngOnInit(): void {
     this.getHeros();
  }

  getHeros(){
    this.hero=this.heroservice.getHeros();
  }

  showHeroDetails(viewhero: Hero){
    this.messageService.add(`HeroComponent: is ready to show hero detail's of hero id:${viewhero.id}`)
    this.selectedHero=viewhero;
  }

}
