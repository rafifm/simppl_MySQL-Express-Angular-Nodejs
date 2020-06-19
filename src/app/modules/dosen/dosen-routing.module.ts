import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DosentambahnilaiComponent } from './dosentambahnilai/dosentambahnilai.component'
import { DosentampilnilaiComponent } from './dosentampilnilai/dosentampilnilai.component'

const routes: Routes = [
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
