import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HeroTypes, RetrieveAllHeroesSuccess, UpdateHero, UpdateHeroSuccess } from '../actions/hero.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { HeroesService } from '../services/heroes.service';
import { Hero } from '../models/hero.model';


@Injectable()
export class HeroEffects {

  @Effect()
  public retrieveAll$ = this.actions$.ofType(HeroTypes.RetrieveAllHeroes).pipe(
    exhaustMap(() => this.heroService.getHeroes()),
    map((heroes: Hero[]) => new RetrieveAllHeroesSuccess({heroes}))
  );

  @Effect()
  public updateHero$ = this.actions$.ofType(HeroTypes.UpdateHero).pipe(
    exhaustMap((action: UpdateHero) => this.heroService.update(action.payload.hero)),
    map((hero: Hero) => new UpdateHeroSuccess({hero}))
  );

  constructor(private actions$: Actions, private heroService: HeroesService) {
  }

}
