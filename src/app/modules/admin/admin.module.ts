import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelolaperanComponent } from './kelolaperan/kelolaperan.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    KelolaperanComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
