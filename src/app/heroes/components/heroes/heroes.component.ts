import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero.model';
import * as fromHeroes from '../../reducers';
import { Store } from '@ngrx/store';
import { ClearAllHeroes, RetrieveAllHeroes, SelectHero, UpdateHero } from '../../actions/hero.actions';
import { selectIsLoading } from '../../../reducers';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes$ = this.store.select(fromHeroes.selectHeroes);
  selectedHero$ = this.store.select(fromHeroes.selectSelectedHero);
  isLoading$ = this.store.select(selectIsLoading);

  constructor(private heroService: HeroesService, private store: Store<fromHeroes.State>) {
  }

  ngOnInit() {
    console.log('Initialising HeroesComponent');
    this.store.dispatch(new RetrieveAllHeroes());
  }

  ngOnDestroy(): void {
    console.log('Destroying HeroesComponent');
    this.store.dispatch(new ClearAllHeroes());
  }

  selectHero(hero: Hero) {
    this.store.dispatch(new SelectHero({hero}));
  }

  editedHero(editedHero: Hero) {
    this.store.dispatch(new UpdateHero({hero: editedHero}));
  }

}
