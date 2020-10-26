import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { AkunRoutingModule } from './akun-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    ProfilComponent
  ],
  imports: [
    CommonModule,
    AkunRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AkunModule { }
