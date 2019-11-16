import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PendaftaranMhsService } from '../pendaftaran-mhs.service';

@Component({
  selector: "app-pendaftaran-mhs-create",
  templateUrl: "./pendaftaran-mhs-create.component.html",
  styleUrls: ["./pendaftaran-mhs-create.component.css"]
})
export class PendaftaranMhsCreateComponent {
  enteredNama = "";
  enteredNim = "";
  enteredIPK = "";
  enteredNokwitansi = "";

  constructor(public pendaftaranMhsService: PendaftaranMhsService) {}

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    this.pendaftaranMhsService.addPost(form.value.nama, form.value.nim, form.value.ipk, form.value.nokwitansi);
    form.resetForm();
  }

}