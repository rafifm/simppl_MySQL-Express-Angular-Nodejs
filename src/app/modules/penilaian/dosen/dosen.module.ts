import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DosenRoutingModule } from './dosen-routing.module';
import { DosentambahnilaiComponent } from './dosentambahnilai/dosentambahnilai.component';
import { DosentampilnilaiComponent } from './dosentampilnilai/dosentampilnilai.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DosentambahnilaiComponent, DosentampilnilaiComponent],
  imports: [
    CommonModule,
    DosenRoutingModule,
    AngularMaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DosenModule { }
