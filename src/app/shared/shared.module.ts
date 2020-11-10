import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { SidebarguruComponent } from './component/sidebar/sidebarguru/sidebarguru.component';
import { SidebardosenComponent } from './component/sidebar/sidebardosen/sidebardosen.component';
import { SidebaradminComponent } from './component/sidebar/sidebaradmin/sidebaradmin.component';
import { SidebarkaprodiComponent } from './component/sidebar/sidebarkaprodi/sidebarkaprodi.component';
import { SidebarstaffComponent } from './component/sidebar/sidebarstaff/sidebarstaff.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarguruComponent,
    SidebardosenComponent,
    SidebaradminComponent,
    SidebarkaprodiComponent,
    SidebarstaffComponent
  ],
  imports: [
    CommonModule,
    NgMaterialMultilevelMenuModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebardosenComponent,
    SidebarkaprodiComponent,
    SidebardosenComponent,
    SidebarguruComponent,
    SidebaradminComponent
  ]
})
export class SharedModule { }
