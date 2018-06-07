import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  showEditor = false;
  selectedHero: Hero;

  constructor(private heroService: HeroesService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.selectedHero = new Hero(hero.id, hero.name);
    this.toggleEditor();
  }

  editedHero(editedHero: Hero) {
    this.heroes = this.heroes.filter(hero => hero.id !== editedHero.id);
    this.heroes.push(editedHero);
    this.heroes.sort((a: Hero, b: Hero) => a.id - b.id);
    this.toggleEditor();
    this.heroService.update(editedHero).subscribe();
  }

  toggleEditor() {
    this.showEditor = !this.showEditor;
  }

}
