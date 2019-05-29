import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadCustomers,
  CustomerActionTypes,
  LoadCustomersSuccess,
  LoadCustomersFailed
} from '../actions/customer.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { CustomerService } from 'src/app/customers/services/customer.service';
import { of, throwError } from 'rxjs';
import { State } from '../reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class CustomerEffects {
  @Effect()
  loadAllCustomers$ = this.actions$.pipe(
    ofType<LoadCustomers>(CustomerActionTypes.LoadCustomers),
    switchMap(() => {
      return this.customerService.getAll().pipe(
        map((customers: any[]) => {
          return new LoadCustomersSuccess({ customers });
        }),
        catchError(error => {
          return of(new LoadCustomersFailed({ error: '' }));
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private store: Store<State>
  ) {}
}
