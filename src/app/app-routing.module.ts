import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PendaftaranMhsTampilComponent } from './mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PendaftaranMhsTampilComponent } from './modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { PendaftaranMhsCreateComponent } from './modules/mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { PendaftaranMhsTampiloldComponent } from './mhs/pendaftaran-mhs/pendaftaran-mhs-tampilold/pendaftaran-mhs-tampilold.component';


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
    component: PendaftaranMhsTampilComponent
  }, {
    path: 'pendaftaranmhsbuat',
    component: PendaftaranMhsCreateComponent
  }] 
},
  { path: 'create', component: PendaftaranMhsCreateComponent },
  { path: 'tampil', component: PendaftaranMhsTampiloldComponent },
  { path: 'edit/:postId', component: PendaftaranMhsCreateComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
