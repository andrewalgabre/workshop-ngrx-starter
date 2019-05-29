import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers: any[];
  loading: boolean;

  ngOnInit() {
    this.loading = true;
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      this.loading = false;
    });
  }
}
