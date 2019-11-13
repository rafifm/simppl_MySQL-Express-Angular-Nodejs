import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatInputModule, MatCardModule, MatButtonModule } from "@angular/material";

import { AppComponent } from './app.component';
import { PendaftaranMhsCreateComponent } from "./pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component";

@NgModule({
  declarations: [
    AppComponent,
    PendaftaranMhsCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
