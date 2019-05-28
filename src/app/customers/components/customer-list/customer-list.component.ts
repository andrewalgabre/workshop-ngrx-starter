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

  selectByIndex(index) {
    this.customers.forEach((element, i) => {
      this.customers[i] = { ...element, selected: false };
    });

    const selectedCustomer = this.customers[index] as any;

    if (this.previousSelectedCustomerId === selectedCustomer.id) {
      return;
    }

    this.customers[index] = { ...selectedCustomer, selected: true } as any;
    this.customers = [...this.customers];

    this.previousSelectedCustomerId = selectedCustomer.id;

    this.select.emit(this.customers[index]);
  }
}
