import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './containers/counter/counter.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, MaterialModule]
})
export class CounterModule {}
