import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatamhstampilComponent } from './datamhs/datamhstampil/datamhstampil.component';
import { DatamhstambahComponent } from './datamhs/datamhstambah/datamhstambah.component';
import { MhsRoutingModule } from './mhs-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DatamhstampilComponent, 
    DatamhstambahComponent
  ],
  imports: [
    MhsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class DatamhsModule { }
