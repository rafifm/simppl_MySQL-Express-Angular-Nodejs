import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuruRoutingModule } from './guru-routing.module';
import { GurutampilnilaiComponent } from './gurutampilnilai/gurutampilnilai.component';
import { GurutampbahnilaiComponent } from './gurutampbahnilai/gurutampbahnilai.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridTile } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    GurutampilnilaiComponent, 
    GurutampbahnilaiComponent],
  imports: [
    CommonModule,
    GuruRoutingModule,
    SharedModule,
    MatGridTile,
    MatRadioModule
  ]
})
export class GuruModule { }
