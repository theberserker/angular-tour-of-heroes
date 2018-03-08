import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]

  selectedHero: Hero;  

  constructor(private heroService: HeroService) { 
    // While you could call getHeroes() in the constructor, that's not the best practice.
    // Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
    // he constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
    this.heroService = this.heroService;
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
