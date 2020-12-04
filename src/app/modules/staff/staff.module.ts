import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { StaffRoutingModule } from './staff-routing.module';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DatastafftambahComponent } from './datastaff/datastafftambah/datastafftambah.component';
import { StaffdashboardComponent } from './datastaff/staffdashboard/staffdashboard.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    DatadosentampilComponent,
    DatadosentambahComponent,
    DatastafftambahComponent,
    StaffdashboardComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    MatGridListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule
  ]
})
export class StaffModule { }
