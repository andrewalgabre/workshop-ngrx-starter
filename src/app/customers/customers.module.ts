import { NgModule } from '@angular/core';
import { CustomersComponent } from './containers/customers/customers.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [RouterModule, MaterialModule, CommonModule, FlexLayoutModule],
  declarations: [CustomersComponent, CustomerListComponent]
})
export class CustomersModule {}
