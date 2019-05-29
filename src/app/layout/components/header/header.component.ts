import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() menuItems: any[];
  @Input() loggedIn: boolean;
  @Output() menuClick = new EventEmitter<string>();
  @Output() openSideNav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  emitItemClick(eventName: string) {
    this.menuClick.emit(eventName);
  }
}
