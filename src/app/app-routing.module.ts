import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [{ 
  path: 'dashboard', 
  component: DefaultComponent,
  children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'dosen',
      loadChildren: () => import('./modules/penilaian/dosen/dosen.module').then(m => m.DosenModule)
    }, {
      path: 'guru',
      loadChildren: () => import('./modules/penilaian/guru/guru.module').then(m => m.GuruModule)
    }, {
      path: 'kaprodi',
      loadChildren: () => import('./modules/kaprodi/kaprodi.module').then(m => m.KaprodiModule)
    }, {
      path: 'staff',
      loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule)
    }, {
      path: 'mhs',
      loadChildren: () => import('./modules/mhs/datamhs.module').then(m => m.DatamhsModule)
    }] 
  },{ 
    path: 'auth',
    loadChildren: () => import('./layouts/akun/akun.module').then(m => m.AkunModule)
  }, {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
