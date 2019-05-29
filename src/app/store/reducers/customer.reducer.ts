import { Action } from '@ngrx/store';
import {
  CustomerActionTypes,
  CustomerActions
} from '../actions/customer.actions';

export interface State {
  customers: any[];
  loading: boolean;
}

export const initialState: State = {
  customers: [],
  loading: false
};

export function reducer(state = initialState, action: CustomerActions): State {
  switch (action.type) {
    case CustomerActionTypes.LoadCustomers:
      return { ...state, loading: true };

    case CustomerActionTypes.LoadCustomersSuccess:
      const customers = action.payload.customers;
      return { ...state, customers, loading: false };

    case CustomerActionTypes.LoadCustomersFailed:
      const error = action.payload.error;
      return { ...state, loading: false };
    default:
      return state;
  }
}
