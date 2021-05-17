import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero:Hero[]=[{id:1,name:"Amitab Bachan"},{id:2,name:"Sanjay Dutt"},{id:3,name:"Salman Khan"},{id:4,name:"Ranveer Singh"},{id:5,name:"Sanju Chaudhary"},{id:6,name:"Boby Devol"}];


  constructor(private messageService: MessageService) { }

  getHeros(): Hero[]{

    this.messageService.add("HeroService: is ready to fetch heros");

    return this.hero;

  }
}
