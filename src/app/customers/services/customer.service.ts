import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers = [
    {
      firstname: 'Jonas',
      lastname: 'Fricker',
      street: 'Luzernstrasse 2',
      company: 'CSS Versicherung'
    },
    {
      firstname: 'Fabian',
      lastname: 'Rust',
      street: 'Luzernstrasse 3',
      company: 'CSS Versicherung'
    },
    {
      firstname: 'Hrvoje Sindu',
      lastname: 'Lac',
      street: 'Luzernstrasse 4',
      company: 'CSS Versicherung'
    },
    {
      firstname: 'Andrew',
      lastname: 'Algabre',
      street: 'Luzernstrasse 1',
      company: 'CSS Versicherung'
    }
  ];

  constructor() {}

  getAll(): Observable<any[]> {
    return of(this.customers).pipe(delay(2000));
  }

  create(customer: any): Observable<any> {
    return of(this.customers.push(customer)).pipe(delay(2000));
  }
}
