import { Action } from '@ngrx/store';

export enum CustomerActionTypes {
  LoadCustomers = '[Customer] Load Customers',
  LoadCustomersSuccess = '[Customer] Load Customers Success',
  LoadCustomersFailed = '[Customer] Load Customers Failed'
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersSuccess;

  constructor(public payload: { customers: any[] }) {}
}

export class LoadCustomersFailed implements Action {
  readonly type = CustomerActionTypes.LoadCustomersFailed;

  constructor(public payload: { error: string }) {}
}

export type CustomerActions =
  | LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFailed;
