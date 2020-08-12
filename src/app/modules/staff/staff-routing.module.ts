import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarstaffComponent } from 'src/app/shared/component/sidebar/sidebarstaff/sidebarstaff.component';
import { DatadosentambahComponent } from './datadosen/datadosentambah/datadosentambah.component';
import { DatagurutambahComponent } from './dataguru/datagurutambah/datagurutambah.component';
import { DatastafftambahComponent } from './datastaff/datastafftambah/datastafftambah.component';
import { DatastafftampilComponent } from './datastaff/datastafftampil/datastafftampil.component';


const routes: Routes = [
  {
    path: '',
    component: SidebarstaffComponent,
    outlet: 'sidebarstaff'
  },
  {
    path: 'tambadosen',
    component: DatadosentambahComponent
  }, {
    path: 'tambahguru',
    component: DatagurutambahComponent
  }, {
    path: 'tambahstaff',
    component: DatastafftambahComponent
  }, {
    path: 'tampilstaff',
    component: DatastafftampilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
