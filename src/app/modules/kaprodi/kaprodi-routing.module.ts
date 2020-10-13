import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilihTmptDosenComponent } from './penempatan/pilih-tmpt-dosen/pilih-tmpt-dosen.component';
import { PilihTmptGuruComponent } from './penempatan/pilih-tmpt-guru/pilih-tmpt-guru.component';
import { TambahKuotaComponent } from './penentuan/tambah-kuota/tambah-kuota.component';
import { TambahSekolahComponent } from './penentuan/tambah-sekolah/tambah-sekolah.component';
import { SidebarkaprodiComponent } from 'src/app/shared/component/sidebar/sidebarkaprodi/sidebarkaprodi.component';
import { TampilSekolahComponent } from './penentuan/tampil-sekolah/tampil-sekolah.component';
import { PilihTmptMhsComponent } from './penempatan/pilih-tmpt-mhs/pilih-tmpt-mhs.component';
import { TampilanMhsComponent } from './tampilan/tampilan-mhs/tampilan-mhs.component';

const routes: Routes = [
  {
    path: '',
    component:SidebarkaprodiComponent,
    outlet: 'sidebarkaprodi'
  }, {
    path: 'pilihtempatdosen',
    component: PilihTmptDosenComponent
  }, {
    path: 'pilihtempatguru',
    component: PilihTmptGuruComponent
  }, {
    path: 'pilihtempatmhs',
    component: PilihTmptMhsComponent
  }, {
    path: 'tambahkuota',
    component: TambahKuotaComponent
  }, {
    path: 'tambahsekolah',
    component: TambahSekolahComponent   
  }, {
    path: 'tampilsekolah',
    component: TampilSekolahComponent   
  }, {
    path: 'tampilsekolah/ubahsekolah/:id',
    component: TambahSekolahComponent   
  }, {
    path: 'tampilmhs',
    component: TampilanMhsComponent   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaprodiRoutingModule { }
