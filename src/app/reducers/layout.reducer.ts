import { LayoutActions, LayoutActionTypes } from '../actions/layout.actions';

export interface State {
  outstandingRestCalls: number;
}

export const initialState: State = {
  outstandingRestCalls: 0
};

export function reducer(state: State = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutActionTypes.StartLoading:
      return {outstandingRestCalls: state.outstandingRestCalls + 1};

    case LayoutActionTypes.StopLoading:
      return {outstandingRestCalls: state.outstandingRestCalls - 1};

    default:
      return state;
  }
}
