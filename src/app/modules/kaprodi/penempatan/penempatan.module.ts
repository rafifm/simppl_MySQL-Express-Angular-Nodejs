import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilihTmptDosenComponent } from './pilih-tmpt-dosen/pilih-tmpt-dosen.component';
import { PilihTmptGuruComponent } from './pilih-tmpt-guru/pilih-tmpt-guru.component';
import { PenempatanRoutingModule } from './penempatan-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [
    PilihTmptDosenComponent, 
    PilihTmptGuruComponent
  ],
  imports: [
    CommonModule,
    PenempatanRoutingModule,
    AngularMaterialModule
  ]
})
export class PenempatanModule { }
