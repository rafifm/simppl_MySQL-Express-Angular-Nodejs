import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LogindosenComponent } from './login/logindosen/logindosen.component';
import { LoginguruComponent } from './login/loginguru/loginguru.component';
import { LoginkaprodiComponent } from './login/loginkaprodi/loginkaprodi.component';
import { LoginmhsComponent } from './login/loginmhs/loginmhs.component';
import { LoginstaffComponent } from './login/loginstaff/loginstaff.component';
import { LoginadminComponent } from './login/loginadmin/loginadmin.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    LogindosenComponent,
    LoginguruComponent,
    LoginkaprodiComponent,
    LoginmhsComponent,
    LoginstaffComponent,
    LoginadminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    AuthRoutingModule
  ],
  exports: [
    LogindosenComponent
  ]
})
export class AuthModule { }
