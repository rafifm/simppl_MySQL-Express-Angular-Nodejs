import { Component, Input } from '@angular/core';

@Component({
  selector: "app-pendaftaran-mhs-tampil",
  templateUrl: "./pendaftaran-mhs-tampil.component.html",
  styleUrls: ["./pendaftaran-mhs-tampil.component.css"]
})
export class PendaftaranMhsTampilComponent {
  // posts = [
  //   {nama: 'mahasiswa satu',nim: '123456', ipk: '3.00', nokwitansi: '789'},
  //   {nama: 'mahasiswa dua',nim: '123457', ipk: '3.00', nokwitansi: '780'},
  //   {nama: 'mahasiswa tiga',nim: '123458', ipk: '3.00', nokwitansi: '781'}
  // ];
  @Input() posts = [];
}