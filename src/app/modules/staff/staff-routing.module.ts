import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarstaffComponent } from 'src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { DatagurutambahComponent } from './dataguru/datagurutambah/datagurutambah.component';
import { DatastafftambahComponent } from './datastaff/datastafftambah/datastafftambah.component';
import { DatastafftampilComponent } from './datastaff/datastafftampil/datastafftampil.component';
import { DatagurutampilComponent } from './dataguru/datagurutampil/datagurutampil.component';
import { DatadosentampilComponent } from './datadosen/datadosentampil/datadosentampil.component';


const routes: Routes = [
  {
    path: '',
    component: SidebarstaffComponent,
    outlet: 'sidebarstaff'
  }, {
    path: 'tambahdosen',
    component: DatadosentambahComponent
  }, {
    path: 'tampildosen',
    component: DatadosentampilComponent
  }, {
    path: 'tambahstaff',
    component: DatastafftambahComponent
  }, {
    path: 'tampilstaff',
    component: DatastafftampilComponent
  }, {
    path: 'tambahguru',
    component: DatagurutambahComponent
  }, {
    path: 'tampilguru',
    component: DatagurutampilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
