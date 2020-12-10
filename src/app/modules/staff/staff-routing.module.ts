import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebardosenComponent } from 'src/app/shared/component/sidebar/sidebardosen/sidebardosen.component';
import { SidebarstaffComponent } from 'src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';
import { DatastafftambahComponent } from './datastaff/datastafftambah/datastafftambah.component';
import { StaffdashboardComponent } from './datastaff/staffdashboard/staffdashboard.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SidebarstaffComponent,
        outlet: "sidebarstaff"
      },{
        path: 'dashboardstaff',
        component: StaffdashboardComponent,
      }, {
        path: 'dashboardstaff/:id',
        component: DatadosentambahComponent
      }, {
        path: 'tambahstaff',
        component: DatastafftambahComponent
      }
    ]
  }, {
    path: 'dosen',
    children: [
      {
        path: '',
        component: SidebardosenComponent,
        outlet: 'sidebardosen'
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
