import { Action } from '@ngrx/store';
import { UiActionTypes } from '../actions/ui.actions';

export interface State {
  openMenu: boolean;
}

export const initialState: State = {
  openMenu: false
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case UiActionTypes.OpenMenu:
      return { ...state, openMenu: true };
    case UiActionTypes.CloseMenu:
      return { ...state, openMenu: false };
    default:
      return state;
  }
}
