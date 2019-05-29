import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { CustomersComponent } from './customers/containers/customers/customers.component';
import { CustomerDetailsComponent } from './customers/containers/customer-details/customer-details.component';
import { CounterComponent } from './counter/containers/counter/counter.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'counter', component: CounterComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/new', component: CustomerDetailsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
