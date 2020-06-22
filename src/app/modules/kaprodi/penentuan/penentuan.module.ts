import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambahSekolahComponent } from './tambah-sekolah/tambah-sekolah.component';
import { TambahKuotaComponent } from './tambah-kuota/tambah-kuota.component';
import { PenentuanRoutingModule } from './penentuan-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';



@NgModule({
  declarations: [
    TambahSekolahComponent, 
    TambahKuotaComponent
  ],
  imports: [
    CommonModule,
    PenentuanRoutingModule,
    AngularMaterialModule
  ]
})
export class PenentuanModule { }
