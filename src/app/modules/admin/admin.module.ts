import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelolaperanComponent } from './kelolaperan/kelolaperan.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from 'src/app/shared/component/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    KelolaperanComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule
  ]
})
export class AdminModule { }
