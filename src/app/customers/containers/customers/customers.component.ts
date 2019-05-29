import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../../services/customer.service';
import { State } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { LoadCustomers } from 'src/app/store/actions/customer.actions';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<any[]>;

  constructor(private store: Store<State>) {
    this.customers$ = this.store.pipe(
      select(state => state.customer.customers)
    );
  }

  ngOnInit() {
    this.store.dispatch(new LoadCustomers());
  }
}
