import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuruRoutingModule } from './guru-routing.module';
import { GurutampilnilaiComponent } from './gurutampilnilai/gurutampilnilai.component';
import { GurutampbahnilaiComponent } from './gurutampbahnilai/gurutampbahnilai.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    GurutampilnilaiComponent, 
    GurutampbahnilaiComponent],
  imports: [
    CommonModule,
    GuruRoutingModule,
    SharedModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule
  ]
})
export class GuruModule { }
