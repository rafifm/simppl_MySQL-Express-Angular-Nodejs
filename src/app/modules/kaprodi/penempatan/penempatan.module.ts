import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilihTmptDosenComponent } from './pilih-tmpt-dosen/pilih-tmpt-dosen.component';
import { PilihTmptGuruComponent } from './pilih-tmpt-guru/pilih-tmpt-guru.component';
import { PenempatanRoutingModule } from './penempatan-routing.module';



@NgModule({
  declarations: [
    PilihTmptDosenComponent, 
    PilihTmptGuruComponent
  ],
  imports: [
    CommonModule,
    PenempatanRoutingModule
  ]
})
export class PenempatanModule { }
