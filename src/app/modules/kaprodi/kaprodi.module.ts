import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { PilihTmptDosenComponent } from './penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component';
import { PilihTmptGuruComponent } from './penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component';
import { KaprodiRoutingModule } from './kaprodi-routing.module';
import { TambahKuotaComponent } from './penentuan/tambah-kuota/tambah-kuota.component';
import { TambahSekolahComponent } from './penentuan/tambah-sekolah/tambah-sekolah.component';
import { TampilSekolahComponent } from './penentuan/tampil-sekolah/tampil-sekolah.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilihTmptMhsComponent } from './penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component';
import { TampilanDosenComponent } from './penempatan/tampilan/tampilan-dosen/tampilan-dosen.component';
import { TampilanMhsComponent } from './penempatan/tampilan/tampilan-mhs/tampilan-mhs.component';
import { KaprodiComponent } from './kaprodi.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TampilNilaiComponent } from './nilai-mhs/tampil-nilai/tampil-nilai.component';
import { TambahprofilComponent } from './profil/tambahprofil/tambahprofil.component';

@NgModule({
  declarations: [
    PilihTmptDosenComponent, 
    PilihTmptGuruComponent,
    PilihTmptMhsComponent,
    TambahKuotaComponent,
    TambahSekolahComponent,
    TampilSekolahComponent,
    TampilanDosenComponent,
    TampilanMhsComponent,
    KaprodiComponent,
    TampilNilaiComponent,
    TambahprofilComponent
  ],
  imports: [
    CommonModule,
    KaprodiRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatSelectModule,
    MatTableModule,
    MatExpansionModule,
    SharedModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class KaprodiModule { }
