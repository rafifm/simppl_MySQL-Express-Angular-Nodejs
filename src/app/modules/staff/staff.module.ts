import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { DatagurutampilComponent } from './dataguru/datagurutampil/datagurutampil.component';
import { DatagurutambahComponent } from './dataguru/datagurutambah/datagurutambah.component';
import { DatastafftampilComponent } from './datastaff/datastafftampil/datastafftampil.component';
import { DatastafftambahComponent } from './datastaff/datastafftambah/datastafftambah.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';


@NgModule({
  declarations: [
    DatadosentampilComponent,
    DatadosentambahComponent,
    DatagurutambahComponent,
    DatagurutampilComponent,
    DatastafftampilComponent,
    DatastafftambahComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class StaffModule { }
