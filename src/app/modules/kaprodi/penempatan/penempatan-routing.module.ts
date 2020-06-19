import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilihTmptDosenComponent } from './pilih-tmpt-dosen/pilih-tmpt-dosen.component';
import { PilihTmptGuruComponent } from './pilih-tmpt-guru/pilih-tmpt-guru.component';


const routes: Routes = [
  {
    path: 'pilihtempatdosen',
    component: PilihTmptDosenComponent
  }, 
  {
    path: 'pilihtempatguru',
    component: PilihTmptGuruComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenempatanRoutingModule { }
