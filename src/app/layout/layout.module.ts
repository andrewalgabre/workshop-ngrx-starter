import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidenavListComponent],
  imports: [MaterialModule, CommonModule, RouterModule, FlexLayoutModule],
  exports: [],
  providers: []
})
export class LayoutModule {}
