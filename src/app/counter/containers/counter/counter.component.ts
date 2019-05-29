import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import {
  Increment,
  Decrement,
  Reset
} from 'src/app/store/actions/counter.actions';
import { State } from 'src/app/store/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select(state => state.counter.count));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
