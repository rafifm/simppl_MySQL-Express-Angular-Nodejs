import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() dataCreated = new EventEmitter();

  onAddPost(){
    const post = {
      nama: this.enteredNama,
      nim: this.enteredNim,
      ipk: this.enteredIPK,
      nokwitansi: this.enteredNokwitansi
    };
    this.dataCreated.emit(post);
  }

}