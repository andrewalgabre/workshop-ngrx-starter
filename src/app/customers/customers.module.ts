import { NgModule } from '@angular/core';
import { CustomersComponent } from './containers/customers/customers.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomerDetailsComponent } from './containers/customer-details/customer-details.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerFormComponent
  ]
})
export class CustomersModule {}
