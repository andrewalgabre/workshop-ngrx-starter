import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { CustomerService } from '../../services/customer.service';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerForm: FormGroup;
  genders = [
    { key: 'female', value: 'Frau' },
    { key: 'male', value: 'Herr' },
    { key: 'others', value: 'Andere' }
  ];

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private customerService: CustomerService,
    private snackbar: MatSnackBar
  ) {
    this.customerForm = this.fb.group({
      id: [undefined],
      gender: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      company: [''],
      street: ['', Validators.required]
    });
  }

  ngOnInit() {}

  async save(customer: any) {
    this.customerService.create(customer).subscribe(() => {
      this.snackbar.open('Customer created', 'OK', { duration: 2000 });
      this.back();
    });
  }

  back() {
    this.location.back();
  }
}
