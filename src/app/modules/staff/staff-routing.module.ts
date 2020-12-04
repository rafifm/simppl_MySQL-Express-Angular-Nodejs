import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarstaffComponent } from 'src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';
import { DatastafftambahComponent } from './datastaff/datastafftambah/datastafftambah.component';
import { StaffdashboardComponent } from './datastaff/staffdashboard/staffdashboard.component';


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
  },{
    path: 'dashboardstaff',
    component: StaffdashboardComponent
  }, {
    path: 'dashboardstaff/:id',
    component: DatadosentambahComponent
  }, {
    path: 'tambahstaff',
    component: DatastafftambahComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
