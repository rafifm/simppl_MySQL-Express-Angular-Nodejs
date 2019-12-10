import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { PendaftaranMhsTampilComponent } from 'src/app/modules/mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PendaftaranMhsTampilComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgMaterialMultilevelMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class DefaultModule { }
