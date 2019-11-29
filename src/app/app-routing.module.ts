import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendaftaranMhsTampilComponent } from './mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { PendaftaranMhsCreateComponent } from './mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: PendaftaranMhsTampilComponent },
  { path: 'create', component: PendaftaranMhsCreateComponent },
  { path: 'edit/:postId', component: PendaftaranMhsCreateComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
