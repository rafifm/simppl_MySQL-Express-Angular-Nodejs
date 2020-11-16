import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DosenRoutingModule } from './dosen-routing.module';
import { DosentambahnilaiComponent } from './dosentambahnilai/dosentambahnilai.component';
import { DosentampilnilaiComponent } from './dosentampilnilai/dosentampilnilai.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DosentambahnilaiutsComponent } from './dosentambahnilaiuts/dosentambahnilaiuts.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridTile } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    DosentambahnilaiComponent, 
    DosentampilnilaiComponent, 
    DosentambahnilaiutsComponent
  ],
  imports: [
    CommonModule,
    DosenRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatGridTile
  ]
})
export class DosenModule { }
