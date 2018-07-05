import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from './layout.reducer';

// Top level App state
export interface State {
  layout: fromLayout.State;
}

// Top level App reducers
export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer
};


export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getIsLoading = createSelector(getLayoutState, (state: fromLayout.State) => state.outstandingRestCalls !== 0);
