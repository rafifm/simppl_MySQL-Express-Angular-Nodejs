import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KuotaSekolahComponent } from './kuota-sekolah/kuota-sekolah.component';
import { PenempatanDosenComponent } from './penempatan-dosen/penempatan-dosen.component';
import { PenempatanMahasiswaComponent } from './penempatan-mahasiswa/penempatan-mahasiswa.component';
import { LaporanRoutingModule } from './laporan-routing.module';



@NgModule({
  declarations: [
    KuotaSekolahComponent, 
    PenempatanDosenComponent, 
    PenempatanMahasiswaComponent],
  imports: [
    CommonModule,
    LaporanRoutingModule
  ]
})
export class LaporanModule { }
