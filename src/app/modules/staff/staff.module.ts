import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { StaffRoutingModule } from './staff-routing.module';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DatadosentampilComponent,
    DatadosentambahComponent
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
    MatButtonModule
  ]
})
export class StaffModule { }
