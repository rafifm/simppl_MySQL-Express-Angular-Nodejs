import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { PendaftaranMhsTampilComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { PendaftaranMhsCreateComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { PenilaianMhsGuruTampilComponent } from 'src/app/modules/mhs/penilaian-mhs-guru/penilaian-mhs-guru-tampil/penilaian-mhs-guru-tampil.component';
import { PenilaianMhsGuruInputComponent } from 'src/app/modules/mhs/penilaian-mhs-guru/penilaian-mhs-guru-input/penilaian-mhs-guru-input.component';
import { PenilaianMhsDosenInputComponent } from 'src/app/modules/mhs/penilaian-mhs-dosen/penilaian-mhs-dosen-input/penilaian-mhs-dosen-input.component';
import { PenilaianMhsDosenTampilComponent } from 'src/app/modules/mhs/penilaian-mhs-dosen/penilaian-mhs-dosen-tampil/penilaian-mhs-dosen-tampil.component';
import { DatadosentampilComponent } from '../../modules/staff/datadosen/datadosentampil/datadosentampil.component';
import { DatadosentambahComponent } from '../../modules/staff/datadosen/datadosentambah/datadosentambah.component';
import { DatagurutambahComponent } from '../../modules/staff/dataguru/datagurutambah/datagurutambah.component';
import { DatagurutampilComponent } from '../../modules/staff/dataguru/datagurutampil/datagurutampil.component';
import { DatastafftampilComponent } from '../../modules/staff/datastaff/datastafftampil/datastafftampil.component';
import { DatastafftambahComponent } from '../../modules/staff/datastaff/datastafftambah/datastafftambah.component';
import { PenilaiandsnComponent } from '../../modules/penilaian/penilaiandsn/penilaiandsn.component';
import { PenilaianguruComponent } from '../../modules/penilaian/penilaianguru/penilaianguru.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PendaftaranMhsTampilComponent,
    PendaftaranMhsCreateComponent,
    SignupComponent,
    LoginComponent,
    PenilaianMhsGuruTampilComponent,
    PenilaianMhsGuruInputComponent,
    PenilaianMhsDosenInputComponent,
    PenilaianMhsDosenTampilComponent,
    DatadosentampilComponent,
    DatadosentambahComponent,
    DatagurutambahComponent,
    DatagurutampilComponent,
    DatastafftampilComponent,
    DatastafftambahComponent,
    PenilaiandsnComponent,
    PenilaianguruComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    NgMaterialMultilevelMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ]
})
export class DefaultModule { }
