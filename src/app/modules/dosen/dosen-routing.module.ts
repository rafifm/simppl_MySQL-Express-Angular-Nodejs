import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosentambahnilaiComponent } from './dosentambahnilai/dosentambahnilai.component'
import { DosentampilnilaiComponent } from './dosentampilnilai/dosentampilnilai.component'
import { SidebardosenComponent } from 'src/app/shared/component/sidebar/sidebardosen/sidebardosen.component';

const routes: Routes = [
  {
    path: '',
    component:SidebardosenComponent,
    outlet: 'sidebardosen'
  },
  {
    path: 'tambahnilai',
    component: DosentambahnilaiComponent
  },
  {
    path: 'tampilnilai',
    component: DosentampilnilaiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DosenRoutingModule { }
