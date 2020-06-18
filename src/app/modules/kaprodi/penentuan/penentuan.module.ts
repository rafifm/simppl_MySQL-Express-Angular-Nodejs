import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambahSekolahComponent } from './tambah-sekolah/tambah-sekolah.component';
import { TambahKuotaComponent } from './tambah-kuota/tambah-kuota.component';



@NgModule({
  declarations: [TambahSekolahComponent, TambahKuotaComponent],
  imports: [
    CommonModule
  ]
})
export class PenentuanModule { }
