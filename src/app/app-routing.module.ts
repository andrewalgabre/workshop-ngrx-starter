import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/containers/layout/layout.component';
import { CustomersComponent } from './customers/containers/customers/customers.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: 'customers', component: CustomersComponent }]
  },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
