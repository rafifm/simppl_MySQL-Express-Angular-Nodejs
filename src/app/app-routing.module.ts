import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PendaftaranMhsTampilComponent } from './modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { PendaftaranMhsCreateComponent } from './modules/mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { SignupComponent } from './layouts/auth/signup/signup.component';
import { AuthGuard } from './layouts/auth/auth.guard';


const routes: Routes = [{ 
  path: '', 
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'pendaftaranmhstampil',
    component: PendaftaranMhsTampilComponent, canActivate: [AuthGuard]
  }, {
    path: 'pendaftaranmhsbuat',
    component: PendaftaranMhsCreateComponent, canActivate: [AuthGuard]
  }, {
    path: 'login',
    component: LoginComponent
  },] 
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
