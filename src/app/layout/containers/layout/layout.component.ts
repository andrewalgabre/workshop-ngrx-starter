import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { State } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { CloseMenu, OpenMenu } from 'src/app/store/actions/ui.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuItems = [
    {
      text: 'Counter',
      route: '/counter',
      name: 'Counter',
      icon: 'home'
    },
    {
      text: 'Kunden',
      route: '/customers',
      name: 'customers',
      icon: 'people'
    }
  ];

  menuOpen$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.menuOpen$ = this.store.pipe(
      tap(console.log),
      select(state => state.ui.openMenu)
    );
  }

  ngOnInit() {}

  closeMenu() {
    this.store.dispatch(new CloseMenu());
  }

  openMenu() {
    this.store.dispatch(new OpenMenu());
  }

  onMenuClicked(eventName: string) {}
}
