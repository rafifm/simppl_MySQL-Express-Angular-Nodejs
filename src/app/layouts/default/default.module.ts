import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';
import { PendaftaranMhsTampilComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { PendaftaranMhsCreateComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { PenilaianMhsGuruTampilComponent } from 'src/app/modules/mhs/penilaian-mhs-guru/penilaian-mhs-guru-tampil/penilaian-mhs-guru-tampil.component';
import { PenilaianMhsGuruInputComponent } from 'src/app/modules/mhs/penilaian-mhs-guru/penilaian-mhs-guru-input/penilaian-mhs-guru-input.component';
import { PenilaianMhsDosenInputComponent } from 'src/app/modules/mhs/penilaian-mhs-dosen/penilaian-mhs-dosen-input/penilaian-mhs-dosen-input.component';
import { PenilaianMhsDosenTampilComponent } from 'src/app/modules/mhs/penilaian-mhs-dosen/penilaian-mhs-dosen-tampil/penilaian-mhs-dosen-tampil.component';
import { StaffModule } from '../../modules/staff/staff.module';
import { DosenModule } from '../../modules/dosen/dosen.module';
import { GuruModule } from '../../modules/guru/guru.module';
import { LaporanModule } from 'src/app/modules/admin/laporan/laporan.module';
import { KaprodiModule } from 'src/app/modules/kaprodi/kaprodi.module';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PendaftaranMhsTampilComponent,
    PendaftaranMhsCreateComponent,
    PenilaianMhsGuruTampilComponent,
    PenilaianMhsGuruInputComponent,
    PenilaianMhsDosenInputComponent,
    PenilaianMhsDosenTampilComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    StaffModule,
    DosenModule,
    GuruModule,
    KaprodiModule,
    LaporanModule
  ]
})
export class DefaultModule { }
