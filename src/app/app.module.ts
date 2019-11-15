import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { 
  MatInputModule, 
  MatCardModule, 
  MatButtonModule,
  MatToolbarModule, 
  MatExpansionModule
} from "@angular/material";

import { AppComponent } from './app.component';
import { PendaftaranMhsCreateComponent } from "./mhs/pendaftaran-mhs/pendaftaran-mhs-create/pendaftaran-mhs-create.component";
import { HeaderComponent } from './header/header.component';
import { PendaftaranMhsTampilComponent } from './mhs/pendaftaran-mhs/pendaftaran-mhs-tampil/pendaftaran-mhs-tampil.component';

@NgModule({
  declarations: [
    AppComponent,
    PendaftaranMhsCreateComponent,
    HeaderComponent,
    PendaftaranMhsTampilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
