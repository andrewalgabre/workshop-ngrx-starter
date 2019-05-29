import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadCustomers,
  CustomerActionTypes,
  LoadCustomersSuccess
} from '../actions/customer.actions';
import { switchMap, map } from 'rxjs/operators';
import { CustomerService } from 'src/app/customers/services/customer.service';

@Injectable()
export class CustomerEffects {
  @Effect()
  loadAllCustomers$ = this.actions$.pipe(
    ofType<LoadCustomers>(CustomerActionTypes.LoadCustomers),
    switchMap(() => {
      return this.customerService.getAll();
    }),
    map((customers: any[]) => {
      return new LoadCustomersSuccess({ customers });
    })
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}
}
