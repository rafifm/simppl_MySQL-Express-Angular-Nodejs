import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { PilihTmptDosenComponent } from './penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component';
import { PilihTmptGuruComponent } from './penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component';
import { KaprodiRoutingModule } from './kaprodi-routing.module';
import { TambahKuotaComponent } from './penentuan/tambah-kuota/tambah-kuota.component';
import { TambahSekolahComponent } from './penentuan/tambah-sekolah/tambah-sekolah.component';
import { TampilSekolahComponent } from './penentuan/tampil-sekolah/tampil-sekolah.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PilihTmptMhsComponent } from './penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component';
import { TampilanMhsComponent } from './penempatan/tampilan/tampilan-mhs/tampilan-mhs.component';
import { TampilanDosenComponent } from './penempatan/tampilan/tampilan-dosen/tampilan-dosen.component';

@NgModule({
  declarations: [
    PilihTmptDosenComponent, 
    PilihTmptGuruComponent,
    TambahKuotaComponent,
    TambahSekolahComponent,
    TampilSekolahComponent,
    PilihTmptMhsComponent,
    TampilanMhsComponent,
    TampilanDosenComponent
  ],
  imports: [
    CommonModule,
    KaprodiRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class KaprodiModule { }
