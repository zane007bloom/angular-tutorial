import { Hero } from '../models/hero.model';
import * as fromRoot from '../../reducers/index';
import { HeroActions, HeroTypes } from '../actions/hero.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface HeroState {
  heroes: Hero[];
  selectedHero: Hero;
}

export interface State extends fromRoot.State {
  heroState: HeroState;
}

export function heroes(state = [], action: HeroActions): Hero[] {
  switch (action.type) {

    case HeroTypes.RetrieveAllHeroesSuccess: {
      return [...action.payload.heroes];
    }

    case HeroTypes.UpdateHeroSuccess: {
      const newState = state.filter(hero => hero.id !== action.payload.hero.id);
      newState.push(action.payload.hero);
      newState.sort((a: Hero, b: Hero) => a.id - b.id);
      return newState;
    }

    case HeroTypes.ClearAllHeroes: {
      return [];
    }

    default: {
      return state;
    }

  }
}

export function selectedHero(state, action: HeroActions): Hero {
  switch (action.type) {

    case HeroTypes.SelectHero: {
      if (state === action.payload.hero) {
        return null;
      } else {
        return action.payload.hero;
      }
    }

    case HeroTypes.UpdateHeroSuccess: {
      return null;
    }

    default: {
      return state;
    }

  }
}

export const reducers = {
  heroes: heroes,
  selectedHero
};

export const selectHeroState = createFeatureSelector<HeroState>('heroState');
export const selectHeroes = createSelector(selectHeroState, (heroState: HeroState) => heroState.heroes);
export const selectSelectedHero = createSelector(selectHeroState, (heroState: HeroState) => heroState.selectedHero);
