import { Action } from '@ngrx/store';
import { CounterActionTypes } from '../actions/counter.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 0
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return { count: state.count + 1 };

    case CounterActionTypes.Decrement:
      return { count: state.count - 1 };

    case CounterActionTypes.Reset:
      return { count: 0 };

    default:
      return state;
  }
}
