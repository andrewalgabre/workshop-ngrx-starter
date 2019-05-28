import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Input() menuItems: any[];
  @Input() loggedIn: boolean;
  @Output() menuClick = new EventEmitter<string>();
  @Output() closeSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSidenav.emit();
  }

  emitItemClick(eventName: string) {
    this.menuClick.emit(eventName);
  }
}
