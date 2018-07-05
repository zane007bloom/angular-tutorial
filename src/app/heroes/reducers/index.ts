import { Hero } from '../models/hero.model';
import * as fromRoot from '../../reducers/index';
import { HeroActions, HeroTypes } from '../actions/hero.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface HeroState {
  heroes: Hero[];
}

export interface State extends fromRoot.State {
  heroState: HeroState;
}

export function heroes(state = [], action: HeroActions): Hero[] {
  switch (action.type) {

    case HeroTypes.RetrieveAllHeroesSuccess: {
      return [...action.payload.heroes];
    }

    case HeroTypes.ClearAllHeroes: {
      return [];
    }

    default: {
      return state;
    }

  }
}

export const reducers = {
  heroes: heroes
};

export const selectHeroState = createFeatureSelector<HeroState>('heroState');
export const selectHeroes = createSelector(selectHeroState, (heroState: HeroState) => heroState.heroes);
