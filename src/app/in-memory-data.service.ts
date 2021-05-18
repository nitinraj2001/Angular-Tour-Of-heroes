import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
   const hero:Hero[]=[{id:1,name:"Amitab Bachan"},{id:2,name:"Sanjay Dutt"},{id:3,name:"Salman Khan"},{id:4,name:"Ranveer Singh"},{id:5,name:"Sanju Chaudhary"},{id:6,name:"Boby Devol"}];
   return {hero};
  }

  genId(hero: Hero[]): number {
    return hero.length > 0 ? Math.max(...hero.map(hero => hero.id)) + 1 : 1;
  }
}
