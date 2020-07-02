import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PendaftaranMhsTampilComponent } from './modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { PendaftaranMhsCreateComponent } from './modules/mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { SignupComponent } from './layouts/auth/signup/signup.component';
import { AuthGuard } from './layouts/auth/auth.guard';
import { PenilaianMhsGuruTampilComponent } from './modules/mhs/penilaian-mhs-guru/penilaian-mhs-guru-tampil/penilaian-mhs-guru-tampil.component';
import { PenilaianMhsGuruInputComponent } from './modules/mhs/penilaian-mhs-guru/penilaian-mhs-guru-input/penilaian-mhs-guru-input.component';
import { PenilaianMhsDosenInputComponent } from './modules/mhs/penilaian-mhs-dosen/penilaian-mhs-dosen-input/penilaian-mhs-dosen-input.component';
import { PenilaianMhsDosenTampilComponent } from './modules/mhs/penilaian-mhs-dosen/penilaian-mhs-dosen-tampil/penilaian-mhs-dosen-tampil.component';
import { DatadosentambahComponent } from './modules/staff/datadosen/datadosentambah/datadosentambah.component';
import { DatadosentampilComponent } from './modules/staff/datadosen/datadosentampil/datadosentampil.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { SidebarguruComponent } from './shared/component/sidebar/sidebarguru/sidebarguru.component';


const routes: Routes = [{ 
  path: 'dashboard', 
  component: DefaultComponent,
  children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'pendaftaranmhstampil',
      component: PendaftaranMhsTampilComponent, canActivate: [AuthGuard]
    }, {
      path: 'pendaftaranmhsbuat',
      component: PendaftaranMhsCreateComponent, canActivate: [AuthGuard]
    }, {
      path: 'dosen',
      loadChildren: () => import('./modules/dosen/dosen.module').then(m => m.DosenModule)
    }, {
      path: 'guru',
      loadChildren: () => import('./modules/guru/guru.module').then(m => m.GuruModule)
    }, {
      path: 'kaprodi',
      loadChildren: () => import('./modules/kaprodi/kaprodi.module').then(m => m.KaprodiModule)
    }, {
      path: 'laporan',
      loadChildren: () => import('./modules/admin/laporan/laporan.module').then(m => m.LaporanModule)
    }, {
      path: 'staff',
      loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule)
    }, {
      path: 'nilaigurutampil',
      component: PenilaianMhsGuruTampilComponent
    }, {
      path: 'nilaiguruinput',
      component: PenilaianMhsGuruInputComponent
    },{
      path: 'nilaidoseninput',
      component: PenilaianMhsDosenInputComponent
    },{
      path: 'nilaidosentampil',
      component: PenilaianMhsDosenTampilComponent
    }, {
      path: 'datadosentambah',
      component: DatadosentambahComponent
    }, {
      path: 'datadosentampil',
      component: DatadosentampilComponent
    },] 
  },
  { 
    path: 'login',
    loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)
  },
  { path: 'create', component: PendaftaranMhsCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PendaftaranMhsCreateComponent, canActivate: [AuthGuard] },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
