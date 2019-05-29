import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @Input() customers: any[];
  @Output() select = new EventEmitter<any>();

  private previousSelectedCustomerId: string;

  constructor() {}

  displayedColumns: string[] = ['lastname', 'firstname', 'company', 'street'];

  ngOnInit() {}
}
