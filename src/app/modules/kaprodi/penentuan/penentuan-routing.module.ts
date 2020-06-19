import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TambahKuotaComponent } from './tambah-kuota/tambah-kuota.component';
import { TambahSekolahComponent } from './tambah-sekolah/tambah-sekolah.component';


const routes: Routes = [
  {
    path: 'tambahkuota',
    component: TambahKuotaComponent
  }, {
    path: 'tambahsekolah',
    component: TambahSekolahComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenentuanRoutingModule { }
