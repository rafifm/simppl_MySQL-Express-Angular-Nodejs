import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/layouts/akun/_services/token-storage.service';
import { DosenService } from '../dosen.service';

@Component({
  selector: 'app-dosentampilnilai',
  templateUrl: './dosentampilnilai.component.html',
  styleUrls: ['./dosentampilnilai.component.css']
})
export class DosentampilnilaiComponent implements OnInit {

  nama_mhs = '';
  halaman = 1;
  totalDataPerHalaman = 10;

  dosen: any;
  totalMhs = 0;
  private idPengguna;

  kolomNilai: string[] = ["nama", "nim", "aksi"];

  constructor(
    private dbMhs: DosenService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.ambilDataMhs();
  }

  getRequestParams(searchTitle, halaman, totalDataPerHalaman): any {
    let params = {};

    if (searchTitle) {
      params[`nama_mhs`] = searchTitle;
    }

    if (halaman) {
      params[`page`] = halaman - 1;
    }

    if (totalDataPerHalaman) {
      params[`size`] = totalDataPerHalaman;
    }

    return params;
  }

  ambilDataMhs() {
    const params = this.getRequestParams(this.nama_mhs, this.halaman, this.totalDataPerHalaman);
    this.idPengguna = this.tokenStorage.getPengguna().idPengguna;
    this.dbMhs.ambilDosen(this.idPengguna)
      .subscribe(ambilData => {
        this.dosen = ambilData;
        console.log(this.dosen);
      })
      error => {
        console.log(error);
      }

  }

}
