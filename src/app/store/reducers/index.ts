import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromUi from './ui.reducer';
import { environment } from 'src/environments/environment';
import * as fromCustomer from './customer.reducer';
import * as fromIncrement from './increment.reducer';

export interface State {
  ui: fromUi.State;
  customer: fromCustomer.State;
  increment: fromIncrement.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer
  customer: fromCustomer.reducer

  increment: fromIncrement.reducer,};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
