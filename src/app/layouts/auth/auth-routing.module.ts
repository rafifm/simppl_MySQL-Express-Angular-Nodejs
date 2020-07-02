import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogindosenComponent } from './login/logindosen/logindosen.component';
import { LoginguruComponent } from './login/loginguru/loginguru.component';
import { LoginkaprodiComponent } from './login/loginkaprodi/loginkaprodi.component';
import { LoginmhsComponent } from './login/loginmhs/loginmhs.component';
import { LoginstaffComponent } from './login/loginstaff/loginstaff.component';
import { LoginadminComponent } from './login/loginadmin/loginadmin.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
    children: [
    {
      path: 'dosen',
      component: LogindosenComponent
    },{
      path: 'guru',
      component: LoginguruComponent
    },{
      path: 'kaprodi',
      component: LoginkaprodiComponent
    },{
      path: 'mhs',
      component: LoginmhsComponent
    },{
      path: 'staff',
      component: LoginstaffComponent
    },{
      path: 'admin',
      component: LoginadminComponent
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
