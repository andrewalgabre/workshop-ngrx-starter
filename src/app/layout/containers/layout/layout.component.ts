import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
// import { AppState } from '../../../store/reducers/app.reducer';
// import { Observable } from 'rxjs';
// import { LogoutAction } from '../../../auth/store/actions/auth.actions';
// import { selectLoggedIn } from '../../../auth/store/selectors/auth.selectors';

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
      name: 'Home',
      icon: 'home'
    },
    {
      text: 'Kunden',
      route: '/customers',
      name: 'customers',
      icon: 'people'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onMenuClicked(eventName: string) {}
}
