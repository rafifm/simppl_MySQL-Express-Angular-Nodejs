import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarstaffComponent } from 'src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component';
import { DatamhstambahComponent } from './datamhs/datamhstambah/datamhstambah.component';
import { DatamhstampilComponent } from './datamhs/datamhstampil/datamhstampil.component';


const routes: Routes = [
  {
    path: '',
    component: SidebarstaffComponent,
    outlet: 'sidebarstaff'
  }, {
    path: 'tambahmhs',
    component: DatamhstambahComponent
  }, {
    path: 'tampilmhs',
    component: DatamhstampilComponent
  }, {
    path: 'tampilmhs/ubahdata/:id',
    component: DatamhstambahComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MhsRoutingModule { }
