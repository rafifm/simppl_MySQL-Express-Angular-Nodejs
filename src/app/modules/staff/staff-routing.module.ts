import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarstaffComponent } from 'src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';


const routes: Routes = [
  {
    path: '',
    component: SidebarstaffComponent,
    outlet: 'sidebarstaff'
  }, {
    path: 'tambahdosen/:idLogin',
    component: DatadosentambahComponent
  }, {
    path: 'tampildosen/ubahdata/:id',
    component: DatadosentambahComponent
  }, {
    path: 'tampildosen',
    component: DatadosentampilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
