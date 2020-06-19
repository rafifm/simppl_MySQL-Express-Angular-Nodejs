import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuruRoutingModule } from './guru-routing.module';
import { GurutampilnilaiComponent } from './gurutampilnilai/gurutampilnilai.component';
import { GurutampbahnilaiComponent } from './gurutampbahnilai/gurutampbahnilai.component';


@NgModule({
  declarations: [GurutampilnilaiComponent, GurutampbahnilaiComponent],
  imports: [
    CommonModule,
    GuruRoutingModule
  ]
})
export class GuruModule { }
