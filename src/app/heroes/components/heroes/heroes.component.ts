import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero.model';
import * as fromHeroes from '../../reducers';
import { Store } from '@ngrx/store';
import { ClearAllHeroes, RetrieveAllHeroes } from '../../actions/hero.actions';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes$ = this.store.select(fromHeroes.selectHeroes);

  heroes: Hero[];
  showEditor = false;
  selectedHero: Hero;

  constructor(private heroService: HeroesService, private store: Store<fromHeroes.State>) {
  }

  ngOnInit() {
    console.log('Initialising HeroesComponent');
    this.store.dispatch(new RetrieveAllHeroes());
    this.heroes$.subscribe(h => console.log('here ' + h));
  }

  ngOnDestroy(): void {
    console.log('Destroying HeroesComponent');
    this.store.dispatch(new ClearAllHeroes());
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
