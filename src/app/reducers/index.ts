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


export const selectLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const selectIsLoading = createSelector(selectLayoutState, (state: fromLayout.State) => state.outstandingRestCalls !== 0);
