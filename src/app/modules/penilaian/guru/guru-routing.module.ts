import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GurutampbahnilaiComponent } from './gurutampbahnilai/gurutampbahnilai.component';
import { GurutampilnilaiComponent } from './gurutampilnilai/gurutampilnilai.component';
import { SidebarguruComponent } from 'src/app/shared/component/sidebar/sidebarguru/sidebarguru.component';

const routes: Routes = [
  {
    path: '',
    component:SidebarguruComponent,
    outlet: 'sidebarguru'
  },
  {
    path: 'tambahnilai',
    component: GurutampbahnilaiComponent
  },
  {
    path: 'tampilnilai',
    component: GurutampilnilaiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuruRoutingModule { }
