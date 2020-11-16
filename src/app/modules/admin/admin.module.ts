import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelolaperanComponent } from './kelolaperan/kelolaperan.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    KelolaperanComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
