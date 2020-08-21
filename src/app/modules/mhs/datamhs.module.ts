import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatamhstampilComponent } from './datamhs/datamhstampil/datamhstampil.component';
import { DatamhstambahComponent } from './datamhs/datamhstambah/datamhstambah.component';
import { MhsRoutingModule } from './mhs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DatamhstampilComponent, 
    DatamhstambahComponent
  ],
  imports: [
    MhsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
  ]
})
export class DatamhsModule { }
