import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { StaffRoutingModule } from './staff-routing.module';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    DatadosentampilComponent,
    DatadosentambahComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,

  ]
})
export class StaffModule { }
