import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  StartLoading = '[Layout] Start Loading',
  StopLoading = '[Layout] Stop Loading',
}

export class StartLoading implements Action {
  readonly type = LayoutActionTypes.StartLoading;
}

export class StopLoading implements Action {
  readonly type = LayoutActionTypes.StopLoading;
}

export type LayoutActions = StartLoading | StopLoading;
