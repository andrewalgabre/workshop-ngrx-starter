import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menuItems = [
    {
      text: 'Home',
      route: '/',
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
