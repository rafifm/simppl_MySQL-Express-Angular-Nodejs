import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatInputModule,
  MatSidenavModule, 
  MatDividerModule, 
  MatPaginatorModule, 
  MatTableModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule} from '@angular/material';
import { PendaftaranMhsTampilComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { PendaftaranMhsCreateComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PendaftaranMhsTampilComponent,
    PendaftaranMhsCreateComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    NgMaterialMultilevelMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class DefaultModule { }
