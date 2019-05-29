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
import * as fromCounter from './counter.reducer';

export interface State {
  ui: fromUi.State;
  customer: fromCustomer.State;
  counter: fromCounter.State;
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.reducer,
  customer: fromCustomer.reducer,
  counter: fromCounter.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
