import { Action } from '@ngrx/store';

export enum UiActionTypes {
  OpenMenu = '[Ui] Open Menu',
  CloseMenu = '[Ui] Close Menu'
}

export class OpenMenu implements Action {
  readonly type = UiActionTypes.OpenMenu;
}

export class CloseMenu implements Action {
  readonly type = UiActionTypes.CloseMenu;
}

export type UiActions = OpenMenu | CloseMenu;
