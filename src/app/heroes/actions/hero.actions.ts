import { Action } from '@ngrx/store';
import { Hero } from '../models/hero.model';

export enum HeroTypes {
  RetrieveAllHeroes = '[Heroes] Retrieve All',
  ClearAllHeroes = '[Heroes] Clear All',
  RetrieveAllHeroesSuccess = '[Heroes] Retrieve All Success',
  UpdateHero = '[Heroes] Update',
  UpdateHeroSuccess = '[Heroes] Update Success',
  SelectHero = '[Heroes] Select'
}

export class RetrieveAllHeroes implements Action {
  public readonly type = HeroTypes.RetrieveAllHeroes;
}

export class ClearAllHeroes implements Action {
  public readonly type = HeroTypes.ClearAllHeroes;
}

export class RetrieveAllHeroesSuccess implements Action {
  public readonly type = HeroTypes.RetrieveAllHeroesSuccess;

  constructor(public payload: { heroes: Hero[] }) {
  }
}

export class UpdateHero implements Action {
  public readonly type = HeroTypes.UpdateHero;

  constructor(public payload: { hero: Hero }) {
  }
}

export class UpdateHeroSuccess implements Action {
  public readonly type = HeroTypes.UpdateHeroSuccess;

  constructor(public payload: { hero: Hero }) {
  }
}

export class SelectHero implements Action {
  public readonly type = HeroTypes.SelectHero;

  constructor(public payload: { hero: Hero }) {
  }
}

export type HeroActions = RetrieveAllHeroes | RetrieveAllHeroesSuccess | UpdateHero | UpdateHeroSuccess | ClearAllHeroes | SelectHero;
