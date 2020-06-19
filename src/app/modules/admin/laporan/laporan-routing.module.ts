import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KuotaSekolahComponent } from './kuota-sekolah/kuota-sekolah.component';
import { PenempatanDosenComponent } from './penempatan-dosen/penempatan-dosen.component';
import { PenempatanMahasiswaComponent } from './penempatan-mahasiswa/penempatan-mahasiswa.component';


const routes: Routes = [
  {
    path: 'kuotasekolah',
    component: KuotaSekolahComponent
  }, {
    path: 'penempatandosen',
    component: PenempatanDosenComponent
  }, {
    path: 'penempatanmahasiswa',
    component: PenempatanMahasiswaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaporanRoutingModule { }
